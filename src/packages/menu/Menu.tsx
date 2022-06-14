import React, {useState} from 'react'
import classNames from 'classnames'
import {prefixCls} from '../prefix'
import {omit} from '../util'
import {CSSTransition} from 'react-transition-group'
import {useNavigate} from 'react-router-dom'
import {Tooltip} from '../tooltip'

interface Items {
  label?: string
  key: string
  icon?: string
  children?: Items[]
  disabled?: boolean
  className?: string
  childHeight?: number // 用于微调下拉高度,仅在mode为vertical时
}

interface Props {
  mode?: 'horizontal' | 'vertical'
  items: Items[]
  className?: string
  trigger?: 'hover' | "click" // 子菜单打开的触发方式，只在 mode 为 horizontal 时有效
  theme?: 'light' | 'dark'
  style?: React.CSSProperties
  liHeight?: number // 子菜单项高，仅在mode为vertical时，用于计算高度平滑动画效果
  openKeys?: string[]
  selectedKey?: string
  onClick?: (item: Items) => void
  onSelect?: (item: Items) => void
  router?: boolean
  collapse?: boolean
}

const Menu: React.FC<Props> = (props) => {
  const {mode = 'vertical', trigger = 'hover', theme = 'light', liHeight = 40} = props
  const [visibleList, setVisibleList] = useState<string[]>(props.openKeys || []) // 当前展开的项集合
  const visibleKeys = React.useRef<string[]>(visibleList)
  const [selectedKey, setSelectedKey] = useState<string>(props.selectedKey || '') // 当前选中的
  const navigate = useNavigate()
  const onMouseEnter = (item: Items) => {
    onMouseEvent(item, true)
  }
  const onMouseLeave = (item: Items) => {
    onMouseEvent(item, false)
  }
  const onMouseEvent = (item: Items, add: boolean) => {
    if ((trigger === 'hover' && mode === 'horizontal') || (mode === 'vertical' && props.collapse)) {
      pushOrSplice(item, add)
    }
  }
  const onClick = (item: Items, evt: React.MouseEvent) => {
    if (item.disabled) {
      return
    }
    if (trigger === 'click' || mode === 'vertical') {
      pushOrSplice(item, !visibleKeys.current?.includes(item.key))
    }
    // 如果没有子级，设置当前选中项
    if (!item.children) {
      setSelectedKey(item.key)
      props.onSelect && props.onSelect(item)
      props.router && navigate(item.key)
    }
    props.onClick && props.onClick(item)
    evt.stopPropagation()
  }
  const pushOrSplice = (item: Items, add: boolean) => {
    if (item.disabled) {
      return
    }
    if (add) {
      // 有子级时才处理
      if (item.children && !visibleKeys.current?.includes(item.key)) {
        visibleKeys.current.push(item.key)
        setVisibleList([...visibleKeys.current])
      }
    } else {
      visibleKeys.current = omit(visibleKeys.current, [item.key])
      setVisibleList([...visibleKeys.current])
    }
  }
  // 收起全部
  const slideUp = () => {
    setVisibleList([])
    visibleKeys.current = []
  }
  React.useEffect(() => {
    if (trigger === 'click' && mode === 'horizontal') {
      document.addEventListener('click', slideUp, false)
    }
    return () => {
      if (trigger === 'click' && mode === 'horizontal') {
        document.removeEventListener('click', slideUp, false)
      }
    }
  }, [])
  const isOpen = (item?: Items) => {
    return !item || (item && visibleKeys.current?.includes(item.key))
  }
  const getUlHeight = (item?: Items) => {
    if (item && item.children) {
      return item.children.length * liHeight + (item.childHeight || 0)
    }
    return null
  }
  // 进入或退出时添加高度
  const onEnterExit = (node: HTMLElement) => {
    const height = node.getAttribute('data-height')
    if (height) {
      node.style.height = height + 'px'
      node.style.overflow = 'hidden'
    }
    // 移除初始时添加的display
    node.style.display = ''
  }
  // 进入或退出结束后移除高度
  const onEnteredExited = (node: HTMLElement) => {
    node.style.height = ''
    node.style.overflow = ''
  }
  const getItemMap = (items: Items[], layer: number, item?: Items) => {
    return <CSSTransition
      in={isOpen(item)}
      timeout={300}
      onEnter={onEnterExit}
      onExit={onEnterExit}
      onEntered={onEnteredExited}
      onExited={onEnteredExited}
      classNames='menu'>
      <ul
        className={classNames('layer-' + layer, {
          'is-child': item
        })}
        style={{display: item && visibleList.includes(item.key) ? 'block' : ''}}
        data-height={getUlHeight(item)}>
        {items.map((item: Items) =>
          <li
            key={item.key}
            className={classNames(item.className, {
              disabled: item.disabled,
              'is-down': visibleList.includes(item.key),
              selected: item.key === selectedKey
            })}
            onMouseEnter={() => onMouseEnter(item)}
            onMouseLeave={() => onMouseLeave(item)}
            onClick={onClick.bind(this, item)}>
          <span className='menu-title'>
            <Tooltip
              content={item.label}
              direction='right'
              x={15}
              disabled={!(layer === 0 && !item.children && props.collapse)}>
            {item.icon ? <i className={`icon icon-${item.icon}`} /> : ''}
              </Tooltip>
            <span className='name'>{item.label}</span>
            {item.children ? <i className='icon-arrow' /> : ''}
          </span>
            {item.children ? getItemMap(item.children, layer + 1, item) : ''}
          </li>
        )}
      </ul>
    </CSSTransition>
  }
  return (<div
    style={props.style}
    className={classNames(`${prefixCls}-menu`, mode, theme, props.className, {collapse: props.collapse && mode === 'vertical'})}>
    {getItemMap(props.items, 0)}
  </div>)
}
export default Menu
