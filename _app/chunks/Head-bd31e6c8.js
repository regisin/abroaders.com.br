import{S as h,i as f,s as _,e as l,N as g,c as d,d as c,b as r,F as m,G as p}from"./vendor-9a662144.js";function y(s){let o,a,e,n;return document.title=o=s[2],{c(){a=l("meta"),e=l("meta"),n=l("meta"),this.h()},l(i){const t=g('[data-svelte="svelte-17be3w9"]',document.head);a=d(t,"META",{property:!0,content:!0}),e=d(t,"META",{property:!0,content:!0}),n=d(t,"META",{property:!0,content:!0}),t.forEach(c),this.h()},h(){r(a,"property","og:site_name"),r(a,"content",u),r(e,"property","og:title"),r(e,"content",s[0]),r(n,"property","og:description"),r(n,"content",s[1])},m(i,t){m(document.head,a),m(document.head,e),m(document.head,n)},p(i,[t]){t&4&&o!==(o=i[2])&&(document.title=o),t&1&&r(e,"content",i[0]),t&2&&r(n,"content",i[1])},i:p,o:p,d(i){c(a),c(e),c(n)}}}const u="Abroaders";function T(s,o,a){let{title:e}=o,{description:n}=o;const i=e?`${e} | ${u}`:u;return s.$$set=t=>{"title"in t&&a(0,e=t.title),"description"in t&&a(1,n=t.description)},[e,n,i]}class E extends h{constructor(o){super();f(this,o,T,y,_,{title:0,description:1})}}export{E as H};