import React, {forwardRef, useRef, useImperativeHandle, useState, useContext, useEffect, useCallback} from 'react'
import classNames from 'classnames'

import {prefixCls} from '../prefix'
import {Checkbox} from '../checkbox'

interface Props {
  showHeader?: boolean
  drag?: boolean
  title?: boolean
  selectChecked?: number // 表头checkbox勾选状态0全不选，1全选，2半选
  sortSingle?: boolean
  headMaxLayer?: number
  event: () => void
}

interface TableHeaderRef {
  key: any
}

const TableHeader = forwardRef((props: Props, ref: React.Ref<TableHeaderRef>) => {
  const {
    headMaxLayer = 1,
    selectChecked = 0
  } = props
  const headMaxLayerArr = []
  for (let i = 0; i < headMaxLayer; i++) {
    headMaxLayerArr.push(i.toString())
  }
  const el = useRef(null)
  const [sortBy, setSortBy] = useState({})
  const getColumnsFilter = (index: number) => {
    return getColumns.value.filter((item: any) => {
      return item.type !== 'extend' && item.layer === index
    })
  }
  const getShowHoverTitle = (item: any) => {
    return 'true'
  }
  const headMouseMove = (evt: any, sort: any) => {

  }
  const checkboxChange = () => {

  }
  const headMouseDown = (evt: any, sort: any) => {

  }
  const sortClick = (prop: string, order: string) => {

  }
  return (<thead ref={el}>

  {headMaxLayerArr.map((thLayer: string, index: number) =>
  <tr key={thLayer} className={classNames({drag: props.drag})}>
    {getColumnsFilter(index).map((th: any, thIndex: number) =>
    <th
    key={thIndex}
    className={classNames(th.fixed, th.className)}
    style={{textAlign: th.align}}
    title={getShowHoverTitle(th)}
    colspan={th.colspan}
    rowspan={th.rowspan}
    onMousemove={() => headMouseMove(this, thIndex)}
    >
      {th.type === 'selection' ?
      <Checkbox
      v-model="state.checkboxChecked"
      className={classNames({'some-select': selectChecked === 2})}
      value="1"
      onChange={checkboxChange}
      /> : ''}
      {th.type !== 'selection' ?
      <>
        {/*<table-header
        v-if="th.slots && th.slots.header"
        data="th"
        index="thIndex"
        />*/}
        {/*<span v-else>{{th.label}}</span>*/}
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
      onMouseDown={() => headMouseDown(this, thIndex)}
      /> : ''}
    </th>)}
  </tr>)}
  </thead>)
})
TableHeader.displayName = 'TableHeader'
export default TableHeader
