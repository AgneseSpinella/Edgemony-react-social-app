(this["webpackJsonpsocial-app"]=this["webpackJsonpsocial-app"]||[]).push([[2],{23:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return r}));n(26);var c="https://edgemony-backend.herokuapp.com",a=function(e){return fetch(c+e).then((function(e){return e.json()}))},s=function(e,t){return fetch(c+e,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()}))},r=function(e){return fetch(c+e,{method:"DELETE",headers:{"Content-type":"application/json"}}).then((function(e){return e.json()}))}},24:function(e,t,n){"use strict";var c=n(25),a=n.n(c),s=n(1);t.a=function(e){var t=e.bgColor,n=e.text;return Object(s.jsx)("div",{className:a.a.Modal,style:{background:"".concat(t)},children:Object(s.jsx)("p",{children:n})})}},25:function(e,t,n){e.exports={Modal:"Modal_Modal__32mLz"}},27:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(28),a=n.n(c),s=n(1),r=function(e){var t=e.data||{name:"friend",photo:"https://randomuser.me/api/portraits/women/59.jpg"};return Object(s.jsxs)("div",{className:a.a.friend,children:[Object(s.jsx)("img",{src:t.photo,alt:t.name}),Object(s.jsx)("p",{children:t.name})]})}},28:function(e,t,n){e.exports={friend:"FriendPreview_friend__3Gjby"}},39:function(e,t,n){e.exports={message:"MessagePreview_message__3j9dl"}},40:function(e,t,n){e.exports={post:"Post_post__3hqZB",deleteBtn:"Post_deleteBtn__1bIB2"}},41:function(e,t,n){e.exports={home:"Home_home__1JXvv",grid:"Home_grid__sUtIT",createPostBtn:"Home_createPostBtn__1BGTQ",friend:"Home_friend__eOEhP"}},47:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(0),s=n(27),r=n(39),o=n.n(r),i=n(45),j=n(46),u=n(1),d=function(e){var t=e.date||new Date;return Object(u.jsx)("small",{children:Object(i.a)(new Date(t),new Date,{addSuffix:!0,locale:j.a})})},l=function(e){var t=e.data||{text:"lore ipsum",date:new Date,sender:"user"};return Object(u.jsxs)("div",{className:o.a.message,children:[Object(u.jsx)("h5",{children:t.sender}),Object(u.jsx)("p",{children:Object(u.jsx)(d,{date:t.date})}),Object(u.jsx)("p",{children:t.text})]})},b=n(23),h=n(24),f=n(40),p=n.n(f),x=function(e){var t=e.data||{author:"User",text:"text",date:new Date,photo:"https://images.unsplash.com/photo-1639512398860-be15f48100ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80"},n=Object(a.useState)(!1),s=Object(c.a)(n,2),r=s[0],o=s[1];return Object(u.jsxs)("article",{className:p.a.post,children:[r&&Object(u.jsx)(h.a,{bgColor:"lightcoral",text:"Il post \xe8 stato rimosso"}),Object(u.jsx)("button",{onClick:function(){Object(b.b)("/posts/".concat(e.data.id)).then((function(){})),o(!0),setTimeout((function(){o(!1),window.location.href="/"}),3e3)},className:p.a.deleteBtn,children:"X"}),Object(u.jsx)("h3",{children:t.author}),Object(u.jsx)("p",{children:Object(u.jsx)("small",{children:Object(i.a)(new Date(t.date),new Date,{addSuffix:!0,locale:j.a})})}),Object(u.jsx)("p",{children:t.text}),t.photo?Object(u.jsx)("img",{src:t.photo,alt:t.author}):Object(u.jsx)(u.Fragment,{})]})},O=n(6),m=n(41),_=n.n(m),v=[],w=[],g=[];t.default=function(){var e=Object(a.useState)(v),t=Object(c.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(g),i=Object(c.a)(o,2),j=i[0],d=i[1],h=Object(a.useState)(w),f=Object(c.a)(h,2),p=f[0],m=f[1];return Object(a.useEffect)((function(){Object(b.a)("/friends?_limit=4").then((function(e){return r(e)})),Object(b.a)("/messages?_limit=4").then((function(e){return m(e)})),Object(b.a)("/posts").then((function(e){return d(e.reverse())}))}),[]),Object(u.jsxs)("section",{className:_.a.home,children:[Object(u.jsx)("h3",{children:"Bevenuto utente"}),Object(u.jsxs)("div",{className:_.a.grid,children:[Object(u.jsx)("aside",{children:n.map((function(e,t){return Object(u.jsx)(s.a,{data:e},t)}))}),Object(u.jsxs)("main",{children:[Object(u.jsx)(O.b,{to:"/new-post",children:Object(u.jsx)("button",{className:_.a.createPostBtn,children:"+ Create a new post!"})}),j.map((function(e,t){return Object(u.jsx)(x,{data:e},t)}))]}),Object(u.jsx)("aside",{children:p.map((function(e,t){return Object(u.jsx)(l,{data:e},t)}))})]})]})}}}]);
//# sourceMappingURL=2.099380db.chunk.js.map