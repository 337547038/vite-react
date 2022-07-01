import React, {forwardRef, useRef, useImperativeHandle, useState, useEffect} from 'react'
import {prefixCls} from '../prefix'
import {SelectDown} from '../selectDown'
import type {SelectProps, SelectDownRef} from '../selectDown'
import DayPane from './Day'
import type {DayRef} from './Day'
import YearMonthPane, {YearMonthRef} from './YearMonth'
import ControlHead from "./ControlHead"
import {omit} from "../util";
import type {getValueRef} from '../form/types'
import {FormItemContext} from "../form/contextForm"

interface Props extends Omit<SelectProps, 'defaultValue' | 'multiple' | 'collapseTags' | 'filterable'> {
  defaultValue?: string | string[]
  type?: 'year' | 'month' | 'date' | 'datetime' | 'datetimeRange' | 'dateRange' | 'monthRange' // 下拉面板类型 四种类型，年/年月/年月日/年月日时分秒，range为区间
  format?: string // 显示于输入框的值
  // valueFormat?: string // 实际值
  readonly?: boolean
  disabledDate?: (val: Date, type: string) => boolean
  innerText?: (val: Date) => string
  onChange?: (text: string | string[], val: Date | Date[]) => void
}

/*interface DatePickerRef extends getValueRef {
  key: any
}*/

