import React, {useState, useEffect,useContext } from 'react';
import Test from "./components/test";
import Test2 from "./components/test2";
import {BrowserRouter, Link, useParams, useSearchParams, useLocation} from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {Button} from '@/packages/button';

// @ts-ignore
import ThemeContext from './context/ThemeContext.js';
function App() {
  const params = useParams(); // 获取动态路由的值
  const [searchParams, setSearchParams] = useSearchParams(); // 获取查询字符串的值
  const location = useLocation(); // 获取上一个页面传递进来的 state 参数
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    console.log('10');
    // Update the document title using the browser API
    document.title = `You clicked times`;
  });
  const onClick = () => {
    console.log('onClick');
    setDisabled(true);
  };
  //const ThemeContext = React.createContext('light');
  // ThemeContext.displayName = 'displayName'
  return (
    <div>
      <ThemeContext.Provider value="dark">
        <Button icon="search" loading={disabled} type='primary' className="btn" href='/tag'>默认按钮</Button>
        <Button name="name123" type='default' nativeType="button" onClick={onClick} disabled={disabled}>默认按钮</Button>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
