(window.webpackJsonp=window.webpackJsonp||[]).push([[4,10,12],{350:function(e,t,n){var r=n(356);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(84).default)("0e097b4c",r,!0,{sourceMap:!1})},351:function(e,t,n){"use strict";n.r(t);n(49),n(32),n(37),n(16),n(50),n(33),n(68);var r=n(28),i=n(48);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var o=Object(i.b)({name:"GButton",props:{isBlock:{type:Boolean,default:!1},isGray:{type:Boolean,default:!1}},setup:function(e,t){var n=t.emit,o=Object(i.f)(!1),c={handleClick:function(e){n("click",e)},handleTouchStart:function(){o.value=!0},handleTouchEnd:function(){o.value=!1}};return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({isActiveAction:o},c)}}),c=o,s=(n(355),n(69)),u=Object(s.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{class:[{"is-block":e.isBlock},{"is-gray":e.isGray}],on:{click:e.handleClick,ontouchstart:e.handleTouchStart,ontouchend:e.handleTouchEnd}},[e._t("default")],2)}),[],!1,null,"80c3c3ba",null);t.default=u.exports},352:function(e,t,n){var r=n(358);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(84).default)("d7436dc0",r,!0,{sourceMap:!1})},353:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(28),i=n(14),a=(n(59),n(42),n(26),n(168),n(60),n(359),n(49),n(32),n(37),n(16),n(50),n(33),n(68),n(48)),o=n(101),c=n(231),s=n(85);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(){var e=Object(a.i)().$axios,t=Object(c.useGameStore)(),n=(Object(c.useAppStore)(),Object(a.a)((function(){return t.gameType}))),r=Object(a.a)((function(){return t.mainInfo})),u=Object(a.a)((function(){return t.subject})),p=Object(a.a)((function(){return t.countSpeed})),f=Object(a.a)((function(){return t.countDown})),d=Object(a.a)((function(){return t.questionCount})),b=Object(a.a)((function(){return t.isGameStart})),v=Object(a.a)((function(){return t.liarMode})),m=Object(a.a)((function(){return t.gameList})),g=Object(a.a)((function(){return t.isTimerStart})),h=Object(a.a)((function(){return t.giParams})),O=Object(a.a)((function(){return t.participants})),w=Object(a.j)(),y=Object(a.f)(),j=Object(a.f)(),x=Object(a.e)({speed:0,questionCount:d,gameType:n,mainInfo:r,countSpeed:p,countDown:f,isGameStart:b,subject:u,liarMode:v,gameList:m,isTimerStart:g,giParams:h,participants:O,isShow:!0,activeIndex:0,countSpeedList:o.b,questionNumberList:o.e,liarModeList:o.c,countDownList:o.a,swiperOptions:{allowTouchMove:!1,navigation:{nextEl:".swiper-button-next"},effect:"fade"}});Object(a.d)((function(){var e,n=null===(e=w.value.name)||void 0===e?void 0:e.split("-")[1];n&&(t.setGameType(n),t.setMainInfo(n))}));var _={setCountSpeed:function(e){return Object(i.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!s.c.isBusy()){n.next=4;break}return n.abrupt("return");case 4:s.c.setGuard(e*f.value);case 5:return x.speed=e,n.next=8,y.value.countDown(e);case 8:return n.next=10,t.setCountSpeed(e);case 10:case"end":return n.stop()}}),n)})))()},setCountDown:function(e){return Object(i.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setCountDown(e);case 2:case"end":return n.stop()}}),n)})))()},setSubject:function(e,n){return Object(i.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.setSubject({value:e,label:n});case 2:case"end":return r.stop()}}),r)})))()},setQuestionCount:function(e){return Object(i.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setQuestionCount(e);case 2:case"end":return n.stop()}}),n)})))()},setLiarMode:function(e){return Object(i.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setLiarMode(e);case 2:case"end":return n.stop()}}),n)})))()},nextSlide:function(){return Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g.value){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,j.value.$swiper.slideNext();case 4:if(_.setIsShow(!1),x.activeIndex=j.value.$swiper.activeIndex,"complete"!==n.value&&"photo"!==n.value){e.next=10;break}return e.next=10,_.setCountSpeed(p.value);case 10:case"end":return e.stop()}}),e)})))()},setKakaoImage:function(n){return Object(i.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,e.get("https://dapi.kakao.com/v2/search/image?query=".concat(m.value[x.activeIndex].value,"&size=1"),{headers:{Authorization:"KakaoAK f34e842e06dda695d94790ca99ac845d"}}).then((function(e){t.setSearchImages({url:e.data.documents[0].image_url,index:x.activeIndex})}));case 3:case"end":return n.stop()}}),n)})))()},setGoogleImage:function(n){return Object(i.a)(regeneratorRuntime.mark((function r(){var a,o,c,s,u,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.setGoogleImagesParams(n),a=h.value,o=a.key,c=a.cx,s=a.searchType,u=a.num,l=a.q,r.prev=3,r.next=6,e.get("https://www.googleapis.com/customsearch/v1?key=".concat(o,"&cx=").concat(c,"&searchType=").concat(s,"&num=").concat(u,"&q=").concat(encodeURIComponent(l),"&c2coff=1&cr=ko&gl=ko&imgType=face&lr=lang_ko")).then(function(){var e=Object(i.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.setSearchImages({url:n.data.items[0].link,index:x.activeIndex});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(3),r.next=12,_.setKakaoImage(m.value[x.activeIndex].value);case 12:case"end":return r.stop()}}),r,null,[[3,8]])})))()},setIsShow:function(e){x.isShow=e}};return l(l({timer:y,game:t,swiper:j},Object(a.h)(x)),_)}},354:function(e,t,n){"use strict";n.r(t);n(49),n(32),n(37),n(16),n(50),n(33),n(68);var r=n(28),i=(n(70),n(48)),a=n(231);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=Object(i.b)({name:"GTimer",setup:function(){var e=Object(i.e)({initialCount:0,isOver:!1}),t=Object(a.useGameStore)(),n=Object(i.a)((function(){return t.isTimerStart})),r=Object(i.a)((function(){return t.countDown}));Object(i.d)((function(){e.initialCount=r.value})),Object(i.m)((function(){return r.value}),(function(t){e.initialCount=r.value}));var o={countDown:function(n){e.initialCount>0?(t.setStartTimer(!0),setTimeout((function(){e.initialCount-=1,o.countDown(n)}),n)):(t.setStartTimer(!1),e.initialCount=r.value)}};return c(c({isTimerStart:n,countDownNumber:r},Object(i.h)(e)),o)}}),u=(n(357),n(69)),l=Object(u.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isTimerStart?n("div",{staticClass:"timer-wrap"},[n("p",{class:[{"is-active":e.isTimerStart},{"is-hidden":1===e.countDownNumber}]},[e._v("\n    "+e._s(e.initialCount)+"\n  ")])]):e._e()}),[],!1,null,"3656423f",null);t.default=l.exports},355:function(e,t,n){"use strict";n(350)},356:function(e,t,n){var r=n(83)(!1);r.push([e.i,"button[data-v-80c3c3ba]{height:40px;line-height:40px;background-color:#000;border-radius:20px;text-align:center;padding:0 20px;box-sizing:border-box;color:#fff;font-weight:700;font-size:1.2em;outline:none;border:1px solid transparent}button.is-block[data-v-80c3c3ba]{display:block;width:100%;height:60px;line-height:60px;border-radius:30px}button.is-gray[data-v-80c3c3ba]{background:#f0f0f0;color:#000}button.is-active[data-v-80c3c3ba]{background:#fff;border-color:#000}",""]),e.exports=r},357:function(e,t,n){"use strict";n(352)},358:function(e,t,n){var r=n(83)(!1);r.push([e.i,".timer-wrap[data-v-3656423f]{display:flex;height:100px;align-items:center;justify-content:center}.timer-wrap p[data-v-3656423f]{font-size:5em;color:#fff}.timer-wrap p.is-active[data-v-3656423f]{color:#ddd}.timer-wrap p.is-hidden[data-v-3656423f]{visibility:hidden}",""]),e.exports=r},359:function(e,t,n){"use strict";var r=n(1),i=n(360);r({target:"String",proto:!0,forced:n(361)("link")},{link:function(e){return i(this,"a","href",e)}})},360:function(e,t,n){var r=n(6),i=n(29),a=n(21),o=/"/g,c=r("".replace);e.exports=function(e,t,n,r){var s=a(i(e)),u="<"+t;return""!==n&&(u+=" "+n+'="'+c(a(r),o,"&quot;")+'"'),u+">"+s+"</"+t+">"}},361:function(e,t,n){var r=n(7);e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},362:function(e,t,n){e.exports=n.p+"img/play.8335028.png"},363:function(e,t,n){e.exports=n.p+"img/stop.2c09d19.png"},371:function(e,t,n){var r=n(395);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(84).default)("07bf005f",r,!0,{sourceMap:!1})},394:function(e,t,n){"use strict";n(371)},395:function(e,t,n){var r=n(83)(!1);r.push([e.i,'.controls[data-v-4d01bee2]{margin-top:20px;text-align:center;position:relative}.controls .is-active[data-v-4d01bee2]{background-color:#fff;border:1px solid #000}.controls button img[data-v-4d01bee2]{margin-top:-5px}.swiper-slide img[data-v-4d01bee2]{max-width:90vw;max-height:50vh}.swiper-slide .txt[data-v-4d01bee2]{position:relative;font-size:1.5em;width:100%;height:100%;margin-top:20px}.swiper-slide .txt>div[data-v-4d01bee2]{line-height:1.2em;color:#fff;position:relative;width:100%}.swiper-slide .txt>div[data-v-4d01bee2]:before{content:"클릭하여 정답 확인";color:#999;position:absolute;left:50%;top:0;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;transform:translateX(-50%)}.swiper-slide .txt>div i[data-v-4d01bee2]{display:block;margin-top:16px;opacity:.4;font-size:.8em}.swiper-slide .txt>div.is-active[data-v-4d01bee2]{color:#000}.swiper-slide .txt>div.is-active[data-v-4d01bee2]:before{content:""}',""]),e.exports=r},414:function(e,t,n){"use strict";n.r(t);n(49),n(32),n(37),n(16),n(50),n(33),n(68);var r=n(28),i=n(48),a=n(353),o=n(351),c=n(354);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=Object(i.b)({name:"ComponentMovie",components:{GButton:o.default,GTimer:c.default},setup:function(e,t){var n=t.root,r=Object(a.a)(),o=r.swiper,c=r.timer,s=r.game,l=r.gameType,p=r.subject,f=r.questionCount,d=r.gameList,b=r.swiperOptions,v=r.isTimerStart,m=r.activeIndex,g=r.isShow,h=r.nextSlide,O=r.setCountSpeed,w=r.setIsShow,y=Object(i.e)({type:"",youtube:null}),j={setGameStart:function(){if(v.value)return!1;n.$swal({showCancelButton:!0,customClass:{container:"modal_container is_cancelBtn"},confirmButtonText:"예",title:"Next Game Start 👉"}).then((function(e){e.isConfirmed&&(s.setGameStart({subject:p.value.value,questionCount:f.value}),g.value=!0,m.value=0,o.value.$swiper.slideTo(0))}))},goHome:function(){if(v.value)return!1;n.$swal({showCancelButton:!0,customClass:{container:"modal_container is_cancelBtn"},confirmButtonText:"예",title:"처음으로 이동하시겠습니까?"}).then((function(e){e.isConfirmed&&(window.location.href="/game")}))},handlePlay:function(){"play"===y.type?y.type="pause":y.type="play",j.playing(y.youtube,y.type)},handleStop:function(){y.type="stop",j.playing(y.youtube,y.type)},ready:function(e){y.youtube=e},playing:function(e,t){"play"===t&&e.target.playVideo(),"pause"===t&&e.target.pauseVideo(),"stop"===t&&e.target.stopVideo()}};return Object(i.m)((function(){return m.value}),(function(e){y.type="pause"})),u(u({swiper:o,gameType:l,subject:p,questionCount:f,gameList:d,swiperOptions:b,isTimerStart:v,activeIndex:m,timer:c,isShow:g,setCountSpeed:O,nextSlide:h,setIsShow:w},j),Object(i.h)(y))}}),p=(n(394),n(69)),f=Object(p.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.gameList.length>1?r("div",{staticClass:"game-in"},[r("div",{staticClass:"info"},[r("p",[e._v(" "+e._s(e.subject.label)+" ("+e._s(e.activeIndex+1)+"/"+e._s(e.questionCount)+")")])]),e._v(" "),"movie_sound"===e.subject.value?r("div",{staticClass:"controls"},[r("g-button",{class:{"is-active":"play"===e.type},attrs:{"is-gray":!0},on:{click:e.handlePlay}},[r("img",{attrs:{src:n(362),alt:"play",height:"14px;"}}),e._v("️")]),e._v(" "),r("g-button",{class:{"is-active":"stop"===e.type},attrs:{"is-gray":!0},on:{click:e.handleStop}},[r("img",{attrs:{src:n(363),alt:"stop",height:"14px"}})])],1):e._e(),e._v(" "),r("div",{staticClass:"question-wrap",on:{click:function(t){return e.setIsShow(!e.isShow)}}},[e.isShow&&"movie_sound"===e.subject.value?r("div",{staticClass:"shadow"},[r("p",[r("span",[e._v(e._s(e.activeIndex+1))]),r("br"),e._v("클릭하여 확인해주세요")])]):e._e(),e._v(" "),r("swiper",{ref:"swiper",staticClass:"custom",attrs:{options:e.swiperOptions}},[e._l(e.gameList,(function(t,n){return r("swiper-slide",{key:"game_"+n},[n===e.activeIndex?r("div",["movie_sound"===e.subject.value?[r("p",{staticStyle:{"font-size":"1.2em","margin-bottom":"20px"}},[e._v(e._s(t.value)+"("+e._s(t.singer)+" "+e._s(t.singer?"-":"")+" "+e._s(t.title)+")")]),e._v(" "),r("client-only",[r("youtube",{attrs:{"video-id":t.youtube_id,"player-width":"100%","player-height":"56.25%"},on:{ready:e.ready,playing:function(t){return e.playing(t,e.type)}}})],1)]:[r("img",{attrs:{src:t.screenshot,alt:""}}),e._v(" "),r("div",{staticClass:"txt"},[r("div",{class:{"is-active":!e.isShow}},[e._v("\n                "+e._s(t.value)+"\n                "),"movie_script"===e.subject.value?r("i",[e._v(e._s(t.script))]):e._e()])]),e._v(" "),r("div",{staticClass:"swiper-lazy-preloader"})]],2):e._e()])})),e._v(" "),e.gameList.length!==e.activeIndex+1?r("div",{staticClass:"next-wrap"},[r("g-button",{on:{click:e.nextSlide}},[e._v("다음")])],1):e._e()],2),e._v(" "),e.gameList.length===e.activeIndex+1?r("div",{staticClass:"btn-wrap"},[r("g-button",{attrs:{"is-gray":!0},on:{click:e.goHome}},[e._v("처음으로")]),e._v(" "),r("g-button",{on:{click:e.setGameStart}},[e._v("이어서 게임 시작하기")])],1):e._e()],1)]):e._e()}),[],!1,null,"4d01bee2",null);t.default=f.exports}}]);