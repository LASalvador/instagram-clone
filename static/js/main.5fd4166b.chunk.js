(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t){},123:function(e,t,a){},124:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(56),s=a.n(r),o=a(6),i=a(10),l=a.n(i),u=a(17),p=a(68),m=a(18),h=a(19),d=a(21),f=a(20),g=a(22),E=a(57),v=a.n(E),b=a(58),k=a.n(b).a.create({baseURL:"http://5180e0d4.ngrok.io"}),x=(a(123),a(59)),y=a.n(x),w=a(60),j=a.n(w),O=a(61),C=a.n(O),S=a(62),P=a.n(S),I=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).registerToSocket=function(){var e=v()("http://localhost:3333");e.on("post",function(e){a.setState({feed:[e].concat(Object(p.a)(a.state.feed))})}),e.on("like",function(e){a.setState({feed:a.state.feed.map(function(t){return t._id===e?e:t})})})},a.handleLike=function(e){k.post("posts/".concat(e,"/like"))},a.state={feed:[]},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.registerToSocket(),console.log(k.defaults.baseURL),e.next=4,k.get("posts/list");case 4:t=e.sent,this.setState({feed:t.data});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return c.a.createElement("section",{id:"post-list"},this.state.feed.map(function(t){return c.a.createElement("article",{key:t._id},c.a.createElement("header",null,c.a.createElement("div",{className:"user-info"},c.a.createElement("span",null," ",t.author," "),c.a.createElement("span",{className:"place"}," ",t.place," ")),c.a.createElement("img",{src:y.a,alt:"Mais"})),c.a.createElement("img",{src:"http://localhost:3333/files/".concat(t.image),alt:""}),c.a.createElement("footer",null,c.a.createElement("div",{className:"actions"},c.a.createElement("button",{type:"button",onClick:function(){return e.handleLike(t._id)}},c.a.createElement("img",{src:j.a,alt:""})),c.a.createElement("img",{src:C.a,alt:""}),c.a.createElement("img",{src:P.a,alt:""})),c.a.createElement("strong",null," ",t.likes," curtidas"),c.a.createElement("p",null,t.description,c.a.createElement("span",null," ",t.hashtags," "))))}))}}]),t}(n.Component),L=a(63),N=(a(124),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c)))).state={image:null,author:"",place:"",description:"",hashtags:""},a.handleSubmit=function(e){e.preventDefault();var t=new FormData;t.append("image",a.state.image),t.append("author",a.state.author),t.append("place",a.state.place),t.append("description",a.state.description),t.append("hashtags",a.state.hashtags),Object(u.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.post("posts/create",t);case 2:case"end":return e.stop()}},e)}))(),a.props.history.push("/")},a.handleImage=function(e){a.setState({image:e.target.files[0]})},a.handleChange=function(e){a.setState(Object(L.a)({},e.target.name,e.target.value))},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement("form",{id:"new-post",onSubmit:this.handleSubmit},c.a.createElement("input",{type:"file",onChange:this.handleImage}),c.a.createElement("input",{type:"text",name:"author",placeholder:"Autor do Post",onChange:this.handleChange,value:this.state.author}),c.a.createElement("input",{type:"text",name:"place",placeholder:"place do Post",onChange:this.handleChange,value:this.state.place}),c.a.createElement("input",{type:"text",name:"description",placeholder:"description do Post",onChange:this.handleChange,value:this.state.description}),c.a.createElement("input",{type:"text",name:"hashtags",placeholder:"hashtags do Post",onChange:this.handleChange,value:this.state.hashtags}),c.a.createElement("button",{type:"submit"},"Enviar"))}}]),t}(n.Component));function D(){return c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/",exact:!0,component:I}),c.a.createElement(o.a,{path:"/new",exact:!0,component:N}))}var R=a(9),_=(a(129),a(66)),A=a.n(_),J=a(67),M=a.n(J);function T(){return c.a.createElement("header",{id:"main-header"},c.a.createElement("div",{className:"header-content"},c.a.createElement(R.b,{to:"/"},c.a.createElement("img",{src:A.a,alt:"InstaRocket"})),c.a.createElement(R.b,{to:"/new"},c.a.createElement("img",{src:M.a,alt:"Enviar Publica\xe7\xe3o"}))))}var U=function(){return c.a.createElement(R.a,null,c.a.createElement(T,null),c.a.createElement(D,null))};a(130);s.a.render(c.a.createElement(U,null),document.getElementById("root"))},59:function(e,t,a){e.exports=a.p+"static/media/more.22d960a9.svg"},60:function(e,t,a){e.exports=a.p+"static/media/like.00e13584.svg"},61:function(e,t,a){e.exports=a.p+"static/media/comment.e2a49935.svg"},62:function(e,t,a){e.exports=a.p+"static/media/send.55e74cfd.svg"},66:function(e,t,a){e.exports=a.p+"static/media/logo.83fd0bcc.svg"},67:function(e,t,a){e.exports=a.p+"static/media/camera.787c6af9.svg"},69:function(e,t,a){e.exports=a(131)}},[[69,1,2]]]);
//# sourceMappingURL=main.5fd4166b.chunk.js.map