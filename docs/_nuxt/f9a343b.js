(window.webpackJsonp=window.webpackJsonp||[]).push([[8,11,13],{351:function(e,t,n){var r=n(356);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(85).default)("0e097b4c",r,!0,{sourceMap:!1})},352:function(e,t,n){"use strict";n.r(t);n(52),n(33),n(38),n(17),n(53),n(34),n(69);var r=n(29),i=n(51);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var o=Object(i.b)({name:"GButton",props:{isBlock:{type:Boolean,default:!1},isGray:{type:Boolean,default:!1}},setup:function(e,t){var n=t.emit,o=Object(i.f)(!1),c={handleClick:function(e){n("click",e)},handleTouchStart:function(){o.value=!0},handleTouchEnd:function(){o.value=!1}};return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({isActiveAction:o},c)}}),c=o,s=(n(355),n(70)),u=Object(s.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{class:[{"is-block":e.isBlock},{"is-gray":e.isGray}],on:{click:e.handleClick,ontouchstart:e.handleTouchStart,ontouchend:e.handleTouchEnd}},[e._t("default")],2)}),[],!1,null,"80c3c3ba",null);t.default=u.exports},353:function(e,t,n){var r=n(359);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(85).default)("d7436dc0",r,!0,{sourceMap:!1})},354:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(29),i=n(16),a=(n(61),n(43),n(27),n(169),n(62),n(360),n(52),n(33),n(38),n(17),n(53),n(34),n(69),n(51)),o=n(102),c=n(232),s=n(86);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(){var e=Object(a.i)().$axios,t=Object(c.useGameStore)(),n=(Object(c.useAppStore)(),Object(a.a)((function(){return t.gameType}))),r=Object(a.a)((function(){return t.mainInfo})),u=Object(a.a)((function(){return t.subject})),f=Object(a.a)((function(){return t.countSpeed})),p=Object(a.a)((function(){return t.countDown})),d=Object(a.a)((function(){return t.questionCount})),b=Object(a.a)((function(){return t.isGameStart})),m=Object(a.a)((function(){return t.liarMode})),v=Object(a.a)((function(){return t.gameList})),g=Object(a.a)((function(){return t.isTimerStart})),w=Object(a.a)((function(){return t.giParams})),O=Object(a.a)((function(){return t.participants})),h=Object(a.a)((function(){return t.mixedNum})),j=Object(a.j)(),x=Object(a.f)(),y=Object(a.f)(),S=Object(a.e)({speed:0,questionCount:d,gameType:n,mainInfo:r,countSpeed:f,countDown:p,isGameStart:b,subject:u,liarMode:m,gameList:v,isTimerStart:g,giParams:w,participants:O,mixedNum:h,isShow:!0,activeIndex:0,countSpeedList:o.b,questionNumberList:o.f,liarModeList:o.c,countDownList:o.a,mixedList:o.e,swiperOptions:{allowTouchMove:!1,navigation:{nextEl:".swiper-button-next"},effect:"fade"}});Object(a.d)((function(){var e,n=null===(e=j.value.name)||void 0===e?void 0:e.split("-")[1];n&&(t.setGameType(n),t.setMainInfo(n))}));var k={setCountSpeed:function(e){return Object(i.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!s.c.isBusy()){n.next=4;break}return n.abrupt("return");case 4:s.c.setGuard(e*p.value);case 5:return S.speed=e,n.next=8,x.value.countDown(e);case 8:return n.next=10,t.setCountSpeed(e);case 10:case"end":return n.stop()}}),n)})))()},setCountDown:function(e){return Object(i.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setCountDown(e);case 2:case"end":return n.stop()}}),n)})))()},setSubject:function(e,n){return Object(i.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.setSubject({value:e,label:n});case 2:case"end":return r.stop()}}),r)})))()},setQuestionCount:function(e){return Object(i.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setQuestionCount(e);case 2:case"end":return n.stop()}}),n)})))()},setLiarMode:function(e){return Object(i.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setLiarMode(e);case 2:case"end":return n.stop()}}),n)})))()},nextSlide:function(){return Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g.value){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,y.value.$swiper.slideNext();case 4:if(k.setIsShow(!1),S.activeIndex=y.value.$swiper.activeIndex,"complete"!==n.value&&"photo"!==n.value){e.next=10;break}return e.next=10,k.setCountSpeed(f.value);case 10:case"end":return e.stop()}}),e)})))()},setKakaoImage:function(n){return Object(i.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,e.get("https://dapi.kakao.com/v2/search/image?query=".concat(v.value[S.activeIndex].value,"&size=1"),{headers:{Authorization:"KakaoAK f34e842e06dda695d94790ca99ac845d"}}).then((function(e){t.setSearchImages({url:e.data.documents[0].image_url,index:S.activeIndex})}));case 3:case"end":return n.stop()}}),n)})))()},setGoogleImage:function(n){return Object(i.a)(regeneratorRuntime.mark((function r(){var a,o,c,s,u,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.setGoogleImagesParams(n),a=w.value,o=a.key,c=a.cx,s=a.searchType,u=a.num,l=a.q,r.prev=3,r.next=6,e.get("https://www.googleapis.com/customsearch/v1?key=".concat(o,"&cx=").concat(c,"&searchType=").concat(s,"&num=").concat(u,"&q=").concat(encodeURIComponent(l),"&c2coff=1&cr=ko&gl=ko&imgType=face&lr=lang_ko")).then(function(){var e=Object(i.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.setSearchImages({url:n.data.items[0].link,index:S.activeIndex});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(3),r.next=12,k.setKakaoImage(v.value[S.activeIndex].value);case 12:case"end":return r.stop()}}),r,null,[[3,8]])})))()},setIsShow:function(e){S.isShow=e},setMixedNumber:function(e){t.setMixedNumber(e)}};return l(l({timer:x,game:t,swiper:y},Object(a.h)(S)),k)}},355:function(e,t,n){"use strict";n(351)},356:function(e,t,n){var r=n(84)(!1);r.push([e.i,"button[data-v-80c3c3ba]{height:40px;line-height:40px;background-color:#000;border-radius:20px;text-align:center;padding:0 20px;box-sizing:border-box;color:#fff;font-weight:700;font-size:1.2em;outline:none;border:1px solid transparent}button.is-block[data-v-80c3c3ba]{display:block;width:100%;height:60px;line-height:60px;border-radius:30px}button.is-gray[data-v-80c3c3ba]{background:#f0f0f0;color:#000}button.is-active[data-v-80c3c3ba]{background:#fff;border-color:#000}",""]),e.exports=r},357:function(e,t,n){"use strict";n.r(t);n(52),n(33),n(38),n(17),n(53),n(34),n(69);var r=n(29),i=(n(71),n(51)),a=n(232);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=Object(i.b)({name:"GTimer",setup:function(){var e=Object(i.e)({initialCount:0,isOver:!1}),t=Object(a.useGameStore)(),n=Object(i.a)((function(){return t.isTimerStart})),r=Object(i.a)((function(){return t.countDown}));Object(i.d)((function(){e.initialCount=r.value})),Object(i.m)((function(){return r.value}),(function(t){e.initialCount=r.value}));var o={countDown:function(n){e.initialCount>0?(t.setStartTimer(!0),setTimeout((function(){e.initialCount-=1,o.countDown(n)}),n)):(t.setStartTimer(!1),e.initialCount=r.value)}};return c(c({isTimerStart:n,countDownNumber:r},Object(i.h)(e)),o)}}),u=(n(358),n(70)),l=Object(u.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isTimerStart?n("div",{staticClass:"timer-wrap"},[n("p",{class:[{"is-active":e.isTimerStart},{"is-hidden":1===e.countDownNumber}]},[e._v("\n    "+e._s(e.initialCount)+"\n  ")])]):e._e()}),[],!1,null,"3656423f",null);t.default=l.exports},358:function(e,t,n){"use strict";n(353)},359:function(e,t,n){var r=n(84)(!1);r.push([e.i,".timer-wrap[data-v-3656423f]{display:flex;height:100px;align-items:center;justify-content:center}.timer-wrap p[data-v-3656423f]{font-size:5em;color:#fff}.timer-wrap p.is-active[data-v-3656423f]{color:#ddd}.timer-wrap p.is-hidden[data-v-3656423f]{visibility:hidden}",""]),e.exports=r},360:function(e,t,n){"use strict";var r=n(1),i=n(361);r({target:"String",proto:!0,forced:n(362)("link")},{link:function(e){return i(this,"a","href",e)}})},361:function(e,t,n){var r=n(6),i=n(30),a=n(22),o=/"/g,c=r("".replace);e.exports=function(e,t,n,r){var s=a(i(e)),u="<"+t;return""!==n&&(u+=" "+n+'="'+c(a(r),o,"&quot;")+'"'),u+">"+s+"</"+t+">"}},362:function(e,t,n){var r=n(7);e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},381:function(e,t,n){var r=n(420);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(85).default)("154cbaa5",r,!0,{sourceMap:!1})},419:function(e,t,n){"use strict";n(381)},420:function(e,t,n){var r=n(84)(!1);r.push([e.i,'.swiper-slide img[data-v-26ed5672]{max-width:90vw}.swiper-slide .txt[data-v-26ed5672]{position:relative;font-size:8vw;width:100%;height:100%}.swiper-slide .txt>div[data-v-26ed5672]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);height:-webkit-max-content;height:-moz-max-content;height:max-content;color:#fff;width:100%}.swiper-slide .txt>div[data-v-26ed5672]:before{content:"클릭하여 정답 확인";color:#999;position:absolute;left:50%;top:0;width:100%;transform:translateX(-50%)}.swiper-slide .txt>div.is-active[data-v-26ed5672]{color:#000}.swiper-slide .txt>div.is-active[data-v-26ed5672]:before{content:""}.swiper-slide .txt>div.is-loading[data-v-26ed5672]{color:#fff}.swiper-slide .txt>div.is-loading[data-v-26ed5672]:before{content:""}',""]),e.exports=r},434:function(e,t,n){"use strict";n.r(t);n(52),n(33),n(38),n(17),n(53),n(34),n(69);var r=n(29),i=n(16),a=(n(61),n(71),n(51)),o=n(354),c=n(352),s=n(357);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var l=Object(a.b)({name:"ComponentPhoto",components:{GButton:c.default,GTimer:s.default},setup:function(e,t){var n=t.root,c=Object(o.a)(),s=c.swiper,l=c.timer,f=c.game,p=c.gameType,d=c.subject,b=c.countSpeed,m=c.countDown,v=c.questionCount,g=c.gameList,w=c.swiperOptions,O=c.isTimerStart,h=c.activeIndex,j=c.giParams,x=c.isShow,y=c.nextSlide,S=c.setCountSpeed,k=c.setCountDown,C=c.setIsShow;Object(a.d)((function(){setTimeout(Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(1);case 2:return e.next=4,S(2e3);case 4:case"end":return e.stop()}}),e)}))))}));var _={setGameStart:function(){if(O.value)return!1;n.$swal({showCancelButton:!0,customClass:{container:"modal_container is_cancelBtn"},confirmButtonText:"예",title:"Next Game Start 👉"}).then(function(){var e=Object(i.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConfirmed){e.next=12;break}return e.next=3,f.setGameStart({subject:"photo",questionCount:v.value});case 3:return O.value=!0,h.value=0,e.next=7,s.value.$swiper.slideTo(0);case 7:return x.value=!0,e.next=10,k(1);case 10:return e.next=12,S(2e3);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},goHome:function(){if(O.value)return!1;n.$swal({showCancelButton:!0,customClass:{container:"modal_container is_cancelBtn"},confirmButtonText:"예",title:"처음으로 이동하시겠습니까?"}).then((function(e){e.isConfirmed&&(window.location.href="/game")}))}};return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({swiper:s,gameType:p,subject:d,countSpeed:b,countDown:m,questionCount:v,gameList:g,swiperOptions:w,isTimerStart:O,activeIndex:h,timer:l,giParams:j,isShow:x,setCountSpeed:S,nextSlide:y,setCountDown:k,setIsShow:C},_)}}),f=l,p=(n(419),n(70)),d=Object(p.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.gameList.length>1?n("div",{staticClass:"game-in"},[n("div",{staticClass:"info"},[n("p",[e._v(e._s(e.activeIndex+1)+"/"+e._s(e.questionCount))])]),e._v(" "),n("div",{staticClass:"question-wrap",on:{click:function(t){return e.setIsShow(!e.isShow)}}},[n("g-timer",{ref:"timer",staticClass:"timer"}),e._v(" "),n("swiper",{ref:"swiper",staticClass:"custom",attrs:{options:e.swiperOptions}},[e._l(e.gameList,(function(t,r){return n("swiper-slide",{key:"game_"+r},[e.isTimerStart?n("div",[r===e.activeIndex?n("img",{staticClass:"swiper-lazy",attrs:{src:t.url}}):e._e(),e._v(" "),n("div",{staticClass:"swiper-lazy-preloader"})]):n("div",{staticClass:"txt"},[n("div",{class:[{"is-active":!e.isShow},{"is-loading":e.isTimerStart}]},[e._v("\n            "+e._s(t.value)+"\n          ")])])])})),e._v(" "),e.gameList.length!==e.activeIndex+1?n("div",{staticClass:"next-wrap"},[n("g-button",{on:{click:e.nextSlide}},[e._v("다음")])],1):e._e()],2),e._v(" "),e.gameList.length===e.activeIndex+1?n("div",{staticClass:"btn-wrap"},[n("g-button",{attrs:{"is-gray":!0},on:{click:e.goHome}},[e._v("처음으로")]),e._v(" "),n("g-button",{on:{click:e.setGameStart}},[e._v("이어서 게임 시작하기")])],1):e._e()],1)]):e._e()}),[],!1,null,"26ed5672",null);t.default=d.exports}}]);