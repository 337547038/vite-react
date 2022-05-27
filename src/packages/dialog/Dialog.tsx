import React, {useRef, useState, useEffect} from 'react'
import classNames from 'classnames'
import {prefixCls} from '../prefix'
import {Button} from "../button"
import ReactDOM from 'react-dom'
import {
  getOffset,
  scrollTop,
  getWindow,
  getScrollbarWidth
} from '../util/dom'

export interface Props {
  visible?: boolean
  title?: React.ReactNode
  footer?: React.ReactNode
  zIndex?: number
  content?: string
  appendToBody?: boolean // Dialog 自身是否插入至 body 元素上
  top?: string // 默认弹出时距离顶部的距离
  width?: string
  height?: string // 内容区域的高度
  center?: string // 垂直对齐
  modal?: boolean // 是否需要遮罩层
  closeModal?: boolean // 是否可以通过点击 modal 关闭 Dialog
  lockScroll?: boolean // 是否在 Dialog 出现时将 body 滚动锁定
  className?: string
  showClose?: boolean // 是否显示关闭按钮
  confirm?: string // 确认按钮
  cancel?: string // 取消按钮
  callback?: (fn: () => void) => void
  move?: boolean // 允许拖动窗口
  autoClose?: number // 自动关闭时间
  closeTips?: string // 自动关闭时提示语,大写S会被替换为具体时间
  beforeClose?: (type: string, fn: () => void) => boolean | void // 关闭前的回调
  animation?: string
  isAlert?: boolean // 用于区别引用形式，组件或者是插件，不需要通过外部传参。true时关闭弹窗时同时从body移除
  //remove?: () => void // 用于移动message弹窗
  icon?: string | number // 主要用于this.$dialog中常见的几种提示
  children?: React.ReactNode
  onClose?: () => void
}

interface StateType {
  moveFlag?: boolean
  scrollbar?: any
}

