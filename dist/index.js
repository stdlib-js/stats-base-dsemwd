"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var d=s(function(k,u){
var p=require('@stdlib/stats-base-dvariancewd/dist'),y=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,a,i){return y(p(e,r,a,i)/e)}u.exports=x
});var v=s(function(z,n){
var f=require('@stdlib/stats-base-dvariancewd/dist').ndarray,j=require('@stdlib/math-base-special-sqrt/dist');function l(e,r,a,i,w){return j(f(e,r,a,i,w)/e)}n.exports=l
});var c=s(function(A,o){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=d(),_=v();R(q,"ndarray",_);o.exports=q
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=c(),t,m=O(E(__dirname,"./native.js"));b(m)?t=g:t=m;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
