"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[4449],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},39278:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},l="Telemetry",u={unversionedId:"reference/telemetry",id:"reference/telemetry",title:"Telemetry",description:"To improve the end-user experience, Testkube collects anonymous telemetry data about usage.",source:"@site/docs/reference/telemetry.md",sourceDirName:"reference",slug:"/reference/telemetry",permalink:"/testkube/reference/telemetry",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/reference/telemetry.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/testkube/reference/architecture"},next:{title:"Contributing to Testkube Open Source",permalink:"/testkube/contributing/intro"}},i={},s=[{value:"What We Collect",id:"what-we-collect",level:2},{value:"How to Opt Out?",id:"how-to-opt-out",level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"telemetry"},"Telemetry"),(0,a.kt)("p",null,"To improve the end-user experience, Testkube collects anonymous telemetry data about usage."),(0,a.kt)("p",null,"Participation in this program is optional. You may ",(0,a.kt)("a",{parentName:"p",href:"#how-to-opt-out"},"opt-out")," if you'd prefer not to share any information."),(0,a.kt)("p",null,"The data collected is always anonymous, not traceable to the source, and only used in aggregate form. "),(0,a.kt)("p",null,"Telemetry collects and scrambles information about the host when the API server is bootstrapped for the first time. "),(0,a.kt)("p",null,"The collected data looks like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "anonymousId": "a4652358effb311a074bf84d2aed5a7d270dee858bff10e847df2a9ea132bb38",\n  "context": {\n    "library": {\n      "name": "analytics-go",\n      "version": "3.0.0"\n    }\n  },\n  "event": "testkube-heartbeat",\n  "integrations": {},\n  "messageId": "2021-11-04 19:54:40.029549 +0100 CET m=+0.148209228",\n  "originalTimestamp": "2021-11-04T19:54:40.029571+01:00",\n  "receivedAt": "2021-11-04T18:54:41.004Z",\n  "sentAt": "2021-11-04T18:54:40.029Z",\n  "timestamp": "2021-11-04T18:54:41.004Z",\n  "type": "track"\n}\n')),(0,a.kt)("h2",{id:"what-we-collect"},"What We Collect"),(0,a.kt)("p",null,"The telemetry data we use in our metrics is limited to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The number of CLI installations."),(0,a.kt)("li",{parentName:"ul"},"The number of unique CLI usages in a day."),(0,a.kt)("li",{parentName:"ul"},"The number of installations to a cluster."),(0,a.kt)("li",{parentName:"ul"},"The number of unique active cluster installations."),(0,a.kt)("li",{parentName:"ul"},"The number of people who disable telemetry."),(0,a.kt)("li",{parentName:"ul"},"The number of unique sessions in the Testkube Dashboard.")),(0,a.kt)("h2",{id:"how-to-opt-out"},"How to Opt Out?"),(0,a.kt)("p",null,"To opt out of the Testkube telemetry collection:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"testkube disable telemetry\n")),(0,a.kt)("p",null,"To ",(0,a.kt)("em",{parentName:"p"},"opt in"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"testkube enable telemetry\n")),(0,a.kt)("p",null,"To check the current ",(0,a.kt)("em",{parentName:"p"},"status"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"testkube status telemetry\n")))}p.isMDXComponent=!0}}]);