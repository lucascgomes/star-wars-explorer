(this["webpackJsonpstar-wars-explorer"]=this["webpackJsonpstar-wars-explorer"]||[]).push([[9],{147:function(e,r,t){"use strict";var i=t(0),n=t(60);r.a=function(e){var r=Object(n.c)((function(r){return r[e]})),t=Object(n.b)(),c=Object(i.useMemo)((function(){return function(e){return function(r,t){var i=t.beginFetch,n=t.fetchSuccess,c=t.fetchError;e(i()),fetch(r).then((function(e){return e.json()})).then((function(r){return e(n(r))})).catch((function(r){return e(c(r))}))}}(t)}),[t]);return[r,c]}},148:function(e,r,t){"use strict";t(0);var i=t(191),n=t(139),c=t(163),a=t(25),o=t(1);r.a=function(e){var r=e.fields,t=e.title,s=e.isLoading,u=e.error,d=e.data;return s?Object(o.jsx)(a.a,{name:"profile"}):u?Object(o.jsx)(c.a,{severity:"error",children:"An error occurred while retrieving the profile. Please try again later."}):Object(o.jsxs)("div",{children:[Object(o.jsx)(n.a,{variant:"h6",component:"div",sx:{marginBottom:1,marginTop:1},children:t}),r.map((function(e){return Object(o.jsx)("div",{children:Object(o.jsx)(i.a,{id:e.id,label:e.label,value:d[e.id]||"",sx:{marginBottom:1,marginTop:1},variant:"standard",disabled:!0})},e.id)}))]})}},186:function(e,r,t){"use strict";t.r(r);var i=t(12),n=t(0),c=t(5),a=t(147),o=t(69),s=t(148),u=t(1),d=[{id:"director",label:"Director"},{id:"producer",label:"Producer"},{id:"release_date",label:"Release Date"}];r.default=function(){var e=Object(c.h)().movieId,r=Object(a.a)("movieProfileReducer"),t=Object(i.a)(r,2),l=t[0],f=l.isLoading,b=l.error,j=l.data,h=t[1];return Object(n.useEffect)((function(){h&&e&&h("https://swapi.dev/api/films/".concat(e),{beginFetch:o.a,fetchSuccess:o.d,fetchError:o.c})}),[h,e]),Object(u.jsx)("div",{children:Object(u.jsx)(s.a,{fields:d,isLoading:f,error:b,data:j,title:j.title})})}}}]);
//# sourceMappingURL=9.3e3f40fb.chunk.js.map