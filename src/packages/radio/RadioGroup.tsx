import React, {forwardRef, useImperativeHandle, useState, useContext, useEffect} from 'react'
import {prefixCls} from '../prefix'
import classNames from 'classnames'
import FormContext from '../form/contextForm'
import Radio from "./Radio"
import type {getValueRef as RadioGroupRef} from '../form/types'

export interface Option {
  /*label?: string
  value?: string | number
  disabled?: boolean*/

  [key: string]: any
}

interface Props {
  value?: string
  options: Option
  optionsKey: { label: string; value: string }
  disabled?: boolean // 控制整个组
  onChange?: (val: string, obj: Option) => void
  className?: string
}

const RadioGroup = forwardRef<RadioGroupRef, Props>((props, ref) => {
  const keyLabel = props.optionsKey.label
  const keyValue = props.optionsKey.value
  const contextForm = useContext(FormContext)
  let disabled = props.disabled
  if (contextForm.disabled) {
    // 表单设置了true时，使用父级表单设置的
    disabled = true
  }
  const [checked, setChecked] = useState(props.value)
  const onChange = (obj: Option) => {
    setChecked(obj[keyValue])
    props.onChange && props.onChange(obj[keyValue], obj)
  }
  const getValue = () => {
    return checked
  }
  useImperativeHandle(ref, () => ({getValue}))
  useEffect(() => {
    setChecked(props.value)
  }, [props.value])
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
