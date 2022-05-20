import React, {forwardRef, useImperativeHandle, useState, useContext, useEffect} from 'react'
import classNames from 'classnames'
import {prefixCls} from '../prefix'
import FormContext from '../form/contextForm'
import type {getValueRef} from '../form/types'

interface Props {
  checked?: boolean
  disabled?: boolean
  label?: string
  className?: string
  onChange?: (val: boolean) => void
  children?: React.ReactNode
}

const Radio = forwardRef<getValueRef, Props>((props, ref) => {
  const contextForm = useContext(FormContext)
  let disabled = props.disabled
  if (contextForm.disabled) {
    // 表单设置了true时，使用父级表单设置的
    disabled = true
  }
  const [checked, setChecked] = useState(props.checked)
  const onChangeHandler = () => {
    if (disabled) {
      return
    }
    setChecked(true)
    props.onChange && props.onChange(true)
  }
  const getValue = () => {
    return checked
  }
  useImperativeHandle(ref, () => ({getValue}))
  useEffect(() => {
    setChecked(props.checked)
  }, [props.checked])
  return (<label
  className={classNames(props.className, {
    disabled: disabled,
    checked: checked,
    [prefixCls + '-radio']: true
  })}
  onClick={onChangeHandler}
  >
   <span>
     <span className="radio-inner"></span>
     {props.children ?
     <span className="radio-text">
       {props.children}
      </span> : ''}
     {props.label ?
     <span className="radio-text">{props.label}</span>
     : ''
     }</span>
  </label>
  )
})
Radio.displayName = 'Radio'
export default Radio
