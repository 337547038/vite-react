import React from 'react'
import {prefixCls} from '../prefix'
import classNames from 'classnames'

interface LoadingProps {
  className?: string
  children?: React.ReactNode
  visible?: boolean
  text?: string
  size?: 'large' | 'normal' | 'small' | 'mini'
}

const Loading: React.FC<LoadingProps> = (props) => {
  return (<div className={`${prefixCls}-loading-container`}>
    {props.visible ?
      <div className={classNames(props.className, props.size, `${prefixCls}-loading`, {mask: props.children})}>
        <div className={`${prefixCls}-loading-spin`} />
        <span className={`${prefixCls}-loading-text`}>{props.text}</span>
      </div>
      : ""}
    {props.children}
  </div>)
}
export default Loading
