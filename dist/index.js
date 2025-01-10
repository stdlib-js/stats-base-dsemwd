"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=s(function(k,n){
var f=require('@stdlib/stats-base-dvariancewd/dist').ndarray,p=require('@stdlib/math-base-special-sqrt/dist');function w(e,r,i,a,y){return p(f(e,r,i,a,y)/e)}n.exports=w
});var v=s(function(z,d){
var x=require('@stdlib/strided-base-stride2offset/dist'),j=t();function l(e,r,i,a){return j(e,r,i,a,x(e,a))}d.exports=l
});var c=s(function(A,o){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),_=t();R(q,"ndarray",_);o.exports=q
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=c(),u,m=O(E(__dirname,"./native.js"));b(m)?u=g:u=m;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
