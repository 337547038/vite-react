import React, {forwardRef, useImperativeHandle, useRef, useContext} from 'react'
import {Input} from '../input'
import {RadioGroup} from '../radio'
import {CheckboxGroup} from '../checkbox'
import {Select} from '../select'
import {Switch} from '../switch'
import {Textarea} from '../textarea'
import {DatePicker} from '../datePicker'
import {getValueRef} from "../form/types"

interface Props {
  data?: any
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
  defaultValue?: any
  onChange?: (val: any) => void
}

const Field = forwardRef<getValueRef, Props>((props, ref) => {
  let currentComponent: React.ReactNode = (<div />)
  const defaultValue = props.defaultValue || props.data?.defaultValue
  const activeValue = useRef<any>(defaultValue)
  const onChange = (value: any) => {
    activeValue.current = value
    props.onChange && props.onChange(value)
  }
  switch (props.type) {
    case 'radio':
      currentComponent = (<RadioGroup {...props.data} defaultValue={defaultValue} onChange={onChange} />)
      break
    case 'checkbox':
      currentComponent = (<CheckboxGroup {...props.data} defaultValue={defaultValue} onChange={onChange} />)
      break
    case 'select':
      currentComponent = (<Select {...props.data} defaultValue={defaultValue} onChange={onChange} />)
      break
    case 'switch':
      currentComponent = (<Switch {...props.data} defaultValue={defaultValue} onChange={onChange} />)
      break
    case 'textarea':
      currentComponent = (<Textarea {...props.data} defaultValue={defaultValue} onChange={onChange} />)
      break
    case 'datePicker':
      currentComponent = (<DatePicker {...props.data} defaultValue={defaultValue} onChange={onChange} />)
      break
    default:
      currentComponent = (<Input {...props.data} defaultValue={defaultValue} onChange={onChange} />)
  }
  const getValue = () => {
    return activeValue.current
  }
  useImperativeHandle(ref, () => ({getValue}))
  return currentComponent
  /*return (<FormItemContext.Provider value={contextValue}>
    {currentComponent}
  </FormItemContext.Provider>)*/
})
Field.displayName = 'Field'
export default Field
