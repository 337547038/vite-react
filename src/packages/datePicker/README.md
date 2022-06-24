# DatePicker 日期选择

### 基本使用

```jsx
import {DatePicker} from './index'
import React from 'react'
function Example() {
  const [value1, setValue1] = React.useState('')
  const [value2, setValue2] = React.useState(new Date().toLocaleDateString())
  const [value3, setValue3] = React.useState('')
  const onChange = (type: string, val: string | string[]) => {
    if(type==='1'){
      setValue1(val.toString())
    }
    if(type==='2'){
      setValue2(val.toString())
    }
  }
  return (<div className='demo-date-picker'>
    <div>选择的值：{value1}<br />
      <DatePicker defaultValue={value1} placeholder="请选择时间" onChange={onChange.bind(this, '1')} />
    </div>
    <div>选择的值：{value2}<br />
      <DatePicker defaultValue={value2} placeholder="请选择时间" onChange={onChange.bind(this, '2')} />
    </div>
    <div>选择的值：{value3}<br />
      <DatePicker
        defaultValue={value3}
        placeholder="请选择时间"
        disabled={true}
        onChange={onChange.bind(this, '3')}
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
function Example() {
  const [value1, setValue1] = React.useState('')
  const [value2, setValue2] = React.useState(new Date().getFullYear().toString())
  const [value3, setValue3] = React.useState('')
  const disabledDate = (date: Date) => {
    const day = date.getFullYear()
    return day < 2018 || day > 2023
  }
  const onChange = (type: string, val: string | string[]) => {
    if (type === '1') {
      setValue1(val.toString())
    }
    if (type === '2') {
      setValue2(val.toString())
    }
    if (type === '3') {
      setValue3(val.toString())
    }
  }
  return (<div className='demo-date-picker'>
    <div>选择的值：{value1}<br />
      <DatePicker defaultValue={value1} placeholder="请选择时间" type="year" onChange={onChange.bind(this, '1')}/>
    </div>
    <div>选择的值：{value2}<br />
      <DatePicker defaultValue={value2} placeholder="请选择时间" type="year" onChange={onChange.bind(this, '2')} />
    </div>
    <div>限制选择范围。选择的值：{value3}<br />
      <DatePicker
        onChange={onChange.bind(this, '3')}
        defaultValue={value3}
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
function Example() {
  const [value1, setValue1] = React.useState('')
  const [value2, setValue2] = React.useState('2022-06-15')
  const [value3, setValue3] = React.useState('')
  const disabledDate = (date: Date, type: string) => {
    if (type === 'month') {
      const day = date.getMonth()
      return day < 2 || day > 6
    }
    return false
  }
  const onChange = (type: string, val: string | string[]) => {
    if (type === '1') {
      setValue1(val.toString())
    }
    if (type === '2') {
      setValue2(val.toString())
    }
    if (type === '3') {
      setValue3(val.toString())
    }
  }
  return (<div className='demo-date-picker'>
    <div>
      选择的值：{value1}<br />
      <DatePicker defaultValue={value1} placeholder="请选择时间" type="month" onChange={onChange.bind(this, '1')} />
    </div>
    <div>
      选择的值：{value2}<br />
      <DatePicker defaultValue={value2} placeholder="请选择时间" type="month" onChange={onChange.bind(this, '2')} />
    </div>
    <div>
      限制选择范围。选择的值：{value3}<br />
      <DatePicker
        onChange={onChange.bind(this, '3')}
        defaultValue={value3}
        placeholder="请选择时间"
        type="month"
        disabledDate={disabledDate}
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
function Example() {
  const disabledDate = (date: Date, type: string) => {
    if (type === 'day') {
      const day = date.getDay()
      return day === 0 || day === 6
    }
    return false
  }
  return (<div className='demo-date-picker'>
    <div>
      <DatePicker placeholder="请选择时间" type="date" />
    </div>
    <div>
      限制选择范围<br />
      <DatePicker
        placeholder="请选择时间"
        type="date"
        disabledDate={disabledDate}
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
function Example() {
  const [value, setValue] = useState('')
  const onChange = (val: string | string[]) => {
    setValue(val.toString())
  }
  return (<div className='demo-date-picker'>
    <div>
      选择的值：{value}<br />
      <DatePicker placeholder="请选择时间" type="datetime" onChange={onChange} />
    </div>
  </div>)
}
export default Example

```

