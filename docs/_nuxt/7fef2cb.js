(window.webpackJsonp=window.webpackJsonp||[]).push([[5,9,11],{350:function(e,t,n){var r=n(356);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(83).default)("0e097b4c",r,!0,{sourceMap:!1})},351:function(e,t,n){var r=n(358);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(83).default)("d7436dc0",r,!0,{sourceMap:!1})},352:function(e,t,n){"use strict";n.r(t);n(49),n(32),n(37),n(16),n(50),n(33),n(64);var r=n(27),a=n(48);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var i=Object(a.b)({name:"GButton",props:{isBlock:{type:Boolean,default:!1},isGray:{type:Boolean,default:!1}},setup:function(e,t){var n=t.emit,i=Object(a.f)(!1),c={handleClick:function(e){n("click",e)},handleTouchStart:function(){i.value=!0},handleTouchEnd:function(){i.value=!1}};return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({isActiveAction:i},c)}}),c=i,u=(n(355),n(65)),s=Object(u.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{class:[{"is-block":e.isBlock},{"is-gray":e.isGray}],on:{click:e.handleClick,ontouchstart:e.handleTouchStart,ontouchend:e.handleTouchEnd}},[e._t("default")],2)}),[],!1,null,"80c3c3ba",null);t.default=s.exports},353:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(27),a=n(14),o=(n(59),n(42),n(29),n(168),n(67),n(359),n(49),n(32),n(37),n(16),n(50),n(33),n(64),n(48)),i=n(101),c=n(231),u=n(84),s=n(2);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(){var e=Object(o.i)().$axios,t=Object(c.useGameStore)(),n=(Object(c.useAppStore)(),Object(o.a)((function(){return t.gameType}))),r=Object(o.a)((function(){return t.mainInfo})),l=Object(o.a)((function(){return t.subject})),f=Object(o.a)((function(){return t.countSpeed})),d=Object(o.a)((function(){return t.countDown})),b=Object(o.a)((function(){return t.questionCount})),m=Object(o.a)((function(){return t.isGameStart})),v=Object(o.a)((function(){return t.liarMode})),g=Object(o.a)((function(){return t.gameList})),w=Object(o.a)((function(){return t.isTimerStart})),O=Object(o.a)((function(){return t.giParams})),h=Object(o.a)((function(){return t.participants})),j=Object(o.j)(),x=Object(o.f)(),y=Object(o.f)(),k=Object(o.e)({speed:0,questionCount:b,gameType:n,mainInfo:r,countSpeed:f,countDown:d,isGameStart:m,subject:l,liarMode:v,gameList:g,isTimerStart:w,giParams:O,participants:h,isShow:!0,activeIndex:0,countSpeedList:i.b,questionNumberList:i.e,liarModeList:i.c,countDownList:i.a,swiperOptions:{allowTouchMove:!1,navigation:{nextEl:".swiper-button-next"},effect:"fade"}});Object(o.d)((function(){var e,n=null===(e=j.value.name)||void 0===e?void 0:e.split("-")[1];n&&(t.setGameType(n),t.setMainInfo(n))}));var S={setCountSpeed:function(e){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!u.c.isBusy()){n.next=4;break}return n.abrupt("return");case 4:u.c.setGuard(e*d.value);case 5:return k.speed=e,n.next=8,x.value.countDown(e);case 8:return n.next=10,t.setCountSpeed(e);case 10:case"end":return n.stop()}}),n)})))()},setCountDown:function(e){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setCountDown(e);case 2:case"end":return n.stop()}}),n)})))()},setSubject:function(e,n){return Object(a.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.setSubject({value:e,label:n});case 2:case"end":return r.stop()}}),r)})))()},setQuestionCount:function(e){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setQuestionCount(e);case 2:case"end":return n.stop()}}),n)})))()},setLiarMode:function(e){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setLiarMode(e);case 2:case"end":return n.stop()}}),n)})))()},nextSlide:function(){return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!w.value){e.next=2;break}return e.abrupt("return",!1);case 2:if("liar"!==n.value||!k.isShow){e.next=5;break}return s.default.swal("확인 후 다음을 눌러주세요."),e.abrupt("return",!1);case 5:return e.next=7,y.value.$swiper.slideNext();case 7:if(S.setIsShow(!1),k.activeIndex=y.value.$swiper.activeIndex,"photo"!==n.value){e.next=13;break}return e.next=13,S.setGoogleImage(g.value[k.activeIndex].value);case 13:if("complete"!==n.value&&"photo"!==n.value){e.next=16;break}return e.next=16,S.setCountSpeed(f.value);case 16:case"end":return e.stop()}}),e)})))()},setKakaoImage:function(n){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,e.get("https://dapi.kakao.com/v2/search/image?query=".concat(g.value[k.activeIndex].value,"&size=1"),{headers:{Authorization:"KakaoAK f34e842e06dda695d94790ca99ac845d"}}).then((function(e){t.setSearchImages({url:e.data.documents[0].image_url,index:k.activeIndex})}));case 3:case"end":return n.stop()}}),n)})))()},setGoogleImage:function(n){return Object(a.a)(regeneratorRuntime.mark((function r(){var o,i,c,u,s,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.setGoogleImagesParams(n),o=O.value,i=o.key,c=o.cx,u=o.searchType,s=o.num,l=o.q,r.prev=3,r.next=6,e.get("https://www.googleapis.com/customsearch/v1?key=".concat(i,"&cx=").concat(c,"&searchType=").concat(u,"&num=").concat(s,"&q=").concat(encodeURIComponent(l),"&c2coff=1&cr=ko&gl=ko&imgType=face&lr=lang_ko")).then(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.setSearchImages({url:n.data.items[0].link,index:k.activeIndex});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(3),r.next=12,S.setKakaoImage(g.value[k.activeIndex].value);case 12:case"end":return r.stop()}}),r,null,[[3,8]])})))()},setIsShow:function(e){k.isShow=e}};return p(p({timer:x,game:t,swiper:y},Object(o.h)(k)),S)}},354:function(e,t,n){"use strict";n.r(t);n(49),n(32),n(37),n(16),n(50),n(33),n(64);var r=n(27),a=(n(66),n(48)),o=n(231);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=Object(a.b)({name:"GTimer",setup:function(){var e=Object(a.e)({initialCount:0,isOver:!1}),t=Object(o.useGameStore)(),n=Object(a.a)((function(){return t.isTimerStart})),r=Object(a.a)((function(){return t.countDown}));Object(a.d)((function(){e.initialCount=r.value})),Object(a.m)((function(){return r.value}),(function(t){e.initialCount=r.value}));var i={countDown:function(n){e.initialCount>0?(t.setStartTimer(!0),setTimeout((function(){e.initialCount-=1,i.countDown(n)}),n)):(t.setStartTimer(!1),e.initialCount=r.value)}};return c(c({isTimerStart:n,countDownNumber:r},Object(a.h)(e)),i)}}),s=(n(357),n(65)),l=Object(s.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isTimerStart?n("div",{staticClass:"timer-wrap"},[n("p",{class:[{"is-active":e.isTimerStart},{"is-hidden":1===e.countDownNumber}]},[e._v("\n    "+e._s(e.initialCount)+"\n  ")])]):e._e()}),[],!1,null,"3656423f",null);t.default=l.exports},355:function(e,t,n){"use strict";n(350)},356:function(e,t,n){var r=n(82)(!1);r.push([e.i,"button[data-v-80c3c3ba]{height:40px;line-height:40px;background-color:#000;border-radius:20px;text-align:center;padding:0 20px;box-sizing:border-box;color:#fff;font-weight:700;font-size:1.2em;outline:none;border:1px solid transparent}button.is-block[data-v-80c3c3ba]{display:block;width:100%;height:60px;line-height:60px;border-radius:30px}button.is-gray[data-v-80c3c3ba]{background:#f0f0f0;color:#000}button.is-active[data-v-80c3c3ba]{background:#fff;border-color:#000}",""]),e.exports=r},357:function(e,t,n){"use strict";n(351)},358:function(e,t,n){var r=n(82)(!1);r.push([e.i,".timer-wrap[data-v-3656423f]{display:flex;height:100px;align-items:center;justify-content:center}.timer-wrap p[data-v-3656423f]{font-size:5em;color:#fff}.timer-wrap p.is-active[data-v-3656423f]{color:#ddd}.timer-wrap p.is-hidden[data-v-3656423f]{visibility:hidden}",""]),e.exports=r},359:function(e,t,n){"use strict";var r=n(1),a=n(360);r({target:"String",proto:!0,forced:n(361)("link")},{link:function(e){return a(this,"a","href",e)}})},360:function(e,t,n){var r=n(6),a=n(28),o=n(21),i=/"/g,c=r("".replace);e.exports=function(e,t,n,r){var u=o(a(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+c(o(r),i,"&quot;")+'"'),s+">"+u+"</"+t+">"}},361:function(e,t,n){var r=n(7);e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},372:function(e,t,n){var r=n(394);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(83).default)("eb555c1e",r,!0,{sourceMap:!1})},393:function(e,t,n){"use strict";n(372)},394:function(e,t,n){var r=n(82)(!1);r.push([e.i,".swiper-slide img[data-v-302de91a]{max-width:90vw;max-height:50vh}.swiper-slide .txt[data-v-302de91a]{position:relative;font-size:2em;width:100%;height:100%}.swiper-slide .txt>div[data-v-302de91a]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:-webkit-max-content;width:-moz-max-content;width:max-content;height:-webkit-max-content;height:-moz-max-content;height:max-content;background:#000}.swiper-slide .txt>div.is-active[data-v-302de91a]{background:transparent}",""]),e.exports=r},406:function(e,t,n){"use strict";n.r(t);var r=n(27),a=n(14),o=(n(59),n(66),n(42),n(49),n(32),n(37),n(16),n(50),n(33),n(64),n(48)),i=n(353),c=n(352),u=n(354);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var l=Object(o.b)({name:"ComponentPhoto",components:{GButton:c.default,GTimer:u.default},setup:function(e,t){var n=t.root,c=Object(i.a)(),u=c.swiper,l=c.timer,p=c.game,f=c.gameType,d=c.subject,b=c.countSpeed,m=c.countDown,v=c.questionCount,g=c.gameList,w=c.swiperOptions,O=c.isTimerStart,h=c.activeIndex,j=c.giParams,x=c.isShow,y=c.nextSlide,k=c.setCountSpeed,S=c.setCountDown,C=c.setKakaoImage,_=c.setGoogleImage,P=c.setIsShow;Object(o.d)((function(){setTimeout(Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(1);case 2:return e.next=4,k(2e3);case 4:return e.next=6,_(g.value[0].value);case 6:case"end":return e.stop()}}),e)}))))}));var I={setGameStart:function(){if(O.value)return!1;n.$swal({showCancelButton:!0,customClass:{container:"modal_container is_cancelBtn"},confirmButtonText:"예",title:"Next Game Start 👉"}).then(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConfirmed){e.next=13;break}return e.next=3,p.setGameStart({subject:"photo",questionCount:v.value});case 3:return O.value=!0,h.value=0,e.next=7,_(g.value[h.value].name);case 7:return e.next=9,u.value.$swiper.slideTo(0);case 9:return e.next=11,S(1);case 11:return e.next=13,k(2e3);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},goHome:function(){if(O.value)return!1;n.$swal({showCancelButton:!0,customClass:{container:"modal_container is_cancelBtn"},confirmButtonText:"예",title:"처음으로 이동하시겠습니까?"}).then((function(e){e.isConfirmed&&(window.location.href="/game")}))}};return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({swiper:u,gameType:f,subject:d,countSpeed:b,countDown:m,questionCount:v,gameList:g,swiperOptions:w,isTimerStart:O,activeIndex:h,timer:l,giParams:j,isShow:x,setCountSpeed:k,nextSlide:y,setCountDown:S,setKakaoImage:C,setGoogleImage:_,setIsShow:P},I)}}),p=l,f=(n(393),n(65)),d=Object(f.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.gameList.length>1?n("div",{staticClass:"game-in"},[n("div",{staticClass:"info"},[n("p",[e._v(e._s(e.activeIndex+1)+"/"+e._s(e.questionCount))])]),e._v(" "),n("div",{staticClass:"question-wrap"},[n("g-timer",{ref:"timer",staticClass:"timer"}),e._v(" "),n("swiper",{ref:"swiper",staticClass:"custom",attrs:{options:e.swiperOptions}},[e._l(e.gameList,(function(t,r){return n("swiper-slide",{key:"game_"+r},[e.isTimerStart?n("div",[r===e.activeIndex?n("img",{staticClass:"swiper-lazy",attrs:{src:t.url}}):e._e(),e._v(" "),n("div",{staticClass:"swiper-lazy-preloader"})]):n("div",{staticClass:"txt",on:{click:function(t){return e.setIsShow(!1)}}},[n("div",{class:{"is-active":!e.isShow}},[e._v("\n            "+e._s(t.value)+"\n          ")])])])})),e._v(" "),e.gameList.length!==e.activeIndex+1?n("div",{staticClass:"next-wrap"},[n("g-button",{on:{click:e.nextSlide}},[e._v("다음")])],1):e._e()],2),e._v(" "),e.gameList.length===e.activeIndex+1?n("div",{staticClass:"btn-wrap"},[n("g-button",{attrs:{"is-gray":!0},on:{click:e.goHome}},[e._v("처음으로")]),e._v(" "),n("g-button",{on:{click:e.setGameStart}},[e._v("이어서 게임 시작하기")])],1):e._e()],1)]):e._e()}),[],!1,null,"302de91a",null);t.default=d.exports}}]);