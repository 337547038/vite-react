import{R as s,r as o}from"./index.efbe83c6.js";import{D as l}from"./DatePicker.e4f5523f.js";import"./SelectDown.51522df4.js";import"./contextForm.e282e2fd.js";import"./Tag.8e9f54c3.js";import"./dom.46b1a4a1.js";import"./index.4eedf3c9.js";function j(){const[e,a]=s.useState(""),[n,c]=s.useState(new Date().toLocaleDateString()),[u,i]=s.useState(""),h=(r,t)=>{r==="1"&&a(t.toString()),r==="2"&&c(t.toString())};return s.createElement("div",{className:"demo-date-picker"},s.createElement("div",null,"\u9009\u62E9\u7684\u503C\uFF1A",e,s.createElement("br",null),s.createElement(l,{defaultValue:e,placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",onChange:h.bind(this,"1")})),s.createElement("div",null,"\u9009\u62E9\u7684\u503C\uFF1A",n,s.createElement("br",null),s.createElement(l,{defaultValue:n,placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",onChange:h.bind(this,"2")})),s.createElement("div",null,"\u9009\u62E9\u7684\u503C\uFF1A",u,s.createElement("br",null),s.createElement(l,{defaultValue:u,placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",disabled:!0,onChange:h.bind(this,"3")})))}function m(){const[e,a]=s.useState(""),[n,c]=s.useState(new Date().getFullYear().toString()),[u,i]=s.useState(""),h=t=>{const p=t.getFullYear();return p<2018||p>2023},r=(t,p)=>{t==="1"&&a(p.toString()),t==="2"&&c(p.toString()),t==="3"&&i(p.toString())};return s.createElement("div",{className:"demo-date-picker"},s.createElement("div",null,"\u9009\u62E9\u7684\u503C\uFF1A",e,s.createElement("br",null),s.createElement(l,{defaultValue:e,placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"year",onChange:r.bind(this,"1")})),s.createElement("div",null,"\u9009\u62E9\u7684\u503C\uFF1A",n,s.createElement("br",null),s.createElement(l,{defaultValue:n,placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"year",onChange:r.bind(this,"2")})),s.createElement("div",null,"\u9650\u5236\u9009\u62E9\u8303\u56F4\u3002\u9009\u62E9\u7684\u503C\uFF1A",u,s.createElement("br",null),s.createElement(l,{onChange:r.bind(this,"3"),defaultValue:u,placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"year",disabledDate:h})))}function g(){const[e,a]=s.useState(""),[n,c]=s.useState("2022-06-15"),[u,i]=s.useState(""),h=(t,p)=>{if(p==="month"){const d=t.getMonth();return d<2||d>6}return!1},r=(t,p)=>{t==="1"&&a(p.toString()),t==="2"&&c(p.toString()),t==="3"&&i(p.toString())};return s.createElement("div",{className:"demo-date-picker"},s.createElement("div",null,"\u9009\u62E9\u7684\u503C\uFF1A",e,s.createElement("br",null),s.createElement(l,{defaultValue:e,placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"month",onChange:r.bind(this,"1")})),s.createElement("div",null,"\u9009\u62E9\u7684\u503C\uFF1A",n,s.createElement("br",null),s.createElement(l,{defaultValue:n,placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"month",onChange:r.bind(this,"2")})),s.createElement("div",null,"\u9650\u5236\u9009\u62E9\u8303\u56F4\u3002\u9009\u62E9\u7684\u503C\uFF1A",u,s.createElement("br",null),s.createElement(l,{onChange:r.bind(this,"3"),defaultValue:u,placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"month",disabledDate:h})))}function E(){const e=(a,n)=>{if(n==="day"){const c=a.getDay();return c===0||c===6}return!1};return s.createElement("div",{className:"demo-date-picker"},s.createElement("div",null,s.createElement(l,{placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"date"})),s.createElement("div",null,"\u9650\u5236\u9009\u62E9\u8303\u56F4",s.createElement("br",null),s.createElement(l,{placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"date",disabledDate:e})))}function F(){const[e,a]=o.exports.useState(""),n=c=>{a(c.toString())};return s.createElement("div",{className:"demo-date-picker"},s.createElement("div",null,"\u9009\u62E9\u7684\u503C\uFF1A",e,s.createElement("br",null),s.createElement(l,{placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"datetime",onChange:n})))}function y(){return s.createElement("div",{className:"demo-date-picker"},s.createElement("div",null,s.createElement(l,{placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",readonly:!1,clear:!0})))}function k(){const e=n=>[14,15,16].includes(n.getDate())?"\u4F11":[17,18,19].includes(n.getDate())?"\u73ED":"",a=(n,c)=>{const u=n.getDay();return u===0||u===6};return s.createElement("div",{className:"demo-date-picker"},s.createElement("div",null,s.createElement(l,{placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",innerText:e,disabledDate:a})))}function f(){return s.createElement("div",{className:"demo-date-picker"},s.createElement("div",null,"\u6708\u65E5\u5C0F\u4E8E10\u65F6\uFF0C\u524D\u9762\u4E0D\u52A00",s.createElement("br",null),s.createElement(l,{placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",format:"y-M-d"})),s.createElement("div",null,"\u663E\u793A\u5E74\u6708\u65E5\u683C\u5F0F",s.createElement("br",null),s.createElement(l,{placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",format:"y\u5E74MM\u6708dd\u65E5 \u661F\u671Fw","value-format":"y-MM-dd"})),s.createElement("div",null,"\u663E\u793A\u65F6\u95F4\u6233",s.createElement("br",null),s.createElement(l,{placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",format:"timestamp","value-format":"y-MM-dd"})))}function v(){return s.createElement("div",{className:"demo-date-picker"},s.createElement("div",null,s.createElement(l,{type:"monthRange",placeholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",endPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD"})),s.createElement("div",null,s.createElement(l,{type:"dateRange",placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",endPlaceholder:"\u8BF7\u9009\u62E9\u65F6\u95F4"})),s.createElement("div",null,s.createElement(l,{type:"datetimeRange",placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",endPlaceholder:"\u8BF7\u9009\u62E9\u65F6\u95F4"})))}function B(e){return s.createElement("div",{className:"doc-container md-pc docs-demo"},s.createElement("div",{className:"code-container"},s.createElement("div",{className:"md-code"}),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:""}})),s.createElement("div",{className:"demo-container"},s.createElement("div",{className:"md-demo"},s.createElement("h1",{id:"datepicker-\u65E5\u671F\u9009\u62E9"},"DatePicker \u65E5\u671F\u9009\u62E9"),s.createElement("div",{className:"card hide",id:"33O88H"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u57FA\u672C\u4F7F\u7528">\u57FA\u672C\u4F7F\u7528</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(j,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">DatePicker</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [value1, setValue1] = <span class="hljs-title class_">React</span>.<span class="hljs-title function_">useState</span>(<span class="hljs-string">&#x27;&#x27;</span>)
  <span class="hljs-keyword">const</span> [value2, setValue2] = <span class="hljs-title class_">React</span>.<span class="hljs-title function_">useState</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>().<span class="hljs-title function_">toLocaleDateString</span>())
  <span class="hljs-keyword">const</span> [value3, setValue3] = <span class="hljs-title class_">React</span>.<span class="hljs-title function_">useState</span>(<span class="hljs-string">&#x27;&#x27;</span>)
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params"><span class="hljs-keyword">type</span>: <span class="hljs-built_in">string</span>, val: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">string</span>[]</span>) =&gt; {
    <span class="hljs-keyword">if</span>(<span class="hljs-keyword">type</span>===<span class="hljs-string">&#x27;1&#x27;</span>){
      <span class="hljs-title function_">setValue1</span>(val.<span class="hljs-title function_">toString</span>())
    }
    <span class="hljs-keyword">if</span>(<span class="hljs-keyword">type</span>===<span class="hljs-string">&#x27;2&#x27;</span>){
      <span class="hljs-title function_">setValue2</span>(val.<span class="hljs-title function_">toString</span>())
    }
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-date-picker&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u9009\u62E9\u7684\u503C\uFF1A{value1}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatePicker</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{value1}</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange.bind(this,</span> &#x27;<span class="hljs-attr">1</span>&#x27;)} /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u9009\u62E9\u7684\u503C\uFF1A{value2}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatePicker</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{value2}</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange.bind(this,</span> &#x27;<span class="hljs-attr">2</span>&#x27;)} /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u9009\u62E9\u7684\u503C\uFF1A{value3}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatePicker</span>
        <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{value3}</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
        <span class="hljs-attr">disabled</span>=<span class="hljs-string">{true}</span>
        <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange.bind(this,</span> &#x27;<span class="hljs-attr">3</span>&#x27;)}
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("33O88H");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"ANXT81"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u5E74\u4EFD\u9009\u62E9">\u5E74\u4EFD\u9009\u62E9</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(m,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">DatePicker</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [value1, setValue1] = <span class="hljs-title class_">React</span>.<span class="hljs-title function_">useState</span>(<span class="hljs-string">&#x27;&#x27;</span>)
  <span class="hljs-keyword">const</span> [value2, setValue2] = <span class="hljs-title class_">React</span>.<span class="hljs-title function_">useState</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>().<span class="hljs-title function_">getFullYear</span>().<span class="hljs-title function_">toString</span>())
  <span class="hljs-keyword">const</span> [value3, setValue3] = <span class="hljs-title class_">React</span>.<span class="hljs-title function_">useState</span>(<span class="hljs-string">&#x27;&#x27;</span>)
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">disabledDate</span> = (<span class="hljs-params">date: <span class="hljs-built_in">Date</span></span>) =&gt; {
    <span class="hljs-keyword">const</span> day = date.<span class="hljs-title function_">getFullYear</span>()
    <span class="hljs-keyword">return</span> day &lt; <span class="hljs-number">2018</span> || day &gt; <span class="hljs-number">2023</span>
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params"><span class="hljs-keyword">type</span>: <span class="hljs-built_in">string</span>, val: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">string</span>[]</span>) =&gt; {
    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">type</span> === <span class="hljs-string">&#x27;1&#x27;</span>) {
      <span class="hljs-title function_">setValue1</span>(val.<span class="hljs-title function_">toString</span>())
    }
    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">type</span> === <span class="hljs-string">&#x27;2&#x27;</span>) {
      <span class="hljs-title function_">setValue2</span>(val.<span class="hljs-title function_">toString</span>())
    }
    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">type</span> === <span class="hljs-string">&#x27;3&#x27;</span>) {
      <span class="hljs-title function_">setValue3</span>(val.<span class="hljs-title function_">toString</span>())
    }
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-date-picker&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u9009\u62E9\u7684\u503C\uFF1A{value1}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatePicker</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{value1}</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;year&quot;</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange.bind(this,</span> &#x27;<span class="hljs-attr">1</span>&#x27;)}/&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u9009\u62E9\u7684\u503C\uFF1A{value2}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatePicker</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{value2}</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;year&quot;</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange.bind(this,</span> &#x27;<span class="hljs-attr">2</span>&#x27;)} /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u9650\u5236\u9009\u62E9\u8303\u56F4\u3002\u9009\u62E9\u7684\u503C\uFF1A{value3}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatePicker</span>
        <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange.bind(this,</span> &#x27;<span class="hljs-attr">3</span>&#x27;)}
        <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{value3}</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;year&quot;</span>
        <span class="hljs-attr">disabledDate</span>=<span class="hljs-string">{disabledDate}</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("ANXT81");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"8D6QLB"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u6708\u4EFD\u9009\u62E9">\u6708\u4EFD\u9009\u62E9</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(g,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">DatePicker</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [value1, setValue1] = <span class="hljs-title class_">React</span>.<span class="hljs-title function_">useState</span>(<span class="hljs-string">&#x27;&#x27;</span>)
  <span class="hljs-keyword">const</span> [value2, setValue2] = <span class="hljs-title class_">React</span>.<span class="hljs-title function_">useState</span>(<span class="hljs-string">&#x27;2022-06-15&#x27;</span>)
  <span class="hljs-keyword">const</span> [value3, setValue3] = <span class="hljs-title class_">React</span>.<span class="hljs-title function_">useState</span>(<span class="hljs-string">&#x27;&#x27;</span>)
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">disabledDate</span> = (<span class="hljs-params">date: <span class="hljs-built_in">Date</span>, <span class="hljs-keyword">type</span>: <span class="hljs-built_in">string</span></span>) =&gt; {
    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">type</span> === <span class="hljs-string">&#x27;month&#x27;</span>) {
      <span class="hljs-keyword">const</span> day = date.<span class="hljs-title function_">getMonth</span>()
      <span class="hljs-keyword">return</span> day &lt; <span class="hljs-number">2</span> || day &gt; <span class="hljs-number">6</span>
    }
    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params"><span class="hljs-keyword">type</span>: <span class="hljs-built_in">string</span>, val: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">string</span>[]</span>) =&gt; {
    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">type</span> === <span class="hljs-string">&#x27;1&#x27;</span>) {
      <span class="hljs-title function_">setValue1</span>(val.<span class="hljs-title function_">toString</span>())
    }
    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">type</span> === <span class="hljs-string">&#x27;2&#x27;</span>) {
      <span class="hljs-title function_">setValue2</span>(val.<span class="hljs-title function_">toString</span>())
    }
    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">type</span> === <span class="hljs-string">&#x27;3&#x27;</span>) {
      <span class="hljs-title function_">setValue3</span>(val.<span class="hljs-title function_">toString</span>())
    }
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-date-picker&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      \u9009\u62E9\u7684\u503C\uFF1A{value1}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatePicker</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{value1}</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;month&quot;</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange.bind(this,</span> &#x27;<span class="hljs-attr">1</span>&#x27;)} /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      \u9009\u62E9\u7684\u503C\uFF1A{value2}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatePicker</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{value2}</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;month&quot;</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange.bind(this,</span> &#x27;<span class="hljs-attr">2</span>&#x27;)} /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      \u9650\u5236\u9009\u62E9\u8303\u56F4\u3002\u9009\u62E9\u7684\u503C\uFF1A{value3}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatePicker</span>
        <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange.bind(this,</span> &#x27;<span class="hljs-attr">3</span>&#x27;)}
        <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{value3}</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;month&quot;</span>
        <span class="hljs-attr">disabledDate</span>=<span class="hljs-string">{disabledDate}</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("8D6QLB");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"GCCH6Q"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u5E74\u6708\u65E5\u9009\u62E9">\u5E74\u6708\u65E5\u9009\u62E9</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(E,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">DatePicker</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">disabledDate</span> = (<span class="hljs-params">date: <span class="hljs-built_in">Date</span>, <span class="hljs-keyword">type</span>: <span class="hljs-built_in">string</span></span>) =&gt; {
    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">type</span> === <span class="hljs-string">&#x27;day&#x27;</span>) {
      <span class="hljs-keyword">const</span> day = date.<span class="hljs-title function_">getDay</span>()
      <span class="hljs-keyword">return</span> day === <span class="hljs-number">0</span> || day === <span class="hljs-number">6</span>
    }
    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-date-picker&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatePicker</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      \u9650\u5236\u9009\u62E9\u8303\u56F4<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatePicker</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span>
        <span class="hljs-attr">disabledDate</span>=<span class="hljs-string">{disabledDate}</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("GCCH6Q");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"783XIX"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u5E74\u6708\u65E5\u65F6\u5206\u79D2\u9009\u62E9">\u5E74\u6708\u65E5\u65F6\u5206\u79D2\u9009\u62E9</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(F,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">DatePicker</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [value, setValue] = <span class="hljs-title function_">useState</span>(<span class="hljs-string">&#x27;&#x27;</span>)
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">val: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">string</span>[]</span>) =&gt; {
    <span class="hljs-title function_">setValue</span>(val.<span class="hljs-title function_">toString</span>())
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-date-picker&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      \u9009\u62E9\u7684\u503C\uFF1A{value}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatePicker</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;datetime&quot;</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("783XIX");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"2KQ6ZI"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u53EF\u8F93\u5165\u53EF\u6E05\u7A7A">\u53EF\u8F93\u5165\u53EF\u6E05\u7A7A</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(y,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">DatePicker</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>){
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-date-picker&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatePicker</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
        <span class="hljs-attr">readonly</span>=<span class="hljs-string">{false}</span>
        <span class="hljs-attr">clear</span>=<span class="hljs-string">{true}</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("2KQ6ZI");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"C3XXDV"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u81EA\u5B9A\u663E\u793A\u7279\u6B8A\u5B57\u7B26">\u81EA\u5B9A\u663E\u793A\u7279\u6B8A\u5B57\u7B26</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(k,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">DatePicker</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>){
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">innerText</span> = (<span class="hljs-params">time:<span class="hljs-built_in">Date</span></span>) =&gt; {
    <span class="hljs-keyword">if</span> ([<span class="hljs-number">14</span>,<span class="hljs-number">15</span>,<span class="hljs-number">16</span>].<span class="hljs-title function_">includes</span>(time.<span class="hljs-title function_">getDate</span>())) {
      <span class="hljs-keyword">return</span> <span class="hljs-string">&#x27;\u4F11&#x27;</span>
    }
    <span class="hljs-keyword">if</span> ([<span class="hljs-number">17</span>,<span class="hljs-number">18</span>,<span class="hljs-number">19</span>].<span class="hljs-title function_">includes</span>(time.<span class="hljs-title function_">getDate</span>())) {
      <span class="hljs-keyword">return</span> <span class="hljs-string">&#x27;\u73ED&#x27;</span>
    }
    <span class="hljs-keyword">return</span> <span class="hljs-string">&#x27;&#x27;</span>
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">disabledDate</span> = (<span class="hljs-params">time:<span class="hljs-built_in">Date</span>, paneType:string</span>) =&gt; {
    <span class="hljs-keyword">const</span> day = time.<span class="hljs-title function_">getDay</span>()
    <span class="hljs-keyword">return</span> day === <span class="hljs-number">0</span> || day === <span class="hljs-number">6</span>
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-date-picker&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatePicker</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
        <span class="hljs-attr">innerText</span>=<span class="hljs-string">{innerText}</span>
        <span class="hljs-attr">disabledDate</span>=<span class="hljs-string">{disabledDate}</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("C3XXDV");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"1M4DBP"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u65F6\u95F4\u683C\u5F0F\u5316">\u65F6\u95F4\u683C\u5F0F\u5316</h3>
<p>\u4F7F\u7528<code>format</code>\u6307\u5B9A\u8F93\u51FA\u663E\u793A\u7684\u7C7B\u578B\uFF0C\u5373\u8F93\u5165\u6846\u663E\u793A\u7684\u503C\u3002\u53EF\u4F7F\u7528y(\u5E74)\u3001M(\u6708)\u3001d(\u65E5)\u3001h(\u65F6)\u3001m(\u5206)\u3001s(\u79D2)\u3001w(\u661F\u671F)
\u3001timestamp\uFF0CMM\u8868\u793A\u4F7F\u7528\u4E24\u4F4D\u8868\u793A\u6708\u4EFD</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(f,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">DatePicker</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>){
  <span class="hljs-keyword">return</span>(<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-date-picker&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      \u6708\u65E5\u5C0F\u4E8E10\u65F6\uFF0C\u524D\u9762\u4E0D\u52A00<span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatePicker</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
        <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;y-M-d&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      \u663E\u793A\u5E74\u6708\u65E5\u683C\u5F0F<span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatePicker</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
        <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;y\u5E74MM\u6708dd\u65E5 \u661F\u671Fw&quot;</span>
        <span class="hljs-attr">value-format</span>=<span class="hljs-string">&quot;y-MM-dd&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      \u663E\u793A\u65F6\u95F4\u6233<span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatePicker</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
        <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;timestamp&quot;</span>
        <span class="hljs-attr">value-format</span>=<span class="hljs-string">&quot;y-MM-dd&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("1M4DBP");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"E9UQQM"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u533A\u95F4\u9009\u62E9">\u533A\u95F4\u9009\u62E9</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(v,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">DatePicker</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>){
  <span class="hljs-keyword">return</span>(<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-date-picker&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatePicker</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&#x27;monthRange&#x27;</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u6708\u4EFD&quot;</span>
        <span class="hljs-attr">endPlaceholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u6708\u4EFD&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatePicker</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&#x27;dateRange&#x27;</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
        <span class="hljs-attr">endPlaceholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatePicker</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&#x27;datetimeRange&#x27;</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
        <span class="hljs-attr">endPlaceholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("E9UQQM");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}})))),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:`<h2 id="api">API</h2>
<div class="card"><h3 id="datepicker">DatePicker</h3>
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
<td>placeholder</td>
<td>String</td>
<td>\u8F93\u5165\u6846\u63D0\u793A\u5360\u4F4D\u6587\u672C</td>
</tr>
<tr>
<td>clear</td>
<td>Boolean\uFF5Ctrue</td>
<td>\u663E\u793A\u6E05\u7A7A</td>
</tr>
<tr>
<td>disabledDate</td>
<td>Function</td>
<td>\u7981\u7528\u7684\u65F6\u95F4\uFF0Creturn true\u65F6\u5C06\u4E0D\u80FD\u9009\u62E9</td>
</tr>
<tr>
<td>disabled</td>
<td>Boolean\uFF5Ctrue</td>
<td>\u662F\u5426\u7981\u7528</td>
</tr>
<tr>
<td>type</td>
<td>String</td>
<td>\u9762\u677F\u65E5\u671F\u7C7B\u578B\uFF0C\u9009\u62E9\u540E\u5C06\u6309\u6B64\u683C\u5F0F\u8FD4\u56DE\uFF0C\u5E74/\u5E74\u6708/\u5E74\u6708\u65E5/\u5E74\u6708\u65E5\u65F6\u5206\u79D2\u3002\u53EF\u9009<code>year,month,date,datetime,datetimeRange,dateRange,monthRange</code></td>
</tr>
<tr>
<td>format</td>
<td>String</td>
<td>\u8F93\u5165\u6846\u663E\u793A\u7684\u683C\u5F0F\uFF0C\u4E3A\u7A7A\u65F6\u6309type\u9ED8\u8BA4\u683C\u5F0F</td>
</tr>
<tr>
<td>innerText</td>
<td>Function</td>
<td>\u53EF\u4EE5\u5C06\u7279\u6B8A\u63D0\u793A\u7684\u6587\u672C\u63D2\u5165\u5230\u6307\u5B9A\u7684\u65E5\u671F\u91CC</td>
</tr>
<tr>
<td>appendToBody</td>
<td>Boolean\uFF5Ctrue</td>
<td>\u662F\u5426\u5C06\u5F39\u51FA\u65E5\u671F\u9762\u677F\u63D2\u5165\u5230body\u4E2D</td>
</tr>
<tr>
<td>downStyle</td>
<td>Object</td>
<td>\u4E0B\u62C9\u9762\u677F\u6837\u5F0F\uFF0C\u5FEB\u901F\u4E2A\u6027\u5316\u8BBE\u7F6E\u5355\u4E2A\u65E5\u671F\u4E0B\u62C9\u9762\u677F</td>
</tr>
<tr>
<td>downClass</td>
<td>string</td>
<td>\u4E0B\u62C9\u9762\u677F\u7C7B\u540D</td>
</tr>
<tr>
<td>readonly</td>
<td>Boolean\uFF5Ctrue</td>
<td>\u65E5\u671F\u8F93\u5165\u6846\u53EA\u8BFB\u6A21\u5F0F</td>
</tr>
<tr>
<td>size</td>
<td>string</td>
<td>\u6DFB\u52A0\u7684\u5927\u5C0F\u5C3A\u5BF8\u6837\u5F0F</td>
</tr>
<tr>
<td>onChange</td>
<td>function</td>
<td>\u6539\u53D8\u4E8B\u4EF6</td>
</tr>
</tbody></table>
</div>`}})))}export{B as default};
