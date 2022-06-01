import React, {useRef, useState, useEffect} from 'react'
import classNames from 'classnames'
import {prefixCls} from '../prefix'
import ReactDOM from 'react-dom'
import {getOffset, getWindow} from "../util/dom";

interface Props {
  children?: React.ReactNode
  content: string // 提示内容
  direction?: string
  maxWidth?: number
  delay?: number // 鼠标移开后延时移除时间，主要能够让鼠标移动提示文字上，单位毫秒
  always?: boolean
  appendToBody?: boolean
  transition?: string
  x?: number // x轴微调
  y?: number // 当前标签与提示语之间的距离，用于微调/
  className?: string
  trigger?: 'hover' | 'click'
  style?: React.CSSProperties
  disabled?: boolean
  onClick?: (visible: boolean) => void
}

const Tooltip: React.FC<Props> = (props) => {
  const {
    appendToBody = true,
    direction = 'top-left',
    maxWidth = 500,
    delay = 0,
    transition = 'fade',
    trigger = 'hover'
  } = props
  const el = useRef<HTMLElement>(null)
  const tooltipEl = useRef(null)
  const [visible, setVisible] = useState<boolean>(false)
  //const clearTime = useRef<number>(0)
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({})
  const translate = (px: number) => {
    // 通过transform平移标签时，如平移的单位为非偶数，会出现字体模糊，这里强制取偶
    if (px % 2 === 0) {
      // 偶数
      return px
    } else {
      return px + 1
    }
  }
  const setPosition = () => {
    if (!el.current) {
      return
    }
    const offset = getOffset(el.current)
    const windowWidth = getWindow().width
    const space = (props.y || 0) + 8 // 当前标签与提示语之间的距离
    const propsX = props.x || 0
    let style: React.CSSProperties = {
      maxWidth: maxWidth + 'px'
    }
    const windowHeight = getWindow().height
    const bottom = windowHeight - offset.top + space + 'px'
    switch (direction) {
      case 'top-left':
        style.left = offset.left + propsX + 'px'
        style.bottom = bottom
        break
      case 'top':
        // 先让提示左边和当前标签中间对齐（偏移位置+标签宽的一半），再向左移50%
        style.transform = 'translateX(-50%)'
        style.left = translate(offset.left + offset.width / 2 + propsX) + 'px'
        style.bottom = bottom
        break
      case 'top-right':
        style.right =
          windowWidth - (offset.left + offset.width + propsX) + 'px'
        style.bottom = bottom
        break
      case 'left':
        // top先让提示语顶部跟标签中间对齐，再上移50%
        style.right = windowWidth - (offset.left - 8 + propsX) + 'px'
        style.top = translate(offset.top + offset.height / 2) + 'px'
        style.transform = 'translateY(-50%)'
        break
      case 'right':
        // top和左边一样
        style.left = offset.left + offset.width + 8 + propsX + 'px'
        style.top = translate(offset.top + offset.height / 2) + 'px'
        style.transform = 'translateY(-50%)'
        break
      case 'bottom-left':
        style.left = offset.left + propsX + 'px'
        style.top = offset.top + offset.height + space + 'px'
        break
      case 'bottom':
        style.left = translate(offset.left + offset.width / 2 + propsX) + 'px'
        style.transform = 'translateX(-50%)'
        style.top = offset.top + offset.height + space + 'px'
        break
      case 'bottom-right':
        style.right =
          windowWidth - (offset.left + offset.width + propsX) + 'px'
        style.top = offset.top + offset.height + space + 'px'
        break
      default:
    }
    setTooltipStyle(Object.assign({}, props.style, style))
  }
  const onClick = (evt: React.MouseEvent) => {
    evt.stopPropagation()
  }
  const mouseClick = (evt: React.MouseEvent) => {
    if (trigger === 'click') {
      if (!props.always) {
        //setVisible(!visible)
        setCssTransition(!visible)
        setPosition()
      }
      props.onClick && props.onClick(!visible)
      evt.stopPropagation()
    }
  }
  const onMouseLeave = () => {
    if (!props.always && trigger === 'hover') {
      close()
    }
  }
  const onMouseEnter = () => {
    if (props.disabled || trigger === 'click') {
      return
    }
    if (!props.always) {
      setPosition()
      // setVisible(true)
      setCssTransition(true)
    }
  }
  const bodyClick = () => {
    if (trigger === 'click') {
      close()
    }
  }
  const close = () => {
    window.setTimeout(() => {
      // setVisible(false)
      setCssTransition(false)
    }, delay)
  }
  const [cssClsTransition, setClsCssTransition] = useState<string>('')
  const setCssTransition = (val: boolean) => {
    let cssCls = `tooltip-${transition}-enter`
    if (!val) {
      cssCls = `tooltip-${transition}-exit`
    } else {
      setVisible(true)
    }
    setClsCssTransition(cssCls)
    setTimeout(() => {
      if (!val) {
        setVisible(false)
      }
      setClsCssTransition('')
    }, 300)
  }
  useEffect(() => {
    if (props.always) {
      // 一直显示的
      setVisible(true)
      setPosition()
    }
    if (trigger === 'click') {
      document.addEventListener('click', bodyClick, false)
    }
  }, [])
  const TooltipHtml = (
    <div
      ref={tooltipEl}
      className={classNames([`${prefixCls}-tooltip`, direction, cssClsTransition, props.className])}
      style={tooltipStyle}
      onClick={onClick}
    >
      <i className="arrow" />
      {props.content ?
        <span>{props.content}</span> : ''}
    </div>)
  if (props.disabled) {
    return (<>{props.children}</>)
  } else {
    return (
      <span
        ref={el}
        className={`${prefixCls}-tooltip-box`}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        onClick={mouseClick}>
        {props.children}
        {visible && !props.disabled ?
          (appendToBody ? ReactDOM.createPortal(TooltipHtml, document.body) : TooltipHtml)
          : ''}
  </span>)
  }
}
export default Tooltip
