!function(n){function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var t={};e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=0)}([function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(2),r=t.n(o),c=t(3);t(1);const u=document.querySelector("#form");console.log(r.a.init(u)),u.addEventListener("submit",function(){r.a.result()&&Object(c.a)("http://localhost:3000").then(function(n){console.log("Success!",n)},function(n){console.error("Failed!",n)})})},function(n,e){function t(n){c[s].className="slide",s=(n+c.length)%c.length,c[s].className="slide showing"}function o(){u.onclick=function(){t(s+1)},i.onclick=function(){t(s-1)}}function r(){for(var n=0;n<l.length;n++)l[n].style.display="inline-block"}const c=document.querySelectorAll("#slides .slide"),u=document.getElementById("next"),i=document.getElementById("previous"),l=document.querySelectorAll(".controls");let s=0;n.exports=function(){0!==c.length&&(o(),r())}},function(n,e){n.exports=function(){function n(){r.addEventListener("submit",function(n){n.preventDefault(),e(r,o)}),r.addEventListener("reset",function(){t(r)})}function e(n,e){console.log("submit"),c=!0,[].forEach.call(n.elements,function(n){"BUTTON"!==n.tagName&&(e(n)||(n.classList.add("error"),c=!1))})}function t(n){[].forEach.call(n.elements,function(n){n.classList.remove("error")})}function o(n){return""!=n.value}var r=null,c=!1;return{init:function(e){console.log("validation init"),r=e,console.log(r.elements),n()},result:function(){return c}}}()},function(n,e,t){"use strict";e.a=function(n){return new Promise(function(e,t){var o=new XMLHttpRequest;o.open("GET",n),o.onload=function(){200==o.status?e(o.response):t(Error(o.statusText))},o.onerror=function(){t(Error("Network Error"))},o.send()})}}]);