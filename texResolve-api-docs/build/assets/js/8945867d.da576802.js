"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[936],{7454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=n(4848),r=n(8453);const i={sidebar_position:4},c="Get Ticket Meeting",o={id:"Meeting APIs/get-ticket-meeting",title:"Get Ticket Meeting",description:"Learn how to fetch a meeting associated with a ticket.",source:"@site/docs/Meeting APIs/get-ticket-meeting.md",sourceDirName:"Meeting APIs",slug:"/Meeting APIs/get-ticket-meeting",permalink:"/Meeting APIs/get-ticket-meeting",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Meeting APIs/get-ticket-meeting.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Add a resolver to meeting",permalink:"/Meeting APIs/add-resolver"}},a={},d=[{value:"Request",id:"request",level:2},{value:"Path Parameters",id:"path-parameters",level:3},{value:"Responses",id:"responses",level:2},{value:"Success",id:"success",level:3},{value:"Errors",id:"errors",level:3}];function l(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"get-ticket-meeting",children:"Get Ticket Meeting"}),"\n",(0,s.jsx)(t.p,{children:"Learn how to fetch a meeting associated with a ticket."}),"\n",(0,s.jsx)(t.h2,{id:"request",children:"Request"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Method"}),": GET"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Endpoint"}),": ",(0,s.jsx)(t.code,{children:"https://tex-resolve-backend.onrender.com/api/v1/meetings/ticket/{id}"})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"path-parameters",children:"Path Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"ticketId"})," (string): The ID of the ticket for which to fetch associated meeting."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"responses",children:"Responses"}),"\n",(0,s.jsx)(t.h3,{id:"success",children:"Success"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="code 200: Success"',children:'{\r\n  "meeting": [\r\n    {\r\n      "_id": "654b68e9c4ab84dcc26ad908",\r\n      "title": "DevOps Sync Call",\r\n      "ticketId": "Ticket7",\r\n      "date": "2025-05-20",\r\n      "time": "10:30",\r\n      "meeting_link": "https://us05web.zoom.us/j/86289629132?pwd=MicIHCJMlrVykmk2gyNBIczHXibbxR.1"\r\n    }\r\n  ]\r\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"errors",children:"Errors"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="statusCode 401: Authentication Error"',children:'{\r\n  "message": "User token is not valid or does not exist"\r\n}\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="statusCode 404: Not Found"',children:'{\r\n  "message": "No meetings found for the provided ticket ID"\r\n}\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="statusCode 500: Internal Server Error"',children:'{\r\n  "message": "Try again or restart service"\r\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var s=n(6540);const r={},i=s.createContext(r);function c(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);