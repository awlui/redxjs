!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react"),require("rxjs")):"function"==typeof define&&define.amd?define(["react","rxjs"],e):"object"==typeof exports?exports.Demo=e(require("react"),require("rxjs")):t.Demo=e(t.react,t.rxjs)}(this,function(t,e){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){"use strict";function r(t,e){function n(){this.constructor=t}m(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function o(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]]);return n}function i(t,e,n,r){var o,i=arguments.length,u=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(u=(i<3?o(u):i>3?o(e,n,u):o(e,n))||u);return i>3&&u&&Object.defineProperty(e,n,u),u}function u(t,e){return function(n,r){e(n,r,t)}}function c(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function a(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,c)}a((r=r.apply(t,e||[])).next())})}function s(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,i&&(u=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(u=u.call(i,n[1])).done)return u;switch(i=0,u&&(n=[0,u.value]),n[0]){case 0:case 1:u=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,i=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(u=a.trys,!(u=u.length>0&&u[u.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!u||n[1]>u[0]&&n[1]<u[3])){a.label=n[1];break}if(6===n[0]&&a.label<u[1]){a.label=u[1],u=n;break}if(u&&a.label<u[2]){a.label=u[2],a.ops.push(n);break}u[2]&&a.ops.pop(),a.trys.pop();continue}n=e.call(t,a)}catch(t){n=[6,t],i=0}finally{o=u=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,u,c,a={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return c={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c}function f(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}function l(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}}function p(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),u=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u}function y(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(p(arguments[e]));return t}function b(t){return this instanceof b?(this.v=t,this):new b(t)}function h(t,e,n){function r(t){f[t]&&(s[t]=function(e){return new Promise(function(n,r){l.push([t,e,n,r])>1||o(t,e)})})}function o(t,e){try{i(f[t](e))}catch(t){a(l[0][3],t)}}function i(t){t.value instanceof b?Promise.resolve(t.value.v).then(u,c):a(l[0][2],t)}function u(t){o("next",t)}function c(t){o("throw",t)}function a(t,e){t(e),l.shift(),l.length&&o(l[0][0],l[0][1])}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s,f=n.apply(t,e||[]),l=[];return s={},r("next"),r("throw"),r("return"),s[Symbol.asyncIterator]=function(){return this},s}function d(t){function e(e,o){t[e]&&(n[e]=function(n){return(r=!r)?{value:b(t[e](n)),done:"return"===e}:o?o(n):n})}var n,r;return n={},e("next"),e("throw",function(t){throw t}),e("return"),n[Symbol.iterator]=function(){return this},n}function v(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator];return e?e.call(t):"function"==typeof l?l(t):t[Symbol.iterator]()}function _(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}Object.defineProperty(e,"__esModule",{value:!0}),e.__extends=r,n.d(e,"__assign",function(){return O}),e.__rest=o,e.__decorate=i,e.__param=u,e.__metadata=c,e.__awaiter=a,e.__generator=s,e.__exportStar=f,e.__values=l,e.__read=p,e.__spread=y,e.__await=b,e.__asyncGenerator=h,e.__asyncDelegator=d,e.__asyncValues=v,e.__makeTemplateObject=_;/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},O=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}},function(e,n){e.exports=t},function(t,e,n){t.exports=n(7)()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4);e.RedxjsStore=r.RedxjsStore;var o=n(6);e.connect=o.connect;var i=n(11);e.Provider=i.Provider},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(5),o=function(){function t(t){var e=(void 0===t?{}:t).timeTravel,n=void 0!==e&&e,o=this;this._ttCarousel=[],this.getState=function(){return o.lastState},this._timeTravel=n;var i=new r.Subject;this._obs=i}return Object.defineProperty(t.prototype,"Carousel",{get:function(){return this._ttCarousel},enumerable:!0,configurable:!0}),t.prototype.init=function(){this._unsubObj=this.genActionObservable()},t.prototype.unsubscribe=function(){this._unsubObj.unsubscribe()},t.prototype.genActionObservable=function(){var t=this;return r.Observable.create(function(e){t._dispatch=e.next.bind(e)}).startWith("Initiate").scan(function(e,n){var r=t.combineReducer(t._reducerCollection)(e,n);return t.lastState=r,t._timeTravel&&t._ttCarousel.push(r),r},{}).subscribe(this._obs)},t.prototype.combineReducer=function(t){return function(e,n){return void 0===e&&(e={}),Object.keys(t).reduce(function(r,o){return r[o]=t[o](e[o],n),r},{})}},t.prototype.subscribe=function(t){return this._obs.subscribe(t)},t.prototype.genReducerCollection=function(t){this._reducerCollection=t},t.prototype.dispatch=function(t){if("function"==typeof t)return void console.log("FUNCTION DISPATCHED");this._dispatch(t)},t}();e.RedxjsStore=o},function(t,n){t.exports=e},function(t,e,n){"use strict";function r(t,e,n){var r=function(r){function c(){return null!==r&&r.apply(this,arguments)||this}return o.__extends(c,r),c.prototype.componentDidMount=function(){var t=this,e=this.context.store;this.unsubObj=e.subscribe(function(){t.forceUpdate()})},c.prototype.componentWillUnmount=function(){this.unsubObj.unsubscribe()},c.prototype.render=function(){var r=this.context.store,u=this.props,c=this.context.store.dispatch;return i.createElement(n,o.__assign({},t(r),e(c),{dispatch:c},u))},c.contextTypes={store:u.object},c}(i.Component);return r.contextTypes={store:u.object},r}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=n(1),u=n(2),c=function(t){};e.connect=function(t){var e=void 0===t?{}:t,n=e.mapState,a=void 0===n?c:n,s=e.mapActions,f=void 0===s?c:s;return console.log("BEFORE CONNECT"),a===c&&f===c?function(t){var e=function(e,n){n.store;return i.createElement(t,o.__assign({},e))};return e.contextTypes={store:u.object},e}:(console.log("AFTER CONNECT"),function(t){return r(a,f,t)})}},function(t,e,n){"use strict";var r=n(8),o=n(9),i=n(10);t.exports=function(){function t(t,e,n,r,u,c){c!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=r,n.PropTypes=n,n}},function(t,e,n){"use strict";function r(t){return function(){return t}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(t){return t},t.exports=o},function(t,e,n){"use strict";function r(t,e,n,r,i,u,c,a){if(o(e),!t){var s;if(void 0===e)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[n,r,i,u,c,a],l=0;s=new Error(e.replace(/%s/g,function(){return f[l++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}}var o=function(t){};t.exports=r},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(2),i=n(1),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.getChildContext=function(){return{store:this.props.store}},e.prototype.render=function(){return this.props.children},e.childContextTypes={store:o.object},e}(i.Component);e.Provider=u}])});
//# sourceMappingURL=app.js.map