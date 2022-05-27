import React, {forwardRef, useRef, useImperativeHandle, useState, useContext, useEffect, useCallback} from 'react'
import classNames from 'classnames'
import {prefixCls} from '../prefix'
import TableHead from './TableHeader'

interface ObjKey {
  [key: string]: any
}

interface Props {
  columns: ObjKey[]// 表头数据
  data: ObjKey[]
  height?: string // table的高，溢出显示滚动条，且表头固定
  width?: string
  className?: string
  hover?: boolean // 鼠标悬停时的高亮
  border?: boolean // 表格纵向边框
  stripe?: boolean // 是否显示间隔斑马纹
  ellipsis?: boolean
  showHeader?: boolean // 是否显示表头
  drag?: boolean // 允许拖动表头
  dragLine?: boolean
  dragWidth?: number[] // 拖动时的最小宽和最大宽限制，0为不限
  title?: boolean //鼠标滑过单元格时显示title提示
  emptyText?: string
  rowColSpan?: () => void
  hasChild?: boolean
  lazyLoad?: () => void
  extendToggle?: boolean // 默认展开扩展
  sortSingle?: boolean // 单个排序
  pagination?: () => void // 分页相关参数
  fixedBottomScroll?: boolean | string
}

export interface TableRef {
  key: any
}

interface StateProps {
  stateHeight: string
  colWidth: string[]
  headMaxLayer: number
}

const Table = forwardRef((props: Props, ref: React.Ref<TableRef>) => {
  const {
    hover = true,
    border = true,
    stripe = true,
    ellipsis = true,
    showHeader = true,
    drag = true,
    dragLine = true,
    dragWidth = [60, 0],
    title = true,
    emptyText = '暂无数据',
    pagination = {}
  } = props
  const [state, setState] = useState({
    stateHeight: props.height || '',
    colWidth: [],
    headMaxLayer: 1,
    selectedRows: [], // 已选择的行
  })
  const tableEl = useRef(null)
  let selectChecked = 0
  // 表头checkbox勾选状态0全不选，1全选，2半选
  const len = state.selectedRows.length
  if (len === 0) {
    selectChecked= 0 // 全不选
  } else if (len === props.data.length) {
    selectChecked= 1 // 全选
  } else {
    selectChecked= 2
  }
  const tableHeadEvent = () => {

  }
  return (
  <div
  className={classNames(prefixCls + '-table', props.className)}
  style={{
    width: props.width,
    height: state.stateHeight,
    overflowY: props.height ? 'auto' : undefined,
    overflowX: props.width ? 'auto' : undefined
  }}
  >
    <table
    ref={tableEl}
    className={
      classNames({
        'no-stripe': !stripe,
        'no-border': !border,
        'no-hover': !hover,
        'no-ellipsis': !ellipsis
      })
    }
    >
      <colgroup>
        {state.colWidth.map((col: string, index: number) =>
        <col
        key={index}
        width={col}
        className={`column${index}`}
        />
        )}
      </colgroup>
      <TableHead
      drag={drag}
      title={title}
      sortSingle={props.sortSingle}
      showHeader={showHeader}
      selectChecked={selectChecked}
      headMaxLayer={state.headMaxLayer}
      event={tableHeadEvent}/>
    </table>
  </div>)
})
Table.displayName = 'Table'
export default Table
