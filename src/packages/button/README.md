# Button 按钮

### 基础用法

按钮支持 `default`、`primary`、`success`、`warning`、`danger`、`text` 六种类型，默认为 `default`。

```jsx
import {Button} from './index'

const Example = () => {
  return (
    <div className="demo-button">
      <div className="row">
        <Button name="name123">默认按钮</Button>
        <Button type="primary">主要按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="danger">危险按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="text">文字按钮</Button>
      </div>
      <div className="row">
        <Button round="true">默认按钮</Button>
        <Button round="true" type="primary">主要按钮</Button>
        <Button round="true" type="success">成功按钮</Button>
        <Button round="true" type="danger">危险按钮</Button>
        <Button round="true" type="warning">警告按钮</Button>
        <Button round="true" type="text">文字按钮</Button>
      </div>
      <div className="row">
        <Button plain="true">默认按钮</Button>
        <Button plain="true" type="primary">主要按钮</Button>
        <Button plain="true" type="success">成功按钮</Button>
        <Button plain="true" type="danger">危险按钮</Button>
        <Button plain="true" type="warning">警告按钮</Button>
        <Button plain="true" type="text">文字按钮</Button>
      </div>
    </div>
  );
};
export default Example;
```

### 禁用状态

使用`disabled="true"`禁用

```jsx
import {Button} from './index'

const Example = () => {
  return (
    <div className="demo-button">
      <Button disabled={true}>默认按钮</Button>
      <Button disabled={true} type="primary">确认按钮</Button>
      <Button disabled={true} type="success">取消按钮</Button>
      <Button disabled={true} type="text">文字按钮</Button>
    </div>
  );
};
export default Example;
```

### 按钮尺寸

支持 `large`、`normal`、`small`、`mini` 四种尺寸，默认为 normal

```jsx
import {Button} from './index'

const Example = () => {
  return (
    <div className="demo-button">
      <div className="row">
        <Button size="large" type="primary">大号按钮</Button>
        <Button type="primary">正常按钮</Button>
        <Button size="small" type="primary">小号按钮</Button>
        <Button size="mini" type="primary">迷你按钮</Button>
      </div>
      <div className="row">
        <Button size="large" type="primary" round="true">大号按钮</Button>
        <Button type="primary" round="true">正常按钮</Button>
        <Button size="small" type="primary" round="true">小号按钮</Button>
        <Button size="mini" type="primary" round="true">迷你按钮</Button>
      </div>
    </div>
  );
};
export default Example;
```

### 带 Icon 图标

```jsx
import {Button} from './index'

const Example = () => {
  return (
    <div className="demo-button">
      <Button icon="search">默认按钮</Button>
      <Button icon="search" type="primary">确认按钮</Button>
      <Button icon="search" type="success">成功按钮</Button>
      <Button icon="search" type="text">文字按钮</Button>
    </div>
  );
};
export default Example;
```

### 带路由或链接地址

```jsx
import {Button} from './index'

const Example = () => {
  return (
    <div className="demo-button">
      <Button href="/button">默认按钮</Button>
      <Button href="/button" type="primary">确认按钮</Button>
      <Button href="/button" type="success">成功按钮</Button>
      <Button href="/button" type="text">文字按钮</Button>
    </div>
  );
};
export default Example;
```

## API

### Button Props

| 参数       | 类型            | 说明                            |
| ---------- |---------------|-------------------------------|
| type       | String        | 类型，实际是给按钮添加类名，支持`default`、`primary`、`success`、`warning`、`danger`、`text` |
| size       | String        | 大小尺寸，支持 `large`、`normal`、`small`、`mini` 四种尺寸，默认为 `normal` |
| width      | String        | 按钮宽                           |
| round      | boolean/false | 是否圆角按钮                        |
| plain      | boolean/false | 是否为朴素按钮                       |
| href       | String        | 路由跳转地址，输出路由标签Link             |
| disabled   | boolean/false | 是否禁用状态                        |
| icon       | String        | 前缀 icon                       |
| loading    | boolean/false | 是否加载中状态                       |
| nativeType | String        | 原生 type 属性，button / submit / reset |
| onClick    | Function      | 点击按钮时的回调                      |


