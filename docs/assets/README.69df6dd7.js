import{R as s}from"./index.449b2a60.js";import{a as l,R as e}from"./RadioGroup.054e210d.js";import"./contextForm.57a94b34.js";function c(){return s.createElement("div",null,s.createElement("div",null,s.createElement(l,{checked:!0},"\u9009\u98791")),s.createElement("div",null,s.createElement(l,{checked:!1},"\u9009\u98792")),s.createElement("div",null,s.createElement(l,{checked:!0,disabled:!0},"\u7981\u75283")),s.createElement("div",null,s.createElement(l,{checked:!1,disabled:!0},"\u7981\u75284")))}function d(){const t=[{label:"\u9009\u98791",value:"a1"},{label:"\u9009\u98792",value:"a2"},{label:"\u9009\u98793",value:"a3"},{label:"\u9009\u98794",value:"a4"},{label:"\u7981\u7528",value:"a5",disabled:!0}],a=(n,p)=>{console.log(n),console.log(p)};return s.createElement("div",null,s.createElement("div",null,s.createElement(e,{options:t,defaultValue:"a1",onChange:a})),s.createElement("div",null,s.createElement("p",null,"\u7981\u7528\u7EC4"),s.createElement(e,{options:t,defaultValue:"a2",disabled:!0})))}function o(t){return s.createElement("div",{className:"doc-container md-pc docs-demo"},s.createElement("div",{className:"code-container"},s.createElement("div",{className:"md-code"}),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:""}})),s.createElement("div",{className:"demo-container"},s.createElement("div",{className:"md-demo"},s.createElement("h1",{id:"radio-\u5355\u9009\u6846"},"Radio \u5355\u9009\u6846"),s.createElement("div",{className:"card hide",id:"58BXVL"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>
<p>\u5355\u4E2A\u4F7F\u7528\u65F6\uFF0C<code>checked</code>\u4E3A<code>true</code>\u65F6\u9009\u4E2D\u72B6\u6001</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(c,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Radio</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{false}</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">disabled</span>=<span class="hljs-string">{true}</span>&gt;</span>\u7981\u75283<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{false}</span> <span class="hljs-attr">disabled</span>=<span class="hljs-string">{true}</span>&gt;</span>\u7981\u75284<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("58BXVL");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"7EWR71"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u5355\u9009\u7EC4">\u5355\u9009\u7EC4</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(d,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">RadioGroup</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> options = [
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a1&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a2&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98793&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a3&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98794&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a4&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u7981\u7528&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a5&#x27;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>}
  ]
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChangeGroup</span> = (<span class="hljs-params">value, item</span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(value)
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(item)
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;a1&quot;</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChangeGroup}/</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u7981\u7528\u7EC4<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;a2&quot;</span> <span class="hljs-attr">disabled</span>=<span class="hljs-string">{true}/</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("7EWR71");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}})))),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:`<h2 id="api">API</h2>
<div class="card"><h3 id="radio">Radio</h3>
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
<td>boolean/false</td>
<td>\u521D\u59CB\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001</td>
</tr>
<tr>
<td>disabled</td>
<td>boolean/false</td>
<td>\u662F\u5426\u7981\u7528</td>
</tr>
<tr>
<td>label</td>
<td>String</td>
<td>\u663E\u793A\u7684\u6587\u672C\u503C\uFF0C\u4E5F\u53EF\u4EE5\u662Fchildren</td>
</tr>
<tr>
<td>onChange</td>
<td>function(val)</td>
<td>\u6539\u53D8\u4E8B\u4EF6</td>
</tr>
</tbody></table>
</div><div class="card"><h3 id="radiogroup">RadioGroup</h3>
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
<td>Radio\u9ED8\u8BA4\u9009\u4E2D\u7684\u503C</td>
</tr>
<tr>
<td>options</td>
<td>array</td>
<td>\u7EC4\u6570\u636E</td>
</tr>
<tr>
<td>optionsKey</td>
<td>object</td>
<td>\u6307\u5B9A\u9009\u62E9\u6570\u636E\u7684label\u548Cvalue\u5C5E\u4E8E\uFF0C\u9ED8\u8BA4{label:&#39;label&#39;,value:&#39;value&#39;}</td>
</tr>
<tr>
<td>disabled</td>
<td>Boolean/false</td>
<td>\u7981\u7528\u7EC4</td>
</tr>
<tr>
<td>onChange</td>
<td>function(val,obj)</td>
<td>\u6539\u53D8\u4E8B\u4EF6</td>
</tr>
</tbody></table>
</div><div class="card"><h3 id="radiogroup-options">RadioGroup options</h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>label</td>
<td>string</td>
<td>\u663E\u793A\u7684\u6587\u672C\u503C</td>
</tr>
<tr>
<td>value</td>
<td>string</td>
<td>\u5F53\u524D\u9009\u9879\u503C</td>
</tr>
<tr>
<td>disabled</td>
<td>boolean/false</td>
<td>\u662F\u5426\u7981\u7528</td>
</tr>
</tbody></table>
</div><div class="card"><h3 id="radioradiogroup-methods">Radio/RadioGroup Methods</h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>getValue</td>
<td>\u83B7\u53D6\u5F53\u524D\u662F\u5426\u9009\u4E2D\u72B6\u6001</td>
</tr>
</tbody></table>
</div>`}})))}export{o as default};
