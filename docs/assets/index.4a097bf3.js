var n=Object.defineProperty,u=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var o=(a,e,l)=>e in a?n(a,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[e]=l,t=(a,e)=>{for(var l in e||(e={}))f.call(e,l)&&o(a,l,e[l]);if(c)for(var l of c(e))g.call(e,l)&&o(a,l,e[l]);return a},d=(a,e)=>u(a,C(e));import{D as s}from"./Dialog.3da8ec4e.js";import{d as h,a as i,B as N}from"./index.085b3e07.js";const m=a=>{const e=document.createElement("div");h.createRoot(e).render(i(N,{children:i(s,d(t({},a),{isAlert:!0,closeModal:!1,appendToBody:!1,onClose:()=>w(e)}))})),document.body.appendChild(e)},w=a=>{document.body.removeChild(a)},A={Alert:(a,e)=>{m(d(t({},e),{content:a,title:(e==null?void 0:e.title)||"\u4FE1\u606F",confirm:(e==null?void 0:e.confirm)||"\u786E\u5B9A",className:"dialog-alert"}))},Msg:(a,e)=>{m(d(t({},e),{content:a,className:"dialog-msg",showClose:!1,autoClose:(e==null?void 0:e.autoClose)||3,modal:(e==null?void 0:e.modal)||!1}))},Success:(a,e)=>{m(d(t({},e),{content:a,className:"dialog-msg",icon:"1",showClose:!1,autoClose:(e==null?void 0:e.autoClose)||3,modal:(e==null?void 0:e.modal)||!1}))},Fail:(a,e)=>{m(d(t({},e),{content:a,className:"dialog-msg",icon:"2",showClose:!1,autoClose:(e==null?void 0:e.autoClose)||3,modal:(e==null?void 0:e.modal)||!1}))},Info:(a,e)=>{m(d(t({},e),{content:a,className:"dialog-msg",icon:"3",showClose:!1,autoClose:(e==null?void 0:e.autoClose)||3,modal:(e==null?void 0:e.modal)||!1}))}};export{A as M};
