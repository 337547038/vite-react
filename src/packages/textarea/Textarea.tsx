import React, {forwardRef, useRef, useImperativeHandle, useState, useContext, useEffect} from 'react'
import classNames from 'classnames'
import {prefixCls} from '../prefix'
import {FormItemContext} from '../form/contextForm'
import type {getValueRef} from '../form/types'
import {omit, debounce} from "../util"

interface Props {
  defaultValue?: string
  onChange?: (val: string, evt: React.ChangeEvent) => void
  onFocus?: (evt: React.ChangeEvent) => void
  onBlur?: (evt: React.ChangeEvent) => void
  autoHeight?: boolean
  maxHeight?: string
  showWordLimit?: boolean
  disabled?: boolean
  maxLength?: number
  placeholder?: string
  width?: string
  height?: string
  className?: string
  readOnly?: boolean
}

export interface TextareaRef extends getValueRef {
  focus: () => void
  clear: () => void // 用于清空输入框的值
}

const Textarea = forwardRef<TextareaRef, Props>((props, ref) => {
  const {maxLength = 0, autoHeight = true} = props
  const [value, setValue] = useState(props.defaultValue)
  const textareaEl = useRef<HTMLTextAreaElement>(null)
  // 取值方法
  const getValue = () => {
    return value
  }
  // 设置焦点事件
  const focus = () => {
    textareaEl.current?.focus()
  }
  const clear = () => {
    setValue('')
  }
  // 将子组件方法暴露给父组件
  useImperativeHandle(ref, () => ({getValue, focus, clear}))
  const useFormItemContext = useContext(FormItemContext)
  // 表单设置了true时，使用父级表单设置的
  const disabled = useFormItemContext.disabled || props.disabled
  const defaultStyle = {
    width: props.width,
    height: props.height,
    minHeight: props.height,
    overflow: autoHeight ? 'hidden' : '',
    maxHeight: props.maxHeight
  }
  const [style, setStyle] = useState<React.CSSProperties>(defaultStyle)
  const onChange = (evt: React.ChangeEvent) => {
    const {value} = evt.target as HTMLInputElement
    setValue(value)
    props.onChange && props.onChange(value, evt)
    setAutoHeight()
    useFormItemContext.controlChange && useFormItemContext.controlChange(value, 'change')
  }
  const setAutoHeight = debounce(() => {
    if (autoHeight) {
      // 取下边框的高，计算会准确点
      const border = (textareaEl.current?.offsetHeight || 0) - (textareaEl.current?.clientHeight || 0)
      const height = (textareaEl.current?.scrollHeight || 0) + border
      const maxHeight = parseInt(props.maxHeight || '0', 10) || 0
      if (maxHeight) {
        if (height < maxHeight) {
          setStyle({...style, height: height + 'px'})
        } else {
          setStyle({...style, height: maxHeight + 'px', overflow: 'auto'})
        }
      } else {
        setStyle({...style, height: height + 'px'})
      }
    }
  }, 1000)
  useEffect(() => {
    setValue(props.defaultValue)
  }, [props.defaultValue])

  const newProps = omit(props, ['autoHeight', 'showWordLimit', 'defaultValue', 'maxHeight'])
  return (
    <div className={classNames(`${prefixCls}-textarea`, props.className)}>
      <textarea
        {...newProps}
        ref={textareaEl}
        value={value}
        className={classNames(`${prefixCls}-input-control`, {disabled: disabled})}
        style={style}
        disabled={disabled}
        onChange={onChange}
      />
      {props.showWordLimit && maxLength ?
        <span className="input-count">{value?.length}/{maxLength}</span> : ''}
    </div>
  )
})
Textarea.displayName = 'Textarea'
Textarea.defaultProps = {
  width: '100%',
  height: '80px'
}
Textarea.propTypes = {}
export default Textarea
