# Radio 单选框

### 基础用法

单个使用时，`checked`为`true`时选中状态

```jsx
import {Radio} from './index'

function Example() {
  return (<div>
    <div>
      <Radio checked={true}>选项1</Radio>
    </div>
    <div>
      <Radio checked={false}>选项2</Radio>
    </div>
    <div>
      <Radio checked={true} disabled={true}>禁用3</Radio>
    </div>
    <div>
      <Radio checked={false} disabled={true}>禁用4</Radio>
    </div>
  </div>)
}

export default Example

```

### 单选组

```jsx
import {RadioGroup} from './index'

function Example() {
  const options = [
    {label: '选项1', value: 'a1'},
    {label: '选项2', value: 'a2'},
    {label: '选项3', value: 'a3'},
    {label: '选项4', value: 'a4'},
    {label: '禁用', value: 'a5', disabled: true}
  ]
  const onChangeGroup = (value, item) => {
    console.log(value)
    console.log(item)
  }
  return (<div>
    <div>
      <RadioGroup options={options} defaultValue="a1" onChange={onChangeGroup}/>
    </div>
    <div>
      <p>禁用组</p>
      <RadioGroup options={options} defaultValue="a2" disabled={true}/>
    </div>
  </div>)
}

export default Example

```

## API

### Radio

| 参数       | 类型            | 说明                  |
|----------|---------------|---------------------|
| checked    | boolean/false           | 初始默认选中状态            |
| disabled | boolean/false | 是否禁用                |
| label    | String        | 显示的文本值，也可以是children |
| onChange | function(val) | 改变事件                |

### RadioGroup

| 参数           | 类型                | 说明                                                   |
|--------------|-------------------|------------------------------------------------------|
| defaultValue | string            | Radio默认选中的值                                         |
| options      | array             | 组数据                                                  |
| optionsKey   | object            | 指定选择数据的label和value属于，默认{label:'label',value:'value'} |
| disabled     | Boolean/false     | 禁用组                                                  |
| onChange     | function(val,obj) | 改变事件                                                 |

### RadioGroup options

|参数|类型|说明|
|----------|--------------|--------|
|label          | string         |显示的文本值|
|value          | string         |当前选项值|
|disabled       | boolean/false  |是否禁用|

### Radio/RadioGroup Methods

| 参数       | 说明         |
|----------|------------|
| getValue | 获取当前是否选中状态 |
