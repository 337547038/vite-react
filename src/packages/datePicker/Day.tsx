import React from 'react'
import classNames from 'classnames'

interface Props {
  value: Date // 显示于面板的值
  defaultDate: number // 传进来的初始值，在当前面板点击选中时会改变
  type: string
  onClick: (val: Date, type?: string) => void
  disabledDate?: (val: Date, type: string) => boolean
  innerText?: (val: Date) => string
  index: number
}

interface Days {
  d: number
  y: number
  m: number
  p?: boolean // 是否为上一个月
  n?: boolean // 下一个月
}

interface dateTime {
  hours: string
  minutes: string
  seconds: string
}

export interface DayRef {
  reset: () => void
}

const Day = React.forwardRef<DayRef, Props>((props, ref) => {
  const [days, setDays] = React.useState<Days[]>([])
  const [checkedValue, setCheckedValue] = React.useState<number>(props.defaultDate)
  const [dateTime, setDateTime] = React.useState<dateTime>({hours: '', minutes: '', seconds: ''})
  const padStart = (number: number | string) => {
    return `${number}`.padStart(2, '0')
  }
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
    setDateTime({
      hours: padStart(date.getHours()),
      minutes: padStart(date.getMinutes()),
      seconds: padStart(date.getSeconds())
    })
  }
  const isDisabled = (date: Date) => {
    return props.disabledDate && props.disabledDate(date, 'day')
  }
  const dayClass = (item: Days) => {
    // 添加相对应样式，今天、禁用
    const time = new Date(item.y, item.m, item.d)
    const time2 = new Date(checkedValue).toDateString() // 这里用初始值，否则选了上下年月，会一直选中一天
    return classNames({
      'calendar-date-out': item.p || item.n, // 非当前月
      'calendar-date-today': time.toDateString() === new Date().toDateString(), // 今天的
      'calendar-date-select': time.toDateString() === time2, // 选中的
      'calendar-date-disabled': isDisabled(time) // 不能选择的
    })
  }
  const selectDay = (item: Days) => {
    const date = new Date(item.y, item.m, item.d, parseInt(dateTime.hours, 10), parseInt(dateTime.minutes, 10), parseInt(dateTime.seconds, 10))
    if (!isDisabled(date)) {
      // const date = new Date(item.y, item.m, item.d)
      setCheckedValue(date.getTime())
      if (props.type === 'datetime') {
        // 有时分秒选择时不关闭，保存选中值
      } else {
        props.onClick(date)
      }
    }
  }
  const innerText = (item: Days) => {
    const time = new Date(item.y, item.m, item.d)
    return props.innerText && props.innerText(time)
  }
  const selectConfirm = () => {
    let newDate = props.value
    if (checkedValue) {
      newDate = new Date(checkedValue)
    }
    props.onClick(newDate, 'confirm')
  }
  const inputChange = (type: string, evt: React.ChangeEvent, isBlur?: boolean) => {
    const {value} = evt.target as HTMLInputElement
    if (!/[^\d]/g.test(value)) {
      const val = isBlur ? padStart(value) : value
      setDateTime({...dateTime, [type]: val})
    }
  }
  // 焦点事件时全选
  const onFocus = (evt: React.ChangeEvent) => {
    (evt.currentTarget as HTMLInputElement).select()
  }
  /*// 失去焦点会变为两位
  const onBlur = (type: string, evt: React.ChangeEvent) => {
    inputChange(type, evt, true)
  }*/
  const reset = () => {
    setCheckedValue(props.defaultDate)
  }
  React.useImperativeHandle(ref, () => ({reset}))
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
        ><span>
          {item.d}
          {innerText(item) ?
            <i>{innerText(item)}</i> : ''}</span>
        </a>)}
    </div>
    {props.type === 'datetime' || props.type === 'datetimeRange' ?
      <div className="calendar-time">
        <div className="calendar-time-input">
          <input
            value={dateTime?.hours}
            type="text"
            maxLength={2}
            onChange={inputChange.bind(this, 'hours')}
            onFocus={onFocus}
          />:
          <input
            value={dateTime?.minutes}
            type="text"
            maxLength={2}
            onChange={inputChange.bind(this, 'minutes')}
            onFocus={onFocus}
          />:
          <input
            value={dateTime?.seconds}
            type="text"
            maxLength={2}
            onChange={inputChange.bind(this, 'seconds')}
            onFocus={onFocus}
          />
        </div>
        {props.type === 'datetime' || (props.type === 'datetimeRange' && props.index === 1) ?
          <a className="btn-time" onClick={selectConfirm}>确定</a> : ''}
      </div> : ''}
  </div>)
})
Day.displayName = 'Day'
export default Day
