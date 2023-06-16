import{j as t,R as e}from"./index-eab8b3d4.js";import{R as n}from"./react-35e66634.js";import{T as l}from"./Tooltip-93f4a02c.js";import{B as E}from"./Button-658a5c6d.js";import"./dom-7dcdc27f.js";import"./contextForm-cfeffa56.js";function a(){return t.jsxs("div",{className:"demo-tooltip",children:[t.jsxs("div",{className:"demo",children:[t.jsx(l,{content:"这是提示内容这是提示内容",children:"上左"}),t.jsx(l,{content:"这是提示内容这是提示内容，direction='top'",direction:"top",children:"上边"}),t.jsx(l,{content:"这是提示内容direction='top-right'",direction:"top-right",children:"上右"})]}),t.jsxs("div",{className:"demo",children:[t.jsx(l,{direction:"left",content:"这是提示内容direction=left",children:"左边"}),t.jsx("span",{}),t.jsx(l,{direction:"right",content:"这是提示内容direction=right",children:"右边"})]}),t.jsxs("div",{className:"demo",children:[t.jsx(l,{direction:"bottom-left",content:"这是提示内容direction=bottom-left",children:"下左"}),t.jsx(l,{direction:"bottom",content:"这是提示内容direction=bottom",children:"下边"}),t.jsx(l,{direction:"bottom-right",content:"这是提示内容direction=bottom-right",children:"下右"})]})]})}function s(){return t.jsxs("div",{className:"demo-tooltip",children:[t.jsxs("div",{className:"demo",children:[t.jsx(l,{content:"提示语的左边位置跟当前标签对齐，如提示语X轴位置到浏览器右边的距离小于最大宽，将以最小宽显示并换行",children:"上左"}),t.jsx(l,{content:"上边提示是根据是根据当前标签中间位置，向左偏移50%实现居中，如果当前标签到浏览器右边的距离小于最大宽时，实际显示宽为到边浏览器右边的距离，并不是最大宽",direction:"top",children:"上边"}),t.jsx(l,{content:"这里跟上左类型，计算的是到浏览器左边的距离",direction:"top-right",maxWidth:200,children:"上右"})]}),t.jsxs("div",{className:"demo",children:[t.jsx(l,{direction:"left",content:"受当前标签到浏览器左边的距离影响",children:"左边"}),t.jsx("span",{}),t.jsx(l,{direction:"right",content:"受当前标签到浏览器左边的距离影响",maxWidth:200,children:"右边"})]}),t.jsxs("div",{className:"demo",children:[t.jsx(l,{direction:"bottom-left",content:"这是提示内容，如果内容超过设定的最大宽时则自动换行。",children:"下左"}),t.jsx(l,{direction:"bottom",content:"这是提示内容，如果内容超过设定的最大宽时则自动换行。如果内容超过设定的最大宽时则自动换行",children:t.jsx("span",{children:"下边"})}),t.jsx(l,{direction:"bottom-right",content:"这是提示内容，如果内容超过设定的最大宽时则自动换行。这是提示内容，如果内容超过设定的最大宽时则自动换行。",children:t.jsx("span",{children:"下右"})})]})]})}function u(){return t.jsxs("div",{className:"demo-tooltip",children:[t.jsx(l,{content:"这里是提示文字，因为icon比较小，可使用x微调",x:-10,children:t.jsx("i",{className:"tooltip-icon",children:"?"})}),t.jsx(l,{content:"这里是提示文字。使用x轴微调将箭头和icon对齐",x:-10,children:t.jsx("i",{className:"tooltip-icon",children:"?"})}),t.jsx(l,{content:"这里是提示文字。使用x轴微调将箭头和icon对齐",x:-10,children:t.jsx(E,{type:"primary",children:"按钮形式"})})]})}function c(){return t.jsx("div",{className:"demo-tooltip",children:t.jsx(l,{content:"一直都显示的",always:!0,direction:"top",children:t.jsx("span",{children:"always"})})})}function r(){return t.jsx("div",{className:"demo-tooltip",children:t.jsx(l,{direction:"top",delay:300,content:"这里是提示内容，鼠标可以移动到上面，提示内容不会消失，可实现从这里点击跳转链接等",children:t.jsx(E,{children:"设置延时关闭"})})})}const F=()=>e.createElement("div",{class:"marked-body"},e.createElement("h1",{id:"tooltip-提示"},"Tooltip 提示"),e.createElement("h3",{id:"基本用法"},"基本用法"),e.createElement(n,{code:"import%20%7BTooltip%7D%20from%20'.%2Findex'%0A%0Afunction%20Example()%20%7B%0A%20%20return%20(%3Cdiv%20className%3D'demo-tooltip'%3E%0A%20%20%20%20%3Cdiv%20className%3D%22demo%22%3E%0A%20%20%20%20%20%20%3CTooltip%20content%3D%22%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%22%3E%E4%B8%8A%E5%B7%A6%3C%2FTooltip%3E%0A%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20content%3D%22%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%EF%BC%8Cdirection%3D'top'%22%0A%20%20%20%20%20%20direction%3D%22top%22%3E%E4%B8%8A%E8%BE%B9%3C%2FTooltip%3E%0A%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20content%3D%22%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9direction%3D'top-right'%22%0A%20%20%20%20%20%20direction%3D%22top-right%22%3E%E4%B8%8A%E5%8F%B3%3C%2FTooltip%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20className%3D%22demo%22%3E%0A%20%20%20%20%20%20%3CTooltip%20direction%3D%22left%22%20content%3D%22%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9direction%3Dleft%22%3E%0A%20%20%20%20%20%20%20%20%E5%B7%A6%E8%BE%B9%0A%20%20%20%20%20%20%3C%2FTooltip%3E%0A%20%20%20%20%20%20%3Cspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3CTooltip%20direction%3D%22right%22%20content%3D%22%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9direction%3Dright%22%3E%0A%20%20%20%20%20%20%20%20%E5%8F%B3%E8%BE%B9%3C%2FTooltip%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20className%3D%22demo%22%3E%0A%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20direction%3D%22bottom-left%22%0A%20%20%20%20%20%20content%3D%22%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9direction%3Dbottom-left%22%3E%E4%B8%8B%E5%B7%A6%3C%2FTooltip%3E%0A%20%20%20%20%20%20%3CTooltip%20direction%3D%22bottom%22%20content%3D%22%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9direction%3Dbottom%22%3E%E4%B8%8B%E8%BE%B9%3C%2FTooltip%3E%0A%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20direction%3D%22bottom-right%22%0A%20%20%20%20%20%20content%3D%22%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9direction%3Dbottom-right%22%3E%E4%B8%8B%E5%8F%B3%3C%2FTooltip%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E)%0A%7D%0A%0Aexport%20default%20Example"},e.createElement(a,null),e.createElement("pre",{class:"language-jsx"},e.createElement("code",{class:"hljs"},e.createElement("span",{class:"hljs-keyword"},"import")," {",e.createElement("span",{class:"hljs-title class_"},"Tooltip"),"} ",e.createElement("span",{class:"hljs-keyword"},"from")," ",e.createElement("span",{class:"hljs-string"},"'./index'"),e.createElement("br",null),e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"function")," ",e.createElement("span",{class:"hljs-title function_"},"Example"),"(",e.createElement("span",{class:"hljs-params"}),") {",e.createElement("br",null),"  ",e.createElement("span",{class:"hljs-keyword"},"return")," (",e.createElement("span",{class:"language-xml"},e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"div")," ",e.createElement("span",{class:"hljs-attr"},"className"),"=",e.createElement("span",{class:"hljs-string"},"'demo-tooltip'"),">"),e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"div")," ",e.createElement("span",{class:"hljs-attr"},"className"),"=",e.createElement("span",{class:"hljs-string"},'"demo"'),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Tooltip")," ",e.createElement("span",{class:"hljs-attr"},"content"),"=",e.createElement("span",{class:"hljs-string"},'"这是提示内容这是提示内容"'),">"),"上左",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Tooltip"),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Tooltip"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-attr"},"content"),"=",e.createElement("span",{class:"hljs-string"},`"这是提示内容这是提示内容，direction='top'"`),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-attr"},"direction"),"=",e.createElement("span",{class:"hljs-string"},'"top"'),">"),"上边",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Tooltip"),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Tooltip"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-attr"},"content"),"=",e.createElement("span",{class:"hljs-string"},`"这是提示内容direction='top-right'"`),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-attr"},"direction"),"=",e.createElement("span",{class:"hljs-string"},'"top-right"'),">"),"上右",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Tooltip"),">"),e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"div"),">"),e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"div")," ",e.createElement("span",{class:"hljs-attr"},"className"),"=",e.createElement("span",{class:"hljs-string"},'"demo"'),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Tooltip")," ",e.createElement("span",{class:"hljs-attr"},"direction"),"=",e.createElement("span",{class:"hljs-string"},'"left"')," ",e.createElement("span",{class:"hljs-attr"},"content"),"=",e.createElement("span",{class:"hljs-string"},'"这是提示内容direction=left"'),">"),e.createElement("br",null),"        左边",e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Tooltip"),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"span"),">"),e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"span"),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Tooltip")," ",e.createElement("span",{class:"hljs-attr"},"direction"),"=",e.createElement("span",{class:"hljs-string"},'"right"')," ",e.createElement("span",{class:"hljs-attr"},"content"),"=",e.createElement("span",{class:"hljs-string"},'"这是提示内容direction=right"'),">"),e.createElement("br",null),"        右边",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Tooltip"),">"),e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"div"),">"),e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"div")," ",e.createElement("span",{class:"hljs-attr"},"className"),"=",e.createElement("span",{class:"hljs-string"},'"demo"'),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Tooltip"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-attr"},"direction"),"=",e.createElement("span",{class:"hljs-string"},'"bottom-left"'),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-attr"},"content"),"=",e.createElement("span",{class:"hljs-string"},'"这是提示内容direction=bottom-left"'),">"),"下左",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Tooltip"),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Tooltip")," ",e.createElement("span",{class:"hljs-attr"},"direction"),"=",e.createElement("span",{class:"hljs-string"},'"bottom"')," ",e.createElement("span",{class:"hljs-attr"},"content"),"=",e.createElement("span",{class:"hljs-string"},'"这是提示内容direction=bottom"'),">"),"下边",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Tooltip"),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Tooltip"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-attr"},"direction"),"=",e.createElement("span",{class:"hljs-string"},'"bottom-right"'),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-attr"},"content"),"=",e.createElement("span",{class:"hljs-string"},'"这是提示内容direction=bottom-right"'),">"),"下右",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Tooltip"),">"),e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"div"),">"),e.createElement("br",null),"  ",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"div"),">")),")",e.createElement("br",null),"}",e.createElement("br",null),e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"export")," ",e.createElement("span",{class:"hljs-keyword"},"default")," ",e.createElement("span",{class:"hljs-title class_"},"Example")))),e.createElement("h3",{id:"多文字自动换行"},"多文字自动换行"),e.createElement("p",null,"可通过设置最大宽度自动换行"),e.createElement(n,{code:"import%20%7BTooltip%7D%20from%20'.%2Findex'%0A%0Afunction%20Example()%20%7B%0A%20%20return%20(%3Cdiv%20className%3D'demo-tooltip'%3E%0A%20%20%20%20%3Cdiv%20className%3D%22demo%22%3E%0A%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20content%3D%22%E6%8F%90%E7%A4%BA%E8%AF%AD%E7%9A%84%E5%B7%A6%E8%BE%B9%E4%BD%8D%E7%BD%AE%E8%B7%9F%E5%BD%93%E5%89%8D%E6%A0%87%E7%AD%BE%E5%AF%B9%E9%BD%90%EF%BC%8C%E5%A6%82%E6%8F%90%E7%A4%BA%E8%AF%ADX%E8%BD%B4%E4%BD%8D%E7%BD%AE%E5%88%B0%E6%B5%8F%E8%A7%88%E5%99%A8%E5%8F%B3%E8%BE%B9%E7%9A%84%E8%B7%9D%E7%A6%BB%E5%B0%8F%E4%BA%8E%E6%9C%80%E5%A4%A7%E5%AE%BD%EF%BC%8C%E5%B0%86%E4%BB%A5%E6%9C%80%E5%B0%8F%E5%AE%BD%E6%98%BE%E7%A4%BA%E5%B9%B6%E6%8D%A2%E8%A1%8C%22%0A%20%20%20%20%20%20%3E%E4%B8%8A%E5%B7%A6%3C%2FTooltip%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20content%3D%22%E4%B8%8A%E8%BE%B9%E6%8F%90%E7%A4%BA%E6%98%AF%E6%A0%B9%E6%8D%AE%E6%98%AF%E6%A0%B9%E6%8D%AE%E5%BD%93%E5%89%8D%E6%A0%87%E7%AD%BE%E4%B8%AD%E9%97%B4%E4%BD%8D%E7%BD%AE%EF%BC%8C%E5%90%91%E5%B7%A6%E5%81%8F%E7%A7%BB50%25%E5%AE%9E%E7%8E%B0%E5%B1%85%E4%B8%AD%EF%BC%8C%E5%A6%82%E6%9E%9C%E5%BD%93%E5%89%8D%E6%A0%87%E7%AD%BE%E5%88%B0%E6%B5%8F%E8%A7%88%E5%99%A8%E5%8F%B3%E8%BE%B9%E7%9A%84%E8%B7%9D%E7%A6%BB%E5%B0%8F%E4%BA%8E%E6%9C%80%E5%A4%A7%E5%AE%BD%E6%97%B6%EF%BC%8C%E5%AE%9E%E9%99%85%E6%98%BE%E7%A4%BA%E5%AE%BD%E4%B8%BA%E5%88%B0%E8%BE%B9%E6%B5%8F%E8%A7%88%E5%99%A8%E5%8F%B3%E8%BE%B9%E7%9A%84%E8%B7%9D%E7%A6%BB%EF%BC%8C%E5%B9%B6%E4%B8%8D%E6%98%AF%E6%9C%80%E5%A4%A7%E5%AE%BD%22%0A%20%20%20%20%20%20direction%3D%22top%22%0A%20%20%20%20%20%20%3E%E4%B8%8A%E8%BE%B9%3C%2FTooltip%3E%0A%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20content%3D%22%E8%BF%99%E9%87%8C%E8%B7%9F%E4%B8%8A%E5%B7%A6%E7%B1%BB%E5%9E%8B%EF%BC%8C%E8%AE%A1%E7%AE%97%E7%9A%84%E6%98%AF%E5%88%B0%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A6%E8%BE%B9%E7%9A%84%E8%B7%9D%E7%A6%BB%22%0A%20%20%20%20%20%20direction%3D%22top-right%22%0A%20%20%20%20%20%20maxWidth%3D%7B200%7D%0A%20%20%20%20%20%20%3E%E4%B8%8A%E5%8F%B3%3C%2FTooltip%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20className%3D%22demo%22%3E%0A%20%20%20%20%20%20%3CTooltip%20direction%3D%22left%22%20content%3D%22%E5%8F%97%E5%BD%93%E5%89%8D%E6%A0%87%E7%AD%BE%E5%88%B0%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A6%E8%BE%B9%E7%9A%84%E8%B7%9D%E7%A6%BB%E5%BD%B1%E5%93%8D%22%3E%0A%20%20%20%20%20%20%20%20%E5%B7%A6%E8%BE%B9%0A%20%20%20%20%20%20%3C%2FTooltip%3E%0A%20%20%20%20%20%20%3Cspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20direction%3D%22right%22%0A%20%20%20%20%20%20content%3D%22%E5%8F%97%E5%BD%93%E5%89%8D%E6%A0%87%E7%AD%BE%E5%88%B0%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A6%E8%BE%B9%E7%9A%84%E8%B7%9D%E7%A6%BB%E5%BD%B1%E5%93%8D%22%0A%20%20%20%20%20%20maxWidth%3D%7B200%7D%0A%20%20%20%20%20%20%3E%E5%8F%B3%E8%BE%B9%3C%2FTooltip%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20className%3D%22demo%22%3E%0A%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20direction%3D%22bottom-left%22%0A%20%20%20%20%20%20content%3D%22%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%EF%BC%8C%E5%A6%82%E6%9E%9C%E5%86%85%E5%AE%B9%E8%B6%85%E8%BF%87%E8%AE%BE%E5%AE%9A%E7%9A%84%E6%9C%80%E5%A4%A7%E5%AE%BD%E6%97%B6%E5%88%99%E8%87%AA%E5%8A%A8%E6%8D%A2%E8%A1%8C%E3%80%82%22%0A%20%20%20%20%20%20%3E%E4%B8%8B%E5%B7%A6%3C%2FTooltip%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20direction%3D%22bottom%22%0A%20%20%20%20%20%20content%3D%22%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%EF%BC%8C%E5%A6%82%E6%9E%9C%E5%86%85%E5%AE%B9%E8%B6%85%E8%BF%87%E8%AE%BE%E5%AE%9A%E7%9A%84%E6%9C%80%E5%A4%A7%E5%AE%BD%E6%97%B6%E5%88%99%E8%87%AA%E5%8A%A8%E6%8D%A2%E8%A1%8C%E3%80%82%E5%A6%82%E6%9E%9C%E5%86%85%E5%AE%B9%E8%B6%85%E8%BF%87%E8%AE%BE%E5%AE%9A%E7%9A%84%E6%9C%80%E5%A4%A7%E5%AE%BD%E6%97%B6%E5%88%99%E8%87%AA%E5%8A%A8%E6%8D%A2%E8%A1%8C%22%0A%20%20%20%20%20%20%3E%3Cspan%3E%E4%B8%8B%E8%BE%B9%3C%2Fspan%3E%3C%2FTooltip%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20direction%3D%22bottom-right%22%0A%20%20%20%20%20%20content%3D%22%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%EF%BC%8C%E5%A6%82%E6%9E%9C%E5%86%85%E5%AE%B9%E8%B6%85%E8%BF%87%E8%AE%BE%E5%AE%9A%E7%9A%84%E6%9C%80%E5%A4%A7%E5%AE%BD%E6%97%B6%E5%88%99%E8%87%AA%E5%8A%A8%E6%8D%A2%E8%A1%8C%E3%80%82%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%EF%BC%8C%E5%A6%82%E6%9E%9C%E5%86%85%E5%AE%B9%E8%B6%85%E8%BF%87%E8%AE%BE%E5%AE%9A%E7%9A%84%E6%9C%80%E5%A4%A7%E5%AE%BD%E6%97%B6%E5%88%99%E8%87%AA%E5%8A%A8%E6%8D%A2%E8%A1%8C%E3%80%82%22%0A%20%20%20%20%20%20%3E%3Cspan%3E%E4%B8%8B%E5%8F%B3%3C%2Fspan%3E%3C%2FTooltip%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E)%0A%7D%0A%0Aexport%20default%20Example"},e.createElement(s,null),e.createElement("pre",{class:"language-jsx"},e.createElement("code",{class:"hljs"},e.createElement("span",{class:"hljs-keyword"},"import")," {",e.createElement("span",{class:"hljs-title class_"},"Tooltip"),"} ",e.createElement("span",{class:"hljs-keyword"},"from")," ",e.createElement("span",{class:"hljs-string"},"'./index'"),e.createElement("br",null),e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"function")," ",e.createElement("span",{class:"hljs-title function_"},"Example"),"(",e.createElement("span",{class:"hljs-params"}),") {",e.createElement("br",null),"  ",e.createElement("span",{class:"hljs-keyword"},"return")," (<div className='demo-tooltip'>",e.createElement("br",null),'    <div className="demo">',e.createElement("br",null),"      <Tooltip",e.createElement("br",null),'      content="提示语的左边位置跟当前标签对齐，如提示语X轴位置到浏览器右边的距离小于最大宽，将以最小宽显示并换行"',e.createElement("br",null),"      >上左</Tooltip",e.createElement("br",null),"      >",e.createElement("br",null),"      <Tooltip",e.createElement("br",null),'      content="上边提示是根据是根据当前标签中间位置，向左偏移50%实现居中，如果当前标签到浏览器右边的距离小于最大宽时，实际显示宽为到边浏览器右边的距离，并不是最大宽"',e.createElement("br",null),'      direction="top"',e.createElement("br",null),"      >上边</Tooltip>",e.createElement("br",null),"      <Tooltip",e.createElement("br",null),'      content="这里跟上左类型，计算的是到浏览器左边的距离"',e.createElement("br",null),'      direction="top-right"',e.createElement("br",null),"      maxWidth={200}",e.createElement("br",null),"      >上右</Tooltip",e.createElement("br",null),"      >",e.createElement("br",null),"    </div>",e.createElement("br",null),'    <div className="demo">',e.createElement("br",null),'      <Tooltip direction="left" content="受当前标签到浏览器左边的距离影响">',e.createElement("br",null),"        左边",e.createElement("br",null),"      </Tooltip>",e.createElement("br",null),"      <span></span>",e.createElement("br",null),"      <Tooltip",e.createElement("br",null),'      direction="right"',e.createElement("br",null),'      content="受当前标签到浏览器左边的距离影响"',e.createElement("br",null),"      maxWidth={200}",e.createElement("br",null),"      >右边</Tooltip",e.createElement("br",null),"      >",e.createElement("br",null),"    </div>",e.createElement("br",null),'    <div className="demo">',e.createElement("br",null),"      <Tooltip",e.createElement("br",null),'      direction="bottom-left"',e.createElement("br",null),'      content="这是提示内容，如果内容超过设定的最大宽时则自动换行。"',e.createElement("br",null),"      >下左</Tooltip",e.createElement("br",null),"      >",e.createElement("br",null),"      <Tooltip",e.createElement("br",null),'      direction="bottom"',e.createElement("br",null),'      content="这是提示内容，如果内容超过设定的最大宽时则自动换行。如果内容超过设定的最大宽时则自动换行"',e.createElement("br",null),"      ><span>下边</span></Tooltip",e.createElement("br",null),"      >",e.createElement("br",null),"      <Tooltip",e.createElement("br",null),'      direction="bottom-right"',e.createElement("br",null),'      content="这是提示内容，如果内容超过设定的最大宽时则自动换行。这是提示内容，如果内容超过设定的最大宽时则自动换行。"',e.createElement("br",null),"      ><span>下右</span></Tooltip",e.createElement("br",null),"      >",e.createElement("br",null),"    </div>",e.createElement("br",null),"  </div>)",e.createElement("br",null),"}",e.createElement("br",null),e.createElement("br",null),"export default Example"))),e.createElement("h3",{id:"支持多种效果"},"支持多种效果"),e.createElement("p",null,"可自定样式"),e.createElement(n,{code:"import%20%7BTooltip%7D%20from%20'.%2Findex'%0Aimport%20%7BButton%7D%20from%20'..%2Fbutton'%0A%0Afunction%20Example()%20%7B%0A%20%20return%20(%3Cdiv%20className%3D'demo-tooltip'%3E%0A%20%20%20%20%3CTooltip%20content%3D%22%E8%BF%99%E9%87%8C%E6%98%AF%E6%8F%90%E7%A4%BA%E6%96%87%E5%AD%97%EF%BC%8C%E5%9B%A0%E4%B8%BAicon%E6%AF%94%E8%BE%83%E5%B0%8F%EF%BC%8C%E5%8F%AF%E4%BD%BF%E7%94%A8x%E5%BE%AE%E8%B0%83%22%20x%3D%7B-10%7D%3E%0A%20%20%20%20%20%20%3Ci%20className%3D%22tooltip-icon%22%3E%3F%3C%2Fi%3E%0A%20%20%20%20%3C%2FTooltip%3E%0A%20%20%20%20%3CTooltip%20content%3D%22%E8%BF%99%E9%87%8C%E6%98%AF%E6%8F%90%E7%A4%BA%E6%96%87%E5%AD%97%E3%80%82%E4%BD%BF%E7%94%A8x%E8%BD%B4%E5%BE%AE%E8%B0%83%E5%B0%86%E7%AE%AD%E5%A4%B4%E5%92%8Cicon%E5%AF%B9%E9%BD%90%22%20x%3D%7B-10%7D%3E%3Ci%20className%3D%22tooltip-icon%22%3E%3F%3C%2Fi%3E%3C%2FTooltip%3E%0A%20%20%20%20%3CTooltip%20content%3D%22%E8%BF%99%E9%87%8C%E6%98%AF%E6%8F%90%E7%A4%BA%E6%96%87%E5%AD%97%E3%80%82%E4%BD%BF%E7%94%A8x%E8%BD%B4%E5%BE%AE%E8%B0%83%E5%B0%86%E7%AE%AD%E5%A4%B4%E5%92%8Cicon%E5%AF%B9%E9%BD%90%22%20x%3D%7B-10%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CButton%20type%3D%22primary%22%3E%E6%8C%89%E9%92%AE%E5%BD%A2%E5%BC%8F%3C%2FButton%3E%0A%20%20%20%20%3C%2FTooltip%3E%0A%20%20%3C%2Fdiv%3E)%0A%7D%0A%0Aexport%20default%20Example"},e.createElement(u,null),e.createElement("pre",{class:"language-jsx"},e.createElement("code",{class:"hljs"},e.createElement("span",{class:"hljs-keyword"},"import")," {",e.createElement("span",{class:"hljs-title class_"},"Tooltip"),"} ",e.createElement("span",{class:"hljs-keyword"},"from")," ",e.createElement("span",{class:"hljs-string"},"'./index'"),e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"import")," {",e.createElement("span",{class:"hljs-title class_"},"Button"),"} ",e.createElement("span",{class:"hljs-keyword"},"from")," ",e.createElement("span",{class:"hljs-string"},"'../button'"),e.createElement("br",null),e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"function")," ",e.createElement("span",{class:"hljs-title function_"},"Example"),"(",e.createElement("span",{class:"hljs-params"}),") {",e.createElement("br",null),"  ",e.createElement("span",{class:"hljs-keyword"},"return")," (",e.createElement("span",{class:"language-xml"},e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"div")," ",e.createElement("span",{class:"hljs-attr"},"className"),"=",e.createElement("span",{class:"hljs-string"},"'demo-tooltip'"),">"),e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Tooltip")," ",e.createElement("span",{class:"hljs-attr"},"content"),"=",e.createElement("span",{class:"hljs-string"},'"这里是提示文字，因为icon比较小，可使用x微调"')," ",e.createElement("span",{class:"hljs-attr"},"x"),"=",e.createElement("span",{class:"hljs-string"},"{-10}"),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"i")," ",e.createElement("span",{class:"hljs-attr"},"className"),"=",e.createElement("span",{class:"hljs-string"},'"tooltip-icon"'),">"),"?",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"i"),">"),e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Tooltip"),">"),e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Tooltip")," ",e.createElement("span",{class:"hljs-attr"},"content"),"=",e.createElement("span",{class:"hljs-string"},'"这里是提示文字。使用x轴微调将箭头和icon对齐"')," ",e.createElement("span",{class:"hljs-attr"},"x"),"=",e.createElement("span",{class:"hljs-string"},"{-10}"),">"),e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"i")," ",e.createElement("span",{class:"hljs-attr"},"className"),"=",e.createElement("span",{class:"hljs-string"},'"tooltip-icon"'),">"),"?",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"i"),">"),e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Tooltip"),">"),e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Tooltip")," ",e.createElement("span",{class:"hljs-attr"},"content"),"=",e.createElement("span",{class:"hljs-string"},'"这里是提示文字。使用x轴微调将箭头和icon对齐"')," ",e.createElement("span",{class:"hljs-attr"},"x"),"=",e.createElement("span",{class:"hljs-string"},"{-10}"),e.createElement("br",null),"    >"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button")," ",e.createElement("span",{class:"hljs-attr"},"type"),"=",e.createElement("span",{class:"hljs-string"},'"primary"'),">"),"按钮形式",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Tooltip"),">"),e.createElement("br",null),"  ",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"div"),">")),")",e.createElement("br",null),"}",e.createElement("br",null),e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"export")," ",e.createElement("span",{class:"hljs-keyword"},"default")," ",e.createElement("span",{class:"hljs-title class_"},"Example")))),e.createElement("h3",{id:"固定显示"},"固定显示"),e.createElement(n,{code:"import%20%7BTooltip%7D%20from%20'.%2Findex'%0A%0Afunction%20Example()%20%7B%0A%20%20return%20(%3Cdiv%20className%3D'demo-tooltip'%3E%0A%20%20%20%20%3CTooltip%20content%3D%22%E4%B8%80%E7%9B%B4%E9%83%BD%E6%98%BE%E7%A4%BA%E7%9A%84%22%20always%3D%7Btrue%7D%20direction%3D%22top%22%3E%0A%20%20%20%20%20%20%3Cspan%3Ealways%3C%2Fspan%3E%0A%20%20%20%20%3C%2FTooltip%3E%0A%20%20%3C%2Fdiv%3E)%0A%7D%0A%0Aexport%20default%20Example"},e.createElement(c,null),e.createElement("pre",{class:"language-jsx"},e.createElement("code",{class:"hljs"},e.createElement("span",{class:"hljs-keyword"},"import")," {",e.createElement("span",{class:"hljs-title class_"},"Tooltip"),"} ",e.createElement("span",{class:"hljs-keyword"},"from")," ",e.createElement("span",{class:"hljs-string"},"'./index'"),e.createElement("br",null),e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"function")," ",e.createElement("span",{class:"hljs-title function_"},"Example"),"(",e.createElement("span",{class:"hljs-params"}),") {",e.createElement("br",null),"  ",e.createElement("span",{class:"hljs-keyword"},"return")," (",e.createElement("span",{class:"language-xml"},e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"div")," ",e.createElement("span",{class:"hljs-attr"},"className"),"=",e.createElement("span",{class:"hljs-string"},"'demo-tooltip'"),">"),e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Tooltip")," ",e.createElement("span",{class:"hljs-attr"},"content"),"=",e.createElement("span",{class:"hljs-string"},'"一直都显示的"')," ",e.createElement("span",{class:"hljs-attr"},"always"),"=",e.createElement("span",{class:"hljs-string"},"{true}")," ",e.createElement("span",{class:"hljs-attr"},"direction"),"=",e.createElement("span",{class:"hljs-string"},'"top"'),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"span"),">"),"always",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"span"),">"),e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Tooltip"),">"),e.createElement("br",null),"  ",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"div"),">")),")",e.createElement("br",null),"}",e.createElement("br",null),e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"export")," ",e.createElement("span",{class:"hljs-keyword"},"default")," ",e.createElement("span",{class:"hljs-title class_"},"Example")))),e.createElement("h3",{id:"设置延时关闭"},"设置延时关闭"),e.createElement("p",null,"通过",e.createElement("code",null,"delay"),"设置延时关闭，可将鼠标移至提示语上，例如实现提示语上的点击事件"),e.createElement(n,{code:"import%20%7BTooltip%7D%20from%20'.%2Findex'%0Aimport%20%7BButton%7D%20from%20'..%2Fbutton'%0A%0Afunction%20Example()%20%7B%0A%20%20return%20(%3Cdiv%20className%3D'demo-tooltip'%3E%0A%20%20%20%20%3CTooltip%20direction%3D%22top%22%20delay%3D%7B300%7D%20content%3D'%E8%BF%99%E9%87%8C%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%EF%BC%8C%E9%BC%A0%E6%A0%87%E5%8F%AF%E4%BB%A5%E7%A7%BB%E5%8A%A8%E5%88%B0%E4%B8%8A%E9%9D%A2%EF%BC%8C%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E4%B8%8D%E4%BC%9A%E6%B6%88%E5%A4%B1%EF%BC%8C%E5%8F%AF%E5%AE%9E%E7%8E%B0%E4%BB%8E%E8%BF%99%E9%87%8C%E7%82%B9%E5%87%BB%E8%B7%B3%E8%BD%AC%E9%93%BE%E6%8E%A5%E7%AD%89'%3E%0A%20%20%20%20%20%20%3CButton%3E%E8%AE%BE%E7%BD%AE%E5%BB%B6%E6%97%B6%E5%85%B3%E9%97%AD%3C%2FButton%3E%0A%20%20%20%20%3C%2FTooltip%3E%0A%20%20%3C%2Fdiv%3E)%0A%7D%0A%0Aexport%20default%20Example"},e.createElement(r,null),e.createElement("pre",{class:"language-jsx"},e.createElement("code",{class:"hljs"},e.createElement("span",{class:"hljs-keyword"},"import")," {",e.createElement("span",{class:"hljs-title class_"},"Tooltip"),"} ",e.createElement("span",{class:"hljs-keyword"},"from")," ",e.createElement("span",{class:"hljs-string"},"'./index'"),e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"import")," {",e.createElement("span",{class:"hljs-title class_"},"Button"),"} ",e.createElement("span",{class:"hljs-keyword"},"from")," ",e.createElement("span",{class:"hljs-string"},"'../button'"),e.createElement("br",null),e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"function")," ",e.createElement("span",{class:"hljs-title function_"},"Example"),"(",e.createElement("span",{class:"hljs-params"}),") {",e.createElement("br",null),"  ",e.createElement("span",{class:"hljs-keyword"},"return")," (",e.createElement("span",{class:"language-xml"},e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"div")," ",e.createElement("span",{class:"hljs-attr"},"className"),"=",e.createElement("span",{class:"hljs-string"},"'demo-tooltip'"),">"),e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Tooltip")," ",e.createElement("span",{class:"hljs-attr"},"direction"),"=",e.createElement("span",{class:"hljs-string"},'"top"')," ",e.createElement("span",{class:"hljs-attr"},"delay"),"=",e.createElement("span",{class:"hljs-string"},"{300}")," ",e.createElement("span",{class:"hljs-attr"},"content"),"=",e.createElement("span",{class:"hljs-string"},"'这里是提示内容，鼠标可以移动到上面，提示内容不会消失，可实现从这里点击跳转链接等'"),">"),e.createElement("br",null),"      ",e.createElement("span",{class:"hljs-tag"},"<",e.createElement("span",{class:"hljs-name"},"Button"),">"),"设置延时关闭",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Button"),">"),e.createElement("br",null),"    ",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"Tooltip"),">"),e.createElement("br",null),"  ",e.createElement("span",{class:"hljs-tag"},"</",e.createElement("span",{class:"hljs-name"},"div"),">")),")",e.createElement("br",null),"}",e.createElement("br",null),e.createElement("br",null),e.createElement("span",{class:"hljs-keyword"},"export")," ",e.createElement("span",{class:"hljs-keyword"},"default")," ",e.createElement("span",{class:"hljs-title class_"},"Example")))),e.createElement("h2",{id:"api"},"API"),e.createElement("h3",{id:"tooltip-props"},"Tooltip Props"),e.createElement("table",null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"参数"),e.createElement("th",null,"类型"),e.createElement("th",null,"说明"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("td",null,"content"),e.createElement("td",null,"String"),e.createElement("td",null,"显示的内容")),e.createElement("tr",null,e.createElement("td",null,"direction"),e.createElement("td",null,"String"),e.createElement("td",null,"显示方向。有 top-left、top、top-right、left、right、bottom-left、bottom、bottom-right 共 8 个方向，默认 top-left")),e.createElement("tr",null,e.createElement("td",null,"maxWidth"),e.createElement("td",null,"Number/500"),e.createElement("td",null,"最大显示宽")),e.createElement("tr",null,e.createElement("td",null,"delay"),e.createElement("td",null,"Number/0"),e.createElement("td",null,"延时关闭时间，单位毫秒。主要是为了能让鼠标移到提示文字上面，实现点链接等")),e.createElement("tr",null,e.createElement("td",null,"always"),e.createElement("td",null,"Boolean/false"),e.createElement("td",null,"是否总是可见")),e.createElement("tr",null,e.createElement("td",null,"x"),e.createElement("td",null,"Number"),e.createElement("td",null,"弹出窗距离触发点 x 轴方向的距离，可用于微调距离")),e.createElement("tr",null,e.createElement("td",null,"y"),e.createElement("td",null,"Number"),e.createElement("td",null,"弹出窗距离触发点 y 轴方向的距离，可用于微调距离")),e.createElement("tr",null,e.createElement("td",null,"transition"),e.createElement("td",null,"String"),e.createElement("td",null,"自定义显示隐藏过渡动画名称，需要手动添加相应的 css 样式")),e.createElement("tr",null,e.createElement("td",null,"className"),e.createElement("td",null,"String"),e.createElement("td",null,"自定样式类名")),e.createElement("tr",null,e.createElement("td",null,"trigger"),e.createElement("td",null,"String/hover"),e.createElement("td",null,"事件触发方式，hover/click 两种")),e.createElement("tr",null,e.createElement("td",null,"onClick"),e.createElement("td",null,"fn"),e.createElement("td",null,"点击事件，trigger=click 时")),e.createElement("tr",null,e.createElement("td",null,"disabled"),e.createElement("td",null,"Boolean"),e.createElement("td",null,"禁用")))));export{F as default};