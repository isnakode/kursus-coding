import{s as P,n as E}from"../chunks/scheduler.tpT7kb9E.js";import{S as H,i as O,c as p,s as u,e as w,d as h,f as _,a as j,b as C,h as f,j as N,m as d,k as m,t as g,n as $,o as b,C as v,v as q,w as z,x as D,l as x}from"../chunks/index.TIEe1Z0e.js";import{e as y}from"../chunks/each.-oqiv04n.js";import{c as I}from"../chunks/courses.2YofpS1e.js";import{N as M}from"../chunks/NoScrolbar.AE9gSXei.js";import{H as T}from"../chunks/Header.m2XCn5Hj.js";async function V({params:o}){return{slug:o.slug}}const U=Object.freeze(Object.defineProperty({__proto__:null,load:V},Symbol.toStringTag,{value:"Module"}));function k(o,a,s){const e=o.slice();return e[2]=a[s],e}function A(o){let a,s=y(o[0].materi),e=[];for(let t=0;t<s.length;t+=1)e[t]=S(k(o,s,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();a=v()},l(t){for(let r=0;r<e.length;r+=1)e[r].l(t);a=v()},m(t,r){for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(t,r);m(t,a,r)},p(t,r){if(r&1){s=y(t[0].materi);let n;for(n=0;n<s.length;n+=1){const i=k(t,s,n);e[n]?e[n].p(i,r):(e[n]=S(i),e[n].c(),e[n].m(a.parentNode,a))}for(;n<e.length;n+=1)e[n].d(1);e.length=s.length}},d(t){t&&f(a),q(e,t)}}}function S(o){let a,s=o[2]+"",e,t;return{c(){a=w("p"),e=z(s),t=u(),this.h()},l(r){a=j(r,"P",{class:!0});var n=C(a);e=D(n,s),t=_(n),n.forEach(f),this.h()},h(){N(a,"class","first-letter:uppercase font-medium p-3 bg-blue-200 hover:bg-blue-500 rounded-md text-black hover:text-white")},m(r,n){m(r,a,n),x(a,e),x(a,t)},p:E,d(r){r&&f(a)}}}function B(o){let a,s,e,t,r,n;a=new M({}),e=new T({});let i=o[0]&&A(o);return{c(){p(a.$$.fragment),s=u(),p(e.$$.fragment),t=u(),r=w("div"),i&&i.c(),this.h()},l(l){h(a.$$.fragment,l),s=_(l),h(e.$$.fragment,l),t=_(l),r=j(l,"DIV",{class:!0});var c=C(r);i&&i.l(c),c.forEach(f),this.h()},h(){N(r,"class","flex flex-col py-8 px-16 gap-2")},m(l,c){d(a,l,c),m(l,s,c),d(e,l,c),m(l,t,c),m(l,r,c),i&&i.m(r,null),n=!0},p(l,[c]){l[0]&&i.p(l,c)},i(l){n||(g(a.$$.fragment,l),g(e.$$.fragment,l),n=!0)},o(l){$(a.$$.fragment,l),$(e.$$.fragment,l),n=!1},d(l){l&&(f(s),f(t),f(r)),b(a,l),b(e,l),i&&i.d()}}}function F(o,a,s){let{data:e}=a;const t=I.find(r=>r.slug==e.slug);return o.$$set=r=>{"data"in r&&s(1,e=r.data)},[t,e]}class W extends H{constructor(a){super(),O(this,a,F,B,P,{data:1})}}export{W as component,U as universal};
