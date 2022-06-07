import React, {
  Fragment,
  forwardRef,
  useRef,
  useImperativeHandle,
  useState,
  useContext,
  useEffect
} from 'react'
import classNames from 'classnames'
import {prefixCls} from '../prefix'
import {FormItemContext} from '../form/contextForm'
import {Tag} from '../tag'
import {getOffset, getWindow} from '../util/dom'
import ReactDOM from 'react-dom'
import type {getValueRef} from '../form/types'

export interface SelectDownRef extends getValueRef {
  clearValue: () => void // 清空输入框的值
  slideUp: () => void
}

export interface Props {
  defaultValue?: string[]
  width?: string
  multiple?: boolean
  collapseTags?: boolean
  clear?: boolean
  filterable?: boolean
  size?: string // 尺寸
  placeholder?: string
  disabled?: boolean
  direction?: number // 0自动,1向下,2向上
  downClass?: string
  downStyle?: React.CSSProperties
  appendToBody?: boolean
  downHeight?: number // 显示下拉最大高度，超出显示滚动条
  icon?: string
  fixedIcon?: boolean
  className?: string
  children?: React.ReactNode
  toggleClick?: (val: boolean, evt?: React.MouseEvent<HTMLDivElement> | MouseEvent) => void
  onInput?: (activeVal: string, value: string[], evt?: MouseEvent | React.ChangeEvent) => void
  onFocus?: (activeVal: string, value: string[], evt: MouseEvent | React.ChangeEvent) => void
  onBlur?: (activeVal: string, value: string[], evt: MouseEvent | React.ChangeEvent) => void
  onDelete?: (index: number) => void
  isRange?: boolean // 区间选择，此时multiple无效
  rangeSeparator?: string // isRange时分隔符
  endPlaceholder?: string // isRange时第二个输入框
}

