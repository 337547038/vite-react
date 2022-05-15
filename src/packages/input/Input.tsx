import React, {forwardRef, useRef, useImperativeHandle, useState, useContext} from 'react'
import classNames from 'classnames'
import {prefixCls} from '../prefix'
import FormContext from '../form/contextForm'

interface Props {
  placeholder?: string
  value?: string
  disabled?: boolean
  type?: string
  clear?: boolean
  showEye?: boolean
  prefixIcon?: string
  suffixIcon?: string
  width?: string
  size?: string
  onChange?: (val: string, evt: React.ChangeEvent) => void
  onFocus?: (val: string, evt: React.ChangeEvent) => void
  onBlur?: (val: string, evt: React.ChangeEvent) => void
  maxLength?: number
  className?: string
  name?: string
  readOnly?: boolean
  prepend?: React.ReactNode | string
  append?: React.ReactNode | string
}

export interface InputRef {
  focus: () => void
  getValue: () => void
}

const Input = forwardRef<InputRef, Props>((props, ref) =>  {
  const [value, setValue] = useState(props.value)
  const [eyeShow, setEyeShow] = useState(props.showEye)
  const [inputType, setInputType] = useState(props.type)
  const inputEl = useRef<{ focus: () => void }>(null)
  // 取值方法
  const getValue = () => {
    return value
  }
  // 设置焦点事件
  const focus = () => {
    inputEl.current?.focus()
  }
  // 将子组件方法暴露给父组件
  useImperativeHandle(ref, () => ({getValue, focus}))
  const contextForm = useContext(FormContext)
  let disabled = props.disabled
  if (contextForm.disabled) {
    // 表单设置了true时，使用父级表单设置的
    disabled = true
  }
  const onChange = (evt: React.ChangeEvent) => {
    const {value} = evt.target as HTMLInputElement
    setValue(value)
    props.onChange && props.onChange(value, evt)
  }
  const onFocus = (evt: React.ChangeEvent) => {
    const {value} = evt.target as HTMLInputElement
    props.onFocus && props.onFocus(value, evt)
  }
  const onBlur = (evt: React.ChangeEvent) => {
    const {value} = evt.target as HTMLInputElement
    props.onBlur && props.onBlur(value, evt)
  }
  // 清空
  const clearValue = () => {
    setValue('')
  }
  const showEyeClick = () => {
    setEyeShow(!eyeShow)
    // 展示密码时，改为文本类型
    if (eyeShow) {
      setInputType('text')
    } else {
      setInputType(props.type)
    }
  }
  return (
  <div className={classNames(props.className,
  {
    [prefixCls + '-form-input']: true,
    'input-prepend': props.prepend,
    'input-append': props.append
  })}
       style={{width: props.width}}>
    {props.prepend ?
    <div className="prepend">
      {props.prepend}
    </div> : ''
    }
    <input
    ref={inputEl as React.Ref<HTMLInputElement>}
    placeholder={props.placeholder}
    autoComplete="off"
    value={value}
    type={inputType}
    name={props.name}
    maxLength={props.maxLength}
    readOnly={props.readOnly}
    className={classNames({
      disabled: disabled,
      [prefixCls + '-input-control']: true,
      'has-prefix': props.prefixIcon,
      [props.size as string]: props.size
    })
    }
    onChange={onChange}
    onBlur={onBlur}
    onFocus={onFocus}
    disabled={disabled}/>
    {props.append ?
    <div className="append">
      {props.append}
    </div> : ''
    }
    {props.prefixIcon ?
    <span className="prefix-icon">
      <i className={props.prefixIcon}></i>
    </span> : ''
    }
    <span className="suffix-icon">
      {props.suffixIcon ?
      <i className={props.suffixIcon}/>
      : ''}
      {props.clear && value ?
      <i className="icon-close" onClick={clearValue}/> : ''}
      {props.showEye && value && props.type === 'password' ?
      <i className={classNames({'icon-eye-close': eyeShow, 'icon-eye': !eyeShow})}
         onClick={showEyeClick}/> : ''}
    </span>
  </div>
  )
})
Input.displayName = 'Input'
Input.defaultProps = {
  value: '',
  type:'text'
};
Input.propTypes = {}
export default Input
