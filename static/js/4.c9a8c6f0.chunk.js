(this["webpackJsonpit-samurais"]=this["webpackJsonpit-samurais"]||[]).push([[4],{292:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__3i6Ij",dialogItems:"Dialogs_dialogItems__2HfOE",active:"Dialogs_active__29h-a",messages:"Dialogs_messages__1dMiD",message:"Dialogs_message__3VF5g"}},297:function(e,a,t){"use strict";t.r(a);var n=t(126),s=t(0),i=t.n(s),r=t(292),o=t.n(r),c=t(13),l=function(e){var a="/dialogs/"+e.id;return i.a.createElement("div",{className:o.a.dialog+" "+o.a.active},i.a.createElement(c.b,{to:a},e.name))},m=function(e){return i.a.createElement("div",{className:o.a.message},e.message)},u=t(10),d=t(88),g=t(127),b=t(32),f=t(56),E=Object(f.a)(50),v=Object(g.a)({form:"dialog-add-message-form"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(d.a,{component:b.b,validate:[f.b,E],name:"newMessageBody",placeholder:"Enter your message"})),i.a.createElement("div",null,i.a.createElement("button",null,"Send22")))})),p=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return i.a.createElement(l,{name:e.name,key:e.id,id:e.id})})),n=a.messages.map((function(e){return i.a.createElement(m,{message:e.message,key:e.id})}));return e.isAuth?i.a.createElement("div",{className:o.a.dialogs},i.a.createElement("div",{className:o.a.dialogItems},t),i.a.createElement("div",{className:o.a.messages},i.a.createElement("div",null,n)),i.a.createElement(v,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}})):i.a.createElement(u.a,{to:"/login"})},h=t(17),_=t(34),j=t(35),O=t(37),y=t(36),D=function(e){return{isAuth:e.auth.isAuth}},k=t(8);a.default=Object(k.d)(Object(h.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(n.b)(a))}}})),(function(e){var a=function(a){Object(O.a)(n,a);var t=Object(y.a)(n);function n(){return Object(_.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(u.a,{to:"/login"})}}]),n}(i.a.Component);return Object(h.b)(D)(a)}))(p)}}]);
//# sourceMappingURL=4.c9a8c6f0.chunk.js.map