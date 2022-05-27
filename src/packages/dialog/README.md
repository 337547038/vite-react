# Dialog 弹层对话框

### 基本用法

```jsx
import {useState} from 'react'
import {Button} from '../button'
import {Dialog} from './index'

function Example() {
  const [visible, setVisible] = useState<boolean>(false)
  const onClick = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (<div className='demo-dialog'>
    <Button onClick={onClick} type='primary'>open dialog</Button>
    <Dialog title="title" visible={visible} onClose={onClose}>
      <p>窗口内容，可包含任何内容</p>
      <p>就是样式丑了点点</p>
    </Dialog>
  </div>)
}

export default Example

```

### 标题设置

标题可设置，以满足各种不同的使用环境

```jsx
import {useState} from 'react'
import {Button} from '../button'
import {Dialog} from './index'

function Example() {
  const [visible, setVisible] = useState < boolean > (false)
  const onClick = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (<div className='demo-dialog'>
    <Button onClick={onClick} type='primary'>open dialog</Button>
    <Dialog visible={visible} onClose={onClose}>
      <p>这是一个没有设置标题的dialog</p>
      <p>这是一个没有设置标题的dialog</p>
      <p>这是一个没有设置标题的dialog</p>
      <p>这是一个没有设置标题的dialog</p>
      <p>这是一个没有设置标题的dialog</p>
    </Dialog>
  </div>)
}

export default Example

```

### 设定窗宽高

一般情况不需要设`height`，这个高是指弹窗主体内容的高，适用于弹窗内容区需要滚动的时候

```jsx
import {useState} from 'react'
import {Button} from '../button'
import {Dialog} from './index'

function Example() {
  const [visible, setVisible] = useState < boolean > (false)
  const onClick = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (<div className='demo-dialog'>
    <Button onClick={onClick} type='primary'>open dialog</Button>
    <Dialog title='title' visible={visible} width="400px" height="200px" onClose={onClose}>
      <p>设置了宽高的 dialog 弹窗，设定了高时，内容溢出将显示纵向滚动条</p>
      <p style={{height: '200px'}}/>
      <p>设置了宽高的 dialog 弹窗，设定了高时，内容溢出将显示纵向滚动条</p>
    </Dialog>
  </div>)
}

export default Example

```

### 按钮事件

默认下点击按钮是关闭弹窗口的，可通过`beforeClose`接收点击事件，根据实现按需关闭。`callback`同`beforeClose`，`callback`只针对确认事件。`beforeClose
`它将会阻止窗口的关闭事件，需另外调用方法关闭

```jsx
import {useState} from 'react'
import {Button} from '../button'
import {Dialog} from './index'

function Example() {
  const [visible, setVisible] = useState<boolean>(false)
  const [visible2, setVisible2] = useState<boolean>(false)
  const [visible3, setVisible3] = useState<boolean>(false)
  const onClick = () => {
    setVisible(true)
  }
  const onClick2 = () => {
    setVisible2(true)
  }
  const onClick3 = () => {
    setVisible3(true)
  }
  const callback = (close: () => void) => {
    alert('确认关闭')
    close()
  }
  const beforeClose = (type: string, close: () => void) => {
    alert('你点击了' + type + '，可使用return true或使用close方法可关闭')
    // return true
    // close()
  }
  const onClose = (index: number) => {
    switch (index) {
      case 1:
        setVisible(false)
        break
      case 2:
        setVisible2(false)
        break
      case 3:
        setVisible3(false)
        break
    }
  }
  return (<div className='demo-dialog'>
    <Button onClick={onClick} type='primary'>添加确认和取消按钮</Button>
    <Button onClick={onClick2} type='primary'>绑定callback方法</Button>
    <Button onClick={onClick3} type='primary'>绑定beforeClose方法</Button>
    <Dialog
      onClose={() => onClose(1)}
      visible={visible}
      confirm='confirm'
      cancel='cancel'>
      <p>这是按钮的 dialog 弹窗内容</p>
      <p>默认情况下点击按钮后将关闭窗口</p>
    </Dialog>
    <Dialog
      onClose={() => onClose(2)}
      visible={visible2}
      confirm='confirm'
      cancel='cancel'
      callback={callback}>
      <p>绑定callback方法后，点击确定不会关闭弹窗，可使用回调方法手动关闭</p>
    </Dialog>
    <Dialog
      onClose={() => onClose(3)}
      visible={visible3}
      confirm='confirm'
      cancel='cancel'
      beforeClose={beforeClose}>
      <p>绑定callback方法后，点击确定不会关闭弹窗，可使用回调方法手动关闭</p>
    </Dialog>
  </div>)
}

export default Example

```

