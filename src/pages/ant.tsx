import { Button,Input } from 'antd';
import React,{useState, useEffect} from 'react';
import 'antd/dist/antd.css';
function AntApp(){
  const [disabled, setDisabled] = useState(false);
  const [value, setValue] = useState('1');
  const onClick=()=>{
    setDisabled(true);
  };
  return (<div>
    {value}
    <Button disabled={disabled}>Default Button</Button>
    <div onClick={onClick}>click</div>
    <Input placeholder="Basic usage" defaultValue="mysite" value={value}/>
  </div>);
}
export default AntApp;
