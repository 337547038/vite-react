import React, {useRef} from 'react'
import {Tooltip} from '../tooltip'
import type {Props as TooltipProps, TooltipRef} from '../tooltip'
import classNames from 'classnames'
import {prefixCls} from '../prefix'
import {Button} from '../button'

interface Props extends Omit<TooltipProps, 'onClick'> {
  confirm?: string
  cancel?: string
  showCancel?: boolean
  onClick?: (callback: () => void) => void
}

const Popover: React.FC<Props> = (props) => {
  const {showCancel = true} = props
  const tooltipRef = useRef<TooltipRef>(null)
  const cancelClick = () => {
    tooltipRef.current?.close()
  }
  const confirmClick = () => {
    if (typeof props.onClick === 'function') {
      props.onClick(() => {
        cancelClick()
      })
    } else {
      cancelClick()
    }
  }
  const onClick = () => {
    return null
  }
  const content = (<div className={`${prefixCls}-popover`}>
    <div className='popover-content'>{props.content}</div>
    <div className='popover-footer'>
      {showCancel ? <Button size='mini' onClick={cancelClick}>{props.cancel || '取消'}</Button> : ''}
      <Button type='primary' size='mini' onClick={confirmClick}>{props.confirm || '确定'}</Button>
    </div>
  </div>)
  return (<Tooltip
  ref={tooltipRef}
  trigger='click'
  {...props}
  content={content}
  onClick={onClick}>
    {props.children}
  </Tooltip>)
}
export {Popover}
