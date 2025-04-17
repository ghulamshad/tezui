import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-D4lIrffr.js";import{g as k,c as H}from"./generateUtilityClass-X8vU33Qn.js";import{T as j}from"./TableContext-DyqN-kPG.js";import{m as v}from"./memoTheme-DmLuDuZz.js";import{g as M}from"./generateUtilityClasses-CLSsTaNC.js";import{u as R}from"./DefaultPropsProvider-Dc-qTJVP.js";import{s as S,c as U}from"./styled-BAZlGgKr.js";import"./createTheme-BUel03A0.js";function _(e){return k("MuiTable",e)}M("MuiTable",["root","stickyHeader"]);const h=e=>{const{classes:s,stickyHeader:o}=e;return U({root:["root",o&&"stickyHeader"]},_,s)},w=S("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:o}=e;return[s.root,o.stickyHeader&&s.stickyHeader]}})(v(({theme:e})=>({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":{...e.typography.body2,padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"},variants:[{props:({ownerState:s})=>s.stickyHeader,style:{borderCollapse:"separate"}}]}))),b="table",D=d.forwardRef(function(s,o){const r=R({props:s,name:"MuiTable"}),{className:y,component:l=b,padding:n="normal",size:i="medium",stickyHeader:c=!1,...g}=r,m={...r,component:l,padding:n,size:i,stickyHeader:c},x=h(m),C=d.useMemo(()=>({padding:n,size:i,stickyHeader:c}),[n,i,c]);return a.jsx(j.Provider,{value:C,children:a.jsx(w,{as:l,role:l===b?null:"table",ref:o,className:H(x.root,y),ownerState:m,...g})})}),p=e=>a.jsx(D,{...e});p.__docgenInfo={description:"",methods:[],displayName:"Table",composes:["MUITableProps"]};const F={title:"Components/Table",component:p},E=e=>a.jsx(p,{...e,children:"Table Content"}),t=E.bind({});t.args={};var u,T,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"args => <Table {...args}>Table Content</Table>",...(f=(T=t.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};const G=["Default"];export{t as Default,G as __namedExportsOrder,F as default};
