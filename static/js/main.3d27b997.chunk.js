(this.webpackJsonpcrud=this.webpackJsonpcrud||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),i=n.n(c),s=(n(78),n(125)),o=n(127),u=n(129),j=n(23),d=n(2),l=Object(s.a)({header:{background:"#111"},tabs:{color:"#fff",textDecoration:"none",marginRight:20,fontSize:25}}),b=function(){var e=l();return Object(d.jsx)(o.a,{className:e.header,position:"static",children:Object(d.jsxs)(u.a,{children:[Object(d.jsx)(j.c,{className:e.tabs,to:"./crud",exact:!0,children:"Home"}),Object(d.jsx)(j.c,{className:e.tabs,to:"crud/all",exact:!0,children:"All Users"}),Object(d.jsx)(j.c,{className:e.tabs,to:"crud/add",exact:!0,children:"Add User"})]})})},h=n(9),x=n.n(h),O=n(18),p=n(28),m=n(40),f=n.n(m),g="http://localhost:3003/users",v=function(){var e=Object(O.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=t||"",e.next=3,f.a.get("crud/".concat(g,"/").concat(t));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(O.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("crud/".concat(g),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(O.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.put("crud/".concat(g,"/").concat(t),n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(O.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("crud/".concat(g,"/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=n(68),N=n(130),S=n(131),A=n(132),E=n(133),U=n(134),F=n(140),z=n(135),D=n(136),I=n(137),P=n(138),J=n(141),R=Object(s.a)({header:{textAlign:"center",fontSize:30,margin:20},table:{width:"80%",margin:"0 0 0 10%"},thead:{"& > *":{background:"#000",color:"#fff",fontSize:20}},tbody:{"& > *":{background:"#ddd",color:"#000",fontSize:20}}}),T=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),i=Object(p.a)(c,2),s=i[0],o=i[1],u=R();Object(a.useEffect)((function(){l()}),[]);var l=function(){var e=Object(O.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(O.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t);case 2:l(),o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){o(!0)},m=function(){o(!1)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(C.a,{variant:"h4",className:u.header,children:"All Users"}),Object(d.jsxs)(N.a,{className:u.table,children:[Object(d.jsx)(S.a,{children:Object(d.jsxs)(A.a,{className:u.thead,children:[Object(d.jsx)(E.a,{children:"Id"}),Object(d.jsx)(E.a,{children:"Name"}),Object(d.jsx)(E.a,{children:"Username"}),Object(d.jsx)(E.a,{children:"Age"}),Object(d.jsx)(E.a,{children:"Email"}),Object(d.jsx)(E.a,{children:"Phone"}),Object(d.jsx)(E.a,{})]})}),Object(d.jsx)(U.a,{children:n.map((function(e){return Object(d.jsxs)(A.a,{className:u.tbody,children:[Object(d.jsxs)(F.a,{open:s,onClose:m,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(d.jsx)(z.a,{id:"alert-dialog-title",children:"Are you sure delete this user?"}),Object(d.jsx)(D.a,{children:Object(d.jsx)(I.a,{id:"alert-dialog-description"})}),Object(d.jsxs)(P.a,{children:[Object(d.jsx)(J.a,{variant:"contained",color:"primary",onClick:m,children:"Cancel"}),Object(d.jsx)(J.a,{variant:"contained",color:"secondary",onClick:function(){return b(e.id)},autoFocus:!0,children:"Delete"})]})]}),Object(d.jsx)(E.a,{children:e.id}),Object(d.jsx)(E.a,{children:e.name}),Object(d.jsx)(E.a,{children:e.username}),Object(d.jsx)(E.a,{children:e.age}),Object(d.jsx)(E.a,{children:e.email}),Object(d.jsx)(E.a,{children:e.phone}),Object(d.jsxs)(E.a,{children:[Object(d.jsx)(J.a,{variant:"contained",color:"primary",style:{marginRight:20},component:j.b,to:"/crud/edit/".concat(e.id),children:"Edit"}),Object(d.jsx)(J.a,{variant:"contained",color:"secondary",onClick:h,children:"Delete"})]})]},e.id)}))})]})]})},B=n(29),H=n(35),M=n(139),q=n(144),G=n(143),K=n(142),L=n(8),Q=Object(s.a)({header:{textAlign:"center",fontSize:30,margin:20},container:{width:"50%",margin:"0 0 0 25%",background:"#ddd",padding:"0 20px","& > *":{marginTop:20}}}),V={name:"",username:"",email:"",phone:""},W=function(){var e=Object(a.useState)(V),t=Object(p.a)(e,2),n=t[0],r=t[1],c=n.name,i=n.username,s=n.email,o=n.phone,u=Q(),j=Object(L.f)(),l=function(e){r(Object(H.a)(Object(H.a)({},n),{},Object(B.a)({},e.target.name,e.target.value)))},b=function(){var e=Object(O.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(n);case 2:j.push("./crud/all");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(C.a,{variant:"h4",className:u.header,children:"Add User"}),Object(d.jsxs)(M.a,{className:u.container,children:[Object(d.jsxs)(q.a,{children:[Object(d.jsx)(G.a,{children:"Name"}),Object(d.jsx)(K.a,{onChange:function(e){return l(e)},type:"text",name:"name",value:c})]}),Object(d.jsxs)(q.a,{children:[Object(d.jsx)(G.a,{children:"Username"}),Object(d.jsx)(K.a,{onChange:function(e){return l(e)},type:"text",name:"username",value:i})]}),Object(d.jsxs)(q.a,{children:[Object(d.jsx)(G.a,{children:"Email"}),Object(d.jsx)(K.a,{onChange:function(e){return l(e)},type:"email",name:"email",value:s})]}),Object(d.jsxs)(q.a,{children:[Object(d.jsx)(G.a,{children:"Phone"}),Object(d.jsx)(K.a,{onChange:function(e){return l(e)},type:"number",name:"phone",value:o})]}),Object(d.jsx)(J.a,{onClick:function(){return b()},variant:"contained",color:"primary",children:"Add User"})]})]})},X={name:"",username:"",email:"",phone:""},Y=Object(s.a)({header:{textAlign:"center",fontSize:30,margin:20},container:{width:"50%",margin:"0 0 0 25%",background:"#ddd",padding:"0 20px","& > *":{marginTop:20}}}),Z=function(){var e=Object(a.useState)(X),t=Object(p.a)(e,2),n=t[0],r=t[1],c=n.name,i=n.username,s=n.email,o=n.phone,u=Object(L.g)().id,j=Y(),l=Object(L.f)();Object(a.useEffect)((function(){b()}),[]);var b=function(){var e=Object(O.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(u);case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(O.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(u,n);case 2:e.sent,l.push("/crud/all");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(e){console.log(e.target.value),r(Object(H.a)(Object(H.a)({},n),{},Object(B.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)(M.a,{className:j.container,children:[Object(d.jsx)(C.a,{variant:"h4",children:"Edit Information"}),Object(d.jsxs)(q.a,{children:[Object(d.jsx)(G.a,{htmlFor:"my-input",children:"Name"}),Object(d.jsx)(K.a,{onChange:function(e){return m(e)},name:"name",value:c,id:"my-input","aria-describedby":"my-helper-text"})]}),Object(d.jsxs)(q.a,{children:[Object(d.jsx)(G.a,{htmlFor:"my-input",children:"Username"}),Object(d.jsx)(K.a,{onChange:function(e){return m(e)},name:"username",value:i,id:"my-input","aria-describedby":"my-helper-text"})]}),Object(d.jsxs)(q.a,{children:[Object(d.jsx)(G.a,{htmlFor:"my-input",children:"Email"}),Object(d.jsx)(K.a,{onChange:function(e){return m(e)},name:"email",value:s,id:"my-input","aria-describedby":"my-helper-text"})]}),Object(d.jsxs)(q.a,{children:[Object(d.jsx)(G.a,{htmlFor:"my-input",children:"Phone"}),Object(d.jsx)(K.a,{onChange:function(e){return m(e)},name:"phone",value:o,id:"my-input","aria-describedby":"my-helper-text"})]}),Object(d.jsx)(q.a,{children:Object(d.jsx)(J.a,{variant:"contained",color:"primary",onClick:function(){return h()},children:"Edit User"})})]})},$=n.p+"static/media/404.9c57620b.png",_=function(){return Object(d.jsx)("img",{src:$,style:{width:"40%",margin:"20px 0 0 30%"},alt:"notfound"})};var ee=function(){return Object(d.jsxs)(j.a,{children:[Object(d.jsx)(b,{}),Object(d.jsxs)(L.c,{children:[Object(d.jsx)(L.a,{exact:!0,path:"/"}),Object(d.jsx)(L.a,{exact:!0,path:"/all",component:T}),Object(d.jsx)(L.a,{exact:!0,path:"/add",component:W}),Object(d.jsx)(L.a,{exact:!0,path:"/edit/:id",component:Z}),Object(d.jsx)(L.a,{component:_})]})]})};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(ee,{})}),document.getElementById("root"))},78:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.3d27b997.chunk.js.map