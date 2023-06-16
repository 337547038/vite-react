import{r as s,p as k,j as i,c,b as Q}from"./index-eab8b3d4.js";import{a as X}from"./contextForm-cfeffa56.js";import{T as Z}from"./Tag-a350553d.js";import{a as _,b as p}from"./dom-7dcdc27f.js";const V=s.forwardRef((e,z)=>{const{defaultValue:H=[]}=e,[n,d]=s.useState(H),[C,T]=s.useState(e.direction||0),[m,P]=s.useState(Object.assign({},e.downStyle,{display:"none"})),a=s.useContext(X).disabled||e.disabled,j=s.useRef(null),R=s.useRef(null),[M,F]=s.useState("");s.useEffect(()=>{d([...H])},[e.defaultValue]);let B={};e.downHeight&&(B={maxHeight:e.downHeight+"px",overflowY:"auto"});const y=s.useRef(!1),r=s.useRef(!1),Y=t=>{a||(A(t),L(!0),y.current=!0,r.current=!0,e.toggleClick&&e.toggleClick(!0,t),setTimeout(()=>{y.current=!1},100))},A=t=>{var l;if(e.direction===0){T(e.direction);const o=document.documentElement.clientHeight||document.body.clientHeight,f=t.clientY;let w=e.downHeight||((l=R.current)==null?void 0:l.offsetHeight)||0;w>o-f&&f>w&&T(2)}},L=t=>{if(!j.current)return;let l={};const o=_(j.current);if(e.appendToBody){const w=p();l={bottom:"auto",minWidth:o.width+"px",left:o.left+"px",top:o.top+o.height+8+"px"},C===2&&(l.top="auto",l.bottom=w.height-o.top+"px")}else l.top=o.height+8+"px",l.bottom="auto",C===2&&(l.bottom=o.height+8+"px",l.top="auto");P({...m,...l,...{display:t?"":"none"}}),E(t)},W=t=>{r.current&&!e.filterable&&(g(t),t.stopPropagation())},g=t=>{r.current&&!y.current&&(t&&e.toggleClick&&e.toggleClick(!1,t),E(!1),r.current=!1)},E=t=>{let l="slide-toggle-leave-active";t&&(l="slide-toggle-enter-active"),F(l),setTimeout(()=>{t||P({...m,...{display:"none"}}),F("")},400)},h=(t,l)=>{let o=l.target.value;t==="normal"&&d([o]),t==="start"&&(n[0]=o,d([...n])),t==="end"&&(n[1]=o,d([...n])),v(l,"onInput",t)},x=(t,l)=>{v(l,"onFocus",t)},b=(t,l)=>{v(l,"onBlur",t)},v=(t,l,o)=>{if(e.filterable){let f=t.target.value;e[l]&&e[l](f,o,t)}},D=(t,l)=>{n.splice(t,1),d([...n]),e.onDelete&&e.onDelete(t),l.stopPropagation()},$=t=>{d([]),I(),t.stopPropagation(),e.onClear&&e.onClear()},U=t=>{t.stopPropagation()};s.useEffect(()=>(document.addEventListener("click",g,!1),()=>{document.removeEventListener("click",g,!1)}),[m]);const q=()=>n,u=s.useRef(null),N=s.useRef(null),I=()=>{e.filterable&&(u.current&&(u.current.value=""),N.current&&(N.current.value=""))};s.useImperativeHandle(z,()=>({getValue:q,clearValue:I,slideUp:g}));const S={[`${k}-input-control`]:!0,[e.size]:e.size,disabled:a},G=i.jsxs("div",{className:c("select-range",S),children:[i.jsx("input",{ref:u,value:n[0]||"",readOnly:!e.filterable,placeholder:e.placeholder,disabled:a,onChange:h.bind(void 0,"start"),onFocus:x.bind(void 0,"start"),onBlur:b.bind(void 0,"start")},"start"),i.jsx("span",{children:e.rangeSeparator}),i.jsx("input",{ref:N,value:n[1]||"",readOnly:!e.filterable,placeholder:e.endPlaceholder,disabled:a,onChange:h.bind(void 0,"end"),onFocus:x.bind(void 0,"start"),onBlur:b.bind(void 0,"start")},"end")]}),J=i.jsx("div",{className:c("multiple-text",S),children:i.jsxs("ul",{placeholder:e.placeholder,children:[e.collapseTags?i.jsxs(s.Fragment,{children:[(n==null?void 0:n.length)>0?i.jsxs("li",{children:[i.jsx("span",{children:n[0]}),i.jsx("i",{className:"icon-error",onClick:D.bind(void 0,0)})]}):"",(n==null?void 0:n.length)>1?i.jsx("li",{children:i.jsxs(Z,{size:"mini",type:"info",children:[" +",n==null?void 0:n.length]})}):""]}):i.jsx(i.Fragment,{children:n.map((t,l)=>i.jsxs("li",{children:[i.jsx("span",{children:t}),i.jsx("i",{className:"icon-error",onClick:D.bind(void 0,l)})]},t))}),e.filterable?i.jsx("li",{className:"input",children:i.jsx("input",{ref:u,type:"text",disabled:a,placeholder:(n==null?void 0:n.length)===0?e.placeholder:"",onChange:h.bind(void 0,"multiple"),onFocus:x.bind(void 0,"multiple"),onBlur:b.bind(void 0,"multiple")})}):""]})}),K=i.jsx("input",{ref:u,value:(n==null?void 0:n.length)>0?n[0]:"",readOnly:!e.filterable,placeholder:e.placeholder,className:c(S),disabled:a,onChange:h.bind(void 0,"normal"),onFocus:x.bind(void 0,"normal"),onBlur:b.bind(void 0,"normal")}),O=i.jsxs("div",{ref:R,className:c(e.className,M,{[k+"-select-down-pane"]:!0,[e.downClass]:e.downClass,top:C===2}),style:m,onClick:U,children:[i.jsx("div",{style:B,className:"scroll-pane",children:e.children}),i.jsx("span",{className:c("down-arrow",{"is-range":e.isRange})})]});return i.jsxs("div",{ref:j,className:c({"is-down":r.current,[k+"-select-down"]:!0,disabled:a}),onClick:Y,style:{width:e.width},children:[i.jsxs("div",{className:"select-control",onClick:W,children:[e.isRange?G:e.multiple?J:K,i.jsxs("span",{className:"group-icon",children:[e.clear&&(n==null?void 0:n.length)>0?i.jsx("i",{className:"icon-close",title:"清空",onClick:$}):"",i.jsx("i",{className:c({down:r.current&&!e.fixedIcon,[`icon-${e.icon}`]:!0})})]})]}),e.appendToBody?Q.createPortal(O,document.body):O]})});V.displayName="SelectDown";V.defaultProps={icon:"arrow",rangeSeparator:"To",direction:0,downHeight:0,appendToBody:!1};export{V as S};
