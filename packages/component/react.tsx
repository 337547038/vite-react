import React, {useState} from "react";
import "./style.css"

interface Props {
  code?: string
  children: React.ReactNode
}

const Preview: React.FC<Props> = (props) => {
  const [visible, setVisible] = useState<boolean>(false)
  const toggleCode = () => {
    setVisible(!visible)
  }
  const copyCode = () => {
    try {
      navigator.clipboard.writeText(decodeURIComponent(props.code))
    } catch (err) {
      console.log(err)
    }
  }
  const controlHtml = (
    <div className="tools">
      <div className="item" onClick={copyCode}>
        <svg
          fill="none"
          height="20"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="item" onClick={toggleCode}>
        <svg height="20" viewBox="0 0 512 512"
             width="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M160 368L32 256l128-112M352 368l128-112-128-112M304 96l-96 320"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="46"
          />
        </svg>
      </div>
    </div>
  )
  return (<div className="doc-preview">
    <div className="component">{props.children[0]}</div>
    <div className="fixed-tools" style={{display: visible ? "block" : 'none'}}>
      {controlHtml}
    </div>
    <div className="code" style={{display: visible ? "block" : 'none'}}>{props.children[1]}</div>
    <div className="control-tools">
      <div className="text" onClick={toggleCode}>{visible ? '隐藏代码' : '展开代码'}</div>
      {controlHtml}
    </div>
  </div>)
}
export default Preview
