# Tooltip 提示

### 基本用法

```jsx
import {Tooltip} from './index'

function Example() {
  return (<div className='demo-tooltip'>
    <div className="demo">
      <Tooltip content="这是提示内容这是提示内容">上左</Tooltip>
      <Tooltip
      content="这是提示内容这是提示内容，direction='top'"
      direction="top">上边</Tooltip>
      <Tooltip
      content="这是提示内容direction='top-right'"
      direction="top-right">上右</Tooltip>
    </div>
    <div className="demo">
      <Tooltip direction="left" content="这是提示内容direction=left">
        左边
      </Tooltip>
      <span></span>
      <Tooltip direction="right" content="这是提示内容direction=right">
        右边</Tooltip>
    </div>
    <div className="demo">
      <Tooltip
      direction="bottom-left"
      content="这是提示内容direction=bottom-left">下左</Tooltip>
      <Tooltip direction="bottom" content="这是提示内容direction=bottom">下边</Tooltip>
      <Tooltip
      direction="bottom-right"
      content="这是提示内容direction=bottom-right">下右</Tooltip>
    </div>
  </div>)
}

export default Example
```

### 多文字自动换行

可通过设置最大宽度自动换行

```jsx
import {Tooltip} from './index'

function Example() {
  return (<div className='demo-tooltip'>
    <div className="demo">
      <Tooltip
      content="提示语的左边位置跟当前标签对齐，如提示语X轴位置到浏览器右边的距离小于最大宽，将以最小宽显示并换行"
      >上左</Tooltip
      >
      <Tooltip
      content="上边提示是根据是根据当前标签中间位置，向左偏移50%实现居中，如果当前标签到浏览器右边的距离小于最大宽时，实际显示宽为到边浏览器右边的距离，并不是最大宽"
      direction="top"
      >上边</Tooltip>
      <Tooltip
      content="这里跟上左类型，计算的是到浏览器左边的距离"
      direction="top-right"
      maxWidth={200}
      >上右</Tooltip
      >
    </div>
    <div className="demo">
      <Tooltip direction="left" content="受当前标签到浏览器左边的距离影响">
        左边
      </Tooltip>
      <span></span>
      <Tooltip
      direction="right"
      content="受当前标签到浏览器左边的距离影响"
      maxWidth={200}
      >右边</Tooltip
      >
    </div>
    <div className="demo">
      <Tooltip
      direction="bottom-left"
      content="这是提示内容，如果内容超过设定的最大宽时则自动换行。"
      >下左</Tooltip
      >
      <Tooltip
      direction="bottom"
      content="这是提示内容，如果内容超过设定的最大宽时则自动换行。如果内容超过设定的最大宽时则自动换行"
      ><span>下边</span></Tooltip
      >
      <Tooltip
      direction="bottom-right"
      content="这是提示内容，如果内容超过设定的最大宽时则自动换行。这是提示内容，如果内容超过设定的最大宽时则自动换行。"
      ><span>下右</span></Tooltip
      >
    </div>
  </div>)
}

export default Example
```

### 支持多种效果

可自定样式

```jsx
import {Tooltip} from './index'
import {Button} from '../button'

function Example() {
  return (<div className='demo-tooltip'>
    <Tooltip content="这里是提示文字，因为icon比较小，可使用x微调" x={-10}>
      <i className="tooltip-icon">?</i>
    </Tooltip>
    <Tooltip content="这里是提示文字。使用x轴微调将箭头和icon对齐" x={-10}><i className="tooltip-icon">?</i></Tooltip>
    <Tooltip content="这里是提示文字。使用x轴微调将箭头和icon对齐" x={-10}
    >
      <Button type="primary">按钮形式</Button>
    </Tooltip>
  </div>)
}

export default Example
```

### 固定显示

```jsx
import {Tooltip} from './index'

function Example() {
  return (<div className='demo-tooltip'>
    <Tooltip content="一直都显示的" always={true} direction="top">
      <span>always</span>
    </Tooltip>
  </div>)
}

export default Example
```

### 设置延时关闭

通过`delay`设置延时关闭，可将鼠标移至提示语上，例如实现提示语上的点击事件

```jsx
import {Tooltip} from './index'
import {Button} from '../button'

function Example() {
  return (<div className='demo-tooltip'>
    <Tooltip direction="top" delay={300} content='这里是提示内容，鼠标可以移动到上面，提示内容不会消失，可实现从这里点击跳转链接等'>
      <Button>设置延时关闭</Button>
    </Tooltip>
  </div>)
}

export default Example
```

## API

### Tooltip Props

| 参数           | 类型            | 说明                        |
|--------------|---------------| --------------------------- |
| content      | String        | 显示的内容，也可以是 slot   |
| direction    | String        | 显示方向。有 top-left、top、top-right、left、right、bottom-left、bottom、bottom-right 共 8 个方向，默认 top-left |
| maxWidth     | Number/500    | 最大显示宽                  |
| delay        | Number/0      | 延时关闭时间，单位毫秒。主要是为了能让鼠标移到提示文字上面，实现点链接等 |
| always       | Boolean/false | 是否总是可见                |
| x            | Number        | 弹出窗距离触发点 x 轴方向的距离，可用于微调距离 |
| y            | Number        | 弹出窗距离触发点 y 轴方向的距离，可用于微调距离 |
| transition   | String        | 自定义显示隐藏过渡动画名称，需要手动添加相应的 css 样式 |
| appendToBody | Boolean/true  | 提示内容是否插入到 body     |
| className    | String        | 自定样式类名                |
| trigger      | String/hover  | 事件触发方式，hover/click 两种 |
| onClick      | fn            | 点击事件，trigger=click 时 |
