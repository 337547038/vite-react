# Table 表格

### 基础用法

使用`columns`提供表头所需数据，`tableData`为列表数据

```jsx
import {Table} from './index'
import tableData from './demoJs.json'

function Example() {
  const columns = [
    {
      type: "selection" as const,
      prop: 'sel'
    },
    {
      type: 'index' as const,
      label: '序号',
      prop: 'index'
    },
    {
      prop: 'date',
      label: '日期'
    },
    {
      prop: 'name',
      label: '姓名'
    },
    {
      prop: 'address',
      label: '地址'
    }
  ]
  return (<div className='demo-table'>
    <Table data={tableData} columns={columns}/>
  </div>)
}

export default Example
```

### 自定义列模板

```jsx
import {Table} from './index'
import tableData from './demoJs.json'

function Example() {
  const columns = [
    {
      type: 'selection',
      prop: 'se'
    },
    {
      type: 'index',
      label: '序号',
      prop: 'index'
    },
    {
      prop: 'date',
      label: '日期'
    },
    {
      prop: 'name',
      label: '姓名'
    },
    {
      prop: 'address',
      label: '地址'
    },
    {
      label: '操作',
      formatter: () => {
        return <a onClick={delClick}>删除</a>
      }
    }
  ]
  const delClick = () => {
    console.log('del')
  }
  return (<div className='demo-table'>
    <Table data={tableData} columns={columns}/>
  </div>)
}

export default Example
```

### 添加序号和checkbox勾选

`type="selection"`添加勾选框,`type="index"`添加序号,getSelectAll`方法可取已勾选行。

```jsx
import {Button} from '../button'
import {Table} from './index'
import type {TableRef} from "./index"
import tableData from './demoJs.json'
function Example() {
  const columns = [
    {
      type: 'selection',
      width: '50px'
    },
    {
      type: 'index',
      label: '序号',
      prop: 'index'
    },
    {
      prop: 'date',
      label: '日期'
    },
    {
      prop: 'name',
      label: '姓名'
    },
    {
      prop: 'address',
      label: '地址'
    }
  ]
  const tableEl=useRef<TableRef>(null)
// 全选
  const allSelect = () => {
    tableEl.current?.toggleSelection(true)
  }
  // 取消全选
  const unSelect = () => {
    tableEl.current?.toggleSelection(false)
  }
  // 获取当前勾选的所有值
  const getSelect = () => {
    const val = tableEl.current?.getSelectAll()
    console.log(val)
    alert(JSON.stringify(val))
  }
  // 选中或取消指定行
  const toggleRowSelection = (bool:boolean) => {
    const row = [tableData[1], tableData[2]]
    row.forEach((row) => {
      tableEl.current?.toggleRowSelection(row, bool)
    })
  }
  return (<div className='demo-table'>
    <div>
      <Button onClick={allSelect}>全选</Button>
      <Button onClick={unSelect}>取消全选</Button>
      <Button onClick={getSelect}>获取所选行</Button>
      <Button onClick={()=>toggleRowSelection(true)}>将第2,3条设为选中状态</Button>
      <Button onClick={()=>toggleRowSelection(false)}>取消第2,3条选中状态</Button>
    </div>
    <Table data={tableData} columns={columns} ref={tableEl}/>
  </div>)
}

export default Example
```

### 固定表头

纵向内容过多时，可选择固定表头，添加指定高度即可`height`

```jsx
import {Table} from './index'
import tableData from './demoJs.json'

function Example() {
  const columns = [
    {
      type: 'selection',
      width: '50px'
    },
    {
      type: 'index',
      label: '序号',
      prop: 'index'
    },
    {
      prop: 'date',
      label: '日期'
    },
    {
      prop: 'name',
      label: '姓名'
    },
    {
      prop: 'address',
      label: '地址'
    }
  ]

  return (<div className='demo-table'>
    <Table data={tableData} columns={columns} height="200px"/>
  </div>)
}

export default Example
```

### 固定头和列

横向内容过多时，可选择固定列。添加宽`width`固定列宽；`column`添加`fixed="left/right"`。需要注意设置表格宽时同时要对每列设置固定宽，否则不会出现横向滚动条

```jsx
import {Table} from './index'
import tableData from './demoJs.json'

