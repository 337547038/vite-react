import{R as s,r as c}from"./index.47748ac2.js";import{I as l}from"./Input.ab0ffaa3.js";import{B as u}from"./Button.9f8122bb.js";import"./index.926ca9c5.js";import"./contextForm.e60719b8.js";function i(){return s.createElement("div",{className:"demo-input"},s.createElement("div",null,s.createElement(l,null)),s.createElement("div",null,s.createElement(l,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"})),s.createElement("div",null,s.createElement(l,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",defaultValue:"defaultValue"})),s.createElement("span",null,s.createElement(l,{placeholder:"\u7981\u7528\u72B6\u6001",disabled:!0})))}function m(){return s.createElement("div",null,s.createElement(l,{placeholder:"\u8BD5\u7740\u8F93\u5165\u4E9B\u4EC0\u4E48\u770B\u770B",defaultValue:"valueClear",clear:!0}))}function j(){return s.createElement("div",null,s.createElement(l,{placeholder:"\u8BD5\u7740\u8F93\u5165\u4E9B\u4EC0\u4E48\u770B\u770B",defaultValue:"valueClear",showEye:!0,type:"password"}))}function g(){return s.createElement("div",{className:"demo-input"},s.createElement("div",null,s.createElement(l,{placeholder:"\u8BD5\u7740\u8F93\u5165\u4E9B\u4EC0\u4E48\u770B\u770B",prefixIcon:"icon-user"})),s.createElement("div",null,s.createElement(l,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",suffixIcon:"icon-search"})))}function E(){const t=s.createElement(u,{type:"text"},"\u9A8C\u8BC1\u7801");return s.createElement("div",{className:"demo-input"},s.createElement("div",null,s.createElement(l,{placeholder:"\u8BD5\u7740\u8F93\u5165\u4E9B\u4EC0\u4E48\u770B\u770B",append:".com"})),s.createElement("div",null,s.createElement(l,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",prepend:"http://"})),s.createElement("div",null,s.createElement(l,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",append:t})))}function B(){return s.createElement("div",{className:"demo-input"},s.createElement("div",null,s.createElement(l,{placeholder:"\u9ED8\u8BA4\u5C3A\u5BF8",size:"large"})),s.createElement("div",null,s.createElement(l,{placeholder:"\u9ED8\u8BA4\u5C3A\u5BF8"})),s.createElement("div",null,s.createElement(l,{placeholder:"sixe=small",size:"small"})),s.createElement("div",null,s.createElement(l,{placeholder:"sixe=mini",size:"mini"})))}function v(){const[t,a]=c.exports.useState(""),n=c.exports.useRef(null),r=(e,p)=>{console.log(e),console.log(p),a(e)},o=e=>{console.log(e)},d=e=>{console.log(e)},h=()=>{var e,p;(e=n.current)==null||e.focus(),console.log("\u5F53\u524D\u503C\uFF1A"+((p=n.current)==null?void 0:p.getValue()))};return s.createElement("div",{className:"demo-input"},s.createElement("div",null,"\u5F53\u524D\u8F93\u5165\u6846\u7684\u503C:",t,s.createElement("br",null),s.createElement(l,{placeholder:"onChange event",defaultValue:t,onChange:r})),s.createElement("div",null,s.createElement(l,{placeholder:"onFocus",onFocus:o})),s.createElement("div",null,s.createElement(l,{placeholder:"onBlur",onBlur:d})),s.createElement("div",null,s.createElement(l,{placeholder:"\u83B7\u53D6\u503C/\u7126\u70B9\u4E8B\u4EF6",ref:n}),s.createElement(u,{type:"primary",onClick:h},"\u83B7\u53D6\u7126\u70B9")))}function x(t){return s.createElement("div",{className:"doc-container md-pc docs-demo"},s.createElement("div",{className:"code-container"},s.createElement("div",{className:"md-code"}),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:""}})),s.createElement("div",{className:"demo-container"},s.createElement("div",{className:"md-demo"},s.createElement("h1",{id:"input-\u8F93\u5165\u6846"},"Input \u8F93\u5165\u6846"),s.createElement("div",{className:"card hide",id:"D97BVG"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(i,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Input</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../input&#x27;</span>;

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo-input&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">Input</span>/&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5185\u5BB9&quot;</span>/&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5185\u5BB9&quot;</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{</span>&#x27;<span class="hljs-attr">defaultValue</span>&#x27;}/&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u7981\u7528\u72B6\u6001&quot;</span> <span class="hljs-attr">disabled</span>=<span class="hljs-string">{true}/</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("D97BVG");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"8VWBWV"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u663E\u793A\u6E05\u7A7A\u6309\u94AE">\u663E\u793A\u6E05\u7A7A\u6309\u94AE</h3>
<p>\u8BBE\u7F6E<code>clear=&quot;true&quot;</code>\uFF0C\u5728\u8F93\u5165\u6846\u4E0D\u4E3A\u7A7A\u65F6\u663E\u793A\u6E05\u7A7A\u6309\u94AE</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(m,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Input</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../input&#x27;</span>;

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Input</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BD5\u7740\u8F93\u5165\u4E9B\u4EC0\u4E48\u770B\u770B&quot;</span>
    <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;valueClear&quot;</span>
    <span class="hljs-attr">clear</span>=<span class="hljs-string">{true}</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("8VWBWV");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"FSKN4P"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u53EF\u663E\u793A\u5BC6\u7801\u660E\u6587">\u53EF\u663E\u793A\u5BC6\u7801\u660E\u6587</h3>
<p><code>type=&quot;password</code>\u65F6\u8BBE\u7F6E<code>showEye=&quot;true&quot;</code>\u53EF\u663E\u793A\u5BC6\u7801\u660E\u6587</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(j,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Input</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../input&#x27;</span>;

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Input</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BD5\u7740\u8F93\u5165\u4E9B\u4EC0\u4E48\u770B\u770B&quot;</span>
    <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;valueClear&quot;</span>
    <span class="hljs-attr">showEye</span>=<span class="hljs-string">{true}</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("FSKN4P");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"F8TCUS"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u6DFB\u52A0\u524D\u540E\u7F00icon">\u6DFB\u52A0\u524D\u540E\u7F00Icon</h3>
<p>\u53EF\u4EE5\u901A\u8FC7 <code>prefixIcon</code> \u548C <code>suffixIcon</code> \u5C5E\u6027\u5728 input \u7EC4\u4EF6\u9996\u90E8\u548C\u5C3E\u90E8\u589E\u52A0\u663E\u793A\u56FE\u6807\u3002</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(g,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Input</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../input&#x27;</span>;

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo-input&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Input</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BD5\u7740\u8F93\u5165\u4E9B\u4EC0\u4E48\u770B\u770B&quot;</span>
      <span class="hljs-attr">prefixIcon</span>=<span class="hljs-string">&quot;icon-user&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Input</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5185\u5BB9&quot;</span>
      <span class="hljs-attr">suffixIcon</span>=<span class="hljs-string">&quot;icon-search&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("F8TCUS");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"456FZ7"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u590D\u5408\u578B\u8F93\u5165\u6846">\u590D\u5408\u578B\u8F93\u5165\u6846</h3>
<p>\u53EF\u524D\u7F6E\u6216\u540E\u7F6E\u5143\u7D20\uFF0C\u4E00\u822C\u4E3A\u6807\u7B7E\u6216\u6309\u94AE</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(E,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Input</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../input&#x27;</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Button</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../button&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> btnCom = (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">{</span>&#x27;<span class="hljs-attr">text</span>&#x27;}&gt;</span>\u9A8C\u8BC1\u7801<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>)
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo-input&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Input</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BD5\u7740\u8F93\u5165\u4E9B\u4EC0\u4E48\u770B\u770B&quot;</span>
      <span class="hljs-attr">append</span>=<span class="hljs-string">&quot;.com&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Input</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5185\u5BB9&quot;</span>
      <span class="hljs-attr">prepend</span>=<span class="hljs-string">&quot;http://&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Input</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5185\u5BB9&quot;</span>
      <span class="hljs-attr">append</span>=<span class="hljs-string">{btnCom}</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("456FZ7");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"E3DOTU"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u8BBE\u7F6E\u5927\u5C0F">\u8BBE\u7F6E\u5927\u5C0F</h3>
<p>\u652F\u6301 <code>large</code>\u3001<code>normal</code>\u3001<code>small</code>\u3001<code>mini</code> \u56DB\u79CD\u5C3A\u5BF8\uFF0C\u9ED8\u8BA4\u4E3A normal</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(B,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {Input} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../input&#x27;</span>;

function Example() {
  <span class="hljs-keyword">return</span> (&lt;<span class="hljs-keyword">div</span> className=<span class="hljs-string">&quot;demo-input&quot;</span>&gt;
    &lt;<span class="hljs-keyword">div</span>&gt;&lt;Input placeholder=<span class="hljs-string">&quot;\u9ED8\u8BA4\u5C3A\u5BF8&quot;</span> <span class="hljs-keyword">size</span>=<span class="hljs-string">&quot;large&quot;</span><span class="hljs-regexp">/&gt;&lt;/</span><span class="hljs-keyword">div</span>&gt;
    &lt;<span class="hljs-keyword">div</span>&gt;&lt;Input placeholder=<span class="hljs-string">&quot;\u9ED8\u8BA4\u5C3A\u5BF8&quot;</span><span class="hljs-regexp">/&gt;&lt;/</span><span class="hljs-keyword">div</span>&gt;
    &lt;<span class="hljs-keyword">div</span>&gt;&lt;Input placeholder=<span class="hljs-string">&quot;sixe=small&quot;</span> <span class="hljs-keyword">size</span>=<span class="hljs-string">&quot;small&quot;</span><span class="hljs-regexp">/&gt;&lt;/</span><span class="hljs-keyword">div</span>&gt;
    &lt;<span class="hljs-keyword">div</span>&gt;&lt;Input placeholder=<span class="hljs-string">&quot;sixe=mini&quot;</span> <span class="hljs-keyword">size</span>=<span class="hljs-string">&quot;mini&quot;</span><span class="hljs-regexp">/&gt;&lt;/</span><span class="hljs-keyword">div</span>&gt;
  &lt;/<span class="hljs-keyword">div</span>&gt;)
}

export <span class="hljs-keyword">default</span> Example
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("E3DOTU");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"FEW5AW"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(v,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {useState, useRef} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Input</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../input&#x27;</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Button</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../button&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {<span class="hljs-title class_">InputRef</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../input&#x27;</span>;

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [value, setValue] = <span class="hljs-title function_">useState</span>(<span class="hljs-string">&#x27;&#x27;</span>)
  <span class="hljs-keyword">const</span> inputEl = useRef &lt; <span class="hljs-title class_">InputRef</span> &gt; (<span class="hljs-literal">null</span>)
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">value: <span class="hljs-built_in">string</span>, evt: React.ChangeEvent</span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(value)
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(evt)
    <span class="hljs-title function_">setValue</span>(value)
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onFocus</span> = (<span class="hljs-params">val</span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(val)
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onBlur</span> = (<span class="hljs-params">val</span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(val)
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">btnClick</span> = (<span class="hljs-params"></span>) =&gt; {
    inputEl.<span class="hljs-property">current</span>?.<span class="hljs-title function_">focus</span>()
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;\u5F53\u524D\u503C\uFF1A&#x27;</span> + inputEl.<span class="hljs-property">current</span>?.<span class="hljs-title function_">getValue</span>())
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo-input&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u5F53\u524D\u8F93\u5165\u6846\u7684\u503C:{value}<span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;onChange event&quot;</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{value}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}/</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;onFocus&quot;</span> <span class="hljs-attr">onFocus</span>=<span class="hljs-string">{onFocus}/</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;onBlur&quot;</span> <span class="hljs-attr">onBlur</span>=<span class="hljs-string">{onBlur}/</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u83B7\u53D6\u503C/\u7126\u70B9\u4E8B\u4EF6&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{inputEl}/</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{btnClick}</span>&gt;</span>\u83B7\u53D6\u7126\u70B9<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("FEW5AW");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}})))),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:`<h2 id="api">API</h2>
<div class="card"><h3 id="input-props">Input Props</h3>
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
<td>string</td>
<td>\u9ED8\u8BA4\u521D\u59CB\u8F93\u5165\u6846\u7684\u503C</td>
</tr>
<tr>
<td>placeholder</td>
<td>string</td>
<td>\u8F93\u5165\u6846\u70B9\u4F4D\u7B26</td>
</tr>
<tr>
<td>disabled</td>
<td>boolean/false</td>
<td>\u7981\u7528\u72B6\u6001</td>
</tr>
<tr>
<td>readOnly</td>
<td>boolean/false</td>
<td>\u53EA\u8BFB\u72B6\u6001</td>
</tr>
<tr>
<td>maxLength</td>
<td>number</td>
<td>\u8F93\u5165\u6700\u5927\u957F\u5EA6</td>
</tr>
<tr>
<td>type</td>
<td>string</td>
<td>\u6587\u672C\u6846\u7C7B\u578B\uFF0C\u9ED8\u8BA4text</td>
</tr>
<tr>
<td>width</td>
<td>string</td>
<td>\u8BBE\u7F6E\u5BBD\u5EA6\u5C5E\u6027</td>
</tr>
<tr>
<td>size</td>
<td>string</td>
<td>\u652F\u6301 <code>large</code>\u3001<code>normal</code>\u3001<code>small</code>\u3001<code>mini</code> \u56DB\u79CD\u5C3A\u5BF8\uFF0C\u9ED8\u8BA4\u4E3A <code>normal</code></td>
</tr>
<tr>
<td>prefixIcon</td>
<td>string</td>
<td>\u524D\u7F00icon\u56FE\u6807</td>
</tr>
<tr>
<td>suffixIcon</td>
<td>string</td>
<td>\u540E\u7F00icon\u56FE\u6807</td>
</tr>
<tr>
<td>prepend</td>
<td>string/ReactNode</td>
<td>\u524D\u7F00</td>
</tr>
<tr>
<td>append</td>
<td>string/ReactNode</td>
<td>\u540E\u7F00</td>
</tr>
<tr>
<td>onChange</td>
<td>function(value,e)</td>
<td>\u8F93\u5165\u6846\u5185\u5BB9\u53D8\u5316\u65F6\u7684\u56DE\u8C03</td>
</tr>
<tr>
<td>onFocus</td>
<td>function(value,e)</td>
<td>\u83B7\u53D6\u7126\u70B9\u4E8B\u4EF6</td>
</tr>
<tr>
<td>onBlur</td>
<td>function(value,e)</td>
<td>\u5931\u53BB\u7126\u70B9\u4E8B\u4EF6</td>
</tr>
</tbody></table>
</div><div class="card"><h3 id="input-methods">Input Methods</h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>focus</td>
<td>\u8BBE\u7F6E\u7126\u70B9</td>
</tr>
<tr>
<td>getValue</td>
<td>\u83B7\u53D6\u5F53\u524Dvalue</td>
</tr>
<tr>
<td>clear</td>
<td>\u6E05\u7A7A\u5F53\u524D\u8F93\u5165\u6846\u7684\u503C</td>
</tr>
</tbody></table>
</div>`}})))}export{x as default};
