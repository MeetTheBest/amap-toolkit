(function(c,d){typeof exports=="object"&&typeof module<"u"?d(exports):typeof define=="function"&&define.amd?define(["exports"],d):(c=typeof globalThis<"u"?globalThis:c||self,d(c["gaode-tools"]={}))})(this,function(c){"use strict";var hs=Object.defineProperty;var us=(c,d,p)=>d in c?hs(c,d,{enumerable:!0,configurable:!0,writable:!0,value:p}):c[d]=p;var s=(c,d,p)=>(us(c,typeof d!="symbol"?d+"":d,p),p);const d={"border-color":"#e1f5fe","font-size":"12px","border-radius":".25rem","background-color":"rgba(0,0,0,.4)","border-width":0,"text-align":"center",color:"#fff"},p=(t="",e={})=>new AMap.Text({text:t,style:{...d,...e},offset:[0,-10]}),A=(t,e)=>{const n=t.divideBy(2).add(e.divideBy(2));return{text:`${Math.round(t.distance(e))}米`,textPos:n}};let ct=class{constructor(e){s(this,"map");s(this,"startPointToCursorText",null);s(this,"lastPointToCursorText",null);s(this,"startPosition",null);s(this,"lastPosition",null);s(this,"getClickPosition",e=>{const n=e.lnglat;this.startPosition?this.startPosition&&(this.lastPosition=n,this.createDistanceText()):this.startPosition=n});s(this,"onMouseMoveInDrawPolygon",e=>{if(!this.startPosition||!this.lastPosition)return;const n=e.lnglat;this.updateDistanceText(this.startPointToCursorText,A(this.startPosition,n)),this.updateDistanceText(this.lastPointToCursorText,A(this.lastPosition,n))});if(!e)throw new Error("map not found!");this.map=e}start(){this.map.on("click",this.getClickPosition),this.map.on("mousemove",this.onMouseMoveInDrawPolygon)}stop(){this.map.off("click",this.getClickPosition),this.map.off("mousemove",this.onMouseMoveInDrawPolygon)}createDistanceText(){this.startPointToCursorText&&this.lastPointToCursorText||(this.startPointToCursorText=p(),this.startPointToCursorText.setMap(this.map),this.lastPointToCursorText=p(),this.lastPointToCursorText.setMap(this.map))}updateDistanceText(e,{text:n,textPos:r}){e.setText(n),e.setPosition(r)}removeDistanceText(){var e,n;(e=this.startPointToCursorText)==null||e.remove(),this.startPointToCursorText=null,(n=this.lastPointToCursorText)==null||n.remove(),this.lastPointToCursorText=null}reset(){return this.startPosition=null,this.lastPosition=null,this.removeDistanceText(),this}destroy(){return this.reset(),this.stop(),this}};var Me=typeof global=="object"&&global&&global.Object===Object&&global;const ht=Me;var ve=typeof self=="object"&&self&&self.Object===Object&&self,be=ht||ve||Function("return this")();const T=be;var Ee=T.Symbol;const P=Ee;var ut=Object.prototype,$e=ut.hasOwnProperty,we=ut.toString,k=P?P.toStringTag:void 0;function _e(t){var e=$e.call(t,k),n=t[k];try{t[k]=void 0;var r=!0}catch{}var o=we.call(t);return r&&(e?t[k]=n:delete t[k]),o}var Ce=Object.prototype,xe=Ce.toString;function je(t){return xe.call(t)}var Ae="[object Null]",Oe="[object Undefined]",gt=P?P.toStringTag:void 0;function b(t){return t==null?t===void 0?Oe:Ae:gt&&gt in Object(t)?_e(t):je(t)}function E(t){return t!=null&&typeof t=="object"}var Se="[object Symbol]";function K(t){return typeof t=="symbol"||E(t)&&b(t)==Se}function ft(t,e){for(var n=-1,r=t==null?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}var Le=Array.isArray;const $=Le;var ke=1/0,dt=P?P.prototype:void 0,pt=dt?dt.toString:void 0;function yt(t){if(typeof t=="string")return t;if($(t))return ft(t,yt)+"";if(K(t))return pt?pt.call(t):"";var e=t+"";return e=="0"&&1/t==-ke?"-0":e}function I(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}function Ie(t){return t}var De="[object AsyncFunction]",Fe="[object Function]",Be="[object GeneratorFunction]",Ue="[object Proxy]";function Tt(t){if(!I(t))return!1;var e=b(t);return e==Fe||e==Be||e==De||e==Ue}var Re=T["__core-js_shared__"];const H=Re;var Pt=function(){var t=/[^.]+$/.exec(H&&H.keys&&H.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function Ge(t){return!!Pt&&Pt in t}var ze=Function.prototype,Ne=ze.toString;function w(t){if(t!=null){try{return Ne.call(t)}catch{}try{return t+""}catch{}}return""}var Ke=/[\\^$.*+?()[\]{}|]/g,He=/^\[object .+?Constructor\]$/,Ve=Function.prototype,We=Object.prototype,Ye=Ve.toString,Xe=We.hasOwnProperty,qe=RegExp("^"+Ye.call(Xe).replace(Ke,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ze(t){if(!I(t)||Ge(t))return!1;var e=Tt(t)?qe:He;return e.test(w(t))}function Je(t,e){return t==null?void 0:t[e]}function _(t,e){var n=Je(t,e);return Ze(n)?n:void 0}var Qe=_(T,"WeakMap");const V=Qe;var mt=Object.create,tn=function(){function t(){}return function(e){if(!I(e))return{};if(mt)return mt(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();const en=tn;function nn(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function rn(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}var on=800,sn=16,an=Date.now;function ln(t){var e=0,n=0;return function(){var r=an(),o=sn-(r-n);if(n=r,o>0){if(++e>=on)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function cn(t){return function(){return t}}var hn=function(){try{var t=_(Object,"defineProperty");return t({},"",{}),t}catch{}}();const R=hn;var un=R?function(t,e){return R(t,"toString",{configurable:!0,enumerable:!1,value:cn(e),writable:!0})}:Ie,gn=ln(un);const fn=gn;function dn(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}var pn=9007199254740991,yn=/^(?:0|[1-9]\d*)$/;function Tn(t,e){var n=typeof t;return e=e??pn,!!e&&(n=="number"||n!="symbol"&&yn.test(t))&&t>-1&&t%1==0&&t<e}function Mt(t,e,n){e=="__proto__"&&R?R(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function vt(t,e){return t===e||t!==t&&e!==e}var Pn=Object.prototype,mn=Pn.hasOwnProperty;function bt(t,e,n){var r=t[e];(!(mn.call(t,e)&&vt(r,n))||n===void 0&&!(e in t))&&Mt(t,e,n)}function D(t,e,n,r){var o=!n;n||(n={});for(var i=-1,a=e.length;++i<a;){var l=e[i],g=r?r(n[l],t[l],l,n,t):void 0;g===void 0&&(g=t[l]),o?Mt(n,l,g):bt(n,l,g)}return n}var Et=Math.max;function Mn(t,e,n){return e=Et(e===void 0?t.length-1:e,0),function(){for(var r=arguments,o=-1,i=Et(r.length-e,0),a=Array(i);++o<i;)a[o]=r[e+o];o=-1;for(var l=Array(e+1);++o<e;)l[o]=r[o];return l[e]=n(a),nn(t,this,l)}}var vn=9007199254740991;function $t(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=vn}function wt(t){return t!=null&&$t(t.length)&&!Tt(t)}var bn=Object.prototype;function W(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||bn;return t===n}function En(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var $n="[object Arguments]";function _t(t){return E(t)&&b(t)==$n}var Ct=Object.prototype,wn=Ct.hasOwnProperty,_n=Ct.propertyIsEnumerable,Cn=_t(function(){return arguments}())?_t:function(t){return E(t)&&wn.call(t,"callee")&&!_n.call(t,"callee")};const xt=Cn;function xn(){return!1}var jt=typeof c=="object"&&c&&!c.nodeType&&c,At=jt&&typeof module=="object"&&module&&!module.nodeType&&module,jn=At&&At.exports===jt,Ot=jn?T.Buffer:void 0,An=Ot?Ot.isBuffer:void 0,On=An||xn;const St=On;var Sn="[object Arguments]",Ln="[object Array]",kn="[object Boolean]",In="[object Date]",Dn="[object Error]",Fn="[object Function]",Bn="[object Map]",Un="[object Number]",Rn="[object Object]",Gn="[object RegExp]",zn="[object Set]",Nn="[object String]",Kn="[object WeakMap]",Hn="[object ArrayBuffer]",Vn="[object DataView]",Wn="[object Float32Array]",Yn="[object Float64Array]",Xn="[object Int8Array]",qn="[object Int16Array]",Zn="[object Int32Array]",Jn="[object Uint8Array]",Qn="[object Uint8ClampedArray]",tr="[object Uint16Array]",er="[object Uint32Array]",u={};u[Wn]=u[Yn]=u[Xn]=u[qn]=u[Zn]=u[Jn]=u[Qn]=u[tr]=u[er]=!0,u[Sn]=u[Ln]=u[Hn]=u[kn]=u[Vn]=u[In]=u[Dn]=u[Fn]=u[Bn]=u[Un]=u[Rn]=u[Gn]=u[zn]=u[Nn]=u[Kn]=!1;function nr(t){return E(t)&&$t(t.length)&&!!u[b(t)]}function Y(t){return function(e){return t(e)}}var Lt=typeof c=="object"&&c&&!c.nodeType&&c,F=Lt&&typeof module=="object"&&module&&!module.nodeType&&module,rr=F&&F.exports===Lt,X=rr&&ht.process,or=function(){try{var t=F&&F.require&&F.require("util").types;return t||X&&X.binding&&X.binding("util")}catch{}}();const O=or;var kt=O&&O.isTypedArray,ir=kt?Y(kt):nr;const sr=ir;var ar=Object.prototype,lr=ar.hasOwnProperty;function It(t,e){var n=$(t),r=!n&&xt(t),o=!n&&!r&&St(t),i=!n&&!r&&!o&&sr(t),a=n||r||o||i,l=a?En(t.length,String):[],g=l.length;for(var f in t)(e||lr.call(t,f))&&!(a&&(f=="length"||o&&(f=="offset"||f=="parent")||i&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||Tn(f,g)))&&l.push(f);return l}function Dt(t,e){return function(n){return t(e(n))}}var cr=Dt(Object.keys,Object);const hr=cr;var ur=Object.prototype,gr=ur.hasOwnProperty;function fr(t){if(!W(t))return hr(t);var e=[];for(var n in Object(t))gr.call(t,n)&&n!="constructor"&&e.push(n);return e}function q(t){return wt(t)?It(t):fr(t)}function dr(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var pr=Object.prototype,yr=pr.hasOwnProperty;function Tr(t){if(!I(t))return dr(t);var e=W(t),n=[];for(var r in t)r=="constructor"&&(e||!yr.call(t,r))||n.push(r);return n}function Z(t){return wt(t)?It(t,!0):Tr(t)}var Pr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,mr=/^\w*$/;function Mr(t,e){if($(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||K(t)?!0:mr.test(t)||!Pr.test(t)||e!=null&&t in Object(e)}var vr=_(Object,"create");const B=vr;function br(){this.__data__=B?B(null):{},this.size=0}function Er(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var $r="__lodash_hash_undefined__",wr=Object.prototype,_r=wr.hasOwnProperty;function Cr(t){var e=this.__data__;if(B){var n=e[t];return n===$r?void 0:n}return _r.call(e,t)?e[t]:void 0}var xr=Object.prototype,jr=xr.hasOwnProperty;function Ar(t){var e=this.__data__;return B?e[t]!==void 0:jr.call(e,t)}var Or="__lodash_hash_undefined__";function Sr(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=B&&e===void 0?Or:e,this}function C(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}C.prototype.clear=br,C.prototype.delete=Er,C.prototype.get=Cr,C.prototype.has=Ar,C.prototype.set=Sr;function Lr(){this.__data__=[],this.size=0}function G(t,e){for(var n=t.length;n--;)if(vt(t[n][0],e))return n;return-1}var kr=Array.prototype,Ir=kr.splice;function Dr(t){var e=this.__data__,n=G(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Ir.call(e,n,1),--this.size,!0}function Fr(t){var e=this.__data__,n=G(e,t);return n<0?void 0:e[n][1]}function Br(t){return G(this.__data__,t)>-1}function Ur(t,e){var n=this.__data__,r=G(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function m(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}m.prototype.clear=Lr,m.prototype.delete=Dr,m.prototype.get=Fr,m.prototype.has=Br,m.prototype.set=Ur;var Rr=_(T,"Map");const U=Rr;function Gr(){this.size=0,this.__data__={hash:new C,map:new(U||m),string:new C}}function zr(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function z(t,e){var n=t.__data__;return zr(e)?n[typeof e=="string"?"string":"hash"]:n.map}function Nr(t){var e=z(this,t).delete(t);return this.size-=e?1:0,e}function Kr(t){return z(this,t).get(t)}function Hr(t){return z(this,t).has(t)}function Vr(t,e){var n=z(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function M(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}M.prototype.clear=Gr,M.prototype.delete=Nr,M.prototype.get=Kr,M.prototype.has=Hr,M.prototype.set=Vr;var Wr="Expected a function";function J(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Wr);var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(J.Cache||M),n}J.Cache=M;var Yr=500;function Xr(t){var e=J(t,function(r){return n.size===Yr&&n.clear(),r}),n=e.cache;return e}var qr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Zr=/\\(\\)?/g,Jr=Xr(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(qr,function(n,r,o,i){e.push(o?i.replace(Zr,"$1"):r||n)}),e});const Qr=Jr;function to(t){return t==null?"":yt(t)}function Q(t,e){return $(t)?t:Mr(t,e)?[t]:Qr(to(t))}var eo=1/0;function Ft(t){if(typeof t=="string"||K(t))return t;var e=t+"";return e=="0"&&1/t==-eo?"-0":e}function Bt(t,e){e=Q(e,t);for(var n=0,r=e.length;t!=null&&n<r;)t=t[Ft(e[n++])];return n&&n==r?t:void 0}function Ut(t,e,n){var r=t==null?void 0:Bt(t,e);return r===void 0?n:r}function tt(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}var Rt=P?P.isConcatSpreadable:void 0;function no(t){return $(t)||xt(t)||!!(Rt&&t&&t[Rt])}function Gt(t,e,n,r,o){var i=-1,a=t.length;for(n||(n=no),o||(o=[]);++i<a;){var l=t[i];e>0&&n(l)?e>1?Gt(l,e-1,n,r,o):tt(o,l):r||(o[o.length]=l)}return o}function ro(t){var e=t==null?0:t.length;return e?Gt(t,1):[]}function oo(t){return fn(Mn(t,void 0,ro),t+"")}var io=Dt(Object.getPrototypeOf,Object);const et=io;var so="[object Object]",ao=Function.prototype,lo=Object.prototype,zt=ao.toString,co=lo.hasOwnProperty,ho=zt.call(Object);function uo(t){if(!E(t)||b(t)!=so)return!1;var e=et(t);if(e===null)return!0;var n=co.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&zt.call(n)==ho}function go(t,e,n){var r=-1,o=t.length;e<0&&(e=-e>o?0:o+e),n=n>o?o:n,n<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var i=Array(o);++r<o;)i[r]=t[r+e];return i}function fo(){this.__data__=new m,this.size=0}function po(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function yo(t){return this.__data__.get(t)}function To(t){return this.__data__.has(t)}var Po=200;function mo(t,e){var n=this.__data__;if(n instanceof m){var r=n.__data__;if(!U||r.length<Po-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new M(r)}return n.set(t,e),this.size=n.size,this}function S(t){var e=this.__data__=new m(t);this.size=e.size}S.prototype.clear=fo,S.prototype.delete=po,S.prototype.get=yo,S.prototype.has=To,S.prototype.set=mo;function Mo(t,e){return t&&D(e,q(e),t)}function vo(t,e){return t&&D(e,Z(e),t)}var Nt=typeof c=="object"&&c&&!c.nodeType&&c,Kt=Nt&&typeof module=="object"&&module&&!module.nodeType&&module,bo=Kt&&Kt.exports===Nt,Ht=bo?T.Buffer:void 0,Vt=Ht?Ht.allocUnsafe:void 0;function Eo(t,e){if(e)return t.slice();var n=t.length,r=Vt?Vt(n):new t.constructor(n);return t.copy(r),r}function $o(t,e){for(var n=-1,r=t==null?0:t.length,o=0,i=[];++n<r;){var a=t[n];e(a,n,t)&&(i[o++]=a)}return i}function Wt(){return[]}var wo=Object.prototype,_o=wo.propertyIsEnumerable,Yt=Object.getOwnPropertySymbols,Co=Yt?function(t){return t==null?[]:(t=Object(t),$o(Yt(t),function(e){return _o.call(t,e)}))}:Wt;const nt=Co;function xo(t,e){return D(t,nt(t),e)}var jo=Object.getOwnPropertySymbols,Ao=jo?function(t){for(var e=[];t;)tt(e,nt(t)),t=et(t);return e}:Wt;const Xt=Ao;function Oo(t,e){return D(t,Xt(t),e)}function qt(t,e,n){var r=e(t);return $(t)?r:tt(r,n(t))}function So(t){return qt(t,q,nt)}function Zt(t){return qt(t,Z,Xt)}var Lo=_(T,"DataView");const rt=Lo;var ko=_(T,"Promise");const ot=ko;var Io=_(T,"Set");const it=Io;var Jt="[object Map]",Do="[object Object]",Qt="[object Promise]",te="[object Set]",ee="[object WeakMap]",ne="[object DataView]",Fo=w(rt),Bo=w(U),Uo=w(ot),Ro=w(it),Go=w(V),x=b;(rt&&x(new rt(new ArrayBuffer(1)))!=ne||U&&x(new U)!=Jt||ot&&x(ot.resolve())!=Qt||it&&x(new it)!=te||V&&x(new V)!=ee)&&(x=function(t){var e=b(t),n=e==Do?t.constructor:void 0,r=n?w(n):"";if(r)switch(r){case Fo:return ne;case Bo:return Jt;case Uo:return Qt;case Ro:return te;case Go:return ee}return e});const st=x;var zo=Object.prototype,No=zo.hasOwnProperty;function Ko(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&No.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var Ho=T.Uint8Array;const re=Ho;function at(t){var e=new t.constructor(t.byteLength);return new re(e).set(new re(t)),e}function Vo(t,e){var n=e?at(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var Wo=/\w*$/;function Yo(t){var e=new t.constructor(t.source,Wo.exec(t));return e.lastIndex=t.lastIndex,e}var oe=P?P.prototype:void 0,ie=oe?oe.valueOf:void 0;function Xo(t){return ie?Object(ie.call(t)):{}}function qo(t,e){var n=e?at(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var Zo="[object Boolean]",Jo="[object Date]",Qo="[object Map]",ti="[object Number]",ei="[object RegExp]",ni="[object Set]",ri="[object String]",oi="[object Symbol]",ii="[object ArrayBuffer]",si="[object DataView]",ai="[object Float32Array]",li="[object Float64Array]",ci="[object Int8Array]",hi="[object Int16Array]",ui="[object Int32Array]",gi="[object Uint8Array]",fi="[object Uint8ClampedArray]",di="[object Uint16Array]",pi="[object Uint32Array]";function yi(t,e,n){var r=t.constructor;switch(e){case ii:return at(t);case Zo:case Jo:return new r(+t);case si:return Vo(t,n);case ai:case li:case ci:case hi:case ui:case gi:case fi:case di:case pi:return qo(t,n);case Qo:return new r;case ti:case ri:return new r(t);case ei:return Yo(t);case ni:return new r;case oi:return Xo(t)}}function Ti(t){return typeof t.constructor=="function"&&!W(t)?en(et(t)):{}}var Pi="[object Map]";function mi(t){return E(t)&&st(t)==Pi}var se=O&&O.isMap,Mi=se?Y(se):mi;const vi=Mi;var bi="[object Set]";function Ei(t){return E(t)&&st(t)==bi}var ae=O&&O.isSet,$i=ae?Y(ae):Ei;const wi=$i;var _i=1,Ci=2,xi=4,le="[object Arguments]",ji="[object Array]",Ai="[object Boolean]",Oi="[object Date]",Si="[object Error]",ce="[object Function]",Li="[object GeneratorFunction]",ki="[object Map]",Ii="[object Number]",he="[object Object]",Di="[object RegExp]",Fi="[object Set]",Bi="[object String]",Ui="[object Symbol]",Ri="[object WeakMap]",Gi="[object ArrayBuffer]",zi="[object DataView]",Ni="[object Float32Array]",Ki="[object Float64Array]",Hi="[object Int8Array]",Vi="[object Int16Array]",Wi="[object Int32Array]",Yi="[object Uint8Array]",Xi="[object Uint8ClampedArray]",qi="[object Uint16Array]",Zi="[object Uint32Array]",h={};h[le]=h[ji]=h[Gi]=h[zi]=h[Ai]=h[Oi]=h[Ni]=h[Ki]=h[Hi]=h[Vi]=h[Wi]=h[ki]=h[Ii]=h[he]=h[Di]=h[Fi]=h[Bi]=h[Ui]=h[Yi]=h[Xi]=h[qi]=h[Zi]=!0,h[Si]=h[ce]=h[Ri]=!1;function N(t,e,n,r,o,i){var a,l=e&_i,g=e&Ci,f=e&xi;if(n&&(a=o?n(t,r,o,i):n(t)),a!==void 0)return a;if(!I(t))return t;var y=$(t);if(y){if(a=Ko(t),!l)return rn(t,a)}else{var L=st(t),Te=L==ce||L==Li;if(St(t))return Eo(t,l);if(L==he||L==le||Te&&!o){if(a=g||Te?{}:Ti(t),!l)return g?Oo(t,vo(a,t)):xo(t,Mo(a,t))}else{if(!h[L])return o?t:{};a=yi(t,L,l)}}i||(i=new S);var Pe=i.get(t);if(Pe)return Pe;i.set(t,a),wi(t)?t.forEach(function(v){a.add(N(v,e,n,v,t,i))}):vi(t)&&t.forEach(function(v,j){a.set(j,N(v,e,n,j,t,i))});var cs=f?g?Zt:So:g?Z:q,me=y?void 0:cs(t);return dn(me||t,function(v,j){me&&(j=v,v=t[j]),bt(a,j,N(v,e,n,j,t,i))}),a}function Ji(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}function Qi(t,e){return e.length<2?t:Bt(t,go(e,0,-1))}function ts(t,e){return e=Q(e,t),t=Qi(t,e),t==null||delete t[Ft(Ji(e))]}function es(t){return uo(t)?void 0:t}var ns=1,rs=2,os=4,is=oo(function(t,e){var n={};if(t==null)return n;var r=!1;e=ft(e,function(i){return i=Q(i,t),r||(r=i.length>1),i}),D(t,Zt(t),n),r&&(n=N(n,ns|rs|os,es));for(var o=e.length;o--;)ts(n,e[o]);return n});const ss=is,ue={radius:6,zIndex:0,strokeOpacity:0,fillOpacity:0};class lt{constructor(e){s(this,"map");s(this,"options",{...ue});s(this,"circleMarkers",[]);this.map=e}setOptions(e){return this.options={...e,...ss(ue,"radius")},this}createCircleMarkersByPaths(e){this.removeFromTheMap(),this.reset(),e.forEach(n=>{this.circleMarkers.push(this.createCircleMarker(n))}),this.addToMap()}createCircleMarker(e){return new AMap.CircleMarker({center:e,...this.options})}addToMap(){this.map.add(this.circleMarkers)}removeFromTheMap(){this.map.remove(this.circleMarkers)}getPointInCircleMarkers(e){return this.circleMarkers.find(n=>this.isPointInCircle(e,n))??null}getInCircleMarkersPoint(e){const n=this.circleMarkers.find(o=>this.isPointInCircle(e,o));return this.circleMarkers.findIndex(o=>o===n)%2===0?null:n??null}isPointInCircle(e,n){return n.contains(e)}reset(){this.circleMarkers=[]}destroy(){this.removeFromTheMap(),this.reset()}}const ge={zIndex:1,strokeColor:"#00D3FC",strokeWeight:8,strokeOpacity:0};class fe{constructor(e){s(this,"map");s(this,"linesPath",[]);s(this,"lines",[]);if(!e)throw new Error("map not found");this.map=e}getLinesByPaths(e){let n=0;const r=e.length;for(;n<r;){const o=n+1>=r?0:n+1;this.linesPath.push([e[n],e[o]]),n++}return this.linesPath}createLinesByPaths(e){this.reset(),this.getLinesByPaths(e)}createPolyLine(e){return new AMap.Polyline({path:e,...ge})}addToMap(){this.map.add(this.lines)}removeFromTheMap(){this.map.remove(this.lines)}getPointInPolyline(e){const n=this.map.getResolution(),r=ge.strokeWeight*n;return this.linesPath.find(i=>AMap.GeometryUtil.isPointOnSegment(e,i[0],i[1],r))}reset(){this.linesPath=[],this.lines=[]}}class de{constructor(e,n){s(this,"map");s(this,"circleMarkers",null);s(this,"midCircleMarkers",null);s(this,"lines",null);s(this,"polygonEditor",null);s(this,"polygonPaths",[]);s(this,"polygonTotalPaths",[]);s(this,"polygon",null);s(this,"startPointToCursorText",null);s(this,"lastPointToCursorText",null);s(this,"lineLengthText",null);s(this,"circleMarker",null);s(this,"midCircleMarker",null);s(this,"startPosition",null);s(this,"lastPosition",null);s(this,"editingMidTipMarkerListPath",null);s(this,"onPolygonEditorAdjust",({target:e})=>{this.polygonPaths=e.getPath(),this.circleMarkers.createCircleMarkersByPaths(this.polygonPaths),this.lines.createLinesByPaths(this.polygonPaths),Promise.resolve().then(()=>{this.polygonTotalPaths=this.getPolygonEditorTargetTotalPaths(),this.midCircleMarkers.createCircleMarkersByPaths(this.polygonTotalPaths)}),this.reset()});s(this,"onMouseDown",e=>{const n=e.lnglat;this.circleMarker=this.circleMarkers.getPointInCircleMarkers(n),this.midCircleMarker=this.midCircleMarkers.getInCircleMarkersPoint(n)});s(this,"onMovePolygonEditorPoint",e=>{if(this.midCircleMarker)return;if(!this.circleMarker){this.reset();return}const n=this.circleMarker.getCenter(),r=y=>`${y.lng}-${y.lat}`;let o=this.polygonPaths.findIndex(y=>r(y)===r(n));if(o===-1)return;const i=this.polygonPaths.length,a=o-1<=-1?i-1:o-1,l=o+1>=i?0:o+1,g=this.polygonPaths.at(a),f=this.polygonPaths.at(l);this.setPosition(g,f),this.onMouseMoveInDrawPolygon(e)});s(this,"onMovePolygonEditorMidPoint",e=>{if(this.circleMarker)return;if(!this.midCircleMarker){this.reset();return}const n=this.midCircleMarker.getCenter(),r=y=>`${y.lng}-${y.lat}`;let o=this.polygonTotalPaths.findIndex(y=>r(y)===r(n));if(o===-1)return;const i=this.polygonTotalPaths.length,a=o-1<=-1?i-1:o-1,l=o+1>=i?0:o+1,g=this.polygonTotalPaths.at(a),f=this.polygonTotalPaths.at(l);this.setPosition(g,f),this.onMouseMoveInDrawPolygon(e)});s(this,"onMouseUp",()=>{this.circleMarker=null,this.midCircleMarker=null,this.reset()});s(this,"onInPolygonEditorLine",e=>{if(this.circleMarker)return this.removeLineDistanceText();const n=e.lnglat,r=this.lines.getPointInPolyline(n);if(!r)return this.removeLineDistanceText();const[o,i]=r;this.lineLengthText||(this.lineLengthText=p(),this.lineLengthText.add(this.map)),this.updateDistanceText(this.lineLengthText,A(o,i))});s(this,"onMouseMoveInDrawPolygon",e=>{if(!this.startPosition||!this.lastPosition)return;const n=e.lnglat;this.updateDistanceText(this.startPointToCursorText,A(this.startPosition,n)),this.updateDistanceText(this.lastPointToCursorText,A(this.lastPosition,n))});if(!e)throw new Error("map not found!");this.map=e,n&&(this.polygonEditor=n),this.circleMarkers=new lt(this.map),this.midCircleMarkers=new lt(this.map),this.lines=new fe(this.map)}getPolygonEditorTargetPaths(){return this.polygonEditor?this.polygonEditor.getTarget().getPath()??[]:[]}setEditingMidTipMarkerListPath(e){return this.editingMidTipMarkerListPath=e,this}getEditingMidTipMarkerList(){var n,r;const{singleRingListHandle:e}=this.polygonEditor;if(this.editingMidTipMarkerListPath){if(typeof this.editingMidTipMarkerListPath=="function")return this.editingMidTipMarkerListPath(this.polygonEditor);if(typeof this.editingMidTipMarkerListPath=="string")return Ut(this.polygonEditor,this.editingMidTipMarkerListPath)}return(n=this.polygonEditor.editingMidTipMarkerList)!=null&&n.length?this.polygonEditor.editingMidTipMarkerList:e?(r=e==null?void 0:e.list)==null?void 0:r.editingMidTipMarkerList:[]}getPolygonEditorTargetTotalPaths(){const e=this.getPolygonEditorTargetPaths(),n=this.getEditingMidTipMarkerList();let r=0;const o=[],i=e.length;for(;r<i;){o.push(e[r]);const a=n[r];a&&o.push(a.getCenter()),r++}return o}start(e){var o,i,a;if(!e&&!this.polygonEditor)throw new Error("polygonEditor not found");this.polygonEditor=e;const{controlPoint:n,midControlPoint:r}=this.polygonEditor;return this.polygonPaths=this.getPolygonEditorTargetPaths(),this.circleMarkers.setOptions(n).createCircleMarkersByPaths(this.polygonPaths),this.polygonTotalPaths=this.getPolygonEditorTargetTotalPaths(),this.midCircleMarkers.setOptions(r).createCircleMarkersByPaths(this.polygonTotalPaths),this.lines.createLinesByPaths(this.polygonPaths),(o=this.polygonEditor)==null||o.on("adjust",this.onPolygonEditorAdjust),(i=this.polygonEditor)==null||i.on("removenode",this.onPolygonEditorAdjust),(a=this.polygonEditor)==null||a.on("addnode",this.onPolygonEditorAdjust),this.map.on("mousedown",this.onMouseDown),this.map.on("mousemove",this.onMovePolygonEditorPoint),this.map.on("mousemove",this.onMovePolygonEditorMidPoint),this.map.on("mousemove",this.onInPolygonEditorLine),this.map.on("mouseup",this.onMouseUp),this}stop(){var e,n,r;(e=this.polygonEditor)==null||e.off("adjust",this.onPolygonEditorAdjust),(n=this.polygonEditor)==null||n.off("removenode",this.onPolygonEditorAdjust),(r=this.polygonEditor)==null||r.off("addnode",this.onPolygonEditorAdjust),this.map.off("mousedown",this.onMouseDown),this.map.off("mousemove",this.onMovePolygonEditorPoint),this.map.off("mousemove",this.onMovePolygonEditorMidPoint),this.map.off("mousemove",this.onInPolygonEditorLine),this.map.off("mouseup",this.onMouseUp)}startLineRanging(e){if(!e)throw new Error("polygonEditor not found");this.polygon||(this.polygon=e,this.lines.createLinesByPaths(this.polygon.getPath()),this.map.on("mousemove",this.onInPolygonEditorLine))}stopLineRanging(){this.map.off("mousemove",this.onInPolygonEditorLine)}setPosition(e,n){this.startPosition=e,this.lastPosition=n,this.createDistanceText()}createDistanceText(){this.startPointToCursorText&&this.lastPointToCursorText||(this.startPointToCursorText=p(),this.lastPointToCursorText=p(),this.startPointToCursorText.setMap(this.map),this.lastPointToCursorText.setMap(this.map))}updateDistanceText(e,{text:n,textPos:r}){e.setText(n),e.setPosition(r)}removeLineDistanceText(){var e;(e=this.lineLengthText)==null||e.remove(),this.lineLengthText=null}removeDistanceText(){var e,n;(e=this.startPointToCursorText)==null||e.remove(),(n=this.lastPointToCursorText)==null||n.remove(),this.startPointToCursorText=null,this.lastPointToCursorText=null}reset(){return this.startPosition=null,this.lastPosition=null,this.removeDistanceText(),this.removeLineDistanceText(),this}destroy(){return console.log("=== 销毁 围栏编辑测距事件 =="),this.reset(),this.stop(),this.circleMarkers.destroy(),this}destroyLineRanging(){return console.log("=== 销毁 围栏查看测距事件 =="),this.polygon=null,this.startPosition=null,this.lastPosition=null,this.removeLineDistanceText(),this.stopLineRanging(),this}}class pe{constructor(e){s(this,"map");s(this,"lines",null);s(this,"polygon",null);s(this,"lineLengthText",null);s(this,"editingMidTipMarkerListPath",null);s(this,"onPolygonRanging",e=>{const n=e.lnglat,r=this.lines.getPointInPolyline(n);if(!r)return this.removeLineDistanceText();const[o,i]=r;this.lineLengthText||(this.lineLengthText=p(),this.lineLengthText.add(this.map)),this.updateDistanceText(this.lineLengthText,A(o,i))});if(!e)throw new Error("map not found!");this.map=e,this.lines=new fe(this.map)}start(e){if(!e)throw new Error("polygon not found");this.polygon||(this.polygon=e,this.lines.createLinesByPaths(this.polygon.getPath()),this.map.on("mousemove",this.onPolygonRanging))}stop(){this.map.off("mousemove",this.onPolygonRanging)}updateDistanceText(e,{text:n,textPos:r}){e.setText(n),e.setPosition(r)}removeLineDistanceText(){var e;(e=this.lineLengthText)==null||e.remove(),this.lineLengthText=null}destroy(){return this.polygon=null,this.stop(),this.removeLineDistanceText(),this}}class as{constructor(){s(this,"events",{})}getEvents(e){return this.events[e]||(this.events[e]=[]),this.events[e]}emit(e,...n){this.getEvents(e).forEach(o=>o(...n))}on(e,n){!e||typeof e!="string"||this.getEvents(e).push(n)}once(e,n){if(!e||typeof e!="string")return;const r=o=>{n(o),this.off(e,r)};this.on(e,r)}off(e,n){!e||typeof e!="string"||(this.events[e]=this.getEvents(e).filter(r=>r!==n))}hasEvents(e,n){return!!this.getEvents(e).find(r=>r===n)}clearEvents(e){e?this.events[e]=[]:this.events={}}}class ye extends as{constructor(n){super();s(this,"map");s(this,"circleMarkers",null);s(this,"polygonEditor",null);s(this,"polygonTotalPaths",[]);s(this,"circleMarker",null);s(this,"editingMidTipMarkerListPath",null);s(this,"onPolygonEditorAdjust",()=>{Promise.resolve().then(()=>{this.polygonTotalPaths=this.getPolygonEditorTargetTotalPaths(),this.circleMarkers.createCircleMarkersByPaths(this.polygonTotalPaths)})});s(this,"onMouseDown",n=>{const r=n.lnglat;this.circleMarker=this.circleMarkers.getPointInCircleMarkers(r),!(!this.circleMarker||!this.getEvents("mousedown").length)&&this.emit("mousedown",this.circleMarker,{isMid:!1})});s(this,"onMouseMove",n=>{!this.circleMarker||!this.getEvents("mousemove").length||this.emit("mousemove",this.circleMarker,n)});s(this,"onMouseUp",()=>{!this.getEvents("mouseup").length||!this.circleMarker||(this.emit("mouseup",this.circleMarker),this.circleMarker=null)});this.map=n.map,this.polygonEditor=n,this.circleMarkers=new lt(this.map),this.start(this.polygonEditor)}getPolygonEditorTargetPaths(){return this.polygonEditor?this.polygonEditor.getTarget().getPath()??[]:[]}setEditingMidTipMarkerListPath(n){return this.editingMidTipMarkerListPath=n,this}getEditingMidTipMarkerList(){var r,o;const{singleRingListHandle:n}=this.polygonEditor;if(this.editingMidTipMarkerListPath){if(typeof this.editingMidTipMarkerListPath=="function")return this.editingMidTipMarkerListPath(this.polygonEditor);if(typeof this.editingMidTipMarkerListPath=="string")return Ut(this.polygonEditor,this.editingMidTipMarkerListPath)}return(r=this.polygonEditor.editingMidTipMarkerList)!=null&&r.length?this.polygonEditor.editingMidTipMarkerList:n?(o=n==null?void 0:n.list)==null?void 0:o.editingMidTipMarkerList:[]}getPolygonEditorTargetTotalPaths(){const n=this.getPolygonEditorTargetPaths(),r=this.getEditingMidTipMarkerList();let o=0;const i=[],a=n.length;for(;o<a;){i.push(n[o]);const l=r[o];l&&i.push(l.getCenter()),o++}return i}start(n){var o,i,a;if(!n&&!this.polygonEditor)throw new Error("polygonEditor not found");this.polygonEditor=n;const{midControlPoint:r}=this.polygonEditor;return this.polygonTotalPaths=this.getPolygonEditorTargetTotalPaths(),this.circleMarkers.setOptions(r).createCircleMarkersByPaths(this.polygonTotalPaths),(o=this.polygonEditor)==null||o.on("adjust",this.onPolygonEditorAdjust),(i=this.polygonEditor)==null||i.on("removenode",this.onPolygonEditorAdjust),(a=this.polygonEditor)==null||a.on("addnode",this.onPolygonEditorAdjust),this.map.on("mousedown",this.onMouseDown),this.map.on("mousemove",this.onMouseMove),this.map.on("mouseup",this.onMouseUp),this}stop(){this.map.off("mousedown",this.onMouseDown),this.map.off("mousemove",this.onMouseMove),this.map.off("mouseup",this.onMouseUp)}destroy(){return this.stop(),this.circleMarkers.destroy(),this}}const ls={PolygonRangingInDrawing:ct,PolygonEditorRanging:de,PolygonEditorEvent:ye,PolygonRanging:pe};c.PolygonEditorEvent=ye,c.PolygonEditorRanging=de,c.PolygonRanging=pe,c.PolygonRangingInDrawing=ct,c.default=ls,Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
