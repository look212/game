(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{370:function(t,e,n){var a=n(398);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(85).default)("c5f64512",a,!0,{sourceMap:!1})},397:function(t,e,n){"use strict";n(370)},398:function(t,e,n){var a=n(84),s=n(233),o=n(234),r=a(!1),c=s(o);r.push([t.i,"header[data-v-39eecc91]{text-align:center;background-color:#fff;position:relative;padding:10px}header h1[data-v-39eecc91]{font-size:1.5em;font-weight:400}header .btn__home[data-v-39eecc91]{position:absolute;top:50%;left:10px;transform:translateY(-50%);width:38px;height:38px;background:url("+c+") 50% no-repeat;text-indent:-9999em;overflow:hidden}.contents[data-v-39eecc91]{padding:20px}.contents h2[data-v-39eecc91]{font-weight:400;font-size:1.2em;margin-bottom:20px}.contents h2 span[data-v-39eecc91]{display:inline-block;color:#aaa;font-size:.8em}.contents .btn-wrap[data-v-39eecc91]{margin:0 0 0 -10px}.contents button[data-v-39eecc91]{margin:0 0 10px 10px}.footer-btn[data-v-39eecc91]{position:fixed;width:100%;bottom:0;left:0;padding:20px 20px calc(env(safe-area-inset-bottom) + 20px)}",""]),t.exports=r},443:function(t,e,n){"use strict";n.r(e);n(52),n(33),n(38),n(17),n(53),n(34),n(69);var a=n(29),s=n(51),o=n(357),r=n(352),c=n(354),i=n(431);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}var l=Object(s.b)({name:"Drama",components:{GTimer:o.default,GButton:r.default,drama:i.default},setup:function(t,e){var n=e.root,s=Object(c.a)(),o=s.game,r=s.setSubject,i=s.setQuestionCount,l=s.speed,p=s.questionCount,b=s.gameType,v=s.mainInfo,f=s.isGameStart,d=s.subject,m=s.questionNumberList;return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({setSubject:r,setQuestionCount:i,speed:l,questionCount:p,gameType:b,mainInfo:v,isGameStart:f,subject:d,questionNumberList:m},{setGameStart:function(){return d.value.value?p.value?void n.$swal("Game Start 😆").then((function(){o.setGameStart({subject:d.value.value,questionCount:p.value})})):(n.$swal("문제 갯수를 선택해주세요"),!1):(n.$swal("주제를 선택해주세요"),!1)}})}}),p=l,b=(n(397),n(70)),v=Object(b.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail-wrap"},[n("header",[n("a",{staticClass:"btn__home",attrs:{href:"/game"}},[t._v("home")]),t._v(" "),n("h1",[t._v(t._s(t.mainInfo.title))])]),t._v(" "),t.isGameStart?[n("div",{staticClass:"contents"},[n("drama")],1)]:[n("div",{staticClass:"contents"},[n("h2",[t._v("\n        주제 "),t.subject.label?n("span",[t._v("("+t._s(t.subject.label)+")")]):t._e()]),t._v(" "),n("div",{staticClass:"btn-wrap"},t._l(t.mainInfo.subject,(function(e,a){return n("g-button",{key:"subject_"+a,class:{"is-active":t.subject.value===e.value},attrs:{"is-gray":!0},on:{click:function(n){return t.setSubject(e.value,e.label)}}},[t._v(t._s(e.label))])})),1)]),t._v(" "),n("div",{staticClass:"contents"},[n("h2",[t._v("\n        문제 갯수 "),t.questionCount?n("span",[t._v("("+t._s(t.questionCount)+"개)")]):t._e()]),t._v(" "),n("div",{staticClass:"btn-wrap"},t._l(t.questionNumberList,(function(e,a){return n("g-button",{key:"question_"+a,class:{"is-active":t.questionCount===e.value},attrs:{"is-gray":!0},on:{click:function(n){return t.setQuestionCount(e.value)}}},[t._v(t._s(e.label))])})),1)]),t._v(" "),n("div",{staticClass:"footer-btn"},[n("g-button",{attrs:{"is-block":!0},on:{click:t.setGameStart}},[t._v("게임 시작하기")])],1)]],2)}),[],!1,null,"39eecc91",null);e.default=v.exports}}]);