import React, {useState, useEffect, useCallback,useRef} from 'react'

function App() {
  const [value, setValue] = useState('v')
  let text = '1'
  const ref=useRef('1')
  const onClick = () => {
    text = 'value'
    ref.current=new Date().getTime().toString()
  }
  const onClick2 = () => {
    setValue('vvvvvv')
   //console.log(text) // 两次点击后这里的值会被重置为1
    console.log(ref.current)
  }
  return (<div>
    <div onClick={onClick}>onclick 先点击修改text的值</div>
    <div onClick={onClick2}>onclick2</div>
  </div>)
}

export default App
