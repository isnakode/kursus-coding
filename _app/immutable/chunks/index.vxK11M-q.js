import{r as h,n as $,i as v,j as S,k as b,l as C,a as w,m as D,p as T,q as N,v as j,w as B,x as H}from"./scheduler.MfPCTjUf.js";let p=!1;function I(){p=!0}function q(){p=!1}function L(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function P(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const s=[];for(let l=0;l<t.length;l++){const o=t[l];o.claim_order!==void 0&&s.push(o)}t=s}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let s=0;s<t.length;s++){const l=t[s].claim_order,o=(r>0&&t[n[r]].claim_order<=l?r+1:L(1,r,d=>t[n[d]].claim_order,l))-1;i[s]=n[o]+1;const f=o+1;n[f]=s,r=Math.max(f,r)}const u=[],a=[];let c=t.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(u.push(t[s-1]);c>=s;c--)a.push(t[c]);c--}for(;c>=0;c--)a.push(t[c]);u.reverse(),a.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<a.length;s++){for(;l<u.length&&a[s].claim_order>=u[l].claim_order;)l++;const o=l<u.length?u[l]:null;e.insertBefore(a[s],o)}}function M(e,t){if(p){for(P(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function Y(e,t,n){p&&!n?M(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function O(e){e.parentNode&&e.parentNode.removeChild(e)}function Z(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function R(e){return document.createElement(e)}function z(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function y(e){return document.createTextNode(e)}function k(){return y(" ")}function ee(){return y("")}function te(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function ne(e){return function(t){return t.preventDefault(),e.call(this,t)}}function ie(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function re(e){return e.dataset.svelteH}function se(e){return e===""?null:+e}function F(e){return Array.from(e.childNodes)}function G(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function E(e,t,n,i,r=!1){G(e);const u=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const c=e[a];if(t(c)){const s=n(c);return s===void 0?e.splice(a,1):e[a]=s,r||(e.claim_info.last_index=a),c}}for(let a=e.claim_info.last_index-1;a>=0;a--){const c=e[a];if(t(c)){const s=n(c);return s===void 0?e.splice(a,1):e[a]=s,r?s===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,c}}return i()})();return u.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,u}function A(e,t,n,i){return E(e,r=>r.nodeName===t,r=>{const u=[];for(let a=0;a<r.attributes.length;a++){const c=r.attributes[a];n[c.name]||u.push(c.name)}u.forEach(a=>r.removeAttribute(a))},()=>i(t))}function le(e,t,n){return A(e,t,n,R)}function ae(e,t,n){return A(e,t,n,z)}function U(e,t){return E(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>y(t),!0)}function ue(e){return U(e," ")}function ce(e,t){t=""+t,e.data!==t&&(e.data=t)}function fe(e,t){e.value=t??""}function oe(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function _e(e,t,n){for(let i=0;i<e.options.length;i+=1){const r=e.options[i];if(r.__value===t){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function de(e){const t=e.querySelector(":checked");return t&&t.__value}function me(e,t){const n=[];let i=0;for(const r of t.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${e}_END`?(i-=1,n.push(r)):u===`HEAD_${e}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function he(e,t){return new e(t)}const m=new Set;let _;function pe(){_={r:0,c:[],p:_}}function $e(){_.r||h(_.c),_=_.p}function V(e,t){e&&e.i&&(m.delete(e),e.i(t))}function ye(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),_.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function xe(e){e&&e.c()}function ge(e,t){e&&e.l(t)}function W(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),w(()=>{const u=e.$$.on_mount.map(j).filter(b);e.$$.on_destroy?e.$$.on_destroy.push(...u):h(u),e.$$.on_mount=[]}),r.forEach(w)}function J(e,t){const n=e.$$;n.fragment!==null&&(D(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function K(e,t){e.$$.dirty[0]===-1&&(B.push(e),H(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ve(e,t,n,i,r,u,a=null,c=[-1]){const s=T;N(e);const l=e.$$={fragment:null,ctx:[],props:u,update:$,not_equal:r,bound:v(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:v(),dirty:c,skip_bound:!1,root:t.target||s.$$.root};a&&a(l.root);let o=!1;if(l.ctx=n?n(e,t.props||{},(f,d,...x)=>{const g=x.length?x[0]:d;return l.ctx&&r(l.ctx[f],l.ctx[f]=g)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](g),o&&K(e,f)),d}):[],l.update(),o=!0,h(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){I();const f=F(t.target);l.fragment&&l.fragment.l(f),f.forEach(O)}else l.fragment&&l.fragment.c();t.intro&&V(e.$$.fragment),W(e,t.target,t.anchor),q(),S()}N(s)}class we{$$=void 0;$$set=void 0;$destroy(){J(this,1),this.$destroy=$}$on(t,n){if(!b(n))return $;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!C(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Q="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Q);export{W as A,V as B,ye as C,J as D,ee as E,$e as F,oe as G,pe as H,he as I,we as S,F as a,ue as b,le as c,O as d,R as e,ie as f,re as g,fe as h,ve as i,Y as j,M as k,_e as l,te as m,Z as n,U as o,ne as p,de as q,se as r,k as s,y as t,me as u,ce as v,z as w,ae as x,xe as y,ge as z};
