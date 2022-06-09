var w=Object.defineProperty,_=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var C=(p,n,t)=>n in p?w(p,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):p[n]=t,b=(p,n)=>{for(var t in n||(n={}))V.call(n,t)&&C(p,t,n[t]);if(q)for(var t of q(n))N.call(n,t)&&C(p,t,n[t]);return p},D=(p,n)=>_(p,v(n));import{r as i,a as A,c as I,p as R,R as s}from"./index.085b3e07.js";import{I as f}from"./Input.fc42faf1.js";import{F as P}from"./contextForm.196e79be.js";import{o as L}from"./index.4eedf3c9.js";import{F as e}from"./FormItem.59110d5e.js";import{B as c}from"./Button.956930fb.js";import{C as M}from"./Group.56288785.js";import"./RadioGroup.d921e07b.js";import"./Option.3107bf8e.js";import"./SelectDown.a490cdb1.js";import"./Tag.f4d6c449.js";import"./dom.0e399110.js";import"./Switch.2f2a76c3.js";import"./Textarea.660e8d99.js";const F=i.exports.forwardRef((p,n)=>{const t=i.exports.useRef([]),u=()=>{const l=[];return t.current.forEach(a=>{l.push({prop:a.prop,value:a.getValue()})}),l},m=l=>{let a=[],r=t.current;l&&l.length>0&&(r=t.current.filter(x=>l.indexOf(x.prop)!==-1));const y=[];return new Promise((x,k)=>{r.forEach(j=>{j.validate().then(()=>{a.push("true"),B()}).catch(E=>{a.push(E),B()}),y.push({prop:j.prop,value:j.getValue()})});const B=()=>{if(a.length===r.length){const j=a.filter(E=>E!=="true");j.length>0?k(j):x(y)}}})},h=l=>{t.current.forEach(a=>{l&&(l==null?void 0:l.length)>0&&(l.includes(a.prop),a.clearTips())})},g=()=>{console.log("\u6062\u590D\u521D\u59CB\u503C\u5F00\u53D1\u4E2D..."),h()},d=l=>{console.log("\u5F00\u53D1\u4E2D...")};i.exports.useImperativeHandle(n,()=>({getValue:u,validate:m,clearValidate:h,resetForm:g,setValue:d}));const o=L(p,["children","className"]);return o.callback=l=>{t.current.push(l)},o.onChange=(l,a)=>{p.onChange&&p.onChange(l,a)},A(P.Provider,{value:o,children:A("form",{className:I(`${R}-form`,p.className),children:p.children})})});F.displayName="Form";F.defaultProps={showMessage:!0,required:!0,trigger:"change",rules:{}};function S(){const[p,n]=i.exports.useState({userName:"userName",password:"passwordValue",password2:"passwordValue"}),t={password:[{type:"required",msg:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"},{type:"minLength",len:6,msg:"\u5BC6\u7801\u4E0D\u80FD\u5C0F\u4E8E6\u4F4D"}],password2:[{type:"required",msg:"\u5BC6\u78012\u4E0D\u80FD\u4E3A\u7A7A"},{type:"fn",msg:"\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4",validator:a=>a===p.password}],userName:[{type:"required",msg:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A"}]},u=i.exports.useRef(null),m=()=>{var a;(a=u.current)==null||a.validate().then(r=>{console.log(r)}).catch(r=>{console.log(r)})},h=()=>{var a;(a=u.current)==null||a.resetForm()},g=()=>{var a;console.log((a=u.current)==null?void 0:a.getValue())},d=()=>{var a;console.log((a=u.current)==null?void 0:a.setValue({}))},o=a=>{n(D(b({},p),{password:a}))},l=(a,r)=>{console.log(a),console.log(r)};return s.createElement("div",{className:"form-demo"},s.createElement(F,{rules:t,ref:u,onChange:l},s.createElement(e,{label:"userName",prop:"userName",type:"input",defaultValue:p.userName,data:{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}}),s.createElement(e,{label:"password",prop:"password"},s.createElement(f,{defaultValue:p.password,placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",onChange:o})),s.createElement(e,{label:"password2",prop:"password2"},s.createElement(f,{defaultValue:p.password2,placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"}))),s.createElement(c,{onClick:m,type:"primary"},"submit"),s.createElement(c,{onClick:h},"reset"),s.createElement(c,{onClick:g},"getValue"),s.createElement(c,{onClick:d},"setValue"))}function T(){const p={userName:"userName",number:"100.00",switch:!1},n=i.exports.useRef(null),t=[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"},{label:"\u9009\u98793",value:"3"}],u={password:[{type:"required",msg:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"},{type:"minLength",len:6,msg:"\u5BC6\u7801\u4E0D\u80FD\u5C0F\u4E8E6\u4F4D"}],userName:[{type:"required",msg:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A"}],mobile:[{type:"required",msg:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},{type:"mobile",msg:"\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"}],mail:[{type:"mail",msg:"\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E"}],digits:[{type:"digits",msg:"\u53EA\u80FD\u8F93\u5165\u6B63\u6574\u6570"}],number:[{type:"number",msg:"\u53EA\u80FD\u8F93\u5165\u6570\u5B57"}],tel:[{type:"tel",msg:"\u7535\u8BDD\u53F7\u7801\u683C\u5F0F\u4E0D\u6B63\u786E"}],city:[{type:"required",msg:"\u57CE\u5E02\u4E0D\u80FD\u4E3A\u7A7A"}],area:[{type:"required",msg:"\u5730\u533A\u4E0D\u80FD\u4E3A\u7A7A"}],select:[{type:"required",msg:"\u4E0B\u62C9\u4E0D\u80FD\u4E3A\u7A7A"}],checkbox:[{type:"required",msg:"\u5FC5\u987B\u540C\u610F\u534F\u8BAE"}],checkboxGroup:[{type:"required",msg:"\u4E0D\u80FD\u4E3A\u7A7A"}],textarea:[{type:"required",msg:"textarea\u4E0D\u80FD\u4E3A\u7A7A"}],radio:[{type:"required",msg:"radio\u4E0D\u80FD\u4E3A\u7A7A"}]},m=()=>{var l;(l=n.current)==null||l.resetForm()},h=()=>{var l;(l=n.current)==null||l.validate().then(a=>{console.log(a)}).catch(a=>{console.log(a)})},g=()=>{var l;(l=n.current)==null||l.validate(["userName","password"]).then(a=>{alert("\u9A8C\u8BC1\u901A\u8FC7"),console.log(a)}).catch(a=>{alert(a),console.log(a)})},d=()=>{var l;console.log((l=n.current)==null?void 0:l.getValue())},o=(l,a)=>{console.log(l),console.log(a)};return s.createElement("div",{className:"form-demo"},s.createElement(F,{ref:n,rules:u,size:"mini",onChange:o,labelWidth:"150px"},s.createElement(e,{label:"\u7528\u6237\u540D",prop:"userName"},s.createElement(f,{defaultValue:p.userName,placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"})),s.createElement(e,{label:"\u5BC6\u7801",prop:"password",type:"input",data:{type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"}}),s.createElement(e,{prop:"mobile",label:"\u624B\u673A\u53F7",type:"input",data:{placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"}}),s.createElement(e,{prop:"mail",label:"\u90AE\u7BB1",type:"input",data:{placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740"}}),s.createElement(e,{prop:"digits",label:"digits",type:"input"}),s.createElement(e,{prop:"number",label:"number",type:"input",defaultValue:p.number}),s.createElement(e,{prop:"tel",label:"tel",type:"input",data:{placeholder:"\u8BF7\u8F93\u5165\u7535\u8BDD\u53F7\u7801"}}),s.createElement(e,{label:"\u57CE\u5E02"},s.createElement(e,{prop:"city",type:"input"}),s.createElement(e,{prop:"area",type:"input"})),s.createElement(e,{label:"radio",prop:"radio",type:"radio",data:{options:t}}),s.createElement(e,{label:"checkbox",prop:"checkboxGroup",type:"checkbox",data:{options:t}}),s.createElement(e,{prop:"select",label:"select",type:"select",data:{options:t,clear:!0,placeholder:"\u8BF7\u9009\u62E9"}}),s.createElement(e,{label:"textarea",prop:"textarea",type:"textarea"}),s.createElement(e,{label:"switch",type:"switch",prop:"switch",defaultValue:p.switch}),s.createElement(e,{prop:"checkbox"},s.createElement(M,{value:"formValue.checkbox"},"\u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F\u2026\u2026")),s.createElement(c,{type:"primary",onClick:h},"\u63D0\u4EA4"),s.createElement(c,{type:"primary",onClick:g}," \u4EC5\u5BF9\u7528\u6237\u540D\u5BC6\u7801\u9A8C\u8BC1 "),s.createElement(c,{onClick:m}," \u91CD\u7F6E\u8868\u5355 "),s.createElement(c,{onClick:d}," \u83B7\u53D6\u8868\u5355\u503C ")))}function ns(p){return s.createElement("div",{className:"doc-container md-pc docs-demo"},s.createElement("div",{className:"code-container"},s.createElement("div",{className:"md-code"}),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:""}})),s.createElement("div",{className:"demo-container"},s.createElement("div",{className:"md-demo"},s.createElement("h1",{id:"form-\u8868\u5355"},"Form \u8868\u5355"),s.createElement("div",{className:"card hide",id:"5Z0PMQ"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u57FA\u672C\u4F7F\u7528">\u57FA\u672C\u4F7F\u7528</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(S,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {useRef} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
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
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const n=document.getElementById("5Z0PMQ");let t=n.className;n.className.indexOf("show")!==-1?t=n.className.replace("show","hide"):n.className.indexOf("hide")!==-1&&(t=n.className.replace("hide","show")),n.className=t}}))),s.createElement("div",{className:"card hide",id:"7L8LRK"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u8868\u5355\u6821\u9A8C">\u8868\u5355\u6821\u9A8C</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(T,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {useRef} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
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
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const n=document.getElementById("7L8LRK");let t=n.className;n.className.indexOf("show")!==-1?t=n.className.replace("show","hide"):n.className.indexOf("hide")!==-1&&(t=n.className.replace("hide","show")),n.className=t}})))),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:`<h2 id="api">API</h2>
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
<td>\u7528\u4E8E\u63A7\u5236\u8BE5\u8868\u5355\u5185\u7EC4\u4EF6\u7684\u5C3A\u5BF8,\u652F\u6301 <code>large</code>\u3001<code>normal</code>\u3001<code>small</code>\u3001<code>mini</code> \u56DB\u79CD\u5C3A\u5BF8\uFF0C\u9ED8\u8BA4\u4E3A <code>normal</code></td>
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
<td>\u8BBE\u7F6E\u8868\u5355\u503C</td>
</tr>
<tr>
<td>getValue</td>
<td>\u83B7\u53D6\u8868\u5355\u503C</td>
</tr>
</tbody></table>
</div>`}})))}export{ns as default};
