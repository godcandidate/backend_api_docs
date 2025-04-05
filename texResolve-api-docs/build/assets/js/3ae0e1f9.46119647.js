"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[249],{9653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=n(4848),r=n(8453);const i={sidebar_position:1},c="Create Meeting",d={id:"Meeting APIs/create-meeting",title:"Create Meeting",description:"Learn how to create a meeting in TexResolve.",source:"@site/docs/Meeting APIs/create-meeting.md",sourceDirName:"Meeting APIs",slug:"/Meeting APIs/create-meeting",permalink:"/Meeting APIs/create-meeting",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Meeting APIs/create-meeting.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Meeting APIs",permalink:"/category/meeting-apis"},next:{title:"Get User Meetings",permalink:"/Meeting APIs/get-user-meetings"}},a={},l=[{value:"Request",id:"request",level:2},{value:"Body Parameters",id:"body-parameters",level:3},{value:"Responses",id:"responses",level:2},{value:"Success",id:"success",level:3},{value:"Errors",id:"errors",level:3}];function o(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"create-meeting",children:"Create Meeting"}),"\n",(0,s.jsx)(t.p,{children:"Learn how to create a meeting in TexResolve."}),"\n",(0,s.jsx)(t.h2,{id:"request",children:"Request"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Method"}),": POST"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Endpoint"}),": ",(0,s.jsx)(t.code,{children:"https://tex-resolve-backend.onrender.com/api/v1/meetings"})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"body-parameters",children:"Body Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Meeting Details"}),": Enter the details for the meeting."]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"title"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Title of the meeting"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticketId"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Associated ticket ID"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Date of the meeting (format: YYYY-MM-DD)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"time"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsxs)(t.td,{children:["Time of the meeting (format: HH",":mm",")"]})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Here's an example request body for creating a meeting:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="creating meeting example"',children:'{\r\n  "title": "DevOps Sync Call",\r\n  "ticketId": "Ticket7",\r\n  "date": "2025-05-20",\r\n  "time": "10:30"\r\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"responses",children:"Responses"}),"\n",(0,s.jsx)(t.h3,{id:"success",children:"Success"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="statusCode 201: success"',children:'{\r\n  message: "Meeting created successfully",\r\n  link: zoomMeetingUrl //zoom meeting link,\r\n}\r\n\n'})}),"\n",(0,s.jsx)(t.h3,{id:"errors",children:"Errors"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="statusCode 401: Authentication error"',children:"User token is not valid or does not exist or expired\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="statusCode 400: Bad Request"',children:"Invalid request parameters or access\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="statusCode 500: Internal Server Error"',children:"Try again or restart service\n"})}),"\n",(0,s.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>d});var s=n(6540);const r={},i=s.createContext(r);function c(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);