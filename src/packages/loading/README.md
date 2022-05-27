# Loading 加载中

### 基础用法

```jsx
import {Loading} from './index';

function Example() {
  return (<div className="demo-loading" style={{height:'50px'}}>
    <Loading visible={true}/>
  </div>)
}

export default Example

```

### 加载状态提示文案

```jsx
import {Loading} from './index';

function Example() {
  return (<div className="demo-loading">
    <Loading visible={true} text='Loading...'>
      <div style={{height:'100px',padding:'15px'}}>
        把内容内嵌到 `Loading` 中，将现有容器变为加载状态。同时可设置加载中提示文案
      </div>
    </Loading>
  </div>)
}

export default Example

```

### 设置大小

```jsx
import {Loading} from './index';

function Example() {
  return (<div className="demo-loading" style={{height:'100px'}}>
    <div className='item'><Loading visible={true} size='large'/></div>
    <div className='item'><Loading visible={true} size='normal'/></div>
    <div className='item'><Loading visible={true} size='small'/></div>
    <div className='item'><Loading visible={true} size='mini'/></div>
  </div>)
}

export default Example

```

## API

### Loading Props

| 参数         | 类型     | 说明                               |
|------------|--------|----------------------------------|
| visible    | boolean | 等待状态                             |
| text       | string | 文案提示                             |
| size       | 大小     | 显示大小，可选`large,normal,small,mini` |

