(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{366:function(t,e,n){var a=n(381);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(82).default)("dc37c8c0",a,!0,{sourceMap:!1})},380:function(t,e,n){"use strict";n(366)},381:function(t,e,n){var a=n(81),s=n(232),o=n(233),i=a(!1),r=s(o);i.push([t.i,"header[data-v-b788540c]{text-align:center;background-color:#fff;position:relative;padding:10px}header h1[data-v-b788540c]{font-size:1.5em;font-weight:400}header .btn__home[data-v-b788540c]{position:absolute;top:50%;left:10px;transform:translateY(-50%);width:38px;height:38px;background:url("+r+") 50% no-repeat;text-indent:-9999em;overflow:hidden}.contents[data-v-b788540c]{padding:20px}.contents h2[data-v-b788540c]{font-weight:400;font-size:1.2em;margin-bottom:20px}.contents h2 span[data-v-b788540c]{display:inline-block;color:#aaa;font-size:.8em}.contents .btn-wrap[data-v-b788540c]{margin:0 0 0 -10px}.contents button[data-v-b788540c]{margin:0 0 10px 10px}.footer-btn[data-v-b788540c]{position:fixed;width:100%;bottom:0;left:0;padding:20px 20px calc(env(safe-area-inset-bottom) + 20px)}",""]),t.exports=i},397:function(t,e,n){"use strict";n.r(e);n(49),n(32),n(37),n(16),n(50),n(36),n(64);var a=n(27),s=n(48),o=n(354),i=n(351),r=n(353),c=n(370);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}var l=Object(s.b)({name:"Music",components:{GTimer:o.default,GButton:i.default,music:c.default},setup:function(t,e){var n=e.root,s=Object(r.a)(),o=s.game,i=s.setSubject,c=s.setQuestionCount,l=s.speed,b=s.questionCount,p=s.gameType,v=s.mainInfo,f=s.isGameStart,d=s.subject,m=s.questionNumberList;return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({setSubject:i,setQuestionCount:c,speed:l,questionCount:b,gameType:p,mainInfo:v,isGameStart:f,subject:d,questionNumberList:m},{setGameStart:function(){return d.value.value?b.value?void n.$swal("Game Start 😆").then((function(){o.setGameStart({subject:d.value.value,questionCount:b.value})})):(n.$swal("문제 갯수를 선택해주세요"),!1):(n.$swal("주제를 선택해주세요"),!1)}})}}),b=l,p=(n(380),n(65)),v=Object(p.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",[n("a",{staticClass:"btn__home",attrs:{href:"/game"}},[t._v("home")]),t._v(" "),n("h1",[t._v(t._s(t.mainInfo.title))])]),t._v(" "),t.isGameStart?[n("div",{staticClass:"contents"},[n("music")],1)]:[n("div",{staticClass:"contents"},[n("h2",[t._v("주제 "),t.subject.label?n("span",[t._v("("+t._s(t.subject.label)+")")]):t._e()]),t._v(" "),n("div",{staticClass:"btn-wrap"},t._l(t.mainInfo.subject,(function(e,a){return n("g-button",{key:"subject_"+a,class:{"is-active":t.subject.value===e.value},attrs:{"is-gray":!0},on:{click:function(n){return t.setSubject(e.value,e.label)}}},[t._v(t._s(e.label))])})),1)]),t._v(" "),n("div",{staticClass:"contents"},[n("h2",[t._v("문제 갯수 "),t.questionCount?n("span",[t._v("("+t._s(t.questionCount)+"개)")]):t._e()]),t._v(" "),n("div",{staticClass:"btn-wrap"},t._l(t.questionNumberList,(function(e,a){return n("g-button",{key:"question_"+a,class:{"is-active":t.questionCount===e.value},attrs:{"is-gray":!0},on:{click:function(n){return t.setQuestionCount(e.value)}}},[t._v(t._s(e.label))])})),1)]),t._v(" "),n("div",{staticClass:"footer-btn"},[n("g-button",{attrs:{"is-block":!0},on:{click:t.setGameStart}},[t._v("게임 시작하기")])],1)]],2)}),[],!1,null,"b788540c",null);e.default=v.exports}}]);