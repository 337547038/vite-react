import React from 'react'
import {Dialog} from "../dialog"
import type {DialogProps} from "../dialog"
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

interface MessageProps extends Omit<DialogProps, 'visible' | 'content' | 'appendToBody' | 'isAlert' | 'closeModal' | 'onClose'> {
  content?: string
}

const createRoot = (props: MessageProps) => {
  const mountNode = document.createElement('div')
  ReactDOM.createRoot(mountNode).render(
    // dialog包含了button，需要在路由下使用，这里也需包一层
    // 路由模式应与App下的模式保持一致，否则当弹层content出现路由Link链接时会出异常
    <BrowserRouter>
      <Dialog
        {...props}
        isAlert={true}
        closeModal={false}
        appendToBody={false}
        onClose={() => onClose(mountNode)} />
    </BrowserRouter>
  )
  document.body.appendChild(mountNode)
  /*ReactDOM.createPortal(downPaneHtml, document.body)*/
}
const onClose = (div: HTMLDivElement) => {
  document.body.removeChild(div)
}
export const Message = {
  Alert: (content: string, props?: MessageProps) => {
    createRoot({
      ...props,
      content: content,
      title: props?.title || '信息',
      confirm: props?.confirm || '确定',
      className: 'dialog-alert'
    })
  },
  Msg: (content: string, props?: MessageProps) => {
    createRoot({
      ...props,
      content: content,
      className: 'dialog-msg',
      showClose: false,
      autoClose: props?.autoClose || 3,
      modal: props?.modal || false
    })
  },
  Success: (content: string, props?: MessageProps) => {
    createRoot({
      ...props,
      content: content,
      className: 'dialog-msg',
      icon: '1',
      showClose: false,
      autoClose: props?.autoClose || 3,
      modal: props?.modal || false
    })
  },
  Fail: (content: string, props?: MessageProps) => {
    createRoot({
      ...props,
      content: content,
      className: 'dialog-msg',
      icon: '2',
      showClose: false,
      autoClose: props?.autoClose || 3,
      modal: props?.modal || false
    })
  },
  Info: (content: string, props?: MessageProps) => {
    createRoot({
      ...props,
      content: content,
      className: 'dialog-msg',
      icon: '3',
      showClose: false,
      autoClose: props?.autoClose || 3,
      modal: props?.modal || false
    })
  }
}
