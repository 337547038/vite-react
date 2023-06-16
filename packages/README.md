# vite-plugin-doc-preview

`vite-plugin-doc-preview` 是基于 `Vite` 插件机制实现对 `markdown` 文件内容进行转换。核心通过 `marked` 结合 `hightlight.js` 实现代码高亮和美化。并且可让文档中带有如 `preview` 指定标识的 `markdown` 代码块替换为组件，体验预览效果。支持 `Vue` 和 `React` 框架

## 示例

https://337547038.github.io/vite-plugin-doc-preview/

## 安装使用

安装依赖

```shell
npm install vite-plugin-doc-preview -D
# or
pnpm install vite-plugin-doc-preview -D
# or
yarn install vite-plugin-doc-preview -D
```

## 使用配置

### 在 Vue 中使用
```ts
// vite.config.ts
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import MarkedPreview from 'vite-plugin-doc-preview'

export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    MarkedPreview()
    // 可根据需要设置参数，可选
    /*MarkedPreview({
      marked:{}, // marked转换options，可参考https://marked.js.org/
      component:false // 是否自定义预览组件，默认false
      previewId:'vue preview' // 预览标识，默认vue preview
    })*/
  ]
})
```

### 在 React 中使用
```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import MarkedPreview from 'vite-plugin-doc-preview'

export default defineConfig({
  plugins: [
    react(),
    MarkedPreview({mode:'react'})
    // 可根据需要设置参数，可选
    /*MarkedPreview({
      marked:{}, // marked转换options，可参考https://marked.js.org/
      component:false // 是否自定义预览组件，默认false
      previewId:'vue preview' // 预览标识，默认vue preview
    })*/
  ]
})
```

## 引入样式

在适当组件页面引入高亮样式，如 `main.ts`　中。其他主题风格可参考 `highlight.js` 引入对应主题

```ts
import "vite-plugin-doc-preview/style/style.css"
```

## 代码预览标识

给需要预览的 `markdown` 文档代码块加上指定标识，如 `vue preview` 。其他标识可在`vite.config.ts`配置中修改

如 `README.md` 文件内容为：

````markdown

下方代码块将会被解析为 Vue 组件并展示预览效果和代码高亮美化

```vue preview
<template>{{value}}</template>
<script setup>
 import {ref} from 'vue'
 const value = ref('hello 我是Vue模板')
</script>
```

或者为React 

```jsx preview
const Example = ()=>{
 return (<div>hello 我是React模板</div>)
}
export default Example
```

````

## 路由配置
```ts
 [
  {
    path: '/',
    name: '/md',
    component: () => import('./views/README.md')
  }
]
```

## 自定义预览组件

### `Vue` 预览组件

如果默认的样式不能满足需求，可以全局注册一个 `CodePreview` 组件来代替默认组件。

设定自定义预览组件时

```ts
//1. vite.config.ts中配置：
MarkedPreview({component:true})  // 传入参数，表示为自定义预览组件

//2.　main.ts中
import CodePreview from 'xxxxx'
app.component('CodePreview', CodePreview)　//　注册自己的自定义好的预览组件
```

`CodePreview` 需要按约定支持如下 `props` 和 `slot`

- props
  - `code` string 代码块的原始代码，代码已经`encodeURIComponent`处理
- slot
  - `default` 代码块生成的 vue 组件
  - `code` 代码块经过高亮转换的 html

### `React` 预览组件

`React` 没有全局注册的概念，可通过 `component` 传入预览组件路径，如

```ts
// 1.vite.config.ts中配置
MarkedPreview({component:'@/component/codePreview.jsx'})  // 传入参数，表示为自定义预览组件
```

预览组件需按约定支持如下 `props` 和 `children`

- props
  - `code` string 代码块的原始代码，代码已经`encodeURIComponent`处理
- children
  - children[0] 代码块生成的 React 组件
  - children[1] 代码块经过高亮转换的 html

