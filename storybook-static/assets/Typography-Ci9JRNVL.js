import{r as T}from"./index-D4lIrffr.js";import{g as C,c as B}from"./generateUtilityClass-X8vU33Qn.js";import{i as S}from"./index-DRowGhIs.js";import{m as j}from"./memoTheme-DmLuDuZz.js";import{c as w}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{g as W}from"./generateUtilityClasses-CLSsTaNC.js";import{j as M}from"./jsx-runtime-D_zvdyIk.js";import{u as P}from"./DefaultPropsProvider-Dc-qTJVP.js";import{s as R,c as O}from"./styled-BAZlGgKr.js";import{c as l}from"./createTheme-BUel03A0.js";function U(r){return C("MuiTypography",r)}const G=W("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]),A={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},E=S(),$=r=>{const{align:o,gutterBottom:t,noWrap:a,paragraph:p,variant:s,classes:i}=r,e={root:["root",s,r.align!=="inherit"&&`align${l(o)}`,t&&"gutterBottom",a&&"noWrap",p&&"paragraph"]};return O(e,U,i)},D=R("span",{name:"MuiTypography",slot:"Root",overridesResolver:(r,o)=>{const{ownerState:t}=r;return[o.root,t.variant&&o[t.variant],t.align!=="inherit"&&o[`align${l(t.align)}`],t.noWrap&&o.noWrap,t.gutterBottom&&o.gutterBottom,t.paragraph&&o.paragraph]}})(j(({theme:r})=>{var o;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(r.typography).filter(([t,a])=>t!=="inherit"&&a&&typeof a=="object").map(([t,a])=>({props:{variant:t},style:a})),...Object.entries(r.palette).filter(w()).map(([t])=>({props:{color:t},style:{color:(r.vars||r).palette[t].main}})),...Object.entries(((o=r.palette)==null?void 0:o.text)||{}).filter(([,t])=>typeof t=="string").map(([t])=>({props:{color:`text${l(t)}`},style:{color:(r.vars||r).palette.text[t]}})),{props:({ownerState:t})=>t.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:t})=>t.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:t})=>t.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:t})=>t.paragraph,style:{marginBottom:16}}]}})),f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},I=T.forwardRef(function(o,t){const{color:a,...p}=P({props:o,name:"MuiTypography"}),s=!A[a],i=E({...p,...s&&{color:a}}),{align:e="inherit",className:g,component:h,gutterBottom:x=!1,noWrap:d=!1,paragraph:c=!1,variant:n="body1",variantMapping:m=f,...y}=i,u={...i,align:e,color:a,className:g,component:h,gutterBottom:x,noWrap:d,paragraph:c,variant:n,variantMapping:m},b=h||(c?"p":m[n]||f[n])||"span",v=$(u);return M.jsx(D,{as:b,ref:t,className:B(v.root,g),...y,ownerState:u,style:{...e!=="inherit"&&{"--Typography-textAlign":e},...y.style}})});export{I as T,G as t};
