import{S as B,i as C,s as D,e as H,t as E,c as q,a as M,g as P,d as p,b as T,f as _,E as j,F as L,j as g,l as k,h as z,v,w as A,x as b,p as h,n as $,A as w,k as F,o as G,I as J,m as K}from"../chunks/vendor-f2db844d.js";import{H as O}from"../chunks/Head-e22a6ece.js";import{A as Q,a as U}from"../chunks/ArticleMeta-8d61516d.js";function I(l){let e,r;return{c(){e=H("a"),r=E("Leia mais \u2192"),this.h()},l(s){e=q(s,"A",{href:!0});var n=M(e);r=P(n,"Leia mais \u2192"),n.forEach(p),this.h()},h(){T(e,"href",l[2])},m(s,n){_(s,e,n),j(e,r)},p:L,d(s){s&&p(e)}}}function V(l){let e,r,s,n=l[1]&&I(l);return{c(){e=H("p"),r=E(l[0]),s=g(),n&&n.c()},l(o){e=q(o,"P",{});var f=M(e);r=P(f,l[0]),s=k(f),n&&n.l(f),f.forEach(p)},m(o,f){_(o,e,f),j(e,r),j(e,s),n&&n.m(e,null)},p(o,[f]){f&1&&z(r,o[0]),o[1]?n?n.p(o,f):(n=I(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},i:L,o:L,d(o){o&&p(e),n&&n.d()}}}function W(l,e,r){let{description:s}=e,{slug:n=""}=e;const o=n&&`/posts/${n}`;return l.$$set=f=>{"description"in f&&r(0,s=f.description),"slug"in f&&r(1,n=f.slug)},[s,n,o]}class X extends B{constructor(e){super();C(this,e,W,V,D,{description:0,slug:1})}}function N(l,e,r){const s=l.slice();return s[1]=e[r].slug,s[2]=e[r].title,s[3]=e[r].author,s[4]=e[r].description,s[5]=e[r].date,s[6]=e[r].data,s}function R(l){let e,r,s,n,o,f;return e=new Q({props:{slug:l[1],title:l[2]}}),s=new U({props:{author:l[3],date:l[5]}}),o=new X({props:{description:l[4],slug:l[1]}}),{c(){v(e.$$.fragment),r=g(),v(s.$$.fragment),n=g(),v(o.$$.fragment)},l(a){A(e.$$.fragment,a),r=k(a),A(s.$$.fragment,a),n=k(a),A(o.$$.fragment,a)},m(a,u){b(e,a,u),_(a,r,u),b(s,a,u),_(a,n,u),b(o,a,u),f=!0},p(a,u){const i={};u&1&&(i.slug=a[1]),u&1&&(i.title=a[2]),e.$set(i);const d={};u&1&&(d.author=a[3]),u&1&&(d.date=a[5]),s.$set(d);const t={};u&1&&(t.description=a[4]),u&1&&(t.slug=a[1]),o.$set(t)},i(a){f||(h(e.$$.fragment,a),h(s.$$.fragment,a),h(o.$$.fragment,a),f=!0)},o(a){$(e.$$.fragment,a),$(s.$$.fragment,a),$(o.$$.fragment,a),f=!1},d(a){w(e,a),a&&p(r),w(s,a),a&&p(n),w(o,a)}}}function Y(l){let e,r,s,n,o,f,a;e=new O({props:{title:"Home",description:"Mentes inquietas compartilhando experi\xEAncias para ajudar voc\xEA que deseja estudar no exterior"}});let u=l[0],i=[];for(let t=0;t<u.length;t+=1)i[t]=R(N(l,u,t));const d=t=>$(i[t],1,1,()=>{i[t]=null});return{c(){v(e.$$.fragment),r=g(),s=H("h1"),n=E("Posts"),o=g();for(let t=0;t<i.length;t+=1)i[t].c();f=F()},l(t){A(e.$$.fragment,t),r=k(t),s=q(t,"H1",{});var m=M(s);n=P(m,"Posts"),m.forEach(p),o=k(t);for(let c=0;c<i.length;c+=1)i[c].l(t);f=F()},m(t,m){b(e,t,m),_(t,r,m),_(t,s,m),j(s,n),_(t,o,m);for(let c=0;c<i.length;c+=1)i[c].m(t,m);_(t,f,m),a=!0},p(t,[m]){if(m&1){u=t[0];let c;for(c=0;c<u.length;c+=1){const S=N(t,u,c);i[c]?(i[c].p(S,m),h(i[c],1)):(i[c]=R(S),i[c].c(),h(i[c],1),i[c].m(f.parentNode,f))}for(K(),c=u.length;c<i.length;c+=1)d(c);G()}},i(t){if(!a){h(e.$$.fragment,t);for(let m=0;m<u.length;m+=1)h(i[m]);a=!0}},o(t){$(e.$$.fragment,t),i=i.filter(Boolean);for(let m=0;m<i.length;m+=1)$(i[m]);a=!1},d(t){w(e,t),t&&p(r),t&&p(s),t&&p(o),J(i,t),t&&p(f)}}}async function te({fetch:l}){return{props:{posts:await l("/posts.json").then(r=>r.json())}}}function Z(l,e,r){let{posts:s}=e;return l.$$set=n=>{"posts"in n&&r(0,s=n.posts)},[s]}class se extends B{constructor(e){super();C(this,e,Z,Y,D,{posts:0})}}export{se as default,te as load};