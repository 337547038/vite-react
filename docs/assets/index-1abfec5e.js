import{a as m,j as t,B as d}from"./index-eab8b3d4.js";import{D as o}from"./Dialog-6e1f52db.js";const l=a=>{const e=document.createElement("div");m.createRoot(e).render(t.jsx(d,{children:t.jsx(o,{...a,isAlert:!0,closeModal:!1,appendToBody:!1,onClose:()=>c(e)})})),document.body.appendChild(e)},c=a=>{document.body.removeChild(a)},u={Alert:(a,e)=>{l({...e,content:a,title:(e==null?void 0:e.title)||"信息",confirm:(e==null?void 0:e.confirm)||"确定",className:"dialog-alert"})},Msg:(a,e)=>{l({...e,content:a,className:"dialog-msg",showClose:!1,autoClose:(e==null?void 0:e.autoClose)||3,modal:(e==null?void 0:e.modal)||!1})},Success:(a,e)=>{l({...e,content:a,className:"dialog-msg",icon:"1",showClose:!1,autoClose:(e==null?void 0:e.autoClose)||3,modal:(e==null?void 0:e.modal)||!1})},Fail:(a,e)=>{l({...e,content:a,className:"dialog-msg",icon:"2",showClose:!1,autoClose:(e==null?void 0:e.autoClose)||3,modal:(e==null?void 0:e.modal)||!1})},Info:(a,e)=>{l({...e,content:a,className:"dialog-msg",icon:"3",showClose:!1,autoClose:(e==null?void 0:e.autoClose)||3,modal:(e==null?void 0:e.modal)||!1})}};export{u as M};