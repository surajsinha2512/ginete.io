(this.webpackJsonpsuraj=this.webpackJsonpsuraj||[]).push([[0],{78:function(e,t,c){},79:function(e,t,c){"use strict";c.r(t);var r=c(4),n=c(1),s=c(9),a=c.n(s),o=c(19),i=c(11),l=c(41),d=c(42),u="PRODUCT_LIST_REQUEST",j="PRODUCT_LIST_SUCCESS",p="PRODUCT_LIST_FAIL",h=Object(i.combineReducers)({productListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return{loading:!0,products:[]};case j:return{loading:!1,products:t.payload};case p:return{loading:!1,error:t.payload};default:return e}}}),b=[l.a],O=Object(i.createStore)(h,{},Object(d.composeWithDevTools)(i.applyMiddleware.apply(void 0,b))),f=c(84),x=c(85),m=c(10),g=function(e){var t=e.product;return console.log(t),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(m.h,{children:Object(r.jsxs)(m.c,{style:{width:"25rem"},children:[Object(r.jsx)(m.e,{className:"img-fluid",src:t.provider.logoUrl,waves:!0}),Object(r.jsxs)(m.d,{children:[Object(r.jsx)(m.g,{style:{color:"white"},children:t.details.name}),Object(r.jsx)(m.f,{style:{color:"white"},children:"location:-".concat(t.location.name)}),Object(r.jsxs)(m.f,{style:{color:"white"},children:["Price:-",t.price.total]})]})]})})})},y=c(30),v=c.n(y),w=c(47),S=c(83),T=function(){return Object(r.jsx)(S.a,{animation:"border",role:"status",style:{width:"100px",height:"100px",margin:"auto",display:"block"},children:Object(r.jsx)("span",{className:"sr-only",children:"Loading..."})})},L=(c(78),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.productListReducer})),c=t.loading,s=t.products;return Object(n.useEffect)((function(){e(function(){var e=Object(w.a)(v.a.mark((function e(t){var c,r,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:u}),e.next=4,fetch("https://api.holidu.com/rest/v6/search/offers?searchTerm=Mallorca,%20Spanien");case 4:return c=e.sent,e.next=7,c.json();case 7:r=e.sent,n=r.offers,console.log(r),t({type:j,payload:n}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),t({type:p,payload:e.t0.message});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),console.log(t),Object(r.jsx)(r.Fragment,{children:c?Object(r.jsx)(T,{}):Object(r.jsx)(f.a,{className:"container",children:s.map((function(e){return Object(r.jsx)(x.a,{sm:12,md:6,lg:4,xl:3,style:{},className:"col",children:Object(r.jsx)(g,{product:e})})}))})})});var R=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(L,{})})};a.a.render(Object(r.jsx)(o.a,{store:O,children:Object(r.jsx)(R,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.0eb7ed78.chunk.js.map