### 自动关闭

通过设定`autoClose`设置关闭时间，可自动关闭窗。同时可使用`closeTips`修改倒计时提示语

```jsx
import {useState} from 'react'
import {Button} from '../button'
import {Dialog} from './index'

function Example() {
  const [visible, setVisible] = useState < boolean > (false)
  const onClick = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (<div className='demo-dialog'>
    <Button onClick={onClick} type='primary'>open dialog</Button>
    <Dialog title="title" visible={visible} autoClose={10} onClose={onClose}>
      <p>这是的 dialog 弹窗内容</p>
      <p>这是一个会自动关闭的弹窗</p>
    </Dialog>
  </div>)
}

export default Example

```

### footer自定按钮

```jsx
import {useState} from 'react'
import {Button} from '../button'
import {Dialog} from './index'

function Example() {
  const [visible, setVisible] = useState < boolean > (false)
  const onClick = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  const footer = (<div>
    <Button>取消</Button>
    <Button type="primary">确定</Button>
    <Button type="primary">提交</Button>
  </div>)
  return (<div className='demo-dialog'>
    <Button onClick={onClick}>open dialog</Button>
    <Dialog title="title" visible={visible} footer={footer} onClose={onClose}>
      <p>这是的 dialog 弹窗内容</p>
      <p></p>
    </Dialog>
  </div>)
}

export default Example

```

### 可拖动

通过设置`move="true"`可拖动改变窗口位置

```jsx
import {useState} from 'react'
import {Button} from '../button'
import {Dialog} from './index'

function Example() {
  const [visible, setVisible] = useState < boolean > (false)
  const onClick = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (<div className='demo-dialog'>
    <Button onClick={onClick} type='primary'>open dialog</Button>
    <Dialog title="title" visible={visible} move={true} onClose={onClose}>
      <p>这是的 dialog 弹窗内容</p>
      <p>可通过点击标题栏移动窗口位置</p>
    </Dialog>
  </div>)
}

export default Example

```

## API

### Dialog

| 参数           | 类型               | 说明                      |
|--------------|------------------|-------------------------|
| visible      | boolean/false    | 显示隐藏 Dialog             |
| title        | string           | Dialog 的标题，也可通过具名 slot 方式 |
| content      | ReactNode/string | Dialog 的内容    |
| width        | string           | Dialog 的宽度              |
| height       | string           | Dialog 的高度，这里是指弹窗内容区域的高度，溢出时显示滚动条，一般情况下不需要设置 |
| top          | string           | Dialog 距离浏览器顶部的距离，设置了`center`后样式会被覆盖 |
| className    | string           | Dialog 样式名              |
| confirm      | string           | 确认按钮，点击默认关闭窗口           |
| cancel       | string           | 取消按钮，点击默认关闭窗口           |
| beforeClose  | function         | 关闭前的回调，会阻止 Dialog 的关闭。function(type,close),type=close/confirm/cancel/modal 表示点了哪里关闭，close 方法用于关闭 Dialog |
| callback     | function         | 确定回调比较常用而添加，同`beforeClose`，相当于type=confirm，减少对type的判断。根据需求和`beforeClose`二选一使用 |
| modal        | boolean/true     | 是否需要遮罩层                 |
| closeModal   | boolean/true     | 是否可以通过点击 modal 关闭 Dialog |
| appendToBody | boolean/true     | Dialog 自身是否插入至 body 元素上 |
| lockScroll   | boolean/true     | 是否在 Dialog 出现时将 body 滚动锁定 |
| showClose    | boolean/true     | 是否显示关闭按钮，点击默认关闭窗口       |
| move         | boolean/false    | 允许拖动窗口                  |
| autoClose    | number/0         | 自动关闭时间，单位秒。0为不自动关闭      |
| closeTips    | string           | 自动关闭倒计时提示语，默认`S秒后自动关闭`大写S会被替换成实际时间 |
| animation    | string           | 动画样式名，可选`zoom`,`fade`   |
| center       | boolean/true     | 居中对齐                    |
| icon         | number/0         | 用于展示常见的alert提示显示对应的icon图标，1成功，2失败，3提示，4警告。其它的可通过添加样式控制 |
| zIndex       | number           | 弹层的z-index样式            |
|title         | ReactNode        | 标题                      |
|footer        | ReactNode        | 尾部内容                    |
|onClose       | function         | 关闭回调事件，用于更新当前visible    |
