(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{366:function(t,e,a){var n=a(385);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(84).default)("713f0a52",n,!0,{sourceMap:!1})},384:function(t,e,a){"use strict";a(366)},385:function(t,e,a){var n=a(83),s=a(232),o=a(233),i=n(!1),r=s(o);i.push([t.i,"header[data-v-57e1a276]{text-align:center;background-color:#fff;position:relative;padding:10px}header h1[data-v-57e1a276]{font-size:1.5em;font-weight:400}header .btn__home[data-v-57e1a276]{position:absolute;top:50%;left:10px;transform:translateY(-50%);width:38px;height:38px;background:url("+r+") 50% no-repeat;text-indent:-9999em;overflow:hidden}.contents[data-v-57e1a276]{padding:20px}.contents h2[data-v-57e1a276]{font-weight:400;font-size:1.2em;margin-bottom:20px}.contents h2 span[data-v-57e1a276]{display:inline-block;color:#aaa;font-size:.8em}.contents .btn-wrap[data-v-57e1a276]{margin:0 0 0 -10px}.contents button[data-v-57e1a276]{margin:0 0 10px 10px}.footer-btn[data-v-57e1a276]{position:fixed;width:100%;bottom:0;left:0;padding:20px 20px calc(env(safe-area-inset-bottom) + 20px)}",""]),t.exports=i},421:function(t,e,a){"use strict";a.r(e);a(49),a(32),a(37),a(16),a(50),a(33),a(68);var n=a(28),s=a(48),o=a(354),i=a(351),r=a(353),u=a(410);function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}var l=Object(s.b)({name:"Speed",components:{GTimer:o.default,GButton:i.default,chosung:u.default},setup:function(t,e){var a=e.root,s=Object(r.a)(),o=s.game,i=s.setSubject,u=s.setQuestionCount,l=s.speed,p=s.questionCount,b=s.gameType,v=s.mainInfo,f=s.isGameStart,d=s.subject,m=s.questionNumberList;return function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){Object(n.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({setSubject:i,setQuestionCount:u,speed:l,questionCount:p,gameType:b,mainInfo:v,isGameStart:f,subject:d,questionNumberList:m},{setGameStart:function(){return d.value.value?p.value?void a.$swal("Game Start 😆").then((function(){o.setGameStart({subject:d.value.value,questionCount:p.value})})):(a.$swal("문제 갯수를 선택해주세요"),!1):(a.$swal("주제를 선택해주세요"),!1)}})}}),p=l,b=(a(384),a(69)),v=Object(b.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail-wrap"},[a("header",[a("a",{staticClass:"btn__home",attrs:{href:"/game"}},[t._v("home")]),t._v(" "),a("h1",[t._v(t._s(t.mainInfo.title))])]),t._v(" "),t.isGameStart?[a("div",{staticClass:"contents"},[a("chosung")],1)]:[a("div",{staticClass:"contents"},[a("h2",[t._v("주제 "),t.subject.label?a("span",[t._v("("+t._s(t.subject.label)+")")]):t._e()]),t._v(" "),a("div",{staticClass:"btn-wrap"},t._l(t.mainInfo.subject,(function(e,n){return a("g-button",{key:"subject_"+n,class:{"is-active":t.subject.value===e.value},attrs:{"is-gray":!0},on:{click:function(a){return t.setSubject(e.value,e.label)}}},[t._v(t._s(e.label))])})),1)]),t._v(" "),a("div",{staticClass:"contents"},[a("h2",[t._v("문제 갯수 "),t.questionCount?a("span",[t._v("("+t._s(t.questionCount)+"개)")]):t._e()]),t._v(" "),a("div",{staticClass:"btn-wrap"},t._l(t.questionNumberList,(function(e,n){return a("g-button",{key:"question_"+n,class:{"is-active":t.questionCount===e.value},attrs:{"is-gray":!0},on:{click:function(a){return t.setQuestionCount(e.value)}}},[t._v(t._s(e.label))])})),1)]),t._v(" "),a("div",{staticClass:"footer-btn"},[a("g-button",{attrs:{"is-block":!0},on:{click:t.setGameStart}},[t._v("게임 시작하기")])],1)]],2)}),[],!1,null,"57e1a276",null);e.default=v.exports}}]);