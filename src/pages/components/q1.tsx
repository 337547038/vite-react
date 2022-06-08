import React, {ReactElement, useCallback, useState, useRef, useEffect} from "react";
import {Tabs, TabPane} from '../../packages/tabs'
import {SwitchTransition, CSSTransition} from "react-transition-group";
import {Menu} from '../../packages/menu'

function Example() {
  const items = [
    {
      label: 'Nav One',
      key: 'a',
      icon: 'user'
    },
    {
      label: 'Nav Two',
      key: 'b',
      icon: 'search',
      children: [
        {
          label: 'option1',
          key:'option1',
          children: [
            {
              label: 'option11',
              key:'option11',
            },
            {
              label: 'option12',
              key:'option12',
            }
          ]
        },
        {
          label: 'option2',
          key:'option2',
        },
        {
          label: 'option3',
          key:'option3',
        }
      ]
    },
    {
      label: 'Nav Three',
      key: 'c',
      icon: 'date',
      disabled: true
    }
  ]
  return (<Menu items={items} mode="horizontal"/>)
}

export default Example
