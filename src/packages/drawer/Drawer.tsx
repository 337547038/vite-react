import React from 'react'
import {Dialog} from '../dialog'
import {prefixCls} from '../prefix'
import type {DialogProps} from '../dialog'

interface Props extends DialogProps{
  direction?: 'left' | 'right' | 'top' | 'bottom'
}

const Drawer: React.FC<Props> = (props) => {
  const {direction = 'left'} = props
  return <Dialog
    {...props}
    animation="slide"
    className={`${prefixCls}-drawer ${prefixCls}-drawer-${direction}`}>
    {props.children}
  </Dialog>
}
export default Drawer
