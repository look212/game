(window.webpackJsonp=window.webpackJsonp||[]).push([[3,6,8],{348:function(e,t,n){var r=n(352);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(82).default)("8d3fd1de",r,!0,{sourceMap:!1})},349:function(e,t,n){var r=n(356);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(82).default)("d7436dc0",r,!0,{sourceMap:!1})},350:function(e,t,n){"use strict";n.r(t);n(49),n(32),n(41),n(17),n(50),n(36),n(64);var r=n(27),a=n(48);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var i=Object(a.b)({name:"GButton",props:{isBlock:{type:Boolean,default:!1},isGray:{type:Boolean,default:!1}},setup:function(e,t){var n=t.emit,i=Object(a.f)(!1),c={handleClick:function(e){n("click",e)},handleTouchStart:function(){i.value=!0},handleTouchEnd:function(){i.value=!1}};return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({isActiveAction:i},c)}}),c=i,u=(n(351),n(65)),s=Object(u.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{class:[{"is-block":e.isBlock},{"is-gray":e.isGray},{"is-active-action":e.isActiveAction}],on:{click:e.handleClick,ontouchstart:e.handleTouchStart,ontouchend:e.handleTouchEnd}},[e._t("default")],2)}),[],!1,null,"6cb931d4",null);t.default=s.exports},351:function(e,t,n){"use strict";n(348)},352:function(e,t,n){var r=n(81)(!1);r.push([e.i,"button[data-v-6cb931d4]{height:40px;line-height:40px;background-color:#000;border-radius:20px;text-align:center;padding:0 20px;box-sizing:border-box;color:#fff;font-weight:700;font-size:1.2em;outline:none}button.is-block[data-v-6cb931d4]{display:block;width:100%;height:60px;line-height:60px;border-radius:30px}button.is-gray[data-v-6cb931d4]{background:#f0f0f0;color:#000}button.is-active-action[data-v-6cb931d4],button.is-active-action[data-v-6cb931d4]:active{background-color:#ddd}",""]),e.exports=r},353:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(27),a=n(14),o=(n(59),n(42),n(29),n(167),n(67),n(357),n(49),n(32),n(41),n(17),n(50),n(36),n(64),n(48)),i=n(100),c=n(229),u=n(83),s=n(3);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(){var e=Object(o.i)().$axios,t=Object(c.useGameStore)(),n=(Object(c.useAppStore)(),Object(o.a)((function(){return t.gameType}))),r=Object(o.a)((function(){return t.mainInfo})),l=Object(o.a)((function(){return t.subject})),p=Object(o.a)((function(){return t.countSpeed})),b=Object(o.a)((function(){return t.countDown})),d=Object(o.a)((function(){return t.questionCount})),v=Object(o.a)((function(){return t.isGameStart})),m=Object(o.a)((function(){return t.liarMode})),O=Object(o.a)((function(){return t.gameList})),g=Object(o.a)((function(){return t.isTimerStart})),j=Object(o.a)((function(){return t.giParams})),w=Object(o.a)((function(){return t.participants})),h=Object(o.j)(),x=Object(o.f)(),y=Object(o.f)(),k=Object(o.e)({speed:0,questionCount:d,gameType:n,mainInfo:r,countSpeed:p,countDown:b,isGameStart:v,subject:l,liarMode:m,gameList:O,isTimerStart:g,giParams:j,participants:w,isShow:!0,activeIndex:0,countSpeedList:i.b,questionNumberList:i.e,liarModeList:i.c,countDownList:i.a,swiperOptions:{allowTouchMove:!1,navigation:{nextEl:".swiper-button-next"},effect:"fade"}});Object(o.d)((function(){var e,n=null===(e=h.value.name)||void 0===e?void 0:e.split("-")[1];n&&(t.setGameType(n),t.setMainInfo(n))}));var S={setCountSpeed:function(e){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!u.c.isBusy()){n.next=4;break}return n.abrupt("return");case 4:u.c.setGuard(e*b.value);case 5:return k.speed=e,n.next=8,x.value.countDown(e);case 8:return n.next=10,t.setCountSpeed(e);case 10:case"end":return n.stop()}}),n)})))()},setCountDown:function(e){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setCountDown(e);case 2:case"end":return n.stop()}}),n)})))()},setSubject:function(e,n){return Object(a.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.setSubject({value:e,label:n});case 2:case"end":return r.stop()}}),r)})))()},setQuestionCount:function(e){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setQuestionCount(e);case 2:case"end":return n.stop()}}),n)})))()},setLiarMode:function(e){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setLiarMode(e);case 2:case"end":return n.stop()}}),n)})))()},nextSlide:function(){return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g.value){e.next=2;break}return e.abrupt("return",!1);case 2:if("liar"!==n.value||!k.isShow){e.next=5;break}return s.default.swal("확인 후 다음을 눌러주세요."),e.abrupt("return",!1);case 5:return e.next=7,y.value.$swiper.slideNext();case 7:if(k.isShow=!0,k.activeIndex=y.value.$swiper.activeIndex,"photo"!==n.value){e.next=13;break}return e.next=13,S.setGoogleImage(O.value[k.activeIndex].value);case 13:if("complete"!==n.value&&"photo"!==n.value){e.next=16;break}return e.next=16,S.setCountSpeed(p.value);case 16:case"end":return e.stop()}}),e)})))()},setKakaoImage:function(n){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,e.get("https://dapi.kakao.com/v2/search/image?query=".concat(O.value[k.activeIndex].value,"&size=1"),{headers:{Authorization:"KakaoAK f34e842e06dda695d94790ca99ac845d"}}).then((function(e){t.setSearchImages({url:e.data.documents[0].image_url,index:k.activeIndex})}));case 3:case"end":return n.stop()}}),n)})))()},setGoogleImage:function(n){return Object(a.a)(regeneratorRuntime.mark((function r(){var o,i,c,u,s,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.setGoogleImagesParams(n),o=j.value,i=o.key,c=o.cx,u=o.searchType,s=o.num,l=o.q,r.prev=3,r.next=6,e.get("https://www.googleapis.com/customsearch/v1?key=".concat(i,"&cx=").concat(c,"&searchType=").concat(u,"&num=").concat(s,"&q=").concat(encodeURIComponent(l),"&c2coff=1&cr=ko&gl=ko&imgType=face&lr=lang_ko")).then(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.setSearchImages({url:n.data.items[0].link,index:k.activeIndex});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(3),r.next=12,S.setKakaoImage(O.value[k.activeIndex].value);case 12:case"end":return r.stop()}}),r,null,[[3,8]])})))()}};return f(f({timer:x,game:t,swiper:y},Object(o.h)(k)),S)}},354:function(e,t,n){"use strict";n.r(t);n(49),n(32),n(41),n(17),n(50),n(36),n(64);var r=n(27),a=(n(66),n(48)),o=n(229);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=Object(a.b)({name:"GTimer",setup:function(){var e=Object(a.e)({initialCount:0,isOver:!1}),t=Object(o.useGameStore)(),n=Object(a.a)((function(){return t.isTimerStart})),r=Object(a.a)((function(){return t.countDown}));Object(a.d)((function(){e.initialCount=r.value})),Object(a.m)((function(){return r.value}),(function(t){e.initialCount=r.value}));var i={countDown:function(n){e.initialCount>0?(t.setStartTimer(!0),setTimeout((function(){e.initialCount-=1,i.countDown(n)}),n)):(t.setStartTimer(!1),e.initialCount=r.value)}};return c(c({isTimerStart:n,countDownNumber:r},Object(a.h)(e)),i)}}),s=(n(355),n(65)),l=Object(s.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isTimerStart?n("div",{staticClass:"timer-wrap"},[n("p",{class:[{"is-active":e.isTimerStart},{"is-hidden":1===e.countDownNumber}]},[e._v("\n    "+e._s(e.initialCount)+"\n  ")])]):e._e()}),[],!1,null,"3656423f",null);t.default=l.exports},355:function(e,t,n){"use strict";n(349)},356:function(e,t,n){var r=n(81)(!1);r.push([e.i,".timer-wrap[data-v-3656423f]{display:flex;height:100px;align-items:center;justify-content:center}.timer-wrap p[data-v-3656423f]{font-size:5em;color:#fff}.timer-wrap p.is-active[data-v-3656423f]{color:#ddd}.timer-wrap p.is-hidden[data-v-3656423f]{visibility:hidden}",""]),e.exports=r},357:function(e,t,n){"use strict";var r=n(1),a=n(358);r({target:"String",proto:!0,forced:n(359)("link")},{link:function(e){return a(this,"a","href",e)}})},358:function(e,t,n){var r=n(6),a=n(28),o=n(21),i=/"/g,c=r("".replace);e.exports=function(e,t,n,r){var u=o(a(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+c(o(r),i,"&quot;")+'"'),s+">"+u+"</"+t+">"}},359:function(e,t,n){var r=n(7);e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},382:function(e,t,n){"use strict";n.r(t);n(49),n(32),n(41),n(17),n(50),n(36),n(64);var r=n(27),a=n(48),o=n(353),i=n(350),c=n(354);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var s=Object(a.b)({name:"ComponentSpeed",components:{GButton:i.default,GTimer:c.default},setup:function(e,t){var n=t.root,a=Object(o.a)(),i=a.swiper,c=a.timer,s=a.game,l=a.gameType,f=a.subject,p=a.questionCount,b=a.gameList,d=a.swiperOptions,v=a.isTimerStart,m=a.activeIndex,O=a.nextSlide,g=a.setCountSpeed,j={setGameStart:function(){if(v.value)return!1;n.$swal({showCancelButton:!0,customClass:{container:"modal_container is_cancelBtn"},confirmButtonText:"예",title:"Next Game Start 👉"}).then((function(e){e.isConfirmed&&(s.setGameStart({subject:f.value.value,questionCount:p.value}),m.value=0,i.value.$swiper.slideTo(0))}))},goHome:function(){if(v.value)return!1;n.$swal({showCancelButton:!0,customClass:{container:"modal_container is_cancelBtn"},confirmButtonText:"예",title:"처음으로 이동하시겠습니까?"}).then((function(e){e.isConfirmed&&(window.location.href="/game")}))}};return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({swiper:i,gameType:l,subject:f,questionCount:p,gameList:b,swiperOptions:d,isTimerStart:v,activeIndex:m,timer:c,setCountSpeed:g,nextSlide:O},j)}}),l=s,f=n(65),p=Object(f.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.gameList.length>1?n("div",{staticClass:"game-in"},[n("div",{staticClass:"info"},[n("p",[e._v(e._s(e.subject.label)+" ("+e._s(e.activeIndex+1)+"/"+e._s(e.questionCount)+")")])]),e._v(" "),n("div",{staticClass:"question-wrap"},[n("swiper",{ref:"swiper",staticClass:"custom",attrs:{options:e.swiperOptions}},[e._l(e.gameList,(function(t,r){return n("swiper-slide",{key:"game_"+r},[n("p",[e._v(e._s(t.value))])])})),e._v(" "),e.gameList.length!==e.activeIndex+1?n("div",{staticClass:"next-wrap"},[n("g-button",{on:{click:e.nextSlide}},[e._v("다음")])],1):e._e()],2),e._v(" "),e.gameList.length===e.activeIndex+1?n("div",{staticClass:"btn-wrap"},[n("g-button",{attrs:{"is-gray":!0},on:{click:e.goHome}},[e._v("처음으로")]),e._v(" "),n("g-button",{on:{click:e.setGameStart}},[e._v("이어서 게임 시작하기")])],1):e._e()],1)]):e._e()}),[],!1,null,"9d92b9fe",null);t.default=p.exports}}]);