const Dialog: React.FC<Props> = (props) => {
  const {
    zIndex = 999,
    appendToBody = true, // Dialog 自身是否插入至 body 元素上
    modal = true, // 是否需要遮罩层
    closeModal = true, // 是否可以通过点击 modal 关闭 Dialog
    showClose = true, // 是否显示关闭按钮
    autoClose = 0, // 自动关闭时间
    closeTips = 'S秒后自动关闭', // 自动关闭时提示语,大写S会被替换为具体时间
    icon = 0 // 主要用于this.$dialog中常见的几种提示
  } = props
  const [visible, setVisible] = useState(props.visible)
  const [moveStyle, setMoveStyle] = useState<React.CSSProperties>({})
  const [state, setState] = useState<StateType>({})
  const [countdown, setCountdown] = useState<number>(0) // 倒计时
  const headEl = useRef<HTMLDivElement>(null)
  const dialogEl = useRef<HTMLDivElement>(null)
  const clearTime = useRef(0)
  useEffect(() => {
    setVisible(props.visible)
    if (props.visible && autoClose > 0) {
      // 调用自动关闭
      clearTime.current && window.clearInterval(clearTime.current)
      setCountdown(autoClose)
    }
  }, [props.visible])
  useEffect(() => {
    if (props.visible && autoClose > 0) {
      clearTime.current = window.setInterval(() => {
        console.log(countdown)
        if (countdown > 1) {
          setCountdown(countdown - 1)
        } else {
          props.callback && props.callback(close)
          close()
        }
      }, 1000)
    }
    return () => {
      clearTime.current && window.clearInterval(clearTime.current)
    }
  }, [countdown])
  useEffect(() => {
    if (props.lockScroll) {
      setState({...state, scrollbar: getScrollbarWidth(true)})
      // 滚动条宽
    }
  }, [])
  const btnClick = (type: string) => {
    // 点击遮罩层不允许操作时
    if (!closeModal && type === 'modal') {
      return false
    }
    // 点确定并且绑定了回调事件时，由确定回调关闭
    // 自动关闭时不处理，即时间没到也可以点确定取消直接关闭
    // console.log('props.callback')
    // console.log(props.callback)
    if (!props.autoClose && type === 'confirm' && props.callback) {
      // emit('callback', close) // 将关闭方法传出去
      props.callback(close) // 回调时使用return true关闭
      //console.log(console)
      return false
    }
    if (props.beforeClose && !props.beforeClose(type, close)) {
      // beforeClose返回false时阻止关闭
      // props.beforeClose(type, close)
      return false
    } else {
      close()
      props.onClose && props.onClose()
    }
  }
  const close = () => {
    setVisible(false)
    if (autoClose) {
      clearTime.current && window.clearInterval(clearTime.current)
    }
    // message方法时移除，延时移除可保留过渡动画
    /*if (props.isAlert && props.remove) {
      window.setTimeout(() => {
        props.remove && props.remove()
      }, 500)
    }*/
    setScrollBarLock(false) // 解锁
  }
  const setScrollBarLock = (bool: boolean) => {
    if (props.lockScroll) {
      // 滚动body滚动
      const {hasScroll, width} = state.scrollbar
      if (hasScroll && bool) {
        // 当前页面有滚动条
        document.body.style.overflow = 'hidden'
        document.body.style.paddingRight = width + 'px' // 滚动条的宽，防抖动
      }
      if (!bool && hasScroll) {
        // 解锁
        document.body.style.overflow = ''
        document.body.style.paddingRight = '' // 滚动条的宽，防抖动
      }
    }
  }
  const contentBodyClick = (evt: React.MouseEvent) => {
    evt.stopPropagation()
  }
  const mouseDown = (evt: React.MouseEvent) => {
    if (props.move && headEl.current) {
      state.moveFlag = false
      let offSet = getOffset(headEl.current)
      let x = evt.pageX - offSet.left
      let y = evt.pageY - offSet.top
      const scrollT = scrollTop()
      state.moveFlag = true
      document.onmousemove = (evt: MouseEvent) => {
        if (state.moveFlag) {
          let left = evt.pageX - x
          let top = evt.pageY - y - scrollT
          const windowWH = getWindow()
          const dialogHeight = dialogEl.current?.offsetHeight || 0
          const dialogWidth = dialogEl.current?.offsetWidth || 0
          if (left <= 0) {
            left = 0 // 最左边
          } else if (left > windowWH.width - dialogWidth) {
            // 最右边，窗口宽－弹层宽
            left = windowWH.width - dialogWidth
          }
          if (top <= 0) {
            top = 0
          } else if (top > windowWH.height - dialogHeight) {
            top = windowWH.height - dialogHeight
          }
          setMoveStyle({left: left + 'px', top: top + 'px'})
          // this.$el.style.transitionDuration = '0s' // 拖动时要设为0，否则拖动很慢的感觉
        }
        return false
      }
      document.onmouseup = function () {
        document.onmousemove = null
        document.onmouseup = null
        state.moveFlag = false
      }
    }
  }
  let iconName = ''
  switch (icon + '') {
    case '1':
      iconName = 'success'
      break
    case '2':
      iconName = 'failure'
      break
    case '3':
      iconName = 'tips'
      break
    default:
      iconName = icon + ''
  }
  const dialogHtml = (<div
    className={classNames(`${prefixCls}-dialog-modal`, {modal: !modal, center: props.center})}
    style={{zIndex: zIndex, display: visible ? '' : 'none'}}
    onClick={() => {
      btnClick('modal')
    }}>
    <div
      ref={dialogEl}
      className={classNames(props.className, {
        [prefixCls + '-dialog']: true,
        [prefixCls + '-dialog-isAlert']: props.isAlert
      })}
      style={{
        width: props.width,
        top: moveStyle.top,
        left: moveStyle.left,
        'transitionDuration': state.moveFlag ? '0s' : ''
      }}
      onClick={contentBodyClick}>
      {showClose ?
        <a
          className={`${prefixCls}-dialog-close icon-close`}
          onClick={() => {
            btnClick('close')
          }}
        /> : ''}
      {autoClose > 0 ?
        <div className={`${prefixCls}-dialog-auto-close`}>
          <span>{closeTips.replace('S', countdown.toString())}</span>
        </div> : ''}
      {props.title ?
        <div
          className={classNames(`${prefixCls}-dialog-header`, {move: props.move})}
          onMouseDown={mouseDown} ref={headEl}>
          {props.title}
        </div> : ''}
      {props.content || props.children ?
        <div
          style={{height: props.height}}
          className={classNames({
            [prefixCls + '-dialog-alert']: props.isAlert,
            [prefixCls + '-dialog-content']: true
          })}>
          {icon ?
            <i className={`icon-${iconName}`} /> : ""}
          {props.content ?
            <div className={prefixCls + '-dialog-text'}>
              {props.content}
            </div> : props.children
          }
        </div> : ''}
      {props.confirm || props.cancel || props.footer ?
        <div className={`${prefixCls}-dialog-footer`}>
          {props.footer ? props.footer : ''}
          {props.cancel ?
            <Button type="cancel" onClick={() => {
              btnClick('cancel')
            }}
            >{props.cancel}
            </Button> : ''}
          {props.confirm ?
            <Button v-if="confirm" type="primary" onClick={() => {
              btnClick('confirm')
            }}>{props.confirm}
            </Button> : ''}
        </div>
        : ''}
    </div>
  </div>)
  return appendToBody ? ReactDOM.createPortal(dialogHtml, document.body) : dialogHtml
}
// Dialog.displayName = 'Dialog'
export default Dialog
