(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{374:function(t,e,n){var a=n(406);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(85).default)("384b032e",a,!0,{sourceMap:!1})},405:function(t,e,n){"use strict";n(374)},406:function(t,e,n){var a=n(84),o=n(233),s=n(234),r=a(!1),i=o(s);r.push([t.i,"header[data-v-8d15842c]{text-align:center;background-color:#fff;position:relative;padding:10px}header h1[data-v-8d15842c]{font-size:1.5em;font-weight:400}header .btn__home[data-v-8d15842c]{position:absolute;top:50%;left:10px;transform:translateY(-50%);width:38px;height:38px;background:url("+i+") 50% no-repeat;text-indent:-9999em;overflow:hidden}.contents[data-v-8d15842c]{padding:20px}.contents h2[data-v-8d15842c]{font-weight:400;font-size:1.2em;margin-bottom:20px}.contents h2 span[data-v-8d15842c]{display:inline-block;color:#aaa;font-size:.8em}.contents .btn-wrap[data-v-8d15842c]{margin:0 0 0 -10px}.contents button[data-v-8d15842c]{margin:0 0 10px 10px}.footer-btn[data-v-8d15842c]{position:fixed;width:100%;bottom:0;left:0;padding:20px 20px calc(env(safe-area-inset-bottom) + 20px)}",""]),t.exports=r},444:function(t,e,n){"use strict";n.r(e);n(52),n(33),n(38),n(17),n(53),n(34),n(69);var a=n(29),o=n(51),s=n(357),r=n(352),i=n(354),c=n(385);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}var d=Object(o.b)({name:"Speed",components:{GTimer:s.default,GButton:r.default,speed:c.default},setup:function(t,e){var n=e.root,o=Object(i.a)(),s=o.game,r=o.setSubject,c=o.setQuestionCount,d=o.speed,l=o.questionCount,p=o.gameType,f=o.mainInfo,b=o.isGameStart,v=o.subject,m=o.questionNumberList;return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({setSubject:r,setQuestionCount:c,speed:d,questionCount:l,gameType:p,mainInfo:f,isGameStart:b,subject:v,questionNumberList:m},{setGameStart:function(){if(!l.value)return n.$swal("문제 갯수를 선택해주세요"),!1;n.$swal("Game Start 😆").then((function(){s.setGameStart({subject:"melody",questionCount:l.value})}))}})}}),l=d,p=(n(405),n(70)),f=Object(p.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail-wrap"},[n("header",[n("a",{staticClass:"btn__home",attrs:{href:"/game"}},[t._v("home")]),t._v(" "),n("h1",[t._v(t._s(t.mainInfo.title))])]),t._v(" "),t.isGameStart?[n("div",{staticClass:"contents"},[n("speed")],1)]:[n("div",{staticClass:"contents"},[n("h2",[t._v("문제 갯수 "),t.questionCount?n("span",[t._v("("+t._s(t.questionCount)+"개)")]):t._e()]),t._v(" "),n("div",{staticClass:"btn-wrap"},t._l(t.questionNumberList,(function(e,a){return n("g-button",{key:"question_"+a,class:{"is-active":t.questionCount===e.value},attrs:{"is-gray":!0},on:{click:function(n){return t.setQuestionCount(e.value)}}},[t._v(t._s(e.label))])})),1)]),t._v(" "),n("div",{staticClass:"footer-btn"},[n("g-button",{attrs:{"is-block":!0},on:{click:t.setGameStart}},[t._v("게임 시작하기")])],1)]],2)}),[],!1,null,"8d15842c",null);e.default=f.exports}}]);