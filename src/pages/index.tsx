import {useState,useEffect} from 'react'
import Test from "./components/test";
import Test2 from "./components/test2";
import {BrowserRouter, Link,useParams, useSearchParams, useLocation} from 'react-router-dom'
function App() {
  const params = useParams(); // 获取动态路由的值
  const [searchParams, setSearchParams] = useSearchParams(); // 获取查询字符串的值
  const location = useLocation(); // 获取上一个页面传递进来的 state 参数
  console.log(location)
  const [count, setCount] = useState(0)
  let a = 0
  const onClick0 = () => {
    console.log('click')
    setCount(count + 1)
    a = 2
  }
  useEffect(() => {
    console.log('10')
    // Update the document title using the browser API
    document.title = `You clicked times`;
  });
  return (
    <div className="App">
      {count}
      <div>{a}</div>
      <button onClick={onClick0}>
        Click me
      </button>
      <hr />
      <Test title='title'/>
      <hr />
      <Test2 title='title'/>
    </div>
  )
}

export default App
