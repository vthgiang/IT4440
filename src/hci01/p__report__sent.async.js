(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{VO7C:function(e,t,n){"use strict";n.r(t);var a,r,i,o,l,c,s=n("2Taf"),u=n.n(s),d=n("vZ4D"),m=n.n(d),p=n("l4Ni"),h=n.n(p),y=n("ujKo"),k=n.n(y),f=n("MhPg"),E=n.n(f),I=(n("Znn+"),n("ZTPi")),T=n("q1tI"),g=n.n(T),w=(n("17x9"),n("7Qib"),n("MuoO")),b=n("ZD0w"),v=n("Kvkj"),P=(n("Qyje"),n("g9YV"),n("wCAj")),j=n("jehZ"),O=n.n(j),x=n("p0pE"),C=n.n(x),D=n("Y/ft"),M=n.n(D),Z=(n("2qtc"),n("kLXV")),N=n("yW6a"),_=n.n(N),A=Z["a"].confirm,B=(a=Object(b["withI18n"])(),a((i=function(e){function t(){var e,n;u()(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=h()(this,(e=k()(t)).call.apply(e,[this].concat(r))),n.handleMenuClick=function(e,t){var a=n.props,r=a.onDeleteItem,i=a.onEditItem,o=a.i18n;"1"===t.key?i(e):"2"===t.key&&A({title:o._("Are you sure you want to delete this record?"),onOk:function(){r(e.id)}})},n}return E()(t,e),m()(t,[{key:"render",value:function(){var e=this,t=this.props,n=(t.onDeleteItem,t.onEditItem,t.i18n),a=M()(t,["onDeleteItem","onEditItem","i18n"]),r=[{title:g.a.createElement(b["Trans"],{id:"STT"}),dataIndex:"id",key:"id"},{title:g.a.createElement(b["Trans"],{id:"Ng\u01b0\u1eddi nh\u1eadn"}),dataIndex:"user",key:"user"},{title:g.a.createElement(b["Trans"],{id:"Ng\xe0y"}),dataIndex:"date",key:"date"},{title:g.a.createElement(b["Trans"],{id:"Ti\xeau \u0111\u1ec1"}),dataIndex:"title",key:"title"},{title:g.a.createElement(b["Trans"],{id:"Tr\u1ea1ng th\xe1i"}),dataIndex:"status",key:"status"},{title:g.a.createElement(b["Trans"],{id:"Operation"}),key:"operation",render:function(t,a){return g.a.createElement(v["a"],{onMenuClick:function(t){return e.handleMenuClick(a,t)},menuOptions:[{key:"1",name:n._("Update")},{key:"2",name:n._("Delete")}]})}}];return g.a.createElement(P["a"],O()({},a,{pagination:C()({},a.pagination,{showTotal:function(e){return n._("Total {total} Items",{total:e})}}),className:_.a.table,bordered:!0,scroll:{x:1200},columns:r,simple:!0,rowKey:function(e){return e.id}}))}}]),t}(T["PureComponent"]),r=i))||r),K=B,V=n("MycI"),q=I["a"].TabPane,J=(o=Object(b["withI18n"])(),l=Object(w["connect"])(function(e){var t=e.user,n=e.loading;return{user:t,loading:n}}),o(c=l(c=function(e){function t(e){return u()(this,t),h()(this,k()(t).call(this,e))}return E()(t,e),m()(t,[{key:"render",value:function(){this.props.user;return g.a.createElement(v["f"],{inner:!0},g.a.createElement(I["a"],{type:"card"},g.a.createElement(q,{tab:"B\xe1o c\xe1o ng\xe0y",key:"1"},g.a.createElement(K,this.listProps)),g.a.createElement(q,{tab:"B\xe1o c\xe1o th\xe1ng",key:"2"},g.a.createElement(K,this.listProps)),g.a.createElement(q,{tab:"B\xe1o c\xe1o n\u0103m",key:"3"},g.a.createElement(K,this.listProps))))}},{key:"listProps",get:function(){var e=this.props;e.dispatch,e.user,e.loading;return{dataSource:V["b"]}}}]),t}(T["PureComponent"]))||c)||c);t["default"]=J}}]);