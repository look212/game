(window.webpackJsonp=window.webpackJsonp||[]).push([[2,11,13],{351:function(e,t,n){var r=n(356);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(85).default)("4d0a3c63",r,!0,{sourceMap:!1})},352:function(e,t,n){"use strict";n.r(t);n(52),n(33),n(38),n(17),n(53),n(34),n(69);var r=n(29),o=n(51);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var i=Object(o.b)({name:"GButton",props:{isBlock:{type:Boolean,default:!1},isGray:{type:Boolean,default:!1}},setup:function(e,t){var n=t.emit;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},{handleClick:function(e){n("click",e)}})}}),c=i,u=(n(355),n(70)),s=Object(u.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{class:[{"is-block":e.isBlock},{"is-gray":e.isGray}],on:{click:e.handleClick}},[e._t("default")],2)}),[],!1,null,"77047ee3",null);t.default=s.exports},353:function(e,t,n){var r=n(359);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(85).default)("d7436dc0",r,!0,{sourceMap:!1})},354:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(29),o=n(16),a=(n(61),n(43),n(27),n(169),n(62),n(360),n(52),n(33),n(38),n(17),n(53),n(34),n(69),n(51)),i=n(102),c=n(232),u=n(86);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(){var e=Object(a.i)().$axios,t=Object(c.useGameStore)(),n=(Object(c.useAppStore)(),Object(a.a)((function(){return t.gameType}))),r=Object(a.a)((function(){return t.mainInfo})),s=Object(a.a)((function(){return t.subject})),l=Object(a.a)((function(){return t.countSpeed})),p=Object(a.a)((function(){return t.countDown})),b=Object(a.a)((function(){return t.questionCount})),m=Object(a.a)((function(){return t.isGameStart})),d=Object(a.a)((function(){return t.liarMode})),v=Object(a.a)((function(){return t.gameList})),O=Object(a.a)((function(){return t.isTimerStart})),g=Object(a.a)((function(){return t.giParams})),j=Object(a.a)((function(){return t.participants})),w=Object(a.a)((function(){return t.mixedNum})),h=Object(a.j)(),x=Object(a.f)(),y=Object(a.f)(),S=Object(a.e)({speed:0,questionCount:b,gameType:n,mainInfo:r,countSpeed:l,countDown:p,isGameStart:m,subject:s,liarMode:d,gameList:v,isTimerStart:O,giParams:g,participants:j,mixedNum:w,isShow:!0,activeIndex:0,countSpeedList:i.b,questionNumberList:i.f,liarModeList:i.c,countDownList:i.a,mixedList:i.e,swiperOptions:{allowTouchMove:!1,navigation:{nextEl:".swiper-button-next"},effect:"fade"}});Object(a.d)((function(){var e,n=null===(e=h.value.name)||void 0===e?void 0:e.split("-")[1];n&&(t.setGameType(n),t.setMainInfo(n))}));var k={setCountSpeed:function(e){return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!u.c.isBusy()){n.next=4;break}return n.abrupt("return");case 4:u.c.setGuard(e*p.value);case 5:return S.speed=e,n.next=8,x.value.countDown(e);case 8:return n.next=10,t.setCountSpeed(e);case 10:case"end":return n.stop()}}),n)})))()},setCountDown:function(e){return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setCountDown(e);case 2:case"end":return n.stop()}}),n)})))()},setSubject:function(e,n){return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.setSubject({value:e,label:n});case 2:case"end":return r.stop()}}),r)})))()},setQuestionCount:function(e){return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setQuestionCount(e);case 2:case"end":return n.stop()}}),n)})))()},setLiarMode:function(e){return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setLiarMode(e);case 2:case"end":return n.stop()}}),n)})))()},nextSlide:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!O.value){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,y.value.$swiper.slideNext();case 4:if(k.setIsShow(!1),S.activeIndex=y.value.$swiper.activeIndex,"complete"!==n.value&&"photo"!==n.value){e.next=10;break}return e.next=10,k.setCountSpeed(l.value);case 10:case"end":return e.stop()}}),e)})))()},setKakaoImage:function(n){return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,e.get("https://dapi.kakao.com/v2/search/image?query=".concat(v.value[S.activeIndex].value,"&size=1"),{headers:{Authorization:"KakaoAK f34e842e06dda695d94790ca99ac845d"}}).then((function(e){t.setSearchImages({url:e.data.documents[0].image_url,index:S.activeIndex})}));case 3:case"end":return n.stop()}}),n)})))()},setGoogleImage:function(n){return Object(o.a)(regeneratorRuntime.mark((function r(){var a,i,c,u,s,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.setGoogleImagesParams(n),a=g.value,i=a.key,c=a.cx,u=a.searchType,s=a.num,f=a.q,r.prev=3,r.next=6,e.get("https://www.googleapis.com/customsearch/v1?key=".concat(i,"&cx=").concat(c,"&searchType=").concat(u,"&num=").concat(s,"&q=").concat(encodeURIComponent(f),"&c2coff=1&cr=ko&gl=ko&imgType=face&lr=lang_ko")).then(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.setSearchImages({url:n.data.items[0].link,index:S.activeIndex});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(3),r.next=12,k.setKakaoImage(v.value[S.activeIndex].value);case 12:case"end":return r.stop()}}),r,null,[[3,8]])})))()},setIsShow:function(e){S.isShow=e},setMixedNumber:function(e){t.setMixedNumber(e)}};return f(f({timer:x,game:t,swiper:y},Object(a.h)(S)),k)}},355:function(e,t,n){"use strict";n(351)},356:function(e,t,n){var r=n(84)(!1);r.push([e.i,"button[data-v-77047ee3]{height:40px;line-height:40px;background-color:#000;border-radius:20px;text-align:center;padding:0 20px;box-sizing:border-box;color:#fff;font-weight:700;font-size:1.2em;outline:none;border:1px solid transparent}button.is-block[data-v-77047ee3]{display:block;width:100%;height:60px;line-height:60px;border-radius:30px}button.is-gray[data-v-77047ee3]{background:#f0f0f0;color:#000}button.is-active[data-v-77047ee3]{background:#fff;border-color:#000}",""]),e.exports=r},357:function(e,t,n){"use strict";n.r(t);n(52),n(33),n(38),n(17),n(53),n(34),n(69);var r=n(29),o=(n(71),n(51)),a=n(232);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=Object(o.b)({name:"GTimer",setup:function(){var e=Object(o.e)({initialCount:0,isOver:!1}),t=Object(a.useGameStore)(),n=Object(o.a)((function(){return t.isTimerStart})),r=Object(o.a)((function(){return t.countDown}));Object(o.d)((function(){e.initialCount=r.value})),Object(o.m)((function(){return r.value}),(function(t){e.initialCount=r.value}));var i={countDown:function(n){e.initialCount>0?(t.setStartTimer(!0),setTimeout((function(){e.initialCount-=1,i.countDown(n)}),n)):(t.setStartTimer(!1),e.initialCount=r.value)}};return c(c({isTimerStart:n,countDownNumber:r},Object(o.h)(e)),i)}}),s=(n(358),n(70)),f=Object(s.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isTimerStart?n("div",{staticClass:"timer-wrap"},[n("p",{class:[{"is-active":e.isTimerStart},{"is-hidden":1===e.countDownNumber}]},[e._v("\n    "+e._s(e.initialCount)+"\n  ")])]):e._e()}),[],!1,null,"3656423f",null);t.default=f.exports},358:function(e,t,n){"use strict";n(353)},359:function(e,t,n){var r=n(84)(!1);r.push([e.i,".timer-wrap[data-v-3656423f]{display:flex;height:100px;align-items:center;justify-content:center}.timer-wrap p[data-v-3656423f]{font-size:5em;color:#fff}.timer-wrap p.is-active[data-v-3656423f]{color:#ddd}.timer-wrap p.is-hidden[data-v-3656423f]{visibility:hidden}",""]),e.exports=r},360:function(e,t,n){"use strict";var r=n(2),o=n(361);r({target:"String",proto:!0,forced:n(362)("link")},{link:function(e){return o(this,"a","href",e)}})},361:function(e,t,n){var r=n(6),o=n(30),a=n(22),i=/"/g,c=r("".replace);e.exports=function(e,t,n,r){var u=a(o(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+c(a(r),i,"&quot;")+'"'),s+">"+u+"</"+t+">"}},362:function(e,t,n){var r=n(7);e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},432:function(e,t,n){"use strict";n.r(t);n(52),n(33),n(38),n(17),n(53),n(34),n(69);var r=n(29),o=(n(71),n(51)),a=n(354),i=n(352),c=n(357);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=Object(o.b)({name:"ComponentComplete",components:{GButton:i.default,GTimer:c.default},setup:function(e,t){var n=t.root,r=Object(a.a)(),i=r.swiper,c=r.timer,u=r.game,f=r.gameType,l=r.subject,p=r.countSpeed,b=r.countDown,m=r.questionCount,d=r.gameList,v=r.swiperOptions,O=r.isTimerStart,g=r.activeIndex,j=r.nextSlide,w=r.setCountSpeed,h=r.setCountDown,x=Object(o.e)({});Object(o.d)((function(){setTimeout((function(){w(p.value)}))}));var y={setGameStart:function(){if(O.value)return!1;n.$swal({showCancelButton:!0,customClass:{container:"modal_container is_cancelBtn"},confirmButtonText:"예",title:"Next Game Start 👉"}).then((function(e){e.isConfirmed&&(u.setGameStart({subject:l.value.value,questionCount:m.value}),g.value=0,i.value.$swiper.slideTo(0),w(p.value),h(b.value))}))},goHome:function(){if(O.value)return!1;n.$swal({showCancelButton:!0,customClass:{container:"modal_container is_cancelBtn"},confirmButtonText:"예",title:"처음으로 이동하시겠습니까?"}).then((function(e){e.isConfirmed&&(window.location.href="/game")}))}};return s(s({swiper:i,gameType:f,subject:l,countSpeed:p,countDown:b,questionCount:m,gameList:d,swiperOptions:v,isTimerStart:O,activeIndex:g,timer:c,setCountSpeed:w,nextSlide:j,setCountDown:h},y),Object(o.h)(x))}}),l=n(70),p=Object(l.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.gameList.length>1?n("div",{staticClass:"game-in"},[n("div",{staticClass:"info"},[n("p",[e._v(e._s(e.subject.label)+" ("+e._s(e.activeIndex+1)+"/"+e._s(e.questionCount)+")")])]),e._v(" "),n("div",{staticClass:"question-wrap"},[n("g-timer",{ref:"timer",staticClass:"timer"}),e._v(" "),n("swiper",{ref:"swiper",staticClass:"custom",attrs:{options:e.swiperOptions}},[e._l(e.gameList,(function(t,r){return n("swiper-slide",{key:"game_"+r},[e.isTimerStart?n("p",[e._v(e._s("proverb"===e.subject.value?t.masking:t.value.slice(0,2)))]):e._e()])})),e._v(" "),e.gameList.length!==e.activeIndex+1?n("div",{staticClass:"next-wrap"},[n("g-button",{on:{click:e.nextSlide}},[e._v("다음")])],1):e._e()],2),e._v(" "),e.gameList.length===e.activeIndex+1?n("div",{staticClass:"btn-wrap"},[n("g-button",{attrs:{"is-gray":!0},on:{click:e.goHome}},[e._v("처음으로")]),e._v(" "),n("g-button",{on:{click:e.setGameStart}},[e._v("이어서 게임 시작하기")])],1):e._e()],1)]):e._e()}),[],!1,null,"8fe183a0",null);t.default=p.exports}}]);