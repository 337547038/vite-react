import React, {forwardRef, useRef, useImperativeHandle, useState, useContext, useEffect} from 'react'
import classNames from 'classnames'
import {prefixCls} from '../prefix'
import type {getValueRef, RulesObject} from "../form/types"
import Field from "./Field"
import {FormItemContext, FormPropsContext} from "../form/contextForm"
import type {FormItemContextProps} from "../form/contextForm"
import ValidateRules from './validate'
import {debounce} from "../util"

interface Props {
  className?: string
  label?: string
  labelVisible?: boolean
  prop?: string
  required?: boolean
  verify?: string // 用于快速验证，formItem带验证规则时，使用默认提示
  rules?: RulesObject[]
  showMessage?: boolean
  trigger?: 'change' | 'blur'
  labelWidth?: string
  size?: string
  error?: string
  type?:
    | 'input'
    | 'radio'
    | 'checkbox'
    | 'datePicker'
    | 'select'
    | 'switch'
    | 'textarea'
    | 'timeSelect'
    | 'timePicker'
    | ''
  data?: object // type有值时有效
  defaultValue?: any // type有值时有效
  onChange?: (val: any) => void
  children?: React.ReactNode
  other?: string | React.ReactNode
}

export interface FormItemRef extends getValueRef {
  validate: (val?: any) => Promise<unknown>
  clearTips: () => void
}

