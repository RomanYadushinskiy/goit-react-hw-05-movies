"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[737],{737:function(e,t,n){n.r(t),n.d(t,{Movies:function(){return p}});var r=n(439),a=n(791),u=n(184),c=function(e){var t=e.setSearchParams,n=(0,a.useState)(""),c=(0,r.Z)(n,2),s=c[0],i=c[1];return(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(s?{query:s.trim()}:{}),i("")},children:[(0,u.jsx)("input",{type:"text",onChange:function(e){i(e.target.value)},value:s}),(0,u.jsx)("button",{type:"submit",children:"Search"})]})},s=n(87),i=n(689),o=function(e){var t=e.movies,n=(0,i.TH)();return(0,u.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.title,a=e.name;return(0,u.jsx)("li",{children:(0,u.jsx)(s.rU,{to:"/movies/".concat(t),state:{from:n},children:r||a})},t)}))})},f=n(409),p=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],p=t[1],l=(0,s.lr)(""),v=(0,r.Z)(l,2),h=v[0],d=v[1],m=h.get("query");return(0,a.useEffect)((function(){m&&(0,f.qF)(m).then((function(e){p(e)})).catch((function(e){return console.log(e)}))}),[m]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c,{setSearchParams:d}),(0,u.jsx)(o,{movies:n}),(0,u.jsx)(a.Suspense,{fallback:null,children:(0,u.jsx)(i.j3,{})})]})}},409:function(e,t,n){n.d(t,{Qw:function(){return p},qF:function(){return o},t$:function(){return i},vJ:function(){return f},yJ:function(){return l}});var r=n(861),a=n(757),u=n.n(a),c=n(263);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="217a4cbe2f726447c9a39cfed7ff9ffe",i=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/all/day?api_key=".concat(s));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=737.5e1a1aa0.chunk.js.map