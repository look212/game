(window.webpackJsonp=window.webpackJsonp||[]).push([[15,6],{348:function(t,e,n){var r=n(352);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(83).default)("8d3fd1de",r,!0,{sourceMap:!1})},350:function(t,e,n){"use strict";n.r(e);n(49),n(32),n(41),n(17),n(50),n(36),n(64);var r=n(27),o=n(48);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var c=Object(o.b)({name:"GButton",props:{isBlock:{type:Boolean,default:!1},isGray:{type:Boolean,default:!1}},setup:function(t,e){var n=e.emit,c=Object(o.f)(!1),i={handleClick:function(t){n("click",t)},handleTouchStart:function(){c.value=!0},handleTouchEnd:function(){c.value=!1}};return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({isActiveAction:c},i)}}),i=c,u=(n(351),n(65)),s=Object(u.a)(i,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{class:[{"is-block":t.isBlock},{"is-gray":t.isGray},{"is-active-action":t.isActiveAction}],on:{click:t.handleClick,ontouchstart:t.handleTouchStart,ontouchend:t.handleTouchEnd}},[t._t("default")],2)}),[],!1,null,"6cb931d4",null);e.default=s.exports},351:function(t,e,n){"use strict";n(348)},352:function(t,e,n){var r=n(82)(!1);r.push([t.i,"button[data-v-6cb931d4]{height:40px;line-height:40px;background-color:#000;border-radius:20px;text-align:center;padding:0 20px;box-sizing:border-box;color:#fff;font-weight:700;font-size:1.2em;outline:none}button.is-block[data-v-6cb931d4]{display:block;width:100%;height:60px;line-height:60px;border-radius:30px}button.is-gray[data-v-6cb931d4]{background:#f0f0f0;color:#000}button.is-active-action[data-v-6cb931d4],button.is-active-action[data-v-6cb931d4]:active{background-color:#ddd}",""]),t.exports=r},365:function(t,e,n){var r=n(378);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(83).default)("dbdfe5aa",r,!0,{sourceMap:!1})},377:function(t,e,n){"use strict";n(365)},378:function(t,e,n){var r=n(82)(!1);r.push([t.i,"h1[data-v-40729ea4]{line-height:1.2em;word-break:keep-all}.menu[data-v-40729ea4]{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:10px}.contents[data-v-40729ea4]{padding:20px}.contents>div[data-v-40729ea4]{margin-top:50px}",""]),t.exports=r},390:function(t,e,n){"use strict";n.r(e);n(49),n(32),n(41),n(17),n(50),n(36),n(64);var r=n(27),o=n(14),a=(n(59),n(48)),c=n(229),i=n(350),u=n(100);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var l=Object(a.b)({name:"IndexPage",components:{GButton:i.default},setup:function(t,e){var n=e.root,i=Object(c.useGameStore)(),l=Object(a.a)((function(){return i.gameType})),p=Object(a.a)((function(){return i.mainInfo})),f=Object(a.k)(),d={setGameType:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("listen"!==t&&"look"!==t){e.next=3;break}return n.$swal("준비중 입니다."),e.abrupt("return",!1);case 3:return e.next=5,i.setGameType(t);case 5:return e.next=7,i.setMainInfo(t);case 7:case"end":return e.stop()}}),e)})))()},setGameStart:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.push("/detail/".concat(l.value));case 2:case"end":return t.stop()}}),t)})))()}};return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({gameType:l,mainInfo:p,mainInfos:u.d},d)}}),p=l,f=(n(377),n(65)),d=Object(f.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"contents"},[n("h1",[t._v(t._s(t.mainInfo.title))]),t._v(" "),null===t.gameType?n("div",{staticClass:"menu"},t._l(t.mainInfos,(function(e,r){return e.type?n("g-button",{key:"mainInfos_"+r,on:{click:function(n){return t.setGameType(e.type)}}},[t._v(t._s(e.title))]):t._e()})),1):t._e(),t._v(" "),n("div",{staticClass:"description-wrap",domProps:{innerHTML:t._s(t.mainInfo.description)}}),t._v(" "),null!==t.gameType?n("div",{staticClass:"btn-wrap"},[n("g-button",{attrs:{"is-gray":!0},on:{click:function(e){return t.setGameType(null)}}},[t._v("뒤로")]),t._v(" "),n("g-button",{on:{click:function(e){return t.setGameStart()}}},[t._v("시작하기")])],1):t._e()])])}),[],!1,null,"40729ea4",null);e.default=d.exports}}]);