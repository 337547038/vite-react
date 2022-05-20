import React, {useState} from 'react'
import classNames from 'classnames'
import {prefixCls} from '../prefix'

interface Props {
  type?: string
  closable?: boolean
  color?: string
  borderColor?: string
  bgColor?: string
  size?: string
  children?: React.ReactNode
  onClose?: () => void
  onClick?: () => void
}

const TagApp: React.FC<Props> = (props) => {
  const [visible, setVisible] = useState(true)
  const onClick = () => {
    props.onClick && props.onClick()
  }
  const closeClick = () => {
    setVisible(false)
    props.onClose && props.onClose()
  }
  if (visible) {
    return (<span
      className={classNames({
        [`${prefixCls}-tag`]: true,
        [`tag-` + props.type]: props.type,
        [`tag-` + props.size]: props.size
      })}
      style={{background: props.bgColor, borderColor: props.borderColor, color: props.color}}
      onClick={onClick}>
      {props.children}
      {props.closable ?
        <i className="icon-close" onClick={closeClick} /> : ''
      }

    </span>)
  } else {
    return null
  }
}
export default TagApp
