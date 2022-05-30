import React, {forwardRef, useState, useRef, useImperativeHandle} from 'react'
import classNames from 'classnames'
import {Checkbox} from '../checkbox'
import type {ColumnsProps} from "./types";

interface ColumnsPropsAdd extends ColumnsProps {
  _layer: number
  _rowSpan?: number
  _colSpan?: number
  _tProps: string
}

interface Props {
  showHeader?: boolean
  drag?: boolean
  title?: boolean
  selectChecked?: number // 表头checkbox勾选状态0全不选，1全选，2半选
  event: (type: string, val: any) => void
  columns: ColumnsPropsAdd[]
  layer: number[]
}

export interface TableHeaderRef {
  scrollTop: (val: number) => void
}

const TableHeader = forwardRef((props: Props, ref: React.Ref<TableHeaderRef>) => {
  const {
    selectChecked = 0
  } = props

  const [sortBy, setSortBy] = useState<any>({})
  const getShowHoverTitle = (showTitle: boolean | undefined, text: string) => {
    if (showTitle === undefined) {
      // 表示columns里没有设置，此时使用table的统一设置
      if (props.title) {
        return text
      }
    } else if (showTitle) {
      return text
    }
    return ''
  }
  const headMouseMove = (index: number, evt: React.MouseEvent) => {
    //callbackChange('mouseMove', {evt: evt, index: index})
  }
  const headMouseDown = (index: number, evt: React.MouseEvent) => {
    callbackChange('mouseDown', {evt: evt, index: index})
  }
  const checkboxChange = (val: boolean | string) => {
    callbackChange('checkboxChange', val)
  }
  const sortClick = (prop: string, order: string) => {
    const newVal = {...sortBy, [sortBy[prop]]: order}
    setSortBy(newVal)
    callbackChange('sortClick', newVal)
  }
  const callbackChange = (type: string, val: any) => {
    props.event(type, val)
  }
  // 由table组件调用，固定表头滚动时
  const [cssValue, setCssValue] = useState<{ transform?: string; className?: string }>({})
  const scrollTop = (scrollTop: number) => {
    if (scrollTop) {
      setCssValue({
        transform: `translateY(${scrollTop}px) translateZ(100px)`,
        className: 'transform'
      })
    } else {
      setCssValue({
        transform: ``,
        className: ''
      })
    }
  }
  useImperativeHandle(ref, () => ({scrollTop}))
  return (<thead style={{transform: cssValue.transform}} className={classNames(cssValue.className)}>
  {props.layer.map((thLayer: number) =>
  <tr key={thLayer} className={classNames({drag: props.drag})}>
    {props.columns.map((th: ColumnsPropsAdd, thIndex: number) =>
    th._layer === thLayer ?
    <th
    key={thIndex}
    className={classNames(th.fixed, th.className)}
    style={{textAlign: th.align}}
    title={getShowHoverTitle(th.title, th.label || '')}
    colSpan={th._colSpan}
    rowSpan={th._rowSpan}
    onMouseMove={headMouseMove.bind(this, thIndex)}
    >
      {th.type === 'selection' ?
      <Checkbox
      className={classNames({'some-select': selectChecked === 2})}
      checked={selectChecked === 1}
      onChange={checkboxChange}
      /> : ''}
      {th.type !== 'selection' ?
      <>
        {th.label}
        {th.sortBy ?
        <span className="caret-wrapper">
    <i
    className={classNames('sort-caret asc', {active: sortBy[th.prop] === 'asc'})}
    onClick={() => sortClick(th.prop, 'asc')}
    />
    <i
    className={classNames("sort-caret desc", {active: sortBy[th.prop] === 'desc'})}
    onClick={() => sortClick(th.prop, 'desc')}
    />
    </span> : ''}
      </> : ''}
      {props.drag && th.drag ?
      <a
      className="drag-line"
      onMouseDown={headMouseDown.bind(this, thIndex)}
      /> : ''}
    </th> : '')}
  </tr>)}
  </thead>)
})
TableHeader.displayName = 'TableHeader'
export default TableHeader
