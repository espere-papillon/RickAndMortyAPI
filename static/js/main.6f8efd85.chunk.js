(this["webpackJsonptest-react"]=this["webpackJsonptest-react"]||[]).push([[0],{26:function(e,t,c){},37:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(10),s=c.n(r),i=(c(26),c(2)),j=c(21),o=c(3),u=(c(37),c(0)),b=function(e){return Object(u.jsx)("button",Object(o.a)({className:"Button"},e))},l=(c(39),function(e){var t=e.onSearch,c=Object(n.useState)(""),a=Object(i.a)(c,2),r=a[0],s=a[1],o=Object(n.useCallback)((function(e){return s(e.target.value)}),[]),l=Object(n.useCallback)((function(){t(r),j.animateScroll.scrollToTop()}),[r,t]);return Object(u.jsxs)("div",{className:"SearchInput",children:[Object(u.jsx)("input",{value:r,onChange:o}),Object(u.jsx)(b,{onClick:l,children:"SUBMIT"})]})}),d=c.p+"static/media/logo.e1f86449.svg",O=(c(40),function(e){var t=e.onSearch;return Object(u.jsxs)("header",{className:"Header",children:[Object(u.jsx)("img",{src:d,className:"Header-logo",alt:"logo"}),Object(u.jsx)(l,{onSearch:t})]})}),h=(c(41),function(e){var t=e.item,c=Object(n.useState)(!1),a=Object(i.a)(c,2),r=a[0],s=a[1];return Object(u.jsxs)("div",{className:"Container",children:[Object(u.jsx)("div",{className:"CharterName",children:Object(u.jsx)("h2",{children:t.name})}),Object(u.jsxs)("div",{className:"CharterInfo",children:[Object(u.jsx)("div",{className:"CharterPhoto",children:Object(u.jsx)("img",{src:t.image,alt:t.name})}),Object(u.jsxs)("div",{className:"CommonInfo",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"Status: "}),t.status]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"Species: "}),t.species]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"Type: "}),t.type]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"Gender: "}),t.gender]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"Origin name: "}),t.origin.name]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"Location: "}),t.location.name]}),Object(u.jsxs)("div",{className:"EpisodeContainer",children:[Object(u.jsx)("b",{children:"Episodes: "}),r?Object(u.jsx)(x,{episodes:t.episode}):Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"ButtonShowEpisodes",onClick:function(){return s(!0)},children:"Show episodes"})})]})]})]})]},t.id)}),x=function(e){var t=e.episodes;return Object(u.jsx)("div",{className:"EpisodeList",children:t.map((function(e,t){return Object(u.jsx)("div",{className:"Episode",children:e},t)}))})},p=function(e){var t=e.content;return Object(u.jsx)("div",{className:"CharterList",children:t.map((function(e){return Object(u.jsx)(h,{item:e},e.id)}))})},v=c(4),f=c.n(v),m=c(5),g=c(12),S={getCharacters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("https://rickandmortyapi.com/api/character/?name=".concat(e,"&page=").concat(t))}},N=(c(43),function(){var e=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([]),s=Object(i.a)(r,2),j=s[0],u=s[1],b=Object(n.useState)(!1),l=Object(i.a)(b,2),d=l[0],O=l[1],h=Object(n.useState)(""),x=Object(i.a)(h,2),p=x[0],v=x[1],N=Object(n.useState)({searchValue:"",page:1}),C=Object(i.a)(N,2),k=C[0],w=C[1],y=Object(n.useRef)(!0),E=function(){var e=Object(g.a)(f.a.mark((function e(t,c,n){var r,s,i,o=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=!(o.length>3&&void 0!==o[3])||o[3],O(!0),e.prev=2,!r){e.next=13;break}return e.next=6,S.getCharacters(t,c);case 6:return s=e.sent,e.next=9,s.json();case 9:(i=e.sent).results?(u(i.results),i.results.length>10?a([].concat(Object(m.a)(n),Object(m.a)(i.results.slice(0,10)))):a([].concat(Object(m.a)(n),Object(m.a)(i.results))),y.current=!1):v(i.error),e.next=15;break;case 13:a([].concat(Object(m.a)(n),Object(m.a)(j.slice(10,20)))),y.current=!0;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(2),v(e.t0);case 20:O(!1);case 21:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t,c,n){return e.apply(this,arguments)}}();return[Object(n.useCallback)(function(){var e=Object(g.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(""),w(Object(o.a)(Object(o.a)({},k),{},{searchValue:t,page:1})),e.next=4,E(t,1,[]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[k,j]),Object(n.useCallback)(function(){var e=Object(g.a)(f.a.mark((function e(t){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=y.current?k.page+1:k.page,w(Object(o.a)(Object(o.a)({},k),{},{page:c})),e.next=4,E(k.searchValue,c,t,y.current);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[k,j,c]),c,d,p]}(),t=Object(i.a)(e,5),c=t[0],a=t[1],r=t[2],s=t[3],j=t[4],l=Object(n.useCallback)((function(){return a(r)}),[r,a]);return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(O,{onSearch:c}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Simple content list"}),Object(u.jsx)(p,{content:r}),0!==r.length&&Object(u.jsx)("div",{className:"ButtonNext",children:Object(u.jsx)(b,{disabled:j||s,onClick:l,children:"NEXT"})})]})]})});s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.6f8efd85.chunk.js.map