!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequire7bc7;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequire7bc7=i);var r=i("iU1Pc");var u=document.querySelector(".form"),a=document.querySelector("form"),c=a.delay,l=a.step,f=a.amount;u.addEventListener("submit",(function(n){var o=function(n){setTimeout((function(){var o,t;(o=n+1,t=c,t=t.value,new Promise((function(e,n){setTimeout((function(){Math.random()>.3?e({position:o,delay:t}):n({position:o,delay:t})}),t)}))).then((function(n){var o=n.position,t=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"),{useIcon:!1})})).catch((function(n){var o=n.position,t=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"),{useIcon:!1})}))}),n*l.value)};n.preventDefault();for(var t=0;t<f.value;t++)o(t)}))}();
//# sourceMappingURL=03-promises.91cab149.js.map
