(this["webpackJsonpex-sol"]=this["webpackJsonpex-sol"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),s=n(14),r=n.n(s),a=(n(44),n(45),n.p+"static/media/piglet.e32871f7.png"),l=n(84),o=n(90),d=n(86),j=n(58),b=n(88),u=n(87),m=n(91),h=n(2),p=Object(l.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function x(){var e=p();return Object(h.jsx)("header",{className:"navbar bg-light d-flex justify-content-between",children:Object(h.jsx)("div",{className:e.root,children:Object(h.jsx)(o.a,{position:"static",children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(m.a,{alt:"piglet is making a booboo",src:a}),Object(h.jsx)(u.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"}),Object(h.jsx)(j.a,{variant:"h6",className:e.title,children:"Todo List"}),Object(h.jsx)(b.a,{color:"inherit",children:"Home"}),Object(h.jsx)(b.a,{color:"inherit",children:"About"}),Object(h.jsx)(b.a,{color:"inherit",children:"Login"})]})})})})}function f(){return Object(h.jsx)("footer",{className:"bd-footer p-3 p-md-5 mt-5 bg-light text-center text-sm-start",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("ul",{className:"bd-footer-links ps-0 mb-3",children:[Object(h.jsx)("li",{className:"d-inline-block",children:Object(h.jsx)("a",{href:"https://www.youtube.com/user/ywarezk",children:"My youtube channel"})}),Object(h.jsx)("li",{className:"d-inline-block ml-3",children:Object(h.jsx)("a",{href:"https://www.youtube.com/watch?v=bVPMCmTN__Q&list=PLnHa2cF4cNDtfkYKO6v069GUPYrJtijwc",children:"React playlist"})})]}),Object(h.jsxs)("p",{className:"mb-0",children:["Designed and built with all the love in the world by the ",Object(h.jsx)("a",{href:"https://il.linkedin.com/in/yariv-katz",children:"Yariv Katz"})]})]})})}var g=n(26),O=n.n(g),w=n(29);n(89);Object(l.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function v(){var e=function(){var e=Object(w.a)(O.a.mark((function e(t){var n,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://academeez-login-ex.herokuapp.com/api/users/login",{method:"POST",body:JSON.stringify({email:"yariv@nerdeez.com",password:"12345678"}),headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:i=e.sent,console.log(i);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("form",{onSubmit:e,children:[Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{className:"form-label",children:"Email address"}),Object(h.jsx)("input",{type:"email",className:"form-control"})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{type:"password",className:"form-control"})]}),Object(h.jsx)("button",{disabled:false,type:"submit",className:"btn btn-primary",children:"Submit"}),false]})}var y=n(30),N=n.n(y);function T(){return Object(h.jsx)("ul",{className:"list-group",children:[{id:9870,title:"title",description:"desc",group:"45",when:"2019-09-07T18:27:32.960000Z"},{id:9874,title:"title",description:"desc",group:"45",when:"2019-09-07T18:27:32.960000Z"},{id:9910,title:"new",description:"yuval_azani7",group:"45",when:"2019-09-21T12:30:35.620000Z"},{id:9914,title:"new",description:"yuval_azani7",group:"45",when:"2019-09-21T12:30:35.620000Z"},{id:9916,title:"title",description:null,group:"1",when:"2019-09-07T18:27:32.960000Z"},{id:10119,title:"title:0.38468893136429116",description:"description:0.8604495392622051",group:"group:test",when:"2020-12-02T20:57:10.292000Z"},{id:9802,title:"vsdvg sgg",description:"description 0.28810915079174815",group:"33",when:"2019-09-21T12:30:27.860000Z"},{id:9917,title:"my titl",description:"this is test of description",group:"test",when:"2020-01-20T18:23:10.267000Z"}].map((function(e){return Object(h.jsxs)("li",{className:"align-items-center list-group-item d-flex justify-content-between",children:[e.title,Object(h.jsx)(u.a,{"aria-label":"delete",color:"primary",onClick:function(){var t;t=e,console.log("Deleting the item ".concat(t.title))},children:Object(h.jsx)(N.a,{})})]},e.id)}))})}var k=function(){return Object(h.jsxs)("div",{className:"h-100 d-flex flex-column justify-content-between",children:[Object(h.jsx)(x,{}),Object(h.jsxs)("div",{className:"container mt-3",children:[Object(h.jsx)("div",{className:"row justify-content-center",children:Object(h.jsx)("div",{className:"col-4",children:Object(h.jsx)(v,{})})}),Object(h.jsx)("div",{className:"row justify-content-center mt-5",children:Object(h.jsx)("div",{className:"col-4",children:Object(h.jsx)(T,{})})})]}),Object(h.jsx)(f,{})]})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root")),Z()}},[[57,1,2]]]);
//# sourceMappingURL=main.78e09c1d.chunk.js.map