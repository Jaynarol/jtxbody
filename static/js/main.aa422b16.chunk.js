(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t,n){e.exports=n(259)},250:function(e,t,n){},259:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(7),i=n.n(c),u=n(32),o=n.n(u),s=n(52),l=n(131),p=n(132),m=n(146),h=n(133),f=n(147),g=n(263),d=n(268),b=n(25),v=n(26),E=n(261);function j(){var e=Object(b.a)(["\n  margin: 3px 0 10px;\n"]);return j=function(){return e},e}function O(){var e=Object(b.a)(["\n  width: 288px;\n  margin: 16px;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  background-color: #EEE;\n"]);return O=function(){return e},e}function x(){var e=Object(b.a)(["\n  margin: 16px;\n"]);return x=function(){return e},e}function w(){var e=Object(b.a)(["\n  min-height: 100vh;\n"]);return w=function(){return e},e}function k(){var e=Object(b.a)(["\n  height: 32px;\n  background: rgba(255, 255, 255, 0.2);\n  margin: 16px;\n"]);return k=function(){return e},e}var S=d.a.Content,C=v.a.div(k()),y=Object(v.a)(d.a)(w()),L=Object(v.a)(S)(x()),D=v.a.div(O()),I=Object(v.a)(E.a)(j()),A=n(264),F=function(){return r.a.createElement(A.a,{fullscreen:!1})},M=n(148),Y=n(23),_=n(269),z=n(270);function N(){var e=Object(b.a)(["\n  margin: 20px;\n"]);return N=function(){return e},e}function q(){var e=Object(b.a)(["\n  padding-right: 10px!important;\n"]);return q=function(){return e},e}function J(){var e=Object(b.a)(["\n  text-align: right;\n  padding-right: 10px!important;\n"]);return J=function(){return e},e}function T(){var e=Object(b.a)(["\n  align-items: center;\n  height: 36px;\n"]);return T=function(){return e},e}var P=Object(v.a)(_.a).attrs(function(){return{type:"flex",justify:"space-around"}})(T()),R=Object(v.a)(z.a).attrs(function(){return{span:8}})(J()),B=Object(v.a)(z.a).attrs(function(){return{span:8}})(q()),G=Object(v.a)(_.a)(N()),Q=n(265),H=n(267),U=n(262),V=n(151),W=n(141),K=n(60),X=n(103),Z=n(80),$=n.n(Z),ee=n(16),te=n.n(ee),ne=n(266),ae=function(e){return{date:Object(Y.zipObject)(["year","month","day"],e.date.split("-").map(Y.toNumber)),moment:te()(e.date,"YYYY-MM-DD"),weight:+e.weight,exercise:+e.exercise,measure:"TRUE"===e.measure,neck:+e.neck,chest:+e.chest,waist:+e.waist,hip:+e.hip,sleeve:+e.sleeve}},re=function(e,t){ne.a.error({title:e,content:t})},ce=function(){var e=JSON.parse(localStorage.getItem("auth"));return Object(Y.get)(e,"tokenObj.access_token","")},ie=function(e){return e instanceof Error?{isError:!0,errMsg:e.message}:{data:e,isError:!1}},ue="868583526084-jg9plqb23mjf393qdegg1aa0gq0tf8j4.apps.googleusercontent.com",oe="https://www.googleapis.com/auth/spreadsheets.readonly https://www.googleapis.com/auth/spreadsheets",se="1btCR4YSDxAElxE_IdhhuEcwyr5vFDIcV48Il37NiQLQ",le={tokenInfo:"https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=",publicCsv:"https://docs.google.com/spreadsheets/d/".concat(se,"/pub?gid=0&single=true&output=csv"),getSheets:"https://sheets.googleapis.com/v4/spreadsheets/".concat(se,"/values/A1:I100000")},pe=function(){var e="".concat(le.tokenInfo).concat(ce());return $.a.get(e).then(function(e){return e.data}).then(ie).catch(ie)},me=function(e){return e?function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET";return $()({url:e,method:t,headers:{Authorization:"Bearer ".concat(ce()),"Content-Type":"application/json"}})}(le.getSheets).then(function(e){return e.data}).then(function(e){var t=e.values;t=void 0===t?[]:t;var n=Object(X.a)(t),a=n[0],r=void 0===a?[]:a;return n.slice(1).map(function(e){return Object(Y.zipObject)(r,e)}).map(ae)}).then(ie).catch(ie):$.a.get(le.publicCsv).then(function(e){return e.data}).then(function(e){var t=e.split("\n"),n=Object(X.a)(t),a=n[0],r=n.slice(1),c=a.trim().split(",");return r.map(function(e){return Object(Y.zipObject)(c,e.trim().split(","))}).map(ae)}).then(ie).catch(ie)},he=function(e){var t=e.isLogin,n=e.refetchAuth,c=Object(a.useState)(!1),i=Object(V.a)(c,2),u=i[0],l=i[1],p=function(){var e=Object(s.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.setItem("auth",JSON.stringify(Object(Y.pick)(t,["profileObj","tokenObj"]))),e.next=3,n();case 3:l(!1);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(K.a,{loading:u,icon:"save"},"Save"):r.a.createElement(W.GoogleLogin,{clientId:ue,buttonText:"Login",onRequest:function(){return l(!0)},onSuccess:p,onFailure:function(){return l(!1)},scope:oe,cookiePolicy:"single_host_origin",render:function(e){return r.a.createElement(K.a,{onClick:e.onClick,loading:u,icon:"google"},"Login")}}))};he.defaultProps={isLogin:!1};var fe=he,ge=function(e){var t=e.isLogin,n=Object(M.a)(e,["isLogin"]),c={weight:Object(a.useState)(0),exercise:Object(a.useState)(0),measure:Object(a.useState)(!1),neck:Object(a.useState)(0),chest:Object(a.useState)(0),waist:Object(a.useState)(0),hip:Object(a.useState)(0),sleeve:Object(a.useState)(0)},i=function(e){return function(n){return t&&c[e][1](n)}},u=function(e){return c[e][0]};return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null,r.a.createElement(R,null,"Weight:"),r.a.createElement(B,null,r.a.createElement(Q.a,{min:0,max:120,step:.1,onChange:i("weight"),value:u("weight")})),r.a.createElement(z.a,{span:8},r.a.createElement(H.a,{onChange:i("weight"),formatter:function(e){return"".concat(e," kg")},parser:function(e){return e.replace(/[^0-9.]/g,"")},min:0,max:120,step:.1,value:u("weight")}))),r.a.createElement(P,null,r.a.createElement(R,null,"Exercise:"),r.a.createElement(B,null,r.a.createElement(Q.a,{min:0,max:120,step:5,onChange:i("exercise"),value:u("exercise")})),r.a.createElement(z.a,{span:8},r.a.createElement(H.a,{onChange:i("exercise"),formatter:function(e){return"".concat(e," mins")},parser:function(e){return e.replace(/[^0-9.]/g,"")},min:0,max:120,step:5,value:u("exercise")}))),r.a.createElement(P,null,r.a.createElement(R,null,"Measure:"),r.a.createElement(z.a,{span:16},r.a.createElement(U.a,{checkedChildren:"Yes",unCheckedChildren:"No",checked:u("measure"),onChange:i("measure")}))),u("measure")&&["neck","chest","waist","hip","sleeve"].map(function(e){return r.a.createElement(P,{key:e},r.a.createElement(R,null,Object(Y.capitalize)(e),":"),r.a.createElement(B,null,r.a.createElement(Q.a,{min:0,max:60,step:.1,onChange:i(e),value:u(e)})),r.a.createElement(z.a,{span:8},r.a.createElement(H.a,{onChange:i(e),formatter:function(e){return"".concat(e,'"')},parser:function(e){return e.replace(/[^0-9.]/g,"")},min:0,max:60,step:.1,value:u(e)})))}),r.a.createElement(G,null,r.a.createElement(R,null),r.a.createElement(z.a,{span:16},r.a.createElement(fe,Object.assign({isLogin:t},n)))))};ge.defaultProps={isLogin:!1};var de=ge,be=function(e){return r.a.createElement(y,null,r.a.createElement(d.a,null,r.a.createElement(L,null,r.a.createElement("div",{style:{padding:24,background:"#fff",minHeight:360}},"Should be a Dashboard"))),r.a.createElement(d.a.Sider,{width:320},r.a.createElement(C,null),r.a.createElement(D,null,r.a.createElement(F,null),r.a.createElement(I,null),r.a.createElement(de,e))))},ve=(n(250),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={spinning:!0,isLogin:!1,data:[]},n.refetchAuth=Object(s.a)(o.a.mark(function e(){var t,a,r,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe();case 2:t=e.sent,a=t.data,r=(a=void 0===a?{}:a).expires_in,c=void 0===r?0:r,n.setState({isLogin:c>0});case 7:case"end":return e.stop()}},e)})),n.refetchData=Object(s.a)(o.a.mark(function e(){var t,a,r,c,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me(n.state.isLogin);case 2:t=e.sent,a=t.data,r=void 0===a?[]:a,c=t.isError,i=t.errMsg,c&&re("Fetch Data Error",i),n.setState({data:r,spinning:!1});case 9:case"end":return e.stop()}},e)})),n.componentDidMount=Object(s.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.refetchAuth();case 2:return e.next=4,n.refetchData();case 4:case"end":return e.stop()}},e)})),n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,{tip:"Fetching Data...",spinning:this.state.spinning},r.a.createElement(be,Object.assign({refetchAuth:this.refetchAuth,refetchData:this.refetchData},this.state)))}}]),t}(r.a.Component));i.a.render(r.a.createElement(ve,null),document.getElementById("root"))}},[[154,1,2]]]);
//# sourceMappingURL=main.aa422b16.chunk.js.map