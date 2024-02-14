// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function s(r){return"string"==typeof r}var u=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,y=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,y,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var _=String.fromCharCode,k=isNaN,x=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function A(r){var e,t,n,a,o,u,l,f,p;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",l=1,f=0;f<r.length;f++)if(s(n=r[f]))u+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,k(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!k(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(o)?String(n.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),u+=n.arg||"",l+=1}return u}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function V(r){var e,t,n,i;for(t=[],i=0,n=O.exec(r);n;)(e=r.slice(i,O.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),i=O.lastIndex,n=O.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function $(r){return"string"==typeof r}function F(r){var e,t;if(!$(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[V(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return A.apply(null,e)}var I,C=Object.prototype,P=C.toString,R=C.__defineGetter__,N=C.__defineSetter__,Z=C.__lookupGetter__,L=C.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Z.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&R&&R.call(r,e,t.get),o&&N&&N.call(r,e,t.set),r};var M=I;function W(r,e,t){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function B(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function G(r,e){for(var t=0,n=r.length-1;n>=0;n--){var i=r[n];"."===i?r.splice(n,1):".."===i?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var q=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,z=function(r){return q.exec(r).slice(1)};function U(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,e="/"===n.charAt(0))}return(e?"/":"")+(r=G(er(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function X(r){var e=D(r),t="/"===tr(r,-1);return(r=G(er(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r}function D(r){return"/"===r.charAt(0)}function J(){var r=Array.prototype.slice.call(arguments,0);return X(er(r,(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function H(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=U(r).substr(1),e=U(e).substr(1);for(var n=t(r.split("/")),i=t(e.split("/")),a=Math.min(n.length,i.length),o=a,c=0;c<a;c++)if(n[c]!==i[c]){o=c;break}var s=[];for(c=o;c<n.length;c++)s.push("..");return(s=s.concat(i.slice(o))).join("/")}function K(r){var e=z(r),t=e[0],n=e[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function Q(r,e){var t=z(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function Y(r){return z(r)[3]}var rr={extname:Y,basename:Q,dirname:K,sep:"/",delimiter:":",relative:H,join:J,isAbsolute:D,normalize:X,resolve:U};function er(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var tr="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},nr=B(Object.freeze({__proto__:null,basename:Q,default:rr,delimiter:":",dirname:K,extname:Y,isAbsolute:D,join:J,normalize:X,relative:H,resolve:U,sep:"/"}));var ir=Object,ar=/./;function or(r){return"boolean"==typeof r}function cr(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var sr=cr();var ur=cr();var lr=Object.prototype.toString;var fr=Object.prototype.hasOwnProperty;var pr,gr="function"==typeof Symbol?Symbol:void 0,dr="function"==typeof gr?gr.toStringTag:"";pr=ur&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return lr.call(r);t=r[dr],a=dr,e=null!=(i=r)&&fr.call(i,a);try{r[dr]=void 0}catch(e){return lr.call(r)}return n=lr.call(r),e?r[dr]=t:delete r[dr],n}:function(r){return lr.call(r)};var hr=pr,br=Boolean,vr=Boolean.prototype.toString;var yr=sr&&"symbol"==typeof Symbol.toStringTag;function wr(r){return"object"==typeof r&&(r instanceof br||(yr?function(r){try{return vr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===hr(r)))}function mr(r){return or(r)||wr(r)}function jr(r){return"number"==typeof r}function Er(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function _r(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+Er(i):Er(i)+r,n&&(r="-"+r)),r}W(mr,"isPrimitive",or),W(mr,"isObject",wr);var kr=String.prototype.toLowerCase,xr=String.prototype.toUpperCase;function Sr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!jr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=_r(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=_r(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===xr.call(r.specifier)?xr.call(t):kr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Ar(r){return"string"==typeof r}var Or=Math.abs,Tr=String.prototype.toLowerCase,Vr=String.prototype.toUpperCase,$r=String.prototype.replace,Fr=/e\+(\d)$/,Ir=/e-(\d)$/,Cr=/^(\d+)$/,Pr=/^(\d+)e/,Rr=/\.0$/,Nr=/\.0*e/,Zr=/(\..*[^0])0*e/;function Lr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!jr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Or(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=$r.call(t,Zr,"$1e"),t=$r.call(t,Nr,"e"),t=$r.call(t,Rr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=$r.call(t,Fr,"e+0$1"),t=$r.call(t,Ir,"e-0$1"),r.alternate&&(t=$r.call(t,Cr,"$1."),t=$r.call(t,Pr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Vr.call(r.specifier)?Vr.call(t):Tr.call(t)}function Mr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Wr(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Mr(n):Mr(n)+r}var Br=String.fromCharCode,Gr=isNaN,qr=Array.isArray;function zr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Ur(r){var e,t,n,i,a,o,c,s,u;if(!qr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(Ar(n=r[s]))o+=n;else{if(e=void 0!==n.precision,!(n=zr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Gr(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Gr(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Sr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Gr(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Gr(a)?String(n.arg):Br(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Lr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=_r(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Wr(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var Xr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Dr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Jr(r){var e,t,n,i;for(t=[],i=0,n=Xr.exec(r);n;)(e=r.slice(i,Xr.lastIndex-n[0].length)).length&&t.push(e),t.push(Dr(n)),i=Xr.lastIndex,n=Xr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Hr(r){return"string"==typeof r}function Kr(r){var e,t;if(!Hr(r))throw new TypeError(Kr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Jr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Ur.apply(null,e)}function Qr(){return new Function("return this;")()}var Yr="object"==typeof self?self:null,re="object"==typeof window?window:null,ee="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},te="object"==typeof ee?ee:null,ne="object"==typeof globalThis?globalThis:null;var ie=function(r){if(arguments.length){if(!or(r))throw new TypeError(Kr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Qr()}if(ne)return ne;if(Yr)return Yr;if(re)return re;if(te)return te;throw new Error("unexpected error. Unable to resolve global object.")}(),ae=ie.document&&ie.document.childNodes,oe=Int8Array;function ce(){return/^\s*function\s*([^(]*)/i}var se,ue=/^\s*function\s*([^(]*)/i;W(ce,"REGEXP",ue),se=Array.isArray?Array.isArray:function(r){return"[object Array]"===hr(r)};var le=se;function fe(r){return null!==r&&"object"==typeof r}var pe=function(r){if("function"!=typeof r)throw new TypeError(Kr("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!le(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(fe);function ge(r){var e,t,n,i;if(("Object"===(t=hr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ue.exec(n.toString()))return e[1]}return fe(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}W(fe,"isObjectLikeArray",pe);var de="function"==typeof ar||"object"==typeof oe||"function"==typeof ae?function(r){return ge(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ge(r).toLowerCase():e};var he,be,ve=Object.getPrototypeOf;be=Object.getPrototypeOf,he="function"===de(be)?ve:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===hr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ye=he;function we(r){return null==r?null:(r=ir(r),ye(r))}function me(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===hr(r))return!0;r=we(r)}return!1}function je(r,e,t,n){var i,a,o,c,s,u,l;if(u=r-e,r<=0||u<=0)return NaN;if(1===r||0===n)return 0;for(c=n<0?(1-r)*n:0,o=0,a=0,l=0;l<r;l++)o+=(i=(s=t[c])-a)*(s-(a+=i/(l+1))),c+=n;return o/u}W(je,"ndarray",(function(r,e,t,n,i){var a,o,c,s,u,l,f;if(l=r-e,r<=0||l<=0)return NaN;if(1===r||0===n)return 0;for(s=i,c=0,o=0,f=0;f<r;f++)c+=(a=(u=t[s])-o)*(u-(o+=a/(f+1))),s+=n;return c/l}));var Ee,_e=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return me(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,nr.join)("/home/runner/work/stats-base-dsemwd/stats-base-dsemwd/node_modules/@stdlib/stats-base-dvariancewd/lib","./native.js")),ke=Ee=me(_e)?je:_e;const{ndarray:xe}=Ee;var Se=Math.sqrt;function Ae(r,e,t,n){return Se(ke(r,e,t,n)/r)}function Oe(r,e,t,n,i){return Se(xe(r,e,t,n,i)/r)}W(Ae,"ndarray",Oe);export{Ae as default,Oe as ndarray};
//# sourceMappingURL=mod.js.map
