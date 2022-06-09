var Os=Object.defineProperty,Is=Object.defineProperties;var Js=Object.getOwnPropertyDescriptors;var os=Object.getOwnPropertySymbols;var zs=Object.prototype.hasOwnProperty,Rs=Object.prototype.propertyIsEnumerable;var is=(l,a,n)=>a in l?Os(l,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[a]=n,f=(l,a)=>{for(var n in a||(a={}))zs.call(a,n)&&is(l,n,a[n]);if(os)for(var n of os(a))Rs.call(a,n)&&is(l,n,a[n]);return l},A=(l,a)=>Is(l,Js(a));import{r,a as d,c as v,j as I,F as Ws,p as Xs,R as s}from"./index.085b3e07.js";import{B as w}from"./Button.956930fb.js";import{C as hs}from"./Group.56288785.js";import{d as ds}from"./index.4eedf3c9.js";import{a as Vs}from"./dom.0e399110.js";import{P as Ys}from"./Pagination.9bc55745.js";import{T as Gs}from"./Tooltip.bf037a8d.js";import"./contextForm.196e79be.js";import"./Option.3107bf8e.js";import"./SelectDown.a490cdb1.js";import"./Tag.f4d6c449.js";const js=r.exports.forwardRef((l,a)=>{const{selectChecked:n=0}=l,[h,k]=r.exports.useState({}),T=(i,c)=>{if(i===void 0){if(l.title)return c}else if(i)return c;return""},x=(i,c)=>{l.drag&&q("mouseMove",{evt:c,index:i})},D=(i,c)=>{q("mouseDown",{evt:c,index:i})},J=i=>{q("checkboxChange",i)},m=(i,c)=>{const y=A(f({},h),{[i]:c});k(y),q("sortClick",y)},q=(i,c)=>{l.event(i,c)},[X,V]=r.exports.useState({}),N=i=>{V(i?{transform:`translateY(${i}px) translateZ(100px)`,className:"transform"}:{transform:"",className:""})},z=()=>{k({})},B=i=>l.drag?i!==!1:!1;return r.exports.useImperativeHandle(a,()=>({scrollTop:N,clearSort:z})),d("thead",{style:{transform:X.transform},className:v(X.className),children:l.layer.map(i=>d("tr",{className:v({drag:l.drag}),children:l.columns.map((c,y)=>c._layer===i?I("th",{className:v(c.fixed,c.className),style:{textAlign:c.align},title:T(c.title,c.label||""),colSpan:c._colSpan,rowSpan:c._rowSpan,onMouseMove:x.bind(globalThis,y),children:[c.type==="selection"?d(hs,{className:v({"some-select":n===2}),checked:n===1,onChange:J}):"",c.type!=="selection"?I(Ws,{children:[c.label,c.sortBy?I("span",{className:"caret-wrapper",children:[d("i",{className:v("sort-caret asc icon-down",{active:h[c.prop]==="asc"}),onClick:()=>m(c.prop,"asc")}),d("i",{className:v("sort-caret desc icon-down",{active:h[c.prop]==="desc"}),onClick:()=>m(c.prop,"desc")})]}):""]}):"",B(c.drag)?d("a",{className:"drag-line",onMouseDown:D.bind(globalThis,y)}):""]},y):"")},i))})});js.displayName="TableHeader";const g=r.exports.forwardRef((l,a)=>{const{hover:n=!0,border:h=!0,stripe:k=!0,ellipsis:T=!0,showHeader:x=!0,drag:D=!0,dragLine:J=!0,dragWidth:m=[60,0],title:q=!0,emptyText:X="\u6682\u65E0\u6570\u636E",pagination:V={}}=l,[N,z]=r.exports.useState({stateHeight:l.height||"",isSetThWidth:!1,mouseDown:!1}),[B,i]=r.exports.useState(l.data),[c,y]=r.exports.useState([]),Z=r.exports.useRef(null),U=r.exports.useRef(null),E=r.exports.useRef(null);let Y=0;const ss=c.length;ss===0?Y=0:ss===B.length?Y=1:Y=2;let G=0,as=[];const[ms,gs]=r.exports.useState([]),[K,xs]=r.exports.useState([]),[Es,Fs]=r.exports.useState([]),[R,$]=r.exports.useState([]),H=r.exports.useRef([]),ns=[],Q=[],bs=ds(()=>{console.log("\u8868\u5934\u6570\u636E\u5904\u7406"),ls(l.columns,0),xs([...as]),$([...ns]),Q.forEach(e=>{if(e.children){const u=Q.filter(p=>{var F;const o=(F=p._tProps)==null?void 0:F.split(",");return o&&o.includes(e.prop)&&!p.children});(u==null?void 0:u.length)>0&&(e._colSpan=u.length)}else{const u=G-e._layer+1;u>1&&(e._rowSpan=u)}}),Fs([...Q]);const t=[];for(let e=0;e<G;e++)t.push(e+1);gs(t)}),ls=(t,e=0,u="")=>{e++,e>G&&(G=e),t.forEach(p=>{const o=p.prop||"",F=u?u+","+o:o;p.children?ls(p.children,e,F):(as.push(p),ns.push(p.width||"")),Q.push(A(f({},p),{_layer:e,_tProps:F}))})},Cs=(t,e,u)=>{let p=[];if(u)p=[...c,t];else{const o=c.indexOf(t);c.splice(o,1),p=c}y([...p]),l.selectClick&&l.selectClick(p,u,t,e)},fs=t=>c.includes(t),ts=t=>{y(t?[...B]:[])},Ds=()=>c,ys=(t,e)=>{const u=c.indexOf(t);e?u===-1&&(c.push(t),y([...c])):u!==-1&&(c.splice(u,1),y([...c]))},ws=()=>{var t;(t=U.current)==null||t.clearSort()},Bs=(t,e)=>{switch(t){case"checkboxChange":ts(e),l.selectClick&&l.selectClick(e?B:[],e);break;case"mouseDown":ks(e);break;case"mouseMove":Ns(e);break;case"sortClick":l.sortChange&&l.sortChange(e);break}},L=r.exports.useRef({}),ks=t=>{if(!D)return;N.isSetThWidth||(As(),document.addEventListener("mouseup",vs));const e={isSetThWidth:!0,mouseDown:!0};z(f(f({},N),e));const u=R[t.index]||H.current[t.index];L.current={mouseDown:!0,oldX:t.evt.pageX,oldWidth:parseInt(u.replace("px",""),10)||0,index:t.index},es(t.evt),t.evt.preventDefault()},As=()=>{var e;if(!D)return;const t=(e=E.current)==null?void 0:e.querySelectorAll("th");t&&(H.current=[],t.forEach(u=>{H.current.push(u.offsetWidth+"px")}),$([...H.current]))},es=t=>{setTimeout(()=>{var p;const e=Vs(E.current);let u=(p=E.current)==null?void 0:p.querySelector(".table-drag-line");u&&(u.style.left=t.pageX-e.left+"px",u.style.height=e.height+"px")})},Ns=t=>{var p,o,F;if(!D)return;const e=t.evt;let u=((p=L.current)==null?void 0:p.oldWidth)+(e.pageX-((o=L.current)==null?void 0:o.oldX));m[0]>0&&u<m[0]||m[1]>0&&u>m[1]||N.mouseDown&&(es(e),m[0]>0&&u<m[0]&&(u=m[0]),m[1]>0&&u>m[1]&&(u=m[1]),R[(F=L.current)==null?void 0:F.index]=u+"px",$([...R]),H.current=R)},vs=()=>{var t;D&&((t=L.current)==null?void 0:t.mouseDown)&&l.dragChange&&l.dragChange(H.current),L.current={mouseDown:!1,oldX:void 0,oldWidth:void 0,index:void 0},z(A(f({},N),{mouseDown:!1}))};r.exports.useImperativeHandle(a,()=>({toggleSelection:ts,getSelectAll:Ds,toggleRowSelection:ys,clearSort:ws}));const qs=(t,e,u)=>{if(!u)return"";if(t===void 0){if(q)return e}else if(t)return e;return""},Ss=ds(()=>{console.log("fixedHead"),setTimeout(()=>{ps(0)},0)}),_s=()=>{var t,e,u,p,o,F;if(l.height&&x&&E.current){const O=((t=E.current)==null?void 0:t.scrollTop)||0,_=((e=E.current)==null?void 0:e.scrollLeft)||0;(u=U.current)==null||u.scrollTop(O);const b=(p=E.current)==null?void 0:p.querySelectorAll(".left");if(b&&b.length>0)if(_>0)for(let C=0,W=b.length;C<W;C++)b[C].style.transform=`translateX(${_}px) translateZ(91px)`,b[C].style.webkitTransform=`translateX(${_}px) translateZ(91px)`;else for(let C=0,W=b.length;C<W;C++)b[C].style.transform="",b[C].style.webkitTransform="";if(ps(_),typeof l.scroll=="function"){const C=(o=E.current)==null?void 0:o.clientHeight,W=(F=E.current)==null?void 0:F.scrollHeight;let rs=!1;O+C>=W-3&&(rs=!0),l.scroll(O,rs)}}},ps=t=>{var o,F,O,_;const e=(o=E.current)==null?void 0:o.querySelectorAll(".right"),u=((O=(F=E.current)==null?void 0:F.querySelector("table"))==null?void 0:O.offsetWidth)||0;let p=t-(u-(((_=E.current)==null?void 0:_.clientWidth)||0));if(e.length>0)for(let b=0,C=e.length;b<C;b++)e[b].style.transform=`translateX(${p}px)translateZ(90px)`,e[b].style.webkitTransform=`translateX(${p}px)translateZ(90px)`};r.exports.useEffect(()=>{bs()},[l.columns]),r.exports.useEffect(()=>{Ss()},[]),r.exports.useEffect(()=>{if(console.log("\u6570\u636E\u6539\u53D8"),us({}),i([...l.data]),l.fixedBottomScroll){if(typeof l.fixedBottomScroll=="string"){const t=document.querySelector(l.fixedBottomScroll);t&&t.addEventListener("scroll",M)}else document.addEventListener("scroll",M);window.addEventListener("resize",M),setTimeout(()=>{M()},500)}return()=>{l.fixedBottomScroll&&(document.removeEventListener("scroll",M),window.removeEventListener("resize",M))}},[l.data]);const[S,us]=r.exports.useState({}),Ts=(t,e)=>{S[t]===void 0?S[t]=!l.extendToggle:S[t]=!S[t],us(f({},S)),l.hasChild&&typeof l.lazyLoad=="function"&&l.lazyLoad(e,u=>{e.children=u,i([...B])})},P=t=>S[t]===void 0?l.extendToggle||!1:S[t],M=()=>{if(!l.fixedBottomScroll)return;const t=E.current,e=Z.current;if(!t||!e)return;let u=window.innerHeight;if(typeof l.fixedBottomScroll=="string"){const o=document.querySelector(l.fixedBottomScroll);o&&(u=o.offsetHeight+20)}const{top:p}=t.getBoundingClientRect();if(p>u)t.style.height="unset",t.style.marginBottom="unset";else{const o=Math.min(u-p,e.offsetHeight);t.style.minHeight="60px",z(A(f({},N),{stateHeight:o+"px"})),t.style.marginBottom=e.offsetHeight-o+"px"}},Hs=(t,e)=>{l.rowClick&&l.rowClick(t,e)},Ls=(t,e,u,p)=>{l.cellClick&&l.cellClick(t,e,u,p)},Ms=(t,e)=>{let u={};return l.rowColSpan&&l.rowColSpan.forEach(p=>{t===p.row&&e===p.col&&(p.rowSpan===0||p.colSpan===0?u.style={display:"none"}:(p.rowSpan&&p.rowSpan>1&&(u.rowSpan=p.rowSpan),p.colSpan&&p.colSpan>1&&(u.colSpan=p.colSpan)))}),u},cs=(t,e,u)=>d("tr",{onClick:()=>Hs(t,e),children:K.map((p,o)=>r.exports.createElement("td",A(f({},Ms(e,o)),{className:v(p.fixed,p.className),key:(p.prop||Math.floor(Math.random()*100))+e.toString(),title:qs(p.title,t[p.prop],!p.tooltip),onClick:()=>Ls(t,p,e,o)}),p.type==="selection"&&!u?d(hs,{checked:fs(t),onChange:Cs.bind(globalThis,t,e)}):p.type==="index"?e+1:p.formatter?p.formatter(A(f({},t),{tExtend:u?void 0:Ts.bind(globalThis,e,t),tStatus:u?void 0:P(e)}),p,t[p.prop],e):d(Gs,A(f({direction:"top",disabled:!p.tooltip},p.tooltip),{content:t[p.prop],children:t[p.prop]}))))},e);return I("div",{ref:E,className:v(Xs+"-table",l.className,{"is-scroll":l.width}),style:{width:l.width,height:N.stateHeight,overflowY:l.height?"auto":void 0,overflowX:l.width?"auto":void 0},onScroll:_s,children:[I("table",{ref:Z,className:v({"no-stripe":!k,"no-border":!h,"no-hover":!n,"no-ellipsis":!T}),children:[d("colgroup",{children:R.map((t,e)=>d("col",{width:t,className:`column${e}`},e))}),x?d(js,{ref:U,drag:D,title:q,layer:ms,selectChecked:Y,columns:Es,event:Bs}):"",d("tbody",{children:B.length===0?d("tr",{children:d("td",{colSpan:K.length,className:"empty",children:X})}):B.map((t,e)=>I(r.exports.Fragment,{children:[cs(t,e),typeof l.expandable=="function"&&P(e)?d("tr",{className:"extend-row",children:d("td",{colSpan:K.length,children:l.expandable(t)})},"extend"+e):"",l.hasChild&&t.children&&P(e)?t.children.map((u,p)=>cs(u,p,!0)):""]},e))})]}),J&&D&&N.mouseDown?d("div",{className:"table-drag-line"}):"",Object.keys(V).length>0?d(Ys,A(f({},l.pagination),{total:B==null?void 0:B.length})):""]})});g.displayName="Table";var j=[{date:"2016-05-03",name:"\u5F20\u4E09",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u7537",children:[{date:"2016-05-00",name:"\u5B50\u7EA7",province:"\u5B50\u7EA7\u5E7F\u4E1C",city:"\u5B50\u7EA7\u767D\u4E91\u533A",address:"\u5B50\u7EA7\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:0}]},{date:"2016-05-04",name:"\u674E\u56DB",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u7537"},{date:"2016-05-05",name:"\u674E\u56DB5",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u5973"},{date:"2016-05-06",name:"\u674E\u56DB6",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u7537"},{date:"2016-05-07",name:"\u674E\u56DB7",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u5973"},{date:"2016-05-08",name:"\u674E\u56DB8",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u5973"},{date:"2016-05-09",name:"\u674E\u56DB9",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u5973"},{date:"2016-05-10",name:"\u674E\u56DB10",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u5973"}];function Qs(){const l=[{type:"selection",prop:"sel"},{type:"index",label:"\u5E8F\u53F7",prop:"index"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740"}];return s.createElement("div",{className:"demo-table"},s.createElement(g,{data:j,columns:l}))}function Us(){const l=[{type:"selection",prop:"se"},{type:"index",label:"\u5E8F\u53F7",prop:"index"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740"},{label:"\u64CD\u4F5C",formatter:()=>s.createElement("a",{onClick:a},"\u5220\u9664")}],a=()=>{console.log("del")};return s.createElement("div",{className:"demo-table"},s.createElement(g,{data:j,columns:l}))}function Ks(){const l=[{type:"selection",width:"50px"},{type:"index",label:"\u5E8F\u53F7",prop:"index"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740"}],a=r.exports.useRef(null),n=()=>{var x;(x=a.current)==null||x.toggleSelection(!0)},h=()=>{var x;(x=a.current)==null||x.toggleSelection(!1)},k=()=>{var D;const x=(D=a.current)==null?void 0:D.getSelectAll();console.log(x),alert(JSON.stringify(x))},T=x=>{[j[1],j[2]].forEach(J=>{var m;(m=a.current)==null||m.toggleRowSelection(J,x)})};return s.createElement("div",{className:"demo-table"},s.createElement("div",null,s.createElement(w,{onClick:n},"\u5168\u9009"),s.createElement(w,{onClick:h},"\u53D6\u6D88\u5168\u9009"),s.createElement(w,{onClick:k},"\u83B7\u53D6\u6240\u9009\u884C"),s.createElement(w,{onClick:()=>T(!0)},"\u5C06\u7B2C2,3\u6761\u8BBE\u4E3A\u9009\u4E2D\u72B6\u6001"),s.createElement(w,{onClick:()=>T(!1)},"\u53D6\u6D88\u7B2C2,3\u6761\u9009\u4E2D\u72B6\u6001")),s.createElement(g,{data:j,columns:l,ref:a}))}function $s(){const l=[{type:"selection",width:"50px"},{type:"index",label:"\u5E8F\u53F7",prop:"index"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740"}];return s.createElement("div",{className:"demo-table"},s.createElement(g,{data:j,columns:l,height:"200px"}))}function Ps(){const l=[{type:"selection",fixed:"left",width:"50px",className:"cls"},{type:"index",label:"\u5E8F\u53F7",width:"50px",prop:"index"},{prop:"date",label:"\u65E5\u671F",width:"120px"},{prop:"name",label:"\u59D3\u540D",width:"150px"},{prop:"address",label:"\u5730\u5740",width:"300px"},{prop:"zip",label:"\u90AE\u7BB1",width:"100px",fixed:"right"}];return s.createElement("div",{className:"demo-table"},s.createElement(g,{data:j,columns:l,height:"200px",width:"600px"}))}function Zs(){const l=[{type:"selection"},{type:"index",label:"\u5E8F\u53F7",prop:"index"},{prop:"date",label:"\u65E5\u671F",sortBy:!0},{prop:"name",label:"\u59D3\u540D",sortBy:!0},{prop:"address",label:"\u5730\u5740"}],a=n=>{console.log(n),alert(JSON.stringify(n))};return s.createElement("div",{className:"demo-table"},s.createElement(g,{data:j,columns:l,sortChange:a}))}function sa(){const l=[{type:"selection",drag:!1},{type:"index",label:"\u5E8F\u53F7",drag:!1,prop:"index"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740"}],a=n=>{console.log(n),alert(JSON.stringify(n))};return s.createElement("div",{className:"demo-table"},s.createElement(g,{data:j,columns:l,dragChange:a}))}function aa(){const l=[{type:"selection"},{type:"index",label:"\u5E8F\u53F7",prop:"index"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740"}],[a,n]=r.exports.useState({showHeader:!0,hover:!0,border:!0,stripe:!0,ellipsis:!0,title:!0,dragLine:!0}),h=k=>{n(A(f({},a),{[k]:!a[k]}))};return s.createElement("div",{className:"demo-table"},s.createElement("div",null,s.createElement(w,{onClick:()=>h("showHeader")},"\u663E\u793A\u8868\u5934:",a.showHeader.toString()),s.createElement(w,{onClick:()=>h("hover")},"hover\u9AD8\u4EAE:",a.hover+""),s.createElement(w,{onClick:()=>h("border")},"\u663E\u793A\u8FB9\u6846:",a.border+""),s.createElement(w,{onClick:()=>h("stripe")},"\u663E\u793A\u6591\u9A6C\u7EBF:",a.stripe+""),s.createElement(w,{onClick:()=>h("ellipsis")},"\u6EA2\u51FA\u7701\u7565\u53F7:",a.ellipsis+""),s.createElement(w,{onClick:()=>h("title")},"\u9F20\u6807\u6ED1\u52A8\u8FC7\u63D0\u793A:",a.title+""),s.createElement(w,{onClick:()=>h("dragLine")},"\u62D6\u52A8\u6539\u53D8\u5217\u5BBD\u65F6\u5782\u76F4\u7EBF:",a.dragLine+"")),s.createElement(g,{data:j,columns:l,showHeader:a.showHeader,hover:a.hover,border:a.border,stripe:a.stripe,ellipsis:a.ellipsis,title:a.title,dragLine:a.dragLine}))}function na(){const l=[{type:"selection",prop:"selection"},{type:"index",label:"\u5E8F\u53F7",prop:"index"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740"},{label:"\u64CD\u4F5C",formatter:n=>s.createElement("span",{onClick:()=>n.tExtend()},n.tStatus?"\u6536\u8D77":"\u5C55\u5F00")}],a=n=>JSON.stringify(n);return s.createElement("div",{className:"demo-table"},s.createElement(g,{data:j,columns:l,expandable:a}))}function la(){const l=[{type:"selection",prop:"select"},{type:"index",label:"\u5E8F\u53F7",prop:"index"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740"},{label:"\u64CD\u4F5C",formatter:a=>a.tExtend?s.createElement("span",{onClick:()=>a.tExtend()},a.tStatus?"\u6536\u8D77":"\u5C55\u5F00\u5B50\u7EA7"):""}];return s.createElement("div",{className:"demo-table"},s.createElement(g,{data:j,columns:l,hasChild:!0}))}function ta(){const l=[{type:"selection",prop:"select"},{type:"index",label:"\u5E8F\u53F7",prop:"index"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740"},{label:"\u64CD\u4F5C",formatter:n=>s.createElement("span",{onClick:()=>n.tExtend()},n.tStatus?"\u6536\u8D77":"\u52A0\u8F7D\u5B50\u7EA7")}],a=(n,h)=>{console.log("row"),setTimeout(()=>{h([{name:"\u5F02\u6B65\u6570\u636E1",date:"2021"},{name:"\u5F02\u6B65\u6570\u636E2",date:"2021"}])},500)};return s.createElement("div",{className:"demo-table"},s.createElement(g,{data:j,columns:l,hasChild:!0,lazyLoad:a}))}function ea(){const l=[{type:"selection",prop:"select"},{type:"index",label:"\u5E8F\u53F7",prop:"index"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740"}],a=[{row:0,col:1,colSpan:2},{row:0,col:2,colSpan:0},{row:2,col:3,rowSpan:2},{row:3,col:3,rowSpan:0}];return s.createElement("div",{className:"demo-table"},s.createElement(g,{data:j,columns:l,rowColSpan:a}))}function pa(){const l=[{label:"\u65E5\u671F",prop:"day",children:[{label:"\u5E74\u4EFD",prop:"date"},{label:"\u6708\u4EFD",prop:"month"}]},{prop:"name",label:"\u59D3\u540D"},{label:"\u6536\u8D27\u5730\u5740",prop:"ad",children:[{label:"\u7701\u4EFD",prop:"province"},{label:"\u57CE\u5E02",prop:"city"},{label:"\u5730\u5740",prop:"address"}]},{prop:"control",label:"\u64CD\u4F5C",formatter:()=>s.createElement("a",{onClick:a},"\u5220\u9664")}],a=()=>{};return s.createElement("div",{className:"demo-table"},s.createElement(g,{data:j,columns:l}))}function ua(){const l=[{type:"selection"},{type:"index",label:"\u5E8F\u53F7",prop:"index"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740"}],a={current:1,pageSize:3,onChange:n=>{console.log(n)}};return s.createElement("div",{className:"demo-table"},s.createElement(g,{data:j,columns:l,pagination:a}))}function ca(){const l=[{type:"selection"},{type:"index",label:"\u5E8F\u53F7"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740",tooltip:{show:!0,direction:"left"}}];return s.createElement("div",{className:"demo-table"},s.createElement(g,{data:j,columns:l}))}function Ca(l){return s.createElement("div",{className:"doc-container md-pc docs-demo"},s.createElement("div",{className:"code-container"},s.createElement("div",{className:"md-code"}),s.createElement("div",{className:"md-api",dangerouslySetInnerHTML:{__html:""}})),s.createElement("div",{className:"demo-container"},s.createElement("div",{className:"md-demo"},s.createElement("h1",{id:"table-\u8868\u683C"},"Table \u8868\u683C"),s.createElement("div",{className:"card hide",id:"32306N"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>
<p>\u4F7F\u7528<code>columns</code>\u63D0\u4F9B\u8868\u5934\u6240\u9700\u6570\u636E\uFF0C<code>tableData</code>\u4E3A\u5217\u8868\u6570\u636E</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(Qs,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
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
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("32306N");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"G889HD"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u81EA\u5B9A\u4E49\u5217\u6A21\u677F">\u81EA\u5B9A\u4E49\u5217\u6A21\u677F</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(Us,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
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
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("G889HD");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"995JSU"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u6DFB\u52A0\u5E8F\u53F7\u548Ccheckbox\u52FE\u9009">\u6DFB\u52A0\u5E8F\u53F7\u548Ccheckbox\u52FE\u9009</h3>
<p><code>type=&quot;selection&quot;</code>\u6DFB\u52A0\u52FE\u9009\u6846,<code>type=&quot;index&quot;</code>\u6DFB\u52A0\u5E8F\u53F7,getSelectAll\`\u65B9\u6CD5\u53EF\u53D6\u5DF2\u52FE\u9009\u884C\u3002</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(Ks,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Button</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../button&#x27;</span>
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
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("995JSU");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"6XVY12"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u56FA\u5B9A\u8868\u5934">\u56FA\u5B9A\u8868\u5934</h3>
<p>\u7EB5\u5411\u5185\u5BB9\u8FC7\u591A\u65F6\uFF0C\u53EF\u9009\u62E9\u56FA\u5B9A\u8868\u5934\uFF0C\u6DFB\u52A0\u6307\u5B9A\u9AD8\u5EA6\u5373\u53EF<code>height</code></p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement($s,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
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
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("6XVY12");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"BMQW9S"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u56FA\u5B9A\u5934\u548C\u5217">\u56FA\u5B9A\u5934\u548C\u5217</h3>
<p>\u6A2A\u5411\u5185\u5BB9\u8FC7\u591A\u65F6\uFF0C\u53EF\u9009\u62E9\u56FA\u5B9A\u5217\u3002\u6DFB\u52A0\u5BBD<code>width</code>\u56FA\u5B9A\u5217\u5BBD\uFF1B<code>column</code>\u6DFB\u52A0<code>fixed=&quot;left/right&quot;</code>\u3002\u9700\u8981\u6CE8\u610F\u8BBE\u7F6E\u8868\u683C\u5BBD\u65F6\u540C\u65F6\u8981\u5BF9\u6BCF\u5217\u8BBE\u7F6E\u56FA\u5B9A\u5BBD\uFF0C\u5426\u5219\u4E0D\u4F1A\u51FA\u73B0\u6A2A\u5411\u6EDA\u52A8\u6761</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(Ps,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
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
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("BMQW9S");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"1O8NO4"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u6DFB\u52A0\u6392\u5E8F">\u6DFB\u52A0\u6392\u5E8F</h3>
<p><code>column</code>\u6DFB\u52A0\u6392\u5E8F <code>sortBy=&quot;true&quot;</code>\u8868\u793A\u5F53\u524D\u5217\u53EF\u6392\u5E8F\u3002\u70B9\u51FB\u6392\u5E8F\u89E6\u53D1\u4E8B\u4EF6<code>sortChange</code></p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(Zs,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
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
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("1O8NO4");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"1LYCTD"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u62D6\u52A8\u6539\u53D8\u5217\u5BBD">\u62D6\u52A8\u6539\u53D8\u5217\u5BBD</h3>
<p>\u9ED8\u8BA4\u6240\u6709\u5217\u5141\u8BB8\u62D6\u52A8\uFF0C\u5F53\u8BBE\u7F6E<code>drag=&quot;false&quot;</code>\u4E0D\u5141\u8BB8\u62D6\u52A8\u3002\u6216\u8005\u662F\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5BF9\u5355\u4E2Acolumn\u8BBE\u7F6E<code>drag=&quot;false&quot;</code>\u8868\u793A\u5F53\u524D\u5217\u4E0D\u53EF\u62D6\u52A8\u3002\u62D6\u52A8\u6539\u53D8\u5217\u5BBD\u4E8B\u4EF6<code>dragChange</code>\u53EF\u8FD4\u56DE\u5404\u5217\u7684\u5BBD\uFF0C\u53EF\u7528\u4E8E\u548C\u670D\u52A1\u7AEF\u5BF9\u63A5</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(sa,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
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
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("1LYCTD");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"AOQVJM"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u5176\u4ED6\u53C2\u6570\u8BBE\u7F6E">\u5176\u4ED6\u53C2\u6570\u8BBE\u7F6E</h3>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(aa,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {useState} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
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
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("AOQVJM");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"BJXO6G"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u6269\u5C55\u5217">\u6269\u5C55\u5217</h3>
<p>\u6DFB\u52A0\u6269\u5C55<code>expandable</code>\u65B9\u6CD5,\u53EF\u5728<code>formatter</code>\u4E2D\u8FD4\u56DE<code>row.tExtend()</code>\u65B9\u6CD5\u53EF\u5C55\u5F00\u6216\u6536\u8D77\u6269\u5C55\u884C\u5217\uFF0C<code>row.tStatus</code>\u8FD4\u56DE\u5F53\u524D\u5C55\u5F00\u6216\u6536\u8D77\u72B6\u6001</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(na,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
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
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("BJXO6G");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"FMA8HO"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u5B50\u7EA7\u6570\u636E">\u5B50\u7EA7\u6570\u636E</h3>
<p>\u7C7B\u4F3C\u4E8E\u6269\u5C55\u5217\uFF0C\u9700\u8981\u8BBE\u7F6E<code>hasChild=true</code>\uFF0C\u4F7F\u7528 <code>row.tExtend()</code>\u65B9\u6CD5\u5C55\u5F00\u6216\u6536\u8D77\u5B50\u8282\u70B9\uFF0C<code>row.tStatus</code>\u8FD4\u56DE\u5F53\u524D\u5C55\u5F00\u6216\u6536\u8D77\u72B6\u6001</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(la,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-keyword">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
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
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("FMA8HO");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"55SMWJ"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u5B50\u7EA7\u5F02\u6B65\u52A0\u8F7D">\u5B50\u7EA7\u5F02\u6B65\u52A0\u8F7D</h3>
<p>\u4F7F\u7528 <code>row.tExtend()</code>\u65B9\u6CD5\u5C55\u5F00\u6216\u6536\u8D77\u5B50\u8282\u70B9\uFF0C\u4F1A\u89E6\u53D1\u65B9\u6CD5<code>lazyLoad</code>,\u901A\u8FC7\u8FD4\u56DE\u5F53\u524D\u884C\u4FE1\u606F\u4EE5\u52A0\u8F7D\u5F02\u6B65\u6570\u636E</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(ta,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
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
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("55SMWJ");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"KKEQX"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u5408\u5E76\u884C\u6216\u5217">\u5408\u5E76\u884C\u6216\u5217</h3>
<p>\u591A\u884C\u6216\u591A\u5217\u5171\u7528\u4E00\u4E2A\u6570\u636E\u65F6\uFF0C\u53EF\u4EE5\u5408\u5E76\u884C\u6216\u5217\u3002\u901A\u8FC7\u7ED9\u8BBE\u7F6E<code>rowColSpan</code>\u53EF\u4EE5\u5B9E\u73B0\u5408\u5E76\u884C\u6216\u5217\uFF0C\u53C2\u6570(\u5F53\u524D\u884C\u53F7<code>row</code>,\u5F53\u524D\u5217\u53F7<code>col</code>,\u5408\u5E76\u7684\u5217\u6570<code>rowSpan</code>,\u5408\u5E76\u7684\u884C\u6570<code>colSpan</code>)
\u56DB\u4E2A\u5C5E\u6027\u3002\u5F53<code>rowSpan</code>\u6216<code>colSpan</code>\u4E3A0\u65F6\uFF0C\u8868\u793A\u9690\u85CF\u5F53\u524D\u884C\u6216\u5217</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(ea,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
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
      <span class="hljs-attr">row</span>: <span class="hljs-number">0</span>, <span class="hljs-comment">// \u5BF9\u5E94\u4E8E\u524D\u9762\u5C06\u7B2C\u4E00\u884C\u7B2C3\u5355\u5143\u683C\u8BBE\u7F6E\u4E0D\u663E\u793A</span>
      <span class="hljs-attr">col</span>: <span class="hljs-number">2</span>,
      <span class="hljs-attr">colSpan</span>: <span class="hljs-number">0</span>
    },
    {
      <span class="hljs-attr">row</span>: <span class="hljs-number">2</span>,
      <span class="hljs-attr">col</span>: <span class="hljs-number">3</span>,
      <span class="hljs-attr">rowSpan</span>: <span class="hljs-number">2</span>
    },
    {
      <span class="hljs-attr">row</span>: <span class="hljs-number">3</span>,
      <span class="hljs-attr">col</span>: <span class="hljs-number">3</span>,
      <span class="hljs-attr">rowSpan</span>: <span class="hljs-number">0</span>
    }
  ]
  <span class="hljs-keyword">return</span> (<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#x27;demo-table&#x27;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Table</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{tableData}</span> <span class="hljs-attr">columns</span>=<span class="hljs-string">{columns}</span> <span class="hljs-attr">rowColSpan</span>=<span class="hljs-string">{rowColSpan}</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>)
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Example</span>
</code></pre>
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("KKEQX");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"D0GY7E"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u591A\u7EA7\u8868\u5934">\u591A\u7EA7\u8868\u5934</h3>
<p>\u4F7F\u7528<code>columns</code>\u8868\u5934\u53C2\u6570\u53EF\u652F\u6301\u591A\u7EA7\u8868\u5934</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(pa,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
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
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("D0GY7E");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"7HNIU1"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u5E26\u5206\u9875\u7EC4\u4EF6">\u5E26\u5206\u9875\u7EC4\u4EF6</h3>
<p>\u5185\u7F6E\u5206\u9875\u7EC4\u4EF6</p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(ua,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
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
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("7HNIU1");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"card hide",id:"9ESJLV"},s.createElement("div",{className:"demo-block"},s.createElement("div",{className:"demo-block-title",dangerouslySetInnerHTML:{__html:`<h3 id="\u9F20\u6807\u6ED1\u8FC7tooltip\u63D0\u793A">\u9F20\u6807\u6ED1\u8FC7tooltip\u63D0\u793A</h3>
<p>\u6DFB\u52A0<code>tooltip=true</code>\u6216<code>tooltip=&quot;{direction:&#39;left&#39;,..\u5176\u4ED6\u6240\u6709\u7684tooltip\u5C5E\u6027}&quot;</code>\u5373\u53EF\u5728\u9F20\u6807\u6ED1\u8FC7\u65F6\u663E\u793A<code>tooltip</code>\u63D0\u793A \u9ED8\u8BA4\u4E3A<code>true</code></p>
`}}),s.createElement("div",{className:"demo-block-content"},s.createElement(ca,null))),s.createElement("div",{className:"code-block",dangerouslySetInnerHTML:{__html:`<pre><code class="language-jsx"><span class="hljs-keyword">import</span> {<span class="hljs-title class_">Table</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./index&#x27;</span>
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
`}}),s.createElement("div",{className:"control-block"},s.createElement("span",{onClick:()=>{const a=document.getElementById("9ESJLV");let n=a.className;a.className.indexOf("show")!==-1?n=a.className.replace("show","hide"):a.className.indexOf("hide")!==-1&&(n=a.className.replace("hide","show")),a.className=n}}))),s.createElement("div",{className:"md-section",dangerouslySetInnerHTML:{__html:`<div class="card"><h3 id="\u6A2A\u5411\u6EDA\u52A8\u6761\u56FA\u5B9A\u5728\u6D4F\u89C8\u5668\u5E95\u90E8">\u6A2A\u5411\u6EDA\u52A8\u6761\u56FA\u5B9A\u5728\u6D4F\u89C8\u5668\u5E95\u90E8</h3>
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
</div>`}})))}export{Ca as default};