function Example() {
  const columns = [
    {
      type: 'selection',
      fixed: 'left',
      width: '50px',
      className:'cls'
    },
    {
      type: 'index',
      label: '序号',
      width: '50px',
      prop: 'index'
    },
    {
      prop: 'date',
      label: '日期',
      width: '120px'
    },
    {
      prop: 'name',
      label: '姓名',
      width: '150px'
    },
    {
      prop: 'address',
      label: '地址',
      width: '300px'
    },
    {
      prop: 'zip',
      label: '邮箱',
      width: '100px',
      fixed:'right'
    }
  ]
  return (<div className='demo-table'>
    <Table data={tableData} columns={columns} height="200px" width="600px"/>
  </div>)
}

export default Example
```

### 添加排序

`column`添加排序 `sortBy="true"`表示当前列可排序。点击排序触发事件`sortChange`。设置`sortSingle="true"`时只允许一列排序

```jsx
import {Table} from './index'
import tableData from './demoJs.json'

function Example() {
  const columns = [
    {
      type: 'selection'
    },
    {
      type: 'index',
      label: '序号'
    },
    {
      prop: 'date',
      label: '日期'
    },
    {
      prop: 'name',
      label: '姓名'
    },
    {
      prop: 'address',
      label: '地址'
    }
  ]
  const sortChange = (obj) => {
    console.log(obj)
    alert(JSON.stringify(obj))
  }
  return (<div className='demo-table'>
    <Table data={tableData} columns={columns} sortChange={sortChange}/>
  </div>)
}

export default Example
```

### 拖动改变列宽

默认所有列允许拖动，当设置`drag="false"`不允许拖动。或者是默认情况下对单个column设置`drag="false"`表示当前列不可拖动。拖动改变列宽事件`dragChange`可返回各列的宽，可用于和服务端对接

```jsx
import {Table} from './index'
import tableData from './demoJs.json'
import fa from "./ant.c36feba9";

function Example() {
  const columns = [
    {
      type: 'selection',
      drag: false
    },
    {
      type: 'index',
      label: '序号',
      drag: false
    },
    {
      prop: 'date',
      label: '日期'
    },
    {
      prop: 'name',
      label: '姓名'
    },
    {
      prop: 'address',
      label: '地址'
    }
  ]
  const dragChange = (obj) => {
    console.log(obj)
    alert(JSON.stringify(obj))
  }
  return (<div className='demo-table'>
    <Table data={tableData} columns={columns} dragChange={dragChange}/>
  </div>)
}

export default Example
```

### 其他参数设置

```jsx
import {useState} from 'react'
import {Button} from '../button'
import {Table} from './index'
import tableData from './demoJs.json'

function Example() {
  const columns = [
    {
      type: 'selection'
    },
    {
      type: 'index',
      label: '序号'
    },
    {
      prop: 'date',
      label: '日期'
    },
    {
      prop: 'name',
      label: '姓名'
    },
    {
      prop: 'address',
      label: '地址'
    }
  ]
  const [state, setState] = useState({
    showHeader: true,
    hover: true,
    border: true,
    stripe: true,
    ellipsis: true,
    title: true,
    dragLine: true
  })
  return (<div className='demo-table'>
    <div>
      <Button onClick={() => onBtnClick('showHeader')}>显示表头:{state.showHeader}</Button>
      <Button onClick={() => onBtnClick('hover')}>hover高亮:{state.hover}</Button>
      <Button onClick={() => onBtnClick('border')}>显示边框:{state.border}</Button>
      <Button onClick={() => onBtnClick('stripe')}>显示斑马线:{state.stripe}</Button>
      <Button onClick={() => onBtnClick('ellipsis')}>溢出省略号:{state.ellipsis}</Button>
      <Button onClick={() => onBtnClick('title')}>鼠标滑动过提示:{state.title}</Button>
      <Button onClick={() => onBtnClick('dragLine')}>拖动改变列宽时垂直线:{state.dragLine}</Button>
    </div>
    <Table
    data={tableData}
    columns={columns}
    showHeader={state.showHeader}
    hover={state.hover}
    border={state.border}
    stripe={state.stripe}
    ellipsis={state.ellipsis}
    drag-line={state.dragLine}/>
  </div>)
}

export default Example
```

### 扩展列

`type="extend"`,使用 `scope.extend()`方法可展开或收起扩展行列，`scope.toggle`返回当前展开或收起状态

```jsx
import {Table} from './index'
import tableData from './demoJs.json'

function Example() {
  const columns = [
    {
      type: 'selection'
    },
    {
      type: 'index',
      label: '序号'
    },
    {
      prop: 'date',
      label: '日期'
    },
    {
      prop: 'name',
      label: '姓名'
    },
    {
      prop: 'address',
      label: '地址'
    },
    {
      label: '操作',
      formatter: (scope) => {
        return (<span onClick={() => scope.extend()}>{
          scope.toggle ? '收起' : '展开'
        }</span>)
      }
    },
    {
      type: 'extend' // todo
    }
  ]
  return (<div className='demo-table'>
    <Table data={tableData} columns={columns} hasChild={true}/>
  </div>)
}

