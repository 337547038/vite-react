import React, {useState, useEffect,useContext,useRef,createRef } from 'react';
import Test from "./components/test";
import Test2 from "./components/test2";
import {BrowserRouter, Link, useParams, useSearchParams, useLocation} from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {Button} from '@/packages/button';
import {Input} from '../packages/input';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ThemeContext from './context/ThemeContext.js';
/*
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
  const btnRef=useRef(null)
  return (
    <div>
        <Button ref={btnRef} onClick={onClick}>默认按钮</Button>
    </div>
  );
}*/
interface ButtonProps{
  name:string
}
const App:React.FC<ButtonProps> = (props, ref) => {
  const myDiv = useRef();
  const btn = useRef();

  useEffect(()=>{
    console.log("this.myDiv.current", myDiv);
    console.log("this.btn.current", btn);
  })

  return(
    <div>
      <Input ref={myDiv}></Input>
      <Test2 ref={btn}></Test2>
      {/*<Button ref={btn}></Button>*/}
    </div>
  )

};
App.displayName='testApp'
export default App;
/*
export default forwardRef(App)*/
