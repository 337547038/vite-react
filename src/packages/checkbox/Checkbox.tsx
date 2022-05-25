import React, {forwardRef, useImperativeHandle, useState, useContext, useEffect} from 'react'
import classNames from 'classnames'
import {prefixCls} from '../prefix'
import {FormItemContext} from '../form/contextForm'
import type {getValueRef} from '../form/types'

interface Props {
  checked?: boolean | string[]
  value?: string
  disabled?: boolean
  label?: string
  modelValue?: string | boolean | string[]
  beforeChange?: () => boolean
  children?: React.ReactNode
  onChange?: (value: string | boolean) => void
  className?: string
}

const Checkbox = forwardRef<getValueRef, Props>((props, ref) => {
  const useFormItemContext = useContext(FormItemContext)
  // 表单设置了true时，使用父级表单设置的
  const disabled = useFormItemContext.disabled || props.disabled
  const getDefaultChecked = () => {
    let defaultChecked = false
    if (typeof props.checked === 'boolean') {
      defaultChecked = props.checked
    } else {
      // 数组形式
      if (props.value && props.checked) {
        defaultChecked = props.checked.includes(props.value)
      }
    }
    return defaultChecked
  }
  const [checked, setChecked] = useState<boolean>(getDefaultChecked())
  useEffect(() => {
    //console.log('ok')
    setChecked(getDefaultChecked())
  }, [props.checked])
  const changeHandler = () => {
    if ((props.beforeChange && !props.beforeChange()) || disabled) {
      return
    }
    setChecked(!checked)
    const val = getValue(!checked)
    props.onChange && props.onChange(val)
    useFormItemContext.controlChange && useFormItemContext.controlChange(val, 'change')
  }
  /**
   * check 当前是否选中
   * @param check
   */
  const getValue = (check?: boolean) => {
    let val = checked
    if (check !== undefined) {
      // 有参数时
      val = check
    }
    if (props.value) {
      if (val) {// 有设置选中的值并且为选中状态时，返回设置选择的值
        return props.value
      } else {
        return false
      }
    } else {
      return val
    }
  }
  useImperativeHandle(ref, () => ({getValue}))
  return (
    <label
      className={classNames(props.className, {
        [prefixCls + '-checkbox']: true,
        checked: checked,
        disabled: disabled
      })}
      onClick={changeHandler}>
   <span>
    <span className={classNames('checkbox-inner icon-check', {checked: checked})} />
     {props.children ?
       <span className="checkbox-text">{props.children}</span> :
       <span className="checkbox-text">{props.label}</span>
     }
   </span>
    </label>)
})
Checkbox.displayName = 'Checkbox'
Checkbox.defaultProps = {}
export default Checkbox
