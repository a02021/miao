(function(t){function e(e){for(var n,o,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="aria2/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},1:function(t,e){},"1f33":function(t,e,a){"use strict";a("9b1f")},2:function(t,e){},"20b0":function(t,e,a){"use strict";a("6c78")},3:function(t,e){},4:function(t,e){},"42cd":function(t,e,a){"use strict";a("4e1a")},"4b13":function(t,e,a){"use strict";a("af27")},"4e1a":function(t,e,a){},"52e8":function(t,e,a){"use strict";a("e025")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"viewbox"},[a("Sidebar"),a("div",{staticClass:"main"},[a("router-view")],1)],1)])},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar"},[a("el-row",{staticClass:"tac"},[a("el-col",{attrs:{span:12}},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"/"+this.$route.path.split("/")[1],"background-color":"#32373f","text-color":"white","active-text-color":"#ffd04b",router:""}},[a("el-submenu",{attrs:{index:"1"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-user"}),a("span",[t._v(t._s(t.status))])]),a("el-menu-item-group",t._l(t.servers,(function(e,n){return a("el-menu-item",{key:n,class:"server"+n,attrs:{servers:t.servers},on:{click:function(e){return t.changeServer(n)}}},[t._v("["+t._s(n+1)+"] "+t._s(e.name))])})),1)],2),a("el-menu-item",{attrs:{index:"/downloading"}},[a("i",{staticClass:"el-icon-download"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("正在下载")])]),a("el-menu-item",{attrs:{index:"/completed"}},[a("i",{staticClass:"el-icon-circle-check"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("已完成")])]),a("el-menu-item",{attrs:{index:"/deleted"}},[a("i",{staticClass:"el-icon-delete"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("已删除")])]),a("el-menu-item",{attrs:{index:"/settings"}},[a("i",{staticClass:"el-icon-setting"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("设置")])]),a("el-menu-item",{staticStyle:{display:"none"},attrs:{index:"/tasks"}},[a("i",{staticClass:"el-icon-setting"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("详情-隐藏")])])],1)],1)],1),a("button",{on:{click:function(e){return t.getStatus()}}},[t._v("刷新")])],1)},i=[],l=(a("e9c4"),{name:"Sidebar",data:function(){return{}},props:{msg:String},computed:{servers:function(){return this.$store.state.servers},status:function(){return this.$store.state.status},active:function(){return this.$store.state.active}},methods:{getStatus:function(){this.$store.commit("getStatus")},changeServer:function(t){this.$store.commit("changeServer",t),this.$store.commit("getStatus")}},mounted:function(){this.$store.commit("getStatus")},watch:{active:function(t){this.getStatus(),localStorage.setItem("aria2Servers-active",JSON.stringify(t))}}}),c=l,u=(a("1f33"),a("2877")),d=Object(u["a"])(c,o,i,!1,null,"797e4c2e",null),p=d.exports,f={name:"App",components:{Sidebar:p},data:function(){return{}},computed:{aria2:function(){return this.$store.state.aria2},servers:function(){return this.$store.state.servers},active:function(){return this.$store.state.active}},methods:{},mounted:function(){this.servers&&this.servers[this.active]&&this.$store.commit("changeServer",this.active),this.$store.commit("getStatus")}},v=f,h=(a("034f"),Object(u["a"])(v,r,s,!1,null,null,null)),m=h.exports,b=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("Toolbar"),t.ifStatus?a("div",{staticClass:"status"},[t._v(" 正在下载: "+t._s(t.status.numActive)+" 下载速度: "+t._s(t.status.downloadSpeed)+" 上传速度: "+t._s(t.status.uploadSpeed)+" ")]):a("div",{staticClass:"status"},[t._v(" "+t._s(t.status)+" ")]),a("div",{staticClass:"tasks"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.det}},[a("el-table-column",{attrs:{prop:"name",label:"名称",sortable:""}}),a("el-table-column",{attrs:{prop:"length",label:"大小",sortable:"",width:"80"}}),a("el-table-column",{attrs:{prop:"percent",label:"进度",sortable:"",width:"120"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-progress",{attrs:{percentage:t.row.percent}})]}}])}),a("el-table-column",{attrs:{prop:"downloadSpeed",label:"速度",sortable:"",width:"80"}}),a("el-table-column",{attrs:{prop:"status",label:"状态",sortable:"",width:"80"}}),a("el-table-column",{attrs:{label:"操作",width:"210"},scopedSlots:t._u([{key:"default",fn:function(e){return["下载中"==e.row.status?a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){return t.act("pause",e.row.gid)}}},[t._v("暂停")]):a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return t.act("unpause",e.row.gid)}}},[t._v("开始")]),a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.$router.push("/tasks/"+e.row.gid)}}},[t._v("详情")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDelete(e.$index)}}},[t._v("删除")])]}}])})],1)],1)],1)},w=[],k=a("2909"),S=a("1da1"),x=(a("96cf"),a("99af"),a("d3b7"),a("159b"),a("b680"),a("33d1"),a("ea98"),a("ac1f"),a("1276"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toolbar"},[a("div",{staticClass:"toolbar-i"},[a("el-dropdown",{attrs:{"hide-on-click":!1},on:{command:t.handleCommand}},[a("span",{staticClass:"el-dropdown-link"},[t._v(" 新建下载"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"url"}},[t._v("URL")]),a("el-dropdown-item",{attrs:{command:"bt"}},[t._v("BT文件")])],1)],1),a("el-dialog",{attrs:{title:"添加URL",modal:!1,visible:t.urlVisible,width:"80%"},on:{"update:visible":function(e){t.urlVisible=e}}},[a("el-input",{attrs:{type:"textarea",rows:10,placeholder:"请输入内容"},model:{value:t.urlInput,callback:function(e){t.urlInput=e},expression:"urlInput"}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.urlVisible=!1,t.addUrl()}}},[t._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"添加BT文件",visible:t.btVisible,width:"80%"},on:{"update:visible":function(e){t.btVisible=e}}},[a("form",[a("input",{attrs:{type:"file",accept:".torrent"},on:{change:t.getbt}}),this.btParse?a("div",{staticClass:"btse"},[t._v(" 注释: "+t._s(this.btParse.comment)+" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.btSelected,expression:"btSelected"}],attrs:{multiple:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.btSelected=e.target.multiple?a:a[0]}}},t._l(t.btParse.files,(function(e,n){return a("option",{key:n,domProps:{value:n}},[t._v(" "+t._s(e.name)+" ")])})),0)]):t._e(),a("button",{on:{click:t.addbt}},[t._v("确定")])])])],1),a("div",{staticClass:"toolbar-i"},[a("el-radio-group",{attrs:{size:"small"},model:{value:t.radio1,callback:function(e){t.radio1=e},expression:"radio1"}},[a("el-radio-button",{attrs:{label:"unpauseAll"}},[t._v("全部开始")]),a("el-radio-button",{attrs:{label:"pauseAll"}},[t._v("全部暂停")])],1)],1)])}),_=[],y=a("fa9f"),I=y["a"],O=(a("20b0"),Object(u["a"])(I,x,_,!1,null,"2af32a2c",null)),$=O.exports,C={components:{Toolbar:$},name:"Downloading",data:function(){return{ifStatus:!1,status:"获取数据中",tasks:[],det:[],intId:null}},props:{},computed:{aria2:function(){return this.$store.state.aria2}},methods:{update:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.aria2.getGlobalStat();case 3:return t.status=e.sent,t.ifStatus=!0,e.t0=[],e.t1=k["a"],e.next=9,t.aria2.tellActive();case 9:return e.t2=e.sent,e.t3=(0,e.t1)(e.t2),e.t4=k["a"],e.next=14,t.aria2.tellWaiting(0,100);case 14:e.t5=e.sent,e.t6=(0,e.t4)(e.t5),t.tasks=e.t0.concat.call(e.t0,e.t3,e.t6),t.intId||(t.intId=setInterval(t.update,1e3)),e.next=28;break;case 20:e.prev=20,e.t7=e["catch"](0),t.ifStatus=!1,t.status="获取数据失败",t.tasks=[],t.det=[],clearInterval(t.intId),t.intId=null;case 28:case"end":return e.stop()}}),e,null,[[0,20]])})))()},handleDelete:function(t){var e=this;return Object(S["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,e.det[t].status,n=e.det[t].gid,a.next=5,e.aria2.remove(n);case 5:e.update(),console.log("删除成功"),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()},act:function(t,e){var a=this;return Object(S["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.aria2[t](e);case 3:a.update(),n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()}},mounted:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=["DownloadStart","DownloadPause","DownloadComplete","DownloadStop","BtDownloadComplete"],a.forEach((function(e){t.aria2.on(e,(function(){t.update()}))})),t.update(),t.intId=setInterval(t.update,1e3);case 4:case"end":return e.stop()}}),e)})))()},watch:{aria2:function(){clearInterval(this.intId),this.intId=null,this.update()},tasks:function(){var t=this;function e(t){return t>1073741824?parseFloat((t/1073741824).toFixed(2))+" GB":t>1048576?parseFloat((t/1048576).toFixed(2))+" MB":t>1024?parseFloat((t/1024).toFixed(2))+" KB":t+" B"}console.log("tasks改变",this.tasks),this.det=[],this.tasks[0]||(this.det=[]),this.tasks.forEach((function(a,n){var r="未知状态";"paused"==a.status&&(r="暂停"),"active"==a.status&&(r="下载中");var s=a.downloadSpeed>1024?(a.downloadSpeed/1024).toFixed(2)+" KB/s":a.downloadSpeed+" B/s",o=0==a.completedLength?0:(a.completedLength/a.totalLength*100).toFixed(2);t.$set(t.det,n,{name:a.files[0].path.split("/").at(-1),downloadSpeed:s,percent:o,status:r,gid:a.gid,length:e(a.totalLength)})}))}},beforeDestroy:function(){clearInterval(this.intId)}},j=C,D=(a("42cd"),Object(u["a"])(j,g,w,!1,null,"6977146e",null)),P=D.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("Toolbar"),a("div",{staticClass:"tasks"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.det,"default-sort":{prop:"date",order:"descending"}}},[a("el-table-column",{attrs:{prop:"name",label:"名称",sortable:"",width:"400"}}),a("el-table-column",{attrs:{prop:"length",label:"大小",sortable:""}}),a("el-table-column",{attrs:{prop:"percent",label:"进度",sortable:""}}),a("el-table-column",{attrs:{prop:"status",label:"状态",sortable:""}}),a("el-table-column",{attrs:{label:"操作",width:"145"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.$router.push("/tasks/"+e.row.gid)}}},[t._v("详情")])]}}])})],1)],1)],1)},F=[],L=(a("4de4"),{components:{Toolbar:$},name:"Downloading",data:function(){return{status:"=",tasks:[],det:[],intId:null}},props:{},computed:{aria2:function(){return this.$store.state.aria2}},methods:{update:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.aria2.getGlobalStat();case 3:return t.status=e.sent,e.t0=k["a"],e.next=7,t.aria2.tellStopped(0,100);case 7:e.t1=e.sent,t.tasks=(0,e.t0)(e.t1),t.intId||(t.intId=setInterval(t.update,1e3)),e.next=18;break;case 12:e.prev=12,e.t2=e["catch"](0),t.tasks=[],t.det=[],clearInterval(t.intId),t.intId=null;case 18:case"end":return e.stop()}}),e,null,[[0,12]])})))()}},mounted:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=["DownloadStart","DownloadPause","DownloadComplete","DownloadStop","BtDownloadComplete"],a.forEach((function(e){t.aria2.on(e,(function(){t.update()}))})),t.update(),t.intId=setInterval(t.update,1e3);case 4:case"end":return e.stop()}}),e)})))()},watch:{aria2:function(){clearInterval(this.intId),this.intId=null,this.update()},tasks:function(){var t=this;function e(t){return t>1073741824?parseFloat((t/1073741824).toFixed(2))+" GB":t>1048576?parseFloat((t/1048576).toFixed(2))+" MB":t>1024?parseFloat((t/1024).toFixed(2))+" KB":t+" B"}this.tasks[0]||(this.det=[]),this.tasks.filter((function(t){return"complete"==t.status})).forEach((function(a,n){var r="完成";t.$set(t.det,n,{name:a.files[0].path.split("/").at(-1)||"未知名称",percent:"100 %",status:r,gid:a.gid,length:e(a.totalLength)})}))}},beforeDestroy:function(){clearInterval(this.intId)}}),E=L,B=(a("4b13"),Object(u["a"])(E,R,F,!1,null,"0000f2c7",null)),V=B.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("Toolbar"),a("div",{staticClass:"tasks"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.det,"default-sort":{prop:"date",order:"descending"}}},[a("el-table-column",{attrs:{prop:"name",label:"名称",sortable:"",width:"400"}}),a("el-table-column",{attrs:{prop:"length",label:"大小",sortable:""}}),a("el-table-column",{attrs:{prop:"percent",label:"进度",sortable:""}}),a("el-table-column",{attrs:{prop:"status",label:"状态",sortable:""}}),a("el-table-column",{attrs:{label:"操作",width:"145"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.$router.push("/tasks/"+e.row.gid)}}},[t._v("详情")])]}}])})],1)],1)],1)},A=[],G={components:{Toolbar:$},name:"Downloading",data:function(){return{status:"=",tasks:[],det:[],intId:null}},props:{},computed:{aria2:function(){return this.$store.state.aria2}},methods:{update:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.aria2.getGlobalStat();case 3:return t.status=e.sent,e.t0=k["a"],e.next=7,t.aria2.tellStopped(0,100);case 7:e.t1=e.sent,t.tasks=(0,e.t0)(e.t1),t.intId||(t.intId=setInterval(t.update,1e3)),e.next=18;break;case 12:e.prev=12,e.t2=e["catch"](0),t.tasks=[],t.det=[],clearInterval(t.intId),t.intId=null;case 18:case"end":return e.stop()}}),e,null,[[0,12]])})))()}},mounted:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=["DownloadStart","DownloadPause","DownloadComplete","DownloadStop","BtDownloadComplete"],a.forEach((function(e){t.aria2.on(e,(function(){t.update()}))})),t.update(),t.intId=setInterval(t.update,1e3);case 4:case"end":return e.stop()}}),e)})))()},watch:{aria2:function(){clearInterval(this.intId),this.intId=null,this.update()},tasks:function(){var t=this;function e(t){return t>1073741824?parseFloat((t/1073741824).toFixed(2))+" GB":t>1048576?parseFloat((t/1048576).toFixed(2))+" MB":t>1024?parseFloat((t/1024).toFixed(2))+" KB":t+" B"}console.log(this.tasks),this.tasks[0]||(this.det=[]),this.tasks.filter((function(t){return"complete"!=t.status})).forEach((function(a,n){var r="停止";"paused"==a.status&&(r="暂停"),"active"==a.status&&(r="下载中"),"error"==a.status&&(r="停止"),t.$set(t.det,n,{name:a.files[0].path.split("/").at(-1)||"未知名称",percent:0==a.completedLength?0:(a.completedLength/a.totalLength*100).toFixed(2),status:r,gid:a.gid,length:e(a.totalLength)})}))}},beforeDestroy:function(){clearInterval(this.intId)}},N=G,z=(a("52e8"),Object(u["a"])(N,T,A,!1,null,"3b95bd2a",null)),J=z.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[t._m(0),a("div",{staticClass:"servers"},[a("div",{staticClass:"title"},[a("span",[t._v("服务器列表")]),a("el-button",{attrs:{type:"text"},on:{click:function(e){t.dialogVisible=!0,t.addPop()}}},[t._v("添加")])],1),a("el-dialog",{attrs:{title:"添加Aria2服务器",visible:t.dialogVisible,width:"50%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{attrs:{"label-position":"left","label-width":"80px",model:t.newServer}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{model:{value:t.newServer.name,callback:function(e){t.$set(t.newServer,"name",e)},expression:"newServer.name"}})],1),a("el-form-item",{attrs:{label:"Host"}},[a("el-input",{model:{value:t.newServer.host,callback:function(e){t.$set(t.newServer,"host",e)},expression:"newServer.host"}})],1),a("el-form-item",{attrs:{label:"Port"}},[a("el-input",{model:{value:t.newServer.port,callback:function(e){t.$set(t.newServer,"port",e)},expression:"newServer.port"}})],1),a("el-form-item",{attrs:{label:"secret"}},[a("el-input",{model:{value:t.newServer.secret,callback:function(e){t.$set(t.newServer,"secret",e)},expression:"newServer.secret"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1,t.addServer()}}},[t._v("确 定")])],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.servers,stripe:""}},[a("el-table-column",{attrs:{prop:"name",label:"名称"}}),a("el-table-column",{attrs:{prop:"host",label:"host"}}),a("el-table-column",{attrs:{prop:"port",label:"port"}}),a("el-table-column",{attrs:{prop:"secret",label:"secret"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.editVisible=!0,t.editPop(e.$index)}}},[t._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.deleteServer(e.$index)}}},[t._v("删除")])]}}])})],1),a("el-dialog",{attrs:{title:"编辑服务器",visible:t.editVisible,width:"50%"},on:{"update:visible":function(e){t.editVisible=e}}},[a("el-form",{attrs:{"label-position":"left","label-width":"80px",model:t.editServer}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{model:{value:t.editServer.name,callback:function(e){t.$set(t.editServer,"name",e)},expression:"editServer.name"}})],1),a("el-form-item",{attrs:{label:"Host"}},[a("el-input",{model:{value:t.editServer.host,callback:function(e){t.$set(t.editServer,"host",e)},expression:"editServer.host"}})],1),a("el-form-item",{attrs:{label:"Port"}},[a("el-input",{model:{value:t.editServer.port,callback:function(e){t.$set(t.editServer,"port",e)},expression:"editServer.port"}})],1),a("el-form-item",{attrs:{label:"secret"}},[a("el-input",{model:{value:t.editServer.secret,callback:function(e){t.$set(t.editServer,"secret",e)},expression:"editServer.secret"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.editVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.editVisible=!1,t.updateServer()}}},[t._v("确 定")])],1)],1)],1),t._m(1)])},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toolbar"},[a("div",{staticClass:"toolbar-i"},[t._v("设置")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"more"},[t._v(" 文档: "),a("a",{attrs:{href:"https://aria2.github.io/manual/en/html/aria2c.html?highlight=json#id3"}},[t._v("aria2 jsonrpc")])])}],K=a("5530"),W={name:"HelloWorld",data:function(){return{dialogVisible:!1,newServer:{name:"新服务器",host:"127.0.0.1",port:"6800",secret:"密令"},editVisible:!1,editIdx:0,editServer:{name:"",host:"",port:"",secret:""},upServer:{}}},props:{msg:String},computed:{servers:function(){return this.$store.state.servers}},methods:{addServer:function(){this.$store.commit("addServer",this.newServer)},addPop:function(){this.newServer={name:"新服务器",host:"127.0.0.1",port:"6800",secret:"密令"}},deleteServer:function(t){this.$store.commit("deleteServer",t)},editPop:function(t){this.editIdx=t,this.editServer=Object(K["a"])({},this.servers[t])},updateServer:function(){this.$store.commit("updateServer",{idx:this.editIdx,server:this.editServer})}},watch:{servers:function(t){localStorage.setItem("aria2Servers",JSON.stringify(t))}}},H=W,q=(a("b241"),Object(u["a"])(H,M,U,!1,null,"721ebd21",null)),Q=q.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("Toolbar"),a("div",{staticClass:"tasks"},[a("div",{staticClass:"status"},[a("div",[t._v(" 进度: "+t._s(this.taskDet.percent)+"% 状态: "+t._s(this.taskDet.status)+" 大小: "+t._s(this.taskDet.totalLength)+" 分片数: "+t._s(this.taskDet.numPieces)+" 分片大小: "+t._s(this.taskDet.pieceLength)+" ")]),t._v(" 文件夹: "+t._s(this.taskDet.dir)+" ")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.fileDet,"default-sort":{prop:"date",order:"descending"}}},[a("el-table-column",{attrs:{prop:"name",label:"包含文件",sortable:""}}),a("el-table-column",{attrs:{prop:"length",label:"大小",sortable:""}}),a("el-table-column",{attrs:{prop:"completedLength",label:"已完成",sortable:""}})],1)],1)],1)},Y=[],Z={components:{Toolbar:$},name:"Downloading",data:function(){return{status:"=",task:[],taskDet:{},fileDet:[],intId:null}},props:{},computed:{aria2:function(){return this.$store.state.aria2}},mounted:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t.$route.params.gid),e.next=4,t.aria2.tellStatus(t.$route.params.gid);case 4:t.task=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},watch:{aria2:function(){},task:function(){var t=this;console.log(this.task),this.task||(this.taskDet=[]);var e=this.task.downloadSpeed>1024?(this.task.downloadSpeed/1024).toFixed(2)+" KB/s":this.task.downloadSpeed+" B/s",a=0==this.task.completedLength?0:(this.task.completedLength/this.task.totalLength*100).toFixed(2),n="未知状态";function r(t){return t>1073741824?parseFloat((t/1073741824).toFixed(2))+" GB":t>1048576?parseFloat((t/1048576).toFixed(2))+" MB":t>1024?parseFloat((t/1024).toFixed(2))+" KB":t+" B"}"paused"==this.task.status&&(n="暂停"),"active"==this.task.status&&(n="下载中"),"complete"==this.task.status&&(n="已完成"),"stop"==this.task.status&&(n="停止"),this.taskDet={dir:this.task.dir,speed:e,percent:a,status:n,totalLength:r(this.task.totalLength),numPieces:this.task.numPieces,pieceLength:r(this.task.pieceLength)},this.task.files.forEach((function(e,a){t.$set(t.fileDet,a,{name:e.path.split("/").at(-1),completedLength:r(e.completedLength),length:r(e.length),selected:e.selected})}))}},beforeDestroy:function(){}},tt=Z,et=(a("698e"),Object(u["a"])(tt,X,Y,!1,null,"edeaf374",null)),at=et.exports;n["default"].use(b["a"]);var nt=[{path:"/",redirect:"/downloading"},{path:"/downloading",component:P},{path:"/completed",component:V},{path:"/deleted",component:J},{path:"/settings",component:Q},{path:"/tasks/:gid",component:at}],rt=new b["a"]({routes:nt}),st=rt,ot=(a("fb6a"),a("2f62")),it=a("d4ec"),lt=a("bee2"),ct=a("262e"),ut=a("2caf"),dt=(a("2ca0"),a("faa1")),pt=a.n(dt),ft=function(t){Object(ct["a"])(a,t);var e=Object(ut["a"])(a);function a(t){var n;return Object(it["a"])(this,a),n=e.call(this),n.options=t,n.websocket=new WebSocket("ws://".concat(t.host,":").concat(t.port,"/jsonrpc")),n.connectPromise=new Promise((function(t,e){n.websocket.addEventListener("open",(function(){console.log("连接成功,;"),t()})),n.websocket.addEventListener("error",(function(t){console.log("连接失败",t),e(t)}))})),n.lastId=1,n.callbacks={},n.websocket.addEventListener("open",(function(t){n.websocket.send(JSON.stringify(t.data))})),n.websocket.addEventListener("message",(function(t){var e=JSON.parse(t.data);if(e.method&&e.method.startsWith("aria2.on")){var a;(a=n).emit.apply(a,[e.method.slice(8)].concat(Object(k["a"])(e.params)));var r=n[e.method.slice(6)];"function"===typeof r&&r.apply(void 0,Object(k["a"])(e.params))}var s=n.callbacks[e.id];delete n.callbacks[e.id],"function"==typeof s&&s(e)})),n}return Object(lt["a"])(a,[{key:"ready",value:function(){return this.connectPromise}},{key:"close",value:function(){var t=this;return this.websocket.close(),new Promise((function(e){t.websocket.addEventListener("close",(function(){e()}))}))}}]),a}(pt.a);["addUri","addTorrent","getPeers","addMetalink","remove","pause","forcePause","pauseAll","forcePauseAll","unpause","unpauseAll","forceRemove","changePosition","tellStatus","getUris","getFiles","getServers","tellActive","tellWaiting","tellStopped","getOption","changeUri","changeOption","getGlobalOption","changeGlobalOption","purgeDownloadResult","removeDownloadResult","getVersion","getSessionInfo","shutdown","forceShutdown","getGlobalStat","saveSession"].forEach((function(t){ft.prototype[t]=function(){for(var e=this,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return this.connectPromise.then((function(){return new Promise((function(a,r){var s=e.lastId++;e.callbacks[s]=function(t){t.error?r(t.error):a(t.result)},e.websocket.readyState===e.websocket.OPEN?e.websocket.send(JSON.stringify({jsonrpc:"2.0",id:s,method:"aria2.".concat(t),params:["token:".concat(e.options.secret)].concat(n)})):r("WS_CONNECTION_ERROR")}))}))}}));var vt=ft;n["default"].use(ot["a"]);var ht=new ot["a"].Store({state:{aria2:new vt({host:"localhost",port:6800,secret:""}),servers:JSON.parse(localStorage.getItem("aria2Servers"))||[],status:"未连接",count:0,active:JSON.parse(localStorage.getItem("aria2Servers-active"))||0},mutations:{addServer:function(t,e){console.log(e,t.servers),t.servers=[].concat(Object(k["a"])(t.servers),[e])},deleteServer:function(t,e){t.servers=t.servers.slice(0,e).concat(t.servers.slice(e+1))},updateServer:function(t,e){var a=e.idx,n=e.server;console.log(a,n),t.servers=t.servers.slice(0,a).concat(n).concat(t.servers.slice(a+1))},getStatus:function(t){return Object(S["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.aria2.ready();case 3:return e.next=5,t.aria2.getGlobalStat();case 5:console.log("已连接"),t.status="已连接"+(t.active+1),e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log("未连接",e.t0),t.status="未连接"+(t.active+1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()},changeServer:function(t,e){t.aria2.close(),t.status="切换中",t.active=e,t.aria2=new vt(t.servers[e])}}}),mt=ht,bt=a("5c96"),gt=a.n(bt);a("0fae");n["default"].use(gt.a),n["default"].config.productionTip=!1,new n["default"]({router:st,store:mt,render:function(t){return t(m)}}).$mount("#app")},"58ab":function(t,e,a){},"698e":function(t,e,a){"use strict";a("ce52")},"6c78":function(t,e,a){},"85ec":function(t,e,a){},"9b1f":function(t,e,a){},af27:function(t,e,a){},b241:function(t,e,a){"use strict";a("58ab")},ce52:function(t,e,a){},e025:function(t,e,a){},fa9f:function(t,e,a){"use strict";(function(t){var n=a("1da1"),r=(a("d81d"),a("ac1f"),a("1276"),a("498a"),a("fb6a"),a("96cf"),a("b944")),s=a.n(r);e["a"]={name:"Toolbar",data:function(){return{radio1:"",urlVisible:!1,urlInput:"",btVisible:!1,btfile:"",btParse:"",btSelected:[]}},computed:{aria2:function(){return this.$store.state.aria2}},methods:{trans:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log("执行操作中",t),a.prev=1,a.next=4,e.aria2[t]();case 4:return a.next=6,e.aria2.getGlobalStat();case 6:a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](1),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[1,8]])})))()},handleCommand:function(t){"url"==t&&(this.urlVisible=!0),"bt"==t&&(this.btVisible=!0)},addUrl:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.urlInput.split("\n").map(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.aria2.addUri([a.trim()]);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.urlInput="";case 2:case"end":return e.stop()}}),e)})))()},getbt:function(e){var a=this,n=e.target.files[0],r=new FileReader;r.addEventListener("load",(function(){a.btfile=r.result.slice(r.result.indexOf(",")+1),a.btParse=s()(t.from(a.btfile,"base64")),console.log("p",a.btParse)})),r.readAsDataURL(n)},addbt:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.aria2.addTorrent(t.btfile,[],{selectFlie:t.btSelected});case 2:t.btfile="",t.btParse="",t.btSelected=[];case 5:case"end":return e.stop()}}),e)})))()}},mounted:function(){},watch:{radio1:function(t){this.trans(t)},btfile:function(t){console.log(t)},btSelected:function(t){console.log(t)}}}}).call(this,a("b639").Buffer)}});
//# sourceMappingURL=app.24a6672e.js.map