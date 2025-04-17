import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index-D4lIrffr.js";import{g as D,c as O}from"./generateUtilityClass-X8vU33Qn.js";import{c as N}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{S as U}from"./SwitchBase-YzmgTcNf.js";import{m as u}from"./memoTheme-DmLuDuZz.js";import{g as _}from"./generateUtilityClasses-CLSsTaNC.js";import{u as f}from"./useSlot-OTo4eg8k.js";import{u as L}from"./DefaultPropsProvider-Dc-qTJVP.js";import{s as m,c as H}from"./styled-BAZlGgKr.js";import{c as n,a as $,l as q,h as A}from"./createTheme-BUel03A0.js";import"./useFormControl-Djn6XZQb.js";import"./useControlled-YcRSxK3u.js";import"./ButtonBase-DgyPxojw.js";import"./useTimeout-D31e7RVr.js";import"./TransitionGroupContext-DwK6OGUB.js";import"./emotion-react.browser.esm-BebTSLZi.js";import"./useForkRef-zqhjcRVs.js";import"./useEventCallback-PUnHO-pX.js";import"./useEnhancedEffect-TzlApzCm.js";import"./isFocusVisible-B8k4qzLc.js";import"./resolveComponentProps-BIm1hqfy.js";function F(t){return D("MuiSwitch",t)}const e=_("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),X=t=>{const{classes:o,edge:a,size:d,color:h,checked:g,disabled:w}=t,v={root:["root",a&&`edge${n(a)}`,`size${n(d)}`],switchBase:["switchBase",`color${n(h)}`,g&&"checked",w&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},S=H(v,F,o);return{...o,...S}},V=m("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,a.edge&&o[`edge${n(a.edge)}`],o[`size${n(a.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${e.thumb}`]:{width:16,height:16},[`& .${e.switchBase}`]:{padding:4,[`&.${e.checked}`]:{transform:"translateX(16px)"}}}}]}),G=m(U,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.switchBase,{[`& .${e.input}`]:o.input},a.color!=="default"&&o[`color${n(a.color)}`]]}})(u(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${e.checked}`]:{transform:"translateX(20px)"},[`&.${e.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${e.checked} + .${e.track}`]:{opacity:.5},[`&.${e.disabled} + .${e.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${e.input}`]:{left:"-100%",width:"300%"}})),u(({theme:t})=>({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:$(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(t.palette).filter(N(["light"])).map(([o])=>({props:{color:o},style:{[`&.${e.checked}`]:{color:(t.vars||t).palette[o].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[o].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:$(t.palette[o].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${e.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${o}DisabledColor`]:`${t.palette.mode==="light"?q(t.palette[o].main,.62):A(t.palette[o].main,.55)}`}},[`&.${e.checked} + .${e.track}`]:{backgroundColor:(t.vars||t).palette[o].main}}}))]}))),J=m("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,o)=>o.track})(u(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`}))),K=m("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,o)=>o.thumb})(u(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}))),Q=I.forwardRef(function(o,a){const d=L({props:o,name:"MuiSwitch"}),{className:h,color:g="primary",edge:w=!1,size:v="medium",sx:S,slots:c={},slotProps:r={},...B}=d,s={...d,color:g,edge:w,size:v},l=X(s),b={slots:c,slotProps:r},[R,z]=f("root",{className:O(l.root,h),elementType:V,externalForwardedProps:b,ownerState:s,additionalProps:{sx:S}}),[M,P]=f("thumb",{className:l.thumb,elementType:K,externalForwardedProps:b,ownerState:s}),y=i.jsx(M,{...P}),[j,E]=f("track",{className:l.track,elementType:J,externalForwardedProps:b,ownerState:s});return i.jsxs(R,{...z,children:[i.jsx(G,{type:"checkbox",icon:y,checkedIcon:y,ref:a,ownerState:s,...B,classes:{...l,root:l.switchBase},slots:{...c.switchBase&&{root:c.switchBase},...c.input&&{input:c.input}},slotProps:{...r.switchBase&&{root:typeof r.switchBase=="function"?r.switchBase(s):r.switchBase},...r.input&&{input:typeof r.input=="function"?r.input(s):r.input}}}),i.jsx(j,{...E})]})}),k=({checked:t,onChange:o,...a})=>i.jsx(Q,{checked:t,onChange:o,...a});k.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""}},composes:["MUISwitchProps"]};const ft={title:"Components/Switch",component:k},W=t=>i.jsx(k,{...t}),p=W.bind({});p.args={};var x,C,T;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:"args => <Switch {...args} />",...(T=(C=p.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const kt=["Default"];export{p as Default,kt as __namedExportsOrder,ft as default};
