import React, {useContext} from 'react'
import classNames from 'classnames'
import {prefixCls} from '../prefix'
import {Link} from 'react-router-dom'
import FormContext from '../form/contextForm'

interface ButtonProps {
  type?: string
  size?: string
  href?: string
  icon?: string
  round?: boolean
  disabled?: boolean
  nativeType?: 'button' | 'submit' | 'reset'
  width?: string
  loading?: boolean // 是否加
  plain?: boolean // 是否为朴素按钮
  onClick?: () => void
  children?: React.ReactNode;
  className?: string
}

const ButtonApp: React.FC<ButtonProps> = (props) => {
  const contextForm = useContext(FormContext)
  let disabled = props.disabled
  if (contextForm.disabled) {
    // 表单设置了true时，使用父级表单设置的
    disabled = true
  }
  let size = props.size
  if (contextForm.size) {
    // 表单设置了true时，使用父级表单设置的
    size = contextForm.size
  }
  const classes = classNames(props.className, {
    [`${prefixCls}-btn`]: true,
    'is-round': props.round,
    [`${prefixCls}-btn-` + props.type]: props.type,
    disabled: disabled,
    [size as string]: size,
    'is-plain': props.plain
  });
  const style = {width: props.width};
  const bntIcon = props.loading ? 'loading' : props.icon
  if (props.href) {
    return (<Link to={props.href} className={classes} style={style}>
      {bntIcon ?
        <i className={`icon-${bntIcon} ${prefixCls}-icon`} /> : ''
      }
      {props.children}</Link>);
  } else {
    return (<button
      className={classes}
      type={props.nativeType}
      style={style}
      onClick={props.onClick}
      disabled={disabled}>
      {bntIcon ?
        <i className={`icon-${bntIcon} ${prefixCls}-icon`} /> : ''
      }
      {props.children}</button>);
  }
};
ButtonApp.defaultProps = {
  size: '',
  nativeType: 'button'
};
export default ButtonApp;
