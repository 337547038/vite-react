# Pagination 分页

### 基础用法

```jsx
import {Pagination} from './index'

function Example() {
  const onChange = (page:number) => {
    console.log(page)
  }
  return (<div className='demo-page'>
    <Pagination total={50} current={1} onChange={onChange}/>
  </div>)
}

export default Example

```

### 其他选项参数

```jsx
import {Pagination} from './index'

function Example() {
  const changePageSizes = (page: number) => {
    alert(page)
  }
  return (<div className='demo-page'>
    <Pagination
      total={5000}
      current={1}
      showJumper={true}
      pageSizes={[10, 20, 30, 50]}
      pageSize={10}
      showTotal={true}
      changePageSizes={changePageSizes} />
  </div>)
}

export default Example

```

### 事件

```jsx
import {Pagination} from './index'

function Example() {
  const onChange = (page) => {
    alert(page)
  }
  return (<div className='demo-page'>
    <Pagination total={50} current={1} onChange={onChange} pageSize={10} />
  </div>)
}

export default Example

```

## API

### Pagination

|参数| 类型             |说明|
|----------|----------------|--------|
|current        | number         |当前页数，支持v-model|
|total          | number         |总条目数|
|pageSize       | number         |每页显示条数|
|pagerCount     | number/5       |页码按钮的数量，当总页数超过该值时会折叠|
|showJumper     | boolean/false  |快速跳转|
|pageSizes      | number[]       |每页显示个数选择器的选项设置|
|showTotal      | boolean/false  |显示总记录条数|
|hideSinglePage | boolean/false  |当小于或只有一页时是否隐藏显示|
|format         | boolean/false  |数值转千分制显示|
|changePageSizes  | function(page) |每页显示条数改变事件|
|change          | function(page)  | 页码点击改变事件      |

