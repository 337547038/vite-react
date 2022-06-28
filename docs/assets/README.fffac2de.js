import{R as s}from"./index.efbe83c6.js";import{S as n}from"./Switch.c75c0757.js";import"./contextForm.e282e2fd.js";function t(){const l=a=>{console.log(a)};return s.createElement("div",{className:"switch-demo"},s.createElement(n,{defaultValue:!0,onChange:l}),s.createElement(n,{defaultValue:!1,onChange:l}))}function c(){return s.createElement("div",{className:"switch-demo"},s.createElement(n,{defaultValue:!0,openText:"\u5F00",closeText:"\u5173"}))}function p(){return s.createElement("div",{className:"switch-demo"},s.createElement(n,{defaultValue:!1,disabled:!0}),s.createElement(n,{defaultValue:!0,disabled:!0}))}function u(){return s.createElement("div",{className:"switch-demo"},s.createElement(n,{defaultValue:!1,closeColor:"#999",activeColor:"red"}))}function o(){const l=a=>{console.log(a)};return s.createElement("div",{className:"switch-demo"},s.createElement(n,{defaultValue:!1,closeValue:"a",activeValue:"b",onChange:l}))}function d(){const l=()=>(console.log("\u963B\u6B62\u9009\u62E9"),!1);return s.createElement("div",{className:"switch-demo"},s.createElement(n,{defaultValue:!1,beforeChange:l}))}function r(){return s.createElement("div",{className:"switch-demo"},s.createElement(n,{defaultValue:!0,size:"large"}),s.createElement(n,{defaultValue:!0,size:"normal"}),s.createElement(n,{defaultValue:!0,size:"small"}),s.createElement(n,{defaultValue:!0,size:"mini"}))}function j(l){return s.createElement("div",{className:"doc-container md-pc docs-demo"},s.createElement("div",{className:"code-container"},s.createElement("div",{className:"md-code"}),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:""}})),s.createElement("div",{className:"demo-container"},s.createElement("div",{className:"md-demo"},s.createElement("h1",{id:"switch-\u5F00\u5173"},"Switch \u5F00\u5173"),s.createElement("div",{className:"card hide",id:"BB2HQI"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u57FA\u672C\u7528\u6CD5">\u57FA\u672C\u7528\u6CD5</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(t,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Switch</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./index&quot;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">val: <span class="hljs-built_in">boolean</span>|<span class="hljs-built_in">string</span></span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(val)
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;switch-demo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{false}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("BB2HQI");let e=a.className;a.className.indexOf("show")!==-1?e=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(e=a.className.replace("hide","show")),a.className=e}}))),s.createElement("div",{className:"card hide",id:"EOJ9GI"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u81EA\u5B9A\u663E\u793A\u6587\u672C">\u81EA\u5B9A\u663E\u793A\u6587\u672C</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(c,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Switch</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./index&quot;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;switch-demo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">openText</span>=<span class="hljs-string">&#x27;\u5F00&#x27;</span> <span class="hljs-attr">closeText</span>=<span class="hljs-string">&#x27;\u5173&#x27;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("EOJ9GI");let e=a.className;a.className.indexOf("show")!==-1?e=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(e=a.className.replace("hide","show")),a.className=e}}))),s.createElement("div",{className:"card hide",id:"E26EUC"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u7981\u7528">\u7981\u7528</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(p,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Switch</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./index&quot;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;switch-demo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{false}</span> <span class="hljs-attr">disabled</span>=<span class="hljs-string">{true}</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">disabled</span>=<span class="hljs-string">{true}</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("E26EUC");let e=a.className;a.className.indexOf("show")!==-1?e=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(e=a.className.replace("hide","show")),a.className=e}}))),s.createElement("div",{className:"card hide",id:"EO2J89"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u8BBE\u7F6E\u5F00\u5173\u72B6\u6001\u65F6\u7684\u989C\u8272">\u8BBE\u7F6E\u5F00\u5173\u72B6\u6001\u65F6\u7684\u989C\u8272</h3>
<p><code>closeColor</code>\u8BBE\u7F6E\u5173\u95ED\u72B6\u6001\u989C\u8272\uFF0C<code>activeColor</code>\u8BBE\u7F6E\u6253\u5F00\u72B6\u6001\u989C\u8272</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(u,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Switch</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./index&quot;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;switch-demo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{false}</span> <span class="hljs-attr">closeColor</span>=<span class="hljs-string">&quot;#999&quot;</span> <span class="hljs-attr">activeColor</span>=<span class="hljs-string">&quot;red&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("EO2J89");let e=a.className;a.className.indexOf("show")!==-1?e=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(e=a.className.replace("hide","show")),a.className=e}}))),s.createElement("div",{className:"card hide",id:"137HSW"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u8BBE\u7F6E\u5F00\u5173\u72B6\u6001\u65F6\u7684\u503C">\u8BBE\u7F6E\u5F00\u5173\u72B6\u6001\u65F6\u7684\u503C</h3>
<p><code>closeValue</code>\u8BBE\u7F6E\u5173\u95ED\u72B6\u6001\u65F6\u7684\u503C\uFF0C<code>activeValue</code>\u8BBE\u7F6E\u6253\u5F00\u72B6\u6001\u7684\u503C</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(o,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Switch</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./index&quot;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">val: <span class="hljs-built_in">boolean</span>|<span class="hljs-built_in">string</span></span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(val)
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;switch-demo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{false}</span> <span class="hljs-attr">closeValue</span>=<span class="hljs-string">&quot;a&quot;</span> <span class="hljs-attr">activeValue</span>=<span class="hljs-string">&quot;b&quot;</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("137HSW");let e=a.className;a.className.indexOf("show")!==-1?e=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(e=a.className.replace("hide","show")),a.className=e}}))),s.createElement("div",{className:"card hide",id:"64WTEN"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u5F02\u6B65\u63A7\u5236">\u5F02\u6B65\u63A7\u5236</h3>
<p><code>beforeChange</code>\u5207\u6362\u524D\u4E8B\u4EF6\uFF0C<code>return false</code>\u963B\u6B62\u5207\u6362</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(d,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Switch</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./index&quot;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">beforeChange</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;\u963B\u6B62\u9009\u62E9&#x27;</span>)
    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;switch-demo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{false}</span> <span class="hljs-attr">beforeChange</span>=<span class="hljs-string">{beforeChange}</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("64WTEN");let e=a.className;a.className.indexOf("show")!==-1?e=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(e=a.className.replace("hide","show")),a.className=e}}))),s.createElement("div",{className:"card hide",id:"FYNP5Q"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u5927\u5C0F\u8BBE\u7F6E">\u5927\u5C0F\u8BBE\u7F6E</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(r,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-keyword">Switch</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./index&quot;</span>

function Example() {
  <span class="hljs-keyword">return</span> (&lt;<span class="hljs-keyword">div</span> className=<span class="hljs-string">&quot;switch-demo&quot;</span>&gt;
    &lt;<span class="hljs-keyword">Switch</span> defaultValue={<span class="hljs-keyword">true</span>} <span class="hljs-keyword">size</span>=<span class="hljs-string">&#x27;large&#x27;</span>/&gt;
    &lt;<span class="hljs-keyword">Switch</span> defaultValue={<span class="hljs-keyword">true</span>} <span class="hljs-keyword">size</span>=<span class="hljs-string">&#x27;normal&#x27;</span>/&gt;
    &lt;<span class="hljs-keyword">Switch</span> defaultValue={<span class="hljs-keyword">true</span>} <span class="hljs-keyword">size</span>=<span class="hljs-string">&#x27;small&#x27;</span>/&gt;
    &lt;<span class="hljs-keyword">Switch</span> defaultValue={<span class="hljs-keyword">true</span>} <span class="hljs-keyword">size</span>=<span class="hljs-string">&#x27;mini&#x27;</span>/&gt;
  &lt;/<span class="hljs-keyword">div</span>&gt;)
}

export <span class="hljs-keyword">default</span> Example
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("FYNP5Q");let e=a.className;a.className.indexOf("show")!==-1?e=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(e=a.className.replace("hide","show")),a.className=e}})))),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:`<h2 id="api">API</h2>
<div class="card"><h3 id="switch">Switch</h3>
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
<td>boolean/false</td>
<td>\u6307\u5B9A\u5F53\u524D\u662F\u5426\u9009\u4E2D</td>
</tr>
<tr>
<td>disabled</td>
<td>boolean/false</td>
<td>\u662F\u5426\u7981\u7528\u72B6\u6001</td>
</tr>
<tr>
<td>closeColor</td>
<td>String</td>
<td>\u8BBE\u7F6E\u5173\u95ED\u65F6\u989C\u8272\u503C</td>
</tr>
<tr>
<td>activeColor</td>
<td>String</td>
<td>\u8BBE\u7F6E\u6253\u5F00\u65F6\u989C\u8272\u503C</td>
</tr>
<tr>
<td>closeValue</td>
<td>String</td>
<td>\u8BBE\u7F6E\u5173\u95ED\u72B6\u6001\u65F6\u7684\u503C</td>
</tr>
<tr>
<td>activeValue</td>
<td>String</td>
<td>\u8BBE\u7F6E\u6253\u5F00\u72B6\u6001\u65F6\u7684\u503C</td>
</tr>
<tr>
<td>beforeChange</td>
<td>Function</td>
<td>\u9009\u9879\u6539\u53D8\u524D\u4E8B\u4EF6,return false\u963B\u6B62\u9009\u62E9</td>
</tr>
<tr>
<td>onChange</td>
<td>function(val)</td>
<td>\u6539\u53D8\u4E8B\u4EF6</td>
</tr>
<tr>
<td>openText</td>
<td>React.node</td>
<td>\u81EA\u5B9A\u4E49\u663E\u793A\u6253\u5F00\u65F6\u7684\u5185\u5BB9</td>
</tr>
<tr>
<td>closeText</td>
<td>React.node</td>
<td>\u81EA\u5B9A\u4E49\u663E\u793A\u5173\u95ED\u65F6\u7684\u5185\u5BB9</td>
</tr>
<tr>
<td>size</td>
<td>String</td>
<td>\u5927\u5C0F\u5C3A\u5BF8\uFF0C\u652F\u6301 <code>large</code>\u3001<code>normal</code>\u3001<code>small</code>\u3001<code>mini</code> \u56DB\u79CD\u5C3A\u5BF8\uFF0C\u9ED8\u8BA4\u4E3A <code>normal</code></td>
</tr>
</tbody></table>
</div>`}})))}export{j as default};
