"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[9374],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),b=a,d=m["".concat(u,".").concat(b)]||m[b]||p[b]||o;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},s="Metrics",i={unversionedId:"using-testkube/metrics",id:"using-testkube/metrics",title:"Metrics",description:"The Testkube API Server exposes a /metrics endpoint that can be consumed by Prometheus, Grafana, etc. Currently, the following metrics are exposed:",source:"@site/docs/using-testkube/metrics.md",sourceDirName:"using-testkube",slug:"/using-testkube/metrics",permalink:"/using-testkube/metrics",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/using-testkube/metrics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Artifacts Storage",permalink:"/using-testkube/artifacts-storage"},next:{title:"Test Triggers",permalink:"/using-testkube/triggers"}},u={},l=[{value:"<strong>Installation</strong>",id:"installation",level:2},{value:"<strong>Grafana Dashboard</strong>",id:"grafana-dashboard",level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"metrics"},"Metrics"),(0,a.kt)("p",null,"The Testkube API Server exposes a ",(0,a.kt)("inlineCode",{parentName:"p"},"/metrics")," endpoint that can be consumed by Prometheus, Grafana, etc. Currently, the following metrics are exposed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"testkube_test_executions_count")," - The total number of test executions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"testkube_testsuite_executions_count")," - The total number of test suite executions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"testkube_test_creations_count")," - The total number of tests created by type events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"testkube_testsuite_creations_count")," - The total number of test suites created events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"testkube_test_updates_count")," - The total number of tests updated by type events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"testkube_testsuite_updates_count")," - The total number of test suites updated events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"testkube_test_aborts_count")," - The total number of tests aborted by type events.")),(0,a.kt)("h2",{id:"installation"},(0,a.kt)("strong",{parentName:"h2"},"Installation")),(0,a.kt)("p",null,"If a Prometheus operator is not installed, please follow the steps here: ",(0,a.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana-cloud/quickstart/prometheus_operator/"},"https://grafana.com/docs/grafana-cloud/quickstart/prometheus_operator/"),"."),(0,a.kt)("p",null,"Then, add a ",(0,a.kt)("inlineCode",{parentName:"p"},"ServiceMonitor")," custom resource to your cluster which will scrape metrics from our\nTestkube API server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  name: testkube-api-server\n  labels:\n    app: prometheus\nspec:\n  endpoints:\n  - interval: 10s\n    port: http\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: api-server\n")),(0,a.kt)("p",null,"If you're installing Testkube manually with our Helm chart, you can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus.enabled")," value to the install command."),(0,a.kt)("h2",{id:"grafana-dashboard"},(0,a.kt)("strong",{parentName:"h2"},"Grafana Dashboard")),(0,a.kt)("p",null,"To use the Grafana dashboard, import this JSON definition:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/testkube/blob/main/assets/grafana-dasboard.json"},"https://github.com/kubeshop/testkube/blob/main/assets/grafana-dasboard.json")))}p.isMDXComponent=!0}}]);