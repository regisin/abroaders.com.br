function m(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function z(t){return t()}function M(){return Object.create(null)}function g(t){t.forEach(z)}function G(t){return typeof t=="function"}function J(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function ut(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function K(t){return Object.keys(t).length===0}function st(t,n,e,i){if(t){const c=B(t,n,e,i);return t[0](c)}}function B(t,n,e,i){return t[1]&&i?I(e.ctx.slice(),t[1](i(n))):e.ctx}function ft(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],o=Math.max(n.dirty.length,c.length);for(let l=0;l<o;l+=1)s[l]=n.dirty[l]|c[l];return s}return n.dirty|c}return n.dirty}function at(t,n,e,i,c,s){if(c){const o=B(n,e,i,s);t.p(o,c)}}function _t(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let S=!1;function Q(){S=!0}function R(){S=!1}function U(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function V(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const u=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=u?c+1:U(1,c,b=>n[e[b]].claim_order,u))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const s=[],o=[];let l=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(s.push(n[r-1]);l>=r;l--)o.push(n[l]);l--}for(;l>=0;l--)o.push(n[l]);s.reverse(),o.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<o.length;r++){for(;u<s.length&&o[r].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(o[r],a)}}function W(t,n){if(S){for(V(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function dt(t,n,e){S&&!e?W(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function X(t){t.parentNode.removeChild(t)}function ht(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function Y(t){return document.createElement(t)}function Z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function mt(){return j(" ")}function pt(){return j("")}function yt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function gt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function bt(t){return t===""?null:+t}function tt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,n,e,i,c=!1){nt(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(n(l)){const r=e(l);return r===void 0?t.splice(o,1):t[o]=r,c||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(n(l)){const r=e(l);return r===void 0?t.splice(o,1):t[o]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function P(t,n,e,i){return O(t,c=>c.nodeName===n,c=>{const s=[];for(let o=0;o<c.attributes.length;o++){const l=c.attributes[o];e[l.name]||s.push(l.name)}s.forEach(o=>c.removeAttribute(o))},()=>i(n))}function xt(t,n,e){return P(t,n,e,Y)}function wt(t,n,e){return P(t,n,e,Z)}function et(t,n){return O(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function $t(t){return et(t," ")}function Et(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function St(t,n){t.value=n==null?"":n}function kt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function At(t,n,e){t.classList[e?"add":"remove"](n)}function Nt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let y;function p(t){y=t}function v(){if(!y)throw new Error("Function called outside component initialization");return y}function jt(t){v().$$.on_mount.push(t)}function vt(t){v().$$.after_update.push(t)}function qt(t,n){v().$$.context.set(t,n)}const h=[],L=[],$=[],T=[],D=Promise.resolve();let A=!1;function F(){A||(A=!0,D.then(H))}function Ct(){return F(),D}function N(t){$.push(t)}const k=new Set;let w=0;function H(){const t=y;do{for(;w<h.length;){const n=h[w];w++,p(n),it(n.$$)}for(p(null),h.length=0,w=0;L.length;)L.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];k.has(e)||(k.add(e),e())}$.length=0}while(h.length);for(;T.length;)T.pop()();A=!1,k.clear(),p(t)}function it(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const E=new Set;let _;function Mt(){_={r:0,c:[],p:_}}function Lt(){_.r||g(_.c),_=_.p}function rt(t,n){t&&t.i&&(E.delete(t),t.i(n))}function Tt(t,n,e,i){if(t&&t.o){if(E.has(t))return;E.add(t),_.c.push(()=>{E.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function zt(t,n){const e={},i={},c={$$scope:1};let s=t.length;for(;s--;){const o=t[s],l=n[s];if(l){for(const r in o)r in l||(i[r]=1);for(const r in l)c[r]||(e[r]=l[r],c[r]=1);t[s]=l}else for(const r in o)c[r]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Bt(t){return typeof t=="object"&&t!==null?t:{}}function Ot(t){t&&t.c()}function Pt(t,n){t&&t.l(n)}function ct(t,n,e,i){const{fragment:c,on_mount:s,on_destroy:o,after_update:l}=t.$$;c&&c.m(n,e),i||N(()=>{const r=s.map(z).filter(G);o?o.push(...r):g(r),t.$$.on_mount=[]}),l.forEach(N)}function ot(t,n){const e=t.$$;e.fragment!==null&&(g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function lt(t,n){t.$$.dirty[0]===-1&&(h.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Dt(t,n,e,i,c,s,o,l=[-1]){const r=y;p(t);const u=t.$$={fragment:null,ctx:null,props:s,update:m,not_equal:c,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:M(),dirty:l,skip_bound:!1,root:n.target||r.$$.root};o&&o(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(f,b,...q)=>{const C=q.length?q[0]:b;return u.ctx&&c(u.ctx[f],u.ctx[f]=C)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](C),a&&lt(t,f)),b}):[],u.update(),a=!0,g(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){Q();const f=tt(n.target);u.fragment&&u.fragment.l(f),f.forEach(X)}else u.fragment&&u.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),R(),H()}p(r)}class Ft{$destroy(){ot(this,1),this.$destroy=m}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!K(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const d=[];function Ht(t,n=m){let e;const i=new Set;function c(l){if(J(t,l)&&(t=l,e)){const r=!d.length;for(const u of i)u[1](),d.push(u,t);if(r){for(let u=0;u<d.length;u+=2)d[u][0](d[u+1]);d.length=0}}}function s(l){c(l(t))}function o(l,r=m){const u=[l,r];return i.add(u),i.size===1&&(e=n(c)||m),l(t),()=>{i.delete(u),i.size===0&&(e(),e=null)}}return{set:c,update:s,subscribe:o}}export{Bt as A,ot as B,I as C,Ht as D,Ct as E,W as F,m as G,ut as H,At as I,ht as J,Z as K,wt as L,st as M,Nt as N,at as O,_t as P,ft as Q,St as R,Ft as S,yt as T,bt as U,g as V,tt as a,gt as b,xt as c,X as d,Y as e,kt as f,dt as g,et as h,Dt as i,Et as j,mt as k,pt as l,$t as m,Mt as n,Tt as o,Lt as p,rt as q,qt as r,J as s,j as t,vt as u,jt as v,Ot as w,Pt as x,ct as y,zt as z};