# Message 信息弹窗

为方便使用，定义了`Alert`,`Msg`,`Success`,`Fail`,`Info`以适应不同场景，如果需要弹出较为复杂的内容，请使用 `Dialog`。

### Alert

```jsx
import {Button} from '../button'
import {Message} from './index'

function Example() {
  const onClick = (type: string) => {
    Message.Alert('这是alert的内容', {icon: type})
  }
  return (<div className='demo-Message'>
    <Button onClick={() => onClick('1')} type='primary'>Alert 成功</Button>
    <Button onClick={() => onClick('2')} type='primary'>Alert 失败</Button>
    <Button onClick={() => onClick('3')} type='primary'>Alert 警告</Button>
  </div>)
}

export default Example

```

### 事件

```jsx
import {Button} from '../button'
import {Message} from './index'

function Example() {
  const onClick = (type: string) => {
    Message.Alert('这是alert的内容', {
      icon: type,
      callback: (close) => {
        alert('确认回调事件')
        close()
      }
    })
  }
  return (<div className='demo-Message'>
    <Button onClick={() => onClick('1')} type='primary'>Alert 成功</Button>
    <Button onClick={() => onClick('2')} type='primary'>Alert 失败</Button>
    <Button onClick={() => onClick('3')} type='primary'>Alert 警告</Button>
  </div>)
}

export default Example

```

### Msg

```jsx
import {Button} from '../button'
import {Message} from './index'

function Example() {
  const onClick = (type: string) => {
    Message.Msg('这是alert的内容', {
      icon: type,
      callback: (close) => {
        alert('确认回调事件')
        close()
      }
    })
  }
  return (<div className='demo-Message'>
    <Button onClick={() => onClick('1')} type='primary'>Alert 成功</Button>
    <Button onClick={() => onClick('2')} type='primary'>Alert 失败</Button>
    <Button onClick={() => onClick('3')} type='primary'>Alert 提示</Button>
    <Button onClick={() => onClick('4')} type='primary'>Alert 警告</Button>
  </div>)
}

export default Example

```

### Success/Fail/Info

```jsx
import {Button} from '../button'
import {Message} from './index'

function Example() {
  const onClick = (type: string) => {
    Message[type]('这是alert的内容')
  }
  return (<div className='demo-Message'>
    <Button onClick={() => onClick('Success')} type='primary'>Alert 成功</Button>
    <Button onClick={() => onClick('Fail')} type='primary'>Alert 失败</Button>
    <Button onClick={() => onClick('Info')} type='primary'>Alert 提示</Button>
  </div>)
}

export default Example

```

## API

所有参数详见[Dialog](/#/dialog)
