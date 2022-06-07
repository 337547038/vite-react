# Tabs 标签页

### 基本用法

```jsx
import {Tabs, TabPane} from './index'

function Example() {
  return (<Tabs>
    <TabPane label="用户管理">用户管理</TabPane>
    <TabPane label="配置管理">配置管理</TabPane>
    <TabPane label="角色管理">角色管理</TabPane>
    <TabPane label="定时任务补偿">定时任务补偿</TabPane>
  </Tabs>)
}

export default Example
```

### 可设置禁用项

可通过`disabled`设置禁用状态

```jsx
import {Tabs, TabPane} from './index'

function Example() {
  return (<Tabs>
    <TabPane label="用户管理">用户管理</TabPane>
    <TabPane label="配置管理" disabled={true}>配置管理</TabPane>
    <TabPane label="角色管理">角色管理</TabPane>
    <TabPane label="定时任务补偿">定时任务补偿</TabPane>
  </Tabs>)
}

export default Example
```

### 自定义标签页

```jsx
import {Tabs, TabPane} from './index'

function Example() {
  const label = (<div><i className="icon-user"></i> 用户管理</div>)
  return (<Tabs>
    <TabPane label={label}>用户管理</TabPane>
    <TabPane label="配置管理" disabled={true}>配置管理</TabPane>
    <TabPane label="角色管理">角色管理</TabPane>
    <TabPane label="定时任务补偿">定时任务补偿</TabPane>
  </Tabs>)
}

export default Example
```

### 可自定初始显示项

通过添加`defaultVame`和`name`指定初始显示项。也可以只设置value值(`tab-*`*从1开始按顺序生成)，name为空

```jsx
import {Tabs, TabPane} from './index'

function Example() {
  return (
    <div className='tabs-demo'>
      <Tabs defaultValue='tab2'>
        <TabPane label="用户管理" name="tab1">用户管理</TabPane>
        <TabPane label="配置管理" name="tab2">配置管理</TabPane>
        <TabPane label="角色管理" name="tab3">角色管理</TabPane>
        <TabPane label="定时任务补偿" name="tab4">定时任务补偿</TabPane>
      </Tabs>
    </div>)
}

export default Example
```

### 可不显示切换内容

很多时候并不需要通过显示和隐藏来切换内容，而是在点击选项卡标题时去动态加载数据，这时可设置`showContent:false`

```jsx
import {Tabs, TabPane} from './index'
import {useState} from 'react'

function Example() {
  const [content, setContent] = useState<string>('')
  const change = (obj: any, index: number) => {
    console.log(obj)
    setContent(`当前点击选项的name值：${obj.name || ''}`)
  }
  return (
    <div className='tabs-demo'>
      <Tabs showContent={false} onChange={change}>
        <TabPane label="用户管理" name="tab1">用户管理</TabPane>
        <TabPane label="配置管理" name="tab2">配置管理</TabPane>
        <TabPane label="角色管理" name="tab3">角色管理</TabPane>
        <TabPane label="定时任务补偿" name="tab4">定时任务补偿</TabPane>
      </Tabs>
      <div className="ajax-content">
        ajax content
        <p>{content}</p>
      </div>
    </div>)
}

export default Example
```

### 阻止事件

切换标签之前的钩子`beforeLeave`，若返回` false`，则阻止切换

```jsx
import {Tabs, TabPane} from './index'

function Example() {
  const beforeLeave = (item:any) => {
    console.log(item)
    return false
  }
  return (
    <div className='tabs-demo'>
      <Tabs beforeLeave={beforeLeave}>
        <TabPane label="用户管理" name="tab-1">用户管理</TabPane>
        <TabPane label="配置管理" name="tab2">配置管理</TabPane>
        <TabPane label="角色管理" name="tab3">角色管理</TabPane>
        <TabPane label="定时任务补偿" name="tab4">定时任务补偿</TabPane>
      </Tabs>
    </div>)
}

export default Example
```

## API

### Tabs

| 参数           |类型|说明|
|--------------|--------------|--------|
| defaultValue | string         |绑定值。对应选项卡的 name，为空时自动生成`tab-*`，初始默认显示第一项|
| beforeLeave  | function       |切换标签之前的钩子，若返回 false，则阻止切换|
| onChange     | function       |点击改变事件,function(item, index)|

### TabPane

|参数|类型| 说明                                      |
|----------|--------------|-----------------------------------------|
|name           | string         | 对应 Tabs 的 defaultValue 值，为空时自动生成。一般可不填写 |
|label          | string         | 标签名称                                    |
|disabled       | boolean/false  | 禁用选顶                                    |

