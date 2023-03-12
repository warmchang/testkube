"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[5857],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=s.createContext({}),u=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return s.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,k=d["".concat(i,".").concat(h)]||d[h]||p[h]||r;return n?s.createElement(k,l(l({ref:t},c),{},{components:n})):s.createElement(k,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return s.createElement.apply(null,l)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var s=n(87462),a=(n(67294),n(3905));const r={},l="GitOps Testing with Flux",o={unversionedId:"guides/cicd/gitops/flux",id:"guides/cicd/gitops/flux",title:"GitOps Testing with Flux",description:"Tutorial",source:"@site/docs/guides/cicd/gitops/flux.md",sourceDirName:"guides/cicd/gitops",slug:"/guides/cicd/gitops/flux",permalink:"/testkube/guides/cicd/gitops/flux",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/guides/cicd/gitops/flux.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GitOps Cloud Native Testing",permalink:"/testkube/guides/cicd/gitops/"},next:{title:"Gitops Testing with ArgoCD",permalink:"/testkube/guides/cicd/gitops/argocd"}},i={},u=[{value:"Tutorial",id:"tutorial",level:2},{value:"1. Fork the example repository and clone it locally",id:"1-fork-the-example-repository-and-clone-it-locally",level:3},{value:"2. Start a Kubernetes cluster.",id:"2-start-a-kubernetes-cluster",level:3},{value:"3. Create a Github Classic Token.",id:"3-create-a-github-classic-token",level:3},{value:"4. Install Flux in the cluster and connect it to the repository.",id:"4-install-flux-in-the-cluster-and-connect-it-to-the-repository",level:3},{value:"5. Create a Flux Source and a Kusktomize Controller.",id:"5-create-a-flux-source-and-a-kusktomize-controller",level:3},{value:"6. Install Testkube in the cluster.",id:"6-install-testkube-in-the-cluster",level:3},{value:"7. Create a Test CRD with Testkube CLI.",id:"7-create-a-test-crd-with-testkube-cli",level:3},{value:"8. Add the generated test to the Kustomize file.",id:"8-add-the-generated-test-to-the-kustomize-file",level:3},{value:"9. Push all the changes to your repository.",id:"9-push-all-the-changes-to-your-repository",level:3},{value:"10. Your tests should be applied in the cluster.",id:"10-your-tests-should-be-applied-in-the-cluster",level:3},{value:"11. Run your tests.",id:"11-run-your-tests",level:3},{value:"GitOps Takeaways",id:"gitops-takeaways",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gitops-testing-with-flux"},"GitOps Testing with Flux"),(0,a.kt)("h2",{id:"tutorial"},"Tutorial"),(0,a.kt)("p",null,"The following is a step-by-step walkthrough to get this in place for the automated application deployment and execution of Postman collections in a local Kind cluster to test."),(0,a.kt)("p",null,"Let\u2019s start with setting things up for our GitOps-powered testing machine!"),(0,a.kt)("h3",{id:"1-fork-the-example-repository-and-clone-it-locally"},"1. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/kubeshop/testkube-flux/fork"},"Fork the example repository")," and clone it locally"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/$GITHUB_USER/testkube-flux.git\n")),(0,a.kt)("h3",{id:"2-start-a-kubernetes-cluster"},"2. Start a Kubernetes cluster."),(0,a.kt)("p",null,"You can use Minikube, Kind or any managed cluster with a cloud provider (EKS, GKE, etc). In this example we're using ",(0,a.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"Kind"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kind create cluster\n")),(0,a.kt)("h3",{id:"3-create-a-github-classic-token"},"3. Create a Github Classic Token."),(0,a.kt)("p",null,"Must be of type ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic"},"Classic")," (i.e. starts with ghp","_",")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"GITHUB_TOKEN=<ghp_>\nGITHUB_USER=<username>\n")),(0,a.kt)("p",null,"And export the environment variables in your terminal."),(0,a.kt)("h3",{id:"4-install-flux-in-the-cluster-and-connect-it-to-the-repository"},"4. Install Flux in the cluster and connect it to the repository."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/installation/"},"Flux CLI")," and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"flux bootstrap github \\\n--owner=$GITHUB_USER \\\n--repository=testkube-flux \\\n--path=cluster \\\n--personal\n")),(0,a.kt)("h3",{id:"5-create-a-flux-source-and-a-kusktomize-controller"},"5. Create a Flux Source and a Kusktomize Controller."),(0,a.kt)("p",null,"The following command will create Flux source to tell Flux to apply changes that are created in your repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"flux create source git testkube-tests \\\n--url=https://github.com/$GITHUB_USER/testkube-flux \\\n--branch=main \\\n--interval=30s \\\n--export > ./cluster/flux-system/sources/testkube-tests/test-source.yaml\n")),(0,a.kt)("p",null,"And now create a Flux Kustomize Controller to apply the Testkube Test CRDs in the cluser using ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/"},"Kustomize"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'flux create kustomization testkube-test \\\n--target-namespace=testkube \\\n--source=testkube-tests \\\n--path="cluster/testkube" \\\n--prune=true \\\n--interval=30s \\\n--export > ./cluster/flux-system/sources/testkube-tests/testkube-kustomization.yaml\n')),(0,a.kt)("h3",{id:"6-install-testkube-in-the-cluster"},"6. Install Testkube in the cluster."),(0,a.kt)("p",null,"If you don't have the Testkube CLI, follow the instruction ",(0,a.kt)("a",{parentName:"p",href:"/testkube/getting-started/step1-installing-cli"},"here")," to install it."),(0,a.kt)("p",null,"Run the following command to install Testkube and its components in the cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"testkube install\n")),(0,a.kt)("h3",{id:"7-create-a-test-crd-with-testkube-cli"},"7. Create a Test CRD with Testkube CLI."),(0,a.kt)("p",null,"In this example the test being used is a Postman test, which you can find in ",(0,a.kt)("strong",{parentName:"p"},"/img/server/tests/postman-collection.json"),"."),(0,a.kt)("p",null,"To create a Kubernetes CRD for the test, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"testkube generate tests-crds img/server/tests/postman-collection.json > cluster/testkube/server-postman-test.yaml\n")),(0,a.kt)("p",null,"Note: You can ",(0,a.kt)("a",{parentName:"p",href:"https://docs.testkube.io/integrations/testkube-automation/"},"run Testkube from your CI/CD pipeline")," in case you want to automate the creation of the Test CRDs."),(0,a.kt)("h3",{id:"8-add-the-generated-test-to-the-kustomize-file"},"8. Add the generated test to the Kustomize file."),(0,a.kt)("p",null,"The name of the test file created in the previous step is ",(0,a.kt)("strong",{parentName:"p"},"server-postman-test.yaml"),", add that to the Kustomize file located in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.testkube.io/integrations/testkube-automation/"},"cluster/testkube/kustomization.yaml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"apiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\nresources:\n+ - server-postman-test.yaml\n")),(0,a.kt)("h3",{id:"9-push-all-the-changes-to-your-repository"},"9. Push all the changes to your repository."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'git pull origin main\ngit add -A &amp;&amp; git commit -m "Configure Testkube tests"\ngit push\n')),(0,a.kt)("h3",{id:"10-your-tests-should-be-applied-in-the-cluster"},"10. Your tests should be applied in the cluster."),(0,a.kt)("p",null,"To see if Flux detected your changes run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"flux get kustomizations --watch\n")),(0,a.kt)("p",null,"And to ensure that the test has been created run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"testkube get test\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Expected output:"',title:'"Expected','output:"':!0},"| NAME                    | TYPE               | CREATED                       | LABELS                                         |\n| ----------------------- | ------------------ | ----------------------------- | ---------------------------------------------- |\n| postman-collection-test | postman/collection | 2023-01-30 18:04:13 +0000 UTC | kustomize.toolkit.fluxcd.io/name=testkube-test |\n|                         |                    |                               | kustomize.toolkit.fluxcd.io/name=testkube-test |\n")),(0,a.kt)("h3",{id:"11-run-your-tests"},"11. Run your tests."),(0,a.kt)("p",null,"Now that you have deployed your tests in a GitOps fashion to the cluster, you can use Testkube to run the tests for you through multiple ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using the Testkube CLI."),(0,a.kt)("li",{parentName:"ul"},"Using the Testkube Dashboard."),(0,a.kt)("li",{parentName:"ul"},"Running Testkube CLI from a CI/CD pipeline.")),(0,a.kt)("p",null,"We'll use the Testkube CLI for brevity. Run the following command to run the recently created test:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"testkube run test postman-collection-test\n")),(0,a.kt)("p",null,"\u200d\nAnd see the test result with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"testkube get execution postman-collection-test-1\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Expected output:"',title:'"Expected','output:"':!0},"Test execution completed with success in 13.345s\n")),(0,a.kt)("h2",{id:"gitops-takeaways"},"GitOps Takeaways"),(0,a.kt)("p",null,"Once fully realized - using GitOps for testing of Kubernetes applications as described above provides a powerful alternative to a more traditional approach where orchestration is tied to your current CI/CD tooling and not closely aligned with the lifecycle of Kubernetes applications."))}p.isMDXComponent=!0}}]);