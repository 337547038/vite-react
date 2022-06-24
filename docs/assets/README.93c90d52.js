var Rs=Object.defineProperty,zs=Object.defineProperties;var Ws=Object.getOwnPropertyDescriptors;var is=Object.getOwnPropertySymbols;var Js=Object.prototype.hasOwnProperty,Vs=Object.prototype.propertyIsEnumerable;var ds=(n,a,l)=>a in n?Rs(n,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[a]=l,f=(n,a)=>{for(var l in a||(a={}))Js.call(a,l)&&ds(n,l,a[l]);if(is)for(var l of is(a))Vs.call(a,l)&&ds(n,l,a[l]);return n},A=(n,a)=>zs(n,Ws(a));import{r,a as d,c as v,j as O,F as Xs,p as Ks,R as s}from"./index.462fc5a0.js";import{B as w}from"./Button.09dbf190.js";import{C as js}from"./Group.67ac911b.js";import{d as hs}from"./index.4eedf3c9.js";import{g as Zs}from"./dom.46b1a4a1.js";import{P as Us}from"./Pagination.afd90c89.js";import{T as Gs}from"./Tooltip.d492aeea.js";import"./contextForm.4aff6fd8.js";import"./Option.1947702e.js";import"./SelectDown.d6086c84.js";import"./Tag.867d9940.js";const ms=r.exports.forwardRef((n,a)=>{const{selectChecked:l=0}=n,[h,k]=r.exports.useState({}),T=(i,c)=>{if(i===void 0){if(n.title)return c}else if(i)return c;return""},x=(i,c)=>{n.drag&&q("mouseMove",{evt:c,index:i})},D=(i,c)=>{q("mouseDown",{evt:c,index:i})},R=i=>{q("checkboxChange",i)},m=(i,c)=>{const y=A(f({},h),{[i]:c});k(y),q("sortClick",y)},q=(i,c)=>{n.event(i,c)},[V,X]=r.exports.useState({}),N=i=>{X(i?{transform:`translateY(${i}px) translateZ(100px)`,className:"transform"}:{transform:"",className:""})},z=()=>{k({})},B=i=>n.drag?i!==!1:!1;return r.exports.useImperativeHandle(a,()=>({scrollTop:N,clearSort:z})),d("thead",{style:{transform:V.transform},className:v(V.className),children:n.layer.map(i=>d("tr",{className:v({drag:n.drag}),children:n.columns.map((c,y)=>c._layer===i?O("th",{className:v(c.fixed,c.className),style:{textAlign:c.align},title:T(c.title,c.label||""),colSpan:c._colSpan,rowSpan:c._rowSpan,onMouseMove:x.bind(globalThis,y),children:[c.type==="selection"?d(js,{className:v({"some-select":l===2}),checked:l===1,onChange:R}):"",c.type!=="selection"?O(Xs,{children:[c.label,c.sortBy?O("span",{className:"caret-wrapper",children:[d("i",{className:v("sort-caret asc icon-down",{active:h[c.prop]==="asc"}),onClick:()=>m(c.prop,"asc")}),d("i",{className:v("sort-caret desc icon-down",{active:h[c.prop]==="desc"}),onClick:()=>m(c.prop,"desc")})]}):""]}):"",B(c.drag)?d("a",{className:"drag-line",onMouseDown:D.bind(globalThis,y)}):""]},y):"")},i))})});ms.displayName="TableHeader";const g=r.exports.forwardRef((n,a)=>{const{hover:l=!0,border:h=!0,stripe:k=!0,ellipsis:T=!0,showHeader:x=!0,drag:D=!0,dragLine:R=!0,dragWidth:m=[60,0],title:q=!0,emptyText:V="\u6682\u65E0\u6570\u636E",pagination:X={}}=n,[N,z]=r.exports.useState({stateHeight:n.height||"",isSetThWidth:!1,mouseDown:!1}),[B,i]=r.exports.useState(n.data),[c,y]=r.exports.useState([]),Q=r.exports.useRef(null),G=r.exports.useRef(null),E=r.exports.useRef(null);let K=0;const ss=c.length;ss===0?K=0:ss===B.length?K=1:K=2;let Z=0,as=[];const[gs,xs]=r.exports.useState([]),[P,Es]=r.exports.useState([]),[Fs,bs]=r.exports.useState([]),[W,Y]=r.exports.useState([]),H=r.exports.useRef([]),ns=[],U=[],Cs=hs(()=>{console.log("\u8868\u5934\u6570\u636E\u5904\u7406"),ls(n.columns,0),Es([...as]),Y([...ns]),U.forEach(t=>{if(t.children){const p=U.filter(u=>{var F;const o=(F=u._tProps)==null?void 0:F.split(",");return o&&o.includes(t.prop)&&!u.children});(p==null?void 0:p.length)>0&&(t._colSpan=p.length)}else{const p=Z-t._layer+1;p>1&&(t._rowSpan=p)}}),bs([...U]);const e=[];for(let t=0;t<Z;t++)e.push(t+1);xs(e)}),ls=(e,t=0,p="")=>{t++,t>Z&&(Z=t),e.forEach(u=>{const o=u.prop||"",F=p?p+","+o:o;u.children?ls(u.children,t,F):(as.push(u),ns.push(u.width||"")),U.push(A(f({},u),{_layer:t,_tProps:F}))})},fs=(e,t,p)=>{let u=[];if(p)u=[...c,e];else{const o=c.indexOf(e);c.splice(o,1),u=c}y([...u]),n.selectClick&&n.selectClick(u,p,e,t)},Ds=e=>c.includes(e),ts=e=>{y(e?[...B]:[])},ys=()=>c,ws=(e,t)=>{const p=c.indexOf(e);t?p===-1&&(c.push(e),y([...c])):p!==-1&&(c.splice(p,1),y([...c]))},Bs=()=>{var e;(e=G.current)==null||e.clearSort()},ks=(e,t)=>{switch(e){case"checkboxChange":ts(t),n.selectClick&&n.selectClick(t?B:[],t);break;case"mouseDown":As(t);break;case"mouseMove":vs(t);break;case"sortClick":n.sortChange&&n.sortChange(t);break}},L=r.exports.useRef({}),As=e=>{if(!D)return;N.isSetThWidth||(Ns(),document.addEventListener("mouseup",qs));const t={isSetThWidth:!0,mouseDown:!0};z(f(f({},N),t));const p=W[e.index]||H.current[e.index];L.current={mouseDown:!0,oldX:e.evt.pageX,oldWidth:parseInt(p.replace("px",""),10)||0,index:e.index},es(e.evt),e.evt.preventDefault()},Ns=()=>{var t;if(!D)return;const e=(t=E.current)==null?void 0:t.querySelectorAll("th");e&&(H.current=[],e.forEach(p=>{H.current.push(p.offsetWidth+"px")}),Y([...H.current]))},es=e=>{setTimeout(()=>{var u;const t=Zs(E.current);let p=(u=E.current)==null?void 0:u.querySelector(".table-drag-line");p&&(p.style.left=e.pageX-t.left+"px",p.style.height=t.height+"px")})},vs=e=>{var u,o,F;if(!D)return;const t=e.evt;let p=((u=L.current)==null?void 0:u.oldWidth)+(t.pageX-((o=L.current)==null?void 0:o.oldX));m[0]>0&&p<m[0]||m[1]>0&&p>m[1]||N.mouseDown&&(es(t),m[0]>0&&p<m[0]&&(p=m[0]),m[1]>0&&p>m[1]&&(p=m[1]),W[(F=L.current)==null?void 0:F.index]=p+"px",Y([...W]),H.current=W)},qs=()=>{var e;D&&((e=L.current)==null?void 0:e.mouseDown)&&n.dragChange&&n.dragChange(H.current),L.current={mouseDown:!1,oldX:void 0,oldWidth:void 0,index:void 0},z(A(f({},N),{mouseDown:!1}))};r.exports.useImperativeHandle(a,()=>({toggleSelection:ts,getSelectAll:ys,toggleRowSelection:ws,clearSort:Bs}));const Ss=(e,t,p)=>{if(!p)return"";if(e===void 0){if(q)return t}else if(e)return t;return""},_s=hs(()=>{console.log("fixedHead"),setTimeout(()=>{ps(0)},0)}),Ts=()=>{var e,t,p,u,o,F;if(n.height&&x&&E.current){const M=((e=E.current)==null?void 0:e.scrollTop)||0,_=((t=E.current)==null?void 0:t.scrollLeft)||0;(p=G.current)==null||p.scrollTop(M);const b=(u=E.current)==null?void 0:u.querySelectorAll(".left");if(b&&b.length>0)if(_>0)for(let C=0,J=b.length;C<J;C++)b[C].style.transform=`translateX(${_}px) translateZ(91px)`,b[C].style.webkitTransform=`translateX(${_}px) translateZ(91px)`;else for(let C=0,J=b.length;C<J;C++)b[C].style.transform="",b[C].style.webkitTransform="";if(ps(_),typeof n.scroll=="function"){const C=(o=E.current)==null?void 0:o.clientHeight,J=(F=E.current)==null?void 0:F.scrollHeight;let os=!1;M+C>=J-3&&(os=!0),n.scroll(M,os)}}},ps=e=>{var o,F,M,_;const t=(o=E.current)==null?void 0:o.querySelectorAll(".right"),p=((M=(F=E.current)==null?void 0:F.querySelector("table"))==null?void 0:M.offsetWidth)||0;let u=e-(p-(((_=E.current)==null?void 0:_.clientWidth)||0));if(t.length>0)for(let b=0,C=t.length;b<C;b++)t[b].style.transform=`translateX(${u}px)translateZ(90px)`,t[b].style.webkitTransform=`translateX(${u}px)translateZ(90px)`};r.exports.useEffect(()=>{Cs()},[n.columns]),r.exports.useEffect(()=>{_s(),Ms()},[]),r.exports.useEffect(()=>{if(console.log("\u6570\u636E\u6539\u53D8"),us({}),i([...n.data]),n.fixedBottomScroll){if(typeof n.fixedBottomScroll=="string"){const e=document.querySelector(n.fixedBottomScroll);e&&e.addEventListener("scroll",I)}else document.addEventListener("scroll",I);window.addEventListener("resize",I),setTimeout(()=>{I()},500)}return()=>{n.fixedBottomScroll&&(document.removeEventListener("scroll",I),window.removeEventListener("resize",I))}},[n.data]);const[S,us]=r.exports.useState({}),Hs=(e,t)=>{S[e]===void 0?S[e]=!n.extendToggle:S[e]=!S[e],us(f({},S)),n.hasChild&&typeof n.lazyLoad=="function"&&n.lazyLoad(t,p=>{t.children=p,i([...B])})},$=e=>S[e]===void 0?n.extendToggle||!1:S[e],I=()=>{if(!n.fixedBottomScroll)return;const e=E.current,t=Q.current;if(!e||!t)return;let p=window.innerHeight;if(typeof n.fixedBottomScroll=="string"){const o=document.querySelector(n.fixedBottomScroll);o&&(p=o.offsetHeight+20)}const{top:u}=e.getBoundingClientRect();if(u>p)e.style.height="unset",e.style.marginBottom="unset";else{const o=Math.min(p-u,t.offsetHeight);e.style.minHeight="60px",z(A(f({},N),{stateHeight:o+"px"})),e.style.marginBottom=t.offsetHeight-o+"px"}},Ls=(e,t)=>{n.rowClick&&n.rowClick(e,t)},Is=(e,t,p,u)=>{n.cellClick&&n.cellClick(e,t,p,u)},cs=r.exports.useRef(n.rowColSpan||[]),Ms=()=>{const e=[];n.rowColSpan&&n.rowColSpan.length>0&&n.rowColSpan.forEach(t=>{if(e.push(t),t.colSpan&&t.colSpan>1)for(let p=1;p<t.colSpan;p++)e.push({row:t.row,col:t.col+p,colSpan:0});if(t.rowSpan&&t.rowSpan>1)for(let p=1;p<t.rowSpan;p++)e.push({row:t.row+p,col:t.col,rowSpan:0})}),cs.current=e},Os=(e,t)=>{let p={};return cs.current.forEach(u=>{e===u.row&&t===u.col&&(u.rowSpan===0||u.colSpan===0?p.style={display:"none"}:(u.rowSpan&&u.rowSpan>1&&(p.rowSpan=u.rowSpan),u.colSpan&&u.colSpan>1&&(p.colSpan=u.colSpan)))}),p},rs=(e,t,p)=>d("tr",{onClick:()=>Ls(e,t),children:P.map((u,o)=>r.exports.createElement("td",A(f({},Os(t,o)),{className:v(u.fixed,u.className),key:(u.prop||Math.floor(Math.random()*100))+t.toString(),title:Ss(u.title,e[u.prop],!u.tooltip),onClick:()=>Is(e,u,t,o)}),u.type==="selection"&&!p?d(js,{checked:Ds(e),onChange:fs.bind(globalThis,e,t)}):u.type==="index"?t+1:u.formatter?u.formatter(A(f({},e),{tExtend:p?void 0:Hs.bind(globalThis,t,e),tStatus:p?void 0:$(t)}),u,e[u.prop],t):d(Gs,A(f({direction:"top",disabled:!u.tooltip},u.tooltip),{content:e[u.prop],children:e[u.prop]}))))},t);return O("div",{ref:E,className:v(Ks+"-table",n.className,{"is-scroll":n.width}),style:{width:n.width,height:N.stateHeight,overflowY:n.height?"auto":void 0,overflowX:n.width?"auto":void 0},onScroll:Ts,children:[O("table",{ref:Q,className:v({"no-stripe":!k,"no-border":!h,"no-hover":!l,"no-ellipsis":!T}),children:[d("colgroup",{children:W.map((e,t)=>d("col",{width:e,className:`column${t}`},t))}),x?d(ms,{ref:G,drag:D,title:q,layer:gs,selectChecked:K,columns:Fs,event:ks}):"",d("tbody",{children:B.length===0?d("tr",{children:d("td",{colSpan:P.length,className:"empty",children:V})}):B.map((e,t)=>O(r.exports.Fragment,{children:[rs(e,t),typeof n.expandable=="function"&&$(t)?d("tr",{className:"extend-row",children:d("td",{colSpan:P.length,children:n.expandable(e)})},"extend"+t):"",n.hasChild&&e.children&&$(t)?e.children.map((p,u)=>rs(p,u,!0)):""]},t))})]}),R&&D&&N.mouseDown?d("div",{className:"table-drag-line"}):"",Object.keys(X).length>0?d(Us,A(f({},n.pagination),{total:B==null?void 0:B.length})):""]})});g.displayName="Table";var j=[{date:"2016-05-03",name:"\u5F20\u4E09",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u7537",children:[{date:"2016-05-00",name:"\u5B50\u7EA7",province:"\u5B50\u7EA7\u5E7F\u4E1C",city:"\u5B50\u7EA7\u767D\u4E91\u533A",address:"\u5B50\u7EA7\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:0}]},{date:"2016-05-04",name:"\u674E\u56DB",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u7537"},{date:"2016-05-05",name:"\u674E\u56DB5",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u5973"},{date:"2016-05-06",name:"\u674E\u56DB6",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u7537"},{date:"2016-05-07",name:"\u674E\u56DB7",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u5973"},{date:"2016-05-08",name:"\u674E\u56DB8",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u5973"},{date:"2016-05-09",name:"\u674E\u56DB9",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u5973"},{date:"2016-05-10",name:"\u674E\u56DB10",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u5973"}];function Ps(){const n=[{type:"selection",prop:"sel"},{type:"index",label:"\u5E8F\u53F7",prop:"index"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740"}];return s.createElement("div",{className:"demo-table"},s.createElement(g,{data:j,columns:n}))}function Ys(){const n=[{type:"selection",prop:"se"},{type:"index",label:"\u5E8F\u53F7",prop:"index"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740"},{label:"\u64CD\u4F5C",formatter:()=>s.createElement("a",{onClick:a},"\u5220\u9664")}],a=()=>{console.log("del")};return s.createElement("div",{className:"demo-table"},s.createElement(g,{data:j,columns:n}))}function $s(){const n=[{type:"selection",width:"50px"},{type:"index",label:"\u5E8F\u53F7",prop:"index"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740"}],a=r.exports.useRef(null),l=()=>{var x;(x=a.current)==null||x.toggleSelection(!0)},h=()=>{var x;(x=a.current)==null||x.toggleSelection(!1)},k=()=>{var D;const x=(D=a.current)==null?void 0:D.getSelectAll();console.log(x),alert(JSON.stringify(x))},T=x=>{[j[1],j[2]].forEach(R=>{var m;(m=a.current)==null||m.toggleRowSelection(R,x)})};return s.createElement("div",{className:"demo-table"},s.createElement("div",null,s.createElement(w,{onClick:l},"\u5168\u9009"),s.createElement(w,{onClick:h},"\u53D6\u6D88\u5168\u9009"),s.createElement(w,{onClick:k},"\u83B7\u53D6\u6240\u9009\u884C"),s.createElement(w,{onClick:()=>T(!0)},"\u5C06\u7B2C2,3\u6761\u8BBE\u4E3A\u9009\u4E2D\u72B6\u6001"),s.createElement(w,{onClick:()=>T(!1)},"\u53D6\u6D88\u7B2C2,3\u6761\u9009\u4E2D\u72B6\u6001")),s.createElement(g,{data:j,columns:n,ref:a}))}function Qs(){const n=[{type:"selection",width:"50px"},{type:"index",label:"\u5E8F\u53F7",prop:"index"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740"}];return s.createElement("div",{className:"demo-table"},s.createElement(g,{data:j,columns:n,height:"200px"}))}function sa(){const n=[{type:"selection",fixed:"left",width:"50px",className:"cls"},{type:"index",label:"\u5E8F\u53F7",width:"50px",prop:"index"},{prop:"date",label:"\u65E5\u671F",width:"120px"},{prop:"name",label:"\u59D3\u540D",width:"150px"},{prop:"address",label:"\u5730\u5740",width:"300px"},{prop:"zip",label:"\u90AE\u7BB1",width:"100px",fixed:"right"}];return s.createElement("div",{className:"demo-table"},s.createElement(g,{data:j,columns:n,height:"200px",width:"600px"}))}function aa(){const n=[{type:"selection"},{type:"index",label:"\u5E8F\u53F7",prop:"index"},{prop:"date",label:"\u65E5\u671F",sortBy:!0},{prop:"name",label:"\u59D3\u540D",sortBy:!0},{prop:"address",label:"\u5730\u5740"}],a=l=>{console.log(l),alert(JSON.stringify(l))};return s.createElement("div",{className:"demo-table"},s.createElement(g,{data:j,columns:n,sortChange:a}))}function na(){const n=[{type:"selection",drag:!1},{type:"index",label:"\u5E8F\u53F7",drag:!1,prop:"index"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740"}],a=l=>{console.log(l),alert(JSON.stringify(l))};return s.createElement("div",{className:"demo-table"},s.createElement(g,{data:j,columns:n,dragChange:a}))}function la(){const n=[{type:"selection"},{type:"index",label:"\u5E8F\u53F7",prop:"index"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740"}],[a,l]=r.exports.useState({showHeader:!0,hover:!0,border:!0,stripe:!0,ellipsis:!0,title:!0,dragLine:!0}),h=k=>{l(A(f({},a),{[k]:!a[k]}))};return s.createElement("div",{className:"demo-table"},s.createElement("div",null,s.createElement(w,{onClick:()=>h("showHeader")},"\u663E\u793A\u8868\u5934:",a.showHeader.toString()),s.createElement(w,{onClick:()=>h("hover")},"hover\u9AD8\u4EAE:",a.hover+""),s.createElement(w,{onClick:()=>h("border")},"\u663E\u793A\u8FB9\u6846:",a.border+""),s.createElement(w,{onClick:()=>h("stripe")},"\u663E\u793A\u6591\u9A6C\u7EBF:",a.stripe+""),s.createElement(w,{onClick:()=>h("ellipsis")},"\u6EA2\u51FA\u7701\u7565\u53F7:",a.ellipsis+""),s.createElement(w,{onClick:()=>h("title")},"\u9F20\u6807\u6ED1\u52A8\u8FC7\u63D0\u793A:",a.title+""),s.createElement(w,{onClick:()=>h("dragLine")},"\u62D6\u52A8\u6539\u53D8\u5217\u5BBD\u65F6\u5782\u76F4\u7EBF:",a.dragLine+"")),s.createElement(g,{data:j,columns:n,showHeader:a.showHeader,hover:a.hover,border:a.border,stripe:a.stripe,ellipsis:a.ellipsis,title:a.title,dragLine:a.dragLine}))}function ta(){const n=[{type:"selection",prop:"selection"},{type:"index",label:"\u5E8F\u53F7",prop:"index"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740"},{label:"\u64CD\u4F5C",formatter:l=>s.createElement("span",{onClick:()=>l.tExtend()},l.tStatus?"\u6536\u8D77":"\u5C55\u5F00")}],a=l=>JSON.stringify(l);return s.createElement("div",{className:"demo-table"},s.createElement(g,{data:j,columns:n,expandable:a}))}function ea(){const n=[{type:"selection",prop:"select"},{type:"index",label:"\u5E8F\u53F7",prop:"index"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740"},{label:"\u64CD\u4F5C",formatter:a=>a.tExtend?s.createElement("span",{onClick:()=>a.tExtend()},a.tStatus?"\u6536\u8D77":"\u5C55\u5F00\u5B50\u7EA7"):""}];return s.createElement("div",{className:"demo-table"},s.createElement(g,{data:j,columns:n,hasChild:!0}))}function pa(){const n=[{type:"selection",prop:"select"},{type:"index",label:"\u5E8F\u53F7",prop:"index"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740"},{label:"\u64CD\u4F5C",formatter:l=>s.createElement("span",{onClick:()=>l.tExtend()},l.tStatus?"\u6536\u8D77":"\u52A0\u8F7D\u5B50\u7EA7")}],a=(l,h)=>{console.log("row"),setTimeout(()=>{h([{name:"\u5F02\u6B65\u6570\u636E1",date:"2021"},{name:"\u5F02\u6B65\u6570\u636E2",date:"2021"}])},500)};return s.createElement("div",{className:"demo-table"},s.createElement(g,{data:j,columns:n,hasChild:!0,lazyLoad:a}))}function ua(){const n=[{type:"selection",prop:"select"},{type:"index",label:"\u5E8F\u53F7",prop:"index"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740"}],a=[{row:0,col:1,colSpan:2},{row:2,col:3,rowSpan:2}];return s.createElement("div",{className:"demo-table"},s.createElement(g,{data:j,columns:n,rowColSpan:a}))}function ca(){const n=[{label:"\u65E5\u671F",prop:"day",children:[{label:"\u5E74\u4EFD",prop:"date"},{label:"\u6708\u4EFD",prop:"month"}]},{prop:"name",label:"\u59D3\u540D"},{label:"\u6536\u8D27\u5730\u5740",prop:"ad",children:[{label:"\u7701\u4EFD",prop:"province"},{label:"\u57CE\u5E02",prop:"city"},{label:"\u5730\u5740",prop:"address"}]},{prop:"control",label:"\u64CD\u4F5C",formatter:()=>s.createElement("a",{onClick:a},"\u5220\u9664")}],a=()=>{};return s.createElement("div",{className:"demo-table"},s.createElement(g,{data:j,columns:n}))}function ra(){const n=[{type:"selection"},{type:"index",label:"\u5E8F\u53F7",prop:"index"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740"}],a={current:1,pageSize:3,onChange:l=>{console.log(l)}};return s.createElement("div",{className:"demo-table"},s.createElement(g,{data:j,columns:n,pagination:a}))}function oa(){const n=[{type:"selection"},{type:"index",label:"\u5E8F\u53F7"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740",tooltip:{show:!0,direction:"left"}}];return s.createElement("div",{className:"demo-table"},s.createElement(g,{data:j,columns:n}))}function Da(n){return s.createElement("div",{className:"doc-container md-pc docs-demo"},s.createElement("div",{className:"code-container"},s.createElement("div",{className:"md-code"}),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:""}})),s.createElement("div",{className:"demo-container"},s.createElement("div",{className:"md-demo"},s.createElement("h1",{id:"table-\u8868\u683C"},"Table \u8868\u683C"),s.createElement("div",{className:"card hide",id:"G4TVSI"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>
<p>\u4F7F\u7528<code>columns</code>\u63D0\u4F9B\u8868\u5934\u6240\u9700\u6570\u636E\uFF0C<code>tableData</code>\u4E3A\u5217\u8868\u6570\u636E</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(Ps,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./demoJs.json&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> columns = [
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;selection&quot;</span> <span class="hljs-keyword">as</span> <span class="hljs-keyword">const</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;sel&#x27;</span>
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;index&#x27;</span> <span class="hljs-keyword">as</span> <span class="hljs-keyword">const</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5E8F\u53F7&#x27;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;index&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;date&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u65E5\u671F&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;name&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u59D3\u540D&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;address&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5730\u5740&#x27;</span>
    }
  ]
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-table&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Table</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{tableData}</span> <span class="hljs-attr">columns</span>=<span class="hljs-string">{columns}</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("G4TVSI");let l=a.className;a.className.indexOf("show")!==-1?l=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(l=a.className.replace("hide","show")),a.className=l}}))),s.createElement("div",{className:"card hide",id:"G43G4L"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u81EA\u5B9A\u4E49\u5217\u6A21\u677F">\u81EA\u5B9A\u4E49\u5217\u6A21\u677F</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(Ys,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./demoJs.json&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> columns = [
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;selection&#x27;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;se&#x27;</span>
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;index&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5E8F\u53F7&#x27;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;index&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;date&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u65E5\u671F&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;name&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u59D3\u540D&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;address&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5730\u5740&#x27;</span>
    },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u64CD\u4F5C&#x27;</span>,
      <span class="hljs-attr">formatter</span>: <span class="hljs-function">() =&gt;</span> {
        <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{delClick}</span>&gt;</span>\u5220\u9664<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span></span>
      }
    }
  ]
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">delClick</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;del&#x27;</span>)
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-table&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Table</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{tableData}</span> <span class="hljs-attr">columns</span>=<span class="hljs-string">{columns}</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("G43G4L");let l=a.className;a.className.indexOf("show")!==-1?l=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(l=a.className.replace("hide","show")),a.className=l}}))),s.createElement("div",{className:"card hide",id:"EPRFWT"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u6DFB\u52A0\u5E8F\u53F7\u548Ccheckbox\u52FE\u9009">\u6DFB\u52A0\u5E8F\u53F7\u548Ccheckbox\u52FE\u9009</h3>
<p><code>type=&quot;selection&quot;</code>\u6DFB\u52A0\u52FE\u9009\u6846,<code>type=&quot;index&quot;</code>\u6DFB\u52A0\u5E8F\u53F7,getSelectAll\`\u65B9\u6CD5\u53EF\u53D6\u5DF2\u52FE\u9009\u884C\u3002</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement($s,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Button</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../button&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {<span class="hljs-title class_">TableRef</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./index&quot;</span>
<span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./demoJs.json&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> columns = [
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;selection&#x27;</span>,
      <span class="hljs-attr">width</span>: <span class="hljs-string">&#x27;50px&#x27;</span>
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;index&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5E8F\u53F7&#x27;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;index&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;date&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u65E5\u671F&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;name&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u59D3\u540D&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;address&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5730\u5740&#x27;</span>
    }
  ]
  <span class="hljs-keyword">const</span> tableEl = useRef &lt; <span class="hljs-title class_">TableRef</span> &gt; (<span class="hljs-literal">null</span>)
<span class="hljs-comment">// \u5168\u9009</span>
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">allSelect</span> = (<span class="hljs-params"></span>) =&gt; {
    tableEl.<span class="hljs-property">current</span>?.<span class="hljs-title function_">toggleSelection</span>(<span class="hljs-literal">true</span>)
  }
  <span class="hljs-comment">// \u53D6\u6D88\u5168\u9009</span>
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">unSelect</span> = (<span class="hljs-params"></span>) =&gt; {
    tableEl.<span class="hljs-property">current</span>?.<span class="hljs-title function_">toggleSelection</span>(<span class="hljs-literal">false</span>)
  }
  <span class="hljs-comment">// \u83B7\u53D6\u5F53\u524D\u52FE\u9009\u7684\u6240\u6709\u503C</span>
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">getSelect</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-keyword">const</span> val = tableEl.<span class="hljs-property">current</span>?.<span class="hljs-title function_">getSelectAll</span>()
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(val)
    <span class="hljs-title function_">alert</span>(<span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(val))
  }
  <span class="hljs-comment">// \u9009\u4E2D\u6216\u53D6\u6D88\u6307\u5B9A\u884C</span>
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">toggleRowSelection</span> = (<span class="hljs-params">bool: <span class="hljs-built_in">boolean</span></span>) =&gt; {
    <span class="hljs-keyword">const</span> row = [tableData[<span class="hljs-number">1</span>], tableData[<span class="hljs-number">2</span>]]
    row.<span class="hljs-title function_">forEach</span>(<span class="hljs-function">(<span class="hljs-params">row</span>) =&gt;</span> {
      tableEl.<span class="hljs-property">current</span>?.<span class="hljs-title function_">toggleRowSelection</span>(row, bool)
    })
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-table&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{allSelect}</span>&gt;</span>\u5168\u9009<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{unSelect}</span>&gt;</span>\u53D6\u6D88\u5168\u9009<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{getSelect}</span>&gt;</span>\u83B7\u53D6\u6240\u9009\u884C<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> toggleRowSelection(true)}&gt;\u5C06\u7B2C2,3\u6761\u8BBE\u4E3A\u9009\u4E2D\u72B6\u6001<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> toggleRowSelection(false)}&gt;\u53D6\u6D88\u7B2C2,3\u6761\u9009\u4E2D\u72B6\u6001<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Table</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{tableData}</span> <span class="hljs-attr">columns</span>=<span class="hljs-string">{columns}</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{tableEl}</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("EPRFWT");let l=a.className;a.className.indexOf("show")!==-1?l=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(l=a.className.replace("hide","show")),a.className=l}}))),s.createElement("div",{className:"card hide",id:"39X01"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u56FA\u5B9A\u8868\u5934">\u56FA\u5B9A\u8868\u5934</h3>
<p>\u7EB5\u5411\u5185\u5BB9\u8FC7\u591A\u65F6\uFF0C\u53EF\u9009\u62E9\u56FA\u5B9A\u8868\u5934\uFF0C\u6DFB\u52A0\u6307\u5B9A\u9AD8\u5EA6\u5373\u53EF<code>height</code></p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(Qs,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./demoJs.json&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> columns = [
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;selection&#x27;</span>,
      <span class="hljs-attr">width</span>: <span class="hljs-string">&#x27;50px&#x27;</span>
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;index&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5E8F\u53F7&#x27;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;index&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;date&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u65E5\u671F&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;name&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u59D3\u540D&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;address&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5730\u5740&#x27;</span>
    }
  ]

  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-table&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Table</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{tableData}</span> <span class="hljs-attr">columns</span>=<span class="hljs-string">{columns}</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;200px&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("39X01");let l=a.className;a.className.indexOf("show")!==-1?l=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(l=a.className.replace("hide","show")),a.className=l}}))),s.createElement("div",{className:"card hide",id:"2ZVD7C"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u56FA\u5B9A\u5934\u548C\u5217">\u56FA\u5B9A\u5934\u548C\u5217</h3>
<p>\u6A2A\u5411\u5185\u5BB9\u8FC7\u591A\u65F6\uFF0C\u53EF\u9009\u62E9\u56FA\u5B9A\u5217\u3002\u6DFB\u52A0\u5BBD<code>width</code>\u56FA\u5B9A\u5217\u5BBD\uFF1B<code>column</code>\u6DFB\u52A0<code>fixed=&quot;left/right&quot;</code>\u3002\u9700\u8981\u6CE8\u610F\u8BBE\u7F6E\u8868\u683C\u5BBD\u65F6\u540C\u65F6\u8981\u5BF9\u6BCF\u5217\u8BBE\u7F6E\u56FA\u5B9A\u5BBD\uFF0C\u5426\u5219\u4E0D\u4F1A\u51FA\u73B0\u6A2A\u5411\u6EDA\u52A8\u6761</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(sa,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./demoJs.json&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> columns = [
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;selection&#x27;</span>,
      <span class="hljs-attr">fixed</span>: <span class="hljs-string">&#x27;left&#x27;</span>,
      <span class="hljs-attr">width</span>: <span class="hljs-string">&#x27;50px&#x27;</span>,
      <span class="hljs-attr">className</span>: <span class="hljs-string">&#x27;cls&#x27;</span>
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;index&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5E8F\u53F7&#x27;</span>,
      <span class="hljs-attr">width</span>: <span class="hljs-string">&#x27;50px&#x27;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;index&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;date&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u65E5\u671F&#x27;</span>,
      <span class="hljs-attr">width</span>: <span class="hljs-string">&#x27;120px&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;name&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u59D3\u540D&#x27;</span>,
      <span class="hljs-attr">width</span>: <span class="hljs-string">&#x27;150px&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;address&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5730\u5740&#x27;</span>,
      <span class="hljs-attr">width</span>: <span class="hljs-string">&#x27;300px&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;zip&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u90AE\u7BB1&#x27;</span>,
      <span class="hljs-attr">width</span>: <span class="hljs-string">&#x27;100px&#x27;</span>,
      <span class="hljs-attr">fixed</span>: <span class="hljs-string">&#x27;right&#x27;</span>
    }
  ]
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-table&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Table</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{tableData}</span> <span class="hljs-attr">columns</span>=<span class="hljs-string">{columns}</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;200px&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;600px&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("2ZVD7C");let l=a.className;a.className.indexOf("show")!==-1?l=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(l=a.className.replace("hide","show")),a.className=l}}))),s.createElement("div",{className:"card hide",id:"7W3XIK"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u6DFB\u52A0\u6392\u5E8F">\u6DFB\u52A0\u6392\u5E8F</h3>
<p><code>column</code>\u6DFB\u52A0\u6392\u5E8F <code>sortBy=&quot;true&quot;</code>\u8868\u793A\u5F53\u524D\u5217\u53EF\u6392\u5E8F\u3002\u70B9\u51FB\u6392\u5E8F\u89E6\u53D1\u4E8B\u4EF6<code>sortChange</code></p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(aa,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./demoJs.json&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> columns = [
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;selection&#x27;</span>
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;index&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5E8F\u53F7&#x27;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;index&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;date&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u65E5\u671F&#x27;</span>,
      <span class="hljs-attr">sortBy</span>: <span class="hljs-literal">true</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;name&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u59D3\u540D&#x27;</span>,
      <span class="hljs-attr">sortBy</span>: <span class="hljs-literal">true</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;address&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5730\u5740&#x27;</span>
    }
  ]
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">sortChange</span> = (<span class="hljs-params">obj: any</span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj)
    <span class="hljs-title function_">alert</span>(<span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(obj))
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-table&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Table</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{tableData}</span> <span class="hljs-attr">columns</span>=<span class="hljs-string">{columns}</span> <span class="hljs-attr">sortChange</span>=<span class="hljs-string">{sortChange}</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("7W3XIK");let l=a.className;a.className.indexOf("show")!==-1?l=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(l=a.className.replace("hide","show")),a.className=l}}))),s.createElement("div",{className:"card hide",id:"AFM4TZ"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u62D6\u52A8\u6539\u53D8\u5217\u5BBD">\u62D6\u52A8\u6539\u53D8\u5217\u5BBD</h3>
<p>\u9ED8\u8BA4\u6240\u6709\u5217\u5141\u8BB8\u62D6\u52A8\uFF0C\u5F53\u8BBE\u7F6E<code>drag=&quot;false&quot;</code>\u4E0D\u5141\u8BB8\u62D6\u52A8\u3002\u6216\u8005\u662F\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5BF9\u5355\u4E2Acolumn\u8BBE\u7F6E<code>drag=&quot;false&quot;</code>\u8868\u793A\u5F53\u524D\u5217\u4E0D\u53EF\u62D6\u52A8\u3002\u62D6\u52A8\u6539\u53D8\u5217\u5BBD\u4E8B\u4EF6<code>dragChange</code>\u53EF\u8FD4\u56DE\u5404\u5217\u7684\u5BBD\uFF0C\u53EF\u7528\u4E8E\u548C\u670D\u52A1\u7AEF\u5BF9\u63A5</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(na,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./demoJs.json&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> columns = [
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;selection&#x27;</span>,
      <span class="hljs-attr">drag</span>: <span class="hljs-literal">false</span>
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;index&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5E8F\u53F7&#x27;</span>,
      <span class="hljs-attr">drag</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;index&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;date&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u65E5\u671F&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;name&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u59D3\u540D&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;address&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5730\u5740&#x27;</span>
    }
  ]
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">dragChange</span> = (<span class="hljs-params">obj: string[]</span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj)
    <span class="hljs-title function_">alert</span>(<span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(obj))
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-table&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Table</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{tableData}</span> <span class="hljs-attr">columns</span>=<span class="hljs-string">{columns}</span> <span class="hljs-attr">dragChange</span>=<span class="hljs-string">{dragChange}</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("AFM4TZ");let l=a.className;a.className.indexOf("show")!==-1?l=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(l=a.className.replace("hide","show")),a.className=l}}))),s.createElement("div",{className:"card hide",id:"BV9T4I"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u5176\u4ED6\u53C2\u6570\u8BBE\u7F6E">\u5176\u4ED6\u53C2\u6570\u8BBE\u7F6E</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(la,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {useState} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Button</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../button&#x27;</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title class_">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./demoJs.json&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> columns = [
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;selection&#x27;</span>
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;index&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5E8F\u53F7&#x27;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;index&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;date&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u65E5\u671F&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;name&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u59D3\u540D&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;address&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5730\u5740&#x27;</span>
    }
  ]
  <span class="hljs-keyword">const</span> [state, setState] = <span class="hljs-title function_">useState</span>({
    <span class="hljs-attr">showHeader</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">hover</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">border</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">stripe</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">ellipsis</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">title</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">dragLine</span>: <span class="hljs-literal">true</span>
  })
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onBtnClick</span> = (<span class="hljs-params"><span class="hljs-keyword">type</span>: <span class="hljs-built_in">string</span></span>) =&gt; {
    <span class="hljs-title function_">setState</span>({...state, [<span class="hljs-keyword">type</span>]: !(state <span class="hljs-keyword">as</span> <span class="hljs-built_in">any</span>)[<span class="hljs-keyword">type</span>]
  })
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-table&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> onBtnClick(&#x27;showHeader&#x27;)}&gt;\u663E\u793A\u8868\u5934:{state.showHeader.toString()}<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> onBtnClick(&#x27;hover&#x27;)}&gt;hover\u9AD8\u4EAE:{state.hover + &#x27;&#x27;}<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> onBtnClick(&#x27;border&#x27;)}&gt;\u663E\u793A\u8FB9\u6846:{state.border + &#x27;&#x27;}<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> onBtnClick(&#x27;stripe&#x27;)}&gt;\u663E\u793A\u6591\u9A6C\u7EBF:{state.stripe + &#x27;&#x27;}<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> onBtnClick(&#x27;ellipsis&#x27;)}&gt;\u6EA2\u51FA\u7701\u7565\u53F7:{state.ellipsis + &#x27;&#x27;}<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> onBtnClick(&#x27;title&#x27;)}&gt;\u9F20\u6807\u6ED1\u52A8\u8FC7\u63D0\u793A:{state.title + &#x27;&#x27;}<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> onBtnClick(&#x27;dragLine&#x27;)}&gt;\u62D6\u52A8\u6539\u53D8\u5217\u5BBD\u65F6\u5782\u76F4\u7EBF:{state.dragLine + &#x27;&#x27;}<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Table</span>
      <span class="hljs-attr">data</span>=<span class="hljs-string">{tableData}</span>
      <span class="hljs-attr">columns</span>=<span class="hljs-string">{columns}</span>
      <span class="hljs-attr">showHeader</span>=<span class="hljs-string">{state.showHeader}</span>
      <span class="hljs-attr">hover</span>=<span class="hljs-string">{state.hover}</span>
      <span class="hljs-attr">border</span>=<span class="hljs-string">{state.border}</span>
      <span class="hljs-attr">stripe</span>=<span class="hljs-string">{state.stripe}</span>
      <span class="hljs-attr">ellipsis</span>=<span class="hljs-string">{state.ellipsis}</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">{state.title}</span>
      <span class="hljs-attr">dragLine</span>=<span class="hljs-string">{state.dragLine}</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("BV9T4I");let l=a.className;a.className.indexOf("show")!==-1?l=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(l=a.className.replace("hide","show")),a.className=l}}))),s.createElement("div",{className:"card hide",id:"7561J6"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u6269\u5C55\u5217">\u6269\u5C55\u5217</h3>
<p>\u6DFB\u52A0\u6269\u5C55<code>expandable</code>\u65B9\u6CD5,\u53EF\u5728<code>formatter</code>\u4E2D\u8FD4\u56DE<code>row.tExtend()</code>\u65B9\u6CD5\u53EF\u5C55\u5F00\u6216\u6536\u8D77\u6269\u5C55\u884C\u5217\uFF0C<code>row.tStatus</code>\u8FD4\u56DE\u5F53\u524D\u5C55\u5F00\u6216\u6536\u8D77\u72B6\u6001</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(ta,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./demoJs.json&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> columns = [
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;selection&#x27;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;selection&#x27;</span>
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;index&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5E8F\u53F7&#x27;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;index&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;date&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u65E5\u671F&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;name&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u59D3\u540D&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;address&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5730\u5740&#x27;</span>
    },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u64CD\u4F5C&#x27;</span>,
      <span class="hljs-attr">formatter</span>: <span class="hljs-function">(<span class="hljs-params">row: <span class="hljs-built_in">any</span></span>) =&gt;</span> {
        <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> row.tExtend()}&gt;{
          row.tStatus ? &#x27;\u6536\u8D77&#x27; : &#x27;\u5C55\u5F00&#x27;
        }<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></span>)
      }
    }
  ]
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">expandable</span> = (<span class="hljs-params">row: <span class="hljs-built_in">any</span></span>) =&gt; {
    <span class="hljs-keyword">return</span> <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(row)
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-table&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Table</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{tableData}</span> <span class="hljs-attr">columns</span>=<span class="hljs-string">{columns}</span> <span class="hljs-attr">expandable</span>=<span class="hljs-string">{expandable}</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("7561J6");let l=a.className;a.className.indexOf("show")!==-1?l=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(l=a.className.replace("hide","show")),a.className=l}}))),s.createElement("div",{className:"card hide",id:"72K3MU"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u5B50\u7EA7\u6570\u636E">\u5B50\u7EA7\u6570\u636E</h3>
<p>\u7C7B\u4F3C\u4E8E\u6269\u5C55\u5217\uFF0C\u9700\u8981\u8BBE\u7F6E<code>hasChild=true</code>\uFF0C\u4F7F\u7528 <code>row.tExtend()</code>\u65B9\u6CD5\u5C55\u5F00\u6216\u6536\u8D77\u5B50\u8282\u70B9\uFF0C<code>row.tStatus</code>\u8FD4\u56DE\u5F53\u524D\u5C55\u5F00\u6216\u6536\u8D77\u72B6\u6001</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(ea,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-keyword">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./demoJs.json&#x27;</span>

<span class="hljs-keyword">function</span> Example() {
  const <span class="hljs-keyword">columns</span> = [
    {
      <span class="hljs-keyword">type</span>: <span class="hljs-string">&#x27;selection&#x27;</span>,
      prop: <span class="hljs-string">&#x27;select&#x27;</span>
    },
    {
      <span class="hljs-keyword">type</span>: <span class="hljs-string">&#x27;index&#x27;</span>,
      label: <span class="hljs-string">&#x27;\u5E8F\u53F7&#x27;</span>,
      prop: <span class="hljs-string">&#x27;index&#x27;</span>
    },
    {
      prop: <span class="hljs-string">&#x27;date&#x27;</span>,
      label: <span class="hljs-string">&#x27;\u65E5\u671F&#x27;</span>
    },
    {
      prop: <span class="hljs-string">&#x27;name&#x27;</span>,
      label: <span class="hljs-string">&#x27;\u59D3\u540D&#x27;</span>
    },
    {
      prop: <span class="hljs-string">&#x27;address&#x27;</span>,
      label: <span class="hljs-string">&#x27;\u5730\u5740&#x27;</span>
    },
    {
      label: <span class="hljs-string">&#x27;\u64CD\u4F5C&#x27;</span>,
      formatter: (<span class="hljs-keyword">row</span>: <span class="hljs-keyword">any</span>) =&gt; {
        <span class="hljs-keyword">return</span> (
          <span class="hljs-keyword">row</span>.tExtend ?
            &lt;span onClick={() =&gt; <span class="hljs-keyword">row</span>.tExtend()}&gt;{
              <span class="hljs-keyword">row</span>.tStatus ? <span class="hljs-string">&#x27;\u6536\u8D77&#x27;</span> : <span class="hljs-string">&#x27;\u5C55\u5F00\u5B50\u7EA7&#x27;</span>
            }&lt;/span&gt; : <span class="hljs-string">&#x27;&#x27;</span>)
      }
    }
  ]
  <span class="hljs-keyword">return</span> (&lt;div className=<span class="hljs-string">&#x27;demo-table&#x27;</span>&gt;
    &lt;<span class="hljs-keyword">Table</span> data={tableData} <span class="hljs-keyword">columns</span>={<span class="hljs-keyword">columns</span>} hasChild={<span class="hljs-keyword">true</span>} /&gt;
  &lt;/div&gt;)
}

export <span class="hljs-keyword">default</span> Example
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("72K3MU");let l=a.className;a.className.indexOf("show")!==-1?l=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(l=a.className.replace("hide","show")),a.className=l}}))),s.createElement("div",{className:"card hide",id:"FKK622"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u5B50\u7EA7\u5F02\u6B65\u52A0\u8F7D">\u5B50\u7EA7\u5F02\u6B65\u52A0\u8F7D</h3>
<p>\u4F7F\u7528 <code>row.tExtend()</code>\u65B9\u6CD5\u5C55\u5F00\u6216\u6536\u8D77\u5B50\u8282\u70B9\uFF0C\u4F1A\u89E6\u53D1\u65B9\u6CD5<code>lazyLoad</code>,\u901A\u8FC7\u8FD4\u56DE\u5F53\u524D\u884C\u4FE1\u606F\u4EE5\u52A0\u8F7D\u5F02\u6B65\u6570\u636E</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(pa,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./demoJs.json&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> columns = [
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;selection&#x27;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;select&#x27;</span>
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;index&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5E8F\u53F7&#x27;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;index&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;date&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u65E5\u671F&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;name&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u59D3\u540D&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;address&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5730\u5740&#x27;</span>
    },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u64CD\u4F5C&#x27;</span>,
      <span class="hljs-attr">formatter</span>: <span class="hljs-function">(<span class="hljs-params">row: <span class="hljs-built_in">any</span></span>) =&gt;</span> {
        <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> row.tExtend()}&gt;{
          row.tStatus ? &#x27;\u6536\u8D77&#x27; : &#x27;\u52A0\u8F7D\u5B50\u7EA7&#x27;
        }<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></span>)
      }
    }
  ]
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">lazyLoad</span> = (<span class="hljs-params">row: <span class="hljs-built_in">any</span>, resolve: <span class="hljs-built_in">any</span></span>) =&gt; {
    <span class="hljs-comment">// row \u5F53\u524D\u70B9\u51FB\u884C\u4FE1\u606F</span>
    <span class="hljs-comment">// \u6A21\u62DF\u8BF7\u6C42\u52A0\u8F7D</span>
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;row&#x27;</span>)
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">const</span> child = [
        {<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u5F02\u6B65\u6570\u636E1&#x27;</span>, <span class="hljs-attr">date</span>: <span class="hljs-string">&#x27;2021&#x27;</span>},
        {<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u5F02\u6B65\u6570\u636E2&#x27;</span>, <span class="hljs-attr">date</span>: <span class="hljs-string">&#x27;2021&#x27;</span>}
      ]
      <span class="hljs-title function_">resolve</span>(child)
    }, <span class="hljs-number">500</span>)
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-table&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Table</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{tableData}</span> <span class="hljs-attr">columns</span>=<span class="hljs-string">{columns}</span> <span class="hljs-attr">hasChild</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">lazyLoad</span>=<span class="hljs-string">{lazyLoad}</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("FKK622");let l=a.className;a.className.indexOf("show")!==-1?l=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(l=a.className.replace("hide","show")),a.className=l}}))),s.createElement("div",{className:"card hide",id:"A52JTT"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u5408\u5E76\u884C\u6216\u5217">\u5408\u5E76\u884C\u6216\u5217</h3>
<p>\u591A\u884C\u6216\u591A\u5217\u5171\u7528\u4E00\u4E2A\u6570\u636E\u65F6\uFF0C\u53EF\u4EE5\u5408\u5E76\u884C\u6216\u5217\u3002\u901A\u8FC7\u7ED9\u8BBE\u7F6E<code>rowColSpan</code>\u53EF\u4EE5\u5B9E\u73B0\u5408\u5E76\u884C\u6216\u5217\uFF0C\u53C2\u6570(\u5F53\u524D\u884C\u53F7<code>row</code>,\u5F53\u524D\u5217\u53F7<code>col</code>,\u5408\u5E76\u7684\u5217\u6570<code>rowSpan</code>,\u5408\u5E76\u7684\u884C\u6570<code>colSpan</code>)
\u56DB\u4E2A\u5C5E\u6027\u3002\u5F53<code>rowSpan</code>\u6216<code>colSpan</code>\u4E3A0\u65F6\uFF0C\u8868\u793A\u9690\u85CF\u5F53\u524D\u884C\u6216\u5217</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(ua,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./demoJs.json&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> columns = [
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;selection&#x27;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;select&#x27;</span>
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;index&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5E8F\u53F7&#x27;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;index&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;date&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u65E5\u671F&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;name&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u59D3\u540D&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;address&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5730\u5740&#x27;</span>
    }
  ]
  <span class="hljs-keyword">const</span> rowColSpan = [
    {
      <span class="hljs-attr">row</span>: <span class="hljs-number">0</span>, <span class="hljs-comment">// \u5C06\u7B2C\u4E00\u884C\u7B2C2\uFF0C3\u5355\u5143\u683C\u5408\u5E76</span>
      <span class="hljs-attr">col</span>: <span class="hljs-number">1</span>,
      <span class="hljs-attr">colSpan</span>: <span class="hljs-number">2</span>
    },
    {
      <span class="hljs-attr">row</span>: <span class="hljs-number">2</span>,
      <span class="hljs-attr">col</span>: <span class="hljs-number">3</span>,
      <span class="hljs-attr">rowSpan</span>: <span class="hljs-number">2</span>
    }
  ]
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-table&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Table</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{tableData}</span> <span class="hljs-attr">columns</span>=<span class="hljs-string">{columns}</span> <span class="hljs-attr">rowColSpan</span>=<span class="hljs-string">{rowColSpan}</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("A52JTT");let l=a.className;a.className.indexOf("show")!==-1?l=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(l=a.className.replace("hide","show")),a.className=l}}))),s.createElement("div",{className:"card hide",id:"4TUFWY"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u591A\u7EA7\u8868\u5934">\u591A\u7EA7\u8868\u5934</h3>
<p>\u4F7F\u7528<code>columns</code>\u8868\u5934\u53C2\u6570\u53EF\u652F\u6301\u591A\u7EA7\u8868\u5934</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(ca,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./demoJs.json&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> columns = [
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u65E5\u671F&#x27;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;day&#x27;</span>,
      <span class="hljs-attr">children</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5E74\u4EFD&#x27;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;date&#x27;</span>
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u6708\u4EFD&#x27;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;month&#x27;</span>
        }
      ]
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;name&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u59D3\u540D&#x27;</span>
    },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u6536\u8D27\u5730\u5740&#x27;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;ad&#x27;</span>,
      <span class="hljs-attr">children</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u7701\u4EFD&#x27;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;province&#x27;</span>
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u57CE\u5E02&#x27;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;city&#x27;</span>
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5730\u5740&#x27;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;address&#x27;</span>
        }
      ]
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;control&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u64CD\u4F5C&#x27;</span>,
      <span class="hljs-attr">formatter</span>: <span class="hljs-function">() =&gt;</span> {
        <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{delClick}</span>&gt;</span>\u5220\u9664<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span></span>
      }
    }
  ]
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">delClick</span> = (<span class="hljs-params"></span>) =&gt; {

  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-table&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Table</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{tableData}</span> <span class="hljs-attr">columns</span>=<span class="hljs-string">{columns}</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("4TUFWY");let l=a.className;a.className.indexOf("show")!==-1?l=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(l=a.className.replace("hide","show")),a.className=l}}))),s.createElement("div",{className:"card hide",id:"6NUV0Y"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u5E26\u5206\u9875\u7EC4\u4EF6">\u5E26\u5206\u9875\u7EC4\u4EF6</h3>
<p>\u5185\u7F6E\u5206\u9875\u7EC4\u4EF6</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(ra,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./demoJs.json&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> columns = [
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;selection&#x27;</span>
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;index&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5E8F\u53F7&#x27;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;index&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;date&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u65E5\u671F&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;name&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u59D3\u540D&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;address&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5730\u5740&#x27;</span>
    }
  ]
  <span class="hljs-keyword">const</span> pagination = {
    <span class="hljs-attr">current</span>: <span class="hljs-number">1</span>,
    <span class="hljs-attr">pageSize</span>: <span class="hljs-number">3</span>,
    <span class="hljs-attr">onChange</span>: <span class="hljs-function">(<span class="hljs-params">v: number</span>) =&gt;</span> {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(v)
    }
  }
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-table&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Table</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{tableData}</span> <span class="hljs-attr">columns</span>=<span class="hljs-string">{columns}</span> <span class="hljs-attr">pagination</span>=<span class="hljs-string">{pagination}</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("6NUV0Y");let l=a.className;a.className.indexOf("show")!==-1?l=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(l=a.className.replace("hide","show")),a.className=l}}))),s.createElement("div",{className:"card hide",id:"2CIOVI"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u9F20\u6807\u6ED1\u8FC7tooltip\u63D0\u793A">\u9F20\u6807\u6ED1\u8FC7tooltip\u63D0\u793A</h3>
<p>\u6DFB\u52A0<code>tooltip=true</code>\u6216<code>tooltip=&quot;{direction:&#39;left&#39;,..\u5176\u4ED6\u6240\u6709\u7684tooltip\u5C5E\u6027}&quot;</code>\u5373\u53EF\u5728\u9F20\u6807\u6ED1\u8FC7\u65F6\u663E\u793A<code>tooltip</code>\u63D0\u793A \u9ED8\u8BA4\u4E3A<code>true</code></p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(oa,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
<span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./demoJs.json&#x27;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">Example</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> columns = [
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;selection&#x27;</span>
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;index&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5E8F\u53F7&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;date&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u65E5\u671F&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;name&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u59D3\u540D&#x27;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#x27;address&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5730\u5740&#x27;</span>,
      <span class="hljs-attr">tooltip</span>: {<span class="hljs-attr">show</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">direction</span>: <span class="hljs-string">&#x27;left&#x27;</span>}
    }
  ]
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-table&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Table</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{tableData}</span> <span class="hljs-attr">columns</span>=<span class="hljs-string">{columns}</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("2CIOVI");let l=a.className;a.className.indexOf("show")!==-1?l=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(l=a.className.replace("hide","show")),a.className=l}}))),s.createElement("div",{className:"md-section",dangerouslySetInnerHTML:{__html:`<div class="card"><h3 id="\u6A2A\u5411\u6EDA\u52A8\u6761\u56FA\u5B9A\u5728\u6D4F\u89C8\u5668\u5E95\u90E8">\u6A2A\u5411\u6EDA\u52A8\u6761\u56FA\u5B9A\u5728\u6D4F\u89C8\u5668\u5E95\u90E8</h3>
<p>\u901A\u8FC7\u8BBE\u7F6E<code>fixedBottomScroll</code>\u53EF\u5C06\u6A2A\u5411\u6EDA\u52A8\u6761\u56FA\u5B9A\u5728\u6D4F\u89C8\u5668\u5E95\u90E8\uFF0C<code>true</code>\u65F6\u6EDA\u52A8\u4E3B\u4F53\u4E3A<code>document</code>\uFF0C\u5B57\u7B26\u65F6\u4E3A\u5F53\u524D\u6EDA\u52A8\u7684\u533A\u57DF\u5982<code>fixedBottomScroll=&#39;.scroll</code>&#39;\uFF0C\u5219\u6EDA\u52A8\u533A\u57DF\u4E3A<code>scroll</code>
\uFF0C\u6CE8\u610F\uFF1A\u6B64\u8BBE\u7F6E\u4F1A\u8986\u76D6<code>height</code>\u5C5E\u6027\u7684\u503C</p>
</div>`}}),s.createElement("div",{className:"md-section",dangerouslySetInnerHTML:{__html:`<div class="card"><h3 id="\u793A\u4F8B\u6570\u636E">\u793A\u4F8B\u6570\u636E</h3>
<pre><code class="language-json">[
  {
    <span class="hljs-string">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-03&quot;</span>,
    <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;\u5F20\u4E09&quot;</span>,
    <span class="hljs-string">&quot;province&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C&quot;</span>,
    <span class="hljs-string">&quot;city&quot;</span>: <span class="hljs-string">&quot;\u767D\u4E91\u533A&quot;</span>,
    <span class="hljs-string">&quot;address&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7&quot;</span>,
    <span class="hljs-string">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>,
    <span class="hljs-string">&quot;children&quot;</span>: [
      {
        <span class="hljs-string">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-00&quot;</span>,
        <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;\u5B50\u7EA7&quot;</span>,
        <span class="hljs-string">&quot;province&quot;</span>: <span class="hljs-string">&quot;\u5B50\u7EA7\u5E7F\u4E1C&quot;</span>,
        <span class="hljs-string">&quot;city&quot;</span>: <span class="hljs-string">&quot;\u5B50\u7EA7\u767D\u4E91\u533A&quot;</span>,
        <span class="hljs-string">&quot;address&quot;</span>: <span class="hljs-string">&quot;\u5B50\u7EA7\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7&quot;</span>,
        <span class="hljs-string">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>
      }
    ]
  },
  {
    <span class="hljs-string">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-04&quot;</span>,
    <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;\u674E\u56DB&quot;</span>,
    <span class="hljs-string">&quot;province&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C&quot;</span>,
    <span class="hljs-string">&quot;city&quot;</span>: <span class="hljs-string">&quot;\u767D\u4E91\u533A&quot;</span>,
    <span class="hljs-string">&quot;address&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7&quot;</span>,
    <span class="hljs-string">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>
  },
  {
    <span class="hljs-string">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-05&quot;</span>,
    <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;\u674E\u56DB5&quot;</span>,
    <span class="hljs-string">&quot;province&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C&quot;</span>,
    <span class="hljs-string">&quot;city&quot;</span>: <span class="hljs-string">&quot;\u767D\u4E91\u533A&quot;</span>,
    <span class="hljs-string">&quot;address&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7&quot;</span>,
    <span class="hljs-string">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>
  },
  {
    <span class="hljs-string">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-06&quot;</span>,
    <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;\u674E\u56DB6&quot;</span>,
    <span class="hljs-string">&quot;province&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C&quot;</span>,
    <span class="hljs-string">&quot;city&quot;</span>: <span class="hljs-string">&quot;\u767D\u4E91\u533A&quot;</span>,
    <span class="hljs-string">&quot;address&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7&quot;</span>,
    <span class="hljs-string">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>
  },
  {
    <span class="hljs-string">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-07&quot;</span>,
    <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;\u674E\u56DB7&quot;</span>,
    <span class="hljs-string">&quot;province&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C&quot;</span>,
    <span class="hljs-string">&quot;city&quot;</span>: <span class="hljs-string">&quot;\u767D\u4E91\u533A&quot;</span>,
    <span class="hljs-string">&quot;address&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7&quot;</span>,
    <span class="hljs-string">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>
  },
  {
    <span class="hljs-string">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-08&quot;</span>,
    <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;\u674E\u56DB8&quot;</span>,
    <span class="hljs-string">&quot;province&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C&quot;</span>,
    <span class="hljs-string">&quot;city&quot;</span>: <span class="hljs-string">&quot;\u767D\u4E91\u533A&quot;</span>,
    <span class="hljs-string">&quot;address&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7&quot;</span>,
    <span class="hljs-string">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>
  },
  {
    <span class="hljs-string">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-09&quot;</span>,
    <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;\u674E\u56DB9&quot;</span>,
    <span class="hljs-string">&quot;province&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C&quot;</span>,
    <span class="hljs-string">&quot;city&quot;</span>: <span class="hljs-string">&quot;\u767D\u4E91\u533A&quot;</span>,
    <span class="hljs-string">&quot;address&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7&quot;</span>,
    <span class="hljs-string">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>
  },
  {
    <span class="hljs-string">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-10&quot;</span>,
    <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;\u674E\u56DB10&quot;</span>,
    <span class="hljs-string">&quot;province&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C&quot;</span>,
    <span class="hljs-string">&quot;city&quot;</span>: <span class="hljs-string">&quot;\u767D\u4E91\u533A&quot;</span>,
    <span class="hljs-string">&quot;address&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7&quot;</span>,
    <span class="hljs-string">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>
  }
]
</code></pre>
</div>`}})),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:`<h2 id="api">API</h2>
<div class="card"><h3 id="table">Table</h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>data</td>
<td>array</td>
<td>\u5217\u8868\u6570\u636E</td>
</tr>
<tr>
<td>columns</td>
<td>array</td>
<td>\u8868\u5934\u6570\u636E</td>
</tr>
<tr>
<td>showHeader</td>
<td>boolean/true</td>
<td>\u662F\u5426\u663E\u793A\u8868\u5934</td>
</tr>
<tr>
<td>className</td>
<td>String</td>
<td>\u8868\u683C\u7C7B\u540D</td>
</tr>
<tr>
<td>hover</td>
<td>boolean/true</td>
<td>\u9F20\u6807\u7ECF\u8FC7\u663E\u793A\u9AD8\u4EAE</td>
</tr>
<tr>
<td>border</td>
<td>boolean/true</td>
<td>\u662F\u5426\u663E\u793A\u8868\u683C\u7EB5\u5411\u8FB9\u6846</td>
</tr>
<tr>
<td>stripe</td>
<td>boolean/true</td>
<td>\u662F\u5426\u663E\u793A\u95F4\u9694\u6591\u9A6C\u7EB9</td>
</tr>
<tr>
<td>height</td>
<td>String</td>
<td>table \u7684\u9AD8\uFF0C\u6EA2\u51FA\u663E\u793A\u6EDA\u52A8\u6761\uFF0C\u4E14\u8868\u5934\u56FA\u5B9A</td>
</tr>
<tr>
<td>width</td>
<td>String</td>
<td>\u8868\u683C\u5916\u5C42 div \u7684\u5BBD\uFF0C\u5F53\u5355\u5143\u683C\u603B\u548C\u5927\u4E8E\u8868\u683C width \u65F6\uFF0C\u51FA\u73B0\u6A2A\u5411\u6EDA\u52A8\u6761</td>
</tr>
<tr>
<td>ellipsis</td>
<td>boolean/true</td>
<td>\u8868\u683C\u5355\u5143\u683C\u6587\u5B57\u6EA2\u51FA\u663E\u793A...\uFF0C\u5728\u4E0D\u6307\u5B9A\u5217\u5BBD\u65F6\uFF0C\u5404\u5217\u5E73\u5206\u8868\u683C\u5BBD</td>
</tr>
<tr>
<td>emptyText</td>
<td>String</td>
<td>\u65E0\u6570\u636E\u65F6\u663E\u793A\u7684\u6587\u672C</td>
</tr>
<tr>
<td>title</td>
<td>Boolean/true</td>
<td>\u9F20\u6807\u6ED1\u8FC7\u5355\u5143\u683C\u65F6\u663E\u793A title \u63D0\u793A</td>
</tr>
<tr>
<td>drag</td>
<td>boolean/false</td>
<td>\u5141\u8BB8\u62D6\u52A8\u8868\u5934\u6539\u53D8\u5F53\u524D\u5355\u5143\u683C\u5BBD\u5EA6</td>
</tr>
<tr>
<td>dragLine</td>
<td>boolean/true</td>
<td>\u62D6\u52A8\u65F6\u663E\u793A\u5782\u76F4\u7EBF</td>
</tr>
<tr>
<td>dragWidth</td>
<td>array</td>
<td>\u5141\u8BB8\u62D6\u52A8\u6700\u5927\u4E0E\u6700\u5C0F\u5BBD\u5EA6[min,max]</td>
</tr>
<tr>
<td>extendToggle</td>
<td>boolean/false</td>
<td>\u6269\u5C55\u884C/\u5B50\u8282\u70B9\u521D\u59CB\u5C55\u5F00\u6216\u6536\u8D77\u72B6\u6001</td>
</tr>
<tr>
<td>rowColSpan</td>
<td>function</td>
<td>\u5408\u5E76\u884C\u6216\u5217\u65B9\u6CD5\u3002\u901A\u8FC7\u7ED9\u4F20\u5165 rowColSpan \u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u5408\u5E76\u884C\u6216\u5217\uFF0C\u65B9\u6CD5\u7684\u53C2\u6570(\u5F53\u524D\u884C\u53F7 rowIndex,\u5F53\u524D\u5217\u53F7 columnIndex,\u5F53\u524D\u884C row,\u5F53\u524D\u5217 column)\u56DB\u4E2A\u5C5E\u6027\u3002\u8BE5\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u4E24\u4E2A\u6570\u5B57\u7684\u6570\u7EC4\uFF0C\u7B2C\u4E00\u4E2A rowspan\uFF0C\u7B2C\u4E8C\u4E2A colspan\uFF0C\u5373\u5411\u7EB5\u5411\u548C\u6A2A\u5411\u5408\u5E76\u591A\u5C11\u4E2A\u5355\u5143\u683C</td>
</tr>
<tr>
<td>pagination</td>
<td>object</td>
<td>\u6709\u76F8\u5173\u53C2\u6570\u65F6\u663E\u793A\u5206\u9875\uFF0C\u53C2\u6570\u7684pagination\u7EC4\u4EF6\u53C2\u6570</td>
</tr>
<tr>
<td>hasChild</td>
<td>boolean/true</td>
<td>\u662F\u5426\u5305\u542B\u5B50\u8282\u70B9\u6570\u636E\uFF0C\u4E3Atrue\u65F6\uFF0C\u5F53 <code>row</code> \u4E2D\u5305\u542B <code>children</code> \u5B57\u6BB5\u65F6\uFF0C\u88AB\u89C6\u4E3A\u5B50\u8282\u70B9\u6570\u636E</td>
</tr>
<tr>
<td>lazyLoad</td>
<td>function</td>
<td>\u8BBE\u7F6E\u4E86<code>lazyLoad</code>\u65F6\uFF0C\u88AB\u89C6\u4E3A\u5B50\u8282\u70B9\u4F7F\u7528\u61D2\u52A0\u8F7D\u65B9\u5F0F\uFF0Cfunction(row,resolve) row\u5F53\u524D\u884C\u4FE1\u606F</td>
</tr>
<tr>
<td>fixedBottomScroll</td>
<td>boolean/string</td>
<td>\u56FA\u5B9A\u6A2A\u5411\u6EDA\u52A8\u6761\u5728\u5E95\u90E8,\u53EF\u4E3A\u8282\u70B9\u7C7B\u540D</td>
</tr>
<tr>
<td>selectClick</td>
<td>function</td>
<td>\u52FE\u9009\u5355\u5217\u4E8B\u4EF6\uFF0Cfunction(list,checked,row, index) list\u6240\u6709\u5DF2\u52FE\u9009\u7684row\u96C6\u5408\uFF0Cchecked\u5F53\u524D\u72B6\u6001\uFF0Crow\u5F53\u524D\u70B9\u51FB\u884C\u4FE1\u606F\uFF0Cindex\u5F53\u524D\u884C\u5E8F\u53F7</td>
</tr>
<tr>
<td>dragChange</td>
<td>function(val)</td>
<td>\u62D6\u52A8\u6539\u53D8\u5217\u8868\u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u6240\u6709\u5217\u7684\u5BBD\u5EA6\u4FE1\u606F</td>
</tr>
<tr>
<td>sortChange</td>
<td>function(row)</td>
<td>\u6392\u5E8F\u70B9\u51FB\u4E8B\u4EF6</td>
</tr>
<tr>
<td>expandable</td>
<td>function(row)</td>
<td>\u6269\u5C55\u4E8B\u4EF6</td>
</tr>
<tr>
<td>scroll</td>
<td>function</td>
<td>\u8868\u683C\u65F6\u6EDA\u52A8\u65F6\u7684\u6EDA\u52A8\u4E8B\u4EF6\uFF0Cfunction(scrollTop,bottom,el),scrollTop\u6EDA\u52A8\u6761\u7684\u4F4D\u7F6E\uFF0Cbottom\u662F\u5426\u6EDA\u52A8\u5230\u5E95\u90E8,el\u5F53\u524D\u6EDA\u52A8\u7684\u5BF9\u8C61</td>
</tr>
<tr>
<td>rowClick</td>
<td>function</td>
<td>\u5F53\u524D\u884C\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u5373tr\u70B9\u51FB\u4E8B\u4EF6\uFF0Cfunction(row,index)</td>
</tr>
<tr>
<td>cellClick</td>
<td>function</td>
<td>\u5F53\u524D\u5217\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u5373td\u70B9\u51FB\u4E8B\u4EF6\uFF0Cfunction(row,column,rowIndex, columnIndex)</td>
</tr>
</tbody></table>
</div><div class="card"><h3 id="table-methods">Table Methods</h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
</tr>
</thead>
<tbody><tr>
<td>getSelectAll</td>
<td>\u8FD4\u56DE\u6240\u6709\u9009\u4E2D\u7684\u884C</td>
</tr>
<tr>
<td>toggleRowSelection</td>
<td>\u7528\u4E8E\u591A\u9009\u8868\u683C\uFF0C\u5207\u6362\u67D0\u4E00\u884C\u7684\u9009\u4E2D\u72B6\u6001\uFF0C\u5982\u679C\u4F7F\u7528\u4E86\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5219\u662F\u8BBE\u7F6E\u8FD9\u4E00\u884C\u9009\u4E2D\u4E0E\u5426\uFF08selected \u4E3A true \u5219\u9009\u4E2D\uFF09 row, selected</td>
</tr>
<tr>
<td>toggleSelection</td>
<td>\u7528\u4E8E\u591A\u9009\u8868\u683C\uFF0C\u5207\u6362\u6240\u6709\u884C\u7684\u9009\u4E2D/\u6E05\u7A7A\u72B6\u6001,true\u4E3A\u9009\u4E2D\uFF0Cfalse\u53D6\u6D88\u9009\u4E2D\uFF0C\u9ED8\u8BA4false</td>
</tr>
<tr>
<td>clearSort</td>
<td>\u7528\u4E8E\u6E05\u7A7A\u6392\u5E8F\u6761\u4EF6</td>
</tr>
</tbody></table>
</div><div class="card"><h3 id="tablecolumns">Table.Columns</h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>prop</td>
<td>String</td>
<td>\u5BF9\u5E94\u5217\u5185\u5BB9\u7684\u5B57\u6BB5\u540D,\u540C\u65F6\u4F5C\u4E3A\u552F\u4E00key</td>
</tr>
<tr>
<td>label</td>
<td>String</td>
<td>\u663E\u793A\u7684\u6807\u9898</td>
</tr>
<tr>
<td>width</td>
<td>String</td>
<td>\u5BF9\u5E94\u5217\u7684\u5BBD\u5EA6</td>
</tr>
<tr>
<td>className</td>
<td>String</td>
<td>\u5BF9\u5E94\u5217\u7684\u7C7B\u540D</td>
</tr>
<tr>
<td>align</td>
<td>String</td>
<td>\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009 left/center/right</td>
</tr>
<tr>
<td>type</td>
<td>String</td>
<td>\u5BF9\u5E94\u5217\u7C7B\u578B\uFF0C\u53EF\u9009 selection\uFF08\u591A\u9009\uFF09/index \u5E8F\u53F7</td>
</tr>
<tr>
<td>fixed</td>
<td>Boolean/false</td>
<td>\u56FA\u5B9A\u5217\uFF0C\u53EF\u9009 left/right</td>
</tr>
<tr>
<td>sortBy</td>
<td>Boolean/false</td>
<td>\u5F53\u524D\u5217\u663E\u793A\u6392\u5E8F\u6309\u94AE</td>
</tr>
<tr>
<td>title</td>
<td>Boolean/false</td>
<td>\u9F20\u6807\u6ED1\u8FC7\u5355\u5143\u683C\u65F6\u663E\u793A title \u63D0\u793A</td>
</tr>
<tr>
<td>drag</td>
<td>Boolean/true</td>
<td>\u5141\u8BB8\u5F53\u524D\u5355\u5143\u683C\u62D6\u52A8\uFF0C\u4EC5\u5728table\u7684drag=true\u65F6\u6709\u6548</td>
</tr>
<tr>
<td>formatter</td>
<td>function</td>
<td>\u7528\u6765\u683C\u5F0F\u5316\u5185\u5BB9,Function(row, column, cellValue, index)</td>
</tr>
<tr>
<td>tooltip</td>
<td>boolean/object</td>
<td>\u9F20\u6807\u6ED1\u8FC7\u663E\u793A<code>tooltip</code>\uFF0C\u53C2\u6570\u8BE6\u89C1<code>tooltip</code>\u7EC4\u4EF6</td>
</tr>
</tbody></table>
</div>`}})))}export{Da as default};
