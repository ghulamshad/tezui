import{r as P}from"./index-D4lIrffr.js";import{g as y,c as g}from"./generateUtilityClass-X8vU33Qn.js";import{u as x}from"./useTheme-C-GcZBKo.js";import{j as b}from"./jsx-runtime-D_zvdyIk.js";import{s as w,c as R}from"./styled-BAZlGgKr.js";import{m as C}from"./memoTheme-DmLuDuZz.js";import{a as u,g as c}from"./createTheme-BUel03A0.js";import{g as h}from"./generateUtilityClasses-CLSsTaNC.js";import{u as $}from"./DefaultPropsProvider-Dc-qTJVP.js";function k(e){return y("MuiPaper",e)}h("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const q=e=>{const{square:a,elevation:o,variant:r,classes:t}=e,n={root:["root",r,!a&&"rounded",r==="elevation"&&`elevation${o}`]};return R(n,k,t)},M=w("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[o.variant],!o.square&&a.rounded,o.variant==="elevation"&&a[`elevation${o.elevation}`]]}})(C(({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow"),variants:[{props:({ownerState:a})=>!a.square,style:{borderRadius:e.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(e.vars||e).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}))),O=P.forwardRef(function(a,o){var d;const r=$({props:a,name:"MuiPaper"}),t=x(),{className:n,component:i="div",elevation:s=1,square:m=!1,variant:l="elevation",...v}=r,p={...r,component:i,elevation:s,square:m,variant:l},f=q(p);return b.jsx(M,{as:i,ownerState:p,className:g(f.root,n),ref:o,...v,style:{...l==="elevation"&&{"--Paper-shadow":(t.vars||t).shadows[s],...t.vars&&{"--Paper-overlay":(d=t.vars.overlays)==null?void 0:d[s]},...!t.vars&&t.palette.mode==="dark"&&{"--Paper-overlay":`linear-gradient(${u("#fff",c(s))}, ${u("#fff",c(s))})`}},...v.style}})});export{O as P};
