"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[576],{652:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=s(4848),n=s(8453);const i={sidebar_position:2},c="Create Ticket",d={id:"Ticket APIs/add-ticket",title:"Create Ticket",description:"Learn how to create a ticket in TexResolve.",source:"@site/docs/Ticket APIs/add-ticket.md",sourceDirName:"Ticket APIs",slug:"/Ticket APIs/add-ticket",permalink:"/Ticket APIs/add-ticket",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Ticket APIs/add-ticket.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Ticket APIs",permalink:"/category/ticket-apis"},next:{title:"Get All Tickets",permalink:"/Ticket APIs/get-all-tickets"}},a={},l=[{value:"Request",id:"request",level:2},{value:"Body Parameters",id:"body-parameters",level:3},{value:"Responses",id:"responses",level:2},{value:"Success",id:"success",level:3},{value:"Errors",id:"errors",level:3}];function o(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"create-ticket",children:"Create Ticket"}),"\n",(0,r.jsx)(t.p,{children:"Learn how to create a ticket in TexResolve."}),"\n",(0,r.jsx)(t.h2,{id:"request",children:"Request"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Method"}),": POST"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Endpoint"}),": ",(0,r.jsx)(t.code,{children:"https://tex-resolve-backend.onrender.com/api/v1/tickets"})]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"body-parameters",children:"Body Parameters"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Ticket Details"}),": Enter the details for the ticket."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:'title="Ticket Schema"'}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"title"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Title of the issue"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"description"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Detailed issue description"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attempted_solution"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Steps attempted to resolve the issue"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attachments?"}),(0,r.jsx)(t.td,{children:"File"}),(0,r.jsx)(t.td,{children:"Optional file attachments"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tags?"}),(0,r.jsx)(t.td,{children:"String[]"}),(0,r.jsx)(t.td,{children:"Array of tags"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Here's an example request body for creating a ticket:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",metastring:'title="creating ticket example"',children:'{\n  "title": "Login Issue",\n  "description": "Unable to log in with correct credentials.",\n  "attempted_solution": "Tried resetting password and clearing cache.",\n  "tags": ["login", "authentication"],\n  "attachments": [file1.png, file2.png]\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"responses",children:"Responses"}),"\n",(0,r.jsx)(t.h3,{id:"success",children:"Success"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",metastring:'title="statusCode 201: success"',children:"Ticket created successfully\n"})}),"\n",(0,r.jsx)(t.h3,{id:"errors",children:"Errors"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",metastring:'title="statusCode 401: Authentication error"',children:"User token is not valid or does not exist or expired\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",metastring:'title="statusCode 400: Bad Request"',children:"Invalid request parameters or failed to upload attachments\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",metastring:'title="statusCode 500: Internal Server Error"',children:"Try again or restart service\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>d});var r=s(6540);const n={},i=r.createContext(n);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);