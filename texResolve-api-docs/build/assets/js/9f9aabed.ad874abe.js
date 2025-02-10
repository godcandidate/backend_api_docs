"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[4148],{5197:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=t(5893),s=t(1151);const i={sidebar_position:4},a="Update Center details",d={id:"Center APIs/update-center",title:"Update Center details",description:"Learn how to update center details with Hajorah.",source:"@site/docs/Center APIs/update-center.md",sourceDirName:"Center APIs",slug:"/Center APIs/update-center",permalink:"/Center APIs/update-center",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Center APIs/update-center.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Retrieve Center profile",permalink:"/Center APIs/get-center"},next:{title:"Agent Delivery APIs",permalink:"/category/agent-delivery-apis"}},o={},c=[{value:"Request",id:"request",level:2},{value:"Body Parameters",id:"body-parameters",level:3},{value:"Reponses",id:"reponses",level:2},{value:"Success on update",id:"success-on-update",level:3},{value:"Errors",id:"errors",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"update-center-details",children:"Update Center details"}),"\n",(0,r.jsx)(n.p,{children:"Learn how to update center details with Hajorah."}),"\n",(0,r.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Method"}),": PUT"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Endpoint"}),": ",(0,r.jsx)(n.code,{children:"/api/center/update"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Authentication"}),": Bearer token in the ",(0,r.jsx)(n.code,{children:"Authorization"})," header"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Token tip",type:"tip",children:(0,r.jsx)(n.p,{children:"Log in as center to get user token"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/Center%20APIs/login-center",children:"Login as center"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/#get-user-token-for-bearer-authentication",children:"How to get user token for Authentication"})}),"\n",(0,r.jsx)(n.h3,{id:"body-parameters",children:"Body Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"User details"}),": Enter center details to update."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:'title="other user schema"',children:"\r\n{\r\n  name: String\r\n  fullName: String,\r\n  phoneNumber: String,\r\n  address.street: String,\r\n  address.city: String,\r\n  address.state: String,\r\n  address.country: String,\r\n  profile: String\r\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Here's an example request body with user details:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:'title="updating selected details"',children:'{\r\n  "name" : "Model High School",\r\n  "fullName": "Sasuke Uchina",\r\n  "phoneNumber": "23456671671",\r\n  "profile": ""\r\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"reponses",children:"Reponses"}),"\n",(0,r.jsx)(n.h3,{id:"success-on-update",children:"Success on update"}),"\n",(0,r.jsx)(n.p,{children:"User details updated sucessfully"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:'title="code 201:  success"',children:"User Info updated successfully\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/Center%20APIs/get-center",children:"Get center details to see updates"})}),"\n",(0,r.jsx)(n.h3,{id:"errors",children:"Errors"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:'title="code 401:  Authentication failed"',children:"Invalid user token, log in and try again\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:'title="code 404:  Not found"',children:"User details provided is not valid or does not exist\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:'title="code 500:  Internal Server Error"',children:"Try again or restart service\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>a});var r=t(7294);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);