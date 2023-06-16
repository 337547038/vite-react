import{R,j as l,c as $,r as b,p as X}from"./index-eab8b3d4.js";import{S as Z}from"./SelectDown-93100f6a.js";import{o as _}from"./index-a427ff8b.js";import{a as p}from"./contextForm-cfeffa56.js";const A=R.forwardRef((t,I)=>{const[D,o]=R.useState([]),[u,x]=R.useState(t.defaultDate),[c,j]=R.useState({hours:"",minutes:"",seconds:""}),g=n=>`${n}`.padStart(2,"0"),w=n=>{let r=[];const C=n.getFullYear(),y=n.getMonth(),k=new Date(C,y,1);k.setDate(0);let m=k.getDate(),H=k.getDay()+1;for(;H>0;)r.push({d:m-H+1,y:y>0?C:C-1,m:y>0?y-1:11,p:!0}),H--;k.setMonth(k.getMonth()+2,0),m=k.getDate();for(let P=1;P<=m;P++)r.push({d:P,y:C,m:y});for(let P=1;r.length<42;P++)r.push({d:P,y:y<11?C:C+1,m:y<11?y+1:0,n:!0});o([...r]),j({hours:g(n.getHours()),minutes:g(n.getMinutes()),seconds:g(n.getSeconds())})},i=n=>t.disabledDate&&t.disabledDate(n,"day"),d=n=>{const r=new Date(n.y,n.m,n.d),C=new Date(u).toDateString();return $({"calendar-date-out":n.p||n.n,"calendar-date-today":r.toDateString()===new Date().toDateString(),"calendar-date-select":r.toDateString()===C,"calendar-date-disabled":i(r)})},f=n=>{const r=new Date(n.y,n.m,n.d,parseInt(c.hours,10),parseInt(c.minutes,10),parseInt(c.seconds,10));i(r)||(x(r.getTime()),t.type==="datetime"||t.onClick(r,t.index))},Y=n=>{const r=new Date(n.y,n.m,n.d);return t.innerText&&t.innerText(r)},T=()=>{let n=t.value;u&&(n=new Date(u)),t.onClick(n,t.index,"confirm")},N=(n,r,C)=>{const{value:y}=r.target;if(!/[^\d]/g.test(y)){const k=C?g(y):y;j({...c,[n]:k});const m=u?new Date(u):t.value,v=parseInt(y,10);n==="hours"&&m.setHours(v),n==="minutes"&&m.setMinutes(v),n==="seconds"&&m.setSeconds(v),x(m.getTime()),t.onClick(m,t.index)}},F=n=>{n.currentTarget.select()},V=()=>{x(t.defaultDate)};return R.useImperativeHandle(I,()=>({reset:V})),R.useEffect(()=>{w(t.value)},[t.value]),l.jsxs("div",{className:"calendar-days",children:[l.jsxs("div",{className:"calendar-week",children:[l.jsx("a",{children:"日"}),l.jsx("a",{children:"一"}),l.jsx("a",{children:"二"}),l.jsx("a",{children:"三"}),l.jsx("a",{children:"四"}),l.jsx("a",{children:"五"}),l.jsx("a",{children:"六"})]}),l.jsx("div",{className:"calendar-list",children:D.map((n,r)=>l.jsx("a",{className:d(n),onClick:()=>f(n),children:l.jsxs("span",{children:[n.d,Y(n)?l.jsx("i",{children:Y(n)}):""]})},r))}),t.type==="datetime"||t.type==="datetimeRange"?l.jsxs("div",{className:"calendar-time",children:[l.jsxs("div",{className:"calendar-time-input",children:[l.jsx("input",{value:c==null?void 0:c.hours,type:"text",maxLength:2,onChange:N.bind(void 0,"hours"),onFocus:F}),":",l.jsx("input",{value:c==null?void 0:c.minutes,type:"text",maxLength:2,onChange:N.bind(void 0,"minutes"),onFocus:F}),":",l.jsx("input",{value:c==null?void 0:c.seconds,type:"text",maxLength:2,onChange:N.bind(void 0,"seconds"),onFocus:F})]}),t.type==="datetime"||t.type==="datetimeRange"&&t.index===1?l.jsx("a",{className:"btn-time",onClick:T,children:"确定"}):""]}):""]})});A.displayName="Day";const B=R.forwardRef((t,I)=>{const{pane:D="year"}=t,[o,u]=R.useState(t.defaultDate);let x=[];if(D==="year"){const i=t.value.getFullYear();for(let d=i-4;d<=i+7;d++)x.push(d.toString())}else D==="month"&&(x=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]);const c=i=>t.disabledDate&&t.disabledDate(i,D),j=(i,d)=>{let f=new Date(i);const Y=new Date(o);let T=i===Y.getFullYear().toString();const N=new Date;let F=f.getFullYear()===N.getFullYear();if(D==="month"){f=new Date(t.value.getFullYear(),d),t.value.getFullYear()===Y.getFullYear()&&(T=d===Y.getMonth());const V=t.value.getFullYear();F=N.getFullYear().toString()+N.getMonth()===V.toString()+d}return $({"calendar-date-today":F,"calendar-date-select":T,"calendar-date-disabled":c(f)})},g=(i,d)=>{let f=new Date(i);D==="month"&&(f=new Date(t.value.getFullYear(),d)),c(f)||(u(f.getTime()),t.onClick(f))},w=()=>{u(t.defaultDate)};return R.useEffect(()=>{u(t.defaultDate)},[t.defaultDate]),R.useImperativeHandle(I,()=>({reset:w})),l.jsx("div",{className:$({"calendar-year":D==="year","calendar-months":D==="month"}),children:x.map((i,d)=>l.jsx("a",{className:j(i,d),onClick:()=>g(i,d),children:i},i))})});B.displayName="YearMonth";const ee=t=>{const{position:I="left"}=t;if(!t.value)return null;const D=t.value.getFullYear(),o=t.value.getMonth(),u=g=>{let w=1;t.activePanel==="year"&&(w=10),g===0&&(w=-w);const i=new Date(t.value.setFullYear(D+w));t.onChange(i)},x=g=>{let w=1;g===0&&(w=-w);const i=new Date(t.value.setMonth(o+w));t.onChange(i)},c=g=>{t.onChange(g)},j=g=>!(t.type.includes("Range")&&(I==="left"&&g||I==="right"&&!g));return l.jsxs("div",{className:"calendar-head",children:[j(0)?l.jsx("a",{className:"calendar-prev-year",onClick:()=>u(0),children:"«"}):"",t.activePanel==="day"?l.jsx("a",{className:"calendar-prev-month",onClick:()=>x(0),children:"‹"}):"",l.jsxs("span",{children:[l.jsx("a",{className:"calendar-year-select",onClick:()=>c("year"),children:t.activePanel==="year"?`${D-2}年－${D+8}年`:`${D}年`}),t.activePanel==="day"?l.jsxs("a",{className:"calendar-year-month",onClick:()=>c("month"),children:[o+1,"月"]}):""]}),t.activePanel==="day"?l.jsx("a",{className:"calendar-next-month",onClick:()=>x(1),children:"›"}):"",j(1)?l.jsx("a",{className:"calendar-next-year",onClick:()=>u(1),children:"»"}):""]})},te=b.forwardRef((t,I)=>{const{readonly:D=!0,type:o="date"}=t,[u,x]=b.useState("day"),[c,j]=b.useState([]),[g,w]=b.useState([]),[i,d]=b.useState([]),f=o.includes("Range"),Y=b.useRef(null),T=b.useRef(null),N=b.useRef(null),F=R.useContext(p),V=e=>`${e}`.padStart(2,"0"),n=()=>{let e="";if(t.format)e=t.format;else switch(t.type){case"year":e="y";break;case"month":case"monthRange":e="y-MM";break;case"date":case"dateRange":e="y-MM-dd";break;case"datetime":case"datetimeRange":e="y-MM-dd hh:mm:ss";break}return e},r=(e,a)=>{if(a==="timestamp")return e.getTime().toString();const s=e.getMonth()+1,h=e.getDate(),S=e.getHours(),M=e.getMinutes(),E=e.getSeconds(),L={y:e.getFullYear(),M:s,MM:V(s),d:h,dd:V(h),h:S,hh:V(S),m:M,mm:V(M),s:E,ss:V(E),w:e.getDay()};return a.replace(/(y|MM|M|dd|d|hh|h|mm|m|ss|s|w)/g,O=>{const U=L[O];return O==="w"?["日","一","二","三","四","五","六"][U]:U})},C=e=>{const a=new Date(e);if(a.toString()!=="Invalid Date")return a;if(!/[^\d]/g.test(e)){const h=new Date(parseInt(e,10));if(h.toString()!=="Invalid Date")return h}const s=new Date(e==null?void 0:e.replace(/['年'|'月']/g,"-").replace("日",""));return s.toString()!=="Invalid Date"?s:(console.warn("无效时间:"+e),!1)},y=e=>{const a=e||t.defaultValue;let s=new Date,h=new Date(new Date().setMonth(s.getMonth()+1));if(o==="monthRange"&&(h=new Date(new Date().setFullYear(s.getFullYear()+1))),f){if(typeof a=="object"&&a.length===2){const S=C(a[0]),M=C(a[1]);if(S&&M){s=S,h=M;const E=r(S,n()),L=r(M,n());d([E,L]),w([s.getTime(),h.getTime()])}}j([s,h])}else{if(typeof a=="string"&&a){const S=C(a);if(S){s=S;const M=r(S,n());d([M]),w([s.getTime()])}}j([s])}};b.useEffect(()=>{y()},[t.defaultValue]);const k=()=>{x(o==="year"||o==="month"?o:o==="monthRange"?"month":"day")};b.useEffect(()=>{k()},[]);const m=(e,a=!0)=>{var M;let s=[],h=[];if(f)if((e==null?void 0:e.length)===2){const E=r(e[0],n()),L=r(e[1],n());s=[E,L],h=[e[0].getTime(),e[1].getTime()]}else s=[],h=[];else(e==null?void 0:e.length)===1?(s=[r(e[0],n())],h=[e[0].getTime()]):(s=[],h=[]);d(s),w(h);const S=f?s:s[0]||"";t.onChange&&t.onChange(S,e),F.controlChange&&F.controlChange(S,"change"),j(e),a&&((M=Y.current)==null||M.slideUp())},v=b.useRef([]),H=e=>{e.length===2?e[0]>e[1]?m([e[1],e[0]]):m([e[0],e[1]]):e.length},P=(e,a,s)=>{if(f)if(o==="datetimeRange")if(s==="confirm"){let h=new Date;v.current.length!==0&&(h=v.current[v.current.length-1]),H([h,e])}else a===0&&v.current.push(e);else v.current.push(e),H(v.current);else m([e])},q=(e,a)=>{if(console.log(a),o===u)m([a]);else if(o==="monthRange")v.current.push(a),H(v.current);else{let s="";u==="year"&&(s="month"),u==="month"&&(s="day"),s&&x(s),c[e]=a,j([...c])}},z=(e,a)=>{typeof a=="string"&&!f?x(a):typeof a=="object"&&(f?e===0?j([a,c[1]]):e===1&&j([c[0],a]):j([a]))},G=e=>{var a,s;e||(k(),y(),(a=N.current)==null||a.reset(),(s=T.current)==null||s.reset()),v.current=[]},J=(e,a)=>{if(t.readonly||!e)return;const s=C(e);s?m(f?a==="end"?[c[0],s]:[s,c[1]]:[s],!1):d([...i])},K=()=>{t.clear&&(m([]),y([]))},Q=()=>f?i:i.toString();b.useImperativeHandle(I,()=>({getValue:Q}));const W=_(t,["defaultValue","type","format","disabledDate","innerText","onChange","readonly"]);return l.jsx(Z,{...W,icon:"date",fixedIcon:!0,filterable:!D,defaultValue:i,toggleClick:G,onBlur:J,onClear:K,isRange:o.includes("Range"),ref:Y,children:l.jsx("div",{className:`${X}-date-picker`,children:c.map((e,a)=>l.jsxs("div",{className:"calendar",children:[l.jsx(ee,{type:o,activePanel:u,value:e,position:a===0?"left":"right",onChange:z.bind(void 0,a)}),l.jsx("div",{className:"calendar-body",children:u==="day"?l.jsx(A,{value:e,defaultDate:g[a],type:o,onClick:P,disabledDate:t.disabledDate,innerText:t.innerText,index:a,ref:T}):l.jsx(B,{ref:N,pane:u,value:e,defaultDate:g[a],disabledDate:t.disabledDate,onClick:q.bind(void 0,a)})})]},a))})})});te.displayName="DatePicker";export{te as D};
