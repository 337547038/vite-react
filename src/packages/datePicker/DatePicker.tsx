import React, {forwardRef, useRef, useImperativeHandle, useState, useContext, useEffect, useCallback} from 'react'
import classNames from 'classnames'
import {prefixCls} from '../prefix'
import {SelectDown} from '../selectDown'
import type {SelectProps, SelectDownRef} from '../selectDown'
import DayPane from './Day'
import MonthPane from './Month'
import YearPane from './Year'
import ControlHead from "./ControlHead";
import {omit} from "../util";

interface Props extends Omit<SelectProps, 'defaultValue' | 'multiple' | 'collapseTags' | 'filterable'> {
  defaultValue?: string | string[]
  type?: 'year' | 'month' | 'date' | 'datetime' | 'dateTimeRange' | 'dateRange' | 'monthRange' // 下拉面板类型 四种类型，年/年月/年月日/年月日时分秒，range为区间
  format?: string // 显示于输入框的值
  valueFormat?: string // 实际值
  readonly?: boolean
  disabledDate?: (val: Date, type: string) => boolean
  innerText?: (val: Date) => string
  onChange?: (val: string) => void
}

interface DatePickerRef {
  key: any
}

const DatePicker = forwardRef((props: Props, ref: React.Ref<DatePickerRef>) => {
  const {readonly = true, type = 'date'} = props
  const [activePane, setActivePane] = useState<string>('day') // 当前下拉显示的面板类型
  const [value, setValue] = useState<Date[]>([new Date()]) // 当前值
  const [valueShow, setValueShow] = useState<string[]>([]) // 显示在输入框的值
  // 返回两位数，不够在前面加0
  const padStart = (number: number | string) => {
    return `${number}`.padStart(2, '0')
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
  const getShowValue = () => {
    const date = props.defaultValue
    // 如果当前输入的日期不合法，则清空输入框
    let dateValueLeft = new Date()
    let dateValueRight = new Date(new Date().setMonth(dateValueLeft.getMonth() + 1))
    if (!date || date?.length === 0) {
      if(type.includes('Range')){
        // 区间时有两个值
        setValue([dateValueLeft, dateValueRight])
      }
      return
    }
    let isRange = false
    if (typeof date === 'string') {
      dateValueLeft = new Date(date)
    } else if (typeof date === 'object') {
      isRange = true
      if (date.length > 0) {
        dateValueLeft = new Date(date[0])
      }
      if (date.length > 1) {
        dateValueRight = new Date(date[1])
      }
    }
    if (dateValueLeft?.toString() === 'Invalid Date' || dateValueRight?.toString() === 'Invalid Date') {
      setValueShow([])
      console.log(new Error('日期不合法，清空输入框'))
    } else {
      setValue([dateValueLeft, dateValueRight]) // 修改为当前值入的值
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
            fType = 'y-MM'
            break
          case 'date':
            fType = 'y-MM-dd'
            break
          case 'datetime':
            fType = 'y-MM-dd hh:mm:ss'
            break
          default:
        }
      }
      if (isRange) {
        setValueShow([parseDate(dateValueLeft, fType), parseDate(dateValueRight, fType)])
      } else {
        setValueShow([parseDate(dateValueLeft, fType)])
      }
    }
  }
  // 处理传进来的值
  useEffect(() => {
    getShowValue()
  }, [props.defaultValue])
  const yearPane = (<div></div>)
  const monthPane = (<div></div>)
  const onClick = () => {

  }
  const controlHeadChange = (val: Date, position: string, type?: string) => {
    if (type) {
      // 改变下拉面板类型
      setActivePane(type)
    } else {
      setValue(val)
    }
  }
  const newProps = omit(props, ['defaultValue', 'type', 'format', 'valueFormat', 'disabledDate', 'innerText', 'onChange', 'readonly'])
  return (<SelectDown
    {...newProps}
    icon="date"
    fixedIcon={true}
    filterable={!readonly}
    defaultValue={valueShow}>
    <div className={`${prefixCls}-date-picker`}>
      <div className='calendar'>

      </div>
       <ControlHead
        type={type}
        activePanel={activePane}
        value={value[0]}
        onChange={controlHeadChange} />
      {/*<div className="calendar-body">
        {activePane === 'year' ? <YearPane value={value[0]} /> :
          activePane === 'month' ? <MonthPane value={value[0]} /> :
            <DayPane
              value={value[0]}
              defaultDate={value[0]}
              type={type}
              onClick={onClick}
              disabledDate={props.disabledDate}
              innerText={props.innerText} />}
      </div>*/}
    </div>
  </SelectDown>)
})
DatePicker.displayName = 'DatePicker'
export default DatePicker
