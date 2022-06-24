import React from 'react'
import classNames from 'classnames'

interface Props {
  value: Date // 显示于面板的值
  defaultDate: number // 时间戳
  onClick: (val: Date) => void
  disabledDate?: (val: Date, type: string) => boolean
  pane: string
}

export interface YearMonthRef {
  reset: () => void
}

const YearMonth = React.forwardRef<YearMonthRef, Props>((props, ref) => {
  const {pane = 'year'} = props
  const [checkedValue, setCheckedValue] = React.useState<number>(props.defaultDate)
  let list: string[] = []
  if (pane === 'year') {
    // 每次显示十年，显示前面四年，后面7年
    const year = props.value.getFullYear()
    for (let i = year - 4; i <= year + 7; i++) {
      list.push(i.toString())
    }
  } else if (pane === 'month') {
    list = [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月'
    ]
  }
  const isDisabled = (date: Date) => {
    return props.disabledDate && props.disabledDate(date, pane)
  }
  const getClass = (item: string, index: number) => {
    // console.log(item)
    let time = new Date(item)
    const defaultDate = new Date(checkedValue)
    let dateSelect = item === defaultDate.getFullYear().toString() // 年
    const current = new Date()
    let today = time.getFullYear() === current.getFullYear()
    if (pane === 'month') {
      time = new Date(props.value.getFullYear(), index)
      if (props.value.getFullYear() === defaultDate.getFullYear()) {
        // 年相同时才存在选中的月分
        dateSelect = index === defaultDate.getMonth()
      }
      const fullYear = props.value.getFullYear()
      today = (current.getFullYear().toString() + current.getMonth()) === (fullYear.toString() + index)
    }
    return classNames({
      'calendar-date-today': today, // 当年或当前月
      'calendar-date-select': dateSelect,
      'calendar-date-disabled': isDisabled(time) // 不能选择的
    })
  }
  const selectDate = (year: string, index: number) => {
    let time = new Date(year)
    if (pane === 'month') {
      time = new Date(
        props.value.getFullYear(),
        index
      )
    }
    // 点击后更新当前组件默认值，可展示选中样式
    // console.log(time)
    if (!isDisabled(time)) {
      setCheckedValue(time.getTime())
      props.onClick(time)
    }
  }
  const reset = () => {
    // setCheckedValue(props.defaultDate)
  }
  React.useEffect(() => {
    setCheckedValue(props.defaultDate)
  }, [props.defaultDate])
  React.useImperativeHandle(ref, () => ({reset}))
  return (<div className={classNames({'calendar-year': pane === 'year', 'calendar-months': pane === 'month'})}>
    {list.map((item: string, index: number) =>
      <a
        key={item}
        className={getClass(item, index)}
        onClick={() => selectDate(item, index)}
      >{item}</a>
    )}
  </div>)
})
YearMonth.displayName = 'YearMonth'
export default YearMonth
