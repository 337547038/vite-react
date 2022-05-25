import React, {forwardRef, useRef, useImperativeHandle, useState, useContext, useEffect} from 'react'
import classNames from 'classnames'
import {prefixCls} from '../prefix'
import {FormItemContext} from '../form/contextForm'
import type {getValueRef} from '../form/types'

interface Props {
  placeholder?: string
  defaultValue?: string
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
  updateContext?: boolean // 设置为true时不更新表单的context方法值
}

export interface InputRef extends getValueRef {
  focus: () => void
  clear: () => void // 用于清空输入框的值
}

const Input = forwardRef<InputRef, Props>((props, ref) => {
  const [value, setValue] = useState(props.defaultValue)
  const [eyeShow, setEyeShow] = useState(props.showEye)
  const [inputType, setInputType] = useState(props.type)
  const inputEl = useRef<{ focus: () => void }>(null)
  const useFormItemContext = useContext(FormItemContext)
  // 取值方法
  const getValue = () => {
    return value
  }
  // 设置焦点事件
  const focus = () => {
    inputEl.current?.focus()
  }
  const clear = () => {
    setValue('')
  }
  // 将子组件方法暴露给父组件
  useImperativeHandle(ref, () => ({getValue, focus, clear}))
  // 表单设置了true时，使用父级表单设置的
  const disabled = useFormItemContext.disabled || props.disabled
  // 当前值发生变化时，通过context父级
  const setFormItemContext = (val: string, type: string) => {
    if (!props.updateContext) {
      useFormItemContext.controlChange && useFormItemContext.controlChange(val, type)
    }
  }
  const onChange = (evt: React.ChangeEvent) => {
    const {value} = evt.target as HTMLInputElement
    setValue(value)
    props.onChange && props.onChange(value, evt)
    setFormItemContext(value, 'change')
  }
  const onFocus = (evt: React.ChangeEvent) => {
    const {value} = evt.target as HTMLInputElement
    props.onFocus && props.onFocus(value, evt)
    setFormItemContext(value, 'focus')
  }
  const onBlur = (evt: React.ChangeEvent) => {
    const {value} = evt.target as HTMLInputElement
    props.onBlur && props.onBlur(value, evt)
    setFormItemContext(value, 'blur')
  }
  // 清空
  const clearValue = () => {
    setValue('')
    setFormItemContext('', 'change')
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
  useEffect(() => {
    setValue(props.defaultValue)
    setFormItemContext(props.defaultValue || '', 'default')
  }, [props.defaultValue])
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
        disabled={disabled} />
      {props.append ?
        <div className="append">
          {props.append}
        </div> : ''
      }
      {props.prefixIcon ?
        <span className="prefix-icon">
      <i className={props.prefixIcon} />
    </span> : ''
      }
      <span className="suffix-icon">
      {props.suffixIcon ?
        <i className={props.suffixIcon} />
        : ''}
        {props.clear && value ?
          <i className="icon-close" onClick={clearValue} /> : ''}
        {props.showEye && value && props.type === 'password' ?
          <i className={classNames({'icon-eye-close': eyeShow, 'icon-eye': !eyeShow})}
             onClick={showEyeClick} /> : ''}
    </span>
    </div>
  )
})
Input.displayName = 'Input'
Input.defaultProps = {
  defaultValue: '',
  type: 'text'
};
Input.propTypes = {}
export default Input
