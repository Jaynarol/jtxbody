(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t,n){e.exports=n(261)},252:function(e,t,n){},261:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(7),i=n.n(c),o=n(25),u=n.n(o),s=n(47),l=n(134),f=n(135),h=n(148),m=n(136),p=n(150),g=n(16),d=n.n(g),b=n(265),v=n(149),j=n(80),E=n(99),O=n(100),x=n.n(O),k=n(15),w=n.n(k),y=n(268),S=function(e){return Object(j.a)({},e,{date:Object(k.zipObject)(["year","month","day"],e.date.split("-").map(k.toNumber)),dmoment:d()(e.date,"YYYY-MM-DD"),weight:+(e.weight||0),exercise:+(e.exercise||0),measure:"TRUE"===e.measure,neck:+(e.neck||0),chest:+(e.chest||0),waist:+(e.waist||0),hip:+(e.hip||0),sleeve:+(e.sleeve||0)})},D=function(){var e=JSON.parse(localStorage.getItem("auth"));return Object(k.get)(e,"tokenObj.access_token","")},C=function(e){return function(t){return t instanceof Error?(e||y.a.error({title:"Connection Error",content:t.message}),{data:void 0,isError:!0,errMsg:t.message}):{data:t,isError:!1,errMsg:void 0}}},I=C(!0),Y=C(!1),L=function(e,t){return Object(k.find)(e,function(e){return e.dmoment.isSame(t,"day")})},M="JTxBody",A="868583526084-jg9plqb23mjf393qdegg1aa0gq0tf8j4.apps.googleusercontent.com",_="https://www.googleapis.com/auth/spreadsheets",T="1btCR4YSDxAElxE_IdhhuEcwyr5vFDIcV48Il37NiQLQ",J="Jaynarol",N="https://github.com/Jaynarol/jtxbody",P="https://fb.com/akkaradech.sr",R={tokenInfo:"https://www.googleapis.com/oauth2/v3/tokeninfo",publicCsv:"https://docs.google.com/spreadsheets/d/".concat(T,"/pub?gid=0&single=true&output=csv"),getSheets:"https://sheets.googleapis.com/v4/spreadsheets/".concat(T,"/values/A1:I100000"),updateSheets:"https://sheets.googleapis.com/v4/spreadsheets/".concat(T,"/values:batchUpdate")},z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return x()({url:e,method:t,data:n,headers:{Authorization:"Bearer ".concat(D()),"Content-Type":"application/json"}})},q=function(){return z(R.tokenInfo).then(function(e){return e.data}).then(Y).catch(I)},B=function(e){return e?z(R.getSheets).then(function(e){return e.data}).then(function(e){var t=e.values;t=void 0===t?[]:t;var n=Object(E.a)(t),a=n[0],r=void 0===a?[]:a;return n.slice(1).map(function(e,t){return Object(j.a)({rowId:t+2},Object(k.zipObject)(r,e))}).map(S)}).then(Y).catch(Y):x.a.get(R.publicCsv).then(function(e){return e.data}).then(function(e){var t=e.split("\n"),n=Object(E.a)(t),a=n[0],r=n.slice(1),c=a.trim().split(",");return r.map(function(e){return Object(k.zipObject)(c,e.trim().split(","))}).map(S)}).then(Y).catch(Y)},F=function(e,t,n){var a=(L(e,n)||{rowId:e.length+2}).rowId;return z(R.updateSheets,"POST",{valueInputOption:"USER_ENTERED",data:[{range:"A".concat(a),majorDimension:"ROWS",values:[[n.format("YYYY-MM-DD")].concat(Object(v.a)(Object(k.values)(Object(k.pick)(t,["weight","exercise","measure","neck","chest","waist","hip","sleeve"]))))]}]}).then(function(e){return e.data}).then(Y).catch(Y)},U=n(270),W=n(272),G=n(274),Q=n(60),V=n(26),H=n(27),K=n(263);function X(){var e=Object(V.a)(["\n  margin: 20px 0 10px!important;\n"]);return X=function(){return e},e}function Z(){var e=Object(V.a)(["\n  width: 288px;\n  margin: 16px;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  background-color: #EEE;\n"]);return Z=function(){return e},e}function $(){var e=Object(V.a)(["\n  margin: 16px;\n"]);return $=function(){return e},e}function ee(){var e=Object(V.a)(["\n  min-height: 100vh;\n"]);return ee=function(){return e},e}function te(){var e=Object(V.a)(["\n  min-height: 100vh;\n"]);return te=function(){return e},e}function ne(){var e=Object(V.a)(["\n  height: 32px;\n  background: rgba(255, 255, 255, 0.2);\n  margin: 16px;\n  font-size: 1.5em;\n  color: lightgray;\n  text-align: center;\n"]);return ne=function(){return e},e}var ae=U.a.Content,re=U.a.Sider,ce=H.a.div(ne()),ie=Object(H.a)(U.a)(te()),oe=Object(H.a)(re).attrs(function(){return{width:320}})(ee()),ue=Object(H.a)(ae)($()),se=H.a.div(Z()),le=Object(H.a)(K.a).attrs(function(){return{orientation:"center"}})(X()),fe=n(273),he=n(266),me=function(e){return function(t){var n=L(e,t);return n?r.a.createElement(W.a,{type:"flex",gutter:0,justify:"center"},n.exercise>0?r.a.createElement(fe.a,{status:"processing"}):n.weight>0&&r.a.createElement(fe.a,{color:"cadetblue"}),n.measure&&r.a.createElement(fe.a,{status:"success"})):null}},pe=function(e){var t=e.selectDate,n=e.selectedDate,a=e.data;return r.a.createElement(he.a,{fullscreen:!1,defaultValue:n,onSelect:t,dateCellRender:me(a)})};function ge(){var e=Object(V.a)(["\n  margin: 20px;\n"]);return ge=function(){return e},e}function de(){var e=Object(V.a)(["\n  padding-right: 10px!important;\n"]);return de=function(){return e},e}function be(){var e=Object(V.a)(["\n  text-align: right;\n  padding-right: 10px!important;\n"]);return be=function(){return e},e}function ve(){var e=Object(V.a)(["\n  align-items: center;\n  height: 36px;\n"]);return ve=function(){return e},e}var je=Object(H.a)(W.a).attrs(function(){return{type:"flex",justify:"space-around"}})(ve()),Ee=Object(H.a)(G.a).attrs(function(){return{span:8}})(be()),Oe=Object(H.a)(G.a).attrs(function(){return{span:8}})(de()),xe=Object(H.a)(W.a)(ge()),ke=n(267),we=n(269),ye=n(264),Se=n(153),De=n(144),Ce=n(271),Ie=function(e){var t=e.refetchAuth,n=e.refetchData,c=e.form,i=e.data,o=e.selectedDate,l=e.isLogin,f=Object(a.useState)(!1),h=Object(Se.a)(f,2),m=h[0],p=h[1],g=function(){var e=Object(s.a)(u.a.mark(function e(n){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((a=Object(k.get)(n,"profileObj.givenName"))!==J){e.next=8;break}return localStorage.setItem("auth",JSON.stringify(Object(k.pick)(n,["profileObj","tokenObj"]))),e.next=5,t();case 5:Ce.a.success("Welcome back ".concat(a,".")),e.next=9;break;case 8:y.a.error({title:"Permission Denied",content:"I'm glad to hear that you are interested, But This area for ".concat(a," only.")});case 9:p(!1);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(u.a.mark(function e(){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,F(i,c,o);case 3:if(a=e.sent,!a.isError){e.next=11;break}return e.next=8,t();case 8:Ce.a.info("Session timeout."),e.next=14;break;case 11:return e.next=13,n();case 13:Ce.a.success("Data successfully saved.");case 14:p(!1);case 15:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return l?r.a.createElement(Q.a,{loading:m,onClick:d,icon:"save"},"Save"):r.a.createElement(De.GoogleLogin,{clientId:A,buttonText:"Login",onRequest:function(){return p(!0)},onSuccess:g,onFailure:function(){return p(!1)},scope:_,cookiePolicy:"single_host_origin",render:function(e){return r.a.createElement(Q.a,{onClick:e.onClick,loading:m,icon:"google"},"Login")}})};Ie.defaultProps={isLogin:!1};var Ye=Ie,Le=function(e){var t=e.isLogin,n=e.selectedDate,c=e.data,i={weight:Object(a.useState)(0),exercise:Object(a.useState)(0),measure:Object(a.useState)(!1),neck:Object(a.useState)(0),chest:Object(a.useState)(0),waist:Object(a.useState)(0),hip:Object(a.useState)(0),sleeve:Object(a.useState)(0)},o=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(a){return(t||n)&&i[e][1](a)}},u=function(e){return i[e][0]};return Object(a.useEffect)(function(){var e=L(c,n);Object(k.each)(Object(k.keys)(i),function(e){return o(e,!0)("measure"!==e&&0)}),e&&Object(k.each)(Object(k.keys)(i),function(t){return o(t,!0)(e[t])})},[n,c]),r.a.createElement(r.a.Fragment,null,r.a.createElement(je,null,r.a.createElement(Ee,null,"Weight:"),r.a.createElement(Oe,null,r.a.createElement(ke.a,{min:0,max:120,step:.1,onChange:o("weight"),value:u("weight")})),r.a.createElement(G.a,{span:8},r.a.createElement(we.a,{onChange:o("weight"),formatter:function(e){return"".concat(e," kg")},parser:function(e){return e.replace(/[^0-9.]/g,"")},min:0,max:120,step:.1,value:u("weight")}))),r.a.createElement(je,null,r.a.createElement(Ee,null,"Exercise:"),r.a.createElement(Oe,null,r.a.createElement(ke.a,{min:0,max:120,step:5,onChange:o("exercise"),value:u("exercise")})),r.a.createElement(G.a,{span:8},r.a.createElement(we.a,{onChange:o("exercise"),formatter:function(e){return"".concat(e," mins")},parser:function(e){return e.replace(/[^0-9.]/g,"")},min:0,max:120,step:5,value:u("exercise")}))),r.a.createElement(je,null,r.a.createElement(Ee,null,"Measure:"),r.a.createElement(G.a,{span:16},r.a.createElement(ye.a,{checkedChildren:"Yes",unCheckedChildren:"No",checked:u("measure"),onChange:o("measure")}))),u("measure")&&["neck","chest","waist","hip","sleeve"].map(function(e){return r.a.createElement(je,{key:e},r.a.createElement(Ee,null,Object(k.capitalize)(e),":"),r.a.createElement(Oe,null,r.a.createElement(ke.a,{min:0,max:60,step:.1,onChange:o(e),value:u(e)})),r.a.createElement(G.a,{span:8},r.a.createElement(we.a,{onChange:o(e),formatter:function(e){return"".concat(e,'"')},parser:function(e){return e.replace(/[^0-9.]/g,"")},min:0,max:60,step:.1,value:u(e)})))}),r.a.createElement(xe,null,r.a.createElement(Ee,null),r.a.createElement(G.a,{span:16},r.a.createElement(Ye,Object.assign({form:w()(i).keys().chain().map(function(e){return[e,u(e)]}).fromPairs().value(),isLogin:t},e)))))};Le.defaultProps={isLogin:!1};var Me=Le,Ae=function(e){var t=e.selectedDate;return r.a.createElement(ie,null,r.a.createElement(U.a,null,r.a.createElement(ue,null,r.a.createElement("div",{style:{padding:24,background:"#fff",minHeight:360}},"Should be a Dashboard"))),r.a.createElement(oe,null,r.a.createElement(ce,null,r.a.createElement(W.a,{type:"flex",justify:"space-between"},r.a.createElement(G.a,{span:16},M),r.a.createElement(G.a,{span:8},r.a.createElement(Q.a,{type:"link",icon:"file",href:"https://docs.google.com/spreadsheets/d/".concat(T),target:"_blank"}),r.a.createElement(Q.a,{type:"link",icon:"facebook",href:P,target:"_blank"}),r.a.createElement(Q.a,{type:"link",icon:"github",href:N,target:"_blank"})))),r.a.createElement(se,null,r.a.createElement(pe,e),r.a.createElement(le,null,t.format("DD MMMM YYYY")),r.a.createElement(Me,e))))};Ae.defaultProps={data:[]};var _e=Ae,Te=(n(252),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={spinning:!0,isLogin:!1,selectedDate:d()(),data:[]},n.refetchAuth=Object(s.a)(u.a.mark(function e(){var t,a,r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:t=e.sent,a=t.data,r=(a=void 0===a?{}:a).expires_in,c=void 0===r?0:r,n.setState({isLogin:c>0});case 7:case"end":return e.stop()}},e)})),n.refetchData=Object(s.a)(u.a.mark(function e(){var t,a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(n.state.isLogin);case 2:t=e.sent,a=t.data,r=void 0===a?[]:a,n.setState({data:r});case 6:case"end":return e.stop()}},e)})),n.selectDate=function(e){n.setState({selectedDate:e})},n.componentDidMount=Object(s.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.refetchAuth();case 2:return e.next=4,n.refetchData();case 4:n.setState({spinning:!1});case 5:case"end":return e.stop()}},e)})),n}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{tip:"Fetching Data...",spinning:this.state.spinning},r.a.createElement(_e,Object.assign({refetchAuth:this.refetchAuth,refetchData:this.refetchData,selectDate:this.selectDate},this.state)))}}]),t}(r.a.Component));i.a.render(r.a.createElement(Te,null),document.getElementById("root"))}},[[156,1,2]]]);
//# sourceMappingURL=main.c1447bb7.chunk.js.map