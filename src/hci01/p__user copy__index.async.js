(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{Qpiv:function(e,t,a){e.exports={table:"table___3z9JH"}},nG9A:function(e,t,a){"use strict";a.r(t);a("14J3");var n,r,i,l,c,o,s,m,u,d,p,h,f,y,E,g=a("BMrR"),k=(a("jCWc"),a("kPKH")),v=(a("P2fV"),a("NJEC")),T=(a("+L6B"),a("2/Rp")),w=a("p0pE"),C=a.n(w),b=a("2Taf"),I=a.n(b),F=a("vZ4D"),O=a.n(F),x=a("l4Ni"),D=a.n(x),V=a("ujKo"),M=a.n(V),P=a("MhPg"),_=a.n(P),j=a("q1tI"),R=a.n(j),S=(a("17x9"),a("7Qib")),Y=a("MuoO"),A=a("ZD0w"),q=a("Kvkj"),K=a("Qyje"),N=(a("g9YV"),a("wCAj")),Q=a("jehZ"),z=a.n(Q),B=(a("MXD1"),a("CFYs")),J=a("Y/ft"),L=a.n(J),G=(a("2qtc"),a("kLXV")),H=a("wY1l"),U=a.n(H),Z=a("Qpiv"),X=a.n(Z),W=G["a"].confirm,$=(n=Object(A["withI18n"])(),n((i=function(e){function t(){var e,a;I()(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a=D()(this,(e=M()(t)).call.apply(e,[this].concat(r))),a.handleMenuClick=function(e,t){var n=a.props,r=n.onDeleteItem,i=(n.onEditItem,n.i18n);"1"===t.key||"2"===t.key&&W({title:i._("Are you sure you want to delete this record?"),onOk:function(){r(e.id)}})},a}return _()(t,e),O()(t,[{key:"render",value:function(){var e=this,t=this.props,a=(t.onDeleteItem,t.onEditItem,t.i18n),n=L()(t,["onDeleteItem","onEditItem","i18n"]),r=[{title:R.a.createElement(A["Trans"],{id:"T\xean thu\u1ed1c"}),dataIndex:"name",key:"name",render:function(e,t){return R.a.createElement("div",null,R.a.createElement(U.a,{to:"user/".concat(t.id)},R.a.createElement("p",null,e)),R.a.createElement("i",null,t.type))}},{title:R.a.createElement(A["Trans"],{id:"M\xe3 thu\u1ed1c"}),dataIndex:"code",key:"code"},{title:R.a.createElement(A["Trans"],{id:"Tr\u1ea1ng th\xe1i"}),dataIndex:"status",key:"status",render:function(e,t){return"cancel"===e?R.a.createElement(B["a"],{type:"circle",percent:30,width:40,status:"exception"}):R.a.createElement(B["a"],{type:"circle",percent:e,width:40})}},{title:R.a.createElement(A["Trans"],{id:"Th\xe0nh ph\u1ea7n ch\xednh"}),dataIndex:"mainIngerdient",key:"mainIngerdient"},{title:R.a.createElement(A["Trans"],{id:"C\xf4ng d\u1ee5ng"}),dataIndex:"effect",key:"effect"},{title:R.a.createElement(A["Trans"],{id:"Ghi ch\xfa"}),dataIndex:"description",key:"description"},{title:R.a.createElement(A["Trans"],{id:"Ng\u01b0\u1eddi th\xeam"}),dataIndex:"createUser",key:"createUser"},{title:R.a.createElement(A["Trans"],{id:"Th\u1eddi gian th\xeam"}),dataIndex:"createTime",key:"createTime"},{title:R.a.createElement(A["Trans"],{id:"Operation"}),key:"operation",render:function(t,n){return R.a.createElement(q["a"],{onMenuClick:function(t){return e.handleMenuClick(n,t)},menuOptions:[{key:"1",name:a._("Update")},{key:"2",name:a._("Delete")}]})}}];return R.a.createElement(N["a"],z()({},n,{pagination:C()({},n.pagination,{showTotal:function(e){return a._("Total {total} Items",{total:e})}}),className:X.a.table,bordered:!0,scroll:{x:1200},columns:r,simple:!0,rowKey:function(e){return e.id}}))}}]),t}(j["PureComponent"]),r=i))||r),ee=$,te=(a("y8nQ"),a("Vl3Y")),ae=(a("iQDF"),a("+eQT")),ne=(a("5NDa"),a("5rEg")),re=(a("OaEy"),a("2fM7")),ie=a("wd/R"),le=a.n(ie),ce=(a("Lo71"),a("MycI")),oe=re["a"].Option,se=ne["a"].Search,me=ae["a"].RangePicker,ue={xs:24,sm:12,style:{marginBottom:16}},de=C()({},ue,{xl:96}),pe=(l=Object(A["withI18n"])(),c=te["a"].create(),l(o=c((s=function(e){function t(){var e,a;I()(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a=D()(this,(e=M()(t)).call.apply(e,[this].concat(r))),a.handleFields=function(e){var t=e.createTime;return t.length&&(e.createTime=[le()(t[0]).format("YYYY-MM-DD"),le()(t[1]).format("YYYY-MM-DD")]),e},a.handleSubmit=function(){var e=a.props,t=(e.onFilterChange,e.form),n=t.getFieldsValue,r=n();r=a.handleFields(r)},a.handleReset=function(){var e=a.props.form,t=e.getFieldsValue,n=e.setFieldsValue,r=t();for(var i in r)({}).hasOwnProperty.call(r,i)&&(r[i]instanceof Array?r[i]=[]:r[i]=void 0);n(r),a.handleSubmit()},a.handleChange=function(e,t){var n=a.props,r=n.form,i=(n.onFilterChange,r.getFieldsValue),l=i();l[e]=t,l=a.handleFields(l)},a.renderOption=function(){var e=[];return ce["e"].map(function(t){e.push(R.a.createElement(oe,{value:t.value,key:t.value},t.name))}),e},a}return _()(t,e),O()(t,[{key:"render",value:function(){var e=this.props,t=e.onAdd,a=e.filter,n=e.form,r=e.i18n,i=n.getFieldDecorator,l=a.name,c=a.type,o=[];return a.createTime&&a.createTime[0]&&(o[0]=le()(a.createTime[0])),a.createTime&&a.createTime[1]&&(o[1]=le()(a.createTime[1])),R.a.createElement(g["a"],{gutter:24},R.a.createElement(k["a"],z()({},ue,{xl:{span:4},md:{span:8}}),i("name",{initialValue:l})(R.a.createElement(se,{placeholder:r._("Search Name"),onSearch:this.handleSubmit}))),R.a.createElement(k["a"],z()({},ue,{xl:{span:4},md:{span:8},id:"addressCascader"}),i("type",{initialValue:c})(R.a.createElement(re["a"],{defaultValue:"khang_sinh",style:{width:"100%"},placeholder:r._("Ch\u1ecdn lo\u1ea1i thu\u1ed1c")},this.renderOption()))),R.a.createElement(k["a"],z()({},ue,{xl:{span:6},md:{span:8},sm:{span:12},id:"createTimeRangePicker"}),R.a.createElement(q["c"],{label:r._("CreateTime")},i("createTime",{initialValue:o})(R.a.createElement(me,{style:{width:"100%"},onChange:this.handleChange.bind(this,"createTime"),getCalendarContainer:function(){return document.getElementById("createTimeRangePicker")}})))),R.a.createElement(k["a"],z()({},de,{xl:{span:10},md:{span:24},sm:{span:24}}),R.a.createElement(g["a"],{type:"flex",align:"middle",justify:"space-between"},R.a.createElement("div",null,R.a.createElement(T["a"],{type:"primary",className:"margin-right"},R.a.createElement(A["Trans"],{id:"Search"})),R.a.createElement(T["a"],null,R.a.createElement(A["Trans"],{id:"Reset"}))),R.a.createElement(U.a,{to:"/user/create"},R.a.createElement(T["a"],{type:"ghost",onClick:t},R.a.createElement(A["Trans"],{id:"Create"}))))))}}]),t}(j["Component"]),o=s))||o)||o),he=pe,fe=(a("7Kak"),a("9yH6")),ye=te["a"].Item,Ee={labelCol:{span:6},wrapperCol:{span:14}},ge=(m=Object(A["withI18n"])(),u=te["a"].create(),m(d=u((p=function(e){function t(){var e,a;I()(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a=D()(this,(e=M()(t)).call.apply(e,[this].concat(r))),a.handleOk=function(){var e=a.props,t=e.item,n=void 0===t?{}:t,r=e.onOk,i=e.form,l=i.validateFields,c=i.getFieldsValue;l(function(e){if(!e){var t=C()({},c(),{key:n.key});t.address=t.address.join(" "),r(t)}})},a}return _()(t,e),O()(t,[{key:"render",value:function(){var e=this.props,t=e.item,a=void 0===t?{}:t,n=(e.onOk,e.form),r=e.i18n,i=L()(e,["item","onOk","form","i18n"]),l=n.getFieldDecorator;return R.a.createElement(G["a"],z()({},i,{onOk:this.handleOk}),R.a.createElement(te["a"],{layout:"horizontal"},R.a.createElement(ye,z()({label:r._("Name"),hasFeedback:!0},Ee),l("name",{initialValue:a.name,rules:[{required:!0}]})(R.a.createElement(ne["a"],null))),R.a.createElement(ye,z()({label:r._("Code"),hasFeedback:!0},Ee),l("code",{initialValue:a.code,rules:[{required:!0}]})(R.a.createElement(ne["a"],null))),R.a.createElement(ye,z()({label:r._("Type"),hasFeedback:!0},Ee),l("type",{initialValue:a.type,rules:[{required:!0,type:"boolean"}]})(R.a.createElement(fe["a"].Group,null,R.a.createElement(fe["a"],{value:!0},R.a.createElement(A["Trans"],{id:"Male"})),R.a.createElement(fe["a"],{value:!1},R.a.createElement(A["Trans"],{id:"Female"}))))),R.a.createElement(ye,z()({label:r._("Description"),hasFeedback:!0},Ee),l("description",{initialValue:a.description,rules:[{required:!0}]})(R.a.createElement(ne["a"],null)))))}}]),t}(j["PureComponent"]),d=p))||d)||d),ke=ge,ve=(h=Object(A["withI18n"])(),f=Object(Y["connect"])(function(e){var t=e.user,a=e.loading;return{user:t,loading:a}}),h(y=f((E=function(e){function t(e){var a;return I()(this,t),a=D()(this,M()(t).call(this,e)),a.handleRefresh=function(e){var t=a.props.location,n=t.query,r=t.pathname;S["k"].push({pathname:r,search:Object(K["stringify"])(C()({},n,e),{arrayFormat:"repeat"})})},a}return _()(t,e),O()(t,[{key:"render",value:function(){var e=this.props.user,t=e.selectedRowKeys;return R.a.createElement(q["f"],{inner:!0},R.a.createElement(he,this.filterProps),t.length>0&&R.a.createElement(g["a"],{style:{marginBottom:24,textAlign:"right",fontSize:13}},R.a.createElement(k["a"],null,"Selected ".concat(t.length," items "),R.a.createElement(v["a"],{title:"Are you sure you want to delete these items?",placement:"left",onConfirm:this.handleDeleteItems},R.a.createElement(T["a"],{type:"primary",style:{marginLeft:8}},"Remove")))),R.a.createElement(ee,this.listProps),R.a.createElement(ke,this.modalProps))}},{key:"listProps",get:function(){var e=this,t=this.props,a=(t.dispatch,t.user),n=t.loading,r=a.pagination,i=a.selectedRowKeys;return{dataSource:ce["c"],loading:n.effects["user/query"],pagination:r,onChange:function(t){e.handleRefresh({page:t.current,pageSize:t.pageSize})},onDeleteItem:function(e){},onEditItem:function(e){},rowSelection:{selectedRowKeys:i,onChange:function(e){}}}}},{key:"filterProps",get:function(){var e=this.props,t=e.location,a=(e.dispatch,t.query);return{filter:C()({},a)}}}]),t}(j["PureComponent"]),y=E))||y)||y);t["default"]=ve}}]);