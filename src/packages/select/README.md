# select 下拉选择

### 基础用法

```jsx
import {Select} from './index'

function Example() {
  const options = [
    {label: '选项1', value: '1'},
    {label: '选项2', value: '2'},
    {label: '选项3', value: '3'},
    {label: '选项4', value: '4', disabled: true},
    {label: '选项5', value: '5'},
    {label: '选项6', value: '6'},
    {label: '选项7', value: '7'},
    {label: '选项8', value: '8'},
    {label: '选项9', value: '9'},
    {label: '选项10', value: '10', class: 'red'}
  ]
  const onChange = (val: string | string[]) => {
    console.log(val)
  }
  return (
  <div className="demo-select">
    <Select defaultValue="2" placeholder="请选择" options={options} onChange={onChange}/>
    <Select defaultValue={'1'} placeholder="请选择" options={options} onChange={onChange}/>
    <Select
    placeholder="禁用状态不能选择"
    options={options}
    disabled={true}
    onChange={onChange}
    />
    <Select
    placeholder="设置最大下拉高度"
    options={options}
    downHeight={100}
    onChange={onChange}
    />
  </div>)
}

export default Example
```

### 可清空选项

`clear=true`

```jsx
import {Select} from './index'

function Example() {
  const options = [
    {label: '选项1', value: '1'},
    {label: '选项2', value: '2'},
    {label: '选项3', value: '3'},
    {label: '选项4', value: '4', disabled: true},
    {label: '选项5', value: '5'},
    {label: '选项6', value: '6'},
    {label: '选项7', value: '7'},
    {label: '选项8', value: '8'},
    {label: '选项9', value: '9'},
    {label: '选项10', value: '10', class: 'red'}
  ]
  return (
  <div>
    <Select defaultValue="2" placeholder="请选择" options={options} clear={true}/>
  </div>)
}

export default Example
```

### 异步搜索

`filterable=true` `async="true"` `onInput="searchChange"`

```jsx
import {Select} from './index'
import {useState} from 'react'

function Example() {
  const list = [
    {label: '选项1', value: '1'},
    {label: '选项2', value: '2'},
    {label: '选项3', value: '3'},
    {label: '选项4', value: '4', disabled: true},
    {label: '选项5', value: '5'},
    {label: '选项6', value: '6'},
    {label: '选项7', value: '7'},
    {label: '选项8', value: '8'},
    {label: '选项9', value: '9'},
    {label: '选项10', value: '10', class: 'red'}
  ]
  const [options, setOptions] = useState(list)
  const searchChange = (val: string) => {
    console.log('searchChange')
    setTimeout(() => {
      // 模拟请求后重置下拉数据
      setOptions([{label: '搜索结果1', value: '1'}])
    }, 1000)
  }
  return (
  <div className="demo-select">
    <Select
    defaultValue={'2'}
    placeholder="请选择"
    options={options}
    filterable={true}
    async={true}
    onInput={searchChange}
    />
    <Select
    multiple={true}
    defaultValue={['2']}
    placeholder="请选择"
    options={options}
    filterable={true}
    async={true}
    onInput={searchChange}
    />
  </div>)
}

export default Example
```

### 可多选

`multiple=true`。多选时`defaultValue`必须是数组，同时可设置`multipleLimit`最多选择的个数及提示信息

```jsx
import {Select} from './index'

function Example() {
  const options = [
    {label: '选项1', value: '1'},
    {label: '选项2', value: '2'},
    {label: '选项3', value: '3'},
    {label: '选项4', value: '4', disabled: true},
    {label: '选项5', value: '5'},
    {label: '选项6', value: '6'},
    {label: '选项7', value: '7'},
    {label: '选项8', value: '8'},
    {label: '选项9', value: '9'},
    {label: '选项10', value: '10', class: 'red'}
  ]
  const limitChange = () => {
    console.log('limitChange')
  }
  return (
  <div>
    <Select
    placeholder="请选择"
    options={options}
    multiple={true}
    multipleLimit={3}
    limitChange={limitChange}
    />
  </div>)
}

export default Example
```

### 可搜索

`filterable=true`

```jsx
import {Select} from './index'

function Example() {
  const options = [
    {label: '选项1', value: '1'},
    {label: '选项2', value: '2'},
    {label: '选项3', value: '3'},
    {label: '选项4', value: '4', disabled: true},
    {label: '选项5', value: '5'},
    {label: '选项6', value: '6'},
    {label: '选项7', value: '7'},
    {label: '选项8', value: '8'},
    {label: '选项9', value: '9'},
    {label: '选项10', value: '10', class: 'red'}
  ]
  const onFocus = (val: string) => {
    console.log('获取焦点事件')
    console.log(val)
  }
  const onBlur = (val: string) => {
    console.log('失去焦点事件')
    console.log(val)
  }
  const onInput = (val: string) => {
    console.log(val)
  }
  return (
  <div className="demo-select">
    <Select
    defaultValue="2"
    placeholder="请选择"
    options={options}
    filterable={true}
    onFocus={onFocus}
    onBlur={onBlur}
    onInput={onInput}/>
    <Select
    defaultValue={['2', '4']}
    placeholder="请选择（可多选）"
    options={options}
    filterable={true}
    multiple={true}
    onFocus={onFocus}
    onBlur={onBlur}
    onInput={onInput}/>
  </div>)
}

export default Example
```

### 改变前拉截事件

