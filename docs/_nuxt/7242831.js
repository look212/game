(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,3],{302:function(t,e,n){var content=n(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("d5c672e6",content,!0,{sourceMap:!1})},303:function(t,e,n){var content=n(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("76f4fca8",content,!0,{sourceMap:!1})},304:function(t,e,n){"use strict";n(302)},305:function(t,e,n){var r=n(75)(!1);r.push([t.i,"button[data-v-7681f6d2]{height:40px;line-height:40px;background-color:#000;border-radius:20px;text-align:center;padding:0 20px;box-sizing:border-box;color:#fff;font-weight:700;font-size:1.2em;outline:none}button.is-block[data-v-7681f6d2]{display:block;width:100%;height:60px;line-height:60px;border-radius:12px}button.is-gray[data-v-7681f6d2]{background:#f0f0f0;color:#000}",""]),t.exports=r},306:function(t,e,n){"use strict";n.r(e);n(51),n(30),n(50),n(20),n(52),n(42),n(74);var r=n(31),o=n(43);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l=Object(o.b)({name:"GButton",props:{isBlock:{type:Boolean,default:!1},isGray:{type:Boolean,default:!1}},setup:function(t,e){var n=e.emit;return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},{handleClick:function(t){n("click",t)}})}}),f=l,d=(n(304),n(61)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{class:[{"is-block":t.isBlock},{"is-gray":t.isGray}],on:{click:t.handleClick}},[t._t("default")],2)}),[],!1,null,"7681f6d2",null);e.default=component.exports},307:function(t,e,n){"use strict";var r=n(18),o=n(1),c=n(6),l=n(93),f=n(25),d=n(16),v=n(159),m=n(53),y=n(125),O=n(210),j=n(8),h=n(77).f,_=n(32).f,w=n(22).f,x=n(308),I=n(309).trim,S="Number",N=o.Number,P=N.prototype,C=o.TypeError,k=c("".slice),D=c("".charCodeAt),E=function(t){var e=O(t,"number");return"bigint"==typeof e?e:A(e)},A=function(t){var e,n,r,o,c,l,f,code,d=O(t,"number");if(y(d))throw C("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=I(d),43===(e=D(d,0))||45===e){if(88===(n=D(d,2))||120===n)return NaN}else if(48===e){switch(D(d,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(l=(c=k(d,2)).length,f=0;f<l;f++)if((code=D(c,f))<48||code>o)return NaN;return parseInt(c,r)}return+d};if(l(S,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var T,M=function(t){var e=arguments.length<1?0:N(E(t)),n=this;return m(P,n)&&j((function(){x(n)}))?v(Object(e),n,M):e},G=r?h(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),L=0;G.length>L;L++)d(N,T=G[L])&&!d(M,T)&&w(M,T,_(N,T));M.prototype=P,P.constructor=M,f(o,S,M)}},308:function(t,e,n){var r=n(6);t.exports=r(1..valueOf)},309:function(t,e,n){var r=n(6),o=n(28),c=n(21),l=n(310),f=r("".replace),d="["+l+"]",v=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),y=function(t){return function(e){var n=c(o(e));return 1&t&&(n=f(n,v,"")),2&t&&(n=f(n,m,"")),n}};t.exports={start:y(1),end:y(2),trim:y(3)}},310:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},311:function(t,e,n){"use strict";n(303)},312:function(t,e,n){var r=n(75)(!1);r.push([t.i,".timer-wrap[data-v-36352a8e]{display:flex;height:200px;align-items:center;justify-content:center}.timer-wrap p[data-v-36352a8e]{font-size:5em}",""]),t.exports=r},313:function(t,e,n){"use strict";n.r(e);var r=n(31),o=(n(307),n(78),n(51),n(30),n(50),n(20),n(52),n(42),n(74),n(43)),c=n(209);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=Object(o.b)({name:"GTimer",props:{time:{type:Number,default:3},delay:{type:Number,default:1e3}},setup:function(t,e){e.emit;var data=Object(o.e)({timer:0,isOver:!1}),n=Object(c.useGameStore)(),r=Object(o.a)((function(){return n.isTimerStart}));Object(o.d)((function(){data.timer=t.time}));var l={countDown:function(){data.timer>0?(n.setStartTimer(!0),data.isOver=!1,setTimeout((function(){data.timer-=1,l.countDown()}),t.delay)):(data.isOver=!0,n.setStartTimer(!1),data.timer=t.time)}};return f(f({isTimerStart:r},Object(o.h)(data)),l)}}),v=(n(311),n(61)),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isTimerStart,expression:"isTimerStart"}],staticClass:"timer-wrap"},[n("p",[t._v("\n    "+t._s(t.timer)+"\n  ")])])}),[],!1,null,"36352a8e",null);e.default=component.exports},314:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},315:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik02LjEzOSAxNUgyNU0xMy43NzggNi4yNSA1IDE1LjAyOGw4Ljc3OCA4Ljc3OCIvPgogICAgPC9nPgo8L3N2Zz4K"},319:function(t,e,n){var content=n(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("7e2ff748",content,!0,{sourceMap:!1})},327:function(t,e,n){"use strict";n(319)},328:function(t,e,n){var r=n(75),o=n(314),c=n(315),l=r(!1),f=o(c);l.push([t.i,"header[data-v-199bbb8b]{text-align:center;background-color:#fff;position:relative;padding:10px}header h1[data-v-199bbb8b]{font-size:1.5em;font-weight:400}header .btn__home[data-v-199bbb8b]{position:absolute;top:50%;left:10px;transform:translateY(-50%);width:38px;height:38px;background:url("+f+") 50% no-repeat;text-indent:-9999em;overflow:hidden}.contents[data-v-199bbb8b]{padding:20px}.contents h2[data-v-199bbb8b]{font-weight:400;font-size:1.2em;margin-bottom:20px}.contents h2 span[data-v-199bbb8b]{display:inline-block;color:#aaa;font-size:.8em}.contents .btn-wrap[data-v-199bbb8b]{margin:0 0 0 -10px}.contents button[data-v-199bbb8b]{margin:0 0 10px 10px}.footer-btn[data-v-199bbb8b]{position:fixed;width:100%;bottom:env(safe-area-inset-bottom);left:0;padding:20px}",""]),t.exports=l},334:function(t,e,n){"use strict";n.r(e);var r=n(31),o=(n(44),n(33),n(160),n(51),n(30),n(50),n(20),n(52),n(42),n(74),n(43)),c=n(209),l=n(313),f=n(306),d=n(94);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=Object(o.b)({name:"Talk",components:{GTimer:l.default,GButton:f.default},setup:function(t,e){var n=e.root,r=Object(c.useGameStore)(),l=Object(o.a)((function(){return r.gameType})),f=Object(o.a)((function(){return r.mainInfo})),v=Object(o.a)((function(){return r.subject})),y=Object(o.a)((function(){return r.timerDelay})),O=Object(o.a)((function(){return r.questionCount})),j=Object(o.a)((function(){return r.gameStart})),h=Object(o.i)(),_=Object(o.f)(),data=Object(o.e)({delay:0,isStart:!1,subjectVal:v.value.value,questionCount:O,gameType:l,mainInfo:f,timerDelay:y,gameStart:j,subject:v});Object(o.d)((function(){var t,e=null===(t=h.value.name)||void 0===t?void 0:t.split("-")[1];e&&(r.setGameType(e),r.setMainInfo(e))}));var w={setDelay:function(t){data.delay=t,_.value.countDown(),r.setTimerDelay(t)},setSubject:function(t,label){r.setSubject({value:t,label:label})},setQuestionCount:function(t){r.setQuestionCount(t)},setGameStart:function(){return v.value.value?data.delay?O.value?void r.setGameStart():(n.$swal("문제 갯수를 선택해주세요"),!1):(n.$swal("속도를 선택해주세요"),!1):(n.$swal("주제를 선택해주세요"),!1)}};return m(m({Timer:_,delayList:d.a,questionNumberList:d.c},Object(o.h)(data)),w)}}),O=(n(327),n(61)),component=Object(O.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",[n("a",{staticClass:"btn__home",attrs:{href:"/game"}},[t._v("home")]),t._v(" "),n("h1",[t._v(t._s(t.mainInfo.title))])]),t._v(" "),[n("div",{staticClass:"contents"},[n("h2",[t._v("주제 "),t.subject.label?n("span",[t._v("("+t._s(t.subject.label)+")")]):t._e()]),t._v(" "),n("div",{staticClass:"btn-wrap"},t._l(t.mainInfo.subject,(function(e,r){return n("g-button",{key:"subject_"+r,attrs:{"is-gray":!0},on:{click:function(n){return t.setSubject(e.value,e.label)}}},[t._v(t._s(e.label))])})),1)]),t._v(" "),n("div",{staticClass:"contents"},[n("h2",[t._v("속도\n        "),t.delayList.find((function(e){return e.delay===t.timerDelay}))?n("span",[t._v("\n        ("+t._s(t.delayList.find((function(e){return e.delay===t.timerDelay})).display_delay)+")\n      ")]):t._e()]),t._v(" "),n("div",{staticClass:"btn-wrap"},t._l(t.delayList,(function(e,r){return n("g-button",{key:"delay_"+r,attrs:{"is-gray":!0},on:{click:function(n){return t.setDelay(e.delay)}}},[t._v(t._s(e.display_delay))])})),1),t._v(" "),n("g-timer",{ref:"Timer",attrs:{delay:t.delay}})],1),t._v(" "),n("div",{staticClass:"contents"},[n("h2",[t._v("문제 갯수 "),t.questionCount?n("span",[t._v("("+t._s(t.questionCount)+")")]):t._e()]),t._v(" "),n("div",{staticClass:"btn-wrap"},t._l(t.questionNumberList,(function(e,r){return n("g-button",{key:"question_"+r,attrs:{"is-gray":!0},on:{click:function(n){return t.setQuestionCount(e.value)}}},[t._v(t._s(e.label))])})),1)]),t._v(" "),n("div",{staticClass:"footer-btn"},[n("g-button",{attrs:{"is-block":!0},on:{click:t.setGameStart}},[t._v("게임 시작하기")])],1)]],2)}),[],!1,null,"199bbb8b",null);e.default=component.exports}}]);