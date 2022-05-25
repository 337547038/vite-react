var B=Object.defineProperty,q=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var x=(t,a,l)=>a in t?B(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,E=(t,a)=>{for(var l in a||(a={}))C.call(a,l)&&x(t,l,a[l]);if(F)for(var l of F(a))A.call(a,l)&&x(t,l,a[l]);return t},f=(t,a)=>q(t,b(a));import{R as s,r as g}from"./index.47748ac2.js";import{I as d}from"./Input.ab0ffaa3.js";import{F as y}from"./Form.e8470c72.js";import{F as p}from"./FormItem.e52db0a6.js";import{B as u}from"./Button.9f8122bb.js";import{C as D}from"./Group.82608e47.js";import"./index.926ca9c5.js";import"./contextForm.e60719b8.js";import"./index.4eedf3c9.js";import"./RadioGroup.0c85b054.js";import"./Option.1c370d33.js";import"./SelectDown.9879e93a.js";import"./Tag.9f851e44.js";import"./Switch.18556f4d.js";import"./Textarea.a312ce93.js";function k(){const[t,a]=g.exports.useState({userName:"userName",password:"passwordValue",password2:"passwordValue"}),l={password:[{type:"required",msg:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"},{type:"minLength",len:6,msg:"\u5BC6\u7801\u4E0D\u80FD\u5C0F\u4E8E6\u4F4D"}],password2:[{type:"required",msg:"\u5BC6\u78012\u4E0D\u80FD\u4E3A\u7A7A"},{type:"fn",msg:"\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4",validator:n=>n===t.password}],userName:[{type:"required",msg:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A"}]},r=g.exports.useRef(null),o=()=>{var n;(n=r.current)==null||n.validate().then(c=>{console.log(c)}).catch(c=>{console.log(c)})},h=()=>{var n;(n=r.current)==null||n.resetForm()},j=()=>{var n;console.log((n=r.current)==null?void 0:n.getValue())},i=()=>{var n;console.log((n=r.current)==null?void 0:n.setValue({}))},m=n=>{a(f(E({},t),{password:n}))},e=(n,c)=>{console.log(n),console.log(c)};return s.createElement("div",{className:"form-demo"},s.createElement(y,{rules:l,ref:r,onChange:e},s.createElement(p,{label:"userName",prop:"userName",type:"input",defaultValue:t.userName,data:{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}}),s.createElement(p,{label:"password",prop:"password"},s.createElement(d,{defaultValue:t.password,placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",onChange:m})),s.createElement(p,{label:"password2",prop:"password2"},s.createElement(d,{defaultValue:t.password2,placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"}))),s.createElement(u,{onClick:o,type:"primary"},"submit"),s.createElement(u,{onClick:h},"reset"),s.createElement(u,{onClick:j},"getValue"),s.createElement(u,{onClick:i},"setValue"))}function w(){const t={userName:"userName",number:"100.00",switch:!1},a=g.exports.useRef(null),l=[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"},{label:"\u9009\u98793",value:"3"}],r={password:[{type:"required",msg:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"},{type:"minLength",len:6,msg:"\u5BC6\u7801\u4E0D\u80FD\u5C0F\u4E8E6\u4F4D"}],userName:[{type:"required",msg:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A"}],mobile:[{type:"required",msg:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},{type:"mobile",msg:"\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"}],mail:[{type:"mail",msg:"\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E"}],digits:[{type:"digits",msg:"\u53EA\u80FD\u8F93\u5165\u6B63\u6574\u6570"}],number:[{type:"number",msg:"\u53EA\u80FD\u8F93\u5165\u6570\u5B57"}],tel:[{type:"tel",msg:"\u7535\u8BDD\u53F7\u7801\u683C\u5F0F\u4E0D\u6B63\u786E"}],city:[{type:"required",msg:"\u57CE\u5E02\u4E0D\u80FD\u4E3A\u7A7A"}],area:[{type:"required",msg:"\u5730\u533A\u4E0D\u80FD\u4E3A\u7A7A"}],select:[{type:"required",msg:"\u4E0B\u62C9\u4E0D\u80FD\u4E3A\u7A7A"}],checkbox:[{type:"required",msg:"\u5FC5\u987B\u540C\u610F\u534F\u8BAE"}],checkboxGroup:[{type:"required",msg:"\u4E0D\u80FD\u4E3A\u7A7A"}],textarea:[{type:"required",msg:"textarea\u4E0D\u80FD\u4E3A\u7A7A"}],radio:[{type:"required",msg:"radio\u4E0D\u80FD\u4E3A\u7A7A"}]},o=()=>{var e;(e=a.current)==null||e.resetForm()},h=()=>{var e;(e=a.current)==null||e.validate().then(n=>{console.log(n)}).catch(n=>{console.log(n)})},j=()=>{var e;(e=a.current)==null||e.validate(["userName","password"]).then(n=>{alert("\u9A8C\u8BC1\u901A\u8FC7"),console.log(n)}).catch(n=>{alert(n),console.log(n)})},i=()=>{var e;console.log((e=a.current)==null?void 0:e.getValue())},m=(e,n)=>{console.log(e),console.log(n)};return s.createElement("div",{className:"form-demo"},s.createElement(y,{ref:a,rules:r,size:"mini",onChange:m,labelWidth:"150px"},s.createElement(p,{label:"\u7528\u6237\u540D",prop:"userName"},s.createElement(d,{defaultValue:t.userName,placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"})),s.createElement(p,{label:"\u5BC6\u7801",prop:"password",type:"input",data:{type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"}}),s.createElement(p,{prop:"mobile",label:"\u624B\u673A\u53F7",type:"input",data:{placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"}}),s.createElement(p,{prop:"mail",label:"\u90AE\u7BB1",type:"input",data:{placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740"}}),s.createElement(p,{prop:"digits",label:"digits",type:"input"}),s.createElement(p,{prop:"number",label:"number",type:"input",defaultValue:t.number}),s.createElement(p,{prop:"tel",label:"tel",type:"input",data:{placeholder:"\u8BF7\u8F93\u5165\u7535\u8BDD\u53F7\u7801"}}),s.createElement(p,{label:"\u57CE\u5E02"},s.createElement(p,{prop:"city",type:"input"}),s.createElement(p,{prop:"area",type:"input"})),s.createElement(p,{label:"radio",prop:"radio",type:"radio",data:{options:l}}),s.createElement(p,{label:"checkbox",prop:"checkboxGroup",type:"checkbox",data:{options:l}}),s.createElement(p,{prop:"select",label:"select",type:"select",data:{options:l,clear:!0,placeholder:"\u8BF7\u9009\u62E9"}}),s.createElement(p,{label:"textarea",prop:"textarea",type:"textarea"}),s.createElement(p,{label:"switch",type:"switch",prop:"switch",defaultValue:t.switch}),s.createElement(p,{prop:"checkbox"},s.createElement(D,{value:"formValue.checkbox"},"\u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F\u2026\u2026")),s.createElement(u,{type:"primary",onClick:h},"\u63D0\u4EA4"),s.createElement(u,{type:"primary",onClick:j}," \u4EC5\u5BF9\u7528\u6237\u540D\u5BC6\u7801\u9A8C\u8BC1 "),s.createElement(u,{onClick:o}," \u91CD\u7F6E\u8868\u5355 "),s.createElement(u,{onClick:i}," \u83B7\u53D6\u8868\u5355\u503C ")))}function J(t){return s.createElement("div",{className:"doc-container md-pc docs-demo"},s.createElement("div",{className:"code-container"},s.createElement("div",{className:"md-code"}),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:""}})),s.createElement("div",{className:"demo-container"},s.createElement("div",{className:"md-demo"},s.createElement("h1",{id:"form-\u8868\u5355"},"Form \u8868\u5355"),s.createElement("div",{className:"card hide",id:"4TUJS3"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u57FA\u672C\u4F7F\u7528">\u57FA\u672C\u4F7F\u7528</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(k,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {useRef} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Form</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">FormItem</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../formItem&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Input</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../input&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Button</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../button&#x27;</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [formValue, setFormValue] = useState&lt;{ [<span class="hljs-attr">key</span>: <span class="hljs-built_in">string</span>]: <span class="hljs-built_in">any</span> }&gt;({
    <span class="hljs-attr">userName</span>: <span class="hljs-string">&#x27;userName&#x27;</span>,
    <span class="hljs-attr">password</span>: <span class="hljs-string">&#x27;passwordValue&#x27;</span>,
    <span class="hljs-attr">password2</span>: <span class="hljs-string">&#x27;passwordValue&#x27;</span>
  })
  <span class="hljs-keyword">const</span> formRules = {
    <span class="hljs-attr">password</span>: [
      {<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;required&#x27;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A&#x27;</span>},
      {<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;minLength&#x27;</span>, <span class="hljs-attr">len</span>: <span class="hljs-number">6</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u5BC6\u7801\u4E0D\u80FD\u5C0F\u4E8E6\u4F4D&#x27;</span>}
    ],
    <span class="hljs-attr">password2</span>: [
      {<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;required&#x27;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u5BC6\u78012\u4E0D\u80FD\u4E3A\u7A7A&#x27;</span>},
      {
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;fn&#x27;</span>,
        <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4&#x27;</span>,
        <span class="hljs-attr">validator</span>: <span class="hljs-function">(<span class="hljs-params">val: <span class="hljs-built_in">string</span></span>) =&gt;</span> {
          <span class="hljs-keyword">return</span> val === formValue.<span class="hljs-property">password</span>
        }
      }
    ],
    <span class="hljs-attr">userName</span>: [{<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;required&#x27;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A&#x27;</span>}]
  }
  <span class="hljs-keyword">const</span> formEl = useRef&lt;<span class="hljs-title class_">FormRef</span>&gt;(<span class="hljs-literal">null</span>)
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">submit</span> = (<span class="hljs-params"></span>) =&gt; {
    formEl.<span class="hljs-property">current</span>?.<span class="hljs-title function_">validate</span>()
      .<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(res)
      })
      .<span class="hljs-title function_">catch</span>(<span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(res)
      })
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">resetForm</span> = (<span class="hljs-params"></span>) =&gt; {
    formEl.<span class="hljs-property">current</span>?.<span class="hljs-title function_">resetForm</span>()
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">getValue</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(formEl.<span class="hljs-property">current</span>?.<span class="hljs-title function_">getValue</span>())
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">setValue</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(formEl.<span class="hljs-property">current</span>?.<span class="hljs-title function_">setValue</span>({}))
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">val: <span class="hljs-built_in">string</span></span>) =&gt; {
    <span class="hljs-title function_">setFormValue</span>({...formValue, <span class="hljs-attr">password</span>: val})
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">formOnChange</span> = (<span class="hljs-params">val: <span class="hljs-built_in">any</span>, prop: <span class="hljs-built_in">string</span></span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(val)
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(prop)
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;form-demo&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Form</span> <span class="hljs-attr">rules</span>=<span class="hljs-string">{formRules}</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{formEl}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{formOnChange}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;userName&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;userName&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&#x27;input&#x27;</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{formValue.userName}</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{{placeholder:</span>&quot;\u8BF7\u8F93\u5165\u7528\u6237\u540D&quot;}}&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;password&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{formValue.password}</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5BC6\u7801&quot;</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;password2&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;password2&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{formValue.password2}</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Form</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{submit}</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>submit<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{resetForm}</span>&gt;</span>reset<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{getValue}</span>&gt;</span>getValue<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{setValue}</span>&gt;</span>setValue<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("4TUJS3");let l=a.className;a.className.indexOf("show")!==-1?l=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(l=a.className.replace("hide","show")),a.className=l}}))),s.createElement("div",{className:"card hide",id:"9WVR2L"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u8868\u5355\u6821\u9A8C">\u8868\u5355\u6821\u9A8C</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(w,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {useRef} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Form</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">FormItem</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../formItem&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Button</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../button&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Checkbox</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../checkbox&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> formValue = {
    <span class="hljs-attr">userName</span>: <span class="hljs-string">&#x27;userName&#x27;</span>,
    <span class="hljs-attr">number</span>: <span class="hljs-string">&#x27;100.00&#x27;</span>,
    <span class="hljs-attr">switch</span>: <span class="hljs-literal">false</span>
  }
  <span class="hljs-keyword">const</span> formEl = useRef&lt;<span class="hljs-title class_">FormRef</span>&gt;(<span class="hljs-literal">null</span>)
  <span class="hljs-keyword">const</span> options = [
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;1&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;2&#x27;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98793&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;3&#x27;</span>}
  ]
  <span class="hljs-keyword">const</span> formRules = {
    <span class="hljs-attr">password</span>: [
      {<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;required&#x27;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A&#x27;</span>},
      {<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;minLength&#x27;</span>, <span class="hljs-attr">len</span>: <span class="hljs-number">6</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u5BC6\u7801\u4E0D\u80FD\u5C0F\u4E8E6\u4F4D&#x27;</span>}
    ],
    <span class="hljs-attr">userName</span>: [{<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;required&#x27;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A&#x27;</span>}],
    <span class="hljs-attr">mobile</span>: [
      {<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;required&#x27;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u8BF7\u8F93\u5165\u624B\u673A\u53F7&#x27;</span>},
      {<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;mobile&#x27;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E&#x27;</span>}
    ],
    <span class="hljs-attr">mail</span>: [{<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;mail&#x27;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E&#x27;</span>}],
    <span class="hljs-attr">digits</span>: [{<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;digits&#x27;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u53EA\u80FD\u8F93\u5165\u6B63\u6574\u6570&#x27;</span>}],
    <span class="hljs-attr">number</span>: [{<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;number&#x27;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u53EA\u80FD\u8F93\u5165\u6570\u5B57&#x27;</span>}],
    <span class="hljs-attr">tel</span>: [{<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;tel&#x27;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u7535\u8BDD\u53F7\u7801\u683C\u5F0F\u4E0D\u6B63\u786E&#x27;</span>}],
    <span class="hljs-attr">city</span>: [{<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;required&#x27;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u57CE\u5E02\u4E0D\u80FD\u4E3A\u7A7A&#x27;</span>}],
    <span class="hljs-attr">area</span>: [{<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;required&#x27;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u5730\u533A\u4E0D\u80FD\u4E3A\u7A7A&#x27;</span>}],
    <span class="hljs-attr">select</span>: [{<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;required&#x27;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u4E0B\u62C9\u4E0D\u80FD\u4E3A\u7A7A&#x27;</span>}],
    <span class="hljs-attr">checkbox</span>: [{<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;required&#x27;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u5FC5\u987B\u540C\u610F\u534F\u8BAE&#x27;</span>}],
    <span class="hljs-attr">checkboxGroup</span>: [{<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;required&#x27;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;\u4E0D\u80FD\u4E3A\u7A7A&#x27;</span>}],
    <span class="hljs-attr">textarea</span>: [{<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;required&#x27;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;textarea\u4E0D\u80FD\u4E3A\u7A7A&#x27;</span>}],
    <span class="hljs-attr">radio</span>: [{<span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;required&#x27;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;radio\u4E0D\u80FD\u4E3A\u7A7A&#x27;</span>}],
    <span class="hljs-comment">/*datePicker: [{type: &#x27;required&#x27;, msg: &#x27;\u8BF7\u9009\u62E9\u65E5\u671F&#x27;}],
    timePicker: [{type: &#x27;required&#x27;, msg: &#x27;\u8BF7\u9009\u62E9\u65F6\u95F4&#x27;}],
    timeSelect: [{type: &#x27;required&#x27;, msg: &#x27;\u8BF7\u9009\u62E9\u65F6\u95F4&#x27;}]*/</span>
  }
  <span class="hljs-comment">// \u91CD\u7F6E</span>
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">resetForm</span> = (<span class="hljs-params"></span>) =&gt; {
    formEl.<span class="hljs-property">current</span>?.<span class="hljs-title function_">resetForm</span>()
  }
  <span class="hljs-comment">// \u8868\u5355\u63D0\u4EA4</span>
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">submit</span> = (<span class="hljs-params"></span>) =&gt; {
    formEl.<span class="hljs-property">current</span>?.<span class="hljs-title function_">validate</span>()
      .<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">res: <span class="hljs-built_in">any</span></span>) =&gt;</span> {
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(res)
      })
      .<span class="hljs-title function_">catch</span>(<span class="hljs-function">(<span class="hljs-params">res: <span class="hljs-built_in">string</span>[]</span>) =&gt;</span> {
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(res)
      })
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">submit2</span> = (<span class="hljs-params"></span>) =&gt; {
    formEl.<span class="hljs-property">current</span>?.<span class="hljs-title function_">validate</span>([<span class="hljs-string">&#x27;userName&#x27;</span>, <span class="hljs-string">&#x27;password&#x27;</span>])
      .<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">res: <span class="hljs-built_in">any</span></span>) =&gt;</span> {
        <span class="hljs-title function_">alert</span>(<span class="hljs-string">&#x27;\u9A8C\u8BC1\u901A\u8FC7&#x27;</span>)
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(res)
      })
      .<span class="hljs-title function_">catch</span>(<span class="hljs-function">(<span class="hljs-params">res: <span class="hljs-built_in">string</span>[]</span>) =&gt;</span> {
        <span class="hljs-title function_">alert</span>(res)
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(res)
      })
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">getValue</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(formEl.<span class="hljs-property">current</span>?.<span class="hljs-title function_">getValue</span>())
  }
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">val: <span class="hljs-built_in">any</span>, prop: <span class="hljs-built_in">string</span></span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(val)
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(prop)
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;form-demo&#x27;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{formEl}</span> <span class="hljs-attr">rules</span>=<span class="hljs-string">{formRules}</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span> <span class="hljs-attr">labelWidth</span>=<span class="hljs-string">&#x27;150px&#x27;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7528\u6237\u540D&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;userName&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{formValue.userName}</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u7528\u6237\u540D&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5BC6\u7801&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&#x27;input&#x27;</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{{type:</span> &#x27;<span class="hljs-attr">password</span>&#x27;, <span class="hljs-attr">placeholder:</span> &quot;\u8BF7\u8F93\u5165\u5BC6\u7801&quot;}}&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;mobile&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">{</span>&#x27;\u624B\u673A\u53F7&#x27;} <span class="hljs-attr">type</span>=<span class="hljs-string">&#x27;input&#x27;</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{{placeholder:</span> &quot;\u8BF7\u8F93\u5165\u624B\u673A\u53F7&quot;}} /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;mail&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u90AE\u7BB1&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&#x27;input&#x27;</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{{placeholder:</span> &quot;\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740&quot;}} /&gt;</span>

        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;digits&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;digits&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&#x27;input&#x27;</span> /&gt;</span>

        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;number&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;number&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&#x27;input&#x27;</span>  <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{formValue.number}/</span>&gt;</span>

        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;tel&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tel&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&#x27;input&#x27;</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{{placeholder:</span> &quot;\u8BF7\u8F93\u5165\u7535\u8BDD\u53F7\u7801&quot;}} /&gt;</span>

        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u57CE\u5E02&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;city&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&#x27;input&#x27;</span> /&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;area&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&#x27;input&#x27;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
        {/*<span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u533A\u9009\u62E9&quot;</span> <span class="hljs-attr">verify</span>=<span class="hljs-string">&quot;required&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span>
          <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;formValue.cascader&quot;</span>
          <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9&quot;</span>
        <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;[
        {
          label: &#x27;\u5E7F\u4E1C&#x27;,
          value: &#x27;1&#x27;,
          children: [{label: &#x27;\u5E7F\u5DDE&#x27;, value: &#x27;2&#x27;}]
        }
        ]&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>*/}
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;radio&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;radio&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&#x27;radio&#x27;</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{{options:</span> <span class="hljs-attr">options</span>}} /&gt;</span>

        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;checkbox&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;checkboxGroup&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&#x27;checkbox&#x27;</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{{options:</span> <span class="hljs-attr">options</span>}} /&gt;</span>

        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;select&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;select&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&#x27;select&#x27;</span>
                  <span class="hljs-attr">data</span>=<span class="hljs-string">{{options:</span> <span class="hljs-attr">options</span>, <span class="hljs-attr">clear:</span> <span class="hljs-attr">true</span>, <span class="hljs-attr">placeholder:</span> &#x27;\u8BF7\u9009\u62E9&#x27;}} /&gt;</span>

        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;textarea&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;textarea&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&#x27;textarea&#x27;</span> /&gt;</span>

        {/*<span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;datePicker&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;datePicker&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;formValue.datePicker&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>*/}
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;switch&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&#x27;switch&#x27;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&#x27;switch&#x27;</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{formValue.switch}/</span>&gt;</span>

        {/*<span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;timePicker&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;timePicker&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-time-picker</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;formValue.timePicker&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>*/}
        {/*<span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;timeSelect&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;timeSelect&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-time-select</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;formValue.timeSelect&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>*/}
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;checkbox&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;formValue.checkbox&quot;</span>&gt;</span>\u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F\u2026\u2026<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{submit}</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{submit2}</span>&gt;</span> \u4EC5\u5BF9\u7528\u6237\u540D\u5BC6\u7801\u9A8C\u8BC1 <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{resetForm}</span>&gt;</span> \u91CD\u7F6E\u8868\u5355 <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{getValue}</span>&gt;</span> \u83B7\u53D6\u8868\u5355\u503C <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Form</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("9WVR2L");let l=a.className;a.className.indexOf("show")!==-1?l=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(l=a.className.replace("hide","show")),a.className=l}})))),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:`<h2 id="api">API</h2>
<div class="card"><h3 id="form-props">Form Props</h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>rules</td>
<td>object</td>
<td>\u6821\u9A8C\u89C4\u5219</td>
</tr>
<tr>
<td>showMessage</td>
<td>boolean/true</td>
<td>\u663E\u793A\u9519\u8BEF\u63D0\u793A</td>
</tr>
<tr>
<td>trigger</td>
<td>string/change</td>
<td>\u8868\u5355\u63A7\u4EF6\u6821\u9A8C\u89E6\u53D1\u7C7B\u578B\uFF0Cchange\u548Cblur\u4E24\u79CD</td>
</tr>
<tr>
<td>labelWidth</td>
<td>string</td>
<td>label\u7684\u5BBD\u5EA6</td>
</tr>
<tr>
<td>required</td>
<td>boolean/true</td>
<td>\u662F\u5426\u6839\u636E\u9A8C\u8BC1\u89C4\u5219\u81EA\u52A8\u751F\u6210\u5FC5\u586B\u6837\u5F0F\u540D</td>
</tr>
<tr>
<td>size</td>
<td>string</td>
<td>\u7528\u4E8E\u63A7\u5236\u8BE5\u8868\u5355\u5185\u7EC4\u4EF6\u7684\u5C3A\u5BF8\uFF0Cmedium / small / mini</td>
</tr>
<tr>
<td>disabled</td>
<td>boolean/true</td>
<td>\u8868\u5355\u7981\u7528\u72B6\u6001\uFF0C\u5F71\u54CD\u5B50\u7EA7formItem,button\u53CAformItem\u4E0B\u6240\u6709\u8868\u5355\u63A7\u4EF6</td>
</tr>
<tr>
<td>onChange</td>
<td>function(val,props)</td>
<td>\u8868\u5355\u9879\u6539\u53D8\u4E8B\u4EF6</td>
</tr>
</tbody></table>
</div><div class="card"><h3 id="form-methods">Form Methods</h3>
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
<td>clearValidate</td>
<td>\u79FB\u9664\u8868\u5355\u9879\u7684\u6821\u9A8C\u7ED3\u679C\u3002\u4F20\u5165\u5F85\u79FB\u9664\u7684\u8868\u5355\u9879\u7684 prop \u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u5982\u4E0D\u4F20\u5219\u79FB\u9664\u6574\u4E2A\u8868\u5355\u7684\u6821\u9A8C\u7ED3\u679C</td>
</tr>
<tr>
<td>resetForm</td>
<td>\u91CD\u7F6E\u8868\u5355</td>
</tr>
<tr>
<td>setValue</td>
<td>\u4F7F\u7528resetForm\u529F\u80FD\u65F6\uFF0C\u5F53\u8868\u5355\u6570\u636E\u53D1\u751F\u6539\u53D8\uFF0C\u9700\u4F7F\u7528setValue\u8BBE\u7F6E</td>
</tr>
<tr>
<td>getValue</td>
<td>\u83B7\u53D6\u8868\u5355\u503C</td>
</tr>
</tbody></table>
</div>`}})))}export{J as default};
