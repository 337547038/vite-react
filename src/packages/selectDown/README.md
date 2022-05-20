# SelectDown下拉

统一下拉组件，为`select`,`datePick`,`cascader`等提交统一交互

### 基础用法

```jsx
import {SelectDown} from './index'

function Example() {
  const value = ['初始值']
  return (
    <SelectDown placeholder="placeholder" defaultValue={value}>
      <p>21311</p>
      <p>基础用法</p>
    </SelectDown>
  )
}

export default Example
```


### 禁用模式

```jsx
import {SelectDown} from './index'

function Example() {
  return (
    <SelectDown placeholder="placeholder" disabled={true} defaultValue={[]}>
      <p>21311</p>
      <p>禁用模式</p>
    </SelectDown>
  )
}

export default Example
```

### 可清空

```jsx
import {SelectDown} from './index'

function Example() {
  return (
    <SelectDown placeholder="可清空值" clear={true} defaultValue={['react']}>
      <p>21311</p>
      <p>可清空</p>
    </SelectDown>
  )
}

export default Example

```

### 多选模式

```jsx
import {SelectDown} from './index'

function Example() {
  const value = ['reac', 'form', 'vue']
  return (
    <SelectDown multiple={true} defaultValue={value} placeholder="placeholder">
      <p>21311</p>
      <p>多选模式</p>
    </SelectDown>
  )
}

export default Example

```

### 多选折叠模式

```jsx
import {SelectDown} from './index'

function Example() {
  const value = ['reac', 'form', 'vue']
  return (
    <SelectDown defaultValue={value} multiple collapseTags placeholder="placeholder">
      <p>21311</p>
      <p>多选折叠模式</p>
    </SelectDown>
  )
}

export default Example
```

### 可输入模式

```jsx
import {SelectDown} from './index'

function Example() {
  const blurEvent = (val: string[]) => {
    console.log('blurEvent')
    console.log(val)
  }
  const focusEvent = (val: string[]) => {
    console.log('focusEvent')
    console.log(val)
  }
  const inputEvent = (val: string[]) => {
    console.log('inputEvent')
    console.log(val)
  }
  return (
    <div>
      <SelectDown
        defaultValue={['reactive', 'form', 'vue']}
        multiple
        filterable
        collapseTags
        placeholder="placeholder"
        onBlur={blurEvent}
        onFocus={focusEvent}
        onChange={inputEvent}
      >
        <p>21311</p>
        <p>可输入模式</p>
      </SelectDown>
      <SelectDown
        defaultValue={['reactive']}
        filterable
        placeholder="placeholder"
        onBlur={blurEvent}
        onFocus={focusEvent}
        onChange={inputEvent}
      >
        <p>21311</p>
        <p>可输入模式</p>
      </SelectDown>
    </div>
  )
}

export default Example

```

### 插入到body中

```jsx
import {SelectDown} from './index'

function Example() {
  const value = ['reac', 'form', 'vue']
  return (
    <SelectDown appendToBody placeholder="placeholder" defaultValue={value}>
      <p>21311</p>
      <p>插入到body中</p>
    </SelectDown>
  )
}

export default Example
```

### 其他设置

弹出下拉面板设置`down-class`、`down-style`、`down-height`

```jsx
import {SelectDown} from './index'

function Example() {
  const value = ['reac', 'form', 'vue']
  return (
    <SelectDown
      defaultValue={['modelValue']}
      downClass="down-class"
      downStyle={{width: '300px'}}
      downHeight="300"
      placeholder="placeholder"
    >
      <p>其他设置</p>
      <p>21311</p>
      <p>21311</p>
      <p>21311</p>
      <p>21311</p>
      <p>21311</p>
      <p>21311</p>
      <p>21311</p>
      <p>21311</p>
      <p>21311</p>
      <p>21311</p>
    </SelectDown>
  )
}

export default Example
```

### 使用不同的图标

```jsx
import {SelectDown} from './index'

function Example() {
  const value = ['reac', 'form', 'vue']
  return (
    <SelectDown icon="down" placeholder="placeholder" defaultValue={value}>
      <p>21311</p>
      <p>插入到body中</p>
    </SelectDown>
  )
}

export default Example
```

### 显示区间值

```jsx
import {SelectDown} from './index'

function Example() {
  const value = ['reac', 'form', 'vue']
  return (
    <SelectDown
      defaultValue={['start', 'end']}
      isRange
      endPlaceholder="结束点位符"
      placeholder="placeholder">
      <p>21311</p>
      <p>显示区间值</p>
    </SelectDown>
  )
}

export default Example
```
## API

### SelectDown Props

| 参数             | 类型                | 说明                      |
|----------------|-------------------|-------------------------|
| defaultValue   | array             | 初始默认显示的值                |
| width          | string            | 组件宽                     |
| multiple       | boolean/false     | 多选模式                    |
| collapseTags   | boolean/false     | 多选模式下是否折叠Tag            |
| clear          | boolean/false     | 是否可清空                   |
| filterable     | boolean/false     | 是否可搜索选项                 |
| size           | string            | 大小                      |
| placeholder    | string            | 占位符                     |
| disabled       | boolean/false     | 禁用状态                    |
| direction      | number            | 下拉的方向动画，0自动(默认)　1向下　2向上 |
| downClass      | string            | 下拉面板类                   |
| downStyle      | object            | 下拉面板样式                  |
| appendToBody   | boolean/false     | 下拉插入到body               |
| downHeight     | number            | 下拉的面板的高                 |
| icon           | string            | icon图标                  |
| fixedIcon      | boolean/false     | 固定icon图标，即点击时不旋转        |
| isRange        | boolean/false     | 显示区间，此时`multiple`无效     |
| rangeSeparator | string            | 区间分隔符，默认`To`            |
| endPlaceholder | string            | isRange为true时的，结束输入框点位符 |
| onChange       | function(val,evt) | 可输入时输入框改变事件             |
| onBlur         | function(val,evt)    | 可输入时输入框焦点事件             |
| onFocus        | function(val,evt)    | 可输入时输入框获得焦点事件           |
| toggleClick    | function(evt)     | 点击展开收起事件                |
| onClear        | function()     | 清空事件                    |
| onDelete       | function(val)     | 删除单个选项,多选时有效            |

### SelectDown Methods

| 参数         | 说明             |
|------------|----------------|
| slideUp    | 收起下拉           |
| setValue   | 设置显示的值，仅改变显示的值 |
| clearValue | 可输入状态用于清空输入框的值 |
