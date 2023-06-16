import{r as l,j as i,c as v,p as o,b as U}from"./index-eab8b3d4.js";import{B as W}from"./Button-658a5c6d.js";import{g as Z,a as _,s as p,b as ee}from"./dom-7dcdc27f.js";const oe=e=>{const{zIndex:H=999,appendToBody:M=!0,modal:O=!0,closeModal:V=!0,showClose:P=!0,autoClose:a=0,closeTips:X="S秒后自动关闭",icon:w=0,animationDuration:j=500}=e,[T,N]=l.useState(e.visible),[R,Y]=l.useState({}),[s,z]=l.useState({}),[r,b]=l.useState(0),x=l.useRef(null),y=l.useRef(null),c=l.useRef(0),[L,$]=l.useState("");l.useEffect(()=>{e.isAlert?setTimeout(()=>{k(!0),a>0&&(c.current&&window.clearInterval(c.current),b(a))},50):k(e.visible),e.visible&&a>0&&(c.current&&window.clearInterval(c.current),b(a))},[e.visible]),l.useEffect(()=>(r>0&&a>0&&(c.current=window.setInterval(()=>{console.log(r),r>1?b(r-1):(e.callback&&e.callback(d),d())},1e3)),()=>{c.current&&window.clearInterval(c.current)}),[r]),l.useEffect(()=>{e.lockScroll&&z({...s,scrollbar:Z(!0)})},[]);const g=t=>{if(!V&&t==="modal")return!1;if(!e.autoClose&&t==="confirm"&&e.callback)return e.callback(d),!1;if(e.beforeClose&&!e.beforeClose(t,d))return!1;d()},C=l.useRef(0),k=t=>{C.current&&window.clearTimeout(C.current);let n=`dialog-${e.animation||"fade"}-exit-active`;t&&(N(!0),n=`dialog-${e.animation||"fade"}-enter-active`),$(n),C.current=window.setTimeout(()=>{t||N(!1),$("")},j)},d=()=>{a&&c.current&&window.clearInterval(c.current),k(!1),q(!1),setTimeout(()=>{e.onClose&&e.onClose()},j)},q=t=>{if(e.lockScroll){const{hasScroll:n,width:S}=s.scrollbar;n&&t&&(document.body.style.overflow="hidden",document.body.style.paddingRight=S+"px"),!t&&n&&(document.body.style.overflow="",document.body.style.paddingRight="")}},G=t=>{t.stopPropagation()},J=t=>{if(e.move&&x.current){s.moveFlag=!1;let n=_(x.current),S=t.pageX-n.left,K=t.pageY-n.top;const Q=p();s.moveFlag=!0,document.onmousemove=E=>{var I,A;if(s.moveFlag){let f=E.pageX-S,m=E.pageY-K-Q;const h=ee(),B=((I=y.current)==null?void 0:I.offsetHeight)||0,F=((A=y.current)==null?void 0:A.offsetWidth)||0;f<=0?f=0:f>h.width-F&&(f=h.width-F),m<=0?m=0:m>h.height-B&&(m=h.height-B),Y({left:f+"px",top:m+"px"})}return!1},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null,s.moveFlag=!1}}};let u="";switch(w+""){case"1":u="success";break;case"2":u="failure";break;case"3":u="tips";break;default:u=w+""}const D=i.jsx("div",{className:v(`${o}-dialog-modal`,L,{modal:!O,center:e.center,"is-visible":T}),style:{zIndex:H,display:T?"":"none"},onClick:()=>{g("modal")},children:i.jsxs("div",{ref:y,className:v(e.className,{[o+"-dialog"]:!0,[o+"-dialog-isAlert"]:e.isAlert}),style:{width:e.width,top:R.top,left:R.left,transitionDuration:s.moveFlag?"0s":""},onClick:G,children:[P?i.jsx("a",{className:`${o}-dialog-close icon-close`,onClick:()=>{g("close")}}):"",a>0?i.jsx("div",{className:`${o}-dialog-auto-close`,children:i.jsx("span",{children:X.replace("S",r.toString())})}):"",e.title?i.jsx("div",{className:v(`${o}-dialog-header`,{move:e.move}),onMouseDown:J,ref:x,children:e.title}):"",e.content||e.children?i.jsxs("div",{style:{height:e.height},className:v({[o+"-dialog-alert"]:e.isAlert,[o+"-dialog-content"]:!0}),children:[w?i.jsx("i",{className:`icon-${u}`}):"",e.content?i.jsx("div",{className:o+"-dialog-text",children:e.content}):e.children]}):"",e.confirm||e.cancel||e.footer?i.jsxs("div",{className:`${o}-dialog-footer`,children:[e.footer?e.footer:"",e.cancel?i.jsx(W,{type:"cancel",onClick:()=>{g("cancel")},children:e.cancel}):"",e.confirm?i.jsx(W,{"v-if":"confirm",type:"primary",onClick:()=>{g("confirm")},children:e.confirm}):""]}):""]})});return M?U.createPortal(D,document.body):D};export{oe as D};
