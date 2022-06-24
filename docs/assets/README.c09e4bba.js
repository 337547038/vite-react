var E=Object.defineProperty,g=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var u=(n,s,e)=>s in n?E(n,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[s]=e,r=(n,s)=>{for(var e in s||(s={}))F.call(s,e)&&u(n,e,s[e]);if(p)for(var e of p(s))f.call(s,e)&&u(n,e,s[e]);return n},d=(n,s)=>g(n,v(s));import{r as k,j as i,p as C,a as t,R as a}from"./index.462fc5a0.js";import{T as N}from"./Tooltip.d492aeea.js";import{B as c}from"./Button.09dbf190.js";import{M as x}from"./index.4c9aa202.js";import"./dom.46b1a4a1.js";import"./contextForm.4aff6fd8.js";import"./Dialog.244c6a55.js";const y=n=>{const{showCancel:s=!0}=n,e=k.exports.useRef(null),l=()=>{var o;(o=e.current)==null||o.close()},m=()=>{typeof n.onClick=="function"?n.onClick(()=>{l()}):l()},h=()=>null,j=i("div",{className:`${C}-popover`,children:[t("div",{className:"popover-content",children:n.content}),i("div",{className:"popover-footer",children:[s?t(c,{size:"mini",onClick:l,children:n.cancel||"\u53D6\u6D88"}):"",t(c,{type:"primary",size:"mini",onClick:m,children:n.confirm||"\u786E\u5B9A"})]})]});return t(N,d(r({ref:e,trigger:"click"},n),{content:j,onClick:h,children:n.children}))};function B(){const n=s=>{x.Msg("\u70B9\u51FB\u4E86\u5220\u9664\u786E\u8BA4"),s()};return a.createElement("div",{className:"demo-tooltip"},a.createElement(y,{content:"\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",onClick:n},a.createElement(c,null,"\u5220\u9664")))}function P(n){return a.createElement("div",{className:"doc-container md-pc docs-demo"},a.createElement("div",{className:"code-container"},a.createElement("div",{className:"md-code"}),a.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:""}})),a.createElement("div",{className:"demo-container"},a.createElement("div",{className:"md-demo"},a.createElement("h1",{id:"popover\uFF08tooltip\uFF09-\u5F39\u51FA\u6846"},"Popover\uFF08Tooltip\uFF09 \u5F39\u51FA\u6846"),a.createElement("div",{className:"card hide",id:"FIX2K0"},a.createElement("div",{className:"demo-block"},a.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>
`}}),a.createElement("div",{className:"demo-block-content"},a.createElement(B,null))),a.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Popover</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Button</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../button&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Message</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;../message&quot;</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClick</span> = (<span class="hljs-params">done: () =&gt; <span class="hljs-keyword">void</span></span>) =&gt; {
    <span class="hljs-title class_">Message</span>.<span class="hljs-title class_">Msg</span>(<span class="hljs-string">&#x27;\u70B9\u51FB\u4E86\u5220\u9664\u786E\u8BA4&#x27;</span>)
    <span class="hljs-title function_">done</span>()
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-tooltip&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Popover</span>
    <span class="hljs-attr">content</span>=<span class="hljs-string">&#x27;\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F&#x27;</span>
    <span class="hljs-attr">onClick</span>=<span class="hljs-string">{onClick}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>&gt;</span>\u5220\u9664<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Popover</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),a.createElement("div",{className:"control-block"},a.createElement("span",{onClick:()=>{const s=document.getElementById("FIX2K0");let e=s.className;s.className.indexOf("show")!==-1?e=s.className.replace("show","hide"):s.className.indexOf("hide")!==-1&&(e=s.className.replace("hide","show")),s.className=e}})))),a.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:`<h2 id="api">API</h2>
<div class="card"><h3 id="popover">Popover</h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>confirm</td>
<td>string</td>
<td>\u786E\u8BA4\u6309\u94AE\u6587\u6848</td>
</tr>
<tr>
<td>cancel</td>
<td>string</td>
<td>\u53D6\u6D88\u6309\u94AE\u6587\u6848</td>
</tr>
<tr>
<td>showCancel</td>
<td>boolean/true</td>
<td>\u663E\u793A\u53D6\u6D88\u6309\u94AE</td>
</tr>
<tr>
<td>onClick</td>
<td>function(done)</td>
<td>\u786E\u8BA4\u6309\u94AE\u4E8B\u4EF6\uFF0C\u53EF\u4F7F\u7528done()\u5173\u95ED\u63D0\u793A\u6846</td>
</tr>
<tr>
<td>...</td>
<td></td>
<td>\u5176\u4ED6\u53C2\u6570\u540CTooltip</td>
</tr>
</tbody></table>
</div>`}})))}export{P as default};
