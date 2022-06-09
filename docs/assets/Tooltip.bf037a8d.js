import{R as y,r as a,j as C,c as L,p as T,a as x,F as Y,b as B}from"./index.085b3e07.js";import{a as D,b as v}from"./dom.0e399110.js";const I=y.forwardRef((s,N)=>{const{appendToBody:R=!0,direction:b="top-left",maxWidth:S=500,delay:j=0,transition:g="fade",trigger:l="hover"}=s,r=a.exports.useRef(null),E=a.exports.useRef(null),[f,d]=a.exports.useState(!1),[H,P]=a.exports.useState({}),n=t=>t%2===0?t:t+1,h=()=>{if(!r.current)return;const t=D(r.current),i=v().width,c=(s.y||0)+8,o=s.x||0;let e={maxWidth:S+"px"};const u=v().height-t.top+c+"px";switch(b){case"top-left":e.left=t.left+o+"px",e.bottom=u;break;case"top":e.transform="translateX(-50%)",e.left=n(t.left+t.width/2+o)+"px",e.bottom=u;break;case"top-right":e.right=i-(t.left+t.width+o)+"px",e.bottom=u;break;case"left":e.right=i-(t.left-8+o)+"px",e.top=n(t.top+t.height/2)+"px",e.transform="translateY(-50%)";break;case"right":e.left=t.left+t.width+8+o+"px",e.top=n(t.top+t.height/2)+"px",e.transform="translateY(-50%)";break;case"bottom-left":e.left=t.left+o+"px",e.top=t.top+t.height+c+"px";break;case"bottom":e.left=n(t.left+t.width/2+o)+"px",e.transform="translateX(-50%)",e.top=t.top+t.height+c+"px";break;case"bottom-right":e.right=i-(t.left+t.width+o)+"px",e.top=t.top+t.height+c+"px";break}P(Object.assign({},s.style,e))},W=t=>{t.stopPropagation()},$=t=>{l==="click"&&(s.always||(p(!f),h()),s.onClick&&s.onClick(!f),t.stopPropagation())},M=()=>{!s.always&&l==="hover"&&m()},O=()=>{s.disabled||l==="click"||s.always||(h(),p(!0))},X=()=>{l==="click"&&m()},m=()=>{window.setTimeout(()=>{p(!1)},j)};y.useImperativeHandle(N,()=>({close:m}));const[F,w]=a.exports.useState(""),p=t=>{let i=`tooltip-${g}-enter`;t?d(!0):i=`tooltip-${g}-exit`,w(i),setTimeout(()=>{t||d(!1),w("")},300)};a.exports.useEffect(()=>{s.always&&(d(!0),h()),l==="click"&&document.addEventListener("click",X,!1)},[]);const k=C("div",{ref:E,className:L([`${T}-tooltip`,b,F,s.className]),style:H,onClick:W,children:[x("i",{className:"arrow"}),s.content?x("span",{children:s.content}):""]});return s.disabled?x(Y,{children:s.children}):C("span",{ref:r,className:`${T}-tooltip-box`,onMouseLeave:M,onMouseEnter:O,onClick:$,children:[s.children,f&&!s.disabled?R?B.createPortal(k,document.body):k:""]})});I.displayName="Tooltip";export{I as T};
