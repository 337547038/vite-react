import{R as s,r as u}from"./index.efbe83c6.js";import{B as e}from"./Button.fb1c51da.js";import{D as p}from"./Dialog.31b9d18f.js";import"./contextForm.e282e2fd.js";import"./dom.46b1a4a1.js";function g(){const[l,a]=u.exports.useState(!1),n=()=>{a(!0)},t=()=>{a(!1)};return s.createElement("div",{className:"demo-dialog"},s.createElement(e,{onClick:n,type:"primary"},"open dialog"),s.createElement(p,{title:"title",visible:l,onClose:t},s.createElement("p",null,"\u7A97\u53E3\u5185\u5BB9\uFF0C\u53EF\u5305\u542B\u4EFB\u4F55\u5185\u5BB9"),s.createElement("p",null,"\u5C31\u662F\u6837\u5F0F\u4E11\u4E86\u70B9\u70B9")))}function F(){const[l,a]=u.exports.useState(!1),n=()=>{a(!0)},t=()=>{a(!1)};return s.createElement("div",{className:"demo-dialog"},s.createElement(e,{onClick:n,type:"primary"},"open dialog"),s.createElement(p,{visible:l,onClose:t},s.createElement("p",null,"\u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u8BBE\u7F6E\u6807\u9898\u7684dialog"),s.createElement("p",null,"\u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u8BBE\u7F6E\u6807\u9898\u7684dialog"),s.createElement("p",null,"\u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u8BBE\u7F6E\u6807\u9898\u7684dialog"),s.createElement("p",null,"\u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u8BBE\u7F6E\u6807\u9898\u7684dialog"),s.createElement("p",null,"\u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u8BBE\u7F6E\u6807\u9898\u7684dialog")))}function B(){const[l,a]=u.exports.useState(!1),n=()=>{a(!0)},t=()=>{a(!1)};return s.createElement("div",{className:"demo-dialog"},s.createElement(e,{onClick:n,type:"primary"},"open dialog"),s.createElement(p,{title:"title",visible:l,width:"400px",height:"200px",onClose:t},s.createElement("p",null,"\u8BBE\u7F6E\u4E86\u5BBD\u9AD8\u7684 dialog \u5F39\u7A97\uFF0C\u8BBE\u5B9A\u4E86\u9AD8\u65F6\uFF0C\u5185\u5BB9\u6EA2\u51FA\u5C06\u663E\u793A\u7EB5\u5411\u6EDA\u52A8\u6761"),s.createElement("p",{style:{height:"200px"}}),s.createElement("p",null,"\u8BBE\u7F6E\u4E86\u5BBD\u9AD8\u7684 dialog \u5F39\u7A97\uFF0C\u8BBE\u5B9A\u4E86\u9AD8\u65F6\uFF0C\u5185\u5BB9\u6EA2\u51FA\u5C06\u663E\u793A\u7EB5\u5411\u6EDA\u52A8\u6761")))}function C(){const[l,a]=u.exports.useState(!1),[n,t]=u.exports.useState(!1),[o,r]=u.exports.useState(!1),h=()=>{a(!0)},d=()=>{t(!0)},j=()=>{r(!0)},m=c=>{alert("\u786E\u8BA4\u5173\u95ED"),c()},E=(c,f)=>{alert("\u4F60\u70B9\u51FB\u4E86"+c+"\uFF0C\u53EF\u4F7F\u7528return true\u6216\u4F7F\u7528close\u65B9\u6CD5\u53EF\u5173\u95ED")},i=c=>{switch(c){case 1:a(!1);break;case 2:t(!1);break;case 3:r(!1);break}};return s.createElement("div",{className:"demo-dialog"},s.createElement(e,{onClick:h,type:"primary"},"\u6DFB\u52A0\u786E\u8BA4\u548C\u53D6\u6D88\u6309\u94AE"),s.createElement(e,{onClick:d,type:"primary"},"\u7ED1\u5B9Acallback\u65B9\u6CD5"),s.createElement(e,{onClick:j,type:"primary"},"\u7ED1\u5B9AbeforeClose\u65B9\u6CD5"),s.createElement(p,{onClose:()=>i(1),visible:l,confirm:"confirm",cancel:"cancel"},s.createElement("p",null,"\u8FD9\u662F\u6309\u94AE\u7684 dialog \u5F39\u7A97\u5185\u5BB9"),s.createElement("p",null,"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u70B9\u51FB\u6309\u94AE\u540E\u5C06\u5173\u95ED\u7A97\u53E3")),s.createElement(p,{onClose:()=>i(2),visible:n,confirm:"confirm",cancel:"cancel",callback:m},s.createElement("p",null,"\u7ED1\u5B9Acallback\u65B9\u6CD5\u540E\uFF0C\u70B9\u51FB\u786E\u5B9A\u4E0D\u4F1A\u5173\u95ED\u5F39\u7A97\uFF0C\u53EF\u4F7F\u7528\u56DE\u8C03\u65B9\u6CD5\u624B\u52A8\u5173\u95ED")),s.createElement(p,{onClose:()=>i(3),visible:o,confirm:"confirm",cancel:"cancel",beforeClose:E},s.createElement("p",null,"\u7ED1\u5B9Acallback\u65B9\u6CD5\u540E\uFF0C\u70B9\u51FB\u786E\u5B9A\u4E0D\u4F1A\u5173\u95ED\u5F39\u7A97\uFF0C\u53EF\u4F7F\u7528\u56DE\u8C03\u65B9\u6CD5\u624B\u52A8\u5173\u95ED")))}function A(){const[l,a]=u.exports.useState(!1),n=()=>{a(!0)},t=()=>{a(!1)};return s.createElement("div",{className:"demo-dialog"},s.createElement(e,{onClick:n,type:"primary"},"open dialog"),s.createElement(p,{title:"title",visible:l,autoClose:10,onClose:t},s.createElement("p",null,"\u8FD9\u662F\u7684 dialog \u5F39\u7A97\u5185\u5BB9"),s.createElement("p",null,"\u8FD9\u662F\u4E00\u4E2A\u4F1A\u81EA\u52A8\u5173\u95ED\u7684\u5F39\u7A97")))}function D(){const[l,a]=u.exports.useState(!1),n=()=>{a(!0)},t=()=>{a(!1)},o=s.createElement("div",null,s.createElement(e,null,"\u53D6\u6D88"),s.createElement(e,{type:"primary"},"\u786E\u5B9A"),s.createElement(e,{type:"primary"},"\u63D0\u4EA4"));return s.createElement("div",{className:"demo-dialog"},s.createElement(e,{onClick:n},"open dialog"),s.createElement(p,{title:"title",visible:l,footer:o,onClose:t},s.createElement("p",null,"\u8FD9\u662F\u7684 dialog \u5F39\u7A97\u5185\u5BB9"),s.createElement("p",null)))}function k(){const[l,a]=u.exports.useState(!1),n=()=>{a(!0)},t=()=>{a(!1)};return s.createElement("div",{className:"demo-dialog"},s.createElement(e,{onClick:n,type:"primary"},"open dialog"),s.createElement(p,{title:"title",visible:l,move:!0,onClose:t},s.createElement("p",null,"\u8FD9\u662F\u7684 dialog \u5F39\u7A97\u5185\u5BB9"),s.createElement("p",null,"\u53EF\u901A\u8FC7\u70B9\u51FB\u6807\u9898\u680F\u79FB\u52A8\u7A97\u53E3\u4F4D\u7F6E")))}function v(l){return s.createElement("div",{className:"doc-container md-pc docs-demo"},s.createElement("div",{className:"code-container"},s.createElement("div",{className:"md-code"}),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:""}})),s.createElement("div",{className:"demo-container"},s.createElement("div",{className:"md-demo"},s.createElement("h1",{id:"dialog-\u5F39\u5C42\u5BF9\u8BDD\u6846"},"Dialog \u5F39\u5C42\u5BF9\u8BDD\u6846"),s.createElement("div",{className:"card hide",id:"CP98DD"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u57FA\u672C\u7528\u6CD5">\u57FA\u672C\u7528\u6CD5</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(g,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {useState} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Button</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../button&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Dialog</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [visible, setVisible] = useState&lt;boolean&gt;(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClick</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-title function_">setVisible</span>(<span class="hljs-literal">true</span>)
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClose</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-title function_">setVisible</span>(<span class="hljs-literal">false</span>)
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-dialog&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{onClick}</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&#x27;primary&#x27;</span>&gt;</span>open dialog<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">visible</span>=<span class="hljs-string">{visible}</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{onClose}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u7A97\u53E3\u5185\u5BB9\uFF0C\u53EF\u5305\u542B\u4EFB\u4F55\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u5C31\u662F\u6837\u5F0F\u4E11\u4E86\u70B9\u70B9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Dialog</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("CP98DD");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"33MV92"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u6807\u9898\u8BBE\u7F6E">\u6807\u9898\u8BBE\u7F6E</h3>
<p>\u6807\u9898\u53EF\u8BBE\u7F6E\uFF0C\u4EE5\u6EE1\u8DB3\u5404\u79CD\u4E0D\u540C\u7684\u4F7F\u7528\u73AF\u5883</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(F,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {useState} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Button</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../button&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Dialog</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [visible, setVisible] = useState &lt; boolean &gt; (<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClick</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-title function_">setVisible</span>(<span class="hljs-literal">true</span>)
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClose</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-title function_">setVisible</span>(<span class="hljs-literal">false</span>)
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-dialog&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{onClick}</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&#x27;primary&#x27;</span>&gt;</span>open dialog<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span> <span class="hljs-attr">visible</span>=<span class="hljs-string">{visible}</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{onClose}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u8BBE\u7F6E\u6807\u9898\u7684dialog<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u8BBE\u7F6E\u6807\u9898\u7684dialog<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u8BBE\u7F6E\u6807\u9898\u7684dialog<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u8BBE\u7F6E\u6807\u9898\u7684dialog<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u8BBE\u7F6E\u6807\u9898\u7684dialog<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Dialog</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("33MV92");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"BY9OW2"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u8BBE\u5B9A\u7A97\u5BBD\u9AD8">\u8BBE\u5B9A\u7A97\u5BBD\u9AD8</h3>
<p>\u4E00\u822C\u60C5\u51B5\u4E0D\u9700\u8981\u8BBE<code>height</code>\uFF0C\u8FD9\u4E2A\u9AD8\u662F\u6307\u5F39\u7A97\u4E3B\u4F53\u5185\u5BB9\u7684\u9AD8\uFF0C\u9002\u7528\u4E8E\u5F39\u7A97\u5185\u5BB9\u533A\u9700\u8981\u6EDA\u52A8\u7684\u65F6\u5019</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(B,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {useState} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Button</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../button&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Dialog</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [visible, setVisible] = useState &lt; boolean &gt; (<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClick</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-title function_">setVisible</span>(<span class="hljs-literal">true</span>)
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClose</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-title function_">setVisible</span>(<span class="hljs-literal">false</span>)
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-dialog&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{onClick}</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&#x27;primary&#x27;</span>&gt;</span>open dialog<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&#x27;title&#x27;</span> <span class="hljs-attr">visible</span>=<span class="hljs-string">{visible}</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;400px&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;200px&quot;</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{onClose}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u8BBE\u7F6E\u4E86\u5BBD\u9AD8\u7684 dialog \u5F39\u7A97\uFF0C\u8BBE\u5B9A\u4E86\u9AD8\u65F6\uFF0C\u5185\u5BB9\u6EA2\u51FA\u5C06\u663E\u793A\u7EB5\u5411\u6EDA\u52A8\u6761<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{height:</span> &#x27;<span class="hljs-attr">200px</span>&#x27;}}/&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u8BBE\u7F6E\u4E86\u5BBD\u9AD8\u7684 dialog \u5F39\u7A97\uFF0C\u8BBE\u5B9A\u4E86\u9AD8\u65F6\uFF0C\u5185\u5BB9\u6EA2\u51FA\u5C06\u663E\u793A\u7EB5\u5411\u6EDA\u52A8\u6761<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Dialog</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("BY9OW2");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"7NSJT1"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u6309\u94AE\u4E8B\u4EF6">\u6309\u94AE\u4E8B\u4EF6</h3>
<p>\u9ED8\u8BA4\u4E0B\u70B9\u51FB\u6309\u94AE\u662F\u5173\u95ED\u5F39\u7A97\u53E3\u7684\uFF0C\u53EF\u901A\u8FC7<code>beforeClose</code>\u63A5\u6536\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u6839\u636E\u5B9E\u73B0\u6309\u9700\u5173\u95ED\u3002<code>callback</code>\u540C<code>beforeClose</code>\uFF0C<code>callback</code>\u53EA\u9488\u5BF9\u786E\u8BA4\u4E8B\u4EF6\u3002<code>beforeClose </code>\u5B83\u5C06\u4F1A\u963B\u6B62\u7A97\u53E3\u7684\u5173\u95ED\u4E8B\u4EF6\uFF0C\u9700\u53E6\u5916\u8C03\u7528\u65B9\u6CD5\u5173\u95ED</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(C,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {useState} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Button</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../button&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Dialog</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [visible, setVisible] = useState&lt;<span class="hljs-built_in">boolean</span>&gt;(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> [visible2, setVisible2] = useState&lt;<span class="hljs-built_in">boolean</span>&gt;(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> [visible3, setVisible3] = useState&lt;<span class="hljs-built_in">boolean</span>&gt;(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClick</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-title function_">setVisible</span>(<span class="hljs-literal">true</span>)
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClick2</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-title function_">setVisible2</span>(<span class="hljs-literal">true</span>)
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClick3</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-title function_">setVisible3</span>(<span class="hljs-literal">true</span>)
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">callback</span> = (<span class="hljs-params">close: () =&gt; <span class="hljs-built_in">void</span></span>) =&gt; {
    <span class="hljs-title function_">alert</span>(<span class="hljs-string">&#x27;\u786E\u8BA4\u5173\u95ED&#x27;</span>)
    <span class="hljs-title function_">close</span>()
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">beforeClose</span> = (<span class="hljs-params"><span class="hljs-keyword">type</span>: <span class="hljs-built_in">string</span>, close: () =&gt; <span class="hljs-built_in">void</span></span>) =&gt; {
    <span class="hljs-title function_">alert</span>(<span class="hljs-string">&#x27;\u4F60\u70B9\u51FB\u4E86&#x27;</span> + <span class="hljs-keyword">type</span> + <span class="hljs-string">&#x27;\uFF0C\u53EF\u4F7F\u7528return true\u6216\u4F7F\u7528close\u65B9\u6CD5\u53EF\u5173\u95ED&#x27;</span>)
    <span class="hljs-comment">// return true</span>
    <span class="hljs-comment">// close()</span>
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClose</span> = (<span class="hljs-params">index: <span class="hljs-built_in">number</span></span>) =&gt; {
    <span class="hljs-keyword">switch</span> (index) {
      <span class="hljs-keyword">case</span> <span class="hljs-number">1</span>:
        <span class="hljs-title function_">setVisible</span>(<span class="hljs-literal">false</span>)
        <span class="hljs-keyword">break</span>
      <span class="hljs-keyword">case</span> <span class="hljs-number">2</span>:
        <span class="hljs-title function_">setVisible2</span>(<span class="hljs-literal">false</span>)
        <span class="hljs-keyword">break</span>
      <span class="hljs-keyword">case</span> <span class="hljs-number">3</span>:
        <span class="hljs-title function_">setVisible3</span>(<span class="hljs-literal">false</span>)
        <span class="hljs-keyword">break</span>
    }
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-dialog&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{onClick}</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&#x27;primary&#x27;</span>&gt;</span>\u6DFB\u52A0\u786E\u8BA4\u548C\u53D6\u6D88\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{onClick2}</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&#x27;primary&#x27;</span>&gt;</span>\u7ED1\u5B9Acallback\u65B9\u6CD5<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{onClick3}</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&#x27;primary&#x27;</span>&gt;</span>\u7ED1\u5B9AbeforeClose\u65B9\u6CD5<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span>
      <span class="hljs-attr">onClose</span>=<span class="hljs-string">{()</span> =&gt;</span> onClose(1)}
      visible={visible}
      confirm=&#x27;confirm&#x27;
      cancel=&#x27;cancel&#x27;&gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u8FD9\u662F\u6309\u94AE\u7684 dialog \u5F39\u7A97\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u70B9\u51FB\u6309\u94AE\u540E\u5C06\u5173\u95ED\u7A97\u53E3<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Dialog</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span>
      <span class="hljs-attr">onClose</span>=<span class="hljs-string">{()</span> =&gt;</span> onClose(2)}
      visible={visible2}
      confirm=&#x27;confirm&#x27;
      cancel=&#x27;cancel&#x27;
      callback={callback}&gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u7ED1\u5B9Acallback\u65B9\u6CD5\u540E\uFF0C\u70B9\u51FB\u786E\u5B9A\u4E0D\u4F1A\u5173\u95ED\u5F39\u7A97\uFF0C\u53EF\u4F7F\u7528\u56DE\u8C03\u65B9\u6CD5\u624B\u52A8\u5173\u95ED<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Dialog</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span>
      <span class="hljs-attr">onClose</span>=<span class="hljs-string">{()</span> =&gt;</span> onClose(3)}
      visible={visible3}
      confirm=&#x27;confirm&#x27;
      cancel=&#x27;cancel&#x27;
      beforeClose={beforeClose}&gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u7ED1\u5B9Acallback\u65B9\u6CD5\u540E\uFF0C\u70B9\u51FB\u786E\u5B9A\u4E0D\u4F1A\u5173\u95ED\u5F39\u7A97\uFF0C\u53EF\u4F7F\u7528\u56DE\u8C03\u65B9\u6CD5\u624B\u52A8\u5173\u95ED<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Dialog</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("7NSJT1");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"78Q8YN"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u81EA\u52A8\u5173\u95ED">\u81EA\u52A8\u5173\u95ED</h3>
<p>\u901A\u8FC7\u8BBE\u5B9A<code>autoClose</code>\u8BBE\u7F6E\u5173\u95ED\u65F6\u95F4\uFF0C\u53EF\u81EA\u52A8\u5173\u95ED\u7A97\u3002\u540C\u65F6\u53EF\u4F7F\u7528<code>closeTips</code>\u4FEE\u6539\u5012\u8BA1\u65F6\u63D0\u793A\u8BED</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(A,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {useState} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Button</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../button&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Dialog</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [visible, setVisible] = useState &lt; boolean &gt; (<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClick</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-title function_">setVisible</span>(<span class="hljs-literal">true</span>)
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClose</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-title function_">setVisible</span>(<span class="hljs-literal">false</span>)
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-dialog&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{onClick}</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&#x27;primary&#x27;</span>&gt;</span>open dialog<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">visible</span>=<span class="hljs-string">{visible}</span> <span class="hljs-attr">autoClose</span>=<span class="hljs-string">{10}</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{onClose}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u8FD9\u662F\u7684 dialog \u5F39\u7A97\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u8FD9\u662F\u4E00\u4E2A\u4F1A\u81EA\u52A8\u5173\u95ED\u7684\u5F39\u7A97<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Dialog</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("78Q8YN");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"FB2WS6"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="footer\u81EA\u5B9A\u6309\u94AE">footer\u81EA\u5B9A\u6309\u94AE</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(D,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {useState} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Button</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../button&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Dialog</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [visible, setVisible] = useState &lt; boolean &gt; (<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClick</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-title function_">setVisible</span>(<span class="hljs-literal">true</span>)
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClose</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-title function_">setVisible</span>(<span class="hljs-literal">false</span>)
  }
  <span class="hljs-keyword">const</span> footer = (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>&gt;</span>\u53D6\u6D88<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u786E\u5B9A<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-dialog&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{onClick}</span>&gt;</span>open dialog<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">visible</span>=<span class="hljs-string">{visible}</span> <span class="hljs-attr">footer</span>=<span class="hljs-string">{footer}</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{onClose}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u8FD9\u662F\u7684 dialog \u5F39\u7A97\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Dialog</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("FB2WS6");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"BSFQHS"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u53EF\u62D6\u52A8">\u53EF\u62D6\u52A8</h3>
<p>\u901A\u8FC7\u8BBE\u7F6E<code>move=&quot;true&quot;</code>\u53EF\u62D6\u52A8\u6539\u53D8\u7A97\u53E3\u4F4D\u7F6E</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(k,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {useState} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Button</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../button&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Dialog</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [visible, setVisible] = useState &lt; boolean &gt; (<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClick</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-title function_">setVisible</span>(<span class="hljs-literal">true</span>)
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClose</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-title function_">setVisible</span>(<span class="hljs-literal">false</span>)
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-dialog&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{onClick}</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&#x27;primary&#x27;</span>&gt;</span>open dialog<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">visible</span>=<span class="hljs-string">{visible}</span> <span class="hljs-attr">move</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{onClose}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u8FD9\u662F\u7684 dialog \u5F39\u7A97\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u53EF\u901A\u8FC7\u70B9\u51FB\u6807\u9898\u680F\u79FB\u52A8\u7A97\u53E3\u4F4D\u7F6E<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Dialog</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("BSFQHS");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}})))),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:`<h2 id="api">API</h2>
<div class="card"><h3 id="dialog">Dialog</h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>visible</td>
<td>boolean/false</td>
<td>\u663E\u793A\u9690\u85CF Dialog</td>
</tr>
<tr>
<td>title</td>
<td>string</td>
<td>Dialog \u7684\u6807\u9898\uFF0C\u4E5F\u53EF\u901A\u8FC7\u5177\u540D slot \u65B9\u5F0F</td>
</tr>
<tr>
<td>content</td>
<td>ReactNode/string</td>
<td>Dialog \u7684\u5185\u5BB9</td>
</tr>
<tr>
<td>width</td>
<td>string</td>
<td>Dialog \u7684\u5BBD\u5EA6</td>
</tr>
<tr>
<td>height</td>
<td>string</td>
<td>Dialog \u7684\u9AD8\u5EA6\uFF0C\u8FD9\u91CC\u662F\u6307\u5F39\u7A97\u5185\u5BB9\u533A\u57DF\u7684\u9AD8\u5EA6\uFF0C\u6EA2\u51FA\u65F6\u663E\u793A\u6EDA\u52A8\u6761\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u4E0D\u9700\u8981\u8BBE\u7F6E</td>
</tr>
<tr>
<td>top</td>
<td>string</td>
<td>Dialog \u8DDD\u79BB\u6D4F\u89C8\u5668\u9876\u90E8\u7684\u8DDD\u79BB\uFF0C\u8BBE\u7F6E\u4E86<code>center</code>\u540E\u6837\u5F0F\u4F1A\u88AB\u8986\u76D6</td>
</tr>
<tr>
<td>className</td>
<td>string</td>
<td>Dialog \u6837\u5F0F\u540D</td>
</tr>
<tr>
<td>confirm</td>
<td>string</td>
<td>\u786E\u8BA4\u6309\u94AE\uFF0C\u70B9\u51FB\u9ED8\u8BA4\u5173\u95ED\u7A97\u53E3</td>
</tr>
<tr>
<td>cancel</td>
<td>string</td>
<td>\u53D6\u6D88\u6309\u94AE\uFF0C\u70B9\u51FB\u9ED8\u8BA4\u5173\u95ED\u7A97\u53E3</td>
</tr>
<tr>
<td>beforeClose</td>
<td>function</td>
<td>\u5173\u95ED\u524D\u7684\u56DE\u8C03\uFF0C\u4F1A\u963B\u6B62 Dialog \u7684\u5173\u95ED\u3002function(type,close),type=close/confirm/cancel/modal \u8868\u793A\u70B9\u4E86\u54EA\u91CC\u5173\u95ED\uFF0Cclose \u65B9\u6CD5\u7528\u4E8E\u5173\u95ED Dialog</td>
</tr>
<tr>
<td>callback</td>
<td>function</td>
<td>\u786E\u5B9A\u56DE\u8C03\u6BD4\u8F83\u5E38\u7528\u800C\u6DFB\u52A0\uFF0C\u540C<code>beforeClose</code>\uFF0C\u76F8\u5F53\u4E8Etype=confirm\uFF0C\u51CF\u5C11\u5BF9type\u7684\u5224\u65AD\u3002\u6839\u636E\u9700\u6C42\u548C<code>beforeClose</code>\u4E8C\u9009\u4E00\u4F7F\u7528</td>
</tr>
<tr>
<td>modal</td>
<td>boolean/true</td>
<td>\u662F\u5426\u9700\u8981\u906E\u7F69\u5C42</td>
</tr>
<tr>
<td>closeModal</td>
<td>boolean/true</td>
<td>\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB modal \u5173\u95ED Dialog</td>
</tr>
<tr>
<td>appendToBody</td>
<td>boolean/true</td>
<td>Dialog \u81EA\u8EAB\u662F\u5426\u63D2\u5165\u81F3 body \u5143\u7D20\u4E0A</td>
</tr>
<tr>
<td>lockScroll</td>
<td>boolean/true</td>
<td>\u662F\u5426\u5728 Dialog \u51FA\u73B0\u65F6\u5C06 body \u6EDA\u52A8\u9501\u5B9A</td>
</tr>
<tr>
<td>showClose</td>
<td>boolean/true</td>
<td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE\uFF0C\u70B9\u51FB\u9ED8\u8BA4\u5173\u95ED\u7A97\u53E3</td>
</tr>
<tr>
<td>move</td>
<td>boolean/false</td>
<td>\u5141\u8BB8\u62D6\u52A8\u7A97\u53E3</td>
</tr>
<tr>
<td>autoClose</td>
<td>number/0</td>
<td>\u81EA\u52A8\u5173\u95ED\u65F6\u95F4\uFF0C\u5355\u4F4D\u79D2\u30020\u4E3A\u4E0D\u81EA\u52A8\u5173\u95ED</td>
</tr>
<tr>
<td>closeTips</td>
<td>string</td>
<td>\u81EA\u52A8\u5173\u95ED\u5012\u8BA1\u65F6\u63D0\u793A\u8BED\uFF0C\u9ED8\u8BA4<code>S\u79D2\u540E\u81EA\u52A8\u5173\u95ED</code>\u5927\u5199S\u4F1A\u88AB\u66FF\u6362\u6210\u5B9E\u9645\u65F6\u95F4</td>
</tr>
<tr>
<td>animation</td>
<td>string</td>
<td>\u52A8\u753B\u6837\u5F0F\u540D\uFF0C\u53EF\u9009<code>zoom</code>,<code>fade</code> \uFF0C\u5176\u4ED6\u9700\u81EA\u5B9A\u4E49\u6837\u5F0F</td>
</tr>
<tr>
<td>animationDuration</td>
<td>string</td>
<td>\u52A8\u753B\u5B8C\u6210\u4E00\u4E2A\u5468\u671F\u6240\u82B1\u8D39\u65F6\u95F4\u3002\u9ED8\u8BA4\u662F 300</td>
</tr>
<tr>
<td>center</td>
<td>boolean/true</td>
<td>\u5C45\u4E2D\u5BF9\u9F50</td>
</tr>
<tr>
<td>icon</td>
<td>number/0</td>
<td>\u7528\u4E8E\u5C55\u793A\u5E38\u89C1\u7684alert\u63D0\u793A\u663E\u793A\u5BF9\u5E94\u7684icon\u56FE\u6807\uFF0C1\u6210\u529F\uFF0C2\u5931\u8D25\uFF0C3\u63D0\u793A\uFF0C4\u8B66\u544A\u3002\u5176\u5B83\u7684\u53EF\u901A\u8FC7\u6DFB\u52A0\u6837\u5F0F\u63A7\u5236</td>
</tr>
<tr>
<td>zIndex</td>
<td>number</td>
<td>\u5F39\u5C42\u7684z-index\u6837\u5F0F</td>
</tr>
<tr>
<td>title</td>
<td>ReactNode</td>
<td>\u6807\u9898</td>
</tr>
<tr>
<td>footer</td>
<td>ReactNode</td>
<td>\u5C3E\u90E8\u5185\u5BB9</td>
</tr>
<tr>
<td>onClose</td>
<td>function</td>
<td>\u5173\u95ED\u56DE\u8C03\u4E8B\u4EF6\uFF0C\u7528\u4E8E\u66F4\u65B0\u5F53\u524Dvisible</td>
</tr>
</tbody></table>
</div>`}})))}export{v as default};
