(window.webpackJsonp=window.webpackJsonp||[]).push([[4,10],{350:function(e,t,r){var n=r(356);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(84).default)("0e097b4c",n,!0,{sourceMap:!1})},351:function(e,t,r){"use strict";r.r(t);r(49),r(32),r(37),r(16),r(50),r(33),r(68);var n=r(28),a=r(48);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var o=Object(a.b)({name:"GButton",props:{isBlock:{type:Boolean,default:!1},isGray:{type:Boolean,default:!1}},setup:function(e,t){var r=t.emit,o=Object(a.f)(!1),c={handleClick:function(e){r("click",e)},handleTouchStart:function(){o.value=!0},handleTouchEnd:function(){o.value=!1}};return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({isActiveAction:o},c)}}),c=o,s=(r(355),r(69)),u=Object(s.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{class:[{"is-block":e.isBlock},{"is-gray":e.isGray}],on:{click:e.handleClick,ontouchstart:e.handleTouchStart,ontouchend:e.handleTouchEnd}},[e._t("default")],2)}),[],!1,null,"80c3c3ba",null);t.default=u.exports},353:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r(28),a=r(14),i=(r(59),r(42),r(26),r(168),r(60),r(359),r(49),r(32),r(37),r(16),r(50),r(33),r(68),r(48)),o=r(101),c=r(231),s=r(85);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(){var e=Object(i.i)().$axios,t=Object(c.useGameStore)(),r=(Object(c.useAppStore)(),Object(i.a)((function(){return t.gameType}))),n=Object(i.a)((function(){return t.mainInfo})),u=Object(i.a)((function(){return t.subject})),p=Object(i.a)((function(){return t.countSpeed})),f=Object(i.a)((function(){return t.countDown})),d=Object(i.a)((function(){return t.questionCount})),v=Object(i.a)((function(){return t.isGameStart})),b=Object(i.a)((function(){return t.liarMode})),g=Object(i.a)((function(){return t.gameList})),m=Object(i.a)((function(){return t.isTimerStart})),w=Object(i.a)((function(){return t.giParams})),O=Object(i.a)((function(){return t.participants})),h=Object(i.j)(),j=Object(i.f)(),x=Object(i.f)(),_=Object(i.e)({speed:0,questionCount:d,gameType:r,mainInfo:n,countSpeed:p,countDown:f,isGameStart:v,subject:u,liarMode:b,gameList:g,isTimerStart:m,giParams:w,participants:O,isShow:!0,activeIndex:0,countSpeedList:o.b,questionNumberList:o.e,liarModeList:o.c,countDownList:o.a,swiperOptions:{allowTouchMove:!1,navigation:{nextEl:".swiper-button-next"},effect:"fade"}});Object(i.d)((function(){var e,r=null===(e=h.value.name)||void 0===e?void 0:e.split("-")[1];r&&(t.setGameType(r),t.setMainInfo(r))}));var y={setCountSpeed:function(e){return Object(a.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!s.c.isBusy()){r.next=4;break}return r.abrupt("return");case 4:s.c.setGuard(e*f.value);case 5:return _.speed=e,r.next=8,j.value.countDown(e);case 8:return r.next=10,t.setCountSpeed(e);case 10:case"end":return r.stop()}}),r)})))()},setCountDown:function(e){return Object(a.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.setCountDown(e);case 2:case"end":return r.stop()}}),r)})))()},setSubject:function(e,r){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setSubject({value:e,label:r});case 2:case"end":return n.stop()}}),n)})))()},setQuestionCount:function(e){return Object(a.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.setQuestionCount(e);case 2:case"end":return r.stop()}}),r)})))()},setLiarMode:function(e){return Object(a.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.setLiarMode(e);case 2:case"end":return r.stop()}}),r)})))()},nextSlide:function(){return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m.value){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,x.value.$swiper.slideNext();case 4:if(y.setIsShow(!1),_.activeIndex=x.value.$swiper.activeIndex,"complete"!==r.value&&"photo"!==r.value){e.next=10;break}return e.next=10,y.setCountSpeed(p.value);case 10:case"end":return e.stop()}}),e)})))()},setKakaoImage:function(r){return Object(a.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,e.get("https://dapi.kakao.com/v2/search/image?query=".concat(g.value[_.activeIndex].value,"&size=1"),{headers:{Authorization:"KakaoAK f34e842e06dda695d94790ca99ac845d"}}).then((function(e){t.setSearchImages({url:e.data.documents[0].image_url,index:_.activeIndex})}));case 3:case"end":return r.stop()}}),r)})))()},setGoogleImage:function(r){return Object(a.a)(regeneratorRuntime.mark((function n(){var i,o,c,s,u,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.setGoogleImagesParams(r),i=w.value,o=i.key,c=i.cx,s=i.searchType,u=i.num,l=i.q,n.prev=3,n.next=6,e.get("https://www.googleapis.com/customsearch/v1?key=".concat(o,"&cx=").concat(c,"&searchType=").concat(s,"&num=").concat(u,"&q=").concat(encodeURIComponent(l),"&c2coff=1&cr=ko&gl=ko&imgType=face&lr=lang_ko")).then(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.setSearchImages({url:r.data.items[0].link,index:_.activeIndex});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(3),n.next=12,y.setKakaoImage(g.value[_.activeIndex].value);case 12:case"end":return n.stop()}}),n,null,[[3,8]])})))()},setIsShow:function(e){_.isShow=e}};return l(l({timer:j,game:t,swiper:x},Object(i.h)(_)),y)}},355:function(e,t,r){"use strict";r(350)},356:function(e,t,r){var n=r(83)(!1);n.push([e.i,"button[data-v-80c3c3ba]{height:40px;line-height:40px;background-color:#000;border-radius:20px;text-align:center;padding:0 20px;box-sizing:border-box;color:#fff;font-weight:700;font-size:1.2em;outline:none;border:1px solid transparent}button.is-block[data-v-80c3c3ba]{display:block;width:100%;height:60px;line-height:60px;border-radius:30px}button.is-gray[data-v-80c3c3ba]{background:#f0f0f0;color:#000}button.is-active[data-v-80c3c3ba]{background:#fff;border-color:#000}",""]),e.exports=n},359:function(e,t,r){"use strict";var n=r(1),a=r(360);n({target:"String",proto:!0,forced:r(361)("link")},{link:function(e){return a(this,"a","href",e)}})},360:function(e,t,r){var n=r(6),a=r(29),i=r(21),o=/"/g,c=n("".replace);e.exports=function(e,t,r,n){var s=i(a(e)),u="<"+t;return""!==r&&(u+=" "+r+'="'+c(i(n),o,"&quot;")+'"'),u+">"+s+"</"+t+">"}},361:function(e,t,r){var n=r(7);e.exports=function(e){return n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},369:function(e,t,r){var n=r(393);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(84).default)("f614640c",n,!0,{sourceMap:!1})},392:function(e,t,r){"use strict";r(369)},393:function(e,t,r){var n=r(83)(!1);n.push([e.i,".question-wrap .swiper-slide p[data-v-3a0675d0]{line-height:1.4em}.question-wrap .swiper-slide .liar[data-v-3a0675d0]{color:#fff;background-color:#000}.question-wrap .swiper-slide .quiz[data-v-3a0675d0]{color:#fff;background-color:#999}.result-wrap .tit[data-v-3a0675d0]{font-size:1.5em;margin-bottom:20px}.result-wrap .liar-list[data-v-3a0675d0]{margin-left:-10px}.result-wrap .liar-list+.tit[data-v-3a0675d0]{margin-top:50px}.result-wrap .result-ul[data-v-3a0675d0]{display:grid;grid-template-columns:repeat(2,1fr);background-color:#f5f5f5;grid-gap:1px;gap:1px}.result-wrap .result-ul li[data-v-3a0675d0]{height:60px;outline:1px solid #fff;border-collapse:collapse;display:flex;justify-content:center;align-items:center}",""]),e.exports=n},417:function(e,t,r){"use strict";r.r(t);r(49),r(32),r(37),r(16),r(50),r(33),r(68);var n=r(28),a=r(48),i=r(353),o=r(351);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=Object(a.b)({name:"ComponentLiar",components:{GButton:o.default},setup:function(e,t){var r=t.root,n=Object(i.a)(),o=n.swiper,c=n.game,u=n.gameType,l=n.gameList,p=n.subject,f=n.liarMode,d=n.participants,v=n.swiperOptions,b=n.activeIndex,g=n.isShow,m=n.nextSlide,w=n.setIsShow,O=Object(a.e)({isEndLiar:!1,isLiarTrue:!1});return s(s({swiper:o,game:c,gameType:u,gameList:l,subject:p,liarMode:f,participants:d,swiperOptions:v,activeIndex:b,isShow:g,nextSlide:m,setIsShow:w},{endLiar:function(){O.isEndLiar=!0},checkLiar:function(e){e===c.liar.liar?r.$swal("".concat(e+1,"?????? ????????? ???????????? ????????????.")).then((function(e){e.isConfirmed&&(O.isLiarTrue=!0)})):r.$swal("".concat(e+1,"?????? ????????? ???????????? ????????????.")).then((function(e){e.isConfirmed&&(O.isLiarTrue=!1)}))},checkResult:function(e){r.$swal(e===c.liar.quiz[0]?"???????????? ????????????.":"???????????? ????????????.")},goHome:function(){r.$swal({showCancelButton:!0,customClass:{container:"modal_container is_cancelBtn"},confirmButtonText:"???",title:"???????????? ?????????????????????????"}).then((function(e){e.isConfirmed&&(window.location.href="/game")}))}}),Object(a.h)(O))}}),l=(r(392),r(69)),p=Object(l.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.liarMode?r("div",{staticClass:"game-in"},[e.isEndLiar?r("div",{staticClass:"result-wrap"},[e.isLiarTrue?e._e():[r("p",{staticClass:"tit"},[e._v("???????????? ???????????????.")]),e._v(" "),r("div",{staticClass:"liar-list"},e._l(e.game.liar.participants,(function(t){return r("g-button",{key:"liar_"+t,attrs:{"is-gray":!0},on:{click:function(r){return e.checkLiar(t)}}},[e._v(e._s(t+1)+"\n        ")])})),1)],e._v(" "),e.isLiarTrue?[r("p",{staticClass:"tit"},[e._v("???????????? ???????????????.")]),e._v(" "),r("ul",{staticClass:"result-ul"},e._l(e.gameList,(function(t,n){return r("li",{key:"result_"+n,on:{click:function(t){return e.checkResult(n)}}},[e._v("\n          "+e._s(t.value)+"\n        ")])})),0)]:e._e(),e._v(" "),r("div",{staticClass:"btn-wrap"},[r("g-button",{on:{click:e.goHome}},[e._v("????????????")])],1)],2):[r("div",{staticClass:"info"},[r("p",[e._v("????????????: "+e._s("fool"===e.liarMode?"??????":"spy"===e.liarMode?"?????????":"??????"))]),e._v(" "),r("p",[e._v("????????????: "+e._s(e.participants))]),e._v(" "),r("p",[e._v("??????: "+e._s(e.subject.label))])]),e._v(" "),r("div",{staticClass:"question-wrap",on:{click:function(t){return e.setIsShow(!e.isShow)}}},[r("swiper",{ref:"swiper",staticClass:"custom",attrs:{options:e.swiperOptions}},[e._l(e.game.liar.participants,(function(t){return r("swiper-slide",{key:"game_"+t},[e.isShow?r("div",{staticClass:"shadow"},[r("p",[r("span",[e._v(e._s(t+1))]),r("br"),e._v("???????????? ??????????????????")])]):e._e(),e._v(" "),"fool"!==e.liarMode&&t===e.game.liar.liar?r("p",[e._v("\n            ????????? "),r("span",{staticClass:"liar"},[e._v("?????????")]),e._v("?????????.\n          ")]):"spy"===e.liarMode&&t===e.game.liar.spy?r("p",[e._v("\n            ????????? "),r("span",{staticClass:"liar"},[e._v("?????????")]),e._v("?????????."),r("br"),e._v("\n            ???????????? "),r("span",{staticClass:"quiz"},[e._v(e._s(e.gameList[e.game.liar.quiz[0]].value))]),e._v("?????????.\n          ")]):"fool"===e.liarMode&&t===e.game.liar.liar?r("p",[e._v("\n            ????????? "),r("span",{staticClass:"liar"},[e._v("?????? ??????")]),e._v("?????????."),r("br"),e._v("\n            ???????????? "),r("span",{staticClass:"quiz"},[e._v(e._s(e.gameList[e.game.liar.quiz[1]].value))]),e._v("?????????.\n          ")]):r("p",[e._v("\n            ????????? "),r("span",{staticClass:"liar"},[e._v("?????? ??????")]),e._v("?????????."),r("br"),e._v("\n            ???????????? "),r("span",{staticClass:"quiz"},[e._v(e._s(e.gameList[e.game.liar.quiz[0]].value))]),e._v("?????????.\n          ")])])})),e._v(" "),e.game.liar.participants.length!==e.activeIndex+1?r("div",{staticClass:"next-wrap"},[r("g-button",{on:{click:e.nextSlide}},[e._v("??????")])],1):r("div",{staticClass:"next-wrap"},[r("g-button",{on:{click:e.endLiar}},[e._v("?????? ??????")])],1)],2)],1)]],2):e._e()}),[],!1,null,"3a0675d0",null);t.default=p.exports}}]);