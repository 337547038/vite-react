import React from 'react'

interface Callback {
  getValue: () => void
  validate: () => Promise<unknown>
  clearTips: () => void
  prop: string
}

interface Props {
  rules?: object
  showMessage?: boolean
  trigger?: 'change' | 'blur'
  labelWidth?: string
  required?: boolean
  size?: string
  disabled?: boolean
  callback?: (val: Callback) => void
  onChange?: (val: any, props: string) => void
}

/**
 * 表单相关参数，主要formItem使用
 */
export const FormPropsContext = React.createContext<Props>({})

export interface FormItemContextProps {
  disabled?: boolean
  controlChange?: (val: string | string[] | number | boolean, type?: string) => void
}

/**
 * 各表单组件改变时回调通知formItem及接收formItem相关参数
 */
export const FormItemContext = React.createContext<FormItemContextProps>({})
