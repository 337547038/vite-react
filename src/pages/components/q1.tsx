import React, {ReactElement, useCallback, useState, useRef, useEffect} from "react";
import {FormItem, Field} from '../../packages/formItem'
import {Input} from '../../packages/input'
import {Form} from '../../packages/form'
import {Button} from "../../packages/button";
import type {FormRef} from "../../packages/form";
import type {FormItemRef} from "../../packages/formItem";
import type {InputRef} from "../../packages/input";
import {RadioGroup} from '../../packages/radio'
import {CheckboxGroup, Checkbox} from '../../packages/checkbox'
import {Switch} from '../../packages/switch'
import {Select} from '../../packages/select'
import {Textarea} from '../../packages/textarea'
import {Table} from '../../packages/table'
import {Dialog} from '../../packages/dialog'
import tableData from '../../packages/table/demoJs.json'

import {CSSTransition} from 'react-transition-group';

import type {TableRef} from "../../packages/table/types";


function Example() {
  const columns = [
    {
      type: 'selection'
    },
    {
      type: 'index',
      label: '序号'
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
      label: '地址',
      tooltip: {show: true, direction: 'left'}
    }
  ]
  return (<div className='demo-table'>
    <Table data={tableData} columns={columns}/>
  </div>)
}


export default Example

