import{r as o,j as t,c as i,p as n,a as r}from"./index.b63450ce.js";const b=e=>{const[l,s]=o.exports.useState(!0),a=()=>{e.onClick&&e.onClick()},c=()=>{s(!1),e.onClose&&e.onClose()};return l?t("span",{className:i({[`${n}-tag`]:!0,["tag-"+e.type]:e.type,["tag-"+e.size]:e.size}),style:{background:e.bgColor,borderColor:e.borderColor,color:e.color},onClick:a,children:[e.children,e.closable?r("i",{className:"icon-close",onClick:c}):""]}):null};export{b as T};
