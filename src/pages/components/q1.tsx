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
import {Popover} from '../../packages/popover'
import {Message} from "../../packages/message";

function Example() {
  const onClick = (done: () => void) => {
    Message.Msg('点击了删除确认')
    done()
  }
  return (<div className='demo-tooltip' style={{margin: '150px'}}>
    <Popover
    content='确定要删除吗？'
    onClick={onClick}>
      <Button>删除</Button>
    </Popover>
  </div>)
}

export default Example

