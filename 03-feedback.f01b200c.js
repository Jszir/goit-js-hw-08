var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,v=function(){return c.Date.now()};function m(e,t,n){var i,o,r,a,u,f,c=0,l=!1,m=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function j(e){return c=e,u=setTimeout(h,t),l?b(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-c>=r}function h(){var e=v();if(S(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-f);return m?d(n,r-(e-c)):n}(e))}function w(e){return u=void 0,y&&i?b(e):(i=o=void 0,a)}function O(){var e=v(),n=S(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return j(f);if(m)return u=setTimeout(h,t),b(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=g(t)||0,p(n)&&(l=!!n.leading,r=(m="maxWait"in n)?s(g(n.maxWait)||0,t):r,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=f=o=u=void 0},O.flush=function(){return void 0===u?a:w(v())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=o.test(e);return u||r.test(e)?a(e.slice(2),u?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),m(e,t,{leading:i,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),b=y.querySelector('input[name="email"]'),j=y.querySelector('textarea[name="message"]');function S(){const e={email:b.value,message:j.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}b.addEventListener("input",t(S,500)),j.addEventListener("input",t(S,500)),function(){const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);b.value=t.email,j.value=t.message}}(),y.addEventListener("submit",(function(e){e.preventDefault();const t={email:b.value,message:j.value};b.value="",j.value="",localStorage.removeItem("feedback-form-state"),console.log(t)}));
//# sourceMappingURL=03-feedback.f01b200c.js.map