function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("fbklV"),a=r("7Y9D8");e(a).Notify.init({width:"320px",clickToClose:!0,pauseOnHover:!0,fontSize:"14px"});const l=document.querySelector("[data-start]"),d=document.querySelector("[data-days]"),s=document.querySelector("[data-hours]"),u=document.querySelector("[data-minutes]"),c=document.querySelector("[data-seconds]");l.disabled=!0;let f=null;const m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]-Date.now()<0&&e(a).Notify.failure("Please choose a date in the future"),t[0]-Date.now()>0&&(l.disabled=!1,f=t[0])}},{enableTime:h,time_24hr:p,defaultDate:y,minuteIncrement:T,onClose:b}=m,v=((0,i.default)("#datetime-picker",{enableTime:h,time_24hr:p,defaultDate:y,minuteIncrement:T,onClose:b}),{intervalId:null,deltaTime:()=>f-Date.now(),startTimer(){l.disabled=!0,this.intervalId=setInterval((()=>{const t=this.deltaTime();t<=1e3&&(this.stopTimer(),e(a).Notify.success("That time has come",{position:"center-center",timeout:6e3,fontSize:"20px"}));const{days:n,hours:o,minutes:r,seconds:i}=function(e){const t=1e3,n=60*t,o=60*n,r=24*o,i=x(Math.floor(e/r)),a=x(Math.floor(e%r/o)),l=x(Math.floor(e%r%o/n)),d=x(Math.floor(e%r%o%n/t));return{days:i,hours:a,minutes:l,seconds:d}}(t);d.textContent=n,s.textContent=o,u.textContent=r,c.textContent=i}),1e3)},stopTimer(){clearInterval(this.intervalId)}});function x(e){return e.toString().padStart(2,"0")}l.addEventListener("click",v.startTimer.bind(v));
//# sourceMappingURL=02-timer.2838d7a3.js.map
