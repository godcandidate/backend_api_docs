"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[852],{8560:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=r(4848),s=r(8453);const i={sidebar_position:1},a="Add to Cart",d={id:"Cart APIs/add-cart",title:"Add to Cart",description:"Learn how to add to cart with Hajorah.",source:"@site/docs/Cart APIs/add-cart.md",sourceDirName:"Cart APIs",slug:"/Cart APIs/add-cart",permalink:"/Cart APIs/add-cart",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cart APIs/add-cart.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Cart APIs",permalink:"/category/cart-apis"},next:{title:"Get Cart details",permalink:"/Cart APIs/get-cart"}},o={},c=[{value:"Request",id:"request",level:2},{value:"Body Parameters",id:"body-parameters",level:3},{value:"Reponses",id:"reponses",level:2},{value:"Succes",id:"succes",level:3},{value:"Errors",id:"errors",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"add-to-cart",children:"Add to Cart"}),"\n",(0,n.jsx)(t.p,{children:"Learn how to add to cart with Hajorah."}),"\n",(0,n.jsx)(t.h2,{id:"request",children:"Request"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Method"}),": POST"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Endpoint"}),": ",(0,n.jsx)(t.code,{children:"/api/cart/add"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Authentication"}),": Bearer token in the ",(0,n.jsx)(t.code,{children:"Authorization"})," header"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"Token tip",type:"tip",children:(0,n.jsx)(t.p,{children:"Log in as buyer to get user token"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"../Buyer%20APIs/login-buyer.md",children:"Login as Buyer"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/#get-user-token-for-bearer-authentication",children:"How to get user token for Authentication"})}),"\n",(0,n.jsx)(t.h3,{id:"body-parameters",children:"Body Parameters"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Cart details"}),": Enter cart details."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",metastring:'title="cart schema"',children:"\n{\n  product: string // product ID\n  quantity: number\n}\n"})}),"\n",(0,n.jsx)(t.admonition,{title:"productId tip",type:"tip",children:(0,n.jsx)(t.p,{children:"Go to product listing to get productId"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"../Product%20APIs/get-all-products.md",children:"Get productId from product listing"})}),"\n",(0,n.jsx)(t.p,{children:"Here's an example request body with cart details:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",metastring:'title="adding selected details"',children:'{\n   "product": "656b2c2bf8f03971649bb10f",\n  "quantity": 5\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"reponses",children:"Reponses"}),"\n",(0,n.jsx)(t.h3,{id:"succes",children:"Succes"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",metastring:'title="code 201:  success"',children:"Cart added successfully\n"})}),"\n",(0,n.jsx)(t.h3,{id:"errors",children:"Errors"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",metastring:'title="code 401:  Authentication error"',children:"User token is not valid or does not exist\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",metastring:'title="code 500:  Internal Server Error" ',children:"Try again or restart service\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>d});var n=r(6540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);