import React, {forwardRef, useRef, useImperativeHandle, useState, useContext, useEffect, useCallback} from 'react'
import classNames from 'classnames'
//import {prefixCls} from '../prefix'

interface Props {
  key: any
}

interface FieldRef {
  key: any
}

const Field = forwardRef((props: Props, ref: React.Ref<FieldRef>) => {
  return (<div></div>)
})
Field.displayName = 'Field'
export default Field
