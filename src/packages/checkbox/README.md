# Checkbox 多选框

### 基础用法

单一的`checkbox`中，默认绑定变量的值会是`Boolean`，选中为`true`。如选中时需要返回指定的值，则添加`value`

```jsx
import {Checkbox} from './index'

function Example() {
  return (
  <div>
    <Checkbox checked={true}>选项1</Checkbox>
    <Checkbox checked={false}>选项2</Checkbox>
    <Checkbox checked={true} value={'3'}>选项3</Checkbox>
    <Checkbox checked={false} value={"4"}>选项4</Checkbox>
  </div>)
}

export default Example
```

### 禁用状态

多选框不可用状态

```jsx
import {Checkbox} from './index'

function Example() {
  return (
  <div>
    <Checkbox checked={true} disabled={true}>选项1</Checkbox>
    <Checkbox checked={false} disabled={true}>选项2</Checkbox>
  </div>)
}

export default Example
```

### 多选框组

options中选项label可为空

```jsx
import {CheckboxGroup} from './index'

function Example() {
  const groupData = [
    {label: '选项1', value: 'a1'},
    {label: '选项2', value: 'a2'},
    {label: '选项3', value: 'a3'},
    {value: 'a4'},
    {label: '禁用', value: 'a5', disabled: true},
    {label: '勾选禁用', value: 'a6', disabled: true}
  ]
  const onChange = (value: string[]) => {
    console.log(value)
  }
  return (
  <div>
    <CheckboxGroup defaultValue={[]} options={groupData} onChange={onChange}/>
    <CheckboxGroup defaultValue={['a1', 'a6']} options={groupData} onChange={onChange}/>
  </div>)
}

export default Example
```

### 可选项目数量的限制

例子最多可选`max=4`，最少需选`min=2`

```jsx
import {CheckboxGroup} from './index'

function Example() {
  const groupData = [
    {label: '选项1', value: 'a1'},
    {label: '选项2', value: 'a2'},
    {label: '选项3', value: 'a3'},
    {value: 'a4'},
    {label: '禁用', value: 'a5', disabled: true},
    {label: '勾选禁用', value: 'a6', disabled: true}
  ]
  return (
  <div>
    <CheckboxGroup value={['a6']} options={groupData} min="2" max="4"/>
  </div>)
}

export default Example
```

### 组全选或全不选方法

`toggleSelect(true/false)全选或取消全选`，可使用 `getValue` 取方法取得已勾选的项集合

```jsx
import {CheckboxGroup} from './index'
import {Button} from '../button'

function Example() {
  const groupData = [
    {label: '选项1', value: 'a1'},
    {label: '选项2', value: 'a2'},
    {label: '选项3', value: 'a3'},
    {value: 'a4'},
    {label: '禁用', value: 'a5', disabled: true},
    {label: '勾选禁用', value: 'a6', disabled: true}
  ]
  const toggleSelect = (boolean: boolean) => {

  }
  const getValue = () => {
  }
  return (
  <div>
    <CheckboxGroup value={['a6']} options={groupData}/>
    <p>
      <Button onClick={() => toggleSelect(true)}>全选</Button>
      <Button onClick={() => toggleSelect(false)}>全不选</Button>
      <Button onClick={getValue}>获取值</Button>
    </p>
  </div>)
}

export default Example
```

### 多个单一组成的组

组group有一定的局限性，组内的`checkbox`是紧密相连的。由多个单一`checkbox`自由组成可实现灵活布局。同时也很方便的实现全选或全不选

```jsx
import {useState} from 'react'
import {Checkbox} from './index'
import {Button} from '../button'

function Example() {
  const [checkedList, setCheckedList] = useState(['1', '3'])
  const checkboxAll = () => {
    setCheckedList(['1', '2', '3', '4', '5'])
  }
  const checkedboxNone = () => {
    setCheckedList([])
  }
  return (
  <div>
    <Checkbox value={'1'} checked={checkedList}>选项1</Checkbox>
    <Checkbox value={'2'} checked={checkedList}>选项2</Checkbox>
    <Checkbox value={'3'} checked={checkedList}>选项3</Checkbox>
    <Checkbox value={'4'} checked={checkedList}>选项4</Checkbox>
    <Checkbox value={'5'} checked={checkedList}>选项5</Checkbox>
    <p>
      <Button onClick={checkboxAll}>全选</Button>
      <Button onClick={checkedboxNone}>全不选</Button>
    </p>
  </div>)
}

export default Example
```

### 阻止改变事件

使用`beforeChange`可阻止事件改变

```jsx
import {Checkbox, CheckboxGroup} from './index'

function Example() {
  const groupData = [
    {label: '选项1', value: 'a1'},
    {label: '选项2', value: 'a2'},
    {label: '选项3', value: 'a3'},
    {value: 'a4'},
    {label: '禁用', value: 'a5', disabled: true},
    {label: '勾选禁用', value: 'a6', disabled: true}
  ]
  const beforeChange = () => {
    console.log('return false 阻止勾选')
    return false
  }
  return (
  <div>
    <Checkbox value={'1'} beforeChange={beforeChange}>选项1</Checkbox>
    <CheckboxGroup
    options={groupData}
    beforeChange={beforeChange}
    />
  </div>)
}

export default Example
```

## API

### Checkbox

| 参数           | 类型            | 说明                   |
|--------------|---------------|----------------------|
| checked      | Boolean/Array | 初始默认选中状态             |
| value        | String        | 选中状态返回的值             |
| label        | String        | 显示的文本值，也可以是children  |
| disabled     | Boolean/false | 禁用                   |
| beforeChange | Function      | 点击改变前的事件，返回false阻止事件 |
| onChange     | Function      | 改变事件                 |

### CheckboxGroup

| 参数           |类型| 说明                   |
|--------------|--------------|----------------------|
| defaultValue | Array           | 初始默认选中值              |
| options      | Array           | 选项数据                 |
| optionsKey   | object        | 指定选择数据的label和value属于，默认{label:'label',value:'value'} |
| max          | number          | 可被勾选的 checkbox 的最大数量 |
| min          | number          | 可被勾选的 checkbox 的最小数量 |
| disabled     | Boolean/false   | 禁用组                  |
| beforeChange | Function       | 点击改变前的事件，返回false阻止事件 |
| onChange     | Function       | 改变事件                 |

### CheckboxGroup Methods

|参数|类型|
|----------|--------|
|toggleSelect         | 全选true/取消false当前组所有选项 |
|getValue             | 获取当前所有勾选项的集合 |

