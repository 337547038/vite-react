import React, {ReactElement, useCallback, useState, useRef, useEffect} from "react";
import {Tabs, TabPane} from '../../packages/tabs'
import {SwitchTransition, CSSTransition} from "react-transition-group";
import {Switch} from '../../packages/switch'
import {DatePicker} from '../../packages/datePicker'
import {SelectDown} from "../../packages/selectDown";
import {Select} from "../../packages/select";

function Example(){
  return (<div className='demo-date-picker'>
    <div>
      <DatePicker
        placeholder="请选择时间"
        readonly={false}
        clear={true}
      />
    </div>
  </div>)
}

export default Example

