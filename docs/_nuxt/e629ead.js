(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,3,4],{314:function(t,e,n){var r=n(317);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(80).default)("1974e75b",r,!0,{sourceMap:!1})},315:function(t,e,n){var r=n(320);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(80).default)("1dff23fa",r,!0,{sourceMap:!1})},316:function(t,e,n){"use strict";n(314)},317:function(t,e,n){var r=n(79)(!1);r.push([t.i,"button[data-v-6c6a364a]{height:40px;line-height:40px;background-color:#000;border-radius:20px;text-align:center;padding:0 20px;box-sizing:border-box;color:#fff;font-weight:700;font-size:1.2em;outline:none}button.is-block[data-v-6c6a364a]{display:block;width:100%;height:60px;line-height:60px;border-radius:30px}button.is-gray[data-v-6c6a364a]{background:#f0f0f0;color:#000}",""]),t.exports=r},318:function(t,e,n){"use strict";n.r(e);n(53),n(32),n(43),n(20),n(54),n(38),n(78);var r=n(33),a=n(44);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var o=Object(a.b)({name:"GButton",props:{isBlock:{type:Boolean,default:!1},isGray:{type:Boolean,default:!1}},setup:function(t,e){var n=e.emit;return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},{handleClick:function(t){n("click",t)}})}}),s=o,c=(n(316),n(62)),u=Object(c.a)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{class:[{"is-block":t.isBlock},{"is-gray":t.isGray}],on:{click:t.handleClick}},[t._t("default")],2)}),[],!1,null,"6c6a364a",null);e.default=u.exports},319:function(t,e,n){"use strict";n(315)},320:function(t,e,n){var r=n(79)(!1);r.push([t.i,".timer-wrap[data-v-08cf1c2d]{display:flex;height:100px;align-items:center;justify-content:center}.timer-wrap p[data-v-08cf1c2d]{font-size:5em;color:#fff}.timer-wrap p.is-active[data-v-08cf1c2d]{color:#ddd}",""]),t.exports=r},321:function(t,e,n){"use strict";n.r(e);var r=n(33),a=(n(215),n(63),n(53),n(32),n(43),n(20),n(54),n(38),n(78),n(44)),i=n(214);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c=Object(a.b)({name:"GTimer",props:{time:{type:Number,default:3},delay:{type:Number,default:1e3}},setup:function(t,e){e.emit;var n=Object(a.e)({timer:0,isOver:!1}),r=Object(i.useGameStore)(),o=Object(a.a)((function(){return r.isTimerStart}));Object(a.d)((function(){n.timer=t.time}));var c={countDown:function(e){n.timer>0?(r.setStartTimer(!0),setTimeout((function(){n.timer-=1,c.countDown(e)}),e)):(r.setStartTimer(!1),n.timer=t.time)}};return s(s({isTimerStart:o},Object(a.h)(n)),c)}}),u=(n(319),n(62)),l=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isTimerStart?n("div",{staticClass:"timer-wrap"},[n("p",{class:{"is-active":t.isTimerStart}},[t._v("\n    "+t._s(t.timer)+"\n  ")])]):t._e()}),[],!1,null,"08cf1c2d",null);e.default=l.exports},322:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(33),a=n(14),i=(n(64),n(45),n(29),n(161),n(63),n(53),n(32),n(43),n(20),n(54),n(38),n(78),n(44)),o=n(96),s=n(214);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(){var t=Object(s.useGameStore)(),e=Object(i.a)((function(){return t.gameType})),n=Object(i.a)((function(){return t.mainInfo})),r=Object(i.a)((function(){return t.subject})),c=Object(i.a)((function(){return t.countSpeed})),l=Object(i.a)((function(){return t.questionCount})),f=Object(i.a)((function(){return t.isGameStart})),p=Object(i.a)((function(){return t.timeLimit})),b=Object(i.a)((function(){return t.liarMode})),d=Object(i.a)((function(){return t.gameList})),m=Object(i.a)((function(){return t.isTimerStart})),v=Object(i.i)(),g=Object(i.f)(),O=Object(i.f)(),j=Object(i.e)({delay:0,questionCount:l,gameType:e,mainInfo:n,countSpeed:c,isGameStart:f,subject:r,timeLimit:p,liarMode:b,gameList:d,isTimerStart:m,activeIndex:0,delayList:o.a,questionNumberList:o.d,timeLimitList:o.e,liarModeList:o.b,swiperOptions:{allowTouchMove:!1,navigation:{nextEl:".swiper-button-next"},effect:"fade"}});Object(i.d)((function(){var e,n=null===(e=v.value.name)||void 0===e?void 0:e.split("-")[1];n&&(t.setGameType(n),t.setMainInfo(n))}));var y={setDelay:function(e){j.delay=e,setTimeout((function(){g.value.countDown(e)})),t.setCountSpeed(e)},setSubject:function(e,n){t.setSubject({value:e,label:n})},setQuestionCount:function(e){t.setQuestionCount(e)},setTimeLimit:function(e){t.setTimeLimit(e)},setLiarMode:function(e){t.setLiarMode(e)},slideChange:function(t){j.activeIndex=O.value.$swiper.activeIndex},nextSlide:function(){return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.value.$swiper.slideNext();case 2:return t.next=4,y.setDelay(c.value);case 4:case"end":return t.stop()}}),t)})))()}};return u(u({timer:g,game:t,swiper:O},Object(i.h)(j)),y)}},323:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},324:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik02LjEzOSAxNUgyNU0xMy43NzggNi4yNSA1IDE1LjAyOGw4Ljc3OCA4Ljc3OCIvPgogICAgPC9nPgo8L3N2Zz4K"},325:function(t,e,n){var r=n(327);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(80).default)("ba3004d4",r,!0,{sourceMap:!1})},326:function(t,e,n){"use strict";n(325)},327:function(t,e,n){var r=n(79)(!1);r.push([t.i,".info p[data-v-3a118b68]{line-height:1.2em;color:#999}.btn-wrap[data-v-3a118b68]{position:absolute;bottom:0;right:0;padding-bottom:env(safe-area-inset-bottom);z-index:1;display:flex}.btn-wrap button+button[data-v-3a118b68]{margin-left:10px}",""]),t.exports=r},331:function(t,e,n){var r=n(341);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(80).default)("54e2062b",r,!0,{sourceMap:!1})},333:function(t,e,n){"use strict";n.r(e);n(53),n(32),n(43),n(20),n(54),n(38),n(78);var r=n(33),a=n(14),i=(n(64),n(63),n(44)),o=n(322),s=n(318),c=n(321);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f=Object(i.b)({name:"talk",components:{GButton:s.default,GTimer:c.default},setup:function(t,e){var n=e.root,r=Object(o.a)(),s=r.swiper,c=r.timer,u=r.game,f=r.gameType,p=r.subject,b=r.countSpeed,d=r.questionCount,m=r.gameList,v=r.swiperOptions,g=r.isTimerStart,O=r.activeIndex,j=r.slideChange,y=r.setDelay,h=r.nextSlide,w=Object(i.e)({});Object(i.d)((function(){setTimeout((function(){y(b.value)}))}));var _={setGameStart:function(){n.$swal({showCancelButton:!0,customClass:{container:"modal_container is_cancelBtn"},confirmButtonText:"예",title:"Next Game Start 👉"}).then(function(){var t=Object(a.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.isConfirmed&&(u.setGameStart({subject:p.value.value,questionCount:d.value}),s.value.$swiper.slideTo(0));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},goHome:function(){n.$swal({showCancelButton:!0,customClass:{container:"modal_container is_cancelBtn"},confirmButtonText:"예",title:"Next Game Start 👉"}).then(function(){var t=Object(a.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.isConfirmed&&(window.location.href="/game");case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}};return l(l({swiper:s,gameType:f,subject:p,countSpeed:b,questionCount:d,gameList:m,swiperOptions:v,isTimerStart:g,activeIndex:O,timer:c,setDelay:y,slideChange:j,nextSlide:h},_),Object(i.h)(w))}}),p=f,b=(n(326),n(62)),d=Object(b.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"info"},[n("p",[t._v(t._s(t.subject.label)+" ("+t._s(t.activeIndex+1)+"/"+t._s(t.questionCount)+")")])]),t._v(" "),n("div",{staticClass:"question-wrap"},[n("g-timer",{ref:"timer",staticClass:"timer"}),t._v(" "),n("swiper",{ref:"swiper",staticClass:"custom",attrs:{options:t.swiperOptions},on:{slideChange:t.slideChange}},t._l(t.gameList,(function(e,r){return n("swiper-slide",{key:"game_"+r},[t.isTimerStart?n("p",[t._v(t._s("proverb"===t.subject.value?e.masking:e.value.slice(0,2)))]):t._e(),t._v(" "),t.gameList.length!==t.activeIndex+1?n("div",{staticClass:"btn-wrap"},[n("g-button",{on:{click:t.nextSlide}},[t._v("다음")])],1):t._e()])})),1),t._v(" "),t.gameList.length===t.activeIndex+1?n("div",{staticClass:"btn-wrap"},[n("g-button",{on:{click:t.setGameStart}},[t._v("이어서 게임 시작하기")]),t._v(" "),n("g-button",{attrs:{"is-gray":!0},on:{click:t.goHome}},[t._v("처음으로")])],1):t._e()],1)])}),[],!1,null,"3a118b68",null);e.default=d.exports},340:function(t,e,n){"use strict";n(331)},341:function(t,e,n){var r=n(79),a=n(323),i=n(324),o=r(!1),s=a(i);o.push([t.i,"header[data-v-3943163a]{text-align:center;background-color:#fff;position:relative;padding:10px}header h1[data-v-3943163a]{font-size:1.5em;font-weight:400}header .btn__home[data-v-3943163a]{position:absolute;top:50%;left:10px;transform:translateY(-50%);width:38px;height:38px;background:url("+s+") 50% no-repeat;text-indent:-9999em;overflow:hidden}.contents[data-v-3943163a]{padding:20px}.contents h2[data-v-3943163a]{font-weight:400;font-size:1.2em;margin-bottom:20px}.contents h2 span[data-v-3943163a]{display:inline-block;color:#aaa;font-size:.8em}.contents .btn-wrap[data-v-3943163a]{margin:0 0 0 -10px}.contents button[data-v-3943163a]{margin:0 0 10px 10px}.footer-btn[data-v-3943163a]{position:fixed;width:100%;bottom:env(safe-area-inset-bottom);left:0;padding:20px}",""]),t.exports=o},347:function(t,e,n){"use strict";n.r(e);n(53),n(32),n(43),n(20),n(54),n(38),n(78);var r=n(33),a=n(44),i=n(321),o=n(318),s=n(322),c=n(333);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var l=Object(a.b)({name:"Talk",components:{GTimer:i.default,GButton:o.default,talk:c.default},setup:function(t,e){var n=e.root,a=Object(s.a)(),i=a.timer,o=a.game,c=a.delay,l=a.questionCount,f=a.gameType,p=a.mainInfo,b=a.countSpeed,d=a.isGameStart,m=a.subject,v=a.delayList,g=a.questionNumberList;return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({setDelay:a.setDelay,setSubject:a.setSubject,setQuestionCount:a.setQuestionCount,timer:i,delay:c,questionCount:l,gameType:f,mainInfo:p,countSpeed:b,isGameStart:d,subject:m,delayList:v,questionNumberList:g},{setGameStart:function(){return m.value.value?c.value?l.value?void n.$swal("Game Start 😆").then((function(){o.setGameStart({subject:m.value.value,questionCount:l.value})})):(n.$swal("문제 갯수를 선택해주세요"),!1):(n.$swal("속도를 선택해주세요"),!1):(n.$swal("주제를 선택해주세요"),!1)}})}}),f=l,p=(n(340),n(62)),b=Object(p.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",[n("a",{staticClass:"btn__home",attrs:{href:"/game"}},[t._v("home")]),t._v(" "),n("h1",[t._v(t._s(t.mainInfo.title))])]),t._v(" "),t.isGameStart?[n("div",{staticClass:"contents"},[n("talk")],1)]:[n("div",{staticClass:"contents"},[n("h2",[t._v("주제 "),t.subject.label?n("span",[t._v("("+t._s(t.subject.label)+")")]):t._e()]),t._v(" "),n("div",{staticClass:"btn-wrap"},t._l(t.mainInfo.subject,(function(e,r){return n("g-button",{key:"subject_"+r,attrs:{"is-gray":!0},on:{click:function(n){return t.setSubject(e.value,e.label)}}},[t._v(t._s(e.label))])})),1)]),t._v(" "),n("div",{staticClass:"contents"},[n("h2",[t._v("속도\n        "),t.delayList.find((function(e){return e.value===t.countSpeed}))?n("span",[t._v("\n        ("+t._s(t.delayList.find((function(e){return e.value===t.countSpeed})).label)+")\n      ")]):t._e()]),t._v(" "),n("div",{staticClass:"btn-wrap"},t._l(t.delayList,(function(e,r){return n("g-button",{key:"delay_"+r,attrs:{"is-gray":!0},on:{click:function(n){return t.setDelay(e.value)}}},[t._v(t._s(e.label))])})),1),t._v(" "),n("g-timer",{ref:"timer",attrs:{delay:t.delay}})],1),t._v(" "),n("div",{staticClass:"contents"},[n("h2",[t._v("문제 갯수 "),t.questionCount?n("span",[t._v("("+t._s(t.questionCount)+"개)")]):t._e()]),t._v(" "),n("div",{staticClass:"btn-wrap"},t._l(t.questionNumberList,(function(e,r){return n("g-button",{key:"question_"+r,attrs:{"is-gray":!0},on:{click:function(n){return t.setQuestionCount(e.value)}}},[t._v(t._s(e.label))])})),1)]),t._v(" "),n("div",{staticClass:"footer-btn"},[n("g-button",{attrs:{"is-block":!0},on:{click:t.setGameStart}},[t._v("게임 시작하기")])],1)]],2)}),[],!1,null,"3943163a",null);e.default=b.exports}}]);