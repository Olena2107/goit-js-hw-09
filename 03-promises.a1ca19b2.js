function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");r("fbklV");document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const{delay:n,step:o,amount:r}=t.currentTarget.elements;let l=Number(n.value),a=0,u=0;const s=setInterval((()=>{var t,n;a!==Number(r.value)?(a+=1,u+=1,(t=u,n=l,new Promise(((e,o)=>{setTimeout((()=>{Math.random()>.3?e({position:t,delay:n}):o({position:t,delay:n})}),n)}))).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),l+=Number(o.value)):clearInterval(s)}),0)}));
//# sourceMappingURL=03-promises.a1ca19b2.js.map
