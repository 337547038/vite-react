import{R as s,r as c}from"./index.95d8ce5f.js";import{M as l}from"./Menu.079de78f.js";import{S as u}from"./Switch.dba31ac8.js";import"./index.4eedf3c9.js";import"./Tooltip.2e41c463.js";import"./dom.0e399110.js";import"./CSSTransition.6ccddacf.js";import"./contextForm.cd12c54d.js";const t=[{label:"\u7528\u6237\u7BA1\u7406",key:"user",icon:"user",children:[{label:"\u7528\u6237\u5217\u8868",key:"aa"},{label:"\u6DFB\u52A0\u7528\u6237",key:"ab"}]},{label:"Navigator Two",key:"b",icon:"search",children:[{label:"item one",key:"b1",children:[{label:"item two",key:"b2"},{label:"item three",key:"b3"}]},{label:"item one",key:"b4"},{label:"item one",key:"b5"}]},{label:"\u7CFB\u7EDF\u8BBE\u7F6E",key:"set",icon:"date",disabled:!0}];function r(){return s.createElement("div",null,s.createElement(l,{items:t,mode:"horizontal"}),s.createElement("p",null,"dark\u4E3B\u9898"),s.createElement(l,{items:t,mode:"horizontal",theme:"dark"}),s.createElement("p",null,"trigger=click"),s.createElement(l,{items:t,mode:"horizontal",trigger:"click"}))}function d(){return s.createElement("div",{style:{width:200}},s.createElement(l,{items:t,mode:"vertical"}),s.createElement("p",null,"dark\u4E3B\u9898"),s.createElement(l,{items:t,mode:"vertical",theme:"dark"}))}function i(){const[e,a]=c.exports.useState(!0),n=p=>{a(p)};return s.createElement("div",{style:{width:200}},s.createElement("div",null,s.createElement(u,{onChange:n,defaultValue:e})),s.createElement(l,{items:t,mode:"vertical",collapse:e}),s.createElement("p",null,"dark\u4E3B\u9898"),s.createElement(l,{items:t,mode:"vertical",theme:"dark",collapse:e}))}function k(e){return s.createElement("div",{className:"doc-container md-pc docs-demo"},s.createElement("div",{className:"code-container"},s.createElement("div",{className:"md-code"}),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:""}})),s.createElement("div",{className:"demo-container"},s.createElement("div",{className:"md-demo"},s.createElement("h1",{id:"menu-\u83DC\u5355\u5BFC\u822A"},"Menu \u83DC\u5355\u5BFC\u822A"),s.createElement("div",{className:"card hide",id:"AD47Y2"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u57FA\u672C\u7528\u6CD5">\u57FA\u672C\u7528\u6CD5</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(r,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {Button} from <span class="hljs-string">&#x27;../button&#x27;</span>
<span class="hljs-keyword">import</span> {Menu} from <span class="hljs-string">&#x27;./index&#x27;</span>

const items = [
  {
    label: <span class="hljs-string">&#x27;\u7528\u6237\u7BA1\u7406&#x27;</span>,
   <span class="hljs-built_in"> key</span>: <span class="hljs-string">&#x27;user&#x27;</span>,
    icon: <span class="hljs-string">&#x27;user&#x27;</span>,
    children: [
      {
        label: <span class="hljs-string">&#x27;\u7528\u6237\u5217\u8868&#x27;</span>,
       <span class="hljs-built_in"> key</span>: <span class="hljs-string">&#x27;aa&#x27;</span>
      },
      {
        label: <span class="hljs-string">&#x27;\u6DFB\u52A0\u7528\u6237&#x27;</span>,
       <span class="hljs-built_in"> key</span>: <span class="hljs-string">&#x27;ab&#x27;</span>
      }
    ]
  },
  {
    label: <span class="hljs-string">&#x27;Navigator Two&#x27;</span>,
   <span class="hljs-built_in"> key</span>: <span class="hljs-string">&#x27;b&#x27;</span>,
    icon: <span class="hljs-string">&#x27;search&#x27;</span>,
    children: [
      {
        label: <span class="hljs-string">&#x27;item one&#x27;</span>,
       <span class="hljs-built_in"> key</span>: <span class="hljs-string">&#x27;b1&#x27;</span>,
        children: [
          {
            label: <span class="hljs-string">&#x27;item two&#x27;</span>,
           <span class="hljs-built_in"> key</span>: <span class="hljs-string">&#x27;b2&#x27;</span>,
          },
          {
            label: <span class="hljs-string">&#x27;item three&#x27;</span>,
           <span class="hljs-built_in"> key</span>: <span class="hljs-string">&#x27;b3&#x27;</span>,
          }
        ]
      },
      {
        label: <span class="hljs-string">&#x27;item one&#x27;</span>,
       <span class="hljs-built_in"> key</span>: <span class="hljs-string">&#x27;b4&#x27;</span>,
      },
      {
        label: <span class="hljs-string">&#x27;item one&#x27;</span>,
       <span class="hljs-built_in"> key</span>: <span class="hljs-string">&#x27;b5&#x27;</span>,
      }
    ]
  },
  {
    label: <span class="hljs-string">&#x27;\u7CFB\u7EDF\u8BBE\u7F6E&#x27;</span>,
   <span class="hljs-built_in"> key</span>: <span class="hljs-string">&#x27;set&#x27;</span>,
    icon: <span class="hljs-string">&#x27;date&#x27;</span>,
    disabled:<span class="hljs-built_in"> true</span>
  }
]

<span class="hljs-keyword">function</span> Example() {
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Menu</span> <span class="hljs-attr">items</span>=</span></span><span class="language-xquery">{items}</span><span class="language-xml"><span class="hljs-tag"> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;horizontal&quot;</span> /&gt;</span>
    </span><span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>dark\u4E3B\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span><span class="language-xml">
    <span class="hljs-tag">&lt;<span class="hljs-name">Menu</span> <span class="hljs-attr">items</span>=</span></span><span class="language-xquery">{items}</span><span class="language-xml"><span class="hljs-tag"> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;horizontal&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&#x27;dark&#x27;</span> /&gt;</span>
    </span><span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>trigger=click<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span><span class="language-xml">
    <span class="hljs-tag">&lt;<span class="hljs-name">Menu</span> <span class="hljs-attr">items</span>=</span></span><span class="language-xquery">{items}</span><span class="language-xml"><span class="hljs-tag"> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;horizontal&quot;</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">&#x27;click&#x27;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

export <span class="hljs-keyword">default</span> Example
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("AD47Y2");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"5Z2Y9L"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u5782\u76F4\u83DC\u5355">\u5782\u76F4\u83DC\u5355</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(d,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Button</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../button&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Menu</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{width:</span> <span class="hljs-attr">200</span>}}&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Menu</span> <span class="hljs-attr">items</span>=<span class="hljs-string">{items}</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;vertical&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>dark\u4E3B\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Menu</span> <span class="hljs-attr">items</span>=<span class="hljs-string">{items}</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;vertical&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&#x27;dark&#x27;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("5Z2Y9L");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"7QDQQF"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="collapse">Collapse</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(i,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Switch</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../switch&#x27;</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [collapse, setCollapse] = useState &lt; <span class="hljs-built_in">boolean</span> &gt; (<span class="hljs-literal">true</span>)
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">val: <span class="hljs-built_in">any</span></span>) =&gt; {
    <span class="hljs-title function_">setCollapse</span>(val)
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{width:</span> <span class="hljs-attr">200</span>}}&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">Switch</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{collapse}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Switch</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Menu</span> <span class="hljs-attr">items</span>=<span class="hljs-string">{items}</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;vertical&quot;</span> <span class="hljs-attr">collapse</span>=<span class="hljs-string">{collapse}</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>dark\u4E3B\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Menu</span> <span class="hljs-attr">items</span>=<span class="hljs-string">{items}</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;vertical&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&#x27;dark&#x27;</span> <span class="hljs-attr">collapse</span>=<span class="hljs-string">{collapse}</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("7QDQQF");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}})))),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:`<h2 id="api">API</h2>
<div class="card"><h3 id="menu">Menu</h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>mode</td>
<td>string</td>
<td>\u83DC\u5355\u7C7B\u578B\uFF0C\u73B0\u5728\u5782\u76F4\u3001\u6C34\u5E73  <code>vertical\u3001 horizontal</code>\uFF0C\u9ED8\u8BA4<code>vertical</code></td>
</tr>
<tr>
<td>collapse</td>
<td>boolean</td>
<td>\u662F\u5426\u6C34\u5E73\u6298\u53E0\u6536\u8D77\u83DC\u5355\uFF08\u4EC5\u5728 mode \u4E3A vertical \u65F6\u53EF\u7528\uFF09</td>
</tr>
<tr>
<td>items</td>
<td>Items[]</td>
<td>\u83DC\u5355\u5185\u5BB9</td>
</tr>
<tr>
<td>trigger</td>
<td>string</td>
<td>\u5B50\u83DC\u5355\u6253\u5F00\u7684\u89E6\u53D1\u65B9\u5F0F\uFF0C\u53EA\u5728 mode \u4E3A horizontal \u65F6\u6709\u6548\uFF0C &#39;hover&#39;\uFF08\u9ED8\u8BA4\uFF09 \u3001 &quot;click&quot;</td>
</tr>
<tr>
<td>theme</td>
<td>string</td>
<td>\u4E3B\u9898\u989C\u8272  <code>light(\u9ED8\u8BA4) \u3001 dark</code></td>
</tr>
<tr>
<td>style</td>
<td>CSSProperties</td>
<td>\u6839\u8282\u70B9\u6837\u5F0F</td>
</tr>
<tr>
<td>liHeight</td>
<td>number</td>
<td>\u5B50\u83DC\u5355\u9879\u9AD8\uFF0C\u4EC5\u5728mode\u4E3Avertical\u65F6\uFF0C\u7528\u4E8E\u8BA1\u7B97\u9AD8\u5EA6\u5E73\u6ED1\u52A8\u753B\u6548\u679C</td>
</tr>
<tr>
<td>openKeys</td>
<td>string[]</td>
<td>\u521D\u59CB\u5C55\u5F00\u7684\u9879</td>
</tr>
<tr>
<td>router</td>
<td>boolean</td>
<td>\u662F\u5426\u542F\u7528router\u6A21\u5F0F\uFF0C\u5F00\u542F\u4F1A\u5728\u70B9\u51FB\u5BFC\u822A\u65F6\u4EE5key\u4F5C\u4E3Apath\u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C</td>
</tr>
<tr>
<td>selectedKey</td>
<td>string</td>
<td>\u5F53\u524D\u9009\u4E2D\u7684\u9879</td>
</tr>
<tr>
<td>onSelect</td>
<td>function</td>
<td>\u88AB\u9009\u4E2D\u65F6\u8C03\u7528</td>
</tr>
<tr>
<td>onClick</td>
<td>function</td>
<td>\u70B9\u51FBitem\u9879\u65F6\u8C03\u7528</td>
</tr>
</tbody></table>
</div><div class="card"><h3 id="menu-items">Menu Items</h3>
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
<td>\u663E\u793A\u7684\u540D\u79F0</td>
</tr>
<tr>
<td>key</td>
<td>string</td>
<td>\u552F\u4E00\u6807\u8BC6\u7B26</td>
</tr>
<tr>
<td>icon</td>
<td>string</td>
<td>\u540D\u79F0\u524Dicon\u56FE\u6807</td>
</tr>
<tr>
<td>disabled</td>
<td>boolean</td>
<td>\u662F\u5426\u53EF\u7528</td>
</tr>
</tbody></table>
</div>`}})))}export{k as default};