export default Example
```

### 子级数据

类似于扩展列，使用 `scope.extend()`方法展开或收起子节点，`scope.toggle`返回当前展开或收起状态。子节点scope数据除了row，还包含parentRow父级信息

```jsx
import {Table} from './index'
import tableData from './demoJs.json'

function Example() {
  const columns = [
    {
      type: 'selection'
    },
    {
      type: 'index',
      label: '序号'
    },
    {
      prop: 'date',
      label: '日期'
    },
    {
      prop: 'name',
      label: '姓名'
    },
    {
      prop: 'address',
      label: '地址'
    },
    {
      label: '操作',
      formatter: (scope) => {
        return (<span onClick={() => scope.extend()}>{
          scope.toggle ? '收起' : '展开子级'
        }</span>)
      }
    }
  ]
  return (<div className='demo-table'>
    <Table data={tableData} columns={columns} hasChild={true}/>
  </div>)
}

export default Example
```

### 子级异步加载

使用 `scope.extend()`方法展开或收起子节点，会触发方法`lazyLoad`,通过返回当前行信息以加载异步数据

```jsx
import {Table} from './index'
import tableData from './demoJs.json'

function Example() {
  const columns = [
    {
      type: 'selection'
    },
    {
      type: 'index',
      label: '序号'
    },
    {
      prop: 'date',
      label: '日期'
    },
    {
      prop: 'name',
      label: '姓名'
    },
    {
      prop: 'address',
      label: '地址'
    },
    {
      label: '操作',
      formatter: (scope) => {
        return (<span onClick={() => scope.extend()}>{
          scope.toggle ? '收起' : '加载子级'
        }</span>)
      }
    }
  ]
  const lazyLoad = (row, resolve) => {
    // row 当前点击行信息
    // 模拟请求加载
    console.log('row')
    setTimeout(() => {
      const child = [
        {name: '异步数据1', date: '2021'},
        {name: '异步数据2', date: '2021'}
      ]
      resolve(child)
    }, 500)
  }
  return (<div className='demo-table'>
    <Table data={tableData} columns={columns} hasChild={true} lazyLoad={lazyLoad}/>
  </div>)
}

export default Example
```

### 合并行或列

多行或多列共用一个数据时，可以合并行或列。通过给传入`rowColSpan`方法可以实现合并行或列，方法的参数(当前行号`rowIndex`,当前列号`columnIndex`,当前行`row`,当前列`column`)
四个属性。该函数返回一个包含两个数字的数组，第一个`rowspan`，第二个`colspan`，即向纵向和横向合并多少个单元格。

```jsx
import {Table} from './index'
import tableData from './demoJs.json'

function Example() {
  const columns = [
    {
      type: 'selection'
    },
    {
      type: 'index',
      label: '序号'
    },
    {
      prop: 'date',
      label: '日期'
    },
    {
      prop: 'name',
      label: '姓名'
    },
    {
      prop: 'address',
      label: '地址'
    }
  ]
  const rowColSpan = (rowIndex, columnIndex) => {
    if (rowIndex === 0 && columnIndex === 1) {
      return [2, 3] // 表示在rowIndex=0行，columnIndex = 1列位置，向下合并两个和向右合并3个单元格
    }
  }
  return (<div className='demo-table'>
    <Table data={tableData} columns={columns} rowColSpan={rowColSpan}/>
  </div>)
}

export default Example
```

### 多级表头

使用`columns`表头参数可支持多级表头,目前纵向合并需要手动设置`rowspan`

```jsx
import {Table} from './index'
import tableData from './demoJs.json'

function Example() {
  const columns = [
    {
      label: '日期',
      children: [
        {
          label: '年份',
          prop: 'date'
        },
        {
          label: '月份',
          prop: 'date'
        }
      ]
    },
    {
      prop: 'name',
      label: '姓名',
      rowspan: 2
    },
    {
      label: '收化地址',
      children: [
        {
          label: '省份',
          prop: 'province'
        },
        {
          label: '城市',
          prop: 'city'
        },
        {
          label: '地址',
          prop: 'address'
        }
      ]
    },
    {
      prop: 'control',
      label: '操作',
      rowspan: 2,
      formatter: () => {
        return <a onClick={delClick}>删除</a>
      }
    }
  ]
  const delClick = () => {

  }
  return (<div className='demo-table'>
    <Table data={tableData} columns={columns}/>
  </div>)
}

