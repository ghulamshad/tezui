import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as C,R as dt}from"./index-D4lIrffr.js";import{u as ft}from"./useTimeout-D31e7RVr.js";import{u as F}from"./useEventCallback-PUnHO-pX.js";import{e as I}from"./resolveComponentProps-BIm1hqfy.js";import{u as gt}from"./useTheme-C-GcZBKo.js";import{s as P,c as _}from"./styled-BAZlGgKr.js";import{m as q}from"./memoTheme-DmLuDuZz.js";import{g as G,c as kt}from"./generateUtilityClass-X8vU33Qn.js";import{g as W}from"./generateUtilityClasses-CLSsTaNC.js";import{u as h}from"./useSlot-OTo4eg8k.js";import{u as K}from"./DefaultPropsProvider-Dc-qTJVP.js";import{C as bt}from"./ClickAwayListener-w02a3wom.js";import{P as Ct}from"./Paper-CQ4C9ANE.js";import{y as St,c as v}from"./createTheme-BUel03A0.js";import{G as yt}from"./Grow-BSgE3rb-.js";import{B as wt}from"./Button-xIFiMwmf.js";import"./useEnhancedEffect-TzlApzCm.js";import"./useTheme-2mBOAmpa.js";import"./useForkRef-zqhjcRVs.js";import"./getReactElementRef-rGhWSfJO.js";import"./ownerDocument-DW-IO8s5.js";import"./utils-DoXAlJIm.js";import"./TransitionGroupContext-DwK6OGUB.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./CircularProgress-CQGTgRkI.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./emotion-react.browser.esm-BebTSLZi.js";import"./Button-B2aRdiJh.js";import"./useId-BpZO_0ZV.js";import"./ButtonBase-DgyPxojw.js";import"./isFocusVisible-B8k4qzLc.js";function xt(t={}){const{autoHideDuration:o=null,disableWindowBlurListener:n=!1,onClose:e,open:i,resumeHideDuration:k}=t,m=ft();C.useEffect(()=>{if(!i)return;function r(s){s.defaultPrevented||s.key==="Escape"&&(e==null||e(s,"escapeKeyDown"))}return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[i,e]);const S=F((r,s)=>{e==null||e(r,s)}),d=F(r=>{!e||r==null||m.start(r,()=>{S(null,"timeout")})});C.useEffect(()=>(i&&d(o),m.clear),[i,o,d,m]);const f=r=>{e==null||e(r,"clickaway")},p=m.clear,b=C.useCallback(()=>{o!=null&&d(k??o*.5)},[o,k,d]),O=r=>s=>{const a=r.onBlur;a==null||a(s),b()},E=r=>s=>{const a=r.onFocus;a==null||a(s),p()},T=r=>s=>{const a=r.onMouseEnter;a==null||a(s),p()},R=r=>s=>{const a=r.onMouseLeave;a==null||a(s),b()};return C.useEffect(()=>{if(!n&&i)return window.addEventListener("focus",b),window.addEventListener("blur",p),()=>{window.removeEventListener("focus",b),window.removeEventListener("blur",p)}},[n,i,b,p]),{getRootProps:(r={})=>{const s={...I(t),...I(r)};return{role:"presentation",...r,...s,onBlur:O(s),onFocus:E(s),onMouseEnter:T(s),onMouseLeave:R(s)}},onClickAway:f}}function ht(t){return G("MuiSnackbarContent",t)}W("MuiSnackbarContent",["root","message","action"]);const vt=t=>{const{classes:o}=t;return _({root:["root"],action:["action"],message:["message"]},ht,o)},Pt=P(Ct,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(t,o)=>o.root})(q(({theme:t})=>{const o=t.palette.mode==="light"?.8:.98,n=St(t.palette.background.default,o);return{...t.typography.body2,color:t.vars?t.vars.palette.SnackbarContent.color:t.palette.getContrastText(n),backgroundColor:t.vars?t.vars.palette.SnackbarContent.bg:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,flexGrow:1,[t.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}}})),Ot=P("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(t,o)=>o.message})({padding:"8px 0"}),Et=P("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(t,o)=>o.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),Tt=C.forwardRef(function(o,n){const e=K({props:o,name:"MuiSnackbarContent"}),{action:i,className:k,message:m,role:S="alert",...d}=e,f=e,p=vt(f);return l.jsxs(Pt,{role:S,square:!0,elevation:6,className:kt(p.root,k),ownerState:f,ref:n,...d,children:[l.jsx(Ot,{className:p.message,ownerState:f,children:m}),i?l.jsx(Et,{className:p.action,ownerState:f,children:i}):null]})});function Rt(t){return G("MuiSnackbar",t)}W("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const Lt=t=>{const{classes:o,anchorOrigin:n}=t,e={root:["root",`anchorOrigin${v(n.vertical)}${v(n.horizontal)}`]};return _(e,Rt,o)},Mt=P("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[`anchorOrigin${v(n.anchorOrigin.vertical)}${v(n.anchorOrigin.horizontal)}`]]}})(q(({theme:t})=>({zIndex:(t.vars||t).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center",variants:[{props:({ownerState:o})=>o.anchorOrigin.vertical==="top",style:{top:8,[t.breakpoints.up("sm")]:{top:24}}},{props:({ownerState:o})=>o.anchorOrigin.vertical!=="top",style:{bottom:8,[t.breakpoints.up("sm")]:{bottom:24}}},{props:({ownerState:o})=>o.anchorOrigin.horizontal==="left",style:{justifyContent:"flex-start",[t.breakpoints.up("sm")]:{left:24,right:"auto"}}},{props:({ownerState:o})=>o.anchorOrigin.horizontal==="right",style:{justifyContent:"flex-end",[t.breakpoints.up("sm")]:{right:24,left:"auto"}}},{props:({ownerState:o})=>o.anchorOrigin.horizontal==="center",style:{[t.breakpoints.up("sm")]:{left:"50%",right:"auto",transform:"translateX(-50%)"}}}]}))),At=C.forwardRef(function(o,n){const e=K({props:o,name:"MuiSnackbar"}),i=gt(),k={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{action:m,anchorOrigin:{vertical:S,horizontal:d}={vertical:"bottom",horizontal:"left"},autoHideDuration:f=null,children:p,className:b,ClickAwayListenerProps:O,ContentProps:E,disableWindowBlurListener:T=!1,message:R,onBlur:X,onClose:r,onFocus:s,onMouseEnter:a,onMouseLeave:zt,open:M,resumeHideDuration:Bt,slots:A={},slotProps:J={},TransitionComponent:j,transitionDuration:z=k,TransitionProps:{onEnter:B,onExited:D,...Q}={},...V}=e,y={...e,anchorOrigin:{vertical:S,horizontal:d},autoHideDuration:f,disableWindowBlurListener:T,TransitionComponent:j,transitionDuration:z},Y=Lt(y),{getRootProps:Z,onClickAway:tt}=xt({...y}),[ot,H]=C.useState(!0),et=c=>{H(!0),D&&D(c)},nt=(c,u)=>{H(!1),B&&B(c,u)},x={slots:{transition:j,...A},slotProps:{content:E,clickAwayListener:O,transition:Q,...J}},[rt,st]=h("root",{ref:n,className:[Y.root,b],elementType:Mt,getSlotProps:Z,externalForwardedProps:{...x,...V},ownerState:y}),[at,{ownerState:it,...ct}]=h("clickAwayListener",{elementType:bt,externalForwardedProps:x,getSlotProps:c=>({onClickAway:(...u)=>{var g;(g=c.onClickAway)==null||g.call(c,...u),tt(...u)}}),ownerState:y}),[lt,pt]=h("content",{elementType:Tt,shouldForwardComponentProp:!0,externalForwardedProps:x,additionalProps:{message:R,action:m},ownerState:y}),[ut,mt]=h("transition",{elementType:yt,externalForwardedProps:x,getSlotProps:c=>({onEnter:(...u)=>{var g;(g=c.onEnter)==null||g.call(c,...u),nt(...u)},onExited:(...u)=>{var g;(g=c.onExited)==null||g.call(c,...u),et(...u)}}),additionalProps:{appear:!0,in:M,timeout:z,direction:S==="top"?"down":"up"},ownerState:y});return!M&&ot?null:l.jsx(at,{...ct,...A.clickAwayListener&&{ownerState:it},children:l.jsx(rt,{...st,children:l.jsx(ut,{...mt,children:p||l.jsx(lt,{...pt})})})})}),L=({open:t,message:o,onClose:n,...e})=>l.jsx(At,{open:t,message:o,onClose:n,...e});L.__docgenInfo={description:"",methods:[],displayName:"Snackbar",props:{open:{required:!0,tsType:{name:"boolean"},description:""},message:{required:!0,tsType:{name:"string"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["MUISnackbarProps"]};const ko={title:"Components/Snackbar",component:L,argTypes:{open:{control:"boolean"},message:{control:"text"}}},jt=t=>{const[o,n]=dt.useState(t.open),e=()=>{n(!0)},i=()=>{n(!1)};return l.jsxs(l.Fragment,{children:[l.jsx(wt,{text:"Show Snackbar",onClick:e}),l.jsx(L,{...t,open:o,onClose:i})]})},w=jt.bind({});w.args={open:!1,message:"This is a snackbar message."};var N,U,$;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const [open, setOpen] = React.useState(args.open);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <>\r
      <Button text="Show Snackbar" onClick={handleClickOpen} />\r
      <Snackbar {...args} open={open} onClose={handleClose} />\r
    </>;
}`,...($=(U=w.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};const bo=["Default"];export{w as Default,bo as __namedExportsOrder,ko as default};
