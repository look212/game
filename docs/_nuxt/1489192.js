(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{324:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},325:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik02LjEzOSAxNUgyNU0xMy43NzggNi4yNSA1IDE1LjAyOGw4Ljc3OCA4Ljc3OCIvPgogICAgPC9nPgo8L3N2Zz4K"},327:function(t,e,n){var a=n(336);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(80).default)("33f3e18a",a,!0,{sourceMap:!1})},335:function(t,e,n){"use strict";n(327)},336:function(t,e,n){var a=n(79),o=n(324),s=n(325),i=a(!1),u=o(s);i.push([t.i,".detail-wrap[data-v-a593a016]{margin-bottom:100px}header[data-v-a593a016]{text-align:center;background-color:#fff;position:relative;padding:10px}header h1[data-v-a593a016]{font-size:1.5em;font-weight:400}header .btn__home[data-v-a593a016]{position:absolute;top:50%;left:10px;transform:translateY(-50%);width:38px;height:38px;background:url("+u+") 50% no-repeat;text-indent:-9999em;overflow:hidden}.contents[data-v-a593a016]{padding:20px}.contents h2[data-v-a593a016]{font-weight:400;font-size:1.2em;margin-bottom:20px}.contents h2 span[data-v-a593a016]{display:inline-block;color:#aaa;font-size:.8em}.contents .btn-wrap[data-v-a593a016]{margin:0 0 0 -10px}.contents button[data-v-a593a016]{margin:0 0 10px 10px}.footer-btn[data-v-a593a016]{position:fixed;width:100%;bottom:0;left:0;padding:20px 20px calc(env(safe-area-inset-bottom) + 20px)}",""]),t.exports=i},348:function(t,e,n){"use strict";n.r(e);n(53),n(32),n(43),n(20),n(54),n(38),n(78);var a=n(33),o=n(44),s=n(322),i=n(319),u=n(323),r=n(347);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}var l=Object(o.b)({name:"Complete",components:{GTimer:s.default,GButton:i.default,complete:r.default},setup:function(t,e){var n=e.root,o=Object(u.a)(),s=o.timer,i=o.game,r=o.speed,l=o.questionCount,p=o.gameType,d=o.mainInfo,v=o.countSpeed,b=o.countDown,f=o.isGameStart,_=o.isTimerStart,g=o.subject,m=o.countSpeedList,w=o.countDownList,C=o.questionNumberList,h=o.setCountSpeed,y=o.setCountDown;return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({setCountSpeed:h,setSubject:o.setSubject,setQuestionCount:o.setQuestionCount,setCountDown:y,timer:s,speed:r,questionCount:l,gameType:p,mainInfo:d,countSpeed:v,countDown:b,isGameStart:f,isTimerStart:_,subject:g,countSpeedList:m,countDownList:w,questionNumberList:C},{setGameStart:function(){return!_.value&&(g.value.value?l.value?r.value?void n.$swal("Game Start 😆").then((function(){i.setTalkStart({subject:g.value.value,questionCount:l.value})})):(n.$swal("속도를 선택해주세요"),!1):(n.$swal("문제 갯수를 선택해주세요"),!1):(n.$swal("주제를 선택해주세요"),!1))}})}}),p=l,d=(n(335),n(62)),v=Object(d.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail-wrap"},[n("header",[n("a",{staticClass:"btn__home",attrs:{href:"/game"}},[t._v("home")]),t._v(" "),n("h1",[t._v(t._s(t.mainInfo.title))])]),t._v(" "),t.isGameStart?[n("div",{staticClass:"contents"},[n("complete")],1)]:[n("div",{staticClass:"contents"},[n("h2",[t._v("주제 "),t.subject.label?n("span",[t._v("("+t._s(t.subject.label)+")")]):t._e()]),t._v(" "),n("div",{staticClass:"btn-wrap"},t._l(t.mainInfo.subject,(function(e,a){return n("g-button",{key:"subject_"+a,attrs:{"is-active-action":!0,"is-gray":!0},on:{click:function(n){return t.setSubject(e.value,e.label)}}},[t._v(t._s(e.label))])})),1)]),t._v(" "),n("div",{staticClass:"contents"},[n("h2",[t._v("문제 갯수 "),t.questionCount?n("span",[t._v("("+t._s(t.questionCount)+"개)")]):t._e()]),t._v(" "),n("div",{staticClass:"btn-wrap"},t._l(t.questionNumberList,(function(e,a){return n("g-button",{key:"question_"+a,attrs:{"is-active-action":!0,"is-gray":!0},on:{click:function(n){return t.setQuestionCount(e.value)}}},[t._v(t._s(e.label))])})),1)]),t._v(" "),n("div",{staticClass:"contents"},[n("h2",[t._v("카운트 숫자\n        "),t.countDownList.find((function(e){return e.value===t.countDown}))?n("span",[t._v("\n        ("+t._s(t.countDownList.find((function(e){return e.value===t.countDown})).label)+")\n      ")]):t._e()]),t._v(" "),n("div",{staticClass:"btn-wrap"},t._l(t.countDownList,(function(e,a){return n("g-button",{key:"delay_"+a,attrs:{"is-active-action":!0,"is-gray":!0},on:{click:function(n){return t.setCountDown(e.value)}}},[t._v(t._s(e.label))])})),1)]),t._v(" "),n("div",{staticClass:"contents"},[n("h2",[t._v("카운트 속도\n        "),t.countSpeedList.find((function(e){return e.value===t.countSpeed}))?n("span",[t._v("\n        ("+t._s(t.countSpeedList.find((function(e){return e.value===t.countSpeed})).label)+")\n      ")]):t._e()]),t._v(" "),n("div",{staticClass:"btn-wrap"},t._l(t.countSpeedList,(function(e,a){return n("g-button",{key:"delay_"+a,attrs:{"is-active-action":!0,"is-gray":!0},on:{click:function(n){return t.setCountSpeed(e.value)}}},[t._v(t._s(e.label))])})),1),t._v(" "),n("g-timer",{ref:"timer"})],1),t._v(" "),n("div",{staticClass:"footer-btn"},[n("g-button",{attrs:{"is-block":!0},on:{click:t.setGameStart}},[t._v("게임 시작하기")])],1)]],2)}),[],!1,null,"a593a016",null);e.default=v.exports}}]);