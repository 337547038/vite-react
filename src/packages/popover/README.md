# Popover（Tooltip） 弹出框

### 基础用法

```jsx
import {Popover} from './index'

function Example() {
  const onClick = (done: () => void) => {
    Message.Msg('点击了删除确认')
    done()
  }
  return (<div className='demo-tooltip'>
    <Popover
    content='确定要删除吗？'
    onClick={onClick}>
      <Button>删除</Button>
    </Popover>
  </div>)
}

export default Example

```

## API

### Popover

| 参数         | 类型             | 说明                    |
|------------|----------------|-----------------------|
| confirm    | string         | 确认按钮文案                |
| cancel     | string         | 取消按钮文案                |
| showCancel | boolean/true   | 显示取消按钮                |
| onClick    | function(done) | 确认按钮事件，可使用done()关闭提示框 |
| ...        |                | 其他参数同Tooltip          |
