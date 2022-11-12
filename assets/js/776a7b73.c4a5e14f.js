"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[8629],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||s;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},38837:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const s={sidebar_position:10,sidebar_label:"Architecture"},i="Architecture (C4 Diagrams)",o={unversionedId:"architecture",id:"architecture",title:"Architecture (C4 Diagrams)",description:"Info",source:"@site/docs/10-architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/testkube/architecture",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/10-architecture.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"Architecture"},sidebar:"tutorialSidebar",previous:{title:"Development",permalink:"/testkube/contributing/development/developments"},next:{title:"Telemetry",permalink:"/testkube/telemetry"}},c={},l=[{value:"<strong>Info</strong>",id:"info",level:2},{value:"<strong>Diagrams</strong>",id:"diagrams",level:2},{value:"<strong>System Context</strong>",id:"system-context",level:3},{value:"<strong>Containers</strong>",id:"containers",level:3},{value:"<strong>Components</strong>",id:"components",level:3},{value:"<strong>API</strong>",id:"api",level:4},{value:"TestSuites and Tests",id:"testsuites-and-tests",level:3}],p={toc:l};function u(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"architecture-c4-diagrams"},"Architecture (C4 Diagrams)"),(0,a.kt)("h2",{id:"info"},(0,a.kt)("strong",{parentName:"h2"},"Info")),(0,a.kt)("p",null,"This diagram was made with the C4 diagram technique\n(",(0,a.kt)("a",{parentName:"p",href:"https://c4model.com/"},"https://c4model.com/"),")."),(0,a.kt)("h2",{id:"diagrams"},(0,a.kt)("strong",{parentName:"h2"},"Diagrams")),(0,a.kt)("h3",{id:"system-context"},(0,a.kt)("strong",{parentName:"h3"},"System Context")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"testkube system context diagram",src:r(99295).Z,width:"1105",height:"872"})),(0,a.kt)("h3",{id:"containers"},(0,a.kt)("strong",{parentName:"h3"},"Containers")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"testkube container diagram",src:r(6285).Z,width:"2065",height:"1331"})),(0,a.kt)("h3",{id:"components"},(0,a.kt)("strong",{parentName:"h3"},"Components")),(0,a.kt)("h4",{id:"api"},(0,a.kt)("strong",{parentName:"h4"},"API")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"API",src:r(16716).Z,width:"1593",height:"1544"})),(0,a.kt)("h3",{id:"testsuites-and-tests"},"TestSuites and Tests"),(0,a.kt)("p",null,"Parameters passed through tests suites and tests priority: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Test Suite execution variables overrides."),(0,a.kt)("li",{parentName:"ol"},"Test Suite variables overrides."),(0,a.kt)("li",{parentName:"ol"},"Test execution (variables passed for single test runs) overrides."),(0,a.kt)("li",{parentName:"ol"},"Test variables.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"variables passing",src:r(81028).Z,width:"790",height:"635"})))}u.isMDXComponent=!0},16716:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/components_api-b7f272e3461c7a9ec5124d48eac3045b.png"},6285:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/containers-331910fe5e05c806a7d1724d6a32f747.png"},81028:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/params-passing-6a4b44cff4e2b7f4de1e1e51e9af8667.png"},99295:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/system_context-01c8fe2aeece56a2c53a003d1b056ff7.png"}}]);