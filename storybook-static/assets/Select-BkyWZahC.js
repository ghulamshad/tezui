import{r as l}from"./index-D4lIrffr.js";import{g as ue,c as Se}from"./generateUtilityClass-X8vU33Qn.js";import{u as Ct}from"./index-BtzQAOoK.js";import{s as F,c as ne,r as re,b as wt}from"./styled-BAZlGgKr.js";import{g as pe}from"./generateUtilityClasses-CLSsTaNC.js";import{u as tt}from"./useSlot-OTo4eg8k.js";import{j as S}from"./jsx-runtime-D_zvdyIk.js";import{u as Ce}from"./DefaultPropsProvider-Dc-qTJVP.js";import{u as Rt}from"./useSlotProps-BLSNAJah.js";import{a as It,P as Mt}from"./Popover-Cd2J5t0z.js";import{u as Ae}from"./useEnhancedEffect-TzlApzCm.js";import{g as Pt}from"./Modal-DLIYOXvE.js";import{o as Ve}from"./ownerWindow-HkKU3E4x.js";import{u as $e}from"./useForkRef-zqhjcRVs.js";import{L as kt}from"./List-KaPn0lEX.js";import{o as ct}from"./ownerDocument-DW-IO8s5.js";import{c as oe,G as ft,n as qe}from"./createTheme-BUel03A0.js";import{u as ot}from"./useControlled-YcRSxK3u.js";import{u as Ft}from"./useId-BpZO_0ZV.js";import{f as Ge}from"./formControlState-Dq1zat_P.js";import{u as _e,F as Ot}from"./useFormControl-Djn6XZQb.js";import{c as $t}from"./createSvgIcon-0TVLy6aX.js";import{g as Et}from"./getReactElementRef-rGhWSfJO.js";import{m as X}from"./memoTheme-DmLuDuZz.js";import{c as Xe}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{i as nt}from"./isHostComponent-DVu5iVWx.js";import{g as Lt}from"./index-DRowGhIs.js";import{u as At}from"./useEventCallback-PUnHO-pX.js";import{d as Bt}from"./debounce-Be36O1Ab.js";function Le(e){return parseInt(e,10)||0}const Nt={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function zt(e){for(const t in e)return!1;return!0}function rt(e){return zt(e)||e.outerHeightStyle===0&&!e.overflowing}const Tt=l.forwardRef(function(t,o){const{onChange:r,maxRows:a,minRows:u=1,style:s,value:d,...g}=t,{current:h}=l.useRef(d!=null),m=l.useRef(null),x=$e(o,m),C=l.useRef(null),v=l.useRef(null),M=l.useCallback(()=>{const n=m.current,i=v.current;if(!n||!i)return;const w=Ve(n).getComputedStyle(n);if(w.width==="0px")return{outerHeightStyle:0,overflowing:!1};i.style.width=w.width,i.value=n.value||t.placeholder||"x",i.value.slice(-1)===`
`&&(i.value+=" ");const T=w.boxSizing,R=Le(w.paddingBottom)+Le(w.paddingTop),D=Le(w.borderBottomWidth)+Le(w.borderTopWidth),L=i.scrollHeight;i.value="x";const A=i.scrollHeight;let O=L;u&&(O=Math.max(Number(u)*A,O)),a&&(O=Math.min(Number(a)*A,O)),O=Math.max(O,A);const N=O+(T==="border-box"?R+D:0),U=Math.abs(O-L)<=1;return{outerHeightStyle:N,overflowing:U}},[a,u,t.placeholder]),$=At(()=>{const n=m.current,i=M();if(!n||!i||rt(i))return!1;const b=i.outerHeightStyle;return C.current!=null&&C.current!==b}),y=l.useCallback(()=>{const n=m.current,i=M();if(!n||!i||rt(i))return;const b=i.outerHeightStyle;C.current!==b&&(C.current=b,n.style.height=`${b}px`),n.style.overflow=i.overflowing?"hidden":""},[M]),f=l.useRef(-1);Ae(()=>{const n=Bt(y),i=m==null?void 0:m.current;if(!i)return;const b=Ve(i);b.addEventListener("resize",n);let w;return typeof ResizeObserver<"u"&&(w=new ResizeObserver(()=>{$()&&(w.unobserve(i),cancelAnimationFrame(f.current),y(),f.current=requestAnimationFrame(()=>{w.observe(i)}))}),w.observe(i)),()=>{n.clear(),cancelAnimationFrame(f.current),b.removeEventListener("resize",n),w&&w.disconnect()}},[M,y,$]),Ae(()=>{y()});const I=n=>{h||y(),r&&r(n)};return S.jsxs(l.Fragment,{children:[S.jsx("textarea",{value:d,onChange:I,ref:x,rows:u,style:s,...g}),S.jsx("textarea",{"aria-hidden":!0,className:t.className,readOnly:!0,ref:v,tabIndex:-1,style:{...Nt.shadow,...s,paddingTop:0,paddingBottom:0}})]})});function st(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function mt(e,t=!1){return e&&(st(e.value)&&e.value!==""||t&&st(e.defaultValue)&&e.defaultValue!=="")}function sn(e){return e.startAdornment}function Wt(e){return ue("MuiInputBase",e)}const xe=pe("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]);var it;const Be=(e,t)=>{const{ownerState:o}=e;return[t.root,o.formControl&&t.formControl,o.startAdornment&&t.adornedStart,o.endAdornment&&t.adornedEnd,o.error&&t.error,o.size==="small"&&t.sizeSmall,o.multiline&&t.multiline,o.color&&t[`color${oe(o.color)}`],o.fullWidth&&t.fullWidth,o.hiddenLabel&&t.hiddenLabel]},Ne=(e,t)=>{const{ownerState:o}=e;return[t.input,o.size==="small"&&t.inputSizeSmall,o.multiline&&t.inputMultiline,o.type==="search"&&t.inputTypeSearch,o.startAdornment&&t.inputAdornedStart,o.endAdornment&&t.inputAdornedEnd,o.hiddenLabel&&t.inputHiddenLabel]},jt=e=>{const{classes:t,color:o,disabled:r,error:a,endAdornment:u,focused:s,formControl:d,fullWidth:g,hiddenLabel:h,multiline:m,readOnly:x,size:C,startAdornment:v,type:M}=e,$={root:["root",`color${oe(o)}`,r&&"disabled",a&&"error",g&&"fullWidth",s&&"focused",d&&"formControl",C&&C!=="medium"&&`size${oe(C)}`,m&&"multiline",v&&"adornedStart",u&&"adornedEnd",h&&"hiddenLabel",x&&"readOnly"],input:["input",r&&"disabled",M==="search"&&"inputTypeSearch",m&&"inputMultiline",C==="small"&&"inputSizeSmall",h&&"inputHiddenLabel",v&&"inputAdornedStart",u&&"inputAdornedEnd",x&&"readOnly"]};return ne($,Wt,t)},ze=F("div",{name:"MuiInputBase",slot:"Root",overridesResolver:Be})(X(({theme:e})=>({...e.typography.body1,color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${xe.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"},variants:[{props:({ownerState:t})=>t.multiline,style:{padding:"4px 0 5px"}},{props:({ownerState:t,size:o})=>t.multiline&&o==="small",style:{paddingTop:1}},{props:({ownerState:t})=>t.fullWidth,style:{width:"100%"}}]}))),Te=F("input",{name:"MuiInputBase",slot:"Input",overridesResolver:Ne})(X(({theme:e})=>{const t=e.palette.mode==="light",o={color:"currentColor",...e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:t?.42:.5},transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})},r={opacity:"0 !important"},a=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:t?.42:.5};return{font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%","&::-webkit-input-placeholder":o,"&::-moz-placeholder":o,"&::-ms-input-placeholder":o,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${xe.formControl} &`]:{"&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&::-ms-input-placeholder":r,"&:focus::-webkit-input-placeholder":a,"&:focus::-moz-placeholder":a,"&:focus::-ms-input-placeholder":a},[`&.${xe.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},variants:[{props:({ownerState:u})=>!u.disableInjectingGlobalStyles,style:{animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}}},{props:{size:"small"},style:{paddingTop:1}},{props:({ownerState:u})=>u.multiline,style:{height:"auto",resize:"none",padding:0,paddingTop:0}},{props:{type:"search"},style:{MozAppearance:"textfield"}}]}})),lt=Lt({"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}),Ze=l.forwardRef(function(t,o){const r=Ce({props:t,name:"MuiInputBase"}),{"aria-describedby":a,autoComplete:u,autoFocus:s,className:d,color:g,components:h={},componentsProps:m={},defaultValue:x,disabled:C,disableInjectingGlobalStyles:v,endAdornment:M,error:$,fullWidth:y=!1,id:f,inputComponent:I="input",inputProps:n={},inputRef:i,margin:b,maxRows:w,minRows:T,multiline:R=!1,name:D,onBlur:L,onChange:A,onClick:O,onFocus:N,onKeyDown:U,onKeyUp:se,placeholder:ce,readOnly:K,renderSuffix:z,rows:c,size:W,slotProps:Z={},slots:Ee={},startAdornment:J,type:V="text",value:G,...We}=r,Q=n.value!=null?n.value:G,{current:we}=l.useRef(Q!=null),_=l.useRef(),je=l.useCallback(k=>{},[]),De=$e(_,i,n.ref,je),[Y,ee]=l.useState(!1),E=_e(),H=Ge({props:r,muiFormControl:E,states:["color","disabled","error","hiddenLabel","size","required","filled"]});H.focused=E?E.focused:Y,l.useEffect(()=>{!E&&C&&Y&&(ee(!1),L&&L())},[E,C,Y,L]);const fe=E&&E.onFilled,Re=E&&E.onEmpty,ie=l.useCallback(k=>{mt(k)?fe&&fe():Re&&Re()},[fe,Re]);Ae(()=>{we&&ie({value:Q})},[Q,ie,we]);const Ue=k=>{N&&N(k),n.onFocus&&n.onFocus(k),E&&E.onFocus?E.onFocus(k):ee(!0)},le=k=>{L&&L(k),n.onBlur&&n.onBlur(k),E&&E.onBlur?E.onBlur(k):ee(!1)},He=(k,...ve)=>{if(!we){const Pe=k.target||_.current;if(Pe==null)throw new Error(ft(1));ie({value:Pe.value})}n.onChange&&n.onChange(k,...ve),A&&A(k,...ve)};l.useEffect(()=>{ie(_.current)},[]);const te=k=>{_.current&&k.currentTarget===k.target&&_.current.focus(),O&&O(k)};let me=I,j=n;R&&me==="input"&&(c?j={type:void 0,minRows:c,maxRows:c,...j}:j={type:void 0,maxRows:w,minRows:T,...j},me=Tt);const be=k=>{ie(k.animationName==="mui-auto-fill-cancel"?_.current:{value:"x"})};l.useEffect(()=>{E&&E.setAdornedStart(!!J)},[E,J]);const Ie={...r,color:H.color||"primary",disabled:H.disabled,endAdornment:M,error:H.error,focused:H.focused,formControl:E,fullWidth:y,hiddenLabel:H.hiddenLabel,multiline:R,size:H.size,startAdornment:J,type:V},Me=jt(Ie),ge=Ee.root||h.Root||ze,he=Z.root||m.root||{},ae=Ee.input||h.Input||Te;return j={...j,...Z.input??m.input},S.jsxs(l.Fragment,{children:[!v&&typeof lt=="function"&&(it||(it=S.jsx(lt,{}))),S.jsxs(ge,{...he,ref:o,onClick:te,...We,...!nt(ge)&&{ownerState:{...Ie,...he.ownerState}},className:Se(Me.root,he.className,d,K&&"MuiInputBase-readOnly"),children:[J,S.jsx(Ot.Provider,{value:null,children:S.jsx(ae,{"aria-invalid":H.error,"aria-describedby":a,autoComplete:u,autoFocus:s,defaultValue:x,disabled:H.disabled,id:f,onAnimationStart:be,name:D,placeholder:ce,readOnly:K,required:H.required,rows:c,value:Q,onKeyDown:U,onKeyUp:se,type:V,...j,...!nt(ae)&&{as:me,ownerState:{...Ie,...j.ownerState}},ref:De,className:Se(Me.input,j.className,K&&"MuiInputBase-readOnly"),onBlur:le,onChange:He,onFocus:Ue})}),M,z?z({...H,startAdornment:J}):null]})]})});function Dt(e){return ue("MuiInput",e)}const ke={...xe,...pe("MuiInput",["root","underline","input"])};function Ut(e){return ue("MuiOutlinedInput",e)}const q={...xe,...pe("MuiOutlinedInput",["root","notchedOutline","input"])};function Ht(e){return ue("MuiFilledInput",e)}const de={...xe,...pe("MuiFilledInput",["root","underline","input","adornedStart","adornedEnd","sizeSmall","multiline","hiddenLabel"])},Kt=$t(S.jsx("path",{d:"M7 10l5 5 5-5z"})),Vt=e=>{const{classes:t,disableUnderline:o,startAdornment:r,endAdornment:a,size:u,hiddenLabel:s,multiline:d}=e,g={root:["root",!o&&"underline",r&&"adornedStart",a&&"adornedEnd",u==="small"&&`size${oe(u)}`,s&&"hiddenLabel",d&&"multiline"],input:["input"]},h=ne(g,Ht,t);return{...t,...h}},qt=F(ze,{shouldForwardProp:e=>re(e)||e==="classes",name:"MuiFilledInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[...Be(e,t),!o.disableUnderline&&t.underline]}})(X(({theme:e})=>{const t=e.palette.mode==="light",o=t?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",r=t?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)",a=t?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)",u=t?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)";return{position:"relative",backgroundColor:e.vars?e.vars.palette.FilledInput.bg:r,borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),"&:hover":{backgroundColor:e.vars?e.vars.palette.FilledInput.hoverBg:a,"@media (hover: none)":{backgroundColor:e.vars?e.vars.palette.FilledInput.bg:r}},[`&.${de.focused}`]:{backgroundColor:e.vars?e.vars.palette.FilledInput.bg:r},[`&.${de.disabled}`]:{backgroundColor:e.vars?e.vars.palette.FilledInput.disabledBg:u},variants:[{props:({ownerState:s})=>!s.disableUnderline,style:{"&::after":{left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${de.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${de.error}`]:{"&::before, &::after":{borderBottomColor:(e.vars||e).palette.error.main}},"&::before":{borderBottom:`1px solid ${e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`:o}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${de.disabled}, .${de.error}):before`]:{borderBottom:`1px solid ${(e.vars||e).palette.text.primary}`},[`&.${de.disabled}:before`]:{borderBottomStyle:"dotted"}}},...Object.entries(e.palette).filter(Xe()).map(([s])=>{var d;return{props:{disableUnderline:!1,color:s},style:{"&::after":{borderBottom:`2px solid ${(d=(e.vars||e).palette[s])==null?void 0:d.main}`}}}}),{props:({ownerState:s})=>s.startAdornment,style:{paddingLeft:12}},{props:({ownerState:s})=>s.endAdornment,style:{paddingRight:12}},{props:({ownerState:s})=>s.multiline,style:{padding:"25px 12px 8px"}},{props:({ownerState:s,size:d})=>s.multiline&&d==="small",style:{paddingTop:21,paddingBottom:4}},{props:({ownerState:s})=>s.multiline&&s.hiddenLabel,style:{paddingTop:16,paddingBottom:17}},{props:({ownerState:s})=>s.multiline&&s.hiddenLabel&&s.size==="small",style:{paddingTop:8,paddingBottom:9}}]}})),Gt=F(Te,{name:"MuiFilledInput",slot:"Input",overridesResolver:Ne})(X(({theme:e})=>({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12,...!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},...e.vars&&{"&:-webkit-autofill":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},variants:[{props:{size:"small"},style:{paddingTop:21,paddingBottom:4}},{props:({ownerState:t})=>t.hiddenLabel,style:{paddingTop:16,paddingBottom:17}},{props:({ownerState:t})=>t.startAdornment,style:{paddingLeft:0}},{props:({ownerState:t})=>t.endAdornment,style:{paddingRight:0}},{props:({ownerState:t})=>t.hiddenLabel&&t.size==="small",style:{paddingTop:8,paddingBottom:9}},{props:({ownerState:t})=>t.multiline,style:{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0}}]}))),bt=l.forwardRef(function(t,o){const r=Ce({props:t,name:"MuiFilledInput"}),{disableUnderline:a=!1,components:u={},componentsProps:s,fullWidth:d=!1,hiddenLabel:g,inputComponent:h="input",multiline:m=!1,slotProps:x,slots:C={},type:v="text",...M}=r,$={...r,disableUnderline:a,fullWidth:d,inputComponent:h,multiline:m,type:v},y=Vt(r),f={root:{ownerState:$},input:{ownerState:$}},I=x??s?qe(f,x??s):f,n=C.root??u.Root??qt,i=C.input??u.Input??Gt;return S.jsx(Ze,{slots:{root:n,input:i},slotProps:I,fullWidth:d,inputComponent:h,multiline:m,ref:o,type:v,...M,classes:y})});bt.muiName="Input";const _t=e=>{const{classes:t,disableUnderline:o}=e,a=ne({root:["root",!o&&"underline"],input:["input"]},Dt,t);return{...t,...a}},Xt=F(ze,{shouldForwardProp:e=>re(e)||e==="classes",name:"MuiInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[...Be(e,t),!o.disableUnderline&&t.underline]}})(X(({theme:e})=>{let o=e.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return e.vars&&(o=`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),{position:"relative",variants:[{props:({ownerState:r})=>r.formControl,style:{"label + &":{marginTop:16}}},{props:({ownerState:r})=>!r.disableUnderline,style:{"&::after":{left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${ke.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${ke.error}`]:{"&::before, &::after":{borderBottomColor:(e.vars||e).palette.error.main}},"&::before":{borderBottom:`1px solid ${o}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${ke.disabled}, .${ke.error}):before`]:{borderBottom:`2px solid ${(e.vars||e).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${o}`}},[`&.${ke.disabled}:before`]:{borderBottomStyle:"dotted"}}},...Object.entries(e.palette).filter(Xe()).map(([r])=>({props:{color:r,disableUnderline:!1},style:{"&::after":{borderBottom:`2px solid ${(e.vars||e).palette[r].main}`}}}))]}})),Zt=F(Te,{name:"MuiInput",slot:"Input",overridesResolver:Ne})({}),gt=l.forwardRef(function(t,o){const r=Ce({props:t,name:"MuiInput"}),{disableUnderline:a=!1,components:u={},componentsProps:s,fullWidth:d=!1,inputComponent:g="input",multiline:h=!1,slotProps:m,slots:x={},type:C="text",...v}=r,M=_t(r),y={root:{ownerState:{disableUnderline:a}}},f=m??s?qe(m??s,y):y,I=x.root??u.Root??Xt,n=x.input??u.Input??Zt;return S.jsx(Ze,{slots:{root:I,input:n},slotProps:f,fullWidth:d,inputComponent:g,multiline:h,ref:o,type:C,...v,classes:M})});gt.muiName="Input";function Ke(e,t,o){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:o?null:e.firstChild}function at(e,t,o){return e===t?o?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:o?null:e.lastChild}function ht(e,t){if(t===void 0)return!0;let o=e.innerText;return o===void 0&&(o=e.textContent),o=o.trim().toLowerCase(),o.length===0?!1:t.repeating?o[0]===t.keys[0]:o.startsWith(t.keys.join(""))}function Fe(e,t,o,r,a,u){let s=!1,d=a(e,t,t?o:!1);for(;d;){if(d===e.firstChild){if(s)return!1;s=!0}const g=r?!1:d.disabled||d.getAttribute("aria-disabled")==="true";if(!d.hasAttribute("tabindex")||!ht(d,u)||g)d=a(e,d,o);else return d.focus(),!0}return!1}const Jt=l.forwardRef(function(t,o){const{actions:r,autoFocus:a=!1,autoFocusItem:u=!1,children:s,className:d,disabledItemsFocusable:g=!1,disableListWrap:h=!1,onKeyDown:m,variant:x="selectedMenu",...C}=t,v=l.useRef(null),M=l.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Ae(()=>{a&&v.current.focus()},[a]),l.useImperativeHandle(r,()=>({adjustStyleForScrollbar:(n,{direction:i})=>{const b=!v.current.style.width;if(n.clientHeight<v.current.clientHeight&&b){const w=`${Pt(Ve(n))}px`;v.current.style[i==="rtl"?"paddingLeft":"paddingRight"]=w,v.current.style.width=`calc(100% + ${w})`}return v.current}}),[]);const $=n=>{const i=v.current,b=n.key;if(n.ctrlKey||n.metaKey||n.altKey){m&&m(n);return}const T=ct(i).activeElement;if(b==="ArrowDown")n.preventDefault(),Fe(i,T,h,g,Ke);else if(b==="ArrowUp")n.preventDefault(),Fe(i,T,h,g,at);else if(b==="Home")n.preventDefault(),Fe(i,null,h,g,Ke);else if(b==="End")n.preventDefault(),Fe(i,null,h,g,at);else if(b.length===1){const R=M.current,D=b.toLowerCase(),L=performance.now();R.keys.length>0&&(L-R.lastTime>500?(R.keys=[],R.repeating=!0,R.previousKeyMatched=!0):R.repeating&&D!==R.keys[0]&&(R.repeating=!1)),R.lastTime=L,R.keys.push(D);const A=T&&!R.repeating&&ht(T,R);R.previousKeyMatched&&(A||Fe(i,T,!1,g,Ke,R))?n.preventDefault():R.previousKeyMatched=!1}m&&m(n)},y=$e(v,o);let f=-1;l.Children.forEach(s,(n,i)=>{if(!l.isValidElement(n)){f===i&&(f+=1,f>=s.length&&(f=-1));return}n.props.disabled||(x==="selectedMenu"&&n.props.selected||f===-1)&&(f=i),f===i&&(n.props.disabled||n.props.muiSkipListHighlight||n.type.muiSkipListHighlight)&&(f+=1,f>=s.length&&(f=-1))});const I=l.Children.map(s,(n,i)=>{if(i===f){const b={};return u&&(b.autoFocus=!0),n.props.tabIndex===void 0&&x==="selectedMenu"&&(b.tabIndex=0),l.cloneElement(n,b)}return n});return S.jsx(kt,{role:"menu",ref:y,className:d,onKeyDown:$,tabIndex:a?0:-1,...C,children:I})});function Qt(e){return ue("MuiMenu",e)}pe("MuiMenu",["root","paper","list"]);const Yt={vertical:"top",horizontal:"right"},eo={vertical:"top",horizontal:"left"},to=e=>{const{classes:t}=e;return ne({root:["root"],paper:["paper"],list:["list"]},Qt,t)},oo=F(Mt,{shouldForwardProp:e=>re(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),no=F(It,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),ro=F(Jt,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),so=l.forwardRef(function(t,o){const r=Ce({props:t,name:"MuiMenu"}),{autoFocus:a=!0,children:u,className:s,disableAutoFocusItem:d=!1,MenuListProps:g={},onClose:h,open:m,PaperProps:x={},PopoverClasses:C,transitionDuration:v="auto",TransitionProps:{onEntering:M,...$}={},variant:y="selectedMenu",slots:f={},slotProps:I={},...n}=r,i=Ct(),b={...r,autoFocus:a,disableAutoFocusItem:d,MenuListProps:g,onEntering:M,PaperProps:x,transitionDuration:v,TransitionProps:$,variant:y},w=to(b),T=a&&!d&&m,R=l.useRef(null),D=(c,W)=>{R.current&&R.current.adjustStyleForScrollbar(c,{direction:i?"rtl":"ltr"}),M&&M(c,W)},L=c=>{c.key==="Tab"&&(c.preventDefault(),h&&h(c,"tabKeyDown"))};let A=-1;l.Children.map(u,(c,W)=>{l.isValidElement(c)&&(c.props.disabled||(y==="selectedMenu"&&c.props.selected||A===-1)&&(A=W))});const O={slots:f,slotProps:{list:g,transition:$,paper:x,...I}},N=Rt({elementType:f.root,externalSlotProps:I.root,ownerState:b,className:[w.root,s]}),[U,se]=tt("paper",{className:w.paper,elementType:no,externalForwardedProps:O,shouldForwardComponentProp:!0,ownerState:b}),[ce,K]=tt("list",{className:Se(w.list,g.className),elementType:ro,shouldForwardComponentProp:!0,externalForwardedProps:O,getSlotProps:c=>({...c,onKeyDown:W=>{var Z;L(W),(Z=c.onKeyDown)==null||Z.call(c,W)}}),ownerState:b}),z=typeof O.slotProps.transition=="function"?O.slotProps.transition(b):O.slotProps.transition;return S.jsx(oo,{onClose:h,anchorOrigin:{vertical:"bottom",horizontal:i?"right":"left"},transformOrigin:i?Yt:eo,slots:{root:f.root,paper:U,backdrop:f.backdrop,...f.transition&&{transition:f.transition}},slotProps:{root:N,paper:se,backdrop:typeof I.backdrop=="function"?I.backdrop(b):I.backdrop,transition:{...z,onEntering:(...c)=>{var W;D(...c),(W=z==null?void 0:z.onEntering)==null||W.call(z,...c)}}},open:m,ref:o,transitionDuration:v,ownerState:b,...n,classes:C,children:S.jsx(ce,{actions:R,autoFocus:a&&(A===-1||d),autoFocusItem:T,variant:y,...K,children:u})})});function io(e){return ue("MuiNativeSelect",e)}const Je=pe("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),lo=e=>{const{classes:t,variant:o,disabled:r,multiple:a,open:u,error:s}=e,d={select:["select",o,r&&"disabled",a&&"multiple",s&&"error"],icon:["icon",`icon${oe(o)}`,u&&"iconOpen",r&&"disabled"]};return ne(d,io,t)},vt=F("select")(({theme:e})=>({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":{borderRadius:0},[`&.${Je.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:(e.vars||e).palette.background.paper},variants:[{props:({ownerState:t})=>t.variant!=="filled"&&t.variant!=="outlined",style:{"&&&":{paddingRight:24,minWidth:16}}},{props:{variant:"filled"},style:{"&&&":{paddingRight:32}}},{props:{variant:"outlined"},style:{borderRadius:(e.vars||e).shape.borderRadius,"&:focus":{borderRadius:(e.vars||e).shape.borderRadius},"&&&":{paddingRight:32}}}]})),ao=F(vt,{name:"MuiNativeSelect",slot:"Select",shouldForwardProp:re,overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.select,t[o.variant],o.error&&t.error,{[`&.${Je.multiple}`]:t.multiple}]}})({}),yt=F("svg")(({theme:e})=>({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:(e.vars||e).palette.action.active,[`&.${Je.disabled}`]:{color:(e.vars||e).palette.action.disabled},variants:[{props:({ownerState:t})=>t.open,style:{transform:"rotate(180deg)"}},{props:{variant:"filled"},style:{right:7}},{props:{variant:"outlined"},style:{right:7}}]})),uo=F(yt,{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.icon,o.variant&&t[`icon${oe(o.variant)}`],o.open&&t.iconOpen]}})({}),po=l.forwardRef(function(t,o){const{className:r,disabled:a,error:u,IconComponent:s,inputRef:d,variant:g="standard",...h}=t,m={...t,disabled:a,variant:g,error:u},x=lo(m);return S.jsxs(l.Fragment,{children:[S.jsx(ao,{ownerState:m,className:Se(x.select,r),disabled:a,ref:d||o,...h}),t.multiple?null:S.jsx(uo,{as:s,ownerState:m,className:x.icon})]})});var dt;const co=F("fieldset",{shouldForwardProp:re})({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),fo=F("legend",{shouldForwardProp:re})(X(({theme:e})=>({float:"unset",width:"auto",overflow:"hidden",variants:[{props:({ownerState:t})=>!t.withLabel,style:{padding:0,lineHeight:"11px",transition:e.transitions.create("width",{duration:150,easing:e.transitions.easing.easeOut})}},{props:({ownerState:t})=>t.withLabel,style:{display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:e.transitions.create("max-width",{duration:50,easing:e.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}}},{props:({ownerState:t})=>t.withLabel&&t.notched,style:{maxWidth:"100%",transition:e.transitions.create("max-width",{duration:100,easing:e.transitions.easing.easeOut,delay:50})}}]})));function mo(e){const{children:t,classes:o,className:r,label:a,notched:u,...s}=e,d=a!=null&&a!=="",g={...e,notched:u,withLabel:d};return S.jsx(co,{"aria-hidden":!0,className:r,ownerState:g,...s,children:S.jsx(fo,{ownerState:g,children:d?S.jsx("span",{children:a}):dt||(dt=S.jsx("span",{className:"notranslate","aria-hidden":!0,children:"​"}))})})}const bo=e=>{const{classes:t}=e,r=ne({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},Ut,t);return{...t,...r}},go=F(ze,{shouldForwardProp:e=>re(e)||e==="classes",name:"MuiOutlinedInput",slot:"Root",overridesResolver:Be})(X(({theme:e})=>{const t=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{position:"relative",borderRadius:(e.vars||e).shape.borderRadius,[`&:hover .${q.notchedOutline}`]:{borderColor:(e.vars||e).palette.text.primary},"@media (hover: none)":{[`&:hover .${q.notchedOutline}`]:{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:t}},[`&.${q.focused} .${q.notchedOutline}`]:{borderWidth:2},variants:[...Object.entries(e.palette).filter(Xe()).map(([o])=>({props:{color:o},style:{[`&.${q.focused} .${q.notchedOutline}`]:{borderColor:(e.vars||e).palette[o].main}}})),{props:{},style:{[`&.${q.error} .${q.notchedOutline}`]:{borderColor:(e.vars||e).palette.error.main},[`&.${q.disabled} .${q.notchedOutline}`]:{borderColor:(e.vars||e).palette.action.disabled}}},{props:({ownerState:o})=>o.startAdornment,style:{paddingLeft:14}},{props:({ownerState:o})=>o.endAdornment,style:{paddingRight:14}},{props:({ownerState:o})=>o.multiline,style:{padding:"16.5px 14px"}},{props:({ownerState:o,size:r})=>o.multiline&&r==="small",style:{padding:"8.5px 14px"}}]}})),ho=F(mo,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(e,t)=>t.notchedOutline})(X(({theme:e})=>{const t=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:t}})),vo=F(Te,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:Ne})(X(({theme:e})=>({padding:"16.5px 14px",...!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderRadius:"inherit"}},...e.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},variants:[{props:{size:"small"},style:{padding:"8.5px 14px"}},{props:({ownerState:t})=>t.multiline,style:{padding:0}},{props:({ownerState:t})=>t.startAdornment,style:{paddingLeft:0}},{props:({ownerState:t})=>t.endAdornment,style:{paddingRight:0}}]}))),St=l.forwardRef(function(t,o){var r;const a=Ce({props:t,name:"MuiOutlinedInput"}),{components:u={},fullWidth:s=!1,inputComponent:d="input",label:g,multiline:h=!1,notched:m,slots:x={},type:C="text",...v}=a,M=bo(a),$=_e(),y=Ge({props:a,muiFormControl:$,states:["color","disabled","error","focused","hiddenLabel","size","required"]}),f={...a,color:y.color||"primary",disabled:y.disabled,error:y.error,focused:y.focused,formControl:$,fullWidth:s,hiddenLabel:y.hiddenLabel,multiline:h,size:y.size,type:C},I=x.root??u.Root??go,n=x.input??u.Input??vo;return S.jsx(Ze,{slots:{root:I,input:n},renderSuffix:i=>S.jsx(ho,{ownerState:f,className:M.notchedOutline,label:g!=null&&g!==""&&y.required?r||(r=S.jsxs(l.Fragment,{children:[g," ","*"]})):g,notched:typeof m<"u"?m:!!(i.startAdornment||i.filled||i.focused)}),fullWidth:s,inputComponent:d,multiline:h,ref:o,type:C,...v,classes:{...M,notchedOutline:null}})});St.muiName="Input";function xt(e){return ue("MuiSelect",e)}const Oe=pe("MuiSelect",["root","select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]);var ut;const yo=F(vt,{name:"MuiSelect",slot:"Select",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`&.${Oe.select}`]:t.select},{[`&.${Oe.select}`]:t[o.variant]},{[`&.${Oe.error}`]:t.error},{[`&.${Oe.multiple}`]:t.multiple}]}})({[`&.${Oe.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),So=F(yt,{name:"MuiSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.icon,o.variant&&t[`icon${oe(o.variant)}`],o.open&&t.iconOpen]}})({}),xo=F("input",{shouldForwardProp:e=>wt(e)&&e!=="classes",name:"MuiSelect",slot:"NativeInput",overridesResolver:(e,t)=>t.nativeInput})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function pt(e,t){return typeof t=="object"&&t!==null?e===t:String(e)===String(t)}function Co(e){return e==null||typeof e=="string"&&!e.trim()}const wo=e=>{const{classes:t,variant:o,disabled:r,multiple:a,open:u,error:s}=e,d={select:["select",o,r&&"disabled",a&&"multiple",s&&"error"],icon:["icon",`icon${oe(o)}`,u&&"iconOpen",r&&"disabled"],nativeInput:["nativeInput"]};return ne(d,xt,t)},Ro=l.forwardRef(function(t,o){var Ye;const{"aria-describedby":r,"aria-label":a,autoFocus:u,autoWidth:s,children:d,className:g,defaultOpen:h,defaultValue:m,disabled:x,displayEmpty:C,error:v=!1,IconComponent:M,inputRef:$,labelId:y,MenuProps:f={},multiple:I,name:n,onBlur:i,onChange:b,onClose:w,onFocus:T,onOpen:R,open:D,readOnly:L,renderValue:A,required:O,SelectDisplayProps:N={},tabIndex:U,type:se,value:ce,variant:K="standard",...z}=t,[c,W]=ot({controlled:ce,default:m,name:"Select"}),[Z,Ee]=ot({controlled:D,default:h,name:"Select"}),J=l.useRef(null),V=l.useRef(null),[G,We]=l.useState(null),{current:Q}=l.useRef(D!=null),[we,_]=l.useState(),je=$e(o,$),De=l.useCallback(p=>{V.current=p,p&&We(p)},[]),Y=G==null?void 0:G.parentNode;l.useImperativeHandle(je,()=>({focus:()=>{V.current.focus()},node:J.current,value:c}),[c]),l.useEffect(()=>{h&&Z&&G&&!Q&&(_(s?null:Y.clientWidth),V.current.focus())},[G,s]),l.useEffect(()=>{u&&V.current.focus()},[u]),l.useEffect(()=>{if(!y)return;const p=ct(V.current).getElementById(y);if(p){const P=()=>{getSelection().isCollapsed&&V.current.focus()};return p.addEventListener("click",P),()=>{p.removeEventListener("click",P)}}},[y]);const ee=(p,P)=>{p?R&&R(P):w&&w(P),Q||(_(s?null:Y.clientWidth),Ee(p))},E=p=>{p.button===0&&(p.preventDefault(),V.current.focus(),ee(!0,p))},H=p=>{ee(!1,p)},fe=l.Children.toArray(d),Re=p=>{const P=fe.find(B=>B.props.value===p.target.value);P!==void 0&&(W(P.props.value),b&&b(p,P))},ie=p=>P=>{let B;if(P.currentTarget.hasAttribute("tabindex")){if(I){B=Array.isArray(c)?c.slice():[];const ye=c.indexOf(p.props.value);ye===-1?B.push(p.props.value):B.splice(ye,1)}else B=p.props.value;if(p.props.onClick&&p.props.onClick(P),c!==B&&(W(B),b)){const ye=P.nativeEvent||P,et=new ye.constructor(ye.type,ye);Object.defineProperty(et,"target",{writable:!0,value:{value:B,name:n}}),b(et,p)}I||ee(!1,P)}},Ue=p=>{L||[" ","ArrowUp","ArrowDown","Enter"].includes(p.key)&&(p.preventDefault(),ee(!0,p))},le=G!==null&&Z,He=p=>{!le&&i&&(Object.defineProperty(p,"target",{writable:!0,value:{value:c,name:n}}),i(p))};delete z["aria-invalid"];let te,me;const j=[];let be=!1;(mt({value:c})||C)&&(A?te=A(c):be=!0);const Ie=fe.map(p=>{if(!l.isValidElement(p))return null;let P;if(I){if(!Array.isArray(c))throw new Error(ft(2));P=c.some(B=>pt(B,p.props.value)),P&&be&&j.push(p.props.children)}else P=pt(c,p.props.value),P&&be&&(me=p.props.children);return l.cloneElement(p,{"aria-selected":P?"true":"false",onClick:ie(p),onKeyUp:B=>{B.key===" "&&B.preventDefault(),p.props.onKeyUp&&p.props.onKeyUp(B)},role:"option",selected:P,value:void 0,"data-value":p.props.value})});be&&(I?j.length===0?te=null:te=j.reduce((p,P,B)=>(p.push(P),B<j.length-1&&p.push(", "),p),[]):te=me);let Me=we;!s&&Q&&G&&(Me=Y.clientWidth);let ge;typeof U<"u"?ge=U:ge=x?null:0;const he=N.id||(n?`mui-component-select-${n}`:void 0),ae={...t,variant:K,value:c,open:le,error:v},k=wo(ae),ve={...f.PaperProps,...(Ye=f.slotProps)==null?void 0:Ye.paper},Pe=Ft();return S.jsxs(l.Fragment,{children:[S.jsx(yo,{as:"div",ref:De,tabIndex:ge,role:"combobox","aria-controls":le?Pe:void 0,"aria-disabled":x?"true":void 0,"aria-expanded":le?"true":"false","aria-haspopup":"listbox","aria-label":a,"aria-labelledby":[y,he].filter(Boolean).join(" ")||void 0,"aria-describedby":r,"aria-required":O?"true":void 0,"aria-invalid":v?"true":void 0,onKeyDown:Ue,onMouseDown:x||L?null:E,onBlur:He,onFocus:T,...N,ownerState:ae,className:Se(N.className,k.select,g),id:he,children:Co(te)?ut||(ut=S.jsx("span",{className:"notranslate","aria-hidden":!0,children:"​"})):te}),S.jsx(xo,{"aria-invalid":v,value:Array.isArray(c)?c.join(","):c,name:n,ref:J,"aria-hidden":!0,onChange:Re,tabIndex:-1,disabled:x,className:k.nativeInput,autoFocus:u,required:O,...z,ownerState:ae}),S.jsx(So,{as:M,className:k.icon,ownerState:ae}),S.jsx(so,{id:`menu-${n||""}`,anchorEl:Y,open:le,onClose:H,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},...f,slotProps:{...f.slotProps,list:{"aria-labelledby":y,role:"listbox","aria-multiselectable":I?"true":void 0,disableListWrap:!0,id:Pe,...f.MenuListProps},paper:{...ve,style:{minWidth:Me,...ve!=null?ve.style:null}}},children:Ie})]})}),Io=e=>{const{classes:t}=e,r=ne({root:["root"]},xt,t);return{...t,...r}},Qe={name:"MuiSelect",overridesResolver:(e,t)=>t.root,shouldForwardProp:e=>re(e)&&e!=="variant",slot:"Root"},Mo=F(gt,Qe)(""),Po=F(St,Qe)(""),ko=F(bt,Qe)(""),Fo=l.forwardRef(function(t,o){const r=Ce({name:"MuiSelect",props:t}),{autoWidth:a=!1,children:u,classes:s={},className:d,defaultOpen:g=!1,displayEmpty:h=!1,IconComponent:m=Kt,id:x,input:C,inputProps:v,label:M,labelId:$,MenuProps:y,multiple:f=!1,native:I=!1,onClose:n,onOpen:i,open:b,renderValue:w,SelectDisplayProps:T,variant:R="outlined",...D}=r,L=I?po:Ro,A=_e(),O=Ge({props:r,muiFormControl:A,states:["variant","error"]}),N=O.variant||R,U={...r,variant:N,classes:s},se=Io(U),{root:ce,...K}=se,z=C||{standard:S.jsx(Mo,{ownerState:U}),outlined:S.jsx(Po,{label:M,ownerState:U}),filled:S.jsx(ko,{ownerState:U})}[N],c=$e(o,Et(z));return S.jsx(l.Fragment,{children:l.cloneElement(z,{inputComponent:L,inputProps:{children:u,error:O.error,IconComponent:m,variant:N,type:void 0,multiple:f,...I?{id:x}:{autoWidth:a,defaultOpen:g,displayEmpty:h,labelId:$,MenuProps:y,onClose:n,onOpen:i,open:b,renderValue:w,SelectDisplayProps:{id:x,...T}},...v,classes:v?qe(K,v.classes):K,...C?C.props.inputProps:{}},...(f&&I||h)&&N==="outlined"?{notched:!0}:{},ref:c,className:Se(z.props.className,d,se.root),...!C&&{variant:N},...D})})});Fo.muiName="Select";export{Kt as A,bt as F,gt as I,Jt as M,St as O,Fo as S,ke as a,sn as b,mt as c,Ze as d,de as f,xe as i,q as o};
