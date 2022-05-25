var G=Object.defineProperty,H=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var A=(e,r,t)=>r in e?G(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))O.call(r,t)&&A(e,t,r[t]);if(N)for(var t of N(r))_.call(r,t)&&A(e,t,r[t]);return e},d=(e,r)=>H(e,W(r));import{r as m,a as o,j as E,F as v}from"./index.ad206765.js";import{c as S}from"./index.926ca9c5.js";import{F as J,p as h,a as K}from"./contextForm.46e5e42c.js";import{I as Q}from"./Input.59ee08c5.js";import{R as U}from"./RadioGroup.a69e12a8.js";import{a as X}from"./Group.66d878a3.js";import{S as Y}from"./Option.5c7d9c7d.js";import{S as ee}from"./Switch.02954967.js";import{T as te}from"./Textarea.8bdd920d.js";import{d as re}from"./index.000cd54b.js";const D=m.exports.forwardRef((e,r)=>{var F;let t=o("div",{});const n=e.defaultValue||((F=e.data)==null?void 0:F.defaultValue),a=m.exports.useRef(n),l=C=>{a.current=C,e.onChange&&e.onChange(C)};switch(e.type){case"radio":t=o(U,d(f({},e.data),{defaultValue:n,onChange:l}));break;case"checkbox":t=o(X,d(f({},e.data),{defaultValue:n,onChange:l}));break;case"select":t=o(Y,d(f({},e.data),{defaultValue:n,onChange:l}));break;case"switch":t=o(ee,d(f({},e.data),{defaultValue:n,onChange:l}));break;case"textarea":t=o(te,d(f({},e.data),{defaultValue:n,onChange:l}));break;default:t=o(Q,d(f({},e.data),{defaultValue:n,onChange:l}))}const k=()=>a.current;return m.exports.useImperativeHandle(r,()=>({getValue:k})),t});D.displayName="Field";const p={digits:/^[0-9]*[1-9][0-9]*$/,number:/^\d+(\.\d+)?$/,mobile:/^1[3|4|5|7|8]\d{9}$/,mail:/^[a-z0-9A-Z._%-]+@([a-z0-9A-Z-]+\.)+[a-zA-Z]{2,4}$/,tel:/^0\d{2,3}-\d{7,8}$/,fax:/^(\d{3,4})?[-]?\d{7,8}$/};function T(e){const r=Function;return new r("return "+e)()}const b=function(e){return/^\s*$/g.test(e)},B=function(e,r,t){return t==="rule"?T(r).test(e):p[r]===void 0?"undefined":T(p[r]).test(e)},ae=function(e,r){for(let t=0,n=r.length;t<n;t++){const a=r[t];switch(a.type){case"required":if(b(e)||e===!1||e===void 0)return a.msg;break;case"digits":case"number":case"mobile":case"mail":case"tel":case"fax":if(!b(e)&&!B(e,a.type))return a.msg;break;case"phone":if(!b(e)&&!(B(e,"mobile")||B(e,"tel")))return a.msg;break;case"maxLength":if(!b(e)&&parseInt(e.length,10)>parseInt(a.len,10))return a.msg;break;case"minLength":if(!b(e)&&parseInt(e.length,10)<parseInt(a.len,10))return a.msg;break;case"rule":if(!b(e)&&!B(e,a.rule,"rule"))return a.msg;break;case"fn":if(!a.validator(e))return a.msg;break}}return!0},z=m.exports.forwardRef((e,r)=>{const t=m.exports.useRef(),n=m.exports.useContext(J),a=(i,c)=>{const s=e[i];return s===c&&Object.keys(n).length>0?n[i]:s},l=a("size",void 0),k=a("labelWidth",void 0),F=a("trigger","change"),C=a("showMessage",!0),[g,V]=m.exports.useState({msg:"",icon:""}),P={display:e.labelVisible?"none":"",width:k},I=[];if(e.verify){const i={required:"\u5FC5\u586B\u5B57\u6BB5",mobile:"\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E",tel:"\u7535\u8BDD\u53F7\u7801\u4E0D\u6B63\u786E",mail:"\u8BF7\u8F93\u5165\u6B63\u786E\u90AE\u7BB1",digits:"\u5FC5\u987B\u4E3A\u6B63\u6574\u6570",number:"\u5FC5\u987B\u4E3A\u6570\u5B57",phone:"\u8BF7\u8F93\u5165\u56FA\u8BDD\u6216\u624B\u673A"};e.verify.split(",").forEach(s=>{I.push({type:s,msg:i[s]})})}let u=(e.rules||[]).concat(I);(u==null?void 0:u.length)===0&&e.prop&&(n==null?void 0:n.rules)&&(u=n.rules[e.prop]||[]);const j=(()=>{let i=!1;return a("required",!0)&&(u==null?void 0:u.length)>0&&u.forEach(s=>{if(s.type==="required")return i=!0,!1}),i})(),y=i=>{const c=i===void 0?t.current:i;let s={msg:"",icon:""};return new Promise((x,$)=>{if(e.error)$(e.error);else if(u.length>0){const w=ae(c,u);w===!0?(s={msg:"",icon:"icon-success"},x(!0)):(s={msg:w,icon:"icon-failure"},$(w))}else x(!0),console.log("\u6CA1\u6709\u6821\u9A8C\u89C4\u5219\u901A\u8FC7"+e.prop);V(s)})},R=()=>t.current,q=()=>{V({icon:"",msg:""})};m.exports.useImperativeHandle(r,()=>({getValue:R,clearTips:q,validate:y}));const L=re(()=>{!e.prop||n.callback&&n.callback({validate:y,clearTips:q,getValue:R,prop:e.prop||""})});m.exports.useEffect(()=>{L()},[]);const M={disabled:n.disabled,controlChange:(i,c)=>{if(t.current=i,c!=="default")if(c==="focus"){let s="";u.forEach(x=>{x.type==="tips"&&(s=x.msg)}),s&&!i&&V({msg:s,icon:"icon-tips"})}else c==="blur"?F&&y(i).catch(s=>{console.log(s)}):c==="change"&&(F==="change"&&y(i).catch(s=>{console.log(s)}),e.onChange&&e.onChange(i),n.onChange&&n.onChange(i,e.prop||""))}},Z=o("label",{className:S({required:j,[h+"-form-label"]:!0}),style:P,children:e.label});return o(K.Provider,{value:M,children:E("div",{className:S(e.className,{[h+"-form-item-error"]:g.msg!=="",[h+"-form-item"]:!0,["form-item-"+l]:l}),children:[e.label?Z:"",E("div",{className:`${h}-form-box`,children:[e.type?o(D,{type:e.type,data:e.data,defaultValue:e.defaultValue}):"",e.children,o(v,{children:g.icon&&C&&((u==null?void 0:u.length)>0||e.error)?g.msg?E("div",{className:`${h}-form-tips`,children:[o("i",{className:g.icon}),o("span",{children:g.msg})]}):o("div",{className:`${h}-form-tips ${g.icon}`}):""})]}),e.other]})})});z.displayName="FormItem";z.defaultProps={required:!0,showMessage:!0,trigger:"change",rules:[]};export{z as F,D as a};
