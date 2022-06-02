import{R as s,r as c}from"./index.d9b65b5e.js";import{T as l}from"./Tag.f2e791b2.js";import{I as i}from"./Input.5ab227b7.js";import"./contextForm.e4b9b6de.js";function m(){return s.createElement("div",null,s.createElement(l,null,"\u6807\u7B7E\u4E00"),s.createElement(l,{type:"success"},"\u6807\u7B7E\u4E8C"),s.createElement(l,{type:"warning"},"\u6807\u7B7E\u4E09"),s.createElement(l,{type:"danger"},"\u6807\u7B7E\u56DB"),s.createElement(l,{type:"danger",color:"#fff",bgColor:"#c642e7",borderColor:"#c642e7"},"\u81EA\u5B9A\u6837\u5F0F"))}function g(){return s.createElement("div",null,s.createElement(l,{size:"large"},"\u9ED8\u8BA4\u6807\u7B7E"),s.createElement(l,{size:"default"},"\u4E2D\u7B49\u6807\u7B7E"),s.createElement(l,{size:"small"},"\u5C0F\u578B\u6807\u7B7E"),s.createElement(l,{size:"mini"},"\u8D85\u5C0F\u6807\u7B7E"))}function j(){return s.createElement("div",null,s.createElement(l,{closable:"true"},"\u6807\u7B7E\u4E00"),s.createElement(l,{closable:"true",type:"success"},"\u6807\u7B7E\u4E8C"),s.createElement(l,{closable:"true",type:"warning"},"\u6807\u7B7E\u4E09"),s.createElement(l,{closable:"true",type:"danger"},"\u6807\u7B7E3"))}function E(u,a){const[n,r]=c.exports.useState(["\u6807\u7B7E\u4E00","\u6807\u7B7E\u4E8C","\u6807\u7B7E\u4E09"]),p=c.exports.useRef(null),o=e=>{console.log(e)},d=e=>{var t;e&&n.push(e),r([...n]),(t=p.current)==null||t.clear()},h=n.map((e,t)=>s.createElement(l,{key:e,closable:!0,onClose:()=>o(t)},e));return s.createElement("div",null,h,s.createElement(i,{size:"small",onBlur:d,ref:p}))}function C(u){return s.createElement("div",{className:"doc-container md-pc docs-demo"},s.createElement("div",{className:"code-container"},s.createElement("div",{className:"md-code"}),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:""}})),s.createElement("div",{className:"demo-container"},s.createElement("div",{className:"md-demo"},s.createElement("h1",{id:"tag-\u6807\u7B7E"},"Tag \u6807\u7B7E"),s.createElement("div",{className:"card hide",id:"64S1J8"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u57FA\u672C\u4F7F\u7528">\u57FA\u672C\u4F7F\u7528</h3>
<p>\u7531<code>type</code>\u5C5E\u6027\u6765\u9009\u62E9<code>tag</code>\u7684\u7C7B\u578B\uFF0C\u652F\u6301 <code>default</code>\u3001<code>success</code>\u3001<code>warning</code>\u3001<code>danger</code>\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E3A <code>default</code>\u3002</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(m,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Tag</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Tag</span>&gt;</span>\u6807\u7B7E\u4E00<span class="hljs-tag">&lt;/<span class="hljs-name">Tag</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\u6807\u7B7E\u4E8C<span class="hljs-tag">&lt;/<span class="hljs-name">Tag</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>\u6807\u7B7E\u4E09<span class="hljs-tag">&lt;/<span class="hljs-name">Tag</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>\u6807\u7B7E\u56DB<span class="hljs-tag">&lt;/<span class="hljs-name">Tag</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#fff&quot;</span> <span class="hljs-attr">bgColor</span>=<span class="hljs-string">&quot;#c642e7&quot;</span> <span class="hljs-attr">borderColor</span>=<span class="hljs-string">&quot;#c642e7&quot;</span>&gt;</span>\u81EA\u5B9A\u6837\u5F0F<span class="hljs-tag">&lt;/<span class="hljs-name">Tag</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("64S1J8");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"6M6UOT"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u4E0D\u540C\u5C3A\u5BF8">\u4E0D\u540C\u5C3A\u5BF8</h3>
<p><code>Tag</code> \u7EC4\u4EF6\u63D0\u4F9B\u9664\u4E86\u9ED8\u8BA4\u503C\u4EE5\u5916\u7684\u4E09\u79CD\u5C3A\u5BF8\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u573A\u666F\u4E0B\u9009\u62E9\u5408\u9002\u7684\u6309\u94AE\u5C3A\u5BF8\u3002</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(g,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Tag</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Tag</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>&gt;</span>\u9ED8\u8BA4\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">Tag</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Tag</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;default&quot;</span>&gt;</span>\u4E2D\u7B49\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">Tag</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Tag</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>\u5C0F\u578B\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">Tag</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Tag</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span>&gt;</span>\u8D85\u5C0F\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">Tag</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("6M6UOT");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"3JHV0Y"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u53EF\u79FB\u9664\u6807\u7B7E">\u53EF\u79FB\u9664\u6807\u7B7E</h3>
<p>\u8BBE\u7F6E<code>closable</code>\u5C5E\u6027\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A\u6807\u7B7E\u662F\u5426\u53EF\u79FB\u9664</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(j,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Tag</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Tag</span> <span class="hljs-attr">closable</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\u6807\u7B7E\u4E00<span class="hljs-tag">&lt;/<span class="hljs-name">Tag</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Tag</span> <span class="hljs-attr">closable</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\u6807\u7B7E\u4E8C<span class="hljs-tag">&lt;/<span class="hljs-name">Tag</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Tag</span> <span class="hljs-attr">closable</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>\u6807\u7B7E\u4E09<span class="hljs-tag">&lt;/<span class="hljs-name">Tag</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Tag</span> <span class="hljs-attr">closable</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>\u6807\u7B7E3<span class="hljs-tag">&lt;/<span class="hljs-name">Tag</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("3JHV0Y");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"C9GY2Y"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u52A8\u6001\u7F16\u8F91\u6807\u7B7E">\u52A8\u6001\u7F16\u8F91\u6807\u7B7E</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(E,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {useState, useRef} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Tag</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Input</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../input&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {<span class="hljs-title class_">InputRef</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../input&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params">props, ref</span>) {
  <span class="hljs-keyword">const</span> [list, setList] = <span class="hljs-title function_">useState</span>([<span class="hljs-string">&#x27;\u6807\u7B7E\u4E00&#x27;</span>, <span class="hljs-string">&#x27;\u6807\u7B7E\u4E8C&#x27;</span>, <span class="hljs-string">&#x27;\u6807\u7B7E\u4E09&#x27;</span>])
  <span class="hljs-keyword">const</span> inputRef = useRef &lt; <span class="hljs-title class_">InputRef</span> &gt; (<span class="hljs-literal">null</span>)
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">closeClick</span> = (<span class="hljs-params">index: <span class="hljs-built_in">number</span></span>) =&gt; {
    <span class="hljs-comment">//list.splice(index, 1)</span>
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(index)
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">handleInputConfirm</span> = (<span class="hljs-params">val: <span class="hljs-built_in">string</span></span>) =&gt; {
    <span class="hljs-keyword">if</span> (val) {
      list.<span class="hljs-title function_">push</span>(val)
    }
    <span class="hljs-title function_">setList</span>([...list])
    inputRef.<span class="hljs-property">current</span>?.<span class="hljs-title function_">clear</span>()
  }
  <span class="hljs-keyword">const</span> listTag = list.<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">obj: <span class="hljs-built_in">string</span>, index: <span class="hljs-built_in">number</span></span>) =&gt;</span>
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tag</span>
      <span class="hljs-attr">key</span>=<span class="hljs-string">{obj}</span>
      <span class="hljs-attr">closable</span>=<span class="hljs-string">{true}</span>
      <span class="hljs-attr">onClose</span>=<span class="hljs-string">{()</span> =&gt;</span> closeClick(index)}&gt;{obj}
    <span class="hljs-tag">&lt;/<span class="hljs-name">Tag</span>&gt;</span></span>
  );
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    {listTag}
    <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">onBlur</span>=<span class="hljs-string">{handleInputConfirm}</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{inputRef}</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("C9GY2Y");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}})))),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:`<h2 id="api">API</h2>
<div class="card"><h3 id="tag-props">Tag Props</h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>type</td>
<td>string</td>
<td>\u7C7B\u578B\uFF0Csuccess/default/warning/danger</td>
</tr>
<tr>
<td>closable</td>
<td>boolean/false</td>
<td>\u662F\u5426\u53EF\u5173\u95ED</td>
</tr>
<tr>
<td>color</td>
<td>string</td>
<td>\u5B57\u4F53\u989C\u8272</td>
</tr>
<tr>
<td>bgColor</td>
<td>string</td>
<td>\u80CC\u666F\u8272</td>
</tr>
<tr>
<td>borderColor</td>
<td>string</td>
<td>\u8FB9\u6846\u989C\u8272</td>
</tr>
<tr>
<td>size</td>
<td>string</td>
<td>\u5C3A\u5BF8\uFF0Clarge / default/small / mini</td>
</tr>
<tr>
<td>onClose</td>
<td>function()</td>
<td><code>closable=true</code>\u65F6\u7684\u5173\u95ED\u4E8B\u4EF6</td>
</tr>
<tr>
<td>onClick</td>
<td>function()</td>
<td>\u70B9\u51FB\u4E8B\u4EF6</td>
</tr>
</tbody></table>
</div>`}})))}export{C as default};
