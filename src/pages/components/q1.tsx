import React, {ReactElement, useCallback, useState, useRef} from "react";
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
      label: '地址'
    }
  ]
  const layer=2
  return (<div>
    <Table data={tableData} columns={columns}/>
  </div>)
}

export default Example

