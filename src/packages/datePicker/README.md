# DatePicker 日期选择

### 基本使用

```jsx
import {DatePicker} from './index'
import React from 'react'
function Example(){
  const [value1,setValue1]=React.useState('')
  const [value2,setValue2]=React.useState('2019-06-01')
  const [value3,setValue3]=React.useState('')
  const onChange = (type:string,val:string) => {
    
  }
  return(<div className='demo-date-picker'>
    <div
    >选择的值：{ value1 }<br />
      <DatePicker defaultValue={value1} placeholder="请选择时间" onChange={onChange.bind(this,'1')}/>
    </div>
    <div
    >选择的值：{ value2 }<br />
      <DatePicker defaultValue={value2} placeholder="请选择时间"  onChange={onChange.bind(this,'2')}/>
    </div>
    <div
    >选择的值：{ value3 }<br />
      <DatePicker
        defaultValue={value3}
        placeholder="请选择时间"
      disabled="true"
        onChange={onChange.bind(this,'3')}
      />
    </div>
  </div>)
}
export default Example

```

### 年份选择

```jsx
import {DatePicker} from './index'
import React from 'react'
function Example(){
  const disabledDate = (date) => {
    const day = date.getFullYear()
    return day < 2018 || day > 2023
  }
  return(<div className='demo-date-picker'>
    <div
    >选择的值：{ value1 }<br />
      <DatePicker defaultValue="value1" placeholder="请选择时间" type="year" />
    </div>
    <div
    >选择的值：{ value2 }<br />
      <DatePicker defaultValue="value2" placeholder="请选择时间" type="year" />
    </div>
    <div
    >限制选择范围。选择的值：{ value2 }<br />
      <DatePicker
        defaultValue="value3"
        placeholder="请选择时间"
        type="year"
        disabledDate={disabledDate}
      />
    </div>
  </div>)
}
export default Example

```

### 月份选择

```jsx
import {DatePicker} from './index'
import React from 'react'
function Example(){
  const disabledDate = (date, type) => {
    if (type === 'month') {
      const day = date.getMonth()
      return day < 2 || day > 6
    }
  }
  return (<div className='demo-date-picker'>
    <div>
      选择的值：{ value1 }<br />
      <DatePicker defaultValue="value1" placeholder="请选择时间" type="month" />
    </div>
    <div>
      选择的值：{ value2 }<br />
      <DatePicker defaultValue="value2" placeholder="请选择时间" type="month" />
    </div>
    <div>
      限制选择范围。选择的值：{ value2 }<br />
      <DatePicker
        defaultValue="value3"
        placeholder="请选择时间"
        type="month"
      disabled-date={disabledDate}
      />
    </div>
  </div>)
}
export default Example

```

### 年月日选择

```jsx
import {DatePicker} from './index'
import React from 'react'
function Example(){
  const disabledDate = (date, type) => {
    if (type === 'day') {
      const day = date.getDay()
      return day === 0 || day === 6
    }
  }
  return (<div className='demo-date-picker'>
    <div>
      选择的值：{ value1 }<br />
      <DatePicker defaultValue="value1" placeholder="请选择时间" type="date" />
    </div>
    <div>
      选择的值：{ value2 }<br />
      <DatePicker defaultValue="value2" placeholder="请选择时间" type="date" />
    </div>
    <div>
      限制选择范围。选择的值：{ value2 }<br />
      <DatePicker
        defaultValue="value3"
        placeholder="请选择时间"
        type="date"
      disabled-date={disabledDate}
      />
    </div>
  </div>)
}
export default Example

```

### 年月日时分秒选择

```jsx
import {DatePicker} from './index'
import React from 'react'
function Example(){
  return (<div className='demo-date-picker'>
    <div>
      选择的值：{ value1 }<br />
      <DatePicker
        defaultValue="value1"
        placeholder="请选择时间"
        type="datetime"
      />
    </div>
    <div>
      选择的值：{ value2 }<br />
      <DatePicker
        defaultValue="value2"
        placeholder="请选择时间"
        type="datetime"
      />
    </div>
  </div>)
}
export default Example

```

### 手动输入
```jsx
import {DatePicker} from './index'
import React from 'react'
function Example(){
  return (<div className='demo-date-picker'>
    <div>
      选择的值：{ value1 }<br />
      <DatePicker
        defaultValue="value1"
        placeholder="请选择时间"
        readonly="false"
      />
    </div>
  </div>)
}
export default Example

```

### 自定显示特殊字符
```jsx
import {DatePicker} from './index'
import React from 'react'
function Example(){
  const innerText = (time) => {
    let start = new Date(2019, 1, 1)
    let end = new Date(2019, 1, 7)
    if (time >= start && time <= end) {
      return '休'
    }
    const o = new Date(2019, 8, 29)
    if (time.toString() === o.toString()) {
      return '班'
    }
  }
  const disabledDate = (time, paneType) => {
    const day = time.getDay()
    return day === 0 || day === 6
  }
  return (<div className='demo-date-picker'>
    <div>
      选择的值：{ value1 }<br />
      <DatePicker
        defaultValue="value1"
        placeholder="请选择时间"
      innerText={innerText}
      disabled-date={disabledDate}
      readonly="false"
      />
    </div>
  </div>)
}
export default Example

```

### 时间格式化

使用`format`指定输出显示的类型，即输入框显示的值。可使用y(年)、M(月)、d(日)、h(时)、m(分)、s(秒)、w(星期)
、timestamp，MM表示使用两位表示月份，使用`format`应配合`value-format`一起使用，否则当`format`的格式转换成时间异常，会被认为是无效的时间
```jsx
import {DatePicker} from './index'
import React from 'react'
function Example(){
  return(<div className='demo-date-picker'>
    <div>
      月日小于10时，前面不加0。选择的值：{ value1 }<br />
      <DatePicker
        defaultValue="value1"
        placeholder="请选择时间"
        format="y-M-d"
      />
    </div>
    <div>
      显示年月日格式。选择的值：{ value2 }<br />
      <DatePicker
        defaultValue="value2"
        placeholder="请选择时间"
        format="y年MM月dd日 星期w"
        value-format="y-MM-dd"
      />
    </div>
    <div>
      显示时间戳。选择的值：{ value3 }<br />
      <DatePicker
        defaultValue="value3"
        placeholder="请选择时间"
        format="timestamp"
        value-format="y-MM-dd"
      />
    </div>
  </div>)
}
export default Example
```

## API

### DatePicker

| 参数           | 类型           |说明|
|--------------|--------------|--------|
| defaultValue | String       |绑定的值|
| placeholder  | String       |输入框提示占位文本|
| clear        | Boolean｜true |显示清空|
| disabledDate | Function     |禁用的时间，return true时将不能选择|
| disabled     | Boolean｜true |是否禁用|
| type         | String       |面板日期类型，选择后将按此格式返回，年/年月/年月日/年月日时分秒。可选year,month,date,datetime|
| format       | String       |输入框显示的格式，为空时按type默认格式|
| valueFormat  | String       |绑定的值格式，即v-model的格式,必须要是合法的日期格式，为空则输入format的格式|
| innerText    | Function     |可以将特殊提示的文本插入到指定的日期里|
| appendToBody | Boolean｜true |是否将弹出日期面板插入到body中|
| downStyle    | Object       |下拉面板样式，快速个性化设置单个日期下拉面板|
| downClass    | string       |下拉面板类名|
| readonly     | Boolean｜true |日期输入框只读模式|
| size         | string       |添加的大小尺寸样式|
| onChange     | function     |改变事件|

