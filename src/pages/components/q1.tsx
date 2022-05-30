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
import tableData from '../../packages/table/demoJs.json'

//import { TransitionGroup,CSSTransition } from 'react-transition-group';

import type {TableRef} from "../../packages/table/types";

function Example() {
  const columns = [
    {
      type: 'selection',
      fixed: 'left',
      width: '50px',
      className:'cls'
    },
    {
      type: 'index',
      label: '序号',
      width: '50px',
      prop: 'index'
    },
    {
      prop: 'date',
      label: '日期',
      width: '120px'
    },
    {
      prop: 'name',
      label: '姓名',
      width: '150px'
    },
    {
      prop: 'address',
      label: '地址',
      width: '300px'
    },
    {
      prop: 'zip',
      label: '邮箱',
      width: '100px',
      fixed:'right'
    }
  ]
  return (<div className='demo-table'>
    <Table data={tableData} columns={columns} height="200px" width="600px"/>
  </div>)
}

export default Example

