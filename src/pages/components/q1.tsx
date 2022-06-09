import React, {ReactElement, useCallback, useState, useRef, useEffect} from "react";
import {Tabs, TabPane} from '../../packages/tabs'
import {SwitchTransition, CSSTransition} from "react-transition-group";
import {Menu} from '../../packages/menu'
import {Switch} from '../../packages/switch'

function Example() {
  const items = [
    {
      label: '用户管理',
      key: 'user',
      icon: 'user',
      children: [
        {
          label: '用户列表',
          key: 'a1'
        },
        {
          label: '添加用户',
          key: 'a2'
        }
      ]
    },
    {
      label: 'Navigator Two',
      key: 'b',
      icon: 'search',
      children: [
        {
          label: 'item one',
          key: 'b1',
          children: [
            {
              label: 'item two',
              key: 'b2',
            },
            {
              label: 'item three',
              key: 'b3',
            }
          ]
        },
        {
          label: 'item one',
          key: 'b4',
        },
        {
          label: 'item one',
          key: 'b5',
        }
      ]
    },
    {
      label: '系统设置',
      key: 'set',
      icon: 'date',
      disabled: true
    }
  ]
  const [collapse, setCollapse] = useState<boolean>(true)
  const onChange = (val: any) => {
    setCollapse(val)
  }
  return (<div style={{width: 200}}>
    <div><Switch onChange={onChange} defaultValue={collapse}></Switch></div>
    <Menu items={items} mode="vertical" collapse={collapse} />
    <p>dark主题</p>
    <Menu items={items} mode="vertical" theme='dark' collapse={collapse} />
  </div>)
}

export default Example

