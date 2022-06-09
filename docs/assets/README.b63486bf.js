import{R as s}from"./index.085b3e07.js";import{S as e}from"./SelectDown.a490cdb1.js";import"./contextForm.196e79be.js";import"./Tag.f4d6c449.js";import"./dom.0e399110.js";function p(){const l=["\u521D\u59CB\u503C"];return s.createElement(e,{placeholder:"placeholder",defaultValue:l},s.createElement("p",null,"21311"),s.createElement("p",null,"\u57FA\u7840\u7528\u6CD5"))}function c(){return s.createElement(e,{placeholder:"placeholder",disabled:!0,defaultValue:[]},s.createElement("p",null,"21311"),s.createElement("p",null,"\u7981\u7528\u6A21\u5F0F"))}function u(){return s.createElement(e,{placeholder:"\u53EF\u6E05\u7A7A\u503C",clear:!0,defaultValue:["react"]},s.createElement("p",null,"21311"),s.createElement("p",null,"\u53EF\u6E05\u7A7A"))}function r(){const l=["reac","form","vue"];return s.createElement(e,{multiple:!0,defaultValue:l,placeholder:"placeholder"},s.createElement("p",null,"21311"),s.createElement("p",null,"\u591A\u9009\u6A21\u5F0F"))}function d(){const l=["reac","form","vue"];return s.createElement(e,{defaultValue:l,multiple:!0,collapseTags:!0,placeholder:"placeholder"},s.createElement("p",null,"21311"),s.createElement("p",null,"\u591A\u9009\u6298\u53E0\u6A21\u5F0F"))}function o(){const l=t=>{console.log("blurEvent"),console.log(t)},a=t=>{console.log("focusEvent"),console.log(t)},n=t=>{console.log("inputEvent"),console.log(t)};return s.createElement("div",null,s.createElement(e,{defaultValue:["reactive","form","vue"],multiple:!0,filterable:!0,collapseTags:!0,placeholder:"placeholder",onBlur:l,onFocus:a,onInput:n},s.createElement("p",null,"21311"),s.createElement("p",null,"\u53EF\u8F93\u5165\u6A21\u5F0F")),s.createElement(e,{defaultValue:["reactive"],filterable:!0,placeholder:"placeholder",onBlur:l,onFocus:a,onInput:n},s.createElement("p",null,"21311"),s.createElement("p",null,"\u53EF\u8F93\u5165\u6A21\u5F0F")))}function h(){const l=["reac","form","vue"];return s.createElement(e,{appendToBody:!0,placeholder:"placeholder",defaultValue:l},s.createElement("p",null,"21311"),s.createElement("p",null,"\u63D2\u5165\u5230body\u4E2D"))}function m(){return s.createElement(e,{defaultValue:["modelValue"],downClass:"down-class",downStyle:{width:"300px"},downHeight:"300",placeholder:"placeholder"},s.createElement("p",null,"\u5176\u4ED6\u8BBE\u7F6E"),s.createElement("p",null,"21311"),s.createElement("p",null,"21311"),s.createElement("p",null,"21311"),s.createElement("p",null,"21311"),s.createElement("p",null,"21311"),s.createElement("p",null,"21311"),s.createElement("p",null,"21311"),s.createElement("p",null,"21311"),s.createElement("p",null,"21311"),s.createElement("p",null,"21311"))}function i(){const l=["reac","form","vue"];return s.createElement(e,{icon:"down",placeholder:"placeholder",defaultValue:l},s.createElement("p",null,"21311"),s.createElement("p",null,"\u63D2\u5165\u5230body\u4E2D"))}function j(){return s.createElement(e,{defaultValue:["start","end"],isRange:!0,endPlaceholder:"\u7ED3\u675F\u70B9\u4F4D\u7B26",placeholder:"placeholder"},s.createElement("p",null,"21311"),s.createElement("p",null,"\u663E\u793A\u533A\u95F4\u503C"))}function w(l){return s.createElement("div",{className:"doc-container md-pc docs-demo"},s.createElement("div",{className:"code-container"},s.createElement("div",{className:"md-code"}),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:""}})),s.createElement("div",{className:"demo-container"},s.createElement("div",{className:"md-demo"},s.createElement("h1",{id:"selectdown\u4E0B\u62C9"},"SelectDown\u4E0B\u62C9"),s.createElement("p",null,"\u7EDF\u4E00\u4E0B\u62C9\u7EC4\u4EF6\uFF0C\u4E3A",s.createElement("code",null,"select"),",",s.createElement("code",null,"datePick"),",",s.createElement("code",null,"cascader"),"\u7B49\u63D0\u4F9B\u7EDF\u4E00\u4EA4\u4E92"),s.createElement("div",{className:"card hide",id:"CL0AM9"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(p,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">SelectDown</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> value = [<span class="hljs-string">&#x27;\u521D\u59CB\u503C&#x27;</span>]
  <span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">SelectDown</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{value}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>21311<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u57FA\u7840\u7528\u6CD5<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SelectDown</span>&gt;</span></span>
  )
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("CL0AM9");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"6LA94O"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u7981\u7528\u6A21\u5F0F">\u7981\u7528\u6A21\u5F0F</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(c,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">SelectDown</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">SelectDown</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span> <span class="hljs-attr">disabled</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{[]}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>21311<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u7981\u7528\u6A21\u5F0F<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SelectDown</span>&gt;</span></span>
  )
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("6LA94O");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"5ADKN1"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u53EF\u6E05\u7A7A">\u53EF\u6E05\u7A7A</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(u,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">SelectDown</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">SelectDown</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u53EF\u6E05\u7A7A\u503C&quot;</span> <span class="hljs-attr">clear</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{[</span>&#x27;<span class="hljs-attr">react</span>&#x27;]}&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>21311<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u53EF\u6E05\u7A7A<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SelectDown</span>&gt;</span></span>
  )
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("5ADKN1");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"43LOK0"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u591A\u9009\u6A21\u5F0F">\u591A\u9009\u6A21\u5F0F</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(r,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">SelectDown</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> value = [<span class="hljs-string">&#x27;reac&#x27;</span>, <span class="hljs-string">&#x27;form&#x27;</span>, <span class="hljs-string">&#x27;vue&#x27;</span>]
  <span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">SelectDown</span> <span class="hljs-attr">multiple</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{value}</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>21311<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u591A\u9009\u6A21\u5F0F<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SelectDown</span>&gt;</span></span>
  )
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("43LOK0");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"42PKWX"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u591A\u9009\u6298\u53E0\u6A21\u5F0F">\u591A\u9009\u6298\u53E0\u6A21\u5F0F</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(d,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">SelectDown</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> value = [<span class="hljs-string">&#x27;reac&#x27;</span>, <span class="hljs-string">&#x27;form&#x27;</span>, <span class="hljs-string">&#x27;vue&#x27;</span>]
  <span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">SelectDown</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{value}</span> <span class="hljs-attr">multiple</span> <span class="hljs-attr">collapseTags</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>21311<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u591A\u9009\u6298\u53E0\u6A21\u5F0F<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SelectDown</span>&gt;</span></span>
  )
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("42PKWX");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"7CYJQF"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u53EF\u8F93\u5165\u6A21\u5F0F">\u53EF\u8F93\u5165\u6A21\u5F0F</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(o,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">SelectDown</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">blurEvent</span> = (<span class="hljs-params">val: <span class="hljs-built_in">string</span></span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;blurEvent&#x27;</span>)
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(val)
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">focusEvent</span> = (<span class="hljs-params">val: <span class="hljs-built_in">string</span></span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;focusEvent&#x27;</span>)
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(val)
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">inputEvent</span> = (<span class="hljs-params">val: <span class="hljs-built_in">string</span></span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;inputEvent&#x27;</span>)
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(val)
  }
  <span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">SelectDown</span>
    <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{[</span>&#x27;<span class="hljs-attr">reactive</span>&#x27;, &#x27;<span class="hljs-attr">form</span>&#x27;, &#x27;<span class="hljs-attr">vue</span>&#x27;]}
    <span class="hljs-attr">multiple</span>
    <span class="hljs-attr">filterable</span>
    <span class="hljs-attr">collapseTags</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span>
    <span class="hljs-attr">onBlur</span>=<span class="hljs-string">{blurEvent}</span>
    <span class="hljs-attr">onFocus</span>=<span class="hljs-string">{focusEvent}</span>
    <span class="hljs-attr">onInput</span>=<span class="hljs-string">{inputEvent}</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>21311<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u53EF\u8F93\u5165\u6A21\u5F0F<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">SelectDown</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">SelectDown</span>
    <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{[</span>&#x27;<span class="hljs-attr">reactive</span>&#x27;]}
    <span class="hljs-attr">filterable</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span>
    <span class="hljs-attr">onBlur</span>=<span class="hljs-string">{blurEvent}</span>
    <span class="hljs-attr">onFocus</span>=<span class="hljs-string">{focusEvent}</span>
    <span class="hljs-attr">onInput</span>=<span class="hljs-string">{inputEvent}</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>21311<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u53EF\u8F93\u5165\u6A21\u5F0F<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">SelectDown</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("7CYJQF");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"B4X3FI"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u63D2\u5165\u5230body\u4E2D">\u63D2\u5165\u5230body\u4E2D</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(h,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">SelectDown</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> value = [<span class="hljs-string">&#x27;reac&#x27;</span>, <span class="hljs-string">&#x27;form&#x27;</span>, <span class="hljs-string">&#x27;vue&#x27;</span>]
  <span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">SelectDown</span> <span class="hljs-attr">appendToBody</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{value}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>21311<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u63D2\u5165\u5230body\u4E2D<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SelectDown</span>&gt;</span></span>
  )
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("B4X3FI");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"2UJHVV"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u5176\u4ED6\u8BBE\u7F6E">\u5176\u4ED6\u8BBE\u7F6E</h3>
<p>\u5F39\u51FA\u4E0B\u62C9\u9762\u677F\u8BBE\u7F6E<code>down-class</code>\u3001<code>down-style</code>\u3001<code>down-height</code></p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(m,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">SelectDown</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> value = [<span class="hljs-string">&#x27;reac&#x27;</span>, <span class="hljs-string">&#x27;form&#x27;</span>, <span class="hljs-string">&#x27;vue&#x27;</span>]
  <span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">SelectDown</span>
  <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{[</span>&#x27;<span class="hljs-attr">modelValue</span>&#x27;]}
  <span class="hljs-attr">downClass</span>=<span class="hljs-string">&quot;down-class&quot;</span>
  <span class="hljs-attr">downStyle</span>=<span class="hljs-string">{{width:</span> &#x27;<span class="hljs-attr">300px</span>&#x27;}}
  <span class="hljs-attr">downHeight</span>=<span class="hljs-string">&quot;300&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u5176\u4ED6\u8BBE\u7F6E<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>21311<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>21311<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>21311<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>21311<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>21311<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>21311<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>21311<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>21311<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>21311<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>21311<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SelectDown</span>&gt;</span></span>
  )
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("2UJHVV");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"BS49YF"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u4F7F\u7528\u4E0D\u540C\u7684\u56FE\u6807">\u4F7F\u7528\u4E0D\u540C\u7684\u56FE\u6807</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(i,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">SelectDown</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> value = [<span class="hljs-string">&#x27;reac&#x27;</span>, <span class="hljs-string">&#x27;form&#x27;</span>, <span class="hljs-string">&#x27;vue&#x27;</span>]
  <span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">SelectDown</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;down&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{value}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>21311<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u63D2\u5165\u5230body\u4E2D<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SelectDown</span>&gt;</span></span>
  )
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("BS49YF");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"2N77AC"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u663E\u793A\u533A\u95F4\u503C">\u663E\u793A\u533A\u95F4\u503C</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(j,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">SelectDown</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> value = [<span class="hljs-string">&#x27;reac&#x27;</span>, <span class="hljs-string">&#x27;form&#x27;</span>, <span class="hljs-string">&#x27;vue&#x27;</span>]
  <span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">SelectDown</span>
  <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{[</span>&#x27;<span class="hljs-attr">start</span>&#x27;, &#x27;<span class="hljs-attr">end</span>&#x27;]}
  <span class="hljs-attr">isRange</span>
  <span class="hljs-attr">endPlaceholder</span>=<span class="hljs-string">&quot;\u7ED3\u675F\u70B9\u4F4D\u7B26&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>21311<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u663E\u793A\u533A\u95F4\u503C<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SelectDown</span>&gt;</span></span>
  )
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("2N77AC");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}})))),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:`<h2 id="api">API</h2>
<div class="card"><h3 id="selectdown-props">SelectDown Props</h3>
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
<td>array</td>
<td>\u521D\u59CB\u9ED8\u8BA4\u663E\u793A\u7684\u503C</td>
</tr>
<tr>
<td>width</td>
<td>string</td>
<td>\u7EC4\u4EF6\u5BBD</td>
</tr>
<tr>
<td>multiple</td>
<td>boolean/false</td>
<td>\u591A\u9009\u6A21\u5F0F</td>
</tr>
<tr>
<td>collapseTags</td>
<td>boolean/false</td>
<td>\u591A\u9009\u6A21\u5F0F\u4E0B\u662F\u5426\u6298\u53E0Tag</td>
</tr>
<tr>
<td>clear</td>
<td>boolean/false</td>
<td>\u662F\u5426\u53EF\u6E05\u7A7A</td>
</tr>
<tr>
<td>filterable</td>
<td>boolean/false</td>
<td>\u662F\u5426\u53EF\u641C\u7D22\u9009\u9879</td>
</tr>
<tr>
<td>size</td>
<td>string</td>
<td>\u5927\u5C0F</td>
</tr>
<tr>
<td>placeholder</td>
<td>string</td>
<td>\u5360\u4F4D\u7B26</td>
</tr>
<tr>
<td>disabled</td>
<td>boolean/false</td>
<td>\u7981\u7528\u72B6\u6001</td>
</tr>
<tr>
<td>direction</td>
<td>number</td>
<td>\u4E0B\u62C9\u7684\u65B9\u5411\u52A8\u753B\uFF0C0\u81EA\u52A8(\u9ED8\u8BA4)\u30001\u5411\u4E0B\u30002\u5411\u4E0A</td>
</tr>
<tr>
<td>downClass</td>
<td>string</td>
<td>\u4E0B\u62C9\u9762\u677F\u7C7B</td>
</tr>
<tr>
<td>downStyle</td>
<td>object</td>
<td>\u4E0B\u62C9\u9762\u677F\u6837\u5F0F</td>
</tr>
<tr>
<td>appendToBody</td>
<td>boolean/false</td>
<td>\u4E0B\u62C9\u63D2\u5165\u5230body</td>
</tr>
<tr>
<td>downHeight</td>
<td>number</td>
<td>\u4E0B\u62C9\u7684\u9762\u677F\u7684\u9AD8</td>
</tr>
<tr>
<td>icon</td>
<td>string</td>
<td>icon\u56FE\u6807</td>
</tr>
<tr>
<td>fixedIcon</td>
<td>boolean/false</td>
<td>\u56FA\u5B9Aicon\u56FE\u6807\uFF0C\u5373\u70B9\u51FB\u65F6\u4E0D\u65CB\u8F6C</td>
</tr>
<tr>
<td>isRange</td>
<td>boolean/false</td>
<td>\u663E\u793A\u533A\u95F4\uFF0C\u6B64\u65F6<code>multiple</code>\u65E0\u6548</td>
</tr>
<tr>
<td>rangeSeparator</td>
<td>string</td>
<td>\u533A\u95F4\u5206\u9694\u7B26\uFF0C\u9ED8\u8BA4<code>To</code></td>
</tr>
<tr>
<td>endPlaceholder</td>
<td>string</td>
<td>isRange\u4E3Atrue\u65F6\u7684\uFF0C\u7ED3\u675F\u8F93\u5165\u6846\u70B9\u4F4D\u7B26</td>
</tr>
<tr>
<td>onInput</td>
<td>function(activeVal,value,evt)</td>
<td>\u53EF\u8F93\u5165\u65F6\u8F93\u5165\u6846\u6539\u53D8\u4E8B\u4EF6</td>
</tr>
<tr>
<td>onBlur</td>
<td>function(activeVal,value,evt)</td>
<td>\u53EF\u8F93\u5165\u65F6\u8F93\u5165\u6846\u7126\u70B9\u4E8B\u4EF6</td>
</tr>
<tr>
<td>onFocus</td>
<td>function(activeVal,value,evt)</td>
<td>\u53EF\u8F93\u5165\u65F6\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u4E8B\u4EF6</td>
</tr>
<tr>
<td>toggleClick</td>
<td>function(evt)</td>
<td>\u70B9\u51FB\u5C55\u5F00\u6536\u8D77\u4E8B\u4EF6</td>
</tr>
<tr>
<td>onClear</td>
<td>function()</td>
<td>\u6E05\u7A7A\u4E8B\u4EF6</td>
</tr>
<tr>
<td>onDelete</td>
<td>function(val)</td>
<td>\u5220\u9664\u5355\u4E2A\u9009\u9879,\u591A\u9009\u65F6\u6709\u6548</td>
</tr>
</tbody></table>
</div><div class="card"><h3 id="selectdown-methods">SelectDown Methods</h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>slideUp</td>
<td>\u6536\u8D77\u4E0B\u62C9</td>
</tr>
<tr>
<td>setValue</td>
<td>\u8BBE\u7F6E\u663E\u793A\u7684\u503C\uFF0C\u4EC5\u6539\u53D8\u663E\u793A\u7684\u503C</td>
</tr>
<tr>
<td>clearValue</td>
<td>\u53EF\u8F93\u5165\u72B6\u6001\u7528\u4E8E\u6E05\u7A7A\u8F93\u5165\u6846\u7684\u503C</td>
</tr>
</tbody></table>
</div>`}})))}export{w as default};
