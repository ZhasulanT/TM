(this["webpackJsonpt-m"]=this["webpackJsonpt-m"]||[]).push([[0],{93:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t),n.d(t,"Context",(function(){return J}));var a=n(0),c=n(16),r=n.n(c),i=n(27),s=n(44),o=n(125),j=n(128),d=n(129),u=n(134),l="/login",h="/chat",b=n(32),O=n(9),x=function(){var e=Object(a.useContext)(J).auth,t=Object(b.a)(e),n=Object(i.a)(t,1)[0];return Object(O.jsx)(o.a,{color:"secondary",position:"static",children:Object(O.jsx)(j.a,{variant:"dense",children:Object(O.jsx)(d.a,{container:!0,justify:"flex-end",children:n?Object(O.jsx)(u.a,{onClick:function(){return e.signOut()},variant:"outlined",children:"\u0412\u044b\u0439\u0442\u0438"}):Object(O.jsx)(s.b,{to:l,children:Object(O.jsx)(u.a,{variant:"outlined",children:"\u041b\u043e\u0433\u0438\u043d"})})})})})},p=n(18),m=n(42),f=n.n(m),g=n(52),v=n(130),y=n(133),w=n(31),C=function(){var e=Object(a.useContext)(J).auth,t=function(){var t=Object(g.a)(f.a.mark((function t(){var n,a,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new w.a.auth.GoogleAuthProvider,t.next=3,e.signInWithPopup(n);case 3:a=t.sent,c=a.user,console.log(c);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(O.jsx)(v.a,{children:Object(O.jsx)(d.a,{container:!0,style:{height:window.innerHeight-50},alignItems:"center",justify:"center",children:Object(O.jsx)(d.a,{style:{width:400,background:"lightgray"},container:!0,alignItems:"center",direction:"column",children:Object(O.jsx)(y.a,{p:5,children:Object(O.jsx)(u.a,{onClick:t,variant:"outlined",children:"\u0412\u043e\u0439\u0442\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Google"})})})})})},I=n(135),k=n(131),A=n(68),L=function(){return Object(O.jsx)(v.a,{children:Object(O.jsx)(d.a,{container:!0,style:{height:window.innerHeight-50},alignItems:"center",justify:"center",children:Object(O.jsx)(d.a,{container:!0,alignItems:"center",direction:"column",children:Object(O.jsx)("div",{className:"lds-hourglass"})})})})},N=[{path:l,Component:C}],R=[{path:h,Component:function(){var e=Object(a.useContext)(J),t=e.auth,n=e.firestore,c=Object(b.a)(t),r=Object(i.a)(c,1)[0],s=Object(a.useState)(""),o=Object(i.a)(s,2),j=o[0],l=o[1],h=Object(A.a)(n.collection("messages").orderBy("createdAt")),x=Object(i.a)(h,2),p=x[0],m=x[1],y=function(){var e=Object(g.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.collection("messages").add({uid:r.uid,displayName:r.displayName,photoURL:r.photoURL,text:j,createdAt:w.a.firestore.FieldValue.serverTimestamp()}),l("");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return m?Object(O.jsx)(L,{}):Object(O.jsx)(v.a,{children:Object(O.jsxs)(d.a,{container:!0,justify:"center",style:{height:window.innerHeight-50,marginTop:20},children:[Object(O.jsx)("div",{style:{width:"80%",height:"60vh",border:"1px solid gray",overflowY:"auto"},children:p.map((function(e){return Object(O.jsxs)("div",{style:{margin:10,border:r.uid===e.uid?"2px solid green":"2px dashed red",marginLeft:r.uid===e.uid?"auto":"10px",width:"fit-content",padding:5},children:[Object(O.jsxs)(d.a,{container:!0,children:[Object(O.jsx)(I.a,{src:e.photoURL}),Object(O.jsx)("div",{children:e.displayName})]}),Object(O.jsx)("div",{children:e.text})]})}))}),Object(O.jsxs)(d.a,{container:!0,direction:"column",alignItems:"flex-end",style:{width:"80%"},children:[Object(O.jsx)(k.a,{fullWidth:!0,rowsMax:2,variant:"outlined",value:j,onChange:function(e){return l(e.target.value)}}),Object(O.jsx)(u.a,{onClick:y,variant:"outlined",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})})}}],z=function(){var e=Object(a.useContext)(J).auth,t=Object(b.a)(e);return Object(i.a)(t,1)[0]?Object(O.jsxs)(p.d,{children:[R.map((function(e){var t=e.path,n=e.Component;return Object(O.jsx)(p.b,{path:t,component:n,exact:!0},t)})),Object(O.jsx)(p.a,{to:h})]}):Object(O.jsxs)(p.d,{children:[N.map((function(e){var t=e.path,n=e.Component;return Object(O.jsx)(p.b,{path:t,component:n,exact:!0},t)})),Object(O.jsx)(p.a,{to:l})]})},B=(n(93),function(){var e=Object(a.useContext)(J).auth,t=Object(b.a)(e),n=Object(i.a)(t,3),c=(n[0],n[1]);n[2];return c?Object(O.jsx)(L,{}):Object(O.jsxs)(s.a,{children:[Object(O.jsx)(x,{}),Object(O.jsx)(z,{})]})});n(94),n(95);w.a.initializeApp({apiKey:"AIzaSyBdO3QSwROzqcn-RsJxTnOghXMz-ZWjrfU",authDomain:"chat-tm-c7ea2.firebaseapp.com",projectId:"chat-tm-c7ea2",storageBucket:"chat-tm-c7ea2.appspot.com",messagingSenderId:"169367922242",appId:"1:169367922242:web:8800cad8da10180a2a2fdb",measurementId:"G-7NCL83J5V0"});var J=Object(a.createContext)(null),S=w.a.auth(),U=w.a.firestore();r.a.render(Object(O.jsx)(J.Provider,{value:{firebase:w.a,auth:S,firestore:U},children:Object(O.jsx)(B,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.42d4bbd0.chunk.js.map