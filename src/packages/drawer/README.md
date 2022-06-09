# Drawer 抽屉对话框

### 基本用法

用法和所有参数同`Dialog`一样

```jsx
import {Button} from '../button'
import {Drawer} from '../drawer'
import React from 'react'

function Example() {
  const [direction, setDirection] = React.useState < string > ('left')
  const [visible, setVisible] = React.useState < boolean > (false)
  const open = (type: string) => {
    setDirection(type)
    setVisible(true)
  }
  return (<div className='demo-dialog'>
    <Button onClick={() => open('left')}>左边</Button>
    <Button onClick={() => open('top')}>项部</Button>
    <Button onClick={() => open('right')}>右边</Button>
    <Button onClick={() => open('bottom')}>底部</Button>
    <Drawer visible={visible} title="title" direction={direction}>this content</Drawer>
  </div>)
}

export default Example

```

## API

### Drawer

|参数|类型|说明|
|----------|--------------|--------|
|direction        | string/right  |显示方向，left/right/top/bottom|
|-                | -             |其他所有参数同[dialog](/#/dialog)|
