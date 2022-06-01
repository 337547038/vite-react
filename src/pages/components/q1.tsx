import React, {ReactElement, useCallback, useState, useRef, useEffect} from "react";
import {Table} from '../../packages/table'
import tableData from '../../packages/table/demoJs.json'

function Example() {
  const columns = [
    {
      type: 'selection' as const,
      prop: 'select'
    },
    {
      type: 'index' as const,
      label: '序号',
      prop: 'index'
    },
    {
      prop: 'date',
      label: '日期'
    },
    {
      prop: 'name',
      label: '姓名'
    },
    {
      prop: 'address',
      label: '地址'
    }
  ]
  const rowColSpan = [
    {
      row: 0, // 将第一行第2，3单元格合并
      col: 1,
      colSpan: 2
    },
    {
      row: 0, // 对应于前面将第一行第3单元格设置不显示
      col: 2,
      colSpan: 0
    },
    {
      row: 2,
      col: 3,
      rowSpan: 2
    },
    {
      row: 3,
      col: 3,
      rowSpan: 0
    }
  ]
  return (<div className='demo-table'>
    <Table data={tableData} columns={columns} rowColSpan={rowColSpan} />
  </div>)
}


export default Example

