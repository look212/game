(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{365:function(t,e,n){var a=n(380);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(83).default)("2cc5918b",a,!0,{sourceMap:!1})},379:function(t,e,n){"use strict";n(365)},380:function(t,e,n){var a=n(82),s=n(232),o=n(233),r=a(!1),i=s(o);r.push([t.i,"header[data-v-e65e532e]{text-align:center;background-color:#fff;position:relative;padding:10px}header h1[data-v-e65e532e]{font-size:1.5em;font-weight:400}header .btn__home[data-v-e65e532e]{position:absolute;top:50%;left:10px;transform:translateY(-50%);width:38px;height:38px;background:url("+i+") 50% no-repeat;text-indent:-9999em;overflow:hidden}.contents[data-v-e65e532e]{padding:20px}.contents h2[data-v-e65e532e]{font-weight:400;font-size:1.2em;margin-bottom:20px}.contents h2 span[data-v-e65e532e]{display:inline-block;color:#aaa;font-size:.8em}.contents .btn-wrap[data-v-e65e532e]{margin:0 0 0 -10px}.contents button[data-v-e65e532e]{margin:0 0 10px 10px}.footer-btn[data-v-e65e532e]{position:fixed;width:100%;bottom:0;left:0;padding:20px 20px calc(env(safe-area-inset-bottom) + 20px)}",""]),t.exports=r},411:function(t,e,n){"use strict";n.r(e);n(49),n(32),n(37),n(16),n(50),n(33),n(64);var a=n(27),s=n(48),o=n(354),r=n(352),i=n(353),u=n(402);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}var l=Object(s.b)({name:"Drama",components:{GTimer:o.default,GButton:r.default,drama:u.default},setup:function(t,e){var n=e.root,s=Object(i.a)(),o=s.game,r=s.setSubject,u=s.setQuestionCount,l=s.speed,b=s.questionCount,p=s.gameType,v=s.mainInfo,f=s.isGameStart,d=s.subject,m=s.questionNumberList;return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({setSubject:r,setQuestionCount:u,speed:l,questionCount:b,gameType:p,mainInfo:v,isGameStart:f,subject:d,questionNumberList:m},{setGameStart:function(){return d.value.value?b.value?void n.$swal("Game Start 😆").then((function(){o.setGameStart({subject:d.value.value,questionCount:b.value})})):(n.$swal("문제 갯수를 선택해주세요"),!1):(n.$swal("주제를 선택해주세요"),!1)}})}}),b=l,p=(n(379),n(65)),v=Object(p.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail-wrap"},[n("header",[n("a",{staticClass:"btn__home",attrs:{href:"/game"}},[t._v("home")]),t._v(" "),n("h1",[t._v(t._s(t.mainInfo.title))])]),t._v(" "),t.isGameStart?[n("div",{staticClass:"contents"},[n("drama")],1)]:[n("div",{staticClass:"contents"},[n("h2",[t._v("주제 "),t.subject.label?n("span",[t._v("("+t._s(t.subject.label)+")")]):t._e()]),t._v(" "),n("div",{staticClass:"btn-wrap"},t._l(t.mainInfo.subject,(function(e,a){return n("g-button",{key:"subject_"+a,class:{"is-active":t.subject.value===e.value},attrs:{"is-gray":!0},on:{click:function(n){return t.setSubject(e.value,e.label)}}},[t._v(t._s(e.label))])})),1)]),t._v(" "),n("div",{staticClass:"contents"},[n("h2",[t._v("문제 갯수 "),t.questionCount?n("span",[t._v("("+t._s(t.questionCount)+"개)")]):t._e()]),t._v(" "),n("div",{staticClass:"btn-wrap"},t._l(t.questionNumberList,(function(e,a){return n("g-button",{key:"question_"+a,class:{"is-active":t.questionCount===e.value},attrs:{"is-gray":!0},on:{click:function(n){return t.setQuestionCount(e.value)}}},[t._v(t._s(e.label))])})),1)]),t._v(" "),n("div",{staticClass:"footer-btn"},[n("g-button",{attrs:{"is-block":!0},on:{click:t.setGameStart}},[t._v("게임 시작하기")])],1)]],2)}),[],!1,null,"e65e532e",null);e.default=v.exports}}]);