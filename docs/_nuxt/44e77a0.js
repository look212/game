(window.webpackJsonp=window.webpackJsonp||[]).push([[3,9,11],{350:function(e,t,n){var r=n(356);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(83).default)("0e097b4c",r,!0,{sourceMap:!1})},351:function(e,t,n){var r=n(358);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(83).default)("d7436dc0",r,!0,{sourceMap:!1})},352:function(e,t,n){"use strict";n.r(t);n(49),n(32),n(37),n(16),n(50),n(33),n(64);var r=n(27),a=n(48);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var o=Object(a.b)({name:"GButton",props:{isBlock:{type:Boolean,default:!1},isGray:{type:Boolean,default:!1}},setup:function(e,t){var n=t.emit,o=Object(a.f)(!1),c={handleClick:function(e){n("click",e)},handleTouchStart:function(){o.value=!0},handleTouchEnd:function(){o.value=!1}};return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({isActiveAction:o},c)}}),c=o,s=(n(355),n(65)),u=Object(s.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{class:[{"is-block":e.isBlock},{"is-gray":e.isGray}],on:{click:e.handleClick,ontouchstart:e.handleTouchStart,ontouchend:e.handleTouchEnd}},[e._t("default")],2)}),[],!1,null,"80c3c3ba",null);t.default=u.exports},353:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(27),a=n(14),i=(n(59),n(42),n(29),n(168),n(67),n(359),n(49),n(32),n(37),n(16),n(50),n(33),n(64),n(48)),o=n(101),c=n(231),s=n(84),u=n(2);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(){var e=Object(i.i)().$axios,t=Object(c.useGameStore)(),n=(Object(c.useAppStore)(),Object(i.a)((function(){return t.gameType}))),r=Object(i.a)((function(){return t.mainInfo})),l=Object(i.a)((function(){return t.subject})),f=Object(i.a)((function(){return t.countSpeed})),d=Object(i.a)((function(){return t.countDown})),v=Object(i.a)((function(){return t.questionCount})),b=Object(i.a)((function(){return t.isGameStart})),m=Object(i.a)((function(){return t.liarMode})),g=Object(i.a)((function(){return t.gameList})),h=Object(i.a)((function(){return t.isTimerStart})),O=Object(i.a)((function(){return t.giParams})),w=Object(i.a)((function(){return t.participants})),y=Object(i.j)(),j=Object(i.f)(),x=Object(i.f)(),S=Object(i.e)({speed:0,questionCount:v,gameType:n,mainInfo:r,countSpeed:f,countDown:d,isGameStart:b,subject:l,liarMode:m,gameList:g,isTimerStart:h,giParams:O,participants:w,isShow:!0,activeIndex:0,countSpeedList:o.b,questionNumberList:o.e,liarModeList:o.c,countDownList:o.a,swiperOptions:{allowTouchMove:!1,navigation:{nextEl:".swiper-button-next"},effect:"fade"}});Object(i.d)((function(){var e,n=null===(e=y.value.name)||void 0===e?void 0:e.split("-")[1];n&&(t.setGameType(n),t.setMainInfo(n))}));var _={setCountSpeed:function(e){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!s.c.isBusy()){n.next=4;break}return n.abrupt("return");case 4:s.c.setGuard(e*d.value);case 5:return S.speed=e,n.next=8,j.value.countDown(e);case 8:return n.next=10,t.setCountSpeed(e);case 10:case"end":return n.stop()}}),n)})))()},setCountDown:function(e){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setCountDown(e);case 2:case"end":return n.stop()}}),n)})))()},setSubject:function(e,n){return Object(a.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.setSubject({value:e,label:n});case 2:case"end":return r.stop()}}),r)})))()},setQuestionCount:function(e){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setQuestionCount(e);case 2:case"end":return n.stop()}}),n)})))()},setLiarMode:function(e){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setLiarMode(e);case 2:case"end":return n.stop()}}),n)})))()},nextSlide:function(){return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h.value){e.next=2;break}return e.abrupt("return",!1);case 2:if("liar"!==n.value||!S.isShow){e.next=5;break}return u.default.swal("확인 후 다음을 눌러주세요."),e.abrupt("return",!1);case 5:return e.next=7,x.value.$swiper.slideNext();case 7:if(_.setIsShow(!1),S.activeIndex=x.value.$swiper.activeIndex,"photo"!==n.value){e.next=13;break}return e.next=13,_.setGoogleImage(g.value[S.activeIndex].value);case 13:if("complete"!==n.value&&"photo"!==n.value){e.next=16;break}return e.next=16,_.setCountSpeed(f.value);case 16:case"end":return e.stop()}}),e)})))()},setKakaoImage:function(n){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,e.get("https://dapi.kakao.com/v2/search/image?query=".concat(g.value[S.activeIndex].value,"&size=1"),{headers:{Authorization:"KakaoAK f34e842e06dda695d94790ca99ac845d"}}).then((function(e){t.setSearchImages({url:e.data.documents[0].image_url,index:S.activeIndex})}));case 3:case"end":return n.stop()}}),n)})))()},setGoogleImage:function(n){return Object(a.a)(regeneratorRuntime.mark((function r(){var i,o,c,s,u,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.setGoogleImagesParams(n),i=O.value,o=i.key,c=i.cx,s=i.searchType,u=i.num,l=i.q,r.prev=3,r.next=6,e.get("https://www.googleapis.com/customsearch/v1?key=".concat(o,"&cx=").concat(c,"&searchType=").concat(s,"&num=").concat(u,"&q=").concat(encodeURIComponent(l),"&c2coff=1&cr=ko&gl=ko&imgType=face&lr=lang_ko")).then(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.setSearchImages({url:n.data.items[0].link,index:S.activeIndex});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(3),r.next=12,_.setKakaoImage(g.value[S.activeIndex].value);case 12:case"end":return r.stop()}}),r,null,[[3,8]])})))()},setIsShow:function(e){S.isShow=e}};return p(p({timer:j,game:t,swiper:x},Object(i.h)(S)),_)}},354:function(e,t,n){"use strict";n.r(t);n(49),n(32),n(37),n(16),n(50),n(33),n(64);var r=n(27),a=(n(66),n(48)),i=n(231);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=Object(a.b)({name:"GTimer",setup:function(){var e=Object(a.e)({initialCount:0,isOver:!1}),t=Object(i.useGameStore)(),n=Object(a.a)((function(){return t.isTimerStart})),r=Object(a.a)((function(){return t.countDown}));Object(a.d)((function(){e.initialCount=r.value})),Object(a.m)((function(){return r.value}),(function(t){e.initialCount=r.value}));var o={countDown:function(n){e.initialCount>0?(t.setStartTimer(!0),setTimeout((function(){e.initialCount-=1,o.countDown(n)}),n)):(t.setStartTimer(!1),e.initialCount=r.value)}};return c(c({isTimerStart:n,countDownNumber:r},Object(a.h)(e)),o)}}),u=(n(357),n(65)),l=Object(u.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isTimerStart?n("div",{staticClass:"timer-wrap"},[n("p",{class:[{"is-active":e.isTimerStart},{"is-hidden":1===e.countDownNumber}]},[e._v("\n    "+e._s(e.initialCount)+"\n  ")])]):e._e()}),[],!1,null,"3656423f",null);t.default=l.exports},355:function(e,t,n){"use strict";n(350)},356:function(e,t,n){var r=n(82)(!1);r.push([e.i,"button[data-v-80c3c3ba]{height:40px;line-height:40px;background-color:#000;border-radius:20px;text-align:center;padding:0 20px;box-sizing:border-box;color:#fff;font-weight:700;font-size:1.2em;outline:none;border:1px solid transparent}button.is-block[data-v-80c3c3ba]{display:block;width:100%;height:60px;line-height:60px;border-radius:30px}button.is-gray[data-v-80c3c3ba]{background:#f0f0f0;color:#000}button.is-active[data-v-80c3c3ba]{background:#fff;border-color:#000}",""]),e.exports=r},357:function(e,t,n){"use strict";n(351)},358:function(e,t,n){var r=n(82)(!1);r.push([e.i,".timer-wrap[data-v-3656423f]{display:flex;height:100px;align-items:center;justify-content:center}.timer-wrap p[data-v-3656423f]{font-size:5em;color:#fff}.timer-wrap p.is-active[data-v-3656423f]{color:#ddd}.timer-wrap p.is-hidden[data-v-3656423f]{visibility:hidden}",""]),e.exports=r},359:function(e,t,n){"use strict";var r=n(1),a=n(360);r({target:"String",proto:!0,forced:n(361)("link")},{link:function(e){return a(this,"a","href",e)}})},360:function(e,t,n){var r=n(6),a=n(28),i=n(21),o=/"/g,c=r("".replace);e.exports=function(e,t,n,r){var s=i(a(e)),u="<"+t;return""!==n&&(u+=" "+n+'="'+c(i(r),o,"&quot;")+'"'),u+">"+s+"</"+t+">"}},361:function(e,t,n){var r=n(7);e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},362:function(e,t,n){e.exports=n.p+"img/play.8335028.png"},363:function(e,t,n){e.exports=n.p+"img/stop.2c09d19.png"},368:function(e,t,n){var r=n(386);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(83).default)("4799c59c",r,!0,{sourceMap:!1})},385:function(e,t,n){"use strict";n(368)},386:function(e,t,n){var r=n(82)(!1);r.push([e.i,".controls[data-v-343c71ad]{margin-top:20px;text-align:center;position:relative}.controls .is-active[data-v-343c71ad]{background-color:#fff;border:1px solid #000}.controls button img[data-v-343c71ad]{margin-top:-5px}.swiper-slide img[data-v-343c71ad]{max-width:90vw;max-height:50vh}.swiper-slide .txt[data-v-343c71ad]{position:relative;font-size:1.5em;width:100%;height:100%;margin-top:20px}.swiper-slide .txt>div[data-v-343c71ad]{background:#000;line-height:1.2em}.swiper-slide .txt>div i[data-v-343c71ad]{display:block;margin-top:16px;opacity:.4;font-size:.8em}.swiper-slide .txt>div.is-active[data-v-343c71ad]{background:transparent}",""]),e.exports=r},404:function(e,t,n){"use strict";n.r(t);n(49),n(32),n(37),n(16),n(50),n(33),n(64);var r=n(27),a=n(48),i=n(353),o=n(352),c=n(354);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=Object(a.b)({name:"ComponentMovie",components:{GButton:o.default,GTimer:c.default},setup:function(e,t){var n=t.root,r=Object(i.a)(),o=r.swiper,c=r.timer,s=r.game,l=r.gameType,p=r.subject,f=r.questionCount,d=r.gameList,v=r.swiperOptions,b=r.isTimerStart,m=r.activeIndex,g=r.isShow,h=r.nextSlide,O=r.setCountSpeed,w=r.setIsShow,y=Object(a.e)({type:"",youtube:null}),j={setGameStart:function(){if(b.value)return!1;n.$swal({showCancelButton:!0,customClass:{container:"modal_container is_cancelBtn"},confirmButtonText:"예",title:"Next Game Start 👉"}).then((function(e){e.isConfirmed&&(s.setGameStart({subject:p.value.value,questionCount:f.value}),g.value=!0,m.value=0,o.value.$swiper.slideTo(0))}))},goHome:function(){if(b.value)return!1;n.$swal({showCancelButton:!0,customClass:{container:"modal_container is_cancelBtn"},confirmButtonText:"예",title:"처음으로 이동하시겠습니까?"}).then((function(e){e.isConfirmed&&(window.location.href="/game")}))},handlePlay:function(){"play"===y.type?y.type="pause":y.type="play",j.playing(y.youtube,y.type)},handleStop:function(){y.type="stop",j.playing(y.youtube,y.type)},ready:function(e){y.youtube=e},playing:function(e,t){"play"===t&&e.target.playVideo(),"pause"===t&&e.target.pauseVideo(),"stop"===t&&e.target.stopVideo()}};return Object(a.m)((function(){return m.value}),(function(e){y.type="pause"})),u(u({swiper:o,gameType:l,subject:p,questionCount:f,gameList:d,swiperOptions:v,isTimerStart:b,activeIndex:m,timer:c,isShow:g,setCountSpeed:O,nextSlide:h,setIsShow:w},j),Object(a.h)(y))}}),p=(n(385),n(65)),f=Object(p.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.gameList.length>1?r("div",{staticClass:"game-in"},[r("div",{staticClass:"info"},[r("p",[e._v(" "+e._s(e.subject.label)+" ("+e._s(e.activeIndex+1)+"/"+e._s(e.questionCount)+")")])]),e._v(" "),"movie_sound"===e.subject.value?r("div",{staticClass:"controls"},[r("g-button",{class:{"is-active":"play"===e.type},attrs:{"is-gray":!0},on:{click:e.handlePlay}},[r("img",{attrs:{src:n(362),alt:"play",height:"14px;"}}),e._v("️")]),e._v(" "),r("g-button",{class:{"is-active":"stop"===e.type},attrs:{"is-gray":!0},on:{click:e.handleStop}},[r("img",{attrs:{src:n(363),alt:"stop",height:"14px"}})])],1):e._e(),e._v(" "),r("div",{staticClass:"question-wrap",on:{click:function(t){return e.setIsShow(!e.isShow)}}},[e.isShow&&"movie_sound"===e.subject.value?r("div",{staticClass:"shadow"},[r("p",[r("span",[e._v(e._s(e.activeIndex+1))]),r("br"),e._v("클릭하여 확인해주세요")])]):e._e(),e._v(" "),r("swiper",{ref:"swiper",staticClass:"custom",attrs:{options:e.swiperOptions}},[e._l(e.gameList,(function(t,n){return r("swiper-slide",{key:"game_"+n},[n===e.activeIndex?r("div",["movie_sound"===e.subject.value?[r("p",{staticStyle:{"font-size":"1.2em","margin-bottom":"20px"}},[e._v(e._s(t.value))]),e._v(" "),r("client-only",[r("youtube",{attrs:{"video-id":t.youtube_id,"player-width":"100%","player-height":"56.25%"},on:{ready:e.ready,playing:function(t){return e.playing(t,e.type)}}})],1)]:[r("img",{attrs:{src:t.screenshot,alt:""}}),e._v(" "),r("div",{staticClass:"txt",on:{click:function(t){return e.setIsShow(!e.isShow)}}},[r("div",{class:{"is-active":!e.isShow}},[e._v("\n                "+e._s(t.value)+"\n                "),"movie_script"===e.subject.value?r("i",[e._v(e._s(t.script))]):e._e()])]),e._v(" "),r("div",{staticClass:"swiper-lazy-preloader"})]],2):e._e()])})),e._v(" "),e.gameList.length!==e.activeIndex+1?r("div",{staticClass:"next-wrap"},[r("g-button",{on:{click:e.nextSlide}},[e._v("다음")])],1):e._e()],2),e._v(" "),e.gameList.length===e.activeIndex+1?r("div",{staticClass:"btn-wrap"},[r("g-button",{attrs:{"is-gray":!0},on:{click:e.goHome}},[e._v("처음으로")]),e._v(" "),r("g-button",{on:{click:e.setGameStart}},[e._v("이어서 게임 시작하기")])],1):e._e()],1)]):e._e()}),[],!1,null,"343c71ad",null);t.default=f.exports}}]);