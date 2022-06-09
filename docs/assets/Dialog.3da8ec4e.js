var te=Object.defineProperty,le=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var V=(e,t,o)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,P=(e,t)=>{for(var o in t||(t={}))ie.call(t,o)&&V(e,o,t[o]);if(O)for(var o of O(t))ce.call(t,o)&&V(e,o,t[o]);return e},X=(e,t)=>le(e,oe(t));import{r as i,a as n,c as b,p as c,j as D,b as ae}from"./index.085b3e07.js";import{B as Y}from"./Button.956930fb.js";import{g as ne,a as se,s as re,b as de}from"./dom.0e399110.js";const he=e=>{const{zIndex:t=999,appendToBody:o=!0,modal:z=!0,closeModal:L=!0,showClose:q=!0,autoClose:r=0,closeTips:G="S\u79D2\u540E\u81EA\u52A8\u5173\u95ED",icon:x=0,animationDuration:E=500}=e,[$,A]=i.exports.useState(e.visible),[R,J]=i.exports.useState({}),[d,K]=i.exports.useState({}),[u,y]=i.exports.useState(0),C=i.exports.useRef(null),k=i.exports.useRef(null),a=i.exports.useRef(0),[Q,I]=i.exports.useState("");i.exports.useEffect(()=>{e.isAlert?setTimeout(()=>{T(!0),r>0&&(a.current&&window.clearInterval(a.current),y(r))},50):T(e.visible),e.visible&&r>0&&(a.current&&window.clearInterval(a.current),y(r))},[e.visible]),i.exports.useEffect(()=>(u>0&&r>0&&(a.current=window.setInterval(()=>{console.log(u),u>1?y(u-1):(e.callback&&e.callback(f),f())},1e3)),()=>{a.current&&window.clearInterval(a.current)}),[u]),i.exports.useEffect(()=>{e.lockScroll&&K(X(P({},d),{scrollbar:ne(!0)}))},[]);const v=l=>{if(!L&&l==="modal")return!1;if(!e.autoClose&&l==="confirm"&&e.callback)return e.callback(f),!1;if(e.beforeClose&&!e.beforeClose(l,f))return!1;f()},S=i.exports.useRef(0),T=l=>{S.current&&window.clearTimeout(S.current);let s=`dialog-${e.animation||"fade"}-exit-active`;l&&(A(!0),s=`dialog-${e.animation||"fade"}-enter-active`),I(s),S.current=window.setTimeout(()=>{l||A(!1),I("")},E)},f=()=>{r&&a.current&&window.clearInterval(a.current),T(!1),U(!1),setTimeout(()=>{e.onClose&&e.onClose()},E)},U=l=>{if(e.lockScroll){const{hasScroll:s,width:N}=d.scrollbar;s&&l&&(document.body.style.overflow="hidden",document.body.style.paddingRight=N+"px"),!l&&s&&(document.body.style.overflow="",document.body.style.paddingRight="")}},Z=l=>{l.stopPropagation()},_=l=>{if(e.move&&C.current){d.moveFlag=!1;let s=se(C.current),N=l.pageX-s.left,p=l.pageY-s.top;const ee=re();d.moveFlag=!0,document.onmousemove=F=>{var W,H;if(d.moveFlag){let g=F.pageX-N,h=F.pageY-p-ee;const w=de(),M=((W=k.current)==null?void 0:W.offsetHeight)||0,j=((H=k.current)==null?void 0:H.offsetWidth)||0;g<=0?g=0:g>w.width-j&&(g=w.width-j),h<=0?h=0:h>w.height-M&&(h=w.height-M),J({left:g+"px",top:h+"px"})}return!1},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null,d.moveFlag=!1}}};let m="";switch(x+""){case"1":m="success";break;case"2":m="failure";break;case"3":m="tips";break;default:m=x+""}const B=n("div",{className:b(`${c}-dialog-modal`,Q,{modal:!z,center:e.center,"is-visible":$}),style:{zIndex:t,display:$?"":"none"},onClick:()=>{v("modal")},children:D("div",{ref:k,className:b(e.className,{[c+"-dialog"]:!0,[c+"-dialog-isAlert"]:e.isAlert}),style:{width:e.width,top:R.top,left:R.left,transitionDuration:d.moveFlag?"0s":""},onClick:Z,children:[q?n("a",{className:`${c}-dialog-close icon-close`,onClick:()=>{v("close")}}):"",r>0?n("div",{className:`${c}-dialog-auto-close`,children:n("span",{children:G.replace("S",u.toString())})}):"",e.title?n("div",{className:b(`${c}-dialog-header`,{move:e.move}),onMouseDown:_,ref:C,children:e.title}):"",e.content||e.children?D("div",{style:{height:e.height},className:b({[c+"-dialog-alert"]:e.isAlert,[c+"-dialog-content"]:!0}),children:[x?n("i",{className:`icon-${m}`}):"",e.content?n("div",{className:c+"-dialog-text",children:e.content}):e.children]}):"",e.confirm||e.cancel||e.footer?D("div",{className:`${c}-dialog-footer`,children:[e.footer?e.footer:"",e.cancel?n(Y,{type:"cancel",onClick:()=>{v("cancel")},children:e.cancel}):"",e.confirm?n(Y,{"v-if":"confirm",type:"primary",onClick:()=>{v("confirm")},children:e.confirm}):""]}):""]})});return o?ae.createPortal(B,document.body):B};export{he as D};
