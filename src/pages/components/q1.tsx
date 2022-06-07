import React, {ReactElement, useCallback, useState, useRef, useEffect} from "react";
import {Tabs, TabPane} from '../../packages/tabs'

function Example() {
  return (<Tabs>
    <TabPane label="用户管理">用户管理</TabPane>
    <TabPane label="配置管理">配置管理</TabPane>
    <TabPane label="角色管理">角色管理</TabPane>
    <TabPane label="定时任务补偿">定时任务补偿</TabPane>
  </Tabs>)
}


export default Example

