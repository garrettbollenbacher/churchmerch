exports.id=782,exports.ids=[782],exports.modules={2125:(e,t,r)=>{"use strict";r.d(t,{Z:()=>createLucideIcon});var n=r(9885);/**
 * @license lucide-react v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let toKebabCase=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),mergeClasses=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,n.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:i="",children:l,iconNode:s,...u},c)=>(0,n.createElement)("svg",{ref:c,...o,width:t,height:t,stroke:e,strokeWidth:a?24*Number(r)/Number(t):r,className:mergeClasses("lucide",i),...u},[...s.map(([e,t])=>(0,n.createElement)(e,t)),...Array.isArray(l)?l:[l]])),createLucideIcon=(e,t)=>{let r=(0,n.forwardRef)(({className:r,...o},i)=>(0,n.createElement)(a,{ref:i,iconNode:t,className:mergeClasses(`lucide-${toKebabCase(e)}`,r),...o}));return r.displayName=`${e}`,r}},6995:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(2125);let o=(0,n.Z)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]])},4401:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return addLocale}}),r(6945);let addLocale=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6670:(e,t,r)=>{"use strict";function getDomainLocale(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(6945),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},614:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let n=r(567),o=n._(r(9885)),a=r(2861),i=r(58),l=r(602),s=r(4679),u=r(4401),c=r(713),f=r(2428),d=r(2229),p=r(6670),h=r(6879),m=r(3678);function formatStringOrUrl(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let g=o.default.forwardRef(function(e,t){let r,n;let{href:l,as:g,children:y,prefetch:b=null,passHref:v,replace:P,shallow:O,scroll:R,locale:j,onClick:S,onMouseEnter:w,onTouchStart:_,legacyBehavior:E=!1,...x}=e;r=y,E&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let N=o.default.useContext(c.RouterContext),M=o.default.useContext(f.AppRouterContext),C=null!=N?N:M,U=!N,L=!1!==b,I=null===b?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:k,as:T}=o.default.useMemo(()=>{if(!N){let e=formatStringOrUrl(l);return{href:e,as:g?formatStringOrUrl(g):e}}let[e,t]=(0,a.resolveHref)(N,l,!0);return{href:e,as:g?(0,a.resolveHref)(N,g):t||e}},[N,l,g]),A=o.default.useRef(k),z=o.default.useRef(T);E&&(n=o.default.Children.only(r));let D=E?n&&"object"==typeof n&&n.ref:t,[W,K,F]=(0,d.useIntersection)({rootMargin:"200px"}),$=o.default.useCallback(e=>{(z.current!==T||A.current!==k)&&(F(),z.current=T,A.current=k),W(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[T,D,k,F,W]);o.default.useEffect(()=>{},[T,k,K,j,L,null==N?void 0:N.locale,C,U,I]);let B={ref:$,onClick(e){E||"function"!=typeof S||S(e),E&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),C&&!e.defaultPrevented&&function(e,t,r,n,a,l,s,u,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,i.isLocalURL)(r)))return;e.preventDefault();let navigate=()=>{let e=null==s||s;"beforePopState"in t?t[a?"replace":"push"](r,n,{shallow:l,locale:u,scroll:e}):t[a?"replace":"push"](n||r,{forceOptimisticNavigation:!f,scroll:e})};c?o.default.startTransition(navigate):navigate()}(e,C,k,T,P,O,R,j,U,L)},onMouseEnter(e){E||"function"!=typeof w||w(e),E&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e)},onTouchStart(e){E||"function"!=typeof _||_(e),E&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e)}};if((0,s.isAbsoluteUrl)(T))B.href=T;else if(!E||v||"a"===n.type&&!("href"in n.props)){let e=void 0!==j?j:null==N?void 0:N.locale,t=(null==N?void 0:N.isLocaleDomain)&&(0,p.getDomainLocale)(T,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);B.href=t||(0,h.addBasePath)((0,u.addLocale)(T,e,null==N?void 0:N.defaultLocale))}return E?o.default.cloneElement(n,B):o.default.createElement("a",{...x,...B},r)}),y=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4149:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{requestIdleCallback:function(){return r},cancelIdleCallback:function(){return n}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2861:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return resolveHref}});let n=r(6141),o=r(602),a=r(7739),i=r(4679),l=r(6945),s=r(58),u=r(3751),c=r(4006);function resolveHref(e,t,r){let f;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),p=d.match(/^[a-zA-Z]{1,}:\/\//),h=p?d.slice(p[0].length):d,m=h.split("?");if((m[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,i.normalizeRepeatedSlashes)(h);d=(p?p[0]:"")+t}if(!(0,s.isLocalURL)(d))return r?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{let e=new URL(d,f);e.pathname=(0,l.normalizePathTrailingSlash)(e.pathname);let t="";if((0,u.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,n.searchParamsToUrlQuery)(e.searchParams),{result:i,params:l}=(0,c.interpolateAs)(e.pathname,e.pathname,r);i&&(t=(0,o.formatWithValidation)({pathname:i,hash:e.hash,query:(0,a.omit)(r,l)}))}let i=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return r?[i,t||i]:i}catch(e){return r?[d]:d}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2229:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let n=r(9885),o=r(4149),a="function"==typeof IntersectionObserver,i=new Map,l=[];function useIntersection(e){let{rootRef:t,rootMargin:r,disabled:s}=e,u=s||!a,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(a){if(u||c)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:a}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=i.get(n)))return t;let o=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:a,elements:o},l.push(r),i.set(r,t),t}(r);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),i.delete(n);let e=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[u,r,t,c,d.current]);let h=(0,n.useCallback)(()=>{f(!1)},[]);return[p,c,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},821:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return escapeStringRegexp}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function escapeStringRegexp(e){return r.test(e)?e.replace(n,"\\$&"):e}},602:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return formatUrl},urlObjectKeys:function(){return i},formatWithValidation:function(){return formatWithValidation}});let n=r(823),o=n._(r(6141)),a=/https?|ftp|gopher|file/;function formatUrl(e){let{auth:t,hostname:r}=e,n=e.protocol||"",i=e.pathname||"",l=e.hash||"",s=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:r&&(u=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(u+=":"+e.port)),s&&"object"==typeof s&&(s=String(o.urlQueryToSearchParams(s)));let c=e.search||s&&"?"+s||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||a.test(n))&&!1!==u?(u="//"+(u||""),i&&"/"!==i[0]&&(i="/"+i)):u||(u=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),""+n+u+(i=i.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+l}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function formatWithValidation(e){return formatUrl(e)}},3751:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getSortedRoutes:function(){return n.getSortedRoutes},isDynamicRoute:function(){return o.isDynamicRoute}});let n=r(7373),o=r(1534)},4006:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return interpolateAs}});let n=r(3630),o=r(680);function interpolateAs(e,t,r){let a="",i=(0,o.getRouteRegex)(e),l=i.groups,s=(t!==e?(0,n.getRouteMatcher)(i)(t):"")||r;a=e;let u=Object.keys(l);return u.every(e=>{let t=s[e]||"",{repeat:r,optional:n}=l[e],o="["+(r?"...":"")+e+"]";return n&&(o=(t?"":"/")+"["+o+"]"),r&&!Array.isArray(t)&&(t=[t]),(n||e in s)&&(a=a.replace(o,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(a=""),{params:u,result:a}}},1534:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return isDynamicRoute}});let r=/\/\[[^/]+?\](?=\/|$)/;function isDynamicRoute(e){return r.test(e)}},58:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return isLocalURL}});let n=r(4679),o=r(9760);function isLocalURL(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},7739:(e,t)=>{"use strict";function omit(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return omit}})},6141:(e,t)=>{"use strict";function searchParamsToUrlQuery(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function stringifyUrlQueryParam(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function urlQueryToSearchParams(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,n]=e;Array.isArray(n)?n.forEach(e=>t.append(r,stringifyUrlQueryParam(e))):t.set(r,stringifyUrlQueryParam(n))}),t}function assign(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{searchParamsToUrlQuery:function(){return searchParamsToUrlQuery},urlQueryToSearchParams:function(){return urlQueryToSearchParams},assign:function(){return assign}})},3630:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return getRouteMatcher}});let n=r(4679);function getRouteMatcher(e){let{re:t,groups:r}=e;return e=>{let o=t.exec(e);if(!o)return!1;let decode=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},a={};return Object.keys(r).forEach(e=>{let t=r[e],n=o[t.pos];void 0!==n&&(a[e]=~n.indexOf("/")?n.split("/").map(e=>decode(e)):t.repeat?[decode(n)]:decode(n))}),a}}},680:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRouteRegex:function(){return getRouteRegex},getNamedRouteRegex:function(){return getNamedRouteRegex},getNamedMiddlewareRegex:function(){return getNamedMiddlewareRegex}});let n=r(4265),o=r(821),a=r(6923);function parseParameter(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function getParametrizedRoute(e){let t=(0,a.removeTrailingSlash)(e).slice(1).split("/"),r={},i=1;return{parameterizedRoute:t.map(e=>{let t=n.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&a){let{key:e,optional:n,repeat:l}=parseParameter(a[1]);return r[e]={pos:i++,repeat:l,optional:n},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(!a)return"/"+(0,o.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:n}=parseParameter(a[1]);return r[e]={pos:i++,repeat:t,optional:n},t?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function getRouteRegex(e){let{parameterizedRoute:t,groups:r}=getParametrizedRoute(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function getSafeKeyFromSegment(e){let{getSafeRouteKey:t,segment:r,routeKeys:n,keyPrefix:o}=e,{key:a,optional:i,repeat:l}=parseParameter(r),s=a.replace(/\W/g,"");o&&(s=""+o+s);let u=!1;return(0===s.length||s.length>30)&&(u=!0),isNaN(parseInt(s.slice(0,1)))||(u=!0),u&&(s=t()),o?n[s]=""+o+a:n[s]=""+a,l?i?"(?:/(?<"+s+">.+?))?":"/(?<"+s+">.+?)":"/(?<"+s+">[^/]+?)"}function getNamedParametrizedRoute(e,t){let r;let i=(0,a.removeTrailingSlash)(e).slice(1).split("/"),l=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),s={};return{namedParameterizedRoute:i.map(e=>{let r=n.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);return r&&a?getSafeKeyFromSegment({getSafeRouteKey:l,segment:a[1],routeKeys:s,keyPrefix:t?"nxtI":void 0}):a?getSafeKeyFromSegment({getSafeRouteKey:l,segment:a[1],routeKeys:s,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)}).join(""),routeKeys:s}}function getNamedRouteRegex(e,t){let r=getNamedParametrizedRoute(e,t);return{...getRouteRegex(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function getNamedMiddlewareRegex(e,t){let{parameterizedRoute:r}=getParametrizedRoute(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:o}=getNamedParametrizedRoute(e,!1);return{namedRegex:"^"+o+(n?"(?:(/.*)?)":"")+"$"}}},7373:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return getSortedRoutes}});let UrlNode=class UrlNode{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let r=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&r.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');r.unshift(t)}return null!==this.restSlugName&&r.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&r.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),r}_insert(e,t,r){if(0===e.length){this.placeholder=!1;return}if(r)throw Error("Catch-all must be the last part of the URL.");let n=e[0];if(n.startsWith("[")&&n.endsWith("]")){let o=n.slice(1,-1),a=!1;if(o.startsWith("[")&&o.endsWith("]")&&(o=o.slice(1,-1),a=!0),o.startsWith("...")&&(o=o.substring(3),r=!0),o.startsWith("[")||o.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+o+"').");if(o.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+o+"').");function handleSlug(e,r){if(null!==e&&e!==r)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+r+"').");t.forEach(e=>{if(e===r)throw Error('You cannot have the same slug name "'+r+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===n.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+r+'" differ only by non-word symbols within a single dynamic path')}),t.push(r)}if(r){if(a){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');handleSlug(this.optionalRestSlugName,o),this.optionalRestSlugName=o,n="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');handleSlug(this.restSlugName,o),this.restSlugName=o,n="[...]"}}else{if(a)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');handleSlug(this.slugName,o),this.slugName=o,n="[]"}}this.children.has(n)||this.children.set(n,new UrlNode),this.children.get(n)._insert(e.slice(1),t,r)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}};function getSortedRoutes(e){let t=new UrlNode;return e.forEach(e=>t.insert(e)),t.smoosh()}},4679:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{WEB_VITALS:function(){return r},execOnce:function(){return execOnce},isAbsoluteUrl:function(){return isAbsoluteUrl},getLocationOrigin:function(){return getLocationOrigin},getURL:function(){return getURL},getDisplayName:function(){return getDisplayName},isResSent:function(){return isResSent},normalizeRepeatedSlashes:function(){return normalizeRepeatedSlashes},loadGetInitialProps:function(){return loadGetInitialProps},SP:function(){return o},ST:function(){return a},DecodeError:function(){return DecodeError},NormalizeError:function(){return NormalizeError},PageNotFoundError:function(){return PageNotFoundError},MissingStaticPage:function(){return MissingStaticPage},MiddlewareNotFoundError:function(){return MiddlewareNotFoundError},stringifyError:function(){return stringifyError}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function execOnce(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return r||(r=!0,t=e(...o)),t}}let n=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,isAbsoluteUrl=e=>n.test(e);function getLocationOrigin(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function getURL(){let{href:e}=window.location,t=getLocationOrigin();return e.substring(t.length)}function getDisplayName(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function isResSent(e){return e.finished||e.headersSent}function normalizeRepeatedSlashes(e){let t=e.split("?"),r=t[0];return r.replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function loadGetInitialProps(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await loadGetInitialProps(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&isResSent(r))return n;if(!n){let t='"'+getDisplayName(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.';throw Error(t)}return n}let o="undefined"!=typeof performance,a=o&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);let DecodeError=class DecodeError extends Error{};let NormalizeError=class NormalizeError extends Error{};let PageNotFoundError=class PageNotFoundError extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}};let MissingStaticPage=class MissingStaticPage extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}};let MiddlewareNotFoundError=class MiddlewareNotFoundError extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}};function stringifyError(e){return JSON.stringify({message:e.message,stack:e.stack})}},713:(e,t,r)=>{"use strict";e.exports=r(316).vendored.contexts.RouterContext},784:(e,t,r)=>{"use strict";e.exports=r(316).vendored["react-ssr"].ReactJsxRuntime},1440:(e,t,r)=>{e.exports=r(614)},4653:(e,t,r)=>{"use strict";r.d(t,{fGx:()=>FaCross});var n=r(9885),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),i=["attr","size","title"];function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function IconBase(e){var elem=t=>{var r,{attr:o,size:a,title:l}=e,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,i),u=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",_extends({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:r,style:_objectSpread(_objectSpread({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==a?n.createElement(a.Consumer,null,e=>elem(e)):elem(o)}function FaCross(e){var t;return(t={tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M352 128h-96V32c0-17.67-14.33-32-32-32h-64c-17.67 0-32 14.33-32 32v96H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h96v224c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V256h96c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z"},child:[]}]},e=>n.createElement(IconBase,_extends({attr:_objectSpread({},t.attr)},e),function Tree2Element(e){return e&&e.map((e,t)=>n.createElement(e.tag,_objectSpread({key:t},e.attr),Tree2Element(e.child)))}(t.child)))(e)}}};