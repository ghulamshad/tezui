import{r as d}from"./index-D4lIrffr.js";import{u as B}from"./useTheme-C-GcZBKo.js";import{j as J}from"./jsx-runtime-D_zvdyIk.js";import{T as M,g as v,r as N}from"./utils-DoXAlJIm.js";import{u as O}from"./useTimeout-D31e7RVr.js";import{u as Q}from"./useForkRef-zqhjcRVs.js";import{g as U}from"./getReactElementRef-rGhWSfJO.js";function p(l){return`scale(${l}, ${l**2})`}const V={entering:{opacity:1,transform:p(1)},entered:{opacity:1,transform:"none"}},E=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),j=d.forwardRef(function(w,A){const{addEndListener:h,appear:D=!0,children:m,easing:y,in:x,onEnter:T,onEntered:H,onEntering:F,onExit:R,onExited:G,onExiting:L,style:f,timeout:i="auto",TransitionComponent:S=M,...C}=w,P=O(),g=d.useRef(),r=B(),u=d.useRef(null),$=Q(u,U(m),A),s=t=>o=>{if(t){const n=u.current;o===void 0?t(n):t(n,o)}},b=s(F),z=s((t,o)=>{N(t);const{duration:n,delay:c,easing:e}=v({style:f,timeout:i,easing:y},{mode:"enter"});let a;i==="auto"?(a=r.transitions.getAutoHeightDuration(t.clientHeight),g.current=a):a=n,t.style.transition=[r.transitions.create("opacity",{duration:a,delay:c}),r.transitions.create("transform",{duration:E?a:a*.666,delay:c,easing:e})].join(","),T&&T(t,o)}),K=s(H),W=s(L),_=s(t=>{const{duration:o,delay:n,easing:c}=v({style:f,timeout:i,easing:y},{mode:"exit"});let e;i==="auto"?(e=r.transitions.getAutoHeightDuration(t.clientHeight),g.current=e):e=o,t.style.transition=[r.transitions.create("opacity",{duration:e,delay:n}),r.transitions.create("transform",{duration:E?e:e*.666,delay:E?n:n||e*.333,easing:c})].join(","),t.style.opacity=0,t.style.transform=p(.75),R&&R(t)}),k=s(G),q=t=>{i==="auto"&&P.start(g.current||0,t),h&&h(u.current,t)};return J.jsx(S,{appear:D,in:x,nodeRef:u,onEnter:z,onEntered:K,onEntering:b,onExit:_,onExited:k,onExiting:W,addEndListener:q,timeout:i==="auto"?null:i,...C,children:(t,{ownerState:o,...n})=>d.cloneElement(m,{style:{opacity:0,transform:p(.75),visibility:t==="exited"&&!x?"hidden":void 0,...V[t],...f,...m.props.style},ref:$,...n})})});j&&(j.muiSupportAuto=!0);export{j as G};
