"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[1537],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,d=p["".concat(l,".").concat(m)]||p[m]||g[m]||a;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},23612:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(67294),r=n(86010),a=n(35281),i=n(95999);const s="admonition_LlT9",l="admonitionHeading_tbUL",c="admonitionIcon_kALy",u="admonitionContent_S0QG";const g={note:{infimaClassName:"secondary",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:o.createElement(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:o.createElement(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:o.createElement(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:o.createElement(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 16 16"},o.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:o.createElement(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},p={secondary:"note",important:"info",success:"tip",warning:"danger"};function m(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=o.Children.toArray(e),n=t.find((e=>{var t;return o.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),r=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:r}}(e.children);return{...e,title:e.title??t,children:n}}function d(e){const{children:t,type:n,title:i,icon:d}=m(e),k=function(e){const t=p[e]??e;return g[t]||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),g.info)}(n),b=i??k.label,{iconComponent:h}=k,f=d??o.createElement(h,null);return o.createElement("div",{className:(0,r.Z)(a.k.common.admonition,a.k.common.admonitionType(e.type),"alert",`alert--${k.infimaClassName}`,s)},o.createElement("div",{className:l},o.createElement("span",{className:c},f),b),o.createElement("div",{className:u},t))}},39608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));n(23612);const a={},i="Ginkgo",s={unversionedId:"test-types/executor-ginkgo",id:"test-types/executor-ginkgo",title:"Ginkgo",description:"Check out our blog post to learn to write more expressive tests in Go using Ginkgo, Gomega, and Testkube.",source:"@site/docs/test-types/executor-ginkgo.md",sourceDirName:"test-types",slug:"/test-types/executor-ginkgo",permalink:"/test-types/executor-ginkgo",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/test-types/executor-ginkgo.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cypress",permalink:"/test-types/executor-cypress"},next:{title:"Gradle",permalink:"/test-types/executor-gradle"}},l={},c=[{value:"<strong>Test Environment</strong>",id:"test-environment",level:2},{value:"<strong>Create a New Ginkgo-based Test</strong>",id:"create-a-new-ginkgo-based-test",level:2},{value:"Write a Ginkgo Test",id:"write-a-ginkgo-test",level:3},{value:"Add Test to Testkube",id:"add-test-to-testkube",level:3},{value:"<strong>Running a Test</strong>",id:"running-a-test",level:2},{value:"<strong>Getting Test Results</strong>",id:"getting-test-results",level:2},{value:"<strong>Summary</strong>",id:"summary",level:2}],u={toc:c};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ginkgo"},"Ginkgo"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Check out our ",(0,r.kt)("a",{parentName:"strong",href:"https://testkube.io/blog/maximize-app-performance-in-kubernetes-with-ginkgo-and-testkube"},"blog post")," to learn to write more expressive tests in Go using Ginkgo, Gomega, and Testkube.")),(0,r.kt)("h2",{id:"test-environment"},(0,r.kt)("strong",{parentName:"h2"},"Test Environment")),(0,r.kt)("p",null,"Let's try some simple Ginkgo. Testkube's Ginkgo Executor uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"ginkgo")," binary and allows configuring its behavior using arguments."),(0,r.kt)("p",null,"Because Ginkgo projects are quite complicated in terms of directory structure, we'll need to load them from a Git directory."),(0,r.kt)("p",null,"You can find example projects in the repository ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/testkube-executor-ginkgo/tree/main/examples"},"here"),"."),(0,r.kt)("p",null,"Let's create a simple test which will check if an env variable is set to true:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package smoke_test\n\nimport (\n    . "github.com/onsi/ginkgo/v2"\n    . "github.com/onsi/gomega"\n)\n\nvar _ = Describe("Smoke", func() {\n    Describe("Ginkgo smoke test", func() {\n        It("Positive test - should always pass", func(){\n            Expect(true).To(Equal(true))\n        })\n    })\n})\n')),(0,r.kt)("p",null,"The default Ginkgo executor: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: executor.testkube.io/v1\nkind: Executor\nmetadata:\n  name: ginkgo-executor\n  namespace: testkube\nspec:\n  features:\n  - artifacts\n  - junit-report\n  image: kubeshop/testkube-ginkgo-executor:0.0.4\n  types:\n  - ginkgo/test\n")),(0,r.kt)("h2",{id:"create-a-new-ginkgo-based-test"},(0,r.kt)("strong",{parentName:"h2"},"Create a New Ginkgo-based Test")),(0,r.kt)("h3",{id:"write-a-ginkgo-test"},"Write a Ginkgo Test"),(0,r.kt)("p",null,"We'll try to check if there are any executors registered on the Testkube demo cluster. To do that we need to check the ",(0,r.kt)("inlineCode",{parentName:"p"},"/v1/executors"),"\nendpoint. Results should have at least one Executor registered."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package testkube_api_test\n\nimport (\n    "encoding/json"\n    "io"\n    "net/http"\n\n    "github.com/kubeshop/testkube/pkg/api/v1/testkube"\n\n    . "github.com/onsi/ginkgo/v2"\n    . "github.com/onsi/gomega"\n)\n\nvar _ = Describe("API Test", func() {\n    It("There should be executors registered", func() {\n        resp, err := http.Get("https://demo.testkube.io/results/v1/executors")\n        Expect(err).To(BeNil())\n\n        executors, err := GetTestkubeExecutors(resp.Body)\n\n        Expect(err).To(BeNil())\n        Expect(len(executors)).To(BeNumerically(">", 1))\n    })\n})\n\nfunc GetTestkubeExecutors(body io.ReadCloser) ([]testkube.ExecutorDetails, error) {\n    bytes, err := io.ReadAll(body)\n    if err != nil {\n        return nil, err\n    }\n\n    results := []testkube.ExecutorDetails{}\n    err = json.Unmarshal(bytes, &results)\n\n    return results, err\n}\n\n')),(0,r.kt)("p",null,"The test is run in the standard Ginkgo bootstrapped project. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"go mod init testkube-ginkgo-example\nginkgo bootstrap\n")),(0,r.kt)("p",null,"Everything was pushed to the Git repository."),(0,r.kt)("p",null,"You can also look at the code in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/testkube-executor-ginkgo/tree/main/examples/testkube-api"},"examples"),"."),(0,r.kt)("h3",{id:"add-test-to-testkube"},"Add Test to Testkube"),(0,r.kt)("p",null,"To add a Ginkgo test to Testkube you need to call the ",(0,r.kt)("inlineCode",{parentName:"p"},"create test")," command. We'll assume that our test is in a Git repository."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube create test --git-uri https://github.com/kubeshop/testkube-executor-ginkgo.git --git-path examples/testkube-api --type ginkgo/test --name ginkgo-example-test --git-branch main\n")),(0,r.kt)("h2",{id:"running-a-test"},(0,r.kt)("strong",{parentName:"h2"},"Running a Test")),(0,r.kt)("p",null,"Let's pass the env variable to our test run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," tk run test ginkgo-example-test -f                     \n\nType:              ginkgo/test\nName:              ginkgo-example-test\nExecution ID:      62eceb8df4732077cee099cf\nExecution name:    ginkgo-example-test-3\nExecution number:  3\nStatus:            running\nStart time:        2022-08-05 10:06:05.467437617 +0000 UTC\n\n... other logs \n\nRunning in parallel across 7 processes\n\u2022\n\nRan 1 of 1 Specs in 0.091 seconds\nSUCCESS! -- 1 Passed | 0 Failed | 0 Pending | 0 Skipped\n\n\nGinkgo ran 1 suite in 7.447676906s\nTest Suite Passed\n\nTest execution completed with success in 15.586s \ud83e\udd47\n\nWatch test execution until complete:\n$ kubectl testkube watch execution 62eceb8df4732077cee099cf\n\n\nUse the following command to get test execution details:\n$ kubectl testkube get execution 62eceb8df4732077cee099cf\n\n")),(0,r.kt)("h2",{id:"getting-test-results"},(0,r.kt)("strong",{parentName:"h2"},"Getting Test Results")),(0,r.kt)("p",null,"We can always get back to the test results: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube get execution 62eceb8df4732077cee099cf\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# ....... a lot of Ginkgo logs\n\nID:         62eceb67f4732077cee099cd\nName        ginkgo-example-test-2\nNumber:            2\nTest name:         ginkgo-example-test\nType:              ginkgo/test\nStatus:            passed\nStart time:        2022-08-05 10:05:27.659 +0000 UTC\nEnd time:          2022-08-05 10:05:43.14 +0000 UTC\nDuration:          00:00:15\n\ngo: downloading github.com/kubeshop/testkube v1.4.5\ngo: downloading github.com/onsi/gomega v1.20.0\ngo: downloading github.com/onsi/ginkgo/v2 v2.1.4\ngo: downloading github.com/google/go-cmp v0.5.8\ngo: downloading golang.org/x/net v0.0.0-20220722155237-a158d28d115b\ngo: downloading gopkg.in/yaml.v3 v3.0.1\ngo: downloading golang.org/x/sys v0.0.0-20220722155257-8c9f86f7a55f\ngo: downloading golang.org/x/text v0.3.7\ngo: downloading go.mongodb.org/mongo-driver v1.10.1\ngo: downloading github.com/dustinkirkland/golang-petname v0.0.0-20191129215211-8e5a1ed0cff0\n\nRunning Suite: TestkubeApi Suite - /tmp/git-sparse-checkout2422275089/repo/examples/testkube-api\n================================================================================================\nRandom Seed: 1659693931 - will randomize all specs\n\nWill run 1 of 1 specs\nRunning in parallel across 7 processes\n\u2022\n\nRan 1 of 1 Specs in 0.088 seconds\nSUCCESS! -- 1 Passed | 0 Failed | 0 Pending | 0 Skipped\n\n\nGinkgo ran 1 suite in 7.7928584s\nTest Suite Passed\n\nStatus Test execution completed with success \ud83e\udd47\n")),(0,r.kt)("h2",{id:"summary"},(0,r.kt)("strong",{parentName:"h2"},"Summary")),(0,r.kt)("p",null,"Testkube simplifies running Go tests based on Ginkgo and allows them to run in your Kubernetes cluster with ease."))}g.isMDXComponent=!0}}]);