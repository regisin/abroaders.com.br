import{S as M,i as P,s as S,M as k,w as d,k as g,x as w,m as h,y as b,g as A,O as B,P as C,Q as E,q as u,o as p,B as j,d as q}from"../../chunks/vendor-9a662144.js";import{H as O}from"../../chunks/Head-bd31e6c8.js";import{A as Q,a as T}from"../../chunks/ArticleMeta-31d5b687.js";function v(a){let e,o,i,l,r,f,m;e=new O({props:{title:a[0].title,description:a[0].description}}),i=new Q({props:{title:a[0].title}}),r=new T({props:{author:a[0].author,date:a[0].date}});const $=a[2].default,n=k($,a,a[1],null);return{c(){d(e.$$.fragment),o=g(),d(i.$$.fragment),l=g(),d(r.$$.fragment),f=g(),n&&n.c()},l(t){w(e.$$.fragment,t),o=h(t),w(i.$$.fragment,t),l=h(t),w(r.$$.fragment,t),f=h(t),n&&n.l(t)},m(t,s){b(e,t,s),A(t,o,s),b(i,t,s),A(t,l,s),b(r,t,s),A(t,f,s),n&&n.m(t,s),m=!0},p(t,[s]){const _={};s&1&&(_.title=t[0].title),s&1&&(_.description=t[0].description),e.$set(_);const H={};s&1&&(H.title=t[0].title),i.$set(H);const c={};s&1&&(c.author=t[0].author),s&1&&(c.date=t[0].date),r.$set(c),n&&n.p&&(!m||s&2)&&B(n,$,t,t[1],m?E($,t[1],s,null):C(t[1]),null)},i(t){m||(u(e.$$.fragment,t),u(i.$$.fragment,t),u(r.$$.fragment,t),u(n,t),m=!0)},o(t){p(e.$$.fragment,t),p(i.$$.fragment,t),p(r.$$.fragment,t),p(n,t),m=!1},d(t){j(e,t),t&&q(o),j(i,t),t&&q(l),j(r,t),t&&q(f),n&&n.d(t)}}}async function G({url:a,fetch:e}){const o=await e(`${a.pathname}.json`).then(i=>i.json());return!o||!o.published?{status:404,error:new Error("Post could not be found")}:{props:{post:o}}}function y(a,e,o){let{$$slots:i={},$$scope:l}=e,{post:r}=e;return a.$$set=f=>{"post"in f&&o(0,r=f.post),"$$scope"in f&&o(1,l=f.$$scope)},[r,l,i]}class I extends M{constructor(e){super();P(this,e,y,v,S,{post:0})}}export{I as default,G as load};