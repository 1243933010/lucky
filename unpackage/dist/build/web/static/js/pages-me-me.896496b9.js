(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-me"],{"0a96":function(t,e,n){t.exports=n.p+"static/login_bk.png"},"1c6f":function(t,e,n){"use strict";n.r(e);var i=n("f43a"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},2634:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
e.default=function(){return t};var t={},n=Object.prototype,a=n.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(L){l=function(t,e,n){return t[e]=n}}function d(t,e,n,i){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),c=new Q(i||[]);return r(o,"_invoke",{value:C(t,n,c)}),o}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(L){return{type:"throw",arg:L}}}t.wrap=d;var v={};function h(){}function m(){}function g(){}var p={};l(p,c,(function(){return this}));var w=Object.getPrototypeOf,A=w&&w(w(j([])));A&&A!==n&&a.call(A,c)&&(p=A);var b=g.prototype=h.prototype=Object.create(p);function y(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var n;r(this,"_invoke",{value:function(r,o){function c(){return new e((function(n,c){(function n(r,o,c,u){var s=f(t[r],t,o);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==(0,i.default)(d)&&a.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(d).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)})(r,o,n,c)}))}return n=n?n.then(c,c):c()}})}function C(t,e,n){var i="suspendedStart";return function(a,r){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===a)throw r;return R()}for(n.method=a,n.arg=r;;){var o=n.delegate;if(o){var c=E(o,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===i)throw i="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i="executing";var u=f(t,e,n);if("normal"===u.type){if(i=n.done?"completed":"suspendedYield",u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(i="completed",n.method="throw",n.arg=u.arg)}}}function E(t,e){var n=e.method,i=t.iterator[n];if(void 0===i)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var a=f(i,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,v;var r=a.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Q(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function j(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:R}}function R(){return{value:void 0,done:!0}}return m.prototype=g,r(b,"constructor",{value:g,configurable:!0}),r(g,"constructor",{value:m,configurable:!0}),m.displayName=l(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},y(x.prototype),l(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,i,a,r){void 0===r&&(r=Promise);var o=new x(d(e,n,i,a),r);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},y(b),l(b,s,"Generator"),l(b,c,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var i in e)n.push(i);return n.reverse(),function t(){for(;n.length;){var i=n.pop();if(i in e)return t.value=i,t.done=!1,t}return t.done=!0,t}},t.values=j,Q.prototype={constructor:Q,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return o.type="throw",o.arg=t,e.next=n,i&&(e.method="next",e.arg=void 0),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i],o=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var c=a.call(r,"catchLoc"),u=a.call(r,"finallyLoc");if(c&&u){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(c){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&a.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=t,o.arg=e,r?(this.method="next",this.next=r.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var a=i.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),v}},t},n("6a54"),n("01a2"),n("e39c"),n("bf0f"),n("844d"),n("18f7"),n("de6c"),n("3872e"),n("4e9b"),n("114e"),n("c240"),n("926e"),n("7a76"),n("c9b5"),n("aa9c"),n("2797"),n("8a8d"),n("dc69"),n("f7a5");var i=function(t){return t&&t.__esModule?t:{default:t}}(n("fcf3"))},"2cfa":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{class:t.fiexed?"fixed":"fixed1"},[n("v-uni-view",{staticClass:"submit-btn"},[n("v-uni-view",{}),n("v-uni-view",{staticClass:"text"},[n("v-uni-text",[t._v("Create a room")]),n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goUrl("/pages/me/me")}}},[t._v("临时个人中心")]),n("v-uni-text",[t._v("Share link")])],1)],1)],1)],1)},a=[]},"2ec5":function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"2fdc":function(t,e,n){"use strict";function i(t,e,n,i,a,r,o){try{var c=t[r](o),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(i,a)}n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var o=t.apply(e,n);function c(t){i(o,a,r,c,u,"next",t)}function u(t){i(o,a,r,c,u,"throw",t)}c(void 0)}))}},n("bf0f")},"33b9":function(t,e,n){var i=n("df14");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("967d").default;a("498770e2",i,!0,{sourceMap:!1,shadowMode:!1})},"4b0d":function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,".fixed[data-v-6d0ba292]{position:fixed;width:100%;bottom:%?36?%;z-index:10}.fixed1[data-v-6d0ba292]{width:100%;z-index:10}.submit-btn[data-v-6d0ba292]{width:%?666?%;height:%?105?%;margin:%?0?% auto;border-radius:%?61?% %?61?% %?61?% %?61?%;background:hsla(0,0%,100%,.1);opacity:1;display:flex;flex-direction:column;justify-content:space-around}.submit-btn .text[data-v-6d0ba292]{width:calc(100% - %?92?%);margin:0 auto;display:flex;justify-content:space-between;align-items:center;color:#9e9e9e;font-size:%?21?%}",""]),t.exports=e},5466:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={name:"defaultHeader",data:function(){return{}}}},"5a34":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page-container"},[i("DefaultHeader"),i("v-uni-view",{staticClass:"me"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"label"},[i("v-uni-text",[t._v("CURRENT WALLET VALUE")])],1),i("v-uni-view",{staticClass:"usdt"},[i("v-uni-image",{attrs:{src:n("d394"),mode:"widthFix"}}),i("v-uni-view",{staticClass:"text"},[i("v-uni-text",[t._v(t._s(1*t.userInfo.balance))]),i("v-uni-text",[t._v("USDT")])],1)],1),i("v-uni-view",{staticClass:"small"},[i("v-uni-text",[t._v("0.0295 (+1.34%)")])],1)],1),i("v-uni-view",{staticClass:"button"},[i("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goUrl("/pages/me/recharge")}}},[i("v-uni-image",{attrs:{src:n("628c"),mode:"widthFix"}}),i("v-uni-text",[t._v("Recharge")])],1),i("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goUrl("/pages/me/withdrawal")}}},[i("v-uni-image",{attrs:{src:n("628c"),mode:"widthFix"}}),i("v-uni-text",[t._v("Withdraw")])],1),i("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goUrl("/pages/me/bill")}}},[i("v-uni-image",{attrs:{src:n("628c"),mode:"widthFix"}}),i("v-uni-text",[t._v("bill")])],1)],1),i("v-uni-view",{staticClass:"hr"},[i("v-uni-text",[t._v("ACCOUNT SETTING")])],1),i("v-uni-view",{staticClass:"menu"},[i("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goUrl("/pages/me/personalData")}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-image",{attrs:{src:n("628c"),mode:"widthFix"}}),i("v-uni-text",[t._v("Personal data")])],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-image",{attrs:{src:n("9867"),mode:"widthFix"}})],1)],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-image",{attrs:{src:n("628c"),mode:"widthFix"}}),i("v-uni-text",[t._v("Record")])],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-image",{attrs:{src:n("9867"),mode:"widthFix"}})],1)],1),i("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goUrl("/pages/team/team")}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-image",{attrs:{src:n("628c"),mode:"widthFix"}}),i("v-uni-text",[t._v("Team")])],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-image",{attrs:{src:n("9867"),mode:"widthFix"}})],1)],1),i("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goUrl("/pages/me/fqas")}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-image",{attrs:{src:n("628c"),mode:"widthFix"}}),i("v-uni-text",[t._v("FQA")])],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-image",{attrs:{src:n("9867"),mode:"widthFix"}})],1)],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-image",{attrs:{src:n("628c"),mode:"widthFix"}}),i("v-uni-text",[t._v("Log out")])],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-image",{attrs:{src:n("9867"),mode:"widthFix"}})],1)],1)],1),i("v-uni-view",{staticClass:"hr1"},[i("v-uni-image",{attrs:{src:n("628c"),mode:"widthFix"}}),i("v-uni-text",[t._v("Notice：NoticeNoticeNoticeNoticeNoticeNoticeNoticsdsdsdsdsdssdsdsdd")])],1)],1),i("v-uni-view",{staticStyle:{padding:"9rpx 0 35rpx 0"}},[i("DefaultFooter",{attrs:{fiexed:!1}})],1)],1)},a=[]},"628c":function(t,e){t.exports="data:image/png;base64,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UmVhZHlxyWU8AAADKmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzIgNzkuMTU5Mjg0LCAyMDE2LzA0LzE5LTEzOjEzOjQwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRkE0MjcxNTdEQzYxMUU4QkZBOERDOEVCQ0U0NTBGMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRkE0MjcxNDdEQzYxMUU4QkZBOERDOEVCQ0U0NTBGMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNS41IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkE4RkFCN0M3REM1MTFFOEJGQThEQzhFQkNFNDUwRjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkE4RkFCN0Q3REM1MTFFOEJGQThEQzhFQkNFNDUwRjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5BZZ+3AAAB1ElEQVR42mJkAALtmZb/GfAAJkIKwIoYiAA4FV1JO0Ylk0hWxILLHTgV6cyywqoIIIAYiQinb8S4iYs036E7esgEJq6ABAGAACImMBmo5m6yDcLlR5gcNnnaumhADWIhJoOTbRC+9ILPa9+o4TWAAAIlyDVAOphCc1SYqGAICNwZxumIidi8NILz2qhBdCyPaOcicgq1wRnYAAFErRKSgZo+GzSOoWpQD1sHsRCjCDnzkpp90DM+If2jUTbqoFEHjZZDpJYroyFESeNmNFHTykEqg8g9bwACCNRiVAYyLgEx1wA7Zu3V9OMhVBt1opajBlsaCh7NZaMOGnXQgFeupHZjKO1CjUbZqINGHTTqoFEHjTpo1EGjDhqMgw342kejUTaahggpoOdg1WiUjTpoODoIvL7tzSBykB5AgPbtGIdBGIYCaBR16swROEQvzT06cxjm1lRFDC0LcpXC+xJzpIdJhOW8e4z359MVWSde1C32xRYasC0mCmascDZzrQz+7NgABAgQINnRY/iUrb5D9v9l9toqCBAgQIAAAQIESAABAgQIEKCD5ZK9QPaMigoCdIJP7NdjOyoIECBAgGQBGjB8zVDjam153T0OqInJbBAWfdg8AExKZVcA71uIAAAAAElFTkSuQmCC"},"62e3":function(t,e,n){"use strict";var i=n("f164"),a=n.n(i);a.a},"68e3":function(t,e,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.urlPath=e.url=e.filesUrl=e.$totast=e.$request=void 0,n("c223"),n("bf0f");var a=i(n("a174"));e.filesUrl="https://maojian886.oss-ap-northeast-1.aliyuncs.com/";var r="http://coingames.top";e.url=r;e.urlPath="http://2405.devnft.top";e.$request=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=a.default[t],o=uni.getStorageSync("token"),c=[{"Content-Type":"application/json",Authorization:o?"".concat(o):"",Accept:"application/json"},{"Content-Type":"application/x-www-form-urlencoded",Authorization:o?"".concat(o):"",Accept:"application/json"}],u=null!==i&&void 0!==i&&i.otherGet?"".concat(r).concat(null===i||void 0===i?void 0:i.url,"/").concat(e):"".concat(r).concat(null===i||void 0===i?void 0:i.url),s=null!==i&&void 0!==i&&i.otherGet?{}:e;return e.invite_code&&e.type&&e.associated_id&&(s={id:e.id}),new Promise((function(e,i){var r;uni.request({url:u,method:null===(r=a.default[t])||void 0===r?void 0:r.type,data:s,header:c[n],success:function(t){if(403==t.data.code)return uni.hideLoading(),uni.clearStorageSync(),uni.showToast({icon:"none",title:t.data.message}),void setTimeout((function(){uni.reLaunch({url:"/pages/login/index"})}),1e3);e(t)},fail:function(t){console.log(t,"-------------"),i(t)}})}))};e.$totast=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];uni.showToast({icon:e?"success":"none",title:t})}},"7ca9":function(t,e,n){"use strict";n.r(e);var i=n("5a34"),a=n("1c6f");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("c01d");var o=n("828b"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"9a8c53c4",null,!1,i["a"],void 0);e["default"]=c.exports},"94c1":function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,".page-header[data-v-52cce306]{width:calc(100% - %?47?%);margin:0 auto;display:flex;justify-content:space-between;align-items:center;padding-top:%?73?%}.page-header .logo1[data-v-52cce306]{width:%?100?%;height:%?100?%}.page-header .logo1 uni-image[data-v-52cce306]{width:100%;height:100%;border-radius:50%}.page-header .setting[data-v-52cce306]{display:flex;flex-direction:column;align-items:center}.page-header .setting uni-view[data-v-52cce306]{width:%?33?%;height:%?5?%;background:#fff;margin-bottom:%?10?%}",""]),t.exports=e},9867:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAlCAYAAACgc9J8AAAAAXNSR0IArs4c6QAAA5NJREFUSEul1V9oW3UUB/Dv994k/ZO6rvoyJnWbCPqyB8UxHwbOl6GbD4KkbOzBQqdou/Smyb3JxTm4/qFN06RJveps0GIf3MMqTCZ7Upn4IgwfNxGUUaYTNlCa2jUuzf0duZXVtTZpEn+vl/PhnPs75/yYtGLnQQQB79VMxv0V/+PQMo2LJJ8F8ZlSgWg2m73VqkfbHnlEKfkYggMQfKkHV46Pjb3/eysg/aBEwtina5wF8CgEn654jOXz+T+aBVcx/yTjw89A16YBPCSCmarHRD6fLzcDrmF+kGka+zXyrAh6SZwr/+UNuK57p1FwHQaAKTN2WChFgDsEcEUCp7LZ7O1GwI0YHMfRlv9cOAYN75IIQWTy2vxvb83NzXlbgf/B/IBIJKLv3t37HETNkmgT4MzERCEFQNUDN8X8ABHQsozjGukC2C6Q06VSebxYLK7UAmtifkA0Gm1rD2mD1DgGYInAm9fmb3xQq+S6mA86Tn/70lL3SwRckouiYE/kCh9tlt2W2FofmoYF8h0AIfHkaHhbz5zjOOv+YcNYKvVKt+d1nNLIEQI3RSH25P4b5/v6/r3lhjE/Q9t+rUe80GkBRwC5rkQNZLPuV3ezbwq7p+SiACcAVD2lH5ycnPzOb4CWMMuydpCVvChGSPlFEw60d23/piXsn02T2KWzOg3ykIhcVSL9LWMiwlQqNg3hywCWBerFljDHGexaXgolQSQB3FYiry8ulmdawpJJIyGKbwByH0ijWuWMv/uaxqx4tJ+67k8AIepEZ9f9s3ebt2HMn9OOjsBRiPjbuCKQdDjck3Ucp9J0n1mWEYEwT+JBCN6m3pYbHx8v3TujDWVmWbEnIHKJ5DaAuc5wt+04TnXjsNfFzkUi+vd7eg9Cqc9B6IDMLpTKw7V2Wj2Mthl72oOcIfmYQD4JVmCPTk3dbHo5xuPx3oCuLgF4WICvRQIvbPWwbJYZTdPYq5EXAOwEcHGhtNxXb13XvE3bjj+uPPWhiOwj+YWmw0inC/NbvUz+93WZDQ0NPRDuCFwA+RSAK4GgHBodrf2Pat5mMnlyp0jwLCEHRHB5pYrDhUJhoZGM1pVpmif3kIEpiDxP8ltPeYO5nPtDM9BqmalUqlupynsQdQzAdWo8kskUfvQ3Z9OYlYgVqGEYgp+0AI+k0/mfm0XWyrRM4yrJEujFMhn3cqvQapmJxNAuTeu8Ew6Hb218B5uF/wbG23UV9XVKEwAAAABJRU5ErkJggg=="},a017:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"defaultFooter",props:{fiexed:{default:!0}},data:function(){return{}},methods:{goUrl:function(t){uni.navigateTo({url:t})}}};e.default=i},a174:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={region:{name:"注册",url:"/api/auth/register",type:"POST"},login:{name:"登录",url:"/api/auth/login",type:"POST"},loginByCode:{name:"邮箱验证码（需要登录）",url:"/api/email/send_code_login",type:"POST"},emailPassword:{name:"邮箱验证码",url:"/api/email/send_code",type:"POST"},changePayPassword:{name:"修改/设置 支付密码",url:"/api/auth/change_pay_password",type:"POST"},changePssword:{name:"修改登录密码",url:"/api/auth/change_password",type:"POST"},forgetPassword:{name:"忘记密码",url:"/api/auth/forget",type:"POST"},userInfo:{name:"个人信息",url:"/api/user/info",type:"POST"},recharges_and_withdraws:{name:"充值提现列表",url:"/api/user/recharges_and_withdraws",type:"POST"},userUpdate:{name:"修改个人信息(昵称、头像等)",url:"/api/user/update",type:"POST"},accountLogs:{name:"账单列表",url:"/api/user/account_logs",type:"POST"},rechargeConfig:{name:"通道列表",url:"/api/recharge/config",type:"POST"},rechargeCreate:{name:"添加订单",url:"/api/recharge/create",type:"POST"},rechargeDetail:{name:"充值详情",url:"/api/recharge/detail",type:"POST"},upload:{name:"上传图片",url:"/api/upload",type:"POST"},faq:{name:"faq列表",url:"/api/faq/index",type:"POST"}};e.default=i},a954:function(t,e,n){"use strict";var i=n("d62e"),a=n.n(i);a.a},b128:function(t,e,n){"use strict";n.r(e);var i=n("2cfa"),a=n("fad0");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("a954");var o=n("828b"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"6d0ba292",null,!1,i["a"],void 0);e["default"]=c.exports},c01d:function(t,e,n){"use strict";var i=n("33b9"),a=n.n(i);a.a},cb08:function(t,e,n){"use strict";n.r(e);var i=n("e361"),a=n("f5c6");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("62e3");var o=n("828b"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"52cce306",null,!1,i["a"],void 0);e["default"]=c.exports},d394:function(t,e,n){t.exports=n.p+"static/me_icon.png"},d62e:function(t,e,n){var i=n("4b0d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("967d").default;a("7d46a8c6",i,!0,{sourceMap:!1,shadowMode:!1})},df14:function(t,e,n){var i=n("c86c"),a=n("2ec5"),r=n("0a96");e=i(!1);var o=a(r);e.push([t.i,".flex-center[data-v-9a8c53c4]{display:flex;justify-content:center;align-items:center}.flex-space-between[data-v-9a8c53c4]{display:flex;justify-content:space-between;align-items:center}.flex-direction[data-v-9a8c53c4]{display:flex;flex-direction:row;align-items:center}.flex-column[data-v-9a8c53c4]{display:flex;flex-direction:column;align-items:center}.page-container .page-container-box[data-v-9a8c53c4]{width:100%;height:100%}uni-text[data-v-9a8c53c4]{line-height:0}uni-page-body[data-v-9a8c53c4]{height:100%;background:#201f29 url("+o+") no-repeat 100% 100%}body.?%PAGE?%[data-v-9a8c53c4]{background:#201f29 url("+o+") no-repeat 100% 100%}.me[data-v-9a8c53c4]{width:100%;display:flex;flex-direction:column;align-items:center}.me .content[data-v-9a8c53c4]{padding-top:%?91?%;display:flex;flex-direction:column;align-items:center}.me .content .label[data-v-9a8c53c4]{color:#666;font-size:%?21?%;line-height:1.5;margin-bottom:%?2?%}.me .content .usdt[data-v-9a8c53c4]{display:flex;flex-direction:row;align-items:center;margin-bottom:%?14?%}.me .content .usdt uni-image[data-v-9a8c53c4]{width:%?53?%;margin-right:%?15?%}.me .content .usdt .text[data-v-9a8c53c4]{color:#fff;font-size:%?56?%;font-weight:600}.me .content .usdt .text uni-text[data-v-9a8c53c4]{margin-right:%?10?%;line-height:1.5}.me .content .small[data-v-9a8c53c4]{font-size:%?24?%;background-image:linear-gradient(55.53466053deg,#9dfe00,#14d9e5);-webkit-background-clip:text;background-clip:text;color:transparent;margin-bottom:%?57?%}.me .button[data-v-9a8c53c4]{width:100%;margin-bottom:%?78?%;display:flex;justify-content:center;align-items:center}.me .button .item[data-v-9a8c53c4]{margin:0 %?21?%;display:flex;flex-direction:column;align-items:center}.me .button .item uni-image[data-v-9a8c53c4]{width:%?94?%;border-radius:50%;margin-bottom:%?5?%}.me .button .item uni-text[data-v-9a8c53c4]{color:#ddd;font-size:%?21?%;line-height:2}.me .hr[data-v-9a8c53c4]{width:100%;box-sizing:border-box;padding:%?11?% 0 %?11?% %?47?%;background-color:#0b0a0d;color:#666;font-size:%?21?%;font-weight:600;margin-bottom:%?52?%}.me .menu[data-v-9a8c53c4]{width:100%;box-sizing:border-box;padding-left:%?89?%;padding-right:%?136?%;margin-bottom:%?145?%}.me .menu .item[data-v-9a8c53c4]{width:100%;margin-bottom:%?52?%;display:flex;justify-content:space-between;align-items:center}.me .menu .item .left[data-v-9a8c53c4]{display:flex;flex-direction:row;align-items:center}.me .menu .item .left uni-image[data-v-9a8c53c4]{width:%?56?%;margin-right:%?28?%;border-radius:50%}.me .menu .item .left uni-text[data-v-9a8c53c4]{color:#fff;font-size:%?24?%;line-height:1.5;display:flex;flex-grow:1}.me .menu .item .right uni-image[data-v-9a8c53c4]{width:%?11?%}.me .hr1[data-v-9a8c53c4]{width:calc(100% - %?42?%);margin:0 auto;background:rgba(0,0,0,.35);padding:%?10?% 0 %?10?% %?10?%;border-radius:%?5?%;display:flex;flex-direction:row;align-items:center}.me .hr1 uni-image[data-v-9a8c53c4]{width:%?16?%;margin-right:%?15?%}.me .hr1 uni-text[data-v-9a8c53c4]{width:%?600?%;color:#d8d8d8;font-size:%?21?%;line-height:2;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}",""]),t.exports=e},e361:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",[e("v-uni-view",{staticClass:"page-header"},[e("v-uni-view",{staticClass:"logo1"},[e("v-uni-image",{attrs:{src:n("628c"),mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"setting"},[e("v-uni-view",{}),e("v-uni-view",{})],1)],1)],1)},a=[]},f164:function(t,e,n){var i=n("94c1");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("967d").default;a("b055087a",i,!0,{sourceMap:!1,shadowMode:!1})},f43a:function(t,e,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("2634")),r=i(n("2fdc")),o=n("68e3"),c=i(n("cb08")),u=i(n("b128")),s={components:{DefaultHeader:c.default,DefaultFooter:u.default},data:function(){return{userInfo:{}}},onLoad:function(){this.getUser()},methods:{goUrl:function(t){uni.navigateTo({url:t})},getUser:function(){var t=this;return(0,r.default)((0,a.default)().mark((function e(){var n;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,o.$request)("userInfo",{});case 2:n=e.sent,console.log(n),200==n.data.code&&(t.userInfo=n.data.data);case 5:case"end":return e.stop()}}),e)})))()}}};e.default=s},f5c6:function(t,e,n){"use strict";n.r(e);var i=n("5466"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},fad0:function(t,e,n){"use strict";n.r(e);var i=n("a017"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a}}]);