```jsx
import {Select} from './index'
import {useState} from 'react'

function Example() {
  const options = [
    {label: '选项1', value: '1'},
    {label: '选项2', value: '2'},
    {label: '选项3', value: '3'},
    {label: '选项4', value: '4', disabled: true},
    {label: '选项5', value: '5'},
    {label: '选项6', value: '6'},
    {label: '选项7', value: '7'},
    {label: '选项8', value: '8'},
    {label: '选项9', value: '9'},
    {label: '选项10', value: '10', class: 'red'}
  ]
  const beforeChange = () => {
    console.log('return true时才能点击选择')
    return false
  }
  return (
  <div>
    <Select
    placeholder="请选择"
    options={options}
    beforeChange={beforeChange}
    />
  </div>)
}

export default Example
```

### 使用`Option`组件，参数和`select`的`option`一致

```jsx
import {Select, Option} from './index'

function Example() {
  return (
  <div>
    <Select placeholder="请选择">
      <Option value="11" label="选择一"/>
      <Option value="12" label="选择2"/>
    </Select>
  </div>)
}

export default Example
```

### 向上弹出选项面板

```jsx
import {Select} from './index'
import {useState} from 'react'

function Example() {
  const options = [
    {label: '选项1', value: '1'},
    {label: '选项2', value: '2'},
    {label: '选项3', value: '3'},
    {label: '选项4', value: '4', disabled: true},
    {label: '选项5', value: '5'},
    {label: '选项6', value: '6'},
    {label: '选项7', value: '7'},
    {label: '选项8', value: '8'},
    {label: '选项9', value: '9'},
    {label: '选项10', value: '10', class: 'red'}
  ]
  return (
  <div>
    <Select
    placeholder="请选择"
    options={options}
    direction={2}
    />
  </div>)
}

export default Example
```

### 选择数据指定的label和value

使用`optionsKey`指定取值的key的值

```jsx
import {Select} from './index'

function Example() {
  const options = [
    {key: '选项1', name: '1'},
    {key: '选项2', name: '2'},
    {key: '选项3', name: '3'},
    {key: '选项4', name: '4', disabled: true},
    {key: '选项5', name: '5'},
    {key: '选项7', name: '7'},
    {key: '选项8', name: '8'},
    {key: '选项9', name: '9'},
    {key: '选项10', name: '10', class: 'red'}
  ]
  return (
  <div>
    <Select
    placeholder="请选择"
    options={options}
    optionsKey={{label: 'key', value: 'name'}}
    />
  </div>)
}

export default Example
```

## API

### Select

| 参数             | 类型                      | 说明                      |
|----------------|-------------------------|-------------------------|
| defaultValue   | array                   | 初始默认显示的值                |
| width          | string                  | 组件宽                     |
| multiple       | boolean/false           | 多选模式                    |
| collapseTags   | boolean/false           | 多选模式下是否折叠Tag            |
| clear          | boolean/false           | 是否可清空                   |
| filterable     | boolean/false           | 是否可搜索选项                 |
| size           | string                  | 大小                      |
| placeholder    | string                  | 占位符                     |
| disabled       | boolean/false           | 禁用状态                    |
| direction      | number                  | 下拉的方向动画，0自动(默认)　1向下　2向上 |
| downClass      | string                  | 下拉面板类                   |
| downStyle      | object                  | 下拉面板样式                  |
| appendToBody   | boolean/false           | 下拉插入到body               |
| downHeight     | number                  | 下拉的面板的高                 |
| icon           | string                  | icon图标                  |
| fixedIcon      | boolean/false           | 固定icon图标，即点击时不旋转        |
| isRange        | boolean/false           | 显示区间，此时`multiple`无效     |
| rangeSeparator | string                  | 区间分隔符，默认`To`            |
| endPlaceholder | string                  | isRange为true时的，结束输入框点位符 |
| onInput        | function(val,value,evt) | 可输入时输入框改变事件             |
| onBlur         | function(val,value,evt)       | 可输入时输入框焦点事件             |
| onFocus        | function(val,value,evt)       | 可输入时输入框获得焦点事件           |
| toggleClick    | function(evt)           | 点击展开收起事件                |
| onClear        | function()              | 清空事件                    |
| onDelete       | function(val)           | 删除单个选项,多选时有效            |
| multipleLimit  | number/0                | 多选时用户最多可以选择的项目数，为 0 则不限制|
| async          | boolean/false           | 异步搜索，`filterable=true`时有效 |
| options        | array                   | 下拉选项数据                  |
| optionsKey     | object                  | 指定选择数据的label和value属性，默认{label:'label',value:'value'} |
| beforeChange   | Function                | 选项改变前事件,`return false`阻止选择 |
| emptyText      | string                  | 没有下拉选项数据进               |
| onChange       | function(val,evt)       | 选项改变事件               |
| limitChange    | function()              |超出最大选择数时事件，仅`multiple=true`和设定了`multipleLimit`时有效|

### Options Attributes

|参数|类型|说明|
|----------|--------------|--------|
|value            | string                |选项的值|
|label            | string                |选项的标签，若不设置则默认与 value 相同|
|disabled         | boolean/false         |是否禁用该选项|
|class            | string                |对当前项添加样式|

### Select Method

| 参数       | 类型     |
|----------|--------|
| getValue | 获取当前值  |
| clearValue | 可输入状态用于清空输入框的值  |

