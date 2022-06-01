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
    },
    {
      label: '操作',
      prop: 'control',
      formatter: (row:any) => {
        return (<span onClick={() => row.tExtend()}>{
          row.tStatus ? '收起' : '加载子级'
        }</span>)
      }
    }
  ]
  const lazyLoad = (row:any, resolve:any) => {
    // row 当前点击行信息
    // 模拟请求加载
    console.log('row')
    setTimeout(() => {
      const child = [
        {name: '异步数据1', date: '2021'},
        {name: '异步数据2', date: '2021'}
      ]
      resolve(child)
    }, 500)
  }
  return (<div className='demo-table'>
    <Table data={tableData} columns={columns} hasChild={true} lazyLoad={lazyLoad} height='100px'/>
  </div>)
}


export default Example

