(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"48Wk":function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return c});var o=n("VdSF");function r(e){return{type:o.b,data:e}}function a(e){return{type:o.d,content:e}}function i(){return{type:o.c}}function c(e){return{type:o.a,error:e}}},"4m2D":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n("q1tI"),a=c(r),i=c(n("HMs9"));function c(e){return e&&e.__esModule?e:{default:e}}var l=function(e){return e.displayName||e.name||"Component"};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function c(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(c.__proto__||Object.getPrototypeOf(c)).call(this));return e.displayName="LazyLoad"+l(t),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(c,r.Component),o(c,[{key:"render",value:function(){return a.default.createElement(i.default,e,a.default.createElement(t,this.props))}}]),c}()}}},ALdH:function(e,t,n){"use strict";n.r(t);var o=n("ln6h"),r=n.n(o),a=n("O40h"),i=n("zrwo"),c=n("rt45"),l=n("q1tI"),u=n.n(l),f=n("vOnD"),s=n("wEEd"),d=n("aAya"),p=n("N9aZ"),m=n("L3iO"),h=n("/MKj"),v=n("48Wk");function g(){var e=Object(c.a)(["\n      line-height: ",";\n      font-size: ","\n    "]);return g=function(){return e},e}var b={backgroundColor:"#262626",textColor:"#FFFFFF"},y=Object(f.d)(p.a).withConfig({displayName:"contact__CustomWysiwyg",componentId:"s4la6c-0"})(["p,h1{font-size:",";line-height:",";font-weight:normal;line-height:",";",";&:not(:first-child){margin:0.5em 0 0;}}"],function(e){return e.theme.textLarge.fontSize.mobile},function(e){return e.theme.textLarge.lineHeight.mobile},function(e){return e.theme.textLarge.lineHeight.mobile},function(e){return e.theme.tablet(g(),function(e){return e.theme.textLarge.lineHeight.desktop},function(e){return e.theme.textLarge.fontSize.desktop})}),w=function(e){var t=e.compTransform,n=e.compOpacity,o=e.language,r=e.defaultMeta,a=e.contact.content,c=a.blocks,l=a.intro,p=a.seo,h=a.shareImage,v=a.alternateUrls;return u.a.createElement(f.a,{theme:b},u.a.createElement(d.a,{language:o,openingsCount:e.openingsCount,seo:a&&Object(i.a)({},p,{image:h[0]?h[0].url:""}),defaultMeta:r,alternateUrls:a&&v},a&&u.a.createElement(s.a.div,{style:{transform:t.interpolate(function(e){return"translateY(".concat(e,"vw)")}),opacity:n.interpolate(function(e){return e})}},u.a.createElement(y,{size:"medium",content:l}),u.a.createElement(m.a,{blocks:c}))))};w.getInitialProps=function(){var e=Object(a.default)(r.a.mark(function e(t){var n,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,o=t.query,n.dispatch(Object(v.b)()),e.abrupt("return",{query:o});case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();var E=Object(h.b)(function(e){return{contact:e.contact,openingsCount:e.openings.count,defaultMeta:e.defaultMeta}})(w);t.default=E},HMs9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n("q1tI"),a=p(r),i=p(n("i8i4")),c=p(n("17x9")),l=n("Seim"),u=p(n("tvXG")),f=p(n("PTkm")),s=p(n("uUxy")),d=p(n("4m2D"));function p(e){return e&&e.__esModule?e:{default:e}}var m=0,h=0,v="data-lazyload-listened",g=[],b=[],y=!1;try{var w=Object.defineProperty({},"passive",{get:function(){y=!0}});window.addEventListener("test",null,w)}catch(k){}var E=!!y&&{capture:!1,passive:!0},O=function(e){var t=i.default.findDOMNode(e);if(t instanceof HTMLElement){var n=(0,u.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=i.default.findDOMNode(e),o=void 0,r=void 0;try{var a=t.getBoundingClientRect();o=a.top,r=a.height}catch(k){o=m,r=h}var c=window.innerHeight||document.documentElement.clientHeight,l=Math.max(o,0),u=Math.min(c,o+r)-l,f=void 0,s=void 0;try{var d=n.getBoundingClientRect();f=d.top,s=d.height}catch(k){f=m,s=h}var p=f-l,v=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return p-v[0]<=u&&p+s+v[1]>=0}(e,n):function(e){var t=i.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var r=t.getBoundingClientRect();n=r.top,o=r.height}catch(k){n=m,o=h}var a=window.innerHeight||document.documentElement.clientHeight,c=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-c[0]<=a&&n+o+c[1]>=0}(e))?e.visible||(e.props.once&&b.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},_=function(){for(var e=0;e<g.length;++e){var t=g[e];O(t)}b.forEach(function(e){var t=g.indexOf(e);-1!==t&&g.splice(t,1)}),b=[]},C=void 0,x=null,j=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"==typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===C||"debounce"===C&&void 0===this.props.debounce;if(n&&((0,l.off)(e,"scroll",x,E),(0,l.off)(window,"resize",x,E),x=null),x||(void 0!==this.props.debounce?(x=(0,f.default)(_,"number"==typeof this.props.debounce?this.props.debounce:300),C="debounce"):void 0!==this.props.throttle?(x=(0,s.default)(_,"number"==typeof this.props.throttle?this.props.throttle:300),C="throttle"):x=_),this.props.overflow){var o=(0,u.default)(i.default.findDOMNode(this));if(o&&"function"==typeof o.getAttribute){var r=+o.getAttribute(v)+1;1===r&&o.addEventListener("scroll",x,E),o.setAttribute(v,r)}}else if(0===g.length||n){var a=this.props,c=a.scroll,d=a.resize;c&&(0,l.on)(e,"scroll",x,E),d&&(0,l.on)(window,"resize",x,E)}g.push(this),O(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,u.default)(i.default.findDOMNode(this));if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(v)-1;0===t?(e.removeEventListener("scroll",x,E),e.removeAttribute(v)):e.setAttribute(v,t)}}var n=g.indexOf(this);-1!==n&&g.splice(n,1),0===g.length&&((0,l.off)(window,"resize",x,E),(0,l.off)(window,"scroll",x,E))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:a.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}();j.propTypes={once:c.default.bool,height:c.default.oneOfType([c.default.number,c.default.string]),offset:c.default.oneOfType([c.default.number,c.default.arrayOf(c.default.number)]),overflow:c.default.bool,resize:c.default.bool,scroll:c.default.bool,children:c.default.node,throttle:c.default.oneOfType([c.default.number,c.default.bool]),debounce:c.default.oneOfType([c.default.number,c.default.bool]),placeholder:c.default.node,scrollContainer:c.default.oneOfType([c.default.string,c.default.object]),unmountIfInvisible:c.default.bool},j.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};t.lazyload=d.default;t.default=j,t.forceCheck=_},L3iO:function(e,t,n){"use strict";var o=n("rt45"),r=n("q1tI"),a=n.n(r),i=n("vOnD"),c=n("YFqc"),l=n.n(c),u=(n("17x9"),n("GkXj")),f=n.n(u),s=n("QscE"),d=n("qNsG"),p=n("HMs9"),m=n.n(p),h=n("i3fX");function v(){var e=Object(o.a)(["\n    width: ",";\n  "]);return v=function(){return e},e}var g=i.d.div.withConfig({displayName:"Image__Images",componentId:"knxnn4-0"})(["display:flex;flex-wrap:wrap;"]),b=i.d.img.withConfig({displayName:"Image__Img",componentId:"knxnn4-1"})(["display:block;width:100%;height:100%;margin:0 auto;object-fit:cover;",""],function(e){return e.theme.tablet(v(),function(e){var t=e.items;return"calc(100% / ".concat(t,")")})}),y=function(e){var t=e.content,n=Object(d.a)(e,["content"]);return a.a.createElement(h.a,n,a.a.createElement(g,null,t.map(function(n){var o=t.length;return a.a.createElement(m.a,{key:n.url,offset:1e3,height:500,once:!0},1===t.length?a.a.createElement(b,{srcSet:"\n                    ".concat(n.url,"?w=1440&h=").concat("fullScreen"===e.size?"686":"847","&fit=crop-").concat(100*n.focalPoint.x,"-").concat(100*n.focalPoint.y," 1440w,\n                    ").concat(n.url,"?w=1280&h=").concat("fullScreen"===e.size?"609":"753","&fit=crop-").concat(100*n.focalPoint.x,"-").concat(100*n.focalPoint.y," 1280w,\n                    ").concat(n.url,"?w=1024&h=").concat("fullScreen"===e.size?"488":"602","&fit=crop-").concat(100*n.focalPoint.x,"-").concat(100*n.focalPoint.y," 1024w,\n                    ").concat(n.url,"?w=768&h=").concat("fullScreen"===e.size?"366":"451","&fit=crop-").concat(100*n.focalPoint.x,"-").concat(100*n.focalPoint.y," 768w,\n                    ").concat(n.url,"?w=480&h=").concat("fullScreen"===e.size?"229":"282","&fit=crop-").concat(100*n.focalPoint.x,"-").concat(100*n.focalPoint.y," 480w,\n                    "),sizes:"".concat(100/o,"vw"),src:n.url,alt:n.altText,items:t.length}):a.a.createElement(b,{srcSet:"\n                    ".concat(n.url,"?w=720&h=720&fit=crop-").concat(100*n.focalPoint.x,"-").concat(100*n.focalPoint.y," 720w,\n                    ").concat(n.url,"?w=640&h=640&fit=crop-").concat(100*n.focalPoint.x,"-").concat(100*n.focalPoint.y," 640w,\n                    ").concat(n.url,"?w=512&h=512&fit=crop-").concat(100*n.focalPoint.x,"-").concat(100*n.focalPoint.y," 512w,\n                    ").concat(n.url,"?w=384&h=384&fit=crop-").concat(100*n.focalPoint.x,"-").concat(100*n.focalPoint.y," 384w,\n                    ").concat(n.url,"?w=240&h=240&fit=crop-").concat(100*n.focalPoint.x,"-").concat(100*n.focalPoint.y," 240w,\n                  "),sizes:"".concat(100/o,"vw"),src:n.url,alt:n.altText,items:t.length}))})))},w=n("N9aZ"),E=n("stfl"),O=n("CpUV"),_=function(e){var t,n,o,r;return e&&(e.includes("/studio/")?(t="/page",o=e.replace("/studio/",""),n="isPage=true",r="".concat(t,"?slug=").concat(o,"&").concat(n)):e.includes("/cases/")?(t="/homepage",o=e.replace("/cases/",""),n="isCase=true",r="".concat(t,"?slug=").concat(o,"&").concat(n)):e.includes("/careers/")?(t="/career",o=e.replace("/careers/",""),n="isCareer=true",r="".concat(t,"?slug=").concat(o,"&").concat(n)):r=e),r?r.replace("/nl","").replace("/en",""):"/"};function C(){var e=Object(o.a)(["\n      font-size: 1.8rem;\n    "]);return C=function(){return e},e}function x(){var e=Object(o.a)(["\n      margin: 0 0 4rem;\n    "]);return x=function(){return e},e}function j(){var e=Object(o.a)(["\n    justify-content: center;\n    width: 100%;\n    margin: 2.5rem 0 0;\n    padding: 3.5rem 0;\n    border: 1px solid ",";\n    &:first-child {\n      margin: 5rem 0 0;\n    }\n  "]);return j=function(){return e},e}function k(){var e=Object(o.a)(["\n    order: 1;\n  "]);return k=function(){return e},e}function P(){var e=Object(o.a)(["\n    flex: 0 0 20rem;\n  "]);return P=function(){return e},e}function T(){var e=Object(o.a)(["\n      flex-wrap: wrap;\n  "]);return T=function(){return e},e}var z=i.d.div.withConfig({displayName:"Opening__OpeningItem",componentId:"b060r3-0"})(["display:flex;",""],function(e){return e.theme.mobile(T())}),N=i.d.div.withConfig({displayName:"Opening__OpeningCta",componentId:"b060r3-1"})(["flex:0 0 100%;margin-right:2rem;"," ",""],function(e){return e.theme.tablet(P())},function(e){return e.theme.mobile(k())}),S=Object(i.d)(O.a).withConfig({displayName:"Opening__OpeningButton",componentId:"b060r3-2"})(["margin:0 0 4rem;transition:all 0.25s;"," &:hover{color:",";}"],function(e){return e.theme.mobile(j(),function(e){return e.theme.textColor})},function(e){var t=e.theme;return e.arrowSmall?t.textColor:t.textColorTertiary}),L=Object(i.d)(E.a).withConfig({displayName:"Opening__Title",componentId:"b060r3-3"})(["font-family:inherit;margin:0 0 2rem;"]),I=Object(i.d)(w.a).withConfig({displayName:"Opening__CustomWysiwyg",componentId:"b060r3-4"})(["margin:0 0 2rem;",";p,h2{font-size:2rem;",";&:not(:first-child){margin:0.5em 0 0;}}p{font-family:'Akagi Pro';line-height:1.3;}"],function(e){return e.theme.tablet(x())},function(e){return e.theme.tablet(C())}),M=function(e){var t=e.language,n=e.content;return a.a.createElement(h.a,{size:"small",position:"center"},n.map(function(e){return a.a.createElement(z,{key:e.id},a.a.createElement(N,null,a.a.createElement(S,{arrowSmall:!0,href:"mailto:".concat(e.contactInformation[0].email)},"Apply now"),e.pdf&&e.pdf[0]&&a.a.createElement(S,{target:"_blank",href:"".concat(e.pdf[0].url)},"Download pdf")),a.a.createElement("div",null,a.a.createElement(L,{small:!0},"Your profile"),a.a.createElement(I,{content:e.intro}),a.a.createElement(O.a,{plus:!0,href:_("/".concat(e.uri)),asPath:"/".concat(t,"/").concat(e.uri)},"read more")))}))},A=n("20a2"),H=n("+IKJ"),D=n("SPNT");function R(){var e=Object(o.a)(["\n    font-size: 1.7rem;\n    &:last-child:not(:only-child) {\n      display: none;\n    }\n  "]);return R=function(){return e},e}function F(){var e=Object(o.a)(["\n    min-width: 250px;\n  "]);return F=function(){return e},e}function q(){var e=Object(o.a)(["\n    padding-right: 5rem;\n    \n    &:hover {\n      color: ",";\n    }\n  "]);return q=function(){return e},e}function U(){var e=Object(o.a)(["\n    font-size: 2rem;\n  "]);return U=function(){return e},e}var W=i.d.ul.withConfig({displayName:"List__ListWrapper",componentId:"sc-9gg3qp-0"})(["list-style:none;margin:0;padding:0;"]),X=i.d.li.withConfig({displayName:"List__ListItem",componentId:"sc-9gg3qp-1"})(["margin:0;border-bottom:1px solid ",";font-size:1.8rem;line-height:1.1;padding:1.8rem 0;",""],function(e){return e.theme.textColorTertiary},function(e){return e.theme.tablet(U())}),B=i.d.a.withConfig({displayName:"List__ListLink",componentId:"sc-9gg3qp-2"})(["display:flex;align-items:baseline;justify-content:space-between;text-decoration:none;color:",";transition:color 0.25s;",""],function(e){return e.theme.textColor},function(e){return e.theme.tablet(q(),function(e){var t=e.theme;return"#FFFFFF"===t.textColor?t.textColorTertiary:Object(H.a)(.6,t.textColor)})}),G=i.d.div.withConfig({displayName:"List__ListMeta",componentId:"sc-9gg3qp-3"})(["display:flex;justify-content:space-between;flex-shrink:0;",""],function(e){return e.theme.tablet(F())}),V=Object(i.d)(D.a).withConfig({displayName:"List__ListMetaItem",componentId:"sc-9gg3qp-4"})(["text-transform:none;color:inherit;",""],function(e){return e.theme.mobile(R())}),J=Object(A.withRouter)(function(e){var t=e.content,n=(e.router,Object(d.a)(e,["content","router"]));return a.a.createElement(h.a,n,t?a.a.createElement(W,null,t.map(function(t,n){var o=t.title,r=t.intro,i=t.case?"/".concat(t.case[0].uri):"/".concat(t.uri);return a.a.createElement(X,{key:i+n},a.a.createElement(l.a,{passHref:!0,href:_(i),as:"/".concat(e.language).concat(i,"/"),scroll:!1},a.a.createElement(B,null,o,a.a.createElement(G,null,a.a.createElement(V,{as:"p",small:!0},t.hours?t.hours:r),a.a.createElement(V,{as:"p",small:!0},t.city?t.city:"See case")))))})):a.a.createElement(Loading,{small:!0}))});function Y(){var e=Object(o.a)(["\n      line-height: ",";\n      font-size: ","\n    "]);return Y=function(){return e},e}var K=Object(i.d)(w.a).withConfig({displayName:"Blocks__CustomWysiwyg",componentId:"r7o2zc-0"})(["p,ul{font-size:",";font-weight:normal;font-family:",";line-height:",";",";&:not(:first-child){margin:0.5em 0 0;}}h2,h3,h4,h5,h6{font-size:",";font-family:",";}"],function(e){var t=e.theme;return e.small?t.textSmall.fontSize.mobile:t.textLarge.fontSize.mobile},function(e){var t=e.theme;return e.small?t.fontSecundary:t.fontPrimary},function(e){var t=e.theme;return e.small?t.textSmall.lineHeight:t.textLarge.lineHeight.mobile},function(e){return e.theme.desktop(Y(),function(e){var t=e.theme;return e.small?t.textSmall.lineHeight:t.textLarge.lineHeight.desktop},function(e){var t=e.theme;return e.small?t.textSmall.fontSize.desktop:t.textLarge.fontSize.desktop})},function(e){var t=e.theme;return e.small?t.textSmall.fontSize.mobile:t.textLarge.fontSize.desktop},function(e){var t=e.theme;e.small;return t.fontPrimary}),Q={replace:function(e){var t=e.name,n=e.attribs,o=e.children;if(t)return"a"===t?a.a.createElement(l.a,{href:_(n.href),as:"/en"+n.href+"/",scroll:!1},a.a.createElement("a",{href:"/en"+n.href+"/"},f()(o,Q))):void 0}};t.a=function(e){var t=e.language,n=e.blocks;return a.a.createElement(a.a.Fragment,null,n.map(function(e){var n=e.type,o=e.id,r=e.columns,i=e.position,c=e.images,l=e.image,u=e.fullscreenImage,f=e.smallText,d=e.text,p=e.items;return"blockOpenings"===e.type?a.a.createElement(M,{key:o,language:t,content:p}):"blockTextColumns"===e.type?a.a.createElement(s.a,{key:o,columns:r[0].length,content:r[0],size:4===r[0].length?"medium":"",position:4===r[0].length?"right":""}):"blockDoubleImage"===n||"blockImage"===n?a.a.createElement(y,{key:o,size:u?"fullScreen":c?"":"medium",position:i||"right",content:c||l}):"blockContent"===n&&d?a.a.createElement(K,{small:f,key:o,size:f?"small":"medium",position:f?"center":"",content:d,parserOptions:Q}):"blockList"===n?a.a.createElement(J,{key:o,language:t,size:"small",position:"center",content:p}):void 0}))}},PTkm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o=void 0,r=void 0,a=void 0,i=void 0,c=void 0,l=function l(){var u=+new Date-i;u<t&&u>=0?o=setTimeout(l,t-u):(o=null,n||(c=e.apply(a,r),o||(a=null,r=null)))};return function(){a=this,r=arguments,i=+new Date;var u=n&&!o;return o||(o=setTimeout(l,t)),u&&(c=e.apply(a,r),a=null,r=null),c}}},Seim:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,o){o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,function(t){n.call(e,t||window.event)})},t.off=function(e,t,n,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}},VdSF:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"d",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return i});var o="@CAREERS/CONTACT_CONTENT_REQUEST",r="@CAREERS/CONTACT_CONTENT_SUCCESS",a="@CAREERS/CONTACT_CONTENT_RESOLVED",i="@CAREERS/CONTACT_CONTENT_FAILURE"},lqnA:function(e,t,n){(window._next_P=window._next_P||[]).push(["/contact",function(){var e=n("ALdH");return{page:e.default||e}}])},tvXG:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(o),a=r.position,i=r.overflow,c=r["overflow-x"],l=r["overflow-y"];if("static"===a&&t)o=o.parentNode;else{if(n.test(i)&&n.test(c)&&n.test(l))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},uUxy:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o,r;return t||(t=250),function(){var a=n||this,i=+new Date,c=arguments;o&&i<o+t?(clearTimeout(r),r=setTimeout(function(){o=i,e.apply(a,c)},t)):(o=i,e.apply(a,c))}}}},[["lqnA",1,0]]]);