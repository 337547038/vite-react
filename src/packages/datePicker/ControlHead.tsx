import React from 'react'

interface Props {
  activePanel: string // 当前面板
  value: Date
  onChange: (val: Date, position: string, type?: string) => void
  type: string
  position?: 'left' | 'right' // 区间选择时有左右两个
}

const ControlHead: React.FC<Props> = (props) => {
  const {position = 'left'} = props
  if (!props.value) {
    return null
  }
  const year = props.value.getFullYear()
  const month = props.value.getMonth()
  const yearClick = (type: number) => {
    // 前后年切换点击
    // type=0表示减，1表示加
    // 仅在年面板时，+－10，其它时间+-1
    let num = 1
    if (props.activePanel === 'year') {
      num = 10
    }
    if (type === 0) {
      num = -num
    }
    const nextDate = new Date(props.value.setFullYear(year + num))
    props.onChange(nextDate, position)
  }
  const monthClick = (type: number) => {
    // 前后月切换点击，只有在日期面板时显示，年或年月面板不显示
    // type=0表示减，1表示加
    let num = 1
    if (type === 0) {
      num = -num
    }
    const nextDate = new Date(props.value.setMonth(month + num))
    props.onChange(nextDate, position)
  }
  const panelTypeClick = (type: string) => {
    props.onChange(props.value, position, type)
  }
  const isShow = (type: number) => {
    // 0 往前 1 向后
    if (props.type.includes('Range')) {
      // 表示为区间
      if (position === 'left' && type) {
        // 隐藏右边的
        return false
      }
      if (position === 'right' && !type) {
        // 隐藏左边的
        return false
      }
    }
    return true
  }
  return (<div className="calendar-head">
    {isShow(0) ?
      <a className="calendar-prev-year" onClick={() => yearClick(0)}>«</a> : ''}
    {props.activePanel === 'day' ?
      <a
        className="calendar-prev-month"
        onClick={() => monthClick(0)}>‹</a> : ''}
    <span>
      <a className="calendar-year-select" onClick={() => panelTypeClick('year')}>
        {props.activePanel === 'year' ? `${year - 2}年－${year + 8}年` : `${year}年`}
      </a>
      {props.activePanel === 'day' ?
        <a
          className="calendar-year-month"
          onClick={() => panelTypeClick('month')}
        >{month + 1}月</a> : ''}
    </span>
    {props.activePanel === 'day' ?
      <a
        className="calendar-next-month"
        onClick={() => monthClick(1)}>›</a> : ''}
    {isShow(1) ?
      <a className="calendar-next-year" onClick={() => yearClick(1)}>»</a> : ''}
  </div>)
}
export default ControlHead
