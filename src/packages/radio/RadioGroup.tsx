import React, {forwardRef, useImperativeHandle, useState, useContext, useEffect} from 'react'
import {prefixCls} from '../prefix'
import classNames from 'classnames'
import {FormItemContext} from '../form/contextForm'
import Radio from "./Radio"
import type {getValueRef as RadioGroupRef} from '../form/types'

export interface Option {
  /*label?: string
  value?: string | number
  disabled?: boolean*/

  [key: string]: any
}

interface Props {
  defaultValue?: string
  options: Option
  optionsKey?: { label: string; value: string }
  disabled?: boolean // 控制整个组
  onChange?: (val: string, obj: Option) => void
  className?: string
}

const RadioGroup = forwardRef<RadioGroupRef, Props>((props, ref) => {
  const keyLabel = props.optionsKey?.label || 'label'
  const keyValue = props.optionsKey?.value || 'value'
  //const contextForm = useContext(FormContext)
  const useFormItemContext = useContext(FormItemContext)
  // 表单设置了true时，使用父级表单设置的
  const disabled = useFormItemContext.disabled || props.disabled
  const [checked, setChecked] = useState(props.defaultValue)
  const onChange = (obj: Option) => {
    setChecked(obj[keyValue])
    props.onChange && props.onChange(obj[keyValue], obj)
    useFormItemContext.controlChange && useFormItemContext.controlChange(obj[keyValue], 'change')
  }
  const getValue = () => {
    return checked
  }
  useImperativeHandle(ref, () => ({getValue}))
  useEffect(() => {
    setChecked(props.defaultValue)
  }, [props.defaultValue])
  return (<div className={classNames(`${prefixCls}-radio-group`, props.className)}>
    {
      props.options.map((item: Option) =>
        <Radio
          key={item[keyLabel]}
          disabled={disabled || item.disabled}
          checked={item[keyValue] === checked}
          onChange={() => onChange(item)}>
          {item[keyLabel]}
        </Radio>
      )
    }
  </div>)
})
RadioGroup.displayName = 'RadioGroup'
RadioGroup.defaultProps = {
  optionsKey: {label: 'label', value: 'value'}
}
export default RadioGroup
