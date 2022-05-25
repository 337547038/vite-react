import React, {forwardRef, useImperativeHandle, useState, useContext, useEffect, useRef} from 'react'
import classNames from 'classnames'
import {prefixCls} from '../prefix'
import {FormItemContext} from '../form/contextForm'
import type {getValueRef} from '../form/types'
import Checkbox from './Checkbox'
import {omit} from '../util'

interface Props {
  defaultValue?: string[]
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

export interface CheckboxGroupRef extends getValueRef {
  toggleSelect: (val: boolean) => void
}

const CheckboxGroup = forwardRef<CheckboxGroupRef, Props>((props, ref) => {
  const {options = [], optionsKey = {label: 'label', value: 'value'}, max = 0, min = 0} = props
  const [defaultValue, setDefaultValue] = useState(props.defaultValue || [])
  //console.log('defaultValue')
  //console.log(props.defaultValue)
  const value = useRef<string[]>(defaultValue)
  const [disabledLimit, setDisabledLimit] = useState<{ [key: number]: boolean }>({})
  const useFormItemContext = useContext(FormItemContext)
  // 表单设置了true时，使用父级表单设置的
  const disabled = useFormItemContext.disabled || props.disabled
  const onChange = (obj: Record<string, string>, val: boolean | string) => {
    if (disabled) {
      return false
    }
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
    const len = value.current.length
    // setDisabledLimit({})
    let disableList: { [key: number]: boolean } = {}
    if (len >= max && max > 0) {
      // 将所有未勾选的设为禁用状态
      props.options.forEach((item: Record<string, string>, index: number) => {
        if (!value.current.includes(item[optionsKey.value])) {
          disableList[index] = true
        }
      })
    }
    if (len <= min && min > 0) {
      // 将所有已勾选的设为禁用状态
      props.options.forEach((item: Record<string, string>, index: number) => {
        if (value.current.includes(item[optionsKey.value])) {
          disableList[index] = true
        }
      })
    }
    setDisabledLimit(disableList)
    props.onChange && props.onChange(value.current)
  }
  const getValue = () => {
    return value.current
  }
  // 全选或全不选
  const toggleSelect = (boolean: boolean) => {
    if (disabled || (props.beforeChange && !props.beforeChange())) {
      return false
    }
    let disableList: { [key: number]: boolean } = {}
    options.forEach((item: { [key: string]: any }, index: number) => {
      const val = item[optionsKey.value]
      if (boolean) {
        // 全选时，将没勾选且不是禁用的选中，同时不能超过最大选择数
        if (!item.disabled && !value.current.includes(val)) {
          if (max > 0) {
            // 设置有最大限制
            if (value.current.length < max) {
              value.current.push(val)
            } else {
              // 将剩下的设置为disabled
              disableList[index] = true
            }
          } else {
            value.current.push(val)
          }
        }
      } else {
        // 取消选择时，不是禁用和选中的取消选择
        if (!item.disabled && value.current.includes(val)) {
          if (min > 0) {
            if (value.current.length > min) {
              value.current = omit(value.current, [val])
              // value.current.splice(index, 1) // 要根据key来删除
            } else {
              // 将不能取消选择的设置为disabled
              disableList[index] = true
            }
          } else {
            value.current = omit(value.current, [val])
          }
        }
      }
    })
    if (Object.keys(disableList).length > 0) {
      setDisabledLimit(disableList)
    }
    // console.log(value.current)
    setDefaultValue([...value.current]) // 更新选中状态
  }

  useImperativeHandle(ref, () => ({getValue, toggleSelect}))
  useEffect(() => {
    setDefaultValue([...props.defaultValue || []])
  }, [props.defaultValue])
  return (<div className={classNames(`${prefixCls}-checkbox-group`, props.className)}>
    {options.map((item: Record<string, any>, index: number) =>
    <Checkbox
    key={index}
    value={item[optionsKey.value]}
    checked={defaultValue.includes(item[optionsKey.value])}
    label={item[optionsKey.label] || item[optionsKey.value]}
    disabled={disabled || disabledLimit[index] || item.disabled}
    className={item.class}
    beforeChange={props.beforeChange}
    onChange={onChange.bind(this, item)}
    />
    )}
  </div>)
})
CheckboxGroup.displayName = 'CheckboxGroup'
export default CheckboxGroup
