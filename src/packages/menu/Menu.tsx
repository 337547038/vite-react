import React, {forwardRef, useRef, useImperativeHandle, useState, useContext, useEffect, useCallback} from 'react'
import classNames from 'classnames'
import {prefixCls} from '../prefix'
import {omit} from '../util'

interface Items {
  label?: string
  key: string
  icon?: string
  children?: Items[]
  disabled?: boolean
  className?: string

}

interface Props {
  mode?: 'horizontal' | 'vertical'
  items: Items[]
  className?: string
  trigger?: 'hover' | "click" // 子菜单打开的触发方式，只在 mode 为 horizontal 时有效
}


const Menu: React.FC<Props> = (props) => {
  const {mode = 'vertical', trigger = 'hover'} = props
  const [visibleList, setVisibleList] = useState<string[]>([]) // 当前展开的项集合
  const onMouseEnter = (item: Items) => {
    pushOrSplice(item, true)
  }
  const onMouseLeave = (item: Items) => {
    //pushOrSplice(item, false)
  }
  const onClick = (item: Items) => {
    pushOrSplice(item, !visibleList.includes(item.key))
  }
  const pushOrSplice = (item: Items, add: boolean) => {
    if (add) {
      // 有子级时才处理 todo
      visibleList.push(item.key)
      setVisibleList([...visibleList])
    } else {
      setVisibleList([...omit(visibleList, [item.key])])
    }
  }
  const getChildStyle = (item?: Items) => {
    if (item && !visibleList.includes(item.key)) {
      // 表示为子级，默认下添加隐藏样式
      return {display: 'none'}
    }
    return {}
  }
  const getItemMap = (items: Items[], layer: number, item?: Items) => {
    return <ul style={getChildStyle(item)} className={classNames('layer-' + layer, {'is-child': item})}>
      {items.map((item: Items) =>
        <li
          key={item.key}
          className={classNames(item.className, {disabled: item.disabled, 'is-down': visibleList.includes(item.key)})}
          onMouseEnter={() => onMouseEnter(item)}
          onMouseLeave={() => onMouseLeave(item)}
          onClick={() => onClick(item)}>
          <span className='menu-title'>
            {item.icon ? <i className={`icon icon-${item.icon}`} /> : ''}
            {item.label}
            {item.children ? <i className='icon-arrow' /> : ''}
          </span>
          {item.children ? getItemMap(item.children, layer + 1, item) : ''}
        </li>
      )}
    </ul>
  }
  return (<div className={classNames(`${prefixCls}-menu`, mode, props.className)}>
    {getItemMap(props.items, 0)}
  </div>)
}
export default Menu
