import React, {forwardRef, useRef, useImperativeHandle, useState, useContext, useEffect, useCallback} from 'react'
import classNames from 'classnames'
import {prefixCls} from '../prefix'
import TableHead from './TableHeader'
import type {TableHeaderRef} from './TableHeader'
import type {Props, TableRef, ColumnsProps} from './types'
import {debounce} from "../util"
import {Checkbox} from "../checkbox";


interface ColumnsPropsAdd extends ColumnsProps {
  _layer: number
  _rowSpan?: number
  _colSpan?: number
  _tProps: string
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
    stateHeight: props.height || ''
  })
  // 已选择的行
  const [selectedRows, setSelectedRows] = useState<any[]>([])
  const tableEl = useRef(null) // 表格
  const tableTh = useRef<TableHeaderRef>(null) // 表头
  const tableDiv = useRef<HTMLDivElement>(null) // 表格外层div
  let selectChecked = 0
  // 表头checkbox勾选状态0全不选，1全选，2半选
  const len = selectedRows.length
  if (len === 0) {
    selectChecked = 0 // 全不选
  } else if (len === props.data.length) {
    selectChecked = 1 // 全选
  } else {
    selectChecked = 2
  }
  // 表头数据处理
  //const maxLayer = useRef<number>(0) // 用于遍历表表头层级
  let maxLayer = 0
  let maxColumn: ColumnsProps[] = []
  const [maxLayerArray, setMaxLayerArray] = useState<number[]>([])
  const [renderColumns, setRenderColumns] = useState<ColumnsProps[]>([]) // 用于遍历表格列数
  const [newColumns, setNewColumns] = useState<ColumnsPropsAdd[]>([]) // 格式化后的表头数据
  const [colWidth, setColWidth] = useState<string[]>([]) // 列宽
  const colWidthTemp: string[] = []
  const temp: ColumnsPropsAdd[] = []
  const formatColumns = debounce(() => {
    console.log('表头数据处理')
    getColumns(props.columns, 0)
    setRenderColumns([...maxColumn])
    setColWidth([...colWidthTemp])
    temp.forEach((item: ColumnsPropsAdd) => {
      if (!item.children) {
        // 没有子级时，计算纵向合并
        const rowSpan = maxLayer - item._layer + 1 // 纵向合并
        if (rowSpan > 1) {
          item._rowSpan = rowSpan
        }
      } else {
        // 计算横向合并
        const colSpan = temp.filter((col: ColumnsPropsAdd) => {
          const prop = col._tProps?.split(',')
          return prop && prop.includes(item.prop) && !col.children
        })
        if (colSpan?.length > 0) {
          item._colSpan = colSpan.length
        }
      }
    })
    setNewColumns([...temp])
    console.log(temp)
    const tempLayer = []
    for (let i = 0; i < maxLayer; i++) {
      tempLayer.push(i + 1)
    }
    setMaxLayerArray(tempLayer)
  })
  const getColumns = (data: ColumnsProps[], layer = 0, tProps = '') => {
    layer++
    if (layer > maxLayer) {
      maxLayer = layer
    }
    data.forEach((item: ColumnsProps) => {
      const prop = item.prop || ''
      const newTProps = tProps ? tProps + ',' + prop : prop
      if (item.children) {
        // 有子级
        getColumns(item.children, layer, newTProps)
      } else {
        maxColumn.push(item)
        colWidthTemp.push(item.width || '')
      }
      temp.push({
        ...item,
        _layer: layer,
        _tProps: newTProps
      })
    })
  }
  // 表头数据处理结束
  // 事件
  // 事件1.td中checkbox勾选事件
  const checkboxChange = (row: any, val: boolean | string, index: number) => {
    let newValue = []
    if (val) {
      // 将当前行追加到已勾选
      newValue = [...selectedRows, row]
    } else {
      const index = selectedRows.indexOf(row)
      selectedRows.splice(index, 1)
      //setSelectedRows([...selectedRows])
      newValue = selectedRows
    }
    setSelectedRows([...newValue])
    props.selectClick && props.selectClick(newValue, val as boolean, row, index)
    //emits('selectClick', state.selectedRows, bool, row, index)
  }
  // 事件2.返回初始勾选状态
  const getSelectCheckbox = (row: any) => {
    return selectedRows.includes(row)
  }
  // 事件3.全选或全不选事件，使用ref调用
  const toggleSelection = (bool: boolean) => {
    // boolean=true全选，false全不选
    if (bool) {
      // 用于多选表格，切换所有行的选中状态，这里应该是将当页面追加进来，实现跨页全选，后面优化
      setSelectedRows([...props.data])
    } else {
      // 用于多选表格，清空用户的选择
      setSelectedRows([])
    }
  }
  // 4.获取当前选中的行,ref
  const getSelectAll = () => {
    return selectedRows
  }
  // 5.事件选中或取消行
  const toggleRowSelection = (row: any, val: boolean) => {
    // 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）row, selected
    const index = selectedRows.indexOf(row)
    if (!val) {
      // 取消勾选当前行
      if (index !== -1) {
        selectedRows.splice(index, 1)
        setSelectedRows([...selectedRows])
      }
    } else {
      // 勾选当前行，没有时添加。有时不重复添加
      if (index === -1) {
        selectedRows.push(row)
        setSelectedRows([...selectedRows])
      }
    }
  }
  // 事件6.用于清空排序
  const clearSort = () => {
    console.log('clearSort')
  }
  // 6.表头全选/拖动列宽/排序等事件
  const tableHeadEvent = (type: string, val: any) => {
    switch (type) {
      case 'checkboxChange':
        toggleSelection(val)
        props.selectClick && props.selectClick(val ? props.data : [], val)
        break
      case 'mouseDown':
        //mouseDown(obj)
        break
      case 'mouseMove':
        // mouseMove(obj)
        break
      case 'sortClick':
        //emits('sortChange', obj)
        break
      default:
    }
  }
  useImperativeHandle(ref, () => ({toggleSelection, getSelectAll, toggleRowSelection, clearSort}))
  // 事件处理结束
  // 鼠标滑过单元格时默认使用title提示
  const showHoverTitle = (showTitle: boolean | undefined, text: string) => {
    if (showTitle === undefined) {
      // 表示columns里没有设置，此时使用table的统一设置
      if (title) {
        return text
      }
    } else if (showTitle) {
      return text
    }
    return ''
  }
  // 固定表头
  const fixedHead = debounce(() => {
    console.log('fixedHead')
    // 如果有高和表头，则固定表头
    if (props.height && showHeader && tableDiv.current) {
      tableDiv.current?.addEventListener('scroll', scrollHandle, false)
    }
    // 目前初始时获取到的表格宽(tableWidth)有问题，需滚动下才能获取实际的宽，加个setTimeout处理
    setTimeout(() => {
      fixedRight(0) // 初始化时横向滚动条在0位置
    }, 0)
  })
  // 固定表头 监听滚动事件
  const scrollHandle = () => {
    const scrollTop = tableDiv.current?.scrollTop || 0
    const scrollLeft = tableDiv.current?.scrollLeft || 0
    tableTh.current?.scrollTop(scrollTop)
    // 左右滚动固定
    const fixedLeft: any = tableDiv.current?.querySelectorAll('.left')
    if (fixedLeft && fixedLeft.length > 0) {
      // left
      if (scrollLeft > 0) {
        for (let i = 0, len = fixedLeft.length; i < len; i++) {
          fixedLeft[i].style.transform = `translateX(${scrollLeft}px) translateZ(91px)`
          fixedLeft[i].style.webkitTransform = `translateX(${scrollLeft}px) translateZ(91px)`
        }
      } else {
        for (let i = 0, len = fixedLeft.length; i < len; i++) {
          fixedLeft[i].style.transform = ''
          fixedLeft[i].style.webkitTransform = ''
        }
      }
    }
    fixedRight(scrollLeft)
  }
  const fixedRight = (scrollLeft: number) => {
    const fixedRight: any = tableDiv.current?.querySelectorAll('.right')
    const tableWidth = tableDiv.current?.querySelector('table')?.offsetWidth || 0
    // 可移动的最大宽
    // div可见宽
    let moveMaxWidth = scrollLeft - (tableWidth - (tableDiv.current?.clientWidth || 0))
    if (fixedRight.length > 0) {
      for (let i = 0, len = fixedRight.length; i < len; i++) {
        fixedRight[i].style.transform = `translateX(${moveMaxWidth}px)translateZ(90px)`
        fixedRight[i].style.webkitTransform = `translateX(${moveMaxWidth}px)translateZ(90px)`
      }
    }
  }
  useEffect(() => {
    formatColumns()
  }, [props.columns])
  useEffect(() => {
    fixedHead()
  }, [])
  return (
  <div
  ref={tableDiv}
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
        {colWidth.map((col: string, index: number) =>
        <col
        key={index}
        width={col}
        className={`column${index}`}
        />
        )}
      </colgroup>
      {showHeader ?
      <TableHead
      ref={tableTh}
      drag={drag}
      title={title}
      layer={maxLayerArray}
      selectChecked={selectChecked}
      columns={newColumns}
      event={tableHeadEvent}/> : ''}
      <tbody>
      {props.data.length === 0 ?
      <tr>
        <td colSpan={renderColumns.length} className="empty">
          {emptyText}
        </td>
      </tr> :
      props.data.map((item: any, index: number) =>
      <tr key={index}>
        {renderColumns.map((col: ColumnsProps) =>
        <td
        className={classNames(col.fixed, col.className)}
        key={col.prop + index}
        title={showHoverTitle(col.title, item[col.prop])}>
          {col.type === 'selection' ?
          <Checkbox
          checked={getSelectCheckbox(item)}
          onChange={checkboxChange.bind(this, item, index)}
          /> :
          col.type === 'index' ? index + 1 :
          col.formatter ? col.formatter(item, col, item[col.prop]) :
          item[col.prop]
          }
        </td>
        )}
      </tr>
      )
      }
      </tbody>
    </table>
  </div>)
})
Table.displayName = 'Table'
export default Table
