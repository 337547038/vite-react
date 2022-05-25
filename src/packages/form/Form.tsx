import React, {forwardRef, useRef, useImperativeHandle, useState, useContext, useEffect, useCallback} from 'react'
import classNames from 'classnames'
import {prefixCls} from '../prefix'
import type {getValueRef, RulesObject} from "./types"
import {FormPropsContext} from './contextForm'
import {omit} from "../util"
import formItem from "../formItem/FormItem";

interface RulesArray {
  [key: string]: RulesObject[]
}

interface Props {
  rules?: RulesArray
  showMessage?: boolean
  trigger?: 'change' | 'blur'
  labelWidth?: string
  required?: boolean
  size?: string
  disabled?: boolean
  children?: React.ReactNode
  className?: string
  onChange?: (val: any, prop: string) => void
}

interface Callback {
  getValue: () => void
  validate: () => Promise<void>
  clearTips: () => void
  prop: string
}

export interface FormRef extends getValueRef {
  validate: (props?: string[]) => Promise<unknown>
  clearValidate: (props?: string[]) => void
  resetForm: () => void
  setValue: (value: object) => void
}

const Form = forwardRef((props: Props, ref: React.Ref<FormRef>) => {
  const allFormItem = useRef<Callback[]>([])
  const getValue = () => {
    const formItemTemp: { prop: string; value: void }[] = []
    allFormItem.current.forEach((item: Callback) => {
      formItemTemp.push({
        prop: item.prop,
        value: item.getValue()
      })
    })
    return formItemTemp
  }
  const validate = (field?: string[]) => {
    let allTips: string[] = []
    let validateFields = allFormItem.current
    if (field && field.length > 0) {
      // 指定校验字段时
      validateFields = allFormItem.current.filter((fi: Callback) => {
        return field.indexOf(fi.prop) !== -1
      })
    }
    const formValue: { prop: string; value: void }[] = []
    return new Promise((resolve, reject) => {
      validateFields.forEach((item: Callback) => {
        item.validate()
          .then(() => {
            allTips.push('true')
            returnResult() // 通过
          })
          .catch((res: string) => {
            allTips.push(res)
            returnResult()
          })
        formValue.push({
          prop: item.prop,
          value: item.getValue()
        })
      })
      const returnResult = () => {
        if (allTips.length === validateFields.length) {
          const tips = allTips.filter((fi) => {
            return fi !== 'true'
          })
          if (tips.length > 0) {
            // console.log('不通过')
            reject(tips)
          } else {
            resolve(formValue)
          }
        }
      }
    })
  }
  const clearValidate = (field?: string[]) => {
    allFormItem.current.forEach((item: Callback) => {
      if (field && field?.length > 0) {
        // 清除指定的
        if (field.includes(item.prop)) {
          item.clearTips()
        } else {
          item.clearTips()
        }
      }
    })
  }

  const resetForm = () => {
    // 恢复初始值 todo
    console.log('恢复初始值开发中...')
    clearValidate()
  }
  const setValue = (value: any) => {
    // todo
    console.log('开发中...')
  }
  useImperativeHandle(ref, () => ({getValue, validate, clearValidate, resetForm, setValue}))
  const newFormProps = omit(props, ['children', 'className'])
  newFormProps.callback = (val: Callback) => {
    allFormItem.current.push(val)
  }
  newFormProps.onChange = (val: any, prop: string) => {
    props.onChange && props.onChange(val, prop)
  }
  return (
    <FormPropsContext.Provider value={newFormProps}>
      <form className={classNames(`${prefixCls}-form`, props.className)}>
        {props.children}
      </form>
    </FormPropsContext.Provider>)
})
Form.displayName = 'Form'
Form.defaultProps = {
  showMessage: true,
  required: true,
  trigger: 'change',
  rules: {}
}
export default Form
