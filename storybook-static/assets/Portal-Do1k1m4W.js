import{r}from"./index-D4lIrffr.js";import{r as p}from"./index-BQQLSK9g.js";import{u as E}from"./useForkRef-zqhjcRVs.js";import{g as d}from"./getReactElementRef-rGhWSfJO.js";import{u as l}from"./useEnhancedEffect-TzlApzCm.js";function a(t,s){typeof t=="function"?t(s):t&&(t.current=s)}function P(t){return typeof t=="function"?t():t}const b=r.forwardRef(function(s,i){const{children:e,container:u,disablePortal:o=!1}=s,[n,c]=r.useState(null),f=E(r.isValidElement(e)?d(e):null,i);if(l(()=>{o||c(P(u)||document.body)},[u,o]),l(()=>{if(n&&!o)return a(i,n),()=>{a(i,null)}},[i,n,o]),o){if(r.isValidElement(e)){const m={ref:f};return r.cloneElement(e,m)}return e}return n&&p.createPortal(e,n)});export{b as P,a as s};
