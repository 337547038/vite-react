import React, {useState, useEffect, useContext, useRef, createRef} from 'react';
import Test from "./components/test";
import Q1 from "./components/q1";
import Q2 from "./components/q2";
import {BrowserRouter, Link, useParams, useSearchParams, useLocation} from 'react-router-dom';
import {Button} from '../packages/button';
import {Input} from '../packages/input';
import type {InputRef} from '../packages/input';
import {Radio} from '../packages/radio'
import {Checkbox, CheckboxGroup} from '../packages/checkbox'
import type {CheckboxGroupRef} from "../packages/checkbox/Group";
import {Tag} from '../packages/tag'
import {SelectDown} from '../packages/selectDown'
import {Select} from '../packages/select'
import {Switch} from '../packages/switch'
import {Field, FormItem} from '../packages/formItem'

interface ButtonProps {
  name: string
  children?: React.ReactNode
}

const App: React.FC<ButtonProps> = (props) => {
  const myDiv = useRef<InputRef>(null);
  const refEl = useRef<CheckboxGroupRef>(null);
  const [defaultValue, setDefaultValue] = useState(['a3'])
  const [options, setOptions] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [value, setValue] = useState('false')
  const onClick = () => {
    // 模拟加载完成后设置数据
    //console.log('模拟加载完成后设置数据')
    //setDefaultValue(['a5', 'a1', 'a3'])
    //setOptions([...option])
    //setDisabled(true)
    setValue('true')
  }

  const onChange = (val: string[]) => {
    console.log(val)
  }
  const getValue = () => {
    console.log(refEl.current?.getValue())
  }
  const toggleSelect = (val: boolean) => {
    refEl.current?.toggleSelect(val)
  }
  const option = [
    {label: '选项1', value: 1},
    {label: '选项2', value: '2'},
    {label: '选项3', value: '3'},
    {label: '选项4', value: '4', disabled: true},
    {label: '选项5', value: '5'},
    {label: '6'},
    {label: '选项7', value: '77'},
    {label: '选项8', value: '88'},
    {label: '选项9', value: '9'},
    {label: '选项10', value: '10', class: 'red'}
  ]
  const inputData = {defaultValue: 'abc'}
  return (
  <div className="docs-demo">
    <Q1></Q1>

    {/*<Field type="input" data={inputData} onChange={onChange} defaultValue={value} />
    <FormItem label="input" type="input" data={inputData} defaultValue={value} onChange={onChange}/>*/}
    {/*<p><Button onClick={onClick}>模拟数据变化</Button></p>*/}
  </div>)

};
App.displayName = 'testApp'
export default App;

/*
export default forwardRef(App)*/




