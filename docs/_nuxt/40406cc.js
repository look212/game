(window.webpackJsonp=window.webpackJsonp||[]).push([[0,9,11],{350:function(e,t,n){var r=n(356);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(83).default)("0e097b4c",r,!0,{sourceMap:!1})},351:function(e,t,n){var r=n(358);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(83).default)("d7436dc0",r,!0,{sourceMap:!1})},352:function(e,t,n){"use strict";n.r(t);n(49),n(32),n(37),n(16),n(50),n(33),n(64);var r=n(27),a=n(48);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var c=Object(a.b)({name:"GButton",props:{isBlock:{type:Boolean,default:!1},isGray:{type:Boolean,default:!1}},setup:function(e,t){var n=t.emit,c=Object(a.f)(!1),i={handleClick:function(e){n("click",e)},handleTouchStart:function(){c.value=!0},handleTouchEnd:function(){c.value=!1}};return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({isActiveAction:c},i)}}),i=c,u=(n(355),n(65)),s=Object(u.a)(i,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{class:[{"is-block":e.isBlock},{"is-gray":e.isGray}],on:{click:e.handleClick,ontouchstart:e.handleTouchStart,ontouchend:e.handleTouchEnd}},[e._t("default")],2)}),[],!1,null,"80c3c3ba",null);t.default=s.exports},353:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(27),a=n(14),o=(n(59),n(42),n(29),n(168),n(67),n(359),n(49),n(32),n(37),n(16),n(50),n(33),n(64),n(48)),c=n(101),i=n(231),u=n(84),s=n(2);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(){var e=Object(o.i)().$axios,t=Object(i.useGameStore)(),n=(Object(i.useAppStore)(),Object(o.a)((function(){return t.gameType}))),r=Object(o.a)((function(){return t.mainInfo})),l=Object(o.a)((function(){return t.subject})),p=Object(o.a)((function(){return t.countSpeed})),b=Object(o.a)((function(){return t.countDown})),d=Object(o.a)((function(){return t.questionCount})),m=Object(o.a)((function(){return t.isGameStart})),v=Object(o.a)((function(){return t.liarMode})),O=Object(o.a)((function(){return t.gameList})),g=Object(o.a)((function(){return t.isTimerStart})),j=Object(o.a)((function(){return t.giParams})),w=Object(o.a)((function(){return t.participants})),h=Object(o.j)(),x=Object(o.f)(),y=Object(o.f)(),S=Object(o.e)({speed:0,questionCount:d,gameType:n,mainInfo:r,countSpeed:p,countDown:b,isGameStart:m,subject:l,liarMode:v,gameList:O,isTimerStart:g,giParams:j,participants:w,isShow:!0,activeIndex:0,countSpeedList:c.b,questionNumberList:c.e,liarModeList:c.c,countDownList:c.a,swiperOptions:{allowTouchMove:!1,navigation:{nextEl:".swiper-button-next"},effect:"fade"}});Object(o.d)((function(){var e,n=null===(e=h.value.name)||void 0===e?void 0:e.split("-")[1];n&&(t.setGameType(n),t.setMainInfo(n))}));var k={setCountSpeed:function(e){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!u.c.isBusy()){n.next=4;break}return n.abrupt("return");case 4:u.c.setGuard(e*b.value);case 5:return S.speed=e,n.next=8,x.value.countDown(e);case 8:return n.next=10,t.setCountSpeed(e);case 10:case"end":return n.stop()}}),n)})))()},setCountDown:function(e){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setCountDown(e);case 2:case"end":return n.stop()}}),n)})))()},setSubject:function(e,n){return Object(a.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.setSubject({value:e,label:n});case 2:case"end":return r.stop()}}),r)})))()},setQuestionCount:function(e){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setQuestionCount(e);case 2:case"end":return n.stop()}}),n)})))()},setLiarMode:function(e){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setLiarMode(e);case 2:case"end":return n.stop()}}),n)})))()},nextSlide:function(){return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g.value){e.next=2;break}return e.abrupt("return",!1);case 2:if("liar"!==n.value||!S.isShow){e.next=5;break}return s.default.swal("확인 후 다음을 눌러주세요."),e.abrupt("return",!1);case 5:return e.next=7,y.value.$swiper.slideNext();case 7:if(k.setIsShow(!1),S.activeIndex=y.value.$swiper.activeIndex,"photo"!==n.value){e.next=13;break}return e.next=13,k.setGoogleImage(O.value[S.activeIndex].value);case 13:if("complete"!==n.value&&"photo"!==n.value){e.next=16;break}return e.next=16,k.setCountSpeed(p.value);case 16:case"end":return e.stop()}}),e)})))()},setKakaoImage:function(n){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,e.get("https://dapi.kakao.com/v2/search/image?query=".concat(O.value[S.activeIndex].value,"&size=1"),{headers:{Authorization:"KakaoAK f34e842e06dda695d94790ca99ac845d"}}).then((function(e){t.setSearchImages({url:e.data.documents[0].image_url,index:S.activeIndex})}));case 3:case"end":return n.stop()}}),n)})))()},setGoogleImage:function(n){return Object(a.a)(regeneratorRuntime.mark((function r(){var o,c,i,u,s,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.setGoogleImagesParams(n),o=j.value,c=o.key,i=o.cx,u=o.searchType,s=o.num,l=o.q,r.prev=3,r.next=6,e.get("https://www.googleapis.com/customsearch/v1?key=".concat(c,"&cx=").concat(i,"&searchType=").concat(u,"&num=").concat(s,"&q=").concat(encodeURIComponent(l),"&c2coff=1&cr=ko&gl=ko&imgType=face&lr=lang_ko")).then(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.setSearchImages({url:n.data.items[0].link,index:S.activeIndex});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(3),r.next=12,k.setKakaoImage(O.value[S.activeIndex].value);case 12:case"end":return r.stop()}}),r,null,[[3,8]])})))()},setIsShow:function(e){S.isShow=e}};return f(f({timer:x,game:t,swiper:y},Object(o.h)(S)),k)}},354:function(e,t,n){"use strict";n.r(t);n(49),n(32),n(37),n(16),n(50),n(33),n(64);var r=n(27),a=(n(66),n(48)),o=n(231);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=Object(a.b)({name:"GTimer",setup:function(){var e=Object(a.e)({initialCount:0,isOver:!1}),t=Object(o.useGameStore)(),n=Object(a.a)((function(){return t.isTimerStart})),r=Object(a.a)((function(){return t.countDown}));Object(a.d)((function(){e.initialCount=r.value})),Object(a.m)((function(){return r.value}),(function(t){e.initialCount=r.value}));var c={countDown:function(n){e.initialCount>0?(t.setStartTimer(!0),setTimeout((function(){e.initialCount-=1,c.countDown(n)}),n)):(t.setStartTimer(!1),e.initialCount=r.value)}};return i(i({isTimerStart:n,countDownNumber:r},Object(a.h)(e)),c)}}),s=(n(357),n(65)),l=Object(s.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isTimerStart?n("div",{staticClass:"timer-wrap"},[n("p",{class:[{"is-active":e.isTimerStart},{"is-hidden":1===e.countDownNumber}]},[e._v("\n    "+e._s(e.initialCount)+"\n  ")])]):e._e()}),[],!1,null,"3656423f",null);t.default=l.exports},355:function(e,t,n){"use strict";n(350)},356:function(e,t,n){var r=n(82)(!1);r.push([e.i,"button[data-v-80c3c3ba]{height:40px;line-height:40px;background-color:#000;border-radius:20px;text-align:center;padding:0 20px;box-sizing:border-box;color:#fff;font-weight:700;font-size:1.2em;outline:none;border:1px solid transparent}button.is-block[data-v-80c3c3ba]{display:block;width:100%;height:60px;line-height:60px;border-radius:30px}button.is-gray[data-v-80c3c3ba]{background:#f0f0f0;color:#000}button.is-active[data-v-80c3c3ba]{background:#fff;border-color:#000}",""]),e.exports=r},357:function(e,t,n){"use strict";n(351)},358:function(e,t,n){var r=n(82)(!1);r.push([e.i,".timer-wrap[data-v-3656423f]{display:flex;height:100px;align-items:center;justify-content:center}.timer-wrap p[data-v-3656423f]{font-size:5em;color:#fff}.timer-wrap p.is-active[data-v-3656423f]{color:#ddd}.timer-wrap p.is-hidden[data-v-3656423f]{visibility:hidden}",""]),e.exports=r},359:function(e,t,n){"use strict";var r=n(1),a=n(360);r({target:"String",proto:!0,forced:n(361)("link")},{link:function(e){return a(this,"a","href",e)}})},360:function(e,t,n){var r=n(6),a=n(28),o=n(21),c=/"/g,i=r("".replace);e.exports=function(e,t,n,r){var u=o(a(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+i(o(r),c,"&quot;")+'"'),s+">"+u+"</"+t+">"}},361:function(e,t,n){var r=n(7);e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},401:function(e,t,n){"use strict";n.r(t);n(49),n(32),n(37),n(16),n(50),n(33),n(64);var r=n(27),a=(n(66),n(48)),o=n(353),c=n(352),i=n(354);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=Object(a.b)({name:"ComponentComplete",components:{GButton:c.default,GTimer:i.default},setup:function(e,t){var n=t.root,r=Object(o.a)(),c=r.swiper,i=r.timer,u=r.game,l=r.gameType,f=r.subject,p=r.countSpeed,b=r.countDown,d=r.questionCount,m=r.gameList,v=r.swiperOptions,O=r.isTimerStart,g=r.activeIndex,j=r.nextSlide,w=r.setCountSpeed,h=r.setCountDown,x=Object(a.e)({});Object(a.d)((function(){setTimeout((function(){w(p.value)}))}));var y={setGameStart:function(){if(O.value)return!1;n.$swal({showCancelButton:!0,customClass:{container:"modal_container is_cancelBtn"},confirmButtonText:"예",title:"Next Game Start 👉"}).then((function(e){e.isConfirmed&&(u.setGameStart({subject:f.value.value,questionCount:d.value}),g.value=0,c.value.$swiper.slideTo(0),w(p.value),h(b.value))}))},goHome:function(){if(O.value)return!1;n.$swal({showCancelButton:!0,customClass:{container:"modal_container is_cancelBtn"},confirmButtonText:"예",title:"처음으로 이동하시겠습니까?"}).then((function(e){e.isConfirmed&&(window.location.href="/game")}))}};return s(s({swiper:c,gameType:l,subject:f,countSpeed:p,countDown:b,questionCount:d,gameList:m,swiperOptions:v,isTimerStart:O,activeIndex:g,timer:i,setCountSpeed:w,nextSlide:j,setCountDown:h},y),Object(a.h)(x))}}),f=n(65),p=Object(f.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.gameList.length>1?n("div",{staticClass:"game-in"},[n("div",{staticClass:"info"},[n("p",[e._v(e._s(e.subject.label)+" ("+e._s(e.activeIndex+1)+"/"+e._s(e.questionCount)+")")])]),e._v(" "),n("div",{staticClass:"question-wrap"},[n("g-timer",{ref:"timer",staticClass:"timer"}),e._v(" "),n("swiper",{ref:"swiper",staticClass:"custom",attrs:{options:e.swiperOptions}},[e._l(e.gameList,(function(t,r){return n("swiper-slide",{key:"game_"+r},[e.isTimerStart?n("p",[e._v(e._s("proverb"===e.subject.value?t.masking:t.value.slice(0,2)))]):e._e()])})),e._v(" "),e.gameList.length!==e.activeIndex+1?n("div",{staticClass:"next-wrap"},[n("g-button",{on:{click:e.nextSlide}},[e._v("다음")])],1):e._e()],2),e._v(" "),e.gameList.length===e.activeIndex+1?n("div",{staticClass:"btn-wrap"},[n("g-button",{attrs:{"is-gray":!0},on:{click:e.goHome}},[e._v("처음으로")]),e._v(" "),n("g-button",{on:{click:e.setGameStart}},[e._v("이어서 게임 시작하기")])],1):e._e()],1)]):e._e()}),[],!1,null,"8fe183a0",null);t.default=p.exports}}]);