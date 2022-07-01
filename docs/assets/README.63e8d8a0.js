import{R as s,r as c}from"./index.be43aed1.js";import{S as t,O as u}from"./Option.662c370a.js";import"./SelectDown.c48bba91.js";import"./contextForm.5ae3f644.js";import"./Tag.033a642a.js";import"./dom.46b1a4a1.js";import"./index.4eedf3c9.js";function r(){const l=[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"},{label:"\u9009\u98793",value:"3"},{label:"\u9009\u98794",value:"4",disabled:!0},{label:"\u9009\u98795",value:"5"},{label:"\u9009\u98796",value:"6"},{label:"\u9009\u98797",value:"7"},{label:"\u9009\u98798",value:"8"},{label:"\u9009\u98799",value:"9"},{label:"\u9009\u987910",value:"10",class:"red"}],a=n=>{console.log(n)};return s.createElement("div",{className:"demo-select"},s.createElement(t,{defaultValue:"2",placeholder:"\u8BF7\u9009\u62E9",options:l,onChange:a}),s.createElement(t,{defaultValue:"1",placeholder:"\u8BF7\u9009\u62E9",options:l,onChange:a}),s.createElement(t,{placeholder:"\u7981\u7528\u72B6\u6001\u4E0D\u80FD\u9009\u62E9",options:l,disabled:!0,onChange:a}),s.createElement(t,{placeholder:"\u8BBE\u7F6E\u6700\u5927\u4E0B\u62C9\u9AD8\u5EA6",options:l,downHeight:100,onChange:a}))}function h(){const l=[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"},{label:"\u9009\u98793",value:"3"},{label:"\u9009\u98794",value:"4",disabled:!0},{label:"\u9009\u98795",value:"5"},{label:"\u9009\u98796",value:"6"},{label:"\u9009\u98797",value:"7"},{label:"\u9009\u98798",value:"8"},{label:"\u9009\u98799",value:"9"},{label:"\u9009\u987910",value:"10",class:"red"}];return s.createElement("div",null,s.createElement(t,{defaultValue:"2",placeholder:"\u8BF7\u9009\u62E9",options:l,clear:!0}))}function i(){const l=[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"},{label:"\u9009\u98793",value:"3"},{label:"\u9009\u98794",value:"4",disabled:!0},{label:"\u9009\u98795",value:"5"},{label:"\u9009\u98796",value:"6"},{label:"\u9009\u98797",value:"7"},{label:"\u9009\u98798",value:"8"},{label:"\u9009\u98799",value:"9"},{label:"\u9009\u987910",value:"10",class:"red"}],[a,n]=c.exports.useState(l),p=e=>{console.log("searchChange"),setTimeout(()=>{n([{label:"\u641C\u7D22\u7ED3\u679C1",value:"1"}])},1e3)};return s.createElement("div",{className:"demo-select"},s.createElement(t,{defaultValue:"2",placeholder:"\u8BF7\u9009\u62E9",options:a,filterable:!0,async:!0,onInput:p}),s.createElement(t,{multiple:!0,defaultValue:["2"],placeholder:"\u8BF7\u9009\u62E9",options:a,filterable:!0,async:!0,onInput:p}))}function o(){const l=[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"},{label:"\u9009\u98793",value:"3"},{label:"\u9009\u98794",value:"4",disabled:!0},{label:"\u9009\u98795",value:"5"},{label:"\u9009\u98796",value:"6"},{label:"\u9009\u98797",value:"7"},{label:"\u9009\u98798",value:"8"},{label:"\u9009\u98799",value:"9"},{label:"\u9009\u987910",value:"10",class:"red"}],a=()=>{console.log("limitChange")};return s.createElement("div",null,s.createElement(t,{placeholder:"\u8BF7\u9009\u62E9",options:l,multiple:!0,multipleLimit:3,limitChange:a}))}function d(){const l=[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"},{label:"\u9009\u98793",value:"3"},{label:"\u9009\u98794",value:"4",disabled:!0},{label:"\u9009\u98795",value:"5"},{label:"\u9009\u98796",value:"6"},{label:"\u9009\u98797",value:"7"},{label:"\u9009\u98798",value:"8"},{label:"\u9009\u98799",value:"9"},{label:"\u9009\u987910",value:"10",class:"red"}],a=e=>{console.log("\u83B7\u53D6\u7126\u70B9\u4E8B\u4EF6"),console.log(e)},n=e=>{console.log("\u5931\u53BB\u7126\u70B9\u4E8B\u4EF6"),console.log(e)},p=e=>{console.log(e)};return s.createElement("div",{className:"demo-select"},s.createElement(t,{defaultValue:"2",placeholder:"\u8BF7\u9009\u62E9",options:l,filterable:!0,onFocus:a,onBlur:n,onInput:p}),s.createElement(t,{defaultValue:["2","4"],placeholder:"\u8BF7\u9009\u62E9\uFF08\u53EF\u591A\u9009\uFF09",options:l,filterable:!0,multiple:!0,onFocus:a,onBlur:n,onInput:p}))}function j(){const l=[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"},{label:"\u9009\u98793",value:"3"},{label:"\u9009\u98794",value:"4",disabled:!0},{label:"\u9009\u98795",value:"5"},{label:"\u9009\u98796",value:"6"},{label:"\u9009\u98797",value:"7"},{label:"\u9009\u98798",value:"8"},{label:"\u9009\u98799",value:"9"},{label:"\u9009\u987910",value:"10",class:"red"}],a=()=>(console.log("return true\u65F6\u624D\u80FD\u70B9\u51FB\u9009\u62E9"),!1);return s.createElement("div",null,s.createElement(t,{placeholder:"\u8BF7\u9009\u62E9",options:l,beforeChange:a}))}function g(){return s.createElement("div",null,s.createElement(t,{placeholder:"\u8BF7\u9009\u62E9"},s.createElement(u,{value:"11",label:"\u9009\u62E9\u4E00"}),s.createElement(u,{value:"12",label:"\u9009\u62E92"})))}function m(){const l=[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"},{label:"\u9009\u98793",value:"3"},{label:"\u9009\u98794",value:"4",disabled:!0},{label:"\u9009\u98795",value:"5"},{label:"\u9009\u98796",value:"6"},{label:"\u9009\u98797",value:"7"},{label:"\u9009\u98798",value:"8"},{label:"\u9009\u98799",value:"9"},{label:"\u9009\u987910",value:"10",class:"red"}];return s.createElement("div",null,s.createElement(t,{placeholder:"\u8BF7\u9009\u62E9",options:l,direction:2}))}function x(){const l=[{key:"\u9009\u98791",name:"1"},{key:"\u9009\u98792",name:"2"},{key:"\u9009\u98793",name:"3"},{key:"\u9009\u98794",name:"4",disabled:!0},{key:"\u9009\u98795",name:"5"},{key:"\u9009\u98797",name:"7"},{key:"\u9009\u98798",name:"8"},{key:"\u9009\u98799",name:"9"},{key:"\u9009\u987910",name:"10",class:"red"}];return s.createElement("div",null,s.createElement(t,{placeholder:"\u8BF7\u9009\u62E9",options:l,optionsKey:{label:"key",value:"name"}}))}function y(l){return s.createElement("div",{className:"doc-container md-pc docs-demo"},s.createElement("div",{className:"code-container"},s.createElement("div",{className:"md-code"}),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:""}})),s.createElement("div",{className:"demo-container"},s.createElement("div",{className:"md-demo"},s.createElement("h1",{id:"select-\u4E0B\u62C9\u9009\u62E9"},"select \u4E0B\u62C9\u9009\u62E9"),s.createElement("div",{className:"card hide",id:"ADBZPJ"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(r,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Select</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> options = [
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;1&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;2&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98793&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;3&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98794&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;4&#x27;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98795&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;5&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98796&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;6&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98797&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;7&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98798&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;8&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98799&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;9&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u987910&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;10&#x27;</span>, <span class="hljs-attr">class</span>: <span class="hljs-string">&#x27;red&#x27;</span>}
  ]
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">val: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">string</span>[]</span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(val)
  }
  <span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo-select&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Select</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9&quot;</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}/</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Select</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{</span>&#x27;<span class="hljs-attr">1</span>&#x27;} <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9&quot;</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}/</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Select</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u7981\u7528\u72B6\u6001\u4E0D\u80FD\u9009\u62E9&quot;</span>
    <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span>
    <span class="hljs-attr">disabled</span>=<span class="hljs-string">{true}</span>
    <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Select</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BBE\u7F6E\u6700\u5927\u4E0B\u62C9\u9AD8\u5EA6&quot;</span>
    <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span>
    <span class="hljs-attr">downHeight</span>=<span class="hljs-string">{100}</span>
    <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("ADBZPJ");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"9AEEXP"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u53EF\u6E05\u7A7A\u9009\u9879">\u53EF\u6E05\u7A7A\u9009\u9879</h3>
<p><code>clear=true</code></p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(h,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Select</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> options = [
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;1&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;2&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98793&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;3&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98794&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;4&#x27;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98795&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;5&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98796&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;6&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98797&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;7&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98798&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;8&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98799&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;9&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u987910&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;10&#x27;</span>, <span class="hljs-attr">class</span>: <span class="hljs-string">&#x27;red&#x27;</span>}
  ]
  <span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Select</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9&quot;</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span> <span class="hljs-attr">clear</span>=<span class="hljs-string">{true}/</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("9AEEXP");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"CPXZEC"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u5F02\u6B65\u641C\u7D22">\u5F02\u6B65\u641C\u7D22</h3>
<p><code>filterable=true</code> <code>async=&quot;true&quot;</code> <code>onInput=&quot;searchChange&quot;</code></p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(i,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Select</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> {useState} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> list = [
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;1&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;2&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98793&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;3&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98794&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;4&#x27;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98795&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;5&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98796&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;6&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98797&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;7&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98798&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;8&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98799&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;9&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u987910&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;10&#x27;</span>, <span class="hljs-attr">class</span>: <span class="hljs-string">&#x27;red&#x27;</span>}
  ]
  <span class="hljs-keyword">const</span> [options, setOptions] = <span class="hljs-title function_">useState</span>(list)
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">searchChange</span> = (<span class="hljs-params">val: string</span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;searchChange&#x27;</span>)
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-comment">// \u6A21\u62DF\u8BF7\u6C42\u540E\u91CD\u7F6E\u4E0B\u62C9\u6570\u636E</span>
      <span class="hljs-title function_">setOptions</span>([{<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u641C\u7D22\u7ED3\u679C1&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;1&#x27;</span>}])
    }, <span class="hljs-number">1000</span>)
  }
  <span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo-select&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Select</span>
    <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{</span>&#x27;<span class="hljs-attr">2</span>&#x27;}
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9&quot;</span>
    <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span>
    <span class="hljs-attr">filterable</span>=<span class="hljs-string">{true}</span>
    <span class="hljs-attr">async</span>=<span class="hljs-string">{true}</span>
    <span class="hljs-attr">onInput</span>=<span class="hljs-string">{searchChange}</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Select</span>
    <span class="hljs-attr">multiple</span>=<span class="hljs-string">{true}</span>
    <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{[</span>&#x27;<span class="hljs-attr">2</span>&#x27;]}
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9&quot;</span>
    <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span>
    <span class="hljs-attr">filterable</span>=<span class="hljs-string">{true}</span>
    <span class="hljs-attr">async</span>=<span class="hljs-string">{true}</span>
    <span class="hljs-attr">onInput</span>=<span class="hljs-string">{searchChange}</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("CPXZEC");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"AMSEF3"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u53EF\u591A\u9009">\u53EF\u591A\u9009</h3>
<p><code>multiple=true</code>\u3002\u591A\u9009\u65F6<code>defaultValue</code>\u5FC5\u987B\u662F\u6570\u7EC4\uFF0C\u540C\u65F6\u53EF\u8BBE\u7F6E<code>multipleLimit</code>\u6700\u591A\u9009\u62E9\u7684\u4E2A\u6570\u53CA\u63D0\u793A\u4FE1\u606F</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(o,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Select</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> options = [
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;1&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;2&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98793&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;3&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98794&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;4&#x27;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98795&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;5&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98796&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;6&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98797&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;7&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98798&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;8&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98799&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;9&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u987910&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;10&#x27;</span>, <span class="hljs-attr">class</span>: <span class="hljs-string">&#x27;red&#x27;</span>}
  ]
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">limitChange</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;limitChange&#x27;</span>)
  }
  <span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Select</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9&quot;</span>
    <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span>
    <span class="hljs-attr">multiple</span>=<span class="hljs-string">{true}</span>
    <span class="hljs-attr">multipleLimit</span>=<span class="hljs-string">{3}</span>
    <span class="hljs-attr">limitChange</span>=<span class="hljs-string">{limitChange}</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("AMSEF3");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"CG4255"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u53EF\u641C\u7D22">\u53EF\u641C\u7D22</h3>
<p><code>filterable=true</code></p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(d,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Select</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> options = [
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;1&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;2&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98793&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;3&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98794&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;4&#x27;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98795&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;5&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98796&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;6&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98797&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;7&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98798&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;8&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98799&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;9&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u987910&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;10&#x27;</span>, <span class="hljs-attr">class</span>: <span class="hljs-string">&#x27;red&#x27;</span>}
  ]
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onFocus</span> = (<span class="hljs-params">val: <span class="hljs-built_in">string</span></span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;\u83B7\u53D6\u7126\u70B9\u4E8B\u4EF6&#x27;</span>)
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(val)
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onBlur</span> = (<span class="hljs-params">val: <span class="hljs-built_in">string</span></span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;\u5931\u53BB\u7126\u70B9\u4E8B\u4EF6&#x27;</span>)
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(val)
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onInput</span> = (<span class="hljs-params">val: <span class="hljs-built_in">string</span></span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(val)
  }
  <span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo-select&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Select</span>
    <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;2&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9&quot;</span>
    <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span>
    <span class="hljs-attr">filterable</span>=<span class="hljs-string">{true}</span>
    <span class="hljs-attr">onFocus</span>=<span class="hljs-string">{onFocus}</span>
    <span class="hljs-attr">onBlur</span>=<span class="hljs-string">{onBlur}</span>
    <span class="hljs-attr">onInput</span>=<span class="hljs-string">{onInput}/</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Select</span>
    <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{[</span>&#x27;<span class="hljs-attr">2</span>&#x27;, &#x27;<span class="hljs-attr">4</span>&#x27;]}
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\uFF08\u53EF\u591A\u9009\uFF09&quot;</span>
    <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span>
    <span class="hljs-attr">filterable</span>=<span class="hljs-string">{true}</span>
    <span class="hljs-attr">multiple</span>=<span class="hljs-string">{true}</span>
    <span class="hljs-attr">onFocus</span>=<span class="hljs-string">{onFocus}</span>
    <span class="hljs-attr">onBlur</span>=<span class="hljs-string">{onBlur}</span>
    <span class="hljs-attr">onInput</span>=<span class="hljs-string">{onInput}/</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("CG4255");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"FNVTDN"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u6539\u53D8\u524D\u62C9\u622A\u4E8B\u4EF6">\u6539\u53D8\u524D\u62C9\u622A\u4E8B\u4EF6</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(j,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Select</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> {useState} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> options = [
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;1&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;2&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98793&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;3&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98794&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;4&#x27;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98795&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;5&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98796&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;6&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98797&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;7&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98798&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;8&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98799&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;9&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u987910&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;10&#x27;</span>, <span class="hljs-attr">class</span>: <span class="hljs-string">&#x27;red&#x27;</span>}
  ]
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">beforeChange</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;return true\u65F6\u624D\u80FD\u70B9\u51FB\u9009\u62E9&#x27;</span>)
    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
  }
  <span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Select</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9&quot;</span>
    <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span>
    <span class="hljs-attr">beforeChange</span>=<span class="hljs-string">{beforeChange}</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("FNVTDN");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"BKHKUT"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u4F7F\u7528option\u7EC4\u4EF6\uFF0C\u53C2\u6570\u548Cselect\u7684option\u4E00\u81F4">\u4F7F\u7528<code>Option</code>\u7EC4\u4EF6\uFF0C\u53C2\u6570\u548C<code>select</code>\u7684<code>option</code>\u4E00\u81F4</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(g,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Select</span>, <span class="hljs-title class_">Option</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Select</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;11&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u9009\u62E9\u4E00&quot;</span>/&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;12&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u9009\u62E92&quot;</span>/&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Select</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("BKHKUT");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"F37JCM"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u5411\u4E0A\u5F39\u51FA\u9009\u9879\u9762\u677F">\u5411\u4E0A\u5F39\u51FA\u9009\u9879\u9762\u677F</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(m,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Select</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> {useState} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> options = [
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;1&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;2&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98793&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;3&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98794&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;4&#x27;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98795&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;5&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98796&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;6&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98797&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;7&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98798&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;8&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98799&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;9&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u987910&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;10&#x27;</span>, <span class="hljs-attr">class</span>: <span class="hljs-string">&#x27;red&#x27;</span>}
  ]
  <span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Select</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9&quot;</span>
    <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span>
    <span class="hljs-attr">direction</span>=<span class="hljs-string">{2}</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("F37JCM");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"7ZCHTV"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u9009\u62E9\u6570\u636E\u6307\u5B9A\u7684label\u548Cvalue">\u9009\u62E9\u6570\u636E\u6307\u5B9A\u7684label\u548Cvalue</h3>
<p>\u4F7F\u7528<code>optionsKey</code>\u6307\u5B9A\u53D6\u503C\u7684key\u7684\u503C</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(x,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {Select} from <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> Example() {
  const options = [
    <span class="hljs-built_in">{key</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>,<span class="hljs-built_in"> name</span>: <span class="hljs-string">&#x27;1&#x27;</span>},
    <span class="hljs-built_in">{key</span>: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>,<span class="hljs-built_in"> name</span>: <span class="hljs-string">&#x27;2&#x27;</span>},
    <span class="hljs-built_in">{key</span>: <span class="hljs-string">&#x27;\u9009\u98793&#x27;</span>,<span class="hljs-built_in"> name</span>: <span class="hljs-string">&#x27;3&#x27;</span>},
    <span class="hljs-built_in">{key</span>: <span class="hljs-string">&#x27;\u9009\u98794&#x27;</span>,<span class="hljs-built_in"> name</span>: <span class="hljs-string">&#x27;4&#x27;</span>, disabled:<span class="hljs-built_in"> true</span>},
    <span class="hljs-built_in">{key</span>: <span class="hljs-string">&#x27;\u9009\u98795&#x27;</span>,<span class="hljs-built_in"> name</span>: <span class="hljs-string">&#x27;5&#x27;</span>},
    <span class="hljs-built_in">{key</span>: <span class="hljs-string">&#x27;\u9009\u98797&#x27;</span>,<span class="hljs-built_in"> name</span>: <span class="hljs-string">&#x27;7&#x27;</span>},
    <span class="hljs-built_in">{key</span>: <span class="hljs-string">&#x27;\u9009\u98798&#x27;</span>,<span class="hljs-built_in"> name</span>: <span class="hljs-string">&#x27;8&#x27;</span>},
    <span class="hljs-built_in">{key</span>: <span class="hljs-string">&#x27;\u9009\u98799&#x27;</span>,<span class="hljs-built_in"> name</span>: <span class="hljs-string">&#x27;9&#x27;</span>},
    <span class="hljs-built_in">{key</span>: <span class="hljs-string">&#x27;\u9009\u987910&#x27;</span>,<span class="hljs-built_in"> name</span>: <span class="hljs-string">&#x27;10&#x27;</span>, class: <span class="hljs-string">&#x27;red&#x27;</span>}
  ]
  <span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Select</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9&quot;</span>
    <span class="hljs-attr">options</span>=</span></span><span class="language-xquery">{options}</span><span class="language-xml"><span class="hljs-tag">
    <span class="hljs-attr">optionsKey</span>=</span></span><span class="language-xquery">{{label: <span class="hljs-string">&#x27;key&#x27;</span>, value: <span class="hljs-string">&#x27;name&#x27;</span>}</span><span class="language-xml"><span class="hljs-tag">}
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

export <span class="hljs-keyword">default</span> Example
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("7ZCHTV");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}})))),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:`<h2 id="api">API</h2>
<div class="card"><h3 id="select">Select</h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>defaultValue</td>
<td>array</td>
<td>\u521D\u59CB\u9ED8\u8BA4\u663E\u793A\u7684\u503C</td>
</tr>
<tr>
<td>width</td>
<td>string</td>
<td>\u7EC4\u4EF6\u5BBD</td>
</tr>
<tr>
<td>multiple</td>
<td>boolean/false</td>
<td>\u591A\u9009\u6A21\u5F0F</td>
</tr>
<tr>
<td>collapseTags</td>
<td>boolean/false</td>
<td>\u591A\u9009\u6A21\u5F0F\u4E0B\u662F\u5426\u6298\u53E0Tag</td>
</tr>
<tr>
<td>clear</td>
<td>boolean/false</td>
<td>\u662F\u5426\u53EF\u6E05\u7A7A</td>
</tr>
<tr>
<td>filterable</td>
<td>boolean/false</td>
<td>\u662F\u5426\u53EF\u641C\u7D22\u9009\u9879</td>
</tr>
<tr>
<td>size</td>
<td>string</td>
<td>\u5927\u5C0F</td>
</tr>
<tr>
<td>placeholder</td>
<td>string</td>
<td>\u5360\u4F4D\u7B26</td>
</tr>
<tr>
<td>disabled</td>
<td>boolean/false</td>
<td>\u7981\u7528\u72B6\u6001</td>
</tr>
<tr>
<td>direction</td>
<td>number</td>
<td>\u4E0B\u62C9\u7684\u65B9\u5411\u52A8\u753B\uFF0C0\u81EA\u52A8(\u9ED8\u8BA4)\u30001\u5411\u4E0B\u30002\u5411\u4E0A</td>
</tr>
<tr>
<td>downClass</td>
<td>string</td>
<td>\u4E0B\u62C9\u9762\u677F\u7C7B</td>
</tr>
<tr>
<td>downStyle</td>
<td>object</td>
<td>\u4E0B\u62C9\u9762\u677F\u6837\u5F0F</td>
</tr>
<tr>
<td>appendToBody</td>
<td>boolean/false</td>
<td>\u4E0B\u62C9\u63D2\u5165\u5230body</td>
</tr>
<tr>
<td>downHeight</td>
<td>number</td>
<td>\u4E0B\u62C9\u7684\u9762\u677F\u7684\u9AD8</td>
</tr>
<tr>
<td>icon</td>
<td>string</td>
<td>icon\u56FE\u6807</td>
</tr>
<tr>
<td>fixedIcon</td>
<td>boolean/false</td>
<td>\u56FA\u5B9Aicon\u56FE\u6807\uFF0C\u5373\u70B9\u51FB\u65F6\u4E0D\u65CB\u8F6C</td>
</tr>
<tr>
<td>isRange</td>
<td>boolean/false</td>
<td>\u663E\u793A\u533A\u95F4\uFF0C\u6B64\u65F6<code>multiple</code>\u65E0\u6548</td>
</tr>
<tr>
<td>rangeSeparator</td>
<td>string</td>
<td>\u533A\u95F4\u5206\u9694\u7B26\uFF0C\u9ED8\u8BA4<code>To</code></td>
</tr>
<tr>
<td>endPlaceholder</td>
<td>string</td>
<td>isRange\u4E3Atrue\u65F6\u7684\uFF0C\u7ED3\u675F\u8F93\u5165\u6846\u70B9\u4F4D\u7B26</td>
</tr>
<tr>
<td>onInput</td>
<td>function(val,value,evt)</td>
<td>\u53EF\u8F93\u5165\u65F6\u8F93\u5165\u6846\u6539\u53D8\u4E8B\u4EF6</td>
</tr>
<tr>
<td>onBlur</td>
<td>function(val,value,evt)</td>
<td>\u53EF\u8F93\u5165\u65F6\u8F93\u5165\u6846\u7126\u70B9\u4E8B\u4EF6</td>
</tr>
<tr>
<td>onFocus</td>
<td>function(val,value,evt)</td>
<td>\u53EF\u8F93\u5165\u65F6\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u4E8B\u4EF6</td>
</tr>
<tr>
<td>toggleClick</td>
<td>function(evt)</td>
<td>\u70B9\u51FB\u5C55\u5F00\u6536\u8D77\u4E8B\u4EF6</td>
</tr>
<tr>
<td>onClear</td>
<td>function()</td>
<td>\u6E05\u7A7A\u4E8B\u4EF6</td>
</tr>
<tr>
<td>onDelete</td>
<td>function(val)</td>
<td>\u5220\u9664\u5355\u4E2A\u9009\u9879,\u591A\u9009\u65F6\u6709\u6548</td>
</tr>
<tr>
<td>multipleLimit</td>
<td>number/0</td>
<td>\u591A\u9009\u65F6\u7528\u6237\u6700\u591A\u53EF\u4EE5\u9009\u62E9\u7684\u9879\u76EE\u6570\uFF0C\u4E3A 0 \u5219\u4E0D\u9650\u5236</td>
</tr>
<tr>
<td>async</td>
<td>boolean/false</td>
<td>\u5F02\u6B65\u641C\u7D22\uFF0C<code>filterable=true</code>\u65F6\u6709\u6548</td>
</tr>
<tr>
<td>options</td>
<td>array</td>
<td>\u4E0B\u62C9\u9009\u9879\u6570\u636E</td>
</tr>
<tr>
<td>optionsKey</td>
<td>object</td>
<td>\u6307\u5B9A\u9009\u62E9\u6570\u636E\u7684label\u548Cvalue\u5C5E\u6027\uFF0C\u9ED8\u8BA4{label:&#39;label&#39;,value:&#39;value&#39;}</td>
</tr>
<tr>
<td>beforeChange</td>
<td>Function</td>
<td>\u9009\u9879\u6539\u53D8\u524D\u4E8B\u4EF6,<code>return false</code>\u963B\u6B62\u9009\u62E9</td>
</tr>
<tr>
<td>emptyText</td>
<td>string</td>
<td>\u6CA1\u6709\u4E0B\u62C9\u9009\u9879\u6570\u636E\u8FDB</td>
</tr>
<tr>
<td>onChange</td>
<td>function(val,evt)</td>
<td>\u9009\u9879\u6539\u53D8\u4E8B\u4EF6</td>
</tr>
<tr>
<td>limitChange</td>
<td>function()</td>
<td>\u8D85\u51FA\u6700\u5927\u9009\u62E9\u6570\u65F6\u4E8B\u4EF6\uFF0C\u4EC5<code>multiple=true</code>\u548C\u8BBE\u5B9A\u4E86<code>multipleLimit</code>\u65F6\u6709\u6548</td>
</tr>
</tbody></table>
</div><div class="card"><h3 id="options-attributes">Options Attributes</h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>value</td>
<td>string</td>
<td>\u9009\u9879\u7684\u503C</td>
</tr>
<tr>
<td>label</td>
<td>string</td>
<td>\u9009\u9879\u7684\u6807\u7B7E\uFF0C\u82E5\u4E0D\u8BBE\u7F6E\u5219\u9ED8\u8BA4\u4E0E value \u76F8\u540C</td>
</tr>
<tr>
<td>disabled</td>
<td>boolean/false</td>
<td>\u662F\u5426\u7981\u7528\u8BE5\u9009\u9879</td>
</tr>
<tr>
<td>class</td>
<td>string</td>
<td>\u5BF9\u5F53\u524D\u9879\u6DFB\u52A0\u6837\u5F0F</td>
</tr>
</tbody></table>
</div><div class="card"><h3 id="select-method">Select Method</h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
</tr>
</thead>
<tbody><tr>
<td>getValue</td>
<td>\u83B7\u53D6\u5F53\u524D\u503C</td>
</tr>
<tr>
<td>clearValue</td>
<td>\u53EF\u8F93\u5165\u72B6\u6001\u7528\u4E8E\u6E05\u7A7A\u8F93\u5165\u6846\u7684\u503C</td>
</tr>
</tbody></table>
</div>`}})))}export{y as default};
