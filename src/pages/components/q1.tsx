import React, {useState,useEffect,useCallback} from 'react'
function App(){
  const [value,setValue]=useState('1')
  const [value2,setValue2]=useState('v1')
  const onClick=()=>{
    setValue(new Date().getTime().toString())
    console.log(value) // 第二次点击后还是输出1，为什么不是2
  }
  const onClick2=()=>{
    //setValue2('2022')
   // console.log(value2)
  }
  useEffect(() => {
    console.log('useEffect')
    document.addEventListener('click', onClick)
  },[])
  return(<div>
    <p>value的值:{value}</p>
    <p>点击设置value的值并使用log输出</p>
    <p></p>
    <div onClick={onClick2}>onclick2</div>
  </div>)
}
export default App
