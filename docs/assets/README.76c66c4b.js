var u=Object.defineProperty,m=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var p=(n,a,t)=>a in n?u(n,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[a]=t,r=(n,a)=>{for(var t in a||(a={}))g.call(a,t)&&p(n,t,a[t]);if(c)for(var t of c(a))E.call(a,t)&&p(n,t,a[t]);return n},i=(n,a)=>m(n,j(a));import{B as e}from"./Button.09dbf190.js";import{D as C}from"./Dialog.244c6a55.js";import{a as f,p as o,R as s}from"./index.462fc5a0.js";import"./contextForm.4aff6fd8.js";import"./dom.46b1a4a1.js";const k=n=>{const{direction:a="left"}=n;return f(C,i(r({},n),{animation:"slide",className:`${o}-drawer ${o}-drawer-${a}`,children:n.children}))};function w(){const[n,a]=s.useState("left"),[t,h]=s.useState(!1),l=d=>{a(d),h(!0)};return s.createElement("div",{className:"demo-dialog"},s.createElement(e,{onClick:()=>l("left")},"\u5DE6\u8FB9"),s.createElement(e,{onClick:()=>l("top")},"\u9879\u90E8"),s.createElement(e,{onClick:()=>l("right")},"\u53F3\u8FB9"),s.createElement(e,{onClick:()=>l("bottom")},"\u5E95\u90E8"),s.createElement(k,{visible:t,title:"title",direction:n},"this content"))}function v(n){return s.createElement("div",{className:"doc-container md-pc docs-demo"},s.createElement("div",{className:"code-container"},s.createElement("div",{className:"md-code"}),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:""}})),s.createElement("div",{className:"demo-container"},s.createElement("div",{className:"md-demo"},s.createElement("h1",{id:"drawer-\u62BD\u5C49\u5BF9\u8BDD\u6846"},"Drawer \u62BD\u5C49\u5BF9\u8BDD\u6846"),s.createElement("div",{className:"card hide",id:"CUTAFG"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u57FA\u672C\u7528\u6CD5">\u57FA\u672C\u7528\u6CD5</h3>
<p>\u7528\u6CD5\u548C\u6240\u6709\u53C2\u6570\u540C<code>Dialog</code>\u4E00\u6837</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(w,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Button</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../button&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Drawer</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../drawer&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [direction, setDirection] = <span class="hljs-title class_">React</span>.<span class="hljs-property">useState</span> &lt; <span class="hljs-built_in">string</span> &gt; (<span class="hljs-string">&#x27;left&#x27;</span>)
  <span class="hljs-keyword">const</span> [visible, setVisible] = <span class="hljs-title class_">React</span>.<span class="hljs-property">useState</span> &lt; <span class="hljs-built_in">boolean</span> &gt; (<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">open</span> = (<span class="hljs-params"><span class="hljs-keyword">type</span>: <span class="hljs-built_in">string</span></span>) =&gt; {
    <span class="hljs-title function_">setDirection</span>(<span class="hljs-keyword">type</span>)
    <span class="hljs-title function_">setVisible</span>(<span class="hljs-literal">true</span>)
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-dialog&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> open(&#x27;left&#x27;)}&gt;\u5DE6\u8FB9<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> open(&#x27;top&#x27;)}&gt;\u9879\u90E8<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> open(&#x27;right&#x27;)}&gt;\u53F3\u8FB9<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> open(&#x27;bottom&#x27;)}&gt;\u5E95\u90E8<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Drawer</span> <span class="hljs-attr">visible</span>=<span class="hljs-string">{visible}</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">{direction}</span>&gt;</span>this content<span class="hljs-tag">&lt;/<span class="hljs-name">Drawer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("CUTAFG");let t=a.className;a.className.indexOf("show")!==-1?t=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(t=a.className.replace("hide","show")),a.className=t}})))),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:`<h2 id="api">API</h2>
<div class="card"><h3 id="drawer">Drawer</h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>direction</td>
<td>string/right</td>
<td>\u663E\u793A\u65B9\u5411\uFF0Cleft/right/top/bottom</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>\u5176\u4ED6\u6240\u6709\u53C2\u6570\u540C<a href="/#/dialog">dialog</a></td>
</tr>
</tbody></table>
</div>`}})))}export{v as default};
