import{r as t,a as l,j as N}from"./index.ad206765.js";import{a as m,p as x}from"./contextForm.46e5e42c.js";import{c as C}from"./index.926ca9c5.js";const f=t.exports.forwardRef((e,r)=>{const n=t.exports.useContext(m).disabled||e.disabled,[s,o]=t.exports.useState(e.checked),d=()=>{n||(o(!0),e.onChange&&e.onChange(!0))},c=()=>s;return t.exports.useImperativeHandle(r,()=>({getValue:c})),t.exports.useEffect(()=>{o(e.checked)},[e.checked]),l("label",{className:C(e.className,{disabled:n,checked:s,[x+"-radio"]:!0}),onClick:d,children:N("span",{children:[l("span",{className:"radio-inner"}),e.children?l("span",{className:"radio-text",children:e.children}):"",e.label?l("span",{className:"radio-text",children:e.label}):""]})})});f.displayName="Radio";const b=t.exports.forwardRef((e,r)=>{var u,h;const i=((u=e.optionsKey)==null?void 0:u.label)||"label",n=((h=e.optionsKey)==null?void 0:h.value)||"value",s=t.exports.useContext(m),o=s.disabled||e.disabled,[d,c]=t.exports.useState(e.defaultValue),g=a=>{c(a[n]),e.onChange&&e.onChange(a[n],a),s.controlChange&&s.controlChange(a[n],"change")},k=()=>d;return t.exports.useImperativeHandle(r,()=>({getValue:k})),t.exports.useEffect(()=>{c(e.defaultValue)},[e.defaultValue]),l("div",{className:C(`${x}-radio-group`,e.className),children:e.options.map(a=>l(f,{disabled:o||a.disabled,checked:a[n]===d,onChange:()=>g(a),children:a[i]},a[i]))})});b.displayName="RadioGroup";b.defaultProps={optionsKey:{label:"label",value:"value"}};export{b as R,f as a};
