(this["webpackJsonpstar-wars-explorer"]=this["webpackJsonpstar-wars-explorer"]||[]).push([[2],{22:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(45),r=function(e,t){return Object(c.b)({name:e,initialState:{isLoading:!1,error:null,data:t},reducers:{beginFetch:function(e){e.isLoading=!0,e.error=null},fetchSuccess:function(e,t){e.isLoading=!1,e.data=t.payload},fetchError:function(e,t){e.isLoading=!1,e.error=t.payload}}})}},25:function(e,t,n){"use strict";var c,r,a,i,s=n(16),o=(n(0),n(107)),l=n(27),b=n(59),j=n(1),u=Object(l.c)(c||(c=Object(s.a)(["\n  from {transform: rotateZ(-45deg) rotateY(-30deg);}\n  50%  {transform: rotateZ(-30deg) rotateY(-45deg);}\n  to   {transform: rotateZ(-45deg) rotateY(-30deg);}\n"]))),d=Object(b.a)("div")(r||(r=Object(s.a)(["\n  position: absolute;\n  top: 50vh;\n  left: 12.5vw;\n  width: 75vw;\n  animation: "," 3s infinite;\n"])),u),f=Object(b.a)("div")(a||(a=Object(s.a)(["\n  width: 14vw;\n  height: 1vw;\n  background-color: #fff;\n  top: 0.8vw;\n  position: relative;\n  z-index: 10;\n"]))),O=Object(b.a)(o.a)(i||(i=Object(s.a)(["\n  height: 0.7vw;\n"])));t.a=function(e){return e.name,Object(j.jsxs)(d,{children:[Object(j.jsx)(f,{}),Object(j.jsx)(O,{})]})}},69:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return o}));var c=n(22),r=Object(c.a)("movieProfile",{}),a=r.actions,i=a.beginFetch,s=a.fetchSuccess,o=a.fetchError;t.b=r.reducer},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return o}));var c=n(22),r=Object(c.a)("moviesList",[]),a=r.actions,i=a.beginFetch,s=a.fetchSuccess,o=a.fetchError;t.b=r.reducer},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return o}));var c=n(22),r=Object(c.a)("peopleList",[]),a=r.actions,i=a.beginFetch,s=a.fetchSuccess,o=a.fetchError;t.b=r.reducer},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return o}));var c=n(22),r=Object(c.a)("personProfile",{}),a=r.actions,i=a.beginFetch,s=a.fetchSuccess,o=a.fetchError;t.b=r.reducer},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return o}));var c=n(22),r=Object(c.a)("planetProfile",{}),a=r.actions,i=a.beginFetch,s=a.fetchSuccess,o=a.fetchError;t.b=r.reducer},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return o}));var c=n(22),r=Object(c.a)("planetsList",[]),a=r.actions,i=a.beginFetch,s=a.fetchSuccess,o=a.fetchError;t.b=r.reducer},97:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(42),i=n.n(a),s=n(29),o=n(132),l=n(136),b=n(60),j=n(79),u=Object(j.a)({palette:{mode:"dark",primary:{main:"#FFE81F"}}}),d=n(45),f=n(69),O=n(70),h=n(71),x=n(72),p=n(73),m=n(74),g=Object(d.a)({reducer:{movieProfileReducer:f.b,moviesListReducer:O.b,peopleListReducer:h.b,personProfileReducer:x.b,planetProfileReducer:p.b,planetsListReducer:m.b}}),v=n(5),P=n(138),S=n(137),k=n(59),L=n(140),F=n(141),w=n(78),y=n.n(w),E=n(135),z=n(139),R=n(142),I=n(1);var C=function(e){var t=e.to,n=e.label;return e.clickable?Object(I.jsx)(R.a,{variant:"h6",color:"inherit",underline:"hover",component:s.b,to:t,children:n}):Object(I.jsx)(z.a,{variant:"h6",children:n})},M={"/people":"People","/movies":"Movies","/planets":"Planets"};var B=function(){var e=Object(v.f)().pathname,t=e.split("/"),n="/".concat(t[1]);return Object(I.jsx)(L.a,{children:Object(I.jsxs)(F.a,{children:[Object(I.jsx)(y.a,{sx:{marginRight:3}}),Object(I.jsxs)(E.a,{color:"inherit","aria-label":"breadcrumb",children:[Object(I.jsx)(C,{to:"/",label:"Star Wars Explorer",clickable:"/"!==e}),t[1]&&Object(I.jsx)(C,{to:n,label:M[n],clickable:e!==n}),t[2]&&Object(I.jsx)(C,{to:"",label:"Profile",clickable:!1})]})]})})},T=Object(k.a)(P.a)({paddingTop:"100px",paddingBottom:"36px"}),Y=Object(k.a)(S.a)({backgroundColor:"#000",backgroundImage:"none"});var Z=function(){return Object(I.jsxs)(Y,{children:[Object(I.jsx)(B,{}),Object(I.jsx)(T,{maxWidth:"md",children:Object(I.jsx)(v.a,{})})]})},J=n(25),W=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,182))})),D=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,183))})),H=Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(10)]).then(n.bind(null,184))})),q=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,185))})),A=Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(9)]).then(n.bind(null,186))})),G=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,187))})),K=Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(11)]).then(n.bind(null,188))})),N=Object(c.lazy)((function(){return n.e(12).then(n.bind(null,189))}));var Q=function(){return Object(I.jsx)(v.d,{children:Object(I.jsxs)(v.b,{path:"/",element:Object(I.jsx)(Z,{}),children:[Object(I.jsx)(v.b,{index:!0,element:Object(I.jsx)(c.Suspense,{fallback:Object(I.jsx)(J.a,{name:"Home Page"}),children:Object(I.jsx)(W,{})})}),Object(I.jsx)(v.b,{path:"/people",element:Object(I.jsx)(c.Suspense,{fallback:Object(I.jsx)(J.a,{name:"People List Page"}),children:Object(I.jsx)(D,{})})}),Object(I.jsx)(v.b,{path:"/people/:personId",element:Object(I.jsx)(c.Suspense,{fallback:Object(I.jsx)(J.a,{name:"Person Profile Page"}),children:Object(I.jsx)(H,{})})}),Object(I.jsx)(v.b,{path:"/movies",element:Object(I.jsx)(c.Suspense,{fallback:Object(I.jsx)(J.a,{name:"Movies List Page"}),children:Object(I.jsx)(q,{})})}),Object(I.jsx)(v.b,{path:"/movies/:movieId",element:Object(I.jsx)(c.Suspense,{fallback:Object(I.jsx)(J.a,{name:"Movie Profile Page"}),children:Object(I.jsx)(A,{})})}),Object(I.jsx)(v.b,{path:"/planets",element:Object(I.jsx)(c.Suspense,{fallback:Object(I.jsx)(J.a,{name:"Planets List Page"}),children:Object(I.jsx)(G,{})})}),Object(I.jsx)(v.b,{path:"/planets/:planetId",element:Object(I.jsx)(c.Suspense,{fallback:Object(I.jsx)(J.a,{name:"Planet Profile Page"}),children:Object(I.jsx)(K,{})})}),Object(I.jsx)(v.b,{path:"*",element:Object(I.jsx)(c.Suspense,{fallback:Object(I.jsx)(J.a,{name:"Page"}),children:Object(I.jsx)(N,{})})})]})})},U=function(e){e&&e instanceof Function&&n.e(13).then(n.bind(null,190)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};n(97);i.a.render(Object(I.jsxs)(r.a.StrictMode,{children:[Object(I.jsx)(o.a,{}),Object(I.jsx)(s.a,{children:Object(I.jsx)(l.a,{theme:u,children:Object(I.jsx)(b.a,{store:g,children:Object(I.jsx)(Q,{})})})})]}),document.getElementById("root")),U()}},[[99,3,4]]]);
//# sourceMappingURL=main.37673882.chunk.js.map