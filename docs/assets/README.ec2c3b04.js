import{R as s}from"./index.95d8ce5f.js";import{B as e}from"./Button.6877f1ed.js";import{M as t}from"./index.9f6b64b6.js";import"./contextForm.cd12c54d.js";import"./Dialog.d8b15977.js";import"./dom.0e399110.js";function p(){const l=a=>{t.Alert("\u8FD9\u662Falert\u7684\u5185\u5BB9",{icon:a})};return s.createElement("div",{className:"demo-Message"},s.createElement(e,{onClick:()=>l("1"),type:"primary"},"Alert \u6210\u529F"),s.createElement(e,{onClick:()=>l("2"),type:"primary"},"Alert \u5931\u8D25"),s.createElement(e,{onClick:()=>l("3"),type:"primary"},"Alert \u8B66\u544A"))}function c(){const l=a=>{t.Alert("\u8FD9\u662Falert\u7684\u5185\u5BB9",{icon:a,callback:n=>{alert("\u786E\u8BA4\u56DE\u8C03\u4E8B\u4EF6"),n()}})};return s.createElement("div",{className:"demo-Message"},s.createElement(e,{onClick:()=>l("1"),type:"primary"},"Alert \u6210\u529F"),s.createElement(e,{onClick:()=>l("2"),type:"primary"},"Alert \u5931\u8D25"),s.createElement(e,{onClick:()=>l("3"),type:"primary"},"Alert \u8B66\u544A"))}function r(){const l=a=>{t.Msg("\u8FD9\u662Falert\u7684\u5185\u5BB9",{icon:a,callback:n=>{alert("\u786E\u8BA4\u56DE\u8C03\u4E8B\u4EF6"),n()}})};return s.createElement("div",{className:"demo-Message"},s.createElement(e,{onClick:()=>l("1"),type:"primary"},"Alert \u6210\u529F"),s.createElement(e,{onClick:()=>l("2"),type:"primary"},"Alert \u5931\u8D25"),s.createElement(e,{onClick:()=>l("3"),type:"primary"},"Alert \u63D0\u793A"),s.createElement(e,{onClick:()=>l("4"),type:"primary"},"Alert \u8B66\u544A"))}function o(){const l=a=>{t[a]("\u8FD9\u662Falert\u7684\u5185\u5BB9")};return s.createElement("div",{className:"demo-Message"},s.createElement(e,{onClick:()=>l("Success"),type:"primary"},"Alert \u6210\u529F"),s.createElement(e,{onClick:()=>l("Fail"),type:"primary"},"Alert \u5931\u8D25"),s.createElement(e,{onClick:()=>l("Info"),type:"primary"},"Alert \u63D0\u793A"))}function g(l){return s.createElement("div",{className:"doc-container md-pc docs-demo"},s.createElement("div",{className:"code-container"},s.createElement("div",{className:"md-code"}),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:""}})),s.createElement("div",{className:"demo-container"},s.createElement("div",{className:"md-demo"},s.createElement("h1",{id:"message-\u4FE1\u606F\u5F39\u7A97"},"Message \u4FE1\u606F\u5F39\u7A97"),s.createElement("p",null,"\u4E3A\u65B9\u4FBF\u4F7F\u7528\uFF0C\u5B9A\u4E49\u4E86",s.createElement("code",null,"Alert"),",",s.createElement("code",null,"Msg"),",",s.createElement("code",null,"Success"),",",s.createElement("code",null,"Fail"),",",s.createElement("code",null,"Info"),"\u4EE5\u9002\u5E94\u4E0D\u540C\u573A\u666F\uFF0C\u5982\u679C\u9700\u8981\u5F39\u51FA\u8F83\u4E3A\u590D\u6742\u7684\u5185\u5BB9\uFF0C\u8BF7\u4F7F\u7528 ",s.createElement("code",null,"Dialog"),"\u3002"),s.createElement("div",{className:"card hide",id:"45P8C5"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="alert">Alert</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(p,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Button</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../button&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Message</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClick</span> = (<span class="hljs-params"><span class="hljs-keyword">type</span>: <span class="hljs-built_in">string</span></span>) =&gt; {
    <span class="hljs-title class_">Message</span>.<span class="hljs-title class_">Alert</span>(<span class="hljs-string">&#x27;\u8FD9\u662Falert\u7684\u5185\u5BB9&#x27;</span>, {<span class="hljs-attr">icon</span>: <span class="hljs-keyword">type</span>})
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-Message&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> onClick(&#x27;1&#x27;)} type=&#x27;primary&#x27;&gt;Alert \u6210\u529F<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> onClick(&#x27;2&#x27;)} type=&#x27;primary&#x27;&gt;Alert \u5931\u8D25<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> onClick(&#x27;3&#x27;)} type=&#x27;primary&#x27;&gt;Alert \u8B66\u544A<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("45P8C5");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"6NKIYN"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(c,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Button</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../button&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Message</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClick</span> = (<span class="hljs-params"><span class="hljs-keyword">type</span>: <span class="hljs-built_in">string</span></span>) =&gt; {
    <span class="hljs-title class_">Message</span>.<span class="hljs-title class_">Alert</span>(<span class="hljs-string">&#x27;\u8FD9\u662Falert\u7684\u5185\u5BB9&#x27;</span>, {
      <span class="hljs-attr">icon</span>: <span class="hljs-keyword">type</span>,
      <span class="hljs-attr">callback</span>: <span class="hljs-function">(<span class="hljs-params">close</span>) =&gt;</span> {
        <span class="hljs-title function_">alert</span>(<span class="hljs-string">&#x27;\u786E\u8BA4\u56DE\u8C03\u4E8B\u4EF6&#x27;</span>)
        <span class="hljs-title function_">close</span>()
      }
    })
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-Message&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> onClick(&#x27;1&#x27;)} type=&#x27;primary&#x27;&gt;Alert \u6210\u529F<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> onClick(&#x27;2&#x27;)} type=&#x27;primary&#x27;&gt;Alert \u5931\u8D25<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> onClick(&#x27;3&#x27;)} type=&#x27;primary&#x27;&gt;Alert \u8B66\u544A<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("6NKIYN");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"4PPZXZ"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="msg">Msg</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(r,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Button</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../button&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Message</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClick</span> = (<span class="hljs-params"><span class="hljs-keyword">type</span>: <span class="hljs-built_in">string</span></span>) =&gt; {
    <span class="hljs-title class_">Message</span>.<span class="hljs-title class_">Msg</span>(<span class="hljs-string">&#x27;\u8FD9\u662Falert\u7684\u5185\u5BB9&#x27;</span>, {
      <span class="hljs-attr">icon</span>: <span class="hljs-keyword">type</span>,
      <span class="hljs-attr">callback</span>: <span class="hljs-function">(<span class="hljs-params">close</span>) =&gt;</span> {
        <span class="hljs-title function_">alert</span>(<span class="hljs-string">&#x27;\u786E\u8BA4\u56DE\u8C03\u4E8B\u4EF6&#x27;</span>)
        <span class="hljs-title function_">close</span>()
      }
    })
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-Message&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> onClick(&#x27;1&#x27;)} type=&#x27;primary&#x27;&gt;Alert \u6210\u529F<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> onClick(&#x27;2&#x27;)} type=&#x27;primary&#x27;&gt;Alert \u5931\u8D25<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> onClick(&#x27;3&#x27;)} type=&#x27;primary&#x27;&gt;Alert \u63D0\u793A<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> onClick(&#x27;4&#x27;)} type=&#x27;primary&#x27;&gt;Alert \u8B66\u544A<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("4PPZXZ");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"E36HRF"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="successfailinfo">Success/Fail/Info</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(o,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Button</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../button&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Message</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClick</span> = (<span class="hljs-params"><span class="hljs-keyword">type</span>: <span class="hljs-built_in">string</span></span>) =&gt; {
    <span class="hljs-title class_">Message</span>[<span class="hljs-keyword">type</span>](<span class="hljs-string">&#x27;\u8FD9\u662Falert\u7684\u5185\u5BB9&#x27;</span>)
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-Message&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> onClick(&#x27;Success&#x27;)} type=&#x27;primary&#x27;&gt;Alert \u6210\u529F<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> onClick(&#x27;Fail&#x27;)} type=&#x27;primary&#x27;&gt;Alert \u5931\u8D25<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> onClick(&#x27;Info&#x27;)} type=&#x27;primary&#x27;&gt;Alert \u63D0\u793A<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("E36HRF");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}})))),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:`<h2 id="api">API</h2>
<p>\u6240\u6709\u53C2\u6570\u8BE6\u89C1<a href="/#/dialog">Dialog</a></p>
`}})))}export{g as default};
