!function(t){function e(e){for(var r,a,c=e[0],u=e[1],l=e[2],f=0,d=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(s&&s(e);d.length;)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={0:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=u;i.push([121,1]),n()}({121:function(t,e,n){n(122),t.exports=n(309)},308:function(t,e,n){},309:function(t,e,n){"use strict";n.r(e);n(308);var r=function t(e,n,r,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.form=document.querySelector(e)||"",this.taskName=document.querySelector(n)||"",this.select=document.querySelector(r)||"",this.date=document.querySelector(o)||"",this.time=document.querySelector(i)||""};function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return JSON.parse(localStorage.getItem(t))||[]}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";t.map((function(n,r){n.includes("".concat(event.target.dataset.id))&&(t.splice(r,1),localStorage.setItem(e,JSON.stringify(t)))}))}function a(t){return t.findIndex((function(t){return t.includes("".concat(event.target.dataset.id))}))}function c(t,e){return t[e].style.display="none"}function u(t,e,n){t.length>0?c(e,n):e[n].style.display="block"}function l(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";if(-1!==t[e]){var i=t[e],a=n.outerHTML;r.splice(i,1,a),localStorage.setItem(o,JSON.stringify(r))}}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e,n){return e&&f(t.prototype,e),n&&f(t,n),t}function y(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=g(t);if(e){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}function _(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var S=function(t){h(n,t);var e=b(n);function n(){return p(this,n),e.call.apply(e,[this].concat(y([".task",".task__name",".task__list",".task__dateSet",".task__timeSet"])))}return n}(r),L=function(t){h(n,t);var e=b(n);function n(t){var r;return p(this,n),(r=e.call(this)).errName=document.querySelector(t)||"",r}return d(n,[{key:"giveErr",value:function(){var t=[];this.taskName.value.trim()||(t.push("Данное поле не может быть пустым!"),this.taskName.style.border="2px solid red"),t.length>0&&(event.preventDefault(),this.errName.textContent=t.join(" "))}},{key:"chekingInput",value:function(){var t=this;this.taskName.addEventListener("input",(function(){""===t.taskName.value&&null===t.taskName.value||(t.taskName.style.border="2px solid #3d0063",t.errName.textContent="")}))}}]),n}(S),w=function(t){h(n,t);var e=b(n);function n(t){var r;return p(this,n),(r=e.call(this)).errDate=document.querySelector(t)||"",r}return d(n,[{key:"giveErr",value:function(){event.preventDefault();var t=[];""!==this.date.value&&null!==this.date.value||(t.push("Укажите дату!"),this.date.style.border="2px solid red"),t.length>0&&(event.preventDefault(),this.errDate.textContent=t.join(" "))}},{key:"chekingInput",value:function(){var t=this;this.date.addEventListener("input",(function(){""===t.date.value&&null===t.date.value||(t.date.style.border="2px solid #3d0063",t.errDate.textContent="")}))}}]),n}(S),O=o("ONE_CELL"),k=o("TWO_CELL"),E=o("THREE_CELL"),T=o("FOUR_CELL");function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function I(t){return function(t){if(Array.isArray(t))return C(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return C(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=N(t);if(e){var o=N(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return P(this,n)}}function P(t,e){return!e||"object"!==j(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function N(t){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(a,t);var e,n,r,o=R(a);function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=o.call.apply(o,[this].concat(I([".task",".task__name",".task__list",".task__dateSet",".task__timeSet"])))).category=document.querySelectorAll(t),e.itemsTexts=document.querySelectorAll(".category__complitly")||[],e}return e=a,(n=[{key:"getDateCreating",value:function(){return this.date.value.split("-").reverse().join(".")}},{key:"getTimeCreating",value:function(){return""!==this.time.value||null!==this.time.value?this.time.value:""}},{key:"getNameCreating",value:function(){var t;return this.taskName.value?t=this.taskName.value:t}},{key:"getId",value:function(){return"i"+111*(new Date).getSeconds()}},{key:"addItemsFromArray",value:function(t,e){var n;t.push(this.toHTML),this.category[e].insertAdjacentHTML("beforeend",(n=t)[n.length-1])}},{key:"addItemToLocalStore",value:function(t,e){localStorage.setItem(t,JSON.stringify(e))}},{key:"addTask",value:function(){switch(+this.select.value){case 1:c(this.itemsTexts,0),this.addItemsFromArray(O,0),this.addItemToLocalStore("ONE_CELL",O);break;case 2:c(this.itemsTexts,1),this.addItemsFromArray(k,1),this.addItemToLocalStore("TWO_CELL",k);break;case 3:c(this.itemsTexts,2),this.addItemsFromArray(E,2),this.addItemToLocalStore("THREE_CELL",E);break;case 4:c(this.itemsTexts,3),this.addItemsFromArray(T,3),this.addItemToLocalStore("FOUR_CELL",T);break;default:return""}}},{key:"deleteTask",value:function(){document.addEventListener("click",(function(t){if(t.target.hasAttribute("data-btn-destroy")){var e=document.getElementById("".concat(t.target.dataset.id));e.parentNode.removeChild(e),i(O,"ONE_CELL"),i(k,"TWO_CELL"),i(E,"THREE_CELL"),i(T,"FOUR_CELL")}}))}},{key:"completeTask",value:function(){document.addEventListener("click",(function(t){if(t.target.hasAttribute("data-btn-complete")){var e=10,n=t.target;n.disabled=!0,n.classList.add("reminder__btn-complete");var r=document.getElementById("".concat(t.target.id));r.classList.add("reminder-complete");var o=r.querySelector(".reminder__countdown");o.style.display="block",o.innerHTML="00:10",setInterval((function(){o.innerHTML="00:".concat(e--)}),1e3);var i=r.querySelector(".reminder__destroy");setTimeout((function(){i.click()}),11e3),n.nextElementSibling.classList.add("reminder__name-complete")}}))}},{key:"textItemComplitly",value:function(){var t=document.querySelectorAll(".category__complitly")||[];u(O,t,0),u(k,t,1),u(E,t,2),u(T,t,3)}},{key:"toHTML",get:function(){return'\n        <div id="'.concat(this.getId(),'" class="reminder reminder_indent">\n            <div class="reminder__datetime">\n                <p class="reminder__date">\n                    ').concat(this.getDateCreating(),'\n                </p>\n                <p class="reminder__time">\n                    ').concat(this.getTimeCreating(),'\n                </p>\n            </div>\n            <div class="reminder__notify reminder__notify_indent">\n                <button data-btn-complete="true" id="').concat(this.getId(),'" class="reminder__btn"></button>\n                <p class="reminder__name">\n                    ').concat(this.getNameCreating(),'\n                </p>\n                <p class="reminder__dateCreated">\n                    <i>\n                        Дата создания: ').concat(function(){var t=new Date,e=t.getDate();e=e<10?"0"+e:e;var n=t.getMonth()+1;return n=n<10?"0"+n:n,"".concat(e,".").concat(n,".").concat(t.getFullYear())}(),'\n                    </i>\n                </p>\n                <p data-countdown-id="').concat(this.getId(),'" class="reminder__countdown">\n                    00:').concat(this.counter,'\n                </p>\n                <button data-id="').concat(this.getId(),'" data-btn-edit="true" title="Изменить" class="reminder__edit"></button>\n                <button data-id="').concat(this.getId(),'" data-btn-destroy="true" title="Удалить" class="reminder__destroy">&#10006;</button>\n            </div>\n        </div>\n        ')}}])&&A(e.prototype,n),r&&A(e,r),a}(r);function M(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return D(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var F=[{id:1,text:"Важно и срочно"},{id:2,text:"Важно, но не срочно"}],H=[{id:3,text:"Не важно, но срочно"},{id:4,text:"Не важно и не срочно"}],U=function(t){return'<div data-type="'.concat(t.id,'" class="category__item">\n                    <h3 class="category__title">\n                        ').concat(t.text,'\n                    </h3>\n                    <h3 class="category__complitly">\n                        Поздравляю! Все задачи выполнены\n                    </h3>\n                </div>')};function B(t){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function W(t,e){return(W=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function $(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=z(t);if(e){var o=z(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Y(this,n)}}function Y(t,e){return!e||"object"!==B(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function z(t){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var G=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&W(t,e)}(i,t);var e,n,r,o=$(i);function i(t,e,n,r){var a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(a=o.call(this,".category__item")).ONE_CELL=t,a.TWO_CELL=e,a.THREE_CELL=n,a.FOUR_CELL=r,a}return e=i,(n=[{key:"addItemsFromLocalStore",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;e.map((function(e){t.category[n].insertAdjacentHTML("beforeend",e)}))}},{key:"pasteItemsFromLocalStore",value:function(){switch(+this.select.value){case 1:this.addItemsFromLocalStore(this.ONE_CELL,0);case 2:this.addItemsFromLocalStore(this.TWO_CELL,1);case 3:this.addItemsFromLocalStore(this.THREE_CELL,2);case 4:this.addItemsFromLocalStore(this.FOUR_CELL,3)}}}])&&J(e.prototype,n),r&&J(e,r),i}(q);function K(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var Q=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.preloader=document.querySelector(e),this.hiddenPreloader()}var e,n,r;return e=t,(n=[{key:"hiddenPreloader",value:function(){var t=this;setTimeout((function(){t.preloader.style.display="none"}),1200)}}])&&K(e.prototype,n),r&&K(e,r),t}();function V(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return X(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return X(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var tt,et,nt,rt,ot,it=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.rename=document.querySelector(e),this.redate=document.querySelector(n),this.retime=document.querySelector(r),this.modal=document.querySelector(".window"),this.modalBody=document.querySelector(".window__body"),this.closed=document.querySelector(".window__close"),this.done=document.querySelector(".window__done"),this.taskOptions=[],this.valid(),this.open(),this.close(),this.getTaskOptions(),this.editTask()}var e,n,r;return e=t,(n=[{key:"valid",value:function(){var t=this;this.done.disabled=!0;var e=[this.rename,this.redate,this.retime];e.forEach((function(n){n.addEventListener("input",(function(){e[0].value.trim()&&""!==e[1].value||""!==e[2].value?(t.done.style.opacity=1,t.done.disabled=!1):(t.done.style.opacity=.6,t.done.disabled=!0)}))})),this.rename.value.trim()&&""!==this.redate.value?(this.done.style.opacity=1,this.done.disabled=!1):(this.done.style.opacity=.6,this.done.disabled=!0)}},{key:"open",value:function(){var t=this;document.addEventListener("click",(function(e){t.valid(),e.target.hasAttribute("data-btn-edit")&&(t.modal.style.display="flex",t.modalBody.classList.add("window__animation"))}))}},{key:"close",value:function(){var t=this;this.closed.addEventListener("click",(function(){t.modal.style.display="none",t.modalBody.classList.remove("window__animation"),t.rename.value="",t.redate.value="",t.retime.value=""}))}},{key:"getTaskOptions",value:function(){var t=this;document.addEventListener("click",(function(e){if(e.target.hasAttribute("data-btn-edit")){var n=document.getElementById("".concat(e.target.dataset.id)),r=n.querySelector(".reminder__name"),o=n.querySelector(".reminder__date"),i=n.querySelector(".reminder__time"),c={one:a(O),two:a(k),three:a(E),four:a(T)};return t.taskOptions=[r,o,i,c,n],t.taskOptions}}))}},{key:"editTask",value:function(){var t=this;this.done.addEventListener("click",(function(){var e=V(t.taskOptions,5),n=e[0],r=e[1],o=e[2],i=e[3],a=e[4];n.innerHTML=t.rename.value,r.innerHTML=t.redate.value.split("-").reverse().join("."),t.retime&&(o.innerHTML=t.retime.value),l(i,"one",a,O,"ONE_CELL"),l(i,"two",a,k,"TWO_CELL"),l(i,"three",a,E,"THREE_CELL"),l(i,"four",a,T,"FOUR_CELL"),t.closed.click(),t.taskOptions=[]}))}}])&&Z(e.prototype,n),r&&Z(e,r),t}();tt=M(document.querySelectorAll(".category"),2),et=tt[0],nt=tt[1],rt=F.map(U).join(""),ot=H.map(U).join(""),et.innerHTML=rt,nt.innerHTML=ot;new Q(".preloader");var at=new G(O,k,E,T),ct=new L(".invalid-name"),ut=new w(".invalid-date"),lt=new q(".category__item");new it(".window__name",".window__dateSet",".window__timeSet");lt.textItemComplitly(),setInterval(lt.textItemComplitly,500),document.addEventListener("DOMContentLoaded",(function(){ct.chekingInput(),ut.chekingInput(),at.pasteItemsFromLocalStore(),lt.deleteTask(),lt.completeTask()})),document.addEventListener("submit",(function(t){t.preventDefault(),ct.giveErr(),ut.giveErr(),ct.taskName.value.trim()&&""!==ut.date.value&&(lt.addTask(),ct.taskName.value="",ut.date.value="",ut.time.value="",lt.select.value=1)}))}});