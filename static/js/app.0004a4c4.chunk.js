(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{123:function(e,t,a){e.exports=a.p+"static/media/logo.985c7f0a.png"},190:function(e,t,a){"use strict";a.d(t,"a",(function(){return q}));var n=a(0),r=a.n(n),o=a(2),i=a(288),c=a(289),l=a(10),s=a.n(l),u=a(68),m=a(39),d=a(5),h=a(21),p=a(76),f=a(84),g=(a(259),a(260),(0==f.a.apps.length?f.a.initializeApp({apiKey:"AIzaSyC42m_4cJ3j6C5mtZHzctqoxRb63I5uEhc",authDomain:"rnchat-d0d3f.firebaseapp.com",projectId:"rnchat-d0d3f",storageBucket:"rnchat-d0d3f.appspot.com",messagingSenderId:"546537876108",appId:"1:546537876108:web:e69c8ba9301856bcff29a9"}):f.a.app()).firestore()),y=f.a.auth(),E=function(e){var t=e.navigation,o=Object(n.useState)(""),i=s()(o,2),c=i[0],l=i[1],f=Object(n.useState)(""),g=s()(f,2),E=g[0],C=g[1];Object(n.useEffect)((function(){return y.onAuthStateChanged((function(e){e&&t.replace("Home")}))}),[]);var w=function(){y.signInWithEmailAndPassword(c,E).catch((function(e){return alert(e.message)}))};return r.a.createElement(m.a,{style:b.scrollContainer},r.a.createElement(u.a,{behavior:"padding",style:b.container,keyboardVerticalOffset:50},r.a.createElement(p.a,{style:"light"}),r.a.createElement(h.d,{source:a(123),style:{width:200,height:200}}),r.a.createElement(d.a,{style:b.inputContainer},r.a.createElement(h.e,{placeholder:"Email",autoFocus:!0,type:"email",value:c,onChangeText:function(e){return l(e)}}),r.a.createElement(h.e,{placeholder:"Password",secureTextEntry:!0,type:"password",value:E,onChangeText:function(e){return C(e)},onSubmitEditing:w})),r.a.createElement(h.h,{theme:{colors:{primary:"#2B3595",secondary:"white"},Button:{titleStyle:{}}}},r.a.createElement(h.c,{raised:!0,containerStyle:b.buttonContainer,onPress:w,title:"Login"}),r.a.createElement(h.c,{containerStyle:b.buttonSecContainer,onPress:function(){return t.navigate("Register")},type:"outline",title:"Register"})),r.a.createElement(d.a,{style:{height:20}})))},b=o.a.create({scrollContainer:{paddingVertical:20,backgroundColor:"white"},container:{flex:1,alignItems:"center",justifyContent:"center",padding:10,backgroundColor:"white"},inputContainer:{marginTop:40,marginBottom:20,width:300},button:{width:200,marginTop:10,backgroundColor:"#2B3595",color:"white"},buttonContainer:{width:200,marginTop:10,backgroundColor:"#2B3595"},buttonSecContainer:{width:200,marginTop:10,backgroundColor:"white",color:"#2B3595"}}),C=function(e){var t=e.navigation,a=Object(n.useState)(""),o=s()(a,2),i=o[0],c=o[1],l=Object(n.useState)(""),f=s()(l,2),E=f[0],b=f[1],C=Object(n.useState)(""),v=s()(C,2),S=v[0],x=v[1],T=Object(n.useState)(""),O=s()(T,2),U=O[0],j=O[1];Object(n.useLayoutEffect)((function(){t.setOptions({headerBackTitle:"Login"})}),[t]);return r.a.createElement(m.a,{style:w.scrollContainer},r.a.createElement(u.a,{behavior:"padding",style:w.container,enabled:!0,keyboardVerticalOffset:50},r.a.createElement(p.a,{style:"light"}),r.a.createElement(h.g,{h3:!0,style:{marginBottom:50}},"Create JoTok Account"),r.a.createElement(d.a,{style:w.inputContainer},r.a.createElement(h.e,{placeholder:"Full Name",autoFocus:!0,type:"text",value:i,onChangeText:function(e){return c(e)}}),r.a.createElement(h.e,{placeholder:"Email",type:"email",value:E,onChangeText:function(e){return b(e)}}),r.a.createElement(h.e,{placeholder:"Password",secureTextEntry:!0,type:"password",value:S,onChangeText:function(e){return x(e)}}),r.a.createElement(h.e,{placeholder:"Profile Picture Url (optional)",type:"text",value:U,onChangeText:function(e){return j(e)}})),r.a.createElement(h.h,{theme:{colors:{primary:"#2B3595",secondary:"white"},Button:{titleStyle:{}}}},r.a.createElement(h.c,{raised:!0,containerStyle:w.buttonContainer,onPress:function(){""==U&&j("https://robohash.org/"+E),y.createUserWithEmailAndPassword(E,S).then((function(e){e.user.updateProfile({displayName:i,photoURL:""===U?"https://robohash.org/"+E:U}),g.collection("users").doc(E).set({displayName:i,photoURL:""===U?"https://robohash.org/"+E:U})})).catch((function(e){return alert(e.message)}))},title:"Register"})),r.a.createElement(d.a,{style:{height:50}})))},w=o.a.create({scrollContainer:{paddingVertical:20,backgroundColor:"white"},container:{flex:1,alignItems:"center",justifyContent:"center",padding:10,backgroundColor:"white"},button:{width:200,marginTop:10,backgroundColor:"#2B3595",color:"white"},buttonContainer:{width:200,marginTop:10,backgroundColor:"#2B3595"},inputContainer:{marginTop:40,marginBottom:20,width:300}}),v=a(12),S=a.n(v),x=a(23),T=a(287),O=a(174),U=a(169),j=function(e){var t=e.id,a=e.chatName,n=e.displayName,o=e.chatImg,i=e.enterChat,c=e.message,l=e.seen,s=(e.schedulePushNotification,e.notify,e.lastName);return r.a.createElement(h.f,{key:t,onPress:function(){return i(t,a,o,n)}},r.a.createElement(d.a,null,r.a.createElement(h.a,{rounded:!0,source:{uri:o}}),l?r.a.createElement(r.a.Fragment,null):r.a.createElement(h.b,{status:"success",containerStyle:{position:"absolute",top:-4,right:-4}})),r.a.createElement(h.f.Content,null,r.a.createElement(h.f.Title,{style:{fontWeight:"800"}},n),r.a.createElement(h.f.Subtitle,{numberOfLines:1,ellipsizeMode:"tail"},s?s+": "+c:"")))};a(290).a({handleNotification:function(){return S.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{shouldShowAlert:!0,shouldPlaySound:!0,shouldSetBadge:!0});case 1:case"end":return e.stop()}}),null,null,null,Promise)}});var k=function(e){var t=e.navigation,a=Object(n.useState)([]),o=s()(a,2),i=o[0],c=o[1],l=Object(n.useState)([]),u=s()(l,2),p=u[0],f=u[1],E=Object(n.useState)({}),b=s()(E,2),C=b[0],w=b[1],v=Object(n.useState)({}),S=s()(v,2),k=S[0],R=S[1];Object(n.useEffect)((function(){}),[]);var B=function(){y.signOut().then((function(){t.replace("Login")}))};Object(n.useEffect)((function(){return g.collection(y.currentUser.email).onSnapshot((function(e){return c(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(n.useEffect)((function(){return g.collection("users").onSnapshot((function(e){return f(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(n.useEffect)((function(){for(var e={},t={},a=0;a<p.length;a++)e[p[a].id]=p[a].data.photoURL,t[p[a].id]=p[a].data.displayName;w(e),R(t)}),[p]),Object(n.useLayoutEffect)((function(){t.setOptions({title:"joTok",headerStyle:{backgroundColor:"#2B3595"},headerTitleStyle:{color:"white"},headerTintColor:"white",headerTitleAlign:"center",headerLeft:function(){var e,t;return r.a.createElement(d.a,{style:{marginLeft:0}},r.a.createElement(x.a,{activeOpacity:.5,onPress:B},r.a.createElement(h.a,{rounded:!0,source:{uri:null!=y&&null!=(e=y.currentUser)&&e.photoURL?null==y||null==(t=y.currentUser)?void 0:t.photoURL:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.png"}})))},headerRight:function(){return r.a.createElement(d.a,{style:{flexDirection:"row",justifyContent:"space-between",width:60,marginRight:5}},r.a.createElement(x.a,{activeOpacity:.5},r.a.createElement(O.a,{name:"camerao",size:24,color:"white"})),r.a.createElement(x.a,{onPress:function(){return t.navigate("AddChat")},activeOpacity:.5},r.a.createElement(U.a,{name:"pencil",size:24,color:"white"})))}})}),[t]);var L=function(e,a,n,r){t.navigate("Chat",{id:e,chatName:a,chatImg:n,displayName:r})};return Object(n.useEffect)((function(){}),[i]),r.a.createElement(T.a,null,r.a.createElement(m.a,{style:N.container},i.map((function(e){var t=e.id,a=e.data,n=a.chatName,o=a.message,i=a.seen,c=a.notify,l=a.displayName;return r.a.createElement(j,{key:t,id:t,chatName:n,enterChat:L,displayName:k[n]?k[n]:n,message:o,seen:i,notify:c,lastName:l,chatImg:C[n]?C[n]:"https://robohash.org/"+n})}))))},N=o.a.create({container:{height:"100%"}}),R=a(104),B=function(e){var t=e.navigation,o=Object(n.useState)(""),i=s()(o,2),c=i[0],l=i[1],u=function(){return S.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.awrap(g.collection(y.currentUser.email).doc(c).set({chatName:c}).then((function(){})).catch((function(e){return alert(e.message)})));case 2:return e.next=4,S.a.awrap(g.collection(c).doc(y.currentUser.email).set({chatName:y.currentUser.email}).then((function(){t.goBack()})).catch((function(e){return alert(e.message)})));case 4:case"end":return e.stop()}}),null,null,null,Promise)};return Object(n.useLayoutEffect)((function(){t.setOptions({title:"Start New Chat"})}),[t]),r.a.createElement(d.a,{style:L.container},r.a.createElement(h.e,{placeholder:"Enter a chat name",onChangeText:function(e){return l(e)},onSubmitEditing:u,leftIcon:r.a.createElement(R.default,{name:"wechat",type:"antdesing",color:"#2B3595",size:24})}),r.a.createElement(h.h,{theme:{colors:{primary:"white",secondary:"white"},Button:{titleStyle:{}}}},r.a.createElement(h.c,{onPress:u,type:"outline",containerStyle:L.buttonContainer,title:"Search"})),r.a.createElement(h.d,{source:a(123),style:L.imageStyle}),r.a.createElement(h.g,{h2:!0,style:L.AppTitle},"JoTok"))},L=o.a.create({container:{padding:20,display:"flex",justifyContent:"center",flexDirection:"column"},buttonContainer:{marginTop:10,backgroundColor:"#2B3595",color:"white"},imageStyle:{height:200,width:200,margin:"20%"},AppTitle:{margin:20,textAlign:"center",width:"100%",color:"#999",margin:"20%",marginTop:5,justifyContent:"center",alignSelf:"center"}}),P=a(16),I=a(54),A=a(6),V=a(91),z=a(82),F=a(156),W=a(85),D=function(e){var t=e.navigation,a=e.route,o=Object(n.useState)(""),i=s()(o,2),c=i[0],l=i[1],p=Object(n.useState)([]),f=s()(p,2),E=f[0],b=f[1];Object(n.useLayoutEffect)((function(){t.setOptions({title:"Chat",headerBackTitleVisible:!1,headerTitleAlign:"left",headerTitle:function(){return r.a.createElement(d.a,{style:{flexDirection:"row",alignItems:"center"}},r.a.createElement(h.a,{rounded:!0,source:{uri:a.params.chatImg}}),r.a.createElement(P.a,{style:{color:"white",marginLeft:10,fontWeight:"700"}},a.params.displayName))}})}),[t]);var C=function(){return S.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return z.a.dismiss(),e.next=3,S.a.awrap(g.collection(y.currentUser.email).doc(a.params.id).collection("messages").add({timestamp:W.firestore.FieldValue.serverTimestamp()||null,message:c,displayName:y.currentUser.displayName,email:y.currentUser.email,photoURL:y.currentUser.photoURL}));case 3:return e.next=5,S.a.awrap(g.collection(a.params.id).doc(y.currentUser.email).collection("messages").add({timestamp:W.firestore.FieldValue.serverTimestamp()||null,message:c,displayName:y.currentUser.displayName,email:y.currentUser.email,photoURL:y.currentUser.photoURL}));case 5:return e.next=7,S.a.awrap(g.collection(a.params.id).doc(y.currentUser.email).update({timestamp:W.firestore.FieldValue.serverTimestamp()||null,message:c,displayName:y.currentUser.displayName,email:y.currentUser.email,photoURL:y.currentUser.photoURL,seen:!1,notify:!1}));case 7:return e.next=9,S.a.awrap(g.collection(y.currentUser.email).doc(a.params.id).update({timestamp:W.firestore.FieldValue.serverTimestamp()||null,message:c,displayName:y.currentUser.displayName,email:y.currentUser.email,photoURL:y.currentUser.photoURL,seen:!0,notify:!1}));case 9:l("");case 10:case"end":return e.stop()}}),null,null,null,Promise)};Object(n.useLayoutEffect)((function(){return g.collection(y.currentUser.email).doc(a.params.id).collection("messages").orderBy("timestamp").onSnapshot((function(e){return b(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[a]),Object(n.useEffect)((function(){g.collection(y.currentUser.email).doc(a.params.id).update({seen:!0,notify:!0})}),[E]);var w=Object(n.useRef)();return r.a.createElement(u.a,{behavior:"ios"===A.a.OS?"padding":"height",keyboardVerticalOffset:140,style:J.container},r.a.createElement(I.a,{style:{display:"flex"}},r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{style:J.chatView,ref:w,onContentSizeChange:function(){return w.current.scrollToEnd({animated:!0})}},E.map((function(e){var t=e.id,a=e.data;return a.email===y.currentUser.email?r.a.createElement(d.a,{key:t,style:J.reciever},r.a.createElement(P.a,{style:J.recieverText},a.message)):r.a.createElement(d.a,{key:t,style:J.sender},r.a.createElement(P.a,{style:J.senderText},a.message))}))),r.a.createElement(d.a,{style:J.footer},r.a.createElement(V.a,{placeholder:"Signal Message",value:c,onChangeText:function(e){return l(e)},style:J.textInput,onSubmitEditing:C}),r.a.createElement(x.a,{onPress:C,activeOpacity:.5},r.a.createElement(F.a,{name:"send",size:24,color:"#2B68E6"}))))))},J=o.a.create({container:{flex:1},footer:{flexDirection:"row",alignItems:"center",width:"100%",padding:15,backgroundColor:"transparent"},textInput:{bottom:0,height:50,flex:1,marginRight:15,backgroundColor:"#ECECEC",padding:15,color:"grey",borderRadius:30},chatView:{flex:1,paddingTop:10},recieverText:{color:"black",fontWeight:"500"},senderText:{color:"white",fontWeight:"500"},reciever:{padding:10,alignSelf:"flex-end",backgroundColor:"#E7EAED",borderRadius:10,borderBottomRightRadius:0,marginRight:15,marginBottom:2,maxWidth:"80%",position:"relative"},sender:{padding:10,backgroundColor:"#2B3595",alignSelf:"flex-start",borderRadius:10,borderBottomLeftRadius:0,marginLeft:15,marginBottom:2,maxWidth:"80%",position:"relative"},senderName:{left:10,paddingRight:10,fontSize:10,color:"white"}}),H=Object(c.a)(),M={headerStyle:{backgroundColor:"#2B3595"},headerTitleStyle:{color:"white"},headerTintColor:"white"};function q(){return r.a.createElement(i.a,null,r.a.createElement(H.Navigator,{screenOptions:M},r.a.createElement(H.Screen,{name:"Login",component:E}),r.a.createElement(H.Screen,{name:"Register",component:C}),r.a.createElement(H.Screen,{name:"Home",component:k}),r.a.createElement(H.Screen,{name:"AddChat",component:B}),r.a.createElement(H.Screen,{name:"Chat",component:D})))}o.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})},197:function(e,t,a){e.exports=a(269)}},[[197,1,2]]]);
//# sourceMappingURL=app.0004a4c4.chunk.js.map