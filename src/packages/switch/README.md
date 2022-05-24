# Switch 开关

### 基本用法

```jsx
import {Switch} from "./index"

function Example() {
  const onChange = (val: boolean|string) => {
    console.log(val)
  }
  return (<div className="switch-demo">
    <Switch defaultValue={true} onChange={onChange} />
    <Switch defaultValue={false} onChange={onChange} />
  </div>)
}

export default Example

```

### 自定显示文本

```jsx
import {Switch} from "./index"

function Example() {
  return (<div className="switch-demo">
    <Switch defaultValue={true} openText='开' closeText='关' />
  </div>)
}

export default Example
```

### 禁用

```jsx
import {Switch} from "./index"

function Example() {
  return (<div className="switch-demo">
    <Switch defaultValue={false} disabled={true} />
    <Switch defaultValue={true} disabled={true} />
  </div>)
}

export default Example
```

### 设置开关状态时的颜色

`closeColor`设置关闭状态颜色，`activeColor`设置打开状态颜色

```jsx
import {Switch} from "./index"

function Example() {
  return (<div className="switch-demo">
    <Switch defaultValue={false} closeColor="#999" activeColor="red" />
  </div>)
}

export default Example

```

### 设置开关状态时的值

`closeValue`设置关闭状态时的值，`activeValue`设置打开状态的值

```jsx
import {Switch} from "./index"

function Example() {
  const onChange = (val: boolean|string) => {
    console.log(val)
  }
  return (<div className="switch-demo">
    <Switch defaultValue={false} closeValue="a" activeValue="b" onChange={onChange} />
  </div>)
}

export default Example

```

### 异步控制

`beforeChange`切换前事件，`return false`阻止切换

```jsx
import {Switch} from "./index"

function Example() {
  const beforeChange = () => {
    console.log('阻止选择')
    return false
  }
  return (<div className="switch-demo">
    <Switch defaultValue={false} beforeChange={beforeChange} />
  </div>)
}

export default Example

```

### 大小设置

```jsx
import {Switch} from "./index"

function Example() {
  return (<div className="switch-demo">
    <Switch defaultValue={true} size='large'/>
    <Switch defaultValue={true} size='normal'/>
    <Switch defaultValue={true} size='small'/>
    <Switch defaultValue={true} size='mini'/>
  </div>)
}

export default Example

```

## API

### Switch

| 参数           | 类型            |说明|
|--------------|---------------|--------|
| defaultValue | boolean/false |指定当前是否选中|
| disabled     | boolean/false |是否禁用状态|
| closeColor   | String        |设置关闭时颜色值|
| activeColor  | String        |设置打开时颜色值|
| closeValue   | String        |设置关闭状态时的值|
| activeValue  | String        |设置打开状态时的值|
| beforeChange | Function      |选项改变前事件,return false阻止选择|
| onChange     | function(val) |改变事件|
| openText     | React.node    |自定义显示打开时的内容|
| closeText     | React.node    |自定义显示关闭时的内容|
| size       | String        | 大小尺寸，支持 `large`、`normal`、`small`、`mini` 四种尺寸，默认为 `normal` |