export default Example
```

### 带分页组件

内置分页组件

```jsx
import {Table} from './index'
import tableData from './demoJs.json'

function Example() {
  const columns = [
    {
      type: 'selection'
    },
    {
      type: 'index',
      label: '序号'
    },
    {
      prop: 'date',
      label: '日期'
    },
    {
      prop: 'name',
      label: '姓名'
    },
    {
      prop: 'address',
      label: '地址'
    }
  ]
  const pagination = {
    current: 1,
    pageSize: 3,
    onChange: (v) => {
      console.log(v)
    }
  }
  return (<div className='demo-table'>
    <Table data={tableData} columns={columns} pagination={pagination}/>
  </div>)
}

export default Example
```

### 鼠标滑过tooltip提示

添加`tooltip=true`或`tooltip="{show:true,direction:'left',..其他所有的tooltip属性}"`即可在鼠标滑过时显示`tooltip`提示，不显示可以传`show:false`
默认为`true`

```jsx
import {Table} from './index'
import tableData from './demoJs.json'

function Example() {
  const columns = [
    {
      type: 'selection'
    },
    {
      type: 'index',
      label: '序号'
    },
    {
      prop: 'date',
      label: '日期'
    },
    {
      prop: 'name',
      label: '姓名'
    },
    {
      prop: 'address',
      label: '地址',
      tooltip: {show: true, direction: 'left'}
    }
  ]
  return (<div className='demo-table'>
    <Table data={tableData} columns={columns}/>
  </div>)
}

export default Example
```

### 使用Tag显示值

使用`Tag`参数`tab={dict:{},...其他所有参数}`，即可在表格中显示`tag`样式

其中`dict`为值对应的`tag`类型，如`dict:{'男':'info','女':'danger'}`，即值为男时显示tag类型为`info`

```jsx
import {Table} from './index'
import tableData from './demoJs.json'

function Example() {
  const columns = [
    {
      type: 'selection'
    },
    {
      type: 'index',
      label: '序号'
    },
    {
      prop: 'date',
      label: '日期'
    },
    {
      prop: 'sex',
      label: '性别',
      tag: {dict: {男: 'info', 女: 'danger'}}
    },
    {
      prop: 'address',
      label: '地址',
      tooltip: {show: true, direction: 'left'}
    }
  ]
  return (<div className='demo-table'>
    <Table data={tableData} columns={columns}/>
  </div>)
}

export default Example
```

### 横向滚动条固定在浏览器底部

通过设置`fixedBottomScroll`可将横向滚动条固定在浏览器底部，`true`时滚动主体为`document`，字符时为当前滚动的区域如`fixedBottomScroll='.scroll`'，则滚动区域为`scroll`
，注意：此设置会覆盖`height`属性的值

### 示例数据

```json
[
  {
    "date": "2016-05-03",
    "name": "张三",
    "province": "广东",
    "city": "白云区",
    "address": "广东省广州市白云区无名路888号",
    "zip": 200330,
    "children": [
      {
        "date": "2016-05-00",
        "name": "子级",
        "province": "子级广东",
        "city": "子级白云区",
        "address": "子级广东省广州市白云区无名路888号",
        "zip": 200330
      }
    ]
  },
  {
    "date": "2016-05-04",
    "name": "李四",
    "province": "广东",
    "city": "白云区",
    "address": "广东省广州市白云区无名路888号",
    "zip": 200330
  },
  {
    "date": "2016-05-05",
    "name": "李四5",
    "province": "广东",
    "city": "白云区",
    "address": "广东省广州市白云区无名路888号",
    "zip": 200330
  },
  {
    "date": "2016-05-06",
    "name": "李四6",
    "province": "广东",
    "city": "白云区",
    "address": "广东省广州市白云区无名路888号",
    "zip": 200330
  },
  {
    "date": "2016-05-07",
    "name": "李四7",
    "province": "广东",
    "city": "白云区",
    "address": "广东省广州市白云区无名路888号",
    "zip": 200330
  },
  {
    "date": "2016-05-08",
    "name": "李四8",
    "province": "广东",
    "city": "白云区",
    "address": "广东省广州市白云区无名路888号",
    "zip": 200330
  },
  {
    "date": "2016-05-09",
    "name": "李四9",
    "province": "广东",
    "city": "白云区",
    "address": "广东省广州市白云区无名路888号",
    "zip": 200330
  },
  {
    "date": "2016-05-10",
    "name": "李四10",
    "province": "广东",
    "city": "白云区",
    "address": "广东省广州市白云区无名路888号",
    "zip": 200330
  }
]

```

