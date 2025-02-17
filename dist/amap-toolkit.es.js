var Qe = Object.defineProperty, tn = Object.defineProperties;
var en = Object.getOwnPropertyDescriptors;
var $t = Object.getOwnPropertySymbols;
var nn = Object.prototype.hasOwnProperty, on = Object.prototype.propertyIsEnumerable;
var rt = (t, e, n) => e in t ? Qe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, b = (t, e) => {
  for (var n in e || (e = {}))
    nn.call(e, n) && rt(t, n, e[n]);
  if ($t)
    for (var n of $t(e))
      on.call(e, n) && rt(t, n, e[n]);
  return t;
}, st = (t, e) => tn(t, en(e));
var a = (t, e, n) => (rt(t, typeof e != "symbol" ? e + "" : e, n), n);
var _ = (t, e, n) => new Promise((o, i) => {
  var r = (h) => {
    try {
      l(n.next(h));
    } catch (c) {
      i(c);
    }
  }, s = (h) => {
    try {
      l(n.throw(h));
    } catch (c) {
      i(c);
    }
  }, l = (h) => h.done ? o(h.value) : Promise.resolve(h.value).then(r, s);
  l((n = n.apply(t, e)).next());
});
const rn = {
  "border-color": "#e1f5fe",
  "font-size": "12px",
  "border-radius": ".25rem",
  "background-color": "rgba(0,0,0,.4)",
  "border-width": 0,
  "text-align": "center",
  color: "#fff"
}, at = () => Math.random().toString(16).substring(2), Ot = (t, e = 2) => Number.isNaN(+t) ? t : +t.toFixed(Math.max(e, 0)), E = (t) => Math.abs(t) > Number.MAX_SAFE_INTEGER, N = (t = "", e = {}) => new AMap.Text({ text: t, style: b(b({}, rn), e), offset: [0, -10] }), B = (t, e) => {
  const n = t.divideBy(2).add(e.divideBy(2));
  return { text: `${Math.round(t.distance(e))}米`, textPos: n };
};
let sn = class {
  constructor(e) {
    a(this, "map");
    // 开始点位到鼠标位置的文本
    a(this, "startPointToCursorText", null);
    // 最后一次点位到鼠标位置的文本
    a(this, "lastPointToCursorText", null);
    // 起始点位
    a(this, "startPosition", null);
    // 上次点击点位
    a(this, "lastPosition", null);
    /**
     * 点图点击事件
     * @param {MapEvent} event
     */
    a(this, "getClickPosition", (e) => {
      const n = e.lnglat;
      this.startPosition ? this.startPosition && (this.lastPosition = n, this.createDistanceText()) : this.startPosition = n;
    });
    /**
     * 获取新增围栏时，鼠标移动位置
     * @param {*} event
     */
    a(this, "onMouseMoveInDrawPolygon", (e) => {
      if (!this.startPosition || !this.lastPosition)
        return;
      const n = e.lnglat;
      this.updateDistanceText(
        this.startPointToCursorText,
        B(this.startPosition, n)
      ), this.updateDistanceText(
        this.lastPointToCursorText,
        B(this.lastPosition, n)
      );
    });
    if (!e)
      throw new Error("map not found!");
    this.map = e;
  }
  /**
  * 注册地图事件
  */
  open() {
    this.start();
  }
  /**
   * 注册地图事件
   */
  start() {
    this.map.on("click", this.getClickPosition), this.map.on("mousemove", this.onMouseMoveInDrawPolygon);
  }
  /**
  * 移除地图注册事件
  */
  close() {
    this.stop();
  }
  /**
   * 移除地图注册事件
   */
  stop() {
    this.map.off("click", this.getClickPosition), this.map.off("mousemove", this.onMouseMoveInDrawPolygon);
  }
  /**
   * 创建距离文本
   * @returns
   */
  createDistanceText() {
    this.startPointToCursorText && this.lastPointToCursorText || (this.startPointToCursorText = N(), this.startPointToCursorText.setMap(this.map), this.lastPointToCursorText = N(), this.lastPointToCursorText.setMap(this.map));
  }
  updateDistanceText(e, { text: n, textPos: o }) {
    e.setText(n), e.setPosition(o);
  }
  removeDistanceText() {
    var e, n;
    (e = this.startPointToCursorText) == null || e.remove(), this.startPointToCursorText = null, (n = this.lastPointToCursorText) == null || n.remove(), this.lastPointToCursorText = null;
  }
  reset() {
    return this.startPosition = null, this.lastPosition = null, this.removeDistanceText(), this;
  }
  destroy() {
    return this.reset(), this.stop(), this;
  }
};
var an = typeof global == "object" && global && global.Object === Object && global;
const ce = an;
var ln = typeof self == "object" && self && self.Object === Object && self, hn = ce || ln || Function("return this")();
const C = hn;
var cn = C.Symbol;
const w = cn;
var ue = Object.prototype, un = ue.hasOwnProperty, gn = ue.toString, H = w ? w.toStringTag : void 0;
function pn(t) {
  var e = un.call(t, H), n = t[H];
  try {
    t[H] = void 0;
    var o = !0;
  } catch (r) {
  }
  var i = gn.call(t);
  return o && (e ? t[H] = n : delete t[H]), i;
}
var fn = Object.prototype, dn = fn.toString;
function yn(t) {
  return dn.call(t);
}
var mn = "[object Null]", Pn = "[object Undefined]", St = w ? w.toStringTag : void 0;
function O(t) {
  return t == null ? t === void 0 ? Pn : mn : St && St in Object(t) ? pn(t) : yn(t);
}
function S(t) {
  return t != null && typeof t == "object";
}
var vn = "[object Symbol]";
function yt(t) {
  return typeof t == "symbol" || S(t) && O(t) == vn;
}
function ge(t, e) {
  for (var n = -1, o = t == null ? 0 : t.length, i = Array(o); ++n < o; )
    i[n] = e(t[n], n, t);
  return i;
}
var Tn = Array.isArray;
const A = Tn;
var bn = 1 / 0, At = w ? w.prototype : void 0, Dt = At ? At.toString : void 0;
function pe(t) {
  if (typeof t == "string")
    return t;
  if (A(t))
    return ge(t, pe) + "";
  if (yt(t))
    return Dt ? Dt.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -bn ? "-0" : e;
}
function W(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
function Mn(t) {
  return t;
}
var En = "[object AsyncFunction]", xn = "[object Function]", Ln = "[object GeneratorFunction]", Cn = "[object Proxy]";
function fe(t) {
  if (!W(t))
    return !1;
  var e = O(t);
  return e == xn || e == Ln || e == En || e == Cn;
}
var wn = C["__core-js_shared__"];
const lt = wn;
var jt = function() {
  var t = /[^.]+$/.exec(lt && lt.keys && lt.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Rn(t) {
  return !!jt && jt in t;
}
var In = Function.prototype, _n = In.toString;
function D(t) {
  if (t != null) {
    try {
      return _n.call(t);
    } catch (e) {
    }
    try {
      return t + "";
    } catch (e) {
    }
  }
  return "";
}
var kn = /[\\^$.*+?()[\]{}|]/g, $n = /^\[object .+?Constructor\]$/, On = Function.prototype, Sn = Object.prototype, An = On.toString, Dn = Sn.hasOwnProperty, jn = RegExp(
  "^" + An.call(Dn).replace(kn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Nn(t) {
  if (!W(t) || Rn(t))
    return !1;
  var e = fe(t) ? jn : $n;
  return e.test(D(t));
}
function Bn(t, e) {
  return t == null ? void 0 : t[e];
}
function j(t, e) {
  var n = Bn(t, e);
  return Nn(n) ? n : void 0;
}
var Fn = j(C, "WeakMap");
const ut = Fn;
var Nt = Object.create, Un = function() {
  function t() {
  }
  return function(e) {
    if (!W(e))
      return {};
    if (Nt)
      return Nt(e);
    t.prototype = e;
    var n = new t();
    return t.prototype = void 0, n;
  };
}();
const Kn = Un;
function zn(t, e, n) {
  switch (n.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, n[0]);
    case 2:
      return t.call(e, n[0], n[1]);
    case 3:
      return t.call(e, n[0], n[1], n[2]);
  }
  return t.apply(e, n);
}
function Gn() {
}
function Hn(t, e) {
  var n = -1, o = t.length;
  for (e || (e = Array(o)); ++n < o; )
    e[n] = t[n];
  return e;
}
var Yn = 800, Xn = 16, Vn = Date.now;
function Wn(t) {
  var e = 0, n = 0;
  return function() {
    var o = Vn(), i = Xn - (o - n);
    if (n = o, i > 0) {
      if (++e >= Yn)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function qn(t) {
  return function() {
    return t;
  };
}
var Zn = function() {
  try {
    var t = j(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch (e) {
  }
}();
const tt = Zn;
var Jn = tt ? function(t, e) {
  return tt(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: qn(e),
    writable: !0
  });
} : Mn;
const Qn = Jn;
var to = Wn(Qn);
const eo = to;
function no(t, e) {
  for (var n = -1, o = t == null ? 0 : t.length; ++n < o && e(t[n], n, t) !== !1; )
    ;
  return t;
}
function oo(t, e, n, o) {
  for (var i = t.length, r = n + (o ? 1 : -1); o ? r-- : ++r < i; )
    if (e(t[r], r, t))
      return r;
  return -1;
}
function io(t) {
  return t !== t;
}
function ro(t, e, n) {
  for (var o = n - 1, i = t.length; ++o < i; )
    if (t[o] === e)
      return o;
  return -1;
}
function so(t, e, n) {
  return e === e ? ro(t, e, n) : oo(t, io, n);
}
function ao(t, e) {
  var n = t == null ? 0 : t.length;
  return !!n && so(t, e, 0) > -1;
}
var lo = 9007199254740991, ho = /^(?:0|[1-9]\d*)$/;
function co(t, e) {
  var n = typeof t;
  return e = e == null ? lo : e, !!e && (n == "number" || n != "symbol" && ho.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function de(t, e, n) {
  e == "__proto__" && tt ? tt(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function ye(t, e) {
  return t === e || t !== t && e !== e;
}
var uo = Object.prototype, go = uo.hasOwnProperty;
function me(t, e, n) {
  var o = t[e];
  (!(go.call(t, e) && ye(o, n)) || n === void 0 && !(e in t)) && de(t, e, n);
}
function q(t, e, n, o) {
  var i = !n;
  n || (n = {});
  for (var r = -1, s = e.length; ++r < s; ) {
    var l = e[r], h = o ? o(n[l], t[l], l, n, t) : void 0;
    h === void 0 && (h = t[l]), i ? de(n, l, h) : me(n, l, h);
  }
  return n;
}
var Bt = Math.max;
function po(t, e, n) {
  return e = Bt(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var o = arguments, i = -1, r = Bt(o.length - e, 0), s = Array(r); ++i < r; )
      s[i] = o[e + i];
    i = -1;
    for (var l = Array(e + 1); ++i < e; )
      l[i] = o[i];
    return l[e] = n(s), zn(t, this, l);
  };
}
var fo = 9007199254740991;
function Pe(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= fo;
}
function ve(t) {
  return t != null && Pe(t.length) && !fe(t);
}
var yo = Object.prototype;
function mt(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || yo;
  return t === n;
}
function mo(t, e) {
  for (var n = -1, o = Array(t); ++n < t; )
    o[n] = e(n);
  return o;
}
var Po = "[object Arguments]";
function Ft(t) {
  return S(t) && O(t) == Po;
}
var Te = Object.prototype, vo = Te.hasOwnProperty, To = Te.propertyIsEnumerable, bo = Ft(function() {
  return arguments;
}()) ? Ft : function(t) {
  return S(t) && vo.call(t, "callee") && !To.call(t, "callee");
};
const be = bo;
function Mo() {
  return !1;
}
var Me = typeof exports == "object" && exports && !exports.nodeType && exports, Ut = Me && typeof module == "object" && module && !module.nodeType && module, Eo = Ut && Ut.exports === Me, Kt = Eo ? C.Buffer : void 0, xo = Kt ? Kt.isBuffer : void 0, Lo = xo || Mo;
const Ee = Lo;
var Co = "[object Arguments]", wo = "[object Array]", Ro = "[object Boolean]", Io = "[object Date]", _o = "[object Error]", ko = "[object Function]", $o = "[object Map]", Oo = "[object Number]", So = "[object Object]", Ao = "[object RegExp]", Do = "[object Set]", jo = "[object String]", No = "[object WeakMap]", Bo = "[object ArrayBuffer]", Fo = "[object DataView]", Uo = "[object Float32Array]", Ko = "[object Float64Array]", zo = "[object Int8Array]", Go = "[object Int16Array]", Ho = "[object Int32Array]", Yo = "[object Uint8Array]", Xo = "[object Uint8ClampedArray]", Vo = "[object Uint16Array]", Wo = "[object Uint32Array]", d = {};
d[Uo] = d[Ko] = d[zo] = d[Go] = d[Ho] = d[Yo] = d[Xo] = d[Vo] = d[Wo] = !0;
d[Co] = d[wo] = d[Bo] = d[Ro] = d[Fo] = d[Io] = d[_o] = d[ko] = d[$o] = d[Oo] = d[So] = d[Ao] = d[Do] = d[jo] = d[No] = !1;
function qo(t) {
  return S(t) && Pe(t.length) && !!d[O(t)];
}
function Pt(t) {
  return function(e) {
    return t(e);
  };
}
var xe = typeof exports == "object" && exports && !exports.nodeType && exports, Y = xe && typeof module == "object" && module && !module.nodeType && module, Zo = Y && Y.exports === xe, ht = Zo && ce.process, Jo = function() {
  try {
    var t = Y && Y.require && Y.require("util").types;
    return t || ht && ht.binding && ht.binding("util");
  } catch (e) {
  }
}();
const K = Jo;
var zt = K && K.isTypedArray, Qo = zt ? Pt(zt) : qo;
const ti = Qo;
var ei = Object.prototype, ni = ei.hasOwnProperty;
function Le(t, e) {
  var n = A(t), o = !n && be(t), i = !n && !o && Ee(t), r = !n && !o && !i && ti(t), s = n || o || i || r, l = s ? mo(t.length, String) : [], h = l.length;
  for (var c in t)
    (e || ni.call(t, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    r && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    co(c, h))) && l.push(c);
  return l;
}
function Ce(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var oi = Ce(Object.keys, Object);
const ii = oi;
var ri = Object.prototype, si = ri.hasOwnProperty;
function ai(t) {
  if (!mt(t))
    return ii(t);
  var e = [];
  for (var n in Object(t))
    si.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function vt(t) {
  return ve(t) ? Le(t) : ai(t);
}
function li(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var hi = Object.prototype, ci = hi.hasOwnProperty;
function ui(t) {
  if (!W(t))
    return li(t);
  var e = mt(t), n = [];
  for (var o in t)
    o == "constructor" && (e || !ci.call(t, o)) || n.push(o);
  return n;
}
function Tt(t) {
  return ve(t) ? Le(t, !0) : ui(t);
}
var gi = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, pi = /^\w*$/;
function fi(t, e) {
  if (A(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || yt(t) ? !0 : pi.test(t) || !gi.test(t) || e != null && t in Object(e);
}
var di = j(Object, "create");
const X = di;
function yi() {
  this.__data__ = X ? X(null) : {}, this.size = 0;
}
function mi(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Pi = "__lodash_hash_undefined__", vi = Object.prototype, Ti = vi.hasOwnProperty;
function bi(t) {
  var e = this.__data__;
  if (X) {
    var n = e[t];
    return n === Pi ? void 0 : n;
  }
  return Ti.call(e, t) ? e[t] : void 0;
}
var Mi = Object.prototype, Ei = Mi.hasOwnProperty;
function xi(t) {
  var e = this.__data__;
  return X ? e[t] !== void 0 : Ei.call(e, t);
}
var Li = "__lodash_hash_undefined__";
function Ci(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = X && e === void 0 ? Li : e, this;
}
function $(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var o = t[e];
    this.set(o[0], o[1]);
  }
}
$.prototype.clear = yi;
$.prototype.delete = mi;
$.prototype.get = bi;
$.prototype.has = xi;
$.prototype.set = Ci;
function wi() {
  this.__data__ = [], this.size = 0;
}
function nt(t, e) {
  for (var n = t.length; n--; )
    if (ye(t[n][0], e))
      return n;
  return -1;
}
var Ri = Array.prototype, Ii = Ri.splice;
function _i(t) {
  var e = this.__data__, n = nt(e, t);
  if (n < 0)
    return !1;
  var o = e.length - 1;
  return n == o ? e.pop() : Ii.call(e, n, 1), --this.size, !0;
}
function ki(t) {
  var e = this.__data__, n = nt(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function $i(t) {
  return nt(this.__data__, t) > -1;
}
function Oi(t, e) {
  var n = this.__data__, o = nt(n, t);
  return o < 0 ? (++this.size, n.push([t, e])) : n[o][1] = e, this;
}
function R(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var o = t[e];
    this.set(o[0], o[1]);
  }
}
R.prototype.clear = wi;
R.prototype.delete = _i;
R.prototype.get = ki;
R.prototype.has = $i;
R.prototype.set = Oi;
var Si = j(C, "Map");
const V = Si;
function Ai() {
  this.size = 0, this.__data__ = {
    hash: new $(),
    map: new (V || R)(),
    string: new $()
  };
}
function Di(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function ot(t, e) {
  var n = t.__data__;
  return Di(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function ji(t) {
  var e = ot(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Ni(t) {
  return ot(this, t).get(t);
}
function Bi(t) {
  return ot(this, t).has(t);
}
function Fi(t, e) {
  var n = ot(this, t), o = n.size;
  return n.set(t, e), this.size += n.size == o ? 0 : 1, this;
}
function I(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var o = t[e];
    this.set(o[0], o[1]);
  }
}
I.prototype.clear = Ai;
I.prototype.delete = ji;
I.prototype.get = Ni;
I.prototype.has = Bi;
I.prototype.set = Fi;
var Ui = "Expected a function";
function bt(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Ui);
  var n = function() {
    var o = arguments, i = e ? e.apply(this, o) : o[0], r = n.cache;
    if (r.has(i))
      return r.get(i);
    var s = t.apply(this, o);
    return n.cache = r.set(i, s) || r, s;
  };
  return n.cache = new (bt.Cache || I)(), n;
}
bt.Cache = I;
var Ki = 500;
function zi(t) {
  var e = bt(t, function(o) {
    return n.size === Ki && n.clear(), o;
  }), n = e.cache;
  return e;
}
var Gi = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Hi = /\\(\\)?/g, Yi = zi(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(Gi, function(n, o, i, r) {
    e.push(i ? r.replace(Hi, "$1") : o || n);
  }), e;
});
const Xi = Yi;
function Vi(t) {
  return t == null ? "" : pe(t);
}
function Mt(t, e) {
  return A(t) ? t : fi(t, e) ? [t] : Xi(Vi(t));
}
var Wi = 1 / 0;
function we(t) {
  if (typeof t == "string" || yt(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -Wi ? "-0" : e;
}
function Re(t, e) {
  e = Mt(e, t);
  for (var n = 0, o = e.length; t != null && n < o; )
    t = t[we(e[n++])];
  return n && n == o ? t : void 0;
}
function Ie(t, e, n) {
  var o = t == null ? void 0 : Re(t, e);
  return o === void 0 ? n : o;
}
function Et(t, e) {
  for (var n = -1, o = e.length, i = t.length; ++n < o; )
    t[i + n] = e[n];
  return t;
}
var Gt = w ? w.isConcatSpreadable : void 0;
function qi(t) {
  return A(t) || be(t) || !!(Gt && t && t[Gt]);
}
function _e(t, e, n, o, i) {
  var r = -1, s = t.length;
  for (n || (n = qi), i || (i = []); ++r < s; ) {
    var l = t[r];
    e > 0 && n(l) ? e > 1 ? _e(l, e - 1, n, o, i) : Et(i, l) : o || (i[i.length] = l);
  }
  return i;
}
function Zi(t) {
  var e = t == null ? 0 : t.length;
  return e ? _e(t, 1) : [];
}
function Ji(t) {
  return eo(po(t, void 0, Zi), t + "");
}
var Qi = Ce(Object.getPrototypeOf, Object);
const xt = Qi;
var tr = "[object Object]", er = Function.prototype, nr = Object.prototype, ke = er.toString, or = nr.hasOwnProperty, ir = ke.call(Object);
function rr(t) {
  if (!S(t) || O(t) != tr)
    return !1;
  var e = xt(t);
  if (e === null)
    return !0;
  var n = or.call(e, "constructor") && e.constructor;
  return typeof n == "function" && n instanceof n && ke.call(n) == ir;
}
function sr(t, e, n) {
  var o = -1, i = t.length;
  e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var r = Array(i); ++o < i; )
    r[o] = t[o + e];
  return r;
}
function ar() {
  this.__data__ = new R(), this.size = 0;
}
function lr(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function hr(t) {
  return this.__data__.get(t);
}
function cr(t) {
  return this.__data__.has(t);
}
var ur = 200;
function gr(t, e) {
  var n = this.__data__;
  if (n instanceof R) {
    var o = n.__data__;
    if (!V || o.length < ur - 1)
      return o.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new I(o);
  }
  return n.set(t, e), this.size = n.size, this;
}
function z(t) {
  var e = this.__data__ = new R(t);
  this.size = e.size;
}
z.prototype.clear = ar;
z.prototype.delete = lr;
z.prototype.get = hr;
z.prototype.has = cr;
z.prototype.set = gr;
function pr(t, e) {
  return t && q(e, vt(e), t);
}
function fr(t, e) {
  return t && q(e, Tt(e), t);
}
var $e = typeof exports == "object" && exports && !exports.nodeType && exports, Ht = $e && typeof module == "object" && module && !module.nodeType && module, dr = Ht && Ht.exports === $e, Yt = dr ? C.Buffer : void 0, Xt = Yt ? Yt.allocUnsafe : void 0;
function yr(t, e) {
  if (e)
    return t.slice();
  var n = t.length, o = Xt ? Xt(n) : new t.constructor(n);
  return t.copy(o), o;
}
function mr(t, e) {
  for (var n = -1, o = t == null ? 0 : t.length, i = 0, r = []; ++n < o; ) {
    var s = t[n];
    e(s, n, t) && (r[i++] = s);
  }
  return r;
}
function Oe() {
  return [];
}
var Pr = Object.prototype, vr = Pr.propertyIsEnumerable, Vt = Object.getOwnPropertySymbols, Tr = Vt ? function(t) {
  return t == null ? [] : (t = Object(t), mr(Vt(t), function(e) {
    return vr.call(t, e);
  }));
} : Oe;
const Lt = Tr;
function br(t, e) {
  return q(t, Lt(t), e);
}
var Mr = Object.getOwnPropertySymbols, Er = Mr ? function(t) {
  for (var e = []; t; )
    Et(e, Lt(t)), t = xt(t);
  return e;
} : Oe;
const Se = Er;
function xr(t, e) {
  return q(t, Se(t), e);
}
function Ae(t, e, n) {
  var o = e(t);
  return A(t) ? o : Et(o, n(t));
}
function Lr(t) {
  return Ae(t, vt, Lt);
}
function De(t) {
  return Ae(t, Tt, Se);
}
var Cr = j(C, "DataView");
const gt = Cr;
var wr = j(C, "Promise");
const pt = wr;
var Rr = j(C, "Set");
const F = Rr;
var Wt = "[object Map]", Ir = "[object Object]", qt = "[object Promise]", Zt = "[object Set]", Jt = "[object WeakMap]", Qt = "[object DataView]", _r = D(gt), kr = D(V), $r = D(pt), Or = D(F), Sr = D(ut), k = O;
(gt && k(new gt(new ArrayBuffer(1))) != Qt || V && k(new V()) != Wt || pt && k(pt.resolve()) != qt || F && k(new F()) != Zt || ut && k(new ut()) != Jt) && (k = function(t) {
  var e = O(t), n = e == Ir ? t.constructor : void 0, o = n ? D(n) : "";
  if (o)
    switch (o) {
      case _r:
        return Qt;
      case kr:
        return Wt;
      case $r:
        return qt;
      case Or:
        return Zt;
      case Sr:
        return Jt;
    }
  return e;
});
const Ct = k;
var Ar = Object.prototype, Dr = Ar.hasOwnProperty;
function jr(t) {
  var e = t.length, n = new t.constructor(e);
  return e && typeof t[0] == "string" && Dr.call(t, "index") && (n.index = t.index, n.input = t.input), n;
}
var Nr = C.Uint8Array;
const te = Nr;
function wt(t) {
  var e = new t.constructor(t.byteLength);
  return new te(e).set(new te(t)), e;
}
function Br(t, e) {
  var n = e ? wt(t.buffer) : t.buffer;
  return new t.constructor(n, t.byteOffset, t.byteLength);
}
var Fr = /\w*$/;
function Ur(t) {
  var e = new t.constructor(t.source, Fr.exec(t));
  return e.lastIndex = t.lastIndex, e;
}
var ee = w ? w.prototype : void 0, ne = ee ? ee.valueOf : void 0;
function Kr(t) {
  return ne ? Object(ne.call(t)) : {};
}
function zr(t, e) {
  var n = e ? wt(t.buffer) : t.buffer;
  return new t.constructor(n, t.byteOffset, t.length);
}
var Gr = "[object Boolean]", Hr = "[object Date]", Yr = "[object Map]", Xr = "[object Number]", Vr = "[object RegExp]", Wr = "[object Set]", qr = "[object String]", Zr = "[object Symbol]", Jr = "[object ArrayBuffer]", Qr = "[object DataView]", ts = "[object Float32Array]", es = "[object Float64Array]", ns = "[object Int8Array]", os = "[object Int16Array]", is = "[object Int32Array]", rs = "[object Uint8Array]", ss = "[object Uint8ClampedArray]", as = "[object Uint16Array]", ls = "[object Uint32Array]";
function hs(t, e, n) {
  var o = t.constructor;
  switch (e) {
    case Jr:
      return wt(t);
    case Gr:
    case Hr:
      return new o(+t);
    case Qr:
      return Br(t, n);
    case ts:
    case es:
    case ns:
    case os:
    case is:
    case rs:
    case ss:
    case as:
    case ls:
      return zr(t, n);
    case Yr:
      return new o();
    case Xr:
    case qr:
      return new o(t);
    case Vr:
      return Ur(t);
    case Wr:
      return new o();
    case Zr:
      return Kr(t);
  }
}
function cs(t) {
  return typeof t.constructor == "function" && !mt(t) ? Kn(xt(t)) : {};
}
var us = "[object Map]";
function gs(t) {
  return S(t) && Ct(t) == us;
}
var oe = K && K.isMap, ps = oe ? Pt(oe) : gs;
const fs = ps;
var ds = "[object Set]";
function ys(t) {
  return S(t) && Ct(t) == ds;
}
var ie = K && K.isSet, ms = ie ? Pt(ie) : ys;
const Ps = ms;
var vs = 1, Ts = 2, bs = 4, je = "[object Arguments]", Ms = "[object Array]", Es = "[object Boolean]", xs = "[object Date]", Ls = "[object Error]", Ne = "[object Function]", Cs = "[object GeneratorFunction]", ws = "[object Map]", Rs = "[object Number]", Be = "[object Object]", Is = "[object RegExp]", _s = "[object Set]", ks = "[object String]", $s = "[object Symbol]", Os = "[object WeakMap]", Ss = "[object ArrayBuffer]", As = "[object DataView]", Ds = "[object Float32Array]", js = "[object Float64Array]", Ns = "[object Int8Array]", Bs = "[object Int16Array]", Fs = "[object Int32Array]", Us = "[object Uint8Array]", Ks = "[object Uint8ClampedArray]", zs = "[object Uint16Array]", Gs = "[object Uint32Array]", f = {};
f[je] = f[Ms] = f[Ss] = f[As] = f[Es] = f[xs] = f[Ds] = f[js] = f[Ns] = f[Bs] = f[Fs] = f[ws] = f[Rs] = f[Be] = f[Is] = f[_s] = f[ks] = f[$s] = f[Us] = f[Ks] = f[zs] = f[Gs] = !0;
f[Ls] = f[Ne] = f[Os] = !1;
function J(t, e, n, o, i, r) {
  var s, l = e & vs, h = e & Ts, c = e & bs;
  if (n && (s = i ? n(t, o, i, r) : n(t)), s !== void 0)
    return s;
  if (!W(t))
    return t;
  var u = A(t);
  if (u) {
    if (s = jr(t), !l)
      return Hn(t, s);
  } else {
    var g = Ct(t), y = g == Ne || g == Cs;
    if (Ee(t))
      return yr(t, l);
    if (g == Be || g == je || y && !i) {
      if (s = h || y ? {} : cs(t), !l)
        return h ? xr(t, fr(s, t)) : br(t, pr(s, t));
    } else {
      if (!f[g])
        return i ? t : {};
      s = hs(t, g, l);
    }
  }
  r || (r = new z());
  var v = r.get(t);
  if (v)
    return v;
  r.set(t, s), Ps(t) ? t.forEach(function(P) {
    s.add(J(P, e, n, P, t, r));
  }) : fs(t) && t.forEach(function(P, M) {
    s.set(M, J(P, e, n, M, t, r));
  });
  var m = c ? h ? De : Lr : h ? Tt : vt, T = u ? void 0 : m(t);
  return no(T || t, function(P, M) {
    T && (M = P, P = t[M]), me(s, M, J(P, e, n, M, t, r));
  }), s;
}
var Hs = "__lodash_hash_undefined__";
function Ys(t) {
  return this.__data__.set(t, Hs), this;
}
function Xs(t) {
  return this.__data__.has(t);
}
function et(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new I(); ++e < n; )
    this.add(t[e]);
}
et.prototype.add = et.prototype.push = Ys;
et.prototype.has = Xs;
function Vs(t, e) {
  return t.has(e);
}
function Fe(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(o) {
    n[++e] = o;
  }), n;
}
function Ws(t, e, n) {
  for (var o = -1, i = t == null ? 0 : t.length; ++o < i; )
    if (n(e, t[o]))
      return !0;
  return !1;
}
function qs(t) {
  var e = t == null ? 0 : t.length;
  return e ? t[e - 1] : void 0;
}
function Zs(t, e) {
  return e.length < 2 ? t : Re(t, sr(e, 0, -1));
}
var Js = C.isFinite;
function x(t) {
  return typeof t == "number" && Js(t);
}
function Qs(t, e) {
  return e = Mt(e, t), t = Zs(t, e), t == null || delete t[we(qs(e))];
}
function ta(t) {
  return rr(t) ? void 0 : t;
}
var ea = 1, na = 2, oa = 4, ia = Ji(function(t, e) {
  var n = {};
  if (t == null)
    return n;
  var o = !1;
  e = ge(e, function(r) {
    return r = Mt(r, t), o || (o = r.length > 1), r;
  }), q(t, De(t), n), o && (n = J(n, ea | na | oa, ta));
  for (var i = e.length; i--; )
    Qs(n, e[i]);
  return n;
});
const ra = ia;
var sa = 1 / 0, aa = F && 1 / Fe(new F([, -0]))[1] == sa ? function(t) {
  return new F(t);
} : Gn;
const la = aa;
var ha = 200;
function ca(t, e, n) {
  var o = -1, i = ao, r = t.length, s = !0, l = [], h = l;
  if (n)
    s = !1, i = Ws;
  else if (r >= ha) {
    var c = e ? null : la(t);
    if (c)
      return Fe(c);
    s = !1, i = Vs, h = new et();
  } else
    h = e ? [] : l;
  t:
    for (; ++o < r; ) {
      var u = t[o], g = e ? e(u) : u;
      if (u = n || u !== 0 ? u : 0, s && g === g) {
        for (var y = h.length; y--; )
          if (h[y] === g)
            continue t;
        e && h.push(g), l.push(u);
      } else
        i(h, g, n) || (h !== l && h.push(g), l.push(u));
    }
  return l;
}
function ua(t) {
  return t && t.length ? ca(t) : [];
}
const re = {
  radius: 6,
  zIndex: 0,
  strokeOpacity: 0,
  fillOpacity: 0
};
class ft {
  constructor(e) {
    a(this, "map");
    a(this, "options", b({}, re));
    a(this, "circleMarkers", []);
    this.map = e;
  }
  setOptions(e) {
    return this.options = b(b({}, e), ra(re, "radius")), this;
  }
  createCircleMarkersByPaths(e) {
    this.removeFromTheMap(), this.reset(), e.forEach((n) => {
      this.circleMarkers.push(this.createCircleMarker(n));
    }), this.addToMap();
  }
  createCircleMarker(e) {
    return new AMap.CircleMarker(b({ center: e }, this.options));
  }
  addToMap() {
    this.map.add(this.circleMarkers);
  }
  removeFromTheMap() {
    this.map.remove(this.circleMarkers);
  }
  /**
   * 获取点是否在围栏编辑器的白色操作点上
   * @param {AMap.LngLat} pos
   * @returns
   */
  getPointInCircleMarkers(e) {
    var n;
    return (n = this.circleMarkers.find((o) => this.isPointInCircle(e, o))) != null ? n : null;
  }
  /**
   * 获取点是否在围栏编辑器的蓝色操作点上（即中间点）
   * @param {*} pos
   * @returns
   */
  getInCircleMarkersPoint(e) {
    const n = this.circleMarkers.find((i) => this.isPointInCircle(e, i));
    return this.circleMarkers.findIndex((i) => i === n) % 2 === 0 ? null : n != null ? n : null;
  }
  isPointInCircle(e, n) {
    return n.contains(e);
  }
  reset() {
    this.circleMarkers = [];
  }
  destroy() {
    this.removeFromTheMap(), this.reset();
  }
}
const se = {
  zIndex: 1,
  strokeColor: "#00D3FC",
  strokeWeight: 8,
  strokeOpacity: 0
};
class Ue {
  constructor(e) {
    a(this, "map");
    a(this, "linesPath", []);
    a(this, "lines", []);
    if (!e)
      throw new Error("map not found");
    this.map = e;
  }
  getLinesByPaths(e) {
    let n = 0;
    const o = e.length;
    for (; n < o; ) {
      const i = n + 1 >= o ? 0 : n + 1;
      this.linesPath.push([e[n], e[i]]), n++;
    }
    return this.linesPath;
  }
  createLinesByPaths(e) {
    this.reset(), this.getLinesByPaths(e);
  }
  createPolyLine(e) {
    return new AMap.Polyline(b({ path: e }, se));
  }
  addToMap() {
    this.map.add(this.lines);
  }
  removeFromTheMap() {
    this.map.remove(this.lines);
  }
  getPointInPolyline(e) {
    const n = this.map.getResolution(), o = se.strokeWeight * n;
    return this.linesPath.find(
      (r) => AMap.GeometryUtil.isPointOnSegment(e, r[0], r[1], o)
    );
  }
  reset() {
    this.linesPath = [], this.lines = [];
  }
}
class ga {
  constructor(e, n) {
    a(this, "map");
    // 实点
    a(this, "circleMarkers", null);
    // 中间点
    a(this, "midCircleMarkers", null);
    // 线集合
    a(this, "lines", null);
    // 编辑器
    a(this, "polygonEditor", null);
    // 多边形路径
    a(this, "polygonPaths", []);
    // 多边形全部路径（包括中间虚电）
    a(this, "polygonTotalPaths", []);
    // 多边形
    a(this, "polygon", null);
    // 开始点位到鼠标位置的文本
    a(this, "startPointToCursorText", null);
    // 最后一次点位到鼠标位置的文本
    a(this, "lastPointToCursorText", null);
    // 线长的文本呢
    a(this, "lineLengthText", null);
    // 操作点
    a(this, "circleMarker", null);
    // 操作中间点
    a(this, "midCircleMarker", null);
    // 起始点位
    a(this, "startPosition", null);
    // 上次点击点位
    a(this, "lastPosition", null);
    // 兜底设置编辑中间点标记列表路径
    a(this, "editingMidTipMarkerListPath", null);
    a(this, "onPolygonEditorAdjust", ({ target: e }) => {
      this.polygonPaths = e.getPath(), this.circleMarkers.createCircleMarkersByPaths(this.polygonPaths), this.lines.createLinesByPaths(this.polygonPaths), Promise.resolve().then(() => {
        this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths(), this.midCircleMarkers.createCircleMarkersByPaths(this.polygonTotalPaths);
      }), this.reset();
    });
    a(this, "onMouseDown", (e) => {
      const n = e.lnglat;
      this.circleMarker = this.circleMarkers.getPointInCircleMarkers(n), this.midCircleMarker = this.midCircleMarkers.getInCircleMarkersPoint(n);
    });
    a(this, "onMovePolygonEditorPoint", (e) => {
      if (this.midCircleMarker)
        return;
      if (!this.circleMarker) {
        this.reset();
        return;
      }
      const n = this.circleMarker.getCenter(), o = (u) => `${u.lng}-${u.lat}`;
      let i = this.polygonPaths.findIndex((u) => o(u) === o(n));
      if (i === -1)
        return;
      const r = this.polygonPaths.length, s = i - 1 <= -1 ? r - 1 : i - 1, l = i + 1 >= r ? 0 : i + 1, h = this.polygonPaths.at(s), c = this.polygonPaths.at(l);
      this.setPosition(h, c), this.onMouseMoveInDrawPolygon(e);
    });
    a(this, "onMovePolygonEditorMidPoint", (e) => {
      if (this.circleMarker)
        return;
      if (!this.midCircleMarker) {
        this.reset();
        return;
      }
      const n = this.midCircleMarker.getCenter(), o = (u) => `${u.lng}-${u.lat}`;
      let i = this.polygonTotalPaths.findIndex((u) => o(u) === o(n));
      if (i === -1)
        return;
      const r = this.polygonTotalPaths.length, s = i - 1 <= -1 ? r - 1 : i - 1, l = i + 1 >= r ? 0 : i + 1, h = this.polygonTotalPaths.at(s), c = this.polygonTotalPaths.at(l);
      this.setPosition(h, c), this.onMouseMoveInDrawPolygon(e);
    });
    a(this, "onMouseUp", () => {
      this.circleMarker = null, this.midCircleMarker = null, this.reset();
    });
    a(this, "onInPolygonEditorLine", (e) => {
      if (this.circleMarker)
        return this.removeLineDistanceText();
      const n = e.lnglat, o = this.lines.getPointInPolyline(n);
      if (!o)
        return this.removeLineDistanceText();
      const [i, r] = o;
      this.lineLengthText || (this.lineLengthText = N(), this.lineLengthText.add(this.map)), this.updateDistanceText(this.lineLengthText, B(i, r));
    });
    /**
     * 获取新增围栏时，鼠标移动位置
     * @param {*} event
     */
    a(this, "onMouseMoveInDrawPolygon", (e) => {
      if (!this.startPosition || !this.lastPosition)
        return;
      const n = e.lnglat;
      this.updateDistanceText(
        this.startPointToCursorText,
        B(this.startPosition, n)
      ), this.updateDistanceText(
        this.lastPointToCursorText,
        B(this.lastPosition, n)
      );
    });
    if (!e)
      throw new Error("map not found!");
    this.map = e, n && (this.polygonEditor = n), this.circleMarkers = new ft(this.map), this.midCircleMarkers = new ft(this.map), this.lines = new Ue(this.map);
  }
  /**
   * 获取编辑器目标多边形路径
   * @returns
   */
  getPolygonEditorTargetPaths() {
    var e, n, o;
    return this.polygonEditor ? (o = (n = (e = this.polygonEditor) == null ? void 0 : e.getTarget) == null ? void 0 : n.call(e).getPath()) != null ? o : [] : [];
  }
  /**
   *
   */
  setEditingMidTipMarkerListPath(e) {
    return this.editingMidTipMarkerListPath = e, this;
  }
  /**
   *
   * @returns
   */
  getEditingMidTipMarkerList() {
    var n, o;
    const { singleRingListHandle: e } = this.polygonEditor;
    if (this.editingMidTipMarkerListPath) {
      if (typeof this.editingMidTipMarkerListPath == "function")
        return this.editingMidTipMarkerListPath(this.polygonEditor);
      if (typeof this.editingMidTipMarkerListPath == "string")
        return Ie(this.polygonEditor, this.editingMidTipMarkerListPath);
    }
    return (n = this.polygonEditor.editingMidTipMarkerList) != null && n.length ? this.polygonEditor.editingMidTipMarkerList : e ? (o = e == null ? void 0 : e.list) == null ? void 0 : o.editingMidTipMarkerList : [];
  }
  /**
   * 获取编辑围栏所有点位（白色操作点+蓝色中间操作点）
   * @returns
   */
  getPolygonEditorTargetTotalPaths() {
    const e = this.getPolygonEditorTargetPaths(), n = this.getEditingMidTipMarkerList();
    let o = 0;
    const i = [], r = e.length;
    for (; o < r; ) {
      i.push(e[o]);
      const s = n[o];
      s && i.push(s.getCenter()), o++;
    }
    return i;
  }
  /**
   * 注册多边形编辑器，可操作点位事件
   * @param polygonEditor
   */
  open(e) {
    this.start(e);
  }
  /**
   * 注册多边形编辑器，可操作点位事件
   * @param polygonEditor
   */
  start(e) {
    var i, r, s;
    if (!e && !this.polygonEditor)
      throw new Error("polygonEditor not found");
    this.polygonEditor = e;
    const { controlPoint: n, midControlPoint: o } = this.polygonEditor;
    return this.polygonPaths = this.getPolygonEditorTargetPaths(), this.circleMarkers.setOptions(n).createCircleMarkersByPaths(this.polygonPaths), this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths(), this.midCircleMarkers.setOptions(o).createCircleMarkersByPaths(this.polygonTotalPaths), this.lines.createLinesByPaths(this.polygonPaths), (i = this.polygonEditor) == null || i.on("adjust", this.onPolygonEditorAdjust), (r = this.polygonEditor) == null || r.on("removenode", this.onPolygonEditorAdjust), (s = this.polygonEditor) == null || s.on("addnode", this.onPolygonEditorAdjust), this.map.on("mousedown", this.onMouseDown), this.map.on("touchstart", this.onMouseDown), this.map.on("mousemove", this.onMovePolygonEditorPoint), this.map.on("touchmove", this.onMovePolygonEditorPoint), this.map.on("mousemove", this.onMovePolygonEditorMidPoint), this.map.on("touchmove", this.onMovePolygonEditorMidPoint), this.map.on("mousemove", this.onInPolygonEditorLine), this.map.on("touchmove", this.onInPolygonEditorLine), this.map.on("mouseup", this.onMouseUp), this.map.on("touchend", this.onMouseUp), this;
  }
  /**
   * 移除多边形编辑器，可操作点位事件
   */
  close() {
    this.stop();
  }
  /**
   * 移除多边形编辑器，可操作点位事件
   */
  stop() {
    var e, n, o;
    (e = this.polygonEditor) == null || e.off("adjust", this.onPolygonEditorAdjust), (n = this.polygonEditor) == null || n.off("removenode", this.onPolygonEditorAdjust), (o = this.polygonEditor) == null || o.off("addnode", this.onPolygonEditorAdjust), this.map.off("mousedown", this.onMouseDown), this.map.off("touchstart", this.onMouseDown), this.map.off("mousemove", this.onMovePolygonEditorPoint), this.map.off("touchmove", this.onMovePolygonEditorPoint), this.map.off("mousemove", this.onMovePolygonEditorMidPoint), this.map.off("touchmove", this.onMovePolygonEditorMidPoint), this.map.off("mousemove", this.onInPolygonEditorLine), this.map.off("touchmove", this.onInPolygonEditorLine), this.map.off("mouseup", this.onMouseUp), this.map.off("touchend", this.onMouseUp);
  }
  /**
   * 开始边线测距
   * @param polygon
   * @returns
   */
  startLineRanging(e) {
    if (!e)
      throw new Error("polygonEditor not found");
    this.polygon || (this.polygon = e, this.lines.createLinesByPaths(this.polygon.getPath()), this.map.on("mousemove", this.onInPolygonEditorLine));
  }
  stopLineRanging() {
    this.map.off("mousemove", this.onInPolygonEditorLine);
  }
  /**
   * 设置起始点位、一次点位
   * @param {object} startPosition
   * @param {object} lastPosition
   */
  setPosition(e, n) {
    this.startPosition = e, this.lastPosition = n, this.createDistanceText();
  }
  /**
   * 创建距离文本
   * @returns
   */
  createDistanceText() {
    this.startPointToCursorText && this.lastPointToCursorText || (this.startPointToCursorText = N(), this.lastPointToCursorText = N(), this.startPointToCursorText.setMap(this.map), this.lastPointToCursorText.setMap(this.map));
  }
  updateDistanceText(e, { text: n, textPos: o }) {
    e.setText(n), e.setPosition(o);
  }
  removeLineDistanceText() {
    var e;
    (e = this.lineLengthText) == null || e.remove(), this.lineLengthText = null;
  }
  removeDistanceText() {
    var e, n;
    (e = this.startPointToCursorText) == null || e.remove(), (n = this.lastPointToCursorText) == null || n.remove(), this.startPointToCursorText = null, this.lastPointToCursorText = null;
  }
  reset() {
    return this.startPosition = null, this.lastPosition = null, this.removeDistanceText(), this.removeLineDistanceText(), this;
  }
  destroy() {
    return this.reset(), this.stop(), this.circleMarkers.destroy(), this;
  }
  destroyLineRanging() {
    return this.polygon = null, this.startPosition = null, this.lastPosition = null, this.removeLineDistanceText(), this.stopLineRanging(), this;
  }
}
class pa {
  constructor(e, n) {
    a(this, "opts");
    a(this, "map");
    // 线集合
    a(this, "lines", null);
    // 多边形
    a(this, "polygon", null);
    // 线长的文本呢
    a(this, "lineLengthText", null);
    // 兜底设置编辑中间点标记列表路径
    a(this, "editingMidTipMarkerListPath", null);
    a(this, "onPolygonRanging", (e) => {
      const n = e.lnglat, o = this.lines.getPointInPolyline(n);
      if (!o)
        return this.removeLineDistanceText();
      const [i, r] = o;
      this.lineLengthText || (this.lineLengthText = N(), this.lineLengthText.add(this.map)), this.updateDistanceText(this.lineLengthText, B(i, r));
    });
    /**
    * 拖拽结束后，需要重新计算一下点位数据
    */
    a(this, "onRotateEndEnd", () => _(this, null, function* () {
      yield Promise.resolve();
      const e = this.polygon;
      this.onDragEnd({ target: e });
    }));
    /**
     * 拖拽结束后，需要重新计算一下点位数据
     */
    a(this, "onDragEnd", (e) => _(this, null, function* () {
      var o;
      const n = e.target;
      (o = this.lines) == null || o.reset(), yield Promise.resolve(), this.lines.createLinesByPaths(n.getPath());
    }));
    if (!e)
      throw new Error("map not found!");
    this.opts = n, this.map = e, this.lines = new Ue(this.map), this.immediateActive();
  }
  get immediate() {
    var e;
    return (e = this.opts) == null ? void 0 : e.immediate;
  }
  get draggable() {
    var n;
    return ((n = this.polygon) == null ? void 0 : n.getOptions()).draggable;
  }
  get rotatable() {
    var e;
    return (e = this.polygon) == null ? void 0 : e.rotatable;
  }
  /**
   * 立刻激活
   */
  immediateActive() {
    var n;
    const e = (n = this.opts) == null ? void 0 : n.target;
    this.immediate && e.CLASS_NAME === "Overlay.Polygon" && this.open(e);
  }
  /**
   * 开始边线测距
   * @param polygon
   * @returns
   */
  open(e) {
    this.start(e || this.polygon);
  }
  /**
   * 开始边线测距
   * @param polygon
   * @returns
   */
  start(e) {
    if (!e)
      return;
    this.polygon = e, this.lines.createLinesByPaths(this.polygon.getPath()), this.map.hasEvents("mousemove", this.onPolygonRanging) || this.map.hasEvents("touchmove", this.onPolygonRanging) || (this.map.on("mousemove", this.onPolygonRanging), this.map.on("touchmove", this.onPolygonRanging)), this.registryPolygonEvents();
  }
  registryPolygonEvents() {
    this.polygon && (this.draggable && this.polygon.on("dragend", this.onDragEnd), this.rotatable && "likeRectangle" in this.polygon && this.polygon.on("rotateEnd", this.onRotateEndEnd));
  }
  destroyPolygonEvents() {
    var e, n, o, i;
    this.polygon && ((n = (e = this.polygon).off) == null || n.call(e, "dragend", this.onDragEnd), (i = (o = this.polygon).off) == null || i.call(o, "rotateEnd", this.onRotateEndEnd));
  }
  close() {
    this.stop();
  }
  stop() {
    this.map.off("mousemove", this.onPolygonRanging);
  }
  updateDistanceText(e, { text: n, textPos: o }) {
    e.setText(n), e.setPosition(o);
  }
  removeLineDistanceText() {
    var e;
    (e = this.lineLengthText) == null || e.remove(), this.lineLengthText = null;
  }
  destroy() {
    return this.stop(), this.removeLineDistanceText(), this.destroyPolygonEvents(), this.polygon = null, this;
  }
}
class Rt {
  constructor() {
    a(this, "events", {});
  }
  getEvents(e) {
    return this.events[e] || (this.events[e] = []), this.events[e];
  }
  emit(e, ...n) {
    this.getEvents(e).forEach((i) => i(...n));
  }
  on(e, n) {
    !e || typeof e != "string" || this.getEvents(e).push(n);
  }
  once(e, n) {
    if (!e || typeof e != "string")
      return;
    const o = (i) => {
      n(i), this.off(e, o);
    };
    this.on(e, o);
  }
  off(e, n) {
    if (!(!e || typeof e != "string")) {
      if (!n)
        return this.clearEvents(e);
      this.events[e] = this.getEvents(e).filter((o) => o !== n);
    }
  }
  hasEvents(e, n) {
    return !!this.getEvents(e).find((o) => o === n);
  }
  clearEvents(e) {
    e ? this.events[e] = [] : this.events = {};
  }
}
class fa extends Rt {
  constructor(n) {
    super();
    a(this, "map");
    // 全部点
    a(this, "circleMarkers", null);
    // 编辑器
    a(this, "polygonEditor", null);
    // 多边形全部路径（包括中间点）
    a(this, "polygonTotalPaths", []);
    // 操作点
    a(this, "circleMarker", null);
    // 兜底设置编辑中间点标记列表路径
    a(this, "editingMidTipMarkerListPath", null);
    a(this, "onPolygonEditorAdjust", () => {
      Promise.resolve().then(() => {
        this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths(), this.circleMarkers.createCircleMarkersByPaths(this.polygonTotalPaths);
      });
    });
    a(this, "onMouseDown", (n) => {
      const o = n.lnglat;
      this.circleMarker = this.circleMarkers.getPointInCircleMarkers(o), !(!this.circleMarker || !this.getEvents("mousedown").length) && this.emit("mousedown", this.circleMarker);
    });
    a(this, "onMouseMove", (n) => {
      !this.circleMarker || !this.getEvents("mousemove").length || this.emit("mousemove", this.circleMarker, n);
    });
    // private onMouseOut = (event: Common.Event) => {
    //     if (!this.circleMarker) return;
    //     const events = this.getEvents('mouseout');
    //     if (!events.length) return;
    //     this.emit('mouseout', this.circleMarker, event);
    // };
    a(this, "onMouseUp", () => {
      !this.getEvents("mouseup").length || !this.circleMarker || (this.emit("mouseup", this.circleMarker), this.circleMarker = null);
    });
    this.map = n.map, this.polygonEditor = n, this.circleMarkers = new ft(this.map), this.open(this.polygonEditor);
  }
  /**
   * 获取编辑器目标多边形路径
   * @returns
   */
  getPolygonEditorTargetPaths() {
    var n;
    return this.polygonEditor ? (n = this.polygonEditor.getTarget().getPath()) != null ? n : [] : [];
  }
  /**
   *
   */
  setEditingMidTipMarkerListPath(n) {
    return this.editingMidTipMarkerListPath = n, this;
  }
  /**
   * 获取编辑中间点标记列表
   * @returns
   */
  getEditingMidTipMarkerList() {
    var o, i;
    const { singleRingListHandle: n } = this.polygonEditor;
    if (this.editingMidTipMarkerListPath) {
      if (typeof this.editingMidTipMarkerListPath == "function")
        return this.editingMidTipMarkerListPath(this.polygonEditor);
      if (typeof this.editingMidTipMarkerListPath == "string")
        return Ie(this.polygonEditor, this.editingMidTipMarkerListPath);
    }
    return (o = this.polygonEditor.editingMidTipMarkerList) != null && o.length ? this.polygonEditor.editingMidTipMarkerList : n ? (i = n == null ? void 0 : n.list) == null ? void 0 : i.editingMidTipMarkerList : [];
  }
  /**
   * 获取编辑围栏所有点位（白色操作点+蓝色中间操作点）
   * @returns
   */
  getPolygonEditorTargetTotalPaths() {
    const n = this.getPolygonEditorTargetPaths(), o = this.getEditingMidTipMarkerList();
    let i = 0;
    const r = [], s = n.length;
    for (; i < s; ) {
      r.push(n[i]);
      const l = o[i];
      l && r.push(l.getCenter()), i++;
    }
    return r;
  }
  /**
  * 注册多边形编辑器，可操作点位事件
  */
  open(n) {
    this.start(n);
  }
  /**
   * 注册多边形编辑器，可操作点位事件
   */
  start(n) {
    var i, r, s;
    if (!n && !this.polygonEditor)
      throw new Error("polygonEditor not found");
    this.polygonEditor = n;
    const { midControlPoint: o } = this.polygonEditor;
    return this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths(), this.circleMarkers.setOptions(o).createCircleMarkersByPaths(this.polygonTotalPaths), (i = this.polygonEditor) == null || i.on("adjust", this.onPolygonEditorAdjust), (r = this.polygonEditor) == null || r.on("removenode", this.onPolygonEditorAdjust), (s = this.polygonEditor) == null || s.on("addnode", this.onPolygonEditorAdjust), this.map.on("mousedown", this.onMouseDown), this.map.on("mousemove", this.onMouseMove), this.map.on("mouseup", this.onMouseUp), this;
  }
  /**
   * 停止事件行为
   */
  close() {
    this.stop();
  }
  /**
   * 停止事件行为
   */
  stop() {
    this.map.off("mousedown", this.onMouseDown), this.map.off("mousemove", this.onMouseMove), this.map.off("mouseup", this.onMouseUp);
  }
  destroy() {
    return this.close(), this.circleMarkers.destroy(), this;
  }
}
var da = Object.defineProperty, ya = (t, e, n) => e in t ? da(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, L = (t, e, n) => (ya(t, typeof e != "symbol" ? e + "" : e, n), n);
function ma(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var It = { exports: {} }, U = typeof Reflect == "object" ? Reflect : null, ae = U && typeof U.apply == "function" ? U.apply : function(t, e, n) {
  return Function.prototype.apply.call(t, e, n);
}, Q;
U && typeof U.ownKeys == "function" ? Q = U.ownKeys : Object.getOwnPropertySymbols ? Q = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Q = function(t) {
  return Object.getOwnPropertyNames(t);
};
var Ke = Number.isNaN || function(t) {
  return t !== t;
};
function p() {
  p.init.call(this);
}
It.exports = p;
It.exports.once = ba;
p.EventEmitter = p;
p.prototype._events = void 0;
p.prototype._eventsCount = 0;
p.prototype._maxListeners = void 0;
var le = 10;
function it(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(p, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return le;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || Ke(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    le = t;
  }
});
p.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
p.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || Ke(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function ze(t) {
  return t._maxListeners === void 0 ? p.defaultMaxListeners : t._maxListeners;
}
p.prototype.getMaxListeners = function() {
  return ze(this);
};
p.prototype.emit = function(t) {
  for (var e = [], n = 1; n < arguments.length; n++)
    e.push(arguments[n]);
  var o = t === "error", i = this._events;
  if (i !== void 0)
    o = o && i.error === void 0;
  else if (!o)
    return !1;
  if (o) {
    var r;
    if (e.length > 0 && (r = e[0]), r instanceof Error)
      throw r;
    var s = new Error("Unhandled error." + (r ? " (" + r.message + ")" : ""));
    throw s.context = r, s;
  }
  var l = i[t];
  if (l === void 0)
    return !1;
  if (typeof l == "function")
    ae(l, this, e);
  else
    for (var h = l.length, c = Ve(l, h), n = 0; n < h; ++n)
      ae(c[n], this, e);
  return !0;
};
function Ge(t, e, n, o) {
  var i, r, s;
  if (it(n), r = t._events, r === void 0 ? (r = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (r.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    n.listener ? n.listener : n
  ), r = t._events), s = r[e]), s === void 0)
    s = r[e] = n, ++t._eventsCount;
  else if (typeof s == "function" ? s = r[e] = o ? [n, s] : [s, n] : o ? s.unshift(n) : s.push(n), i = ze(t), i > 0 && s.length > i && !s.warned) {
    s.warned = !0;
    var l = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    l.name = "MaxListenersExceededWarning", l.emitter = t, l.type = e, l.count = s.length;
  }
  return t;
}
p.prototype.addListener = function(t, e) {
  return Ge(this, t, e, !1);
};
p.prototype.on = p.prototype.addListener;
p.prototype.prependListener = function(t, e) {
  return Ge(this, t, e, !0);
};
function Pa() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function He(t, e, n) {
  var o = { fired: !1, wrapFn: void 0, target: t, type: e, listener: n }, i = Pa.bind(o);
  return i.listener = n, o.wrapFn = i, i;
}
p.prototype.once = function(t, e) {
  return it(e), this.on(t, He(this, t, e)), this;
};
p.prototype.prependOnceListener = function(t, e) {
  return it(e), this.prependListener(t, He(this, t, e)), this;
};
p.prototype.removeListener = function(t, e) {
  var n, o, i, r, s;
  if (it(e), o = this._events, o === void 0)
    return this;
  if (n = o[t], n === void 0)
    return this;
  if (n === e || n.listener === e)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete o[t], o.removeListener && this.emit("removeListener", t, n.listener || e));
  else if (typeof n != "function") {
    for (i = -1, r = n.length - 1; r >= 0; r--)
      if (n[r] === e || n[r].listener === e) {
        s = n[r].listener, i = r;
        break;
      }
    if (i < 0)
      return this;
    i === 0 ? n.shift() : va(n, i), n.length === 1 && (o[t] = n[0]), o.removeListener !== void 0 && this.emit("removeListener", t, s || e);
  }
  return this;
};
p.prototype.off = p.prototype.removeListener;
p.prototype.removeAllListeners = function(t) {
  var e, n, o;
  if (n = this._events, n === void 0)
    return this;
  if (n.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[t]), this;
  if (arguments.length === 0) {
    var i = Object.keys(n), r;
    for (o = 0; o < i.length; ++o)
      r = i[o], r !== "removeListener" && this.removeAllListeners(r);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (e = n[t], typeof e == "function")
    this.removeListener(t, e);
  else if (e !== void 0)
    for (o = e.length - 1; o >= 0; o--)
      this.removeListener(t, e[o]);
  return this;
};
function Ye(t, e, n) {
  var o = t._events;
  if (o === void 0)
    return [];
  var i = o[e];
  return i === void 0 ? [] : typeof i == "function" ? n ? [i.listener || i] : [i] : n ? Ta(i) : Ve(i, i.length);
}
p.prototype.listeners = function(t) {
  return Ye(this, t, !0);
};
p.prototype.rawListeners = function(t) {
  return Ye(this, t, !1);
};
p.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : Xe.call(t, e);
};
p.prototype.listenerCount = Xe;
function Xe(t) {
  var e = this._events;
  if (e !== void 0) {
    var n = e[t];
    if (typeof n == "function")
      return 1;
    if (n !== void 0)
      return n.length;
  }
  return 0;
}
p.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Q(this._events) : [];
};
function Ve(t, e) {
  for (var n = new Array(e), o = 0; o < e; ++o)
    n[o] = t[o];
  return n;
}
function va(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function Ta(t) {
  for (var e = new Array(t.length), n = 0; n < e.length; ++n)
    e[n] = t[n].listener || t[n];
  return e;
}
function ba(t, e) {
  return new Promise(function(n, o) {
    function i(s) {
      t.removeListener(e, r), o(s);
    }
    function r() {
      typeof t.removeListener == "function" && t.removeListener("error", i), n([].slice.call(arguments));
    }
    We(t, e, r, { once: !0 }), e !== "error" && Ma(t, i, { once: !0 });
  });
}
function Ma(t, e, n) {
  typeof t.on == "function" && We(t, "error", e, n);
}
function We(t, e, n, o) {
  if (typeof t.on == "function")
    o.once ? t.once(e, n) : t.on(e, n);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function i(r) {
      o.once && t.removeEventListener(e, i), n(r);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var Ea = It.exports;
const xa = /* @__PURE__ */ ma(Ea), La = (t = "uid") => `${t}_${Math.random().toString(16).substring(2)}`, Ca = (t, e = 2) => Number.isNaN(+t) ? t : +(+t).toFixed(e), he = "-26px";
class wa extends xa {
  constructor(e, n = {}) {
    if (super(), L(this, "centerPos", { x: 0, y: 0 }), L(this, "startPos", { x: 0, y: 0 }), L(this, "originRotate", 0), L(this, "target", null), L(this, "container"), L(this, "options"), L(this, "targetClassName", La()), L(this, "isMobile", typeof window.orientation < "u" || "ontouchstart" in document.documentElement || /Mobi|Android|iPhone/i.test(navigator.userAgent)), L(this, "onMouseDown", (o) => {
      o.stopPropagation(), this.originRotate = 0, this.startPos = this.getClickPos(o), this.calcCenterPos();
      const i = this.container.style.transform, r = /rotate\((.*)deg\)/g;
      i.replace(
        r,
        (l, h) => (h = +h, this.originRotate += h)
      ), this.originRotate = (+this.originRotate || 0) % 360;
      const s = {
        event: o,
        target: this.container,
        rotate: this.originRotate
      };
      this.emit("rotateStart", s), this.isMobile ? (document.addEventListener("touchmove", this.onMouseMove, !1), document.addEventListener("touchend", this.onMouseUp, !1)) : (document.addEventListener("mousemove", this.onMouseMove, !1), document.addEventListener("mouseup", this.onMouseUp, !1));
    }), L(this, "onMouseMove", (o) => {
      const i = this.container.style.transform || "rotate(0deg)", r = this.getClickPos(o), s = Ca(
        (this.calcRotate(this.startPos, r) + this.originRotate) % 360
      ), l = /rotate\(.*deg\)/g, h = i.replace(
        l,
        () => `rotate(${s}deg)`
      );
      this.container.style.transform = h;
      const c = { event: o, target: this.container, rotate: s };
      this.emit("rotate", c);
    }), L(this, "onMouseUp", (o) => {
      const i = { event: o, target: this.container };
      this.emit("rotateEnd", i), this.isMobile ? (document.removeEventListener("touchmove", this.onMouseMove, !1), document.removeEventListener("touchend", this.onMouseUp, !1)) : (document.removeEventListener("mousemove", this.onMouseMove, !1), document.removeEventListener("mouseup", this.onMouseUp, !1));
    }), !e)
      throw new Error("not found container");
    this.container = e, this.options = n, this.originRotate = (this.options.rotate || 0) % 360, this.createTargetElement(), this.setInitStyle(), this.calcCenterPos(), this.registryEvents();
  }
  createTargetElement() {
    var e;
    const { top: n = he, able: o } = this.options;
    let i = `${n}`.replace("px", "").trim();
    i.indexOf("%") === -1 && (i = Number.isNaN(+i) ? he : `${i}px`);
    const r = `
        position: absolute;
        top: ${i};
        left: 50%;
        min-width: 14px;
        min-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translate(-50%, -50%);
        cursor: pointer;
      `, s = `
      <div class="${this.targetClassName}" style="${r}">
        <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.536 3.464A5 5 0 1 0 11 10l1.424 1.425a7 7 0 1 1-.475-9.374L13.659.34A.2.2 0 0 1 14 .483V5.5a.5.5 0 0 1-.5.5H8.483a.2.2 0 0 1-.142-.341l2.195-2.195z"
              fill="#eb5648"
              fillRule="nonzero"
            />
          </svg>
      </div>`, l = new DOMParser().parseFromString(s, "text/html"), h = l.body.firstChild;
    if (o instanceof Element) {
      const c = l.body.querySelector("svg");
      h.replaceChild(o, c);
    }
    (e = this.container) == null || e.appendChild(h), this.target = document.querySelector(`.${this.targetClassName}`);
  }
  setInitStyle() {
    var e;
    if ((e = this.container) != null && e.style.getPropertyValue("position") || (this.container.style.position = "relative"), this.originRotate) {
      const n = window.getComputedStyle(this.container, null);
      let o = this.container.style.transform || n.getPropertyValue("transform");
      o = o.replace(/rotate\((.*)deg\)/g, "").trim(), o = o === "none" ? "" : o, this.container.style.transform = `${o} rotate(${this.originRotate}deg)`;
    }
  }
  calcCenterPos() {
    const { x: e, y: n, width: o, height: i } = this.container.getBoundingClientRect(), r = e + o / 2, s = n + i / 2;
    this.setCenterPos({ x: r, y: s });
  }
  setCenterPos(e) {
    this.centerPos.x = e.x, this.centerPos.y = e.y;
  }
  destroy() {
    this.target = null, this.container = null, this.destroyEvents();
  }
  registryEvents() {
    this.isMobile ? this.target.addEventListener("touchstart", this.onMouseDown, !1) : this.target.addEventListener("mousedown", this.onMouseDown, !1);
  }
  destroyEvents() {
    return this.isMobile ? (document.removeEventListener("touchstart", this.onMouseDown, !1), document.removeEventListener("touchmove", this.onMouseMove, !1), document.removeEventListener("touchend", this.onMouseUp, !1)) : (document.removeEventListener("mousedown", this.onMouseDown, !1), document.removeEventListener("mousemove", this.onMouseMove, !1), document.removeEventListener("mouseup", this.onMouseUp, !1)), this;
  }
  getClickPos(e) {
    var n, o, i, r;
    const s = this.isMobile ? (o = (n = e.touches) == null ? void 0 : n[0]) == null ? void 0 : o.pageX : e.x, l = this.isMobile ? (r = (i = e.touches) == null ? void 0 : i[0]) == null ? void 0 : r.pageY : e.y;
    return { x: s, y: l };
  }
  /**
   * 计算旋转角度
   * @param initialPoint - 开始点位
   * @param finalPoint - 结束点位
   * @returns
   */
  calcRotate(e, n) {
    const { x: o, y: i } = this.centerPos, r = {
      x: e.x - o,
      y: e.y - i
    }, s = {
      x: n.x - o,
      y: n.y - i
    }, l = r.x * s.x + r.y * s.y, h = r.x * s.y - r.y * s.x;
    let c = Math.atan2(h, l);
    return c = (c + 2 * Math.PI) % (2 * Math.PI), c * (180 / Math.PI);
  }
}
const Ra = (t, e) => Math.sqrt(Math.pow(Math.abs(t.x - e.x), 2) + Math.pow(Math.abs(t.y - e.y), 2)), dt = 1e-8, ct = 10;
class Ia extends Rt {
  constructor(n, o = {}) {
    super();
    a(this, "likeRectangleIns");
    a(this, "opts");
    a(this, "elementRotatorIns", null);
    a(this, "rotationPointIns", null);
    a(this, "midPoint");
    a(this, "initAngle");
    a(this, "offset");
    a(this, "rotationLine");
    a(this, "customRotationDOMId", `ID${at()}`);
    a(this, "moveableElementId", `ID${at()}`);
    a(this, "targetElementId", `ID${at()}`);
    a(this, "genMarkerContent", () => {
      const o = `width:${0.05}px; height:${0.05}px;`, i = Object.entries({
        display: "inline-block",
        width: `${this.radius}px`,
        height: `${this.radius}px`,
        cursor: "move",
        background: "#fff",
        border: "2px solid #cc6666",
        "border-radius": "50%",
        "transform-origin": "50% 100%"
      }).reduce((s, [l, h]) => s += `${l}:${h};`, "");
      return `
            <div
                style="position: relative; ${o}; background: red;"
                data-rotatable-ref="${this.moveableElementId}"
            >
                <div data-rotatable-ref=${this.customRotationDOMId} style="${i}"></div>
            </div>
        `;
    });
    a(this, "setMarkerRotatable", () => {
      const n = document.querySelector(`[data-rotatable-ref="${this.moveableElementId}"]`), o = document.querySelector(`[data-rotatable-ref="${this.customRotationDOMId}"]`), i = this.calcInitOffset(), r = { rotate: this.initAngle, top: -i, able: o };
      this.elementRotatorIns = new wa(n, r), this.registryEvent();
    });
    a(this, "onRotateStart", () => {
      this.emit("rotateStart", this.likeRectangleIns);
    });
    a(this, "onRotate", (n) => {
      const { event: o, rotate: i } = n;
      this.rotate(i - this.initAngle), this.emit("rotate", o);
    });
    a(this, "onRotateEnd", () => {
      this.emit("rotateEnd", this.likeRectangleIns);
    });
    a(this, "rotate", (n) => {
      const o = this.mapIns.lngLatToContainer(this.center), i = this.likeRectangleIns.leftTop, r = this.mapIns.lngLatToContainer(i), s = this.calcRotatePoint(r, o, n), l = new AMap.Pixel(s.x, s.y), h = this.mapIns.containerToLngLat(l), c = this.likeRectangleIns.rightTop, u = this.mapIns.lngLatToContainer(c), g = this.calcRotatePoint(u, o, n), y = new AMap.Pixel(g.x, g.y), v = this.mapIns.containerToLngLat(y), m = this.likeRectangleIns.rightBottom, T = this.mapIns.lngLatToContainer(m), P = this.calcRotatePoint(T, o, n), M = new AMap.Pixel(P.x, P.y), G = this.mapIns.containerToLngLat(M), Z = this.likeRectangleIns.leftBottom, qe = this.mapIns.lngLatToContainer(Z), _t = this.calcRotatePoint(qe, o, n), Ze = new AMap.Pixel(_t.x, _t.y), kt = this.mapIns.containerToLngLat(Ze), Je = [
        [h.lng, h.lat],
        [v.lng, v.lat],
        [G.lng, G.lat],
        [kt.lng, kt.lat]
      ];
      this.likeRectangleIns.setPath(Je);
    });
    a(this, "calcRotatePoint", (n, o, i) => {
      const r = n.x, s = n.y, l = o.x, h = o.y, c = i * Math.PI / 180, u = r - l, g = s - h, y = u * Math.cos(c) - g * Math.sin(c) + l, v = u * Math.sin(c) + g * Math.cos(c) + h;
      return { x: y, y: v };
    });
    a(this, "getDOMTransformRotate", (n) => {
      var r;
      if (!n)
        return 0;
      let o = null;
      return (((r = n == null ? void 0 : n.style) == null ? void 0 : r.transform) || "").replace(/rotate\((.*)deg\)/g, (s, l) => o = l), +o || 0;
    });
    a(this, "updateRotationAbleOffset", () => {
      const n = this.elementRotatorIns.target;
      n.style.top = `-${this.calcInitOffset()}`;
    });
    a(this, "onDragStart", () => _(this, null, function* () {
      this.reset();
    }));
    /**
     * 拖拽结束后，需要重新计算一下点位数据
     */
    a(this, "onDragEnd", () => _(this, null, function* () {
      this.open();
    }));
    if (!n)
      throw new Error("likeRectangleIns is required");
    this.likeRectangleIns = n, this.opts = o, this.open();
  }
  get mapIns() {
    return this.likeRectangleIns.likeRectangle.map;
  }
  get center() {
    return this.likeRectangleIns.likeRectangle.center;
  }
  get rotatable() {
    var n, o, i;
    return (i = (o = (n = this.likeRectangleIns) == null ? void 0 : n.likeRectangle) == null ? void 0 : o.opts) == null ? void 0 : i.rotatable;
  }
  get draggable() {
    var o;
    return ((o = this.likeRectangleIns) == null ? void 0 : o.getOptions()).draggable;
  }
  get radius() {
    const { controllerPointRadius: n = ct } = this.opts;
    return Math.max(+`${n}`.replace("px", "") || ct, ct);
  }
  open() {
    this.rotatable && (this.calcMidPoint(), this.calcInitAngle(), this.setRotationLine(), this.registryLikeRectangleEvents(), this.createRotationPoint());
  }
  reset() {
    var n, o, i, r;
    (o = (n = this.elementRotatorIns) == null ? void 0 : n.destroy) == null || o.call(n), this.elementRotatorIns = null, (r = (i = this.rotationPointIns) == null ? void 0 : i.destroy) == null || r.call(i), this.rotationPointIns = null;
  }
  close() {
    this.reset(), this.destroyLikeRectangleEvents(), this.destroyEvent();
  }
  registryLikeRectangleEvents() {
    const n = this.likeRectangleIns.hasEvents("dragstart", this.onDragStart);
    this.draggable && !n && (this.likeRectangleIns.on("dragstart", this.onDragStart), this.likeRectangleIns.on("dragend", this.onDragEnd));
  }
  destroyLikeRectangleEvents() {
    this.likeRectangleIns.off("dragstart", this.onDragStart), this.likeRectangleIns.off("dragend", this.onDragEnd);
  }
  /**
   * 旋转点（即中心点）
   */
  createRotationPoint() {
    return _(this, null, function* () {
      var n, o;
      (o = (n = this.rotationPointIns) == null ? void 0 : n.destroy) == null || o.call(n), this.rotationPointIns = null, this.rotationPointIns = new AMap.Marker({
        map: this.mapIns,
        position: this.center,
        content: this.genMarkerContent()
      }), yield Promise.resolve(), this.setMarkerRotatable();
    });
  }
  registryEvent() {
    var n, o;
    this.elementRotatorIns && (this.elementRotatorIns.on("rotateStart", this.onRotateStart), this.elementRotatorIns.on("rotate", this.onRotate), this.elementRotatorIns.on("rotateEnd", this.onRotateEnd), (o = (n = this.mapIns) == null ? void 0 : n.on) == null || o.call(n, "zoomchange", this.updateRotationAbleOffset));
  }
  destroyEvent() {
    var n, o;
    this.elementRotatorIns && (this.elementRotatorIns.off("rotateStart", this.onRotateStart), this.elementRotatorIns.off("rotate", this.onRotate), this.elementRotatorIns.off("rotateEnd", this.onRotateEnd), (o = (n = this.mapIns) == null ? void 0 : n.off) == null || o.call(n, "zoomchange", this.updateRotationAbleOffset));
  }
  calcMidPoint() {
    var P, M, G;
    const n = (G = (M = (P = this.likeRectangleIns) == null ? void 0 : P.getPath) == null ? void 0 : M.call(P)) == null ? void 0 : G.map((Z) => [Z.lng, Z.lat]);
    if (!n.length || !this.mapIns)
      throw new Error("likeRectangle or map is undefined");
    const o = n[0], i = this.mapIns.lngLatToContainer(o), r = n[1], s = this.mapIns.lngLatToContainer(r);
    let l = (i.y - s.y) / (i.x - s.x);
    l = Math.abs(l) < dt ? 0 : l;
    const h = i.y - l * i.x, c = this.mapIns.lngLatToContainer(this.center), u = -1 / l, g = c.y - u * c.x, y = !x(l) || E(l) || !x(u) || E(u) || !x(h) || E(h) || !x(g) || E(g);
    let v;
    l === 0 ? v = (i.x + s.x) / 2 : y ? v = i.x : v = (g - h) / (l - u);
    let m;
    l === 0 ? m = i.y : y ? m = (i.y + s.y) / 2 : m = l * v + h;
    const T = new AMap.Pixel(v, m);
    return this.midPoint = this.mapIns.containerToLngLat(T), this.midPoint;
  }
  /**
   * 计算第一条连线的中点，位于中心点角度
   */
  calcInitAngle() {
    if (!this.mapIns)
      return;
    const n = this.mapIns.lngLatToContainer(this.midPoint), o = this.mapIns.lngLatToContainer(this.center), i = Math.atan2(n.y - o.y, n.x - o.x);
    return this.initAngle = 180 / Math.PI * i + 90, this.initAngle;
  }
  // TODO 需要处理小于中点的情况
  calcInitOffset() {
    if (!this.mapIns)
      return 0;
    const n = this.mapIns.lngLatToContainer(this.midPoint), o = this.mapIns.lngLatToContainer(this.center);
    return Ra(n, o);
  }
  // setRotationPoint() {
  // }
  setRotationLine() {
  }
}
class _a extends Rt {
  constructor(n) {
    super();
    a(this, "opts");
    a(this, "map");
    a(this, "width");
    a(this, "height");
    a(this, "center");
    a(this, "leftTop");
    // 左上点
    a(this, "rightTop");
    // 右上点
    a(this, "leftBottom");
    // 左下点
    a(this, "rightBottom");
    // 右下点
    a(this, "likeRectangle");
    a(this, "rotatableIns");
    a(this, "likeRectangleDestroy");
    a(this, "likeRectangleRawSetOptions");
    this.validatorOpts(n), this.bindOptsToSelf(n), n.path || this.setPoints();
    const o = this.create();
    return this.registerRotatable(), this.enhanceMethods(), o;
  }
  validatorOpts(n) {
    if (!("map" in n) || !n.map)
      throw new Error("not found map instance");
  }
  bindOptsToSelf(n) {
    this.opts = n, Object.entries(n).forEach(([o, i]) => {
      this[o] = i;
    });
  }
  enhanceMethods() {
    this.likeRectangleDestroy = this.likeRectangle.destroy.bind(this.likeRectangle), this.likeRectangle.destroy = this.destroy.bind(this), this.likeRectangleRawSetOptions = this.likeRectangle.setOptions.bind(this.likeRectangle), this.likeRectangle.setOptions = this.likeRectangleSetOptions.bind(this);
  }
  likeRectangleSetOptions(n) {
    var i, r;
    const { rotatable: o } = b(b({}, this.opts), n || {});
    this.likeRectangleRawSetOptions(n), o ? (this.opts.rotatable = !0, this.registerRotatable()) : (this.opts.rotatable = !1, (r = (i = this.rotatableIns) == null ? void 0 : i.close) == null || r.call(i), this.rotatableIns = null);
  }
  destroy() {
    var n, o;
    (o = (n = this.rotatableIns) == null ? void 0 : n.close) == null || o.call(n), this.likeRectangleDestroy();
  }
  registerRotatable() {
    const { rotatable: n, rotationOptions: o } = this.opts;
    if (!n || this.rotatableIns)
      return;
    this.rotatableIns = new Ia(this.likeRectangle, o);
    const i = this.likeRectangle;
    this.rotatableIns.on("rotateStart", (r) => i.emit("rotateStart", r)), this.rotatableIns.on("rotate", (r) => i.emit("rotate", r)), this.rotatableIns.on("rotateEnd", (r) => i.emit("rotateEnd", r));
  }
  calcPoints(n) {
    const [o, i] = n || this.center, r = new AMap.LngLat(o, i), s = Ot(this.width / 2), l = Ot(this.height / 2), h = r.offset(-s, l), c = r.offset(s, l), u = r.offset(-s, -l), g = r.offset(s, -l);
    return {
      leftTop: [h.lng, h.lat],
      rightTop: [c.lng, c.lat],
      leftBottom: [u.lng, u.lat],
      rightBottom: [g.lng, g.lat]
    };
  }
  setCenter(n) {
    this.center = n;
  }
  setPoints() {
    const { leftTop: n, rightTop: o, leftBottom: i, rightBottom: r } = this.calcPoints();
    this.leftTop = n, this.rightTop = o, this.leftBottom = i, this.rightBottom = r;
  }
  create() {
    var i, r, s;
    const n = ((i = this.opts) == null ? void 0 : i.path) || [this.leftTop, this.rightTop, this.rightBottom, this.leftBottom];
    if (ua(n.join(";").split(";")).length !== 4)
      throw new Error("invalid path");
    if (this.likeRectangle = new AMap.Polygon(), this.likeRectangle.setOptions(b({ path: n }, this.opts)), this.enhanceProperty(), this.registryEvent(), (r = this.opts) != null && r.path) {
      const [l, h, c, u] = (s = this.opts) == null ? void 0 : s.path;
      this.updatePoints(l, h, c, u);
    }
    return this.likeRectangle;
  }
  enhanceProperty() {
    this.likeRectangle.likeRectangle = this, this.likeRectangle.leftTop = this.leftTop, this.likeRectangle.rightTop = this.rightTop, this.likeRectangle.rightBottom = this.rightBottom, this.likeRectangle.leftBottom = this.leftBottom, this.likeRectangle.rotatable = this.opts.rotatable;
  }
  registryEvent() {
    this.likeRectangle && (this.onDragEnd = this.onDragEnd.bind(this), this.likeRectangle.on("dragend", this.onDragEnd));
  }
  onDragEnd(n) {
    const i = n.target.getPath(), [r, s, l, h] = i;
    this.updatePoints(r, s, l, h);
  }
  updatePoints(n, o, i, r) {
    this.likeRectangle.leftTop = this.leftTop = n, this.likeRectangle.rightTop = this.rightTop = o, this.likeRectangle.rightBottom = this.rightBottom = i, this.likeRectangle.leftBottom = this.leftBottom = r, this.setCenter(this.getCenter());
  }
  getCenter() {
    var o;
    return (o = this.map.getFitZoomAndCenterByOverlays([this.likeRectangle])) == null ? void 0 : o.pop();
  }
}
class ka {
  // 操作点右边 和 操作点右边 + 1 线段的 k 值
  constructor(e, n, o) {
    a(this, "point");
    a(this, "points");
    a(this, "center");
    a(this, "editor");
    a(this, "isEnabled", !1);
    a(this, "leftLineK1", null);
    // 操作点左边 和 操作点左边 + 1 线段的 k 值
    a(this, "rightLineK1", null);
    this.editor = e, this.point = n, this.points = o, this.init(), this.clearClientEvent();
  }
  get len() {
    return this.points.length - 1;
  }
  get extData() {
    return this.point.getExtData();
  }
  get idx() {
    return this.extData.idx;
  }
  get map() {
    return this.editor.map;
  }
  enable() {
    this.isEnabled || (this.isEnabled = !0, this.setCursorPointer("move"), this.registryEvent());
  }
  disable() {
    this.isEnabled = !1, this.setCursorPointer("pointer"), this.destroyEvent();
  }
  setCursorPointer(e) {
    var n;
    (n = this.point) == null || n.setOptions({ cursor: e });
  }
  init() {
    this.center = this.point.getCenter(), this.onMouseOver = this.onMouseOver.bind(this), this.onMouseOut = this.onMouseOut.bind(this), this.onDragStart = this.onDragStart.bind(this), this.onDragging = this.onDragging.bind(this), this.onDragEnd = this.onDragEnd.bind(this), this.defaultRegistryEvent();
  }
  clearClientEvent() {
    this.point.clearEvents("click");
  }
  defaultRegistryEvent() {
    const e = this.editor.isMobile;
    let n = e ? "touchstart" : "mouseover", o = e ? "touchend" : "mouseout";
    !this.point.hasEvents("mouseover", this.onMouseOver) && this.point.on(n, this.onMouseOver), !this.point.hasEvents("mouseout", this.onMouseOut) && this.point.on(o, this.onMouseOut);
  }
  registryEvent() {
    this.point.on("dragstart", this.onDragStart), this.point.on("dragging", this.onDragging), this.point.on("dragend", this.onDragEnd);
  }
  destroyEvent() {
    this.point.off("dragstart", this.onDragStart), this.point.off("dragging", this.onDragging), this.point.off("dragend", this.onDragEnd);
  }
  onMouseOver() {
    this.enable();
  }
  onMouseOut() {
    if (this.editor.isMobile) {
      const e = setTimeout(() => {
        clearTimeout(e), this.disable();
      }, 4);
    } else
      this.disable();
  }
  onDragStart(e) {
    this.leftLineK1 = null, this.rightLineK1 = null, this.editor.onDragStart(e);
  }
  onDragging(e) {
    const { pixel: n } = e;
    this.updateNextLeftPoint(n, e), this.updateNextRightPoint(n, e), this.editor.onDragging(e);
  }
  onDragEnd(e) {
    const { target: n, pixel: o } = e;
    this.updateNextLeftPoint(o, e), this.updateNextRightPoint(o, e), this.center = n.getCenter(), this.editor.onDragEnd(e), this.leftLineK1 = null, this.rightLineK1 = null;
  }
  /**
   * 更新下一个左节点位置
   * @param operatePointPixel - 操作点坐标
   * @param data
   */
  updateNextLeftPoint(e, n) {
    const o = this.idx - 1 >= 0 ? this.idx - 1 : this.len, i = this.points[o], r = this.map.lngLatToContainer(i.getCenter()), s = o - 1 >= 0 ? o - 1 : this.len, l = this.points[s], h = this.map.lngLatToContainer(l.getCenter());
    let c;
    this.leftLineK1 == null ? (c = (h.y - r.y) / (h.x - r.x), this.leftLineK1 = c) : c = this.leftLineK1, c = Math.abs(c) < dt ? 0 : c;
    const u = h.y - c * h.x, g = -1 / c, y = e.y - g * e.x, v = Number.isNaN(c) || !x(c) || E(c) || Number.isNaN(g) || !x(g) || E(g) || Number.isNaN(u) || !x(u) || E(u) || Number.isNaN(y) || !x(y) || E(y);
    let m, T;
    c === 0 ? (m = e.x, T = r.y) : v ? (m = r.x, T = e.y) : (m = (y - u) / (c - g), T = c * m + u);
    const P = new AMap.Pixel(m, T);
    this.dispatch(i, P, n.originEvent);
  }
  /**
   * 更新下一个右节点位置
   * @param operatePointPixel - 操作点坐标
   * @param data
   */
  updateNextRightPoint(e, n) {
    const o = this.idx + 1 <= this.len ? this.idx + 1 : 0, i = this.points[o], r = this.map.lngLatToContainer(i.getCenter()), s = o + 1 <= this.len ? o + 1 : 0, l = this.points[s], h = this.map.lngLatToContainer(l.getCenter());
    let c;
    this.rightLineK1 == null ? (c = (h.y - r.y) / (h.x - r.x), this.rightLineK1 = c) : c = this.rightLineK1, c = Math.abs(c) < dt ? 0 : c;
    const u = h.y - c * h.x, g = -1 / c, y = e.y - g * e.x, v = Number.isNaN(c) || !x(c) || E(c) || Number.isNaN(g) || !x(g) || E(g) || Number.isNaN(u) || !x(u) || E(u) || Number.isNaN(y) || !x(y) || E(y);
    let m, T;
    c === 0 ? (m = e.x, T = r.y) : v ? (m = r.x, T = e.y) : (m = (y - u) / (c - g), T = c * m + u);
    const P = new AMap.Pixel(m, T);
    this.dispatch(i, P, n.originEvent);
  }
  dispatch(e, n, o) {
    const r = {
      lnglat: this.map.containerToLngLat(n),
      originEvent: o
      // 这里的鼠标事件直接透传即可
    };
    e.emit("dragend", r);
  }
}
const $a = {
  rotatingCloseEditor: !0,
  editingCloseRotator: !0,
  isMobile: !1
};
class Oa {
  constructor(e, n, o) {
    a(this, "opts");
    a(this, "map");
    a(this, "likeRectangle");
    a(this, "polygonEditor");
    a(this, "polygonEditorOpen");
    a(this, "polygonEditorClose");
    a(this, "controlPoints");
    a(this, "inEditing", !1);
    a(this, "isRestart", !1);
    a(this, "onDragStart", (e) => {
      var n, o;
      (o = (n = this.rotatableIns) == null ? void 0 : n.close) == null || o.call(n), this.onChange("dragstart", e);
    });
    a(this, "onDragging", (e) => {
      this.updateLikeRectanglePath(), this.onChange("dragging", e);
    });
    a(this, "onDragEnd", (e) => {
      var n, o;
      (o = (n = this.rotatableIns) == null ? void 0 : n.open) == null || o.call(n), this.onChange("dragend", e);
    });
    a(this, "onChange", (e, n) => {
      var o, i;
      (i = (o = this.opts) == null ? void 0 : o.onChange) == null || i.call(o, e, n);
    });
    a(this, "onRotateStart", () => _(this, null, function* () {
      this.inEditing && this.polygonEditorClose();
    }));
    a(this, "onRotateEnd", () => _(this, null, function* () {
      this.inEditing && this.open();
    }));
    return this.map = e, this.likeRectangle = n, this.opts = b(b({}, $a), o || {}), this.onChange = this.onChange.bind(this), this.createEditor();
  }
  get options() {
    return st(b({}, this.opts), {
      midControlPoint: { radius: 0 }
    });
  }
  get rotatable() {
    var e, n, o;
    return (o = (n = (e = this.likeRectangle) == null ? void 0 : e.likeRectangle) == null ? void 0 : n.opts) == null ? void 0 : o.rotatable;
  }
  get rotatingCloseEditor() {
    return this.opts.rotatingCloseEditor;
  }
  get rotatableIns() {
    var e, n;
    return (n = (e = this.likeRectangle) == null ? void 0 : e.likeRectangle) == null ? void 0 : n.rotatableIns;
  }
  get isMobile() {
    return this.opts.isMobile;
  }
  /**
   * 重新 polygonEditor.open 方法
   */
  open() {
    this.inEditing = !0, this.polygonEditorOpen(), this.registryLikeRectangleRotateEvents(), this.registryControlPoints();
  }
  close() {
    this.inEditing = !1, this.destroyLikeRectangleRotateEvents(), this.polygonEditorClose();
  }
  findControlPoint(e) {
    return this.controlPoints.find((n) => {
      const o = n.point.getCenter(), i = `${o.lng}_${o.lat}`, r = e.getCenter(), s = `${r.lng}_${r.lat}`;
      return i === s;
    });
  }
  createEditor() {
    const e = this.likeRectangle;
    return this.polygonEditor = new AMap.PolygonEditor(this.map, e, this.options), this.enhanceProperty(), this.polygonEditor;
  }
  enhanceProperty() {
    this.polygonEditor.likeRectangleEditor = this, this.polygonEditorOpen = this.polygonEditor.open.bind(this.polygonEditor), this.polygonEditor.open = this.open.bind(this), this.polygonEditorClose = this.polygonEditor.close.bind(this.polygonEditor), this.polygonEditor.close = this.close.bind(this);
  }
  registryLikeRectangleRotateEvents() {
    this.rotatable && this.rotatingCloseEditor && (this.likeRectangle.on("rotateStart", this.onRotateStart), this.likeRectangle.on("rotateEnd", this.onRotateEnd));
  }
  destroyLikeRectangleRotateEvents() {
    this.rotatable && this.rotatingCloseEditor && (this.likeRectangle.off("rotateStart", this.onRotateStart), this.likeRectangle.off("rotateEnd", this.onRotateEnd));
  }
  registryControlPoints() {
    var n, o, i, r;
    (this.controlPoints || []).forEach((s) => {
      s.destroyEvent();
    });
    const e = (r = (i = (o = (n = this.polygonEditor) == null ? void 0 : n.singleRingListHandle) == null ? void 0 : o.list) == null ? void 0 : i.editingVertexMarkerList) != null ? r : [];
    this.controlPoints = e.map((s, l) => {
      const h = s.getExtData() || {};
      return s.setExtData(st(b({}, h), { idx: l })), new ka(this, s, e);
    });
  }
  updateLikeRectanglePath() {
    const [
      e,
      n,
      o,
      i
    ] = this.controlPoints, r = e.point.getCenter(), s = n.point.getCenter(), l = o.point.getCenter(), h = i.point.getCenter();
    this.likeRectangle.likeRectangle.updatePoints(
      [r.lng, r.lat],
      [s.lng, s.lat],
      [l.lng, l.lat],
      [h.lng, h.lat]
    );
  }
}
const Da = {
  PolygonRangingInDrawing: sn,
  PolygonEditorRanging: ga,
  PolygonEditorEvent: fa,
  PolygonRanging: pa,
  LikeRectangle: _a,
  LikeRectangleEditor: Oa
};
export {
  _a as LikeRectangle,
  Oa as LikeRectangleEditor,
  fa as PolygonEditorEvent,
  ga as PolygonEditorRanging,
  pa as PolygonRanging,
  sn as PolygonRangingInDrawing,
  Da as default
};
