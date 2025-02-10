"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[5378],{4317:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(5893),s=r(1151);const i={sidebar_position:2},a="Get Cart details",o={id:"Cart APIs/get-cart",title:"Get Cart details",description:"Learn how to get user cart details with Hajorah.",source:"@site/docs/Cart APIs/get-cart.md",sourceDirName:"Cart APIs",slug:"/Cart APIs/get-cart",permalink:"/Cart APIs/get-cart",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cart APIs/get-cart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Add to Cart",permalink:"/Cart APIs/add-cart"},next:{title:"Remove cart item",permalink:"/Cart APIs/remove-cart-item"}},c={},d=[{value:"Request",id:"request",level:2},{value:"Responses",id:"responses",level:2},{value:"Success",id:"success",level:3},{value:"Errors",id:"errors",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"get-cart-details",children:"Get Cart details"}),"\n",(0,n.jsx)(t.p,{children:"Learn how to get user cart details with Hajorah."}),"\n",(0,n.jsx)(t.h2,{id:"request",children:"Request"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Method"}),": GET"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Endpoint"}),": ",(0,n.jsx)(t.code,{children:"/api/cart/"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Authentication"}),": Bearer token in the ",(0,n.jsx)(t.code,{children:"Authorization"})," header"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"Token tip",type:"tip",children:(0,n.jsx)(t.p,{children:"Log in as buyer to get user token"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/Buyer%20APIs/login-buyer",children:"Login as Buyer"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/#get-user-token-for-bearer-authentication",children:"How to get user token for Authentication"})}),"\n",(0,n.jsx)(t.h2,{id:"responses",children:"Responses"}),"\n",(0,n.jsx)(t.h3,{id:"success",children:"Success"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",metastring:'title="code 201:  success"',children:'Cart retrieved successfully\r\n// cart details\r\n{\r\n  "_id": "654b68e9c4ab84dcc26ad908", // cart id\r\n  "items": [\r\n     {\r\n      // item 1\r\n        "product": {\r\n        "_id": "656b2c2bf8f03971649bb10e",\r\n        "name": "CINDY VIETNAM RICE 1KG",\r\n        "price": 25.49\r\n      },\r\n      "quantity": 5,\r\n      "subtotal": 127.44999999999999,\r\n      "_id": "656b2c4ff8f03971649bb144" // item id\r\n    },\r\n    // other items\r\n  ],\r\n  //other cart details\r\n}\n'})}),"\n",(0,n.jsx)(t.admonition,{title:"Cart Id tip",type:"tip",children:(0,n.jsxs)(t.p,{children:["Cart id is required to ",(0,n.jsx)(t.a,{href:"/User%20Order%20APIs/place-order",children:"Place an Order"})]})}),"\n",(0,n.jsx)(t.admonition,{title:"Item Id tip",type:"tip",children:(0,n.jsxs)(t.p,{children:["Item id is required to ",(0,n.jsx)(t.a,{href:"/Cart%20APIs/remove-cart-item",children:"Remove Cart item"})," and  ",(0,n.jsx)(t.a,{href:"/Cart%20APIs/update-cart-item",children:"Update cart item"})]})}),"\n",(0,n.jsx)(t.h3,{id:"errors",children:"Errors"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",metastring:'title="code 401:  Authentication error"',children:"User token is not valid or does not exist\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",metastring:'title="code 404:  Not found"',children:"User cart invalid or does exists\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",metastring:'title="code 500:  Internal Server Error" ',children:"Try again or restart service\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>a});var n=r(7294);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);