const FormItem = forwardRef((props: Props, ref: React.Ref<FormItemRef>) => {
  const activeValue = useRef<string | string[] | number | boolean>() // 当前formItem下子组件的值，一个formItem对应一个值，存在多个子组件时会保存最后更新的那个组件的值
  const useFormPropsContext = useContext(FormPropsContext)
  /**
   * formItem设置了非默认值时，返回formItem的，否则当form存在时返回form的
   * @param field 参数
   * @param defaultValue
   */
  const getFormProps = (field: string, defaultValue?: any) => {
    const formItemValue = (props as any)[field]
    if (formItemValue === defaultValue) {
      // formItem默认
      if (Object.keys(useFormPropsContext).length > 0) {
        return (useFormPropsContext as any)[field]
      }
    }
    return formItemValue
  }
  // 优先使用formItem的设置，没默认值
  const formSize = getFormProps('size', undefined)
  const labelWidth = getFormProps('labelWidth', undefined)
  const trigger = getFormProps('trigger', 'change')
  const messageShow = getFormProps('showMessage', true)

  // 获取表单相关配置结束
  const [verifyTips, setVerifyTips] = useState({msg: '', icon: ''})
  const labelStyle: React.CSSProperties = {
    display: props.labelVisible ? 'none' : '',
    width: labelWidth as string
  }
  const rulesVerify: RulesObject[] = []
  // 有快速校验规则，追加
  if (props.verify) {
    const verifyMsg: { [index: string]: string } = {
      required: '必填字段',
      mobile: '手机号格式不正确',
      tel: '电话号码不正确',
      mail: '请输入正确邮箱',
      digits: '必须为正整数',
      number: '必须为数字',
      phone: '请输入固话或手机'
    }
    const temRule = props.verify.split(',')
    temRule.forEach((item: string) => {
      rulesVerify.push({
        type: item,
        msg: verifyMsg[item]
      })
    })
  }
  // 合并两种校验规则
  let rulesAll: RulesObject[] = (props.rules || []).concat(rulesVerify)
  // 没有rules时使用form传过来的
  if (rulesAll?.length === 0 && props.prop && useFormPropsContext?.rules) {
    rulesAll = (useFormPropsContext.rules as any)[props.prop] || []
  }
  // 是否必填
  const getRequired = () => {
    let bool = false
    const required = getFormProps('required', true)
    if (required) {
      if (rulesAll?.length > 0) {
        rulesAll.forEach((item: RulesObject) => {
          if (item.type === 'required') {
            bool = true
            return false
          }
        })
      }
    }
    return bool
  }
  const isRequired = getRequired()
  //检验通过返回true，不通过返回当前提示文案
  const validate = (value?: string | string[] | number | boolean) => {
    // 外部调用时没有值
    const newValue = value === undefined ? activeValue.current : value
    let errorTips = {msg: '', icon: ''}
    return new Promise((resolve, reject) => {
      // 当手动设置了error时，则为不通过状态
      if (props.error) {
        reject(props.error)
      } else if (rulesAll.length > 0) {
        const result = ValidateRules(newValue, rulesAll)
        if (result === true) {
          // 通过
          errorTips = {msg: '', icon: 'icon-success'}
          resolve(true)
          // console.log('通过')
        } else {
          errorTips = {msg: result, icon: 'icon-failure'}
          reject(result)
          // console.log('不通过')
        }
      } else {
        // 没有校验规则
        resolve(true)
        console.log('没有校验规则通过'+props.prop)
      }
      setVerifyTips(errorTips)
    })
  }
  const getValue = () => {
    return activeValue.current
  }
  const clearTips = () => {
    setVerifyTips({icon: '', msg: ''})
  }
  useImperativeHandle(ref, () => ({getValue, clearTips, validate}))
  const getFormItem = debounce(() => {
    if(!props.prop){return}
    useFormPropsContext.callback && useFormPropsContext.callback({
      validate: validate,
      clearTips: clearTips,
      getValue: getValue,
      prop: props.prop || ''
    })
  })
  useEffect(() => {
    getFormItem()
  }, [])
  const useFormItemContent: FormItemContextProps = {
    disabled: useFormPropsContext.disabled, // 表单统一设置，传给各个表单子组件
    controlChange: (val: string | string[] | number | boolean, type?: string) => {
      activeValue.current = val
      // 将组件值存起来，不触发其他操作，在没有手动触发时也使用validate来校验
      if (type === 'default') {
        return
      }
      if (type === 'focus') {
        let typeTips = ''
        rulesAll.forEach((item: RulesObject) => {
          if (item.type === 'tips') {
            typeTips = item.msg
          }
        })
        if (typeTips && !val) {
          // 没有值时才提示
          setVerifyTips({msg: typeTips, icon: 'icon-tips'})
        }
      } else if (type === 'blur') {
        if (trigger) {
          // 失去焦点校验
          validate(val).catch((res) => {
            console.log(res)
          })
        }
      } else if (type === 'change') {
        if (trigger === 'change') {
          validate(val).catch((res) => {
            console.log(res)
          })
        }
        props.onChange && props.onChange(val)
        useFormPropsContext.onChange && useFormPropsContext.onChange(val, props.prop || '')
      }
    }
  }
  const formLabel = (
    <label
      className={classNames({required: isRequired, [prefixCls + '-form-label']: true})}
      style={labelStyle}>{props.label}
    </label>)
  return (<FormItemContext.Provider value={useFormItemContent}>
    <div className={
      classNames(props.className, {
        [prefixCls + '-form-item-error']: verifyTips.msg !== '',
        [prefixCls + '-form-item']: true,
        ['form-item-' + formSize]: formSize
      })}
    >
      {props.label ? formLabel : ''}
      <div className={`${prefixCls}-form-box`}>
        {props.type ?
          <Field
            type={props.type}
            data={props.data}
            defaultValue={props.defaultValue}
          /> : ''}
        {props.children}
        <>
          {verifyTips.icon && messageShow && (rulesAll?.length > 0 || props.error) ?
            verifyTips.msg ?
              <div className={`${prefixCls}-form-tips`}>
                <i className={verifyTips.icon} />
                <span>{verifyTips.msg}</span>
              </div> :
              <div className={`${prefixCls}-form-tips ${verifyTips.icon}`} /> : ''
          }
        </>
      </div>
      {props.other}
    </div>
  </FormItemContext.Provider>)
})
FormItem.displayName = 'FormItem'
FormItem.defaultProps = {
  required: true,
  showMessage: true,
  trigger: 'change',
  rules: []
}
export default FormItem
