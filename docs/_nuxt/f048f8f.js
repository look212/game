(window.webpackJsonp=window.webpackJsonp||[]).push([[4,11],{351:function(e,t,r){var n=r(356);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(85).default)("4d0a3c63",n,!0,{sourceMap:!1})},352:function(e,t,r){"use strict";r.r(t);r(52),r(33),r(38),r(17),r(53),r(34),r(69);var n=r(29),a=r(51);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var o=Object(a.b)({name:"GButton",props:{isBlock:{type:Boolean,default:!1},isGray:{type:Boolean,default:!1}},setup:function(e,t){var r=t.emit;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},{handleClick:function(e){r("click",e)}})}}),c=o,s=(r(355),r(70)),u=Object(s.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{class:[{"is-block":e.isBlock},{"is-gray":e.isGray}],on:{click:e.handleClick}},[e._t("default")],2)}),[],!1,null,"77047ee3",null);t.default=u.exports},354:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r(29),a=r(16),i=(r(61),r(43),r(27),r(169),r(62),r(360),r(52),r(33),r(38),r(17),r(53),r(34),r(69),r(51)),o=r(102),c=r(232),s=r(86);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(){var e=Object(i.i)().$axios,t=Object(c.useGameStore)(),r=(Object(c.useAppStore)(),Object(i.a)((function(){return t.gameType}))),n=Object(i.a)((function(){return t.mainInfo})),u=Object(i.a)((function(){return t.subject})),p=Object(i.a)((function(){return t.countSpeed})),f=Object(i.a)((function(){return t.countDown})),d=Object(i.a)((function(){return t.questionCount})),v=Object(i.a)((function(){return t.isGameStart})),b=Object(i.a)((function(){return t.liarMode})),m=Object(i.a)((function(){return t.gameList})),g=Object(i.a)((function(){return t.isTimerStart})),w=Object(i.a)((function(){return t.giParams})),O=Object(i.a)((function(){return t.participants})),h=Object(i.a)((function(){return t.mixedNum})),j=Object(i.j)(),x=Object(i.f)(),_=Object(i.f)(),y=Object(i.e)({speed:0,questionCount:d,gameType:r,mainInfo:n,countSpeed:p,countDown:f,isGameStart:v,subject:u,liarMode:b,gameList:m,isTimerStart:g,giParams:w,participants:O,mixedNum:h,isShow:!0,activeIndex:0,countSpeedList:o.b,questionNumberList:o.f,liarModeList:o.c,countDownList:o.a,mixedList:o.e,swiperOptions:{allowTouchMove:!1,navigation:{nextEl:".swiper-button-next"},effect:"fade"}});Object(i.d)((function(){var e,r=null===(e=j.value.name)||void 0===e?void 0:e.split("-")[1];r&&(t.setGameType(r),t.setMainInfo(r))}));var k={setCountSpeed:function(e){return Object(a.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!s.c.isBusy()){r.next=4;break}return r.abrupt("return");case 4:s.c.setGuard(e*f.value);case 5:return y.speed=e,r.next=8,x.value.countDown(e);case 8:return r.next=10,t.setCountSpeed(e);case 10:case"end":return r.stop()}}),r)})))()},setCountDown:function(e){return Object(a.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.setCountDown(e);case 2:case"end":return r.stop()}}),r)})))()},setSubject:function(e,r){return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setSubject({value:e,label:r});case 2:case"end":return n.stop()}}),n)})))()},setQuestionCount:function(e){return Object(a.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.setQuestionCount(e);case 2:case"end":return r.stop()}}),r)})))()},setLiarMode:function(e){return Object(a.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.setLiarMode(e);case 2:case"end":return r.stop()}}),r)})))()},nextSlide:function(){return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g.value){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,_.value.$swiper.slideNext();case 4:if(k.setIsShow(!1),y.activeIndex=_.value.$swiper.activeIndex,"complete"!==r.value&&"photo"!==r.value){e.next=10;break}return e.next=10,k.setCountSpeed(p.value);case 10:case"end":return e.stop()}}),e)})))()},setKakaoImage:function(r){return Object(a.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,e.get("https://dapi.kakao.com/v2/search/image?query=".concat(m.value[y.activeIndex].value,"&size=1"),{headers:{Authorization:"KakaoAK f34e842e06dda695d94790ca99ac845d"}}).then((function(e){t.setSearchImages({url:e.data.documents[0].image_url,index:y.activeIndex})}));case 3:case"end":return r.stop()}}),r)})))()},setGoogleImage:function(r){return Object(a.a)(regeneratorRuntime.mark((function n(){var i,o,c,s,u,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.setGoogleImagesParams(r),i=w.value,o=i.key,c=i.cx,s=i.searchType,u=i.num,l=i.q,n.prev=3,n.next=6,e.get("https://www.googleapis.com/customsearch/v1?key=".concat(o,"&cx=").concat(c,"&searchType=").concat(s,"&num=").concat(u,"&q=").concat(encodeURIComponent(l),"&c2coff=1&cr=ko&gl=ko&imgType=face&lr=lang_ko")).then(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.setSearchImages({url:r.data.items[0].link,index:y.activeIndex});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(3),n.next=12,k.setKakaoImage(m.value[y.activeIndex].value);case 12:case"end":return n.stop()}}),n,null,[[3,8]])})))()},setIsShow:function(e){y.isShow=e},setMixedNumber:function(e){t.setMixedNumber(e)}};return l(l({timer:x,game:t,swiper:_},Object(i.h)(y)),k)}},355:function(e,t,r){"use strict";r(351)},356:function(e,t,r){var n=r(84)(!1);n.push([e.i,"button[data-v-77047ee3]{height:40px;line-height:40px;background-color:#000;border-radius:20px;text-align:center;padding:0 20px;box-sizing:border-box;color:#fff;font-weight:700;font-size:1.2em;outline:none;border:1px solid transparent}button.is-block[data-v-77047ee3]{display:block;width:100%;height:60px;line-height:60px;border-radius:30px}button.is-gray[data-v-77047ee3]{background:#f0f0f0;color:#000}button.is-active[data-v-77047ee3]{background:#fff;border-color:#000}",""]),e.exports=n},360:function(e,t,r){"use strict";var n=r(2),a=r(361);n({target:"String",proto:!0,forced:r(362)("link")},{link:function(e){return a(this,"a","href",e)}})},361:function(e,t,r){var n=r(6),a=r(30),i=r(22),o=/"/g,c=n("".replace);e.exports=function(e,t,r,n){var s=i(a(e)),u="<"+t;return""!==r&&(u+=" "+r+'="'+c(i(n),o,"&quot;")+'"'),u+">"+s+"</"+t+">"}},362:function(e,t,r){var n=r(7);e.exports=function(e){return n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},372:function(e,t,r){var n=r(404);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(85).default)("f614640c",n,!0,{sourceMap:!1})},403:function(e,t,r){"use strict";r(372)},404:function(e,t,r){var n=r(84)(!1);n.push([e.i,".question-wrap .swiper-slide p[data-v-3a0675d0]{line-height:1.4em}.question-wrap .swiper-slide .liar[data-v-3a0675d0]{color:#fff;background-color:#000}.question-wrap .swiper-slide .quiz[data-v-3a0675d0]{color:#fff;background-color:#999}.result-wrap .tit[data-v-3a0675d0]{font-size:1.5em;margin-bottom:20px}.result-wrap .liar-list[data-v-3a0675d0]{margin-left:-10px}.result-wrap .liar-list+.tit[data-v-3a0675d0]{margin-top:50px}.result-wrap .result-ul[data-v-3a0675d0]{display:grid;grid-template-columns:repeat(2,1fr);background-color:#f5f5f5;grid-gap:1px;gap:1px}.result-wrap .result-ul li[data-v-3a0675d0]{height:60px;outline:1px solid #fff;border-collapse:collapse;display:flex;justify-content:center;align-items:center}",""]),e.exports=n},434:function(e,t,r){"use strict";r.r(t);r(52),r(33),r(38),r(17),r(53),r(34),r(69);var n=r(29),a=r(51),i=r(354),o=r(352);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=Object(a.b)({name:"ComponentLiar",components:{GButton:o.default},setup:function(e,t){var r=t.root,n=Object(i.a)(),o=n.swiper,c=n.game,u=n.gameType,l=n.gameList,p=n.subject,f=n.liarMode,d=n.participants,v=n.swiperOptions,b=n.activeIndex,m=n.isShow,g=n.nextSlide,w=n.setIsShow,O=Object(a.e)({isEndLiar:!1,isLiarTrue:!1});return s(s({swiper:o,game:c,gameType:u,gameList:l,subject:p,liarMode:f,participants:d,swiperOptions:v,activeIndex:b,isShow:m,nextSlide:g,setIsShow:w},{endLiar:function(){O.isEndLiar=!0},checkLiar:function(e){e===c.liar.liar?r.$swal("".concat(e+1,"번째 사람은 라이어가 맞습니다.")).then((function(e){e.isConfirmed&&(O.isLiarTrue=!0)})):r.$swal("".concat(e+1,"번째 사람은 라이어가 아닙니다.")).then((function(e){e.isConfirmed&&(O.isLiarTrue=!1)}))},checkResult:function(e){r.$swal(e===c.liar.quiz[0]?"제시어가 맞습니다.":"제시어가 아닙니다.")},goHome:function(){r.$swal({showCancelButton:!0,customClass:{container:"modal_container is_cancelBtn"},confirmButtonText:"예",title:"처음으로 이동하시겠습니까?"}).then((function(e){e.isConfirmed&&(window.location.href="/game")}))}}),Object(a.h)(O))}}),l=(r(403),r(70)),p=Object(l.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.liarMode?r("div",{staticClass:"game-in"},[e.isEndLiar?r("div",{staticClass:"result-wrap"},[e.isLiarTrue?e._e():[r("p",{staticClass:"tit"},[e._v("라이어를 골라주세요.")]),e._v(" "),r("div",{staticClass:"liar-list"},e._l(e.game.liar.participants,(function(t){return r("g-button",{key:"liar_"+t,attrs:{"is-gray":!0},on:{click:function(r){return e.checkLiar(t)}}},[e._v(e._s(t+1)+"\n        ")])})),1)],e._v(" "),e.isLiarTrue?[r("p",{staticClass:"tit"},[e._v("제시어를 골라주세요.")]),e._v(" "),r("ul",{staticClass:"result-ul"},e._l(e.gameList,(function(t,n){return r("li",{key:"result_"+n,on:{click:function(t){return e.checkResult(n)}}},[e._v("\n          "+e._s(t.value)+"\n        ")])})),0)]:e._e(),e._v(" "),r("div",{staticClass:"btn-wrap"},[r("g-button",{on:{click:e.goHome}},[e._v("처음으로")])],1)],2):[r("div",{staticClass:"info"},[r("p",[e._v("게임모드: "+e._s("fool"===e.liarMode?"바보":"spy"===e.liarMode?"스파이":"기본"))]),e._v(" "),r("p",[e._v("참여인원: "+e._s(e.participants))]),e._v(" "),r("p",[e._v("주제: "+e._s(e.subject.label))])]),e._v(" "),r("div",{staticClass:"question-wrap",on:{click:function(t){return e.setIsShow(!e.isShow)}}},[r("swiper",{ref:"swiper",staticClass:"custom",attrs:{options:e.swiperOptions}},[e._l(e.game.liar.participants,(function(t){return r("swiper-slide",{key:"game_"+t},[e.isShow?r("div",{staticClass:"shadow"},[r("p",[r("span",[e._v(e._s(t+1))]),r("br"),e._v("클릭하여 확인해주세요")])]):e._e(),e._v(" "),"fool"!==e.liarMode&&t===e.game.liar.liar?r("p",[e._v("\n            당신은 "),r("span",{staticClass:"liar"},[e._v("라이어")]),e._v("입니다.\n          ")]):"spy"===e.liarMode&&t===e.game.liar.spy?r("p",[e._v("\n            당신은 "),r("span",{staticClass:"liar"},[e._v("스파이")]),e._v("입니다."),r("br"),e._v("\n            제시어는 "),r("span",{staticClass:"quiz"},[e._v(e._s(e.gameList[e.game.liar.quiz[0]].value))]),e._v("입니다.\n          ")]):"fool"===e.liarMode&&t===e.game.liar.liar?r("p",[e._v("\n            당신은 "),r("span",{staticClass:"liar"},[e._v("일반 시민")]),e._v("입니다."),r("br"),e._v("\n            제시어는 "),r("span",{staticClass:"quiz"},[e._v(e._s(e.gameList[e.game.liar.quiz[1]].value))]),e._v("입니다.\n          ")]):r("p",[e._v("\n            당신은 "),r("span",{staticClass:"liar"},[e._v("일반 시민")]),e._v("입니다."),r("br"),e._v("\n            제시어는 "),r("span",{staticClass:"quiz"},[e._v(e._s(e.gameList[e.game.liar.quiz[0]].value))]),e._v("입니다.\n          ")])])})),e._v(" "),e.game.liar.participants.length!==e.activeIndex+1?r("div",{staticClass:"next-wrap"},[r("g-button",{on:{click:e.nextSlide}},[e._v("다음")])],1):r("div",{staticClass:"next-wrap"},[r("g-button",{on:{click:e.endLiar}},[e._v("게임 결과")])],1)],2)],1)]],2):e._e()}),[],!1,null,"3a0675d0",null);t.default=p.exports}}]);