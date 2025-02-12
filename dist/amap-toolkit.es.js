var Ze = Object.defineProperty, Je = Object.defineProperties;
var Qe = Object.getOwnPropertyDescriptors;
var _t = Object.getOwnPropertySymbols;
var tn = Object.prototype.hasOwnProperty, en = Object.prototype.propertyIsEnumerable;
var ot = (t, e, n) => e in t ? Ze(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, b = (t, e) => {
  for (var n in e || (e = {}))
    tn.call(e, n) && ot(t, n, e[n]);
  if (_t)
    for (var n of _t(e))
      en.call(e, n) && ot(t, n, e[n]);
  return t;
}, it = (t, e) => Je(t, Qe(e));
var a = (t, e, n) => (ot(t, typeof e != "symbol" ? e + "" : e, n), n);
var I = (t, e, n) => new Promise((o, i) => {
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
const nn = {
  "border-color": "#e1f5fe",
  "font-size": "12px",
  "border-radius": ".25rem",
  "background-color": "rgba(0,0,0,.4)",
  "border-width": 0,
  "text-align": "center",
  color: "#fff"
}, rt = () => Math.random().toString(16).substring(2), $t = (t, e = 2) => Number.isNaN(+t) ? t : +t.toFixed(Math.max(e, 0)), M = (t) => Math.abs(t) > Number.MAX_SAFE_INTEGER, B = (t = "", e = {}) => new AMap.Text({ text: t, style: b(b({}, nn), e), offset: [0, -10] }), N = (t, e) => {
  const n = t.divideBy(2).add(e.divideBy(2));
  return { text: `${Math.round(t.distance(e))}米`, textPos: n };
};
let on = class {
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
        N(this.startPosition, n)
      ), this.updateDistanceText(
        this.lastPointToCursorText,
        N(this.lastPosition, n)
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
    this.startPointToCursorText && this.lastPointToCursorText || (this.startPointToCursorText = B(), this.startPointToCursorText.setMap(this.map), this.lastPointToCursorText = B(), this.lastPointToCursorText.setMap(this.map));
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
var rn = typeof global == "object" && global && global.Object === Object && global;
const he = rn;
var sn = typeof self == "object" && self && self.Object === Object && self, an = he || sn || Function("return this")();
const C = an;
var ln = C.Symbol;
const L = ln;
var ce = Object.prototype, hn = ce.hasOwnProperty, cn = ce.toString, Y = L ? L.toStringTag : void 0;
function gn(t) {
  var e = hn.call(t, Y), n = t[Y];
  try {
    t[Y] = void 0;
    var o = !0;
  } catch (r) {
  }
  var i = cn.call(t);
  return o && (e ? t[Y] = n : delete t[Y]), i;
}
var un = Object.prototype, pn = un.toString;
function fn(t) {
  return pn.call(t);
}
var dn = "[object Null]", yn = "[object Undefined]", Ot = L ? L.toStringTag : void 0;
function O(t) {
  return t == null ? t === void 0 ? yn : dn : Ot && Ot in Object(t) ? gn(t) : fn(t);
}
function S(t) {
  return t != null && typeof t == "object";
}
var mn = "[object Symbol]";
function dt(t) {
  return typeof t == "symbol" || S(t) && O(t) == mn;
}
function ge(t, e) {
  for (var n = -1, o = t == null ? 0 : t.length, i = Array(o); ++n < o; )
    i[n] = e(t[n], n, t);
  return i;
}
var Pn = Array.isArray;
const A = Pn;
var vn = 1 / 0, St = L ? L.prototype : void 0, At = St ? St.toString : void 0;
function ue(t) {
  if (typeof t == "string")
    return t;
  if (A(t))
    return ge(t, ue) + "";
  if (dt(t))
    return At ? At.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -vn ? "-0" : e;
}
function V(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
function Tn(t) {
  return t;
}
var bn = "[object AsyncFunction]", En = "[object Function]", Mn = "[object GeneratorFunction]", xn = "[object Proxy]";
function pe(t) {
  if (!V(t))
    return !1;
  var e = O(t);
  return e == En || e == Mn || e == bn || e == xn;
}
var Cn = C["__core-js_shared__"];
const st = Cn;
var jt = function() {
  var t = /[^.]+$/.exec(st && st.keys && st.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function wn(t) {
  return !!jt && jt in t;
}
var Ln = Function.prototype, Rn = Ln.toString;
function j(t) {
  if (t != null) {
    try {
      return Rn.call(t);
    } catch (e) {
    }
    try {
      return t + "";
    } catch (e) {
    }
  }
  return "";
}
var In = /[\\^$.*+?()[\]{}|]/g, kn = /^\[object .+?Constructor\]$/, _n = Function.prototype, $n = Object.prototype, On = _n.toString, Sn = $n.hasOwnProperty, An = RegExp(
  "^" + On.call(Sn).replace(In, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function jn(t) {
  if (!V(t) || wn(t))
    return !1;
  var e = pe(t) ? An : kn;
  return e.test(j(t));
}
function Dn(t, e) {
  return t == null ? void 0 : t[e];
}
function D(t, e) {
  var n = Dn(t, e);
  return jn(n) ? n : void 0;
}
var Bn = D(C, "WeakMap");
const ht = Bn;
var Dt = Object.create, Nn = function() {
  function t() {
  }
  return function(e) {
    if (!V(e))
      return {};
    if (Dt)
      return Dt(e);
    t.prototype = e;
    var n = new t();
    return t.prototype = void 0, n;
  };
}();
const Fn = Nn;
function Un(t, e, n) {
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
function zn(t, e) {
  var n = -1, o = t.length;
  for (e || (e = Array(o)); ++n < o; )
    e[n] = t[n];
  return e;
}
var Gn = 800, Yn = 16, Hn = Date.now;
function Kn(t) {
  var e = 0, n = 0;
  return function() {
    var o = Hn(), i = Yn - (o - n);
    if (n = o, i > 0) {
      if (++e >= Gn)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function Xn(t) {
  return function() {
    return t;
  };
}
var Vn = function() {
  try {
    var t = D(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch (e) {
  }
}();
const Q = Vn;
var Wn = Q ? function(t, e) {
  return Q(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Xn(e),
    writable: !0
  });
} : Tn;
const qn = Wn;
var Zn = Kn(qn);
const Jn = Zn;
function Qn(t, e) {
  for (var n = -1, o = t == null ? 0 : t.length; ++n < o && e(t[n], n, t) !== !1; )
    ;
  return t;
}
var to = 9007199254740991, eo = /^(?:0|[1-9]\d*)$/;
function no(t, e) {
  var n = typeof t;
  return e = e == null ? to : e, !!e && (n == "number" || n != "symbol" && eo.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function fe(t, e, n) {
  e == "__proto__" && Q ? Q(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function de(t, e) {
  return t === e || t !== t && e !== e;
}
var oo = Object.prototype, io = oo.hasOwnProperty;
function ye(t, e, n) {
  var o = t[e];
  (!(io.call(t, e) && de(o, n)) || n === void 0 && !(e in t)) && fe(t, e, n);
}
function W(t, e, n, o) {
  var i = !n;
  n || (n = {});
  for (var r = -1, s = e.length; ++r < s; ) {
    var l = e[r], h = o ? o(n[l], t[l], l, n, t) : void 0;
    h === void 0 && (h = t[l]), i ? fe(n, l, h) : ye(n, l, h);
  }
  return n;
}
var Bt = Math.max;
function ro(t, e, n) {
  return e = Bt(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var o = arguments, i = -1, r = Bt(o.length - e, 0), s = Array(r); ++i < r; )
      s[i] = o[e + i];
    i = -1;
    for (var l = Array(e + 1); ++i < e; )
      l[i] = o[i];
    return l[e] = n(s), Un(t, this, l);
  };
}
var so = 9007199254740991;
function me(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= so;
}
function Pe(t) {
  return t != null && me(t.length) && !pe(t);
}
var ao = Object.prototype;
function yt(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || ao;
  return t === n;
}
function lo(t, e) {
  for (var n = -1, o = Array(t); ++n < t; )
    o[n] = e(n);
  return o;
}
var ho = "[object Arguments]";
function Nt(t) {
  return S(t) && O(t) == ho;
}
var ve = Object.prototype, co = ve.hasOwnProperty, go = ve.propertyIsEnumerable, uo = Nt(function() {
  return arguments;
}()) ? Nt : function(t) {
  return S(t) && co.call(t, "callee") && !go.call(t, "callee");
};
const Te = uo;
function po() {
  return !1;
}
var be = typeof exports == "object" && exports && !exports.nodeType && exports, Ft = be && typeof module == "object" && module && !module.nodeType && module, fo = Ft && Ft.exports === be, Ut = fo ? C.Buffer : void 0, yo = Ut ? Ut.isBuffer : void 0, mo = yo || po;
const Ee = mo;
var Po = "[object Arguments]", vo = "[object Array]", To = "[object Boolean]", bo = "[object Date]", Eo = "[object Error]", Mo = "[object Function]", xo = "[object Map]", Co = "[object Number]", wo = "[object Object]", Lo = "[object RegExp]", Ro = "[object Set]", Io = "[object String]", ko = "[object WeakMap]", _o = "[object ArrayBuffer]", $o = "[object DataView]", Oo = "[object Float32Array]", So = "[object Float64Array]", Ao = "[object Int8Array]", jo = "[object Int16Array]", Do = "[object Int32Array]", Bo = "[object Uint8Array]", No = "[object Uint8ClampedArray]", Fo = "[object Uint16Array]", Uo = "[object Uint32Array]", d = {};
d[Oo] = d[So] = d[Ao] = d[jo] = d[Do] = d[Bo] = d[No] = d[Fo] = d[Uo] = !0;
d[Po] = d[vo] = d[_o] = d[To] = d[$o] = d[bo] = d[Eo] = d[Mo] = d[xo] = d[Co] = d[wo] = d[Lo] = d[Ro] = d[Io] = d[ko] = !1;
function zo(t) {
  return S(t) && me(t.length) && !!d[O(t)];
}
function mt(t) {
  return function(e) {
    return t(e);
  };
}
var Me = typeof exports == "object" && exports && !exports.nodeType && exports, H = Me && typeof module == "object" && module && !module.nodeType && module, Go = H && H.exports === Me, at = Go && he.process, Yo = function() {
  try {
    var t = H && H.require && H.require("util").types;
    return t || at && at.binding && at.binding("util");
  } catch (e) {
  }
}();
const U = Yo;
var zt = U && U.isTypedArray, Ho = zt ? mt(zt) : zo;
const Ko = Ho;
var Xo = Object.prototype, Vo = Xo.hasOwnProperty;
function xe(t, e) {
  var n = A(t), o = !n && Te(t), i = !n && !o && Ee(t), r = !n && !o && !i && Ko(t), s = n || o || i || r, l = s ? lo(t.length, String) : [], h = l.length;
  for (var c in t)
    (e || Vo.call(t, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    r && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    no(c, h))) && l.push(c);
  return l;
}
function Ce(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var Wo = Ce(Object.keys, Object);
const qo = Wo;
var Zo = Object.prototype, Jo = Zo.hasOwnProperty;
function Qo(t) {
  if (!yt(t))
    return qo(t);
  var e = [];
  for (var n in Object(t))
    Jo.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Pt(t) {
  return Pe(t) ? xe(t) : Qo(t);
}
function ti(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var ei = Object.prototype, ni = ei.hasOwnProperty;
function oi(t) {
  if (!V(t))
    return ti(t);
  var e = yt(t), n = [];
  for (var o in t)
    o == "constructor" && (e || !ni.call(t, o)) || n.push(o);
  return n;
}
function vt(t) {
  return Pe(t) ? xe(t, !0) : oi(t);
}
var ii = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ri = /^\w*$/;
function si(t, e) {
  if (A(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || dt(t) ? !0 : ri.test(t) || !ii.test(t) || e != null && t in Object(e);
}
var ai = D(Object, "create");
const K = ai;
function li() {
  this.__data__ = K ? K(null) : {}, this.size = 0;
}
function hi(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var ci = "__lodash_hash_undefined__", gi = Object.prototype, ui = gi.hasOwnProperty;
function pi(t) {
  var e = this.__data__;
  if (K) {
    var n = e[t];
    return n === ci ? void 0 : n;
  }
  return ui.call(e, t) ? e[t] : void 0;
}
var fi = Object.prototype, di = fi.hasOwnProperty;
function yi(t) {
  var e = this.__data__;
  return K ? e[t] !== void 0 : di.call(e, t);
}
var mi = "__lodash_hash_undefined__";
function Pi(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = K && e === void 0 ? mi : e, this;
}
function $(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var o = t[e];
    this.set(o[0], o[1]);
  }
}
$.prototype.clear = li;
$.prototype.delete = hi;
$.prototype.get = pi;
$.prototype.has = yi;
$.prototype.set = Pi;
function vi() {
  this.__data__ = [], this.size = 0;
}
function tt(t, e) {
  for (var n = t.length; n--; )
    if (de(t[n][0], e))
      return n;
  return -1;
}
var Ti = Array.prototype, bi = Ti.splice;
function Ei(t) {
  var e = this.__data__, n = tt(e, t);
  if (n < 0)
    return !1;
  var o = e.length - 1;
  return n == o ? e.pop() : bi.call(e, n, 1), --this.size, !0;
}
function Mi(t) {
  var e = this.__data__, n = tt(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function xi(t) {
  return tt(this.__data__, t) > -1;
}
function Ci(t, e) {
  var n = this.__data__, o = tt(n, t);
  return o < 0 ? (++this.size, n.push([t, e])) : n[o][1] = e, this;
}
function R(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var o = t[e];
    this.set(o[0], o[1]);
  }
}
R.prototype.clear = vi;
R.prototype.delete = Ei;
R.prototype.get = Mi;
R.prototype.has = xi;
R.prototype.set = Ci;
var wi = D(C, "Map");
const X = wi;
function Li() {
  this.size = 0, this.__data__ = {
    hash: new $(),
    map: new (X || R)(),
    string: new $()
  };
}
function Ri(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function et(t, e) {
  var n = t.__data__;
  return Ri(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function Ii(t) {
  var e = et(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function ki(t) {
  return et(this, t).get(t);
}
function _i(t) {
  return et(this, t).has(t);
}
function $i(t, e) {
  var n = et(this, t), o = n.size;
  return n.set(t, e), this.size += n.size == o ? 0 : 1, this;
}
function k(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var o = t[e];
    this.set(o[0], o[1]);
  }
}
k.prototype.clear = Li;
k.prototype.delete = Ii;
k.prototype.get = ki;
k.prototype.has = _i;
k.prototype.set = $i;
var Oi = "Expected a function";
function Tt(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Oi);
  var n = function() {
    var o = arguments, i = e ? e.apply(this, o) : o[0], r = n.cache;
    if (r.has(i))
      return r.get(i);
    var s = t.apply(this, o);
    return n.cache = r.set(i, s) || r, s;
  };
  return n.cache = new (Tt.Cache || k)(), n;
}
Tt.Cache = k;
var Si = 500;
function Ai(t) {
  var e = Tt(t, function(o) {
    return n.size === Si && n.clear(), o;
  }), n = e.cache;
  return e;
}
var ji = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Di = /\\(\\)?/g, Bi = Ai(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(ji, function(n, o, i, r) {
    e.push(i ? r.replace(Di, "$1") : o || n);
  }), e;
});
const Ni = Bi;
function Fi(t) {
  return t == null ? "" : ue(t);
}
function bt(t, e) {
  return A(t) ? t : si(t, e) ? [t] : Ni(Fi(t));
}
var Ui = 1 / 0;
function we(t) {
  if (typeof t == "string" || dt(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -Ui ? "-0" : e;
}
function Le(t, e) {
  e = bt(e, t);
  for (var n = 0, o = e.length; t != null && n < o; )
    t = t[we(e[n++])];
  return n && n == o ? t : void 0;
}
function Re(t, e, n) {
  var o = t == null ? void 0 : Le(t, e);
  return o === void 0 ? n : o;
}
function Et(t, e) {
  for (var n = -1, o = e.length, i = t.length; ++n < o; )
    t[i + n] = e[n];
  return t;
}
var Gt = L ? L.isConcatSpreadable : void 0;
function zi(t) {
  return A(t) || Te(t) || !!(Gt && t && t[Gt]);
}
function Ie(t, e, n, o, i) {
  var r = -1, s = t.length;
  for (n || (n = zi), i || (i = []); ++r < s; ) {
    var l = t[r];
    e > 0 && n(l) ? e > 1 ? Ie(l, e - 1, n, o, i) : Et(i, l) : o || (i[i.length] = l);
  }
  return i;
}
function Gi(t) {
  var e = t == null ? 0 : t.length;
  return e ? Ie(t, 1) : [];
}
function Yi(t) {
  return Jn(ro(t, void 0, Gi), t + "");
}
var Hi = Ce(Object.getPrototypeOf, Object);
const Mt = Hi;
var Ki = "[object Object]", Xi = Function.prototype, Vi = Object.prototype, ke = Xi.toString, Wi = Vi.hasOwnProperty, qi = ke.call(Object);
function Zi(t) {
  if (!S(t) || O(t) != Ki)
    return !1;
  var e = Mt(t);
  if (e === null)
    return !0;
  var n = Wi.call(e, "constructor") && e.constructor;
  return typeof n == "function" && n instanceof n && ke.call(n) == qi;
}
function Ji(t, e, n) {
  var o = -1, i = t.length;
  e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var r = Array(i); ++o < i; )
    r[o] = t[o + e];
  return r;
}
function Qi() {
  this.__data__ = new R(), this.size = 0;
}
function tr(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function er(t) {
  return this.__data__.get(t);
}
function nr(t) {
  return this.__data__.has(t);
}
var or = 200;
function ir(t, e) {
  var n = this.__data__;
  if (n instanceof R) {
    var o = n.__data__;
    if (!X || o.length < or - 1)
      return o.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new k(o);
  }
  return n.set(t, e), this.size = n.size, this;
}
function z(t) {
  var e = this.__data__ = new R(t);
  this.size = e.size;
}
z.prototype.clear = Qi;
z.prototype.delete = tr;
z.prototype.get = er;
z.prototype.has = nr;
z.prototype.set = ir;
function rr(t, e) {
  return t && W(e, Pt(e), t);
}
function sr(t, e) {
  return t && W(e, vt(e), t);
}
var _e = typeof exports == "object" && exports && !exports.nodeType && exports, Yt = _e && typeof module == "object" && module && !module.nodeType && module, ar = Yt && Yt.exports === _e, Ht = ar ? C.Buffer : void 0, Kt = Ht ? Ht.allocUnsafe : void 0;
function lr(t, e) {
  if (e)
    return t.slice();
  var n = t.length, o = Kt ? Kt(n) : new t.constructor(n);
  return t.copy(o), o;
}
function hr(t, e) {
  for (var n = -1, o = t == null ? 0 : t.length, i = 0, r = []; ++n < o; ) {
    var s = t[n];
    e(s, n, t) && (r[i++] = s);
  }
  return r;
}
function $e() {
  return [];
}
var cr = Object.prototype, gr = cr.propertyIsEnumerable, Xt = Object.getOwnPropertySymbols, ur = Xt ? function(t) {
  return t == null ? [] : (t = Object(t), hr(Xt(t), function(e) {
    return gr.call(t, e);
  }));
} : $e;
const xt = ur;
function pr(t, e) {
  return W(t, xt(t), e);
}
var fr = Object.getOwnPropertySymbols, dr = fr ? function(t) {
  for (var e = []; t; )
    Et(e, xt(t)), t = Mt(t);
  return e;
} : $e;
const Oe = dr;
function yr(t, e) {
  return W(t, Oe(t), e);
}
function Se(t, e, n) {
  var o = e(t);
  return A(t) ? o : Et(o, n(t));
}
function mr(t) {
  return Se(t, Pt, xt);
}
function Ae(t) {
  return Se(t, vt, Oe);
}
var Pr = D(C, "DataView");
const ct = Pr;
var vr = D(C, "Promise");
const gt = vr;
var Tr = D(C, "Set");
const ut = Tr;
var Vt = "[object Map]", br = "[object Object]", Wt = "[object Promise]", qt = "[object Set]", Zt = "[object WeakMap]", Jt = "[object DataView]", Er = j(ct), Mr = j(X), xr = j(gt), Cr = j(ut), wr = j(ht), _ = O;
(ct && _(new ct(new ArrayBuffer(1))) != Jt || X && _(new X()) != Vt || gt && _(gt.resolve()) != Wt || ut && _(new ut()) != qt || ht && _(new ht()) != Zt) && (_ = function(t) {
  var e = O(t), n = e == br ? t.constructor : void 0, o = n ? j(n) : "";
  if (o)
    switch (o) {
      case Er:
        return Jt;
      case Mr:
        return Vt;
      case xr:
        return Wt;
      case Cr:
        return qt;
      case wr:
        return Zt;
    }
  return e;
});
const Ct = _;
var Lr = Object.prototype, Rr = Lr.hasOwnProperty;
function Ir(t) {
  var e = t.length, n = new t.constructor(e);
  return e && typeof t[0] == "string" && Rr.call(t, "index") && (n.index = t.index, n.input = t.input), n;
}
var kr = C.Uint8Array;
const Qt = kr;
function wt(t) {
  var e = new t.constructor(t.byteLength);
  return new Qt(e).set(new Qt(t)), e;
}
function _r(t, e) {
  var n = e ? wt(t.buffer) : t.buffer;
  return new t.constructor(n, t.byteOffset, t.byteLength);
}
var $r = /\w*$/;
function Or(t) {
  var e = new t.constructor(t.source, $r.exec(t));
  return e.lastIndex = t.lastIndex, e;
}
var te = L ? L.prototype : void 0, ee = te ? te.valueOf : void 0;
function Sr(t) {
  return ee ? Object(ee.call(t)) : {};
}
function Ar(t, e) {
  var n = e ? wt(t.buffer) : t.buffer;
  return new t.constructor(n, t.byteOffset, t.length);
}
var jr = "[object Boolean]", Dr = "[object Date]", Br = "[object Map]", Nr = "[object Number]", Fr = "[object RegExp]", Ur = "[object Set]", zr = "[object String]", Gr = "[object Symbol]", Yr = "[object ArrayBuffer]", Hr = "[object DataView]", Kr = "[object Float32Array]", Xr = "[object Float64Array]", Vr = "[object Int8Array]", Wr = "[object Int16Array]", qr = "[object Int32Array]", Zr = "[object Uint8Array]", Jr = "[object Uint8ClampedArray]", Qr = "[object Uint16Array]", ts = "[object Uint32Array]";
function es(t, e, n) {
  var o = t.constructor;
  switch (e) {
    case Yr:
      return wt(t);
    case jr:
    case Dr:
      return new o(+t);
    case Hr:
      return _r(t, n);
    case Kr:
    case Xr:
    case Vr:
    case Wr:
    case qr:
    case Zr:
    case Jr:
    case Qr:
    case ts:
      return Ar(t, n);
    case Br:
      return new o();
    case Nr:
    case zr:
      return new o(t);
    case Fr:
      return Or(t);
    case Ur:
      return new o();
    case Gr:
      return Sr(t);
  }
}
function ns(t) {
  return typeof t.constructor == "function" && !yt(t) ? Fn(Mt(t)) : {};
}
var os = "[object Map]";
function is(t) {
  return S(t) && Ct(t) == os;
}
var ne = U && U.isMap, rs = ne ? mt(ne) : is;
const ss = rs;
var as = "[object Set]";
function ls(t) {
  return S(t) && Ct(t) == as;
}
var oe = U && U.isSet, hs = oe ? mt(oe) : ls;
const cs = hs;
var gs = 1, us = 2, ps = 4, je = "[object Arguments]", fs = "[object Array]", ds = "[object Boolean]", ys = "[object Date]", ms = "[object Error]", De = "[object Function]", Ps = "[object GeneratorFunction]", vs = "[object Map]", Ts = "[object Number]", Be = "[object Object]", bs = "[object RegExp]", Es = "[object Set]", Ms = "[object String]", xs = "[object Symbol]", Cs = "[object WeakMap]", ws = "[object ArrayBuffer]", Ls = "[object DataView]", Rs = "[object Float32Array]", Is = "[object Float64Array]", ks = "[object Int8Array]", _s = "[object Int16Array]", $s = "[object Int32Array]", Os = "[object Uint8Array]", Ss = "[object Uint8ClampedArray]", As = "[object Uint16Array]", js = "[object Uint32Array]", f = {};
f[je] = f[fs] = f[ws] = f[Ls] = f[ds] = f[ys] = f[Rs] = f[Is] = f[ks] = f[_s] = f[$s] = f[vs] = f[Ts] = f[Be] = f[bs] = f[Es] = f[Ms] = f[xs] = f[Os] = f[Ss] = f[As] = f[js] = !0;
f[ms] = f[De] = f[Cs] = !1;
function Z(t, e, n, o, i, r) {
  var s, l = e & gs, h = e & us, c = e & ps;
  if (n && (s = i ? n(t, o, i, r) : n(t)), s !== void 0)
    return s;
  if (!V(t))
    return t;
  var g = A(t);
  if (g) {
    if (s = Ir(t), !l)
      return zn(t, s);
  } else {
    var u = Ct(t), P = u == De || u == Ps;
    if (Ee(t))
      return lr(t, l);
    if (u == Be || u == je || P && !i) {
      if (s = h || P ? {} : ns(t), !l)
        return h ? yr(t, sr(s, t)) : pr(t, rr(s, t));
    } else {
      if (!f[u])
        return i ? t : {};
      s = es(t, u, l);
    }
  }
  r || (r = new z());
  var v = r.get(t);
  if (v)
    return v;
  r.set(t, s), cs(t) ? t.forEach(function(m) {
    s.add(Z(m, e, n, m, t, r));
  }) : ss(t) && t.forEach(function(m, E) {
    s.set(E, Z(m, e, n, E, t, r));
  });
  var y = c ? h ? Ae : mr : h ? vt : Pt, T = g ? void 0 : y(t);
  return Qn(T || t, function(m, E) {
    T && (E = m, m = t[E]), ye(s, E, Z(m, e, n, E, t, r));
  }), s;
}
function Ds(t) {
  var e = t == null ? 0 : t.length;
  return e ? t[e - 1] : void 0;
}
function Bs(t, e) {
  return e.length < 2 ? t : Le(t, Ji(e, 0, -1));
}
var Ns = C.isFinite;
function x(t) {
  return typeof t == "number" && Ns(t);
}
function Fs(t, e) {
  return e = bt(e, t), t = Bs(t, e), t == null || delete t[we(Ds(e))];
}
function Us(t) {
  return Zi(t) ? void 0 : t;
}
var zs = 1, Gs = 2, Ys = 4, Hs = Yi(function(t, e) {
  var n = {};
  if (t == null)
    return n;
  var o = !1;
  e = ge(e, function(r) {
    return r = bt(r, t), o || (o = r.length > 1), r;
  }), W(t, Ae(t), n), o && (n = Z(n, zs | Gs | Ys, Us));
  for (var i = e.length; i--; )
    Fs(n, e[i]);
  return n;
});
const Ks = Hs, ie = {
  radius: 6,
  zIndex: 0,
  strokeOpacity: 0,
  fillOpacity: 0
};
class pt {
  constructor(e) {
    a(this, "map");
    a(this, "options", b({}, ie));
    a(this, "circleMarkers", []);
    this.map = e;
  }
  setOptions(e) {
    return this.options = b(b({}, e), Ks(ie, "radius")), this;
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
const re = {
  zIndex: 1,
  strokeColor: "#00D3FC",
  strokeWeight: 8,
  strokeOpacity: 0
};
class Ne {
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
    return new AMap.Polyline(b({ path: e }, re));
  }
  addToMap() {
    this.map.add(this.lines);
  }
  removeFromTheMap() {
    this.map.remove(this.lines);
  }
  getPointInPolyline(e) {
    const n = this.map.getResolution(), o = re.strokeWeight * n;
    return this.linesPath.find(
      (r) => AMap.GeometryUtil.isPointOnSegment(e, r[0], r[1], o)
    );
  }
  reset() {
    this.linesPath = [], this.lines = [];
  }
}
class Xs {
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
      const n = this.circleMarker.getCenter(), o = (g) => `${g.lng}-${g.lat}`;
      let i = this.polygonPaths.findIndex((g) => o(g) === o(n));
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
      const n = this.midCircleMarker.getCenter(), o = (g) => `${g.lng}-${g.lat}`;
      let i = this.polygonTotalPaths.findIndex((g) => o(g) === o(n));
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
      this.lineLengthText || (this.lineLengthText = B(), this.lineLengthText.add(this.map)), this.updateDistanceText(this.lineLengthText, N(i, r));
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
        N(this.startPosition, n)
      ), this.updateDistanceText(
        this.lastPointToCursorText,
        N(this.lastPosition, n)
      );
    });
    if (!e)
      throw new Error("map not found!");
    this.map = e, n && (this.polygonEditor = n), this.circleMarkers = new pt(this.map), this.midCircleMarkers = new pt(this.map), this.lines = new Ne(this.map);
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
        return Re(this.polygonEditor, this.editingMidTipMarkerListPath);
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
    this.startPointToCursorText && this.lastPointToCursorText || (this.startPointToCursorText = B(), this.lastPointToCursorText = B(), this.startPointToCursorText.setMap(this.map), this.lastPointToCursorText.setMap(this.map));
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
class Vs {
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
      this.lineLengthText || (this.lineLengthText = B(), this.lineLengthText.add(this.map)), this.updateDistanceText(this.lineLengthText, N(i, r));
    });
    /**
    * 拖拽结束后，需要重新计算一下点位数据
    */
    a(this, "onRotateEndEnd", () => I(this, null, function* () {
      yield Promise.resolve();
      const e = this.polygon;
      this.onDragEnd({ target: e });
    }));
    /**
     * 拖拽结束后，需要重新计算一下点位数据
     */
    a(this, "onDragEnd", (e) => I(this, null, function* () {
      var o;
      const n = e.target;
      (o = this.lines) == null || o.reset(), yield Promise.resolve(), this.lines.createLinesByPaths(n.getPath());
    }));
    if (!e)
      throw new Error("map not found!");
    this.opts = n, this.map = e, this.lines = new Ne(this.map), this.immediateActive();
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
class Lt {
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
class Ws extends Lt {
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
    this.map = n.map, this.polygonEditor = n, this.circleMarkers = new pt(this.map), this.open(this.polygonEditor);
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
        return Re(this.polygonEditor, this.editingMidTipMarkerListPath);
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
var qs = Object.defineProperty, Zs = (t, e, n) => e in t ? qs(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, w = (t, e, n) => (Zs(t, typeof e != "symbol" ? e + "" : e, n), n);
function Js(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Rt = { exports: {} }, F = typeof Reflect == "object" ? Reflect : null, se = F && typeof F.apply == "function" ? F.apply : function(t, e, n) {
  return Function.prototype.apply.call(t, e, n);
}, J;
F && typeof F.ownKeys == "function" ? J = F.ownKeys : Object.getOwnPropertySymbols ? J = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : J = function(t) {
  return Object.getOwnPropertyNames(t);
};
var Fe = Number.isNaN || function(t) {
  return t !== t;
};
function p() {
  p.init.call(this);
}
Rt.exports = p;
Rt.exports.once = na;
p.EventEmitter = p;
p.prototype._events = void 0;
p.prototype._eventsCount = 0;
p.prototype._maxListeners = void 0;
var ae = 10;
function nt(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(p, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return ae;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || Fe(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    ae = t;
  }
});
p.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
p.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || Fe(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function Ue(t) {
  return t._maxListeners === void 0 ? p.defaultMaxListeners : t._maxListeners;
}
p.prototype.getMaxListeners = function() {
  return Ue(this);
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
    se(l, this, e);
  else
    for (var h = l.length, c = Ke(l, h), n = 0; n < h; ++n)
      se(c[n], this, e);
  return !0;
};
function ze(t, e, n, o) {
  var i, r, s;
  if (nt(n), r = t._events, r === void 0 ? (r = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (r.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    n.listener ? n.listener : n
  ), r = t._events), s = r[e]), s === void 0)
    s = r[e] = n, ++t._eventsCount;
  else if (typeof s == "function" ? s = r[e] = o ? [n, s] : [s, n] : o ? s.unshift(n) : s.push(n), i = Ue(t), i > 0 && s.length > i && !s.warned) {
    s.warned = !0;
    var l = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    l.name = "MaxListenersExceededWarning", l.emitter = t, l.type = e, l.count = s.length;
  }
  return t;
}
p.prototype.addListener = function(t, e) {
  return ze(this, t, e, !1);
};
p.prototype.on = p.prototype.addListener;
p.prototype.prependListener = function(t, e) {
  return ze(this, t, e, !0);
};
function Qs() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Ge(t, e, n) {
  var o = { fired: !1, wrapFn: void 0, target: t, type: e, listener: n }, i = Qs.bind(o);
  return i.listener = n, o.wrapFn = i, i;
}
p.prototype.once = function(t, e) {
  return nt(e), this.on(t, Ge(this, t, e)), this;
};
p.prototype.prependOnceListener = function(t, e) {
  return nt(e), this.prependListener(t, Ge(this, t, e)), this;
};
p.prototype.removeListener = function(t, e) {
  var n, o, i, r, s;
  if (nt(e), o = this._events, o === void 0)
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
    i === 0 ? n.shift() : ta(n, i), n.length === 1 && (o[t] = n[0]), o.removeListener !== void 0 && this.emit("removeListener", t, s || e);
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
  return i === void 0 ? [] : typeof i == "function" ? n ? [i.listener || i] : [i] : n ? ea(i) : Ke(i, i.length);
}
p.prototype.listeners = function(t) {
  return Ye(this, t, !0);
};
p.prototype.rawListeners = function(t) {
  return Ye(this, t, !1);
};
p.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : He.call(t, e);
};
p.prototype.listenerCount = He;
function He(t) {
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
  return this._eventsCount > 0 ? J(this._events) : [];
};
function Ke(t, e) {
  for (var n = new Array(e), o = 0; o < e; ++o)
    n[o] = t[o];
  return n;
}
function ta(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function ea(t) {
  for (var e = new Array(t.length), n = 0; n < e.length; ++n)
    e[n] = t[n].listener || t[n];
  return e;
}
function na(t, e) {
  return new Promise(function(n, o) {
    function i(s) {
      t.removeListener(e, r), o(s);
    }
    function r() {
      typeof t.removeListener == "function" && t.removeListener("error", i), n([].slice.call(arguments));
    }
    Xe(t, e, r, { once: !0 }), e !== "error" && oa(t, i, { once: !0 });
  });
}
function oa(t, e, n) {
  typeof t.on == "function" && Xe(t, "error", e, n);
}
function Xe(t, e, n, o) {
  if (typeof t.on == "function")
    o.once ? t.once(e, n) : t.on(e, n);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function i(r) {
      o.once && t.removeEventListener(e, i), n(r);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var ia = Rt.exports;
const ra = /* @__PURE__ */ Js(ia), sa = () => `ID_${Math.floor(Math.random() * 100)}`, aa = (t, e = 2) => Number.isNaN(+t) ? t : +(+t).toFixed(e), le = "-26px";
class la extends ra {
  constructor(e, n = {}) {
    if (super(), w(this, "centerPos", { x: 0, y: 0 }), w(this, "startPos", { x: 0, y: 0 }), w(this, "originRotate", 0), w(this, "target", null), w(this, "container"), w(this, "options"), w(this, "targetClassName", sa()), w(this, "onMouseDown", (o) => {
      o.stopPropagation(), this.originRotate = 0, this.startPos = { x: o.x, y: o.y }, this.calcCenterPos();
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
      this.emit("rotateStart", s), document.addEventListener("mousemove", this.onMouseMove, !1);
    }), w(this, "onMouseMove", (o) => {
      const i = this.container.style.transform || "rotate(0deg)", r = aa(
        (this.calcRotate(this.startPos, o) + this.originRotate) % 360
      ), s = /rotate\(.*deg\)/g, l = i.replace(
        s,
        () => `rotate(${r}deg)`
      );
      this.container.style.transform = l;
      const h = { event: o, target: this.container, rotate: r };
      this.emit("rotate", h);
    }), w(this, "onMouseUp", (o) => {
      const i = { event: o, target: this.container };
      this.emit("rotateEnd", i), document.removeEventListener("mousemove", this.onMouseMove);
    }), !e)
      throw new Error("not found container");
    this.container = e, this.options = n, this.originRotate = (this.options.rotate || 0) % 360, this.createTargetElement(), this.setInitStyle(), this.calcCenterPos(), this.registryEvents();
  }
  createTargetElement() {
    var e;
    const { top: n = le, able: o } = this.options;
    let i = `${n}`.replace("px", "").trim();
    i.indexOf("%") === -1 && (i = Number.isNaN(+i) ? le : `${i}px`);
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
    this.target.addEventListener("mousedown", this.onMouseDown, !1), document.addEventListener("mouseup", this.onMouseUp);
  }
  destroyEvents() {
    return document.removeEventListener("mousedown", this.onMouseDown, !1), this;
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
const ha = (t, e) => Math.sqrt(Math.pow(Math.abs(t.x - e.x), 2) + Math.pow(Math.abs(t.y - e.y), 2)), ft = 1e-8, lt = 10;
class ca extends Lt {
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
    a(this, "customRotationDOMId", `ID${rt()}`);
    a(this, "moveableElementId", `ID${rt()}`);
    a(this, "targetElementId", `ID${rt()}`);
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
      const n = document.querySelector(`[data-rotatable-ref="${this.moveableElementId}"]`), o = document.querySelector(`[data-rotatable-ref="${this.customRotationDOMId}"]`);
      this.offset = this.calcInitOffset() + this.radius;
      const i = { rotate: this.initAngle, top: -this.offset, able: o };
      this.elementRotatorIns = new la(n, i), this.registryEvent();
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
      const o = this.mapIns.lngLatToContainer(this.center), i = this.likeRectangleIns.leftTop, r = this.mapIns.lngLatToContainer(i), s = this.calcRotatePoint(r, o, n), l = new AMap.Pixel(s.x, s.y), h = this.mapIns.containerToLngLat(l), c = this.likeRectangleIns.rightTop, g = this.mapIns.lngLatToContainer(c), u = this.calcRotatePoint(g, o, n), P = new AMap.Pixel(u.x, u.y), v = this.mapIns.containerToLngLat(P), y = this.likeRectangleIns.rightBottom, T = this.mapIns.lngLatToContainer(y), m = this.calcRotatePoint(T, o, n), E = new AMap.Pixel(m.x, m.y), G = this.mapIns.containerToLngLat(E), q = this.likeRectangleIns.leftBottom, Ve = this.mapIns.lngLatToContainer(q), It = this.calcRotatePoint(Ve, o, n), We = new AMap.Pixel(It.x, It.y), kt = this.mapIns.containerToLngLat(We), qe = [
        [h.lng, h.lat],
        [v.lng, v.lat],
        [G.lng, G.lat],
        [kt.lng, kt.lat]
      ];
      this.likeRectangleIns.setPath(qe);
    });
    a(this, "calcRotatePoint", (n, o, i) => {
      const r = n.x, s = n.y, l = o.x, h = o.y, c = i * Math.PI / 180, g = r - l, u = s - h, P = g * Math.cos(c) - u * Math.sin(c) + l, v = g * Math.sin(c) + u * Math.cos(c) + h;
      return { x: P, y: v };
    });
    a(this, "getDOMTransformRotate", (n) => {
      var r;
      if (!n)
        return 0;
      let o = null;
      return (((r = n == null ? void 0 : n.style) == null ? void 0 : r.transform) || "").replace(/rotate\((.*)deg\)/g, (s, l) => o = l), +o || 0;
    });
    a(this, "updateRotationAbleOffset", () => {
      var s;
      const n = document.querySelector(`#${this.customRotationDOMId}`);
      let o = null, i = ((s = n == null ? void 0 : n.style) == null ? void 0 : s.transform) || "";
      if (i.replace(/translateY\((.*)px\)/g, (l, h) => o = h), !o)
        return;
      const r = `-${this.calcInitOffset()}`;
      i = i.replace(new RegExp(o, "g"), r), n.style.transform = i, this.offset = this.calcInitOffset();
    });
    a(this, "onDragStart", () => I(this, null, function* () {
      this.reset();
    }));
    /**
     * 拖拽结束后，需要重新计算一下点位数据
     */
    a(this, "onDragEnd", () => I(this, null, function* () {
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
    const { controllerPointRadius: n = lt } = this.opts;
    return Math.max(+`${n}`.replace("px", "") || lt, lt);
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
    return I(this, null, function* () {
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
    var m, E, G;
    const n = (G = (E = (m = this.likeRectangleIns) == null ? void 0 : m.getPath) == null ? void 0 : E.call(m)) == null ? void 0 : G.map((q) => [q.lng, q.lat]);
    if (!n.length || !this.mapIns)
      throw new Error("likeRectangle or map is undefined");
    const o = n[0], i = this.mapIns.lngLatToContainer(o), r = n[1], s = this.mapIns.lngLatToContainer(r);
    let l = (i.y - s.y) / (i.x - s.x);
    l = Math.abs(l) < ft ? 0 : l;
    const h = i.y - l * i.x, c = this.mapIns.lngLatToContainer(this.center), g = -1 / l, u = c.y - g * c.x, P = !x(l) || M(l) || !x(g) || M(g) || !x(h) || M(h) || !x(u) || M(u);
    let v;
    l === 0 ? v = (i.x + s.x) / 2 : P ? v = i.x : v = (u - h) / (l - g);
    let y;
    l === 0 ? y = i.y : P ? y = (i.y + s.y) / 2 : y = l * v + h;
    const T = new AMap.Pixel(v, y);
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
    return ha(n, o) - (this.radius / 2 + 4);
  }
  // setRotationPoint() {
  // }
  setRotationLine() {
  }
}
class ga extends Lt {
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
    this.rotatableIns = new ca(this.likeRectangle, o);
    const i = this.likeRectangle;
    this.rotatableIns.on("rotateStart", (r) => i.emit("rotateStart", r)), this.rotatableIns.on("rotate", (r) => i.emit("rotate", r)), this.rotatableIns.on("rotateEnd", (r) => i.emit("rotateEnd", r));
  }
  calcPoints(n) {
    const [o, i] = n || this.center, r = new AMap.LngLat(o, i), s = $t(this.width / 2), l = $t(this.height / 2), h = r.offset(-s, l), c = r.offset(s, l), g = r.offset(-s, -l), u = r.offset(s, -l);
    return {
      leftTop: [h.lng, h.lat],
      rightTop: [c.lng, c.lat],
      leftBottom: [g.lng, g.lat],
      rightBottom: [u.lng, u.lat]
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
    var o, i, r;
    const n = ((o = this.opts) == null ? void 0 : o.path) || [this.leftTop, this.rightTop, this.rightBottom, this.leftBottom];
    if (n.length !== 4)
      throw new Error("invalid path");
    if (this.likeRectangle = new AMap.Polygon(), this.likeRectangle.setOptions(b({ path: n }, this.opts)), this.enhanceProperty(), this.registryEvent(), (i = this.opts) != null && i.path) {
      const [s, l, h, c] = (r = this.opts) == null ? void 0 : r.path;
      this.updatePoints(s, l, h, c);
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
class ua {
  constructor(e, n, o) {
    a(this, "point");
    a(this, "points");
    a(this, "center");
    a(this, "editor");
    a(this, "isEnabled", !1);
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
    this.point.on(n, this.onMouseOver), this.point.on(o, this.onMouseOut);
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
    this.editor.onDragStart(e);
  }
  onDragging(e) {
    const { pixel: n } = e;
    this.updateNextLeftPoint(n, e), this.updateNextRightPoint(n, e), this.editor.onDragging(e);
  }
  onDragEnd(e) {
    const { target: n, pixel: o } = e;
    this.updateNextLeftPoint(o, e), this.updateNextRightPoint(o, e), this.center = n.getCenter(), this.editor.onDragEnd(e);
  }
  /**
   * 更新下一个左节点位置
   */
  updateNextLeftPoint(e, n) {
    const o = this.idx - 1 >= 0 ? this.idx - 1 : this.len, i = this.points[o], r = this.map.lngLatToContainer(i.getCenter()), s = o - 1 >= 0 ? o - 1 : this.len, l = this.points[s], h = this.map.lngLatToContainer(l.getCenter());
    let c = (h.y - r.y) / (h.x - r.x);
    c = Math.abs(c) < ft ? 0 : c;
    const g = h.y - c * h.x, u = -1 / c, P = e.y - u * e.x, v = Number.isNaN(c) || !x(c) || M(c) || Number.isNaN(u) || !x(u) || M(u) || Number.isNaN(g) || !x(g) || M(g) || Number.isNaN(P) || !x(P) || M(P);
    let y;
    c === 0 ? y = e.x : v ? y = r.x : y = (P - g) / (c - u);
    let T;
    c === 0 ? T = r.y : v ? T = e.y : T = c * y + g;
    const m = new AMap.Pixel(y, T);
    this.dispatch(i, m, n.originEvent);
  }
  /**
   * 更新下一个右节点位置
   */
  updateNextRightPoint(e, n) {
    const o = this.idx + 1 <= this.len ? this.idx + 1 : 0, i = this.points[o], r = this.map.lngLatToContainer(i.getCenter()), s = o + 1 <= this.len ? o + 1 : 0, l = this.points[s], h = this.map.lngLatToContainer(l.getCenter());
    let c = (h.y - r.y) / (h.x - r.x);
    c = Math.abs(c) < ft ? 0 : c;
    const g = h.y - c * h.x, u = -1 / c, P = e.y - u * e.x, v = Number.isNaN(c) || !x(c) || M(c) || Number.isNaN(u) || !x(u) || M(u) || Number.isNaN(g) || !x(g) || M(g) || Number.isNaN(P) || !x(P) || M(P);
    let y;
    c === 0 ? y = e.x : v ? y = r.x : y = (P - g) / (c - u);
    let T;
    c === 0 ? T = r.y : v ? T = e.y : T = c * y + g;
    const m = new AMap.Pixel(y, T);
    this.dispatch(i, m, n.originEvent);
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
const pa = {
  rotatingCloseEditor: !0,
  editingCloseRotator: !0,
  isMobile: !1
};
class fa {
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
    a(this, "onRotateStart", () => I(this, null, function* () {
      this.inEditing && this.polygonEditorClose();
    }));
    a(this, "onRotateEnd", () => I(this, null, function* () {
      this.inEditing && this.open();
    }));
    return this.map = e, this.likeRectangle = n, this.opts = b(b({}, pa), o || {}), this.onChange = this.onChange.bind(this), this.createEditor();
  }
  get options() {
    return it(b({}, this.opts), {
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
    const e = (r = (i = (o = (n = this.polygonEditor) == null ? void 0 : n.singleRingListHandle) == null ? void 0 : o.list) == null ? void 0 : i.editingVertexMarkerList) != null ? r : [];
    this.controlPoints = e.map((s, l) => {
      const h = s.getExtData() || {};
      return s.setExtData(it(b({}, h), { idx: l })), new ua(this, s, e);
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
const ma = {
  PolygonRangingInDrawing: on,
  PolygonEditorRanging: Xs,
  PolygonEditorEvent: Ws,
  PolygonRanging: Vs,
  LikeRectangle: ga,
  LikeRectangleEditor: fa
};
export {
  ga as LikeRectangle,
  fa as LikeRectangleEditor,
  Ws as PolygonEditorEvent,
  Xs as PolygonEditorRanging,
  Vs as PolygonRanging,
  on as PolygonRangingInDrawing,
  ma as default
};
