import{R as s}from"./index.91296f78.js";import{T as n}from"./Textarea.61917427.js";import"./contextForm.86db4bf4.js";import"./index.4eedf3c9.js";function t(){const l=a=>{console.log(a)};return s.createElement("div",{className:"textarea-demo"},s.createElement(n,{defaultValue:"textarea1",placeholder:"placeholder",onChange:l}))}function c(){return s.createElement("div",{className:"textarea-demo"},s.createElement(n,{defaultValue:"\u4E0D\u80FD\u8F93\u5165",placeholder:"placeholder",disabled:!0}))}function u(){return s.createElement("div",{className:"textarea-demo"},s.createElement(n,{defaultValue:"\u8F93\u5165\u4E9B\u6587\u5B57\u56DE\u8F66\u6362\u884C\u8BD5\u8BD5",placeholder:"placeholder"}),s.createElement("p",null,"\u8BBE\u7F6E\u6700\u5927\u9AD8\u5EA6"),s.createElement(n,{defaultValue:"\u8F93\u5165\u4E9B\u6587\u5B57\u56DE\u8F66\u6362\u884C\u8BD5\u8BD5",placeholder:"placeholder",maxHeight:"200px"}))}function d(){return s.createElement("div",{className:"textarea-demo"},s.createElement(n,{defaultValue:"textarea1",placeholder:"placeholder",showWordLimit:!0,maxLength:10}))}function m(l){return s.createElement("div",{className:"doc-container md-pc docs-demo"},s.createElement("div",{className:"code-container"},s.createElement("div",{className:"md-code"}),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:""}})),s.createElement("div",{className:"demo-container"},s.createElement("div",{className:"md-demo"},s.createElement("h1",{id:"textarea-\u6587\u672C\u6846"},"Textarea \u6587\u672C\u6846"),s.createElement("div",{className:"card hide",id:"FKOLO8"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u57FA\u672C\u7528\u6CD5">\u57FA\u672C\u7528\u6CD5</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(t,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Textarea</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">val: string</span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(val)
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;textarea-demo&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Textarea</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;textarea1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("FKOLO8");let e=a.className;a.className.indexOf("show")!==-1?e=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(e=a.className.replace("hide","show")),a.className=e}}))),s.createElement("div",{className:"card hide",id:"BI7L43"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u7981\u7528">\u7981\u7528</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(c,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Textarea</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;textarea-demo&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Textarea</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;\u4E0D\u80FD\u8F93\u5165&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span> <span class="hljs-attr">disabled</span>=<span class="hljs-string">{true}</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("BI7L43");let e=a.className;a.className.indexOf("show")!==-1?e=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(e=a.className.replace("hide","show")),a.className=e}}))),s.createElement("div",{className:"card hide",id:"8M5KTQ"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u81EA\u52A8\u9AD8">\u81EA\u52A8\u9AD8</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(u,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Textarea</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;textarea-demo&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Textarea</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;\u8F93\u5165\u4E9B\u6587\u5B57\u56DE\u8F66\u6362\u884C\u8BD5\u8BD5&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u8BBE\u7F6E\u6700\u5927\u9AD8\u5EA6<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Textarea</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;\u8F93\u5165\u4E9B\u6587\u5B57\u56DE\u8F66\u6362\u884C\u8BD5\u8BD5&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span> <span class="hljs-attr">maxHeight</span>=<span class="hljs-string">&#x27;200px&#x27;</span>/&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("8M5KTQ");let e=a.className;a.className.indexOf("show")!==-1?e=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(e=a.className.replace("hide","show")),a.className=e}}))),s.createElement("div",{className:"card hide",id:"G7BJ62"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u663E\u793A\u8F93\u5165\u5B57\u6570">\u663E\u793A\u8F93\u5165\u5B57\u6570</h3>
<p>\u5728\u4F7F\u7528 <code>maxLength</code> \u5C5E\u6027\u9650\u5236\u6700\u5927\u8F93\u5165\u957F\u5EA6\u7684\u540C\u65F6\uFF0C\u53EF\u901A\u8FC7\u8BBE\u7F6E <code>showWordLimit</code> \u5C5E\u6027\u6765\u5C55\u793A\u5B57\u6570\u7EDF\u8BA1</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(d,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Textarea</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;textarea-demo&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Textarea</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;textarea1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span> <span class="hljs-attr">showWordLimit</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">maxLength</span>=<span class="hljs-string">{10}</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("G7BJ62");let e=a.className;a.className.indexOf("show")!==-1?e=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(e=a.className.replace("hide","show")),a.className=e}})))),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:`<h2 id="api">API</h2>
<div class="card"><h3 id="textarea">Textarea</h3>
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
<td>String</td>
<td>\u7ED1\u5B9A\u7684\u503C</td>
</tr>
<tr>
<td>autoHeight</td>
<td>boolean/true</td>
<td>\u81EA\u52A8\u9AD8</td>
</tr>
<tr>
<td>width</td>
<td>String</td>
<td>\u8981\u5E26\u5355\u4F4Dpx/%</td>
</tr>
<tr>
<td>height</td>
<td>String</td>
<td>\u8981\u5E26\u5355\u4F4Dpx\uFF0C\u8BBE\u7F6E\u4E3A<code>autoHeight</code>\u4F1A\u88AB\u8986\u76D6</td>
</tr>
<tr>
<td>maxHeight</td>
<td>String</td>
<td>\u8981\u5E26\u5355\u4F4Dpx</td>
</tr>
<tr>
<td>showWordLimit</td>
<td>boolena/false</td>
<td>\u539F\u751F\u5C5E\u6027\uFF0C\u6700\u5927\u8F93\u5165\u957F\u5EA6</td>
</tr>
<tr>
<td>maxLength</td>
<td>number</td>
<td>\u662F\u5426\u663E\u793A\u8F93\u5165\u5B57\u6570\u7EDF\u8BA1</td>
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
<td>onChange</td>
<td>function(value,e)</td>
<td>\u8F93\u5165\u6846\u5185\u5BB9\u53D8\u5316\u65F6\u7684\u56DE\u8C03</td>
</tr>
<tr>
<td>onFocus</td>
<td>function(e)</td>
<td>\u83B7\u53D6\u7126\u70B9\u4E8B\u4EF6</td>
</tr>
<tr>
<td>onBlur</td>
<td>function(e)</td>
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
</div>`}})))}export{m as default};
