(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0k6O":function(e,t,n){},DW2E:function(e,t,n){var a=n("0/R4"),r=n("Z6vF").onFreeze;n("Xtr8")("freeze",(function(e){return function(t){return e&&a(t)?e(r(t)):t}}))},EUL3:function(e,t,n){},QeBL:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=(n("V+eJ"),n("dZ+Y"),n("LK8F"),n("2Spj"),n("VRzm"),n("Btvt"),n("91GP"),n("DW2E"),n("f3/d"),n("8o2o")),i=n("k1TG");function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=n("2mql"),s=n.n(c);function u(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}var f=r.a.createContext();var h=function(e){return e};function d(e){var t=e.resolve,n=void 0===t?h:t,a=e.render,c=e.onLoad;function s(e,t){void 0===t&&(t={});var s=function(e){return"function"==typeof e?{requireAsync:e}:e}(e),h={};function d(e){return t.cacheKey?t.cacheKey(e):s.resolve?s.resolve(e):null}var m,p=function(e){var r,f;function m(n){var a;return(a=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:d(n)},a.promise=null,u(!n.__chunkExtractor||s.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===t.ssr||(s.requireAsync(n).catch((function(){})),a.loadSync(),n.__chunkExtractor.addChunk(s.chunkName(n))),l(a)):(!1!==t.ssr&&s.isReady&&s.isReady(n)&&a.loadSync(),a)}f=e,(r=m).prototype=Object.create(f.prototype),r.prototype.constructor=r,r.__proto__=f,m.getDerivedStateFromProps=function(e,t){var n=d(e);return Object(i.a)({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var p=m.prototype;return p.componentDidMount=function(){this.mounted=!0,this.state.loading?this.loadAsync():this.state.error||this.triggerOnLoad()},p.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&(this.promise=null,this.loadAsync())},p.componentWillUnmount=function(){this.mounted=!1},p.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},p.triggerOnLoad=function(){var e=this;c&&setTimeout((function(){c(e.state.result,e.props)}))},p.loadSync=function(){if(this.state.loading)try{var e=s.requireSync(this.props),t=n(e,{Loadable:v});this.state.result=t,this.state.loading=!1}catch(a){this.state.error=a}},p.getCacheKey=function(){return d(this.props)||JSON.stringify(this.props)},p.getCache=function(){return h[this.getCacheKey()]},p.setCache=function(e){h[this.getCacheKey()]=e},p.loadAsync=function(){var e=this;if(!this.promise){var a=this.props,r=(a.__chunkExtractor,a.forwardedRef,Object(o.a)(a,["__chunkExtractor","forwardedRef"]));this.promise=s.requireAsync(r).then((function(a){var r=n(a,{Loadable:v});t.suspense&&e.setCache(r),e.safeSetState({result:n(a,{Loadable:v}),loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){e.safeSetState({error:t,loading:!1})}))}return this.promise},p.render=function(){var e=this.props,n=e.forwardedRef,r=e.fallback,l=(e.__chunkExtractor,Object(o.a)(e,["forwardedRef","fallback","__chunkExtractor"])),c=this.state,s=c.error,u=c.loading,f=c.result;if(t.suspense){var h=this.getCache();if(!h)throw this.loadAsync();return a({loading:!1,fallback:null,result:h,options:t,props:Object(i.a)({},l,{ref:n})})}if(s)throw s;var d=r||t.fallback||null;return u?d:a({loading:u,fallback:d,result:f,options:t,props:Object(i.a)({},l,{ref:n})})},m}(r.a.Component),b=(m=p,function(e){return r.a.createElement(f.Consumer,null,(function(t){return r.a.createElement(m,Object.assign({__chunkExtractor:t},e))}))}),v=r.a.forwardRef((function(e,t){return r.a.createElement(b,Object.assign({forwardedRef:t},e))}));return v.preload=function(e){s.requireAsync(e)},v.load=function(e){return s.requireAsync(e)},v}return{loadable:s,lazy:function(e,t){return s(e,Object(i.a)({},t,{suspense:!0}))}}}var m=d({resolve:function(e,t){var n=t.Loadable,a=e.__esModule?e.default:e.default||e;return s()(n,a,{preload:!0}),a},render:function(e){var t=e.result,n=e.props;return r.a.createElement(t,n)}}),p=m.loadable,b=m.lazy,v=d({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.loading,a=e.props;return!n&&a.children?a.children(t):null}}),E=v.loadable,g=v.lazy;var y=p;y.lib=E,b.lib=g;var w=y,O=n("TJpk"),k=n.n(O),A=n("Ac47"),S=n("PIHY"),x=n("/MKj"),C=(n("ogxV"),n("vl8L")),L=(n("gQb3"),{FACEBOOK:"https://www.facebook.com/share.php?u=",TWITTER:"https://twitter.com/intent/tweet?hashtags=iloveyouinfinityproject&text="+encodeURIComponent("Take part in an infinite sound experiment to help raise awareness about autism and love.")+"&url="}),z=function(e,t){window.open(e+encodeURIComponent(t),"SHARE","menubar=no,location=no,resizable=yes,scrollbars=yes,status=no,width=600,height=800")},R=function(e){var t=e.visible,n=C.data.site.siteMetadata.siteUrl;return r.a.createElement("ul",{className:"share-bar"+(t?" --visible":"")},r.a.createElement("li",null,r.a.createElement("a",{"aria-label":"Share on Facebook",className:"button",href:L.FACEBOOK+encodeURIComponent(n),onClick:function(e){e.preventDefault(),z(L.FACEBOOK,n)}},"Facebook")),r.a.createElement("li",null,r.a.createElement("a",{"aria-label":"Share on Twitter",className:"button",href:L.TWITTER+encodeURIComponent(n),onClick:function(e){e.preventDefault(),z(L.TWITTER,n)}},"Twitter")))},_=Object(x.b)((function(e){return{isAboutOpen:e.isAboutOpen,isShareOpen:e.isShareOpen}}),(function(e){return{toggleAbout:function(){return e({type:"TOGGLE_ABOUT"})},toggleShare:function(){return e({type:"TOGGLE_SHARE"})}}}))((function(e){var t=e.toggleAbout,n=e.toggleShare,a=e.isAboutOpen,o=e.isShareOpen;return r.a.createElement("nav",{className:"side-bar"+(a?" --open":"")},r.a.createElement("button",{type:"button",className:"button",onClick:t},a?"Close":"About"),r.a.createElement("button",{type:"button",className:"button",onClick:n},"Share"),r.a.createElement(R,{visible:o}))})),N=(n("0k6O"),n("qzAC"),function(e){var t=e.className,n=void 0===t?"infinity-logo":t;return r.a.createElement("svg",{"aria-label":"I Love You Infinity logo",className:n,height:"101",role:"img",viewBox:"0 0 230 101",width:"230"},r.a.createElement("use",{xlinkHref:"#infinity-logo"}))}),T=function(e){var t=e.className,n=void 0===t?"infinity-logo":t;return r.a.createElement("svg",{"aria-label":"I Love You Infinity logo",className:n,role:"img",viewBox:"0 0 230 101",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("g",{id:"infinity-logo"},r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M48 41H35V0h13v41zM6 42h14V2H6v40zm178.7 31.4c0 4.6-3.6 8.4-8 8.4s-8-3.7-8-8.3c0-4.7 3.6-8.5 8.1-8.5 4.4.1 8 3.9 7.9 8.4zm36 17.3a19.5 19.5 0 01-22 2.9 21.2 21.2 0 01-12.6-19.3c-.3-5.6-2.8-9.3-7.3-10.4-4.5-1-9 1.4-10.7 5.7a10 10 0 003.6 12.1 9 9 0 0012-1.9c.5-.5 1-1 1.3-1.8l.8 2.7-1.4 1.4a11 11 0 01-13.9 1.2 12 12 0 01-4.5-13.9c1.7-5 6.8-8.3 11.9-7.7 5.2.6 9.3 4.7 10 10.2l.3 2.3c.2 2 .4 3.9 1 5.7 2.9 9.4 12.3 15 21.7 13.3a20 20 0 0015.8-20.8 19.8 19.8 0 00-17.1-18.9 19 19 0 00-15.3 5l-.4-.4-.9-1c3.2-3 7-4.9 11.1-5.5A21.1 21.1 0 01227 64.8c3.8 9 1.2 19.7-6.4 25.9zm-21.3-17.3c0-4.6 3.7-8.4 8-8.4 4.5.1 8 3.9 8 8.5 0 4.5-3.6 8.3-8 8.3s-8-3.8-8-8.4zM214 62.2c-4.6-3-10.7-2.5-14.9 1.2l-1 .8-.4.4-.6-1.3-.2-.6c.5-.6.7-.7 1.3-1.2a14.3 14.3 0 0117.7-.3c5.4 4 7.5 11.3 5 17.7a14.7 14.7 0 01-15.4 9.7A15 15 0 01193 76l-.4-2.8c0-1.5-.2-3-.6-4.5-2.2-8-9.6-12.8-17.7-11.7-7.4 1-13.4 8-13.6 15.9a16.5 16.5 0 0013 16.9 15.2 15.2 0 0013.5-3.7l.7-.6.5.8.4.7c-3.8 4.6-11.7 6.4-17.9 4.1a18.9 18.9 0 01-11.8-21.5C161 60 169.4 53.8 179 55c8.7 1 15.5 9 15.7 18.3 0 7 4.7 12.6 11 13.3 6.5.8 12.3-3.3 14-9.8 1.4-5.5-.9-11.4-5.6-14.5zm-39.9 24.2c3.8.8 7.3-.1 10.4-2.6l1-1 .7-.6.8 1.8c-4.6 5.8-14 6.2-19.9 1a15.7 15.7 0 01-3.6-18.5c3-6.2 9.7-9.4 16.3-8a15.2 15.2 0 0111.5 14.8c.2 8.4 5.4 15.2 13.2 16.5a15 15 0 0015.6-6.5c4-5.6 4.4-11.7 1.2-17.8-3-5.9-8.1-8.8-14.6-8.7-4 .1-7.5 1.8-10.6 4.6l-1-1.6c2.7-2.7 5.9-4.3 9.5-4.9a18.3 18.3 0 0120.7 18.2c.2 9.4-7 18-15.9 18.9-9.6 1-18.1-5.5-19.8-15.1-.2-1.2-.3-2.3-.3-3.5-.2-7-5.2-12.7-11.6-13.1a12.8 12.8 0 00-13.6 11c-1 7.3 3.2 13.6 10 15zM162.7 90a21.6 21.6 0 01-6.5-22.6A20.7 20.7 0 01173 51.6c12.4-2.5 24.5 7.6 24.9 20.8.1 3.9 1.2 7.1 4.5 9.3a9.2 9.2 0 0012.9-3 10 10 0 00-2.4-13.1 9.1 9.1 0 00-13.4 2.6 9 9 0 01-.4.7l-.8-3 .6-.5.8-.7a11 11 0 0114-1.1 12 12 0 014.3 14 11.4 11.4 0 01-11.8 7.6c-5.3-.7-9.4-4.8-10-10.3l-.2-2.2-.4-3.5c-2-9.7-11.1-16.8-20.2-15.8a19.8 19.8 0 00-18 20c0 10.2 7.3 18.8 17 20 5.6.6 10.1-.8 15.3-5l.5.4v.1l.1.1.2.3.4.4a20.4 20.4 0 01-28.2.4zm62.6-31c-3.4-4.7-8-7.6-13.5-8.7A22 22 0 00192 56a22.2 22.2 0 00-32.1 1.7c-7.8 9-7.7 22.8 0 31.6a22.2 22.2 0 0032 1.6c11.1 9.6 24.7 6.7 32.2-1.5 7.3-8.3 8-21.2 1.2-30.3zM84.7 28.6c0-4.7-4-7.7-10.1-7.7-6.2 0-10.1 3-10.1 7.7 0 4.6 4 7.6 10 7.6 6.2 0 10.2-3 10.2-7.6zm-33.6 0C51 19.2 60.4 13 74.6 13S98 19.2 98 28.6c0 9.3-9.3 15.4-23.5 15.4S51 38 51 28.6zM110.4 13H96L112 43h17.2l16-30H131l-10.2 21.6L110.3 13zM175.7 26c-.1-3.3-4-5.6-8.7-5.6-4.8 0-8.5 2.3-9 5.6h17.7zm-31.5 2.6c0-9.1 9.4-15.5 23-15.5 13.2 0 22 6.2 22 15.6 0 .8-.1 2-.4 3h-30.5c1.5 3.4 6.6 4.8 12 4.8 5.8 0 11.7-1.3 14.7-3l3.6 6.3a39 39 0 01-19.2 4.3c-15 0-25.2-6-25.2-15.5zM4.2 86.6L0 95.1c4.6 2.7 13 5 21 5 16.4 0 27-7 27-18v-23H34.7V71c0 5.4-3.7 9-9.2 9-4.7 0-7.9-3.3-7.9-8.2V59.1H4v14.1c0 8.4 6.2 14.4 16 14.4 7 0 12.7-3.2 14.5-8.1v2c0 5.7-5.6 9.3-14.4 9.3-5.4 0-11.6-1.9-16-4.2zm81.5-14c0-4.6-4-7.7-10.1-7.7-6.2 0-10.1 3-10.1 7.7 0 4.6 4 7.7 10 7.7 6.2 0 10.2-3 10.2-7.7zm-33.6 0c0-9.4 9.3-15.5 23.5-15.5S99 63.2 99 72.6s-9.3 15.5-23.5 15.5S52 82 52 72.6zm48-14.5v16.4c0 8.4 5.9 13.6 15.2 13.6 7.4 0 13-3.2 15.7-8l1.5 7h11.7v-29h-13.5v13.6c0 5.5-3.5 8.8-9.2 8.8-5 0-8-2.8-8-7.4v-15h-13.3z",fill:"currentColor"})))},I=function(e){var t=e.href,n=e.className,a=void 0===n?"":n,o=e.children;return r.a.createElement("a",{href:t,className:a,target:"_blank",rel:"noopener noreferrer"},o)},j=Object(x.b)((function(e){return{isAboutOpen:e.isAboutOpen}}),(function(e){return{toggleAbout:function(){return e({type:"TOGGLE_ABOUT"})}}}))((function(e){var t=e.isAboutOpen,n=e.toggleAbout;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"about-section-closer"+(t?" --visible":""),onClick:n,onKeyDown:n,role:"button",tabIndex:0,"aria-label":"Close about section"}),r.a.createElement("article",{className:"about-section"+(t?" --visible":"")},r.a.createElement(N,null),r.a.createElement("div",{className:"copy"},r.a.createElement("section",null,r.a.createElement("p",null,"I Love You Infinity is an infinite audio experiment based on the unique way one autistic child expresses his love."),r.a.createElement("p",null,"The project launched on Global Autism Awareness Week 2020 to challenge damaging myths around autism and lack of emotion, and will continue to play forever.")),r.a.createElement("section",null,r.a.createElement("h3",null,"Share Infinite Love"),r.a.createElement("p",null,"Share this website to help raise awareness of the spectrum of ways autistic minds express and experience love. Follow on Instagram and submit stories of love. Exhibit this audio experiment."," ",r.a.createElement(I,{href:"https://www.autism.org.uk/get-involved/donate.aspx"},"Support the National Autistic Society"),"."))),r.a.createElement(I,{className:"about-cta",href:"https://www.instagram.com/iloveyouinfinityproject/"},r.a.createElement("span",null,"Follow")),r.a.createElement("div",{className:"credits"},r.a.createElement("p",null,"Credits"),r.a.createElement("p",null,r.a.createElement(I,{href:"https://thankyouforlookingatmybook.com"},"Lisa Berenson"),r.a.createElement("br",null),r.a.createElement(I,{href:"http://www.orianagaeta.com/"},"Oriana Gaeta"),r.a.createElement("br",null),r.a.createElement(I,{href:"https://goodpraxis.coop"},"Good Praxis")))))})),K=(n("EUL3"),w((function(){return Promise.all([n.e(2),n.e(0),n.e(9)]).then(n.bind(null,"chiQ"))}))),q=Object(x.b)((function(e){return{isExperienceLaunched:e.isExperienceLaunched}}))((function(e){var t=e.isExperienceLaunched;return r.a.createElement("div",{className:"landing-page"+(t?" --hidden":"")},r.a.createElement(T,null),r.a.createElement("div",{className:"launch-bottom-area"},r.a.createElement(K,null),r.a.createElement("p",{className:"cta"},"Launch experiment with sound on")))})),M=w((function(){return Promise.all([n.e(1),n.e(2),n.e(0),n.e(8)]).then(n.bind(null,"gaDx"))}));t.default=function(){return r.a.createElement(A.a,null,r.a.createElement(k.a,null,r.a.createElement("link",{rel:"preconnect",href:"https://cdn.iloveyouinfinity.com"})),r.a.createElement(S.a,{title:"Home"}),r.a.createElement(q,null),r.a.createElement(M,null),r.a.createElement(_,null),r.a.createElement(j,null))}},gQb3:function(e,t,n){},ogxV:function(e,t,n){},qzAC:function(e,t,n){},vl8L:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"siteUrl":"https://iloveyouinfinity.com"}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-0be002149528efbbf527.js.map