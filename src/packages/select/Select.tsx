import React, {forwardRef, useRef, useImperativeHandle, useState, useEffect, useContext} from 'react'
import classNames from 'classnames'
import {prefixCls} from '../prefix'
import {SelectDown} from "../selectDown"
import type {SelectProps, SelectDownRef} from '../selectDown'
import {omit, debounce} from '../util'
import type {getValueRef} from '../form/types'
import {FormItemContext} from '../form/contextForm'

interface Props extends Omit<SelectProps, 'isRange' | 'rangeSeparator' | 'endPlaceholder' | 'defaultValue'> {
  multipleLimit?: number
  limitChange?: () => void
  options?: any
  optionsKey?: { label: string; value: string }
  beforeChange?: (obj: Record<string, string>) => boolean
  async?: boolean
  emptyText?: string
  defaultValue?: string | string[]
  onChange?: (val: string | string[]) => void
}

export interface SelectRef extends getValueRef {
  clearValue: () => void // 用于清空输入框的值
}

const Select = forwardRef((props: Props, ref: React.Ref<SelectRef>) => {
  const {optionsKey = {label: 'label', value: 'value'}} = props
  const [value, setValue] = useState<string[]>([])
  const [labelText, setLabelText] = useState<string[]>([]) // 显示在输入框的值
  const [optionsList, setOptionsList] = useState(props.options || [])
  const [searchHide, setSearchHide] = useState<string[]>([])
  const blurValue = useRef<string>('')
  const refEl = useRef<SelectDownRef>(null)
  const useFormItemContext = useContext(FormItemContext)
  useEffect(() => {
    setOptionsList([...props.options || []])
  }, [props.defaultValue, props.options])
  useEffect(() => {
    setDefaultText()
  }, [optionsList, props.defaultValue])
  useEffect(() => {
    getChildOpt()
  }, [props.children])
  const getChildOpt = debounce(() => {
    const tempOpt: string[] = []
    const children: any = props.children
    if (children && typeof children === 'object') {
      children.forEach((node: React.ReactNode) => {
        if (React.isValidElement(node)) {
          if (typeof node.type === 'function' && node.type.name === 'Options') {
            tempOpt.push(node.props)
          }
        }
      })
      setOptionsList([...optionsList, ...tempOpt])
    }
  })
  const setDefaultText = debounce(() => {
    // console.log('setDefaultText')
    const defaultValue = props.multiple ? (props.defaultValue || []) : (props.defaultValue || '')
    if (defaultValue?.length > 0 && optionsList?.length > 0) {
      let checkedText: string[] = []
      // 设置当匹配不到label时，显示的value
      if (props.multiple) {
        checkedText = [...props.defaultValue as string[]]
      } else {
        checkedText = [props.defaultValue as string]
      }
      for (let i = 0; i < optionsList.length; i++) {
        const activeValue = optionsList[i][optionsKey.value]
        const label = optionsList[i][optionsKey.label]
        if (props.multiple) {
          // 多选
          if (typeof defaultValue === 'object') {
            const index = defaultValue.indexOf(activeValue)
            if (index !== -1) {
              checkedText.splice(index, 1, label)
            }
          }
        } else {
          // 单选
          if (activeValue === defaultValue) {
            checkedText[0] = label
            break
          }
        }
      }
      setLabelText([...checkedText])
    }
    if (typeof defaultValue === 'object') {
      setValue([...defaultValue])
    } else {
      setValue([defaultValue])
    }
  }, 10)

  const getActive = (obj: Record<string, string>) => {
    const val: string = obj[optionsKey.value]
    return value.includes(val)
  }
  const slideUp = () => {
    // console.log(refEl)
    refEl.current?.slideUp()
  }
  const onSelect = (obj: Record<string, string>, evt: React.MouseEvent<HTMLLIElement>) => {
    if (!obj.disabled) {
      if (props.beforeChange && !props.beforeChange(obj)) {
        slideUp()
        evt.stopPropagation()
        return
      }
      const activeValue = obj[optionsKey.value]
      const activeLabel = obj[optionsKey.label]
      let changeValue: any = []
      if (props.multiple) {
        // 多选
        //console.log('more')
        if (props.multipleLimit && props.multipleLimit > 0 && props.multipleLimit <= labelText.length) {
          props.limitChange && props.limitChange()
          return false
        }
        // console.log('more2')
        let newValue = []
        let newLabel = []
        if (value.includes(activeValue)) {
          // 当前选项已选上，则取消选择
          newValue = omit(value, [activeValue])
          newLabel = omit(labelText, [activeLabel])
        } else {
          // 追加
          newValue = [...value, activeValue]
          newLabel = [...labelText, activeLabel]
        }
        setValue(newValue)
        setLabelText(newLabel)
        changeValue = newValue
      } else {
        // 单选
        slideUp() // 收起下拉
        setValue([obj[optionsKey.value]])
        setLabelText([obj[optionsKey.label]])
        changeValue = obj[optionsKey.value]
      }
      props.onChange && props.onChange(changeValue)
      useFormItemContext.controlChange && useFormItemContext.controlChange(changeValue, 'change')
    }
    evt.stopPropagation()

  }
  // 失去焦点后，从options匹配对应的label,
  const onBlur = (val: string, value: string[], evt: MouseEvent | React.ChangeEvent) => {
    if (!props.filterable) {
      return
    }
    blurValue.current = val
    props.onBlur && props.onBlur(val, value, evt)
  }
  // 监听收起事件
  const toggleClick = (val: boolean) => {
    if (!val && props.filterable && blurValue.current) {
      let hasItem = false
      for (let i = 0; i < optionsList.length; i++) {
        const label = optionsList[i][optionsKey.label]
        const activeValue = optionsList[i][optionsKey.value]
        if (blurValue.current === label) {
          if (props.multiple) {
            // 追加value和label
            setLabelText([...labelText, label])
            setValue([...value, activeValue])
            clearValue()
          } else {
            // 单选
            setLabelText([label])
            setValue([activeValue])
          }
          hasItem = true
          break
        }
      }
      if (!hasItem) {
        // 没有匹配到选项时
        if (props.multiple) {
          clearValue()
        } else {
          //单选时要恢复原来的
          setLabelText([...labelText])
        }
      }
      // 恢复搜索过滤的
      setSearchHide([])
    }
  }
  const onInput = (val: string, value: string[], evt: MouseEvent | React.ChangeEvent) => {
    if (!props.async) {
      const hideList: string[] = []
      optionsList.forEach((item: any) => {
        if (item[optionsKey.label].indexOf(val) === -1) {
          // 没包含搜索关键字的
          hideList.push(item[optionsKey.value])
        }
      })
      setSearchHide([...hideList])
    }
    props.onInput && props.onInput(val, value, evt)
  }
  // 多选时清除单个
  const onDelete = (index: number) => {
    if (!props.multiple) {
      return
    }
    value.splice(index, 1)
    labelText.splice(index, 1)
    setValue([...value])
    setLabelText([...labelText])
    props.onDelete && props.onDelete(index)
  }
  const getValue = () => {
    return props.multiple ? value : value[0]
  }
  const clearValue = () => {
    refEl.current?.clearValue()
  }
  useImperativeHandle(ref, () => ({getValue, clearValue}))
  const newProps = omit(props, ['options', 'multipleLimit', 'optionsKey', 'beforeChange', 'async', 'emptyText'])
  return (
    <SelectDown
      {...newProps}
      defaultValue={labelText}
      onBlur={onBlur}
      onInput={onInput}
      onDelete={onDelete}
      toggleClick={toggleClick}
      ref={refEl}>
      <ul className={`${prefixCls}-select`}>
        {optionsList.map((item: Record<string, string>, index: number) =>
          <li
            key={index}
            className={classNames({
              disabled: item.disabled,
              [item.class]: item.class,
              active: getActive(item)
            })}
            title={item[optionsKey.label]}
            onClick={onSelect.bind(this, item)}
            style={{display: searchHide.includes(item[optionsKey.value]) ? 'none' : ''}}>
            {item[optionsKey.label]}</li>
        )}
        {optionsList.length === 0 || optionsList.length === searchHide.length ?
          <li className="select-empty-options">{props.emptyText || '暂无数据'}</li> : ''}
      </ul>
    </SelectDown>)
})
Select.displayName = 'Select'
Select.propTypes = {}
export default Select
