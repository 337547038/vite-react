import{j as t,R as e}from"./index-eab8b3d4.js";import{R as l}from"./react-35e66634.js";import{B as s}from"./Button-658a5c6d.js";import"./contextForm-cfeffa56.js";const a=()=>t.jsxs("div",{className:"demo-button",children:[t.jsxs("div",{className:"row",children:[t.jsx(s,{name:"name123",children:"默认按钮"}),t.jsx(s,{type:"primary",children:"主要按钮"}),t.jsx(s,{type:"success",children:"成功按钮"}),t.jsx(s,{type:"danger",children:"危险按钮"}),t.jsx(s,{type:"warning",children:"警告按钮"}),t.jsx(s,{type:"text",children:"文字按钮"})]}),t.jsxs("div",{className:"row",children:[t.jsx(s,{round:"true",children:"默认按钮"}),t.jsx(s,{round:"true",type:"primary",children:"主要按钮"}),t.jsx(s,{round:"true",type:"success",children:"成功按钮"}),t.jsx(s,{round:"true",type:"danger",children:"危险按钮"}),t.jsx(s,{round:"true",type:"warning",children:"警告按钮"}),t.jsx(s,{round:"true",type:"text",children:"文字按钮"})]}),t.jsxs("div",{className:"row",children:[t.jsx(s,{plain:"true",children:"默认按钮"}),t.jsx(s,{plain:"true",type:"primary",children:"主要按钮"}),t.jsx(s,{plain:"true",type:"success",children:"成功按钮"}),t.jsx(s,{plain:"true",type:"danger",children:"危险按钮"}),t.jsx(s,{plain:"true",type:"warning",children:"警告按钮"}),t.jsx(s,{plain:"true",type:"text",children:"文字按钮"})]})]}),n=a,r=()=>t.jsxs("div",{className:"demo-button",children:[t.jsx(s,{disabled:!0,children:"默认按钮"}),t.jsx(s,{disabled:!0,type:"primary",children:"确认按钮"}),t.jsx(s,{disabled:!0,type:"success",children:"取消按钮"}),t.jsx(s,{disabled:!0,type:"text",children:"文字按钮"})]}),c=r,E=()=>t.jsxs("div",{className:"demo-button",children:[t.jsxs("div",{className:"row",children:[t.jsx(s,{size:"large",type:"primary",children:"大号按钮"}),t.jsx(s,{type:"primary",children:"正常按钮"}),t.jsx(s,{size:"small",type:"primary",children:"小号按钮"}),t.jsx(s,{size:"mini",type:"primary",children:"迷你按钮"})]}),t.jsxs("div",{className:"row",children:[t.jsx(s,{size:"large",type:"primary",round:"true",children:"大号按钮"}),t.jsx(s,{type:"primary",round:"true",children:"正常按钮"}),t.jsx(s,{size:"small",type:"primary",round:"true",children:"小号按钮"}),t.jsx(s,{size:"mini",type:"primary",round:"true",children:"迷你按钮"})]})]}),m=E,u=()=>t.jsxs("div",{className:"demo-button",children:[t.jsx(s,{icon:"search",children:"默认按钮"}),t.jsx(s,{icon:"search",type:"primary",children:"确认按钮"}),t.jsx(s,{icon:"search",type:"success",children:"成功按钮"}),t.jsx(s,{icon:"search",type:"text",children:"文字按钮"})]}),p=u,h=()=>t.jsxs("div",{className:"demo-button",children:[t.jsx(s,{href:"/button",children:"默认按钮"}),t.jsx(s,{href:"/button",type:"primary",children:"确认按钮"}),t.jsx(s,{href:"/button",type:"success",children:"成功按钮"}),t.jsx(s,{href:"/button",type:"text",children:"文字按钮"})]}),j=h,A=()=>e.createElement("div",{class:"marked-body"},e.createElement("h1",{id:"button-按钮"},"Button 按钮"),e.createElement("h3",{id:"基础用法"},"基础用法"),e.createElement("p",null,"按钮支持 ",e.createElement("code",null,"default"),"、",e.createElement("code",null,"primary"),"、",e.createElement("code",null,"success"),"、",e.createElement("code",null,"warning"),"、",e.createElement("code",null,"danger"),"、",e.createElement("code",null,"text")," 六种类型，默认为 ",e.createElement("code",null,"default"),"。"),e.createElement(l,{code:"import%20%7BButton%7D%20from%20'.%2Findex'%0A%0Aconst%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3Cdiv%20className%3D%22demo-button%22%3E%0A%20%20%20%20%20%20%3Cdiv%20className%3D%22row%22%3E%0A%20%20%20%20%20%20%20%20%3CButton%20name%3D%22name123%22%3E%E9%BB%98%E8%AE%A4%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20type%3D%22primary%22%3E%E4%B8%BB%E8%A6%81%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20type%3D%22success%22%3E%E6%88%90%E5%8A%9F%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20type%3D%22danger%22%3E%E5%8D%B1%E9%99%A9%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20type%3D%22warning%22%3E%E8%AD%A6%E5%91%8A%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20type%3D%22text%22%3E%E6%96%87%E5%AD%97%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3Cdiv%20className%3D%22row%22%3E%0A%20%20%20%20%20%20%20%20%3CButton%20round%3D%22true%22%3E%E9%BB%98%E8%AE%A4%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20round%3D%22true%22%20type%3D%22primary%22%3E%E4%B8%BB%E8%A6%81%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20round%3D%22true%22%20type%3D%22success%22%3E%E6%88%90%E5%8A%9F%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20round%3D%22true%22%20type%3D%22danger%22%3E%E5%8D%B1%E9%99%A9%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20round%3D%22true%22%20type%3D%22warning%22%3E%E8%AD%A6%E5%91%8A%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20round%3D%22true%22%20type%3D%22text%22%3E%E6%96%87%E5%AD%97%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3Cdiv%20className%3D%22row%22%3E%0A%20%20%20%20%20%20%20%20%3CButton%20plain%3D%22true%22%3E%E9%BB%98%E8%AE%A4%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20plain%3D%22true%22%20type%3D%22primary%22%3E%E4%B8%BB%E8%A6%81%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20plain%3D%22true%22%20type%3D%22success%22%3E%E6%88%90%E5%8A%9F%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20plain%3D%22true%22%20type%3D%22danger%22%3E%E5%8D%B1%E9%99%A9%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20plain%3D%22true%22%20type%3D%22warning%22%3E%E8%AD%A6%E5%91%8A%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20plain%3D%22true%22%20type%3D%22text%22%3E%E6%96%87%E5%AD%97%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20)%3B%0A%7D%3B%0Aexport%20default%20Example%3B"},e.createElement(n,null),e.createElement("pre",{class:"language-jsx"},e.createElement("code",{class:"hljs"},e.createElement("span",{class:"hljs-keyword"},"import")," {",e.createElement("span",{class:"hljs-title class_"},"Button"),"} ",e.createElement("span",{class:"hljs-keyword"},"from")," ",e.createElement("span",{class:"hljs-string"},"'./index'"),e.createElement("br",null),e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"const")," ",e.createElement("span",{class:"hljs-title function_"},"Example")," = (",e.createElement("span",{class:"hljs-params"}),") => {",e.createElement("br",null),"  ",e.createElement("span",{class:"hljs-keyword"},"return")," (",e.createElement("br",null),"    ",e.createElement("span",{class:"language-xml"},e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"div")," ",e.createElement("span",{class:"hljs-attr"},"className"),"=",e.createElement("span",{class:"hljs-string"},'"demo-button"'),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"div")," ",e.createElement("span",{class:"hljs-attr"},"className"),"=",e.createElement("span",{class:"hljs-string"},'"row"'),">"),e.createElement("br",null),"        ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"name"),"=",e.createElement("span",{class:"hljs-string"},'"name123"'),">"),"默认按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"        ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"primary"'),">"),"主要按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"        ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"success"'),">"),"成功按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"        ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"danger"'),">"),"危险按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"        ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"warning"'),">"),"警告按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"        ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"text"'),">"),"文字按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"div"),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"div")," ",e.createElement("span",{class:"hljs-attr"},"className"),"=",e.createElement("span",{class:"hljs-string"},'"row"'),">"),e.createElement("br",null),"        ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"round"),"=",e.createElement("span",{class:"hljs-string"},'"true"'),">"),"默认按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"        ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"round"),"=",e.createElement("span",{class:"hljs-string"},'"true"')," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"primary"'),">"),"主要按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"        ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"round"),"=",e.createElement("span",{class:"hljs-string"},'"true"')," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"success"'),">"),"成功按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"        ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"round"),"=",e.createElement("span",{class:"hljs-string"},'"true"')," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"danger"'),">"),"危险按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"        ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"round"),"=",e.createElement("span",{class:"hljs-string"},'"true"')," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"warning"'),">"),"警告按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"        ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"round"),"=",e.createElement("span",{class:"hljs-string"},'"true"')," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"text"'),">"),"文字按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"div"),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"div")," ",e.createElement("span",{class:"hljs-attr"},"className"),"=",e.createElement("span",{class:"hljs-string"},'"row"'),">"),e.createElement("br",null),"        ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"plain"),"=",e.createElement("span",{class:"hljs-string"},'"true"'),">"),"默认按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"        ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"plain"),"=",e.createElement("span",{class:"hljs-string"},'"true"')," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"primary"'),">"),"主要按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"        ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"plain"),"=",e.createElement("span",{class:"hljs-string"},'"true"')," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"success"'),">"),"成功按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"        ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"plain"),"=",e.createElement("span",{class:"hljs-string"},'"true"')," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"danger"'),">"),"危险按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"        ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"plain"),"=",e.createElement("span",{class:"hljs-string"},'"true"')," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"warning"'),">"),"警告按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"        ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"plain"),"=",e.createElement("span",{class:"hljs-string"},'"true"')," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"text"'),">"),"文字按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"div"),">"),e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"div"),">")),e.createElement("br",null),"  );",e.createElement("br",null),"};",e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"export")," ",e.createElement("span",{class:"hljs-keyword"},"default")," ",e.createElement("span",{class:"hljs-title class_"},"Example"),";"))),e.createElement("h3",{id:"禁用状态"},"禁用状态"),e.createElement("p",null,"使用",e.createElement("code",null,'disabled="true"'),"禁用"),e.createElement(l,{code:"import%20%7BButton%7D%20from%20'.%2Findex'%0A%0Aconst%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3Cdiv%20className%3D%22demo-button%22%3E%0A%20%20%20%20%20%20%3CButton%20disabled%3D%7Btrue%7D%3E%E9%BB%98%E8%AE%A4%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%3CButton%20disabled%3D%7Btrue%7D%20type%3D%22primary%22%3E%E7%A1%AE%E8%AE%A4%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%3CButton%20disabled%3D%7Btrue%7D%20type%3D%22success%22%3E%E5%8F%96%E6%B6%88%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%3CButton%20disabled%3D%7Btrue%7D%20type%3D%22text%22%3E%E6%96%87%E5%AD%97%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20)%3B%0A%7D%3B%0Aexport%20default%20Example%3B"},e.createElement(c,null),e.createElement("pre",{class:"language-jsx"},e.createElement("code",{class:"hljs"},e.createElement("span",{class:"hljs-keyword"},"import")," {",e.createElement("span",{class:"hljs-title class_"},"Button"),"} ",e.createElement("span",{class:"hljs-keyword"},"from")," ",e.createElement("span",{class:"hljs-string"},"'./index'"),e.createElement("br",null),e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"const")," ",e.createElement("span",{class:"hljs-title function_"},"Example")," = (",e.createElement("span",{class:"hljs-params"}),") => {",e.createElement("br",null),"  ",e.createElement("span",{class:"hljs-keyword"},"return")," (",e.createElement("br",null),"    ",e.createElement("span",{class:"language-xml"},e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"div")," ",e.createElement("span",{class:"hljs-attr"},"className"),"=",e.createElement("span",{class:"hljs-string"},'"demo-button"'),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"disabled"),"=",e.createElement("span",{class:"hljs-string"},"{true}"),">"),"默认按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"disabled"),"=",e.createElement("span",{class:"hljs-string"},"{true}")," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"primary"'),">"),"确认按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"disabled"),"=",e.createElement("span",{class:"hljs-string"},"{true}")," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"success"'),">"),"取消按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"disabled"),"=",e.createElement("span",{class:"hljs-string"},"{true}")," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"text"'),">"),"文字按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"div"),">")),e.createElement("br",null),"  );",e.createElement("br",null),"};",e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"export")," ",e.createElement("span",{class:"hljs-keyword"},"default")," ",e.createElement("span",{class:"hljs-title class_"},"Example"),";"))),e.createElement("h3",{id:"按钮尺寸"},"按钮尺寸"),e.createElement("p",null,"支持 ",e.createElement("code",null,"large"),"、",e.createElement("code",null,"normal"),"、",e.createElement("code",null,"small"),"、",e.createElement("code",null,"mini")," 四种尺寸，默认为 normal"),e.createElement(l,{code:"import%20%7BButton%7D%20from%20'.%2Findex'%0A%0Aconst%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3Cdiv%20className%3D%22demo-button%22%3E%0A%20%20%20%20%20%20%3Cdiv%20className%3D%22row%22%3E%0A%20%20%20%20%20%20%20%20%3CButton%20size%3D%22large%22%20type%3D%22primary%22%3E%E5%A4%A7%E5%8F%B7%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20type%3D%22primary%22%3E%E6%AD%A3%E5%B8%B8%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20size%3D%22small%22%20type%3D%22primary%22%3E%E5%B0%8F%E5%8F%B7%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20size%3D%22mini%22%20type%3D%22primary%22%3E%E8%BF%B7%E4%BD%A0%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3Cdiv%20className%3D%22row%22%3E%0A%20%20%20%20%20%20%20%20%3CButton%20size%3D%22large%22%20type%3D%22primary%22%20round%3D%22true%22%3E%E5%A4%A7%E5%8F%B7%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20type%3D%22primary%22%20round%3D%22true%22%3E%E6%AD%A3%E5%B8%B8%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20size%3D%22small%22%20type%3D%22primary%22%20round%3D%22true%22%3E%E5%B0%8F%E5%8F%B7%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20size%3D%22mini%22%20type%3D%22primary%22%20round%3D%22true%22%3E%E8%BF%B7%E4%BD%A0%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20)%3B%0A%7D%3B%0Aexport%20default%20Example%3B"},e.createElement(m,null),e.createElement("pre",{class:"language-jsx"},e.createElement("code",{class:"hljs"},e.createElement("span",{class:"hljs-keyword"},"import")," {",e.createElement("span",{class:"hljs-title class_"},"Button"),"} ",e.createElement("span",{class:"hljs-keyword"},"from")," ",e.createElement("span",{class:"hljs-string"},"'./index'"),e.createElement("br",null),e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"const")," ",e.createElement("span",{class:"hljs-title function_"},"Example")," = (",e.createElement("span",{class:"hljs-params"}),") => {",e.createElement("br",null),"  ",e.createElement("span",{class:"hljs-keyword"},"return")," (",e.createElement("br",null),"    ",e.createElement("span",{class:"language-xml"},e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"div")," ",e.createElement("span",{class:"hljs-attr"},"className"),"=",e.createElement("span",{class:"hljs-string"},'"demo-button"'),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"div")," ",e.createElement("span",{class:"hljs-attr"},"className"),"=",e.createElement("span",{class:"hljs-string"},'"row"'),">"),e.createElement("br",null),"        ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"size"),"=",e.createElement("span",{class:"hljs-string"},'"large"')," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"primary"'),">"),"大号按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"        ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"primary"'),">"),"正常按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"        ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"size"),"=",e.createElement("span",{class:"hljs-string"},'"small"')," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"primary"'),">"),"小号按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"        ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"size"),"=",e.createElement("span",{class:"hljs-string"},'"mini"')," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"primary"'),">"),"迷你按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"div"),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"div")," ",e.createElement("span",{class:"hljs-attr"},"className"),"=",e.createElement("span",{class:"hljs-string"},'"row"'),">"),e.createElement("br",null),"        ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"size"),"=",e.createElement("span",{class:"hljs-string"},'"large"')," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"primary"')," ",e.createElement("span",{class:"hljs-attr"},"round"),"=",e.createElement("span",{class:"hljs-string"},'"true"'),">"),"大号按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"        ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"primary"')," ",e.createElement("span",{class:"hljs-attr"},"round"),"=",e.createElement("span",{class:"hljs-string"},'"true"'),">"),"正常按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"        ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"size"),"=",e.createElement("span",{class:"hljs-string"},'"small"')," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"primary"')," ",e.createElement("span",{class:"hljs-attr"},"round"),"=",e.createElement("span",{class:"hljs-string"},'"true"'),">"),"小号按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"        ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"size"),"=",e.createElement("span",{class:"hljs-string"},'"mini"')," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"primary"')," ",e.createElement("span",{class:"hljs-attr"},"round"),"=",e.createElement("span",{class:"hljs-string"},'"true"'),">"),"迷你按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"div"),">"),e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"div"),">")),e.createElement("br",null),"  );",e.createElement("br",null),"};",e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"export")," ",e.createElement("span",{class:"hljs-keyword"},"default")," ",e.createElement("span",{class:"hljs-title class_"},"Example"),";"))),e.createElement("h3",{id:"带-icon-图标"},"带 Icon 图标"),e.createElement(l,{code:"import%20%7BButton%7D%20from%20'.%2Findex'%0A%0Aconst%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3Cdiv%20className%3D%22demo-button%22%3E%0A%20%20%20%20%20%20%3CButton%20icon%3D%22search%22%3E%E9%BB%98%E8%AE%A4%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%3CButton%20icon%3D%22search%22%20type%3D%22primary%22%3E%E7%A1%AE%E8%AE%A4%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%3CButton%20icon%3D%22search%22%20type%3D%22success%22%3E%E6%88%90%E5%8A%9F%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%3CButton%20icon%3D%22search%22%20type%3D%22text%22%3E%E6%96%87%E5%AD%97%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20)%3B%0A%7D%3B%0Aexport%20default%20Example%3B"},e.createElement(p,null),e.createElement("pre",{class:"language-jsx"},e.createElement("code",{class:"hljs"},e.createElement("span",{class:"hljs-keyword"},"import")," {",e.createElement("span",{class:"hljs-title class_"},"Button"),"} ",e.createElement("span",{class:"hljs-keyword"},"from")," ",e.createElement("span",{class:"hljs-string"},"'./index'"),e.createElement("br",null),e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"const")," ",e.createElement("span",{class:"hljs-title function_"},"Example")," = (",e.createElement("span",{class:"hljs-params"}),") => {",e.createElement("br",null),"  ",e.createElement("span",{class:"hljs-keyword"},"return")," (",e.createElement("br",null),"    ",e.createElement("span",{class:"language-xml"},e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"div")," ",e.createElement("span",{class:"hljs-attr"},"className"),"=",e.createElement("span",{class:"hljs-string"},'"demo-button"'),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"icon"),"=",e.createElement("span",{class:"hljs-string"},'"search"'),">"),"默认按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"icon"),"=",e.createElement("span",{class:"hljs-string"},'"search"')," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"primary"'),">"),"确认按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"icon"),"=",e.createElement("span",{class:"hljs-string"},'"search"')," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"success"'),">"),"成功按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"icon"),"=",e.createElement("span",{class:"hljs-string"},'"search"')," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"text"'),">"),"文字按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"div"),">")),e.createElement("br",null),"  );",e.createElement("br",null),"};",e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"export")," ",e.createElement("span",{class:"hljs-keyword"},"default")," ",e.createElement("span",{class:"hljs-title class_"},"Example"),";"))),e.createElement("h3",{id:"带路由或链接地址"},"带路由或链接地址"),e.createElement(l,{code:"import%20%7BButton%7D%20from%20'.%2Findex'%0A%0Aconst%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3Cdiv%20className%3D%22demo-button%22%3E%0A%20%20%20%20%20%20%3CButton%20href%3D%22%2Fbutton%22%3E%E9%BB%98%E8%AE%A4%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%3CButton%20href%3D%22%2Fbutton%22%20type%3D%22primary%22%3E%E7%A1%AE%E8%AE%A4%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%3CButton%20href%3D%22%2Fbutton%22%20type%3D%22success%22%3E%E6%88%90%E5%8A%9F%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%20%20%3CButton%20href%3D%22%2Fbutton%22%20type%3D%22text%22%3E%E6%96%87%E5%AD%97%E6%8C%89%E9%92%AE%3C%2FButton%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20)%3B%0A%7D%3B%0Aexport%20default%20Example%3B"},e.createElement(j,null),e.createElement("pre",{class:"language-jsx"},e.createElement("code",{class:"hljs"},e.createElement("span",{class:"hljs-keyword"},"import")," {",e.createElement("span",{class:"hljs-title class_"},"Button"),"} ",e.createElement("span",{class:"hljs-keyword"},"from")," ",e.createElement("span",{class:"hljs-string"},"'./index'"),e.createElement("br",null),e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"const")," ",e.createElement("span",{class:"hljs-title function_"},"Example")," = (",e.createElement("span",{class:"hljs-params"}),") => {",e.createElement("br",null),"  ",e.createElement("span",{class:"hljs-keyword"},"return")," (",e.createElement("br",null),"    ",e.createElement("span",{class:"language-xml"},e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"div")," ",e.createElement("span",{class:"hljs-attr"},"className"),"=",e.createElement("span",{class:"hljs-string"},'"demo-button"'),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"href"),"=",e.createElement("span",{class:"hljs-string"},'"/button"'),">"),"默认按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"href"),"=",e.createElement("span",{class:"hljs-string"},'"/button"')," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"primary"'),">"),"确认按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"href"),"=",e.createElement("span",{class:"hljs-string"},'"/button"')," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"success"'),">"),"成功按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"href"),"=",e.createElement("span",{class:"hljs-string"},'"/button"')," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"text"'),">"),"文字按钮",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"div"),">")),e.createElement("br",null),"  );",e.createElement("br",null),"};",e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"export")," ",e.createElement("span",{class:"hljs-keyword"},"default")," ",e.createElement("span",{class:"hljs-title class_"},"Example"),";"))),e.createElement("h2",{id:"api"},"API"),e.createElement("h3",{id:"button-props"},"Button Props"),e.createElement("table",null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"参数"),e.createElement("th",null,"类型"),e.createElement("th",null,"说明"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("td",null,"type"),e.createElement("td",null,"String"),e.createElement("td",null,"类型，实际是给按钮添加类名，支持",e.createElement("code",null,"default"),"、",e.createElement("code",null,"primary"),"、",e.createElement("code",null,"success"),"、",e.createElement("code",null,"warning"),"、",e.createElement("code",null,"danger"),"、",e.createElement("code",null,"text"))),e.createElement("tr",null,e.createElement("td",null,"size"),e.createElement("td",null,"String"),e.createElement("td",null,"大小尺寸，支持 ",e.createElement("code",null,"large"),"、",e.createElement("code",null,"normal"),"、",e.createElement("code",null,"small"),"、",e.createElement("code",null,"mini")," 四种尺寸，默认为 ",e.createElement("code",null,"normal"))),e.createElement("tr",null,e.createElement("td",null,"width"),e.createElement("td",null,"String"),e.createElement("td",null,"按钮宽")),e.createElement("tr",null,e.createElement("td",null,"round"),e.createElement("td",null,"boolean/false"),e.createElement("td",null,"是否圆角按钮")),e.createElement("tr",null,e.createElement("td",null,"plain"),e.createElement("td",null,"boolean/false"),e.createElement("td",null,"是否为朴素按钮")),e.createElement("tr",null,e.createElement("td",null,"href"),e.createElement("td",null,"String"),e.createElement("td",null,"路由跳转地址，输出路由标签Link")),e.createElement("tr",null,e.createElement("td",null,"disabled"),e.createElement("td",null,"boolean/false"),e.createElement("td",null,"是否禁用状态")),e.createElement("tr",null,e.createElement("td",null,"icon"),e.createElement("td",null,"String"),e.createElement("td",null,"前缀 icon")),e.createElement("tr",null,e.createElement("td",null,"loading"),e.createElement("td",null,"boolean/false"),e.createElement("td",null,"是否加载中状态")),e.createElement("tr",null,e.createElement("td",null,"nativeType"),e.createElement("td",null,"String"),e.createElement("td",null,"原生 type 属性，button / submit / reset")),e.createElement("tr",null,e.createElement("td",null,"onClick"),e.createElement("td",null,"Function"),e.createElement("td",null,"点击按钮时的回调")))));export{A as default};
