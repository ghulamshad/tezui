import{r as u}from"./index-D4lIrffr.js";import{g as m,c as g}from"./generateUtilityClass-X8vU33Qn.js";import{m as d}from"./memoTheme-DmLuDuZz.js";import{g as f}from"./generateUtilityClasses-CLSsTaNC.js";import{j as b}from"./jsx-runtime-D_zvdyIk.js";import{u as v}from"./DefaultPropsProvider-Dc-qTJVP.js";import{s as T,c as x}from"./styled-BAZlGgKr.js";function y(s){return m("MuiToolbar",s)}f("MuiToolbar",["root","gutters","regular","dense"]);const R=s=>{const{classes:o,disableGutters:t,variant:r}=s;return x({root:["root",!t&&"gutters",r]},y,o)},C=T("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(s,o)=>{const{ownerState:t}=s;return[o.root,!t.disableGutters&&o.gutters,o[t.variant]]}})(d(({theme:s})=>({position:"relative",display:"flex",alignItems:"center",variants:[{props:({ownerState:o})=>!o.disableGutters,style:{paddingLeft:s.spacing(2),paddingRight:s.spacing(2),[s.breakpoints.up("sm")]:{paddingLeft:s.spacing(3),paddingRight:s.spacing(3)}}},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:s.mixins.toolbar}]}))),N=u.forwardRef(function(o,t){const r=v({props:o,name:"MuiToolbar"}),{className:a,component:e="div",disableGutters:n=!1,variant:l="regular",...p}=r,i={...r,component:e,disableGutters:n,variant:l},c=R(i);return b.jsx(C,{as:e,className:g(c.root,a),ref:t,ownerState:i,...p})});export{N as T};
