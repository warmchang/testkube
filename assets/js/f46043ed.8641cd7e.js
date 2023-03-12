"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[163],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var i=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=i.createContext({}),l=function(e){var t=i.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return i.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,g=d["".concat(u,".").concat(f)]||d[f]||p[f]||n;return r?i.createElement(g,s(s({ref:t},c),{},{components:r})):i.createElement(g,s({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<n;l++)s[l]=r[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95693:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var i=r(87462),o=(r(67294),r(3905));const n={},s="GitOps Cloud Native Testing",a={unversionedId:"guides/cicd/gitops/index",id:"guides/cicd/gitops/index",title:"GitOps Cloud Native Testing",description:"One of the major trends in contemporary cloud native application development is the adoption of GitOps; managing the state of your Kubernetes cluster(s) in Git - with all the bells and whistles provided by modern Git platforms like GitHub and GitLab in regard to workflows, auditing, security, tooling, etc. Tools like ArgoCD or Flux are used to do the heavy lifting of keeping your Kubernetes cluster in sync with your Git repository; as soon as difference is detected between Git and your cluster it is deployed to ensure that your repository is the source-of-truth for your runtime environment.",source:"@site/docs/guides/cicd/gitops/index.md",sourceDirName:"guides/cicd/gitops",slug:"/guides/cicd/gitops/",permalink:"/testkube/guides/cicd/gitops/",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/guides/cicd/gitops/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Github Actions",permalink:"/testkube/guides/cicd/github-actions"},next:{title:"GitOps Testing with Flux",permalink:"/testkube/guides/cicd/gitops/flux"}},u={},l=[{value:"Benefits of the GitOps Approach",id:"benefits-of-the-gitops-approach",level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gitops-cloud-native-testing"},"GitOps Cloud Native Testing"),(0,o.kt)("p",null,"One of the major trends in contemporary cloud native application development is the adoption of GitOps; managing the state of your Kubernetes cluster(s) in Git - with all the bells and whistles provided by modern Git platforms like GitHub and GitLab in regard to workflows, auditing, security, tooling, etc. Tools like ArgoCD or Flux are used to do the heavy lifting of keeping your Kubernetes cluster in sync with your Git repository; as soon as difference is detected between Git and your cluster it is deployed to ensure that your repository is the source-of-truth for your runtime environment."),(0,o.kt)("p",null,"Testkube is the first GitOps-friendly Cloud-native test orchestration/execution framework to ensure that your QA efforts align with this new approach to application configuration and cluster configuration management. Combined with the GitOps approach described above, Testkube will include your test artifacts and application configuration in the state of your cluster and make git the source of truth for these test artifacts."),(0,o.kt)("h2",{id:"benefits-of-the-gitops-approach"},"Benefits of the GitOps Approach"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Since your tests are included in the state of your cluster you are always able to validate that your application components/services work as required."),(0,o.kt)("li",{parentName:"ul"},"Since tests are executed from inside your cluster there is no need to expose services under test externally purely for the purpose of being able to test them."),(0,o.kt)("li",{parentName:"ul"},"Tests in your cluster are always in sync with the external tooling used for authoring"),(0,o.kt)("li",{parentName:"ul"},"Test execution is not strictly tied to CI but can also be triggered manually for ad-hoc validations or via internal triggers (Kubernetes events)"),(0,o.kt)("li",{parentName:"ul"},"You can leverage all your existing test automation assets from Postman, or Cypress (even for end-to-end testing), or \u2026 through executor plugins.")),(0,o.kt)("p",null,"Conceptually, this can be illustrated as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GitOps CLoud Testing",src:r(19396).Z,width:"1600",height:"776"})))}p.isMDXComponent=!0},19396:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/GitOps-cloud-testing-d465f565010c3b66de093938445213dc.jpeg"}}]);