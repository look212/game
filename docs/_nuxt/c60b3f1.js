(window.webpackJsonp=window.webpackJsonp||[]).push([[0,3,4],{315:function(e,t,n){var r=n(318);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(80).default)("1974e75b",r,!0,{sourceMap:!1})},316:function(e,t,n){var r=n(321);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(80).default)("a3f7e504",r,!0,{sourceMap:!1})},317:function(e,t,n){"use strict";n(315)},318:function(e,t,n){var r=n(79)(!1);r.push([e.i,"button[data-v-6c6a364a]{height:40px;line-height:40px;background-color:#000;border-radius:20px;text-align:center;padding:0 20px;box-sizing:border-box;color:#fff;font-weight:700;font-size:1.2em;outline:none}button.is-block[data-v-6c6a364a]{display:block;width:100%;height:60px;line-height:60px;border-radius:30px}button.is-gray[data-v-6c6a364a]{background:#f0f0f0;color:#000}",""]),e.exports=r},319:function(e,t,n){"use strict";n.r(t);n(53),n(32),n(43),n(20),n(54),n(38),n(78);var r=n(33),i=n(44);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var a=Object(i.b)({name:"GButton",props:{isBlock:{type:Boolean,default:!1},isGray:{type:Boolean,default:!1}},setup:function(e,t){var n=t.emit;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},{handleClick:function(e){n("click",e)}})}}),c=a,u=(n(317),n(62)),s=Object(u.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{class:[{"is-block":e.isBlock},{"is-gray":e.isGray}],on:{click:e.handleClick}},[e._t("default")],2)}),[],!1,null,"6c6a364a",null);t.default=s.exports},320:function(e,t,n){"use strict";n(316)},321:function(e,t,n){var r=n(79)(!1);r.push([e.i,".timer-wrap[data-v-5db61e62]{display:flex;height:100px;align-items:center;justify-content:center}.timer-wrap p[data-v-5db61e62]{font-size:5em;color:#fff}.timer-wrap p.is-active[data-v-5db61e62]{color:#ddd}",""]),e.exports=r},322:function(e,t,n){"use strict";n.r(t);n(53),n(32),n(43),n(20),n(54),n(38),n(78);var r=n(33),i=(n(63),n(44)),o=n(215);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=Object(i.b)({name:"GTimer",setup:function(){var e=Object(i.e)({initialCount:0,isOver:!1}),t=Object(o.useGameStore)(),n=Object(i.a)((function(){return t.isTimerStart})),r=Object(i.a)((function(){return t.countDown}));Object(i.d)((function(){e.initialCount=r.value})),Object(i.k)((function(){return r.value}),(function(t){e.initialCount=r.value}));var a={countDown:function(n){e.initialCount>0?(t.setStartTimer(!0),setTimeout((function(){e.initialCount-=1,a.countDown(n)}),n)):(t.setStartTimer(!1),e.initialCount=r.value)}};return c(c({isTimerStart:n},Object(i.h)(e)),a)}}),s=(n(320),n(62)),l=Object(s.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isTimerStart?n("div",{staticClass:"timer-wrap"},[n("p",{class:{"is-active":e.isTimerStart}},[e._v("\n    "+e._s(e.initialCount)+"\n  ")])]):e._e()}),[],!1,null,"5db61e62",null);t.default=l.exports},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(33),i=n(14),o=(n(64),n(45),n(29),n(161),n(53),n(32),n(43),n(20),n(54),n(38),n(78),n(44)),a=n(96),c=n(215),u=n(162);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(){var e=Object(c.useGameStore)(),t=Object(o.a)((function(){return e.gameType})),n=Object(o.a)((function(){return e.mainInfo})),r=Object(o.a)((function(){return e.subject})),s=Object(o.a)((function(){return e.countSpeed})),p=Object(o.a)((function(){return e.countDown})),f=Object(o.a)((function(){return e.questionCount})),b=Object(o.a)((function(){return e.isGameStart})),m=Object(o.a)((function(){return e.timeLimit})),d=Object(o.a)((function(){return e.liarMode})),O=Object(o.a)((function(){return e.gameList})),v=Object(o.a)((function(){return e.isTimerStart})),j=Object(o.i)(),g=Object(o.f)(),w=Object(o.f)(),x=Object(o.e)({speed:0,questionCount:f,gameType:t,mainInfo:n,countSpeed:s,countDown:p,isGameStart:b,subject:r,timeLimit:m,liarMode:d,gameList:O,isTimerStart:v,activeIndex:0,countSpeedList:a.b,questionNumberList:a.e,timeLimitList:a.f,liarModeList:a.c,countDownList:a.a,swiperOptions:{allowTouchMove:!1,navigation:{nextEl:".swiper-button-next"},effect:"fade"}});Object(o.d)((function(){var t,n=null===(t=j.value.name)||void 0===t?void 0:t.split("-")[1];n&&(e.setGameType(n),e.setMainInfo(n))}));var y={setCountSpeed:function(t){return Object(i.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!u.a.isBusy()){n.next=4;break}return n.abrupt("return");case 4:u.a.setGuard(t*p.value);case 5:return x.speed=t,n.next=8,g.value.countDown(t);case 8:return n.next=10,e.setCountSpeed(t);case 10:case"end":return n.stop()}}),n)})))()},setCountDown:function(t){return Object(i.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.setCountDown(t);case 2:case"end":return n.stop()}}),n)})))()},setSubject:function(t,n){return Object(i.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.setSubject({value:t,label:n});case 2:case"end":return r.stop()}}),r)})))()},setQuestionCount:function(t){return Object(i.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.setQuestionCount(t);case 2:case"end":return n.stop()}}),n)})))()},setTimeLimit:function(t){return Object(i.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.setTimeLimit(t);case 2:case"end":return n.stop()}}),n)})))()},setLiarMode:function(t){return Object(i.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.setLiarMode(t);case 2:case"end":return n.stop()}}),n)})))()},nextSlide:function(){return Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v.value){e.next=6;break}return e.next=3,w.value.$swiper.slideNext();case 3:return x.activeIndex=w.value.$swiper.activeIndex,e.next=6,y.setCountSpeed(s.value);case 6:case"end":return e.stop()}}),e)})))()}};return l(l({timer:g,game:e,swiper:w},Object(o.h)(x)),y)}},329:function(e,t,n){var r=n(339);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(80).default)("334cb1c9",r,!0,{sourceMap:!1})},338:function(e,t,n){"use strict";n(329)},339:function(e,t,n){var r=n(79)(!1);r.push([e.i,".info p[data-v-526e5237]{line-height:1.2em;color:#999}.btn-wrap[data-v-526e5237]{position:fixed;bottom:20px;right:0;padding:20px 20px calc(env(safe-area-inset-bottom) + 20px);z-index:1;display:flex}.btn-wrap button+button[data-v-526e5237]{margin-left:10px}",""]),e.exports=r},344:function(e,t,n){"use strict";n.r(t);n(53),n(32),n(43),n(20),n(54),n(38),n(78);var r=n(33),i=(n(63),n(44)),o=n(323),a=n(319),c=n(322);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=Object(i.b)({name:"talk",components:{GButton:a.default,GTimer:c.default},setup:function(e,t){var n=t.root,r=Object(o.a)(),a=r.swiper,c=r.timer,u=r.game,l=r.gameType,p=r.subject,f=r.countSpeed,b=r.countDown,m=r.questionCount,d=r.gameList,O=r.swiperOptions,v=r.isTimerStart,j=r.activeIndex,g=r.nextSlide,w=r.setCountSpeed,x=r.setCountDown,y=Object(i.e)({});Object(i.d)((function(){setTimeout((function(){w(f.value)}))}));var h={setTalkStart:function(){v.value||n.$swal({showCancelButton:!0,customClass:{container:"modal_container is_cancelBtn"},confirmButtonText:"예",title:"Next Game Start 👉"}).then((function(e){e.isConfirmed&&(u.setTalkStart({subject:p.value.value,questionCount:m.value}),a.value.$swiper.slideTo(0),w(f.value),x(b.value))}))},goHome:function(){v.value||n.$swal({showCancelButton:!0,customClass:{container:"modal_container is_cancelBtn"},confirmButtonText:"예",title:"처음으로 이동하시겠습니까?"}).then((function(e){e.isConfirmed&&(window.location.href="/game")}))}};return s(s({swiper:a,gameType:l,subject:p,countSpeed:f,countDown:b,questionCount:m,gameList:d,swiperOptions:O,isTimerStart:v,activeIndex:j,timer:c,setCountSpeed:w,nextSlide:g,setCountDown:x},h),Object(i.h)(y))}}),p=(n(338),n(62)),f=Object(p.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.gameList.length>1?n("div",[n("div",{staticClass:"info"},[n("p",[e._v(e._s(e.subject.label)+" ("+e._s(e.activeIndex+1)+"/"+e._s(e.questionCount)+")")])]),e._v(" "),n("div",{staticClass:"question-wrap"},[n("g-timer",{ref:"timer",staticClass:"timer"}),e._v(" "),n("swiper",{ref:"swiper",staticClass:"custom",attrs:{options:e.swiperOptions}},[e._l(e.gameList,(function(t,r){return n("swiper-slide",{key:"game_"+r},[e.isTimerStart?n("p",[e._v(e._s("proverb"===e.subject.value?t.masking:t.value.slice(0,2)))]):e._e()])})),e._v(" "),n("div",{staticClass:"next-wrap"},[n("g-button",{on:{click:e.nextSlide}},[e._v("다음")])],1)],2),e._v(" "),e.gameList.length===e.activeIndex+1?n("div",{staticClass:"btn-wrap"},[n("g-button",{attrs:{"is-gray":!0},on:{click:e.goHome}},[e._v("처음으로")]),e._v(" "),n("g-button",{on:{click:e.setTalkStart}},[e._v("이어서 게임 시작하기")])],1):e._e()],1)]):e._e()}),[],!1,null,"526e5237",null);t.default=f.exports}}]);