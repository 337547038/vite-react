import React, {ReactElement, useCallback, useState, useRef, useEffect} from "react";
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
import {Table} from '../../packages/table'
import tableData from '../../packages/table/demoJs.json'

//import { TransitionGroup,CSSTransition } from 'react-transition-group';

import type {TableRef} from "../../packages/table/types";

import {Tooltip} from '../../packages/tooltip'

function Example() {
  return (<div className='demo-tooltip' style={{margin: '150px'}}>
    <Tooltip
    trigger='click'
    direction="top"
    delay={300}
    content='这里是提示内容，鼠标可以移动到上面，提示内容不会消失，可实现从这里点击跳转链接等'>
      <Button>设置延时关闭</Button>
    </Tooltip>
  </div>)
}

export default Example

