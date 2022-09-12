"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[5925],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||s;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:6,sidebar_label:"Artillery.io"},i="Artillery.io Performance Tests",l={unversionedId:"test-types/executor-artillery",id:"test-types/executor-artillery",title:"Artillery.io Performance Tests",description:"Test Environment",source:"@site/docs/4-test-types/executor-artillery.md",sourceDirName:"4-test-types",slug:"/test-types/executor-artillery",permalink:"/testkube/test-types/executor-artillery",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/4-test-types/executor-artillery.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Artillery.io"},sidebar:"tutorialSidebar",previous:{title:"KubePug",permalink:"/testkube/test-types/executor-kubepug"},next:{title:"Maven",permalink:"/testkube/test-types/executor-maven"}},o={},u=[{value:"<strong>Test Environment</strong>",id:"test-environment",level:2},{value:"<strong>Create a Test Manifest</strong>",id:"create-a-test-manifest",level:2},{value:"<strong>Create a New Testkube Test</strong>",id:"create-a-new-testkube-test",level:2},{value:"<strong>Running a Test</strong>",id:"running-a-test",level:2},{value:"<strong>Getting Test Results</strong>",id:"getting-test-results",level:2},{value:"<strong>Summary</strong>",id:"summary",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"artilleryio-performance-tests"},"Artillery.io Performance Tests"),(0,a.kt)("h2",{id:"test-environment"},(0,a.kt)("strong",{parentName:"h2"},"Test Environment")),(0,a.kt)("p",null,"Let's assume that our SUT (Service Under Test) is an internal Kubernetes service which has\nClusterIP ",(0,a.kt)("inlineCode",{parentName:"p"},"Service")," created and is exposed on port ",(0,a.kt)("inlineCode",{parentName:"p"},"8088"),". The service name is ",(0,a.kt)("inlineCode",{parentName:"p"},"testkube-api-server"),"\nand is exposing the ",(0,a.kt)("inlineCode",{parentName:"p"},"/health")," endpoint that we want to test."),(0,a.kt)("p",null,"To call the SUT inside a cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://testkube-api-server:8088/health\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"200 OK\n")),(0,a.kt)("h2",{id:"create-a-test-manifest"},(0,a.kt)("strong",{parentName:"h2"},"Create a Test Manifest")),(0,a.kt)("p",null,"The Artillery tests are defined in declarative manner, as YAML files.",(0,a.kt)("br",{parentName:"p"}),"\n","The test should warm up our service a little bit first, then we can hit a little harder."),(0,a.kt)("p",null,"Let's save our test into ",(0,a.kt)("inlineCode",{parentName:"p"},"test.yaml")," file with the content below:   "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'config:\n  target: "http://testkube-api-server:8088"\n  phases:\n    - duration: 6\n      arrivalRate: 5\n      name: Warm up\n    - duration: 120\n      arrivalRate: 5\n      rampTo: 50\n      name: Ramp up load\n    - duration: 60\n      arrivalRate: 50\n      name: Sustained load\nscenarios:\n  - name: "Check health endpoint"\n    flow:\n      - get:\n          url: "/health"\n')),(0,a.kt)("p",null,"Our test is ready but how do we run it in a Kubernetes cluster? Testkube will help you with that! "),(0,a.kt)("p",null,"Let's create a new Testkube test based on the saved Artillery test definition."),(0,a.kt)("h2",{id:"create-a-new-testkube-test"},(0,a.kt)("strong",{parentName:"h2"},"Create a New Testkube Test")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube create test --name artillery-api-test --file test.yaml --type artillery/test\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Test created  \ud83e\udd47\n")),(0,a.kt)("h2",{id:"running-a-test"},(0,a.kt)("strong",{parentName:"h2"},"Running a Test")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube run test artillery-api-test\n\nType          : postman/collection\nName          : artillery-api-test\nExecution ID  : 615d6398b046f8fbd3d955d4\nExecution name: openly-full-bream\n\nTest queued for execution\nUse the following command to get test execution details:\n$ kubectl testkube get execution 615d6398b046f8fbd3d955d4\n\nor watch test execution until complete:\n$ kubectl testkube watch execution 615d6398b046f8fbd3d955d4\n")),(0,a.kt)("p",null,"You can also watch your test results in real-time with ",(0,a.kt)("inlineCode",{parentName:"p"},"-f"),' flag (like "follow"). '),(0,a.kt)("p",null,"Test runs can be named. If no name is passed, Testkube will autogenerate a name."),(0,a.kt)("h2",{id:"getting-test-results"},(0,a.kt)("strong",{parentName:"h2"},"Getting Test Results")),(0,a.kt)("p",null,"Let's get back our finished test results. The test report and output will be stored in Testkube storage to revisit when necessary."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  testkube git:(jacek/docs/executors-docs-update) \u2717 kubectl testkube get execution 628c957d2c8d8a7c1b1ead66                                                 \nID:        628c957d2c8d8a7c1b1ead66\nName:      tightly-adapting-hippo\nType:      artillery/test\nDuration:  00:03:13\n\n  Telemetry is on. Learn more: https://artillery.io/docs/resources/core/telemetry.html\nPhase started: Warm up (index: 0, duration: 6s) 08:21:22(+0000)\n\nPhase completed: Warm up (index: 0, duration: 6s) 08:21:28(+0000)\n\nPhase started: Ramp up load (index: 1, duration: 120s) 08:21:28(+0000)\n\n--------------------------------------\nMetrics for period to: 08:21:30(+0000) (width: 6.167s)\n--------------------------------------\n\nhttp.codes.200: ................................................................ 41\nhttp.request_rate: ............................................................. 9/sec\nhttp.requests: ................................................................. 41\nhttp.response_time:\n  min: ......................................................................... 0\n  max: ......................................................................... 5\n  median: ...................................................................... 1\n  p95: ......................................................................... 3\n  p99: ......................................................................... 3\nhttp.responses: ................................................................ 41\nvusers.completed: .............................................................. 41\nvusers.created: ................................................................ 41\nvusers.created_by_name.Check health endpoint: .................................. 41\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 3.6\n  max: ......................................................................... 73\n  median: ...................................................................... 10.5\n  p95: ......................................................................... 66\n  p99: ......................................................................... 70.1\n\n..... a lot of other .......\n\n\nAll VUs finished. Total time: 3 minutes, 9 seconds\n\n--------------------------------\nSummary report @ 08:24:30(+0000)\n--------------------------------\n\nhttp.codes.200: ................................................................ 6469\nhttp.request_rate: ............................................................. 36/sec\nhttp.requests: ................................................................. 6469\nhttp.response_time:\n  min: ......................................................................... 0\n  max: ......................................................................... 17\n  median: ...................................................................... 1\n  p95: ......................................................................... 2\n  p99: ......................................................................... 4\nhttp.responses: ................................................................ 6469\nvusers.completed: .............................................................. 6469\nvusers.created: ................................................................ 6469\nvusers.created_by_name.Check health endpoint: .................................. 6469\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 1.7\n  max: ......................................................................... 73\n  median: ...................................................................... 3\n  p95: ......................................................................... 7.2\n  p99: ......................................................................... 12.6\nLog file: /tmp/test-report.json\n\nStatus Test execution completed with success \ud83e\udd47\n\n")),(0,a.kt)("h2",{id:"summary"},(0,a.kt)("strong",{parentName:"h2"},"Summary")),(0,a.kt)("p",null,"With the Artillery executor you can now run your tests in Kubernetes with ease. Testkube simplifies running tests inside a cluster and stores tests and tests results for later use."))}c.isMDXComponent=!0}}]);