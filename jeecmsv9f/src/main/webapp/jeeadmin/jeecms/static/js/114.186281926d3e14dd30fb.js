webpackJsonp([114],{"9DhG":function(a,t,e){t=a.exports=e("l95E")(!1),t.push([a.i,"\n.data-item[data-v-359ecf10] {\n  float: left;\n  min-width: 170px;\n  margin-top: 30px;\n}\n.data-item .data-title[data-v-359ecf10] {\n    font-size: 12px;\n    color: #878d99;\n    margin-bottom: 17px;\n}\n.data-item .data-num[data-v-359ecf10] {\n    color: #353535;\n    font-size: 24px;\n}\n.chart-style[data-v-359ecf10] {\n  width: 100%;\n  height: 380px;\n  border-bottom: 1px dashed #eee;\n  margin-bottom: 15px;\n}\n",""])},Cear:function(a,t,e){"use strict";function s(a){e("zo7N")}Object.defineProperty(t,"__esModule",{value:!0});var r=e("2sCs"),i=e.n(r),n={data:function(){return{dateArr:"",params:{queryModel:"day",begin:"",end:""},time:"",date:{year:0,month:0,day:0},dataInfo:{regTotal:0,list:[]},chartLine:null,chartPie:null,sum:0,year:"",month:"",totoal:"",chartLineOptions:{tooltip:{trigger:"axis"},legend:{data:["注册数"]},grid:{left:"4%",right:"2%",bottom:"14%"},xAxis:{type:"category",splitLine:{show:!1},boundaryGap:!0,data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{splitLine:{show:!1},type:"value"},series:[{name:"注册数",type:"line",showSymbol:!1,smooth:!0,data:[120,132,101,134,90,230,210]}]}}},methods:{getDay:function(a,t){return new Date(a,t,0).getDate()},rangeTime:function(a){console.log(a),null!=a?(this.params.begin=a[0],this.params.end=a[1],a[0]===a[1]?this.time=a[0]:this.time=a[0]+"-"+a[1],this.params.flag="3",this.params.queryModel="section"):(this.params.begin="",this.params.end="",this.params.queryModel="day",this.time=this.date.year+"-"+this.date.month+"-"+this.date.day),this.getDataInfo()},query:function(a){"day"===a&&(this.time=this.date.year+"-"+this.date.month+"-"+this.date.day),"yesterday"===a&&(this.time=this.date.year+"-"+this.date.month+"-"+(parseInt(this.date.day)-1)),"month"===a&&(this.time=this.date.year+"-"+this.date.month),"year"!==a&&"years"!==a||(this.time=this.date.year),this.getDataInfo()},getDataInfo:function(){var a=this;i.a.post(this.$api.statisticMemberList,this.params).then(function(t){var e=[],s=[],r=[],i=[];for(var n in t.body.data)e.push(t.body.data[n][0]),s.push(t.body.data[n][1]),r.push(a.timeFormat(a.params.queryModel,t.body.data[n][1])),i.push(t.body.data[n][0]);a.sum=0;for(var o in t.body.data)a.sum=a.sum+t.body.data[o][0];a.totoal=t.body.totalCount,0===a.totoal&&(a.totoal=1),a.dataInfo.regTotal=a.sum,a.dataInfo=t.body.data,a.setChartLineOptions(r,i)})},setChartLineOptions:function(a,t){var e={xAxis:{data:a},series:[{name:"浏览量(pv)",data:t}]};this.chartLine.setOption(e)},timeFormat:function(a,t){var e="0";if("day"==a||"yesterday"==a)switch(t){case 0:e="00:00-00:59";break;case 1:e="01:00-01:59";break;case 2:e="02:00-02:59";break;case 3:e="03:00-03:59";break;case 4:e="04:00-04:59";break;case 5:e="05:00-05:59";break;case 6:e="06:00-06:59";break;case 7:e="07:00-07:59";break;case 8:e="08:00-08:59";break;case 9:e="09:00-09:59";break;case 10:e="10:00-10:59";break;case 11:e="11:00-11:59";break;case 12:e="12:00-12:59";break;case 13:e="13:00-13:59";break;case 14:e="14:00-14:59";break;case 15:e="15:00-15:59";break;case 16:e="16:00-16:59";break;case 17:e="17:00-17:59";break;case 18:e="18:00-18:59";break;case 19:e="19:00-19:59";break;case 20:e="20:00-20:59";break;case 21:e="21:00-21:59";break;case 22:e="22:00-22:59";break;case 23:e="23:00-23:59";break;default:e="99:99:99~99:99:99:99"}if("year"==a){var s=new Date;switch(t){case 1:e=s.getFullYear()+"-01";break;case 2:e=s.getFullYear()+"-02";break;case 3:e=s.getFullYear()+"-03";break;case 4:e=s.getFullYear()+"-04";break;case 5:e=s.getFullYear()+"-05";break;case 6:e=s.getFullYear()+"-06";break;case 7:e=s.getFullYear()+"-07";break;case 8:e=s.getFullYear()+"-08";break;case 9:e=s.getFullYear()+"-09";break;case 10:e=s.getFullYear()+"-10";break;case 11:e=s.getFullYear()+"-11";break;case 12:e=s.getFullYear()+"-12";break;default:e="9999-99-99"}}return"month"!=a&&"years"!=a||(e=t),"section"===a&&(t=t.split("/")[1],e=t),e}},created:function(){var a=new Date,t=a.getFullYear(),e=a.getMonth()+1,s=a.getDate();this.date.year=t,this.date.month=e,this.date.day=s,this.year=t,this.month=e,this.time=t+"-"+e+"-"+s,this.getDataInfo()},mounted:function(){this.chartLine=echarts.init(document.getElementById("chartLine")),this.chartLine.setOption(this.chartLineOptions)}},o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("section",{staticClass:"cms-body cms-chart-box"},[e("div",{staticClass:"cms-list-header",staticStyle:{"padding-left":"0"}},[e("h5",{staticClass:"data-header-title"},[a._v("会员注册数("+a._s(a.time)+")")]),a._v(" "),e("div",{staticClass:"flex-date"},[e("label",{staticClass:"cms-label",staticStyle:{"margin-left":"0"}},[a._v("日期：")]),a._v(" "),e("el-radio-group",{staticStyle:{"margin-right":"10px"},attrs:{size:"small"},on:{change:a.query},model:{value:a.params.queryModel,callback:function(t){a.$set(a.params,"queryModel",t)},expression:"params.queryModel"}},[e("el-radio-button",{attrs:{label:"day"}},[a._v("今日")]),a._v(" "),e("el-radio-button",{attrs:{label:"yesterday"}},[a._v("昨日")]),a._v(" "),e("el-radio-button",{attrs:{label:"month"}},[a._v("本月")]),a._v(" "),e("el-radio-button",{attrs:{label:"year"}},[a._v("今年")]),a._v(" "),e("el-radio-button",{attrs:{label:"years"}},[a._v("年份")])],1),a._v(" "),e("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",editable:!1,type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:a.rangeTime},model:{value:a.dateArr,callback:function(t){a.dateArr=t},expression:"dateArr"}})],1)]),a._v(" "),e("ul",{staticClass:"clearfix"},[e("li",{staticClass:"data-item"},[a._m(0),a._v(" "),e("p",{staticClass:"data-num"},[a._v(a._s(a.dataInfo.regTotal))])])]),a._v(" "),e("div",{staticClass:"chart-style",attrs:{id:"chartLine"}}),a._v(" "),e("table",{staticClass:"data-table"},[a._m(1),a._v(" "),e("tr",[e("td",[a._v("合计")]),a._v(" "),e("td",[a._v(a._s(a.sum))]),a._v(" "),e("td")]),a._v(" "),a._l(a.dataInfo,function(t,s){return e("tr",{key:s},["day"===a.params.queryModel||"yesterday"===a.params.queryModel?e("td",[t[1]<10?e("span",[a._v("\n                                      0"+a._s(t[1])+":00-0"+a._s(t[1])+":59\n                                  ")]):e("span",[a._v("\n                                      "+a._s(t[1])+":00-"+a._s(t[1])+":59\n                                  ")])]):a._e(),a._v(" "),"month"===a.params.queryModel||"section"===a.params.queryModel?e("td",[a._v("                               \n                                  "+a._s(a.year)+"-"+a._s(a.month)+"-"+a._s(t[1])+" 00:00:00-23:59:59                                \n                              ")]):a._e(),a._v(" "),"year"===a.params.queryModel?e("td",[a._v("                               \n                                   "+a._s(a.year)+"-"+a._s(t[1])+"-01——"+a._s(a.year)+"-"+a._s(t[1])+"-"+a._s(a.getDay(a.year,t[1]))+"                                              \n                              ")]):a._e(),a._v(" "),"years"===a.params.queryModel?e("td",[a._v("                               \n                                   "+a._s(t[1])+"-01-01——"+a._s(t[1])+"-12-"+a._s(a.getDay(a.year,t[1]))+"                                              \n                              ")]):a._e(),a._v(" "),e("td",[a._v(a._s(t[0]))]),a._v(" "),e("td",[a._v(a._s((t[0]/a.totoal*100).toFixed(1))+"%")])])})],2)])},l=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("p",{staticClass:"data-title"},[a._v("注册数"),e("i",{staticClass:"iconfont icon-kongzhitai-zhushi"})])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("tr",[e("th",[a._v("时段")]),a._v(" "),e("th",[a._v("注册数")]),a._v(" "),e("th",[a._v("占比")])])}],d={render:o,staticRenderFns:l},c=d,h=e("Z0/y"),u=s,m=h(n,c,!1,u,"data-v-359ecf10",null);t.default=m.exports},zo7N:function(a,t,e){var s=e("9DhG");"string"==typeof s&&(s=[[a.i,s,""]]),s.locals&&(a.exports=s.locals);e("FIqI")("eefa00da",s,!0,{})}});