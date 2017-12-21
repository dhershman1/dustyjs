!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(r.DustyJS={})}(this,function(r){"use strict";var e=function(r,e){for(var t=e.length,n=0;n<t;){if(r(e[n]))return e[n];n+=1}return!1},t=function(r,e){var t="";for(t in e)if(r(e[t]))return e[t];return!1},n=function(r){if(!y(r)){if(s(r.empty))return r.empty();if(f(r))return[];if(g(r))return"";if(l(r))return{};p(r)&&function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e]}()}return 0},u=function(r){for(var e=[],t="";!(t=r.next()).done;)e.push(t.value);return e},o=function(r){var e=String(r).match(/^function (\w*)/);return null==e?"":e[1]},i=function(r,e){return null===r||null===e||h(r)!==h(e)},c=function(r,e,t,n){if(void 0===t&&(t=[]),void 0===n&&(n=[]),m(r,e))return!0;if(i(r,e))return!1;switch(h(r)){case"Arguments":case"Array":case"Object":if("function"==typeof r.constructor&&"Promise"===o(r.constructor))return r===e;break;case"Boolean":case"Number":case"String":if(typeof r!=typeof e||!m(r.valueOf(),e.valueOf()))return!1;break;case"Date":if(!m(r.valueOf(),e.valueOf()))return!1;break;case"Error":return r.name===e.name&&r.message===e.message;case"RegExp":if(r.source!==e.source||r.global!==e.global||r.ignoreCase!==e.ignoreCase||r.multiline!==e.multiline||r.sticky!==e.sticky||r.unicode!==e.unicode)return!1;break;case"Map":case"Set":if(!c(u(r.entries()),u(e.entries()),t,n))return!1;break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var a=Object.keys(r);if(a.length!==Object.keys(e).length)return!1;for(var f=t.length-1;f>=0;){if(t[f]===r)return n[f]===e;f-=1}for(t.push(r),n.push(e),f=a.length-1;f>=0;){var l=a[f];if(!b(l,e)||!c(e[l],r[l],t,n))return!1;f-=1}return t.pop(),n.pop(),!0},a=function(r){for(var e=[],t=arguments.length-1;t-- >0;)e[t]=arguments[t+1];return r.length<=e.length?r.apply(void 0,e):function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return a.apply(void 0,[r].concat(e,t))}},f=Array.isArray||function(r){return"[object Array]"===Object.prototype.toString.call(r)},l=function(r){return"[object Object]"===Object.prototype.toString.call(r)},s=function(r){return"[object Function]"===Object.prototype.toString.call(r)},p=function(r){return"[object Arguments]"===Object.prototype.toString.call(r)},y=function(r){return null===r},g=function(r){return"[object String]"===Object.prototype.toString.call(r)},b=function(r,e){return Object.prototype.hasOwnProperty.call(e,r)},d=function(r,e){return c(r,e,[],[])},v=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return r.reduce(function(r,e){var t="";for(t in e)r[t]=e[t];return r},{})},A=function(r,e){var t=r<0?e.length+r:r;return g(e)?e.charAt(t):e[t]},h=function(r){return y(r)?"Null":void 0===r?"Undefined":Object.prototype.toString.call(r).slice(8,-1)},m=function(r,e){return r===e?0!==r||1/r==1/e:r!==r&&e!==e},O={"@@functional/placeholder":!0};r.curry=a,r.isArray=f,r.isObject=l,r.isFunction=s,r.isArguments=p,r.isNull=y,r.isElement=function(r){return Boolean(r&&1===r.nodeType)},r.isNumber=function(r){return"[object Number]"===Object.prototype.toString.call(r)},r.isString=g,r.isRegExp=function(r){return"[object RegExp]"===Object.prototype.toString.call(r)},r.has=b,r.isEqual=d,r.isEmpty=function(r){return null!==r&&d(r,n(r))},r.removeAtIndex=function(r,e){return e.slice(0,r).concat(e.slice(r+1))},r.replaceAtIndex=function(r,e,t){return t.slice(0,r).concat([e],t.slice(r+1))},r.extend=v,r.deepClone=function(r){return JSON.parse(JSON.stringify(r))},r.clone=function(r){return l(r)?f(r)?r.slice():v(r):r},r.mean=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var t=r.length,n=0;if(1===t&&f(r)){var u=r[0];t=u.length,n=u.reduce(function(r,e){return r+e},0)}else n=r.reduce(function(r,e){return r+e},0);return n/t},r.range=function(r,e){var t=[],n=e,u=r;for(e||(u=0,n=r);u<n;)t.push(u),u+=1;return t},r.nth=A,r.last=function(r){return A(-1,r)},r.not=function(r){return!r},r.empty=function(r){return n(r)},r.type=h,r.identical=m,r.__=O,r.find=function(r,n){return l(n)?t(r,n):e(r,n)},r.omit=function(r,e){return Array.isArray(e)?e.filter(function(e){return Array.isArray(r)?-1===r.indexOf(e):r!==e}):Object.keys(e).reduce(function(t,n){return Array.isArray(r)&&-1===r.indexOf(n)?(t[n]=e[n],t):(Array.isArray(r)||r===n||(t[n]=e[n]),t)},{})},Object.defineProperty(r,"__esModule",{value:!0})});
