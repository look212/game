(window.webpackJsonp=window.webpackJsonp||[]).push([[23,10],{350:function(t,e,n){var r=n(356);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(84).default)("0e097b4c",r,!0,{sourceMap:!1})},351:function(t,e,n){"use strict";n.r(e);n(49),n(32),n(37),n(16),n(50),n(33),n(68);var r=n(28),o=n(48);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var a=Object(o.b)({name:"GButton",props:{isBlock:{type:Boolean,default:!1},isGray:{type:Boolean,default:!1}},setup:function(t,e){var n=e.emit,a=Object(o.f)(!1),i={handleClick:function(t){n("click",t)},handleTouchStart:function(){a.value=!0},handleTouchEnd:function(){a.value=!1}};return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({isActiveAction:a},i)}}),i=a,u=(n(355),n(69)),s=Object(u.a)(i,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{class:[{"is-block":t.isBlock},{"is-gray":t.isGray}],on:{click:t.handleClick,ontouchstart:t.handleTouchStart,ontouchend:t.handleTouchEnd}},[t._t("default")],2)}),[],!1,null,"80c3c3ba",null);e.default=s.exports},355:function(t,e,n){"use strict";n(350)},356:function(t,e,n){var r=n(83)(!1);r.push([t.i,"button[data-v-80c3c3ba]{height:40px;line-height:40px;background-color:#000;border-radius:20px;text-align:center;padding:0 20px;box-sizing:border-box;color:#fff;font-weight:700;font-size:1.2em;outline:none;border:1px solid transparent}button.is-block[data-v-80c3c3ba]{display:block;width:100%;height:60px;line-height:60px;border-radius:30px}button.is-gray[data-v-80c3c3ba]{background:#f0f0f0;color:#000}button.is-active[data-v-80c3c3ba]{background:#fff;border-color:#000}",""]),t.exports=r},378:function(t,e,n){var r=n(409);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(84).default)("6b99b593",r,!0,{sourceMap:!1})},408:function(t,e,n){"use strict";n(378)},409:function(t,e,n){var r=n(83)(!1);r.push([t.i,"h1[data-v-69325c86]{line-height:1.2em;word-break:keep-all}.menu[data-v-69325c86]{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:10px}.contents[data-v-69325c86]{padding:20px}.contents>div[data-v-69325c86]{margin-top:50px}",""]),t.exports=r},429:function(t,e,n){"use strict";n.r(e);n(49),n(32),n(37),n(16),n(50),n(33),n(68);var r=n(28),o=n(14),c=(n(59),n(48)),a=n(231),i=n(351),u=n(101);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var l=Object(c.b)({name:"IndexPage",components:{GButton:i.default},setup:function(t,e){e.root;var n=Object(a.useGameStore)(),i=Object(c.a)((function(){return n.gameType})),l=Object(c.a)((function(){return n.mainInfo})),p=Object(c.k)(),f={setGameType:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setGameType(t);case 2:return e.next=4,n.setMainInfo(t);case 4:case"end":return e.stop()}}),e)})))()},setGameStart:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.push("/detail/".concat(i.value));case 2:case"end":return t.stop()}}),t)})))()}};return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({gameType:i,mainInfo:l,mainInfos:u.d},f)}}),p=l,f=(n(408),n(69)),b=Object(f.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"contents"},[n("h1",[t._v(t._s(t.mainInfo.title))]),t._v(" "),null===t.gameType?n("div",{staticClass:"menu"},t._l(t.mainInfos,(function(e,r){return e.type?n("g-button",{key:"mainInfos_"+r,on:{click:function(n){return t.setGameType(e.type)}}},[t._v(t._s(e.title))]):t._e()})),1):t._e(),t._v(" "),n("div",{staticClass:"description-wrap",domProps:{innerHTML:t._s(t.mainInfo.description)}}),t._v(" "),null!==t.gameType?n("div",{staticClass:"btn-wrap"},[n("g-button",{attrs:{"is-gray":!0},on:{click:function(e){return t.setGameType(null)}}},[t._v("뒤로")]),t._v(" "),n("g-button",{on:{click:function(e){return t.setGameStart()}}},[t._v("시작하기")])],1):t._e()])])}),[],!1,null,"69325c86",null);e.default=b.exports}}]);