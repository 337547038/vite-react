import{R as s,r}from"./index.085b3e07.js";import{B as o}from"./Button.956930fb.js";import{I as e}from"./Input.fc42faf1.js";import{F as t,a as c}from"./FormItem.59110d5e.js";import"./contextForm.196e79be.js";import"./RadioGroup.d921e07b.js";import"./Group.56288785.js";import"./index.4eedf3c9.js";import"./Option.3107bf8e.js";import"./SelectDown.a490cdb1.js";import"./Tag.f4d6c449.js";import"./dom.0e399110.js";import"./Switch.2f2a76c3.js";import"./Textarea.660e8d99.js";function d(){return s.createElement("div",{className:"form-item-demo"},s.createElement(t,{label:"title"},s.createElement(e,{placeholder:"\u8BF7\u8F93\u5165"})),s.createElement(t,{label:"title"},s.createElement(e,{defaultValue:"value"})))}function h(){const l=[{type:"tips",msg:"\u83B7\u53D6\u7126\u70B9\u63D0\u793A\u4FE1\u606F"},{type:"required",msg:"\u5FC5\u586B\u9879"},{type:"number",msg:"\u53EA\u80FD\u8F93\u5165\u6570\u5B57"}];return s.createElement("div",{className:"form-item-demo"},s.createElement(t,{label:"title",rules:l},s.createElement(e,{placeholder:"\u8BF7\u8F93\u5165"})),s.createElement(t,{label:"title",rules:l,trigger:"blur"},s.createElement(e,{placeholder:"\u5931\u53BB\u7126\u70B9\u6821\u9A8C"})))}function m(){const l=[{type:"tips",msg:"\u83B7\u53D6\u7126\u70B9\u63D0\u793A\u4FE1\u606F"},{type:"required",msg:"\u5FC5\u586B\u9879"},{type:"number",msg:"\u53EA\u80FD\u8F93\u5165\u6570\u5B57"}];return s.createElement("div",{className:"form-item-demo"},s.createElement(t,{label:"title",verify:"mobile"},s.createElement(e,{placeholder:"\u624B\u673A\u53F7\u9A8C\u8BC1"})),s.createElement(t,{label:"tel",rules:l,verify:"mobile"},s.createElement(e,{placeholder:"\u624B\u673A\u53F7\u548C\u5FC5\u586B\u9A8C\u8BC1"})))}function i(){const l=[{type:"required",msg:"\u5E74\u9F84\u4E0D\u80FD\u4E3A\u7A7A"},{type:"rule",msg:"\u5E74\u9F84\u5FC5\u987B\u5927\u4E8E1\u5C81\uFF0C\u4E14\u4E0D\u80FD\u8D85\u8FC7120\u5C81",rule:"/^(?:[1-9][0-9]?|1[01][0-9]|120)$/"}],a=r.exports.useRef(null),n=()=>{var u;(u=a.current)==null||u.validate().then(p=>{console.log(p)}).catch(p=>{console.log(p)})};return s.createElement("div",{className:"form-item-demo"},s.createElement(t,{label:"title",rules:l,ref:a},s.createElement(e,{placeholder:"\u8BF7\u8F93\u5165\u5E74\u9F84"})),s.createElement(o,{onClick:n},"submit"))}function j(){const[l,a]=r.exports.useState(""),n=[{type:"required",msg:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"},{type:"fn",msg:"\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4",validator:p=>p===l}],u=p=>{a(p)};return s.createElement("div",{className:"form-item-demo"},s.createElement(t,{label:"password",verify:"required"},s.createElement(e,{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",onChange:u})),s.createElement(t,{label:"password",rules:n},s.createElement(e,{placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"})))}function g(){const l={defaultValue:"abc"},a={defaultValue:"112",options:[{label:"\u9009\u98791",value:"1"}],placeholder:"\u8BF7\u9009\u62E912"},n=u=>{console.log(u)};return s.createElement("div",{className:"form-item-demo"},s.createElement(t,{label:"input",type:"input",data:l,onChange:n}),s.createElement(t,{label:"select",type:"select",data:a}))}function F(){const l={defaultValue:"abc"},a={defaultValue:"1",options:[{label:"\u9009\u98791",value:"1"}],placeholder:"\u8BF7\u9009\u62E9"},n=u=>{console.log(u)};return s.createElement("div",{className:"form-item-demo"},s.createElement(c,{type:"input",data:l,onChange:n}),s.createElement(c,{type:"select",data:a}))}function _(l){return s.createElement("div",{className:"doc-container md-pc docs-demo"},s.createElement("div",{className:"code-container"},s.createElement("div",{className:"md-code"}),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:""}})),s.createElement("div",{className:"demo-container"},s.createElement("div",{className:"md-demo"},s.createElement("h1",{id:"formitem-\u8868\u5355\u96C6\u5408"},"FormItem \u8868\u5355\u96C6\u5408"),s.createElement("p",null,"\u5F3A\u5927\u7684\u6821\u9A8C\u529F\u80FD\uFF0C\u4F7F\u7528\u7B80\u5355\u5FEB\u6377"),s.createElement("div",{className:"card hide",id:"9FKMTM"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u57FA\u672C\u4F7F\u7528">\u57FA\u672C\u4F7F\u7528</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(d,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">FormItem</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Input</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../input&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;form-item-demo&#x27;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("9FKMTM");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"F9CDIU"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u6821\u9A8C">\u6821\u9A8C</h3>
<p>\u4F7F\u7528<code>rules</code>\u89C4\u5219\u6821\u9A8C</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(h,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">FormItem</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Input</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../input&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> rules = [
    {<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;tips&#x27;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u83B7\u53D6\u7126\u70B9\u63D0\u793A\u4FE1\u606F&#x27;</span>},
    {<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;required&#x27;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u5FC5\u586B\u9879&#x27;</span>},
    {<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;number&#x27;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u53EA\u80FD\u8F93\u5165\u6570\u5B57&#x27;</span>}
  ]
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;form-item-demo&#x27;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">rules</span>=<span class="hljs-string">{rules}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">rules</span>=<span class="hljs-string">{rules}</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">&quot;blur&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u5931\u53BB\u7126\u70B9\u6821\u9A8C&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("F9CDIU");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"9D0L9I"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u5FEB\u901F\u6821\u9A8C">\u5FEB\u901F\u6821\u9A8C</h3>
<p>\u5BF9\u4E8E\u5927\u91CF\u7684\u8868\u5355\u9A8C\u8BC1\u4E0D\u9700\u8981\u7CBE\u786E\u63D0\u793A\u65F6\uFF0C\u5982\u9A8C\u8BC1\u4E3A\u7A7A\u65F6\u7EDF\u4E00\u63D0\u793A\u4E3A\u5FC5\u586B\u5B57\u6BB5\uFF0C\u53EF\u901A\u8FC7\u8BBE\u7F6E<code>verify</code>\uFF0C\u591A\u4E2A\u7528\u9017\u53F7\u9694\u5F00\uFF0C\u4E5F\u53EF\u540C\u65F6\u548C<code>rules</code>\u89C4\u5219\u6821\u9A8C\u4E00\u8D77\u4F7F\u7528</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(m,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">FormItem</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Input</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../input&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> rules = [
    {<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;tips&#x27;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u83B7\u53D6\u7126\u70B9\u63D0\u793A\u4FE1\u606F&#x27;</span>},
    {<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;required&#x27;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u5FC5\u586B\u9879&#x27;</span>},
    {<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;number&#x27;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u53EA\u80FD\u8F93\u5165\u6570\u5B57&#x27;</span>}
  ]
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;form-item-demo&#x27;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">verify</span>=<span class="hljs-string">&quot;mobile&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u624B\u673A\u53F7\u9A8C\u8BC1&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tel&quot;</span> <span class="hljs-attr">rules</span>=<span class="hljs-string">{rules}</span> <span class="hljs-attr">verify</span>=<span class="hljs-string">&quot;mobile&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u624B\u673A\u53F7\u548C\u5FC5\u586B\u9A8C\u8BC1&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("9D0L9I");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"AIGN2I"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u89C4\u5219">\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u89C4\u5219</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(i,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {useRef} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">FormItem</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Input</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../input&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Button</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../button&#x27;</span>
<span class="hljs-keyword">import</span> type {<span class="hljs-title class_">FormItemRef</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../formItem&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> rules = [
    {<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;required&#x27;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u5E74\u9F84\u4E0D\u80FD\u4E3A\u7A7A&#x27;</span>},
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;rule&#x27;</span>,
      <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u5E74\u9F84\u5FC5\u987B\u5927\u4E8E1\u5C81\uFF0C\u4E14\u4E0D\u80FD\u8D85\u8FC7120\u5C81&#x27;</span>,
      <span class="hljs-attr">rule</span>: <span class="hljs-string">&#x27;/^(?:[1-9][0-9]?|1[01][0-9]|120)$/&#x27;</span>
    }
  ]
  <span class="hljs-keyword">const</span> formItemRef = useRef &lt; <span class="hljs-title class_">FormItemRef</span> &gt; (<span class="hljs-literal">null</span>)
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">submit</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-comment">// console.log(formItemRef.current)</span>
    formItemRef.<span class="hljs-property">current</span>?.<span class="hljs-title function_">validate</span>()
      .<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(res)
      })
      .<span class="hljs-title function_">catch</span>(<span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(res)
      })
  }
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;form-item-demo&#x27;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">rules</span>=<span class="hljs-string">{rules}</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{formItemRef}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5E74\u9F84&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{submit}</span>&gt;</span>submit<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("AIGN2I");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"DQLYNB"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u56DE\u8C03\u9A8C\u8BC1">\u56DE\u8C03\u9A8C\u8BC1</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(j,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {useState} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">FormItem</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Input</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../input&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [value, setValue] = <span class="hljs-title function_">useState</span>(<span class="hljs-string">&#x27;&#x27;</span>)
  <span class="hljs-keyword">const</span> rules = [
    {<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;required&#x27;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A&#x27;</span>},
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;fn&#x27;</span>,
      <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4&#x27;</span>,
      <span class="hljs-attr">validator</span>: <span class="hljs-function">(<span class="hljs-params">val: <span class="hljs-built_in">string</span></span>) =&gt;</span> {
        <span class="hljs-keyword">return</span> val === value
      }
    }
  ]
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">val: <span class="hljs-built_in">string</span></span>) =&gt; {
    <span class="hljs-title function_">setValue</span>(val)
  }
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;form-item-demo&#x27;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">verify</span>=<span class="hljs-string">&quot;required&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5BC6\u7801&quot;</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">rules</span>=<span class="hljs-string">{rules}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("DQLYNB");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"DT5B9U"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u5FEB\u901F\u8F93\u5165\u5E38\u89C1\u7EC4\u4EF6\u7C7B\u578B">\u5FEB\u901F\u8F93\u5165\u5E38\u89C1\u7EC4\u4EF6\u7C7B\u578B</h3>
<p>\u652F\u6301\u7C7B\u578B <code>&#39;input&#39;\u3001&#39;radio&#39;\u3001&#39;checkbox&#39;\u3001&#39;datePicker&#39;\u3001&#39;select&#39;\u3001&#39;switch&#39;\u3001&#39;textarea&#39;\u3001&#39;timeSelect&#39;\u3001&#39;timePicker&#39;</code></p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(g,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">FormItem</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> inputData = {<span class="hljs-attr">defaultValue</span>: <span class="hljs-string">&#x27;abc&#x27;</span>}
  <span class="hljs-keyword">const</span> selectData = {<span class="hljs-attr">defaultValue</span>: <span class="hljs-string">&#x27;112&#x27;</span>, <span class="hljs-attr">options</span>: [{<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;1&#x27;</span>}], <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#x27;\u8BF7\u9009\u62E912&#x27;</span>}
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">val:string</span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(val)
  }
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;form-item-demo&#x27;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;input&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;input&quot;</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{inputData}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}/</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;select&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;select&quot;</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{selectData}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("DT5B9U");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"9TYOJ7"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u53EF\u5355\u72EC\u4F7F\u7528field">\u53EF\u5355\u72EC\u4F7F\u7528<code>Field</code></h3>
<p>\u53EF\u4F7F\u7528data.defaultValue\u5BF9\u63A7\u4EF6\u8BBE\u7F6E\u503C\uFF0C\u5373\u591A\u4E2A\u5E38\u7528\u7EC4\u4EF6\u7684\u96C6\u5408\uFF0C\u4E0D\u9700\u8981\u5728\u9875\u9762\u5BFC\u5165\u5404\u8868\u5355\u7EC4\u4EF6</p>
<pre><code class="language-text"><span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;input&quot;</span> /&gt;</span> \u7B49\u4E8E <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> / &gt;</span>
</code></pre>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(F,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Field</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> inputData = {<span class="hljs-attr">defaultValue</span>: <span class="hljs-string">&#x27;abc&#x27;</span>}
  <span class="hljs-keyword">const</span> selectData = {<span class="hljs-attr">defaultValue</span>: <span class="hljs-string">&#x27;1&#x27;</span>, <span class="hljs-attr">options</span>: [{<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;1&#x27;</span>}], <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#x27;\u8BF7\u9009\u62E9&#x27;</span>}
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">val:string</span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(val)
  }
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;form-item-demo&#x27;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;input&quot;</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{inputData}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}/</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;select&quot;</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{selectData}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("9TYOJ7");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}})))),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:`<h2 id="api">API</h2>
<div class="card"><h3 id="formitem-props">FormItem Props</h3>
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
<td>\u663E\u793A\u7684\u6807\u7B7E\u540D</td>
</tr>
<tr>
<td>labelVisible</td>
<td>boolean/false</td>
<td>\u9690\u85CFlabel</td>
</tr>
<tr>
<td>prop</td>
<td>string</td>
<td>\u8868\u5355\u6821\u9A8C\u65F6\u5173\u8054\u8868\u5355\u7684\u6821\u9A8C\u89C4\u5219</td>
</tr>
<tr>
<td>required</td>
<td>boolean/true</td>
<td>\u662F\u5426\u6839\u636E\u9A8C\u8BC1\u89C4\u5219\u81EA\u52A8\u751F\u6210\u5FC5\u586B\u6837\u5F0F\u540D</td>
</tr>
<tr>
<td>verify</td>
<td>string</td>
<td>\u5FEB\u901F\u9A8C\u8BC1\uFF0C\u652F\u6301required, mobile, tel, mail, digits, number,phone \u591A\u4E2A\u7528\u9017\u53F7\u9694\u5F00</td>
</tr>
<tr>
<td>rules</td>
<td>array</td>
<td>\u6821\u9A8C\u89C4\u5219</td>
</tr>
<tr>
<td>showMessage</td>
<td>boolean/true</td>
<td>\u663E\u793A\u9519\u8BEF\u63D0\u793A\uFF0C\u5728form\u4F7F\u7528\u65F6\uFF0C\u4F18\u5148\u4F7F\u7528form\u7684\u8BBE\u7F6E</td>
</tr>
<tr>
<td>trigger</td>
<td>string/change</td>
<td>change\u548Cblur\u4E24\u79CD\uFF0C\u5728form\u4F7F\u7528\u65F6\uFF0C\u4F18\u5148\u4F7F\u7528form\u7684\u8BBE\u7F6E</td>
</tr>
<tr>
<td>labelWidth</td>
<td>string</td>
<td>label\u7684\u5BBD\u5EA6</td>
</tr>
<tr>
<td>size</td>
<td>string</td>
<td>\u7528\u4E8E\u63A7\u5236\u8BE5\u8868\u5355\u5185\u7EC4\u4EF6\u7684\u5C3A\u5BF8,\u652F\u6301 <code>large</code>\u3001<code>normal</code>\u3001<code>small</code>\u3001<code>mini</code> \u56DB\u79CD\u5C3A\u5BF8\uFF0C\u9ED8\u8BA4\u4E3A <code>normal</code></td>
</tr>
<tr>
<td>error</td>
<td>string</td>
<td>\u8868\u5355\u57DF\u9A8C\u8BC1\u9519\u8BEF\u4FE1\u606F, \u8BBE\u7F6E\u8BE5\u503C\u4F1A\u4F7F\u8868\u5355\u9A8C\u8BC1\u72B6\u6001\u53D8\u4E3Aerror\uFF0C\u5E76\u663E\u793A\u8BE5\u9519\u8BEF\u4FE1\u606F</td>
</tr>
<tr>
<td>type</td>
<td>string</td>
<td>\u53EF\u5FEB\u901F\u8F93\u51FA\u63A7\u4EF6\u7C7B\u578B\uFF0C\u53EF\u9009<code>input\u3001radio\u3001checkbox\u3001datePicker\u3001select\u3001switch\u3001textarea\u3001timeSelect\u3001timePicker</code></td>
</tr>
<tr>
<td>data</td>
<td>Object</td>
<td>\u4EC5\u5728type\u4E0D\u4E3A\u7A7A\u65F6\uFF0C\u5BF9\u5E94\u5F53\u524D\u7EC4\u4EF6\u7684props\u6240\u6709\u53C2\u6570</td>
</tr>
<tr>
<td>defaultValue</td>
<td>any</td>
<td>\u4EC5\u5728type\u4E0D\u4E3A\u7A7A\u65F6\uFF0C\u5F53\u524D\u63A7\u4EF6\u7684\u503C</td>
</tr>
<tr>
<td>onChange</td>
<td>function</td>
<td>\u4F7F\u7528type\u7C7B\u578B\u65F6\uFF0C\u63A7\u4EF6\u6539\u53D8\u4E8B\u4EF6</td>
</tr>
<tr>
<td>other</td>
<td>ReactNode</td>
<td>formItem\u540E\u9762\u9884\u7559\u7684\u4F4D\u7F6E\uFF0C\u53EF\u7528\u4F5C\u5176\u4ED6\u63D0\u793A</td>
</tr>
</tbody></table>
</div><div class="card"><h3 id="formitem-rules-\u9A8C\u8BC1\u89C4\u5219">FormItem Rules \u9A8C\u8BC1\u89C4\u5219</h3>
<table>
<thead>
<tr>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>required</td>
<td>\u4E3A\u7A7A</td>
</tr>
<tr>
<td>maxLength</td>
<td>\u6700\u5927\u5B57\u7B26</td>
</tr>
<tr>
<td>minLength</td>
<td>\u6700\u5C0F\u5B57\u7B26</td>
</tr>
<tr>
<td>mobile</td>
<td>\u624B\u673A\u53F7\u683C\u5F0F</td>
</tr>
<tr>
<td>tel</td>
<td>\u56FA\u8BDD</td>
</tr>
<tr>
<td>phone</td>
<td>\u56FA\u8BDD\u6216\u624B\u673A</td>
</tr>
<tr>
<td>mail</td>
<td>\u90AE\u7BB1\u683C\u5F0F</td>
</tr>
<tr>
<td>digits</td>
<td>\u6B63\u6574\u6570</td>
</tr>
<tr>
<td>number</td>
<td>\u6570\u5B57</td>
</tr>
<tr>
<td>tips</td>
<td>\u83B7\u5F97\u7126\u70B9\u4E14\u503C\u4E3A\u7A7A\u65F6\u663E\u793A\u8F93\u5165\u63D0\u793A</td>
</tr>
<tr>
<td>rule</td>
<td>\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u89C4\u5219</td>
</tr>
<tr>
<td>fn</td>
<td>\u56DE\u8C03\u9A8C\u8BC1</td>
</tr>
</tbody></table>
</div><div class="card"><h3 id="formitem-methods">FormItem Methods</h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>validate</td>
<td>\u5BF9\u5355\u4E2A\u8868\u5355\u9879\u8FDB\u884C\u6821\u9A8C\u7684\u65B9\u6CD5\uFF0CPromise\u8FD4\u56DE\u9A8C\u8BC1\u7ED3\u679C</td>
</tr>
<tr>
<td>clearTips</td>
<td>\u7528\u4E8E\u6E05\u7A7A\u9A8C\u8BC1\u63D0\u793A\u4FE1\u606F\uFF0C\u6062\u590D\u521D\u59CB\u72B6\u6001</td>
</tr>
<tr>
<td>getValue</td>
<td>\u83B7\u53D6\u5F53\u524D\u7EC4\u4EF6\u503C</td>
</tr>
</tbody></table>
</div><div class="card"><h3 id="field-props">Field Props</h3>
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
<td>\u53EF\u5FEB\u901F\u8F93\u51FA\u63A7\u4EF6\u7C7B\u578B\uFF0C\u53EF\u9009<code>input\u3001radio\u3001checkbox\u3001datePicker\u3001select\u3001switch\u3001textarea\u3001timeSelect\u3001timePicker</code></td>
</tr>
<tr>
<td>data</td>
<td>Object</td>
<td>\u5BF9\u5E94\u5F53\u524D\u7EC4\u4EF6\u7684props\u6240\u6709\u53C2\u6570</td>
</tr>
<tr>
<td>defaultValue</td>
<td>any</td>
<td>\u4EC5\u5728type\u4E0D\u4E3A\u7A7A\u65F6\uFF0C\u5F53\u524D\u63A7\u4EF6\u7684\u503C</td>
</tr>
<tr>
<td>onChange</td>
<td>function</td>
<td>\u63A7\u4EF6\u6539\u53D8\u4E8B\u4EF6</td>
</tr>
</tbody></table>
</div><div class="card"><h3 id="field-methods">Field Methods</h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>getValue</td>
<td>\u83B7\u53D6\u5F53\u524D\u7EC4\u4EF6\u503C</td>
</tr>
</tbody></table>
</div>`}})))}export{_ as default};
