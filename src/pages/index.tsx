import React, {useState, useEffect, useContext, useRef, createRef} from 'react';
import Test from "./components/test";
import Test2 from "./components/test2";
import {BrowserRouter, Link, useParams, useSearchParams, useLocation} from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {Button} from '@/packages/button';
import {Input} from '../packages/input';
import type {InputRef} from '../packages/input';
import {Radio} from '../packages/radio'
import {Checkbox} from '../packages/checkbox'


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
interface B1 {
  title: string
  content: string
}

interface ButtonProps extends B1 {
  name: string
}

const App: React.FC<ButtonProps> = (props) => {
  const myDiv = useRef<InputRef>(null);
  const btn = useRef();


  useEffect(() => {
    console.log("this.myDiv.current", myDiv);
    // console.log("this.btn.current", btn);
  })
  const onClick = () => {
    /*console.log(myDiv.current?.getValue())
    myDiv.current?.focus()*/
  }
  const onChange = (val: string, evt: React.ChangeEvent) => {
    /*console.log(val)
    console.log(evt)*/

  }
  const onBlur = (val: string, evt: React.ChangeEvent) => {
    console.log(val)
    console.log(evt)
  }
  const [checkedList, setCheckedList] = useState(['1', '3'])
  const checkboxAll = () => {
    setCheckedList(['1', '2', '3', '4', '5'])
  }
  const checkboxNone = () => {
    setCheckedList([])
  }
  const onChange2 = (val) => {
    console.log(val)
  }
  return (
  <div className="docs-demo">
    <Checkbox value={'1'} checked={checkedList} onChange={onChange2}>选项1</Checkbox>
    <Checkbox value={'2'} checked={checkedList}>选项2</Checkbox>
    <Checkbox value={'3'} checked={checkedList}>选项3</Checkbox>
    <Checkbox value={'4'} checked={checkedList}>选项4</Checkbox>
    <Checkbox value={'5'} checked={checkedList}>选项5</Checkbox>
    <p>
      <Button onClick={checkboxAll}>全选</Button>
      <Button onClick={checkboxNone}>全不选</Button>
    </p>
  </div>)

};
App.displayName = 'testApp'
export default App;
/*
export default forwardRef(App)*/
