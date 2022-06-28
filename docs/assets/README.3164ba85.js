import{r,j as B,c as d,p as F,a as h,R as s}from"./index.efbe83c6.js";import{C as A}from"./CSSTransition.8e61e1bd.js";const p=u=>{const{showContent:a=!0,defaultValue:n="tab-1"}=u,[c,j]=r.exports.useState([]),[i,g]=r.exports.useState(n),b=()=>{const e=[],t=u.children;return t&&typeof t=="object"&&t.forEach(o=>{s.isValidElement(o)&&typeof o.type=="function"&&o.type.name==="TabPane"&&e.push(o.props)}),e},m=(e,t)=>e.name?e.name===i:i==="tab-"+(t+1),E=(e,t)=>{if(!e.disabled){if(u.beforeLeave&&!u.beforeLeave(e))return console.log("\u963B\u6B62\u70B9\u51FB"),!1;g(e.name||"tab-"+(t+1)),u.onChange&&u.onChange(e,t)}};return r.exports.useEffect(()=>{g(n)},[u.defaultValue]),r.exports.useEffect(()=>{j([...b()])},[u.children]),B("div",{className:d(u.className,`${F}-tabs`),children:[h("div",{className:"tabs-nav",children:c.map((e,t)=>h("div",{className:d("tabs-tab",{disabled:e.disabled,active:m(e,t)}),onClick:()=>E(e,t),children:e.label},t))}),a?h("div",{className:"tabs-content",children:c.map((e,t)=>h(A,{in:m(e,t),timeout:500,classNames:"tabs",children:h("div",{style:{display:m(e,t)?"":"none"},className:d(`tab-pane-${t}`,e.className),children:e.children},t)},t))}):""]})},l=u=>null;function N(){return s.createElement(p,null,s.createElement(l,{label:"\u7528\u6237\u7BA1\u7406"},"\u7528\u6237\u7BA1\u7406"),s.createElement(l,{label:"\u914D\u7F6E\u7BA1\u7406"},"\u914D\u7F6E\u7BA1\u7406"),s.createElement(l,{label:"\u89D2\u8272\u7BA1\u7406"},"\u89D2\u8272\u7BA1\u7406"),s.createElement(l,{label:"\u5B9A\u65F6\u4EFB\u52A1\u8865\u507F"},"\u5B9A\u65F6\u4EFB\u52A1\u8865\u507F"))}function f(){return s.createElement(p,null,s.createElement(l,{label:"\u7528\u6237\u7BA1\u7406"},"\u7528\u6237\u7BA1\u7406"),s.createElement(l,{label:"\u914D\u7F6E\u7BA1\u7406",disabled:!0},"\u914D\u7F6E\u7BA1\u7406"),s.createElement(l,{label:"\u89D2\u8272\u7BA1\u7406"},"\u89D2\u8272\u7BA1\u7406"),s.createElement(l,{label:"\u5B9A\u65F6\u4EFB\u52A1\u8865\u507F"},"\u5B9A\u65F6\u4EFB\u52A1\u8865\u507F"))}function T(){const u=s.createElement("div",null,s.createElement("i",{className:"icon-user"})," \u7528\u6237\u7BA1\u7406");return s.createElement(p,null,s.createElement(l,{label:u},"\u7528\u6237\u7BA1\u7406"),s.createElement(l,{label:"\u914D\u7F6E\u7BA1\u7406",disabled:!0},"\u914D\u7F6E\u7BA1\u7406"),s.createElement(l,{label:"\u89D2\u8272\u7BA1\u7406"},"\u89D2\u8272\u7BA1\u7406"),s.createElement(l,{label:"\u5B9A\u65F6\u4EFB\u52A1\u8865\u507F"},"\u5B9A\u65F6\u4EFB\u52A1\u8865\u507F"))}function x(){return s.createElement("div",{className:"tabs-demo"},s.createElement(p,{defaultValue:"tab2"},s.createElement(l,{label:"\u7528\u6237\u7BA1\u7406",name:"tab1"},"\u7528\u6237\u7BA1\u7406"),s.createElement(l,{label:"\u914D\u7F6E\u7BA1\u7406",name:"tab2"},"\u914D\u7F6E\u7BA1\u7406"),s.createElement(l,{label:"\u89D2\u8272\u7BA1\u7406",name:"tab3"},"\u89D2\u8272\u7BA1\u7406"),s.createElement(l,{label:"\u5B9A\u65F6\u4EFB\u52A1\u8865\u507F",name:"tab4"},"\u5B9A\u65F6\u4EFB\u52A1\u8865\u507F")))}function v(){const[u,a]=r.exports.useState(""),n=(c,j)=>{console.log(c),a(`\u5F53\u524D\u70B9\u51FB\u9009\u9879\u7684name\u503C\uFF1A${c.name||""}`)};return s.createElement("div",{className:"tabs-demo"},s.createElement(p,{showContent:!1,onChange:n},s.createElement(l,{label:"\u7528\u6237\u7BA1\u7406",name:"tab1"},"\u7528\u6237\u7BA1\u7406"),s.createElement(l,{label:"\u914D\u7F6E\u7BA1\u7406",name:"tab2"},"\u914D\u7F6E\u7BA1\u7406"),s.createElement(l,{label:"\u89D2\u8272\u7BA1\u7406",name:"tab3"},"\u89D2\u8272\u7BA1\u7406"),s.createElement(l,{label:"\u5B9A\u65F6\u4EFB\u52A1\u8865\u507F",name:"tab4"},"\u5B9A\u65F6\u4EFB\u52A1\u8865\u507F")),s.createElement("div",{className:"ajax-content"},"ajax content",s.createElement("p",null,u)))}function k(){const u=a=>(console.log(a),!1);return s.createElement("div",{className:"tabs-demo"},s.createElement(p,{beforeLeave:u},s.createElement(l,{label:"\u7528\u6237\u7BA1\u7406",name:"tab-1"},"\u7528\u6237\u7BA1\u7406"),s.createElement(l,{label:"\u914D\u7F6E\u7BA1\u7406",name:"tab2"},"\u914D\u7F6E\u7BA1\u7406"),s.createElement(l,{label:"\u89D2\u8272\u7BA1\u7406",name:"tab3"},"\u89D2\u8272\u7BA1\u7406"),s.createElement(l,{label:"\u5B9A\u65F6\u4EFB\u52A1\u8865\u507F",name:"tab4"},"\u5B9A\u65F6\u4EFB\u52A1\u8865\u507F")))}function q(u){return s.createElement("div",{className:"doc-container md-pc docs-demo"},s.createElement("div",{className:"code-container"},s.createElement("div",{className:"md-code"}),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:""}})),s.createElement("div",{className:"demo-container"},s.createElement("div",{className:"md-demo"},s.createElement("h1",{id:"tabs-\u6807\u7B7E\u9875"},"Tabs \u6807\u7B7E\u9875"),s.createElement("div",{className:"card hide",id:"2OGGAI"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u57FA\u672C\u7528\u6CD5">\u57FA\u672C\u7528\u6CD5</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(N,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">TabPane</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7528\u6237\u7BA1\u7406&quot;</span>&gt;</span>\u7528\u6237\u7BA1\u7406<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u914D\u7F6E\u7BA1\u7406&quot;</span>&gt;</span>\u914D\u7F6E\u7BA1\u7406<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u89D2\u8272\u7BA1\u7406&quot;</span>&gt;</span>\u89D2\u8272\u7BA1\u7406<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5B9A\u65F6\u4EFB\u52A1\u8865\u507F&quot;</span>&gt;</span>\u5B9A\u65F6\u4EFB\u52A1\u8865\u507F<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("2OGGAI");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"F177G3"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u53EF\u8BBE\u7F6E\u7981\u7528\u9879">\u53EF\u8BBE\u7F6E\u7981\u7528\u9879</h3>
<p>\u53EF\u901A\u8FC7<code>disabled</code>\u8BBE\u7F6E\u7981\u7528\u72B6\u6001</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(f,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">TabPane</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7528\u6237\u7BA1\u7406&quot;</span>&gt;</span>\u7528\u6237\u7BA1\u7406<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u914D\u7F6E\u7BA1\u7406&quot;</span> <span class="hljs-attr">disabled</span>=<span class="hljs-string">{true}</span>&gt;</span>\u914D\u7F6E\u7BA1\u7406<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u89D2\u8272\u7BA1\u7406&quot;</span>&gt;</span>\u89D2\u8272\u7BA1\u7406<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5B9A\u65F6\u4EFB\u52A1\u8865\u507F&quot;</span>&gt;</span>\u5B9A\u65F6\u4EFB\u52A1\u8865\u507F<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("F177G3");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"2JWVYR"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u81EA\u5B9A\u4E49\u6807\u7B7E\u9875">\u81EA\u5B9A\u4E49\u6807\u7B7E\u9875</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(T,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">TabPane</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> label = (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;icon-user&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span> \u7528\u6237\u7BA1\u7406<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">label</span>=<span class="hljs-string">{label}</span>&gt;</span>\u7528\u6237\u7BA1\u7406<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u914D\u7F6E\u7BA1\u7406&quot;</span> <span class="hljs-attr">disabled</span>=<span class="hljs-string">{true}</span>&gt;</span>\u914D\u7F6E\u7BA1\u7406<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u89D2\u8272\u7BA1\u7406&quot;</span>&gt;</span>\u89D2\u8272\u7BA1\u7406<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5B9A\u65F6\u4EFB\u52A1\u8865\u507F&quot;</span>&gt;</span>\u5B9A\u65F6\u4EFB\u52A1\u8865\u507F<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("2JWVYR");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"65ISZX"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u53EF\u81EA\u5B9A\u521D\u59CB\u663E\u793A\u9879">\u53EF\u81EA\u5B9A\u521D\u59CB\u663E\u793A\u9879</h3>
<p>\u901A\u8FC7\u6DFB\u52A0<code>defaultVame</code>\u548C<code>name</code>\u6307\u5B9A\u521D\u59CB\u663E\u793A\u9879\u3002\u4E5F\u53EF\u4EE5\u53EA\u8BBE\u7F6Evalue\u503C(<code>tab-*</code>*\u4ECE1\u5F00\u59CB\u6309\u987A\u5E8F\u751F\u6210)\uFF0Cname\u4E3A\u7A7A</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(x,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">TabPane</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;tabs-demo&#x27;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&#x27;tab2&#x27;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7528\u6237\u7BA1\u7406&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;tab1&quot;</span>&gt;</span>\u7528\u6237\u7BA1\u7406<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u914D\u7F6E\u7BA1\u7406&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;tab2&quot;</span>&gt;</span>\u914D\u7F6E\u7BA1\u7406<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u89D2\u8272\u7BA1\u7406&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;tab3&quot;</span>&gt;</span>\u89D2\u8272\u7BA1\u7406<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5B9A\u65F6\u4EFB\u52A1\u8865\u507F&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;tab4&quot;</span>&gt;</span>\u5B9A\u65F6\u4EFB\u52A1\u8865\u507F<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("65ISZX");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"DXN7U7"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u53EF\u4E0D\u663E\u793A\u5207\u6362\u5185\u5BB9">\u53EF\u4E0D\u663E\u793A\u5207\u6362\u5185\u5BB9</h3>
<p>\u5F88\u591A\u65F6\u5019\u5E76\u4E0D\u9700\u8981\u901A\u8FC7\u663E\u793A\u548C\u9690\u85CF\u6765\u5207\u6362\u5185\u5BB9\uFF0C\u800C\u662F\u5728\u70B9\u51FB\u9009\u9879\u5361\u6807\u9898\u65F6\u53BB\u52A8\u6001\u52A0\u8F7D\u6570\u636E\uFF0C\u8FD9\u65F6\u53EF\u8BBE\u7F6E<code>showContent:false</code></p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(v,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">TabPane</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> {useState} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [content, setContent] = useState&lt;<span class="hljs-built_in">string</span>&gt;(<span class="hljs-string">&#x27;&#x27;</span>)
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">change</span> = (<span class="hljs-params">obj: <span class="hljs-built_in">any</span>, index: <span class="hljs-built_in">number</span></span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj)
    <span class="hljs-title function_">setContent</span>(<span class="hljs-string">\`\u5F53\u524D\u70B9\u51FB\u9009\u9879\u7684name\u503C\uFF1A<span class="hljs-subst">\${obj.name || <span class="hljs-string">&#x27;&#x27;</span>}</span>\`</span>)
  }
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;tabs-demo&#x27;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">showContent</span>=<span class="hljs-string">{false}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{change}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7528\u6237\u7BA1\u7406&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;tab1&quot;</span>&gt;</span>\u7528\u6237\u7BA1\u7406<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u914D\u7F6E\u7BA1\u7406&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;tab2&quot;</span>&gt;</span>\u914D\u7F6E\u7BA1\u7406<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u89D2\u8272\u7BA1\u7406&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;tab3&quot;</span>&gt;</span>\u89D2\u8272\u7BA1\u7406<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5B9A\u65F6\u4EFB\u52A1\u8865\u507F&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;tab4&quot;</span>&gt;</span>\u5B9A\u65F6\u4EFB\u52A1\u8865\u507F<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;ajax-content&quot;</span>&gt;</span>
        ajax content
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>{content}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("DXN7U7");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"FJOAT2"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u963B\u6B62\u4E8B\u4EF6">\u963B\u6B62\u4E8B\u4EF6</h3>
<p>\u5207\u6362\u6807\u7B7E\u4E4B\u524D\u7684\u94A9\u5B50<code>beforeLeave</code>\uFF0C\u82E5\u8FD4\u56DE<code> false</code>\uFF0C\u5219\u963B\u6B62\u5207\u6362</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(k,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">TabPane</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">beforeLeave</span> = (<span class="hljs-params">item:any</span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(item)
    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
  }
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;tabs-demo&#x27;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">beforeLeave</span>=<span class="hljs-string">{beforeLeave}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7528\u6237\u7BA1\u7406&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;tab-1&quot;</span>&gt;</span>\u7528\u6237\u7BA1\u7406<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u914D\u7F6E\u7BA1\u7406&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;tab2&quot;</span>&gt;</span>\u914D\u7F6E\u7BA1\u7406<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u89D2\u8272\u7BA1\u7406&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;tab3&quot;</span>&gt;</span>\u89D2\u8272\u7BA1\u7406<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5B9A\u65F6\u4EFB\u52A1\u8865\u507F&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;tab4&quot;</span>&gt;</span>\u5B9A\u65F6\u4EFB\u52A1\u8865\u507F<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("FJOAT2");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}})))),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:`<h2 id="api">API</h2>
<div class="card"><h3 id="tabs">Tabs</h3>
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
<td>\u7ED1\u5B9A\u503C\u3002\u5BF9\u5E94\u9009\u9879\u5361\u7684 name\uFF0C\u4E3A\u7A7A\u65F6\u81EA\u52A8\u751F\u6210<code>tab-*</code>\uFF0C\u521D\u59CB\u9ED8\u8BA4\u663E\u793A\u7B2C\u4E00\u9879</td>
</tr>
<tr>
<td>beforeLeave</td>
<td>function</td>
<td>\u5207\u6362\u6807\u7B7E\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u82E5\u8FD4\u56DE false\uFF0C\u5219\u963B\u6B62\u5207\u6362</td>
</tr>
<tr>
<td>onChange</td>
<td>function</td>
<td>\u70B9\u51FB\u6539\u53D8\u4E8B\u4EF6,function(item, index)</td>
</tr>
</tbody></table>
</div><div class="card"><h3 id="tabpane">TabPane</h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>name</td>
<td>string</td>
<td>\u5BF9\u5E94 Tabs \u7684 defaultValue \u503C\uFF0C\u4E3A\u7A7A\u65F6\u81EA\u52A8\u751F\u6210\u3002\u4E00\u822C\u53EF\u4E0D\u586B\u5199</td>
</tr>
<tr>
<td>label</td>
<td>string</td>
<td>\u6807\u7B7E\u540D\u79F0</td>
</tr>
<tr>
<td>disabled</td>
<td>boolean/false</td>
<td>\u7981\u7528\u9009\u9876</td>
</tr>
</tbody></table>
</div>`}})))}export{q as default};
