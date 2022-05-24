# Textarea 文本框

### 基本用法

```jsx
import {Textarea} from './index'

function Example() {
  const onChange = (val: string) => {
    console.log(val)
  }
  return (<div className='textarea-demo'>
    <Textarea defaultValue="textarea1" placeholder="placeholder" onChange={onChange} />
  </div>)
}

export default Example
```

### 禁用

```jsx
import {Textarea} from './index'

function Example() {
  return (<div className='textarea-demo'>
    <Textarea defaultValue="不能输入" placeholder="placeholder" disabled={true} />
  </div>)
}

export default Example

```

### 自动高

```jsx
import {Textarea} from './index'

function Example() {
  return (<div className='textarea-demo'>
    <Textarea defaultValue="输入些文字回车换行试试" placeholder="placeholder" />
    <p>设置最大高度</p>
    <Textarea defaultValue="输入些文字回车换行试试" placeholder="placeholder" maxHeight='200px'/>
  </div>)
}

export default Example

```

### 显示输入字数

在使用 `maxLength` 属性限制最大输入长度的同时，可通过设置 `showWordLimit` 属性来展示字数统计

```jsx
import {Textarea} from './index'

function Example() {
  return (<div className='textarea-demo'>
    <Textarea defaultValue="textarea1" placeholder="placeholder" showWordLimit={true} maxLength={10} />
  </div>)
}

export default Example

```

## API

### Textarea

| 参数            | 类型          | 说明                         |
|---------------|-------------|----------------------------|
| defaultValue  | String      | 绑定的值                       |
| autoHeight    | boolean/true | 自动高                        |
| width         | String      | 要带单位px/%                   |
| height        | String      | 要带单位px，设置为`autoHeight`会被覆盖 |
| maxHeight     | String      | 要带单位px                     |
| showWordLimit | boolena/false | 原生属性，最大输入长度                |
| maxLength     | number      | 是否显示输入字数统计                 |
| placeholder   | string      | 输入框点位符                     |
| disabled      | boolean/false | 禁用状态                       |
| readOnly      | boolean/false | 只读状态                       |
| onChange      | function(value,e) | 输入框内容变化时的回调         |
| onFocus       | function(e) | 获取焦点事件                     |
| onBlur        | function(e) | 失去焦点事件                     |

### Input Methods

| 参数       | 说明        |
|----------|-----------|
| focus    | 设置焦点      |
| getValue | 获取当前value |
| clear    | 清空当前输入框的值 |