const DatePicker = forwardRef((props: Props, ref: React.Ref<getValueRef>) => {
  const {readonly = true, type = 'date'} = props
  const [activePane, setActivePane] = useState<string>('day') // 当前下拉显示的面板类型
  const [value, setValue] = useState<Date[]>([]) // 当前值
  const [defaultValue, setDefaultValue] = useState<number[]>([]) // 格式化为时间格式的初始值，不受下拉面板改变而改变
  const [valueShow, setValueShow] = useState<string[]>([]) // 显示在输入框的值
  const isRange = type.includes('Range') // 是否为区间
  const refEl = useRef<SelectDownRef>(null)
  const dayPaneRef = useRef<DayRef>(null)
  const ymRef = useRef<YearMonthRef>(null)
  const useFormItemContext = React.useContext(FormItemContext)
  // 返回两位数，不够在前面加0
  const padStart = (number: number | string) => {
    return `${number}`.padStart(2, '0')
  }
  const formatType = () => {
    let fType = ''
    if (props.format) {
      // 指定了显示的格式时，按指定的返回
      fType = props.format
    } else {
      switch (props.type) {
        case 'year':
          fType = 'y'
          break
        case 'month':
        case 'monthRange':
          fType = 'y-MM'
          break
        case 'date':
        case 'dateRange':
          fType = 'y-MM-dd'
          break
        case 'datetime':
        case 'datetimeRange':
          fType = 'y-MM-dd hh:mm:ss'
          break
        default:
      }
    }
    return fType
  }
  const parseDate = (dateTime: Date, formatType: string): string => {
    if (formatType === 'timestamp') {
      return dateTime.getTime().toString() // 时间戳直接返回
    }
    const m = dateTime.getMonth() + 1
    const d = dateTime.getDate()
    const h = dateTime.getHours()
    const mi = dateTime.getMinutes()
    const s = dateTime.getSeconds()
    const formatObj: any = {
      y: dateTime.getFullYear(),
      M: m,
      MM: padStart(m),
      d: d,
      dd: padStart(d),
      h: h,
      hh: padStart(h),
      m: mi,
      mm: padStart(mi),
      s: s,
      ss: padStart(s),
      w: dateTime.getDay()
    }
    return formatType.replace(/(y|MM|M|dd|d|hh|h|mm|m|ss|s|w)/g, (result) => {
      const value = formatObj[result]
      if (result === 'w')
        return ['日', '一', '二', '三', '四', '五', '六'][value]
      return value
    })
  }
  const isInvalidDate = (val: string) => {
    // 有效时返回有效时间
    const d = new Date(val)
    if (d.toString() !== 'Invalid Date') {
      return d
    }
    // 可能为时间戳，尝试转为数字
    if (!/[^\d]/g.test(val)) {
      const d2 = new Date(parseInt(val, 10))
      if (d2.toString() !== 'Invalid Date') {
        return d2
      }
    }
    // 尝试将年月日中文替换
    const d3 = new Date(val?.replace(/['年'|'月']/g, '-').replace('日', ''))
    if (d3.toString() !== 'Invalid Date') {
      return d3
    }
    console.warn('无效时间:' + val)
    return false
  }
  const getShowValue = (dateString?: string[]) => {
    const date = dateString || props.defaultValue
    // 当时间为空或非法时使用
    let dateValueLeft = new Date()
    let dateValueRight = new Date(new Date().setMonth(dateValueLeft.getMonth() + 1))
    if (type === 'monthRange') {
      // 右边为下一年
      dateValueRight = new Date(new Date().setFullYear(dateValueLeft.getFullYear() + 1))
    }
    // 判断是否为有效时间类型
    //let hasDefault = false
    if (isRange) {
      if (typeof date === 'object' && date.length === 2) {
        const d1 = isInvalidDate(date[0])
        const d2 = isInvalidDate(date[1])
        if (d1 && d2) {
          dateValueLeft = d1
          dateValueRight = d2
          // 有合法值时设置显示的值
          const parse = parseDate(d1, formatType())
          const parse2 = parseDate(d2, formatType())
          setValueShow([parse, parse2])
          setDefaultValue([dateValueLeft.getTime(), dateValueRight.getTime()])
        }
      }
      // 设置下拉面板及初始默认值
      setValue([dateValueLeft, dateValueRight])

      //formatSetValue(dateValueLeft, hasDefault, dateValueRight)
    } else {
      if (typeof date === 'string' && date) {
        const d = isInvalidDate(date)
        if (d) {
          dateValueLeft = d
          const parse = parseDate(d, formatType())
          setValueShow([parse])
          setDefaultValue([dateValueLeft.getTime()])
        }
      }
      setValue([dateValueLeft])
    }
  }
  /*const formatSetValue = (date1: Date, hasDefault = true, date2?: Date) => {
    let fType = ''
    if (props.format) {
      // 指定了显示的格式时，按指定的返回
      fType = props.format
    } else {
      switch (type) {
        case 'year':
          fType = 'y'
          break
        case 'month':
        case 'monthRange':
          fType = 'y-MM'
          break
        case 'date':
        case 'dateRange':
          fType = 'y-MM-dd'
          break
        case 'datetime':
        case 'datetimeRange':
          fType = 'y-MM-dd hh:mm:ss'
          break
        default:
      }
    }
    if (date2) {
      setValue([date1, date2])
      if (hasDefault) {
        const parse = parseDate(date1, fType)
        const parse2 = parseDate(date2, fType)
        setDefaultValue([date1.getTime(), date2.getTime()])
        setValueShow([parse, parse2])
        return [parse, parse2] // 同时将格式化后的值返回，用于onChange事件
      }
    } else {
      setValue([date1])
      if (hasDefault) {
        const parse = parseDate(date1, fType)
        setDefaultValue([date1.getTime()])
        setValueShow([parse])
        return parse
      }
    }
    return ''
  }*/
  // 处理传进来的值
  useEffect(() => {
    getShowValue()
  }, [props.defaultValue])
  const setDefaultPane = () => {
    // 根据类型设置初始下拉面板类型
    if (type === 'year' || type === 'month') {
      setActivePane(type)
    } else if (type === 'monthRange') {
      setActivePane('month')
    } else {
      setActivePane('day')
    }
  }
  useEffect(() => {
    setDefaultPane()
  }, [])
  // 日期面板事件，收起面板并回调事件
  const slideUp = (date: Date[], up = true) => {
    // 返回一个显示的文本值及一个时间值，格式化的文本显示值有可能是不被识别的时间类型
    let label: string[] = []
    let deValue: number[] = []
    if (isRange) {
      if (date?.length === 2) {
        const parse1 = parseDate(date[0], formatType())
        const parse2 = parseDate(date[1], formatType())
        label = [parse1, parse2]
        deValue = [date[0].getTime(), date[1].getTime()]
        //setValueShow(label) // 更新显示值
        //setDefaultValue([date[0].getTime(), date[1].getTime()])
      } else {
        label = []
        deValue = []
        //setDefaultValue([])
      }
    } else {
      if (date?.length === 1) {
        label = [parseDate(date[0], formatType())]
        deValue = [date[0].getTime()]
        // setValueShow([label])
        //setDefaultValue([date[0].getTime()])
      } else {
        label = []
        deValue = []
        //setDefaultValue([])
      }
    }
    setValueShow(label) // 更新显示值
    setDefaultValue(deValue)
    //console.log('slideUp')
    //console.log(label)
    //console.log(date)
    const returnLabel = isRange ? label : label[0] || ''
    props.onChange && props.onChange(returnLabel, date)
    useFormItemContext.controlChange && useFormItemContext.controlChange(returnLabel, 'change')
    // 收起
    setValue(date)
    if (up) {
      refEl.current?.slideUp()
    }
  }
  const rangChecked = useRef<Date[]>([]) // 区间时用于临时存放选择的值，当选择了两个值则收起
  const rangOnChange = (rangChecked: Date[]) => {
    if (rangChecked.length === 2) {
      // 收起，并排序
      if (rangChecked[0] > rangChecked[1]) {
        // 前面的大
        slideUp([rangChecked[1], rangChecked[0]])
      } else {
        slideUp([rangChecked[0], rangChecked[1]])
      }
    } else if (rangChecked.length === 1) {
      // 当选择一个时如需将另外一个选择移除
      /*if (index === 0) {
      }*/
    }
  }
  const onClickDay = (val: Date,index:number, typeClick?: string) => {
    // console.log(val)
    if (isRange) {
      if (type === 'datetimeRange') {
        // 一定是点击确认才能关闭，多次点击rangChecked会超过两个
        if (typeClick === 'confirm') {
          // 点确认，取当前的值和rangChecked最后一个值
          let val1 = new Date()
          if (rangChecked.current.length !== 0) {
            val1 = rangChecked.current[rangChecked.current.length - 1]
          }
          rangOnChange([val1, val])
        } else if(index===0){
          rangChecked.current.push(val)
        }
      } else {
        rangChecked.current.push(val)
        rangOnChange(rangChecked.current)
      }
    } else {
      slideUp([val])
    }
  }
  // 年/年月面板事件
  const onClickYearMonth = (index: number, val: Date) => {
    console.log(val)
    if (type === activePane) {
      slideUp([val])
    } else if (type === 'monthRange') {
      rangChecked.current.push(val)
      rangOnChange(rangChecked.current)
    } else {
      let paneType = ''
      if (activePane === 'year') {
        paneType = 'month'
      }
      if (activePane === 'month') {
        paneType = 'day'
      }
      paneType && setActivePane(paneType)
      value[index] = val
      setValue([...value])
    }
  }
  /** 头部事件
   * @param val 当前时间
   * @param position 位置
   * @param paneType 面板类型切换事件
   * @return
   */
  const controlHeadChange = (index: number, val: Date | string) => {
    if (typeof val === 'string' && !isRange) {
      // 改变下拉面板类型，区间时不能切换
      setActivePane(val)
    } else if (typeof val === 'object') {
      if (isRange) {
        // 这里暂不作联左右两边联动处理
        if (index === 0) {
          setValue([val as Date, value[1]])
        } else if (index === 1) {
          setValue([value[0], val as Date])
        }
      } else {
        setValue([val as Date])
      }
    }
  }
  const toggleClick = (val: boolean) => {
    if (!val) {
      setDefaultPane()
      getShowValue()
      ymRef.current?.reset()
      dayPaneRef.current?.reset()
    }
    // 清空
    rangChecked.current = []
  }
  // 可输入状态失去焦点时，判断值是否合法
  const onBlur = (val: string, index: string) => {
    if (props.readonly || !val) {
      return
    }
    const blurVal = isInvalidDate(val)
    if (blurVal) {
      // 输入合法，关闭下拉
      //console.log('onblur')
      //console.log(blurVal)
      if (isRange) {
        if (index === 'end') {
          // 区间时第二个输入框
          slideUp([value[0], blurVal], false)
        } else {
          slideUp([blurVal, value[1]], false) // 失去焦点时更新相关值，不收起
        }
      } else {
        slideUp([blurVal], false) // 失去焦点时更新相关值，不收起
      }
    } else {
      // 恢复输入显示的值
      setValueShow([...valueShow])
    }
  }
  const onClear = () => {
    if (props.clear) {
      //console.log('onclear')
      slideUp([])
      //setValue([new Date()]) // 清空后这里要设置个默认值，否则下次打开有异常
      getShowValue([])
    }
  }
  // 取值方法，返回输入框显示的值
  const getValue = () => {
    if (isRange) {
      return valueShow
    } else {
      return valueShow.toString()
    }
  }
  useImperativeHandle(ref, () => ({getValue}))
  const newProps = omit(props, ['defaultValue', 'type', 'format', 'disabledDate', 'innerText', 'onChange', 'readonly'])
  return (<SelectDown
    {...newProps}
    icon="date"
    fixedIcon={true}
    filterable={!readonly}
    defaultValue={valueShow}
    toggleClick={toggleClick}
    onBlur={onBlur}
    onClear={onClear}
    isRange={type.includes('Range')}
    ref={refEl}>
    <div className={`${prefixCls}-date-picker`}>
      {value.map((val: Date, index: number) =>
        <div className='calendar' key={index}>
          <ControlHead
            type={type}
            activePanel={activePane}
            value={val}
            position={index === 0 ? 'left' : 'right'}
            onChange={controlHeadChange.bind(this, index)} />
          <div className="calendar-body">
            {activePane === 'day' ? <DayPane
                value={val}
                defaultDate={defaultValue[index]}
                type={type}
                onClick={onClickDay}
                disabledDate={props.disabledDate}
                innerText={props.innerText}
                index={index}
                ref={dayPaneRef} /> :
              <YearMonthPane
                ref={ymRef}
                pane={activePane}
                value={val}
                defaultDate={defaultValue[index]}
                disabledDate={props.disabledDate}
                onClick={onClickYearMonth.bind(this, index)} />
            }
          </div>
        </div>)}
    </div>
  </SelectDown>)
})
DatePicker.displayName = 'DatePicker'
export default DatePicker
