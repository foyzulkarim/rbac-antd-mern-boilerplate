(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[6668],{16894:function(F,C,e){"use strict";var p=e(54787),h=e(47888);C.ZP=h.Z},35853:function(F,C,e){"use strict";e.r(C);var p=e(14781),h=e(23492),d=e(13062),i=e(71230),M=e(57663),O=e(71577),W=e(89032),T=e(15746),j=e(47673),I=e(4107),m=e(9715),a=e(86835),n=e(11849),_=e(2824),l=e(34792),f=e(48086),r=e(3182),t=e(71194),P=e(50146),u=e(94043),s=e.n(u),ae=e(57119),se=e(49101),D=e(67294),_e=e(75362),ue=e(16894),x=e(43581),N=e(592),o=e(85893),le=function(S){var G=P.Z.confirm,A=S.elementId,J=function(Z){G({title:"Do you Want to delete ".concat(Z.name,"?"),icon:(0,o.jsx)(ae.Z,{}),content:"".concat(Z.name," will be deleted permanently."),okText:"Yes",okType:"danger",cancelText:"No",onOk:function(){var k=(0,r.Z)(s().mark(function B(){var L;return s().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return console.log("OK"),U.next=3,(0,N.Od)(Z._id);case 3:L=U.sent,L.success&&(f.default.success(L.message),setFetchRoles(!0));case 5:case"end":return U.stop()}},B)}));function $(){return k.apply(this,arguments)}return $}(),onCancel:function(){console.log("Cancel")}})},w=(0,x.md)(),H=w.canShow(A);if(H){var z=w.isDisabled(A);return z?(0,o.jsx)("span",{children:"Delete"}):(0,o.jsx)("a",{onClick:function(){J(S.record)},children:"Delete"},"config")}return null},oe=function(){var S=(0,D.useRef)(),G=(0,D.useState)({data:[]}),A=(0,_.Z)(G,2),J=A[0],w=A[1],H=(0,D.useState)(1),z=(0,_.Z)(H,2),R=z[0],Z=z[1],k=(0,D.useState)({}),$=(0,_.Z)(k,2),B=$[0],L=$[1],Q=(0,D.useState)({}),U=(0,_.Z)(Q,2),X=U[0],ce=U[1],de=(0,D.useState)(0),Y=(0,_.Z)(de,2),me=Y[0],fe=Y[1],pe=(0,D.useState)(!1),q=(0,_.Z)(pe,2),ee=q[0],K=q[1],Pe=P.Z.confirm,he=function(){var g=(0,r.Z)(s().mark(function c(){var b,y,E,V;return s().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return console.log("REACT_APP_DEFAULT_PAGE_SIZE","10"),b=f.default.loading("Loading..."),v.prev=2,v.next=5,(0,N.yC)((0,n.Z)((0,n.Z)({current:R,pageSize:10},X),B));case 5:return y=v.sent,b(),w(y),K(!1),v.abrupt("return",y);case 12:return v.prev=12,v.t0=v.catch(2),b(),E=JSON.stringify(v.t0),V=JSON.parse(E),console.log(V),f.default.error(V.data.errorMessage),v.abrupt("return",!1);case 20:case"end":return v.stop()}},c,null,[[2,12]])}));return function(){return g.apply(this,arguments)}}(),re=function(){var g=(0,r.Z)(s().mark(function c(){var b;return s().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,(0,N.QX)((0,n.Z)({},B));case 2:b=E.sent,fe(b.total);case 4:case"end":return E.stop()}},c)}));return function(){return g.apply(this,arguments)}}();(0,D.useEffect)(function(){ee&&he()},[ee]),(0,D.useEffect)(function(){K(!0)},[R,X]),(0,D.useEffect)(function(){re(),K(!0)},[]),(0,D.useEffect)(function(){re(),K(!0)},[B]);var Ee=a.Z.useForm(),ve=(0,_.Z)(Ee,1),ne=ve[0],te=function(c){Z(1),L(c)},Oe=[{title:"Name",dataIndex:"name",sorter:!0,tip:"Role name",render:function(c,b){return(0,o.jsx)("a",{onClick:function(){x.m8.push("/roles/edit/".concat(b._id))},children:c})}},{title:"Alias",dataIndex:"alias",sorter:!0},{title:"Updated At",dataIndex:"updatedAt",valueType:"dateTime",sorter:!0},{title:"Actions",dataIndex:"option",valueType:"option",render:function(c,b){return[(0,o.jsx)(le,{record:b,elementId:"user-list-delete-btn"},"delete")]}}];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(_e.ZP,{children:[(0,o.jsx)(a.Z,{form:ne,name:"advanced_search",className:"ant-advanced-search-form",onFinish:te,style:{display:"flex","align-items":"left",background:"white",padding:"10px"},children:(0,o.jsxs)(i.Z,{gutter:16,children:[(0,o.jsx)(T.Z,{flex:6,children:(0,o.jsx)(a.Z.Item,{name:"name",label:"Name",children:(0,o.jsx)(I.Z,{placeholder:"Search keyword for name or alias"})})},"name"),(0,o.jsxs)(T.Z,{flex:6,children:[(0,o.jsx)(O.Z,{type:"primary",htmlType:"submit",children:"Search"}),(0,o.jsx)(O.Z,{style:{margin:"0 8px"},onClick:function(){ne.resetFields(),te({})},children:"Clear"})]})]})}),(0,o.jsx)(ue.ZP,{headerTitle:"Roles",actionRef:S,rowKey:"_id",search:!1,options:{reload:!0},toolBarRender:function(){return[(0,o.jsxs)(O.Z,{type:"primary",onClick:function(){x.m8.push("/roles/new")},children:[(0,o.jsx)(se.Z,{})," New"]},"primary")]},onChange:function(c,b,y){console.log("_sorter",y);var E={};E.sort=y.field,E.order=y.order==="ascend"?1:-1,ce(E)},dataSource:J.data,columns:Oe,rowSelection:!1,pagination:!1})]}),(0,o.jsx)(h.Z,{total:me,defaultPageSize:"10",current:R,showSizeChanger:!1,showQuickJumper:!1,showTotal:function(c){return"Total ".concat(c," items")},defaultCurrent:R,onChange:function(c){Z(c),K(!0)},style:{display:"flex","justify-content":"center","align-items":"center",background:"white",padding:"10px"}})]})};C.default=oe},592:function(F,C,e){"use strict";e.d(C,{yC:function(){return M},QX:function(){return W},FO:function(){return j},Vx:function(){return m},a1:function(){return n},Od:function(){return l}});var p=e(3182),h=e(94043),d=e.n(h),i=e(39031);function M(r){return O.apply(this,arguments)}function O(){return O=(0,p.Z)(d().mark(function r(t){return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,i.v_)("/api/roles/search",t);case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},r)})),O.apply(this,arguments)}function W(r,t){return T.apply(this,arguments)}function T(){return T=(0,p.Z)(d().mark(function r(t,P){return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,i.v_)("/api/roles/count",t,P);case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}},r)})),T.apply(this,arguments)}function j(r,t){return I.apply(this,arguments)}function I(){return I=(0,p.Z)(d().mark(function r(t,P){return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,i.U2)("/api/roles/detail?id=".concat(t),{},P);case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}},r)})),I.apply(this,arguments)}function m(r){return a.apply(this,arguments)}function a(){return a=(0,p.Z)(d().mark(function r(t){return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,i.gz)("/api/roles/update",t);case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},r)})),a.apply(this,arguments)}function n(r){return _.apply(this,arguments)}function _(){return _=(0,p.Z)(d().mark(function r(t){return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,i.v_)("/api/roles/create",t);case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},r)})),_.apply(this,arguments)}function l(r,t){return f.apply(this,arguments)}function f(){return f=(0,p.Z)(d().mark(function r(t,P){return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,i.IV)("/api/roles/delete?id=".concat(t),{},P);case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}},r)})),f.apply(this,arguments)}},39031:function(F,C,e){"use strict";e.d(C,{U2:function(){return W},v_:function(){return T},gz:function(){return j},IV:function(){return I}});var p=e(3182),h=e(11849),d=e(94043),i=e.n(d),M=e(11238),O=e(43581);M.ZP.interceptors.request.use(function(m,a){var n=localStorage.getItem("auth");if(n&&JSON.parse(n)){var _=JSON.parse(n),l=_.token;l?a.headers.Authorization="Bearer ".concat(l):a.headers.Authorization=null}return console.log("url","http://localhost:8002",m),a.headers["rbac-client-time"]="".concat(new Date," "),{url:"".concat("http://localhost:8002").concat(m),options:(0,h.Z)((0,h.Z)({},a),{},{interceptors:!0})}}),M.ZP.interceptors.response.use(function(){var m=(0,p.Z)(i().mark(function a(n,_){var l,f;return i().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.status!==401){t.next=4;break}return localStorage.removeItem("auth"),O.m8.replace({pathname:"/user/login"}),t.abrupt("return",{name:n.name});case 4:if(n.status!==403){t.next=7;break}return O.m8.replace({pathname:"/exception/403"}),t.abrupt("return",{name:n.name});case 7:if(n.status!==404){t.next=10;break}return O.m8.replace({pathname:"/exception/404"}),t.abrupt("return",{name:n.name});case 10:if(n.status!==400){t.next=18;break}return t.next=13,n.clone().json();case 13:return l=t.sent,console.log("data",l),f=new Error(l.message),f.error=l.error,t.abrupt("return",f);case 18:return t.abrupt("return",n);case 19:case"end":return t.stop()}},a)}));return function(a,n){return m.apply(this,arguments)}}());var W=function(){var m=(0,p.Z)(i().mark(function a(n,_,l){return i().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,M.ZP)(n,(0,h.Z)({method:"GET",params:_,skipErrorHandler:!0},l||{})));case 1:case"end":return r.stop()}},a)}));return function(n,_,l){return m.apply(this,arguments)}}(),T=function(){var m=(0,p.Z)(i().mark(function a(n,_,l){return i().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,M.ZP)(n,(0,h.Z)({method:"POST",data:_,skipErrorHandler:!0},l||{}));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},a)}));return function(n,_,l){return m.apply(this,arguments)}}(),j=function(){var m=(0,p.Z)(i().mark(function a(n,_,l){return i().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,M.ZP)(n,(0,h.Z)({method:"PUT",data:_,skipErrorHandler:!0},l||{})));case 1:case"end":return r.stop()}},a)}));return function(n,_,l){return m.apply(this,arguments)}}(),I=function(){var m=(0,p.Z)(i().mark(function a(n,_,l){return i().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,M.ZP)(n,(0,h.Z)({method:"DELETE",data:_,skipErrorHandler:!0},l||{})));case 1:case"end":return r.stop()}},a)}));return function(n,_,l){return m.apply(this,arguments)}}()}}]);