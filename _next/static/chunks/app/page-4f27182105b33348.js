(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9100:function(e,t,n){Promise.resolve().then(n.bind(n,2974))},2974:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(7437),c=n(2265),o=function(e){let{onDelete:t}=e,[n,o]=(0,c.useState)(""),a=(0,c.useRef)(null),[l,i]=(0,c.useState)([]),[s,u]=(0,c.useState)({}),d=e=>{var n;if(null===(n=a.current)||void 0===n||n.focus(),e.ctrlKey&&2===e.button&&t){t();return}e.ctrlKey&&"click"===e.type?v():e.ctrlKey&&"auxclick"===e.type&&v()},f=e=>{if(0===e.length)return[];let t=[...e].sort().join(""),n=(e,r,c)=>{if(4===e.length){[...t].every(t=>e.includes(t))&&c.add(e);return}for(let t=0;t<r.length;t++)n(e+r[t],r,c)},r=new Set;return n("",t,r),[...r]},p=(e,t)=>{t.stopPropagation();let n="";if("click"===t.type)n="red";else if("auxclick"===t.type)n="green";else if("contextmenu"===t.type){t.preventDefault(),u({});return}u(t=>({...t,[e]:n}))},v=()=>{let e=l.map(e=>"red"===s[e]?"$".concat(e," "):"green"===s[e]?'"'.concat(e,'"'):" ".concat(e," ")),t=l.map(e=>"red"===s[e]?"~~".concat(e,"~~"):"green"===s[e]?"_**".concat(e,"**_"):"".concat(e)),n="```bash\n-------------------------------------\n";for(let t=0;t<e.length;t+=4)n+="| ".concat(e[t]," | ").concat(e[t+1]," | ").concat(e[t+2]," | ").concat(e[t+3]," |\n-------------------------------------\n");n+="```\n";for(let e=0;e<t.length;e+=4)n+="".concat(t[e]," ").concat(t[e+1]," ").concat(t[e+2]," ").concat(t[e+3],"\n");navigator.clipboard.writeText(n)};return(0,r.jsxs)("div",{className:"card",onClick:d,onAuxClick:d,onContextMenu:d,children:[(0,r.jsx)("div",{className:"input-container","data-digit-count":n.length,children:[void 0,void 0,void 0,void 0].map((e,t)=>(0,r.jsx)("div",{className:"digit-box",children:n[t]||""},t))}),(0,r.jsx)("input",{ref:a,className:"card-input",type:"text",maxLength:4,value:n,onChange:e=>{let t=e.target.value;if(!/^\d*$/.test(t))return;let r=t.slice(-1);n.includes(r)&&t.length>=n.length||(o(t),i(f(t)))},pattern:"\\d*"}),(0,r.jsx)("div",{className:"permutations-container",children:l.map((e,t)=>(0,r.jsx)("div",{className:"permutation ".concat(s[e]||""),onClick:t=>p(e,t),onAuxClick:t=>p(e,t),onContextMenu:t=>p(e,t),children:e},t))})]})},a=function(e){let{onAdd:t}=e;return(0,r.jsx)("div",{className:"card add-card",onClick:t,children:(0,r.jsx)("div",{className:"plus-sign",children:"+"})})};function l(){let[e,t]=(0,c.useState)([(0,r.jsx)(o,{onDelete:()=>n(0)},0)]),n=n=>{t(e.filter((e,t)=>t!==n))};return(0,r.jsxs)("div",{className:"container",children:[e,(0,r.jsx)(a,{onAdd:()=>{let c=e.length;t([...e,(0,r.jsx)(o,{onDelete:()=>n(c)},c)])}})," "]})}},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),c=Symbol.for("react.element"),o=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,i={},s=null,u=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:c,type:e,key:s,ref:u,props:i,_owner:a.current}}t.jsx=i,t.jsxs=i},7437:function(e,t,n){"use strict";e.exports=n(622)}},function(e){e.O(0,[971,864,744],function(){return e(e.s=9100)}),_N_E=e.O()}]);