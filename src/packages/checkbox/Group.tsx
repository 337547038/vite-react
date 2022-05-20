import React, {forwardRef, useImperativeHandle, useState, useContext, useEffect, useRef} from 'react'
import classNames from 'classnames'
import {prefixCls} from '../prefix'
import FormContext from '../form/contextForm'
import type {getValueRef as CheckboxGroupRef} from '../form/types'
import Checkbox from './Checkbox'

interface Props {
  defaultValue: string[]
  options: any
  optionsKey?: { label: string; value: string }
  modelValue?: string[]
  name?: string
  max?: number
  min?: number
  disabled?: boolean
  beforeChange?: () => boolean
  className?: string
  onChange?: (value: string[]) => void
}

const CheckboxGroup = forwardRef<CheckboxGroupRef, Props>((props, ref) => {
  const {options = [], optionsKey = {label: 'label', value: 'value'}, defaultValue = []} = props
  const value = useRef<string[]>(defaultValue)
  const disabledList = []
  const beforeChange = () => {
    return true
  }
  const onChange = (obj: any, val: boolean | string) => {
    if (val) {
      // 选中状态，将当前值添加
      value.current.push(val as string)
    } else {
      let index = -1
      for (const key in value.current) {
        index++
        if (value.current[key] === obj[optionsKey.value]) {
          value.current.splice(index, 1)
          break
        }
      }
    }
    props.onChange && props.onChange(value.current)
  }
  const getValue = () => {
    return value.current
  }
  useImperativeHandle(ref, () => ({getValue}))
  return (<div className={classNames(`${prefixCls}-checkbox-group`, props.className)}>
    {options.map((item: any, index: number) =>
    <Checkbox
    key={index}
    value={item[optionsKey.value]}
    checked={defaultValue.includes(item[optionsKey.value])}
    label={item[optionsKey.label] || item[optionsKey.value]}
    disabled={props.disabled || disabledList[index] || item.disabled}
    className={item.class}
    beforeChange={props.beforeChange}
    onChange={onChange.bind(this, item)}
    />
    )}
  </div>)
})
CheckboxGroup.displayName = 'CheckboxGroup'
export default CheckboxGroup
