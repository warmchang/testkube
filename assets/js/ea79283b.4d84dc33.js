"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[6219],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=s,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(h,r(r({ref:t},l),{},{components:n})):o.createElement(h,r({ref:t},l))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,r=new Array(a);r[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=n(87462),s=(n(67294),n(3905));const a={},r="Github Actions",i={unversionedId:"guides/cicd/github-actions",id:"guides/cicd/github-actions",title:"Github Actions",description:"In order to automate Testkube runs, access to a K8s cluster is needed, for example, a configured environment with the set up context and kubeconfig for communication with the K8s cluster.",source:"@site/docs/guides/cicd/github-actions.md",sourceDirName:"guides/cicd",slug:"/guides/cicd/github-actions",permalink:"/testkube/guides/cicd/github-actions",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/guides/cicd/github-actions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using Testkube from CI/CD",permalink:"/testkube/guides/cicd/"},next:{title:"GitOps Cloud Native Testing",permalink:"/testkube/guides/cicd/gitops/"}},c={},u=[{value:"Testkube Github Action",id:"testkube-github-action",level:2},{value:"Configuring your GH Actions for Access to GKE",id:"configuring-your-gh-actions-for-access-to-gke",level:2},{value:"Main GH Action Section Configuration",id:"main-gh-action-section-configuration",level:2},{value:"Complete Example of Working GH Actions Workflow and Testkube Tests Usage",id:"complete-example-of-working-gh-actions-workflow-and-testkube-tests-usage",level:2}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"github-actions"},"Github Actions"),(0,s.kt)("p",null,"In order to automate Testkube runs, access to a K8s cluster is needed, for example, a configured environment with the set up context and kubeconfig for communication with the K8s cluster."),(0,s.kt)("p",null,"Testkube uses your K8s context and access settings in order to interact with the cluster and tests resources, etc."),(0,s.kt)("p",null,"In the next few sections, we will go through the process of Testkube and Helm (for Testkube's release deploy/upgrade) automations with the usage of GitHub Actions and GKE K8s."),(0,s.kt)("h2",{id:"testkube-github-action"},"Testkube Github Action"),(0,s.kt)("p",null,"The testkube Github Action is available here ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/testkube-docker-action"},"https://github.com/kubeshop/testkube-docker-action")," and it makes possible running the Testkube cli commands in a github workflow."),(0,s.kt)("p",null,"Following example shows how to create a test using the github action, a more complex example can be found ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/helm-charts/blob/59054b87f83f890f4f62cf966ac63fd7e46de336/.github/workflows/testkube-docker-action.yaml"},"here"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# Creating test\n- name: Create test\n  id: create_test\n  uses: kubeshop/testkube-docker-action@v1\n  with:\n    command: create\n    resource: test\n    namespace: testkube\n    parameters: \"--type k6/script --name testkube-github-action\"\n    stdin: \"import http from 'k6/http';\\nimport { sleep,check } from 'k6';\\n\\nexport default function () {\\n  const baseURI = `${__ENV.TESTKUBE_HOMEPAGE_URI || 'https://testkube.kubeshop.io'}`\\n  check(http.get(`${baseURI}/`), {\\n    'check testkube homepage home page': (r) =>\\n      r.body.includes('Your Friendly Cloud-Native Testing Framework for Kubernetes'),\\n  });\\n\\n\\n  sleep(1);\\n}\\n\"\n")),(0,s.kt)("h2",{id:"configuring-your-gh-actions-for-access-to-gke"},"Configuring your GH Actions for Access to GKE"),(0,s.kt)("p",null,"To obtain set up access to a GKE (Google Kubernetes Engine) from GH (GitHub) actions, please visit the official documentation from GH: ",(0,s.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/deployment/deploying-to-google-kubernetes-engine"},"https://docs.github.com/en/actions/deployment/deploying-to-google-kubernetes-engine")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Create a Service Account (SA)."),(0,s.kt)("li",{parentName:"ol"},"Save it into GH's ",(0,s.kt)("strong",{parentName:"li"},"Secrets")," of the repository."),(0,s.kt)("li",{parentName:"ol"},"Run either ",(0,s.kt)("inlineCode",{parentName:"li"},"Helm")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"Kubectl kubtest")," commands against the set up GKE cluster.")),(0,s.kt)("h2",{id:"main-gh-action-section-configuration"},"Main GH Action Section Configuration"),(0,s.kt)("p",null,"To install on Linux or MacOS, run:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# Deploy into configured GKE cluster:\n- name: Deploy\n  run: |-\n    helm upgrade --install --atomic --timeout 180s testkube helm-charts/testkube --namespace testkube --create-namespace\n")),(0,s.kt)("p",null,"In addition to Helm, you can run any other K8s-native command. In our case: ",(0,s.kt)("inlineCode",{parentName:"p"},"testkube...")),(0,s.kt)("h2",{id:"complete-example-of-working-gh-actions-workflow-and-testkube-tests-usage"},"Complete Example of Working GH Actions Workflow and Testkube Tests Usage"),(0,s.kt)("p",null,"Testkube tests can be easily re-used with minimal modifications according to your needs."),(0,s.kt)("p",null,"To run tests on Linux or MacOS:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'name: Running Testkube Tests.\n\non:\n  push:\n    paths:\n      - "charts/**"\n    branches:\n      - main\n\nenv:\n  PROJECT_ID: ${{ secrets.GKE_PROJECT }}\n  GKE_CLUSTER_NAME_DEV: ${{ secrets.GKE_CLUSTER_NAME_DEV }} # Add your cluster name here.\n  GKE_ZONE_DEV: ${{ secrets.GKE_ZONE_DEV }} # Add your cluster zone here.\n  DEPLOYMENT_NAME: testkube # Add your deployment name here.\n\njobs:\n  deploy-to-testkube-dev-gke:\n    name: Deploy\n    runs-on: ubuntu-latest\n    needs: notify_slack_if_release_succeeds\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n\n      - name: Configure Git\n        run: |\n          git config user.name "$GITHUB_ACTOR"\n          git config user.email "$GITHUB_ACTOR@users.noreply.github.com"\n\n      # Setup gcloud CLI\n      - uses: google-github-actions/setup-gcloud@94337306dda8180d967a56932ceb4ddcf01edae7\n        with:\n          service_account_key: ${{ secrets.GKE_SA_KEY }}\n          project_id: ${{ secrets.GKE_PROJECT }}\n\n      # Configure Docker to use the gcloud command-line tool as a credential\n      # helper for authentication\n      - run: |-\n          gcloud --quiet auth configure-docker\n\n      # Get the GKE credentials so we can deploy to the cluster\n      - uses: google-github-actions/get-gke-credentials@fb08709ba27618c31c09e014e1d8364b02e5042e\n        with:\n          cluster_name: ${{ env.GKE_CLUSTER_NAME_DEV }}\n          location: ${{ env.GKE_ZONE_DEV }}\n          credentials: ${{ secrets.GKE_SA_KEY }}\n\n      # Run Testkube test on a GKE cluster\n      - name: Run test\n        id: run_test\n        uses: kubeshop/testkube-docker-action@v1\n        with:\n          command: run\n          resource: test\n          parameters: TEST_NAME\n')),(0,s.kt)("p",null,"Along with the ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," command, you can pass all the standard K8s parameters such as ",(0,s.kt)("inlineCode",{parentName:"p"},"--namespace"),", etc."),(0,s.kt)("p",null,"If you wish to automate the CI/CD part of Testkube's Helm release, use ",(0,s.kt)("inlineCode",{parentName:"p"},"Helm")," blocks as follow:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\n- name: Install Helm\n  uses: azure/setup-helm@v1\n  with:\n    version: v3.4.0\n\n- name: Installing repositories\n  run: |\n    helm repo add kubeshop https://kubeshop.github.io/helm-charts\n    helm repo add bitnami https://charts.bitnami.com/bitnami\n\n# Run Helm delpoy/upgrade of the Testkube release on a GKE cluster\n- name: Deploy\n  run: |-\n    helm upgrade --install --atomic --timeout 180s testkube kubeshop/testkube --namespace testkube --create-namespace\n")))}p.isMDXComponent=!0}}]);