### 可输入可清空
```jsx
import {DatePicker} from './index'
import React from 'react'
function Example(){
  return (<div className='demo-date-picker'>
    <div>
      <DatePicker
        placeholder="请选择时间"
        readonly={false}
        clear={true}
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
  const innerText = (time:Date) => {
    if ([14,15,16].includes(time.getDate())) {
      return '休'
    }
    if ([17,18,19].includes(time.getDate())) {
      return '班'
    }
    return ''
  }
  const disabledDate = (time:Date, paneType:string) => {
    const day = time.getDay()
    return day === 0 || day === 6
  }
  return (<div className='demo-date-picker'>
    <div>
      <DatePicker
        placeholder="请选择时间"
        innerText={innerText}
        disabledDate={disabledDate}
      />
    </div>
  </div>)
}
export default Example

```

### 时间格式化

使用`format`指定输出显示的类型，即输入框显示的值。可使用y(年)、M(月)、d(日)、h(时)、m(分)、s(秒)、w(星期)
、timestamp，MM表示使用两位表示月份
```jsx
import {DatePicker} from './index'
import React from 'react'
function Example(){
  return(<div className='demo-date-picker'>
    <div>
      月日小于10时，前面不加0
      <DatePicker
        placeholder="请选择时间"
        format="y-M-d"
      />
    </div>
    <div>
      显示年月日格式
      <DatePicker
        placeholder="请选择时间"
        format="y年MM月dd日 星期w"
        value-format="y-MM-dd"
      />
    </div>
    <div>
      显示时间戳
      <DatePicker
        placeholder="请选择时间"
        format="timestamp"
        value-format="y-MM-dd"
      />
    </div>
  </div>)
}
export default Example
```

### 区间选择
```jsx
import {DatePicker} from './index'
import React from 'react'
function Example(){
  return(<div className='demo-date-picker'>
    <div>
      <DatePicker
        type='monthRange'
        placeholder="请选择月份"
        endPlaceholder="请选择月份"
      />
    </div>
    <div>
      <DatePicker
        type='dateRange'
        placeholder="请选择时间"
        endPlaceholder="请选择时间"
      />
    </div>
    <div>
      <DatePicker
        type='datetimeRange'
        placeholder="请选择时间"
        endPlaceholder="请选择时间"
      />
    </div>
  </div>)
}
export default Example
```

## API

### DatePicker

| 参数           | 类型           | 说明                                                                                    |
|--------------|--------------|---------------------------------------------------------------------------------------|
| defaultValue | String       | 绑定的值                                                                                  |
| placeholder  | String       | 输入框提示占位文本                                                                             |
| clear        | Boolean｜true | 显示清空                                                                                  |
| disabledDate | Function     | 禁用的时间，return true时将不能选择                                                               |
| disabled     | Boolean｜true | 是否禁用                                                                                  |
| type         | String       | 面板日期类型，选择后将按此格式返回，年/年月/年月日/年月日时分秒。可选`year,month,date,datetime,datetimeRange,dateRange,monthRange` |
| format       | String       | 输入框显示的格式，为空时按type默认格式                                                                 |
| innerText    | Function     | 可以将特殊提示的文本插入到指定的日期里                                                                   |
| appendToBody | Boolean｜true | 是否将弹出日期面板插入到body中                                                                     |
| downStyle    | Object       | 下拉面板样式，快速个性化设置单个日期下拉面板                                                                |
| downClass    | string       | 下拉面板类名                                                                                |
| readonly     | Boolean｜true | 日期输入框只读模式                                                                             |
| size         | string       | 添加的大小尺寸样式                                                                             |
| onChange     | function     | 改变事件                                                                                  |

