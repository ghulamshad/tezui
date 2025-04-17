import{r as X}from"./index-D4lIrffr.js";import{g as Y,c as N}from"./generateUtilityClass-X8vU33Qn.js";import{u as L}from"./usePreviousProps-BwWMkUHP.js";import{m as w}from"./memoTheme-DmLuDuZz.js";import{c as rr}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{g as or}from"./generateUtilityClasses-CLSsTaNC.js";import{j}from"./jsx-runtime-D_zvdyIk.js";import{u as ar}from"./DefaultPropsProvider-Dc-qTJVP.js";import{u as A}from"./useSlotProps-BLSNAJah.js";import{s as M,c as tr}from"./styled-BAZlGgKr.js";import{c as t}from"./createTheme-BUel03A0.js";function ir(o){const{badgeContent:r,invisible:a=!1,max:i=99,showZero:s=!1}=o,m=L({badgeContent:r,max:i});let l=a;a===!1&&r===0&&!s&&(l=!0);const{badgeContent:n,max:c=i}=l?m:o,d=n&&Number(n)>c?`${c}+`:n;return{badgeContent:n,invisible:l,max:c,displayValue:d}}function nr(o){return Y("MuiBadge",o)}const e=or("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),b=10,O=4,er=o=>{const{color:r,anchorOrigin:a,invisible:i,overlap:s,variant:m,classes:l={}}=o,n={root:["root"],badge:["badge",m,i&&"invisible",`anchorOrigin${t(a.vertical)}${t(a.horizontal)}`,`anchorOrigin${t(a.vertical)}${t(a.horizontal)}${t(s)}`,`overlap${t(s)}`,r!=="default"&&`color${t(r)}`]};return tr(n,nr,l)},sr=M("span",{name:"MuiBadge",slot:"Root",overridesResolver:(o,r)=>r.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),lr=M("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(o,r)=>{const{ownerState:a}=o;return[r.badge,r[a.variant],r[`anchorOrigin${t(a.anchorOrigin.vertical)}${t(a.anchorOrigin.horizontal)}${t(a.overlap)}`],a.color!=="default"&&r[`color${t(a.color)}`],a.invisible&&r.invisible]}})(w(({theme:o})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(12),minWidth:b*2,lineHeight:1,padding:"0 6px",height:b*2,borderRadius:b,zIndex:1,transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.enteringScreen}),variants:[...Object.entries(o.palette).filter(rr(["contrastText"])).map(([r])=>({props:{color:r},style:{backgroundColor:(o.vars||o).palette[r].main,color:(o.vars||o).palette[r].contrastText}})),{props:{variant:"dot"},style:{borderRadius:O,height:O*2,minWidth:O*2,padding:0}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="rectangular",style:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${e.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="rectangular",style:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${e.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="rectangular",style:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${e.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="rectangular",style:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${e.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="circular",style:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${e.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="circular",style:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${e.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="circular",style:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${e.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="circular",style:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${e.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:{invisible:!0},style:{transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.leavingScreen})}}]})));function F(o){return{vertical:(o==null?void 0:o.vertical)??"top",horizontal:(o==null?void 0:o.horizontal)??"right"}}const yr=X.forwardRef(function(r,a){const i=ar({props:r,name:"MuiBadge"}),{anchorOrigin:s,className:m,classes:l,component:n,components:c={},componentsProps:d={},children:U,overlap:y="rectangular",color:x="default",invisible:W=!1,max:V=99,badgeContent:R,slots:p,slotProps:g,showZero:C=!1,variant:u="standard",...k}=i,{badgeContent:P,invisible:E,max:H,displayValue:Z}=ir({max:V,invisible:W,badgeContent:R,showZero:C}),_=L({anchorOrigin:F(s),color:x,overlap:y,variant:u,badgeContent:R}),B=E||P==null&&u!=="dot",{color:q=x,overlap:G=y,anchorOrigin:J,variant:$=u}=B?_:i,K=F(J),z=$!=="dot"?Z:void 0,h={...i,badgeContent:P,invisible:B,max:H,displayValue:z,showZero:C,anchorOrigin:K,color:q,overlap:G,variant:$},T=er(h),D=(p==null?void 0:p.root)??c.Root??sr,I=(p==null?void 0:p.badge)??c.Badge??lr,f=(g==null?void 0:g.root)??d.root,v=(g==null?void 0:g.badge)??d.badge,Q=A({elementType:D,externalSlotProps:f,externalForwardedProps:k,additionalProps:{ref:a,as:n},ownerState:h,className:N(f==null?void 0:f.className,T.root,m)}),S=A({elementType:I,externalSlotProps:v,ownerState:h,className:N(T.badge,v==null?void 0:v.className)});return j.jsxs(D,{...Q,children:[U,j.jsx(I,{...S,children:z})]})});export{yr as B};
