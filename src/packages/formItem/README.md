# FormItem 表单集合

强大的校验功能，使用简单快捷

### 基本使用

```jsx
import {FormItem} from './index'
import {Input} from '../input'

function Example() {
  return (
    <div className='form-item-demo'>
      <FormItem label="title">
        <Input placeholder="请输入" />
      </FormItem>
      <FormItem label="title">
        <Input defaultValue="value" />
      </FormItem>
    </div>)
}

export default Example
```

### 校验

使用`rules`规则校验

```jsx
import {FormItem} from './index'
import {Input} from '../input'

function Example() {
  const rules = [
    {type: 'tips', msg: '获取焦点提示信息'},
    {type: 'required', msg: '必填项'},
    {type: 'number', msg: '只能输入数字'}
  ]
  return (
    <div className='form-item-demo'>
      <FormItem label="title" rules={rules}>
        <Input placeholder="请输入" />
      </FormItem>
      <FormItem label="title" rules={rules} trigger="blur">
        <Input placeholder="失去焦点校验" />
      </FormItem>
    </div>)
}

export default Example
```

### 快速校验

对于大量的表单验证不需要精确提示时，如验证为空时统一提示为必填字段，可通过设置`verify`，多个用逗号隔开，也可同时和`rules`规则校验一起使用

```jsx
import {FormItem} from './index'
import {Input} from '../input'

function Example() {
  const rules = [
    {type: 'tips', msg: '获取焦点提示信息'},
    {type: 'required', msg: '必填项'},
    {type: 'number', msg: '只能输入数字'}
  ]
  return (
    <div className='form-item-demo'>
      <FormItem label="title" verify="mobile">
        <Input placeholder="手机号验证" />
      </FormItem>
      <FormItem label="tel" rules={rules} verify="mobile">
        <Input placeholder="手机号和必填验证" />
      </FormItem>
    </div>)
}

export default Example
```

### 自定义验证规则

```jsx
import {useRef} from 'react'
import {FormItem} from './index'
import {Input} from '../input'
import {Button} from '../button'
import type {FormItemRef} from '../formItem'

function Example() {
  const rules = [
    {type: 'required', msg: '年龄不能为空'},
    {
      type: 'rule',
      msg: '年龄必须大于1岁，且不能超过120岁',
      rule: '/^(?:[1-9][0-9]?|1[01][0-9]|120)$/'
    }
  ]
  const formItemRef = useRef < FormItemRef > (null)
  const submit = () => {
    // console.log(formItemRef.current)
    formItemRef.current?.validate()
      .then((res) => {
        console.log(res)
      })
      .catch((res) => {
        console.log(res)
      })
  }
  return (
    <div className='form-item-demo'>
      <FormItem label="title" rules={rules} ref={formItemRef}>
        <Input placeholder="请输入年龄" />
      </FormItem>
      <Button onClick={submit}>submit</Button>
    </div>)
}

export default Example
```

### 回调验证

```jsx
import {useState} from 'react'
import {FormItem} from './index'
import {Input} from '../input'

function Example() {
  const [value, setValue] = useState('')
  const rules = [
    {type: 'required', msg: '密码不能为空'},
    {
      type: 'fn',
      msg: '两次输入的密码不一致',
      validator: (val: string) => {
        return val === value
      }
    }
  ]
  const onChange = (val: string) => {
    setValue(val)
  }
  return (
    <div className='form-item-demo'>
      <FormItem label="password" verify="required">
        <Input placeholder="请输入密码" onChange={onChange} />
      </FormItem>
      <FormItem label="password" rules={rules}>
        <Input placeholder="请再次输入密码" />
      </FormItem>
    </div>)
}

export default Example
```

### 快速输入常见组件类型

支持类型 `'input'、'radio'、'checkbox'、'datePicker'、'select'、'switch'、'textarea'、'timeSelect'、'timePicker'`

```jsx
import {FormItem} from './index'

function Example() {
  const inputData = {defaultValue: 'abc'}
  const selectData = {defaultValue: '112', options: [{label: '选项1', value: '1'}], placeholder: '请选择12'}
  const onChange = (val:string) => {
    console.log(val)
  }
  return (
    <div className='form-item-demo'>
      <FormItem label="input" type="input" data={inputData} onChange={onChange}/>
      <FormItem label="select" type="select" data={selectData} />
    </div>)
}

export default Example
```

### 可单独使用`Field`

可使用data.defaultValue对控件设置值，即多个常用组件的集合，不需要在页面导入各表单组件

```text
<Field type="input" /> 等于 <Input / >
```

```jsx
import {Field} from './index'

function Example() {
  const inputData = {defaultValue: 'abc'}
  const selectData = {defaultValue: '1', options: [{label: '选项1', value: '1'}], placeholder: '请选择'}
  const onChange = (val:string) => {
    console.log(val)
  }
  return (
    <div className='form-item-demo'>
      <Field type="input" data={inputData} onChange={onChange}/>
      <Field type="select" data={selectData} />
    </div>)
}

export default Example
```

## API

### FormItem Props

| 参数           | 类型            | 说明 |
|--------------|---------------|----|
| label        | string        | 显示的标签名 |
| labelVisible | boolean/false | 隐藏label |
| prop         | string        | 表单校验时关联表单的校验规则 |
| required     | boolean/true  | 是否根据验证规则自动生成必填样式名 |
| verify       | string        | 快速验证，支持required, mobile, tel, mail, digits, number,phone 多个用逗号隔开 |
| rules        | array         | 校验规则 |
| showMessage  | boolean/true  | 显示错误提示，在form使用时，优先使用form的设置 |
| trigger      | string/change | change和blur两种，在form使用时，优先使用form的设置 |
| labelWidth   | string        | label的宽度 |
| size         | string        | 用于控制该表单内组件的尺寸,支持 `large`、`normal`、`small`、`mini` 四种尺寸，默认为 `normal` |
| error        | string        | 表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息 |
| type         | string        | 可快速输出控件类型，可选`input、radio、checkbox、datePicker、select、switch、textarea、timeSelect、timePicker` |
| data         | Object        | 仅在type不为空时，对应当前组件的props所有参数 |
| defaultValue | any           | 仅在type不为空时，当前控件的值 |
| onChange     | function      | 使用type类型时，控件改变事件 |
| other        | ReactNode     | formItem后面预留的位置，可用作其他提示 |

### FormItem Rules 验证规则

|类型|说明|
|----------|--------------|
|required       |为空|
|maxLength      |最大字符|
|minLength      |最小字符|
|mobile         |手机号格式|
|tel            |固话|
|phone          |固话或手机|
|mail           |邮箱格式|
|digits         |正整数|
|number         |数字|
|tips           |获得焦点且值为空时显示输入提示|
|rule           |自定义验证规则|
|fn             |回调验证|

### FormItem Methods

| 参数       | 说明                          |
|-----------|-----------------------------|
| validate  | 对单个表单项进行校验的方法，Promise返回验证结果 |
| clearTips | 用于清空验证提示信息，恢复初始状态           |
| getValue  | 获取当前组件值                     |

### Field Props

| 参数           | 类型 | 说明                         |
|--------------|--|-------------------------------------------|
| type         | string | 可快速输出控件类型，可选`input、radio、checkbox、datePicker、select、switch、textarea、timeSelect、timePicker` |
| data         | Object | 对应当前组件的props所有参数|
| defaultValue | any    | 仅在type不为空时，当前控件的值 |
| onChange     | function | 控件改变事件 |

### Field Methods

| 参数       | 说明       |
|-----------|-------------|
| getValue  | 获取当前组件值     |