const SelectDown = forwardRef<SelectDownRef, Props>((props, ref) => {
  const {defaultValue = []} = props
  const [value, setValue] = useState(defaultValue)
  const [direction2, setDirection2] = useState<number>(props.direction || 0)
  const [downPanelStyle, setDownPanelStyle] = useState<React.CSSProperties>(Object.assign({}, props.downStyle, {display: 'none'}))
  const useFormItemContext = useContext(FormItemContext)
  // 表单设置了true时，使用父级表单设置的
  const disabled = useFormItemContext.disabled || props.disabled
  const el = useRef<HTMLDivElement>(null)
  const downEl = useRef<HTMLDivElement>(null)
  const [cssTransition, setCssTransition] = useState<string>('')
  useEffect(() => {
    // console.log(defaultValue)
    setValue([...defaultValue])
  }, [props.defaultValue])
  let downHeightStyle = {}
  if (props.downHeight) {
    downHeightStyle = {
      'maxHeight': props.downHeight + 'px',
      'overflowY': 'auto'
    }
  }
  // 展开下拉
  const stopPropagation = useRef<boolean>(false)
  const visible = useRef<boolean>(false)
  const downToggle = (evt: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
    if (disabled) {
      return
    }
    setPosition(evt)
    setAppendToBodyStyle(true)
    stopPropagation.current = true
    visible.current = true
    props.toggleClick && props.toggleClick(true, evt)
    setTimeout(() => {
      stopPropagation.current = false
    }, 100)
  }
  const setPosition = (evt: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
    if (props.direction === 0) {
      setDirection2(props.direction)
      // 计算弹出方向
      const wh =
        document.documentElement.clientHeight || document.body.clientHeight
      const clientY = evt.clientY // 当鼠标事件发生时，鼠标相对于浏览器（这里说的是浏览器的有效区域）y轴的位置；
      // 最大下拉高度
      let downMaxHeight = props.downHeight || downEl.current?.offsetHeight || 0
      if (downMaxHeight > wh - clientY && clientY > downMaxHeight) {
        // 向上
        setDirection2(2)
      }
    }
  }
  const setAppendToBodyStyle = (show: boolean) => {
    if (!el.current) {
      return
    }
    let panelStyle: React.CSSProperties = {}
    const offset = getOffset(el.current)
    if (props.appendToBody) {
      const ww = getWindow()
      panelStyle = {
        bottom: 'auto',
        minWidth: offset.width + 'px',
        left: offset.left + 'px',
        top: offset.top + offset.height + 8 + 'px'
      }
      if (direction2 === 2) {
        // 向上
        panelStyle.top = 'auto'
        panelStyle.bottom = ww.height - offset.top + 'px'
      }
    } else {
      panelStyle.top = offset.height + 8 + 'px'
      panelStyle.bottom = 'auto'
      if (direction2 === 2) {
        // 向上
        panelStyle.bottom = offset.height + 8 + 'px'
        panelStyle.top = 'auto'
      }
    }
    const display = {display: show ? '' : 'none'}
    setDownPanelStyle({...downPanelStyle, ...panelStyle, ...display})
    // 添加显示过渡动画
    setTimeOutVisible(show)
  }
  const selectControlClick = (evt: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
    if (visible.current && !props.filterable) {
      // 可搜索时不能关上
      slideUp(evt)
      evt.stopPropagation()
    }
  }
  const slideUp = (evt?: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
    if (visible.current && !stopPropagation.current) {
      // 当前为展开状态，slideUp方法收起时，不回调事件
      evt && props.toggleClick && props.toggleClick(false, evt)
      /*const display = {display: 'none'}
      setDownPanelStyle({...downPanelStyle, ...display})*/
      setTimeOutVisible(false)
      visible.current = false
    }
  }
  const setTimeOutVisible = (show: boolean) => {
    let cssCls = 'slide-toggle-leave-active' // 退场
    if (show) {
      cssCls = 'slide-toggle-enter-active'
    }
    setCssTransition(cssCls)
    setTimeout(() => {
      if (!show) {
        const display = {display: 'none'}
        setDownPanelStyle({...downPanelStyle, ...display})
      }
      setCssTransition('')
    }, 400)
  }
  const inputInput = (type: string, evt: React.ChangeEvent) => {
    let val: string = (evt.target as HTMLInputElement).value
    if (type === 'normal') {
      setValue([val])
    }
    if (type === 'start') {
      value[0] = val
      setValue([...value])
    }
    if (type === 'end') {
      value[1] = val
      setValue([...value])
    }
    mouseEvent(evt, 'onInput')
  }
  const inputFocus = (evt: MouseEvent | React.ChangeEvent) => {
    mouseEvent(evt, 'onFocus')
  }
  const inputBlur = (evt: MouseEvent | React.ChangeEvent) => {
    mouseEvent(evt, 'onBlur')
  }
  const mouseEvent = (evt: MouseEvent | React.ChangeEvent, type: string) => {
    if (props.filterable) {
      let val: string = (evt.target as HTMLInputElement).value
      /*if (props.isRange) {
        val = value
      }*/
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      props[type] && props[type](val, value, evt)
    }
  }
  const deleteText = (index: number, evt: React.MouseEvent<HTMLDivElement>) => {
    value.splice(index, 1)
    setValue([...value])
    props.onDelete && props.onDelete(index)
    evt.stopPropagation()
  }
  // 清空
  const clearClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    setValue([])
    clearValue()
    props.onInput && props.onInput('', [])
    evt.stopPropagation()
  }
  const downPaneClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.stopPropagation()
  }
  useEffect(() => {
    document.addEventListener('click', slideUp, false)
    return () => {
      document.removeEventListener('click', slideUp, false)
    }
  }, [downPanelStyle]) // 这里反复添加总感觉不是很理想，不添加在slideUp以内部的toggleClick方法里又获取不到最新的useState

  const getValue = () => {
    return value
  }
  const inputStart = useRef<HTMLInputElement>(null)
  const endStart = useRef<HTMLInputElement>(null)
  // 用于清空输入框的值
  const clearValue = () => {
    if (props.filterable) {
      if (inputStart.current) {
        inputStart.current.value = ''
      }
      if (endStart.current) {
        endStart.current.value = ''
      }
    }
  }
  useImperativeHandle(ref, () => ({getValue, clearValue, slideUp}))
  const inputCls = {
    [`${prefixCls}-input-control`]: true,
    [props.size as string]: props.size,
    disabled: disabled
  }
  const isRangeHtml = (
    <div className={classNames('select-range', inputCls)}>
      <input
        ref={inputStart}
        key="start"
        value={value[0]}
        readOnly={!props.filterable}
        placeholder={props.placeholder}
        disabled={disabled}
        onChange={inputInput.bind(this, 'start')}
        onFocus={inputFocus}
        onBlur={inputBlur}
      />
      <span>{props.rangeSeparator}</span>
      <input
        ref={endStart}
        key="end"
        value={value[1]}
        readOnly={!props.filterable}
        placeholder={props.endPlaceholder}
        disabled={disabled}
        onChange={inputInput.bind(this, 'end')}
        onFocus={inputFocus}
        onBlur={inputBlur}
      />
    </div>)
  const isMultipleHtml = (
    <div className={classNames('multiple-text', inputCls)}>
      <ul placeholder={props.placeholder}>
        {props.collapseTags ?
          <Fragment>
            {value?.length > 0 ?
              <li>
                <span>{value[0]}</span>
                <i className="icon-error" onClick={deleteText.bind(this, 0)} />
              </li> : ''}
            {value?.length > 1 ?
              <li>
                <Tag size="mini" type="info"> +{value?.length}</Tag>
              </li> : ''}
          </Fragment> :
          <>
            {
              value.map((obj: string, index: number) =>
                <li key={obj}>
                  <span>{obj}</span>
                  <i className="icon-error" onClick={deleteText.bind(this, index)} />
                </li>
              )
            }
          </>}
        {props.filterable ?
          <li className="input">
            <input
              ref={inputStart}
              type="text"
              disabled={disabled}
              placeholder={value?.length === 0 ? props.placeholder : ''}
              onChange={inputInput.bind(this, 'multiple')}
              onFocus={inputFocus}
              onBlur={inputBlur}
            />
          </li> : ''}
      </ul>
    </div>
  )
  const isNormalHtml = (
    <input
      ref={inputStart}
      value={value?.length > 0 ? value[0] : ''}
      readOnly={!props.filterable}
      placeholder={props.placeholder}
      className={classNames(inputCls)}
      disabled={disabled}
      onChange={inputInput.bind(this, 'normal')}
      onFocus={inputFocus}
      onBlur={inputBlur}
    />
  )
  const downPaneHtml = (
    <div
      ref={downEl}
      className={classNames(props.className, cssTransition, {
        [prefixCls + '-select-down-pane']: true,
        [props.downClass as string]: props.downClass,
        top: direction2 === 2
      })}
      style={downPanelStyle}
      onClick={downPaneClick}>
      <div style={downHeightStyle} className="scroll-pane">
        {props.children}
      </div>
      <span className={classNames('down-arrow', {'is-range': props.isRange})} />
    </div>
  )
  return (
    <div
      ref={el}
      className={classNames({
        'is-down': visible.current,
        [prefixCls + '-select-down']: true,
        disabled: disabled
      })} onClick={downToggle}
      style={{width: props.width}}>
      <div className="select-control" onClick={selectControlClick}>
        {props.isRange ? isRangeHtml : props.multiple ? isMultipleHtml : isNormalHtml}
        <span className="group-icon">
        {props.clear && value?.length > 0 ?
          <i className="icon-close" title="清空" onClick={clearClick} /> : ''}
          <i className={classNames({down: visible.current && !props.fixedIcon, [`icon-${props.icon}`]: true})} />
        </span>
      </div>
      {props.appendToBody ? ReactDOM.createPortal(downPaneHtml, document.body) : downPaneHtml}
    </div>)
})
SelectDown.displayName = 'SelectDown'
SelectDown.defaultProps = {
  icon: 'arrow',
  rangeSeparator: 'To',
  direction: 0,
  downHeight: 0,
  appendToBody: false
}
export default SelectDown
