(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{McOE:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return o});var r="@ARTICLES/ARTICLES_CONTENT_REQUEST",a="@ARTICLES/ARTICLES_CONTENT_SUCCESS",i="@ARTICLES/ARTICLES_CONTENT_RESOLVED",o="@ARTICLES/ARTICLES_CONTENT_FAILURE"},hDBf:function(e,t,n){(window._next_P=window._next_P||[]).push(["/articles",function(){var e=n("yRol");return{page:e.default||e}}])},rWEs:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"d",function(){return i}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return u});var r=n("McOE");function a(e){return{type:r.b,data:e}}function i(e){return{type:r.d,content:e}}function o(){return{type:r.c}}function u(e){return{type:r.a,error:e}}},yRol:function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),a=n.n(r),i=n("O40h"),o=n("zrwo"),u=n("rt45"),c=n("q1tI"),l=n.n(c),m=n("vOnD"),s=n("wEEd"),d=(n("17x9"),n("YFqc")),f=n.n(d),p=n("JRPe"),g=n("SPNT"),h=n("CpUV");function E(){var e=Object(u.a)(["\n    font-size: 4.1rem;    \n  "]);return E=function(){return e},e}function b(){var e=Object(u.a)(["\n    &:hover {\n      svg {\n        transform: translateX(0.75rem);\n      }\n    }\n  "]);return b=function(){return e},e}var w=m.d.a.withConfig({displayName:"CtaGridItem__GridItem",componentId:"i48951-0"})(["position:relative;text-decoration:none;border:1px solid #002d25;width:32.5%;margin:0 0 1.5rem;@supports (display:grid){width:100%;margin:0;}svg{transition:all 0.35s ease-out;will-change:transform;}",""],function(e){return e.theme.tablet(b())}),C=m.d.div.withConfig({displayName:"CtaGridItem__GridItemContent",componentId:"i48951-1"})(["display:flex;flex-direction:column;justify-content:space-between;min-height:30rem;height:100%;padding:3rem 2.25rem 1.6rem 2.25rem;"]),y=m.d.div.withConfig({displayName:"CtaGridItem__GridItemFooter",componentId:"i48951-2"})(["display:flex;justify-content:space-between;align-items:flex-end;color:white;"]),I=m.d.img.withConfig({displayName:"CtaGridItem__GridItemImage",componentId:"i48951-3"})(["width:6.5rem;height:6.5rem;border-radius:50%;object-fit:cover;"]),_=Object(m.d)(g.a).withConfig({displayName:"CtaGridItem__Title",componentId:"i48951-4"})(["",""],function(e){return e.theme.tablet(E())}),v=Object(m.d)(g.a).withConfig({displayName:"CtaGridItem__SubTitle",componentId:"i48951-5"})(["font-family:inherit;margin:0 0 1rem;"]),T=Object(m.d)("span").withConfig({displayName:"CtaGridItem__ButtonText",componentId:"i48951-6"})(["text-transform:lowercase;"]),O=function(e){var t=e.language,n=e.title,r=e.subtitle,a=e.href,i=e.author;return l.a.createElement(f.a,{href:"/page?slug=".concat(a),as:"/".concat(t,"/studio/").concat(a,"/"),scroll:!1,passHref:!0},l.a.createElement(w,null,l.a.createElement(C,null,l.a.createElement("div",null,l.a.createElement(v,{small:!0,as:"p"},r),l.a.createElement(_,{as:"h3"},n)),l.a.createElement(y,null,l.a.createElement(I,{src:"".concat(i.mainImage[0].url,"?w=100"),alt:i.title}),l.a.createElement(h.a,{as:"p",arrow:!0,noAnim:!0},l.a.createElement(T,null,l.a.createElement(p.a,{id:"studio.read_more"})))))))};function N(){var e=Object(u.a)(["\n      grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));\n    "]);return N=function(){return e},e}var x=m.d.div.withConfig({displayName:"CtaGrid__Grid",componentId:"pzxlzn-0"})(["display:flex;flex-wrap:wrap;justify-content:space-between;@supports (display:grid){display:grid;grid-gap:1.3rem;",";}"],function(e){return e.theme.tablet(N())}),j=Object(m.d)(g.a).withConfig({displayName:"CtaGrid__GridTitle",componentId:"pzxlzn-1"})(["margin:10rem 0 2rem;"]),S=function(e){var t=e.language,n=e.title,r=e.items;return l.a.createElement(l.a.Fragment,null,n&&l.a.createElement(j,{as:"h3"},n),l.a.createElement(x,null,r.map(function(e,n){var r=e.title,a=e.subtitle,i=e.slug,o=e.authorProfile;return l.a.createElement(O,{language:t,key:i+n,title:r,subtitle:a,href:i,author:o[0]})})))},G=n("aAya"),L=n("N9aZ"),R=n("/MKj"),z=n("rWEs");function A(){var e=Object(u.a)(["\n        line-height: ",";\n        font-size: ","\n      "]);return A=function(){return e},e}var k={backgroundColor:"#024436",textColor:"white"},M=function(e){var t=e.compTransform,n=e.compOpacity,r=Object(m.d)(L.a).withConfig({displayName:"articles__CustomWysiwyg",componentId:"kphbah-0"})(["margin-bottom:4.5rem;p,h1{font-size:",";line-height:",";font-weight:normal;line-height:",";",";&:not(:first-child){margin:0.5em 0 0;}}"],function(e){return e.theme.textLarge.fontSize.mobile},function(e){return e.theme.textLarge.lineHeight.mobile},function(e){return e.theme.textLarge.lineHeight.mobile},function(e){return e.theme.tablet(A(),function(e){return e.theme.textLarge.lineHeight.desktop},function(e){return e.theme.textLarge.fontSize.desktop})}),a=e.language,i=e.defaultMeta,u=e.articles.content,c=u.intro,d=u.landingPages,f=u.seo,p=u.shareImage,g=u.alternateUrls;return l.a.createElement(m.a,{theme:k},l.a.createElement(l.a.Fragment,null,l.a.createElement(G.a,{language:a,openingsCount:e.openingsCount,seo:u&&Object(o.a)({},f,{image:p[0]?p[0].url:""}),defaultMeta:i,alternateUrls:u&&g},u&&l.a.createElement(s.a.div,{style:{transform:t.interpolate(function(e){return"translateY(".concat(e,"vw)")}),opacity:n.interpolate(function(e){return e})}},l.a.createElement(r,{size:"medium",content:c}),l.a.createElement(S,{language:e.language,items:d,title:""})))))};M.getInitialProps=function(){var e=Object(i.default)(a.a.mark(function e(t){var n,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,r=t.query,n.dispatch(Object(z.b)()),e.abrupt("return",{query:r});case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();var P=Object(R.b)(function(e){return{articles:e.articles,openingsCount:e.openings.count,defaultMeta:e.defaultMeta}})(M);t.default=P}},[["hDBf",1,0]]]);