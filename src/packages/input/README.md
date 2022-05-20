# Input 输入框

### 基础用法

```jsx
import {Input} from '../input';

function Example() {
  return (<div className="demo-input">
    <div><Input/></div>
    <div><Input placeholder="请输入内容"/></div>
    <div><Input placeholder="请输入内容" defaultValue={'defaultValue'}/></div>
    <span><Input placeholder="禁用状态" disabled={true}/></span>
  </div>)
}

export default Example

```

### 显示清空按钮

设置`clear="true"`，在输入框不为空时显示清空按钮

```jsx
import {Input} from '../input';

function Example() {
  return (<div>
    <Input
    placeholder="试着输入些什么看看"
    defaultValue="valueClear"
    clear={true}
    />
  </div>)
}

export default Example

```

### 可显示密码明文

`type="password`时设置`showEye="true"`可显示密码明文

```jsx
import {Input} from '../input';

function Example() {
  return (<div>
    <Input
    placeholder="试着输入些什么看看"
    defaultValue="valueClear"
    showEye={true}
    type="password"
    />
  </div>)
}

export default Example

```

### 添加前后缀Icon

可以通过 `prefixIcon` 和 `suffixIcon` 属性在 input 组件首部和尾部增加显示图标。

```jsx
import {Input} from '../input';

function Example() {
  return (<div className="demo-input">
    <div>
      <Input
      placeholder="试着输入些什么看看"
      prefixIcon="icon-user"
      />
    </div>
    <div>
      <Input
      placeholder="请输入内容"
      suffixIcon="icon-search"
      />
    </div>
  </div>)
}

export default Example

```

### 复合型输入框

可前置或后置元素，一般为标签或按钮

```jsx
import {Input} from '../input';
import {Button} from '../button'

function Example() {
  const btnCom = (<Button type={'text'}>验证码</Button>)
  return (<div className="demo-input">
    <div>
      <Input
      placeholder="试着输入些什么看看"
      append=".com"
      />
    </div>
    <div>
      <Input
      placeholder="请输入内容"
      prepend="http://"
      />
    </div>
    <div>
      <Input
      placeholder="请输入内容"
      append={btnCom}
      />
    </div>
  </div>)
}

export default Example

```

### 设置大小

支持 `large`、`normal`、`small`、`mini` 四种尺寸，默认为 normal

```jsx
import {Input} from '../input';

function Example() {
  return (<div className="demo-input">
    <div><Input placeholder="默认尺寸" size="large"/></div>
    <div><Input placeholder="默认尺寸"/></div>
    <div><Input placeholder="sixe=small" size="small"/></div>
    <div><Input placeholder="sixe=mini" size="mini"/></div>
  </div>)
}

export default Example

```

### 事件

```jsx
import {useState, useRef} from 'react';
import {Input} from '../input';
import {Button} from '../button'
import type {InputRef} from '../input';

function Example() {
  const [value, setValue] = useState('')
  const inputEl = useRef < InputRef > (null)
  const onChange = (value: string, evt: React.ChangeEvent) => {
    console.log(value)
    console.log(evt)
    setValue(value)
  }
  const onFocus = (val) => {
    console.log(val)
  }
  const onBlur = (val) => {
    console.log(val)
  }
  const btnClick = () => {
    inputEl.current?.focus()
    console.log('当前值：' + inputEl.current?.getValue())
  }
  return (<div className="demo-input">
    <div>当前输入框的值:{value}<br/><Input placeholder="onChange event" defaultValue={value} onChange={onChange}/></div>
    <div><Input placeholder="onFocus" onFocus={onFocus}/></div>
    <div><Input placeholder="onBlur" onBlur={onBlur}/></div>
    <div><Input placeholder="获取值/焦点事件" ref={inputEl}/><Button type="primary" onClick={btnClick}>获取焦点</Button></div>
  </div>)
}

export default Example

```

## API

### Input Props

| 参数          | 类型           | 说明                 |
|-------------|--------------|--------------------|
| defaultValue  | string       | 默认初始输入框的值          |
| placeholder | string       | 输入框点位符             |
| disabled    | boolean/false | 禁用状态               |
| disabled    | boolean/false | 禁用状态               |
| readOnly    | boolean/false | 只读状态               |
| readOnly    | boolean/false | 只读状态               |
| maxLength   | number       | 输入最大长度             |
| type        | string       | 文本框类型，默认text       |
| width       | string       | 设置宽度属性             |
| size        | string       | 支持 `large`、`normal`、`small`、`mini` 四种尺寸，默认为 `normal` |
| prefixIcon  | string       | 前缀icon图标           |
| suffixIcon  | string       | 后缀icon图标           |
| prepend     | string/ReactNode | 前缀                 |
| append      | string/ReactNode | 后缀                 |
| onChange      | function(value,e) | 输入框内容变化时的回调        |
| onFocus      | function(value,e) | 获取焦点事件             |
| onBlur      | function(value,e) | 失去焦点事件             |

### Input Methods

| 参数       | 说明        |
|----------|-----------|
| focus    | 获取焦点      |
| getValue | 获取当前value |
| clear    | 清空当前输入框的值 |
