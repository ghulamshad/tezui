import{r as b}from"./index-D4lIrffr.js";import{g as m}from"./index-DRowGhIs.js";import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{u as g}from"./DefaultPropsProvider-Dc-qTJVP.js";const S=typeof m({})=="function",x=(o,t)=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%",...t&&!o.vars&&{colorScheme:o.palette.mode}}),h=o=>({color:(o.vars||o).palette.text.primary,...o.typography.body1,backgroundColor:(o.vars||o).palette.background.default,"@media print":{backgroundColor:(o.vars||o).palette.common.white}}),y=(o,t=!1)=>{var r,l;const e={};t&&o.colorSchemes&&typeof o.getColorSchemeSelector=="function"&&Object.entries(o.colorSchemes).forEach(([c,d])=>{var f,u;const i=o.getColorSchemeSelector(c);i.startsWith("@")?e[i]={":root":{colorScheme:(f=d.palette)==null?void 0:f.mode}}:e[i.replace(/\s*&/,"")]={colorScheme:(u=d.palette)==null?void 0:u.mode}});let s={html:x(o,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:o.typography.fontWeightBold},body:{margin:0,...h(o),"&::backdrop":{backgroundColor:(o.vars||o).palette.background.default}},...e};const a=(l=(r=o.components)==null?void 0:r.MuiCssBaseline)==null?void 0:l.styleOverrides;return a&&(s=[s,a]),s},n="mui-ecs",C=o=>{const t=y(o,!1),e=Array.isArray(t)?t[0]:t;return!o.vars&&e&&(e.html[`:root:has(${n})`]={colorScheme:o.palette.mode}),o.colorSchemes&&Object.entries(o.colorSchemes).forEach(([s,a])=>{var l,c;const r=o.getColorSchemeSelector(s);r.startsWith("@")?e[r]={[`:root:not(:has(.${n}))`]:{colorScheme:(l=a.palette)==null?void 0:l.mode}}:e[r.replace(/\s*&/,"")]={[`&:not(:has(.${n}))`]:{colorScheme:(c=a.palette)==null?void 0:c.mode}}}),t},j=m(S?({theme:o,enableColorScheme:t})=>y(o,t):({theme:o})=>C(o));function W(o){const t=g({props:o,name:"MuiCssBaseline"}),{children:e,enableColorScheme:s=!1}=t;return p.jsxs(b.Fragment,{children:[S&&p.jsx(j,{enableColorScheme:s}),!S&&!s&&p.jsx("span",{className:n,style:{display:"none"}}),e]})}export{W as C};
