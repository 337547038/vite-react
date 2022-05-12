import { Button } from 'antd';
import React,{useState, useEffect} from 'react';
import 'antd/dist/antd.css';
function AntApp(){
  const [disabled, setDisabled] = useState(false);
  const onClick=()=>{
    setDisabled(true);
  };
  return (<div>
    <Button disabled={disabled}>Default Button</Button>
    <div onClick={onClick}>click</div>
  </div>);
}
export default AntApp;
