"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[9106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},l="Telemetry",i={unversionedId:"telemetry",id:"telemetry",title:"Telemetry",description:"To improve the end-user experience, Testkube collects anonymous telemetry data about usage.",source:"@site/docs/11-telemetry.md",sourceDirName:".",slug:"/telemetry",permalink:"/testkube/telemetry",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/11-telemetry.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/testkube/architecture"},next:{title:"FAQ",permalink:"/testkube/FAQ"}},u={},s=[{value:"<strong>What We Collect</strong>",id:"what-we-collect",level:2},{value:"<strong>How to Opt Out?</strong>",id:"how-to-opt-out",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"telemetry"},"Telemetry"),(0,o.kt)("p",null,"To improve the end-user experience, Testkube collects anonymous telemetry data about usage."),(0,o.kt)("p",null,"Participation in this program is optional. You may ",(0,o.kt)("a",{parentName:"p",href:"#how-to-opt-out"},"opt-out")," if you'd prefer not to share any information."),(0,o.kt)("p",null,"The data collected is always anonymous, not traceable to the source, and only used in aggregate form. "),(0,o.kt)("p",null,"Telemetry collects and scrambles information about the host when the API server is bootstrapped for the first time. "),(0,o.kt)("p",null,"The collected data looks like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "anonymousId": "a4652358effb311a074bf84d2aed5a7d270dee858bff10e847df2a9ea132bb38",\n  "context": {\n    "library": {\n      "name": "analytics-go",\n      "version": "3.0.0"\n    }\n  },\n  "event": "testkube-heartbeat",\n  "integrations": {},\n  "messageId": "2021-11-04 19:54:40.029549 +0100 CET m=+0.148209228",\n  "originalTimestamp": "2021-11-04T19:54:40.029571+01:00",\n  "receivedAt": "2021-11-04T18:54:41.004Z",\n  "sentAt": "2021-11-04T18:54:40.029Z",\n  "timestamp": "2021-11-04T18:54:41.004Z",\n  "type": "track"\n}\n')),(0,o.kt)("h2",{id:"what-we-collect"},(0,o.kt)("strong",{parentName:"h2"},"What We Collect")),(0,o.kt)("p",null,"The telemetry data we use in our metrics is limited to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The number of CLI installations."),(0,o.kt)("li",{parentName:"ul"},"The number of unique CLI usages in a day."),(0,o.kt)("li",{parentName:"ul"},"The number of installations to a cluster."),(0,o.kt)("li",{parentName:"ul"},"The number of unique active cluster installations."),(0,o.kt)("li",{parentName:"ul"},"The number of people who disable telemetry."),(0,o.kt)("li",{parentName:"ul"},"The number of unique sessions in the UI.")),(0,o.kt)("h2",{id:"how-to-opt-out"},(0,o.kt)("strong",{parentName:"h2"},"How to Opt Out?")),(0,o.kt)("p",null,"To opt out of the Testkube telemetry collection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl testkube disable telemetry\n")),(0,o.kt)("p",null,"To ",(0,o.kt)("em",{parentName:"p"},"opt in"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl testkube enable telemetry\n")),(0,o.kt)("p",null,"To check the current ",(0,o.kt)("em",{parentName:"p"},"status"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl testkube status telemetry\n")))}p.isMDXComponent=!0}}]);