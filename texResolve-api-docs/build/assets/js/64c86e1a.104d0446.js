"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[3619],{1642:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=i(5893),t=i(1151);const s={sidebar_position:3},o="Retrieve Driver profile",a={id:"Driver APIs/get-driver",title:"Retrieve Driver profile",description:"Learn how to get driver profile with Hajorah.",source:"@site/docs/Driver APIs/get-driver.md",sourceDirName:"Driver APIs",slug:"/Driver APIs/get-driver",permalink:"/Driver APIs/get-driver",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Driver APIs/get-driver.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Login as Driver",permalink:"/Driver APIs/login-driver"},next:{title:"Update driver details",permalink:"/Driver APIs/update-driver"}},d={},c=[{value:"Request",id:"request",level:2},{value:"Success",id:"success",level:3},{value:"Errors",id:"errors",level:3}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"retrieve-driver-profile",children:"Retrieve Driver profile"}),"\n",(0,n.jsx)(r.p,{children:"Learn how to get driver profile with Hajorah."}),"\n",(0,n.jsx)(r.h2,{id:"request",children:"Request"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Method"}),": GET"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Endpoint"}),": ",(0,n.jsx)(r.code,{children:"/api/driver/profile"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Authentication"}),": Bearer token in the ",(0,n.jsx)(r.code,{children:"Authorization"})," header"]}),"\n"]}),"\n",(0,n.jsx)(r.admonition,{title:"Token tip",type:"tip",children:(0,n.jsx)(r.p,{children:"Log in as driver to get user token"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/Driver%20APIs/login-driver",children:"Login as Driver"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/#get-user-token-for-bearer-authentication",children:"How to get user token for Authentication"}),"## Responses"]}),"\n",(0,n.jsx)(r.h3,{id:"success",children:"Success"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",metastring:'title="code 201:  success"',children:'{\r\n  "email": "roronoa@gmail.com",\r\n  // other user details\r\n}\n'})}),"\n",(0,n.jsx)(r.h3,{id:"errors",children:"Errors"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",metastring:'title="code 401:  Authentication failed"',children:" \r\nInvalid user token, log in and try again\r\n\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",metastring:'title="code 404:  Not found"',children:" \r\nUser details provided is not valid or does not exist\r\n\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",metastring:'title="code 500:  Internal Server Error"',children:" \r\nTry again or restart service\r\n\n"})})]})}function u(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,r,i)=>{i.d(r,{Z:()=>a,a:()=>o});var n=i(7294);const t={},s=n.createContext(t);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);