import{S,i as C,s as D,e as H,t as q,c as E,a as M,h as P,d as p,b as R,g as _,F as j,G as B,k as g,m as k,j as T,w as b,x as v,y as w,q as h,o as $,B as A,l as F,p as y,J as z,n as I}from"../chunks/vendor-0b80c03d.js";import{H as K}from"../chunks/Head-c089ca59.js";import{A as O,a as Q}from"../chunks/ArticleMeta-2110d818.js";function G(l){let e,r;return{c(){e=H("a"),r=q("Leia mais \u2192"),this.h()},l(s){e=E(s,"A",{href:!0});var n=M(e);r=P(n,"Leia mais \u2192"),n.forEach(p),this.h()},h(){R(e,"href",l[2])},m(s,n){_(s,e,n),j(e,r)},p:B,d(s){s&&p(e)}}}function U(l){let e,r,s,n=l[1]&&G(l);return{c(){e=H("p"),r=q(l[0]),s=g(),n&&n.c()},l(o){e=E(o,"P",{});var f=M(e);r=P(f,l[0]),s=k(f),n&&n.l(f),f.forEach(p)},m(o,f){_(o,e,f),j(e,r),j(e,s),n&&n.m(e,null)},p(o,[f]){f&1&&T(r,o[0]),o[1]?n?n.p(o,f):(n=G(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},i:B,o:B,d(o){o&&p(e),n&&n.d()}}}function V(l,e,r){let{description:s}=e,{slug:n=""}=e;const o=n&&`/posts/${n}`;return l.$$set=f=>{"description"in f&&r(0,s=f.description),"slug"in f&&r(1,n=f.slug)},[s,n,o]}class W extends S{constructor(e){super();C(this,e,V,U,D,{description:0,slug:1})}}function J(l,e,r){const s=l.slice();return s[1]=e[r].slug,s[2]=e[r].title,s[3]=e[r].author,s[4]=e[r].description,s[5]=e[r].date,s[6]=e[r].data,s}function N(l){let e,r,s,n,o,f;return e=new O({props:{slug:l[1],title:l[2]}}),s=new Q({props:{author:l[3],date:l[5]}}),o=new W({props:{description:l[4],slug:l[1]}}),{c(){b(e.$$.fragment),r=g(),b(s.$$.fragment),n=g(),b(o.$$.fragment)},l(a){v(e.$$.fragment,a),r=k(a),v(s.$$.fragment,a),n=k(a),v(o.$$.fragment,a)},m(a,u){w(e,a,u),_(a,r,u),w(s,a,u),_(a,n,u),w(o,a,u),f=!0},p(a,u){const i={};u&1&&(i.slug=a[1]),u&1&&(i.title=a[2]),e.$set(i);const d={};u&1&&(d.author=a[3]),u&1&&(d.date=a[5]),s.$set(d);const t={};u&1&&(t.description=a[4]),u&1&&(t.slug=a[1]),o.$set(t)},i(a){f||(h(e.$$.fragment,a),h(s.$$.fragment,a),h(o.$$.fragment,a),f=!0)},o(a){$(e.$$.fragment,a),$(s.$$.fragment,a),$(o.$$.fragment,a),f=!1},d(a){A(e,a),a&&p(r),A(s,a),a&&p(n),A(o,a)}}}function X(l){let e,r,s,n,o,f,a;e=new K({props:{title:"Home",description:"Mentes inquietas compartilhando experi\xEAncias para ajudar voc\xEA que deseja estudar no exterior"}});let u=l[0],i=[];for(let t=0;t<u.length;t+=1)i[t]=N(J(l,u,t));const d=t=>$(i[t],1,1,()=>{i[t]=null});return{c(){b(e.$$.fragment),r=g(),s=H("h1"),n=q("Posts"),o=g();for(let t=0;t<i.length;t+=1)i[t].c();f=F()},l(t){v(e.$$.fragment,t),r=k(t),s=E(t,"H1",{});var m=M(s);n=P(m,"Posts"),m.forEach(p),o=k(t);for(let c=0;c<i.length;c+=1)i[c].l(t);f=F()},m(t,m){w(e,t,m),_(t,r,m),_(t,s,m),j(s,n),_(t,o,m);for(let c=0;c<i.length;c+=1)i[c].m(t,m);_(t,f,m),a=!0},p(t,[m]){if(m&1){u=t[0];let c;for(c=0;c<u.length;c+=1){const L=J(t,u,c);i[c]?(i[c].p(L,m),h(i[c],1)):(i[c]=N(L),i[c].c(),h(i[c],1),i[c].m(f.parentNode,f))}for(I(),c=u.length;c<i.length;c+=1)d(c);y()}},i(t){if(!a){h(e.$$.fragment,t);for(let m=0;m<u.length;m+=1)h(i[m]);a=!0}},o(t){$(e.$$.fragment,t),i=i.filter(Boolean);for(let m=0;m<i.length;m+=1)$(i[m]);a=!1},d(t){A(e,t),t&&p(r),t&&p(s),t&&p(o),z(i,t),t&&p(f)}}}async function te({fetch:l}){return{props:{posts:await l("/posts.json").then(r=>r.json())}}}function Y(l,e,r){let{posts:s}=e;return l.$$set=n=>{"posts"in n&&r(0,s=n.posts)},[s]}class se extends S{constructor(e){super();C(this,e,Y,X,D,{posts:0})}}export{se as default,te as load};