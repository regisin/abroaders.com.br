import{S as V,i as y,s as H,e as k,c as E,a as d,d as o,b as r,g as z,F as g,G as M,t as G,h as N,j as O,H as P,I as J,J as x,K as C,L as j,k as B,m as A,M as $,w as I,x as D,y as F,N as ee,O as te,P as ae,q,o as S,B as R}from"../chunks/vendor-0b80c03d.js";function le(f){let e,t,i=f[0].title+"",l;return{c(){e=k("h1"),t=k("a"),l=G(i),this.h()},l(a){e=E(a,"H1",{});var s=d(e);t=E(s,"A",{href:!0});var u=d(t);l=N(u,i),u.forEach(o),s.forEach(o),this.h()},h(){r(t,"href","/")},m(a,s){z(a,e,s),g(e,t),g(t,l)},p(a,s){s&1&&i!==(i=a[0].title+"")&&O(l,i)},d(a){a&&o(e)}}}function re(f){let e,t,i,l;return{c(){e=k("a"),t=k("img"),this.h()},l(a){e=E(a,"A",{href:!0});var s=d(e);t=E(s,"IMG",{src:!0,alt:!0}),s.forEach(o),this.h()},h(){P(t.src,i=f[0].url)||r(t,"src",i),r(t,"alt",l=f[0].title),r(e,"href","/")},m(a,s){z(a,e,s),g(e,t)},p(a,s){s&1&&!P(t.src,i=a[0].url)&&r(t,"src",i),s&1&&l!==(l=a[0].title)&&r(t,"alt",l)},d(a){a&&o(e)}}}function ie(f){let e,t;function i(s,u){return s[0].url?re:le}let l=i(f),a=l(f);return{c(){e=k("div"),t=k("div"),a.c(),this.h()},l(s){e=E(s,"DIV",{id:!0,class:!0});var u=d(e);t=E(u,"DIV",{});var c=d(t);a.l(c),c.forEach(o),u.forEach(o),this.h()},h(){r(e,"id","hero"),r(e,"class","svelte-1qnf8h1")},m(s,u){z(s,e,u),g(e,t),a.m(t,null)},p(s,[u]){l===(l=i(s))&&a?a.p(s,u):(a.d(1),a=l(s),a&&(a.c(),a.m(t,null)))},i:M,o:M,d(s){s&&o(e),a.d()}}}function se(f,e,t){let{hero:i}=e;return f.$$set=l=>{"hero"in l&&t(0,i=l.hero)},[i]}class fe extends V{constructor(e){super();y(this,e,se,ie,H,{hero:0})}}function K(f,e,t){const i=f.slice();return i[2]=e[t],i}function L(f){let e,t=f[2].title+"",i,l;return{c(){e=k("a"),i=G(t),this.h()},l(a){e=E(a,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var s=d(e);i=N(s,t),s.forEach(o),this.h()},h(){r(e,"sveltekit:prefetch",""),r(e,"href",l=f[2].url),r(e,"class","svelte-8f7rm"),J(e,"active",f[1]===f[2].url)},m(a,s){z(a,e,s),g(e,i)},p(a,s){s&1&&t!==(t=a[2].title+"")&&O(i,t),s&1&&l!==(l=a[2].url)&&r(e,"href",l),s&3&&J(e,"active",a[1]===a[2].url)},d(a){a&&o(e)}}}function ne(f){let e,t,i=f[0],l=[];for(let a=0;a<i.length;a+=1)l[a]=L(K(f,i,a));return{c(){e=k("header"),t=k("nav");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=E(a,"HEADER",{class:!0});var s=d(e);t=E(s,"NAV",{});var u=d(t);for(let c=0;c<l.length;c+=1)l[c].l(u);u.forEach(o),s.forEach(o),this.h()},h(){r(e,"class","svelte-8f7rm")},m(a,s){z(a,e,s),g(e,t);for(let u=0;u<l.length;u+=1)l[u].m(t,null)},p(a,[s]){if(s&3){i=a[0];let u;for(u=0;u<i.length;u+=1){const c=K(a,i,u);l[u]?l[u].p(c,s):(l[u]=L(c),l[u].c(),l[u].m(t,null))}for(;u<l.length;u+=1)l[u].d(1);l.length=i.length}},i:M,o:M,d(a){a&&o(e),x(l,a)}}}function oe(f,e,t){let{items:i}=e,{path:l}=e;return f.$$set=a=>{"items"in a&&t(0,i=a.items),"path"in a&&t(1,l=a.path)},[i,l]}class ue extends V{constructor(e){super();y(this,e,oe,ne,H,{items:0,path:1})}}function T(f){let e,t,i;return{c(){e=k("a"),t=C("svg"),i=C("path"),this.h()},l(l){e=E(l,"A",{href:!0,class:!0});var a=d(e);t=j(a,"svg",{"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,class:!0,role:!0,xmlns:!0,viewBox:!0});var s=d(t);i=j(s,"path",{fill:!0,d:!0}),d(i).forEach(o),s.forEach(o),a.forEach(o),this.h()},h(){r(i,"fill","currentColor"),r(i,"d","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"),r(t,"aria-hidden","true"),r(t,"focusable","false"),r(t,"data-prefix","fab"),r(t,"data-icon","facebook"),r(t,"class","svg-inline--fa fa-facebook svelte-jbui8i"),r(t,"role","img"),r(t,"xmlns","http://www.w3.org/2000/svg"),r(t,"viewBox","0 0 512 512"),r(e,"href",f[0]),r(e,"class","svelte-jbui8i")},m(l,a){z(l,e,a),g(e,t),g(t,i)},p(l,a){a&1&&r(e,"href",l[0])},d(l){l&&o(e)}}}function Q(f){let e,t,i;return{c(){e=k("a"),t=C("svg"),i=C("path"),this.h()},l(l){e=E(l,"A",{href:!0,class:!0});var a=d(e);t=j(a,"svg",{"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,class:!0,role:!0,xmlns:!0,viewBox:!0});var s=d(t);i=j(s,"path",{fill:!0,d:!0}),d(i).forEach(o),s.forEach(o),a.forEach(o),this.h()},h(){r(i,"fill","currentColor"),r(i,"d","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"),r(t,"aria-hidden","true"),r(t,"focusable","false"),r(t,"data-prefix","fab"),r(t,"data-icon","twitter"),r(t,"class","svg-inline--fa fa-twitter svelte-jbui8i"),r(t,"role","img"),r(t,"xmlns","http://www.w3.org/2000/svg"),r(t,"viewBox","0 0 512 512"),r(e,"href",f[4]),r(e,"class","svelte-jbui8i")},m(l,a){z(l,e,a),g(e,t),g(t,i)},p(l,a){a&16&&r(e,"href",l[4])},d(l){l&&o(e)}}}function U(f){let e,t,i;return{c(){e=k("a"),t=C("svg"),i=C("path"),this.h()},l(l){e=E(l,"A",{href:!0,class:!0});var a=d(e);t=j(a,"svg",{"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,class:!0,role:!0,xmlns:!0,viewBox:!0});var s=d(t);i=j(s,"path",{fill:!0,d:!0}),d(i).forEach(o),s.forEach(o),a.forEach(o),this.h()},h(){r(i,"fill","currentColor"),r(i,"d","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"),r(t,"aria-hidden","true"),r(t,"focusable","false"),r(t,"data-prefix","fab"),r(t,"data-icon","google"),r(t,"class","svg-inline--fa fa-google svelte-jbui8i"),r(t,"role","img"),r(t,"xmlns","http://www.w3.org/2000/svg"),r(t,"viewBox","0 0 488 512"),r(e,"href",f[5]),r(e,"class","svelte-jbui8i")},m(l,a){z(l,e,a),g(e,t),g(t,i)},p(l,a){a&32&&r(e,"href",l[5])},d(l){l&&o(e)}}}function W(f){let e,t,i;return{c(){e=k("a"),t=C("svg"),i=C("path"),this.h()},l(l){e=E(l,"A",{href:!0,class:!0});var a=d(e);t=j(a,"svg",{"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,class:!0,role:!0,xmlns:!0,viewBox:!0});var s=d(t);i=j(s,"path",{fill:!0,d:!0}),d(i).forEach(o),s.forEach(o),a.forEach(o),this.h()},h(){r(i,"fill","currentColor"),r(i,"d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"),r(t,"aria-hidden","true"),r(t,"focusable","false"),r(t,"data-prefix","fab"),r(t,"data-icon","instagram"),r(t,"class","svg-inline--fa fa-instagram svelte-jbui8i"),r(t,"role","img"),r(t,"xmlns","http://www.w3.org/2000/svg"),r(t,"viewBox","0 0 448 512"),r(e,"href",f[1]),r(e,"class","svelte-jbui8i")},m(l,a){z(l,e,a),g(e,t),g(t,i)},p(l,a){a&2&&r(e,"href",l[1])},d(l){l&&o(e)}}}function X(f){let e,t,i;return{c(){e=k("a"),t=C("svg"),i=C("path"),this.h()},l(l){e=E(l,"A",{href:!0,class:!0});var a=d(e);t=j(a,"svg",{"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,class:!0,role:!0,xmlns:!0,viewBox:!0});var s=d(t);i=j(s,"path",{fill:!0,d:!0}),d(i).forEach(o),s.forEach(o),a.forEach(o),this.h()},h(){r(i,"fill","currentColor"),r(i,"d","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"),r(t,"aria-hidden","true"),r(t,"focusable","false"),r(t,"data-prefix","fab"),r(t,"data-icon","linkedin-in"),r(t,"class","svg-inline--fa fa-linkedin-in svelte-jbui8i"),r(t,"role","img"),r(t,"xmlns","http://www.w3.org/2000/svg"),r(t,"viewBox","0 0 448 512"),r(e,"href",f[2]),r(e,"class","svelte-jbui8i")},m(l,a){z(l,e,a),g(e,t),g(t,i)},p(l,a){a&4&&r(e,"href",l[2])},d(l){l&&o(e)}}}function Y(f){let e,t,i;return{c(){e=k("a"),t=C("svg"),i=C("path"),this.h()},l(l){e=E(l,"A",{href:!0,class:!0});var a=d(e);t=j(a,"svg",{"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,class:!0,role:!0,xmlns:!0,viewBox:!0});var s=d(t);i=j(s,"path",{fill:!0,d:!0}),d(i).forEach(o),s.forEach(o),a.forEach(o),this.h()},h(){r(i,"fill","currentColor"),r(i,"d","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"),r(t,"aria-hidden","true"),r(t,"focusable","false"),r(t,"data-prefix","fab"),r(t,"data-icon","github"),r(t,"class","svg-inline--fa fa-github svelte-jbui8i"),r(t,"role","img"),r(t,"xmlns","http://www.w3.org/2000/svg"),r(t,"viewBox","0 0 496 512"),r(e,"href",f[6]),r(e,"class","svelte-jbui8i")},m(l,a){z(l,e,a),g(e,t),g(t,i)},p(l,a){a&64&&r(e,"href",l[6])},d(l){l&&o(e)}}}function Z(f){let e,t,i;return{c(){e=k("a"),t=C("svg"),i=C("path"),this.h()},l(l){e=E(l,"A",{href:!0,class:!0});var a=d(e);t=j(a,"svg",{"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,class:!0,role:!0,xmlns:!0,viewBox:!0});var s=d(t);i=j(s,"path",{fill:!0,d:!0}),d(i).forEach(o),s.forEach(o),a.forEach(o),this.h()},h(){r(i,"fill","currentColor"),r(i,"d","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"),r(t,"aria-hidden","true"),r(t,"focusable","false"),r(t,"data-prefix","fab"),r(t,"data-icon","youtube"),r(t,"class","svg-inline--fa fa-youtube svelte-jbui8i"),r(t,"role","img"),r(t,"xmlns","http://www.w3.org/2000/svg"),r(t,"viewBox","0 0 576 512"),r(e,"href",f[3]),r(e,"class","svelte-jbui8i")},m(l,a){z(l,e,a),g(e,t),g(t,i)},p(l,a){a&8&&r(e,"href",l[3])},d(l){l&&o(e)}}}function ce(f){let e,t,i,l,a,s,u,c=f[0]&&T(f),b=f[4]&&Q(f),h=f[5]&&U(f),_=f[1]&&W(f),n=f[2]&&X(f),v=f[6]&&Y(f),w=f[3]&&Z(f);return{c(){e=k("footer"),c&&c.c(),t=B(),b&&b.c(),i=B(),h&&h.c(),l=B(),_&&_.c(),a=B(),n&&n.c(),s=B(),v&&v.c(),u=B(),w&&w.c(),this.h()},l(m){e=E(m,"FOOTER",{class:!0});var p=d(e);c&&c.l(p),t=A(p),b&&b.l(p),i=A(p),h&&h.l(p),l=A(p),_&&_.l(p),a=A(p),n&&n.l(p),s=A(p),v&&v.l(p),u=A(p),w&&w.l(p),p.forEach(o),this.h()},h(){r(e,"class","svelte-jbui8i")},m(m,p){z(m,e,p),c&&c.m(e,null),g(e,t),b&&b.m(e,null),g(e,i),h&&h.m(e,null),g(e,l),_&&_.m(e,null),g(e,a),n&&n.m(e,null),g(e,s),v&&v.m(e,null),g(e,u),w&&w.m(e,null)},p(m,[p]){m[0]?c?c.p(m,p):(c=T(m),c.c(),c.m(e,t)):c&&(c.d(1),c=null),m[4]?b?b.p(m,p):(b=Q(m),b.c(),b.m(e,i)):b&&(b.d(1),b=null),m[5]?h?h.p(m,p):(h=U(m),h.c(),h.m(e,l)):h&&(h.d(1),h=null),m[1]?_?_.p(m,p):(_=W(m),_.c(),_.m(e,a)):_&&(_.d(1),_=null),m[2]?n?n.p(m,p):(n=X(m),n.c(),n.m(e,s)):n&&(n.d(1),n=null),m[6]?v?v.p(m,p):(v=Y(m),v.c(),v.m(e,u)):v&&(v.d(1),v=null),m[3]?w?w.p(m,p):(w=Z(m),w.c(),w.m(e,null)):w&&(w.d(1),w=null)},i:M,o:M,d(m){m&&o(e),c&&c.d(),b&&b.d(),h&&h.d(),_&&_.d(),n&&n.d(),v&&v.d(),w&&w.d()}}}function he(f,e,t){let{facebook:i}=e,{instagram:l}=e,{linkedin:a}=e,{youtube:s}=e,{twitter:u}=e,{google:c}=e,{github:b}=e;return f.$$set=h=>{"facebook"in h&&t(0,i=h.facebook),"instagram"in h&&t(1,l=h.instagram),"linkedin"in h&&t(2,a=h.linkedin),"youtube"in h&&t(3,s=h.youtube),"twitter"in h&&t(4,u=h.twitter),"google"in h&&t(5,c=h.google),"github"in h&&t(6,b=h.github)},[i,l,a,s,u,c,b]}class de extends V{constructor(e){super();y(this,e,he,ce,H,{facebook:0,instagram:1,linkedin:2,youtube:3,twitter:4,google:5,github:6})}}function ve(f){let e,t,i,l,a,s,u,c,b;e=new fe({props:{hero:f[1]}}),i=new ue({props:{items:f[2],path:f[0]}});const h=f[4].default,_=$(h,f,f[3],null);return c=new de({props:{instagram:"https://instagram.com/abroaders",youtube:"https://www.youtube.com/user/abroadersbr",twitter:"https://twitter.com/abroadersbr",github:"https://github.com/regisin/abroaders.com.br",facebook:"https://www.facebook.com/abroadersBR"}}),{c(){I(e.$$.fragment),t=B(),I(i.$$.fragment),l=B(),a=k("main"),s=k("div"),_&&_.c(),u=B(),I(c.$$.fragment),this.h()},l(n){D(e.$$.fragment,n),t=A(n),D(i.$$.fragment,n),l=A(n),a=E(n,"MAIN",{});var v=d(a);s=E(v,"DIV",{class:!0});var w=d(s);_&&_.l(w),w.forEach(o),v.forEach(o),u=A(n),D(c.$$.fragment,n),this.h()},h(){r(s,"class","prose")},m(n,v){F(e,n,v),z(n,t,v),F(i,n,v),z(n,l,v),z(n,a,v),g(a,s),_&&_.m(s,null),z(n,u,v),F(c,n,v),b=!0},p(n,[v]){const w={};v&1&&(w.path=n[0]),i.$set(w),_&&_.p&&(!b||v&8)&&ee(_,h,n,n[3],b?ae(h,n[3],v,null):te(n[3]),null)},i(n){b||(q(e.$$.fragment,n),q(i.$$.fragment,n),q(_,n),q(c.$$.fragment,n),b=!0)},o(n){S(e.$$.fragment,n),S(i.$$.fragment,n),S(_,n),S(c.$$.fragment,n),b=!1},d(n){R(e,n),n&&o(t),R(i,n),n&&o(l),n&&o(a),_&&_.d(n),n&&o(u),R(c,n)}}}async function ge({url:f}){return{props:{path:f.pathname}}}function _e(f,e,t){let{$$slots:i={},$$scope:l}=e,{path:a}=e;const s={title:"Abroaders",url:"/images/equipe/logoaBR.png"},u=[{title:"Home",url:"/"},{title:"Sobre",url:"/sobre"},{title:"Equipe",url:"/equipe"},{title:"Contato",url:"/contato"},{title:"Calculadore de GPA",url:"/gpa"}];return f.$$set=c=>{"path"in c&&t(0,a=c.path),"$$scope"in c&&t(3,l=c.$$scope)},[a,s,u,l,i]}class be extends V{constructor(e){super();y(this,e,_e,ve,H,{path:0})}}export{be as default,ge as load};