import{p as b,l as T,n as E,au as re,x as D,q as ce,az as U,aA as F,Z as _,j as c,V as z,s as j,O as X,W as Y,k as V,$ as ve,Y as de,aB as fe,aC as me,g as J,a as A,J as ye,L as pe,M as ge}from"./index-a4f83845.js";const G=b({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function Q(e){const s=T("useRender");s.render=e}function he(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const t=E(),l=E();if(re){const n=new ResizeObserver(o=>{e==null||e(o,n),o.length&&(s==="content"?l.value=o[0].contentRect:l.value=o[0].target.getBoundingClientRect())});D(()=>{n.disconnect()}),ce(t,(o,i)=>{i&&(n.unobserve(U(i)),l.value=void 0),o&&n.observe(U(o))},{flush:"post"})}return{resizeRef:t,contentRect:F(l)}}const M=Symbol.for("vuetify:layout"),ee=Symbol.for("vuetify:layout-item"),W=1e3,be=b({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ae=b({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Ie(){const e=_(M);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Me(e){const s=_(M);if(!s)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${de()}`,l=T("useLayoutItem");Y(ee,{id:t});const n=j(!1);fe(()=>n.value=!0),me(()=>n.value=!1);const{layoutItemStyles:o,layoutItemScrimStyles:i}=s.register(l,{...e,active:c(()=>n.value?!1:e.active.value),id:t});return D(()=>s.unregister(t)),{layoutItemStyles:o,layoutRect:s.layoutRect,layoutItemScrimStyles:i}}const Se=(e,s,t,l)=>{let n={top:0,left:0,right:0,bottom:0};const o=[{id:"",layer:{...n}}];for(const i of e){const m=s.get(i),p=t.get(i),g=l.get(i);if(!m||!p||!g)continue;const I={...n,[m.value]:parseInt(n[m.value],10)+(g.value?parseInt(p.value,10):0)};o.push({id:i,layer:I}),n=I}return o};function xe(e){const s=_(M,null),t=c(()=>s?s.rootZIndex.value-100:W),l=E([]),n=z(new Map),o=z(new Map),i=z(new Map),m=z(new Map),p=z(new Map),{resizeRef:g,contentRect:I}=he(),te=c(()=>{const u=new Map,d=e.overlaps??[];for(const a of d.filter(v=>v.includes(":"))){const[v,r]=a.split(":");if(!l.value.includes(v)||!l.value.includes(r))continue;const y=n.get(v),h=n.get(r),w=o.get(v),L=o.get(r);!y||!h||!w||!L||(u.set(r,{position:y.value,amount:parseInt(w.value,10)}),u.set(v,{position:h.value,amount:-parseInt(L.value,10)}))}return u}),S=c(()=>{const u=[...new Set([...i.values()].map(a=>a.value))].sort((a,v)=>a-v),d=[];for(const a of u){const v=l.value.filter(r=>{var y;return((y=i.get(r))==null?void 0:y.value)===a});d.push(...v)}return Se(d,n,o,m)}),H=c(()=>!Array.from(p.values()).some(u=>u.value)),x=c(()=>S.value[S.value.length-1].layer),ne=c(()=>({"--v-layout-left":V(x.value.left),"--v-layout-right":V(x.value.right),"--v-layout-top":V(x.value.top),"--v-layout-bottom":V(x.value.bottom),...H.value?void 0:{transition:"none"}})),R=c(()=>S.value.slice(1).map((u,d)=>{let{id:a}=u;const{layer:v}=S.value[d],r=o.get(a),y=n.get(a);return{id:a,...v,size:Number(r.value),position:y.value}})),N=u=>R.value.find(d=>d.id===u),B=T("createLayout"),k=j(!1);X(()=>{k.value=!0}),Y(M,{register:(u,d)=>{let{id:a,order:v,position:r,layoutSize:y,elementSize:h,active:w,disableTransitions:L,absolute:se}=d;i.set(a,v),n.set(a,r),o.set(a,y),m.set(a,w),L&&p.set(a,L);const Z=ve(ee,B==null?void 0:B.vnode).indexOf(u);Z>-1?l.value.splice(Z,0,a):l.value.push(a);const q=c(()=>R.value.findIndex($=>$.id===a)),C=c(()=>t.value+S.value.length*2-q.value*2),le=c(()=>{const $=r.value==="left"||r.value==="right",O=r.value==="right",ie=r.value==="bottom",K={[r.value]:0,zIndex:C.value,transform:`translate${$?"X":"Y"}(${(w.value?0:-110)*(O||ie?-1:1)}%)`,position:se.value||t.value!==W?"absolute":"fixed",...H.value?void 0:{transition:"none"}};if(!k.value)return K;const f=R.value[q.value];if(!f)throw new Error(`[Vuetify] Could not find layout item "${a}"`);const P=te.value.get(a);return P&&(f[P.position]+=P.amount),{...K,height:$?`calc(100% - ${f.top}px - ${f.bottom}px)`:h.value?`${h.value}px`:void 0,left:O?void 0:`${f.left}px`,right:O?`${f.right}px`:void 0,top:r.value!=="bottom"?`${f.top}px`:void 0,bottom:r.value!=="top"?`${f.bottom}px`:void 0,width:$?h.value?`${h.value}px`:void 0:`calc(100% - ${f.left}px - ${f.right}px)`}}),ue=c(()=>({zIndex:C.value-1}));return{layoutItemStyles:le,layoutItemScrimStyles:ue,zIndex:C}},unregister:u=>{i.delete(u),n.delete(u),o.delete(u),m.delete(u),p.delete(u),l.value=l.value.filter(d=>d!==u)},mainRect:x,mainStyles:ne,getLayoutItem:N,items:R,layoutRect:I,rootZIndex:t});const oe=c(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),ae=c(()=>({zIndex:s?t.value:void 0,position:s?"relative":void 0,overflow:s?"hidden":void 0}));return{layoutClasses:oe,layoutStyles:ae,getLayoutItem:N,items:R,layoutRect:I,layoutRef:g}}function Re(){const e=j(!1);return X(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:c(()=>e.value?void 0:{transition:"none !important"}),isBooted:F(e)}}const we=b({tag:{type:String,default:"div"}},"tag"),Le=b({scrollable:Boolean,...G(),...we({tag:"main"})},"VMain"),Be=J()({name:"VMain",props:Le(),setup(e,s){let{slots:t}=s;const{mainStyles:l}=Ie(),{ssrBootStyles:n}=Re();return Q(()=>A(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[l.value,n.value,e.style]},{default:()=>{var o,i;return[e.scrollable?A("div",{class:"v-main__scroller"},[(o=t.default)==null?void 0:o.call(t)]):(i=t.default)==null?void 0:i.call(t)]}})),{}}});const $e=b({...G(),...be({fullHeight:!0}),...ye()},"VApp"),Ce=J()({name:"VApp",props:$e(),setup(e,s){let{slots:t}=s;const l=pe(e),{layoutClasses:n,getLayoutItem:o,items:i,layoutRef:m}=xe(e),{rtlClasses:p}=ge();return Q(()=>{var g;return A("div",{ref:m,class:["v-application",l.themeClasses.value,n.value,p.value,e.class],style:[e.style]},[A("div",{class:"v-application__wrap"},[(g=t.default)==null?void 0:g.call(t)])])}),{getLayoutItem:o,items:i,theme:l}}});export{Be as V,Ce as a,we as b,Ae as c,Re as d,Me as e,he as f,G as m,Q as u};
