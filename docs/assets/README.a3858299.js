import{R as s}from"./index.be43aed1.js";import{P as t}from"./Pagination.9ebcfafc.js";import"./Option.662c370a.js";import"./SelectDown.c48bba91.js";import"./contextForm.5ae3f644.js";import"./Tag.033a642a.js";import"./dom.46b1a4a1.js";import"./index.4eedf3c9.js";function l(){const e=a=>{console.log(a)};return s.createElement("div",{className:"demo-page"},s.createElement(t,{total:50,current:1,onChange:e}))}function c(){const e=a=>{alert(a)};return s.createElement("div",{className:"demo-page"},s.createElement(t,{total:5e3,current:1,showJumper:!0,pageSizes:[10,20,30,50],pageSize:10,showTotal:!0,changePageSizes:e}))}function p(){const e=a=>{alert(a)};return s.createElement("div",{className:"demo-page"},s.createElement(t,{total:50,current:1,onChange:e,pageSize:10}))}function j(e){return s.createElement("div",{className:"doc-container md-pc docs-demo"},s.createElement("div",{className:"code-container"},s.createElement("div",{className:"md-code"}),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:""}})),s.createElement("div",{className:"demo-container"},s.createElement("div",{className:"md-demo"},s.createElement("h1",{id:"pagination-\u5206\u9875"},"Pagination \u5206\u9875"),s.createElement("div",{className:"card hide",id:"696EOA"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(l,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Pagination</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">page:number</span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(page)
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-page&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Pagination</span> <span class="hljs-attr">total</span>=<span class="hljs-string">{50}</span> <span class="hljs-attr">current</span>=<span class="hljs-string">{1}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}/</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("696EOA");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"1UJNZ1"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u5176\u4ED6\u9009\u9879\u53C2\u6570">\u5176\u4ED6\u9009\u9879\u53C2\u6570</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(c,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Pagination</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">changePageSizes</span> = (<span class="hljs-params">page: number</span>) =&gt; {
    <span class="hljs-title function_">alert</span>(page)
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-page&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Pagination</span>
      <span class="hljs-attr">total</span>=<span class="hljs-string">{5000}</span>
      <span class="hljs-attr">current</span>=<span class="hljs-string">{1}</span>
      <span class="hljs-attr">showJumper</span>=<span class="hljs-string">{true}</span>
      <span class="hljs-attr">pageSizes</span>=<span class="hljs-string">{[10,</span> <span class="hljs-attr">20</span>, <span class="hljs-attr">30</span>, <span class="hljs-attr">50</span>]}
      <span class="hljs-attr">pageSize</span>=<span class="hljs-string">{10}</span>
      <span class="hljs-attr">showTotal</span>=<span class="hljs-string">{true}</span>
      <span class="hljs-attr">changePageSizes</span>=<span class="hljs-string">{changePageSizes}</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("1UJNZ1");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"3FH2B4"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(p,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Pagination</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">page</span>) =&gt; {
    <span class="hljs-title function_">alert</span>(page)
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-page&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Pagination</span> <span class="hljs-attr">total</span>=<span class="hljs-string">{50}</span> <span class="hljs-attr">current</span>=<span class="hljs-string">{1}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span> <span class="hljs-attr">pageSize</span>=<span class="hljs-string">{10}</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("3FH2B4");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}})))),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:`<h2 id="api">API</h2>
<div class="card"><h3 id="pagination">Pagination</h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>current</td>
<td>number</td>
<td>\u5F53\u524D\u9875\u6570\uFF0C\u652F\u6301v-model</td>
</tr>
<tr>
<td>total</td>
<td>number</td>
<td>\u603B\u6761\u76EE\u6570</td>
</tr>
<tr>
<td>pageSize</td>
<td>number</td>
<td>\u6BCF\u9875\u663E\u793A\u6761\u6570</td>
</tr>
<tr>
<td>pagerCount</td>
<td>number/5</td>
<td>\u9875\u7801\u6309\u94AE\u7684\u6570\u91CF\uFF0C\u5F53\u603B\u9875\u6570\u8D85\u8FC7\u8BE5\u503C\u65F6\u4F1A\u6298\u53E0</td>
</tr>
<tr>
<td>showJumper</td>
<td>boolean/false</td>
<td>\u5FEB\u901F\u8DF3\u8F6C</td>
</tr>
<tr>
<td>pageSizes</td>
<td>number[]</td>
<td>\u6BCF\u9875\u663E\u793A\u4E2A\u6570\u9009\u62E9\u5668\u7684\u9009\u9879\u8BBE\u7F6E</td>
</tr>
<tr>
<td>showTotal</td>
<td>boolean/false</td>
<td>\u663E\u793A\u603B\u8BB0\u5F55\u6761\u6570</td>
</tr>
<tr>
<td>hideSinglePage</td>
<td>boolean/false</td>
<td>\u5F53\u5C0F\u4E8E\u6216\u53EA\u6709\u4E00\u9875\u65F6\u662F\u5426\u9690\u85CF\u663E\u793A</td>
</tr>
<tr>
<td>format</td>
<td>boolean/false</td>
<td>\u6570\u503C\u8F6C\u5343\u5206\u5236\u663E\u793A</td>
</tr>
<tr>
<td>changePageSizes</td>
<td>function(page)</td>
<td>\u6BCF\u9875\u663E\u793A\u6761\u6570\u6539\u53D8\u4E8B\u4EF6</td>
</tr>
<tr>
<td>change</td>
<td>function(page)</td>
<td>\u9875\u7801\u70B9\u51FB\u6539\u53D8\u4E8B\u4EF6</td>
</tr>
</tbody></table>
</div>`}})))}export{j as default};
