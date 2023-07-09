(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[161],{2131:function(e,t,n){Promise.resolve().then(n.bind(n,1587)),Promise.resolve().then(n.bind(n,8664))},8664:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eb}});var r,a,l,s,o,i,u,c,d,f,m,p,h,b=n(9268),v=n(6394),x=n.n(v),g=n(6006);function y(...e){return e.filter(Boolean).join(" ")}function w(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,w),r}var E=((r=E||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),N=((a=N||{})[a.Unmount=0]="Unmount",a[a.Hidden=1]="Hidden",a);function j({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:a,visible:l=!0,name:s}){let o=I(t,e);if(l)return P(o,n,r,s);let i=null!=a?a:0;if(2&i){let{static:e=!1,...t}=o;if(e)return P(t,n,r,s)}if(1&i){let{unmount:e=!0,...t}=o;return w(e?0:1,{0:()=>null,1:()=>P({...t,hidden:!0,style:{display:"none"}},n,r,s)})}return P(o,n,r,s)}function P(e,t={},n,r){let{as:a=n,children:l,refName:s="ref",...o}=O(e,["unmount","static"]),i=void 0!==e.ref?{[s]:e.ref}:{},u="function"==typeof l?l(t):l;"className"in o&&o.className&&"function"==typeof o.className&&(o.className=o.className(t));let c={};if(t){let e=!1,n=[];for(let[r,a]of Object.entries(t))"boolean"==typeof a&&(e=!0),!0===a&&n.push(r);e&&(c["data-headlessui-state"]=n.join(" "))}if(a===g.Fragment&&Object.keys(T(o)).length>0){if(!(0,g.isValidElement)(u)||Array.isArray(u)&&u.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(o).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=u.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>y(null==e?void 0:e.className(...t),o.className):y(null==e?void 0:e.className,o.className),n=t?{className:t}:{};return(0,g.cloneElement)(u,Object.assign({},I(u.props,T(O(o,["ref"]))),c,i,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(u.ref,i.ref),n))}return(0,g.createElement)(a,Object.assign({},O(o,["ref"]),a!==g.Fragment&&i,a!==g.Fragment&&c),u)}function I(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let a of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;a(t,...r)}}});return t}function S(e){var t;return Object.assign((0,g.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function T(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function O(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}var A=Object.defineProperty,k=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,F=(e,t,n)=>(k(e,"symbol"!=typeof t?t+"":t,n),n);let R=new class{constructor(){F(this,"current",this.detect()),F(this,"handoffState","pending"),F(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},C=(e,t)=>{R.isServer?(0,g.useEffect)(e,t):(0,g.useLayoutEffect)(e,t)},D=null!=(h=g.useId)?h:function(){let e=function(){let[e,t]=(0,g.useState)(R.isHandoffComplete);return e&&!1===R.isHandoffComplete&&t(!1),(0,g.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,g.useEffect)(()=>R.handoff(),[]),e}(),[t,n]=g.useState(e?()=>R.nextId():null);return C(()=>{null===t&&n(R.nextId())},[t]),null!=t?""+t:void 0};var L=((l=L||{}).Space=" ",l.Enter="Enter",l.Escape="Escape",l.Backspace="Backspace",l.Delete="Delete",l.ArrowLeft="ArrowLeft",l.ArrowUp="ArrowUp",l.ArrowRight="ArrowRight",l.ArrowDown="ArrowDown",l.Home="Home",l.End="End",l.PageUp="PageUp",l.PageDown="PageDown",l.Tab="Tab",l);let M=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var _=((s=_||{})[s.First=1]="First",s[s.Previous=2]="Previous",s[s.Next=4]="Next",s[s.Last=8]="Last",s[s.WrapAround=16]="WrapAround",s[s.NoScroll=32]="NoScroll",s),U=((o=U||{})[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o),H=((i=H||{})[i.Previous=-1]="Previous",i[i.Next=1]="Next",i),$=((u=$||{})[u.Strict=0]="Strict",u[u.Loose=1]="Loose",u),q=((c=q||{})[c.Keyboard=0]="Keyboard",c[c.Mouse=1]="Mouse",c);function W(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),a=t(n);if(null===r||null===a)return 0;let l=r.compareDocumentPosition(a);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function B(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:a=[]}={}){var l,s,o;let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,u=Array.isArray(e)?n?W(e):e:function(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(M)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}(e);a.length>0&&u.length>1&&(u=u.filter(e=>!a.includes(e))),r=null!=r?r:i.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,u.indexOf(r))-1;if(4&t)return Math.max(0,u.indexOf(r))+1;if(8&t)return u.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&t?{preventScroll:!0}:{},m=0,p=u.length,h;do{if(m>=p||m+p<=0)return 0;let e=d+m;if(16&t)e=(e+p)%p;else{if(e<0)return 3;if(e>=p)return 1}null==(h=u[e])||h.focus(f),m+=c}while(h!==i.activeElement);return 6&t&&null!=(o=null==(s=null==(l=h)?void 0:l.matches)?void 0:s.call(l,"textarea,input"))&&o&&h.select(),2}function G(e){let t=(0,g.useRef)(e);return C(()=>{t.current=e},[e]),t}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let Z=function(e){let t=G(e);return g.useCallback((...e)=>t.current(...e),[t])},K=Symbol();function z(...e){let t=(0,g.useRef)(e);(0,g.useEffect)(()=>{t.current=e},[e]);let n=Z(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[K]))?void 0:n}function V(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}var Y=((d=Y||{})[d.None=1]="None",d[d.Focusable=2]="Focusable",d[d.Hidden=4]="Hidden",d);let X=S(function(e,t){let{features:n=1,...r}=e;return j({ourProps:{ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}},theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})});function J({onFocus:e}){let[t,n]=(0,g.useState)(!0);return t?g.createElement(X,{as:"button",type:"button",features:Y.Focusable,onFocus:t=>{t.preventDefault();let r,a=50;r=requestAnimationFrame(function t(){if(a--<=0){r&&cancelAnimationFrame(r);return}if(e()){n(!1),cancelAnimationFrame(r);return}r=requestAnimationFrame(t)})}}):null}let Q=g.createContext(null);function ee({children:e}){let t=g.useRef({groups:new Map,get(e,t){var n;let r=this.groups.get(e);r||(r=new Map,this.groups.set(e,r));let a=null!=(n=r.get(t))?n:0;return r.set(t,a+1),[Array.from(r.keys()).indexOf(t),function(){let e=r.get(t);e>1?r.set(t,e-1):r.delete(t)}]}});return g.createElement(Q.Provider,{value:t},e)}function et(e){let t=g.useContext(Q);if(!t)throw Error("You must wrap your component in a <StableCollection>");let n=function(){var e,t,n;let r=null!=(n=null==(t=null==(e=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)?void 0:e.ReactCurrentOwner)?void 0:t.current)?n:null;if(!r)return Symbol();let a=[],l=r;for(;l;)a.push(l.index),l=l.return;return"$."+a.join(".")}(),[r,a]=t.current.get(e,n);return g.useEffect(()=>a,[]),r}var en=((f=en||{})[f.Forwards=0]="Forwards",f[f.Backwards=1]="Backwards",f),er=((m=er||{})[m.Less=-1]="Less",m[m.Equal=0]="Equal",m[m.Greater=1]="Greater",m),ea=((p=ea||{})[p.SetSelectedIndex=0]="SetSelectedIndex",p[p.RegisterTab=1]="RegisterTab",p[p.UnregisterTab=2]="UnregisterTab",p[p.RegisterPanel=3]="RegisterPanel",p[p.UnregisterPanel=4]="UnregisterPanel",p);let el={0(e,t){var n;let r=W(e.tabs,e=>e.current),a=W(e.panels,e=>e.current),l=r.filter(e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))}),s={...e,tabs:r,panels:a};if(t.index<0||t.index>r.length-1){let n=w(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>w(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});return 0===l.length?s:{...s,selectedIndex:w(n,{0:()=>r.indexOf(l[0]),1:()=>r.indexOf(l[l.length-1])})}}let o=r.slice(0,t.index),i=[...r.slice(t.index),...o].find(e=>l.includes(e));if(!i)return s;let u=null!=(n=r.indexOf(i))?n:e.selectedIndex;return -1===u&&(u=e.selectedIndex),{...s,selectedIndex:u}},1(e,t){var n;if(e.tabs.includes(t.tab))return e;let r=e.tabs[e.selectedIndex],a=W([...e.tabs,t.tab],e=>e.current),l=null!=(n=a.indexOf(r))?n:e.selectedIndex;return -1===l&&(l=e.selectedIndex),{...e,tabs:a,selectedIndex:l}},2:(e,t)=>({...e,tabs:e.tabs.filter(e=>e!==t.tab)}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:W([...e.panels,t.panel],e=>e.current)},4:(e,t)=>({...e,panels:e.panels.filter(e=>e!==t.panel)})},es=(0,g.createContext)(null);function eo(e){let t=(0,g.useContext)(es);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,eo),t}return t}es.displayName="TabsDataContext";let ei=(0,g.createContext)(null);function eu(e){let t=(0,g.useContext)(ei);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,eu),t}return t}function ec(e,t){return w(t.type,el,e,t)}ei.displayName="TabsActionsContext";let ed=g.Fragment,ef=E.RenderStrategy|E.Static,em=Object.assign(S(function(e,t){var n,r;let a=D(),{id:l=`headlessui-tabs-tab-${a}`,...s}=e,{orientation:o,activation:i,selectedIndex:u,tabs:c,panels:d}=eo("Tab"),f=eu("Tab"),m=eo("Tab"),p=(0,g.useRef)(null),h=z(p,t);C(()=>f.registerTab(p),[f,p]);let b=et("tabs"),v=c.indexOf(p);-1===v&&(v=b);let x=v===u,y=Z(e=>{var t;let n=e();if(n===U.Success&&"auto"===i){let e=null==(t=R.isServer?null:p instanceof Node?p.ownerDocument:null!=p&&p.hasOwnProperty("current")&&p.current instanceof Node?p.current.ownerDocument:document)?void 0:t.activeElement,n=m.tabs.findIndex(t=>t.current===e);-1!==n&&f.change(n)}return n}),E=Z(e=>{let t=c.map(e=>e.current).filter(Boolean);if(e.key===L.Space||e.key===L.Enter){e.preventDefault(),e.stopPropagation(),f.change(v);return}switch(e.key){case L.Home:case L.PageUp:return e.preventDefault(),e.stopPropagation(),y(()=>B(t,_.First));case L.End:case L.PageDown:return e.preventDefault(),e.stopPropagation(),y(()=>B(t,_.Last))}if(y(()=>w(o,{vertical:()=>e.key===L.ArrowUp?B(t,_.Previous|_.WrapAround):e.key===L.ArrowDown?B(t,_.Next|_.WrapAround):U.Error,horizontal:()=>e.key===L.ArrowLeft?B(t,_.Previous|_.WrapAround):e.key===L.ArrowRight?B(t,_.Next|_.WrapAround):U.Error}))===U.Success)return e.preventDefault()}),N=(0,g.useRef)(!1),P=Z(()=>{var e,t;N.current||(N.current=!0,null==(e=p.current)||e.focus(),f.change(v),t=()=>{N.current=!1},"function"==typeof queueMicrotask?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e})))}),I=Z(e=>{e.preventDefault()}),S=(0,g.useMemo)(()=>({selected:x}),[x]);return j({ourProps:{ref:h,onKeyDown:E,onMouseDown:I,onClick:P,id:l,role:"tab",type:function(e,t){let[n,r]=(0,g.useState)(()=>V(e));return C(()=>{r(V(e))},[e.type,e.as]),C(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}(e,p),"aria-controls":null==(r=null==(n=d[v])?void 0:n.current)?void 0:r.id,"aria-selected":x,tabIndex:x?0:-1},theirProps:s,slot:S,defaultTag:"button",name:"Tabs.Tab"})}),{Group:S(function(e,t){let{defaultIndex:n=0,vertical:r=!1,manual:a=!1,onChange:l,selectedIndex:s=null,...o}=e,i=r?"vertical":"horizontal",u=a?"manual":"auto",c=null!==s,d=z(t),[f,m]=(0,g.useReducer)(ec,{selectedIndex:null!=s?s:n,tabs:[],panels:[]}),p=(0,g.useMemo)(()=>({selectedIndex:f.selectedIndex}),[f.selectedIndex]),h=G(l||(()=>{})),b=G(f.tabs),v=(0,g.useMemo)(()=>({orientation:i,activation:u,...f}),[i,u,f]),x=Z(e=>(m({type:1,tab:e}),()=>m({type:2,tab:e}))),y=Z(e=>(m({type:3,panel:e}),()=>m({type:4,panel:e}))),w=Z(e=>{E.current!==e&&h.current(e),c||m({type:0,index:e})}),E=G(c?e.selectedIndex:f.selectedIndex),N=(0,g.useMemo)(()=>({registerTab:x,registerPanel:y,change:w}),[]);return C(()=>{m({type:0,index:null!=s?s:n})},[s]),C(()=>{if(void 0===E.current||f.tabs.length<=0)return;let e=W(f.tabs,e=>e.current);e.some((e,t)=>f.tabs[t]!==e)&&w(e.indexOf(f.tabs[E.current]))}),g.createElement(ee,null,g.createElement(ei.Provider,{value:N},g.createElement(es.Provider,{value:v},v.tabs.length<=0&&g.createElement(J,{onFocus:()=>{var e,t;for(let n of b.current)if((null==(e=n.current)?void 0:e.tabIndex)===0)return null==(t=n.current)||t.focus(),!0;return!1}}),j({ourProps:{ref:d},theirProps:o,slot:p,defaultTag:ed,name:"Tabs"}))))}),List:S(function(e,t){let{orientation:n,selectedIndex:r}=eo("Tab.List");return j({ourProps:{ref:z(t),role:"tablist","aria-orientation":n},theirProps:e,slot:{selectedIndex:r},defaultTag:"div",name:"Tabs.List"})}),Panels:S(function(e,t){let{selectedIndex:n}=eo("Tab.Panels");return j({ourProps:{ref:z(t)},theirProps:e,slot:(0,g.useMemo)(()=>({selectedIndex:n}),[n]),defaultTag:"div",name:"Tabs.Panels"})}),Panel:S(function(e,t){var n,r,a,l;let s=D(),{id:o=`headlessui-tabs-panel-${s}`,tabIndex:i=0,...u}=e,{selectedIndex:c,tabs:d,panels:f}=eo("Tab.Panel"),m=eu("Tab.Panel"),p=(0,g.useRef)(null),h=z(p,t);C(()=>m.registerPanel(p),[m,p]);let b=et("panels"),v=f.indexOf(p);-1===v&&(v=b);let x=v===c,y=(0,g.useMemo)(()=>({selected:x}),[x]),w={ref:h,id:o,role:"tabpanel","aria-labelledby":null==(r=null==(n=d[v])?void 0:n.current)?void 0:r.id,tabIndex:x?i:-1};return x||null!=(a=u.unmount)&&!a||null!=(l=u.static)&&l?j({ourProps:w,theirProps:u,slot:y,defaultTag:"div",features:ef,visible:x,name:"Tabs.Panel"}):g.createElement(X,{as:"span",...w})})});var ep=n(6356),eh=e=>{let{image:t}=e;return(0,b.jsx)(em,{className:"relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white",children:e=>{let{selected:n}=e;return(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md",children:(0,b.jsx)(x(),{fill:!0,src:t,alt:"",className:"object-cover object-center"})}),(0,b.jsx)("span",{className:(0,ep.cn)("absolute inset-0 rounded-md ring-2 ring-offset-2",n?"ring-black":"ring-transparent")})]})}})},eb=e=>{let{images:t=[]}=e;return(0,b.jsxs)(em.Group,{as:"div",className:"flex flex-col-reverse",children:[(0,b.jsx)("div",{className:"mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none",children:(0,b.jsx)(em.List,{className:"grid grid-cols-4 gap-6",children:t.map(e=>(0,b.jsx)(eh,{image:e},e))})}),(0,b.jsx)(em.Panels,{className:"aspect-square w-full",children:t.map(e=>(0,b.jsx)(em.Panel,{children:(0,b.jsx)("div",{className:"aspect-square relative h-full w-full sm:rounded-lg overflow-hidden",children:(0,b.jsx)(x(),{fill:!0,src:e,alt:"Image",className:"object-cover object-center"})})},e))})]})}},1587:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(9268),a=n(1750);let l=(0,a.Z)("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);var s=n(6165),o=n(6096),i=n(9603),u=e=>{let{data:t}=e,n=(0,i.Z)();return(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-3xl font-bold text-gray-900",children:null==t?void 0:t.title}),(0,r.jsxs)("div",{className:"pt-2",children:[(0,r.jsx)("h2",{className:"text-2xl font-semibold text-gray-900",children:null==t?void 0:t.description}),(0,r.jsxs)("div",{className:"mt-4 flex items-baseline",children:[(0,r.jsx)("div",{className:"text-gray-900 text-lg font-semibold",children:(0,r.jsx)(s.Z,{value:null==t?void 0:t.price})}),(0,r.jsx)("div",{className:"ml-2 text-sm text-green-600 font-medium bg-green-200 px-2 py-1 rounded-full",children:"".concat(null==t?void 0:t.discountPercentage,"% off")})]}),(0,r.jsxs)("div",{className:"mt-4",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsxs)("div",{className:"text-md text-gray-900",children:["Rating: ",null==t?void 0:t.rating]}),(0,r.jsxs)("div",{className:"ml-2 text-md text-gray-500",children:["(",null==t?void 0:t.stock," in stock)"]})]}),(0,r.jsxs)("div",{className:"mt-1 text-md text-gray-500",children:["Brand: ",null==t?void 0:t.brand]}),(0,r.jsxs)("div",{className:"mt-1 text-md text-gray-500",children:["Category: ",null==t?void 0:t.category]})]})]}),(0,r.jsx)("div",{className:"mt-10 flex items-center gap-x-3",children:(0,r.jsxs)(o.Z,{onClick:()=>{n.addItem(t)},className:"flex items-center gap-x-2",children:["Add To Cart",(0,r.jsx)(l,{size:20})]})})]})}},6096:function(e,t,n){"use strict";var r=n(9268),a=n(6006),l=n(6356);let s=(0,a.forwardRef)((e,t)=>{let{className:n,children:a,disabled:s,type:o="button",...i}=e;return(0,r.jsx)("button",{type:o,className:(0,l.cn)("\n        w-auto \n        rounded-full \n        bg-black\n        border\n        border-transparent\n        px-5 \n        py-3 \n        disabled:cursor-not-allowed \n        disabled:opacity-50\n        text-white\n        font-semibold\n        hover:opacity-75\n        transition\n      ",s&&"opacity-75 cursor-not-allowed",n),disabled:s,ref:t,...i,children:a})});s.displayName="Button",t.Z=s},6165:function(e,t,n){"use strict";var r=n(9268),a=n(6006);let l=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});t.Z=e=>{let{value:t=0}=e,[n,s]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{s(!0)},[]),n)?(0,r.jsx)("div",{className:"font-semibold",children:l.format(Number(t))}):null}},9603:function(e,t,n){"use strict";var r=n(2561),a=n(8919),l=n(4475);let s=(0,r.Ue)((0,l.tJ)((e,t)=>({items:[],addItem:n=>{let r=t().items,l=r.find(e=>e.id===n.id);if(l)return(0,a.toast)("Item already in cart.");e({items:[...t().items,n]}),a.toast.success("Item added to cart.")},removeItem:n=>{e({items:[...t().items.filter(e=>e.id!==n)]}),a.toast.success("Item removed from cart.")},removeAll:()=>e({items:[]})}),{name:"cart-storage",storage:(0,l.FL)(()=>localStorage)}));t.Z=s},6356:function(e,t,n){"use strict";n.d(t,{cn:function(){return l},v5:function(){return s}});var r=n(9791),a=n(293);function l(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.m)((0,r.W)(t))}function s(e,t){if(t<1||t>5)throw Error("Invalid rating. Rating must be between 1 and 5.");return e.filter(e=>e.rating>=t&&e.rating<t+1)}}},function(e){e.O(0,[869,394,253,769,744],function(){return e(e.s=2131)}),_N_E=e.O()}]);