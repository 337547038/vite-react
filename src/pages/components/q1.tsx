import React, {ReactElement, useCallback, useState, useRef} from "react";
import {FormItem, Field} from '../../packages/formItem'
import {Input} from '../../packages/input'
import {Form} from '../../packages/form'
import {Button} from "../../packages/button";
import type {FormRef} from "../../packages/form";
import type {FormItemRef} from "../../packages/formItem";
import type {InputRef} from "../../packages/input";
import {RadioGroup} from '../../packages/radio'
import {CheckboxGroup, Checkbox} from '../../packages/checkbox'
import {Switch} from '../../packages/switch'
import {Select} from '../../packages/select'
import {Textarea} from '../../packages/textarea'

function Example() {
  const formValue = {
    userName: 'userName',
    number: '100.00',
    switch: false
  }
  const formEl = useRef<FormRef>(null)
  const options = [
    {label: '选项1', value: '1'},
    {label: '选项2', value: '2'},
    {label: '选项3', value: '3'}
  ]
  const formRules = {
    password: [
      {type: 'required', msg: '密码不能为空'},
      {type: 'minLength', len: 6, msg: '密码不能小于6位'}
    ],
    userName: [{type: 'required', msg: '用户名不能为空'}],
    mobile: [
      {type: 'required', msg: '请输入手机号'},
      {type: 'mobile', msg: '手机号格式不正确'}
    ],
    mail: [{type: 'mail', msg: '邮箱格式不正确'}],
    digits: [{type: 'digits', msg: '只能输入正整数'}],
    number: [{type: 'number', msg: '只能输入数字'}],
    tel: [{type: 'tel', msg: '电话号码格式不正确'}],
    city: [{type: 'required', msg: '城市不能为空'}],
    area: [{type: 'required', msg: '地区不能为空'}],
    select: [{type: 'required', msg: '下拉不能为空'}],
    checkbox: [{type: 'required', msg: '必须同意协议'}],
    checkboxGroup: [{type: 'required', msg: '不能为空'}],
    textarea: [{type: 'required', msg: 'textarea不能为空'}],
    radio: [{type: 'required', msg: 'radio不能为空'}],
    datePicker: [{type: 'required', msg: '请选择日期'}],
    timePicker: [{type: 'required', msg: '请选择时间'}],
    timeSelect: [{type: 'required', msg: '请选择时间'}]
  }
  // 重置
  const resetForm = () => {
    formEl.current?.resetForm()
  }
  // 表单提交
  const submit = () => {
    formEl.current?.validate()
      .then((res: any) => {
        console.log(res)
      })
      .catch((res: string[]) => {
        console.log(res)
      })
  }
  const submit2 = () => {
    formEl.current?.validate(['userName', 'password'])
      .then((res: any) => {
        alert('验证通过')
        console.log(res)
      })
      .catch((res: string[]) => {
        alert(res)
        console.log(res)
      })
  }
  const getValue = () => {
    console.log(formEl.current?.getValue())
  }
  const onChange = (val: any, prop: string) => {
    console.log(val)
    console.log(prop)
  }
  return (<div className='form-demo'>
      <Form ref={formEl} rules={formRules} size="mini" onChange={onChange} labelWidth='150px'>
        <FormItem label="用户名" prop="userName">
          <Input defaultValue={formValue.userName} placeholder="请输入用户名" />
        </FormItem>
        <FormItem label="密码" prop="password" type='input' data={{type: 'password', placeholder: "请输入密码"}}>
        </FormItem>
        <FormItem prop="mobile" label={'手机号'} type='input' data={{placeholder: "请输入手机号"}} />
        <FormItem prop="mail" label="邮箱" type='input' data={{placeholder: "请输入邮箱地址"}} />

        <FormItem prop="digits" label="digits" type='input' />

        <FormItem prop="number" label="number" type='input' />

        <FormItem prop="tel" label="tel" type='input' data={{placeholder: "请输入电话号码"}} />

        <FormItem label="城市">
          <FormItem prop="city" type='input' />
          <FormItem prop="area" type='input' />
        </FormItem>
        {/*<FormItem label="地区选择" verify="required">
        <ak-cascader
          defaultValue="formValue.cascader"
          placeholder="请选择"
        :options="[
        {
          label: '广东',
          value: '1',
          children: [{label: '广州', value: '2'}]
        }
        ]"
        />
      </FormItem>*/}
        <FormItem label="radio" prop="radio" type='radio' data={{options: options}} />

        <FormItem label="checkbox" prop="checkboxGroup" type='checkbox' data={{options: options}} />

        <FormItem prop="select" label="select" type='select'
                  data={{options: options, clear: true, placeholder: '请选择'}} />

        <FormItem label="textarea" prop="textarea" type='textarea' />

        {/*<FormItem label="datePicker" prop="datePicker">
        <ak-date-picker defaultValue="formValue.datePicker" placeholder="请选择" />
      </FormItem>*/}
        <FormItem label="switch" type='switch' prop='switch' />

        {/*<FormItem label="timePicker" prop="timePicker">
        <ak-time-picker defaultValue="formValue.timePicker" />
      </FormItem>*/}
        {/*<FormItem label="timeSelect" prop="timeSelect">
        <ak-time-select defaultValue="formValue.timeSelect" />
      </FormItem>*/}
        <FormItem prop="checkbox">
          <Checkbox value="formValue.checkbox">我已阅读并同意……</Checkbox>
        </FormItem>
        <Button type="primary" onClick={submit}>提交</Button>
        <Button type="primary" onClick={submit2}> 仅对用户名密码验证 </Button>
        <Button onClick={resetForm}> 重置表单 </Button>
        <Button onClick={getValue}> 获取表单值 </Button>
      </Form>
    </div>
  )
}

export default Example

