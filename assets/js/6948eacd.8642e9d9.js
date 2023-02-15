"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[8247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=s,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),s=(n(67294),n(3905));const r={},o="Creating",i={unversionedId:"using-testkube/tests/tests-creating",id:"using-testkube/tests/tests-creating",title:"Creating",description:"Tests are single executor oriented objects. Test can have different types, which depends on which executors are installed in your cluster.",source:"@site/docs/using-testkube/tests/tests-creating.md",sourceDirName:"using-testkube/tests",slug:"/using-testkube/tests/tests-creating",permalink:"/using-testkube/tests/tests-creating",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/using-testkube/tests/tests-creating.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Testkube Cloud Architecture",permalink:"/testkube-cloud/architecture"},next:{title:"Running Tests",permalink:"/using-testkube/tests/tests-running"}},l={},c=[{value:"<strong>Test Source</strong>",id:"test-source",level:2},{value:"<strong>Create a Test</strong>",id:"create-a-test",level:2},{value:"<strong>Create Your First Test from a File (Postman Collection Test)</strong>",id:"create-your-first-test-from-a-file-postman-collection-test",level:3},{value:"<strong>Updating Tests</strong>",id:"updating-tests",level:3},{value:"<strong>Checking Test Content</strong>",id:"checking-test-content",level:3},{value:"<strong>Create a Test from Git</strong>",id:"create-a-test-from-git",level:3},{value:"<strong>Providing Certificates</strong>",id:"providing-certificates",level:4},{value:"<strong>Mapping local files</strong>",id:"mapping-local-files",level:3},{value:"<strong>Changing the default job template used for test execution</strong>",id:"changing-the-default-job-template-used-for-test-execution",level:3},{value:"<strong>Executing pre run script</strong>",id:"executing-pre-run-script",level:3},{value:"<strong>Changing the default scraper job template used for container executor tests</strong>",id:"changing-the-default-scraper-job-template-used-for-container-executor-tests",level:3},{value:"<strong>Summary</strong>",id:"summary",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"creating"},"Creating"),(0,s.kt)("p",null,"Tests are single executor oriented objects. Test can have different types, which depends on which executors are installed in your cluster."),(0,s.kt)("p",null,"Testkube includes ",(0,s.kt)("inlineCode",{parentName:"p"},"postman/collection"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"cypress/project"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"curl/test"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"k6/script")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"soapui/xml")," test types which are auto registered during the Testkube install by default."),(0,s.kt)("p",null,"As Testkube was designed with flexibility in mind, you can add your own executors to handle additional test types."),(0,s.kt)("h2",{id:"test-source"},(0,s.kt)("strong",{parentName:"h2"},"Test Source")),(0,s.kt)("p",null,"Tests can be currently created from multiple sources:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"A simple ",(0,s.kt)("inlineCode",{parentName:"li"},"file")," with the test content, For example, with Postman collections, we're exporting the collection as a JSON file. For cURL executors, we're passing a JSON file with the configured cURL command."),(0,s.kt)("li",{parentName:"ol"},"String - we can also define the content of the test as a string"),(0,s.kt)("li",{parentName:"ol"},"Git directory - we can pass ",(0,s.kt)("inlineCode",{parentName:"li"},"repository"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"path")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"branch")," where our tests are stored. This is used in Cypress executor as Cypress tests are more like npm-based projects which can have a lot of files. We are handling sparse checkouts which are fast even in the case of huge mono-repos."),(0,s.kt)("li",{parentName:"ol"},"Git file - similarly to Git directories, we can use files located on Git by specifying ",(0,s.kt)("inlineCode",{parentName:"li"},"git-uri")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"branch"),".")),(0,s.kt)("p",null,"Note: not all executors support all input types. Please refer to the individual executors' documentation to see which options are available."),(0,s.kt)("h2",{id:"create-a-test"},(0,s.kt)("strong",{parentName:"h2"},"Create a Test")),(0,s.kt)("h3",{id:"create-your-first-test-from-a-file-postman-collection-test"},(0,s.kt)("strong",{parentName:"h3"},"Create Your First Test from a File (Postman Collection Test)")),(0,s.kt)("p",null,"To create your first Postman collection in Testkube, export your collection into a file."),(0,s.kt)("p",null,"Right click on your collection name:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"create postman collection step 1",src:n(46401).Z,width:"2028",height:"1156"})),(0,s.kt)("p",null,"Click the ",(0,s.kt)("strong",{parentName:"p"},"Export")," button:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"create postman collection step 2",src:n(57505).Z,width:"2036",height:"1336"})),(0,s.kt)("p",null,"Save in a convenient location. In this example, we are using ",(0,s.kt)("inlineCode",{parentName:"p"},"~/Downloads/TODO.postman_collection.json")," path."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"create postman collection step 3",src:n(64796).Z,width:"2248",height:"1366"})),(0,s.kt)("p",null,"Create a Testkube test using the exported JSON and give it a unique and fitting name. For simplicity's sake we used ",(0,s.kt)("inlineCode",{parentName:"p"},"test")," in this example."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube create test --file ~/Downloads/TODO.postman_collection.json --name test\n")),(0,s.kt)("p",null,"Output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"Detected test type postman/collection\nTest created test \ud83e\udd47\n")),(0,s.kt)("p",null,"Test created! Now we have a reusable test."),(0,s.kt)("h3",{id:"updating-tests"},(0,s.kt)("strong",{parentName:"h3"},"Updating Tests")),(0,s.kt)("p",null,"If you need to update your test after change in Postman, re-export it to a file and run the update command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube update test --file ~/Downloads/TODO.postman_collection.json --name test\n")),(0,s.kt)("p",null,"To check if the test was created correctly, look at the ",(0,s.kt)("inlineCode",{parentName:"p"},"Test Custom Resource")," in your Kubernetes cluster:"),(0,s.kt)("p",null,"Output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"Detected test test type postman/collection\nTest updated test \ud83e\udd47\n")),(0,s.kt)("p",null,"Testkube will override all test settings and content with the ",(0,s.kt)("inlineCode",{parentName:"p"},"update")," method."),(0,s.kt)("h3",{id:"checking-test-content"},(0,s.kt)("strong",{parentName:"h3"},"Checking Test Content")),(0,s.kt)("p",null,"Let's see what has been created:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get tests -ntestkube\n")),(0,s.kt)("p",null,"Output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"NAME   AGE\ntest   32s\n")),(0,s.kt)("p",null,"Get the details of a test:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl get tests -ntestkube test-example -oyaml\n```bash\n$ kubectl testkube get test test\n\nname: test\ntype_: postman/collection\ncontent: |-\n    {\n        "info": {\n                "_postman_id": "b40de9fe-9201-4b03-8ca2-3064d9027dd6",\n                "name": "TODO",\n                "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"\n        },\n        "item": [\n                {\n                        "name": "Create TODO",\n                        "event": [\n                                {\n                                        "listen": "test",\n                                        "script": {\n                                                "exec": [\n                                                        "pm.test(\\"Status code is 201 CREATED\\", function () {",\n                                                        "    pm.response.to.have.status(201);",\n                                                        "});",\n                                                        "",\n                                                        "",\n                                                        "pm.test(\\"Check if todo item craeted successfully\\", function() {",\n                                                        "    var json = pm.response.json();",\n                                                        "    pm.environment.set(\\"item\\", json.url);",\n                                                        "    pm.sendRequest(json.url, function (err, response) {",\n                                                        "        var json = pm.response.json();",\n                                                        "        pm.expect(json.title).to.eq(\\"Create video for conference\\");",\n                                                        "",\n                                                        "    });",\n                                                        "    console.log(\\"creating\\", pm.environment.get(\\"item\\"))",\n                                                        "})",\n                                                        "",\n                                                        ""\n                                                ],\n                                                "type": "text/javascript"\n                                        }\n                                },\n                                {\n                                        "listen": "prerequest",\n                                        "script": {\n                                                "exec": [\n                                                        ""\n                                                ],\n                                                "type": "text/javascript"\n                                        }\n                                }\n                        ],\n                        "protocolProfileBehavior": {\n                                "disabledSystemHeaders": {}\n                        },\n                        "request": {\n                                "method": "POST",\n                                "header": [\n                                        {\n                                                "key": "Content-Type",\n                                                "value": "application/json",\n                                                "type": "text"\n                                        }\n                                ],\n                                "body": {\n                                        "mode": "raw",\n                                        "raw": "{\\"title\\":\\"Create video for conference\\",\\"order\\":1,\\"completed\\":false}"\n                                },\n                                "url": {\n                                        "raw": "{{uri}}",\n                                        "host": [\n                                                "{{uri}}"\n                                        ]\n                                }\n                        },\n                        "response": []\n                },\n                {\n                        "name": "Complete TODO item",\n                        "event": [\n                                {\n                                        "listen": "prerequest",\n                                        "script": {\n                                                "exec": [\n                                                        "console.log(\\"completing\\", pm.environment.get(\\"item\\"))"\n                                                ],\n                                                "type": "text/javascript"\n                                        }\n                                }\n                        ],\n                        "request": {\n                                "method": "PATCH",\n                                "header": [\n                                        {\n                                                "key": "Content-Type",\n                                                "value": "application/json",\n                                                "type": "text"\n                                        }\n                                ],\n                                "body": {\n                                        "mode": "raw",\n                                        "raw": "{\\"completed\\": true}"\n                                },\n                                "url": {\n                                        "raw": "{{item}}",\n                                        "host": [\n                                                "{{item}}"\n                                        ]\n                                }\n                        },\n                        "response": []\n                },\n                {\n                        "name": "Delete TODO item",\n                        "event": [\n                                {\n                                        "listen": "prerequest",\n                                        "script": {\n                                                "exec": [\n                                                        "console.log(\\"deleting\\", pm.environment.get(\\"item\\"))"\n                                                ],\n                                                "type": "text/javatest"\n                                        }\n                                },\n                                {\n                                        "listen": "test",\n                                        "script": {\n                                                "exec": [\n                                                        "pm.test(\\"Status code is 204 no content\\", function () {",\n                                                        "    pm.response.to.have.status(204);",\n                                                        "});"\n                                                ],\n                                                "type": "text/javascript"\n                                        }\n                                }\n                        ],\n                        "request": {\n                                "method": "DELETE",\n                                "header": [],\n                                "url": {\n                                        "raw": "{{item}}",\n                                        "host": [\n                                                "{{item}}"\n                                        ]\n                                }\n                        },\n                        "response": []\n                }\n        ],\n        "event": [\n                {\n                        "listen": "prerequest",\n                        "script": {\n                                "type": "text/javascript",\n                                "exec": [\n                                        ""\n                                ]\n                        }\n                },\n                {\n                        "listen": "test",\n                        "script": {\n                                "type": "text/javascript",\n                                "exec": [\n                                        ""\n                                ]\n                        }\n                }\n        ],\n        "variable": [\n                {\n                        "key": "uri",\n                        "value": "http://34.74.127.60:8080/todos"\n                },\n                {\n                        "key": "item",\n                        "value": null\n                }\n        ]\n    }\n\n')),(0,s.kt)("p",null,"We can see that the test resource was created with Postman collection JSON content."),(0,s.kt)("p",null,"You can also check tests with the standard ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," command which will list the tests Custom Resource."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get tests -n testkube test -oyaml\n")),(0,s.kt)("h3",{id:"create-a-test-from-git"},(0,s.kt)("strong",{parentName:"h3"},"Create a Test from Git")),(0,s.kt)("p",null,"Some executors can handle files and some can handle only git resources. You'll need to follow the particular executor ",(0,s.kt)("strong",{parentName:"p"},"readme")," file to be aware which test types the executor handles."),(0,s.kt)("p",null,"Let's assume that a Cypress project is created in a git repository - ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/testkube-executor-cypress/tree/main/examples"},"https://github.com/kubeshop/testkube-executor-cypress/tree/main/examples")," - where ",(0,s.kt)("strong",{parentName:"p"},"examples")," is a test directory in the ",(0,s.kt)("inlineCode",{parentName:"p"},"https://github.com/kubeshop/testkube-executor-cypress.git")," repository."),(0,s.kt)("p",null,"Now we can create our Cypress-based test as shown below. In git based tests, we need to pass the test type."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube create test --uri https://github.com/kubeshop/testkube-executor-cypress.git --git-branch main --git-path examples --name kubeshop-cypress --type cypress/project\n")),(0,s.kt)("p",null,"Output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"Test created kubeshop-cypress \ud83e\udd47\n")),(0,s.kt)("p",null,"Let's check how the test created by Testkube is defined in the cluster:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get tests -n testkube kubeshop-cypress -o yaml\napiVersion: tests.testkube.io/v1\nkind: Test\nmetadata:\n  creationTimestamp: "2021-11-17T12:29:32Z"\n  generation: 1\n  name: kubeshop-cypress\n  namespace: testkube\n  resourceVersion: "225162"\n  uid: f0d856aa-04fc-4238-bb4c-156ff82b4741\nspec:\n  repository:\n    branch: main\n    path: examples\n    type: git\n    uri: https://github.com/kubeshop/testkube-executor-cypress.git\n  type: cypress/project\n')),(0,s.kt)("p",null,"As we can see, this test has ",(0,s.kt)("inlineCode",{parentName:"p"},"spec.repository")," with git repository data. This data can now be used by the executor to download test data."),(0,s.kt)("h4",{id:"providing-certificates"},(0,s.kt)("strong",{parentName:"h4"},"Providing Certificates")),(0,s.kt)("p",null,"If the git repository is using a self-signed certificate, you can provide the certificate using Kubernetes secrets and passing the secret name to the ",(0,s.kt)("inlineCode",{parentName:"p"},"--git-certificate-secret")," flag."),(0,s.kt)("p",null,"In order to create a secret, use the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create secret generic git-cert --from-file=git-cert.crt --from-file=git-cert.key\n")),(0,s.kt)("p",null,"Then you can pass the secret name to the ",(0,s.kt)("inlineCode",{parentName:"p"},"--git-certificate-secret")," flag and, during the test execution, the certificate will be mounted to the test container and added to the trusted authorities."),(0,s.kt)("h3",{id:"mapping-local-files"},(0,s.kt)("strong",{parentName:"h3"},"Mapping local files")),(0,s.kt)("p",null,"Local files can be added into a Testkube Test. This can be set on Test level passing the file in the format ",(0,s.kt)("inlineCode",{parentName:"p"},"source_path:destination_path")," using the flag ",(0,s.kt)("inlineCode",{parentName:"p"},"--copy-files"),". The file will be copied upon execution from the machine running ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl"),". The files will be then available in the ",(0,s.kt)("inlineCode",{parentName:"p"},"/data/uploads")," folder inside the test container."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl testkube create test --name maven-example-file-test --git-uri https://github.com/kubeshop/testkube-executor-maven.git --git-path examples/hello-maven-settings --type maven/test  --git-branch main --copy-files "/Users/local_user/local_maven_settings.xml:settings.xml"\n')),(0,s.kt)("p",null,"Output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"Test created maven-example-file-test \ud83e\udd47\n")),(0,s.kt)("p",null,"To run this test, refer to ",(0,s.kt)("inlineCode",{parentName:"p"},"settings.xml")," from the ",(0,s.kt)("inlineCode",{parentName:"p"},"/data/uploads")," folder:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'testkube run test maven-example-file-test --args "--settings" --args "/data/uploads/settings.xml" -v "TESTKUBE_MAVEN=true" --args "-e" --args "-X" --env "DEBUG=\\"true\\""\n')),(0,s.kt)("h3",{id:"changing-the-default-job-template-used-for-test-execution"},(0,s.kt)("strong",{parentName:"h3"},"Changing the default job template used for test execution")),(0,s.kt)("p",null,"You can always create your own custom executor with its own job template definition used for test execution. But sometimes you just need to adjust an existing job template of a standard Testkube executor with a few parameters. In this case you can use additional parameter ",(0,s.kt)("inlineCode",{parentName:"p"},"--job-template")," when you create or run the test:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl testkube create test --git-branch main --git-uri https://github.com/kubeshop/testkube-example-cypress-project.git --git-path "cypress" --name template-test --type cypress/project --job-template job.yaml\n')),(0,s.kt)("p",null,"Where ",(0,s.kt)("inlineCode",{parentName:"p"},"job.yaml")," file contains adjusted job template parts for merging with default job template:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: batch/v1\nkind: Job\nspec:\n  template:\n    spec:\n      containers:\n      - name: {{ .Name }}\n        image: {{ .Image }}\n        imagePullPolicy: Always\n        command:\n          - \"/bin/runner\"\n          - '{{ .Jsn }}'\n        volumeMounts:\n        - name: data-volume\n          mountPath: /data\n        resources:\n          limits:\n            memory: 128Mi\n")),(0,s.kt)("p",null,"When you run such a test you will face a memory limit for the test executor pod, when the default job template doesn't have any resource constraints."),(0,s.kt)("h3",{id:"executing-pre-run-script"},(0,s.kt)("strong",{parentName:"h3"},"Executing pre run script")),(0,s.kt)("p",null,"If you need to provide additional configuration for your executor environment, you can submit prerun script to be executed before test started. For example, we have such a simple shell script stored in ",(0,s.kt)("inlineCode",{parentName:"p"},"script.sh")," file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'!/bin/sh\n\necho "Storing ssl certificate in file from env secret env"\necho "$SSL_CERT" > /data/ssl.crt\n')),(0,s.kt)("p",null,"Then just provide it when you create or run the test using ",(0,s.kt)("inlineCode",{parentName:"p"},"--prerun-script")," parameter:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube create test --file test/postman/LocalHealth.postman_collection.json --name script-test --type postman/collection --prerun-script script.sh --secret-env SSL_CERT=your-k8s-secret\n")),(0,s.kt)("h3",{id:"changing-the-default-scraper-job-template-used-for-container-executor-tests"},(0,s.kt)("strong",{parentName:"h3"},"Changing the default scraper job template used for container executor tests")),(0,s.kt)("p",null,"When you use container executor tests generating artifacts for scraping, then we launch 2 sequential kubernetes jobs, one is for test execution and other one is for scraping test results. Sometimes you need to adjust an existing scraper job template of a standard Testkube scraper with a few parameters. In this case you can use additional parameter ",(0,s.kt)("inlineCode",{parentName:"p"},"--scraper-template")," when you create or run the test:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube create test --name scraper-test --type scraper/test --artifact-storage-class-name standard --artifact-volume-mount-path /share --artifact-dir test/files --scraper-template scraper.yaml\n")),(0,s.kt)("p",null,"Where ",(0,s.kt)("inlineCode",{parentName:"p"},"scraper.yaml")," file contains adjusted scraper job template parts for merging with default scraper job template:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: batch/v1\nkind: Job\nspec:\n  template:\n    spec:\n      containers:\n      - name: {{ .Name }}-scraper\n        image: {{ .ScraperImage }}\n        imagePullPolicy: Always\n        command:\n          - \"/bin/runner\"\n          - '{{ .Jsn }}'\n        {{- if .ArtifactRequest }}\n        volumeMounts:\n          - name: artifact-volume\n            mountPath: {{ .ArtifactRequest.VolumeMountPath }}\n        {{- end }}\n        resources:\n          limits:\n            memory: 512Mi\n")),(0,s.kt)("p",null,"When you run such a test you will face a memory limit for the scraper pod, when the default scraper job template doesn't have any resource constraints."),(0,s.kt)("h2",{id:"summary"},(0,s.kt)("strong",{parentName:"h2"},"Summary")),(0,s.kt)("p",null,"Tests are the main smallest abstractions over test suites in Testkube, they can be created with different sources and used by executors to run on top of a particular test framework."))}u.isMDXComponent=!0},46401:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/test-create-1-7f78f6af575be6e8e4e78b7768db8e72.png"},57505:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/test-create-2-3e11bdaacca06aa0b6fda17f9b1ea5f5.png"},64796:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/test-create-3-4df0573bc018126f647b74e113495cee.png"}}]);