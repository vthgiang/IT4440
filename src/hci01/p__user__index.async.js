(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{NBP6:function(e,t,a){e.exports={table:"table___R1FlI"}},czJx:function(e,t,a){"use strict";a.r(t);a("14J3");var n,r,i,l,o,c,s,d,u,m,p,h,f,y,g,E=a("BMrR"),k=(a("jCWc"),a("kPKH")),v=(a("P2fV"),a("NJEC")),C=(a("+L6B"),a("2/Rp")),T=a("p0pE"),b=a.n(T),w=a("2Taf"),I=a.n(w),F=a("vZ4D"),R=a.n(F),D=a("l4Ni"),O=a.n(D),P=a("ujKo"),x=a.n(P),V=a("MhPg"),M=a.n(V),S=a("q1tI"),_=a.n(S),j=(a("17x9"),a("7Qib")),Y=a("MuoO"),A=a("ZD0w"),K=a("Kvkj"),N=a("Qyje"),q=(a("g9YV"),a("wCAj")),B=a("jehZ"),J=a.n(B),L=a("Y/ft"),U=a.n(L),z=(a("2qtc"),a("kLXV")),Q=a("wY1l"),Z=a.n(Q),G=a("NBP6"),H=a.n(G),W=z["a"].confirm,X=(n=Object(A["withI18n"])(),n((i=function(e){function t(){var e,a;I()(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a=O()(this,(e=x()(t)).call.apply(e,[this].concat(r))),a.handleMenuClick=function(e,t){var n=a.props,r=n.onDeleteItem,i=n.onEditItem,l=n.i18n;"1"===t.key?i(e):"2"===t.key&&W({title:l._("Are you sure delete this record?"),onOk:function(){r(e.id)}})},a}return M()(t,e),R()(t,[{key:"render",value:function(){var e=this,t=this.props,a=(t.onDeleteItem,t.onEditItem,t.i18n),n=U()(t,["onDeleteItem","onEditItem","i18n"]),r=[{title:_.a.createElement(A["Trans"],{id:"T\xean thu\u1ed1c"}),dataIndex:"name",key:"name",render:function(e,t){return _.a.createElement(Z.a,{to:"user/".concat(t.id)},e)}},{title:_.a.createElement(A["Trans"],{id:"M\xe3 thu\u1ed1c"}),dataIndex:"code",key:"code"},{title:_.a.createElement(A["Trans"],{id:"Lo\u1ea1i thu\u1ed1c"}),dataIndex:"type",key:"type"},{title:_.a.createElement(A["Trans"],{id:"Ghi ch\xfa"}),dataIndex:"description",key:"description"},{title:_.a.createElement(A["Trans"],{id:"Ng\u01b0\u1eddi th\xeam"}),dataIndex:"createUser",key:"createUser"},{title:_.a.createElement(A["Trans"],{id:"Th\u1eddi gian th\xeam"}),dataIndex:"createTime",key:"createTime"},{title:_.a.createElement(A["Trans"],{id:"Operation"}),key:"operation",render:function(t,n){return _.a.createElement(K["a"],{onMenuClick:function(t){return e.handleMenuClick(n,t)},menuOptions:[{key:"1",name:a._("Update")},{key:"2",name:a._("Delete")}]})}}];return _.a.createElement(q["a"],J()({},n,{pagination:b()({},n.pagination,{showTotal:function(e){return a._("Total {total} Items",{total:e})}}),className:H.a.table,bordered:!0,scroll:{x:1200},columns:r,simple:!0,rowKey:function(e){return e.id}}))}}]),t}(S["PureComponent"]),r=i))||r),$=X,ee=(a("6UJt"),a("DFOY")),te=(a("y8nQ"),a("Vl3Y")),ae=(a("iQDF"),a("+eQT")),ne=(a("5NDa"),a("5rEg")),re=a("wd/R"),ie=a.n(re),le=a("Lo71"),oe=ne["a"].Search,ce=ae["a"].RangePicker,se={xs:24,sm:12,style:{marginBottom:16}},de=b()({},se,{xl:96}),ue=(l=Object(A["withI18n"])(),o=te["a"].create(),l(c=o((s=function(e){function t(){var e,a;I()(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a=O()(this,(e=x()(t)).call.apply(e,[this].concat(r))),a.handleFields=function(e){var t=e.createTime;return t.length&&(e.createTime=[ie()(t[0]).format("YYYY-MM-DD"),ie()(t[1]).format("YYYY-MM-DD")]),e},a.handleSubmit=function(){var e=a.props,t=e.onFilterChange,n=e.form,r=n.getFieldsValue,i=r();i=a.handleFields(i),t(i)},a.handleReset=function(){var e=a.props.form,t=e.getFieldsValue,n=e.setFieldsValue,r=t();for(var i in r)({}).hasOwnProperty.call(r,i)&&(r[i]instanceof Array?r[i]=[]:r[i]=void 0);n(r),a.handleSubmit()},a.handleChange=function(e,t){var n=a.props,r=n.form,i=n.onFilterChange,l=r.getFieldsValue,o=l();o[e]=t,o=a.handleFields(o),i(o)},a}return M()(t,e),R()(t,[{key:"render",value:function(){var e=this.props,t=e.onAdd,a=e.filter,n=e.form,r=e.i18n,i=n.getFieldDecorator,l=a.name,o=a.type,c=[];return a.createTime&&a.createTime[0]&&(c[0]=ie()(a.createTime[0])),a.createTime&&a.createTime[1]&&(c[1]=ie()(a.createTime[1])),_.a.createElement(E["a"],{gutter:24},_.a.createElement(k["a"],J()({},se,{xl:{span:4},md:{span:8}}),i("name",{initialValue:l})(_.a.createElement(oe,{placeholder:r._("Search Name"),onSearch:this.handleSubmit}))),_.a.createElement(k["a"],J()({},se,{xl:{span:4},md:{span:8},id:"addressCascader"}),i("type",{initialValue:o})(_.a.createElement(ee["a"],{style:{width:"100%"},options:le["a"],placeholder:r._("Ch\u1ecdn lo\u1ea1i thu\u1ed1c"),onChange:this.handleChange.bind(this,"type"),getPopupContainer:function(){return document.getElementById("addressCascader")}}))),_.a.createElement(k["a"],J()({},se,{xl:{span:6},md:{span:8},sm:{span:12},id:"createTimeRangePicker"}),_.a.createElement(K["c"],{label:r._("CreateTime")},i("createTime",{initialValue:c})(_.a.createElement(ce,{style:{width:"100%"},onChange:this.handleChange.bind(this,"createTime"),getCalendarContainer:function(){return document.getElementById("createTimeRangePicker")}})))),_.a.createElement(k["a"],J()({},de,{xl:{span:10},md:{span:24},sm:{span:24}}),_.a.createElement(E["a"],{type:"flex",align:"middle",justify:"space-between"},_.a.createElement("div",null,_.a.createElement(C["a"],{type:"primary",className:"margin-right",onClick:this.handleSubmit},_.a.createElement(A["Trans"],{id:"Search"})),_.a.createElement(C["a"],{onClick:this.handleReset},_.a.createElement(A["Trans"],{id:"Reset"}))),_.a.createElement(C["a"],{type:"ghost",onClick:t},_.a.createElement(A["Trans"],{id:"Create"})))))}}]),t}(S["Component"]),c=s))||c)||c),me=ue,pe=(a("7Kak"),a("9yH6")),he=te["a"].Item,fe={labelCol:{span:6},wrapperCol:{span:14}},ye=(d=Object(A["withI18n"])(),u=te["a"].create(),d(m=u((p=function(e){function t(){var e,a;I()(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a=O()(this,(e=x()(t)).call.apply(e,[this].concat(r))),a.handleOk=function(){var e=a.props,t=e.item,n=void 0===t?{}:t,r=e.onOk,i=e.form,l=i.validateFields,o=i.getFieldsValue;l(function(e){if(!e){var t=b()({},o(),{key:n.key});t.address=t.address.join(" "),r(t)}})},a}return M()(t,e),R()(t,[{key:"render",value:function(){var e=this.props,t=e.item,a=void 0===t?{}:t,n=(e.onOk,e.form),r=e.i18n,i=U()(e,["item","onOk","form","i18n"]),l=n.getFieldDecorator;return _.a.createElement(z["a"],J()({},i,{onOk:this.handleOk}),_.a.createElement(te["a"],{layout:"horizontal"},_.a.createElement(he,J()({label:r._("Name"),hasFeedback:!0},fe),l("name",{initialValue:a.name,rules:[{required:!0}]})(_.a.createElement(ne["a"],null))),_.a.createElement(he,J()({label:r._("Code"),hasFeedback:!0},fe),l("code",{initialValue:a.code,rules:[{required:!0}]})(_.a.createElement(ne["a"],null))),_.a.createElement(he,J()({label:r._("Type"),hasFeedback:!0},fe),l("type",{initialValue:a.type,rules:[{required:!0,type:"boolean"}]})(_.a.createElement(pe["a"].Group,null,_.a.createElement(pe["a"],{value:!0},_.a.createElement(A["Trans"],{id:"Male"})),_.a.createElement(pe["a"],{value:!1},_.a.createElement(A["Trans"],{id:"Female"}))))),_.a.createElement(he,J()({label:r._("Description"),hasFeedback:!0},fe),l("description",{initialValue:a.description,rules:[{required:!0}]})(_.a.createElement(ne["a"],null)))))}}]),t}(S["PureComponent"]),m=p))||m)||m),ge=ye,Ee=a("MycI"),ke=(h=Object(A["withI18n"])(),f=Object(Y["connect"])(function(e){var t=e.user,a=e.loading;return{user:t,loading:a}}),h(y=f((g=function(e){function t(){var e,a;I()(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a=O()(this,(e=x()(t)).call.apply(e,[this].concat(r))),a.handleRefresh=function(e){var t=a.props.location,n=t.query,r=t.pathname;j["k"].push({pathname:r,search:Object(N["stringify"])(b()({},n,e),{arrayFormat:"repeat"})})},a.handleDeleteItems=function(){var e=a.props,t=e.dispatch,n=e.user,r=n.list,i=n.pagination,l=n.selectedRowKeys;t({type:"user/multiDelete",payload:{ids:l}}).then(function(){a.handleRefresh({page:r.length===l.length&&i.current>1?i.current-1:i.current})})},a}return M()(t,e),R()(t,[{key:"render",value:function(){var e=this.props.user;console.log("user",e);var t=e.selectedRowKeys;return _.a.createElement(K["f"],{inner:!0},_.a.createElement(me,this.filterProps),t.length>0&&_.a.createElement(E["a"],{style:{marginBottom:24,textAlign:"right",fontSize:13}},_.a.createElement(k["a"],null,"Selected ".concat(t.length," items "),_.a.createElement(v["a"],{title:"Are you sure delete these items?",placement:"left",onConfirm:this.handleDeleteItems},_.a.createElement(C["a"],{type:"primary",style:{marginLeft:8}},"Remove")))),_.a.createElement($,this.listProps),_.a.createElement(ge,this.modalProps))}},{key:"modalProps",get:function(){var e=this,t=this.props,a=t.dispatch,n=t.user,r=t.loading,i=t.i18n,l=n.currentItem,o=n.modalVisible,c=n.modalType;return{item:"create"===c?{}:l,visible:o,destroyOnClose:!0,maskClosable:!1,confirmLoading:r.effects["user/".concat(c)],title:"".concat("create"===c?i._("Create Sample"):i._("Update User")),centered:!0,onOk:function(t){a({type:"user/".concat(c),payload:t}).then(function(){e.handleRefresh()})},onCancel:function(){a({type:"user/hideModal"})}}}},{key:"listProps",get:function(){var e=this,t=this.props,a=t.dispatch,n=t.user,r=t.loading,i=n.pagination,l=n.selectedRowKeys;return{dataSource:Ee["b"],loading:r.effects["user/query"],pagination:i,onChange:function(t){e.handleRefresh({page:t.current,pageSize:t.pageSize})},onDeleteItem:function(t){a({type:"user/delete",payload:t}).then(function(){e.handleRefresh({page:1===list.length&&i.current>1?i.current-1:i.current})})},onEditItem:function(e){a({type:"user/showModal",payload:{modalType:"update",currentItem:e}})},rowSelection:{selectedRowKeys:l,onChange:function(e){a({type:"user/updateState",payload:{selectedRowKeys:e}})}}}}},{key:"filterProps",get:function(){var e=this,t=this.props,a=t.location,n=t.dispatch,r=a.query;return{filter:b()({},r),onFilterChange:function(t){e.handleRefresh(b()({},t))},onAdd:function(){n({type:"user/showModal",payload:{modalType:"create"}})}}}}]),t}(S["PureComponent"]),y=g))||y)||y);t["default"]=ke}}]);