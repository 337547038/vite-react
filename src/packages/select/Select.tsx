import React, {forwardRef, useRef, useImperativeHandle, useState, useContext, useEffect} from 'react'
import classNames from 'classnames'
import {prefixCls} from '../prefix'
import FormContext from '../form/contextForm'
import {SelectDown} from "../selectDown"
import type {SelectProps} from '../selectDown'
import {omit} from '../util'

interface Props extends Omit<SelectProps, 'isRange' | 'rangeSeparator' | 'endPlaceholder'> {
  multipleLimit?: number
  options?: any
  optionsKey?: { label: string; value: string }
  beforeChange?: () => boolean
  async?: boolean
  emptyText?: string
}

export interface SelectRef {
  clear: () => void // 用于清空输入框的值
  getValue: () => void
}

const Select = forwardRef((props: Props, ref: React.Ref<SelectRef>) => {
  const {optionsKey = {label: 'label', value: 'value'}} = props
  let defaultValue = props.defaultValue || []
  const [value, setValue] = useState(typeof defaultValue === 'string' ? [defaultValue] : defaultValue)
  const optionsList = props.options
  const getActive = (obj: any) => {
    const val = obj[optionsKey.value]
    return value.includes(val)
  }
  const onClick = () => {

  }
  const newProps = omit(props, ['options', 'multipleLimit', 'optionsKey', 'beforeChange', 'async', 'emptyText'])
  return (
    <SelectDown
      {...newProps}
      defaultValue={typeof props.defaultValue === 'string' ? [value] : value}>
      <ul className={`${prefixCls}-select`}>
        {optionsList.map((item: any, index: number) =>
          <li
            key={index}
            className={classNames({
              disabled: item.disabled,
              [item.class]: item.class,
              active: getActive(item)
            })}
            title={item[optionsKey.label]}
            onClick={onClick}>
            {item.label}</li>
        )}
        {optionsList.length === 0 ?
          <li className="select-empty-options">{props.emptyText}</li> : ''}
      </ul>
    </SelectDown>)
})
Select.displayName = 'Select'
Select.propTypes = {}
export default Select
