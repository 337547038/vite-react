import React, {useState, useEffect} from 'react'
import classNames from 'classnames'
import {prefixCls} from '../prefix'
import type {Props as TabPaneProps} from './TabPane'
import {CSSTransition} from "react-transition-group"

interface Props {
  defaultValue?: string
  beforeLeave?: (obj: TabPaneProps) => boolean
  showContent?: boolean // 是否显示切换内容
  children: React.ReactNode
  onChange?: (obj: TabPaneProps, index: number) => void
  className?: string
}

const Tabs: React.FC<Props> = (props) => {
  const {showContent = true, defaultValue = 'tab-1'} = props
  const [childrenPane, setChildrenPane] = useState<string[]>([])
  const [activeKey, setActiveKey] = useState<string>(defaultValue)
  const getChildrenByName = () => {
    const tempOpt: string[] = []
    const children: any = props.children
    if (children && typeof children === 'object') {
      children.forEach((node: React.ReactNode) => {
        if (React.isValidElement(node)) {
          if (typeof node.type === 'function' && node.type.name === 'TabPane') {
            tempOpt.push(node.props)
          }
        }
      })
    }
    return tempOpt
  }
  const getShow = (item: TabPaneProps, index: number) => {
    if (item.name) {
      return item.name === activeKey
    } else {
      // 没有指定name时
      return activeKey === 'tab-' + (index + 1)
    }
  }
  const onClick = (item: TabPaneProps, index: number) => {
    if (item.disabled) {
      return
    }
    if (props.beforeLeave) {
      if (!props.beforeLeave(item)) {
        console.log('阻止点击')
        return false
      }
    }
    setActiveKey(item.name || 'tab-' + (index + 1))
    props.onChange && props.onChange(item, index)
  }
  useEffect(() => {
    setActiveKey(defaultValue)
  }, [props.defaultValue])
  useEffect(() => {
    setChildrenPane([...getChildrenByName()])
  }, [props.children])
  return (<div className={classNames(props.className, `${prefixCls}-tabs`)}>
    <div className='tabs-nav'>
      {childrenPane.map((item: any, index: number) =>
        <div
          key={index}
          className={classNames('tabs-tab', {disabled: item.disabled, active: getShow(item, index)})}
          onClick={() => onClick(item, index)}>{item.label}</div>
      )}
    </div>
    {showContent ? <div className="tabs-content">
        {childrenPane.map((item: any, index: number) =>
          <CSSTransition
            key={index}
            in={getShow(item, index)}
            timeout={500}
            classNames="tabs"
          >
            <div
              key={index}
              style={{display: getShow(item, index) ? '' : 'none'}}
              className={classNames(`tab-pane-${index}`, item.className)}>{item.children}</div>
          </CSSTransition>
        )}
    </div> : ''}

  </div>)
}
export default Tabs