## API

### Table

| 参数           | 类型             | 说明                         |
|----------|----------------|----------------------------|
| data           | array          | 列表数据                       |
| columns        | array          | 表头数据                       |
| showHeader     | boolean/true   | 是否显示表头                     |
| className      | String         | 表格类名                    |
| hover          | boolean/true   | 鼠标经过显示高亮                   |
| border         | boolean/true   | 是否显示表格纵向边框                 |
| stripe         | boolean/true   | 是否显示间隔斑马纹                  |
| height         | String         | table 的高，溢出显示滚动条，且表头固定  |
| width          | String         | 表格外层 div 的宽，当单元格总和大于表格 width 时，出现横向滚动条 |
| ellipsis       | boolean/true   | 表格单元格文字溢出显示...，在不指定列宽时，各列平分表格宽 |
| emptyText      | String         | 无数据时显示的文本                  |
| title          | Boolean/true   | 鼠标滑过单元格时显示 title 提示        |
| drag           | boolean/false  | 允许拖动表头改变当前单元格宽度            |
| dragLine       | boolean/true   | 拖动时显示垂直线                   |
| dragWidth      | array          | 允许拖动最大与最小宽度[min,max]       |
| extendToggle   | boolean/false  | 扩展行/子节点初始展开或收起状态           |
| rowColSpan     | function       | 合并行或列方法。通过给传入 rowColSpan 方法可以实现合并行或列，方法的参数(当前行号 rowIndex,当前列号 columnIndex,当前行 row,当前列 column)四个属性。该函数返回一个包含两个数字的数组，第一个 rowspan，第二个 colspan，即向纵向和横向合并多少个单元格 |
| pagination    | object         | 有相关参数时显示分页，参数的pagination组件参数 |
| hasChild      | boolean/true   | 是否包含子节点数据，为true时，当 `row` 中包含 `children` 字段时，被视为子节点数据 |
| lazyLoad      | function       | 设置了`lazyLoad`时，被视为子节点使用懒加载方式，function(row,resolve) row当前行信息 |
| sortSingle    | boolean/false  | 如果设置了排序功能，开启后只能按其中一个字段排序   |
| fixedBottomScroll    | boolean/string | 固定横向滚动条在底部,可为节点类名|

### Table Event

| 参数          | 说明                                                       |
|-------------|----------------------------------------------------------|
| selectClick | 勾选单列事件，function(list,checked,row, index) list所有已勾选的row集合，checked当前状态，row当前点击行信息，index当前行序号 |
| sortChange  | 排序点击事件                                                   |
| rowClick    | 当前行点击事件，即tr点击事件，function(row,index)                      |
| cellClick   | 当前列点击事件，即td点击事件，function(row,column,rowIndex, columnIndex) |
| dragChange  | 拖动改变列表事件，返回所有列的宽度信息                                      |
| scroll      | 表时滚动时的滚动事件，function(scrollTop,bottom,el)，scrollTop滚动条的位置，bottom是否滚动到底部,el当前滚动的对象 |

### Table Methods

| 参数               | 类型        |
|----------|--------------|
| getSelectAll       | 返回所有选中的行|
| toggleRowSelection | 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中） row, selected |
| toggleSelection | 用于多选表格，切换所有行的选中/清空状态,true为选中，false取消选中，默认false|
| clearSort          | 用于清空排序条件|

### Table-column

| 参数        | 类型             | 说明                                               |
|-----------|----------------|--------------------------------------------------|
| prop      | String         | 对应列内容的字段名                                        |
| label     | String         | 显示的标题                                            |
| width     | String         | 对应列的宽度                                           |
| className | String         | 对应列的类名                                           |
| align     | String         | 对齐方式，可选 left/center/right                        |
| type      | String         | 对应列类型，可选 selection（多选）/index 序号/extend 扩展列       |
| fixed     | Boolean/false  | 固定列，可选 left/right                                |
| sortBy    | Boolean/false  | 当前列显示排序按钮                                        |
| title     | Boolean/false  | 鼠标滑过单元格时显示 title 提示，仅当 table 的 title 为 false 时有效 |
| drag      | Boolean/true   | 允许当前单元格拖动，仅在table的drag=true时有效                   |
| formatter | function       | 用来格式化内容,Function(row, column, cellValue, index)  |
| tooltip   | boolean/object | 鼠标滑过显示`tooltip`，参数详见`tooltip`组件                  |
| tag       | object         | 使用`tag`样式显示对应值，参数详见`tag`                         |
| tag.dict  | object         | 类型对应字典                                           |
