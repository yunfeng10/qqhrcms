webpackJsonp([120],{Rcsq:function(e,r,t){"use strict";function s(e){t("f0BI")}Object.defineProperty(r,"__esModule",{value:!0});var o=t("PHrY"),a={data:function(){return{loading:!0,count:0,state:!1,resourceInfo:{filename:"",source:""},params:{showFileName:""},rules:{showFileName:[{required:!0,message:"请填写一个主题分类名",trigger:"blur"}],path:[{required:!0,message:"请填写一个路径",trigger:"blur"}],priority:[{required:!0,type:"number",message:"请填写一个数字排序",trigger:"blur"}]}}},methods:{getResourceInfo:function(e){var r=this;o.g({name:e}).then(function(e){r.loading=!1,r.resourceInfo.source=e.body}).catch(function(e){r.loading=!1,r.$message.error("网络异常")})},updateResourceInfo:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return!1;var t=r.resourceInfo;o.q(t).then(function(e){200==e.code&&r.$message.success("修改成功")}).catch(function(e){r.$message.error("修改失败")})})},addResourceInfo:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return!1;r.resourceInfo.root=r.resourceInfo.filename,r.resourceInfo.filename=r.params.showFileName;var t=r.resourceInfo;o.a(t).then(function(e){200==e.code&&(r.$message.success("添加成功"),r.resourceInfo.filename="",r.params.showFileName="",r.resourceInfo.source="")}).catch(function(e){r.$message.error("添加失败")})})},back:function(){this.$router.push({path:"/resourcelist",query:{name:this.$route.query.root,noceStr:Math.round(10*Math.random())}})},resetForm:function(e){var r=this.$route.query.id;this.$refs[e].resetFields(),this.getTemplateInfo(r)},stringReplace:function(e){var r=e.lastIndexOf("/");return e=e.substring(r+1,e.length)}},created:function(){$(window).scrollTop(0),$("#tmp").slimScroll({height:"100%",width:"100%",color:"#999",opacity:.5});var e=this.$route.query.type,r=this.$route.query.id;this.$route.query.rootId;"add"==e?(this.resourceInfo.filename=r,this.loading=!1):"edit"==e&&(this.resourceInfo.filename=r,this.params.showFileName=this.stringReplace(r),this.getResourceInfo(r))},watch:{$route:function(e,r){this.loading=!0;var t=this.$route.query.id;this.params.showFileName=this.stringReplace(t),this.resourceInfo.filename=t,$(window).scrollTop(0),this.getResourceInfo(t)}}},i=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("cms-back"),e._v(" "),t("el-form",{ref:"topicInfo",staticClass:"cms-form",staticStyle:{padding:"0",margin:"0"},attrs:{rules:e.rules,model:e.params,"label-width":"162px"}},[t("el-form-item",{staticClass:"flex-100",attrs:{label:"文件名",prop:"showFileName"}},["edit"==e.$route.query.type?t("el-input",{staticClass:"cms-width",attrs:{disabled:!0},model:{value:e.params.showFileName,callback:function(r){e.$set(e.params,"showFileName",r)},expression:"params.showFileName"}}):e._e(),e._v(" "),"add"==e.$route.query.type?t("el-input",{staticClass:"cms-width",model:{value:e.params.showFileName,callback:function(r){e.$set(e.params,"showFileName",r)},expression:"params.showFileName"}}):e._e()],1),e._v(" "),t("el-form-item",{staticClass:"flex-100",attrs:{label:"内容"}},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.resourceInfo.source,expression:"resourceInfo.source"}],staticStyle:{outline:"none",width:"100%"},attrs:{rows:"25",id:"tmp"},domProps:{value:e.resourceInfo.source},on:{input:function(r){r.target.composing||e.$set(e.resourceInfo,"source",r.target.value)}}})])],1),e._v(" "),t("div",{staticClass:"form-footer"},["edit"==e.$route.query.type?t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/resourceedit",expression:"'/resourceedit'"}],attrs:{type:"primary"},on:{click:function(r){e.updateResourceInfo("topicInfo")}}},[e._v("\n                  修改\n              ")]):e._e(),e._v(" "),"add"==e.$route.query.type?t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/resourcesave",expression:"'/resourcesave'"}],attrs:{value:"",type:"primary"},on:{click:function(r){e.addResourceInfo("topicInfo")}}},[e._v("\n                 添加\n              ")]):e._e(),e._v(" "),t("el-button",{attrs:{type:"info"},on:{click:e.resetForm}},[e._v("重置")])],1)],1)},n=[],u={render:i,staticRenderFns:n},c=u,l=t("Z0/y"),f=s,m=l(a,c,!1,f,null,null);r.default=m.exports},etZY:function(e,r,t){r=e.exports=t("I71c")(!1),r.push([e.i,"\n.left-group .el-form-item__label{\n  width: auto;\n  padding-right:6px;\n}\n",""])},f0BI:function(e,r,t){var s=t("etZY");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);t("FIqI")("3a88d49b",s,!0,{})}});