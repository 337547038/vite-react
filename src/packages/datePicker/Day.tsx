import React from 'react'
import classNames from 'classnames'

interface Props {
  value: Date // 显示于面板的值
  defaultDate: Date // 传进来的初始值，在当前面板点击选中时会改变
  type: string
  onClick: (val: Date) => void
  disabledDate?: (val: Date, type: string) => boolean
  innerText?: (val: Date) => string
}

interface Days {
  d: number
  y: number
  m: number
  p?: boolean // 是否为上一个月
  n?: boolean // 下一个月
}

const Day: React.FC<Props> = (props) => {
  const [days, setDays] = React.useState<Days[]>([])
  const [checkedValue, setCheckedValue] = React.useState<Date>(props.defaultDate)
  const getDaysList = (date: Date) => {
    let days = []
    const year = date.getFullYear()
    const month = date.getMonth()
    const time = new Date(year, month, 1)
    // 计算上个月剩多少天
    time.setDate(0) // 切换到上个月的最后一天
    let lastDay = time.getDate() // 当月天数
    const week = time.getDay() // 星期几，前面已切换为上月最后一天，这里表示上个月最后一天是星期几
    let count = week + 1 // 星期天开始
    while (count > 0) {
      days.push({
        d: lastDay - count + 1,
        y: month > 0 ? year : year - 1, // 0为1月，即上一年
        m: month > 0 ? month - 1 : 11,
        p: true
      })
      count--
    }
    // 当前月
    time.setMonth(time.getMonth() + 2, 0) // 切换到当前月份的最后一天，+2是个月了，0再切换到上个月，即当前月
    lastDay = time.getDate() // 当月天数
    for (let i = 1; i <= lastDay; i++) {
      days.push({
        d: i,
        y: year,
        m: month
      })
    }
    // 下个月
    for (let i = 1; days.length < 42; i++) {
      days.push({
        d: i,
        y: month < 11 ? year : year + 1,
        m: month < 11 ? month + 1 : 0,
        n: true
      })
    }
    setDays([...days])
  }
  const isDisabled = (date: Date) => {
    return props.disabledDate && props.disabledDate(date, 'day')
  }
  const dayClass = (item: Days) => {
    // 添加相对应样式，今天、禁用
    let time = new Date(item.y, item.m, item.d)
    let time2 = checkedValue.toDateString() // 这里用初始值，否则选了上下年月，会一直选中一天
    return classNames({
      'calendar-date-out': item.p || item.n, // 非当前月
      'calendar-date-today': time.toDateString() === new Date().toDateString(), // 今天的
      'calendar-date-select': time.toDateString() === time2, // 选中的
      'calendar-date-disabled': isDisabled(time) // 不能选择的
    })
  }
  const selectDay = (item: Days) => {
    const date = new Date(item.y, item.m, item.d)
    if (isDisabled(date)) {
      const date = new Date(item.y, item.m, item.d)
      if (props.type === 'datetime') {
        // 有时分秒选择时不关闭，保存选中值
        setCheckedValue(date)
      } else {
        props.onClick(date)
      }
    }
  }
  const innerText = (item: Days) => {
    const time = new Date(item.y, item.m, item.d)
    return props.innerText && props.innerText(time)
  }
  React.useEffect(() => {
    getDaysList(props.value)
  }, [props.value])
  return (<div className="calendar-days">
    <div className="calendar-week">
      <a>日</a>
      <a>一</a>
      <a>二</a>
      <a>三</a>
      <a>四</a>
      <a>五</a>
      <a>六</a>
    </div>
    <div className="calendar-list">
      {days.map((item: Days, index: number) =>
        <a
          key={index}
          className={dayClass(item)}
          onClick={() => selectDay(item)}
        >
          {item.d}
          {innerText(item) ?
            <span>{innerText(item)}</span> : ''}
        </a>)}
    </div>
  </div>)
}
export default Day
