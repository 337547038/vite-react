import{R as s,r as h}from"./index.b63450ce.js";import{B as t}from"./Button.d26770ce.js";import{C as e,a as p}from"./Group.66638fb1.js";import"./contextForm.5487fa67.js";import"./index.4eedf3c9.js";function o(){const l=a=>{console.log(a)};return s.createElement("div",null,s.createElement(e,{checked:!0,onChange:l},"\u9009\u98791"),s.createElement(e,{checked:!1,onChange:l},"\u9009\u98792"),s.createElement(e,{checked:!0,value:"3",onChange:l},"\u9009\u98793"),s.createElement(e,{checked:!1,value:"4",onChange:l},"\u9009\u98794"))}function d(){return s.createElement("div",null,s.createElement(e,{checked:!0,disabled:!0},"\u9009\u98791"),s.createElement(e,{checked:!1,disabled:!0},"\u9009\u98792"))}function j(){const l=[{label:"\u9009\u98791",value:"a1"},{label:"\u9009\u98792",value:"a2"},{label:"\u9009\u98793",value:"a3"},{value:"a4"},{label:"\u7981\u7528",value:"a5",disabled:!0},{label:"\u52FE\u9009\u7981\u7528",value:"a6",disabled:!0}],a=n=>{console.log(n)};return s.createElement("div",null,s.createElement(p,{defaultValue:[],options:l,onChange:a}),s.createElement(p,{defaultValue:["a1","a6"],options:l,onChange:a}))}function i(){const l=[{label:"\u9009\u98791",value:"a1"},{label:"\u9009\u98792",value:"a2"},{label:"\u9009\u98793",value:"a3"},{value:"a4"},{label:"\u7981\u7528",value:"a5",disabled:!0},{label:"\u52FE\u9009\u7981\u7528",value:"a6",disabled:!0}];return s.createElement("div",null,s.createElement(p,{defaultValue:["a6"],options:l,min:2,max:4}))}function m(){const l=[{label:"\u9009\u98791",value:"a1"},{label:"\u9009\u98792",value:"a2"},{label:"\u9009\u98793",value:"a3"},{value:"a4"},{label:"\u7981\u7528",value:"a5",disabled:!0},{label:"\u52FE\u9009\u7981\u7528",value:"a6",disabled:!0}],a=h.exports.useRef(null),n=c=>{var r;(r=a.current)==null||r.toggleSelect(c)},u=()=>{var c;console.log((c=a.current)==null?void 0:c.getValue())};return s.createElement("div",null,s.createElement(p,{defaultValue:["a6"],options:l,ref:a}),s.createElement("p",null,s.createElement(t,{onClick:()=>n(!0)},"\u5168\u9009"),s.createElement(t,{onClick:()=>n(!1)},"\u5168\u4E0D\u9009"),s.createElement(t,{onClick:u},"\u83B7\u53D6\u503C")))}function g(){const[l,a]=h.exports.useState(["1","3"]),n=()=>{a(["1","2","3","4","5"])},u=()=>{a([])};return s.createElement("div",null,s.createElement(e,{value:"1",checked:l},"\u9009\u98791"),s.createElement(e,{value:"2",checked:l},"\u9009\u98792"),s.createElement(e,{value:"3",checked:l},"\u9009\u98793"),s.createElement(e,{value:"4",checked:l},"\u9009\u98794"),s.createElement(e,{value:"5",checked:l},"\u9009\u98795"),s.createElement("p",null,s.createElement(t,{onClick:n},"\u5168\u9009"),s.createElement(t,{onClick:u},"\u5168\u4E0D\u9009")))}function x(){const l=[{label:"\u9009\u98791",value:"a1"},{label:"\u9009\u98792",value:"a2"},{label:"\u9009\u98793",value:"a3"},{value:"a4"},{label:"\u7981\u7528",value:"a5",disabled:!0},{label:"\u52FE\u9009\u7981\u7528",value:"a6",disabled:!0}],a=()=>(console.log("return false \u963B\u6B62\u52FE\u9009"),!1);return s.createElement("div",null,s.createElement(e,{value:"1",beforeChange:a},"\u9009\u98791"),s.createElement(p,{options:l,beforeChange:a}))}function f(l){return s.createElement("div",{className:"doc-container md-pc docs-demo"},s.createElement("div",{className:"code-container"},s.createElement("div",{className:"md-code"}),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:""}})),s.createElement("div",{className:"demo-container"},s.createElement("div",{className:"md-demo"},s.createElement("h1",{id:"checkbox-\u591A\u9009\u6846"},"Checkbox \u591A\u9009\u6846"),s.createElement("div",{className:"card hide",id:"FTPFOP"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>
<p>\u5355\u4E00\u7684<code>checkbox</code>\u4E2D\uFF0C\u9ED8\u8BA4\u7ED1\u5B9A\u53D8\u91CF\u7684\u503C\u4F1A\u662F<code>Boolean</code>\uFF0C\u9009\u4E2D\u4E3A<code>true</code>\u3002\u5982\u9009\u4E2D\u65F6\u9700\u8981\u8FD4\u56DE\u6307\u5B9A\u7684\u503C\uFF0C\u5219\u6DFB\u52A0<code>value</code></p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(o,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Checkbox</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">val: <span class="hljs-built_in">boolean</span> | <span class="hljs-built_in">string</span></span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(val)
  }
  <span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{false}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{</span>&#x27;<span class="hljs-attr">3</span>&#x27;} <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span>&gt;</span>\u9009\u98793<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{false}</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{</span>&quot;<span class="hljs-attr">4</span>&quot;} <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span>&gt;</span>\u9009\u98794<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("FTPFOP");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"AW5N42"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u7981\u7528\u72B6\u6001">\u7981\u7528\u72B6\u6001</h3>
<p>\u591A\u9009\u6846\u4E0D\u53EF\u7528\u72B6\u6001</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(d,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Checkbox</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">disabled</span>=<span class="hljs-string">{true}</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{false}</span> <span class="hljs-attr">disabled</span>=<span class="hljs-string">{true}</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("AW5N42");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"83NDFT"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u591A\u9009\u6846\u7EC4">\u591A\u9009\u6846\u7EC4</h3>
<p>options\u4E2D\u9009\u9879label\u53EF\u4E3A\u7A7A</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(j,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">CheckboxGroup</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> groupData = [
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a1&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a2&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98793&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a3&#x27;</span>},
    {<span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a4&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u7981\u7528&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a5&#x27;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u52FE\u9009\u7981\u7528&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a6&#x27;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>}
  ]
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">value: string[]</span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(value)
  }
  <span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">CheckboxGroup</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{[]}</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{groupData}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}/</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">CheckboxGroup</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{[</span>&#x27;<span class="hljs-attr">a1</span>&#x27;, &#x27;<span class="hljs-attr">a6</span>&#x27;]} <span class="hljs-attr">options</span>=<span class="hljs-string">{groupData}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}/</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("83NDFT");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"FXULFB"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u53EF\u9009\u9879\u76EE\u6570\u91CF\u7684\u9650\u5236">\u53EF\u9009\u9879\u76EE\u6570\u91CF\u7684\u9650\u5236</h3>
<p>\u4F8B\u5B50\u6700\u591A\u53EF\u9009<code>max=4</code>\uFF0C\u6700\u5C11\u9700\u9009<code>min=2</code></p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(i,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">CheckboxGroup</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> groupData = [
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a1&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a2&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98793&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a3&#x27;</span>},
    {<span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a4&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u7981\u7528&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a5&#x27;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u52FE\u9009\u7981\u7528&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a6&#x27;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>}
  ]
  <span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">CheckboxGroup</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{[</span>&#x27;<span class="hljs-attr">a6</span>&#x27;]} <span class="hljs-attr">options</span>=<span class="hljs-string">{groupData}</span> <span class="hljs-attr">min</span>=<span class="hljs-string">{2}</span> <span class="hljs-attr">max</span>=<span class="hljs-string">{4}/</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("FXULFB");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"91VRSQ"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u7EC4\u5168\u9009\u6216\u5168\u4E0D\u9009\u65B9\u6CD5">\u7EC4\u5168\u9009\u6216\u5168\u4E0D\u9009\u65B9\u6CD5</h3>
<p><code>toggleSelect(true/false)\u5168\u9009\u6216\u53D6\u6D88\u5168\u9009</code>\uFF0C\u53EF\u4F7F\u7528 <code>getValue</code> \u53D6\u65B9\u6CD5\u53D6\u5F97\u5DF2\u52FE\u9009\u7684\u9879\u96C6\u5408</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(m,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {useRef} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">CheckboxGroup</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {<span class="hljs-title class_">CheckboxGroupRef</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Button</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../button&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> groupData = [
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a1&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a2&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98793&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a3&#x27;</span>},
    {<span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a4&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u7981\u7528&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a5&#x27;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u52FE\u9009\u7981\u7528&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a6&#x27;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>}
  ]
  <span class="hljs-keyword">const</span> refEl = useRef &lt; <span class="hljs-title class_">CheckboxGroupRef</span> &gt; (<span class="hljs-literal">null</span>);
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">toggleSelect</span> = (<span class="hljs-params">val: <span class="hljs-built_in">boolean</span></span>) =&gt; {
    refEl.<span class="hljs-property">current</span>?.<span class="hljs-title function_">toggleSelect</span>(val)
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">getValue</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(refEl.<span class="hljs-property">current</span>?.<span class="hljs-title function_">getValue</span>())
  }
  <span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">CheckboxGroup</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{[</span>&#x27;<span class="hljs-attr">a6</span>&#x27;]} <span class="hljs-attr">options</span>=<span class="hljs-string">{groupData}</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{refEl}/</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> toggleSelect(true)}&gt;\u5168\u9009<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> toggleSelect(false)}&gt;\u5168\u4E0D\u9009<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{getValue}</span>&gt;</span>\u83B7\u53D6\u503C<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("91VRSQ");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"MHN67"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u591A\u4E2A\u5355\u4E00\u7EC4\u6210\u7684\u7EC4">\u591A\u4E2A\u5355\u4E00\u7EC4\u6210\u7684\u7EC4</h3>
<p>\u7EC4group\u6709\u4E00\u5B9A\u7684\u5C40\u9650\u6027\uFF0C\u7EC4\u5185\u7684<code>checkbox</code>\u662F\u7D27\u5BC6\u76F8\u8FDE\u7684\u3002\u7531\u591A\u4E2A\u5355\u4E00<code>checkbox</code>\u81EA\u7531\u7EC4\u6210\u53EF\u5B9E\u73B0\u7075\u6D3B\u5E03\u5C40\u3002\u540C\u65F6\u4E5F\u5F88\u65B9\u4FBF\u7684\u5B9E\u73B0\u5168\u9009\u6216\u5168\u4E0D\u9009</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(g,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {useState} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Checkbox</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Button</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../button&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [checkedList, setCheckedList] = <span class="hljs-title function_">useState</span>([<span class="hljs-string">&#x27;1&#x27;</span>, <span class="hljs-string">&#x27;3&#x27;</span>])
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">checkboxAll</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-title function_">setCheckedList</span>([<span class="hljs-string">&#x27;1&#x27;</span>, <span class="hljs-string">&#x27;2&#x27;</span>, <span class="hljs-string">&#x27;3&#x27;</span>, <span class="hljs-string">&#x27;4&#x27;</span>, <span class="hljs-string">&#x27;5&#x27;</span>])
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">checkedboxNone</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-title function_">setCheckedList</span>([])
  }
  <span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{</span>&#x27;<span class="hljs-attr">1</span>&#x27;} <span class="hljs-attr">checked</span>=<span class="hljs-string">{checkedList}</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{</span>&#x27;<span class="hljs-attr">2</span>&#x27;} <span class="hljs-attr">checked</span>=<span class="hljs-string">{checkedList}</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{</span>&#x27;<span class="hljs-attr">3</span>&#x27;} <span class="hljs-attr">checked</span>=<span class="hljs-string">{checkedList}</span>&gt;</span>\u9009\u98793<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{</span>&#x27;<span class="hljs-attr">4</span>&#x27;} <span class="hljs-attr">checked</span>=<span class="hljs-string">{checkedList}</span>&gt;</span>\u9009\u98794<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{</span>&#x27;<span class="hljs-attr">5</span>&#x27;} <span class="hljs-attr">checked</span>=<span class="hljs-string">{checkedList}</span>&gt;</span>\u9009\u98795<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{checkboxAll}</span>&gt;</span>\u5168\u9009<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{checkedboxNone}</span>&gt;</span>\u5168\u4E0D\u9009<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("MHN67");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"MJQSH"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u963B\u6B62\u6539\u53D8\u4E8B\u4EF6">\u963B\u6B62\u6539\u53D8\u4E8B\u4EF6</h3>
<p>\u4F7F\u7528<code>beforeChange</code>\u53EF\u963B\u6B62\u4E8B\u4EF6\u6539\u53D8</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(x,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Checkbox</span>, <span class="hljs-title class_">CheckboxGroup</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> groupData = [
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a1&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a2&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98793&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a3&#x27;</span>},
    {<span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a4&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u7981\u7528&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a5&#x27;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u52FE\u9009\u7981\u7528&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a6&#x27;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>}
  ]
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">beforeChange</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;return false \u963B\u6B62\u52FE\u9009&#x27;</span>)
    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
  }
  <span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{</span>&#x27;<span class="hljs-attr">1</span>&#x27;} <span class="hljs-attr">beforeChange</span>=<span class="hljs-string">{beforeChange}</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">CheckboxGroup</span>
    <span class="hljs-attr">options</span>=<span class="hljs-string">{groupData}</span>
    <span class="hljs-attr">beforeChange</span>=<span class="hljs-string">{beforeChange}</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("MJQSH");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}})))),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:`<h2 id="api">API</h2>
<div class="card"><h3 id="checkbox">Checkbox</h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>checked</td>
<td>Boolean/Array</td>
<td>\u521D\u59CB\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001</td>
</tr>
<tr>
<td>value</td>
<td>String</td>
<td>\u9009\u4E2D\u72B6\u6001\u8FD4\u56DE\u7684\u503C</td>
</tr>
<tr>
<td>label</td>
<td>String</td>
<td>\u663E\u793A\u7684\u6587\u672C\u503C\uFF0C\u4E5F\u53EF\u4EE5\u662Fchildren</td>
</tr>
<tr>
<td>disabled</td>
<td>Boolean/false</td>
<td>\u7981\u7528</td>
</tr>
<tr>
<td>beforeChange</td>
<td>Function</td>
<td>\u70B9\u51FB\u6539\u53D8\u524D\u7684\u4E8B\u4EF6\uFF0C\u8FD4\u56DEfalse\u963B\u6B62\u4E8B\u4EF6</td>
</tr>
<tr>
<td>onChange</td>
<td>Function</td>
<td>\u6539\u53D8\u4E8B\u4EF6</td>
</tr>
</tbody></table>
</div><div class="card"><h3 id="checkboxgroup">CheckboxGroup</h3>
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
<td>Array</td>
<td>\u521D\u59CB\u9ED8\u8BA4\u9009\u4E2D\u503C</td>
</tr>
<tr>
<td>options</td>
<td>Array</td>
<td>\u9009\u9879\u6570\u636E</td>
</tr>
<tr>
<td>optionsKey</td>
<td>object</td>
<td>\u6307\u5B9A\u9009\u62E9\u6570\u636E\u7684label\u548Cvalue\u5C5E\u4E8E\uFF0C\u9ED8\u8BA4{label:&#39;label&#39;,value:&#39;value&#39;}</td>
</tr>
<tr>
<td>max</td>
<td>number</td>
<td>\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5927\u6570\u91CF</td>
</tr>
<tr>
<td>min</td>
<td>number</td>
<td>\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5C0F\u6570\u91CF</td>
</tr>
<tr>
<td>disabled</td>
<td>Boolean/false</td>
<td>\u7981\u7528\u7EC4</td>
</tr>
<tr>
<td>beforeChange</td>
<td>Function</td>
<td>\u70B9\u51FB\u6539\u53D8\u524D\u7684\u4E8B\u4EF6\uFF0C\u8FD4\u56DEfalse\u963B\u6B62\u4E8B\u4EF6</td>
</tr>
<tr>
<td>onChange</td>
<td>Function</td>
<td>\u6539\u53D8\u4E8B\u4EF6</td>
</tr>
</tbody></table>
</div><div class="card"><h3 id="checkboxgroup-methods">CheckboxGroup Methods</h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
</tr>
</thead>
<tbody><tr>
<td>toggleSelect</td>
<td>\u5168\u9009true/\u53D6\u6D88false\u5F53\u524D\u7EC4\u6240\u6709\u9009\u9879</td>
</tr>
<tr>
<td>getValue</td>
<td>\u83B7\u53D6\u5F53\u524D\u6240\u6709\u52FE\u9009\u9879\u7684\u96C6\u5408</td>
</tr>
</tbody></table>
</div>`}})))}export{f as default};
