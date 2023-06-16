import{j as l,R as e}from"./index-eab8b3d4.js";import{R as a}from"./react-35e66634.js";import{T as t}from"./Textarea-a0f5ac41.js";import"./contextForm-cfeffa56.js";import"./index-a427ff8b.js";function r(){const n=s=>{console.log(s)};return l.jsx("div",{className:"textarea-demo",children:l.jsx(t,{defaultValue:"textarea1",placeholder:"placeholder",onChange:n})})}function c(){return l.jsx("div",{className:"textarea-demo",children:l.jsx(t,{defaultValue:"不能输入",placeholder:"placeholder",disabled:!0})})}function u(){return l.jsxs("div",{className:"textarea-demo",children:[l.jsx(t,{defaultValue:"输入些文字回车换行试试",placeholder:"placeholder"}),l.jsx("p",{children:"设置最大高度"}),l.jsx(t,{defaultValue:"输入些文字回车换行试试",placeholder:"placeholder",maxHeight:"200px"})]})}function E(){return l.jsx("div",{className:"textarea-demo",children:l.jsx(t,{defaultValue:"textarea1",placeholder:"placeholder",showWordLimit:!0,maxLength:10})})}const i=()=>e.createElement("div",{class:"marked-body"},e.createElement("h1",{id:"textarea-文本框"},"Textarea 文本框"),e.createElement("h3",{id:"基本用法"},"基本用法"),e.createElement(a,{code:"import%20%7BTextarea%7D%20from%20'.%2Findex'%0A%0Afunction%20Example()%20%7B%0A%20%20const%20onChange%20%3D%20(val%3A%20string)%20%3D%3E%20%7B%0A%20%20%20%20console.log(val)%0A%20%20%7D%0A%20%20return%20(%3Cdiv%20className%3D'textarea-demo'%3E%0A%20%20%20%20%3CTextarea%20defaultValue%3D%22textarea1%22%20placeholder%3D%22placeholder%22%20onChange%3D%7BonChange%7D%20%2F%3E%0A%20%20%3C%2Fdiv%3E)%0A%7D%0A%0Aexport%20default%20Example"},e.createElement(r,null),e.createElement("pre",{class:"language-jsx"},e.createElement("code",{class:"hljs"},e.createElement("span",{class:"hljs-keyword"},"import")," {",e.createElement("span",{class:"hljs-title class_"},"Textarea"),"} ",e.createElement("span",{class:"hljs-keyword"},"from")," ",e.createElement("span",{class:"hljs-string"},"'./index'"),e.createElement("br",null),e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"function")," ",e.createElement("span",{class:"hljs-title function_"},"Example"),"(",e.createElement("span",{class:"hljs-params"}),") {",e.createElement("br",null),"  ",e.createElement("span",{class:"hljs-keyword"},"const")," ",e.createElement("span",{class:"hljs-title function_"},"onChange")," = (",e.createElement("span",{class:"hljs-params"},"val: string"),") => {",e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-variable language_"},"console"),".",e.createElement("span",{class:"hljs-title function_"},"log"),"(val)",e.createElement("br",null),"  }",e.createElement("br",null),"  ",e.createElement("span",{class:"hljs-keyword"},"return")," (",e.createElement("span",{class:"language-xml"},e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"div")," ",e.createElement("span",{class:"hljs-attr"},"className"),"=",e.createElement("span",{class:"hljs-string"},"'textarea-demo'"),">"),e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Textarea")," ",e.createElement("span",{class:"hljs-attr"},"defaultValue"),"=",e.createElement("span",{class:"hljs-string"},'"textarea1"')," ",e.createElement("span",{class:"hljs-attr"},"placeholder"),"=",e.createElement("span",{class:"hljs-string"},'"placeholder"')," ",e.createElement("span",{class:"hljs-attr"},"onChange"),"=",e.createElement("span",{class:"hljs-string"},"{onChange}")," />"),e.createElement("br",null),"  ",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"div"),">")),")",e.createElement("br",null),"}",e.createElement("br",null),e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"export")," ",e.createElement("span",{class:"hljs-keyword"},"default")," ",e.createElement("span",{class:"hljs-title class_"},"Example")))),e.createElement("h3",{id:"禁用"},"禁用"),e.createElement(a,{code:"import%20%7BTextarea%7D%20from%20'.%2Findex'%0A%0Afunction%20Example()%20%7B%0A%20%20return%20(%3Cdiv%20className%3D'textarea-demo'%3E%0A%20%20%20%20%3CTextarea%20defaultValue%3D%22%E4%B8%8D%E8%83%BD%E8%BE%93%E5%85%A5%22%20placeholder%3D%22placeholder%22%20disabled%3D%7Btrue%7D%20%2F%3E%0A%20%20%3C%2Fdiv%3E)%0A%7D%0A%0Aexport%20default%20Example%0A"},e.createElement(c,null),e.createElement("pre",{class:"language-jsx"},e.createElement("code",{class:"hljs"},e.createElement("span",{class:"hljs-keyword"},"import")," {",e.createElement("span",{class:"hljs-title class_"},"Textarea"),"} ",e.createElement("span",{class:"hljs-keyword"},"from")," ",e.createElement("span",{class:"hljs-string"},"'./index'"),e.createElement("br",null),e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"function")," ",e.createElement("span",{class:"hljs-title function_"},"Example"),"(",e.createElement("span",{class:"hljs-params"}),") {",e.createElement("br",null),"  ",e.createElement("span",{class:"hljs-keyword"},"return")," (",e.createElement("span",{class:"language-xml"},e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"div")," ",e.createElement("span",{class:"hljs-attr"},"className"),"=",e.createElement("span",{class:"hljs-string"},"'textarea-demo'"),">"),e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Textarea")," ",e.createElement("span",{class:"hljs-attr"},"defaultValue"),"=",e.createElement("span",{class:"hljs-string"},'"不能输入"')," ",e.createElement("span",{class:"hljs-attr"},"placeholder"),"=",e.createElement("span",{class:"hljs-string"},'"placeholder"')," ",e.createElement("span",{class:"hljs-attr"},"disabled"),"=",e.createElement("span",{class:"hljs-string"},"{true}")," />"),e.createElement("br",null),"  ",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"div"),">")),")",e.createElement("br",null),"}",e.createElement("br",null),e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"export")," ",e.createElement("span",{class:"hljs-keyword"},"default")," ",e.createElement("span",{class:"hljs-title class_"},"Example"),e.createElement("br",null)))),e.createElement("h3",{id:"自动高"},"自动高"),e.createElement(a,{code:"import%20%7BTextarea%7D%20from%20'.%2Findex'%0A%0Afunction%20Example()%20%7B%0A%20%20return%20(%3Cdiv%20className%3D'textarea-demo'%3E%0A%20%20%20%20%3CTextarea%20defaultValue%3D%22%E8%BE%93%E5%85%A5%E4%BA%9B%E6%96%87%E5%AD%97%E5%9B%9E%E8%BD%A6%E6%8D%A2%E8%A1%8C%E8%AF%95%E8%AF%95%22%20placeholder%3D%22placeholder%22%20%2F%3E%0A%20%20%20%20%3Cp%3E%E8%AE%BE%E7%BD%AE%E6%9C%80%E5%A4%A7%E9%AB%98%E5%BA%A6%3C%2Fp%3E%0A%20%20%20%20%3CTextarea%20defaultValue%3D%22%E8%BE%93%E5%85%A5%E4%BA%9B%E6%96%87%E5%AD%97%E5%9B%9E%E8%BD%A6%E6%8D%A2%E8%A1%8C%E8%AF%95%E8%AF%95%22%20placeholder%3D%22placeholder%22%20maxHeight%3D'200px'%2F%3E%0A%20%20%3C%2Fdiv%3E)%0A%7D%0A%0Aexport%20default%20Example%0A"},e.createElement(u,null),e.createElement("pre",{class:"language-jsx"},e.createElement("code",{class:"hljs"},e.createElement("span",{class:"hljs-keyword"},"import")," {",e.createElement("span",{class:"hljs-title class_"},"Textarea"),"} ",e.createElement("span",{class:"hljs-keyword"},"from")," ",e.createElement("span",{class:"hljs-string"},"'./index'"),e.createElement("br",null),e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"function")," ",e.createElement("span",{class:"hljs-title function_"},"Example"),"(",e.createElement("span",{class:"hljs-params"}),") {",e.createElement("br",null),"  ",e.createElement("span",{class:"hljs-keyword"},"return")," (",e.createElement("span",{class:"language-xml"},e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"div")," ",e.createElement("span",{class:"hljs-attr"},"className"),"=",e.createElement("span",{class:"hljs-string"},"'textarea-demo'"),">"),e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Textarea")," ",e.createElement("span",{class:"hljs-attr"},"defaultValue"),"=",e.createElement("span",{class:"hljs-string"},'"输入些文字回车换行试试"')," ",e.createElement("span",{class:"hljs-attr"},"placeholder"),"=",e.createElement("span",{class:"hljs-string"},'"placeholder"')," />"),e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"p"),">"),"设置最大高度",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"p"),">"),e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Textarea")," ",e.createElement("span",{class:"hljs-attr"},"defaultValue"),"=",e.createElement("span",{class:"hljs-string"},'"输入些文字回车换行试试"')," ",e.createElement("span",{class:"hljs-attr"},"placeholder"),"=",e.createElement("span",{class:"hljs-string"},'"placeholder"')," ",e.createElement("span",{class:"hljs-attr"},"maxHeight"),"=",e.createElement("span",{class:"hljs-string"},"'200px'"),"/>"),e.createElement("br",null),"  ",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"div"),">")),")",e.createElement("br",null),"}",e.createElement("br",null),e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"export")," ",e.createElement("span",{class:"hljs-keyword"},"default")," ",e.createElement("span",{class:"hljs-title class_"},"Example"),e.createElement("br",null)))),e.createElement("h3",{id:"显示输入字数"},"显示输入字数"),e.createElement("p",null,"在使用 ",e.createElement("code",null,"maxLength")," 属性限制最大输入长度的同时，可通过设置 ",e.createElement("code",null,"showWordLimit")," 属性来展示字数统计"),e.createElement(a,{code:"import%20%7BTextarea%7D%20from%20'.%2Findex'%0A%0Afunction%20Example()%20%7B%0A%20%20return%20(%3Cdiv%20className%3D'textarea-demo'%3E%0A%20%20%20%20%3CTextarea%20defaultValue%3D%22textarea1%22%20placeholder%3D%22placeholder%22%20showWordLimit%3D%7Btrue%7D%20maxLength%3D%7B10%7D%20%2F%3E%0A%20%20%3C%2Fdiv%3E)%0A%7D%0A%0Aexport%20default%20Example%0A"},e.createElement(E,null),e.createElement("pre",{class:"language-jsx"},e.createElement("code",{class:"hljs"},e.createElement("span",{class:"hljs-keyword"},"import")," {",e.createElement("span",{class:"hljs-title class_"},"Textarea"),"} ",e.createElement("span",{class:"hljs-keyword"},"from")," ",e.createElement("span",{class:"hljs-string"},"'./index'"),e.createElement("br",null),e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"function")," ",e.createElement("span",{class:"hljs-title function_"},"Example"),"(",e.createElement("span",{class:"hljs-params"}),") {",e.createElement("br",null),"  ",e.createElement("span",{class:"hljs-keyword"},"return")," (",e.createElement("span",{class:"language-xml"},e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"div")," ",e.createElement("span",{class:"hljs-attr"},"className"),"=",e.createElement("span",{class:"hljs-string"},"'textarea-demo'"),">"),e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Textarea")," ",e.createElement("span",{class:"hljs-attr"},"defaultValue"),"=",e.createElement("span",{class:"hljs-string"},'"textarea1"')," ",e.createElement("span",{class:"hljs-attr"},"placeholder"),"=",e.createElement("span",{class:"hljs-string"},'"placeholder"')," ",e.createElement("span",{class:"hljs-attr"},"showWordLimit"),"=",e.createElement("span",{class:"hljs-string"},"{true}")," ",e.createElement("span",{class:"hljs-attr"},"maxLength"),"=",e.createElement("span",{class:"hljs-string"},"{10}")," />"),e.createElement("br",null),"  ",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"div"),">")),")",e.createElement("br",null),"}",e.createElement("br",null),e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"export")," ",e.createElement("span",{class:"hljs-keyword"},"default")," ",e.createElement("span",{class:"hljs-title class_"},"Example"),e.createElement("br",null)))),e.createElement("h2",{id:"api"},"API"),e.createElement("h3",{id:"textarea"},"Textarea"),e.createElement("table",null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"参数"),e.createElement("th",null,"类型"),e.createElement("th",null,"说明"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("td",null,"defaultValue"),e.createElement("td",null,"String"),e.createElement("td",null,"绑定的值")),e.createElement("tr",null,e.createElement("td",null,"autoHeight"),e.createElement("td",null,"boolean/true"),e.createElement("td",null,"自动高")),e.createElement("tr",null,e.createElement("td",null,"width"),e.createElement("td",null,"String"),e.createElement("td",null,"要带单位px/%")),e.createElement("tr",null,e.createElement("td",null,"height"),e.createElement("td",null,"String"),e.createElement("td",null,"要带单位px，设置为",e.createElement("code",null,"autoHeight"),"会被覆盖")),e.createElement("tr",null,e.createElement("td",null,"maxHeight"),e.createElement("td",null,"String"),e.createElement("td",null,"要带单位px")),e.createElement("tr",null,e.createElement("td",null,"showWordLimit"),e.createElement("td",null,"boolena/false"),e.createElement("td",null,"原生属性，最大输入长度")),e.createElement("tr",null,e.createElement("td",null,"maxLength"),e.createElement("td",null,"number"),e.createElement("td",null,"是否显示输入字数统计")),e.createElement("tr",null,e.createElement("td",null,"placeholder"),e.createElement("td",null,"string"),e.createElement("td",null,"输入框点位符")),e.createElement("tr",null,e.createElement("td",null,"disabled"),e.createElement("td",null,"boolean/false"),e.createElement("td",null,"禁用状态")),e.createElement("tr",null,e.createElement("td",null,"readOnly"),e.createElement("td",null,"boolean/false"),e.createElement("td",null,"只读状态")),e.createElement("tr",null,e.createElement("td",null,"onChange"),e.createElement("td",null,"function(value,e)"),e.createElement("td",null,"输入框内容变化时的回调")),e.createElement("tr",null,e.createElement("td",null,"onFocus"),e.createElement("td",null,"function(e)"),e.createElement("td",null,"获取焦点事件")),e.createElement("tr",null,e.createElement("td",null,"onBlur"),e.createElement("td",null,"function(e)"),e.createElement("td",null,"失去焦点事件")))),e.createElement("h3",{id:"input-methods"},"Input Methods"),e.createElement("table",null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"参数"),e.createElement("th",null,"说明"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("td",null,"focus"),e.createElement("td",null,"设置焦点")),e.createElement("tr",null,e.createElement("td",null,"getValue"),e.createElement("td",null,"获取当前value")),e.createElement("tr",null,e.createElement("td",null,"clear"),e.createElement("td",null,"清空当前输入框的值")))));export{i as default};
