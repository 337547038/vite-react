# Tag 标签

### 基本使用

由`type`属性来选择`tag`的类型，支持 `default`、`success`、`warning`、`danger`类型，默认为 `default`。

```jsx
import {Tag} from './index'

function Example() {
  return (<div>
    <Tag>标签一</Tag>
    <Tag type="success">标签二</Tag>
    <Tag type="warning">标签三</Tag>
    <Tag type="danger">标签四</Tag>
    <Tag type="danger" color="#fff" bgColor="#c642e7" borderColor="#c642e7">自定样式</Tag>
  </div>)
}

export default Example
```

### 不同尺寸

`Tag` 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

```jsx
import {Tag} from './index'

function Example() {
  return (<div>
    <Tag size="large">默认标签</Tag>
    <Tag size="default">中等标签</Tag>
    <Tag size="small">小型标签</Tag>
    <Tag size="mini">超小标签</Tag>
  </div>)
}

export default Example
```

### 可移除标签

设置`closable`属性可以定义一个标签是否可移除

```jsx
import {Tag} from './index'

function Example() {
  return (<div>
    <Tag closable="true">标签一</Tag>
    <Tag closable="true" type="success">标签二</Tag>
    <Tag closable="true" type="warning">标签三</Tag>
    <Tag closable="true" type="danger">标签3</Tag>
  </div>)
}

export default Example
```

### 动态编辑标签

```jsx
import {useState, useRef} from 'react'
import {Tag} from './index'
import {Input} from '../input'
import type {InputRef} from '../input'

function Example(props, ref) {
  const [list, setList] = useState(['标签一', '标签二', '标签三'])
  const inputRef = useRef < InputRef > (null)
  const closeClick = (index: number) => {
    //list.splice(index, 1)
    console.log(index)
  }
  const handleInputConfirm = (val: string) => {
    if (val) {
      list.push(val)
    }
    setList([...list])
    inputRef.current?.clear()
  }
  const listTag = list.map((obj: string, index: number) =>
    <Tag
      key={obj}
      closable={true}
      onClose={() => closeClick(index)}>{obj}
    </Tag>
  );
  return (<div>
    {listTag}
    <Input size="small" onBlur={handleInputConfirm} ref={inputRef} />
  </div>)
}

export default Example
```

## API

### Tag Props

| 参数        | 类型            | 说明                               |
| ----------- |---------------|----------------------------------|
| type        | string        | 类型，success/default/warning/danger |
| closable    | boolean/false | 是否可关闭                            |
| color       | string        | 字体颜色                             |
| bgColor     | string        | 背景色                              |
| borderColor | string        | 边框颜色                             |
| size        | string        | 尺寸，large / default/small / mini  |
| onClose     | function()    | `closable=true`时的关闭事件            |
| onClick     | function()    | 点击事件                             |
