function h(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function v(t){return t()}function z(){return Object.create(null)}function m(t){t.forEach(v)}function G(t){return typeof t=="function"}function J(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let b;function lt(t,n){return b||(b=document.createElement("a")),b.href=n,t===b.href}function K(t){return Object.keys(t).length===0}function ut(t,n,e,r){if(t){const c=B(t,n,e,r);return t[0](c)}}function B(t,n,e,r){return t[1]&&r?I(e.ctx.slice(),t[1](r(n))):e.ctx}function st(t,n,e,r){if(t[2]&&r){const c=t[2](r(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],o=Math.max(n.dirty.length,c.length);for(let l=0;l<o;l+=1)s[l]=n.dirty[l]|c[l];return s}return n.dirty|c}return n.dirty}function ft(t,n,e,r,c,s){if(c){const o=B(n,e,r,s);t.p(o,c)}}function at(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}let $=!1;function P(){$=!0}function W(){$=!1}function Q(t,n,e,r){for(;t<n;){const c=t+(n-t>>1);e(c)<=r?t=c+1:n=c}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&i.push(a)}n=i}const e=new Int32Array(n.length+1),r=new Int32Array(n.length);e[0]=-1;let c=0;for(let i=0;i<n.length;i++){const u=n[i].claim_order,a=(c>0&&n[e[c]].claim_order<=u?c+1:Q(1,c,x=>n[e[x]].claim_order,u))-1;r[i]=e[a]+1;const f=a+1;e[f]=i,c=Math.max(f,c)}const s=[],o=[];let l=n.length-1;for(let i=e[c]+1;i!=0;i=r[i-1]){for(s.push(n[i-1]);l>=i;l--)o.push(n[l]);l--}for(;l>=0;l--)o.push(n[l]);s.reverse(),o.sort((i,u)=>i.claim_order-u.claim_order);for(let i=0,u=0;i<o.length;i++){for(;u<s.length&&o[i].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(o[i],a)}}function U(t,n){if($){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function dt(t,n,e){$&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode.removeChild(t)}function _t(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function X(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function ht(){return A(" ")}function mt(){return A("")}function pt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,n,e,r,c=!1){Z(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(n(l)){const i=e(l);return i===void 0?t.splice(o,1):t[o]=i,c||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(n(l)){const i=e(l);return i===void 0?t.splice(o,1):t[o]=i,c?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function tt(t,n,e,r){return T(t,c=>c.nodeName===n,c=>{const s=[];for(let o=0;o<c.attributes.length;o++){const l=c.attributes[o];e[l.name]||s.push(l.name)}s.forEach(o=>c.removeAttribute(o))},()=>r(n))}function yt(t,n,e){return tt(t,n,e,X)}function nt(t,n){return T(t,e=>e.nodeType===3,e=>{const r=""+n;if(e.data.startsWith(r)){if(e.data.length!==r.length)return e.splitText(r.length)}else e.data=r},()=>A(n),!0)}function gt(t){return nt(t," ")}function xt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function bt(t,n,e){t.classList[e?"add":"remove"](n)}function $t(t,n=document.body){return Array.from(n.querySelectorAll(t))}let p;function y(t){p=t}function S(){if(!p)throw new Error("Function called outside component initialization");return p}function wt(t){S().$$.on_mount.push(t)}function kt(t){S().$$.after_update.push(t)}function Et(t,n){S().$$.context.set(t,n)}const g=[],L=[],w=[],O=[],D=Promise.resolve();let j=!1;function F(){j||(j=!0,D.then(H))}function At(){return F(),D}function N(t){w.push(t)}const q=new Set;let k=0;function H(){const t=p;do{for(;k<g.length;){const n=g[k];k++,y(n),et(n.$$)}for(y(null),g.length=0,k=0;L.length;)L.pop()();for(let n=0;n<w.length;n+=1){const e=w[n];q.has(e)||(q.add(e),e())}w.length=0}while(g.length);for(;O.length;)O.pop()();j=!1,q.clear(),y(t)}function et(t){if(t.fragment!==null){t.update(),m(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const E=new Set;let d;function St(){d={r:0,c:[],p:d}}function jt(){d.r||m(d.c),d=d.p}function it(t,n){t&&t.i&&(E.delete(t),t.i(n))}function Nt(t,n,e,r){if(t&&t.o){if(E.has(t))return;E.add(t),d.c.push(()=>{E.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}function qt(t,n){const e={},r={},c={$$scope:1};let s=t.length;for(;s--;){const o=t[s],l=n[s];if(l){for(const i in o)i in l||(r[i]=1);for(const i in l)c[i]||(e[i]=l[i],c[i]=1);t[s]=l}else for(const i in o)c[i]=1}for(const o in r)o in e||(e[o]=void 0);return e}function Ct(t){return typeof t=="object"&&t!==null?t:{}}function Mt(t){t&&t.c()}function vt(t,n){t&&t.l(n)}function rt(t,n,e,r){const{fragment:c,on_mount:s,on_destroy:o,after_update:l}=t.$$;c&&c.m(n,e),r||N(()=>{const i=s.map(v).filter(G);o?o.push(...i):m(i),t.$$.on_mount=[]}),l.forEach(N)}function ct(t,n){const e=t.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){t.$$.dirty[0]===-1&&(g.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function zt(t,n,e,r,c,s,o,l=[-1]){const i=p;y(t);const u=t.$$={fragment:null,ctx:null,props:s,update:h,not_equal:c,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(i?i.$$.context:[])),callbacks:z(),dirty:l,skip_bound:!1,root:n.target||i.$$.root};o&&o(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(f,x,...C)=>{const M=C.length?C[0]:x;return u.ctx&&c(u.ctx[f],u.ctx[f]=M)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](M),a&&ot(t,f)),x}):[],u.update(),a=!0,m(u.before_update),u.fragment=r?r(u.ctx):!1,n.target){if(n.hydrate){P();const f=Y(n.target);u.fragment&&u.fragment.l(f),f.forEach(V)}else u.fragment&&u.fragment.c();n.intro&&it(t.$$.fragment),rt(t,n.target,n.anchor,n.customElement),W(),H()}y(i)}class Bt{$destroy(){ct(this,1),this.$destroy=h}$on(n,e){const r=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return r.push(e),()=>{const c=r.indexOf(e);c!==-1&&r.splice(c,1)}}$set(n){this.$$set&&!K(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const _=[];function Tt(t,n=h){let e;const r=new Set;function c(l){if(J(t,l)&&(t=l,e)){const i=!_.length;for(const u of r)u[1](),_.push(u,t);if(i){for(let u=0;u<_.length;u+=2)_[u][0](_[u+1]);_.length=0}}}function s(l){c(l(t))}function o(l,i=h){const u=[l,i];return r.add(u),r.size===1&&(e=n(c)||h),l(t),()=>{r.delete(u),r.size===0&&(e(),e=null)}}return{set:c,update:s,subscribe:o}}export{ct as A,I as B,Tt as C,At as D,U as E,h as F,lt as G,bt as H,_t as I,ut as J,ft as K,at as L,st as M,$t as N,Bt as S,Y as a,pt as b,yt as c,V as d,X as e,dt as f,nt as g,xt as h,zt as i,ht as j,mt as k,gt as l,St as m,Nt as n,jt as o,it as p,Et as q,kt as r,J as s,A as t,wt as u,Mt as v,vt as w,rt as x,qt as y,Ct as z};