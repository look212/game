(window.webpackJsonp=window.webpackJsonp||[]).push([[5,11,13],{351:function(e,t,n){var r=n(356);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(85).default)("4d0a3c63",r,!0,{sourceMap:!1})},352:function(e,t,n){"use strict";n.r(t);n(52),n(33),n(38),n(17),n(53),n(34),n(69);var r=n(29),a=n(51);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var o=Object(a.b)({name:"GButton",props:{isBlock:{type:Boolean,default:!1},isGray:{type:Boolean,default:!1}},setup:function(e,t){var n=t.emit;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},{handleClick:function(e){n("click",e)}})}}),c=o,s=(n(355),n(70)),u=Object(s.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{class:[{"is-block":e.isBlock},{"is-gray":e.isGray}],on:{click:e.handleClick}},[e._t("default")],2)}),[],!1,null,"77047ee3",null);t.default=u.exports},353:function(e,t,n){var r=n(359);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(85).default)("d7436dc0",r,!0,{sourceMap:!1})},354:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(29),a=n(16),i=(n(61),n(43),n(27),n(169),n(62),n(360),n(52),n(33),n(38),n(17),n(53),n(34),n(69),n(51)),o=n(102),c=n(232),s=n(86);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(){var e=Object(i.i)().$axios,t=Object(c.useGameStore)(),n=(Object(c.useAppStore)(),Object(i.a)((function(){return t.gameType}))),r=Object(i.a)((function(){return t.mainInfo})),u=Object(i.a)((function(){return t.subject})),p=Object(i.a)((function(){return t.countSpeed})),f=Object(i.a)((function(){return t.countDown})),d=Object(i.a)((function(){return t.questionCount})),v=Object(i.a)((function(){return t.isGameStart})),m=Object(i.a)((function(){return t.liarMode})),b=Object(i.a)((function(){return t.gameList})),g=Object(i.a)((function(){return t.isTimerStart})),O=Object(i.a)((function(){return t.giParams})),w=Object(i.a)((function(){return t.participants})),h=Object(i.a)((function(){return t.mixedNum})),j=Object(i.j)(),x=Object(i.f)(),y=Object(i.f)(),_=Object(i.e)({speed:0,questionCount:d,gameType:n,mainInfo:r,countSpeed:p,countDown:f,isGameStart:v,subject:u,liarMode:m,gameList:b,isTimerStart:g,giParams:O,participants:w,mixedNum:h,isShow:!0,activeIndex:0,countSpeedList:o.b,questionNumberList:o.f,liarModeList:o.c,countDownList:o.a,mixedList:o.e,swiperOptions:{allowTouchMove:!1,navigation:{nextEl:".swiper-button-next"},effect:"fade"}});Object(i.d)((function(){var e,n=null===(e=j.value.name)||void 0===e?void 0:e.split("-")[1];n&&(t.setGameType(n),t.setMainInfo(n))}));var k={setCountSpeed:function(e){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!s.c.isBusy()){n.next=4;break}return n.abrupt("return");case 4:s.c.setGuard(e*f.value);case 5:return _.speed=e,n.next=8,x.value.countDown(e);case 8:return n.next=10,t.setCountSpeed(e);case 10:case"end":return n.stop()}}),n)})))()},setCountDown:function(e){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setCountDown(e);case 2:case"end":return n.stop()}}),n)})))()},setSubject:function(e,n){return Object(a.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.setSubject({value:e,label:n});case 2:case"end":return r.stop()}}),r)})))()},setQuestionCount:function(e){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setQuestionCount(e);case 2:case"end":return n.stop()}}),n)})))()},setLiarMode:function(e){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setLiarMode(e);case 2:case"end":return n.stop()}}),n)})))()},nextSlide:function(){return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g.value){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,y.value.$swiper.slideNext();case 4:if(k.setIsShow(!1),_.activeIndex=y.value.$swiper.activeIndex,"complete"!==n.value&&"photo"!==n.value){e.next=10;break}return e.next=10,k.setCountSpeed(p.value);case 10:case"end":return e.stop()}}),e)})))()},setKakaoImage:function(n){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,e.get("https://dapi.kakao.com/v2/search/image?query=".concat(b.value[_.activeIndex].value,"&size=1"),{headers:{Authorization:"KakaoAK f34e842e06dda695d94790ca99ac845d"}}).then((function(e){t.setSearchImages({url:e.data.documents[0].image_url,index:_.activeIndex})}));case 3:case"end":return n.stop()}}),n)})))()},setGoogleImage:function(n){return Object(a.a)(regeneratorRuntime.mark((function r(){var i,o,c,s,u,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.setGoogleImagesParams(n),i=O.value,o=i.key,c=i.cx,s=i.searchType,u=i.num,l=i.q,r.prev=3,r.next=6,e.get("https://www.googleapis.com/customsearch/v1?key=".concat(o,"&cx=").concat(c,"&searchType=").concat(s,"&num=").concat(u,"&q=").concat(encodeURIComponent(l),"&c2coff=1&cr=ko&gl=ko&imgType=face&lr=lang_ko")).then(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.setSearchImages({url:n.data.items[0].link,index:_.activeIndex});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(3),r.next=12,k.setKakaoImage(b.value[_.activeIndex].value);case 12:case"end":return r.stop()}}),r,null,[[3,8]])})))()},setIsShow:function(e){_.isShow=e},setMixedNumber:function(e){t.setMixedNumber(e)}};return l(l({timer:x,game:t,swiper:y},Object(i.h)(_)),k)}},355:function(e,t,n){"use strict";n(351)},356:function(e,t,n){var r=n(84)(!1);r.push([e.i,"button[data-v-77047ee3]{height:40px;line-height:40px;background-color:#000;border-radius:20px;text-align:center;padding:0 20px;box-sizing:border-box;color:#fff;font-weight:700;font-size:1.2em;outline:none;border:1px solid transparent}button.is-block[data-v-77047ee3]{display:block;width:100%;height:60px;line-height:60px;border-radius:30px}button.is-gray[data-v-77047ee3]{background:#f0f0f0;color:#000}button.is-active[data-v-77047ee3]{background:#fff;border-color:#000}",""]),e.exports=r},357:function(e,t,n){"use strict";n.r(t);n(52),n(33),n(38),n(17),n(53),n(34),n(69);var r=n(29),a=(n(71),n(51)),i=n(232);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=Object(a.b)({name:"GTimer",setup:function(){var e=Object(a.e)({initialCount:0,isOver:!1}),t=Object(i.useGameStore)(),n=Object(a.a)((function(){return t.isTimerStart})),r=Object(a.a)((function(){return t.countDown}));Object(a.d)((function(){e.initialCount=r.value})),Object(a.m)((function(){return r.value}),(function(t){e.initialCount=r.value}));var o={countDown:function(n){e.initialCount>0?(t.setStartTimer(!0),setTimeout((function(){e.initialCount-=1,o.countDown(n)}),n)):(t.setStartTimer(!1),e.initialCount=r.value)}};return c(c({isTimerStart:n,countDownNumber:r},Object(a.h)(e)),o)}}),u=(n(358),n(70)),l=Object(u.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isTimerStart?n("div",{staticClass:"timer-wrap"},[n("p",{class:[{"is-active":e.isTimerStart},{"is-hidden":1===e.countDownNumber}]},[e._v("\n    "+e._s(e.initialCount)+"\n  ")])]):e._e()}),[],!1,null,"3656423f",null);t.default=l.exports},358:function(e,t,n){"use strict";n(353)},359:function(e,t,n){var r=n(84)(!1);r.push([e.i,".timer-wrap[data-v-3656423f]{display:flex;height:100px;align-items:center;justify-content:center}.timer-wrap p[data-v-3656423f]{font-size:5em;color:#fff}.timer-wrap p.is-active[data-v-3656423f]{color:#ddd}.timer-wrap p.is-hidden[data-v-3656423f]{visibility:hidden}",""]),e.exports=r},360:function(e,t,n){"use strict";var r=n(2),a=n(361);r({target:"String",proto:!0,forced:n(362)("link")},{link:function(e){return a(this,"a","href",e)}})},361:function(e,t,n){var r=n(6),a=n(30),i=n(22),o=/"/g,c=r("".replace);e.exports=function(e,t,n,r){var s=i(a(e)),u="<"+t;return""!==n&&(u+=" "+n+'="'+c(i(r),o,"&quot;")+'"'),u+">"+s+"</"+t+">"}},362:function(e,t,n){var r=n(7);e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},363:function(e,t,n){e.exports=n.p+"img/play.8335028.png"},364:function(e,t,n){e.exports=n.p+"img/stop.2c09d19.png"},375:function(e,t,n){var r=n(410);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(85).default)("30adc479",r,!0,{sourceMap:!1})},409:function(e,t,n){"use strict";n(375)},410:function(e,t,n){var r=n(84)(!1);r.push([e.i,".controls[data-v-fe4ec3dc]{margin-top:20px;text-align:center;position:relative}.controls .is-active[data-v-fe4ec3dc]{background-color:#fff;border:1px solid #000}.controls button img[data-v-fe4ec3dc]{margin-top:-5px}.next-wrap[data-v-fe4ec3dc]{width:100%;display:flex;justify-content:space-between}.swiper-slide[data-v-fe4ec3dc]{align-items:inherit}",""]),e.exports=r},435:function(e,t,n){"use strict";n.r(t);n(52),n(33),n(38),n(17),n(53),n(34),n(69);var r=n(29),a=n(16),i=(n(61),n(51)),o=n(354),c=n(352),s=n(357);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=Object(i.b)({name:"ComponentMix",components:{GButton:c.default,GTimer:s.default},setup:function(e,t){var n=t.root,r=Object(o.a)(),c=r.swiper,s=r.timer,u=r.game,p=r.gameType,f=r.subject,d=r.questionCount,v=r.gameList,m=r.swiperOptions,b=r.isTimerStart,g=r.activeIndex,O=r.isShow,w=r.setIsShow,h=r.mixedNum,j=Object(i.e)({type:""}),x={setGameStart:function(){if(b.value)return!1;n.$swal({showCancelButton:!0,customClass:{container:"modal_container is_cancelBtn"},confirmButtonText:"예",title:"Next Game Start 👉"}).then((function(e){e.isConfirmed&&(u.setGameStart({subject:f.value.value,questionCount:d.value}),O.value=!0,g.value=0,c.value.$swiper.slideTo(0))}))},goHome:function(){if(b.value)return!1;n.$swal({showCancelButton:!0,customClass:{container:"modal_container is_cancelBtn"},confirmButtonText:"예",title:"처음으로 이동하시겠습니까?"}).then((function(e){e.isConfirmed&&(window.location.href="/game")}))},handlePlay:function(){if("play"===j.type){j.type="pause";for(var e=0;e<h.value;e++);}else{j.type="play";for(var t=0;t<h.value;t++);}},handleStop:function(){j.type="stop";for(var e=0;e<h.value;e++);},ready:function(e){},playing:function(e,t){"play"===t&&e.target.playVideo(),"pause"===t&&e.target.pauseVideo(),"stop"===t&&e.target.stopVideo()},nextSlide:function(){return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.value.$swiper.slideNext();case 2:g.value=c.value.$swiper.activeIndex;case 4:case"end":return e.stop()}}),e)})))()},prevSlide:function(){return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.value.$swiper.slidePrev();case 2:g.value=c.value.$swiper.activeIndex;case 4:case"end":return e.stop()}}),e)})))()}};return Object(i.m)((function(){return g.value}),(function(e){j.type="pause"})),Object(i.d)((function(){})),l(l(l({swiper:c,gameType:p,subject:f,questionCount:d,gameList:v,swiperOptions:m,isTimerStart:b,activeIndex:g,timer:s,isShow:O,setIsShow:w},x),Object(i.h)(j)),{},{mixedNum:h})}}),f=(n(409),n(70)),d=Object(f.a)(p,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.gameList.length>1?r("div",{staticClass:"game-in"},[r("div",{staticClass:"info"},[r("p",[e._v(e._s(e.mixedNum)+"개 mix ("+e._s(e.activeIndex+1)+"/"+e._s(e.questionCount)+")")])]),e._v(" "),r("div",{staticClass:"controls"},[r("g-button",{class:{"is-active":"play"===e.type},attrs:{"is-gray":!0},on:{click:e.handlePlay}},[r("img",{attrs:{src:n(363),alt:"play",height:"14px;"}}),e._v("️")]),e._v(" "),r("g-button",{class:{"is-active":"stop"===e.type},attrs:{"is-gray":!0},on:{click:e.handleStop}},[r("img",{attrs:{src:n(364),alt:"stop",height:"14px"}})])],1),e._v(" "),r("div",{staticClass:"question-wrap",on:{click:function(t){return e.setIsShow(!e.isShow)}}},[e.isShow?r("div",{staticClass:"shadow"},[r("p",[r("span",[e._v(e._s(e.activeIndex+1))]),r("br"),e._v("클릭하여 확인해주세요")])]):e._e(),e._v(" "),r("swiper",{ref:"swiper",staticClass:"custom",attrs:{options:e.swiperOptions}},[e._l(e.gameList,(function(t,n){return r("swiper-slide",{key:"game_"+n},[n===e.activeIndex?r("div",e._l(t,(function(t,a){return r("div",{key:"music_"+a},[r("p",{staticStyle:{"font-size":"1.2em"}},[e._v(e._s(t.singer)+" - "+e._s(t.value))]),e._v(" "),r("client-only",[r("iframe",{attrs:{id:"sc"+n,width:"100%",height:"300",scrolling:"no",frameborder:"no",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+t.soundcloud_id+"&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true&single_active=false"}})])],1)})),0):e._e()])})),e._v(" "),e.gameList.length!==e.activeIndex+1?r("div",{staticClass:"next-wrap"},[0!==e.activeIndex?r("g-button",{attrs:{"is-gray":!0},on:{click:e.prevSlide}},[e._v("이전")]):e._e(),e._v(" "),r("g-button",{on:{click:e.nextSlide}},[e._v("다음")])],1):e._e()],2),e._v(" "),e.gameList.length===e.activeIndex+1?r("div",{staticClass:"btn-wrap"},[r("g-button",{attrs:{"is-gray":!0},on:{click:e.goHome}},[e._v("처음으로")]),e._v(" "),r("g-button",{on:{click:e.setGameStart}},[e._v("이어서 게임 시작하기")])],1):e._e()],1)]):e._e()}),[],!1,null,"fe4ec3dc",null);t.default=d.exports}}]);