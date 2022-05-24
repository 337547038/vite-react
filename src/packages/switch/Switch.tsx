import React, {useEffect, useState, forwardRef, useImperativeHandle} from 'react'
import classNames from 'classnames'
import {prefixCls} from '../prefix'
import type {getValueRef} from "../form/types"

interface Props {
  defaultValue?: string | number | boolean
  disabled?: boolean
  activeColor?: string // 打开时的颜色
  closeColor?: string // 关闭时的颜色
  activeValue?: string | number // switch 打开时的值
  closeValue?: string | number // switch 关闭时的值
  beforeChange?: () => boolean
  openText?: React.ReactNode
  closeText?: React.ReactNode
  onChange?: (val: boolean | string | number) => void
  size?: string
}

const SwitchApp = forwardRef((props: Props, ref: React.Ref<getValueRef>) => {
  const disabled = props.disabled
  const [checked, setChecked] = useState(props.defaultValue)
  let style = {}
  if (checked && props.activeColor) {
    // 打开状态，并设置了打开时的颜色
    style = {
      borderColor: props.activeColor,
      backgroundColor: props.activeColor
    }
  }
  if (!checked && props.closeColor) {
    style = {
      borderColor: props.closeColor,
      backgroundColor: props.closeColor
    }
  }
  const onClick = () => {
    if (disabled || (props.beforeChange && !props.beforeChange())) {
      return false
    }
    setChecked(!checked)
    props.onChange && props.onChange(getValue(!checked))
  }
  useEffect(() => {
    setChecked(props.defaultValue)
  }, [props.defaultValue])
  const getValue = (val?: boolean) => {
    const isChecked = val === undefined ? checked : val
    if (isChecked) {
      return props.activeValue ? props.activeValue : true
    } else {
      return props.closeValue ? props.closeValue : false
    }
  }
  useImperativeHandle(ref, () => ({getValue}))
  return (<span
    className={classNames(props.size, {
      [prefixCls + '-switch']: true,
      'switch-checked': checked,
      disabled: disabled
    })}
    style={style}
    onClick={onClick}
  >
    <i className={`${prefixCls}-switch-inner`} />
    <span className="switch-text">
     {checked ? props.openText : props.closeText}
    </span>
  </span>)
})
SwitchApp.displayName = 'SwitchApp'
export default SwitchApp
