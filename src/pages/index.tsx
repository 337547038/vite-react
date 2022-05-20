import React, {useState, useEffect, useContext, useRef, createRef} from 'react';
import Test from "./components/test";
import Test2 from "./components/test2";
import Test3 from "./components/test3";
import Q1 from "./components/q1";
import Q2 from "./components/q2";
import {BrowserRouter, Link, useParams, useSearchParams, useLocation} from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {Button} from '@/packages/button';
import {Input} from '../packages/input';
import type {InputRef} from '../packages/input';
import {Tag} from '../packages/tag'
import {SelectDown} from '../packages/selectDown'


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
interface ButtonProps {
  name: string
  children?: React.ReactNode
}

const App: React.FC<ButtonProps> = (props) => {
  const myDiv = useRef<InputRef>(null);
  const btn = useRef();
  const onChange = () => {
  }
  const onBlur = (val: string, evt: React.ChangeEvent) => {
    console.log(val)
    console.log(evt)
  }

  // const list = ['a一', 'a二', 'a三']
  const [list, setList] = useState(['a一', 'a二', 'a三'])
  const [visible, setVisible] = useState(false)
  const onClick = () => {

  }
  const onClick2 = () => {
    console.log(visible)
  }
  const [value, setValue] = useState(['react', 'vue'])
  /*  setTimeout(() => {
      setValue(['abc'])
      console.log('settimeout')
    }, 5000)*/
  const el = useRef(null)
  return (
    /*<div><Test3></Test3></div>*/
    <div>
      <SelectDown
        placeholder="placeholder"
        defaultValue={value}
        downStyle={{width: '100px'}}
        appendToBody={true}
        filterable
        clear={true}
        onChange={onChange}
        ref={el}>
        <p onClick={onClick2}>21311</p>
        <p>基础用法</p>
      </SelectDown>
      <Button onClick={onClick}>1</Button>
      <Button onClick={onClick2}>2</Button>
    </div>
  )
};
App.displayName = 'testApp'
export default App;
//export default React.memo(App);
/*
export default forwardRef(App)*/
