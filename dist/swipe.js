!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.swipe=e():t.swipe=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={exports:{},id:n,loaded:!1};return t[n].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var i={};return e.m=t,e.c=i,e.p="/pspgbhu.github.io/c-swipe/",e(0)}([function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.SwipeItem=e.Swipe=void 0;var a=i(4),s=n(a),r=i(3),o=n(r);e.Swipe=s.default,e.SwipeItem=o.default,e.default={Swipe:s.default,SwipeItem:o.default}},function(t,e){t.exports=function(t,e,i,n){var a,s=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(a=t,s=t.default);var o="function"==typeof s?s.options:s;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),i&&(o._scopeId=i),n){var h=o.computed||(o.computed={});Object.keys(n).forEach(function(t){var e=n[t];h[t]=function(){return e}})}return{esModule:a,exports:s,options:o}}},function(t,e){},function(t,e,i){var n=i(1)(i(7),i(5),null,null);t.exports=n.exports},function(t,e,i){i(2);var n=i(1)(i(8),i(6),null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"c-swipe-item"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"c-swipe"},[i("div",{staticClass:"c-swipe-warpper"},[t._t("default")],2),t._v(" "),t.pagination?i("div",{staticClass:"c-swipe-pagination"},[i("div",{staticClass:"c-swipe-pagination-bar"},t._l(t.length,function(e){return i("i",{class:["c-swipe-pagination-item",e-1===t.insideValue?"active":""]})}))]):t._e()])},staticRenderFns:[]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swipe-item",mounted:function(){this.$parent.$init()}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swipe",data:function(){return{ele:{},pages:[],width:0,length:0,distance:0,touchstartTime:0,minMoveDistance:60,insideValue:this.value,changing:!1,auto:!1,forward:"next",moveForward:null,changeForward:null,interval:null}},props:{value:{type:Number,required:!0,default:0},pagination:{type:Boolean,required:!1,default:!0},time:{type:Number,required:!1,default:0},infinity:{type:Boolean,required:!1,default:!0}},computed:{leftIndex:function(){return 0==this.insideValue?this.length-1:this.insideValue-1},rightIndex:function(){return this.insideValue==this.length-1?0:this.insideValue+1}},watch:{insideValue:function(t){this.$emit("input",t)},value:function(t){t!==this.insideValue&&(0==t&&this.insideValue==this.length-1?this.changeForward="next":t==this.length-1&&0==this.insideValue&&this.length>2?this.changeForward="prev":t>this.insideValue?this.changeForward="next":t<this.insideValue&&(this.changeForward="prev"),this.changePage(t))}},methods:{$init:function(){clearInterval(this.interval),this.ele=this.$el,this.pages=this.$children.map(function(t){return t.$el}),this.length=this.pages.length,this.initWidth(),this.pages[this.insideValue].classList.add("active"),this.core(),this.autoChange(this.time)},$clearAuto:function(){clearInterval(this.interval)},initWidth:function(){var t=getComputedStyle(this.ele,!1).width;this.width=parseInt(t,10),this.minMoveDistance=this.width/3<100?this.width/3:100},core:function(){function t(t){n.changing||d||(d=!0,n.auto=!1,o=!0,a=t.targetTouches[0].pageX,s=t.targetTouches[0].pageY,n.touchstartTime=(new Date).getTime(),clearInterval(n.interval))}function e(t){if(!n.changing&&d){if(n.distance=t.targetTouches[0].pageX-a,o){var e=t.targetTouches[0].pageY-s;Math.abs(n.distance)<Math.abs(e)&&(h=!1),o=!1}if(h){if(t.preventDefault(),!n.infinity){if(0==this.dataset.index&&n.distance>0)return;if(this.dataset.index==n.length-1&&n.distance<0)return}n.move(this,n.distance)}}}function i(t){if(d){if(d=!1,!h)return void(h=!0);if(!n.changing){if(r=(new Date).getTime(),100<r-n.touchstartTime&&r-n.touchstartTime<600)n.changeForward=n.distance>0?"prev":"next","prev"===n.changeForward?n.changePage(n.leftIndex):"next"===n.changeForward&&n.changePage(n.rightIndex);else{switch(!0){case n.distance>n.minMoveDistance:n.changeForward="prev";break;case n.distance<-n.minMoveDistance:n.changeForward="next";break;default:n.changeForward="stay"}"prev"===n.changeForward?n.changePage(n.leftIndex):"next"===n.changeForward?n.changePage(n.rightIndex):n.changePage(n.insideValue)}n.distance=0,o=!0,n.moveForward=null,n.autoChange(n.time)}}}var n=this,a=0,s=0,r=0,o=!0,h=!0,d=!1;n.pages.forEach(function(n,a){n.moveTranslate=0,n.dataset.index=a,n.addEventListener("touchstart",t),n.addEventListener("touchmove",e),n.addEventListener("touchend",i),n.addEventListener("touchcancel",i)})},changePage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.changeForward,i=this.leftIndex,n=this.rightIndex;if(console.log(e),"next"===e||"prev"===e){var a="next"===e?-this.width:this.width;this.duration([t,this.insideValue]),this.doTranslate(this.pages[t],0),this.doTranslate(this.pages[this.insideValue],a)}else"stay"===e?this.distance>0?(this.duration([t,i]),this.doTranslate(this.pages[t],0),this.doTranslate(this.pages[i],-this.width)):this.distance<0&&(this.duration([t,n]),this.doTranslate(this.pages[t],0),this.doTranslate(this.pages[n],this.width)):this.changing=!1;this.insideValue!=t&&(this.pages[this.insideValue].classList.remove("active"),this.pages[t].classList.add("active"),this.insideValue=t)},move:function(t,e){t.moveTranslate=e,this.doTranslate(t,e);var i=this.insideValue,n=this.leftIndex,a=this.rightIndex,s=e-this.width,r=this.width+e;e>0&&(this.doTranslate(this.pages[n],s),"next"===this.moveForward&&i<this.length&&this.doTranslate(this.pages[a],this.width),this.moveForward="prev"),e<0&&(this.doTranslate(this.pages[a],r),"prev"===this.moveForward&&this.doTranslate(this.pages[n],-this.width),this.moveForward="next")},doTranslate:function(t,e){t.style.transform="translate3d("+e+"px, 0, 0)",t.style.webkitTransform="translate3d("+e+"px, 0, 0)"},duration:function(t){var e=this,i=this.auto?400:300;this.changing=!0,t.forEach(function(t){e.pages[t].style.transitionDuration=i+"ms",setTimeout(function(){e.pages[t].style.transitionDuration="",e.pages[t].style.transform=""},i),setTimeout(function(){e.changing=!1},i)})},autoChange:function(t){var e=this;0!==t&&(this.interval=setInterval(function(){e.auto=!0,e.$emit("input",e.rightIndex)},t))}},beforeDestroy:function(){clearInterval(this.time)}}}])});