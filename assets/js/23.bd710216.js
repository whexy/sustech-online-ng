(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{328:function(t,e,s){t.exports=s.p+"assets/img/busline2.789d29f5.png"},475:function(t,e,s){"use strict";s.r(e);s(74);var a={mounted:function(){function t(t){var e=new Date;e.setMinutes(e.getMinutes()-t);var s=e.getHours(),a=s<10?"0"+s:s,r=e.getMinutes();return a+":"+(r<10?"0"+r:r)}function e(e){for(var s=t(20),a=t(0),r=0,n=0,o=e.length;n<o;n++)e[n][0]<s?(e[n][2]="已到达",r=n):e[n][0]<a?e[n][2]="在途中":e[n][2]="未发车";return{row:r,now_table:e}}var s=[["07:00","",""],["07:20","",""],["07:40","",""],["08:00","",""],["08:20","",""],["08:40","",""],["09:00","",""],["09:15","",""],["09:30","",""],["09:45","",""],["10:00","",""],["10:15","",""],["10:30","",""],["10:45","",""],["11:00","",""],["11:15","",""],["11:30","",""],["11:45","",""],["12:00","",""],["12:20","",""],["12:40","",""],["13:00","",""],["13:20","",""],["13:40","",""],["14:00","",""],["14:20","",""],["14:40","",""],["15:00","",""],["15:20","",""],["15:40","",""],["16:00","",""],["16:20","",""],["16:40","",""],["17:00","",""],["17:20","",""],["17:40","",""],["18:00","",""],["18:15","",""],["18:30","",""],["18:45","",""],["19:00","",""],["19:20","",""],["19:40","",""],["20:00","",""],["20:20","",""],["20:40","",""],["21:00","",""],["21:20","",""],["21:40","",""],["22:00","",""]],a=[["07:20","",""],["07:40","",""],["08:00","",""],["08:20","",""],["08:40","",""],["09:00","",""],["09:15","",""],["09:30","",""],["09:45","",""],["10:00","",""],["10:15","",""],["10:30","",""],["10:45","",""],["11:00","",""],["11:15","",""],["11:30","",""],["11:45","",""],["12:00","",""],["12:20","",""],["12:40","",""],["13:00","",""],["13:20","",""],["13:40","",""],["14:00","",""],["14:20","",""],["14:40","",""],["15:00","",""],["15:20","",""],["15:40","",""],["16:00","",""],["16:20","",""],["16:40","",""],["17:00","",""],["17:20","",""],["17:40","",""],["18:00","",""],["18:15","",""],["18:30","",""],["18:45","",""],["19:00","",""],["19:20","",""],["19:40","",""],["20:00","",""],["20:20","",""],["20:40","",""],["21:00","",""],["21:20","",""],["21:40","",""],["22:00","",""],["22:20","",""]];function r(){if(!$.fn.DataTable.isDataTable("#hl2rb")){var t={scrollY:300,paging:!1,searching:!1,bFilter:!1,info:!1,columns:[{title:"发车时间"},{title:"平时/高峰",orderable:!1},{title:"状态",orderable:!1}],rowCallback:function(t,e,s){"已到达"==e[2]?($("td",t).css("background-color","#003f43"),$("td",t).css("color","#FFFFFF")):"未发车"==e[2]?($("td",t).css("background-color","#FFFFFF"),$("td",t).css("color","#2c3e50")):"在途中"==e[2]&&($("td",t).css("background-color","#ed6c00"),$("td",t).each((function(){$(this).html("<b>"+$(this).text()+"</b>")})))}},r=e(s);s=r.now_table;var n=r.row,o=$("#holi-bus-hl2rb").DataTable($.extend(!0,{data:s},t)),l=$(o.row(Math.min(n,s.length)).node()).offset().top-$(o.row(0).node()).offset().top;$("#bus-table-hl2rb .dataTables_scrollBody").scrollTop(l);r=e(a);a=r.now_table;var c=r.row,i=$("#holi-bus-rb2hl").DataTable($.extend(!0,{data:a},t));l=$(i.row(Math.min(c,a.length)).node()).offset().top-$(i.row(0).node()).offset().top;$("#bus-table-rb2hl .dataTables_scrollBody").scrollTop(l)}}document.addEventListener("DOMContentLoaded",r,!1),$(document).ready((function(){r()}))}},r=s(27),n=Object(r.a)(a,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"🚌校园巴士-节假日-2020年9月15日更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🚌校园巴士-节假日-2020年9月15日更新"}},[t._v("#")]),t._v(" 🚌校园巴士 - 节假日 (2020年9月15日更新)")]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"https://cdn.jsdelivr.net/gh/sustc/sustech-online-ng@master/docs/transport/busline2.png"}},[a("img",{attrs:{src:s(328),alt:""}})])]),t._v(" "),a("h2",{attrs:{id:"欣园-→-科研楼-共50班"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#欣园-→-科研楼-共50班"}},[t._v("#")]),t._v(" 欣园 → 科研楼（共50班）")]),t._v(" "),a("ClientOnly",[a("div",{attrs:{id:"bus-table-hl2rb"}},[a("table",{staticClass:"dataTable",attrs:{id:"holi-bus-hl2rb"}})])]),t._v(" "),a("h2",{attrs:{id:"科研楼-→-欣园-共50班"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#科研楼-→-欣园-共50班"}},[t._v("#")]),t._v(" 科研楼 → 欣园（共50班）")]),t._v(" "),a("ClientOnly",[a("div",{attrs:{id:"bus-table-rb2hl"}},[a("table",{staticClass:"dataTable",attrs:{id:"holi-bus-rb2hl"}})])]),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("ul",[a("li",[t._v("2020年9月15日 "),a("code",[t._v("校园服务办公室 <ocs@sustech.edu.cn>")]),t._v(" 邮件《【工作通知】关于调整校园巴士运行时刻的通知 Notice on Adjustment of Campus Bus Schedule and Routes【2020】38号》\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://cdn.jsdelivr.net/gh/sustc/sustech-online-ng@master/docs/transport/Campus_Bus_Schedule_2020_09_CN.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载链接-中文"),a("OutboundLink")],1),t._v("（右键 / 长按保存）")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://cdn.jsdelivr.net/gh/sustc/sustech-online-ng@master/docs/transport/Campus_Bus_Schedule_2020_09_EN.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download-English"),a("OutboundLink")],1),t._v("（Right click / long press to save）")])])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);