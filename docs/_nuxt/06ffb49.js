(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3],{314:function(e,t,r){var n=r(317);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(80).default)("1974e75b",n,!0,{sourceMap:!1})},315:function(e,t,r){var n=r(320);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(80).default)("1dff23fa",n,!0,{sourceMap:!1})},316:function(e,t,r){"use strict";r(314)},317:function(e,t,r){var n=r(79)(!1);n.push([e.i,"button[data-v-6c6a364a]{height:40px;line-height:40px;background-color:#000;border-radius:20px;text-align:center;padding:0 20px;box-sizing:border-box;color:#fff;font-weight:700;font-size:1.2em;outline:none}button.is-block[data-v-6c6a364a]{display:block;width:100%;height:60px;line-height:60px;border-radius:30px}button.is-gray[data-v-6c6a364a]{background:#f0f0f0;color:#000}",""]),e.exports=n},318:function(e,t,r){"use strict";r.r(t);r(53),r(32),r(43),r(20),r(54),r(38),r(78);var n=r(33),i=r(44);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var a=Object(i.b)({name:"GButton",props:{isBlock:{type:Boolean,default:!1},isGray:{type:Boolean,default:!1}},setup:function(e,t){var r=t.emit;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},{handleClick:function(e){r("click",e)}})}}),c=a,s=(r(316),r(62)),u=Object(s.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{class:[{"is-block":e.isBlock},{"is-gray":e.isGray}],on:{click:e.handleClick}},[e._t("default")],2)}),[],!1,null,"6c6a364a",null);t.default=u.exports},319:function(e,t,r){"use strict";r(315)},320:function(e,t,r){var n=r(79)(!1);n.push([e.i,".timer-wrap[data-v-08cf1c2d]{display:flex;height:100px;align-items:center;justify-content:center}.timer-wrap p[data-v-08cf1c2d]{font-size:5em;color:#fff}.timer-wrap p.is-active[data-v-08cf1c2d]{color:#ddd}",""]),e.exports=n},321:function(e,t,r){"use strict";r.r(t);var n=r(33),i=(r(215),r(63),r(53),r(32),r(43),r(20),r(54),r(38),r(78),r(44)),o=r(214);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=Object(i.b)({name:"GTimer",props:{time:{type:Number,default:3},delay:{type:Number,default:1e3}},setup:function(e,t){t.emit;var r=Object(i.e)({timer:0,isOver:!1}),n=Object(o.useGameStore)(),a=Object(i.a)((function(){return n.isTimerStart}));Object(i.d)((function(){r.timer=e.time}));var s={countDown:function(t){r.timer>0?(n.setStartTimer(!0),setTimeout((function(){r.timer-=1,s.countDown(t)}),t)):(n.setStartTimer(!1),r.timer=e.time)}};return c(c({isTimerStart:a},Object(i.h)(r)),s)}}),u=(r(319),r(62)),l=Object(u.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isTimerStart?r("div",{staticClass:"timer-wrap"},[r("p",{class:{"is-active":e.isTimerStart}},[e._v("\n    "+e._s(e.timer)+"\n  ")])]):e._e()}),[],!1,null,"08cf1c2d",null);t.default=l.exports},322:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(33),i=r(14),o=(r(64),r(45),r(29),r(161),r(63),r(53),r(32),r(43),r(20),r(54),r(38),r(78),r(44)),a=r(96),c=r(214);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(){var e=Object(c.useGameStore)(),t=Object(o.a)((function(){return e.gameType})),r=Object(o.a)((function(){return e.mainInfo})),n=Object(o.a)((function(){return e.subject})),s=Object(o.a)((function(){return e.countSpeed})),l=Object(o.a)((function(){return e.questionCount})),f=Object(o.a)((function(){return e.isGameStart})),p=Object(o.a)((function(){return e.timeLimit})),b=Object(o.a)((function(){return e.liarMode})),m=Object(o.a)((function(){return e.gameList})),d=Object(o.a)((function(){return e.isTimerStart})),O=Object(o.i)(),v=Object(o.f)(),j=Object(o.f)(),g=Object(o.e)({delay:0,questionCount:l,gameType:t,mainInfo:r,countSpeed:s,isGameStart:f,subject:n,timeLimit:p,liarMode:b,gameList:m,isTimerStart:d,activeIndex:0,delayList:a.a,questionNumberList:a.d,timeLimitList:a.e,liarModeList:a.b,swiperOptions:{allowTouchMove:!1,navigation:{nextEl:".swiper-button-next"},effect:"fade"}});Object(o.d)((function(){var t,r=null===(t=O.value.name)||void 0===t?void 0:t.split("-")[1];r&&(e.setGameType(r),e.setMainInfo(r))}));var y={setDelay:function(t){g.delay=t,setTimeout((function(){v.value.countDown(t)})),e.setCountSpeed(t)},setSubject:function(t,r){e.setSubject({value:t,label:r})},setQuestionCount:function(t){e.setQuestionCount(t)},setTimeLimit:function(t){e.setTimeLimit(t)},setLiarMode:function(t){e.setLiarMode(t)},slideChange:function(){return Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g.activeIndex=j.value.$swiper.activeIndex,e.next=3,y.setDelay(s.value);case 3:case"end":return e.stop()}}),e)})))()}};return u(u({timer:v,game:e,swiper:j},Object(o.h)(g)),y)}},325:function(e,t,r){var n=r(327);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(80).default)("2184d065",n,!0,{sourceMap:!1})},326:function(e,t,r){"use strict";r(325)},327:function(e,t,r){var n=r(79)(!1);n.push([e.i,".info p[data-v-79275612]{line-height:1.2em;color:#999}.btn-wrap[data-v-79275612]{position:fixed;bottom:env(safe-area-inset-bottom);right:0;z-index:1;display:flex}.btn-wrap button+button[data-v-79275612]{margin-left:10px}",""]),e.exports=n},333:function(e,t,r){"use strict";r.r(t);r(53),r(32),r(43),r(20),r(54),r(38),r(78);var n=r(33),i=r(14),o=(r(64),r(63),r(44)),a=r(322),c=r(318),s=r(321);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=Object(o.b)({name:"talk",components:{GButton:c.default,GTimer:s.default},setup:function(e,t){var r=t.root,n=Object(a.a)(),c=n.swiper,s=n.timer,u=n.game,f=n.gameType,p=n.subject,b=n.countSpeed,m=n.questionCount,d=n.gameList,O=n.swiperOptions,v=n.isTimerStart,j=n.activeIndex,g=n.slideChange,y=n.setDelay,w=Object(o.e)({});Object(o.d)((function(){setTimeout((function(){y(b.value)}))}));var h={setGameStart:function(){r.$swal({showCancelButton:!0,customClass:{container:"modal_container is_cancelBtn"},confirmButtonText:"예",title:"Next Game Start 👉"}).then(function(){var e=Object(i.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.isConfirmed&&(u.setGameStart({subject:p.value.value,questionCount:m.value}),c.value.$swiper.slideTo(0),y(b.value));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},goHome:function(){r.$swal({showCancelButton:!0,customClass:{container:"modal_container is_cancelBtn"},confirmButtonText:"예",title:"처음으로 이동하시겠습니까?"}).then(function(){var e=Object(i.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.isConfirmed&&(window.location.href="/game");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}};return l(l({swiper:c,gameType:f,subject:p,countSpeed:b,questionCount:m,gameList:d,swiperOptions:O,isTimerStart:v,activeIndex:j,timer:s,setDelay:y,slideChange:g},h),Object(o.h)(w))}}),p=f,b=(r(326),r(62)),m=Object(b.a)(p,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.gameList.length>1?r("div",[r("div",{staticClass:"info"},[r("p",[e._v(e._s(e.subject.label)+" ("+e._s(e.activeIndex+1)+"/"+e._s(e.questionCount)+")")])]),e._v(" "),r("div",{staticClass:"question-wrap"},[r("g-timer",{ref:"timer",staticClass:"timer"}),e._v(" "),r("swiper",{ref:"swiper",staticClass:"custom",attrs:{options:e.swiperOptions},on:{slideChange:e.slideChange}},e._l(e.gameList,(function(t,n){return r("swiper-slide",{key:"game_"+n},[e.isTimerStart?r("p",[e._v(e._s("proverb"===e.subject.value?t.masking:t.value.slice(0,2)))]):e._e(),e._v(" "),r("div",{staticClass:"swiper-button-next"},[e._v("다음")])])})),1),e._v(" "),e.gameList.length===e.activeIndex+1?r("div",{staticClass:"btn-wrap"},[r("g-button",{on:{click:e.setGameStart}},[e._v("이어서 게임 시작하기")]),e._v(" "),r("g-button",{attrs:{"is-gray":!0},on:{click:e.goHome}},[e._v("처음으로")])],1):e._e()],1)]):e._e()}),[],!1,null,"79275612",null);t.default=m.exports}}]);