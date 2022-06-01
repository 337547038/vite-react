import React from 'react'

interface ObjKey {
  [key: string]: any
}

interface rowColType {
  col: number
  row: number
  colSpan?: number
  rowSpan?: number
}

export interface ColumnsProps {
  prop: string // 参数，同时当key使用
  label?: string // 显示的th名称
  width?: string
  className?: string
  align?: 'left' | 'center' | 'right' // 对齐方式，可选left/center/right
  type?: 'selection' | 'index' // 可选selection（多选）/index序号
  fixed?: 'left' | 'right' // 固定当前列，可选left/right
  sortBy?: boolean // 当前列显示排序按钮
  title?: boolean // 鼠标滑过单元格时是否显示title提示语
  drag?: boolean // 当前单元格允许拖动，仅在table设置drag＝true时有效
  formatter?: (row: ObjKey, col: ColumnsProps, val: string, index: number) => React.ReactNode
  tooltip?: boolean | object //[Boolean, Object],
  tag?: boolean | object //[Boolean, Object]
  children?: ColumnsProps[]
}

export interface Props {
  columns: ColumnsProps[]// 表头数据
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
  rowColSpan?: rowColType[]
  hasChild?: boolean
  lazyLoad?: (row: ObjKey, callback: (child: any) => void) => void
  extendToggle?: boolean // 默认展开扩展
  // sortSingle?: boolean // 单个排序
  pagination?: object // 分页相关参数
  fixedBottomScroll?: boolean | string
  selectClick?: (list: ObjKey[], checked: boolean, row?: ObjKey, index?: number) => void
  sortChange?: (row: ObjKey) => void
  dragChange?: (val: string[]) => void
  expandable?: (row: ObjKey) => any
  scroll?: (top: number, isBottom: boolean) => void
  rowClick?: (row: ObjKey, index: number) => void
  cellClick?: (row: ObjKey, column: ColumnsProps, rowIndex: number, columnIndex: number) => void
}

export interface TableRef {
  toggleSelection: (val: boolean) => void
  getSelectAll: () => void
  toggleRowSelection: (row: any, val: boolean) => void
  clearSort: () => void
}
