"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[219],{219:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});var r=t(439),a=t(791),u=t(689),c=t(409),i=t(184),s=function(e){var n=e.reviews;return(0,i.jsx)(i.Fragment,{children:n.length?(0,i.jsx)("ul",{children:n.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,i.jsxs)("li",{children:[(0,i.jsx)("h4",{children:t}),(0,i.jsx)("p",{children:r})]},n)}))}):(0,i.jsx)("p",{children:"We don't have any reviews for this movie"})})},o=function(){var e=(0,u.UO)().movieId,n=(0,a.useState)([]),t=(0,r.Z)(n,2),o=t[0],f=t[1];return(0,a.useEffect)((function(){(0,c.yJ)(e).then(f)}),[e]),(0,i.jsx)(i.Fragment,{children:o&&(0,i.jsx)(s,{reviews:o})})}},409:function(e,n,t){t.d(n,{Qw:function(){return p},qF:function(){return o},t$:function(){return s},vJ:function(){return f},yJ:function(){return v}});var r=t(861),a=t(757),u=t.n(a),c=t(263);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="217a4cbe2f726447c9a39cfed7ff9ffe",s=function(){var e=(0,r.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/all/day?api_key=".concat(i));case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=219.c7c95291.chunk.js.map