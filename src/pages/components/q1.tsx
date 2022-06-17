import React, {ReactElement, useCallback, useState, useRef, useEffect} from "react";
import {Tabs, TabPane} from '../../packages/tabs'
import {SwitchTransition, CSSTransition} from "react-transition-group";
import {Switch} from '../../packages/switch'
import {DatePicker} from '../../packages/datePicker'
import {SelectDown} from "../../packages/selectDown";

function Example() {
  const [value1, setValue1] = React.useState([])
  const [value2, setValue2] = React.useState('2019-06-01')
  const [value3, setValue3] = React.useState('')
  const onChange = (type: any, val: any) => {
    console.log('')
  }
  return (<div className='demo-date-picker'>
    <div>选择的值：{value1}<br />
      <DatePicker
        defaultValue={value1}
        placeholder="请选择时间"
        onChange={onChange.bind(this, '1')} />
    </div>
    {/*<div>选择的值：{value2}<br />
      <DatePicker defaultValue={value2} placeholder="请选择时间" onChange={onChange.bind(this, '2')} />
    </div>
    <div>选择的值：{value3}<br />
      <DatePicker
        defaultValue={value3}
        placeholder="请选择时间"
        disabled={true}
        onChange={onChange.bind(this, '3')}
      />
    </div>*/}
  </div>)
}

export default Example

