import{S as b,i as E,s as w,k as S,f as v,F as g,d as i,e as f,t as p,c as u,a as _,g as m,b as d,E as c,h as y}from"./vendor-f2db844d.js";function D(n){let e,s,l;return{c(){e=f("h2"),s=f("a"),l=p(n[1]),this.h()},l(t){e=u(t,"H2",{class:!0});var a=_(e);s=u(a,"A",{href:!0});var r=_(s);l=m(r,n[1]),r.forEach(i),a.forEach(i),this.h()},h(){d(s,"href",n[2]),d(e,"class","svelte-wuk6pw")},m(t,a){v(t,e,a),c(e,s),c(s,l)},p(t,a){a&2&&y(l,t[1])},d(t){t&&i(e)}}}function N(n){let e,s,l;return{c(){e=f("h3"),s=f("a"),l=p(n[1]),this.h()},l(t){e=u(t,"H3",{class:!0});var a=_(e);s=u(a,"A",{href:!0});var r=_(s);l=m(r,n[1]),r.forEach(i),a.forEach(i),this.h()},h(){d(s,"href",n[2]),d(e,"class","svelte-wuk6pw")},m(t,a){v(t,e,a),c(e,s),c(s,l)},p(t,a){a&2&&y(l,t[1])},d(t){t&&i(e)}}}function P(n){let e;function s(a,r){return a[0]?N:D}let l=s(n),t=l(n);return{c(){t.c(),e=S()},l(a){t.l(a),e=S()},m(a,r){t.m(a,r),v(a,e,r)},p(a,[r]){l===(l=s(a))&&t?t.p(a,r):(t.d(1),t=l(a),t&&(t.c(),t.m(e.parentNode,e)))},i:g,o:g,d(a){t.d(a),a&&i(e)}}}function C(n,e,s){let{slug:l=""}=e,{title:t}=e;t.toLowerCase().replace(/[^a-zA-Z ]/g,"").replace(/\s/g,"-");const a=l&&`/posts/${l}`;return n.$$set=r=>{"slug"in r&&s(0,l=r.slug),"title"in r&&s(1,t=r.title)},[l,t,a]}class T extends b{constructor(e){super();E(this,e,C,P,w,{slug:0,title:1})}}function H(n){let e,s,l,t,a,r;return{c(){e=f("p"),s=f("span"),l=p(n[1]),t=p(` por
	`),a=f("span"),r=p(n[0]),this.h()},l(h){e=u(h,"P",{class:!0});var o=_(e);s=u(o,"SPAN",{class:!0});var A=_(s);l=m(A,n[1]),A.forEach(i),t=m(o,` por
	`),a=u(o,"SPAN",{class:!0});var k=_(a);r=m(k,n[0]),k.forEach(i),o.forEach(i),this.h()},h(){d(s,"class","date"),d(a,"class","author"),d(e,"class","svelte-1289t3u")},m(h,o){v(h,e,o),c(e,s),c(s,l),c(e,t),c(e,a),c(a,r)},p(h,[o]){o&1&&y(r,h[0])},i:g,o:g,d(h){h&&i(e)}}}function L(n,e,s){let{author:l}=e,{date:t}=e;const a=new Date(t).toLocaleDateString("pt-BR");return n.$$set=r=>{"author"in r&&s(0,l=r.author),"date"in r&&s(2,t=r.date)},[l,a,t]}class j extends b{constructor(e){super();E(this,e,L,H,w,{author:0,date:2})}}export{T as A,j as a};