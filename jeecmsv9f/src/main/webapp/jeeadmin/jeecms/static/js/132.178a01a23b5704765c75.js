webpackJsonp([132],{O4gk:function(e,n,t){n=e.exports=t("l95E")(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},ORSA:function(e,n,t){"use strict";function a(e){t("R/28")}Object.defineProperty(n,"__esModule",{value:!0});var l=t("lcoF"),r=t("5HJ5"),s={mixins:[r.a,l.a],data:function(){return{params:{queryStatus:"recycle",pageNo:"",pageSize:"",queryShare:"",queryTitle:"",queryInputUsername:"",queryOrderBy:""}}},methods:{reduction:function(e){var n=this;this.$http.post(this.$api.contentCycleRecycle,{ids:e}).then(function(e){n.initTableData(n.$api.contentList,n.params),n.loading=!1}).catch(function(e){n.loading=!1})},open2:function(e){var n=this;this.$confirm("你确定要还原?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.$message({actions:n.reduction(e),type:"success",message:"还原成功!"})}).catch(function(){n.$message({type:"info",message:"已取消还原"})})}},created:function(){this.initTableData(this.$api.contentList,this.params)}},o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"cms-body"},[t("div",{staticClass:"cms-list-header flex-between"},[t("div",[t("el-select",{on:{change:e.query},model:{value:e.params.queryOrderBy,callback:function(n){e.$set(e.params,"queryOrderBy",n)},expression:"params.queryOrderBy"}},[t("el-option",{attrs:{label:"无",value:""}}),e._v(" "),t("el-option",{attrs:{label:"ID降序",value:"0"}}),e._v(" "),t("el-option",{attrs:{label:"ID升序",value:"1"}}),e._v(" "),t("el-option",{attrs:{label:"发布时间降序",value:"2"}}),e._v(" "),t("el-option",{attrs:{label:"发布时间升序",value:"3"}}),e._v(" "),t("el-option",{attrs:{label:"固定降，发布降",value:"4"}}),e._v(" "),t("el-option",{attrs:{label:"固定降，发布升",value:"5"}}),e._v(" "),t("el-option",{attrs:{label:"日点击降",value:"6"}}),e._v(" "),t("el-option",{attrs:{label:"周点击降",value:"7"}}),e._v(" "),t("el-option",{attrs:{label:"月点击降",value:"8"}}),e._v(" "),t("el-option",{attrs:{label:"总点击降",value:"9"}}),e._v(" "),t("el-option",{attrs:{label:"日评论降",value:"10"}}),e._v(" "),t("el-option",{attrs:{label:"周评论降",value:"11"}}),e._v(" "),t("el-option",{attrs:{label:"月评论降",value:"12"}}),e._v(" "),t("el-option",{attrs:{label:"总评论降",value:"13"}}),e._v(" "),t("el-option",{attrs:{label:"日下载降",value:"14"}}),e._v(" "),t("el-option",{attrs:{label:"周下载降",value:"15"}}),e._v(" "),t("el-option",{attrs:{label:"月下载降",value:"16"}}),e._v(" "),t("el-option",{attrs:{label:"总下载降",value:"17"}}),e._v(" "),t("el-option",{attrs:{label:"日顶降",value:"18"}}),e._v(" "),t("el-option",{attrs:{label:"周顶降",value:"19"}}),e._v(" "),t("el-option",{attrs:{label:"月顶降",value:"20"}}),e._v(" "),t("el-option",{attrs:{label:"总顶降",value:"21"}}),e._v(" "),t("el-option",{attrs:{label:"推荐降,发布升",value:"22"}}),e._v(" "),t("el-option",{attrs:{label:"推荐升,发布降",value:"23"}})],1)],1),e._v(" "),t("div",[t("cms-input",{attrs:{label:"标题"},model:{value:e.params.queryTitle,callback:function(n){e.$set(e.params,"queryTitle",n)},expression:"params.queryTitle"}}),e._v(" "),t("cms-input",{attrs:{label:"发布者"},model:{value:e.params.queryInputUsername,callback:function(n){e.$set(e.params,"queryInputUsername",n)},expression:"params.queryInputUsername"}}),e._v(" "),t("el-button",{on:{click:e.query}},[e._v("查询")])],1)]),e._v(" "),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""},on:{"selection-change":e.checkIds}},[t("el-table-column",{attrs:{type:"selection",width:"65",align:"right"}}),e._v(" "),t("el-table-column",{attrs:{prop:"id",label:"ID",width:"50",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"title",label:"标题",align:"left",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(n){return t("div",{staticClass:"overflow-text"},[n.row.topLevel>0?t("span",{staticClass:"cms-ups"},[e._v("[顶"+e._s(n.row.topLevel)+"]")]):e._e(),e._v(" "),n.row.recommend?t("span",{staticClass:"cms-recommend"},[e._v("[推荐"+e._s(n.row.recommendLevel)+"]")]):e._e(),e._v(" "),t("span",{staticClass:"cms-channel-name"},[e._v("["+e._s(n.row.channelName)+"]")]),e._v(" "),t("a",{staticClass:"link",attrs:{href:n.row.url,title:n.row.title,target:"_blank"}},[e._v(e._s(n.row.title))])])}}])}),e._v(" "),t("el-table-column",{attrs:{label:"类型",prop:"typeName",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{label:"发布者",prop:"userName",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{label:"点击",prop:"views",align:"center"}}),e._v(" "),"6"===e.params.queryOrderBy?t("el-table-column",{attrs:{label:"日点击",prop:"viewsDay",align:"center"}}):e._e(),e._v(" "),"7"===e.params.queryOrderBy?t("el-table-column",{attrs:{label:"周点击",prop:"viewsWeek",align:"center"}}):e._e(),e._v(" "),"8"===e.params.queryOrderBy?t("el-table-column",{attrs:{label:"月点击",prop:"viewsMonth",align:"center"}}):e._e(),e._v(" "),"10"===e.params.queryOrderBy?t("el-table-column",{attrs:{label:"日评论",prop:"commentsDay",align:"center"}}):e._e(),e._v(" "),"11"===e.params.queryOrderBy?t("el-table-column",{attrs:{label:"周评论",prop:"commentsWeek",align:"center"}}):e._e(),e._v(" "),"12"===e.params.queryOrderBy?t("el-table-column",{attrs:{label:"月评论",prop:"commentsMonth",align:"center"}}):e._e(),e._v(" "),"13"===e.params.queryOrderBy?t("el-table-column",{attrs:{label:"评论",prop:"commentCount",align:"center"}}):e._e(),e._v(" "),"14"===e.params.queryOrderBy?t("el-table-column",{attrs:{label:"日下载",prop:"downloadsDay",align:"center"}}):e._e(),e._v(" "),"15"===e.params.queryOrderBy?t("el-table-column",{attrs:{label:"周下载",prop:"downloadsWeek",align:"center"}}):e._e(),e._v(" "),"16"===e.params.queryOrderBy?t("el-table-column",{attrs:{label:"月下载",prop:"downloadsMonth",align:"center"}}):e._e(),e._v(" "),"17"===e.params.queryOrderBy?t("el-table-column",{attrs:{label:"下载",prop:"downloads",align:"center"}}):e._e(),e._v(" "),"18"===e.params.queryOrderBy?t("el-table-column",{attrs:{label:"日顶数",prop:"upsMonth",align:"center"}}):e._e(),e._v(" "),"19"===e.params.queryOrderBy?t("el-table-column",{attrs:{label:"周顶数",prop:"upsWeek",align:"center"}}):e._e(),e._v(" "),"20"===e.params.queryOrderBy?t("el-table-column",{attrs:{label:"月顶数",prop:"upsMonth",align:"center"}}):e._e(),e._v(" "),"21"===e.params.queryOrderBy?t("el-table-column",{attrs:{label:"顶数",prop:"ups",align:"center"}}):e._e(),e._v(" "),t("el-table-column",{attrs:{label:"发布时间",prop:"releaseDate",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{label:"状态",prop:"status",align:"center"},scopedSlots:e._u([{key:"default",fn:function(n){return t("div",{},[-1==n.row.status?t("span",[e._v("退回")]):e._e(),e._v(" "),0==n.row.status?t("span",[e._v("草稿")]):e._e(),e._v(" "),1==n.row.status?t("span",[e._v("审核中")]):e._e(),e._v(" "),2==n.row.status?t("span",[e._v("已终审")]):e._e(),e._v(" "),3==n.row.status?t("span",[e._v("回收站")]):e._e(),e._v(" "),4==n.row.status?t("span",[e._v("投稿")]):e._e(),e._v(" "),5==n.row.status?t("span",[e._v("归档")]):e._e()])}}])}),e._v(" "),t("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(n){return t("div",{},[t("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/contentCycle/Recycle",expression:"'/contentCycle/Recycle'"}],attrs:{type:"edit"},nativeOn:{click:function(t){e.open2(n.row.id)}}}),e._v(" "),t("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/contentCycle/delete",expression:"'/contentCycle/delete'"}],attrs:{type:"delete"},nativeOn:{click:function(t){e.deleteBatch(e.$api.contentCycleDelete,n.row.id)}}})],1)}}])})],1),e._v(" "),t("div",{staticClass:"cms-list-footer"},[t("div",{staticClass:"cms-left"},[t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/contentCycle/delete",expression:"'/contentCycle/delete'"}],attrs:{disabled:e.disabled},on:{click:function(n){e.deleteBatch(e.$api.contentCycleDelete,e.ids)}}},[e._v("批量删除")]),e._v(" "),t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/contentCycle/Recycle",expression:"'/contentCycle/Recycle'"}],attrs:{disabled:e.disabled},on:{click:function(n){e.open2(e.ids)}}},[e._v("还原")])],1),e._v(" "),t("cms-pagination",{attrs:{total:e.total},on:{change:e.getPages}})],1)],1)},i=[],c={render:o,staticRenderFns:i},p=c,u=t("8AGX"),v=a,m=u(s,p,!1,v,null,null);n.default=m.exports},"R/28":function(e,n,t){var a=t("O4gk");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t("8bSs")("81662396",a,!0)}});