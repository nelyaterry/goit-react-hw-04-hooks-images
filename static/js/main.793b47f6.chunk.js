(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{33:function(e,n,t){},77:function(e,n,t){"use strict";t.r(n);var a,o,i,r,c,s,l,p,d,u,h,b,x,g=t(0),f=t.n(g),m=t(12),j=t.n(m),O=(t(33),t(6)),v=t(7),y=t(9),w=t(8),k=t(2),S=t(3),C=S.a.header(a||(a=Object(k.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),q=S.a.form(o||(o=Object(k.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),M=S.a.button(i||(i=Object(k.a)(['\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url("https://image.flaticon.com/icons/svg/149/149852.svg");\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n']))),z=S.a.span(r||(r=Object(k.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),F=S.a.input(c||(c=Object(k.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 14px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n  }\n"]))),L=t(1),U=function(e){Object(y.a)(t,e);var n=Object(w.a)(t);function t(){var e;Object(O.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).state={request:""},e.handleChange=function(n){e.setState({request:n.currentTarget.value.trim()})},e.handleSubmit=function(n){var t=e.state.request;n.preventDefault(),""!==t?(e.props.onSubmit(t),e.setState({request:""})):alert("What are you looking for??")},e}return Object(v.a)(t,[{key:"render",value:function(){return Object(L.jsx)(C,{children:Object(L.jsxs)(q,{onSubmit:this.handleSubmit,children:[Object(L.jsx)(M,{type:"submit",children:Object(L.jsx)(z,{children:"Search"})}),Object(L.jsx)(F,{type:"text",name:"request",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.request,onChange:this.handleChange})]})})}}]),t}(g.Component),D=t(14),T=t.n(D),E=t(15),A=t(25),B=t(26),K=t.n(B),R=function(e,n){return K.a.get("https://pixabay.com/api/",{params:{q:e,key:"22756527-2e30581cfec2e7755e4985106",image_type:"photo",orientation:"horizontal",per_page:12,page:n}})},I=S.a.li(s||(s=Object(k.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),J=S.a.img(l||(l=Object(k.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),N=function(e){var n=e.images,t=e.onClick;return n.map((function(e){var n=e.id,a=e.webformatURL,o=e.largeImageURL;return Object(L.jsx)(I,{id:n,onClick:function(){return t(o)},children:Object(L.jsx)(J,{src:a,alt:""})},a)}))},W=S.a.button(p||(p=Object(k.a)(["\n  padding: 8px 16px;\n  margin-bottom: 30px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n"]))),_=function(e){var n=e.onClick,t=e.children;return Object(L.jsx)(W,{type:"button",onClick:n,children:t})},H=S.a.div(d||(d=Object(k.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n"]))),P=S.a.div(u||(u=Object(k.a)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),G=document.querySelector("#modal-root"),Q=function(e){Object(y.a)(t,e);var n=Object(w.a)(t);function t(){var e;Object(O.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).hendelKeyDown=function(n){"Escape"===n.code&&e.props.onClick()},e.hendelBackdropClick=function(n){n.target===n.currentTarget&&e.props.onClick()},e}return Object(v.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.hendelKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.hendelKeyDown)}},{key:"render",value:function(){return Object(m.createPortal)(Object(L.jsx)(H,{className:"Overlay",onClick:this.hendelBackdropClick,children:Object(L.jsx)(P,{className:"Modal",children:this.props.children})}),G)}}]),t}(g.Component),V=t(27),X=t.n(V),Y=S.a.div(h||(h=Object(k.a)(["\n  position: fixed;\n  left: calc(50% - 50px);\n  top: calc(50%);\n"]))),Z=function(){return Object(L.jsx)(Y,{children:Object(L.jsx)(X.a,{type:"Rings",color:"#00BFFF",height:100,width:100,timeout:3e3})})},$=S.a.ul(b||(b=Object(k.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 30px;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),ee=S.a.div(x||(x=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),ne=function(e){Object(y.a)(t,e);var n=Object(w.a)(t);function t(){var e;Object(O.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).state={images:[],status:"idle",page:1,imageUrl:"",showModal:!1},e.onLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e.onTogleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onOpenModal=function(n){console.log(n),e.setState({imageUrl:n}),e.onTogleModal()},e}return Object(v.a)(t,[{key:"componentDidUpdate",value:function(){var e=Object(A.a)(T.a.mark((function e(n,t){var a,o,i,r,c,s;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.state.page,o=this.props.request,n.request===o){e.next=9;break}return this.setState({status:"pending",images:[],page:1}),e.next=6,R(o,a);case 6:i=e.sent,0===(r=i.data).hits.length?this.setState({status:"regected"}):this.setState({images:r.hits,status:"resolved",total:r.total});case 9:if(n.request!==o||t.page===a){e.next=15;break}return e.next=12,R(o,a);case 12:c=e.sent,s=c.data,this.setState({images:[].concat(Object(E.a)(t.images),Object(E.a)(s.hits)),status:"resolved"});case 15:a>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});case 16:case"end":return e.stop()}}),e,this)})));return function(n,t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.images,t=e.showModal,a=e.imageUrl,o=e.status,i=e.total;return"idle"===o?Object(L.jsx)(ee,{children:Object(L.jsx)("h1",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441"})}):"pending"===o?Object(L.jsx)(Z,{}):"resolved"===o?Object(L.jsxs)(ee,{children:[Object(L.jsx)($,{children:Object(L.jsx)(N,{images:n,onClick:this.onOpenModal})}),i!==n.length&&Object(L.jsx)(_,{onClick:this.onLoadMore,children:"Load more"}),t&&Object(L.jsx)(Q,{onClick:this.onTogleModal,children:Object(L.jsx)("img",{src:a,alt:""})})]}):"regected"===o?Object(L.jsx)(ee,{children:Object(L.jsx)("h1",{children:"\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"})}):void 0}}]),t}(g.Component),te=ne,ae=function(e){Object(y.a)(t,e);var n=Object(w.a)(t);function t(){var e;Object(O.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).state={request:""},e.hendelFormSubmit=function(n){e.setState({request:n})},e}return Object(v.a)(t,[{key:"render",value:function(){return console.log(this.state.request),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(U,{onSubmit:this.hendelFormSubmit}),Object(L.jsx)(te,{request:this.state.request})]})}}]),t}(g.Component);j.a.render(Object(L.jsx)(f.a.StrictMode,{children:Object(L.jsx)(ae,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.793b47f6.chunk.js.map