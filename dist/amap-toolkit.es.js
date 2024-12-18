var Yl = Object.defineProperty, Hl = Object.defineProperties;
var Xl = Object.getOwnPropertyDescriptors;
var Xa = Object.getOwnPropertySymbols;
var Wl = Object.prototype.hasOwnProperty, Vl = Object.prototype.propertyIsEnumerable;
var Yn = (t, r, e) => r in t ? Yl(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, zt = (t, r) => {
  for (var e in r || (r = {}))
    Wl.call(r, e) && Yn(t, e, r[e]);
  if (Xa)
    for (var e of Xa(r))
      Vl.call(r, e) && Yn(t, e, r[e]);
  return t;
}, Hn = (t, r) => Hl(t, Xl(r));
var A = (t, r, e) => (Yn(t, typeof r != "symbol" ? r + "" : r, e), e);
var gr = (t, r, e) => new Promise((n, i) => {
  var a = (u) => {
    try {
      s(e.next(u));
    } catch (l) {
      i(l);
    }
  }, o = (u) => {
    try {
      s(e.throw(u));
    } catch (l) {
      i(l);
    }
  }, s = (u) => u.done ? n(u.value) : Promise.resolve(u.value).then(a, o);
  s((e = e.apply(t, r)).next());
});
const ql = {
  "border-color": "#e1f5fe",
  "font-size": "12px",
  "border-radius": ".25rem",
  "background-color": "rgba(0,0,0,.4)",
  "border-width": 0,
  "text-align": "center",
  color: "#fff"
}, Xn = () => Math.random().toString(16).substring(2), Wa = (t, r = 2) => Number.isNaN(+t) ? t : +t.toFixed(Math.max(r, 0)), Xt = (t) => Math.abs(t) > Number.MAX_SAFE_INTEGER, Jr = (t = "", r = {}) => new AMap.Text({ text: t, style: zt(zt({}, ql), r), offset: [0, -10] }), Qr = (t, r) => {
  const e = t.divideBy(2).add(r.divideBy(2));
  return { text: `${Math.round(t.distance(r))}米`, textPos: e };
};
let Ul = class {
  constructor(r) {
    A(this, "map");
    // 开始点位到鼠标位置的文本
    A(this, "startPointToCursorText", null);
    // 最后一次点位到鼠标位置的文本
    A(this, "lastPointToCursorText", null);
    // 起始点位
    A(this, "startPosition", null);
    // 上次点击点位
    A(this, "lastPosition", null);
    /**
     * 点图点击事件
     * @param {MapEvent} event
     */
    A(this, "getClickPosition", (r) => {
      const e = r.lnglat;
      this.startPosition ? this.startPosition && (this.lastPosition = e, this.createDistanceText()) : this.startPosition = e;
    });
    /**
     * 获取新增围栏时，鼠标移动位置
     * @param {*} event
     */
    A(this, "onMouseMoveInDrawPolygon", (r) => {
      if (!this.startPosition || !this.lastPosition)
        return;
      const e = r.lnglat;
      this.updateDistanceText(
        this.startPointToCursorText,
        Qr(this.startPosition, e)
      ), this.updateDistanceText(
        this.lastPointToCursorText,
        Qr(this.lastPosition, e)
      );
    });
    if (!r)
      throw new Error("map not found!");
    this.map = r;
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
    this.startPointToCursorText && this.lastPointToCursorText || (this.startPointToCursorText = Jr(), this.startPointToCursorText.setMap(this.map), this.lastPointToCursorText = Jr(), this.lastPointToCursorText.setMap(this.map));
  }
  updateDistanceText(r, { text: e, textPos: n }) {
    r.setText(e), r.setPosition(n);
  }
  removeDistanceText() {
    var r, e;
    (r = this.startPointToCursorText) == null || r.remove(), this.startPointToCursorText = null, (e = this.lastPointToCursorText) == null || e.remove(), this.lastPointToCursorText = null;
  }
  reset() {
    return this.startPosition = null, this.lastPosition = null, this.removeDistanceText(), this;
  }
  destroy() {
    return this.reset(), this.stop(), this;
  }
};
var Kl = typeof global == "object" && global && global.Object === Object && global;
const ps = Kl;
var Zl = typeof self == "object" && self && self.Object === Object && self, Jl = ps || Zl || Function("return this")();
const er = Jl;
var Ql = er.Symbol;
const ar = Ql;
var ds = Object.prototype, tf = ds.hasOwnProperty, rf = ds.toString, ge = ar ? ar.toStringTag : void 0;
function ef(t) {
  var r = tf.call(t, ge), e = t[ge];
  try {
    t[ge] = void 0;
    var n = !0;
  } catch (a) {
  }
  var i = rf.call(t);
  return n && (r ? t[ge] = e : delete t[ge]), i;
}
var nf = Object.prototype, af = nf.toString;
function of(t) {
  return af.call(t);
}
var sf = "[object Null]", uf = "[object Undefined]", Va = ar ? ar.toStringTag : void 0;
function Lr(t) {
  return t == null ? t === void 0 ? uf : sf : Va && Va in Object(t) ? ef(t) : of(t);
}
function Fr(t) {
  return t != null && typeof t == "object";
}
var lf = "[object Symbol]";
function Yi(t) {
  return typeof t == "symbol" || Fr(t) && Lr(t) == lf;
}
function hs(t, r) {
  for (var e = -1, n = t == null ? 0 : t.length, i = Array(n); ++e < n; )
    i[e] = r(t[e], e, t);
  return i;
}
var ff = Array.isArray;
const Nr = ff;
var cf = 1 / 0, qa = ar ? ar.prototype : void 0, Ua = qa ? qa.toString : void 0;
function gs(t) {
  if (typeof t == "string")
    return t;
  if (Nr(t))
    return hs(t, gs) + "";
  if (Yi(t))
    return Ua ? Ua.call(t) : "";
  var r = t + "";
  return r == "0" && 1 / t == -cf ? "-0" : r;
}
function ze(t) {
  var r = typeof t;
  return t != null && (r == "object" || r == "function");
}
function vf(t) {
  return t;
}
var pf = "[object AsyncFunction]", df = "[object Function]", hf = "[object GeneratorFunction]", gf = "[object Proxy]";
function ms(t) {
  if (!ze(t))
    return !1;
  var r = Lr(t);
  return r == df || r == hf || r == pf || r == gf;
}
var mf = er["__core-js_shared__"];
const Wn = mf;
var Ka = function() {
  var t = /[^.]+$/.exec(Wn && Wn.keys && Wn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function yf(t) {
  return !!Ka && Ka in t;
}
var xf = Function.prototype, bf = xf.toString;
function $r(t) {
  if (t != null) {
    try {
      return bf.call(t);
    } catch (r) {
    }
    try {
      return t + "";
    } catch (r) {
    }
  }
  return "";
}
var Ef = /[\\^$.*+?()[\]{}|]/g, Sf = /^\[object .+?Constructor\]$/, Cf = Function.prototype, Mf = Object.prototype, _f = Cf.toString, Pf = Mf.hasOwnProperty, Tf = RegExp(
  "^" + _f.call(Pf).replace(Ef, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Df(t) {
  if (!ze(t) || yf(t))
    return !1;
  var r = ms(t) ? Tf : Sf;
  return r.test($r(t));
}
function wf(t, r) {
  return t == null ? void 0 : t[r];
}
function jr(t, r) {
  var e = wf(t, r);
  return Df(e) ? e : void 0;
}
var Rf = jr(er, "WeakMap");
const ui = Rf;
var Za = Object.create, Of = function() {
  function t() {
  }
  return function(r) {
    if (!ze(r))
      return {};
    if (Za)
      return Za(r);
    t.prototype = r;
    var e = new t();
    return t.prototype = void 0, e;
  };
}();
const If = Of;
function kf(t, r, e) {
  switch (e.length) {
    case 0:
      return t.call(r);
    case 1:
      return t.call(r, e[0]);
    case 2:
      return t.call(r, e[0], e[1]);
    case 3:
      return t.call(r, e[0], e[1], e[2]);
  }
  return t.apply(r, e);
}
function Af(t, r) {
  var e = -1, n = t.length;
  for (r || (r = Array(n)); ++e < n; )
    r[e] = t[e];
  return r;
}
var Bf = 800, zf = 16, Gf = Date.now;
function Lf(t) {
  var r = 0, e = 0;
  return function() {
    var n = Gf(), i = zf - (n - e);
    if (e = n, i > 0) {
      if (++r >= Bf)
        return arguments[0];
    } else
      r = 0;
    return t.apply(void 0, arguments);
  };
}
function Ff(t) {
  return function() {
    return t;
  };
}
var Nf = function() {
  try {
    var t = jr(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch (r) {
  }
}();
const vn = Nf;
var $f = vn ? function(t, r) {
  return vn(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ff(r),
    writable: !0
  });
} : vf;
const jf = $f;
var Yf = Lf(jf);
const Hf = Yf;
function Xf(t, r) {
  for (var e = -1, n = t == null ? 0 : t.length; ++e < n && r(t[e], e, t) !== !1; )
    ;
  return t;
}
var Wf = 9007199254740991, Vf = /^(?:0|[1-9]\d*)$/;
function qf(t, r) {
  var e = typeof t;
  return r = r == null ? Wf : r, !!r && (e == "number" || e != "symbol" && Vf.test(t)) && t > -1 && t % 1 == 0 && t < r;
}
function ys(t, r, e) {
  r == "__proto__" && vn ? vn(t, r, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[r] = e;
}
function xs(t, r) {
  return t === r || t !== t && r !== r;
}
var Uf = Object.prototype, Kf = Uf.hasOwnProperty;
function bs(t, r, e) {
  var n = t[r];
  (!(Kf.call(t, r) && xs(n, e)) || e === void 0 && !(r in t)) && ys(t, r, e);
}
function Ge(t, r, e, n) {
  var i = !e;
  e || (e = {});
  for (var a = -1, o = r.length; ++a < o; ) {
    var s = r[a], u = n ? n(e[s], t[s], s, e, t) : void 0;
    u === void 0 && (u = t[s]), i ? ys(e, s, u) : bs(e, s, u);
  }
  return e;
}
var Ja = Math.max;
function Zf(t, r, e) {
  return r = Ja(r === void 0 ? t.length - 1 : r, 0), function() {
    for (var n = arguments, i = -1, a = Ja(n.length - r, 0), o = Array(a); ++i < a; )
      o[i] = n[r + i];
    i = -1;
    for (var s = Array(r + 1); ++i < r; )
      s[i] = n[i];
    return s[r] = e(o), kf(t, this, s);
  };
}
var Jf = 9007199254740991;
function Es(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Jf;
}
function Ss(t) {
  return t != null && Es(t.length) && !ms(t);
}
var Qf = Object.prototype;
function Hi(t) {
  var r = t && t.constructor, e = typeof r == "function" && r.prototype || Qf;
  return t === e;
}
function tc(t, r) {
  for (var e = -1, n = Array(t); ++e < t; )
    n[e] = r(e);
  return n;
}
var rc = "[object Arguments]";
function Qa(t) {
  return Fr(t) && Lr(t) == rc;
}
var Cs = Object.prototype, ec = Cs.hasOwnProperty, nc = Cs.propertyIsEnumerable, ic = Qa(function() {
  return arguments;
}()) ? Qa : function(t) {
  return Fr(t) && ec.call(t, "callee") && !nc.call(t, "callee");
};
const Ms = ic;
function ac() {
  return !1;
}
var _s = typeof exports == "object" && exports && !exports.nodeType && exports, to = _s && typeof module == "object" && module && !module.nodeType && module, oc = to && to.exports === _s, ro = oc ? er.Buffer : void 0, sc = ro ? ro.isBuffer : void 0, uc = sc || ac;
const Ps = uc;
var lc = "[object Arguments]", fc = "[object Array]", cc = "[object Boolean]", vc = "[object Date]", pc = "[object Error]", dc = "[object Function]", hc = "[object Map]", gc = "[object Number]", mc = "[object Object]", yc = "[object RegExp]", xc = "[object Set]", bc = "[object String]", Ec = "[object WeakMap]", Sc = "[object ArrayBuffer]", Cc = "[object DataView]", Mc = "[object Float32Array]", _c = "[object Float64Array]", Pc = "[object Int8Array]", Tc = "[object Int16Array]", Dc = "[object Int32Array]", wc = "[object Uint8Array]", Rc = "[object Uint8ClampedArray]", Oc = "[object Uint16Array]", Ic = "[object Uint32Array]", mt = {};
mt[Mc] = mt[_c] = mt[Pc] = mt[Tc] = mt[Dc] = mt[wc] = mt[Rc] = mt[Oc] = mt[Ic] = !0;
mt[lc] = mt[fc] = mt[Sc] = mt[cc] = mt[Cc] = mt[vc] = mt[pc] = mt[dc] = mt[hc] = mt[gc] = mt[mc] = mt[yc] = mt[xc] = mt[bc] = mt[Ec] = !1;
function kc(t) {
  return Fr(t) && Es(t.length) && !!mt[Lr(t)];
}
function Xi(t) {
  return function(r) {
    return t(r);
  };
}
var Ts = typeof exports == "object" && exports && !exports.nodeType && exports, Ee = Ts && typeof module == "object" && module && !module.nodeType && module, Ac = Ee && Ee.exports === Ts, Vn = Ac && ps.process, Bc = function() {
  try {
    var t = Ee && Ee.require && Ee.require("util").types;
    return t || Vn && Vn.binding && Vn.binding("util");
  } catch (r) {
  }
}();
const re = Bc;
var eo = re && re.isTypedArray, zc = eo ? Xi(eo) : kc;
const Gc = zc;
var Lc = Object.prototype, Fc = Lc.hasOwnProperty;
function Ds(t, r) {
  var e = Nr(t), n = !e && Ms(t), i = !e && !n && Ps(t), a = !e && !n && !i && Gc(t), o = e || n || i || a, s = o ? tc(t.length, String) : [], u = s.length;
  for (var l in t)
    (r || Fc.call(t, l)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    qf(l, u))) && s.push(l);
  return s;
}
function ws(t, r) {
  return function(e) {
    return t(r(e));
  };
}
var Nc = ws(Object.keys, Object);
const $c = Nc;
var jc = Object.prototype, Yc = jc.hasOwnProperty;
function Hc(t) {
  if (!Hi(t))
    return $c(t);
  var r = [];
  for (var e in Object(t))
    Yc.call(t, e) && e != "constructor" && r.push(e);
  return r;
}
function Wi(t) {
  return Ss(t) ? Ds(t) : Hc(t);
}
function Xc(t) {
  var r = [];
  if (t != null)
    for (var e in Object(t))
      r.push(e);
  return r;
}
var Wc = Object.prototype, Vc = Wc.hasOwnProperty;
function qc(t) {
  if (!ze(t))
    return Xc(t);
  var r = Hi(t), e = [];
  for (var n in t)
    n == "constructor" && (r || !Vc.call(t, n)) || e.push(n);
  return e;
}
function Vi(t) {
  return Ss(t) ? Ds(t, !0) : qc(t);
}
var Uc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Kc = /^\w*$/;
function Zc(t, r) {
  if (Nr(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Yi(t) ? !0 : Kc.test(t) || !Uc.test(t) || r != null && t in Object(r);
}
var Jc = jr(Object, "create");
const De = Jc;
function Qc() {
  this.__data__ = De ? De(null) : {}, this.size = 0;
}
function tv(t) {
  var r = this.has(t) && delete this.__data__[t];
  return this.size -= r ? 1 : 0, r;
}
var rv = "__lodash_hash_undefined__", ev = Object.prototype, nv = ev.hasOwnProperty;
function iv(t) {
  var r = this.__data__;
  if (De) {
    var e = r[t];
    return e === rv ? void 0 : e;
  }
  return nv.call(r, t) ? r[t] : void 0;
}
var av = Object.prototype, ov = av.hasOwnProperty;
function sv(t) {
  var r = this.__data__;
  return De ? r[t] !== void 0 : ov.call(r, t);
}
var uv = "__lodash_hash_undefined__";
function lv(t, r) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = De && r === void 0 ? uv : r, this;
}
function kr(t) {
  var r = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++r < e; ) {
    var n = t[r];
    this.set(n[0], n[1]);
  }
}
kr.prototype.clear = Qc;
kr.prototype.delete = tv;
kr.prototype.get = iv;
kr.prototype.has = sv;
kr.prototype.set = lv;
function fv() {
  this.__data__ = [], this.size = 0;
}
function Mn(t, r) {
  for (var e = t.length; e--; )
    if (xs(t[e][0], r))
      return e;
  return -1;
}
var cv = Array.prototype, vv = cv.splice;
function pv(t) {
  var r = this.__data__, e = Mn(r, t);
  if (e < 0)
    return !1;
  var n = r.length - 1;
  return e == n ? r.pop() : vv.call(r, e, 1), --this.size, !0;
}
function dv(t) {
  var r = this.__data__, e = Mn(r, t);
  return e < 0 ? void 0 : r[e][1];
}
function hv(t) {
  return Mn(this.__data__, t) > -1;
}
function gv(t, r) {
  var e = this.__data__, n = Mn(e, t);
  return n < 0 ? (++this.size, e.push([t, r])) : e[n][1] = r, this;
}
function pr(t) {
  var r = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++r < e; ) {
    var n = t[r];
    this.set(n[0], n[1]);
  }
}
pr.prototype.clear = fv;
pr.prototype.delete = pv;
pr.prototype.get = dv;
pr.prototype.has = hv;
pr.prototype.set = gv;
var mv = jr(er, "Map");
const we = mv;
function yv() {
  this.size = 0, this.__data__ = {
    hash: new kr(),
    map: new (we || pr)(),
    string: new kr()
  };
}
function xv(t) {
  var r = typeof t;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
}
function _n(t, r) {
  var e = t.__data__;
  return xv(r) ? e[typeof r == "string" ? "string" : "hash"] : e.map;
}
function bv(t) {
  var r = _n(this, t).delete(t);
  return this.size -= r ? 1 : 0, r;
}
function Ev(t) {
  return _n(this, t).get(t);
}
function Sv(t) {
  return _n(this, t).has(t);
}
function Cv(t, r) {
  var e = _n(this, t), n = e.size;
  return e.set(t, r), this.size += e.size == n ? 0 : 1, this;
}
function Mr(t) {
  var r = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++r < e; ) {
    var n = t[r];
    this.set(n[0], n[1]);
  }
}
Mr.prototype.clear = yv;
Mr.prototype.delete = bv;
Mr.prototype.get = Ev;
Mr.prototype.has = Sv;
Mr.prototype.set = Cv;
var Mv = "Expected a function";
function qi(t, r) {
  if (typeof t != "function" || r != null && typeof r != "function")
    throw new TypeError(Mv);
  var e = function() {
    var n = arguments, i = r ? r.apply(this, n) : n[0], a = e.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, n);
    return e.cache = a.set(i, o) || a, o;
  };
  return e.cache = new (qi.Cache || Mr)(), e;
}
qi.Cache = Mr;
var _v = 500;
function Pv(t) {
  var r = qi(t, function(n) {
    return e.size === _v && e.clear(), n;
  }), e = r.cache;
  return r;
}
var Tv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Dv = /\\(\\)?/g, wv = Pv(function(t) {
  var r = [];
  return t.charCodeAt(0) === 46 && r.push(""), t.replace(Tv, function(e, n, i, a) {
    r.push(i ? a.replace(Dv, "$1") : n || e);
  }), r;
});
const Rv = wv;
function Ov(t) {
  return t == null ? "" : gs(t);
}
function Ui(t, r) {
  return Nr(t) ? t : Zc(t, r) ? [t] : Rv(Ov(t));
}
var Iv = 1 / 0;
function Rs(t) {
  if (typeof t == "string" || Yi(t))
    return t;
  var r = t + "";
  return r == "0" && 1 / t == -Iv ? "-0" : r;
}
function Os(t, r) {
  r = Ui(r, t);
  for (var e = 0, n = r.length; t != null && e < n; )
    t = t[Rs(r[e++])];
  return e && e == n ? t : void 0;
}
function Is(t, r, e) {
  var n = t == null ? void 0 : Os(t, r);
  return n === void 0 ? e : n;
}
function Ki(t, r) {
  for (var e = -1, n = r.length, i = t.length; ++e < n; )
    t[i + e] = r[e];
  return t;
}
var no = ar ? ar.isConcatSpreadable : void 0;
function kv(t) {
  return Nr(t) || Ms(t) || !!(no && t && t[no]);
}
function ks(t, r, e, n, i) {
  var a = -1, o = t.length;
  for (e || (e = kv), i || (i = []); ++a < o; ) {
    var s = t[a];
    r > 0 && e(s) ? r > 1 ? ks(s, r - 1, e, n, i) : Ki(i, s) : n || (i[i.length] = s);
  }
  return i;
}
function Av(t) {
  var r = t == null ? 0 : t.length;
  return r ? ks(t, 1) : [];
}
function Bv(t) {
  return Hf(Zf(t, void 0, Av), t + "");
}
var zv = ws(Object.getPrototypeOf, Object);
const Zi = zv;
var Gv = "[object Object]", Lv = Function.prototype, Fv = Object.prototype, As = Lv.toString, Nv = Fv.hasOwnProperty, $v = As.call(Object);
function jv(t) {
  if (!Fr(t) || Lr(t) != Gv)
    return !1;
  var r = Zi(t);
  if (r === null)
    return !0;
  var e = Nv.call(r, "constructor") && r.constructor;
  return typeof e == "function" && e instanceof e && As.call(e) == $v;
}
function Yv(t, r, e) {
  var n = -1, i = t.length;
  r < 0 && (r = -r > i ? 0 : i + r), e = e > i ? i : e, e < 0 && (e += i), i = r > e ? 0 : e - r >>> 0, r >>>= 0;
  for (var a = Array(i); ++n < i; )
    a[n] = t[n + r];
  return a;
}
function Hv() {
  this.__data__ = new pr(), this.size = 0;
}
function Xv(t) {
  var r = this.__data__, e = r.delete(t);
  return this.size = r.size, e;
}
function Wv(t) {
  return this.__data__.get(t);
}
function Vv(t) {
  return this.__data__.has(t);
}
var qv = 200;
function Uv(t, r) {
  var e = this.__data__;
  if (e instanceof pr) {
    var n = e.__data__;
    if (!we || n.length < qv - 1)
      return n.push([t, r]), this.size = ++e.size, this;
    e = this.__data__ = new Mr(n);
  }
  return e.set(t, r), this.size = e.size, this;
}
function le(t) {
  var r = this.__data__ = new pr(t);
  this.size = r.size;
}
le.prototype.clear = Hv;
le.prototype.delete = Xv;
le.prototype.get = Wv;
le.prototype.has = Vv;
le.prototype.set = Uv;
function Kv(t, r) {
  return t && Ge(r, Wi(r), t);
}
function Zv(t, r) {
  return t && Ge(r, Vi(r), t);
}
var Bs = typeof exports == "object" && exports && !exports.nodeType && exports, io = Bs && typeof module == "object" && module && !module.nodeType && module, Jv = io && io.exports === Bs, ao = Jv ? er.Buffer : void 0, oo = ao ? ao.allocUnsafe : void 0;
function Qv(t, r) {
  if (r)
    return t.slice();
  var e = t.length, n = oo ? oo(e) : new t.constructor(e);
  return t.copy(n), n;
}
function tp(t, r) {
  for (var e = -1, n = t == null ? 0 : t.length, i = 0, a = []; ++e < n; ) {
    var o = t[e];
    r(o, e, t) && (a[i++] = o);
  }
  return a;
}
function zs() {
  return [];
}
var rp = Object.prototype, ep = rp.propertyIsEnumerable, so = Object.getOwnPropertySymbols, np = so ? function(t) {
  return t == null ? [] : (t = Object(t), tp(so(t), function(r) {
    return ep.call(t, r);
  }));
} : zs;
const Ji = np;
function ip(t, r) {
  return Ge(t, Ji(t), r);
}
var ap = Object.getOwnPropertySymbols, op = ap ? function(t) {
  for (var r = []; t; )
    Ki(r, Ji(t)), t = Zi(t);
  return r;
} : zs;
const Gs = op;
function sp(t, r) {
  return Ge(t, Gs(t), r);
}
function Ls(t, r, e) {
  var n = r(t);
  return Nr(t) ? n : Ki(n, e(t));
}
function up(t) {
  return Ls(t, Wi, Ji);
}
function Fs(t) {
  return Ls(t, Vi, Gs);
}
var lp = jr(er, "DataView");
const li = lp;
var fp = jr(er, "Promise");
const fi = fp;
var cp = jr(er, "Set");
const ci = cp;
var uo = "[object Map]", vp = "[object Object]", lo = "[object Promise]", fo = "[object Set]", co = "[object WeakMap]", vo = "[object DataView]", pp = $r(li), dp = $r(we), hp = $r(fi), gp = $r(ci), mp = $r(ui), Pr = Lr;
(li && Pr(new li(new ArrayBuffer(1))) != vo || we && Pr(new we()) != uo || fi && Pr(fi.resolve()) != lo || ci && Pr(new ci()) != fo || ui && Pr(new ui()) != co) && (Pr = function(t) {
  var r = Lr(t), e = r == vp ? t.constructor : void 0, n = e ? $r(e) : "";
  if (n)
    switch (n) {
      case pp:
        return vo;
      case dp:
        return uo;
      case hp:
        return lo;
      case gp:
        return fo;
      case mp:
        return co;
    }
  return r;
});
const Qi = Pr;
var yp = Object.prototype, xp = yp.hasOwnProperty;
function bp(t) {
  var r = t.length, e = new t.constructor(r);
  return r && typeof t[0] == "string" && xp.call(t, "index") && (e.index = t.index, e.input = t.input), e;
}
var Ep = er.Uint8Array;
const po = Ep;
function ta(t) {
  var r = new t.constructor(t.byteLength);
  return new po(r).set(new po(t)), r;
}
function Sp(t, r) {
  var e = r ? ta(t.buffer) : t.buffer;
  return new t.constructor(e, t.byteOffset, t.byteLength);
}
var Cp = /\w*$/;
function Mp(t) {
  var r = new t.constructor(t.source, Cp.exec(t));
  return r.lastIndex = t.lastIndex, r;
}
var ho = ar ? ar.prototype : void 0, go = ho ? ho.valueOf : void 0;
function _p(t) {
  return go ? Object(go.call(t)) : {};
}
function Pp(t, r) {
  var e = r ? ta(t.buffer) : t.buffer;
  return new t.constructor(e, t.byteOffset, t.length);
}
var Tp = "[object Boolean]", Dp = "[object Date]", wp = "[object Map]", Rp = "[object Number]", Op = "[object RegExp]", Ip = "[object Set]", kp = "[object String]", Ap = "[object Symbol]", Bp = "[object ArrayBuffer]", zp = "[object DataView]", Gp = "[object Float32Array]", Lp = "[object Float64Array]", Fp = "[object Int8Array]", Np = "[object Int16Array]", $p = "[object Int32Array]", jp = "[object Uint8Array]", Yp = "[object Uint8ClampedArray]", Hp = "[object Uint16Array]", Xp = "[object Uint32Array]";
function Wp(t, r, e) {
  var n = t.constructor;
  switch (r) {
    case Bp:
      return ta(t);
    case Tp:
    case Dp:
      return new n(+t);
    case zp:
      return Sp(t, e);
    case Gp:
    case Lp:
    case Fp:
    case Np:
    case $p:
    case jp:
    case Yp:
    case Hp:
    case Xp:
      return Pp(t, e);
    case wp:
      return new n();
    case Rp:
    case kp:
      return new n(t);
    case Op:
      return Mp(t);
    case Ip:
      return new n();
    case Ap:
      return _p(t);
  }
}
function Vp(t) {
  return typeof t.constructor == "function" && !Hi(t) ? If(Zi(t)) : {};
}
var qp = "[object Map]";
function Up(t) {
  return Fr(t) && Qi(t) == qp;
}
var mo = re && re.isMap, Kp = mo ? Xi(mo) : Up;
const Zp = Kp;
var Jp = "[object Set]";
function Qp(t) {
  return Fr(t) && Qi(t) == Jp;
}
var yo = re && re.isSet, td = yo ? Xi(yo) : Qp;
const rd = td;
var ed = 1, nd = 2, id = 4, Ns = "[object Arguments]", ad = "[object Array]", od = "[object Boolean]", sd = "[object Date]", ud = "[object Error]", $s = "[object Function]", ld = "[object GeneratorFunction]", fd = "[object Map]", cd = "[object Number]", js = "[object Object]", vd = "[object RegExp]", pd = "[object Set]", dd = "[object String]", hd = "[object Symbol]", gd = "[object WeakMap]", md = "[object ArrayBuffer]", yd = "[object DataView]", xd = "[object Float32Array]", bd = "[object Float64Array]", Ed = "[object Int8Array]", Sd = "[object Int16Array]", Cd = "[object Int32Array]", Md = "[object Uint8Array]", _d = "[object Uint8ClampedArray]", Pd = "[object Uint16Array]", Td = "[object Uint32Array]", gt = {};
gt[Ns] = gt[ad] = gt[md] = gt[yd] = gt[od] = gt[sd] = gt[xd] = gt[bd] = gt[Ed] = gt[Sd] = gt[Cd] = gt[fd] = gt[cd] = gt[js] = gt[vd] = gt[pd] = gt[dd] = gt[hd] = gt[Md] = gt[_d] = gt[Pd] = gt[Td] = !0;
gt[ud] = gt[$s] = gt[gd] = !1;
function ln(t, r, e, n, i, a) {
  var o, s = r & ed, u = r & nd, l = r & id;
  if (e && (o = i ? e(t, n, i, a) : e(t)), o !== void 0)
    return o;
  if (!ze(t))
    return t;
  var f = Nr(t);
  if (f) {
    if (o = bp(t), !s)
      return Af(t, o);
  } else {
    var c = Qi(t), v = c == $s || c == ld;
    if (Ps(t))
      return Qv(t, s);
    if (c == js || c == Ns || v && !i) {
      if (o = u || v ? {} : Vp(t), !s)
        return u ? sp(t, Zv(o, t)) : ip(t, Kv(o, t));
    } else {
      if (!gt[c])
        return i ? t : {};
      o = Wp(t, c, s);
    }
  }
  a || (a = new le());
  var p = a.get(t);
  if (p)
    return p;
  a.set(t, o), rd(t) ? t.forEach(function(g) {
    o.add(ln(g, r, e, g, t, a));
  }) : Zp(t) && t.forEach(function(g, m) {
    o.set(m, ln(g, r, e, m, t, a));
  });
  var d = l ? u ? Fs : up : u ? Vi : Wi, h = f ? void 0 : d(t);
  return Xf(h || t, function(g, m) {
    h && (m = g, g = t[m]), bs(o, m, ln(g, r, e, m, t, a));
  }), o;
}
function Dd(t) {
  var r = t == null ? 0 : t.length;
  return r ? t[r - 1] : void 0;
}
function wd(t, r) {
  return r.length < 2 ? t : Os(t, Yv(r, 0, -1));
}
var Rd = er.isFinite;
function Wt(t) {
  return typeof t == "number" && Rd(t);
}
function Od(t, r) {
  return r = Ui(r, t), t = wd(t, r), t == null || delete t[Rs(Dd(r))];
}
function Id(t) {
  return jv(t) ? void 0 : t;
}
var kd = 1, Ad = 2, Bd = 4, zd = Bv(function(t, r) {
  var e = {};
  if (t == null)
    return e;
  var n = !1;
  r = hs(r, function(a) {
    return a = Ui(a, t), n || (n = a.length > 1), a;
  }), Ge(t, Fs(t), e), n && (e = ln(e, kd | Ad | Bd, Id));
  for (var i = r.length; i--; )
    Od(e, r[i]);
  return e;
});
const Gd = zd, xo = {
  radius: 6,
  zIndex: 0,
  strokeOpacity: 0,
  fillOpacity: 0
};
class vi {
  constructor(r) {
    A(this, "map");
    A(this, "options", zt({}, xo));
    A(this, "circleMarkers", []);
    this.map = r;
  }
  setOptions(r) {
    return this.options = zt(zt({}, r), Gd(xo, "radius")), this;
  }
  createCircleMarkersByPaths(r) {
    this.removeFromTheMap(), this.reset(), r.forEach((e) => {
      this.circleMarkers.push(this.createCircleMarker(e));
    }), this.addToMap();
  }
  createCircleMarker(r) {
    return new AMap.CircleMarker(zt({ center: r }, this.options));
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
  getPointInCircleMarkers(r) {
    var e;
    return (e = this.circleMarkers.find((n) => this.isPointInCircle(r, n))) != null ? e : null;
  }
  /**
   * 获取点是否在围栏编辑器的蓝色操作点上（即中间点）
   * @param {*} pos
   * @returns
   */
  getInCircleMarkersPoint(r) {
    const e = this.circleMarkers.find((i) => this.isPointInCircle(r, i));
    return this.circleMarkers.findIndex((i) => i === e) % 2 === 0 ? null : e != null ? e : null;
  }
  isPointInCircle(r, e) {
    return e.contains(r);
  }
  reset() {
    this.circleMarkers = [];
  }
  destroy() {
    this.removeFromTheMap(), this.reset();
  }
}
const bo = {
  zIndex: 1,
  strokeColor: "#00D3FC",
  strokeWeight: 8,
  strokeOpacity: 0
};
class Ys {
  constructor(r) {
    A(this, "map");
    A(this, "linesPath", []);
    A(this, "lines", []);
    if (!r)
      throw new Error("map not found");
    this.map = r;
  }
  getLinesByPaths(r) {
    let e = 0;
    const n = r.length;
    for (; e < n; ) {
      const i = e + 1 >= n ? 0 : e + 1;
      this.linesPath.push([r[e], r[i]]), e++;
    }
    return this.linesPath;
  }
  createLinesByPaths(r) {
    this.reset(), this.getLinesByPaths(r);
  }
  createPolyLine(r) {
    return new AMap.Polyline(zt({ path: r }, bo));
  }
  addToMap() {
    this.map.add(this.lines);
  }
  removeFromTheMap() {
    this.map.remove(this.lines);
  }
  getPointInPolyline(r) {
    const e = this.map.getResolution(), n = bo.strokeWeight * e;
    return this.linesPath.find(
      (a) => AMap.GeometryUtil.isPointOnSegment(r, a[0], a[1], n)
    );
  }
  reset() {
    this.linesPath = [], this.lines = [];
  }
}
class Ld {
  constructor(r, e) {
    A(this, "map");
    // 实点
    A(this, "circleMarkers", null);
    // 中间点
    A(this, "midCircleMarkers", null);
    // 线集合
    A(this, "lines", null);
    // 编辑器
    A(this, "polygonEditor", null);
    // 多边形路径
    A(this, "polygonPaths", []);
    // 多边形全部路径（包括中间虚电）
    A(this, "polygonTotalPaths", []);
    // 多边形
    A(this, "polygon", null);
    // 开始点位到鼠标位置的文本
    A(this, "startPointToCursorText", null);
    // 最后一次点位到鼠标位置的文本
    A(this, "lastPointToCursorText", null);
    // 线长的文本呢
    A(this, "lineLengthText", null);
    // 操作点
    A(this, "circleMarker", null);
    // 操作中间点
    A(this, "midCircleMarker", null);
    // 起始点位
    A(this, "startPosition", null);
    // 上次点击点位
    A(this, "lastPosition", null);
    // 兜底设置编辑中间点标记列表路径
    A(this, "editingMidTipMarkerListPath", null);
    A(this, "onPolygonEditorAdjust", ({ target: r }) => {
      this.polygonPaths = r.getPath(), this.circleMarkers.createCircleMarkersByPaths(this.polygonPaths), this.lines.createLinesByPaths(this.polygonPaths), Promise.resolve().then(() => {
        this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths(), this.midCircleMarkers.createCircleMarkersByPaths(this.polygonTotalPaths);
      }), this.reset();
    });
    A(this, "onMouseDown", (r) => {
      const e = r.lnglat;
      this.circleMarker = this.circleMarkers.getPointInCircleMarkers(e), this.midCircleMarker = this.midCircleMarkers.getInCircleMarkersPoint(e);
    });
    A(this, "onMovePolygonEditorPoint", (r) => {
      if (this.midCircleMarker)
        return;
      if (!this.circleMarker) {
        this.reset();
        return;
      }
      const e = this.circleMarker.getCenter(), n = (f) => `${f.lng}-${f.lat}`;
      let i = this.polygonPaths.findIndex((f) => n(f) === n(e));
      if (i === -1)
        return;
      const a = this.polygonPaths.length, o = i - 1 <= -1 ? a - 1 : i - 1, s = i + 1 >= a ? 0 : i + 1, u = this.polygonPaths.at(o), l = this.polygonPaths.at(s);
      this.setPosition(u, l), this.onMouseMoveInDrawPolygon(r);
    });
    A(this, "onMovePolygonEditorMidPoint", (r) => {
      if (this.circleMarker)
        return;
      if (!this.midCircleMarker) {
        this.reset();
        return;
      }
      const e = this.midCircleMarker.getCenter(), n = (f) => `${f.lng}-${f.lat}`;
      let i = this.polygonTotalPaths.findIndex((f) => n(f) === n(e));
      if (i === -1)
        return;
      const a = this.polygonTotalPaths.length, o = i - 1 <= -1 ? a - 1 : i - 1, s = i + 1 >= a ? 0 : i + 1, u = this.polygonTotalPaths.at(o), l = this.polygonTotalPaths.at(s);
      this.setPosition(u, l), this.onMouseMoveInDrawPolygon(r);
    });
    A(this, "onMouseUp", () => {
      this.circleMarker = null, this.midCircleMarker = null, this.reset();
    });
    A(this, "onInPolygonEditorLine", (r) => {
      if (this.circleMarker)
        return this.removeLineDistanceText();
      const e = r.lnglat, n = this.lines.getPointInPolyline(e);
      if (!n)
        return this.removeLineDistanceText();
      const [i, a] = n;
      this.lineLengthText || (this.lineLengthText = Jr(), this.lineLengthText.add(this.map)), this.updateDistanceText(this.lineLengthText, Qr(i, a));
    });
    /**
     * 获取新增围栏时，鼠标移动位置
     * @param {*} event
     */
    A(this, "onMouseMoveInDrawPolygon", (r) => {
      if (!this.startPosition || !this.lastPosition)
        return;
      const e = r.lnglat;
      this.updateDistanceText(
        this.startPointToCursorText,
        Qr(this.startPosition, e)
      ), this.updateDistanceText(
        this.lastPointToCursorText,
        Qr(this.lastPosition, e)
      );
    });
    if (!r)
      throw new Error("map not found!");
    this.map = r, e && (this.polygonEditor = e), this.circleMarkers = new vi(this.map), this.midCircleMarkers = new vi(this.map), this.lines = new Ys(this.map);
  }
  /**
   * 获取编辑器目标多边形路径
   * @returns
   */
  getPolygonEditorTargetPaths() {
    var r, e, n;
    return this.polygonEditor ? (n = (e = (r = this.polygonEditor) == null ? void 0 : r.getTarget) == null ? void 0 : e.call(r).getPath()) != null ? n : [] : [];
  }
  /**
   *
   */
  setEditingMidTipMarkerListPath(r) {
    return this.editingMidTipMarkerListPath = r, this;
  }
  /**
   *
   * @returns
   */
  getEditingMidTipMarkerList() {
    var e, n;
    const { singleRingListHandle: r } = this.polygonEditor;
    if (this.editingMidTipMarkerListPath) {
      if (typeof this.editingMidTipMarkerListPath == "function")
        return this.editingMidTipMarkerListPath(this.polygonEditor);
      if (typeof this.editingMidTipMarkerListPath == "string")
        return Is(this.polygonEditor, this.editingMidTipMarkerListPath);
    }
    return (e = this.polygonEditor.editingMidTipMarkerList) != null && e.length ? this.polygonEditor.editingMidTipMarkerList : r ? (n = r == null ? void 0 : r.list) == null ? void 0 : n.editingMidTipMarkerList : [];
  }
  /**
   * 获取编辑围栏所有点位（白色操作点+蓝色中间操作点）
   * @returns
   */
  getPolygonEditorTargetTotalPaths() {
    const r = this.getPolygonEditorTargetPaths(), e = this.getEditingMidTipMarkerList();
    let n = 0;
    const i = [], a = r.length;
    for (; n < a; ) {
      i.push(r[n]);
      const o = e[n];
      o && i.push(o.getCenter()), n++;
    }
    return i;
  }
  /**
   * 注册多边形编辑器，可操作点位事件
   * @param polygonEditor
   */
  open(r) {
    this.start(r);
  }
  /**
   * 注册多边形编辑器，可操作点位事件
   * @param polygonEditor
   */
  start(r) {
    var i, a, o;
    if (!r && !this.polygonEditor)
      throw new Error("polygonEditor not found");
    this.polygonEditor = r;
    const { controlPoint: e, midControlPoint: n } = this.polygonEditor;
    return this.polygonPaths = this.getPolygonEditorTargetPaths(), this.circleMarkers.setOptions(e).createCircleMarkersByPaths(this.polygonPaths), this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths(), this.midCircleMarkers.setOptions(n).createCircleMarkersByPaths(this.polygonTotalPaths), this.lines.createLinesByPaths(this.polygonPaths), (i = this.polygonEditor) == null || i.on("adjust", this.onPolygonEditorAdjust), (a = this.polygonEditor) == null || a.on("removenode", this.onPolygonEditorAdjust), (o = this.polygonEditor) == null || o.on("addnode", this.onPolygonEditorAdjust), this.map.on("mousedown", this.onMouseDown), this.map.on("touchstart", this.onMouseDown), this.map.on("mousemove", this.onMovePolygonEditorPoint), this.map.on("touchmove", this.onMovePolygonEditorPoint), this.map.on("mousemove", this.onMovePolygonEditorMidPoint), this.map.on("touchmove", this.onMovePolygonEditorMidPoint), this.map.on("mousemove", this.onInPolygonEditorLine), this.map.on("touchmove", this.onInPolygonEditorLine), this.map.on("mouseup", this.onMouseUp), this.map.on("touchend", this.onMouseUp), this;
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
    var r, e, n;
    (r = this.polygonEditor) == null || r.off("adjust", this.onPolygonEditorAdjust), (e = this.polygonEditor) == null || e.off("removenode", this.onPolygonEditorAdjust), (n = this.polygonEditor) == null || n.off("addnode", this.onPolygonEditorAdjust), this.map.off("mousedown", this.onMouseDown), this.map.off("touchstart", this.onMouseDown), this.map.off("mousemove", this.onMovePolygonEditorPoint), this.map.off("touchmove", this.onMovePolygonEditorPoint), this.map.off("mousemove", this.onMovePolygonEditorMidPoint), this.map.off("touchmove", this.onMovePolygonEditorMidPoint), this.map.off("mousemove", this.onInPolygonEditorLine), this.map.off("touchmove", this.onInPolygonEditorLine), this.map.off("mouseup", this.onMouseUp), this.map.off("touchend", this.onMouseUp);
  }
  /**
   * 开始边线测距
   * @param polygon
   * @returns
   */
  startLineRanging(r) {
    if (!r)
      throw new Error("polygonEditor not found");
    this.polygon || (this.polygon = r, this.lines.createLinesByPaths(this.polygon.getPath()), this.map.on("mousemove", this.onInPolygonEditorLine));
  }
  stopLineRanging() {
    this.map.off("mousemove", this.onInPolygonEditorLine);
  }
  /**
   * 设置起始点位、一次点位
   * @param {object} startPosition
   * @param {object} lastPosition
   */
  setPosition(r, e) {
    this.startPosition = r, this.lastPosition = e, this.createDistanceText();
  }
  /**
   * 创建距离文本
   * @returns
   */
  createDistanceText() {
    this.startPointToCursorText && this.lastPointToCursorText || (this.startPointToCursorText = Jr(), this.lastPointToCursorText = Jr(), this.startPointToCursorText.setMap(this.map), this.lastPointToCursorText.setMap(this.map));
  }
  updateDistanceText(r, { text: e, textPos: n }) {
    r.setText(e), r.setPosition(n);
  }
  removeLineDistanceText() {
    var r;
    (r = this.lineLengthText) == null || r.remove(), this.lineLengthText = null;
  }
  removeDistanceText() {
    var r, e;
    (r = this.startPointToCursorText) == null || r.remove(), (e = this.lastPointToCursorText) == null || e.remove(), this.startPointToCursorText = null, this.lastPointToCursorText = null;
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
class Fd {
  constructor(r, e) {
    A(this, "opts");
    A(this, "map");
    // 线集合
    A(this, "lines", null);
    // 多边形
    A(this, "polygon", null);
    // 线长的文本呢
    A(this, "lineLengthText", null);
    // 兜底设置编辑中间点标记列表路径
    A(this, "editingMidTipMarkerListPath", null);
    A(this, "onPolygonRanging", (r) => {
      const e = r.lnglat, n = this.lines.getPointInPolyline(e);
      if (!n)
        return this.removeLineDistanceText();
      const [i, a] = n;
      this.lineLengthText || (this.lineLengthText = Jr(), this.lineLengthText.add(this.map)), this.updateDistanceText(this.lineLengthText, Qr(i, a));
    });
    /**
    * 拖拽结束后，需要重新计算一下点位数据
    */
    A(this, "onRotateEndEnd", () => gr(this, null, function* () {
      yield Promise.resolve();
      const r = this.polygon;
      this.onDragEnd({ target: r });
    }));
    /**
     * 拖拽结束后，需要重新计算一下点位数据
     */
    A(this, "onDragEnd", (r) => gr(this, null, function* () {
      var n;
      const e = r.target;
      (n = this.lines) == null || n.reset(), yield Promise.resolve(), this.lines.createLinesByPaths(e.getPath());
    }));
    if (!r)
      throw new Error("map not found!");
    this.opts = e, this.map = r, this.lines = new Ys(this.map), this.immediateActive();
  }
  get immediate() {
    var r;
    return (r = this.opts) == null ? void 0 : r.immediate;
  }
  get draggable() {
    var e;
    return ((e = this.polygon) == null ? void 0 : e.getOptions()).draggable;
  }
  get rotatable() {
    var r;
    return (r = this.polygon) == null ? void 0 : r.rotatable;
  }
  /**
   * 立刻激活
   */
  immediateActive() {
    var e;
    const r = (e = this.opts) == null ? void 0 : e.target;
    this.immediate && r.CLASS_NAME === "Overlay.Polygon" && this.open(r);
  }
  /**
   * 开始边线测距
   * @param polygon
   * @returns
   */
  open(r) {
    this.start(r || this.polygon);
  }
  /**
   * 开始边线测距
   * @param polygon
   * @returns
   */
  start(r) {
    if (!r)
      return;
    this.polygon = r, this.lines.createLinesByPaths(this.polygon.getPath()), this.map.hasEvents("mousemove", this.onPolygonRanging) || this.map.hasEvents("touchmove", this.onPolygonRanging) || (this.map.on("mousemove", this.onPolygonRanging), this.map.on("touchmove", this.onPolygonRanging)), this.registryPolygonEvents();
  }
  registryPolygonEvents() {
    this.polygon && (this.draggable && this.polygon.on("dragend", this.onDragEnd), this.rotatable && "likeRectangle" in this.polygon && this.polygon.on("rotateEnd", this.onRotateEndEnd));
  }
  destroyPolygonEvents() {
    var r, e, n, i;
    this.polygon && ((e = (r = this.polygon).off) == null || e.call(r, "dragend", this.onDragEnd), (i = (n = this.polygon).off) == null || i.call(n, "rotateEnd", this.onRotateEndEnd));
  }
  close() {
    this.stop();
  }
  stop() {
    this.map.off("mousemove", this.onPolygonRanging);
  }
  updateDistanceText(r, { text: e, textPos: n }) {
    r.setText(e), r.setPosition(n);
  }
  removeLineDistanceText() {
    var r;
    (r = this.lineLengthText) == null || r.remove(), this.lineLengthText = null;
  }
  destroy() {
    return this.stop(), this.removeLineDistanceText(), this.destroyPolygonEvents(), this.polygon = null, this;
  }
}
class ra {
  constructor() {
    A(this, "events", {});
  }
  getEvents(r) {
    return this.events[r] || (this.events[r] = []), this.events[r];
  }
  emit(r, ...e) {
    this.getEvents(r).forEach((i) => i(...e));
  }
  on(r, e) {
    !r || typeof r != "string" || this.getEvents(r).push(e);
  }
  once(r, e) {
    if (!r || typeof r != "string")
      return;
    const n = (i) => {
      e(i), this.off(r, n);
    };
    this.on(r, n);
  }
  off(r, e) {
    if (!(!r || typeof r != "string")) {
      if (!e)
        return this.clearEvents(r);
      this.events[r] = this.getEvents(r).filter((n) => n !== e);
    }
  }
  hasEvents(r, e) {
    return !!this.getEvents(r).find((n) => n === e);
  }
  clearEvents(r) {
    r ? this.events[r] = [] : this.events = {};
  }
}
class Nd extends ra {
  constructor(e) {
    super();
    A(this, "map");
    // 全部点
    A(this, "circleMarkers", null);
    // 编辑器
    A(this, "polygonEditor", null);
    // 多边形全部路径（包括中间点）
    A(this, "polygonTotalPaths", []);
    // 操作点
    A(this, "circleMarker", null);
    // 兜底设置编辑中间点标记列表路径
    A(this, "editingMidTipMarkerListPath", null);
    A(this, "onPolygonEditorAdjust", () => {
      Promise.resolve().then(() => {
        this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths(), this.circleMarkers.createCircleMarkersByPaths(this.polygonTotalPaths);
      });
    });
    A(this, "onMouseDown", (e) => {
      const n = e.lnglat;
      this.circleMarker = this.circleMarkers.getPointInCircleMarkers(n), !(!this.circleMarker || !this.getEvents("mousedown").length) && this.emit("mousedown", this.circleMarker);
    });
    A(this, "onMouseMove", (e) => {
      !this.circleMarker || !this.getEvents("mousemove").length || this.emit("mousemove", this.circleMarker, e);
    });
    // private onMouseOut = (event: Common.Event) => {
    //     if (!this.circleMarker) return;
    //     const events = this.getEvents('mouseout');
    //     if (!events.length) return;
    //     this.emit('mouseout', this.circleMarker, event);
    // };
    A(this, "onMouseUp", () => {
      !this.getEvents("mouseup").length || !this.circleMarker || (this.emit("mouseup", this.circleMarker), this.circleMarker = null);
    });
    this.map = e.map, this.polygonEditor = e, this.circleMarkers = new vi(this.map), this.open(this.polygonEditor);
  }
  /**
   * 获取编辑器目标多边形路径
   * @returns
   */
  getPolygonEditorTargetPaths() {
    var e;
    return this.polygonEditor ? (e = this.polygonEditor.getTarget().getPath()) != null ? e : [] : [];
  }
  /**
   *
   */
  setEditingMidTipMarkerListPath(e) {
    return this.editingMidTipMarkerListPath = e, this;
  }
  /**
   * 获取编辑中间点标记列表
   * @returns
   */
  getEditingMidTipMarkerList() {
    var n, i;
    const { singleRingListHandle: e } = this.polygonEditor;
    if (this.editingMidTipMarkerListPath) {
      if (typeof this.editingMidTipMarkerListPath == "function")
        return this.editingMidTipMarkerListPath(this.polygonEditor);
      if (typeof this.editingMidTipMarkerListPath == "string")
        return Is(this.polygonEditor, this.editingMidTipMarkerListPath);
    }
    return (n = this.polygonEditor.editingMidTipMarkerList) != null && n.length ? this.polygonEditor.editingMidTipMarkerList : e ? (i = e == null ? void 0 : e.list) == null ? void 0 : i.editingMidTipMarkerList : [];
  }
  /**
   * 获取编辑围栏所有点位（白色操作点+蓝色中间操作点）
   * @returns
   */
  getPolygonEditorTargetTotalPaths() {
    const e = this.getPolygonEditorTargetPaths(), n = this.getEditingMidTipMarkerList();
    let i = 0;
    const a = [], o = e.length;
    for (; i < o; ) {
      a.push(e[i]);
      const s = n[i];
      s && a.push(s.getCenter()), i++;
    }
    return a;
  }
  /**
  * 注册多边形编辑器，可操作点位事件
  */
  open(e) {
    this.start(e);
  }
  /**
   * 注册多边形编辑器，可操作点位事件
   */
  start(e) {
    var i, a, o;
    if (!e && !this.polygonEditor)
      throw new Error("polygonEditor not found");
    this.polygonEditor = e;
    const { midControlPoint: n } = this.polygonEditor;
    return this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths(), this.circleMarkers.setOptions(n).createCircleMarkersByPaths(this.polygonTotalPaths), (i = this.polygonEditor) == null || i.on("adjust", this.onPolygonEditorAdjust), (a = this.polygonEditor) == null || a.on("removenode", this.onPolygonEditorAdjust), (o = this.polygonEditor) == null || o.on("addnode", this.onPolygonEditorAdjust), this.map.on("mousedown", this.onMouseDown), this.map.on("mousemove", this.onMouseMove), this.map.on("mouseup", this.onMouseUp), this;
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
function $d(t) {
  for (var r = [], e = 1; e < arguments.length; e++)
    r[e - 1] = arguments[e];
  return r.map(function(n) {
    return n.split(" ").map(function(i) {
      return i ? "" + t + i : "";
    }).join(" ");
  }).join(" ");
}
function jd(t, r) {
  return r.replace(/([^}{]*){/gm, function(e, n) {
    return n.replace(/\.([^{,\s\d.]+)/g, "." + t + "$1") + "{";
  });
}
function ur(t, r) {
  return function(e) {
    e && (t[r] = e);
  };
}
function Hs(t, r, e) {
  return function(n) {
    n && (t[r][e] = n);
  };
}
function Eo(t, r) {
  return function(e) {
    var n = e.prototype;
    t.forEach(function(i) {
      r(n, i);
    });
  };
}
function Yd(t, r) {
  return r === void 0 && (r = {}), function(e, n) {
    t.forEach(function(i) {
      var a = r[i] || i;
      a in e || (e[a] = function() {
        for (var o, s = [], u = 0; u < arguments.length; u++)
          s[u] = arguments[u];
        var l = (o = this[n])[i].apply(o, s);
        return l === this[n] ? this : l;
      });
    });
  };
}
var Hd = "function", Xd = "object", Wd = "string", Vd = "number", ea = "undefined", Xs = typeof window !== ea, qd = typeof document !== ea && document, Ud = [{
  open: "(",
  close: ")"
}, {
  open: '"',
  close: '"'
}, {
  open: "'",
  close: "'"
}, {
  open: '\\"',
  close: '\\"'
}, {
  open: "\\'",
  close: "\\'"
}], Mt = 1e-7, qe = {
  cm: function(t) {
    return t * 96 / 2.54;
  },
  mm: function(t) {
    return t * 96 / 254;
  },
  in: function(t) {
    return t * 96;
  },
  pt: function(t) {
    return t * 96 / 72;
  },
  pc: function(t) {
    return t * 96 / 6;
  },
  "%": function(t, r) {
    return t * r / 100;
  },
  vw: function(t, r) {
    return r === void 0 && (r = window.innerWidth), t / 100 * r;
  },
  vh: function(t, r) {
    return r === void 0 && (r = window.innerHeight), t / 100 * r;
  },
  vmax: function(t, r) {
    return r === void 0 && (r = Math.max(window.innerWidth, window.innerHeight)), t / 100 * r;
  },
  vmin: function(t, r) {
    return r === void 0 && (r = Math.min(window.innerWidth, window.innerHeight)), t / 100 * r;
  }
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Kd() {
  for (var t = 0, r = 0, e = arguments.length; r < e; r++)
    t += arguments[r].length;
  for (var n = Array(t), i = 0, r = 0; r < e; r++)
    for (var a = arguments[r], o = 0, s = a.length; o < s; o++, i++)
      n[i] = a[o];
  return n;
}
function Tr(t, r, e, n) {
  return (t * n + r * e) / (e + n);
}
function Pn(t) {
  return typeof t === ea;
}
function tr(t) {
  return t && typeof t === Xd;
}
function _t(t) {
  return Array.isArray(t);
}
function $t(t) {
  return typeof t === Wd;
}
function ee(t) {
  return typeof t === Vd;
}
function na(t) {
  return typeof t === Hd;
}
function Zd(t, r) {
  var e = t === "" || t == " ", n = r === "" || r == " ";
  return n && e || t === r;
}
function Ws(t, r, e, n, i) {
  var a = ia(t, r, e);
  return a ? e : Jd(t, r, e + 1, n, i);
}
function ia(t, r, e) {
  if (!t.ignore)
    return null;
  var n = r.slice(Math.max(e - 3, 0), e + 3).join("");
  return new RegExp(t.ignore).exec(n);
}
function Jd(t, r, e, n, i) {
  for (var a = function(l) {
    var f = r[l].trim();
    if (f === t.close && !ia(t, r, l))
      return {
        value: l
      };
    var c = l, v = jt(i, function(p) {
      var d = p.open;
      return d === f;
    });
    if (v && (c = Ws(v, r, l, n, i)), c === -1)
      return o = l, "break";
    l = c, o = l;
  }, o, s = e; s < n; ++s) {
    var u = a(s);
    if (s = o, typeof u == "object")
      return u.value;
    if (u === "break")
      break;
  }
  return -1;
}
function aa(t, r) {
  var e = $t(r) ? {
    separator: r
  } : r, n = e.separator, i = n === void 0 ? "," : n, a = e.isSeparateFirst, o = e.isSeparateOnlyOpenClose, s = e.isSeparateOpenClose, u = s === void 0 ? o : s, l = e.openCloseCharacters, f = l === void 0 ? Ud : l, c = f.map(function(S) {
    var M = S.open, P = S.close;
    return M === P ? M : M + "|" + P;
  }).join("|"), v = "(\\s*" + i + "\\s*|" + c + "|\\s+)", p = new RegExp(v, "g"), d = t.split(p).filter(function(S) {
    return S && S !== "undefined";
  }), h = d.length, g = [], m = [];
  function y() {
    return m.length ? (g.push(m.join("")), m = [], !0) : !1;
  }
  for (var x = function(S) {
    var M = d[S].trim(), P = S, D = jt(f, function(w) {
      var I = w.open;
      return I === M;
    }), O = jt(f, function(w) {
      var I = w.close;
      return I === M;
    });
    if (D) {
      if (P = Ws(D, d, S, h, f), P !== -1 && u)
        return y() && a || (g.push(d.slice(S, P + 1).join("")), S = P, a) ? (E = S, "break") : (E = S, "continue");
    } else if (O && !ia(O, d, S)) {
      var R = Kd(f);
      return R.splice(f.indexOf(O), 1), {
        value: aa(t, {
          separator: i,
          isSeparateFirst: a,
          isSeparateOnlyOpenClose: o,
          isSeparateOpenClose: u,
          openCloseCharacters: R
        })
      };
    } else if (Zd(M, i) && !o)
      return y(), a ? (E = S, "break") : (E = S, "continue");
    P === -1 && (P = h - 1), m.push(d.slice(S, P + 1).join("")), S = P, E = S;
  }, E, C = 0; C < h; ++C) {
    var b = x(C);
    if (C = E, typeof b == "object")
      return b.value;
    if (b === "break")
      break;
  }
  return m.length && g.push(m.join("")), g;
}
function Er(t) {
  return aa(t, "");
}
function Ir(t) {
  return aa(t, ",");
}
function Vs(t) {
  var r = /([^(]*)\(([\s\S]*)\)([\s\S]*)/g.exec(t);
  return !r || r.length < 4 ? {} : {
    prefix: r[1],
    value: r[2],
    suffix: r[3]
  };
}
function Le(t) {
  var r = /^([^\d|e|\-|\+]*)((?:\d|\.|-|e-|e\+)+)(\S*)$/g.exec(t);
  if (!r)
    return {
      prefix: "",
      unit: "",
      value: NaN
    };
  var e = r[1], n = r[2], i = r[3];
  return {
    prefix: e,
    unit: i,
    value: parseFloat(n)
  };
}
function Qd(t) {
  return t.replace(/[\s-_]+([^\s-_])/g, function(r, e) {
    return e.toUpperCase();
  });
}
function fn(t, r) {
  return r === void 0 && (r = "-"), t.replace(/([a-z])([A-Z])/g, function(e, n, i) {
    return "" + n + r + i.toLowerCase();
  });
}
function Re() {
  return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).getTime();
}
function cr(t, r, e) {
  e === void 0 && (e = -1);
  for (var n = t.length, i = 0; i < n; ++i)
    if (r(t[i], i, t))
      return i;
  return e;
}
function jt(t, r, e) {
  var n = cr(t, r);
  return n > -1 ? t[n] : e;
}
var qs = /* @__PURE__ */ function() {
  var t = Re(), r = Xs && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame);
  return r ? r.bind(window) : function(e) {
    var n = Re(), i = setTimeout(function() {
      e(n - t);
    }, 1e3 / 60);
    return i;
  };
}(), th = /* @__PURE__ */ function() {
  var t = Xs && (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame);
  return t ? t.bind(window) : function(r) {
    clearTimeout(r);
  };
}();
function vr(t) {
  return Object.keys(t);
}
function rh(t) {
  var r = vr(t);
  return r.map(function(e) {
    return t[e];
  });
}
function vt(t, r) {
  var e = Le(t), n = e.value, i = e.unit;
  if (tr(r)) {
    var a = r[i];
    if (a) {
      if (na(a))
        return a(n);
      if (qe[i])
        return qe[i](n, a);
    }
  } else if (i === "%")
    return n * r / 100;
  return qe[i] ? qe[i](n) : n;
}
function pi(t, r, e) {
  return Math.max(r, Math.min(t, e));
}
function So(t, r, e, n) {
  return n === void 0 && (n = t[0] / t[1]), [[et(r[0], Mt), et(r[0] / n, Mt)], [et(r[1] * n, Mt), et(r[1], Mt)]].filter(function(i) {
    return i.every(function(a, o) {
      var s = r[o], u = et(s, Mt);
      return e ? a <= s || a <= u : a >= s || a >= u;
    });
  })[0] || t;
}
function Us(t, r, e, n) {
  if (!n)
    return t.map(function(p, d) {
      return pi(p, r[d], e[d]);
    });
  var i = t[0], a = t[1], o = n === !0 ? i / a : n, s = So(t, r, !1, o), u = s[0], l = s[1], f = So(t, e, !0, o), c = f[0], v = f[1];
  return i < u || a < l ? (i = u, a = l) : (i > c || a > v) && (i = c, a = v), [i, a];
}
function eh(t) {
  for (var r = t.length, e = 0, n = r - 1; n >= 0; --n)
    e += t[n];
  return e;
}
function di(t) {
  for (var r = t.length, e = 0, n = r - 1; n >= 0; --n)
    e += t[n];
  return r ? e / r : 0;
}
function Et(t, r) {
  var e = r[0] - t[0], n = r[1] - t[1], i = Math.atan2(n, e);
  return i >= 0 ? i : i + Math.PI * 2;
}
function nh(t) {
  return [0, 1].map(function(r) {
    return di(t.map(function(e) {
      return e[r];
    }));
  });
}
function Co(t) {
  var r = nh(t), e = Et(r, t[0]), n = Et(r, t[1]);
  return e < n && n - e < Math.PI || e > n && n - e < -Math.PI ? 1 : -1;
}
function lr(t, r) {
  return Math.sqrt(Math.pow((r ? r[0] : 0) - t[0], 2) + Math.pow((r ? r[1] : 0) - t[1], 2));
}
function et(t, r) {
  if (!r)
    return t;
  var e = 1 / r;
  return Math.round(t / r) / e;
}
function Mo(t, r) {
  return t.forEach(function(e, n) {
    t[n] = et(t[n], r);
  }), t;
}
function ih(t) {
  for (var r = [], e = 0; e < t; ++e)
    r.push(e);
  return r;
}
function ah(t) {
  return t.reduce(function(r, e) {
    return r.concat(e);
  }, []);
}
function Ks(t, r) {
  t.indexOf(r) === -1 && t.push(r);
}
function Dt(t, r) {
  return t.classList ? t.classList.contains(r) : !!t.className.match(new RegExp("(\\s|^)" + r + "(\\s|$)"));
}
function Zs(t, r) {
  t.classList ? t.classList.add(r) : t.className += " " + r;
}
function Js(t, r) {
  if (t.classList)
    t.classList.remove(r);
  else {
    var e = new RegExp("(\\s|^)" + r + "(\\s|$)");
    t.className = t.className.replace(e, " ");
  }
}
function Ot(t, r, e, n) {
  t.addEventListener(r, e, n);
}
function Tt(t, r, e, n) {
  t.removeEventListener(r, e, n);
}
function fe(t) {
  return (t == null ? void 0 : t.ownerDocument) || qd;
}
function oa(t) {
  return fe(t).documentElement;
}
function _r(t) {
  return fe(t).body;
}
function br(t) {
  var r;
  return ((r = t == null ? void 0 : t.ownerDocument) === null || r === void 0 ? void 0 : r.defaultView) || window;
}
function Qs(t) {
  return t && "postMessage" in t && "blur" in t && "self" in t;
}
function ce(t) {
  return tr(t) && t.nodeName && t.nodeType && "ownerDocument" in t;
}
var oh = /* @__PURE__ */ function() {
  function t() {
    this.keys = [], this.values = [];
  }
  var r = t.prototype;
  return r.get = function(e) {
    return this.values[this.keys.indexOf(e)];
  }, r.set = function(e, n) {
    var i = this.keys, a = this.values, o = i.indexOf(e), s = o === -1 ? i.length : o;
    i[s] = e, a[s] = n;
  }, t;
}(), sh = /* @__PURE__ */ function() {
  function t() {
    this.object = {};
  }
  var r = t.prototype;
  return r.get = function(e) {
    return this.object[e];
  }, r.set = function(e, n) {
    this.object[e] = n;
  }, t;
}(), uh = typeof Map == "function", lh = /* @__PURE__ */ function() {
  function t() {
  }
  var r = t.prototype;
  return r.connect = function(e, n) {
    this.prev = e, this.next = n, e && (e.next = this), n && (n.prev = this);
  }, r.disconnect = function() {
    var e = this.prev, n = this.next;
    e && (e.next = n), n && (n.prev = e);
  }, r.getIndex = function() {
    for (var e = this, n = -1; e; )
      e = e.prev, ++n;
    return n;
  }, t;
}();
function fh(t, r) {
  var e = [], n = [];
  return t.forEach(function(i) {
    var a = i[0], o = i[1], s = new lh();
    e[a] = s, n[o] = s;
  }), e.forEach(function(i, a) {
    i.connect(e[a - 1]);
  }), t.filter(function(i, a) {
    return !r[a];
  }).map(function(i, a) {
    var o = i[0], s = i[1];
    if (o === s)
      return [0, 0];
    var u = e[o], l = n[s - 1], f = u.getIndex();
    u.disconnect(), l ? u.connect(l, l.next) : u.connect(void 0, e[0]);
    var c = u.getIndex();
    return [f, c];
  });
}
var ch = /* @__PURE__ */ function() {
  function t(e, n, i, a, o, s, u, l) {
    this.prevList = e, this.list = n, this.added = i, this.removed = a, this.changed = o, this.maintained = s, this.changedBeforeAdded = u, this.fixed = l;
  }
  var r = t.prototype;
  return Object.defineProperty(r, "ordered", {
    get: function() {
      return this.cacheOrdered || this.caculateOrdered(), this.cacheOrdered;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(r, "pureChanged", {
    get: function() {
      return this.cachePureChanged || this.caculateOrdered(), this.cachePureChanged;
    },
    enumerable: !0,
    configurable: !0
  }), r.caculateOrdered = function() {
    var e = fh(this.changedBeforeAdded, this.fixed), n = this.changed, i = [];
    this.cacheOrdered = e.filter(function(a, o) {
      var s = a[0], u = a[1], l = n[o], f = l[0], c = l[1];
      if (s !== u)
        return i.push([f, c]), !0;
    }), this.cachePureChanged = i;
  }, t;
}();
function Fe(t, r, e) {
  var n = uh ? Map : e ? sh : oh, i = e || function(y) {
    return y;
  }, a = [], o = [], s = [], u = t.map(i), l = r.map(i), f = new n(), c = new n(), v = [], p = [], d = {}, h = [], g = 0, m = 0;
  return u.forEach(function(y, x) {
    f.set(y, x);
  }), l.forEach(function(y, x) {
    c.set(y, x);
  }), u.forEach(function(y, x) {
    var E = c.get(y);
    typeof E == "undefined" ? (++m, o.push(x)) : d[E] = m;
  }), l.forEach(function(y, x) {
    var E = f.get(y);
    typeof E == "undefined" ? (a.push(x), ++g) : (s.push([E, x]), m = d[x] || 0, v.push([E - m, x - g]), p.push(x === E), E !== x && h.push([E, x]));
  }), o.reverse(), new ch(t, r, a, o, h, s, v, p);
}
var vh = /* @__PURE__ */ function() {
  function t(e, n) {
    e === void 0 && (e = []), this.findKeyCallback = n, this.list = [].slice.call(e);
  }
  var r = t.prototype;
  return r.update = function(e) {
    var n = [].slice.call(e), i = Fe(this.list, n, this.findKeyCallback);
    return this.list = n, i;
  }, t;
}(), hi = function(t, r) {
  return hi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
  }, hi(t, r);
};
function Ne(t, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  hi(t, r);
  function e() {
    this.constructor = t;
  }
  t.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
}
var nr = function() {
  return nr = Object.assign || function(r) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
    }
    return r;
  }, nr.apply(this, arguments);
};
function tu(t, r) {
  var e = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      r.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (e[n[i]] = t[n[i]]);
  return e;
}
function _o(t, r, e) {
  if (e || arguments.length === 2)
    for (var n = 0, i = r.length, a; n < i; n++)
      (a || !(n in r)) && (a || (a = Array.prototype.slice.call(r, 0, n)), a[n] = r[n]);
  return t.concat(a || Array.prototype.slice.call(r));
}
function Po(t) {
  var r = 0;
  return t.map(function(e) {
    return e == null ? "$compat".concat(++r) : "".concat(e);
  });
}
function ru(t) {
  var r = [];
  return t.forEach(function(e) {
    r = r.concat(_t(e) ? ru(e) : e);
  }), r;
}
function qn(t, r) {
  if (!r)
    return t;
  for (var e in r)
    Pn(t[e]) && (t[e] = r[e]);
  return t;
}
function pn(t, r) {
  if (t === r)
    return !1;
  for (var e in t)
    if (!(e in r))
      return !0;
  for (var e in r)
    if (t[e] !== r[e])
      return !0;
  return !1;
}
function To(t) {
  var r = t.className, e = tu(t, ["className"]);
  return r != null && (e.class = r), delete e.style, delete e.children, e;
}
function Do(t) {
  var r = {}, e = {};
  for (var n in t)
    n.indexOf("on") === 0 ? e[n] = t[n] : r[n] = t[n];
  return [r, e];
}
function Tn(t) {
  if (!t)
    return null;
  var r = t.b;
  return ce(r) ? r : Tn(t.c);
}
function eu(t) {
  var r = t.parentNode;
  r && r.removeChild(t);
}
function nu(t) {
  t.forEach(function(r) {
    r();
  });
}
function ph() {
  return this.constructor(this.props, this.context);
}
var sa = 0, Dn = /* @__PURE__ */ function() {
  function t(e, n, i, a, o, s, u) {
    u === void 0 && (u = {}), this.t = e, this.d = n, this.k = i, this.i = a, this.c = o, this.ref = s, this.ps = u, this.typ = "prov", this._ps = [], this._cs = {}, this._hyd = null, this._sel = !1;
  }
  var r = t.prototype;
  return r.s = function() {
    return !0;
  }, r.u = function(e, n, i, a, o) {
    var s = this, u = s.d, l = rh(n).filter(function(d) {
      return d.$_req;
    }), f = ru(l.map(function(d) {
      return d.$_subs;
    })), c = jt(f, function(d) {
      return d.d === u;
    });
    if (s.b && !$t(i) && !o && !s.s(i.props, a) && !c) {
      var v = f.reduce(function(d, h) {
        var g = h.d;
        return d[0] ? d[0].d === g && d.push(h) : g > u && d.push(h), d;
      }, []);
      return v.forEach(function(d) {
        $e(d, d._ps, [d.o], e, n, !0);
      }), !1;
    }
    s.o = i, s.ss(a);
    var p = s.ps;
    return $t(i) || (s.ps = i.props, s.ref = i.ref), ua(this), s.r(e, n, s.b ? p : {}, a), !0;
  }, r.md = function() {
    this.rr();
  }, r.ss = function() {
  }, r.ud = function() {
    this.rr();
  }, r.rr = function() {
    var e = this, n = e.ref, i = e.fr;
    n && n(i ? i.current : e.b);
  }, t;
}();
function iu() {
  return Object.__CROACT_CURRENT_INSTNACE__;
}
function dh() {
  return sa;
}
function hh(t) {
  sa = t;
}
function ua(t) {
  return Object.__CROACT_CURRENT_INSTNACE__ = t, sa = 0, t;
}
var la = /* @__PURE__ */ function() {
  function t(e, n) {
    e === void 0 && (e = {}), this.props = e, this.context = n, this.state = {}, this.$_timer = 0, this.$_state = {}, this.$_subs = [], this.$_cs = {};
  }
  var r = t.prototype;
  return r.render = function() {
    return null;
  }, r.shouldComponentUpdate = function(e, n) {
    return this.props !== e || this.state !== n;
  }, r.setState = function(e, n, i) {
    var a = this;
    a.$_timer || (a.$_state = {}), clearTimeout(a.$_timer), a.$_timer = 0, a.$_state = nr(nr({}, a.$_state), e), i ? a.$_setState(n, i) : a.$_timer = window.setTimeout(function() {
      a.$_timer = 0, a.$_setState(n, i);
    });
  }, r.forceUpdate = function(e) {
    this.setState({}, e, !0);
  }, r.componentDidMount = function() {
  }, r.componentDidUpdate = function(e, n) {
  }, r.componentWillUnmount = function() {
  }, r.$_setState = function(e, n) {
    var i = [], a = this.$_p, o = $e(a.c, [a], [a.o], i, a._cs, nr(nr({}, this.state), this.$_state), n);
    o && (e && i.push(e), nu(i), ua(null));
  }, t;
}(), au = /* @__PURE__ */ function(t) {
  Ne(r, t);
  function r() {
    return t !== null && t.apply(this, arguments) || this;
  }
  var e = r.prototype;
  return e.shouldComponentUpdate = function(n, i) {
    return pn(this.props, n) || pn(this.state, i);
  }, r;
}(la);
function ou(t) {
  var r = function(e) {
    r.current = e;
  };
  return r.current = t, r;
}
function gh(t) {
  return t._fr = !0, t;
}
function mh(t, r, e, n) {
  var i, a;
  return !((i = t == null ? void 0 : t.prototype) === null || i === void 0) && i.render ? a = new t(r, e) : (a = new la(r, e), a.constructor = t, t._fr ? (n.fr = ou(), a.render = function() {
    return this.constructor(this.props, n.fr);
  }) : a.render = ph), a.$_p = n, a;
}
var yh = /* @__PURE__ */ function(t) {
  Ne(r, t);
  function r(n, i, a, o, s, u, l) {
    l === void 0 && (l = {});
    var f = t.call(this, n, i, a, o, s, u, qn(l, n.defaultProps)) || this;
    return f.typ = "comp", f._usefs = [], f._uefs = [], f._defs = [], f;
  }
  var e = r.prototype;
  return e.s = function(n, i) {
    var a = this.b;
    return a.shouldComponentUpdate(qn(n, this.t.defaultProps), i || a.state) !== !1;
  }, e.r = function(n, i, a) {
    var o, s, u = this, l = u.t;
    u.ps = qn(u.ps, u.t.defaultProps);
    var f = u.ps, c = !u.b, v = l.contextType, p = u.b, d = v == null ? void 0 : v.get(u);
    u._cs = i, c ? (p = mh(l, f, d, u), u.b = p) : (p.props = f, p.context = d);
    var h = p.state;
    u._usefs = [], u._uefs = [];
    var g = p.render();
    ((s = (o = g == null ? void 0 : g.props) === null || o === void 0 ? void 0 : o.children) === null || s === void 0 ? void 0 : s.length) === 0 && (g.props.children = u.ps.children);
    var m = nr(nr({}, i), p.$_cs);
    $e(u, u._ps, g ? [g] : [], n, m), c ? u._uefs.push(function() {
      v == null || v.register(u), p.componentDidMount();
    }) : u._uefs.push(function() {
      p.componentDidUpdate(a, h);
    }), n.push(function() {
      u._usefs.forEach(function(y) {
        y();
      }), c ? u.md() : u.ud(), u._defs = u._uefs.map(function(y) {
        return y();
      });
    });
  }, e.ss = function(n) {
    var i = this.b;
    !i || !n || (i.state = n);
  }, e.un = function() {
    var n, i = this;
    i._ps.forEach(function(o) {
      o.un();
    });
    var a = i.t;
    (n = a.contextType) === null || n === void 0 || n.unregister(i), clearTimeout(i.b.$_timer), i._defs.forEach(function(o) {
      o && o();
    }), i.b.componentWillUnmount();
  }, r;
}(Dn);
function xh(t, r, e) {
  var n = fa(To(t), To(r)), i = n.added, a = n.removed, o = n.changed;
  for (var s in i)
    e.setAttribute(s, i[s]);
  for (var u in o)
    e.setAttribute(u, o[u][1]);
  for (var l in a)
    e.removeAttribute(l);
}
function bh(t, r, e) {
  var n = fa(t, r), i = n.added, a = n.removed;
  for (var o in a)
    e.e(o, !0);
  for (var s in i)
    e.e(s);
}
function fa(t, r) {
  var e = vr(t), n = vr(r), i = Fe(e, n, function(u) {
    return u;
  }), a = {}, o = {}, s = {};
  return i.added.forEach(function(u) {
    var l = n[u];
    a[l] = r[l];
  }), i.removed.forEach(function(u) {
    var l = e[u];
    o[l] = t[l];
  }), i.maintained.forEach(function(u) {
    var l = u[0], f = e[l], c = [t[f], r[f]];
    t[f] !== r[f] && (s[f] = c);
  }), {
    added: a,
    removed: o,
    changed: s
  };
}
function Eh(t, r, e) {
  var n = e.style, i = fa(t, r), a = i.added, o = i.removed, s = i.changed;
  for (var u in a) {
    var l = fn(u, "-");
    n.setProperty(l, a[u]);
  }
  for (var u in s) {
    var f = fn(u, "-");
    n.setProperty(f, s[u][1]);
  }
  for (var u in o) {
    var c = fn(u, "-");
    n.removeProperty(c);
  }
}
function Sh(t) {
  return t.replace(/^on/g, "").toLowerCase();
}
var Ch = /* @__PURE__ */ function(t) {
  Ne(r, t);
  function r() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.typ = "elem", n._es = {}, n._svg = !1, n;
  }
  var e = r.prototype;
  return e.e = function(n, i) {
    var a = this, o = a._es, s = a.b, u = Sh(n);
    i ? (Tt(s, u, o[n]), delete o[n]) : (o[n] = function(l) {
      var f, c;
      (c = (f = a.ps)[n]) === null || c === void 0 || c.call(f, l);
    }, Ot(s, u, o[n]));
  }, e.s = function(n) {
    return pn(this.ps, n);
  }, e.r = function(n, i, a) {
    var o, s = this, u = !s.b, l = s.ps;
    if (u) {
      var f = Tn(s.c), c = !1;
      s._svg || s.t === "svg" ? c = !0 : c = f && f.ownerSVGElement, s._svg = c;
      var v = (o = s._hyd) === null || o === void 0 ? void 0 : o.splice(0, 1)[0], p = s.t;
      if (v)
        s._hyd = [].slice.call(v.children || []);
      else {
        var d = fe(f);
        c ? v = d.createElementNS("http://www.w3.org/2000/svg", p) : v = d.createElement(p);
      }
      s.b = v;
    }
    $e(s, s._ps, l.children, n, i);
    var h = s.b, g = Do(a), m = g[0], y = g[1], x = Do(l), E = x[0], C = x[1];
    return xh(m, E, h), bh(y, C, s), Eh(a.style || {}, l.style || {}, h), n.push(function() {
      u ? s.md() : s.ud();
    }), !0;
  }, e.un = function() {
    var n = this, i = n._es, a = n.b;
    for (var o in i)
      Tt(a, o, i[o]);
    n._ps.forEach(function(s) {
      s.un();
    }), n._es = {}, n._sel || eu(a);
  }, r;
}(Dn);
function Oe(t) {
  if (!t || ce(t))
    return t;
  var r = t.$_p._ps;
  return r.length ? Oe(r[0].b) : null;
}
function su(t) {
  if (t) {
    if (t.b && ce(t.b))
      return t;
    var r = t._ps;
    return r.length ? su(r[0]) : null;
  }
}
function Jt(t, r) {
  for (var e = [], n = 2; n < arguments.length; n++)
    e[n - 2] = arguments[n];
  var i = r || {}, a = i.key, o = i.ref, s = tu(i, ["key", "ref"]);
  return {
    type: t,
    key: a,
    ref: o,
    props: nr(nr({}, s), {
      children: ah(e).filter(function(u) {
        return u != null && u !== !1;
      })
    })
  };
}
var uu = /* @__PURE__ */ function(t) {
  Ne(r, t);
  function r(n, i) {
    i === void 0 && (i = 0);
    var a = t.call(this, "container", i, "container", 0, null) || this;
    return a.typ = "container", a.b = n, a;
  }
  var e = r.prototype;
  return e.r = function() {
    return !0;
  }, e.un = function() {
  }, r;
}(Dn), Mh = /* @__PURE__ */ function(t) {
  Ne(r, t);
  function r() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.typ = "text", n;
  }
  var e = r.prototype;
  return e.r = function(n) {
    var i, a = this, o = !a.b;
    if (o) {
      var s = Tn(a.c), u = (i = a._hyd) === null || i === void 0 ? void 0 : i.splice(0, 1)[0];
      a.b = u || fe(s).createTextNode(a.t.replace("text_", ""));
    }
    return n.push(function() {
      o ? a.md() : a.ud();
    }), !0;
  }, e.un = function() {
    eu(this.b);
  }, r;
}(Dn);
function _h(t, r, e) {
  var n = e.map(function(u) {
    return $t(u) ? null : u.key;
  }), i = Po(r.map(function(u) {
    return u.k;
  })), a = Po(n), o = Fe(i, a, function(u) {
    return u;
  });
  o.removed.forEach(function(u) {
    r.splice(u, 1)[0].un();
  }), o.ordered.forEach(function(u) {
    var l = u[0], f = u[1], c = r.splice(l, 1)[0];
    r.splice(f, 0, c);
    var v = Oe(c.b), p = Oe(r[f + 1] && r[f + 1].b);
    v && v.parentNode.insertBefore(v, p);
  }), o.added.forEach(function(u) {
    r.splice(u, 0, wo(e[u], n[u], u, t));
  });
  var s = o.maintained.filter(function(u) {
    u[0];
    var l = u[1], f = e[l], c = r[l], v = $t(f) ? "text_".concat(f) : f.type;
    return v !== c.t ? (c.un(), r.splice(l, 1, wo(f, n[l], l, t)), !0) : (c.i = l, !1);
  });
  return _o(_o([], o.added, !0), s.map(function(u) {
    u[0];
    var l = u[1];
    return l;
  }), !0);
}
function Ph(t, r) {
  for (var e = t._ps, n = e.length, i = r.i + 1; i < n; ++i) {
    var a = Oe(e[i].b);
    if (a)
      return a;
  }
  return null;
}
function wo(t, r, e, n) {
  var i = n.d + 1;
  if ($t(t) || ee(t))
    return new Mh("text_".concat(t), i, r, e, n, null, {});
  var a = t.type, o = typeof a == "string" ? Ch : yh;
  return new o(a, i, r, e, n, t.ref, t.props);
}
function $e(t, r, e, n, i, a, o) {
  var s = _h(t, r, e), u = t._hyd, l = r.filter(function(c, v) {
    return c._hyd = u, c.u(n, i, e[v], a, o);
  });
  t.typ === "container" && t._sel && r.forEach(function(c) {
    var v = su(c);
    v && (v._sel = !0);
  }), t._hyd = null;
  var f = Tn(t);
  return f && s.reverse().forEach(function(c) {
    var v = r[c], p = Oe(v.b);
    if (p && f !== p && !p.parentNode) {
      var d = Ph(t, v);
      f.insertBefore(p, d);
    }
  }), l.length > 0;
}
function Th(t, r, e, n) {
  e === void 0 && (e = r.__CROACT__), n === void 0 && (n = {});
  var i = !!e;
  e || (e = new uu(r));
  var a = [];
  return $e(e, e._ps, t ? [t] : [], a, n, void 0, void 0), nu(a), ua(null), i || (r.__CROACT__ = e), e;
}
function Ro(t, r, e) {
  return !e && t && (e = new uu(r.parentElement), e._hyd = [r], e._sel = !0), Th(t, r, e), e;
}
function lu(t) {
  var r = iu(), e = r._hs || (r._hs = []), n = dh(), i = e[n];
  if (hh(n + 1), i) {
    if (!pn(i.deps, t.deps))
      return i.updated = !1, i;
    e[n] = t;
  } else
    e.push(t);
  return t.value = t.func(), t.updated = !0, t;
}
function Dh(t, r) {
  var e = lu({
    func: t,
    deps: r
  });
  return e.value;
}
function wh(t) {
  return Dh(function() {
    return ou(t);
  }, []);
}
function fu(t, r, e) {
  var n = iu(), i = lu({
    func: function() {
      return t;
    },
    deps: r
  }), a = e ? n._usefs : n._uefs;
  i.updated ? a.push(function() {
    return i.effect && i.effect(), i.effect = t(), i.effect;
  }) : a.push(function() {
    return i.effect;
  });
}
function Rh(t, r, e) {
  fu(function() {
    t == null || t(r());
  }, e, !0);
}
function ca(t, r) {
  for (var e = t.length, n = 0; n < e; ++n)
    if (r(t[n], n))
      return !0;
  return !1;
}
function cu(t, r) {
  for (var e = t.length, n = 0; n < e; ++n)
    if (r(t[n], n))
      return t[n];
  return null;
}
function vu(t) {
  var r = t;
  if (typeof r == "undefined") {
    if (typeof navigator == "undefined" || !navigator)
      return "";
    r = navigator.userAgent || "";
  }
  return r.toLowerCase();
}
function va(t, r) {
  try {
    return new RegExp(t, "g").exec(r);
  } catch (e) {
    return null;
  }
}
function Oh() {
  if (typeof navigator == "undefined" || !navigator || !navigator.userAgentData)
    return !1;
  var t = navigator.userAgentData, r = t.brands || t.uaList;
  return !!(r && r.length);
}
function Ih(t, r) {
  var e = va("(" + t + ")((?:\\/|\\s|:)([0-9|\\.|_]+))", r);
  return e ? e[3] : "";
}
function gi(t) {
  return t.replace(/_/g, ".");
}
function ye(t, r) {
  var e = null, n = "-1";
  return ca(t, function(i) {
    var a = va("(" + i.test + ")((?:\\/|\\s|:)([0-9|\\.|_]+))?", r);
    return !a || i.brand ? !1 : (e = i, n = a[3] || "-1", i.versionAlias ? n = i.versionAlias : i.versionTest && (n = Ih(i.versionTest.toLowerCase(), r) || n), n = gi(n), !0);
  }), {
    preset: e,
    version: n
  };
}
function me(t, r) {
  var e = {
    brand: "",
    version: "-1"
  };
  return ca(t, function(n) {
    var i = pu(r, n);
    return i ? (e.brand = n.id, e.version = n.versionAlias || i.version, e.version !== "-1") : !1;
  }), e;
}
function pu(t, r) {
  return cu(t, function(e) {
    var n = e.brand;
    return va("" + r.test, n.toLowerCase());
  });
}
var mi = [{
  test: "phantomjs",
  id: "phantomjs"
}, {
  test: "whale",
  id: "whale"
}, {
  test: "edgios|edge|edg",
  id: "edge"
}, {
  test: "msie|trident|windows phone",
  id: "ie",
  versionTest: "iemobile|msie|rv"
}, {
  test: "miuibrowser",
  id: "miui browser"
}, {
  test: "samsungbrowser",
  id: "samsung internet"
}, {
  test: "samsung",
  id: "samsung internet",
  versionTest: "version"
}, {
  test: "chrome|crios",
  id: "chrome"
}, {
  test: "firefox|fxios",
  id: "firefox"
}, {
  test: "android",
  id: "android browser",
  versionTest: "version"
}, {
  test: "safari|iphone|ipad|ipod",
  id: "safari",
  versionTest: "version"
}], du = [{
  test: "(?=.*applewebkit/(53[0-7]|5[0-2]|[0-4]))(?=.*\\schrome)",
  id: "chrome",
  versionTest: "chrome"
}, {
  test: "chromium",
  id: "chrome"
}, {
  test: "whale",
  id: "chrome",
  versionAlias: "-1",
  brand: !0
}], yi = [{
  test: "applewebkit",
  id: "webkit",
  versionTest: "applewebkit|safari"
}], hu = [{
  test: "(?=(iphone|ipad))(?!(.*version))",
  id: "webview"
}, {
  test: "(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))",
  id: "webview"
}, {
  // test webview
  test: "webview",
  id: "webview"
}], gu = [{
  test: "windows phone",
  id: "windows phone"
}, {
  test: "windows 2000",
  id: "window",
  versionAlias: "5.0"
}, {
  test: "windows nt",
  id: "window"
}, {
  test: "win32|windows",
  id: "window"
}, {
  test: "iphone|ipad|ipod",
  id: "ios",
  versionTest: "iphone os|cpu os"
}, {
  test: "macos|macintel|mac os x",
  id: "mac"
}, {
  test: "android|linux armv81",
  id: "android"
}, {
  test: "tizen",
  id: "tizen"
}, {
  test: "webos|web0s",
  id: "webos"
}];
function mu(t) {
  return !!ye(hu, t).preset;
}
function kh(t) {
  var r = vu(t), e = !!/mobi/g.exec(r), n = {
    name: "unknown",
    version: "-1",
    majorVersion: -1,
    webview: mu(r),
    chromium: !1,
    chromiumVersion: "-1",
    webkit: !1,
    webkitVersion: "-1"
  }, i = {
    name: "unknown",
    version: "-1",
    majorVersion: -1
  }, a = ye(mi, r), o = a.preset, s = a.version, u = ye(gu, r), l = u.preset, f = u.version, c = ye(du, r);
  if (n.chromium = !!c.preset, n.chromiumVersion = c.version, !n.chromium) {
    var v = ye(yi, r);
    n.webkit = !!v.preset, n.webkitVersion = v.version;
  }
  return l && (i.name = l.id, i.version = f, i.majorVersion = parseInt(f, 10)), o && (n.name = o.id, n.version = s, n.webview && i.name === "ios" && n.name !== "safari" && (n.webview = !1)), n.majorVersion = parseInt(n.version, 10), {
    browser: n,
    os: i,
    isMobile: e,
    isHints: !1
  };
}
function Ah(t) {
  var r = navigator.userAgentData, e = (r.uaList || r.brands).slice(), n = t && t.fullVersionList, i = r.mobile || !1, a = e[0], o = (t && t.platform || r.platform || navigator.platform).toLowerCase(), s = {
    name: a.brand,
    version: a.version,
    majorVersion: -1,
    webkit: !1,
    webkitVersion: "-1",
    chromium: !1,
    chromiumVersion: "-1",
    webview: !!me(hu, e).brand || mu(vu())
  }, u = {
    name: "unknown",
    version: "-1",
    majorVersion: -1
  };
  s.webkit = !s.chromium && ca(yi, function(d) {
    return pu(e, d);
  });
  var l = me(du, e);
  if (s.chromium = !!l.brand, s.chromiumVersion = l.version, !s.chromium) {
    var f = me(yi, e);
    s.webkit = !!f.brand, s.webkitVersion = f.version;
  }
  var c = cu(gu, function(d) {
    return new RegExp("" + d.test, "g").exec(o);
  });
  if (u.name = c ? c.id : "", t && (u.version = t.platformVersion), n && n.length) {
    var v = me(mi, n);
    s.name = v.brand || s.name, s.version = v.version || s.version;
  } else {
    var p = me(mi, e);
    s.name = p.brand || s.name, s.version = p.brand && t ? t.uaFullVersion : p.version;
  }
  return s.webkit && (u.name = i ? "ios" : "mac"), u.name === "ios" && s.webview && (s.version = "-1"), u.version = gi(u.version), s.version = gi(s.version), u.majorVersion = parseInt(u.version, 10), s.majorVersion = parseInt(s.version, 10), {
    browser: s,
    os: u,
    isMobile: i,
    isHints: !0
  };
}
function Bh(t) {
  return typeof t == "undefined" && Oh() ? Ah() : kh(t);
}
function zh(t, r, e, n, i, a) {
  for (var o = 0; o < i; ++o) {
    var s = e + o * i, u = n + o * i;
    t[s] += t[u] * a, r[s] += r[u] * a;
  }
}
function Gh(t, r, e, n, i) {
  for (var a = 0; a < i; ++a) {
    var o = e + a * i, s = n + a * i, u = t[o], l = r[o];
    t[o] = t[s], t[s] = u, r[o] = r[s], r[s] = l;
  }
}
function Lh(t, r, e, n, i) {
  for (var a = 0; a < n; ++a) {
    var o = e + a * n;
    t[o] /= i, r[o] /= i;
  }
}
function yu(t, r, e) {
  e === void 0 && (e = Math.sqrt(t.length));
  for (var n = t.slice(), i = 0; i < e; ++i)
    n[i * e + r - 1] = 0, n[(r - 1) * e + i] = 0;
  return n[(r - 1) * (e + 1)] = 1, n;
}
function or(t, r) {
  r === void 0 && (r = Math.sqrt(t.length));
  for (var e = t.slice(), n = yt(r), i = 0; i < r; ++i) {
    var a = r * i + i;
    if (!et(e[a], Mt)) {
      for (var o = i + 1; o < r; ++o)
        if (e[r * i + o]) {
          Gh(e, n, i, o, r);
          break;
        }
    }
    if (!et(e[a], Mt))
      return [];
    Lh(e, n, i, r, e[a]);
    for (var o = 0; o < r; ++o) {
      var s = o, u = o + i * r, l = e[u];
      !et(l, Mt) || i === o || zh(e, n, s, i, r, -l);
    }
  }
  return n;
}
function Fh(t, r) {
  r === void 0 && (r = Math.sqrt(t.length));
  for (var e = [], n = 0; n < r; ++n)
    for (var i = 0; i < r; ++i)
      e[i * r + n] = t[r * n + i];
  return e;
}
function xu(t, r) {
  r === void 0 && (r = Math.sqrt(t.length));
  for (var e = [], n = t[r * r - 1], i = 0; i < r - 1; ++i)
    e[i] = t[r * (r - 1) + i] / n;
  return e[r - 1] = 0, e;
}
function Nh(t, r) {
  for (var e = yt(r), n = 0; n < r - 1; ++n)
    e[r * (r - 1) + n] = t[n] || 0;
  return e;
}
function Ar(t, r) {
  for (var e = t.slice(), n = t.length; n < r - 1; ++n)
    e[n] = 0;
  return e[r - 1] = 1, e;
}
function rr(t, r, e) {
  if (r === void 0 && (r = Math.sqrt(t.length)), r === e)
    return t;
  for (var n = yt(e), i = Math.min(r, e), a = 0; a < i - 1; ++a) {
    for (var o = 0; o < i - 1; ++o)
      n[a * e + o] = t[a * r + o];
    n[(a + 1) * e - 1] = t[(a + 1) * r - 1], n[(e - 1) * e + a] = t[(r - 1) * r + a];
  }
  return n[e * e - 1] = t[r * r - 1], n;
}
function dn(t) {
  for (var r = [], e = 1; e < arguments.length; e++)
    r[e - 1] = arguments[e];
  var n = yt(t);
  return r.forEach(function(i) {
    n = pt(n, i, t);
  }), n;
}
function pt(t, r, e) {
  e === void 0 && (e = Math.sqrt(t.length));
  var n = [], i = t.length / e, a = r.length / i;
  if (i) {
    if (!a)
      return t;
  } else
    return r;
  for (var o = 0; o < e; ++o)
    for (var s = 0; s < a; ++s) {
      n[s * e + o] = 0;
      for (var u = 0; u < i; ++u)
        n[s * e + o] += t[u * e + o] * r[s * i + u];
    }
  return n;
}
function lt(t, r) {
  for (var e = Math.min(t.length, r.length), n = t.slice(), i = 0; i < e; ++i)
    n[i] = n[i] + r[i];
  return n;
}
function tt(t, r) {
  for (var e = Math.min(t.length, r.length), n = t.slice(), i = 0; i < e; ++i)
    n[i] = n[i] - r[i];
  return n;
}
function $h(t, r) {
  return r === void 0 && (r = t.length === 6), r ? [t[0], t[1], 0, t[2], t[3], 0, t[4], t[5], 1] : t;
}
function bu(t, r) {
  return r === void 0 && (r = t.length === 9), r ? [t[0], t[1], t[3], t[4], t[6], t[7]] : t;
}
function kt(t, r, e) {
  e === void 0 && (e = r.length);
  var n = pt(t, r, e), i = n[e - 1];
  return n.map(function(a) {
    return a / i;
  });
}
function jh(t, r) {
  return pt(t, [1, 0, 0, 0, 0, Math.cos(r), Math.sin(r), 0, 0, -Math.sin(r), Math.cos(r), 0, 0, 0, 0, 1], 4);
}
function Yh(t, r) {
  return pt(t, [Math.cos(r), 0, -Math.sin(r), 0, 0, 1, 0, 0, Math.sin(r), 0, Math.cos(r), 0, 0, 0, 0, 1], 4);
}
function Hh(t, r) {
  return pt(t, Ye(r, 4));
}
function Ue(t, r) {
  var e = r[0], n = e === void 0 ? 1 : e, i = r[1], a = i === void 0 ? 1 : i, o = r[2], s = o === void 0 ? 1 : o;
  return pt(t, [n, 0, 0, 0, 0, a, 0, 0, 0, 0, s, 0, 0, 0, 0, 1], 4);
}
function je(t, r) {
  return kt(Ye(r, 3), Ar(t, 3));
}
function Un(t, r) {
  var e = r[0], n = e === void 0 ? 0 : e, i = r[1], a = i === void 0 ? 0 : i, o = r[2], s = o === void 0 ? 0 : o;
  return pt(t, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, n, a, s, 1], 4);
}
function Oo(t, r) {
  return pt(t, r, 4);
}
function Ye(t, r) {
  var e = Math.cos(t), n = Math.sin(t), i = yt(r);
  return i[0] = e, i[1] = n, i[r] = -n, i[r + 1] = e, i;
}
function yt(t) {
  for (var r = t * t, e = [], n = 0; n < r; ++n)
    e[n] = n % (t + 1) ? 0 : 1;
  return e;
}
function pa(t, r) {
  for (var e = yt(r), n = Math.min(t.length, r - 1), i = 0; i < n; ++i)
    e[(r + 1) * i] = t[i];
  return e;
}
function Br(t, r) {
  for (var e = yt(r), n = Math.min(t.length, r - 1), i = 0; i < n; ++i)
    e[r * (r - 1) + i] = t[i];
  return e;
}
function da(t, r, e, n, i, a, o, s) {
  var u = t[0], l = t[1], f = r[0], c = r[1], v = e[0], p = e[1], d = n[0], h = n[1], g = i[0], m = i[1], y = a[0], x = a[1], E = o[0], C = o[1], b = s[0], S = s[1], M = [u, 0, f, 0, v, 0, d, 0, l, 0, c, 0, p, 0, h, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, u, 0, f, 0, v, 0, d, 0, l, 0, c, 0, p, 0, h, 0, 1, 0, 1, 0, 1, 0, 1, -g * u, -m * u, -y * f, -x * f, -E * v, -C * v, -b * d, -S * d, -g * l, -m * l, -y * c, -x * c, -E * p, -C * p, -b * h, -S * h], P = or(M, 8);
  if (!P.length)
    return [];
  var D = pt(P, [g, m, y, x, E, C, b, S], 8);
  return D[8] = 1, rr(Fh(D), 3, 4);
}
var Se = function() {
  return Se = Object.assign || function(r) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
    }
    return r;
  }, Se.apply(this, arguments);
};
function Xh() {
  return [
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1
  ];
}
function Ie(t, r) {
  return r === void 0 && (r = 0), Wr(ne(t, r));
}
function Wh(t, r) {
  var e = kt(t, [r[0], r[1] || 0, r[2] || 0, 1], 4), n = e[3] || 1;
  return [
    e[0] / n,
    e[1] / n,
    e[2] / n
  ];
}
function Wr(t) {
  var r = Xh();
  return t.forEach(function(e) {
    var n = e.matrixFunction, i = e.functionValue;
    n && (r = n(r, i));
  }), r;
}
function ne(t, r) {
  r === void 0 && (r = 0);
  var e = _t(t) ? t : Er(t);
  return e.map(function(n) {
    var i = Vs(n), a = i.prefix, o = i.value, s = null, u = a, l = "";
    if (a === "translate" || a === "translateX" || a === "translate3d") {
      var f = tr(r) ? Se(Se({}, r), { "o%": r["%"] }) : {
        "%": r,
        "o%": r
      }, c = Ir(o).map(function(w, I) {
        return I === 0 && "x%" in f ? f["%"] = r["x%"] : I === 1 && "y%" in f ? f["%"] = r["y%"] : f["%"] = r["o%"], vt(w, f);
      }), v = c[0], p = c[1], d = p === void 0 ? 0 : p, h = c[2], g = h === void 0 ? 0 : h;
      s = Un, l = [v, d, g];
    } else if (a === "translateY") {
      var m = tr(r) ? Se({ "%": r["y%"] }, r) : {
        "%": r
      }, d = vt(o, m);
      s = Un, l = [0, d, 0];
    } else if (a === "translateZ") {
      var g = parseFloat(o);
      s = Un, l = [0, 0, g];
    } else if (a === "scale" || a === "scale3d") {
      var y = Ir(o).map(function(w) {
        return parseFloat(w);
      }), x = y[0], E = y[1], C = E === void 0 ? x : E, b = y[2], S = b === void 0 ? 1 : b;
      s = Ue, l = [x, C, S];
    } else if (a === "scaleX") {
      var x = parseFloat(o);
      s = Ue, l = [x, 1, 1];
    } else if (a === "scaleY") {
      var C = parseFloat(o);
      s = Ue, l = [1, C, 1];
    } else if (a === "scaleZ") {
      var S = parseFloat(o);
      s = Ue, l = [1, 1, S];
    } else if (a === "rotate" || a === "rotateZ" || a === "rotateX" || a === "rotateY") {
      var M = Le(o), P = M.unit, D = M.value, O = P === "rad" ? D : D * Math.PI / 180;
      a === "rotate" || a === "rotateZ" ? (u = "rotateZ", s = Hh) : a === "rotateX" ? s = jh : a === "rotateY" && (s = Yh), l = O;
    } else if (a === "matrix3d")
      s = Oo, l = Ir(o).map(function(w) {
        return parseFloat(w);
      });
    else if (a === "matrix") {
      var R = Ir(o).map(function(w) {
        return parseFloat(w);
      });
      s = Oo, l = [
        R[0],
        R[1],
        0,
        0,
        R[2],
        R[3],
        0,
        0,
        0,
        0,
        1,
        0,
        R[4],
        R[5],
        0,
        1
      ];
    } else
      u = "";
    return {
      name: a,
      functionName: u,
      value: o,
      matrixFunction: s,
      functionValue: l
    };
  });
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var xi = function(t, r) {
  return xi = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var i in n)
      n.hasOwnProperty(i) && (e[i] = n[i]);
  }, xi(t, r);
};
function Vh(t, r) {
  xi(t, r);
  function e() {
    this.constructor = t;
  }
  t.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
}
var Eu = typeof Map == "function" ? void 0 : function() {
  var t = 0;
  return function(r) {
    return r.__DIFF_KEY__ || (r.__DIFF_KEY__ = ++t);
  };
}(), qh = /* @__PURE__ */ function(t) {
  Vh(r, t);
  function r(e) {
    return e === void 0 && (e = []), t.call(this, e, Eu) || this;
  }
  return r;
}(vh);
function Uh(t, r) {
  return Fe(t, r, Eu);
}
const Su = qh;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var bi = function() {
  return bi = Object.assign || function(r) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
    }
    return r;
  }, bi.apply(this, arguments);
};
function Kh() {
  for (var t = 0, r = 0, e = arguments.length; r < e; r++)
    t += arguments[r].length;
  for (var n = Array(t), i = 0, r = 0; r < e; r++)
    for (var a = arguments[r], o = 0, s = a.length; o < s; o++, i++)
      n[i] = a[o];
  return n;
}
var Zh = /* @__PURE__ */ function() {
  function t() {
    this._events = {};
  }
  var r = t.prototype;
  return r.on = function(e, n) {
    if (tr(e))
      for (var i in e)
        this.on(i, e[i]);
    else
      this._addEvent(e, n, {});
    return this;
  }, r.off = function(e, n) {
    if (!e)
      this._events = {};
    else if (tr(e))
      for (var i in e)
        this.off(i);
    else if (!n)
      this._events[e] = [];
    else {
      var a = this._events[e];
      if (a) {
        var o = cr(a, function(s) {
          return s.listener === n;
        });
        o > -1 && a.splice(o, 1);
      }
    }
    return this;
  }, r.once = function(e, n) {
    var i = this;
    return n && this._addEvent(e, n, {
      once: !0
    }), new Promise(function(a) {
      i._addEvent(e, a, {
        once: !0
      });
    });
  }, r.emit = function(e, n) {
    var i = this;
    n === void 0 && (n = {});
    var a = this._events[e];
    if (!e || !a)
      return !0;
    var o = !1;
    return n.eventType = e, n.stop = function() {
      o = !0;
    }, n.currentTarget = this, Kh(a).forEach(function(s) {
      s.listener(n), s.once && i.off(e, s.listener);
    }), !o;
  }, r.trigger = function(e, n) {
    return n === void 0 && (n = {}), this.emit(e, n);
  }, r._addEvent = function(e, n, i) {
    var a = this._events;
    a[e] = a[e] || [];
    var o = a[e];
    o.push(bi({
      listener: n
    }, i));
  }, t;
}();
const wn = Zh;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Ei = function(t, r) {
  return Ei = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var i in n)
      n.hasOwnProperty(i) && (e[i] = n[i]);
  }, Ei(t, r);
};
function Jh(t, r) {
  Ei(t, r);
  function e() {
    this.constructor = t;
  }
  t.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
}
var Vr = function() {
  return Vr = Object.assign || function(r) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
    }
    return r;
  }, Vr.apply(this, arguments);
};
function Qh(t) {
  var r = t.container;
  return r === document.body ? [r.scrollLeft || document.documentElement.scrollLeft, r.scrollTop || document.documentElement.scrollTop] : [r.scrollLeft, r.scrollTop];
}
function Io(t, r) {
  return t.addEventListener("scroll", r), function() {
    t.removeEventListener("scroll", r);
  };
}
function Ke(t) {
  if (t) {
    if ($t(t))
      return document.querySelector(t);
  } else
    return null;
  if (na(t))
    return t();
  if (t instanceof Element)
    return t;
  if ("current" in t)
    return t.current;
  if ("value" in t)
    return t.value;
}
var tg = /* @__PURE__ */ function(t) {
  Jh(r, t);
  function r() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n._startRect = null, n._startPos = [], n._prevTime = 0, n._timer = 0, n._prevScrollPos = [0, 0], n._isWait = !1, n._flag = !1, n._currentOptions = null, n._lock = !1, n._unregister = null, n._onScroll = function() {
      var i = n._currentOptions;
      n._lock || !i || n.emit("scrollDrag", {
        next: function(a) {
          n.checkScroll({
            container: i.container,
            inputEvent: a
          });
        }
      });
    }, n;
  }
  var e = r.prototype;
  return e.dragStart = function(n, i) {
    var a = Ke(i.container);
    if (!a) {
      this._flag = !1;
      return;
    }
    var o = 0, s = 0, u = 0, l = 0;
    if (a === document.body)
      u = window.innerWidth, l = window.innerHeight;
    else {
      var f = a.getBoundingClientRect();
      o = f.top, s = f.left, u = f.width, l = f.height;
    }
    this._flag = !0, this._startPos = [n.clientX, n.clientY], this._startRect = {
      top: o,
      left: s,
      width: u,
      height: l
    }, this._prevScrollPos = this._getScrollPosition([0, 0], i), this._currentOptions = i, this._registerScrollEvent(i);
  }, e.drag = function(n, i) {
    if (clearTimeout(this._timer), !!this._flag) {
      var a = n.clientX, o = n.clientY, s = i.threshold, u = s === void 0 ? 0 : s, l = this, f = l._startRect, c = l._startPos;
      this._currentOptions = i;
      var v = [0, 0];
      return f.top > o - u ? (c[1] > f.top || o < c[1]) && (v[1] = -1) : f.top + f.height < o + u && (c[1] < f.top + f.height || o > c[1]) && (v[1] = 1), f.left > a - u ? (c[0] > f.left || a < c[0]) && (v[0] = -1) : f.left + f.width < a + u && (c[0] < f.left + f.width || a > c[0]) && (v[0] = 1), !v[0] && !v[1] ? !1 : this._continueDrag(Vr(Vr({}, i), {
        direction: v,
        inputEvent: n,
        isDrag: !0
      }));
    }
  }, e.checkScroll = function(n) {
    var i = this;
    if (this._isWait)
      return !1;
    var a = n.prevScrollPos, o = a === void 0 ? this._prevScrollPos : a, s = n.direction, u = n.throttleTime, l = u === void 0 ? 0 : u, f = n.inputEvent, c = n.isDrag, v = this._getScrollPosition(s || [0, 0], n), p = v[0] - o[0], d = v[1] - o[1], h = s || [p ? Math.abs(p) / p : 0, d ? Math.abs(d) / d : 0];
    return this._prevScrollPos = v, this._lock = !1, !p && !d ? !1 : (this.emit("move", {
      offsetX: h[0] ? p : 0,
      offsetY: h[1] ? d : 0,
      inputEvent: f
    }), l && c && (clearTimeout(this._timer), this._timer = window.setTimeout(function() {
      i._continueDrag(n);
    }, l)), !0);
  }, e.dragEnd = function() {
    this._flag = !1, this._lock = !1, clearTimeout(this._timer), this._unregisterScrollEvent();
  }, e._getScrollPosition = function(n, i) {
    var a = i.container, o = i.getScrollPosition, s = o === void 0 ? Qh : o;
    return s({
      container: Ke(a),
      direction: n
    });
  }, e._continueDrag = function(n) {
    var i = this, a, o = n.container, s = n.direction, u = n.throttleTime, l = n.useScroll, f = n.isDrag, c = n.inputEvent;
    if (!(!this._flag || f && this._isWait)) {
      var v = Re(), p = Math.max(u + this._prevTime - v, 0);
      if (p > 0)
        return clearTimeout(this._timer), this._timer = window.setTimeout(function() {
          i._continueDrag(n);
        }, p), !1;
      this._prevTime = v;
      var d = this._getScrollPosition(s, n);
      this._prevScrollPos = d, f && (this._isWait = !0), l || (this._lock = !0);
      var h = {
        container: Ke(o),
        direction: s,
        inputEvent: c
      };
      return (a = n.requestScroll) === null || a === void 0 || a.call(n, h), this.emit("scroll", h), this._isWait = !1, l || this.checkScroll(Vr(Vr({}, n), {
        prevScrollPos: d,
        direction: s,
        inputEvent: c
      }));
    }
  }, e._registerScrollEvent = function(n) {
    this._unregisterScrollEvent();
    var i = n.checkScrollEvent;
    if (i) {
      var a = i === !0 ? Io : i, o = Ke(n.container);
      i === !0 && (o === document.body || o === document.documentElement) ? this._unregister = Io(window, this._onScroll) : this._unregister = a(o, this._onScroll);
    }
  }, e._unregisterScrollEvent = function() {
    var n;
    (n = this._unregister) === null || n === void 0 || n.call(this), this._unregister = null;
  }, r;
}(wn);
const rg = tg;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function eg() {
  for (var t = 0, r = 0, e = arguments.length; r < e; r++)
    t += arguments[r].length;
  for (var n = Array(t), i = 0, r = 0; r < e; r++)
    for (var a = arguments[r], o = 0, s = a.length; o < s; o++, i++)
      n[i] = a[o];
  return n;
}
function Nt(t) {
  return et(t, Mt);
}
function ng(t, r) {
  return t.every(function(e, n) {
    return Nt(e - r[n]) === 0;
  });
}
function ig(t, r) {
  return !Nt(t[0] - r[0]) && !Nt(t[1] - r[1]);
}
function Cu(t) {
  return t.length < 3 ? 0 : Math.abs(eh(t.map(function(r, e) {
    var n = t[e + 1] || t[0];
    return r[0] * n[1] - n[0] * r[1];
  }))) / 2;
}
function ko(t, r) {
  var e = r.width, n = r.height, i = r.left, a = r.top, o = zr(t), s = o.minX, u = o.minY, l = o.maxX, f = o.maxY, c = e / (l - s), v = n / (f - u);
  return t.map(function(p) {
    return [i + (p[0] - s) * c, a + (p[1] - u) * v];
  });
}
function zr(t) {
  var r = t.map(function(n) {
    return n[0];
  }), e = t.map(function(n) {
    return n[1];
  });
  return {
    minX: Math.min.apply(Math, r),
    minY: Math.min.apply(Math, e),
    maxX: Math.max.apply(Math, r),
    maxY: Math.max.apply(Math, e)
  };
}
function Si(t, r, e) {
  var n = t[0], i = t[1], a = zr(r), o = a.minX, s = a.maxX, u = [[o, i], [s, i]], l = hn(u[0], u[1]), f = Ci(r), c = [];
  if (f.forEach(function(d) {
    var h = hn(d[0], d[1]), g = d[0];
    if (ng(l, h))
      c.push({
        pos: t,
        line: d,
        type: "line"
      });
    else {
      var m = Mu(ha(l, h), [u, d]);
      m.forEach(function(y) {
        d.some(function(x) {
          return ig(x, y);
        }) ? c.push({
          pos: y,
          line: d,
          type: "point"
        }) : Nt(g[1] - i) !== 0 && c.push({
          pos: y,
          line: d,
          type: "intersection"
        });
      });
    }
  }), !e && jt(c, function(d) {
    return d[0] === n;
  }))
    return !0;
  var v = 0, p = {};
  return c.forEach(function(d) {
    var h = d.pos, g = d.type, m = d.line;
    if (!(h[0] > n))
      if (g === "intersection")
        ++v;
      else {
        if (g === "line")
          return;
        if (g === "point") {
          var y = jt(m, function(C) {
            return C[1] !== i;
          }), x = p[h[0]], E = y[1] > i ? 1 : -1;
          x ? x !== E && ++v : p[h[0]] = E;
        }
      }
  }), v % 2 === 1;
}
function hn(t, r) {
  var e = t[0], n = t[1], i = r[0], a = r[1], o = i - e, s = a - n;
  Math.abs(o) < Mt && (o = 0), Math.abs(s) < Mt && (s = 0);
  var u = 0, l = 0, f = 0;
  return o ? s ? (u = -s / o, l = 1, f = -u * e - n) : (l = 1, f = -n) : s && (u = -1, f = e), [u, l, f];
}
function ha(t, r) {
  var e = t[0], n = t[1], i = t[2], a = r[0], o = r[1], s = r[2], u = e === 0 && a === 0, l = n === 0 && o === 0, f = [];
  if (u && l)
    return [];
  if (u) {
    var c = -i / n, v = -s / o;
    return c !== v ? [] : [[-1 / 0, c], [1 / 0, c]];
  } else if (l) {
    var p = -i / e, d = -s / a;
    return p !== d ? [] : [[p, -1 / 0], [p, 1 / 0]];
  } else if (e === 0) {
    var h = -i / n, g = -(o * h + s) / a;
    f = [[g, h]];
  } else if (a === 0) {
    var h = -s / o, g = -(n * h + i) / e;
    f = [[g, h]];
  } else if (n === 0) {
    var g = -i / e, h = -(a * g + s) / o;
    f = [[g, h]];
  } else if (o === 0) {
    var g = -s / a, h = -(e * g + i) / n;
    f = [[g, h]];
  } else {
    var g = (n * s - o * i) / (o * e - n * a), h = -(e * g + i) / n;
    f = [[g, h]];
  }
  return f.map(function(m) {
    return [m[0], m[1]];
  });
}
function Mu(t, r) {
  var e = r.map(function(c) {
    return [0, 1].map(function(v) {
      return [Math.min(c[0][v], c[1][v]), Math.max(c[0][v], c[1][v])];
    });
  }), n = [];
  if (t.length === 2) {
    var i = t[0], a = i[0], o = i[1];
    if (Nt(a - t[1][0])) {
      if (!Nt(o - t[1][1])) {
        var l = Math.max.apply(Math, e.map(function(c) {
          return c[0][0];
        })), f = Math.min.apply(Math, e.map(function(c) {
          return c[0][1];
        }));
        if (Nt(l - f) > 0)
          return [];
        n = [[l, o], [f, o]];
      }
    } else {
      var s = Math.max.apply(Math, e.map(function(c) {
        return c[1][0];
      })), u = Math.min.apply(Math, e.map(function(c) {
        return c[1][1];
      }));
      if (Nt(s - u) > 0)
        return [];
      n = [[a, s], [a, u]];
    }
  }
  return n.length || (n = t.filter(function(c) {
    var v = c[0], p = c[1];
    return e.every(function(d) {
      return 0 <= Nt(v - d[0][0]) && 0 <= Nt(d[0][1] - v) && 0 <= Nt(p - d[1][0]) && 0 <= Nt(d[1][1] - p);
    });
  })), n.map(function(c) {
    return [Nt(c[0]), Nt(c[1])];
  });
}
function Ci(t) {
  return eg(t.slice(1), [t[0]]).map(function(r, e) {
    return [t[e], r];
  });
}
function ag(t, r) {
  var e = t.slice(), n = r.slice();
  Co(e) === -1 && e.reverse(), Co(n) === -1 && n.reverse();
  var i = Ci(e), a = Ci(n), o = i.map(function(f) {
    return hn(f[0], f[1]);
  }), s = a.map(function(f) {
    return hn(f[0], f[1]);
  }), u = [];
  o.forEach(function(f, c) {
    var v = i[c], p = [];
    s.forEach(function(d, h) {
      var g = ha(f, d), m = Mu(g, [v, a[h]]);
      p.push.apply(p, m.map(function(y) {
        return {
          index1: c,
          index2: h,
          pos: y,
          type: "intersection"
        };
      }));
    }), p.sort(function(d, h) {
      return lr(v[0], d.pos) - lr(v[0], h.pos);
    }), u.push.apply(u, p), Si(v[1], n) && u.push({
      index1: c,
      index2: -1,
      pos: v[1],
      type: "inside"
    });
  }), a.forEach(function(f, c) {
    if (Si(f[1], e)) {
      var v = !1, p = cr(u, function(d) {
        var h = d.index2;
        return h === c ? (v = !0, !1) : !!v;
      });
      p === -1 && (v = !1, p = cr(u, function(d) {
        var h = d.index1, g = d.index2;
        return h === -1 && g + 1 === c ? (v = !0, !1) : !!v;
      })), p === -1 ? u.push({
        index1: -1,
        index2: c,
        pos: f[1],
        type: "inside"
      }) : u.splice(p, 0, {
        index1: -1,
        index2: c,
        pos: f[1],
        type: "inside"
      });
    }
  });
  var l = {};
  return u.filter(function(f) {
    var c = f.pos, v = c[0] + "x" + c[1];
    return l[v] ? !1 : (l[v] = !0, !0);
  });
}
function og(t, r) {
  var e = ag(t, r);
  return e.map(function(n) {
    var i = n.pos;
    return i;
  });
}
function sg(t, r) {
  var e = og(t, r);
  return Cu(e);
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Mi = function(t, r) {
  return Mi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var i in n)
      n.hasOwnProperty(i) && (e[i] = n[i]);
  }, Mi(t, r);
};
function ug(t, r) {
  Mi(t, r);
  function e() {
    this.constructor = t;
  }
  t.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
}
var Ct = function() {
  return Ct = Object.assign || function(r) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
    }
    return r;
  }, Ct.apply(this, arguments);
};
function lg(t, r) {
  var e = r[0] - t[0], n = r[1] - t[1], i = Math.atan2(n, e);
  return i >= 0 ? i : i + Math.PI * 2;
}
function Kn(t) {
  return lg([
    t[0].clientX,
    t[0].clientY
  ], [
    t[1].clientX,
    t[1].clientY
  ]) / Math.PI * 180;
}
function fg(t) {
  return t.touches && t.touches.length >= 2;
}
function Ze(t) {
  return t ? t.touches ? vg(t.touches) : [_u(t)] : [];
}
function cg(t) {
  return t && (t.type.indexOf("mouse") > -1 || "button" in t);
}
function Ao(t, r, e) {
  var n = e.length, i = Ce(t, n), a = i.clientX, o = i.clientY, s = i.originalClientX, u = i.originalClientY, l = Ce(r, n), f = l.clientX, c = l.clientY, v = Ce(e, n), p = v.clientX, d = v.clientY, h = a - f, g = o - c, m = a - p, y = o - d;
  return {
    clientX: s,
    clientY: u,
    deltaX: h,
    deltaY: g,
    distX: m,
    distY: y
  };
}
function Zn(t) {
  return Math.sqrt(Math.pow(t[0].clientX - t[1].clientX, 2) + Math.pow(t[0].clientY - t[1].clientY, 2));
}
function vg(t) {
  for (var r = Math.min(t.length, 2), e = [], n = 0; n < r; ++n)
    e.push(_u(t[n]));
  return e;
}
function _u(t) {
  return {
    clientX: t.clientX,
    clientY: t.clientY
  };
}
function Ce(t, r) {
  r === void 0 && (r = t.length);
  for (var e = {
    clientX: 0,
    clientY: 0,
    originalClientX: 0,
    originalClientY: 0
  }, n = Math.min(t.length, r), i = 0; i < n; ++i) {
    var a = t[i];
    e.originalClientX += "originalClientX" in a ? a.originalClientX : a.clientX, e.originalClientY += "originalClientY" in a ? a.originalClientY : a.clientY, e.clientX += a.clientX, e.clientY += a.clientY;
  }
  return r ? {
    clientX: e.clientX / r,
    clientY: e.clientY / r,
    originalClientX: e.originalClientX / r,
    originalClientY: e.originalClientY / r
  } : e;
}
var Jn = /* @__PURE__ */ function() {
  function t(r) {
    this.prevClients = [], this.startClients = [], this.movement = 0, this.length = 0, this.startClients = r, this.prevClients = r, this.length = r.length;
  }
  return t.prototype.getAngle = function(r) {
    return r === void 0 && (r = this.prevClients), Kn(r);
  }, t.prototype.getRotation = function(r) {
    return r === void 0 && (r = this.prevClients), Kn(r) - Kn(this.startClients);
  }, t.prototype.getPosition = function(r, e) {
    r === void 0 && (r = this.prevClients);
    var n = Ao(r || this.prevClients, this.prevClients, this.startClients), i = n.deltaX, a = n.deltaY;
    return this.movement += Math.sqrt(i * i + a * a), this.prevClients = r, n;
  }, t.prototype.getPositions = function(r) {
    r === void 0 && (r = this.prevClients);
    for (var e = this.prevClients, n = this.startClients, i = Math.min(this.length, e.length), a = [], o = 0; o < i; ++o)
      a[o] = Ao([r[o]], [e[o]], [n[o]]);
    return a;
  }, t.prototype.getMovement = function(r) {
    var e = this.movement;
    if (!r)
      return e;
    var n = Ce(r, this.length), i = Ce(this.prevClients, this.length), a = n.clientX - i.clientX, o = n.clientY - i.clientY;
    return Math.sqrt(a * a + o * o) + e;
  }, t.prototype.getDistance = function(r) {
    return r === void 0 && (r = this.prevClients), Zn(r);
  }, t.prototype.getScale = function(r) {
    return r === void 0 && (r = this.prevClients), Zn(r) / Zn(this.startClients);
  }, t.prototype.move = function(r, e) {
    this.startClients.forEach(function(n) {
      n.clientX -= r, n.clientY -= e;
    }), this.prevClients.forEach(function(n) {
      n.clientX -= r, n.clientY -= e;
    });
  }, t;
}(), Bo = ["textarea", "input"], pg = /* @__PURE__ */ function(t) {
  ug(r, t);
  function r(e, n) {
    n === void 0 && (n = {});
    var i = t.call(this) || this;
    i.options = {}, i.flag = !1, i.pinchFlag = !1, i.data = {}, i.isDrag = !1, i.isPinch = !1, i.clientStores = [], i.targets = [], i.prevTime = 0, i.doubleFlag = !1, i._useMouse = !1, i._useTouch = !1, i._useDrag = !1, i._dragFlag = !1, i._isTrusted = !1, i._isMouseEvent = !1, i._isSecondaryButton = !1, i._preventMouseEvent = !1, i._prevInputEvent = null, i._isDragAPI = !1, i._isIdle = !0, i._preventMouseEventId = 0, i._window = window, i.onDragStart = function(v, p) {
      if (p === void 0 && (p = !0), !(!i.flag && v.cancelable === !1)) {
        var d = v.type.indexOf("drag") >= -1;
        if (!(i.flag && d)) {
          i._isDragAPI = !0;
          var h = i.options, g = h.container, m = h.pinchOutside, y = h.preventWheelClick, x = h.preventRightClick, E = h.preventDefault, C = h.checkInput, b = h.dragFocusedInput, S = h.preventClickEventOnDragStart, M = h.preventClickEventOnDrag, P = h.preventClickEventByCondition, D = i._useTouch, O = !i.flag;
          if (i._isSecondaryButton = v.which === 3 || v.button === 2, y && (v.which === 2 || v.button === 1) || x && (v.which === 3 || v.button === 2))
            return i.stop(), !1;
          if (O) {
            var R = i._window.document.activeElement, w = v.target;
            if (w) {
              var I = w.tagName.toLowerCase(), k = Bo.indexOf(I) > -1, F = w.isContentEditable;
              if (k || F) {
                if (C || !b && R === w)
                  return !1;
                if (R && (R === w || F && R.isContentEditable && R.contains(w)))
                  if (b)
                    w.blur();
                  else
                    return !1;
              } else if ((E || v.type === "touchstart") && R) {
                var L = R.tagName.toLowerCase();
                (R.isContentEditable || Bo.indexOf(L) > -1) && R.blur();
              }
              (S || M || P) && Ot(i._window, "click", i._onClick, !0);
            }
            i.clientStores = [new Jn(Ze(v))], i._isIdle = !1, i.flag = !0, i.isDrag = !1, i._isTrusted = p, i._dragFlag = !0, i._prevInputEvent = v, i.data = {}, i.doubleFlag = Re() - i.prevTime < 200, i._isMouseEvent = cg(v), !i._isMouseEvent && i._preventMouseEvent && i._allowMouseEvent();
            var B = i._preventMouseEvent || i.emit("dragStart", Ct(Ct({ data: i.data, datas: i.data, inputEvent: v, isMouseEvent: i._isMouseEvent, isSecondaryButton: i._isSecondaryButton, isTrusted: p, isDouble: i.doubleFlag }, i.getCurrentStore().getPosition()), { preventDefault: function() {
              v.preventDefault();
            }, preventDrag: function() {
              i._dragFlag = !1;
            } }));
            B === !1 && i.stop(), i._isMouseEvent && i.flag && E && v.preventDefault();
          }
          if (!i.flag)
            return !1;
          var $ = 0;
          if (O ? (i._attchDragEvent(), D && m && ($ = setTimeout(function() {
            Ot(g, "touchstart", i.onDragStart, {
              passive: !1
            });
          }))) : D && m && Tt(g, "touchstart", i.onDragStart), i.flag && fg(v)) {
            if (clearTimeout($), O && v.touches.length !== v.changedTouches.length)
              return;
            i.pinchFlag || i.onPinchStart(v);
          }
        }
      }
    }, i.onDrag = function(v, p) {
      if (i.flag) {
        var d = i.options.preventDefault;
        !i._isMouseEvent && d && v.preventDefault(), i._prevInputEvent = v;
        var h = Ze(v), g = i.moveClients(h, v, !1);
        if (i._dragFlag) {
          if (i.pinchFlag || g.deltaX || g.deltaY) {
            var m = i._preventMouseEvent || i.emit("drag", Ct(Ct({}, g), { isScroll: !!p, inputEvent: v }));
            if (m === !1) {
              i.stop();
              return;
            }
          }
          i.pinchFlag && i.onPinch(v, h);
        }
        i.getCurrentStore().getPosition(h, !0);
      }
    }, i.onDragEnd = function(v) {
      if (i.flag) {
        var p = i.options, d = p.pinchOutside, h = p.container, g = p.preventClickEventOnDrag, m = p.preventClickEventOnDragStart, y = p.preventClickEventByCondition, x = i.isDrag;
        (g || m || y) && requestAnimationFrame(function() {
          i._allowClickEvent();
        }), !y && !m && g && !x && i._allowClickEvent(), i._useTouch && d && Tt(h, "touchstart", i.onDragStart), i.pinchFlag && i.onPinchEnd(v);
        var E = v != null && v.touches ? Ze(v) : [], C = E.length;
        C === 0 || !i.options.keepDragging ? i.flag = !1 : i._addStore(new Jn(E));
        var b = i._getPosition(), S = Re(), M = !x && i.doubleFlag;
        i._prevInputEvent = null, i.prevTime = x || M ? 0 : S, i.flag || (i._dettachDragEvent(), i._preventMouseEvent || i.emit("dragEnd", Ct({ data: i.data, datas: i.data, isDouble: M, isDrag: x, isClick: !x, isMouseEvent: i._isMouseEvent, isSecondaryButton: i._isSecondaryButton, inputEvent: v, isTrusted: i._isTrusted }, b)), i.clientStores = [], i._isMouseEvent || (i._preventMouseEvent = !0, clearTimeout(i._preventMouseEventId), i._preventMouseEventId = setTimeout(function() {
          i._preventMouseEvent = !1;
        }, 200)), i._isIdle = !0);
      }
    }, i.onBlur = function() {
      i.onDragEnd();
    }, i._allowClickEvent = function() {
      Tt(i._window, "click", i._onClick, !0);
    }, i._onClick = function(v) {
      i._allowClickEvent(), i._allowMouseEvent();
      var p = i.options.preventClickEventByCondition;
      p != null && p(v) || (v.stopPropagation(), v.preventDefault());
    }, i._onContextMenu = function(v) {
      var p = i.options;
      p.preventRightClick ? i.onDragEnd(v) : v.preventDefault();
    }, i._passCallback = function() {
    };
    var a = [].concat(e), o = a[0];
    i._window = Qs(o) ? o : br(o), i.options = Ct({ checkInput: !1, container: o && !("document" in o) ? br(o) : o, preventRightClick: !0, preventWheelClick: !0, preventClickEventOnDragStart: !1, preventClickEventOnDrag: !1, preventClickEventByCondition: null, preventDefault: !0, checkWindowBlur: !1, keepDragging: !1, pinchThreshold: 0, events: ["touch", "mouse"] }, n);
    var s = i.options, u = s.container, l = s.events, f = s.checkWindowBlur;
    if (i._useDrag = l.indexOf("drag") > -1, i._useTouch = l.indexOf("touch") > -1, i._useMouse = l.indexOf("mouse") > -1, i.targets = a, i._useDrag && a.forEach(function(v) {
      Ot(v, "dragstart", i.onDragStart);
    }), i._useMouse && (a.forEach(function(v) {
      Ot(v, "mousedown", i.onDragStart), Ot(v, "mousemove", i._passCallback);
    }), Ot(u, "contextmenu", i._onContextMenu)), f && Ot(br(), "blur", i.onBlur), i._useTouch) {
      var c = {
        passive: !1
      };
      a.forEach(function(v) {
        Ot(v, "touchstart", i.onDragStart, c), Ot(v, "touchmove", i._passCallback, c);
      });
    }
    return i;
  }
  return r.prototype.stop = function() {
    this.isDrag = !1, this.data = {}, this.clientStores = [], this.pinchFlag = !1, this.doubleFlag = !1, this.prevTime = 0, this.flag = !1, this._isIdle = !0, this._allowClickEvent(), this._dettachDragEvent(), this._isDragAPI = !1;
  }, r.prototype.getMovement = function(e) {
    return this.getCurrentStore().getMovement(e) + this.clientStores.slice(1).reduce(function(n, i) {
      return n + i.movement;
    }, 0);
  }, r.prototype.isDragging = function() {
    return this.isDrag;
  }, r.prototype.isIdle = function() {
    return this._isIdle;
  }, r.prototype.isFlag = function() {
    return this.flag;
  }, r.prototype.isPinchFlag = function() {
    return this.pinchFlag;
  }, r.prototype.isDoubleFlag = function() {
    return this.doubleFlag;
  }, r.prototype.isPinching = function() {
    return this.isPinch;
  }, r.prototype.scrollBy = function(e, n, i, a) {
    a === void 0 && (a = !0), this.flag && (this.clientStores[0].move(e, n), a && this.onDrag(i, !0));
  }, r.prototype.move = function(e, n) {
    var i = e[0], a = e[1], o = this.getCurrentStore(), s = o.prevClients;
    return this.moveClients(s.map(function(u) {
      var l = u.clientX, f = u.clientY;
      return {
        clientX: l + i,
        clientY: f + a,
        originalClientX: l,
        originalClientY: f
      };
    }), n, !0);
  }, r.prototype.triggerDragStart = function(e) {
    this.onDragStart(e, !1);
  }, r.prototype.setEventData = function(e) {
    var n = this.data;
    for (var i in e)
      n[i] = e[i];
    return this;
  }, r.prototype.setEventDatas = function(e) {
    return this.setEventData(e);
  }, r.prototype.getCurrentEvent = function(e) {
    return e === void 0 && (e = this._prevInputEvent), Ct(Ct({ data: this.data, datas: this.data }, this._getPosition()), { movement: this.getMovement(), isDrag: this.isDrag, isPinch: this.isPinch, isScroll: !1, inputEvent: e });
  }, r.prototype.getEventData = function() {
    return this.data;
  }, r.prototype.getEventDatas = function() {
    return this.data;
  }, r.prototype.unset = function() {
    var e = this, n = this.targets, i = this.options.container;
    this.off(), Tt(this._window, "blur", this.onBlur), this._useDrag && n.forEach(function(a) {
      Tt(a, "dragstart", e.onDragStart);
    }), this._useMouse && (n.forEach(function(a) {
      Tt(a, "mousedown", e.onDragStart);
    }), Tt(i, "contextmenu", this._onContextMenu)), this._useTouch && (n.forEach(function(a) {
      Tt(a, "touchstart", e.onDragStart);
    }), Tt(i, "touchstart", this.onDragStart)), this._prevInputEvent = null, this._allowClickEvent(), this._dettachDragEvent();
  }, r.prototype.onPinchStart = function(e) {
    var n = this, i = this.options.pinchThreshold;
    if (!(this.isDrag && this.getMovement() > i)) {
      var a = new Jn(Ze(e));
      this.pinchFlag = !0, this._addStore(a);
      var o = this.emit("pinchStart", Ct(Ct({ data: this.data, datas: this.data, angle: a.getAngle(), touches: this.getCurrentStore().getPositions() }, a.getPosition()), { inputEvent: e, isTrusted: this._isTrusted, preventDefault: function() {
        e.preventDefault();
      }, preventDrag: function() {
        n._dragFlag = !1;
      } }));
      o === !1 && (this.pinchFlag = !1);
    }
  }, r.prototype.onPinch = function(e, n) {
    if (!(!this.flag || !this.pinchFlag || n.length < 2)) {
      var i = this.getCurrentStore();
      this.isPinch = !0, this.emit("pinch", Ct(Ct({ data: this.data, datas: this.data, movement: this.getMovement(n), angle: i.getAngle(n), rotation: i.getRotation(n), touches: i.getPositions(n), scale: i.getScale(n), distance: i.getDistance(n) }, i.getPosition(n)), { inputEvent: e, isTrusted: this._isTrusted }));
    }
  }, r.prototype.onPinchEnd = function(e) {
    if (this.pinchFlag) {
      var n = this.isPinch;
      this.isPinch = !1, this.pinchFlag = !1;
      var i = this.getCurrentStore();
      this.emit("pinchEnd", Ct(Ct({ data: this.data, datas: this.data, isPinch: n, touches: i.getPositions() }, i.getPosition()), { inputEvent: e }));
    }
  }, r.prototype.getCurrentStore = function() {
    return this.clientStores[0];
  }, r.prototype.moveClients = function(e, n, i) {
    var a = this._getPosition(e, i), o = this.isDrag;
    (a.deltaX || a.deltaY) && (this.isDrag = !0);
    var s = !1;
    return !o && this.isDrag && (s = !0), Ct(Ct({ data: this.data, datas: this.data }, a), { movement: this.getMovement(e), isDrag: this.isDrag, isPinch: this.isPinch, isScroll: !1, isMouseEvent: this._isMouseEvent, isSecondaryButton: this._isSecondaryButton, inputEvent: n, isTrusted: this._isTrusted, isFirstDrag: s });
  }, r.prototype._addStore = function(e) {
    this.clientStores.splice(0, 0, e);
  }, r.prototype._getPosition = function(e, n) {
    var i = this.getCurrentStore(), a = i.getPosition(e, n), o = this.clientStores.slice(1).reduce(function(l, f) {
      var c = f.getPosition();
      return l.distX += c.distX, l.distY += c.distY, l;
    }, a), s = o.distX, u = o.distY;
    return Ct(Ct({}, a), { distX: s, distY: u });
  }, r.prototype._attchDragEvent = function() {
    var e = this._window, n = this.options.container, i = {
      passive: !1
    };
    this._isDragAPI && (Ot(n, "dragover", this.onDrag, i), Ot(e, "dragend", this.onDragEnd)), this._useMouse && (Ot(n, "mousemove", this.onDrag), Ot(e, "mouseup", this.onDragEnd)), this._useTouch && (Ot(n, "touchmove", this.onDrag, i), Ot(e, "touchend", this.onDragEnd, i), Ot(e, "touchcancel", this.onDragEnd, i));
  }, r.prototype._dettachDragEvent = function() {
    var e = this._window, n = this.options.container;
    this._isDragAPI && (Tt(n, "dragover", this.onDrag), Tt(e, "dragend", this.onDragEnd)), this._useMouse && (Tt(n, "mousemove", this.onDrag), Tt(e, "mouseup", this.onDragEnd)), this._useTouch && (Tt(n, "touchstart", this.onDragStart), Tt(n, "touchmove", this.onDrag), Tt(e, "touchend", this.onDragEnd), Tt(e, "touchcancel", this.onDragEnd));
  }, r.prototype._allowMouseEvent = function() {
    this._preventMouseEvent = !1, clearTimeout(this._preventMouseEventId);
  }, r;
}(wn);
function dg(t) {
  for (var r = 5381, e = t.length; e; )
    r = r * 33 ^ t.charCodeAt(--e);
  return r >>> 0;
}
var hg = dg;
function gg(t) {
  return hg(t).toString(36);
}
function mg(t) {
  if (t && t.getRootNode) {
    var r = t.getRootNode();
    if (r.nodeType === 11)
      return r;
  }
}
function yg(t, r, e) {
  return e.original ? r : r.replace(/([^};{\s}][^};{]*|^\s*){/mg, function(n, i) {
    var a = i.trim();
    return (a ? Ir(a) : [""]).map(function(o) {
      var s = o.trim();
      return s.indexOf("@") === 0 ? s : s.indexOf(":global") > -1 ? s.replace(/\:global/g, "") : s.indexOf(":host") > -1 ? "".concat(s.replace(/\:host/g, ".".concat(t))) : s ? ".".concat(t, " ").concat(s) : ".".concat(t);
    }).join(", ") + " {";
  });
}
function xg(t, r, e, n, i) {
  var a = fe(n), o = a.createElement("style");
  return o.setAttribute("type", "text/css"), o.setAttribute("data-styled-id", t), o.setAttribute("data-styled-count", "1"), e.nonce && o.setAttribute("nonce", e.nonce), o.innerHTML = yg(t, r, e), (i || a.head || a.body).appendChild(o), o;
}
function bg(t) {
  var r = "rCS" + gg(t);
  return {
    className: r,
    inject: function(e, n) {
      n === void 0 && (n = {});
      var i = mg(e), a = (i || e.ownerDocument || document).querySelector('style[data-styled-id="'.concat(r, '"]'));
      if (!a)
        a = xg(r, t, n, e, i);
      else {
        var o = parseFloat(a.getAttribute("data-styled-count")) || 0;
        a.setAttribute("data-styled-count", "".concat(o + 1));
      }
      return {
        destroy: function() {
          var s, u = parseFloat(a.getAttribute("data-styled-count")) || 0;
          u <= 1 ? (a.remove ? a.remove() : (s = a.parentNode) === null || s === void 0 || s.removeChild(a), a = null) : a.setAttribute("data-styled-count", "".concat(u - 1));
        }
      };
    }
  };
}
var _i = function() {
  return _i = Object.assign || function(r) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
    }
    return r;
  }, _i.apply(this, arguments);
};
function Eg(t, r) {
  var e = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      r.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (e[n[i]] = t[n[i]]);
  return e;
}
function Pu(t, r) {
  var e = bg(r), n = e.className;
  return gh(function(i, a) {
    var o = i.className, s = o === void 0 ? "" : o;
    i.cspNonce;
    var u = Eg(i, ["className", "cspNonce"]), l = wh();
    return Rh(a, function() {
      return l.current;
    }, []), fu(function() {
      var f = e.inject(l.current, {
        nonce: i.cspNonce
      });
      return function() {
        f.destroy();
      };
    }, []), Jt(t, _i({
      ref: l,
      "data-styled-id": n,
      className: "".concat(s, " ").concat(n)
    }, u));
  });
}
var Pi = function(t, r) {
  return Pi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
  }, Pi(t, r);
};
function He(t, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Pi(t, r);
  function e() {
    this.constructor = t;
  }
  t.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
}
var _ = function() {
  return _ = Object.assign || function(r) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
    }
    return r;
  }, _.apply(this, arguments);
};
function Sg(t, r) {
  var e = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      r.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (e[n[i]] = t[n[i]]);
  return e;
}
function Cg(t, r, e, n) {
  var i = arguments.length, a = i < 3 ? r : n === null ? n = Object.getOwnPropertyDescriptor(r, e) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    a = Reflect.decorate(t, r, e, n);
  else
    for (var s = t.length - 1; s >= 0; s--)
      (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(r, e, a) : o(r, e)) || a);
  return i > 3 && a && Object.defineProperty(r, e, a), a;
}
function Mg(t) {
  var r = typeof Symbol == "function" && Symbol.iterator, e = r && t[r], n = 0;
  if (e)
    return e.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function() {
        return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
      }
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function T(t, r) {
  var e = typeof Symbol == "function" && t[Symbol.iterator];
  if (!e)
    return t;
  var n = e.call(t), i, a = [], o;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      a.push(i.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      i && !i.done && (e = n.return) && e.call(n);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return a;
}
function N(t, r, e) {
  if (e || arguments.length === 2)
    for (var n = 0, i = r.length, a; n < i; n++)
      (a || !(n in r)) && (a || (a = Array.prototype.slice.call(r, 0, n)), a[n] = r[n]);
  return t.concat(a || Array.prototype.slice.call(r));
}
function ve(t, r) {
  return _({ events: [], props: [], name: t }, r);
}
var _g = ["n", "w", "s", "e"], ga = ["n", "w", "s", "e", "nw", "ne", "sw", "se"];
function Pg(t, r) {
  return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="'.concat(32 * t, 'px" height="').concat(32 * t, 'px" viewBox="0 0 32 32" ><path d="M 16,5 L 12,10 L 14.5,10 L 14.5,22 L 12,22 L 16,27 L 20,22 L 17.5,22 L 17.5,10 L 20, 10 L 16,5 Z" stroke-linejoin="round" stroke-width="1.2" fill="black" stroke="white" style="transform:rotate(').concat(r, 'deg);transform-origin: 16px 16px"></path></svg>');
}
function Tg(t) {
  var r = Pg(1, t), e = Math.round(t / 45) * 45 % 180, n = "ns-resize";
  return e === 135 ? n = "nwse-resize" : e === 45 ? n = "nesw-resize" : e === 90 && (n = "ew-resize"), "cursor:".concat(n, ";cursor: url('").concat(r, "') 16 16, ").concat(n, ";");
}
var pe = Bh(), Tu = pe.browser.webkit, Du = Tu && function() {
  var t = typeof window == "undefined" ? { userAgent: "" } : window.navigator, r = /applewebkit\/([^\s]+)/g.exec(t.userAgent.toLowerCase());
  return r ? parseFloat(r[1]) < 605 : !1;
}(), wu = pe.browser.name, Ru = parseInt(pe.browser.version, 10), Dg = wu === "chrome", wg = pe.browser.chromium, Rg = parseInt(pe.browser.chromiumVersion, 10) || 0, Og = Dg && Ru >= 109 || wg && Rg >= 109, Ig = wu === "firefox", kg = parseInt(pe.browser.webkitVersion, 10) >= 612 || Ru >= 15, ma = "moveable-", Ag = ga.map(function(t) {
  var r = "", e = "", n = "center", i = "center", a = "calc(var(--moveable-control-padding, 20) * -1px)";
  return t.indexOf("n") > -1 && (r = "top: ".concat(a, ";"), i = "bottom"), t.indexOf("s") > -1 && (r = "top: 0px;", i = "top"), t.indexOf("w") > -1 && (e = "left: ".concat(a, ";"), n = "right"), t.indexOf("e") > -1 && (e = "left: 0px;", n = "left"), '.around-control[data-direction*="'.concat(t, `"] {
        `).concat(e).concat(r, `
        transform-origin: `).concat(n, " ").concat(i, `;
    }`);
}).join(`
`), Bg = `
{
position: absolute;
width: 1px;
height: 1px;
left: 0;
top: 0;
z-index: 3000;
--moveable-color: #4af;
--zoom: 1;
--zoompx: 1px;
--moveable-line-padding: 0;
--moveable-control-padding: 0;
will-change: transform;
outline: 1px solid transparent;
}
.control-box {
z-index: 0;
}
.line, .control {
position: absolute;
left: 0;
top: 0;
will-change: transform;
}
.control {
width: 14px;
height: 14px;
border-radius: 50%;
border: 2px solid #fff;
box-sizing: border-box;
background: #4af;
background: var(--moveable-color);
margin-top: -7px;
margin-left: -7px;
border: 2px solid #fff;
z-index: 10;
}
.around-control {
position: absolute;
will-change: transform;
width: calc(var(--moveable-control-padding, 20) * 1px);
height: calc(var(--moveable-control-padding, 20) * 1px);
left: calc(var(--moveable-control-padding, 20) * -0.5px);
top: calc(var(--moveable-control-padding, 20) * -0.5px);
box-sizing: border-box;
background: transparent;
z-index: 8;
cursor: alias;
transform-origin: center center;
}
`.concat(Ag, `
.padding {
position: absolute;
top: 0px;
left: 0px;
width: 100px;
height: 100px;
transform-origin: 0 0;
}
.line {
width: 1px;
height: 1px;
background: #4af;
background: var(--moveable-color);
transform-origin: 0px 50%;
}
.line.edge {
z-index: 1;
background: transparent;
}
.line.dashed {
box-sizing: border-box;
background: transparent;
}
.line.dashed.horizontal {
border-top: 1px dashed #4af;
border-top-color: #4af;
border-top-color: var(--moveable-color);
}
.line.dashed.vertical {
border-left: 1px dashed #4af;
border-left-color: #4af;
border-left-color: var(--moveable-color);
}
.line.vertical {
transform: translateX(-50%);
}
.line.horizontal {
transform: translateY(-50%);
}
.line.vertical.bold {
width: 2px;
}
.line.horizontal.bold {
height: 2px;
}

.control.origin {
border-color: #f55;
background: #fff;
width: 12px;
height: 12px;
margin-top: -6px;
margin-left: -6px;
pointer-events: none;
}
`).concat([0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165].map(function(t) {
  return `
.direction[data-rotation="`.concat(t, '"], :global .view-control-rotation').concat(t, ` {
`).concat(Tg(t), `
}
`);
}).join(`
`), `

.line.direction:before {
content: "";
position: absolute;
width: 100%;
height: calc(var(--moveable-line-padding, 0) * 1px);
bottom: 0;
left: 0;
}
.group {
z-index: -1;
}
.area {
position: absolute;
}
.area-pieces {
position: absolute;
top: 0;
left: 0;
display: none;
}
.area.avoid, .area.pass {
pointer-events: none;
}
.area.avoid+.area-pieces {
display: block;
}
.area-piece {
position: absolute;
}

`).concat(Du ? `:global svg *:before {
content:"";
transform-origin: inherit;
}` : "", `
`), zg = [
  [0, 1, 2],
  [1, 0, 3],
  [2, 0, 3],
  [3, 1, 2]
], Ti = 1e-4, Ft = 1e-7, Je = 1e-9, Di = Math.pow(10, 10), zo = -Di, Gg = {
  n: [0, -1],
  e: [1, 0],
  s: [0, 1],
  w: [-1, 0],
  nw: [-1, -1],
  ne: [1, -1],
  sw: [-1, 1],
  se: [1, 1]
}, ya = {
  n: [0, 1],
  e: [1, 3],
  s: [3, 2],
  w: [2, 0],
  nw: [0],
  ne: [1],
  sw: [2],
  se: [3]
}, Ou = {
  n: 0,
  s: 180,
  w: 270,
  e: 90,
  nw: 315,
  ne: 45,
  sw: 225,
  se: 135
}, Iu = [
  "isMoveableElement",
  "updateRect",
  "updateTarget",
  "destroy",
  "dragStart",
  "isInside",
  "hitTest",
  "setState",
  "getRect",
  "request",
  "isDragging",
  "getManager",
  "forceUpdate",
  "waitToChangeTarget",
  "updateSelectors",
  "getTargets",
  "stopDrag",
  "getControlBoxElement",
  "getMoveables",
  "getDragElement"
];
function Xe(t, r, e, n, i, a) {
  var o, s;
  a === void 0 && (a = "draggable");
  var u = (s = (o = r.gestos[a]) === null || o === void 0 ? void 0 : o.move(e, t.inputEvent)) !== null && s !== void 0 ? s : {}, l = u.originalDatas || u.datas, f = l[a] || (l[a] = {});
  return _(_({}, i ? yl(r, u) : u), { isPinch: !!n, parentEvent: !0, datas: f, originalDatas: t.originalDatas });
}
var ie = /* @__PURE__ */ function() {
  function t(r) {
    var e;
    r === void 0 && (r = "draggable"), this.ableName = r, this.prevX = 0, this.prevY = 0, this.startX = 0, this.startY = 0, this.isDrag = !1, this.isFlag = !1, this.datas = {
      draggable: {}
    }, this.datas = (e = {}, e[r] = {}, e);
  }
  return t.prototype.dragStart = function(r, e) {
    this.isDrag = !1, this.isFlag = !1;
    var n = e.originalDatas;
    return this.datas = n, n[this.ableName] || (n[this.ableName] = {}), _(_({}, this.move(r, e.inputEvent)), { type: "dragstart" });
  }, t.prototype.drag = function(r, e) {
    return this.move([
      r[0] - this.prevX,
      r[1] - this.prevY
    ], e);
  }, t.prototype.move = function(r, e) {
    var n, i, a = !1;
    if (!this.isFlag)
      this.prevX = r[0], this.prevY = r[1], this.startX = r[0], this.startY = r[1], n = r[0], i = r[1], this.isFlag = !0;
    else {
      var o = this.isDrag;
      n = this.prevX + r[0], i = this.prevY + r[1], (r[0] || r[1]) && (this.isDrag = !0), !o && this.isDrag && (a = !0);
    }
    return this.prevX = n, this.prevY = i, {
      type: "drag",
      clientX: n,
      clientY: i,
      inputEvent: e,
      isFirstDrag: a,
      isDrag: this.isDrag,
      distX: n - this.startX,
      distY: i - this.startY,
      deltaX: r[0],
      deltaY: r[1],
      datas: this.datas[this.ableName],
      originalDatas: this.datas,
      parentEvent: !0,
      parentGesto: this
    };
  }, t;
}();
function te(t, r, e, n) {
  var i = t.length === 16, a = i ? 4 : 3, o = Hr(t, e, n, a), s = T(o, 4), u = T(s[0], 2), l = u[0], f = u[1], c = T(s[1], 2), v = c[0], p = c[1], d = T(s[2], 2), h = d[0], g = d[1], m = T(s[3], 2), y = m[0], x = m[1], E = T(bt(t, r, a), 2), C = E[0], b = E[1], S = Math.min(l, v, h, y), M = Math.min(f, p, g, x), P = Math.max(l, v, h, y), D = Math.max(f, p, g, x);
  l = l - S || 0, v = v - S || 0, h = h - S || 0, y = y - S || 0, f = f - M || 0, p = p - M || 0, g = g - M || 0, x = x - M || 0, C = C - S || 0, b = b - M || 0;
  var O = t[0], R = t[a + 1], w = Vt(O * R);
  return {
    left: S,
    top: M,
    right: P,
    bottom: D,
    origin: [C, b],
    pos1: [l, f],
    pos2: [v, p],
    pos3: [h, g],
    pos4: [y, x],
    direction: w
  };
}
function ku(t, r) {
  var e = r.clientX, n = r.clientY, i = r.datas, a = t.state, o = a.moveableClientRect, s = a.rootMatrix, u = a.is3d, l = a.pos1, f = o.left, c = o.top, v = u ? 4 : 3, p = T(tt(se(s, [e - f, n - c], v), l), 2), d = p[0], h = p[1], g = T(sr({ datas: i, distX: d, distY: h }), 2), m = g[0], y = g[1];
  return [m, y];
}
function Yr(t, r) {
  var e = r.datas, n = t.state, i = n.allMatrix, a = n.beforeMatrix, o = n.is3d, s = n.left, u = n.top, l = n.origin, f = n.offsetMatrix, c = n.targetMatrix, v = n.transformOrigin, p = o ? 4 : 3;
  e.is3d = o, e.matrix = i, e.targetMatrix = c, e.beforeMatrix = a, e.offsetMatrix = f, e.transformOrigin = v, e.inverseMatrix = or(i, p), e.inverseBeforeMatrix = or(a, p), e.absoluteOrigin = Ar(lt([s, u], l), p), e.startDragBeforeDist = kt(e.inverseBeforeMatrix, e.absoluteOrigin, p), e.startDragDist = kt(e.inverseMatrix, e.absoluteOrigin, p);
}
function Lg(t) {
  return te(t.datas.beforeTransform, [50, 50], 100, 100).direction;
}
function Rn(t, r, e) {
  var n = r.datas, i = r.originalDatas.beforeRenderable, a = n.transformIndex, o = i.nextTransforms, s = o.length, u = i.nextTransformAppendedIndexes, l = -1;
  a === -1 ? (e === "translate" ? l = 0 : e === "rotate" && (l = cr(o, function(p) {
    return p.match(/scale\(/g);
  })), l === -1 && (l = o.length), n.transformIndex = l) : jt(u, function(p) {
    return p.index === a && p.functionName === e;
  }) ? l = a : l = a + u.filter(function(p) {
    return p.index < a;
  }).length;
  var f = lm(o, t.state, l), c = f.targetFunction, v = e === "rotate" ? "rotateZ" : e;
  n.beforeFunctionTexts = f.beforeFunctionTexts, n.afterFunctionTexts = f.afterFunctionTexts, n.beforeTransform = f.beforeFunctionMatrix, n.beforeTransform2 = f.beforeFunctionMatrix2, n.targetTansform = f.targetFunctionMatrix, n.afterTransform = f.afterFunctionMatrix, n.afterTransform2 = f.afterFunctionMatrix2, n.targetAllTransform = f.allFunctionMatrix, c.functionName === v ? (n.afterFunctionTexts.splice(0, 1), n.isAppendTransform = !1) : s > l && (n.isAppendTransform = !0, i.nextTransformAppendedIndexes = N(N([], T(u), !1), [{
    functionName: e,
    index: l,
    isAppend: !0
  }], !1));
}
function On(t, r, e) {
  return "".concat(t.beforeFunctionTexts.join(" "), " ").concat(t.isAppendTransform ? e : r, " ").concat(t.afterFunctionTexts.join(" "));
}
function Fg(t) {
  var r = t.datas, e = t.distX, n = t.distY, i = T(Bu({ datas: r, distX: e, distY: n }), 2), a = i[0], o = i[1], s = Au(r, Nh([a, o], 4));
  return kt(s, Ar([0, 0, 0], 4), 4);
}
function Au(t, r, e) {
  var n = t.beforeTransform, i = t.afterTransform, a = t.beforeTransform2, o = t.afterTransform2, s = t.targetAllTransform, u = e ? pt(s, r, 4) : pt(r, s, 4), l = pt(or(e ? a : n, 4), u, 4), f = pt(l, or(e ? o : i, 4), 4);
  return f;
}
function Bu(t) {
  var r = t.datas, e = t.distX, n = t.distY, i = r.inverseBeforeMatrix, a = r.is3d, o = r.startDragBeforeDist, s = r.absoluteOrigin, u = a ? 4 : 3;
  return tt(kt(i, lt(s, [e, n]), u), o);
}
function sr(t, r) {
  var e = t.datas, n = t.distX, i = t.distY, a = e.inverseBeforeMatrix, o = e.inverseMatrix, s = e.is3d, u = e.startDragBeforeDist, l = e.startDragDist, f = e.absoluteOrigin, c = s ? 4 : 3;
  return tt(kt(r ? a : o, lt(f, [n, i]), c), r ? u : l);
}
function Ng(t, r) {
  var e = t.datas, n = t.distX, i = t.distY, a = e.beforeMatrix, o = e.matrix, s = e.is3d, u = e.startDragBeforeDist, l = e.startDragDist, f = e.absoluteOrigin, c = s ? 4 : 3;
  return tt(kt(r ? a : o, lt(r ? u : l, [n, i]), c), f);
}
function $g(t, r, e, n, i, a) {
  return n === void 0 && (n = r), i === void 0 && (i = e), a === void 0 && (a = [0, 0]), t ? t.map(function(o, s) {
    var u = Le(o), l = u.value, f = u.unit, c = s ? i : n, v = s ? e : r;
    if (o === "%" || isNaN(l)) {
      var p = c ? a[s] / c : 0;
      return v * p;
    } else if (f !== "%")
      return l;
    return v * l / 100;
  }) : a;
}
function zu(t) {
  var r = [];
  return t[1] >= 0 && (t[0] >= 0 && r.push(3), t[0] <= 0 && r.push(2)), t[1] <= 0 && (t[0] >= 0 && r.push(1), t[0] <= 0 && r.push(0)), r;
}
function jg(t, r) {
  return zu(r).map(function(e) {
    return t[e];
  });
}
function wt(t, r) {
  var e = (r[0] + 1) / 2, n = (r[1] + 1) / 2, i = [
    Tr(t[0][0], t[1][0], e, 1 - e),
    Tr(t[0][1], t[1][1], e, 1 - e)
  ], a = [
    Tr(t[2][0], t[3][0], e, 1 - e),
    Tr(t[2][1], t[3][1], e, 1 - e)
  ];
  return [
    Tr(i[0], a[0], n, 1 - n),
    Tr(i[1], a[1], n, 1 - n)
  ];
}
function Yg(t, r, e, n, i, a) {
  var o = Hr(r, e, n, i), s = wt(o, a), u = t[0] - s[0], l = t[1] - s[1];
  return [u, l];
}
function We(t, r, e, n) {
  return pt(t, _e(r, n, e), n);
}
function Hg(t, r, e, n) {
  var i = t.transformOrigin, a = t.offsetMatrix, o = t.is3d, s = o ? 4 : 3, u;
  if ($t(e)) {
    var l = r.beforeTransform, f = r.afterTransform;
    n ? u = rr(Ie(e), 4, s) : u = rr(pt(pt(l, Ie([e]), 4), f, 4), 4, s);
  } else
    u = e;
  return We(a, u, i, s);
}
function Xg(t, r) {
  var e = t.transformOrigin, n = t.offsetMatrix, i = t.is3d, a = t.targetMatrix, o = t.targetAllTransform, s = i ? 4 : 3;
  return We(n, pt(o || a, pa(r, s), s), e, s);
}
function In(t, r) {
  var e = de(r);
  return {
    setTransform: function(n, i) {
      i === void 0 && (i = -1), e.startTransforms = _t(n) ? n : Er(n), wi(t, r, i);
    },
    setTransformIndex: function(n) {
      wi(t, r, n);
    }
  };
}
function kn(t, r, e) {
  var n = de(r), i = n.startTransforms;
  wi(t, r, cr(i, function(a) {
    return a.indexOf("".concat(e, "(")) === 0;
  }));
}
function wi(t, r, e) {
  var n = de(r), i = r.datas;
  if (i.transformIndex = e, e !== -1) {
    var a = n.startTransforms[e];
    if (a) {
      var o = t.state, s = ne([a], {
        "x%": function(u) {
          return u / 100 * o.offsetWidth;
        },
        "y%": function(u) {
          return u / 100 * o.offsetHeight;
        }
      });
      i.startValue = s[0].functionValue;
    }
  }
}
function xa(t, r) {
  var e = de(t);
  e.nextTransforms = Er(r);
}
function de(t) {
  return t.originalDatas.beforeRenderable;
}
function gn(t) {
  var r = t.originalDatas.beforeRenderable;
  return r.nextTransforms;
}
function Qe(t) {
  return (gn(t) || []).join(" ");
}
function tn(t) {
  return de(t).nextStyle;
}
function Gu(t, r, e, n, i) {
  xa(i, r);
  var a = Gt.drag(t, Xe(i, t.state, e, n, !1)), o = a ? a.transform : r;
  return _(_({ transform: r, drag: a }, Lt({
    transform: o
  }, i)), { afterTransform: o });
}
function ba(t, r, e, n, i, a) {
  var o = Hg(t.state, i, r, a), s = qg(t, e, n, o);
  return s;
}
function Lu(t, r, e, n, i, a, o) {
  var s = ba(t, r, e, i, a, o), u = t.state, l = u.left, f = u.top, c = t.props.groupable, v = c ? l : 0, p = c ? f : 0, d = tt(n, s);
  return tt(d, [v, p]);
}
function Wg(t, r, e, n, i, a, o) {
  var s = Lu(t, r, e, n, i, a, o);
  return s;
}
function Vg(t, r, e) {
  return [
    r ? -1 + t[0] / (r / 2) : 0,
    e ? -1 + t[1] / (e / 2) : 0
  ];
}
function qg(t, r, e, n) {
  n === void 0 && (n = t.state.allMatrix);
  var i = t.state, a = i.width, o = i.height, s = i.is3d, u = s ? 4 : 3, l = [
    a / 2 * (1 + r[0]) + e[0],
    o / 2 * (1 + r[1]) + e[1]
  ];
  return bt(n, l, u);
}
function Ug(t, r, e) {
  var n = e.fixedDirection, i = e.fixedPosition, a = e.fixedOffset;
  return Lu(t, "rotate(".concat(r, "deg)"), n, i, a, e);
}
function Kg(t, r, e, n, i, a) {
  var o = t.props.groupable, s = t.state, u = s.transformOrigin, l = s.offsetMatrix, f = s.is3d, c = s.width, v = s.height, p = s.left, d = s.top, h = a.fixedDirection, g = a.nextTargetMatrix || s.targetMatrix, m = f ? 4 : 3, y = $g(i, r, e, c, v, u), x = o ? p : 0, E = o ? d : 0, C = We(l, g, y, m), b = Yg(n, C, r, e, m, h);
  return tt(b, [x, E]);
}
function Zg(t, r) {
  return wt(Kt(t.state), r);
}
function Jg(t, r) {
  var e = t.targetGesto, n = t.controlGesto, i;
  return e != null && e.isFlag() && (i = e.getEventData()[r]), !i && (n != null && n.isFlag()) && (i = n.getEventData()[r]), i || {};
}
function Qg(t) {
  if (t && t.getRootNode) {
    var r = t.getRootNode();
    if (r.nodeType === 11)
      return r;
  }
}
function t0(t) {
  var r = t("scale"), e = t("rotate"), n = t("translate"), i = [];
  return n && n !== "0px" && n !== "none" && i.push("translate(".concat(n.split(/\s+/).join(","), ")")), e && e !== "1" && e !== "none" && i.push("rotate(".concat(e, ")")), r && r !== "1" && r !== "none" && i.push("scale(".concat(r.split(/\s+/).join(","), ")")), i;
}
function Fu(t, r, e) {
  for (var n = t, i = [], a = oa(t) || _r(t), o = !e && t === r || t === a, s = o, u = !1, l = 3, f, c, v, p = !1, d = Ae(r, r, !0).offsetParent, h = 1; n && !s; ) {
    s = o;
    var g = Yt(n), m = g("position"), y = sl(n), x = m === "fixed", E = t0(g), C = $h(K0(y)), b = void 0, S = !1, M = !1, P = 0, D = 0, O = 0, R = 0, w = {
      hasTransform: !1,
      fixedContainer: null
    };
    x && (p = !0, w = rm(n), d = w.fixedContainer);
    var I = C.length;
    !u && (I === 16 || E.length) && (u = !0, l = 4, Bi(i), v && (v = rr(v, 3, 4))), u && I === 9 && (C = rr(C, 3, 4));
    var k = tm(n, t), F = k.tagName, L = k.hasOffset, B = k.isSVG, $ = k.origin, j = k.targetOrigin, G = k.offset, q = T(G, 2), U = q[0], H = q[1];
    F === "svg" && v && (i.push({
      type: "target",
      target: n,
      matrix: em(n, l)
    }), i.push({
      type: "offset",
      target: n,
      matrix: yt(l)
    }));
    var X = parseFloat(g("zoom")) || 1;
    if (x)
      b = w.fixedContainer, S = !0;
    else {
      var Y = Ae(n, r, !1, !0, g), V = Y.offsetZoom;
      if (b = Y.offsetParent, S = Y.isEnd, M = Y.isStatic, h *= V, (Y.isCustomElement || V !== 1) && M)
        U -= b.offsetLeft, H -= b.offsetTop;
      else if (Ig || Og) {
        var J = Y.parentSlotElement;
        if (J) {
          for (var nt = b, rt = 0, Z = 0; nt && Qg(nt); )
            rt += nt.offsetLeft, Z += nt.offsetTop, nt = nt.offsetParent;
          U -= rt, H -= Z;
        }
      }
    }
    if (Tu && !kg && L && !B && M && (m === "relative" || m === "static") && (U -= b.offsetLeft, H -= b.offsetTop, o = o || S), x)
      L && w.hasTransform && (O = b.clientLeft, R = b.clientTop);
    else if (L && d !== b && (P = b.clientLeft, D = b.clientTop), L && b === a) {
      var K = ul(n, !1);
      U += K[0], H += K[1];
    }
    if (i.push({
      type: "target",
      target: n,
      matrix: _e(C, l, $)
    }), E.length && (i.push({
      type: "offset",
      target: n,
      matrix: yt(l)
    }), i.push({
      type: "target",
      target: n,
      matrix: _e(Ie(E), l, $)
    })), L) {
      var ft = n === t, at = ft ? 0 : n.scrollLeft, ot = ft ? 0 : n.scrollTop;
      i.push({
        type: "offset",
        target: n,
        matrix: Br([
          U - at + P - O,
          H - ot + D - R
        ], l)
      });
    } else
      i.push({
        type: "offset",
        target: n,
        origin: $
      });
    if (X !== 1 && i.push({
      type: "zoom",
      target: n,
      matrix: _e(pa([X, X], l), l, [0, 0])
    }), v || (v = C), f || (f = $), c || (c = j), s || x)
      break;
    n = b, o = S, (!e || n === a) && (s = o);
  }
  return v || (v = yt(l)), f || (f = [0, 0]), c || (c = [0, 0]), {
    zoom: h,
    offsetContainer: d,
    matrixes: i,
    targetMatrix: v,
    transformOrigin: f,
    targetOrigin: c,
    is3d: u,
    hasFixed: p
  };
}
var Dr = null, wr = null, qr = null;
function ae(t) {
  t ? (window.Map && (Dr = /* @__PURE__ */ new Map(), wr = /* @__PURE__ */ new Map()), qr = []) : (Dr = null, qr = null, wr = null);
}
function r0(t) {
  var r = wr == null ? void 0 : wr.get(t);
  if (r)
    return r;
  var e = Pe(t, !0);
  return wr && wr.set(t, e), e;
}
function e0(t, r) {
  if (qr) {
    var e = jt(qr, function(i) {
      return i[0][0] == t && i[0][1] == r;
    });
    if (e)
      return e[1];
  }
  var n = Fu(t, r, !0);
  return qr && qr.push([[t, r], n]), n;
}
function Yt(t) {
  var r = Dr == null ? void 0 : Dr.get(t);
  if (!r) {
    var e = br(t).getComputedStyle(t);
    if (!Dr)
      return function(a) {
        return e[a];
      };
    r = {
      style: e,
      cached: {}
    }, Dr.set(t, r);
  }
  var n = r.cached, i = r.style;
  return function(a) {
    return a in n || (n[a] = i[a]), n[a];
  };
}
function Qt(t, r, e) {
  var n = e.originalDatas;
  n.groupable = n.groupable || {};
  var i = n.groupable;
  i.childDatas = i.childDatas || [];
  var a = i.childDatas;
  return t.moveables.map(function(o, s) {
    return a[s] = a[s] || {}, a[s][r] = a[s][r] || {}, _(_({}, e), { isRequestChild: !0, datas: a[s][r], originalDatas: a[s] });
  });
}
function Qn(t, r, e, n, i, a, o) {
  var s = !!e.match(/Start$/g), u = !!e.match(/End$/g), l = i.isPinch, f = i.datas, c = Qt(t, r.name, i), v = t.moveables, p = c.map(function(d, h) {
    var g = v[h], m = g.state, y = m.gestos, x = d;
    if (s)
      x = new ie(o).dragStart(n, d);
    else {
      if (y[o] || (y[o] = f.childGestos[h]), !y[o])
        return;
      x = Xe(d, m, n, l, a, o);
    }
    var E = r[e](g, _(_({}, x), { parentFlag: !0 }));
    return u && (y[o] = null), E;
  });
  return s && (f.childGestos = v.map(function(d) {
    return d.state.gestos[o];
  })), p;
}
function fr(t, r, e, n, i, a) {
  i === void 0 && (i = function(f, c) {
    return c;
  });
  var o = !!e.match(/End$/g), s = Qt(t, r.name, n), u = t.moveables, l = s.map(function(f, c) {
    var v = u[c], p = f;
    p = i(v, f);
    var d = r[e](v, _(_({}, p), { parentFlag: !0 }));
    return d && a && a(v, f, d, c), o && (v.state.gestos = {}), d;
  });
  return l;
}
function mn(t, r, e, n) {
  var i = e.fixedDirection, a = e.fixedPosition, o = n.datas.startPositions || Kt(r.state), s = wt(o, i), u = T(kt(Ye(-t.rotation / 180 * Math.PI, 3), [s[0] - a[0], s[1] - a[1], 1], 3), 2), l = u[0], f = u[1];
  return n.datas.originalX = l, n.datas.originalY = f, n;
}
function Nu(t, r, e, n) {
  var i = t.getState(), a = i.renderPoses, o = i.rotation, s = i.direction, u = Gr(t.props, r).zoom, l = Me(o / Math.PI * 180), f = {}, c = t.renderState;
  c.renderDirectionMap || (c.renderDirectionMap = {});
  var v = c.renderDirectionMap;
  e.forEach(function(d) {
    var h = d.dir;
    f[h] = !0;
  });
  var p = Vt(s);
  return e.map(function(d) {
    var h = d.data, g = d.classNames, m = d.dir, y = ya[m];
    if (!y || !f[m])
      return null;
    v[m] = !0;
    var x = (et(l, 15) + p * Ou[m] + 720) % 180, E = {};
    return vr(h).forEach(function(C) {
      E["data-".concat(C)] = h[C];
    }), n.createElement("div", _({ className: Q.apply(void 0, N(["control", "direction", m, r], T(g), !1)), "data-rotation": x, "data-direction": m }, E, { key: "direction-".concat(m), style: En.apply(void 0, N([o, u], T(y.map(function(C) {
      return a[C];
    })), !1)) }));
  });
}
function $u(t, r, e, n) {
  var i = Gr(t.props, e), a = i.renderDirections, o = a === void 0 ? r : a, s = i.displayAroundControls;
  if (!o)
    return [];
  var u = o === !0 ? ga : o;
  return N(N([], T(s ? Xu(t, n, e, u) : []), !1), T(Nu(t, e, u.map(function(l) {
    return {
      data: {},
      classNames: [],
      dir: l
    };
  }), n)), !1);
}
function ke(t, r, e, n, i, a) {
  for (var o = [], s = 6; s < arguments.length; s++)
    o[s - 6] = arguments[s];
  var u = Et(e, n), l = r ? et(u / Math.PI * 180, 15) % 180 : -1;
  return t.createElement("div", { key: "line-".concat(a), className: Q.apply(void 0, N(["line", "direction", r ? "edge" : "", r], T(o), !1)), "data-rotation": l, "data-line-key": a, "data-direction": r, style: be(e, n, i, u) });
}
function ju(t, r, e, n, i) {
  var a = e === !0 ? _g : e;
  return a.map(function(o, s) {
    var u = T(ya[o], 2), l = u[0], f = u[1];
    if (f != null)
      return ke(t, o, n[l], n[f], i, "".concat(r, "Edge").concat(s), r);
  }).filter(Boolean);
}
function Yu(t) {
  return function(r, e) {
    var n = Gr(r.props, t).edge;
    return n && (n === !0 || n.length) ? N(N([], T(ju(e, t, n, r.getState().renderPoses, r.props.zoom)), !1), T(n0(r, t, e)), !1) : Hu(r, t, e);
  };
}
function Hu(t, r, e) {
  return $u(t, ga, r, e);
}
function n0(t, r, e) {
  return $u(t, ["nw", "ne", "sw", "se"], r, e);
}
function Xu(t, r, e, n) {
  var i = t.renderState;
  i.renderDirectionMap || (i.renderDirectionMap = {});
  var a = t.getState(), o = a.renderPoses, s = a.rotation, u = a.direction, l = i.renderDirectionMap, f = t.props.zoom, c = Vt(u), v = s / Math.PI * 180;
  return (n || vr(l)).map(function(p) {
    var d = ya[p];
    if (!d)
      return null;
    var h = (et(v, 15) + c * Ou[p] + 720) % 180, g = ["around-control"];
    return e && g.push("direction", e), r.createElement("div", { className: Q.apply(void 0, N([], T(g), !1)), "data-rotation": h, "data-direction": p, key: "direction-around-".concat(p), style: En.apply(void 0, N([s, f], T(d.map(function(m) {
      return o[m];
    })), !1)) });
  });
}
function Ea(t, r, e) {
  var n = t || {}, i = n.position, a = i === void 0 ? "client" : i, o = n.left, s = o === void 0 ? -1 / 0 : o, u = n.top, l = u === void 0 ? -1 / 0 : u, f = n.right, c = f === void 0 ? 1 / 0 : f, v = n.bottom, p = v === void 0 ? 1 / 0 : v, d = {
    position: a,
    left: s,
    top: l,
    right: c,
    bottom: p
  };
  return {
    vertical: Go(d, r, !0),
    horizontal: Go(d, e, !1)
  };
}
function An(t, r) {
  var e = t.state, n = e.containerClientRect, i = n.clientHeight, a = n.clientWidth, o = n.clientLeft, s = n.clientTop, u = e.snapOffset, l = u.left, f = u.top, c = u.right, v = u.bottom, p = r || t.props.bounds || {}, d = p.position || "client", h = d === "css", g = p.left, m = g === void 0 ? -1 / 0 : g, y = p.top, x = y === void 0 ? -1 / 0 : y, E = p.right, C = E === void 0 ? h ? -1 / 0 : 1 / 0 : E, b = p.bottom, S = b === void 0 ? h ? -1 / 0 : 1 / 0 : b;
  return h && (C = a + c - l - C, S = i + v - f - S), {
    left: m + l - o,
    right: C + l - o,
    top: x + f - s,
    bottom: S + f - s
  };
}
function i0(t, r, e) {
  var n = An(t), i = n.left, a = n.top, o = n.right, s = n.bottom, u = T(e, 2), l = u[0], f = u[1], c = T(tt(e, r), 2), v = c[0], p = c[1];
  z(v) < Ft && (v = 0), z(p) < Ft && (p = 0);
  var d = p > 0, h = v > 0, g = {
    isBound: !1,
    offset: 0,
    pos: 0
  }, m = {
    isBound: !1,
    offset: 0,
    pos: 0
  };
  if (v === 0 && p === 0)
    return {
      vertical: g,
      horizontal: m
    };
  if (v === 0)
    d ? s < f && (m.pos = s, m.offset = f - s) : a > f && (m.pos = a, m.offset = f - a);
  else if (p === 0)
    h ? o < l && (g.pos = o, g.offset = l - o) : i > l && (g.pos = i, g.offset = l - i);
  else {
    var y = p / v, x = e[1] - y * l, E = 0, C = 0, b = !1;
    h && o <= l ? (E = y * o + x, C = o, b = !0) : !h && l <= i && (E = y * i + x, C = i, b = !0), b && (E < a || E > s) && (b = !1), b || (d && s <= f ? (E = s, C = (E - x) / y, b = !0) : !d && f <= a && (E = a, C = (E - x) / y, b = !0)), b && (g.isBound = !0, g.pos = C, g.offset = l - C, m.isBound = !0, m.pos = E, m.offset = f - E);
  }
  return {
    vertical: g,
    horizontal: m
  };
}
function Go(t, r, e) {
  var n = t[e ? "left" : "top"], i = t[e ? "right" : "bottom"], a = Math.min.apply(Math, N([], T(r), !1)), o = Math.max.apply(Math, N([], T(r), !1)), s = [];
  return n + 1 > a && s.push({
    direction: "start",
    isBound: !0,
    offset: a - n,
    pos: n
  }), i - 1 < o && s.push({
    direction: "end",
    isBound: !0,
    offset: o - i,
    pos: i
  }), s.length || s.push({
    isBound: !1,
    offset: 0,
    pos: 0
  }), s.sort(function(u, l) {
    return z(l.offset) - z(u.offset);
  });
}
function Lo(t, r, e) {
  var n = e ? t.map(function(i) {
    return je(i, e);
  }) : t;
  return n.some(function(i) {
    return i[0] < r.left && z(i[0] - r.left) > 0.1 || i[0] > r.right && z(i[0] - r.right) > 0.1 || i[1] < r.top && z(i[1] - r.top) > 0.1 || i[1] > r.bottom && z(i[1] - r.bottom) > 0.1;
  });
}
function a0(t, r, e) {
  var n = Ut(t), i = Math.sqrt(n * n - r * r) || 0;
  return [i, -i].sort(function(a, o) {
    return z(a - t[e ? 0 : 1]) - z(o - t[e ? 0 : 1]);
  }).map(function(a) {
    return Et([0, 0], e ? [a, r] : [r, a]);
  });
}
function o0(t, r, e, n, i) {
  if (!t.props.bounds)
    return [];
  var a = i * Math.PI / 180, o = An(t), s = o.left, u = o.top, l = o.right, f = o.bottom, c = s - n[0], v = l - n[0], p = u - n[1], d = f - n[1], h = {
    left: c,
    top: p,
    right: v,
    bottom: d
  };
  if (!Lo(e, h, 0))
    return [];
  var g = [];
  return [
    [c, 0],
    [v, 0],
    [p, 1],
    [d, 1]
  ].forEach(function(m) {
    var y = T(m, 2), x = y[0], E = y[1];
    e.forEach(function(C) {
      var b = Et([0, 0], C);
      g.push.apply(g, N([], T(a0(C, x, E).map(function(S) {
        return a + S - b;
      }).filter(function(S) {
        return !Lo(r, h, S);
      }).map(function(S) {
        return et(S * 180 / Math.PI, Ft);
      })), !1));
    });
  }), g;
}
var s0 = ["left", "right", "center"], u0 = ["top", "bottom", "middle"], Fo = {
  left: "start",
  right: "end",
  center: "center",
  top: "start",
  bottom: "end",
  middle: "center"
}, Sr = {
  start: "left",
  end: "right",
  center: "center"
}, Cr = {
  start: "top",
  end: "bottom",
  center: "middle"
};
function Ur() {
  return {
    left: !1,
    top: !1,
    right: !1,
    bottom: !1
  };
}
function he(t, r) {
  var e = t.props, n = e.snappable, i = e.bounds, a = e.innerBounds, o = e.verticalGuidelines, s = e.horizontalGuidelines, u = e.snapGridWidth, l = e.snapGridHeight, f = t.state, c = f.guidelines, v = f.enableSnap;
  return !n || !v || r && n !== !0 && n.indexOf(r) < 0 ? !1 : !!(u || l || i || a || c && c.length || o && o.length || s && s.length);
}
function Sa(t) {
  return t === !1 ? {} : t === !0 || !t ? { left: !0, right: !0, top: !0, bottom: !0 } : t;
}
function l0(t, r) {
  var e = Sa(t), n = {};
  for (var i in e)
    i in r && e[i] && (n[i] = r[i]);
  return n;
}
function Ca(t, r) {
  var e = l0(t, r), n = u0.filter(function(a) {
    return a in e;
  }), i = s0.filter(function(a) {
    return a in e;
  });
  return {
    horizontalNames: n,
    verticalNames: i,
    horizontal: n.map(function(a) {
      return e[a];
    }),
    vertical: i.map(function(a) {
      return e[a];
    })
  };
}
function f0(t, r, e) {
  var n = bt(t, [r.clientLeft, r.clientTop], e);
  return [
    r.left + n[0],
    r.top + n[1]
  ];
}
function c0(t) {
  var r = T(t, 2), e = r[0], n = r[1], i = n[0] - e[0], a = n[1] - e[1];
  Math.abs(i) < Mt && (i = 0), Math.abs(a) < Mt && (a = 0);
  var o = 0, s = 0, u = 0;
  return i ? a ? (o = -a / i, s = 1, u = o * e[0] - e[1]) : (s = 1, u = -e[1]) : (o = -1, u = e[0]), [o, s, u].map(function(l) {
    return et(l, Mt);
  });
}
function Bn(t, r, e, n, i, a) {
  n === void 0 && (n = []), i === void 0 && (i = []);
  var o = t.props, s = sm(a, o.snapThreshold, 5);
  return Wu(t.state.guidelines, r, e, n, i, s);
}
function Wu(t, r, e, n, i, a) {
  return {
    vertical: $o(t, "vertical", r, a, n),
    horizontal: $o(t, "horizontal", e, a, i)
  };
}
function v0(t, r, e) {
  var n = T(e, 2), i = n[0], a = n[1], o = T(r, 2), s = o[0], u = o[1], l = T(tt(e, r), 2), f = l[0], c = l[1], v = c > 0, p = f > 0;
  f = Sn(f), c = Sn(c);
  var d = {
    isSnap: !1,
    offset: 0,
    pos: 0
  }, h = {
    isSnap: !1,
    offset: 0,
    pos: 0
  };
  if (f === 0 && c === 0)
    return {
      vertical: d,
      horizontal: h
    };
  var g = Bn(t, f ? [i] : [], c ? [a] : []), m = g.vertical, y = g.horizontal;
  m.posInfos.filter(function(F) {
    var L = F.pos;
    return p ? L >= s : L <= s;
  }), y.posInfos.filter(function(F) {
    var L = F.pos;
    return v ? L >= u : L <= u;
  }), m.isSnap = m.posInfos.length > 0, y.isSnap = y.posInfos.length > 0;
  var x = Ri(m), E = x.isSnap, C = x.guideline, b = Ri(y), S = b.isSnap, M = b.guideline, P = S ? M.pos[1] : 0, D = E ? C.pos[0] : 0;
  if (f === 0)
    S && (h.isSnap = !0, h.pos = M.pos[1], h.offset = a - h.pos);
  else if (c === 0)
    E && (d.isSnap = !0, d.pos = D, d.offset = i - D);
  else {
    var O = c / f, R = e[1] - O * i, w = 0, I = 0, k = !1;
    E ? (I = D, w = O * I + R, k = !0) : S && (w = P, I = (w - R) / O, k = !0), k && (d.isSnap = !0, d.pos = I, d.offset = i - I, h.isSnap = !0, h.pos = w, h.offset = a - w);
  }
  return {
    vertical: d,
    horizontal: h
  };
}
function yr(t) {
  var r = "";
  return t === -1 || t === "top" || t === "left" ? r = "start" : t === 0 || t === "center" || t === "middle" ? r = "center" : (t === 1 || t === "right" || t === "bottom") && (r = "end"), r;
}
function No(t, r, e) {
  var n = Ca(t.props.snapDirections, r), i = Bn(t, n.vertical, n.horizontal, n.verticalNames.map(function(s) {
    return yr(s);
  }), n.horizontalNames.map(function(s) {
    return yr(s);
  }), e), a = yr(n.horizontalNames[i.horizontal.index]), o = yr(n.verticalNames[i.vertical.index]);
  return {
    vertical: _(_({}, i.vertical), { direction: o }),
    horizontal: _(_({}, i.horizontal), { direction: a })
  };
}
function Ri(t) {
  var r = t.isSnap;
  if (!r)
    return {
      isSnap: !1,
      offset: 0,
      dist: -1,
      pos: 0,
      guideline: null
    };
  var e = t.posInfos[0], n = e.guidelineInfos[0], i = n.offset, a = n.dist, o = n.guideline;
  return {
    isSnap: r,
    offset: i,
    dist: a,
    pos: e.pos,
    guideline: o
  };
}
function $o(t, r, e, n, i) {
  var a, o;
  if (i === void 0 && (i = []), !t || !t.length)
    return {
      isSnap: !1,
      index: -1,
      direction: "",
      posInfos: []
    };
  var s = r === "vertical", u = s ? 0 : 1, l = e.map(function(c, v) {
    var p = i[v] || "", d = t.map(function(h) {
      var g = h.pos, m = c - g[u];
      return {
        offset: m,
        dist: z(m),
        guideline: h,
        direction: p
      };
    }).filter(function(h) {
      var g = h.guideline, m = h.dist, y = g.type;
      return !(y !== r || m > n);
    }).sort(function(h, g) {
      return h.dist - g.dist;
    });
    return {
      pos: c,
      index: v,
      guidelineInfos: d,
      direction: p
    };
  }).filter(function(c) {
    return c.guidelineInfos.length > 0;
  }).sort(function(c, v) {
    return c.guidelineInfos[0].dist - v.guidelineInfos[0].dist;
  }), f = l.length > 0;
  return {
    isSnap: f,
    index: f ? l[0].index : -1,
    direction: (o = (a = l[0]) === null || a === void 0 ? void 0 : a.direction) !== null && o !== void 0 ? o : "",
    posInfos: l
  };
}
function p0(t, r, e, n) {
  n === void 0 && (n = 1);
  var i = [];
  e[0] && e[1] ? i = [
    e,
    [-e[0], e[1]],
    [e[0], -e[1]]
  ] : !e[0] && !e[1] ? [
    [-1, -1],
    [1, -1],
    [1, 1],
    [-1, 1]
  ].forEach(function(c, v, p) {
    var d = p[v + 1] || p[0];
    i.push(c), i.push([
      (c[0] + d[0]) / 2,
      (c[1] + d[1]) / 2
    ]);
  }) : t.props.keepRatio ? i.push([-1, -1], [-1, 1], [1, -1], [1, 1], e) : (i.push.apply(i, N([], T(jg([
    [-1, -1],
    [1, -1],
    [-1, -1],
    [1, 1]
  ], e)), !1)), i.length > 1 && i.push([
    (i[0][0] + i[1][0]) / 2,
    (i[0][1] + i[1][1]) / 2
  ]));
  var a = i.map(function(c) {
    return wt(r, c);
  }), o = a.map(function(c) {
    return c[0];
  }), s = a.map(function(c) {
    return c[1];
  }), u = Bn(t, o, s, i.map(function(c) {
    return yr(c[0]);
  }), i.map(function(c) {
    return yr(c[1]);
  }), n), l = yr(i.map(function(c) {
    return c[0];
  })[u.vertical.index]), f = yr(i.map(function(c) {
    return c[1];
  })[u.horizontal.index]);
  return {
    vertical: _(_({}, u.vertical), { direction: l }),
    horizontal: _(_({}, u.horizontal), { direction: f })
  };
}
function Vu(t, r) {
  var e = z(t.offset), n = z(r.offset);
  return t.isBound && r.isBound ? n - e : t.isBound ? -1 : r.isBound ? 1 : t.isSnap && r.isSnap ? n - e : t.isSnap ? -1 : r.isSnap || e < Ft ? 1 : n < Ft ? -1 : e - n;
}
function yn(t, r) {
  return t.slice().sort(function(e, n) {
    var i = e.sign[r], a = n.sign[r], o = e.offset[r], s = n.offset[r];
    if (i) {
      if (!a)
        return -1;
    } else
      return 1;
    return Vu({ isBound: e.isBound, isSnap: e.isSnap, offset: o }, { isBound: n.isBound, isSnap: n.isSnap, offset: s });
  })[0];
}
function d0(t, r, e) {
  var n = [];
  if (e)
    z(r[0]) !== 1 || z(r[1]) !== 1 ? n.push([r, [-1, -1]], [r, [-1, 1]], [r, [1, -1]], [r, [1, 1]]) : n.push([r, [t[0], -t[1]]], [r, [-t[0], t[1]]]), n.push([r, t]);
  else if (t[0] && t[1] || !t[0] && !t[1]) {
    var i = t[0] ? t : [1, 1];
    [1, -1].forEach(function(o) {
      [1, -1].forEach(function(s) {
        var u = [o * i[0], s * i[1]];
        r[0] === u[0] && r[1] === u[1] || n.push([r, u]);
      });
    });
  } else if (t[0]) {
    var a = z(r[0]) === 1 ? [1] : [1, -1];
    a.forEach(function(o) {
      n.push([
        [r[0], -1],
        [o * t[0], -1]
      ], [
        [r[0], 0],
        [o * t[0], 0]
      ], [
        [r[0], 1],
        [o * t[0], 1]
      ]);
    });
  } else if (t[1]) {
    var a = z(r[1]) === 1 ? [1] : [1, -1];
    a.forEach(function(s) {
      n.push([
        [-1, r[1]],
        [-1, s * t[1]]
      ], [
        [0, r[1]],
        [0, s * t[1]]
      ], [
        [1, r[1]],
        [1, s * t[1]]
      ]);
    });
  }
  return n;
}
function qu(t, r) {
  var e = di([r[0][0], r[1][0]]), n = di([r[0][1], r[1][1]]);
  return {
    vertical: e <= t[0],
    horizontal: n <= t[1]
  };
}
function Ma(t, r) {
  var e = T(r, 2), n = e[0], i = e[1], a = i[0] - n[0], o = i[1] - n[1];
  z(a) < Ft && (a = 0), z(o) < Ft && (o = 0);
  var s, u;
  if (!a)
    s = n[0], u = t[0];
  else if (!o)
    s = n[1], u = t[1];
  else {
    var l = o / a;
    s = l * (t[0] - n[0]) + n[1], u = t[1];
  }
  return s - u;
}
function Uu(t, r, e, n) {
  return n === void 0 && (n = Ft), t.every(function(i) {
    var a = Ma(i, r), o = a <= 0;
    return o === e || z(a) <= n;
  });
}
function jo(t, r, e, n, i) {
  return i === void 0 && (i = 0), n && r - i <= t || !n && t <= e + i ? {
    isBound: !0,
    offset: n ? r - t : e - t
  } : {
    isBound: !1,
    offset: 0
  };
}
function h0(t, r) {
  var e = r.line, n = r.centerSign, i = r.verticalSign, a = r.horizontalSign, o = r.lineConstants, s = t.props.innerBounds;
  if (!s)
    return {
      isAllBound: !1,
      isBound: !1,
      isVerticalBound: !1,
      isHorizontalBound: !1,
      offset: [0, 0]
    };
  var u = s.left, l = s.top, f = s.width, c = s.height, v = [[u, l], [u, l + c]], p = [[u, l], [u + f, l]], d = [[u + f, l], [u + f, l + c]], h = [[u, l + c], [u + f, l + c]];
  if (Uu([
    [u, l],
    [u + f, l],
    [u, l + c],
    [u + f, l + c]
  ], e, n))
    return {
      isAllBound: !1,
      isBound: !1,
      isVerticalBound: !1,
      isHorizontalBound: !1,
      offset: [0, 0]
    };
  var g = xr(e, o, p, i), m = xr(e, o, h, i), y = xr(e, o, v, a), x = xr(e, o, d, a), E = g.isBound && m.isBound, C = g.isBound || m.isBound, b = y.isBound && x.isBound, S = y.isBound || x.isBound, M = oe(g.offset, m.offset), P = oe(y.offset, x.offset), D = [0, 0], O = !1, R = !1;
  return z(P) < z(M) ? (D = [M, 0], O = C, R = E) : (D = [0, P], O = S, R = b), {
    isAllBound: R,
    isVerticalBound: C,
    isHorizontalBound: S,
    isBound: O,
    offset: D
  };
}
function xr(t, r, e, n, i, a) {
  var o = T(r, 2), s = o[0], u = o[1], l = t[0], f = e[0], c = e[1], v = Sn(c[1] - f[1]), p = Sn(c[0] - f[0]), d = u, h = s, g = -s / u;
  if (p) {
    if (!v) {
      if (a && !d)
        return {
          isBound: !1,
          offset: 0
        };
      if (h) {
        var E = (f[1] - l[1]) / g + l[0];
        return jo(E, f[0], c[0], n, i);
      } else {
        var y = f[1] - l[1], x = z(y) <= (i || 0);
        return {
          isBound: x,
          offset: x ? y : 0
        };
      }
    }
  } else {
    if (a && !h)
      return {
        isBound: !1,
        offset: 0
      };
    if (d) {
      var m = g * (f[0] - l[0]) + l[1];
      return jo(m, f[1], c[1], n, i);
    } else {
      var y = f[0] - l[0], x = z(y) <= (i || 0);
      return {
        isBound: x,
        offset: x ? y : 0
      };
    }
  }
  return {
    isBound: !1,
    offset: 0
  };
}
function Ku(t, r, e) {
  return r.map(function(n) {
    var i = h0(t, n), a = i.isBound, o = i.offset, s = i.isVerticalBound, u = i.isHorizontalBound, l = n.multiple, f = sr({
      datas: e,
      distX: o[0],
      distY: o[1]
    }).map(function(c, v) {
      return c * (l[v] ? 2 / l[v] : 0);
    });
    return {
      sign: l,
      isBound: a,
      isVerticalBound: s,
      isHorizontalBound: u,
      isSnap: !1,
      offset: f
    };
  });
}
function g0(t, r, e) {
  var n, i = _a(t, r, [0, 0], !1).map(function(v) {
    return _(_({}, v), { multiple: v.multiple.map(function(p) {
      return z(p) * 2;
    }) });
  }), a = Ku(t, i, e), o = yn(a, 0), s = yn(a, 1), u = 0, l = 0, f = o.isVerticalBound || s.isVerticalBound, c = o.isHorizontalBound || s.isHorizontalBound;
  return (f || c) && (n = T(Ng({
    datas: e,
    distX: -o.offset[0],
    distY: -s.offset[1]
  }), 2), u = n[0], l = n[1]), {
    vertical: {
      isBound: f,
      offset: u
    },
    horizontal: {
      isBound: c,
      offset: l
    }
  };
}
function m0(t, r) {
  var e = [], n = t[0], i = t[1];
  return n && i ? e.push([[0, i * 2], t, [-n, i]], [[n * 2, 0], t, [n, -i]]) : n ? (e.push([[n * 2, 0], [n, 1], [n, -1]]), r && e.push([[0, -1], [n, -1], [-n, -1]], [[0, 1], [n, 1], [-n, 1]])) : i ? (e.push([[0, i * 2], [1, i], [-1, i]]), r && e.push([[-1, 0], [-1, i], [-1, -i]], [[1, 0], [1, i], [1, -i]])) : e.push([[-1, 0], [-1, -1], [-1, 1]], [[1, 0], [1, -1], [1, 1]], [[0, -1], [-1, -1], [1, -1]], [[0, 1], [-1, 1], [1, 1]]), e;
}
function _a(t, r, e, n) {
  var i = t.state, a = i.allMatrix, o = i.is3d, s = Hr(a, 100, 100, o ? 4 : 3), u = wt(s, [0, 0]);
  return m0(e, n).map(function(l) {
    var f = T(l, 3), c = f[0], v = f[1], p = f[2], d = [
      wt(s, v),
      wt(s, p)
    ], h = c0(d), g = qu(u, d), m = g.vertical, y = g.horizontal, x = Ma(u, d) <= 0;
    return {
      multiple: c,
      centerSign: x,
      verticalSign: m,
      horizontalSign: y,
      lineConstants: h,
      line: [
        wt(r, v),
        wt(r, p)
      ]
    };
  });
}
function Yo(t, r, e, n) {
  var i = n ? t.map(function(a) {
    return je(a, n);
  }) : t;
  return [
    [i[0], i[1]],
    [i[1], i[3]],
    [i[3], i[2]],
    [i[2], i[0]]
  ].some(function(a) {
    var o = Ma(e, a) <= 0;
    return !Uu(r, a, o);
  });
}
function y0(t) {
  var r = T(t, 2), e = r[0], n = r[1], i = n[0] - e[0], a = n[1] - e[1];
  if (!i)
    return z(e[0]);
  if (!a)
    return z(e[1]);
  var o = a / i;
  return z((-o * e[0] + e[1]) / Math.sqrt(Math.pow(o, 2) + 1));
}
function x0(t) {
  var r = T(t, 2), e = r[0], n = r[1], i = n[0] - e[0], a = n[1] - e[1];
  if (!i)
    return [e[0], 0];
  if (!a)
    return [0, e[1]];
  var o = a / i, s = -o * e[0] + e[1];
  return [
    -s / (o + 1 / o),
    s / (o * o + 1)
  ];
}
function b0(t, r, e, n, i) {
  var a = t.props.innerBounds, o = i * Math.PI / 180;
  if (!a)
    return [];
  var s = a.left, u = a.top, l = a.width, f = a.height, c = s - n[0], v = s + l - n[0], p = u - n[1], d = u + f - n[1], h = [
    [c, p],
    [v, p],
    [c, d],
    [v, d]
  ], g = wt(e, [0, 0]);
  if (!Yo(e, h, g, 0))
    return [];
  var m = [], y = h.map(function(x) {
    return [
      Ut(x),
      Et([0, 0], x)
    ];
  });
  return [
    [e[0], e[1]],
    [e[1], e[3]],
    [e[3], e[2]],
    [e[2], e[0]]
  ].forEach(function(x) {
    var E = Et([0, 0], x0(x)), C = y0(x);
    m.push.apply(m, N([], T(y.filter(function(b) {
      var S = T(b, 1), M = S[0];
      return M && C <= M;
    }).map(function(b) {
      var S = T(b, 2), M = S[0], P = S[1], D = Math.acos(M ? C / M : 0), O = P + D, R = P - D;
      return [
        o + O - E,
        o + R - E
      ];
    }).reduce(function(b, S) {
      return b.push.apply(b, N([], T(S), !1)), b;
    }, []).filter(function(b) {
      return !Yo(r, h, g, b);
    }).map(function(b) {
      return et(b * 180 / Math.PI, Ft);
    })), !1));
  }), m;
}
function E0(t) {
  var r = t.props.innerBounds, e = Ur();
  if (!r)
    return {
      boundMap: e,
      vertical: [],
      horizontal: []
    };
  var n = t.getRect(), i = n.pos1, a = n.pos2, o = n.pos3, s = n.pos4, u = [i, a, o, s], l = wt(u, [0, 0]), f = r.left, c = r.top, v = r.width, p = r.height, d = [[f, c], [f, c + p]], h = [[f, c], [f + v, c]], g = [[f + v, c], [f + v, c + p]], m = [[f, c + p], [f + v, c + p]], y = _a(t, u, [0, 0], !1), x = [], E = [];
  return y.forEach(function(C) {
    var b = C.line, S = C.lineConstants, M = qu(l, b), P = M.horizontal, D = M.vertical, O = xr(b, S, h, D, 1, !0), R = xr(b, S, m, D, 1, !0), w = xr(b, S, d, P, 1, !0), I = xr(b, S, g, P, 1, !0);
    O.isBound && !e.top && (x.push(c), e.top = !0), R.isBound && !e.bottom && (x.push(c + p), e.bottom = !0), w.isBound && !e.left && (E.push(f), e.left = !0), I.isBound && !e.right && (E.push(f + v), e.right = !0);
  }), {
    boundMap: e,
    horizontal: x,
    vertical: E
  };
}
function S0(t, r, e, n) {
  var i = r[0] - t[0], a = r[1] - t[1];
  if (z(i) < Mt && (i = 0), z(a) < Mt && (a = 0), !i)
    return n ? [0, 0] : [0, e];
  if (!a)
    return n ? [e, 0] : [0, 0];
  var o = a / i, s = t[1] - o * t[0];
  if (n) {
    var u = o * (r[0] + e) + s;
    return [e, u - r[1]];
  } else {
    var l = (r[1] + e - s) / o;
    return [l - r[0], e];
  }
}
function Oi(t, r, e, n, i) {
  var a = S0(t, r, e, n);
  if (!a)
    return {
      isOutside: !1,
      offset: [0, 0]
    };
  var o = lr(t, r), s = lr(a, t), u = lr(a, r), l = s > o || u > o, f = T(sr({
    datas: i,
    distX: a[0],
    distY: a[1]
  }), 2), c = f[0], v = f[1];
  return {
    offset: [c, v],
    isOutside: l
  };
}
function xn(t, r) {
  return t.isBound ? t.offset : r.isSnap ? Ri(r).offset : 0;
}
function C0(t, r, e, n, i) {
  var a = T(r, 2), o = a[0], s = a[1], u = T(e, 2), l = u[0], f = u[1], c = T(n, 2), v = c[0], p = c[1], d = T(i, 2), h = d[0], g = d[1], m = -h, y = -g;
  if (t && o && s) {
    m = 0, y = 0;
    var x = [];
    if (l && f ? x.push([0, g], [h, 0]) : l ? x.push([h, 0]) : f ? x.push([0, g]) : v && p ? x.push([0, g], [h, 0]) : v ? x.push([h, 0]) : p && x.push([0, g]), x.length) {
      x.sort(function(S, M) {
        return Ut(tt([o, s], S)) - Ut(tt([o, s], M));
      });
      var E = x[0];
      if (E[0] && z(o) > Mt)
        m = -E[0], y = s * z(o + m) / z(o) - s;
      else if (E[1] && z(s) > Mt) {
        var C = s;
        y = -E[1], m = o * z(s + y) / z(C) - o;
      }
      if (t && f && l)
        if (z(m) > Mt && z(m) < z(h)) {
          var b = z(h) / z(m);
          m *= b, y *= b;
        } else if (z(y) > Mt && z(y) < z(g)) {
          var b = z(g) / z(y);
          m *= b, y *= b;
        } else
          m = oe(-h, m), y = oe(-g, y);
    }
  } else
    m = o || l ? -h : 0, y = s || f ? -g : 0;
  return [m, y];
}
function M0(t, r, e, n, i, a) {
  if (!he(t, "draggable"))
    return [
      {
        isSnap: !1,
        isBound: !1,
        offset: 0
      },
      {
        isSnap: !1,
        isBound: !1,
        offset: 0
      }
    ];
  var o = Da(a.absolutePoses, [r, e]), s = qt(o), u = s.left, l = s.right, f = s.top, c = s.bottom, v = {
    horizontal: o.map(function(I) {
      return I[1];
    }),
    vertical: o.map(function(I) {
      return I[0];
    })
  }, p = Sa(t.props.snapDirections), d = Ca(p, {
    left: u,
    right: l,
    top: f,
    bottom: c,
    center: (u + l) / 2,
    middle: (f + c) / 2
  }), h = zn(t, i, d, v), g = h.vertical, m = h.horizontal, y = g0(t, o, a), x = y.vertical, E = y.horizontal, C = g.isSnap, b = m.isSnap, S = g.isBound || x.isBound, M = m.isBound || E.isBound, P = oe(g.offset, x.offset), D = oe(m.offset, E.offset), O = T(C0(n, [r, e], [S, M], [C, b], [P, D]), 2), R = O[0], w = O[1];
  return [
    {
      isBound: S,
      isSnap: C,
      offset: R
    },
    {
      isBound: M,
      isSnap: b,
      offset: w
    }
  ];
}
function zn(t, r, e, n) {
  n === void 0 && (n = e);
  var i = Ea(An(t), n.vertical, n.horizontal), a = i.horizontal, o = i.vertical, s = r ? {
    horizontal: { isSnap: !1, index: -1 },
    vertical: { isSnap: !1, index: -1 }
  } : Bn(t, e.vertical, e.horizontal), u = s.horizontal, l = s.vertical, f = xn(a[0], u), c = xn(o[0], l), v = z(f), p = z(c);
  return {
    horizontal: {
      isBound: a[0].isBound,
      isSnap: u.isSnap,
      snapIndex: u.index,
      offset: f,
      dist: v,
      bounds: a,
      snap: u
    },
    vertical: {
      isBound: o[0].isBound,
      isSnap: l.isSnap,
      snapIndex: l.index,
      offset: c,
      dist: p,
      bounds: o,
      snap: l
    }
  };
}
function Ho(t, r, e, n, i) {
  var a = Ea(r, e, n), o = a.horizontal, s = a.vertical, u = Wu(t, e, n, [], [], i), l = u.horizontal, f = u.vertical, c = xn(o[0], l), v = xn(s[0], f), p = z(c), d = z(v);
  return {
    horizontal: {
      isBound: o[0].isBound,
      isSnap: l.isSnap,
      snapIndex: l.index,
      offset: c,
      dist: p,
      bounds: o,
      snap: l
    },
    vertical: {
      isBound: s[0].isBound,
      isSnap: f.isSnap,
      snapIndex: f.index,
      offset: v,
      dist: d,
      bounds: s,
      snap: f
    }
  };
}
function _0(t, r, e, n) {
  var i = Et(t, r) / Math.PI * 180, a = e.vertical, o = a.isBound, s = a.isSnap, u = a.dist, l = e.horizontal, f = l.isBound, c = l.isSnap, v = l.dist, p = i % 180, d = p < 3 || p > 177, h = p > 87 && p < 93;
  return v < u && (o || s && !h && (!n || !d)) ? "vertical" : f || c && !d && (!n || !h) ? "horizontal" : "";
}
function P0(t, r, e, n, i, a) {
  return e.map(function(o) {
    var s = T(o, 2), u = s[0], l = s[1], f = wt(r, u), c = wt(r, l), v = n ? T0(t, f, c, i) : zn(t, i, {
      vertical: [c[0]],
      horizontal: [c[1]]
    }), p = v.horizontal, d = p.offset, h = p.isBound, g = p.isSnap, m = v.vertical, y = m.offset, x = m.isBound, E = m.isSnap, C = tt(l, u);
    if (!y && !d)
      return {
        isBound: x || h,
        isSnap: E || g,
        sign: C,
        offset: [0, 0]
      };
    var b = _0(f, c, v, n);
    if (!b)
      return {
        sign: C,
        isBound: !1,
        isSnap: !1,
        offset: [0, 0]
      };
    var S = b === "vertical", M = [0, 0];
    return !n && z(l[0]) === 1 && z(l[1]) === 1 && u[0] !== l[0] && u[1] !== l[1] ? M = sr({
      datas: a,
      distX: -y,
      distY: -d
    }) : M = Oi(f, c, -(S ? y : d), S, a).offset, M = M.map(function(P, D) {
      return P * (C[D] ? 2 / C[D] : 0);
    }), {
      sign: C,
      isBound: S ? x : h,
      isSnap: S ? E : g,
      offset: M
    };
  });
}
function Xo(t, r) {
  return t.isBound ? t.offset : r.isSnap ? r.offset : 0;
}
function T0(t, r, e, n) {
  var i = i0(t, r, e), a = i.horizontal, o = i.vertical, s = n ? {
    horizontal: { isSnap: !1 },
    vertical: { isSnap: !1 }
  } : v0(t, r, e), u = s.horizontal, l = s.vertical, f = Xo(a, u), c = Xo(o, l), v = z(f), p = z(c);
  return {
    horizontal: {
      isBound: a.isBound,
      isSnap: u.isSnap,
      offset: f,
      dist: v
    },
    vertical: {
      isBound: o.isBound,
      isSnap: l.isSnap,
      offset: c,
      dist: p
    }
  };
}
function D0(t, r, e, n, i) {
  var a = [-e[0], -e[1]], o = t.state, s = o.width, u = o.height, l = t.props.bounds, f = 1 / 0, c = 1 / 0;
  if (l) {
    var v = [
      [e[0], -e[1]],
      [-e[0], e[1]]
    ], p = l.left, d = p === void 0 ? -1 / 0 : p, h = l.top, g = h === void 0 ? -1 / 0 : h, m = l.right, y = m === void 0 ? 1 / 0 : m, x = l.bottom, E = x === void 0 ? 1 / 0 : x;
    v.forEach(function(C) {
      var b = C[0] !== a[0], S = C[1] !== a[1], M = wt(r, C), P = Et(n, M) * 360 / Math.PI;
      if (S) {
        var D = M.slice();
        (z(P - 360) < 2 || z(P - 180) < 2) && (D[1] = n[1]);
        var O = Oi(n, D, (n[1] < M[1] ? E : g) - M[1], !1, i), R = T(O.offset, 2), w = R[1], I = O.isOutside;
        isNaN(w) || (c = u + (I ? 1 : -1) * z(w));
      }
      if (b) {
        var D = M.slice();
        (z(P - 90) < 2 || z(P - 270) < 2) && (D[0] = n[0]);
        var k = Oi(n, D, (n[0] < M[0] ? y : d) - M[0], !0, i), F = T(k.offset, 1), L = F[0], B = k.isOutside;
        isNaN(L) || (f = s + (B ? 1 : -1) * z(L));
      }
    });
  }
  return {
    maxWidth: f,
    maxHeight: c
  };
}
var Gt = {
  name: "draggable",
  props: [
    "draggable",
    "throttleDrag",
    "throttleDragRotate",
    "hideThrottleDragRotateLine",
    "startDragRotate",
    "edgeDraggable"
  ],
  events: [
    "dragStart",
    "drag",
    "dragEnd",
    "dragGroupStart",
    "dragGroup",
    "dragGroupEnd"
  ],
  requestStyle: function() {
    return ["left", "top", "right", "bottom"];
  },
  requestChildStyle: function() {
    return ["left", "top", "right", "bottom"];
  },
  render: function(t, r) {
    var e = t.props, n = e.hideThrottleDragRotateLine, i = e.throttleDragRotate, a = e.zoom, o = t.getState(), s = o.dragInfo, u = o.beforeOrigin;
    if (n || !i || !s)
      return [];
    var l = s.dist;
    if (!l[0] && !l[1])
      return [];
    var f = Ut(l), c = Et(l, [0, 0]);
    return [r.createElement("div", { className: Q("line", "horizontal", "dragline", "dashed"), key: "dragRotateGuideline", style: {
      width: "".concat(f, "px"),
      transform: "translate(".concat(u[0], "px, ").concat(u[1], "px) rotate(").concat(c, "rad) scaleY(").concat(a, ")")
    } })];
  },
  dragStart: function(t, r) {
    var e = r.datas, n = r.parentEvent, i = r.parentGesto, a = t.state, o = a.gestos, s = a.style;
    if (o.draggable)
      return !1;
    o.draggable = i || t.targetGesto, e.datas = {}, e.left = parseFloat(s.left || "") || 0, e.top = parseFloat(s.top || "") || 0, e.bottom = parseFloat(s.bottom || "") || 0, e.right = parseFloat(s.right || "") || 0, e.startValue = [0, 0], Yr(t, r), kn(t, r, "translate"), W0(t, e), e.prevDist = [0, 0], e.prevBeforeDist = [0, 0], e.isDrag = !1, e.deltaOffset = [0, 0];
    var u = it(t, r, _({ set: function(f) {
      e.startValue = f;
    } }, In(t, r))), l = n || W(t, "onDragStart", u);
    return l !== !1 ? (e.isDrag = !0, t.state.dragInfo = {
      startRect: t.getRect(),
      dist: [0, 0]
    }) : (o.draggable = null, e.isPinch = !1), e.isDrag ? u : !1;
  },
  drag: function(t, r) {
    if (r) {
      Rn(t, r, "translate");
      var e = r.datas, n = r.parentEvent, i = r.parentFlag, a = r.isPinch, o = r.deltaOffset, s = r.useSnap, u = r.isRequest, l = r.distX, f = r.distY, c = e.isDrag, v = e.prevDist, p = e.prevBeforeDist, d = e.startValue;
      if (c) {
        o && (l += o[0], f += o[1]);
        var h = t.props, g = h.parentMoveable, m = n ? 0 : h.throttleDrag || 0, y = n ? 0 : h.throttleDragRotate || 0, x = 0, E = !1, C = !1, b = !1, S = !1;
        if (!n && y > 0 && (l || f)) {
          var M = h.startDragRotate || 0, P = et(M + Et([0, 0], [l, f]) * 180 / Math.PI, y) - M, D = f * Math.abs(Math.cos((P - 90) / 180 * Math.PI)), O = l * Math.abs(Math.cos(P / 180 * Math.PI)), R = Ut([O, D]);
          x = P * Math.PI / 180, l = R * Math.cos(x), f = R * Math.sin(x);
        }
        if (!a && !n && !i) {
          var w = T(M0(t, l, f, y, !s && u || o, e), 2), I = w[0], k = w[1];
          E = I.isSnap, C = I.isBound, b = k.isSnap, S = k.isBound;
          var F = I.offset, L = k.offset;
          l += F, f += L;
        }
        var B = lt(Bu({ datas: e, distX: l, distY: f }), d), $ = lt(Fg({ datas: e, distX: l, distY: f }), d);
        Mo($, Ft), Mo(B, Ft), y || (!E && !C && ($[0] = et($[0], m), B[0] = et(B[0], m)), !b && !S && ($[1] = et($[1], m), B[1] = et(B[1], m)));
        var j = tt(B, d), G = tt($, d), q = tt(G, v), U = tt(j, p);
        e.prevDist = G, e.prevBeforeDist = j, e.passDelta = q, e.passDist = G;
        var H = e.left + j[0], X = e.top + j[1], Y = e.right - j[0], V = e.bottom - j[1], J = On(e, "translate(".concat($[0], "px, ").concat($[1], "px)"), "translate(".concat(G[0], "px, ").concat(G[1], "px)"));
        if (xa(r, J), t.state.dragInfo.dist = n ? [0, 0] : G, !(!n && !g && q.every(function(ft) {
          return !ft;
        }) && U.some(function(ft) {
          return !ft;
        }))) {
          var nt = t.state, rt = nt.width, Z = nt.height, K = it(t, r, _({ transform: J, dist: G, delta: q, translate: $, beforeDist: j, beforeDelta: U, beforeTranslate: B, left: H, top: X, right: Y, bottom: V, width: rt, height: Z, isPinch: a }, Lt({
            transform: J
          }, r)));
          return !n && W(t, "onDrag", K), K;
        }
      }
    }
  },
  dragAfter: function(t, r) {
    var e = r.datas, n = e.deltaOffset;
    return n[0] || n[1] ? (e.deltaOffset = [0, 0], this.drag(t, _(_({}, r), { deltaOffset: n }))) : !1;
  },
  dragEnd: function(t, r) {
    var e = r.parentEvent, n = r.datas;
    if (t.state.dragInfo = null, !!n.isDrag) {
      n.isDrag = !1;
      var i = Ht(t, r, {});
      return !e && W(t, "onDragEnd", i), i;
    }
  },
  dragGroupStart: function(t, r) {
    var e = r.datas, n = r.clientX, i = r.clientY, a = this.dragStart(t, r);
    if (!a)
      return !1;
    var o = Qn(t, this, "dragStart", [
      n || 0,
      i || 0
    ], r, !1, "draggable"), s = _(_({}, a), { targets: t.props.targets, events: o }), u = W(t, "onDragGroupStart", s);
    return e.isDrag = u !== !1, e.isDrag ? a : !1;
  },
  dragGroup: function(t, r) {
    var e = r.datas;
    if (e.isDrag) {
      var n = this.drag(t, r), i = r.datas.passDelta, a = Qn(t, this, "drag", i, r, !1, "draggable");
      if (n) {
        var o = _({ targets: t.props.targets, events: a }, n);
        return W(t, "onDragGroup", o), o;
      }
    }
  },
  dragGroupEnd: function(t, r) {
    var e = r.isDrag, n = r.datas;
    if (n.isDrag) {
      this.dragEnd(t, r);
      var i = Qn(t, this, "dragEnd", [0, 0], r, !1, "draggable");
      return W(t, "onDragGroupEnd", Ht(t, r, {
        targets: t.props.targets,
        events: i
      })), e;
    }
  },
  /**
       * @method Moveable.Draggable#request
       * @param {object} [e] - the draggable's request parameter
       * @param {number} [e.x] - x position
       * @param {number} [e.y] - y position
       * @param {number} [e.deltaX] - X number to move
       * @param {number} [e.deltaY] - Y number to move
       * @return {Moveable.Requester} Moveable Requester
       * @example
  
       * // Instantly Request (requestStart - request - requestEnd)
       * // Use Relative Value
       * moveable.request("draggable", { deltaX: 10, deltaY: 10 }, true);
       * // Use Absolute Value
       * moveable.request("draggable", { x: 200, y: 100 }, true);
       *
       * // requestStart
       * const requester = moveable.request("draggable");
       *
       * // request
       * // Use Relative Value
       * requester.request({ deltaX: 10, deltaY: 10 });
       * requester.request({ deltaX: 10, deltaY: 10 });
       * requester.request({ deltaX: 10, deltaY: 10 });
       * // Use Absolute Value
       * moveable.request("draggable", { x: 200, y: 100 });
       * moveable.request("draggable", { x: 220, y: 100 });
       * moveable.request("draggable", { x: 240, y: 100 });
       *
       * // requestEnd
       * requester.requestEnd();
       */
  request: function(t) {
    var r = {}, e = t.getRect(), n = 0, i = 0, a = !1;
    return {
      isControl: !1,
      requestStart: function(o) {
        return a = o.useSnap, { datas: r, useSnap: a };
      },
      request: function(o) {
        return "x" in o ? n = o.x - e.left : "deltaX" in o && (n += o.deltaX), "y" in o ? i = o.y - e.top : "deltaY" in o && (i += o.deltaY), { datas: r, distX: n, distY: i, useSnap: a };
      },
      requestEnd: function() {
        return { datas: r, isDrag: !0, useSnap: a };
      }
    };
  },
  unset: function(t) {
    t.state.gestos.draggable = null, t.state.dragInfo = null;
  }
};
function Zu(t, r) {
  var e = wt(t, r), n = [0, 0];
  return {
    fixedPosition: e,
    fixedDirection: r,
    fixedOffset: n
  };
}
function w0(t, r) {
  var e = t.allMatrix, n = t.is3d, i = t.width, a = t.height, o = n ? 4 : 3, s = [
    i / 2 * (1 + r[0]),
    a / 2 * (1 + r[1])
  ], u = bt(e, s, o), l = [0, 0];
  return {
    fixedPosition: u,
    fixedDirection: r,
    fixedOffset: l
  };
}
function Ju(t, r) {
  var e = t.allMatrix, n = t.is3d, i = t.width, a = t.height, o = n ? 4 : 3, s = Vg(r, i, a), u = bt(e, r, o), l = [
    i ? 0 : r[0],
    a ? 0 : r[1]
  ];
  return {
    fixedPosition: u,
    fixedDirection: s,
    fixedOffset: l
  };
}
var Wo = Oa("resizable"), Ii = {
  name: "resizable",
  ableGroup: "size",
  canPinch: !0,
  props: [
    "resizable",
    "throttleResize",
    "renderDirections",
    "displayAroundControls",
    "keepRatio",
    "resizeFormat",
    "keepRatioFinally",
    "edge",
    "checkResizableError"
  ],
  events: [
    "resizeStart",
    "beforeResize",
    "resize",
    "resizeEnd",
    "resizeGroupStart",
    "beforeResizeGroup",
    "resizeGroup",
    "resizeGroupEnd"
  ],
  render: Yu("resizable"),
  dragControlCondition: Wo,
  viewClassName: Ra("resizable"),
  dragControlStart: function(t, r) {
    var e, n = r.inputEvent, i = r.isPinch, a = r.isGroup, o = r.parentDirection, s = r.parentGesto, u = r.datas, l = r.parentFixedDirection, f = r.parentEvent, c = pl(o, i, n, u), v = t.state, p = v.target, d = v.width, h = v.height, g = v.gestos;
    if (!c || !p || g.resizable)
      return !1;
    g.resizable = s || t.controlGesto, !i && Yr(t, r), u.datas = {}, u.direction = c, u.startOffsetWidth = d, u.startOffsetHeight = h, u.prevWidth = 0, u.prevHeight = 0, u.minSize = [0, 0], u.startWidth = v.inlineCSSWidth || v.cssWidth, u.startHeight = v.inlineCSSHeight || v.cssHeight, u.maxSize = [1 / 0, 1 / 0], a || (u.minSize = [
      v.minOffsetWidth,
      v.minOffsetHeight
    ], u.maxSize = [
      v.maxOffsetWidth,
      v.maxOffsetHeight
    ]);
    var m = t.props.transformOrigin || "% %";
    u.transformOrigin = m && $t(m) ? m.split(" ") : m, u.startOffsetMatrix = v.offsetMatrix, u.startTransformOrigin = v.transformOrigin, u.isWidth = (e = r == null ? void 0 : r.parentIsWidth) !== null && e !== void 0 ? e : !c[0] && !c[1] || c[0] || !c[1];
    function y(P) {
      u.ratio = P && isFinite(P) ? P : 0;
    }
    u.startPositions = Kt(t.state);
    function x(P) {
      var D = Zu(u.startPositions, P);
      u.fixedDirection = D.fixedDirection, u.fixedPosition = D.fixedPosition, u.fixedOffset = D.fixedOffset;
    }
    function E(P) {
      var D = Ju(t.state, P);
      u.fixedDirection = D.fixedDirection, u.fixedPosition = D.fixedPosition, u.fixedOffset = D.fixedOffset;
    }
    function C(P) {
      u.minSize = [
        vt("".concat(P[0]), 0) || 0,
        vt("".concat(P[1]), 0) || 0
      ];
    }
    function b(P) {
      var D = [
        P[0] || 1 / 0,
        P[1] || 1 / 0
      ];
      (!ee(D[0]) || isFinite(D[0])) && (D[0] = vt("".concat(D[0]), 0) || 1 / 0), (!ee(D[1]) || isFinite(D[1])) && (D[1] = vt("".concat(D[1]), 0) || 1 / 0), u.maxSize = D;
    }
    y(d / h), x(l || [-c[0], -c[1]]), u.setFixedDirection = x, u.setFixedPosition = E, u.setMin = C, u.setMax = b;
    var S = it(t, r, {
      direction: c,
      startRatio: u.ratio,
      set: function(P) {
        var D = T(P, 2), O = D[0], R = D[1];
        u.startWidth = O, u.startHeight = R;
      },
      setMin: C,
      setMax: b,
      setRatio: y,
      setFixedDirection: x,
      setFixedPosition: E,
      setOrigin: function(P) {
        u.transformOrigin = P;
      },
      dragStart: Gt.dragStart(t, new ie().dragStart([0, 0], r))
    }), M = f || W(t, "onResizeStart", S);
    return u.startFixedDirection = u.fixedDirection, u.startFixedPosition = u.fixedPosition, M !== !1 && (u.isResize = !0, t.state.snapRenderInfo = {
      request: r.isRequest,
      direction: c
    }), u.isResize ? S : !1;
  },
  dragControl: function(t, r) {
    var e, n = r.datas, i = r.parentFlag, a = r.isPinch, o = r.parentKeepRatio, s = r.dragClient, u = r.parentDist, l = r.useSnap, f = r.isRequest, c = r.isGroup, v = r.parentEvent, p = r.resolveMatrix, d = n.isResize, h = n.transformOrigin, g = n.startWidth, m = n.startHeight, y = n.prevWidth, x = n.prevHeight, E = n.minSize, C = n.maxSize, b = n.ratio, S = n.startOffsetWidth, M = n.startOffsetHeight, P = n.isWidth;
    if (!d)
      return;
    if (p) {
      var D = t.state.is3d, O = n.startOffsetMatrix, R = n.startTransformOrigin, w = D ? 4 : 3, I = Ie(gn(r)), k = Math.sqrt(I.length);
      w !== k && (I = rr(I, k, w));
      var F = We(O, I, R, w), L = Hr(F, S, M, w);
      n.startPositions = L, n.nextTargetMatrix = I, n.nextAllMatrix = F;
    }
    var B = Gr(t.props, "resizable"), $ = B.resizeFormat, j = B.throttleResize, G = j === void 0 ? i ? 0 : 1 : j, q = B.parentMoveable, U = B.keepRatioFinally, H = n.direction, X = H, Y = 0, V = 0;
    !H[0] && !H[1] && (X = [1, 1]);
    var J = b && (o != null ? o : B.keepRatio) || !1;
    function nt() {
      var St = n.fixedDirection, Pt = bl(X, J, n, r);
      Y = Pt.distWidth, V = Pt.distHeight;
      var dr = X[0] - St[0] || J ? Math.max(S + Y, Ft) : S, hr = X[1] - St[1] || J ? Math.max(M + V, Ft) : M;
      return J && S && M && (P ? hr = dr / b : dr = hr * b), [dr, hr];
    }
    var rt = T(nt(), 2), Z = rt[0], K = rt[1];
    v || (n.setFixedDirection(n.fixedDirection), W(t, "onBeforeResize", it(t, r, {
      startFixedDirection: n.startFixedDirection,
      startFixedPosition: n.startFixedPosition,
      setFixedDirection: function(St) {
        var Pt;
        return n.setFixedDirection(St), Pt = T(nt(), 2), Z = Pt[0], K = Pt[1], [Z, K];
      },
      setFixedPosition: function(St) {
        var Pt;
        return n.setFixedPosition(St), Pt = T(nt(), 2), Z = Pt[0], K = Pt[1], [Z, K];
      },
      boundingWidth: Z,
      boundingHeight: K,
      setSize: function(St) {
        var Pt;
        Pt = T(St, 2), Z = Pt[0], K = Pt[1];
      }
    }, !0)));
    var ft = s;
    s || (!i && a ? ft = Zg(t, [0, 0]) : ft = n.fixedPosition);
    var at = [0, 0];
    a || (at = H0(t, Z, K, H, ft, !l && f, n)), u && (!u[0] && (at[0] = 0), !u[1] && (at[1] = 0));
    function ot() {
      var St;
      $ && (St = T($([Z, K]), 2), Z = St[0], K = St[1]), Z = et(Z, G), K = et(K, G);
    }
    if (J) {
      X[0] && X[1] && at[0] && at[1] && (z(at[0]) > z(at[1]) ? at[1] = 0 : at[0] = 0);
      var ut = !at[0] && !at[1];
      ut && ot(), X[0] && !X[1] || at[0] && !at[1] || ut && P ? (Z += at[0], K = Z / b) : (!X[0] && X[1] || !at[0] && at[1] || ut && !P) && (K += at[1], Z = K * b);
    } else
      Z += at[0], K += at[1], Z = Math.max(0, Z), K = Math.max(0, K);
    e = T(Us([Z, K], E, C, J ? b : !1), 2), Z = e[0], K = e[1], ot(), J && (c || U) && (P ? K = Z / b : Z = K * b), Y = Z - S, V = K - M;
    var xt = [Y - y, V - x];
    n.prevWidth = Y, n.prevHeight = V;
    var dt = Kg(t, Z, K, ft, h, n);
    if (!(!q && xt.every(function(St) {
      return !St;
    }) && dt.every(function(St) {
      return !St;
    }))) {
      var st = Gt.drag(t, Xe(r, t.state, dt, !!a, !1, "draggable")), ct = st.transform, Rt = g + Y, At = m + V, It = it(t, r, _({ width: Rt, height: At, offsetWidth: Math.round(Z), offsetHeight: Math.round(K), startRatio: b, boundingWidth: Z, boundingHeight: K, direction: H, dist: [Y, V], delta: xt, isPinch: !!a, drag: st }, hl({
        style: {
          width: "".concat(Rt, "px"),
          height: "".concat(At, "px")
        },
        transform: ct
      }, st, r)));
      return !v && W(t, "onResize", It), It;
    }
  },
  dragControlAfter: function(t, r) {
    var e = r.datas, n = e.isResize, i = e.startOffsetWidth, a = e.startOffsetHeight, o = e.prevWidth, s = e.prevHeight;
    if (!(!n || t.props.checkResizableError === !1)) {
      var u = t.state, l = u.width, f = u.height, c = l - (i + o), v = f - (a + s), p = z(c) > 3, d = z(v) > 3;
      if (p && (e.startWidth += c, e.startOffsetWidth += c, e.prevWidth += c), d && (e.startHeight += v, e.startOffsetHeight += v, e.prevHeight += v), p || d)
        return this.dragControl(t, r);
    }
  },
  dragControlEnd: function(t, r) {
    var e = r.datas, n = r.parentEvent;
    if (e.isResize) {
      e.isResize = !1;
      var i = Ht(t, r, {});
      return !n && W(t, "onResizeEnd", i), i;
    }
  },
  dragGroupControlCondition: Wo,
  dragGroupControlStart: function(t, r) {
    var e = r.datas, n = this.dragControlStart(t, _(_({}, r), { isGroup: !0 }));
    if (!n)
      return !1;
    var i = Qt(t, "resizable", r), a = e.startOffsetWidth, o = e.startOffsetHeight;
    function s() {
      var p = e.minSize;
      i.forEach(function(d) {
        var h = d.datas, g = h.minSize, m = h.startOffsetWidth, y = h.startOffsetHeight, x = a * (m ? g[0] / m : 0), E = o * (y ? g[1] / y : 0);
        p[0] = Math.max(p[0], x), p[1] = Math.max(p[1], E);
      });
    }
    function u() {
      var p = e.maxSize;
      i.forEach(function(d) {
        var h = d.datas, g = h.maxSize, m = h.startOffsetWidth, y = h.startOffsetHeight, x = a * (m ? g[0] / m : 0), E = o * (y ? g[1] / y : 0);
        p[0] = Math.min(p[0], x), p[1] = Math.min(p[1], E);
      });
    }
    var l = fr(t, this, "dragControlStart", r, function(p, d) {
      return mn(t, p, e, d);
    });
    s(), u();
    var f = function(p) {
      n.setFixedDirection(p), l.forEach(function(d, h) {
        d.setFixedDirection(p), mn(t, d.moveable, e, i[h]);
      });
    };
    e.setFixedDirection = f;
    var c = _(_({}, n), { targets: t.props.targets, events: l.map(function(p) {
      return _(_({}, p), { setMin: function(d) {
        p.setMin(d), s();
      }, setMax: function(d) {
        p.setMax(d), u();
      } });
    }), setFixedDirection: f, setMin: function(p) {
      n.setMin(p), s();
    }, setMax: function(p) {
      n.setMax(p), u();
    } }), v = W(t, "onResizeGroupStart", c);
    return e.isResize = v !== !1, e.isResize ? n : !1;
  },
  dragGroupControl: function(t, r) {
    var e = r.datas;
    if (e.isResize) {
      var n = Gr(t.props, "resizable");
      Ln(t, "onBeforeResize", function(p) {
        W(t, "onBeforeResizeGroup", it(t, r, _(_({}, p), { targets: n.targets }), !0));
      });
      var i = this.dragControl(t, _(_({}, r), { isGroup: !0 }));
      if (i) {
        var a = i.boundingWidth, o = i.boundingHeight, s = i.dist, u = n.keepRatio, l = [
          a / (a - s[0]),
          o / (o - s[1])
        ], f = e.fixedPosition, c = fr(t, this, "dragControl", r, function(p, d) {
          var h = T(kt(Ye(t.rotation / 180 * Math.PI, 3), [
            d.datas.originalX * l[0],
            d.datas.originalY * l[1],
            1
          ], 3), 2), g = h[0], m = h[1];
          return _(_({}, d), { parentDist: null, parentScale: l, dragClient: lt(f, [g, m]), parentKeepRatio: u });
        }), v = _({ targets: n.targets, events: c }, i);
        return W(t, "onResizeGroup", v), v;
      }
    }
  },
  dragGroupControlEnd: function(t, r) {
    var e = r.isDrag, n = r.datas;
    if (n.isResize) {
      this.dragControlEnd(t, r);
      var i = fr(t, this, "dragControlEnd", r), a = Ht(t, r, {
        targets: t.props.targets,
        events: i
      });
      return W(t, "onResizeGroupEnd", a), e;
    }
  },
  /**
       * @method Moveable.Resizable#request
       * @param {Moveable.Resizable.ResizableRequestParam} e - the Resizable's request parameter
       * @return {Moveable.Requester} Moveable Requester
       * @example
  
       * // Instantly Request (requestStart - request - requestEnd)
       * // Use Relative Value
       * moveable.request("resizable", { deltaWidth: 10, deltaHeight: 10 }, true);
       *
       * // Use Absolute Value
       * moveable.request("resizable", { offsetWidth: 100, offsetHeight: 100 }, true);
       *
       * // requestStart
       * const requester = moveable.request("resizable");
       *
       * // request
       * // Use Relative Value
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       *
       * // Use Absolute Value
       * moveable.request("resizable", { offsetWidth: 100, offsetHeight: 100 });
       * moveable.request("resizable", { offsetWidth: 110, offsetHeight: 100 });
       * moveable.request("resizable", { offsetWidth: 120, offsetHeight: 100 });
       *
       * // requestEnd
       * requester.requestEnd();
       */
  request: function(t) {
    var r = {}, e = 0, n = 0, i = !1, a = t.getRect();
    return {
      isControl: !0,
      requestStart: function(o) {
        var s;
        return i = o.useSnap, {
          datas: r,
          parentDirection: o.direction || [1, 1],
          parentIsWidth: (s = o == null ? void 0 : o.horizontal) !== null && s !== void 0 ? s : !0,
          useSnap: i
        };
      },
      request: function(o) {
        return "offsetWidth" in o ? e = o.offsetWidth - a.offsetWidth : "deltaWidth" in o && (e += o.deltaWidth), "offsetHeight" in o ? n = o.offsetHeight - a.offsetHeight : "deltaHeight" in o && (n += o.deltaHeight), {
          datas: r,
          parentDist: [e, n],
          parentKeepRatio: o.keepRatio,
          useSnap: i
        };
      },
      requestEnd: function() {
        return { datas: r, isDrag: !0, useSnap: i };
      }
    };
  },
  unset: function(t) {
    t.state.gestos.resizable = null;
  }
};
function ti(t, r, e, n, i) {
  var a = t.props.groupable, o = t.state, s = o.is3d ? 4 : 3, u = r.origin, l = bt(
    t.state.rootMatrix,
    // TO-DO #710
    tt([u[0], u[1]], a ? [0, 0] : [o.left, o.top]),
    s
  ), f = lt([i.left, i.top], l);
  r.startAbsoluteOrigin = f, r.prevDeg = Et(f, [e, n]) / Math.PI * 180, r.defaultDeg = r.prevDeg, r.prevSnapDeg = 0, r.loop = 0, r.startDist = lr(f, [e, n]);
}
function cn(t, r, e) {
  var n = e.defaultDeg, i = e.prevDeg, a = i % 360, o = Math.floor(i / 360);
  a < 0 && (a += 360), a > t && a > 270 && t < 90 ? ++o : a < t && a < 90 && t > 270 && --o;
  var s = r * (o * 360 + t - n);
  return e.prevDeg = n + s, s;
}
function ri(t, r, e, n) {
  return cn(Et(n.startAbsoluteOrigin, [t, r]) / Math.PI * 180, e, n);
}
function ei(t, r, e, n, i, a) {
  var o = t.props.throttleRotate, s = o === void 0 ? 0 : o, u = e.prevSnapDeg, l = 0, f = !1;
  if (a) {
    var c = Y0(t, r, n, i + n);
    f = c.isSnap, l = i + c.dist;
  }
  f || (l = et(i + n, s));
  var v = l - i;
  return e.prevSnapDeg = v, [v - u, v, l];
}
function Qu(t, r, e) {
  var n = T(r, 4), i = n[0], a = n[1], o = n[2], s = n[3];
  if (t === "none")
    return [];
  if (_t(t))
    return t.map(function(g) {
      return Qu(g, [i, a, o, s], e)[0];
    });
  var u = T((t || "top").split("-"), 2), l = u[0], f = u[1], c = [i, a];
  l === "left" ? c = [o, i] : l === "right" ? c = [a, s] : l === "bottom" && (c = [s, o]);
  var v = [
    (c[0][0] + c[1][0]) / 2,
    (c[0][1] + c[1][1]) / 2
  ], p = cl(c, e);
  if (f) {
    var d = f === "top" || f === "left", h = l === "bottom" || l === "left";
    v = c[d && !h || !d && h ? 0 : 1];
  }
  return [[v, p]];
}
function ki(t, r) {
  if (r.isRequest)
    return r.requestAble === "rotatable";
  var e = r.inputEvent.target;
  if (Dt(e, Q("rotation-control")) || t.props.rotateAroundControls && Dt(e, Q("around-control")) || Dt(e, Q("control")) && Dt(e, Q("rotatable")))
    return !0;
  var n = t.props.rotationTarget;
  return n ? Ia(n, !0).some(function(i) {
    return i ? e === i || e.contains(i) : !1;
  }) : !1;
}
var R0 = `.rotation {
position: absolute;
height: 40px;
width: 1px;
transform-origin: 50% 100%;
height: calc(40px * var(--zoom));
top: auto;
left: 0;
bottom: 100%;
will-change: transform;
}
.rotation .rotation-line {
display: block;
width: 100%;
height: 100%;
transform-origin: 50% 50%;
}
.rotation .rotation-control {
border-color: #4af;
border-color: var(--moveable-color);
background:#fff;
cursor: alias;
}
:global .view-rotation-dragging, .rotatable.direction.control {
cursor: alias;
}
.rotatable.direction.control.move {
cursor: move;
}
`, O0 = {
  name: "rotatable",
  canPinch: !0,
  props: [
    "rotatable",
    "rotationPosition",
    "throttleRotate",
    "renderDirections",
    "rotationTarget",
    "rotateAroundControls",
    "edge",
    "resolveAblesWithRotatable",
    "displayAroundControls"
  ],
  events: [
    "rotateStart",
    "beforeRotate",
    "rotate",
    "rotateEnd",
    "rotateGroupStart",
    "beforeRotateGroup",
    "rotateGroup",
    "rotateGroupEnd"
  ],
  css: [R0],
  viewClassName: function(t) {
    return t.isDragging("rotatable") ? Q("view-rotation-dragging") : "";
  },
  render: function(t, r) {
    var e = Gr(t.props, "rotatable"), n = e.rotatable, i = e.rotationPosition, a = e.zoom, o = e.renderDirections, s = e.rotateAroundControls, u = e.resolveAblesWithRotatable, l = t.getState(), f = l.renderPoses, c = l.direction;
    if (!n)
      return null;
    var v = Qu(i, f, c), p = [];
    if (v.forEach(function(m, y) {
      var x = T(m, 2), E = x[0], C = x[1];
      p.push(r.createElement(
        "div",
        { key: "rotation".concat(y), className: Q("rotation"), style: {
          // tslint:disable-next-line: max-line-length
          transform: "translate(-50%) translate(".concat(E[0], "px, ").concat(E[1], "px) rotate(").concat(C, "rad)")
        } },
        r.createElement("div", { className: Q("line rotation-line"), style: {
          transform: "scaleX(".concat(a, ")")
        } }),
        r.createElement("div", { className: Q("control rotation-control"), style: {
          transform: "translate(0.5px) scale(".concat(a, ")")
        } })
      ));
    }), o) {
      var d = vr(u || {}), h = {};
      d.forEach(function(m) {
        u[m].forEach(function(y) {
          h[y] = m;
        });
      });
      var g = [];
      _t(o) && (g = o.map(function(m) {
        var y = h[m];
        return {
          data: y ? { resolve: y } : {},
          classNames: y ? ["move"] : [],
          dir: m
        };
      })), p.push.apply(p, N([], T(Nu(t, "rotatable", g, r)), !1));
    }
    return s && p.push.apply(p, N([], T(Xu(t, r)), !1)), p;
  },
  dragControlCondition: ki,
  dragControlStart: function(t, r) {
    var e, n, i = r.datas, a = r.clientX, o = r.clientY, s = r.parentRotate, u = r.parentFlag, l = r.isPinch, f = r.isRequest, c = t.state, v = c.target, p = c.left, d = c.top, h = c.direction, g = c.beforeDirection, m = c.targetTransform, y = c.moveableClientRect, x = c.offsetMatrix, E = c.targetMatrix, C = c.allMatrix, b = c.width, S = c.height;
    if (!f && !v)
      return !1;
    var M = t.getRect();
    i.rect = M, i.transform = m, i.left = p, i.top = d;
    var P = function(X) {
      var Y = Ju(t.state, X);
      i.fixedDirection = Y.fixedDirection, i.fixedOffset = Y.fixedOffset, i.fixedPosition = Y.fixedPosition, G && G.setFixedPosition(X);
    }, D = function(X) {
      var Y = w0(t.state, X);
      i.fixedDirection = Y.fixedDirection, i.fixedOffset = Y.fixedOffset, i.fixedPosition = Y.fixedPosition, G && G.setFixedDirection(X);
    }, O = a, R = o;
    if (f || l || u) {
      var w = s || 0;
      i.beforeInfo = {
        origin: M.beforeOrigin,
        prevDeg: w,
        defaultDeg: w,
        prevSnapDeg: 0,
        startDist: 0
      }, i.afterInfo = _(_({}, i.beforeInfo), { origin: M.origin }), i.absoluteInfo = _(_({}, i.beforeInfo), { origin: M.origin, startValue: w });
    } else {
      var I = (n = r.inputEvent) === null || n === void 0 ? void 0 : n.target;
      if (I) {
        var k = I.getAttribute("data-direction") || "", F = Gg[k];
        if (F) {
          i.isControl = !0, i.isAroundControl = Dt(I, Q("around-control")), i.controlDirection = F;
          var L = I.getAttribute("data-resolve");
          L && (i.resolveAble = L);
          var B = am(c.rootMatrix, c.renderPoses, y);
          e = T(wt(B, F), 2), O = e[0], R = e[1];
        }
      }
      i.beforeInfo = { origin: M.beforeOrigin }, i.afterInfo = { origin: M.origin }, i.absoluteInfo = {
        origin: M.origin,
        startValue: M.rotation
      };
      var $ = P;
      P = function(X) {
        var Y = c.is3d ? 4 : 3, V = T(lt(xu(E, Y), X), 2), J = V[0], nt = V[1], rt = kt(x, Ar([J, nt], Y)), Z = kt(C, Ar([X[0], X[1]], Y));
        $(X);
        var K = c.posDelta;
        i.beforeInfo.origin = tt(rt, K), i.afterInfo.origin = tt(Z, K), i.absoluteInfo.origin = tt(Z, K), ti(t, i.beforeInfo, O, R, y), ti(t, i.afterInfo, O, R, y), ti(t, i.absoluteInfo, O, R, y);
      }, D = function(X) {
        var Y = wt([
          [0, 0],
          [b, 0],
          [0, S],
          [b, S]
        ], X);
        P(Y);
      };
    }
    i.startClientX = O, i.startClientY = R, i.direction = h, i.beforeDirection = g, i.startValue = 0, i.datas = {}, kn(t, r, "rotate");
    var j = !1, G = !1;
    if (i.isControl && i.resolveAble) {
      var q = i.resolveAble;
      q === "resizable" && (G = Ii.dragControlStart(t, _(_({}, new ie("resizable").dragStart([0, 0], r)), { parentPosition: i.controlPosition, parentFixedPosition: i.fixedPosition })));
    }
    G || (j = Gt.dragStart(t, new ie().dragStart([0, 0], r))), P(om(t));
    var U = it(t, r, _(_({ set: function(X) {
      i.startValue = X * Math.PI / 180;
    }, setFixedDirection: D, setFixedPosition: P }, In(t, r)), { dragStart: j, resizeStart: G })), H = W(t, "onRotateStart", U);
    return i.isRotate = H !== !1, c.snapRenderInfo = {
      request: r.isRequest
    }, i.isRotate ? U : !1;
  },
  dragControl: function(t, r) {
    var e, n, i, a = r.datas, o = r.clientDistX, s = r.clientDistY, u = r.parentRotate, l = r.parentFlag, f = r.isPinch, c = r.groupDelta, v = r.resolveMatrix, p = a.beforeDirection, d = a.beforeInfo, h = a.afterInfo, g = a.absoluteInfo, m = a.isRotate, y = a.startValue, x = a.rect, E = a.startClientX, C = a.startClientY;
    if (m) {
      Rn(t, r, "rotate");
      var b = Lg(r), S = p * b, M = t.props.parentMoveable, P = 0, D, O, R = 0, w, I, k = 0, F, L, B = 180 / Math.PI * y, $ = g.startValue, j = !1, G = E + o, q = C + s;
      if (!l && "parentDist" in r) {
        var U = r.parentDist;
        D = U, w = U, F = U;
      } else
        f || l ? (D = cn(u, p, d), w = cn(u, S, h), F = cn(u, S, g)) : (D = ri(G, q, p, d), w = ri(G, q, S, h), F = ri(G, q, S, g), j = !0);
      if (O = B + D, I = B + w, L = $ + F, W(t, "onBeforeRotate", it(t, r, {
        beforeRotation: O,
        rotation: I,
        absoluteRotation: L,
        setRotation: function(ft) {
          w = ft - B, D = w, F = w;
        }
      }, !0)), e = T(ei(t, x, d, D, B, j), 3), P = e[0], D = e[1], O = e[2], n = T(ei(t, x, h, w, B, j), 3), R = n[0], w = n[1], I = n[2], i = T(ei(t, x, g, F, $, j), 3), k = i[0], F = i[1], L = i[2], !(!k && !R && !P && !M && !v)) {
        var H = On(a, "rotate(".concat(I, "deg)"), "rotate(".concat(w, "deg)"));
        v && (a.fixedPosition = ba(t, a.targetAllTransform, a.fixedDirection, a.fixedOffset, a));
        var X = Ug(t, w, a), Y = tt(lt(c || [0, 0], X), a.prevInverseDist || [0, 0]);
        a.prevInverseDist = X, a.requestValue = null;
        var V = Gu(t, H, Y, f, r), J = V, nt = lr([G, q], g.startAbsoluteOrigin) - g.startDist, rt = void 0;
        if (a.resolveAble === "resizable") {
          var Z = Ii.dragControl(t, _(_({}, Xe(r, t.state, [r.deltaX, r.deltaY], !!f, !1, "resizable")), { resolveMatrix: !0, parentDistance: nt }));
          Z && (rt = Z, J = hl(J, Z, r));
        }
        var K = it(t, r, _(_({ delta: R, dist: w, rotate: I, rotation: I, beforeDist: D, beforeDelta: P, beforeRotate: O, beforeRotation: O, absoluteDist: F, absoluteDelta: k, absoluteRotate: L, absoluteRotation: L, isPinch: !!f, resize: rt }, V), J));
        return W(t, "onRotate", K), K;
      }
    }
  },
  dragControlEnd: function(t, r) {
    var e = r.datas;
    if (e.isRotate) {
      e.isRotate = !1;
      var n = Ht(t, r, {});
      return W(t, "onRotateEnd", n), n;
    }
  },
  dragGroupControlCondition: ki,
  dragGroupControlStart: function(t, r) {
    var e = r.datas, n = t.state, i = n.left, a = n.top, o = n.beforeOrigin, s = this.dragControlStart(t, r);
    if (!s)
      return !1;
    s.set(e.beforeDirection * t.rotation);
    var u = fr(t, this, "dragControlStart", r, function(c, v) {
      var p = c.state, d = p.left, h = p.top, g = p.beforeOrigin, m = lt(tt([d, h], [i, a]), tt(g, o));
      return v.datas.startGroupClient = m, v.datas.groupClient = m, _(_({}, v), { parentRotate: 0 });
    }), l = _(_({}, s), { targets: t.props.targets, events: u }), f = W(t, "onRotateGroupStart", l);
    return e.isRotate = f !== !1, e.isRotate ? s : !1;
  },
  dragGroupControl: function(t, r) {
    var e = r.datas;
    if (e.isRotate) {
      Ln(t, "onBeforeRotate", function(l) {
        W(t, "onBeforeRotateGroup", it(t, r, _(_({}, l), { targets: t.props.targets }), !0));
      });
      var n = this.dragControl(t, r);
      if (n) {
        var i = e.beforeDirection, a = n.beforeDist, o = a / 180 * Math.PI, s = fr(t, this, "dragControl", r, function(l, f) {
          var c = f.datas.startGroupClient, v = T(f.datas.groupClient, 2), p = v[0], d = v[1], h = T(je(c, o * i), 2), g = h[0], m = h[1], y = [g - p, m - d];
          return f.datas.groupClient = [g, m], _(_({}, f), { parentRotate: a, groupDelta: y });
        });
        t.rotation = i * n.beforeRotation;
        var u = _({ targets: t.props.targets, events: s, set: function(l) {
          t.rotation = l;
        }, setGroupRotation: function(l) {
          t.rotation = l;
        } }, n);
        return W(t, "onRotateGroup", u), u;
      }
    }
  },
  dragGroupControlEnd: function(t, r) {
    var e = r.isDrag, n = r.datas;
    if (n.isRotate) {
      this.dragControlEnd(t, r);
      var i = fr(t, this, "dragControlEnd", r), a = Ht(t, r, {
        targets: t.props.targets,
        events: i
      });
      return W(t, "onRotateGroupEnd", a), e;
    }
  },
  /**
       * @method Moveable.Rotatable#request
       * @param {object} [e] - the Resizable's request parameter
       * @param {number} [e.deltaRotate=0] -  delta number of rotation
       * @param {number} [e.rotate=0] - absolute number of moveable's rotation
       * @return {Moveable.Requester} Moveable Requester
       * @example
  
       * // Instantly Request (requestStart - request - requestEnd)
       * moveable.request("rotatable", { deltaRotate: 10 }, true);
       *
       * * moveable.request("rotatable", { rotate: 10 }, true);
       *
       * // requestStart
       * const requester = moveable.request("rotatable");
       *
       * // request
       * requester.request({ deltaRotate: 10 });
       * requester.request({ deltaRotate: 10 });
       * requester.request({ deltaRotate: 10 });
       *
       * requester.request({ rotate: 10 });
       * requester.request({ rotate: 20 });
       * requester.request({ rotate: 30 });
       *
       * // requestEnd
       * requester.requestEnd();
       */
  request: function(t) {
    var r = {}, e = 0, n = t.getRotation();
    return {
      isControl: !0,
      requestStart: function() {
        return { datas: r };
      },
      request: function(i) {
        return "deltaRotate" in i ? e += i.deltaRotate : "rotate" in i && (e = i.rotate - n), { datas: r, parentDist: e };
      },
      requestEnd: function() {
        return { datas: r, isDrag: !0 };
      }
    };
  }
};
function I0(t, r) {
  var e, n = t.direction, i = t.classNames, a = t.size, o = t.pos, s = t.zoom, u = t.key, l = n === "horizontal", f = l ? "Y" : "X";
  return r.createElement("div", {
    key: u,
    className: i.join(" "),
    style: (e = {}, e[l ? "width" : "height"] = "".concat(a), e.transform = "translate(".concat(o[0], ", ").concat(o[1], ") translate").concat(f, "(-50%) scale").concat(f, "(").concat(s, ")"), e)
  });
}
function Pa(t, r) {
  return I0(_(_({}, t), { classNames: N([
    Q("line", "guideline", t.direction)
  ], T(t.classNames), !1).filter(function(e) {
    return e;
  }), size: t.size || "".concat(t.sizeValue, "px"), pos: t.pos || t.posValue.map(function(e) {
    return "".concat(et(e, 0.1), "px");
  }) }), r);
}
function Vo(t, r, e, n, i, a, o, s) {
  var u = t.props.zoom;
  return e.map(function(l, f) {
    var c = l.type, v = l.pos, p = [0, 0];
    return p[o] = n, p[o ? 0 : 1] = -i + v, Pa({
      key: "".concat(r, "TargetGuideline").concat(f),
      classNames: [Q("target", "bold", c)],
      posValue: p,
      sizeValue: a,
      zoom: u,
      direction: r
    }, s);
  });
}
function qo(t, r, e, n, i, a) {
  var o = t.props, s = o.zoom, u = o.isDisplayInnerSnapDigit, l = r === "horizontal" ? Sr : Cr, f = i[l.start], c = i[l.end];
  return e.filter(function(v) {
    var p = v.hide, d = v.elementRect;
    if (p)
      return !1;
    if (u && d) {
      var h = d.rect;
      if (h[l.start] <= f && c <= h[l.end])
        return !1;
    }
    return !0;
  }).map(function(v, p) {
    var d = v.pos, h = v.size, g = v.element, m = v.className, y = [
      -n[0] + d[0],
      -n[1] + d[1]
    ];
    return Pa({
      key: "".concat(r, "-default-guideline-").concat(p),
      classNames: g ? [Q("bold"), m] : [Q("normal"), m],
      direction: r,
      posValue: y,
      sizeValue: h,
      zoom: s
    }, a);
  });
}
function xe(t, r, e, n, i, a, o, s) {
  var u, l = t.props, f = l.snapDigit, c = f === void 0 ? 0 : f, v = l.isDisplaySnapDigit, p = v === void 0 ? !0 : v, d = l.snapDistFormat, h = d === void 0 ? function(C, b) {
    return C;
  } : d, g = l.zoom, m = r === "horizontal" ? "X" : "Y", y = r === "vertical" ? "height" : "width", x = Math.abs(i), E = p ? parseFloat(x.toFixed(c)) : 0;
  return s.createElement(
    "div",
    { key: "".concat(r, "-").concat(e, "-guideline-").concat(n), className: Q("guideline-group", r), style: (u = {
      left: "".concat(a[0], "px"),
      top: "".concat(a[1], "px")
    }, u[y] = "".concat(x, "px"), u) },
    Pa({
      direction: r,
      classNames: [Q(e), o],
      size: "100%",
      posValue: [0, 0],
      sizeValue: x,
      zoom: g
    }, s),
    s.createElement("div", { className: Q("size-value", "gap"), style: {
      transform: "translate".concat(m, "(-50%) scale(").concat(g, ")")
    } }, E > 0 ? h(E, r) : "")
  );
}
function k0(t, r, e, n) {
  var i = t === "vertical" ? 0 : 1, a = t === "vertical" ? 1 : 0, o = i ? Sr : Cr, s = e[o.start], u = e[o.end];
  return gl(r, function(l) {
    return l.pos[i];
  }).map(function(l) {
    var f = [], c = [], v = [];
    return l.forEach(function(p) {
      var d, h, g = p.element, m = p.elementRect.rect;
      if (m[o.end] < s)
        f.push(p);
      else if (u < m[o.start])
        c.push(p);
      else if (m[o.start] <= s && u <= m[o.end] && n) {
        var y = p.pos, x = { element: g, rect: _(_({}, m), (d = {}, d[o.end] = m[o.start], d)) }, E = { element: g, rect: _(_({}, m), (h = {}, h[o.start] = m[o.end], h)) }, C = [0, 0], b = [0, 0];
        C[i] = y[i], C[a] = y[a], b[i] = y[i], b[a] = y[a] + p.size, f.push({
          type: t,
          pos: C,
          size: 0,
          elementRect: x,
          direction: "",
          elementDirection: "end"
        }), c.push({
          type: t,
          pos: b,
          size: 0,
          elementRect: E,
          direction: "",
          elementDirection: "start"
        });
      }
    }), f.sort(function(p, d) {
      return d.pos[a] - p.pos[a];
    }), c.sort(function(p, d) {
      return p.pos[a] - d.pos[a];
    }), {
      total: l,
      start: f,
      end: c,
      inner: v
    };
  });
}
function A0(t, r, e, n, i) {
  var a = t.props.isDisplayInnerSnapDigit, o = [];
  return ["vertical", "horizontal"].forEach(function(s) {
    var u = r.filter(function(g) {
      return g.type === s;
    }), l = s === "vertical" ? 1 : 0, f = l ? 0 : 1, c = k0(s, u, n, a), v = l ? Cr : Sr, p = l ? Sr : Cr, d = n[v.start], h = n[v.end];
    c.forEach(function(g) {
      var m = g.total, y = g.start, x = g.end, E = g.inner, C = e[f] + m[0].pos[f] - n[p.start], b = n;
      y.forEach(function(S) {
        var M = S.elementRect.rect, P = b[v.start] - M[v.end];
        if (P > 0) {
          var D = [0, 0];
          D[l] = e[l] + b[v.start] - d - P, D[f] = C, o.push(xe(t, s, "dashed", o.length, P, D, S.className, i));
        }
        b = M;
      }), b = n, x.forEach(function(S) {
        var M = S.elementRect.rect, P = M[v.start] - b[v.end];
        if (P > 0) {
          var D = [0, 0];
          D[l] = e[l] + b[v.end] - d, D[f] = C, o.push(xe(t, s, "dashed", o.length, P, D, S.className, i));
        }
        b = M;
      }), E.forEach(function(S) {
        var M = S.elementRect.rect, P = d - M[v.start], D = M[v.end] - h, O = [0, 0], R = [0, 0];
        O[l] = e[l] - P, O[f] = C, R[l] = e[l] + h - d, R[f] = C, o.push(xe(t, s, "dashed", o.length, P, O, S.className, i)), o.push(xe(t, s, "dashed", o.length, D, R, S.className, i));
      });
    });
  }), o;
}
function B0(t, r, e, n, i) {
  var a = [];
  return ["horizontal", "vertical"].forEach(function(o) {
    var s = r.filter(function(g) {
      return g.type === o;
    }).slice(0, 1), u = o === "vertical" ? 0 : 1, l = u ? 0 : 1, f = u ? Cr : Sr, c = u ? Sr : Cr, v = n[f.start], p = n[f.end], d = n[c.start], h = n[c.end];
    s.forEach(function(g) {
      var m = g.gap, y = g.gapRects, x = Math.max.apply(Math, N([d], T(y.map(function(b) {
        var S = b.rect;
        return S[c.start];
      })), !1)), E = Math.min.apply(Math, N([h], T(y.map(function(b) {
        var S = b.rect;
        return S[c.end];
      })), !1)), C = (x + E) / 2;
      x === E || C === (d + h) / 2 || y.forEach(function(b) {
        var S = b.rect, M = b.className, P = [e[0], e[1]];
        if (S[f.end] < v)
          P[u] += S[f.end] - v;
        else if (p < S[f.start])
          P[u] += S[f.start] - v - m;
        else
          return;
        P[l] += C - d, a.push(xe(t, u ? "vertical" : "horizontal", "gap", a.length, m, P, M, i));
      });
    });
  }), a;
}
function Ai(t) {
  var r = t.state, e = r.containerClientRect, n = r.hasFixed, i = e.overflow, a = e.scrollHeight, o = e.scrollWidth, s = e.clientHeight, u = e.clientWidth, l = e.clientLeft, f = e.clientTop, c = t.props, v = c.snapGap, p = v === void 0 ? !0 : v, d = c.verticalGuidelines, h = c.horizontalGuidelines, g = c.snapThreshold, m = g === void 0 ? 5 : g, y = c.snapGridWidth, x = y === void 0 ? 0 : y, E = c.snapGridHeight, C = E === void 0 ? 0 : E, b = c.maxSnapElementGuidelineDistance, S = b === void 0 ? 1 / 0 : b, M = c.isDisplayGridGuidelines, P = qt(Kt(t.state)), D = P.top, O = P.left, R = P.bottom, w = P.right, I = { top: D, left: O, bottom: R, right: w, center: (O + w) / 2, middle: (D + R) / 2 }, k = L0(t), F = N([], T(k), !1);
  p && F.push.apply(F, N([], T(z0(t, I, m)), !1));
  var L = _({}, r.snapOffset || {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  });
  if (F.push.apply(F, N([], T(G0(x, C, i ? o : u, i ? a : s, l, f, L, M)), !1)), n) {
    var B = e.left, $ = e.top;
    L.left += B, L.top += $, L.right += B, L.bottom += $;
  }
  return F.push.apply(F, N([], T(rl(h || !1, d || !1, i ? o : u, i ? a : s, l, f, L)), !1)), F = F.filter(function(j) {
    var G = j.element, q = j.elementRect, U = j.type;
    if (!G || !q)
      return !0;
    var H = q.rect;
    return tl(I, H, U, S);
  }), F;
}
function z0(t, r, e) {
  var n = t.props, i = n.maxSnapElementGuidelineDistance, a = i === void 0 ? 1 / 0 : i, o = n.maxSnapElementGapDistance, s = o === void 0 ? 1 / 0 : o, u = t.state.elementRects, l = [];
  return [
    ["vertical", Sr, Cr],
    ["horizontal", Cr, Sr]
  ].forEach(function(f) {
    var c = T(f, 3), v = c[0], p = c[1], d = c[2], h = r[p.start], g = r[p.end], m = r[p.center], y = r[d.start], x = r[d.end];
    function E(S) {
      var M = S.rect;
      return M[p.end] < h + e ? h - M[p.end] : g - e < M[p.start] ? M[p.start] - g : -1;
    }
    var C = u.filter(function(S) {
      var M = S.rect;
      return M[d.start] > x || M[d.end] < y ? !1 : E(S) > 0;
    }).sort(function(S, M) {
      return E(S) - E(M);
    }), b = [];
    C.forEach(function(S) {
      C.forEach(function(M) {
        if (S !== M) {
          var P = S.rect, D = M.rect, O = P[d.start], R = P[d.end], w = D[d.start], I = D[d.end];
          O > I || w > R || b.push([S, M]);
        }
      });
    }), b.forEach(function(S) {
      var M = T(S, 2), P = M[0], D = M[1], O = P.rect, R = D.rect, w = O[p.start], I = O[p.end], k = R[p.start], F = R[p.end], L = 0, B = 0, $ = !1, j = !1, G = !1;
      if (I <= h && g <= k) {
        if (j = !0, L = (k - I - (g - h)) / 2, B = I + L + (g - h) / 2, z(B - m) > e)
          return;
      } else if (I < k && F < h + e) {
        if ($ = !0, L = k - I, B = F + L, z(B - h) > e)
          return;
      } else if (I < k && g - e < w) {
        if (G = !0, L = k - I, B = w - L, z(B - g) > e)
          return;
      } else
        return;
      L && tl(r, R, v, a) && (L > s || l.push({
        type: v,
        pos: v === "vertical" ? [B, 0] : [0, B],
        element: D.element,
        size: 0,
        className: D.className,
        isStart: $,
        isCenter: j,
        isEnd: G,
        gap: L,
        hide: !0,
        gapRects: [P, D],
        direction: "",
        elementDirection: ""
      }));
    });
  }), l;
}
function G0(t, r, e, n, i, a, o, s) {
  i === void 0 && (i = 0), a === void 0 && (a = 0);
  var u = [], l = o.left, f = o.top;
  if (r)
    for (var c = 0; c <= n; c += r)
      u.push({
        type: "horizontal",
        pos: [
          l,
          et(c - a + f, 0.1)
        ],
        className: Q("grid-guideline"),
        size: e,
        hide: !s,
        direction: ""
      });
  if (t)
    for (var c = 0; c <= e; c += t)
      u.push({
        type: "vertical",
        pos: [
          et(c - i + l, 0.1),
          f
        ],
        className: Q("grid-guideline"),
        size: n,
        hide: !s,
        direction: ""
      });
  return u;
}
function tl(t, r, e, n) {
  return e === "horizontal" ? z(t.right - r.left) <= n || z(t.left - r.right) <= n || t.left <= r.right && r.left <= t.right : e === "vertical" ? z(t.bottom - r.top) <= n || z(t.top - r.bottom) <= n || t.top <= r.bottom && r.top <= t.bottom : !0;
}
function L0(t) {
  var r = t.state, e = t.props.elementGuidelines, n = e === void 0 ? [] : e;
  if (!n.length)
    return r.elementRects = [], [];
  var i = (r.elementRects || []).filter(function(v) {
    return !v.refresh;
  }), a = n.map(function(v) {
    return tr(v) && "element" in v ? _(_({}, v), { element: ir(v.element, !0) }) : {
      element: ir(v, !0)
    };
  }).filter(function(v) {
    return v.element;
  }), o = Uh(i.map(function(v) {
    return v.element;
  }), a.map(function(v) {
    return v.element;
  })), s = o.maintained, u = o.added, l = [];
  s.forEach(function(v) {
    var p = T(v, 2), d = p[0], h = p[1];
    l[h] = i[d];
  }), F0(t, u.map(function(v) {
    return a[v];
  })).map(function(v, p) {
    l[u[p]] = v;
  }), r.elementRects = l;
  var f = Sa(t.props.elementSnapDirections), c = [];
  return l.forEach(function(v) {
    var p = v.element, d = v.top, h = d === void 0 ? f.top : d, g = v.left, m = g === void 0 ? f.left : g, y = v.right, x = y === void 0 ? f.right : y, E = v.bottom, C = E === void 0 ? f.bottom : E, b = v.center, S = b === void 0 ? f.center : b, M = v.middle, P = M === void 0 ? f.middle : M, D = v.className, O = v.rect, R = Ca({
      top: h,
      right: x,
      left: m,
      bottom: C,
      center: S,
      middle: P
    }, O), w = R.horizontal, I = R.vertical, k = R.horizontalNames, F = R.verticalNames, L = O.top, B = O.left, $ = O.right - B, j = O.bottom - L, G = [$, j];
    I.forEach(function(q, U) {
      c.push({
        type: "vertical",
        element: p,
        pos: [
          et(q, 0.1),
          L
        ],
        size: j,
        sizes: G,
        className: D,
        elementRect: v,
        elementDirection: Fo[F[U]] || F[U],
        direction: ""
      });
    }), w.forEach(function(q, U) {
      c.push({
        type: "horizontal",
        element: p,
        pos: [
          B,
          et(q, 0.1)
        ],
        size: $,
        sizes: G,
        className: D,
        elementRect: v,
        elementDirection: Fo[k[U]] || k[U],
        direction: ""
      });
    });
  }), c;
}
function Uo(t, r) {
  return t ? t.map(function(e) {
    var n = tr(e) ? e : { pos: e }, i = n.pos;
    return ee(i) ? n : _(_({}, n), { pos: vt(i, r) });
  }) : [];
}
function rl(t, r, e, n, i, a, o) {
  i === void 0 && (i = 0), a === void 0 && (a = 0), o === void 0 && (o = { left: 0, top: 0, right: 0, bottom: 0 });
  var s = [], u = o.left, l = o.top, f = o.bottom, c = o.right, v = e + c - u, p = n + f - l;
  return Uo(t, p).forEach(function(d) {
    s.push({
      type: "horizontal",
      pos: [
        u,
        et(d.pos - a + l, 0.1)
      ],
      size: v,
      className: d.className,
      direction: ""
    });
  }), Uo(r, v).forEach(function(d) {
    s.push({
      type: "vertical",
      pos: [
        et(d.pos - i + u, 0.1),
        l
      ],
      size: p,
      className: d.className,
      direction: ""
    });
  }), s;
}
function F0(t, r) {
  if (!r.length)
    return [];
  var e = t.props.groupable, n = t.state, i = n.containerClientRect, a = n.rootMatrix, o = n.is3d, s = n.offsetDelta, u = o ? 4 : 3, l = T(f0(a, i, u), 2), f = l[0], c = l[1], v = e ? 0 : s[0], p = e ? 0 : s[1];
  return r.map(function(d) {
    var h = d.element.getBoundingClientRect(), g = h.left - f - v, m = h.top - c - p, y = m + h.height, x = g + h.width, E = T(se(a, [g, m], u), 2), C = E[0], b = E[1], S = T(se(a, [x, y], u), 2), M = S[0], P = S[1];
    return _(_({}, d), { rect: {
      left: C,
      right: M,
      top: b,
      bottom: P,
      center: (C + M) / 2,
      middle: (b + P) / 2
    } });
  });
}
function rn(t) {
  var r = t.state, e = r.container, n = t.props.snapContainer || e;
  if (r.snapContainer === n && r.guidelines && r.guidelines.length)
    return !1;
  var i = r.containerClientRect, a = {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  };
  if (e !== n) {
    var o = ir(n, !0);
    if (o) {
      var s = Pe(o), u = ts(r, [
        s.left - i.left,
        s.top - i.top
      ]), l = ts(r, [
        s.right - i.right,
        s.bottom - i.bottom
      ]);
      a.left = et(u[0], 1e-5), a.top = et(u[1], 1e-5), a.right = et(l[0], 1e-5), a.bottom = et(l[1], 1e-5);
    }
  }
  return r.snapContainer = n, r.snapOffset = a, r.guidelines = Ai(t), r.enableSnap = !0, !0;
}
function el(t, r, e, n, i, a) {
  var o = Hr(t, r, e, a ? 4 : 3), s = wt(o, n);
  return Da(o, tt(i, s));
}
function Ko(t) {
  return t ? t / z(t) : 0;
}
function N0(t, r, e, n, i, a) {
  var o = a.fixedDirection, s = d0(e, o, n), u = _a(t, r, e, n), l = N(N([], T(P0(t, r, s, n, i, a)), !1), T(Ku(t, u, a)), !1), f = yn(l, 0), c = yn(l, 1);
  return {
    width: {
      isBound: f.isBound,
      offset: f.offset[0]
    },
    height: {
      isBound: c.isBound,
      offset: c.offset[1]
    }
  };
}
function $0(t, r, e, n, i, a, o, s, u) {
  var l = wt(r, o), f = zn(t, s, {
    vertical: [l[0]],
    horizontal: [l[1]]
  }), c = f.horizontal.offset, v = f.vertical.offset;
  if (et(v, Ti) || et(c, Ti)) {
    var p = T(sr({
      datas: u,
      distX: -v,
      distY: -c
    }), 2), d = p[0], h = p[1], g = Math.min(i || 1 / 0, e + o[0] * d), m = Math.min(a || 1 / 0, n + o[1] * h);
    return [g - e, m - n];
  }
  return [0, 0];
}
function nl(t, r, e, n, i, a, o, s) {
  for (var u = Kt(t.state), l = t.props.keepRatio, f = 0, c = 0, v = 0; v < 2; ++v) {
    var p = r(f, c), d = N0(t, p, i, l, o, s), h = d.width, g = d.height, m = h.isBound, y = g.isBound, x = h.offset, E = g.offset;
    if (v === 1 && (m || (x = 0), y || (E = 0)), v === 0 && o && !m && !y)
      return [0, 0];
    if (l) {
      var C = z(x) * (e ? 1 / e : 1), b = z(E) * (n ? 1 / n : 1), S = m && y ? C < b : y || !m && C < b;
      S ? x = e * E / n : E = n * x / e;
    }
    f += x, c += E;
  }
  if (!l && i[0] && i[1]) {
    var M = D0(t, u, i, a, s), P = M.maxWidth, D = M.maxHeight, O = T($0(t, r(f, c).map(function(I) {
      return I.map(function(k) {
        return et(k, Ti);
      });
    }), e + f, n + c, P, D, i, o, s), 2), x = O[0], E = O[1];
    f += x, c += E;
  }
  return [f, c];
}
function Me(t) {
  return t < 0 && (t = t % 360 + 360), t %= 360, t;
}
function j0(t, r) {
  r = Me(r);
  var e = Math.floor(t / 360), n = e * 360 + 360 - r, i = e * 360 + r;
  return z(t - n) < z(t - i) ? n : i;
}
function ni(t, r) {
  t = Me(t), r = Me(r);
  var e = Me(t - r);
  return Math.min(e, 360 - e);
}
function Y0(t, r, e, n) {
  var i, a = t.props, o = (i = a[il]) !== null && i !== void 0 ? i : 5, s = a[al];
  if (he(t, "rotatable")) {
    var u = r.pos1, l = r.pos2, f = r.pos3, c = r.pos4, v = r.origin, p = e * Math.PI / 180, d = [u, l, f, c].map(function(E) {
      return tt(E, v);
    }), h = d.map(function(E) {
      return je(E, p);
    }), g = N(N([], T(o0(t, d, h, v, e)), !1), T(b0(t, d, h, v, e)), !1);
    g.sort(function(E, C) {
      return z(E - e) - z(C - e);
    });
    var m = g.length > 0;
    if (m)
      return {
        isSnap: m,
        dist: m ? g[0] : e
      };
  }
  if (s != null && s.length && o) {
    var y = s.slice().sort(function(E, C) {
      return ni(E, n) - ni(C, n);
    }), x = y[0];
    if (ni(x, n) <= o)
      return {
        isSnap: !0,
        dist: e + j0(n, x) - n
      };
  }
  return {
    isSnap: !1,
    dist: e
  };
}
function H0(t, r, e, n, i, a, o) {
  if (!he(t, "resizable"))
    return [0, 0];
  var s = o.fixedDirection, u = o.nextAllMatrix, l = t.state, f = l.allMatrix, c = l.is3d;
  return nl(t, function(v, p) {
    return el(u || f, r + v, e + p, s, i, c);
  }, r, e, n, i, a, o);
}
function X0(t, r, e, n, i) {
  if (!he(t, "scalable"))
    return [0, 0];
  var a = i.startOffsetWidth, o = i.startOffsetHeight, s = i.fixedPosition, u = i.fixedDirection, l = i.is3d, f = nl(t, function(c, v) {
    return el(Xg(i, lt(r, [c / a, v / o])), a, o, u, s, l);
  }, a, o, e, s, n, i);
  return [f[0] / a, f[1] / o];
}
function W0(t, r) {
  r.absolutePoses = Kt(t.state);
}
function Zo(t) {
  var r = [];
  return t.forEach(function(e) {
    e.guidelineInfos.forEach(function(n) {
      var i = n.guideline;
      jt(r, function(a) {
        return a.guideline === i;
      }) || (i.direction = "", r.push({ guideline: i, posInfo: e }));
    });
  }), r.map(function(e) {
    var n = e.guideline, i = e.posInfo;
    return _(_({}, n), { direction: i.direction });
  });
}
function Jo(t, r, e, n, i, a) {
  var o = Ea(An(t, a), r, e), s = o.vertical, u = o.horizontal, l = Ur();
  s.forEach(function(d) {
    d.isBound && (d.direction === "start" && (l.left = !0), d.direction === "end" && (l.right = !0), n.push({
      type: "bounds",
      pos: d.pos
    }));
  }), u.forEach(function(d) {
    d.isBound && (d.direction === "start" && (l.top = !0), d.direction === "end" && (l.bottom = !0), i.push({
      type: "bounds",
      pos: d.pos
    }));
  });
  var f = E0(t), c = f.boundMap, v = f.vertical, p = f.horizontal;
  return v.forEach(function(d) {
    cr(n, function(h) {
      var g = h.type, m = h.pos;
      return g === "bounds" && m === d;
    }) >= 0 || n.push({
      type: "bounds",
      pos: d
    });
  }), p.forEach(function(d) {
    cr(i, function(h) {
      var g = h.type, m = h.pos;
      return g === "bounds" && m === d;
    }) >= 0 || i.push({
      type: "bounds",
      pos: d
    });
  }), {
    boundMap: l,
    innerBoundMap: c
  };
}
var V0 = Oa("", ["resizable", "scalable"]), il = "snapRotationThreshold", al = "snapRotationDegrees", q0 = {
  name: "snappable",
  dragRelation: "strong",
  props: [
    "snappable",
    "snapContainer",
    "snapDirections",
    "elementSnapDirections",
    "snapGap",
    "snapGridWidth",
    "snapGridHeight",
    "isDisplaySnapDigit",
    "isDisplayInnerSnapDigit",
    "isDisplayGridGuidelines",
    "snapDigit",
    "snapThreshold",
    "snapRenderThreshold",
    il,
    al,
    "horizontalGuidelines",
    "verticalGuidelines",
    "elementGuidelines",
    "bounds",
    "innerBounds",
    "snapDistFormat",
    "maxSnapElementGuidelineDistance",
    "maxSnapElementGapDistance"
  ],
  events: ["snap", "bound"],
  css: [
    `:host {
--bounds-color: #d66;
}
.guideline {
pointer-events: none;
z-index: 2;
}
.guideline.bounds {
background: #d66;
background: var(--bounds-color);
}
.guideline-group {
position: absolute;
top: 0;
left: 0;
}
.guideline-group .size-value {
position: absolute;
color: #f55;
font-size: 12px;
font-size: calc(12px * var(--zoom));
font-weight: bold;
}
.guideline-group.horizontal .size-value {
transform-origin: 50% 100%;
transform: translateX(-50%);
left: 50%;
bottom: 5px;
bottom: calc(2px + 3px * var(--zoom));
}
.guideline-group.vertical .size-value {
transform-origin: 0% 50%;
top: 50%;
transform: translateY(-50%);
left: 5px;
left: calc(2px + 3px * var(--zoom));
}
.guideline.gap {
background: #f55;
}
.size-value.gap {
color: #f55;
}
`
  ],
  render: function(t, r) {
    var e = t.state, n = e.top, i = e.left, a = e.pos1, o = e.pos2, s = e.pos3, u = e.pos4, l = e.snapRenderInfo, f = t.props.snapRenderThreshold, c = f === void 0 ? 1 : f;
    if (!l || !l.render || !he(t, ""))
      return Zr(t, "boundMap", Ur(), function(H) {
        return JSON.stringify(H);
      }), Zr(t, "innerBoundMap", Ur(), function(H) {
        return JSON.stringify(H);
      }), [];
    e.guidelines = Ai(t);
    var v = Math.min(a[0], o[0], s[0], u[0]), p = Math.min(a[1], o[1], s[1], u[1]), d = l.externalPoses || [], h = Kt(t.state), g = [], m = [], y = [], x = [], E = [], C = qt(h), b = C.width, S = C.height, M = C.top, P = C.left, D = C.bottom, O = C.right, R = { left: P, right: O, top: M, bottom: D, center: (P + O) / 2, middle: (M + D) / 2 }, w = d.length > 0, I = w ? qt(d) : {};
    if (!l.request) {
      if (l.direction && E.push(p0(t, h, l.direction, c)), l.snap) {
        var k = qt(h);
        l.center && (k.middle = (k.top + k.bottom) / 2, k.center = (k.left + k.right) / 2), E.push(No(t, k, c));
      }
      w && (l.center && (I.middle = (I.top + I.bottom) / 2, I.center = (I.left + I.right) / 2), E.push(No(t, I, c))), E.forEach(function(H) {
        var X = H.vertical.posInfos, Y = H.horizontal.posInfos;
        g.push.apply(g, N([], T(X.filter(function(V) {
          var J = V.guidelineInfos;
          return J.some(function(nt) {
            var rt = nt.guideline;
            return !rt.hide;
          });
        }).map(function(V) {
          return {
            type: "snap",
            pos: V.pos
          };
        })), !1)), m.push.apply(m, N([], T(Y.filter(function(V) {
          var J = V.guidelineInfos;
          return J.some(function(nt) {
            var rt = nt.guideline;
            return !rt.hide;
          });
        }).map(function(V) {
          return {
            type: "snap",
            pos: V.pos
          };
        })), !1)), y.push.apply(y, N([], T(Zo(X)), !1)), x.push.apply(x, N([], T(Zo(Y)), !1));
      });
    }
    var F = Jo(t, [P, O], [M, D], g, m), L = F.boundMap, B = F.innerBoundMap;
    w && Jo(t, [I.left, I.right], [I.top, I.bottom], g, m, l.externalBounds);
    var $ = N(N([], T(y), !1), T(x), !1), j = $.filter(function(H) {
      return H.element && !H.gapRects;
    }), G = $.filter(function(H) {
      return H.gapRects;
    }).sort(function(H, X) {
      return H.gap - X.gap;
    });
    W(t, "onSnap", {
      guidelines: $.filter(function(H) {
        var X = H.element;
        return !X;
      }),
      elements: j,
      gaps: G
    }, !0);
    var q = Zr(t, "boundMap", L, function(H) {
      return JSON.stringify(H);
    }, Ur()), U = Zr(t, "innerBoundMap", B, function(H) {
      return JSON.stringify(H);
    }, Ur());
    return (L === q || B === U) && W(t, "onBound", {
      bounds: L,
      innerBounds: B
    }, !0), N(N(N(N(N(N([], T(A0(t, j, [v, p], R, r)), !1), T(B0(t, G, [v, p], R, r)), !1), T(qo(t, "horizontal", x, [i, n], R, r)), !1), T(qo(t, "vertical", y, [i, n], R, r)), !1), T(Vo(t, "horizontal", m, v, n, b, 0, r)), !1), T(Vo(t, "vertical", g, p, i, S, 1, r)), !1);
  },
  dragStart: function(t, r) {
    t.state.snapRenderInfo = {
      request: r.isRequest,
      snap: !0,
      center: !0
    }, rn(t);
  },
  drag: function(t) {
    var r = t.state;
    rn(t) || (r.guidelines = Ai(t)), r.snapRenderInfo && (r.snapRenderInfo.render = !0);
  },
  pinchStart: function(t) {
    this.unset(t);
  },
  dragEnd: function(t) {
    this.unset(t);
  },
  dragControlCondition: function(t, r) {
    if (V0(t, r) || ki(t, r))
      return !0;
    if (!r.isRequest && r.inputEvent)
      return Dt(r.inputEvent.target, Q("snap-control"));
  },
  dragControlStart: function(t) {
    t.state.snapRenderInfo = null, rn(t);
  },
  dragControl: function(t) {
    this.drag(t);
  },
  dragControlEnd: function(t) {
    this.unset(t);
  },
  dragGroupStart: function(t, r) {
    this.dragStart(t, r);
  },
  dragGroup: function(t) {
    this.drag(t);
  },
  dragGroupEnd: function(t) {
    this.unset(t);
  },
  dragGroupControlStart: function(t) {
    t.state.snapRenderInfo = null, rn(t);
  },
  dragGroupControl: function(t) {
    this.drag(t);
  },
  dragGroupControlEnd: function(t) {
    this.unset(t);
  },
  unset: function(t) {
    var r = t.state;
    r.enableSnap = !1, r.guidelines = [], r.snapRenderInfo = null, r.elementRects = [];
  }
};
function U0(t, r) {
  return [
    t[0] * r[0],
    t[1] * r[1]
  ];
}
function Q() {
  for (var t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  return $d.apply(void 0, N([ma], T(t), !1));
}
function ol(t) {
  t();
}
function K0(t) {
  return !t || t === "none" ? [1, 0, 0, 1, 0, 0] : tr(t) ? t : Ie(t);
}
function _e(t, r, e) {
  return dn(r, Br(e, r), t, Br(e.map(function(n) {
    return -n;
  }), r));
}
function Z0(t, r, e) {
  if (r === "%") {
    var n = Ta(t.ownerSVGElement);
    return n[e ? "width" : "height"] / 100;
  }
  return 1;
}
function J0(t) {
  var r = Q0(wa(t, ":before"));
  return r.map(function(e, n) {
    var i = Le(e), a = i.value, o = i.unit;
    return a * Z0(t, o, n === 0);
  });
}
function bn(t) {
  return t ? t.split(" ") : ["0", "0"];
}
function Q0(t) {
  return bn(t.transformOrigin);
}
function sl(t) {
  var r = Yt(t), e = r("transform");
  if (e && e !== "none")
    return e;
  if ("transform" in t) {
    var n = t.transform, i = n.baseVal;
    if (!i)
      return "";
    var a = i.length;
    if (!a)
      return "";
    for (var o = [], s = function(l) {
      var f = i[l].matrix;
      o.push("matrix(".concat(["a", "b", "c", "d", "e", "f"].map(function(c) {
        return f[c];
      }).join(", "), ")"));
    }, u = 0; u < a; ++u)
      s(u);
    return o.join(" ");
  }
  return "";
}
function Ae(t, r, e, n, i) {
  var a, o, s = oa(t) || _r(t), u = !1, l, f;
  if (!t || e)
    l = t;
  else {
    var c = (a = t == null ? void 0 : t.assignedSlot) === null || a === void 0 ? void 0 : a.parentElement, v = t.parentElement;
    c ? (u = !0, f = v, l = c) : l = v;
  }
  for (var p = !1, d = t === r || l === r, h = "relative", g = 1, m = parseFloat(i == null ? void 0 : i("zoom")) || 1, y = i == null ? void 0 : i("position"); l && l !== s; ) {
    r === l && (d = !0);
    var x = Yt(l), E = l.tagName.toLowerCase(), C = sl(l), b = x("willChange"), S = parseFloat(x("zoom")) || 1;
    if (h = x("position"), n && S !== 1) {
      g = S;
      break;
    }
    if (
      // offsetParent is the parentElement if the target's zoom is not 1 and not absolute.
      !e && n && m !== 1 && y && y !== "absolute" || E === "svg" || h !== "static" || C && C !== "none" || b === "transform"
    )
      break;
    var M = (o = t == null ? void 0 : t.assignedSlot) === null || o === void 0 ? void 0 : o.parentNode, P = l.parentNode;
    M && (u = !0, f = P);
    var D = P;
    if (D && D.nodeType === 11) {
      l = D.host, p = !0, h = Yt(l)("position");
      break;
    }
    l = D, h = "relative";
  }
  return {
    offsetZoom: g,
    hasSlot: u,
    parentSlotElement: f,
    isCustomElement: p,
    isStatic: h === "static",
    isEnd: d || !l || l === s,
    offsetParent: l || s
  };
}
function tm(t, r) {
  var e, n = t.tagName.toLowerCase(), i = t.offsetLeft, a = t.offsetTop, o = Yt(t), s = Pn(i), u = !s, l, f;
  return !u && n !== "svg" ? (l = Du ? J0(t) : bn(o("transformOrigin")).map(function(c) {
    return parseFloat(c);
  }), f = l.slice(), u = !0, e = T(nm(t, l, t === r && r.tagName.toLowerCase() === "g"), 4), i = e[0], a = e[1], l[0] = e[2], l[1] = e[3]) : (l = bn(o("transformOrigin")).map(function(c) {
    return parseFloat(c);
  }), f = l.slice()), {
    tagName: n,
    isSVG: s,
    hasOffset: u,
    offset: [i || 0, a || 0],
    origin: l,
    targetOrigin: f
  };
}
function ul(t, r) {
  var e = Yt(t), n = Yt(_r(t)), i = n("position");
  if (!r && (!i || i === "static"))
    return [0, 0];
  var a = parseInt(n("marginLeft"), 10), o = parseInt(n("marginTop"), 10);
  return e("position") === "absolute" && ((e("top") !== "auto" || e("bottom") !== "auto") && (o = 0), (e("left") !== "auto" || e("right") !== "auto") && (a = 0)), [a, o];
}
function Bi(t) {
  t.forEach(function(r) {
    var e = r.matrix;
    e && (r.matrix = rr(e, 3, 4));
  });
}
function rm(t) {
  for (var r = t.parentElement, e = !1, n = _r(t); r; ) {
    var i = wa(r).transform;
    if (i && i !== "none") {
      e = !0;
      break;
    }
    if (r === n)
      break;
    r = r.parentElement;
  }
  return {
    fixedContainer: r || n,
    hasTransform: e
  };
}
function Gn(t, r) {
  return r === void 0 && (r = t.length > 9), "".concat(r ? "matrix3d" : "matrix", "(").concat(bu(t, !r).join(","), ")");
}
function Ta(t) {
  var r = t.clientWidth, e = t.clientHeight;
  if (!t)
    return { x: 0, y: 0, width: 0, height: 0, clientWidth: r, clientHeight: e };
  var n = t.viewBox, i = n && n.baseVal || { x: 0, y: 0, width: 0, height: 0 };
  return {
    x: i.x,
    y: i.y,
    width: i.width || r,
    height: i.height || e,
    clientWidth: r,
    clientHeight: e
  };
}
function em(t, r) {
  var e, n = Ta(t), i = n.width, a = n.height, o = n.clientWidth, s = n.clientHeight, u = o / i, l = s / a, f = t.preserveAspectRatio.baseVal, c = f.align, v = f.meetOrSlice, p = [0, 0], d = [u, l], h = [0, 0];
  if (c !== 1) {
    var g = (c - 2) % 3, m = Math.floor((c - 2) / 3);
    p[0] = i * g / 2, p[1] = a * m / 2;
    var y = v === 2 ? Math.max(l, u) : Math.min(u, l);
    d[0] = y, d[1] = y, h[0] = (o - i) / 2 * g, h[1] = (s - a) / 2 * m;
  }
  var x = pa(d, r);
  return e = T(h, 2), x[r * (r - 1)] = e[0], x[r * (r - 1) + 1] = e[1], _e(x, r, p);
}
function nm(t, r, e) {
  if (!t.getBBox || !e && t.tagName.toLowerCase() === "g")
    return [0, 0, 0, 0];
  var n = Yt(t), i = n("transform-box") === "fill-box", a = t.getBBox(), o = Ta(t.ownerSVGElement), s = a.x - o.x, u = a.y - o.y, l = i ? r[0] : r[0] - s, f = i ? r[1] : r[1] - u;
  return [s, u, l, f];
}
function bt(t, r, e) {
  return kt(t, Ar(r, e), e);
}
function Hr(t, r, e, n) {
  return [[0, 0], [r, 0], [0, e], [r, e]].map(function(i) {
    return bt(t, i, n);
  });
}
function qt(t) {
  var r = t.map(function(l) {
    return l[0];
  }), e = t.map(function(l) {
    return l[1];
  }), n = Math.min.apply(Math, N([], T(r), !1)), i = Math.min.apply(Math, N([], T(e), !1)), a = Math.max.apply(Math, N([], T(r), !1)), o = Math.max.apply(Math, N([], T(e), !1)), s = a - n, u = o - i;
  return {
    left: n,
    top: i,
    right: a,
    bottom: o,
    width: s,
    height: u
  };
}
function Qo(t, r, e, n) {
  var i = Hr(t, r, e, n);
  return qt(i);
}
function im(t, r, e, n, i) {
  var a, o = t.target, s = t.origin, u = r.matrix, l = fl(o), f = l.offsetWidth, c = l.offsetHeight, v = e.getBoundingClientRect(), p = [0, 0];
  e === _r(e) && (p = ul(o, !0));
  for (var d = o.getBoundingClientRect(), h = d.left - v.left + e.scrollLeft - (e.clientLeft || 0) + p[0], g = d.top - v.top + e.scrollTop - (e.clientTop || 0) + p[1], m = d.width, y = d.height, x = dn(n, i, u), E = Qo(x, f, c, n), C = E.left, b = E.top, S = E.width, M = E.height, P = bt(x, s, n), D = tt(P, [C, b]), O = [
    h + D[0] * m / S,
    g + D[1] * y / M
  ], R = [0, 0], w = 0; ++w < 10; ) {
    var I = or(i, n);
    a = T(tt(bt(I, O, n), bt(I, P, n)), 2), R[0] = a[0], R[1] = a[1];
    var k = dn(n, i, Br(R, n), u), F = Qo(k, f, c, n), L = F.left, B = F.top, $ = L - h, j = B - g;
    if (z($) < 2 && z(j) < 2)
      break;
    O[0] -= $, O[1] -= j;
  }
  return R.map(function(G) {
    return Math.round(G);
  });
}
function am(t, r, e) {
  var n = t.length === 16, i = n ? 4 : 3, a = r.map(function(u) {
    return bt(t, u, i);
  }), o = e.left, s = e.top;
  return a.map(function(u) {
    return [u[0] + o, u[1] + s];
  });
}
function Ut(t) {
  return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
}
function ll(t, r) {
  return Ut([
    r[0] - t[0],
    r[1] - t[1]
  ]);
}
function be(t, r, e, n) {
  e === void 0 && (e = 1), n === void 0 && (n = Et(t, r));
  var i = ll(t, r);
  return {
    transform: "translateY(-50%) translate(".concat(t[0], "px, ").concat(t[1], "px) rotate(").concat(n, "rad) scaleY(").concat(e, ")"),
    width: "".concat(i, "px")
  };
}
function En(t, r) {
  for (var e = [], n = 2; n < arguments.length; n++)
    e[n - 2] = arguments[n];
  var i = e.length, a = e.reduce(function(s, u) {
    return s + u[0];
  }, 0) / i, o = e.reduce(function(s, u) {
    return s + u[1];
  }, 0) / i;
  return {
    transform: "translateZ(0px) translate(".concat(a, "px, ").concat(o, "px) rotate(").concat(t, "rad) scale(").concat(r, ")")
  };
}
function Gr(t, r) {
  var e = t[r];
  return tr(e) ? _(_({}, t), e) : t;
}
function fl(t) {
  var r = t && !Pn(t.offsetWidth), e = 0, n = 0, i = 0, a = 0, o = 0, s = 0, u = 0, l = 0, f = 0, c = 0, v = 0, p = 0, d = 1 / 0, h = 1 / 0, g = 1 / 0, m = 1 / 0, y = 0, x = 0, E = !1;
  if (t)
    if (!r && t.tagName.toLowerCase() !== "svg") {
      var C = t.getBBox();
      E = !0, e = C.width, n = C.height, o = e, s = n, u = e, l = n, i = e, a = n;
    } else {
      var b = Yt(t), S = t.style, M = b("boxSizing") === "border-box", P = parseFloat(b("borderLeftWidth")) || 0, D = parseFloat(b("borderRightWidth")) || 0, O = parseFloat(b("borderTopWidth")) || 0, R = parseFloat(b("borderBottomWidth")) || 0, w = parseFloat(b("paddingLeft")) || 0, I = parseFloat(b("paddingRight")) || 0, k = parseFloat(b("paddingTop")) || 0, F = parseFloat(b("paddingBottom")) || 0, L = w + I, B = k + F, $ = P + D, j = O + R, G = L + $, q = B + j, U = b("position"), H = 0, X = 0;
      if ("clientLeft" in t) {
        var Y = null;
        if (U === "absolute") {
          var V = Ae(t, _r(t));
          Y = V.offsetParent;
        } else
          Y = t.parentElement;
        if (Y) {
          var J = Yt(Y);
          H = parseFloat(J("width")), X = parseFloat(J("height"));
        }
      }
      f = Math.max(L, vt(b("minWidth"), H) || 0), c = Math.max(B, vt(b("minHeight"), X) || 0), d = vt(b("maxWidth"), H), h = vt(b("maxHeight"), X), isNaN(d) && (d = 1 / 0), isNaN(h) && (h = 1 / 0), y = vt(S.width, 0) || 0, x = vt(S.height, 0) || 0, o = parseFloat(b("width")) || 0, s = parseFloat(b("height")) || 0, u = z(o - y) < 1 ? pi(f, y || o, d) : o, l = z(s - x) < 1 ? pi(c, x || s, h) : s, e = u, n = l, i = u, a = l, M ? (g = d, m = h, v = f, p = c, u = e - G, l = n - q) : (g = d + G, m = h + q, v = f + G, p = c + q, e = u + G, n = l + q), i = u + L, a = l + B;
    }
  return {
    svg: E,
    offsetWidth: e,
    offsetHeight: n,
    clientWidth: i,
    clientHeight: a,
    contentWidth: u,
    contentHeight: l,
    inlineCSSWidth: y,
    inlineCSSHeight: x,
    cssWidth: o,
    cssHeight: s,
    minWidth: f,
    minHeight: c,
    maxWidth: d,
    maxHeight: h,
    minOffsetWidth: v,
    minOffsetHeight: p,
    maxOffsetWidth: g,
    maxOffsetHeight: m
  };
}
function cl(t, r) {
  return Et(r > 0 ? t[0] : t[1], r > 0 ? t[1] : t[0]);
}
function en() {
  return {
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    right: 0,
    bottom: 0,
    clientLeft: 0,
    clientTop: 0,
    clientWidth: 0,
    clientHeight: 0,
    scrollWidth: 0,
    scrollHeight: 0
  };
}
function vl(t, r) {
  var e = t === _r(t) || t === oa(t), n = {
    clientLeft: t.clientLeft,
    clientTop: t.clientTop,
    clientWidth: t.clientWidth,
    clientHeight: t.clientHeight,
    scrollWidth: t.scrollWidth,
    scrollHeight: t.scrollHeight,
    overflow: !1
  };
  return e && (n.clientHeight = Math.max(r.height, n.clientHeight), n.scrollHeight = Math.max(r.height, n.scrollHeight)), n.overflow = Yt(t)("overflow") !== "visible", _(_({}, r), n);
}
function ii(t, r, e, n) {
  var i = t.left, a = t.right, o = t.top, s = t.bottom, u = r.top, l = r.left, f = {
    left: l + i,
    top: u + o,
    right: l + a,
    bottom: u + s,
    width: a - i,
    height: s - o
  };
  return e && n ? vl(e, f) : f;
}
function Pe(t, r) {
  var e = 0, n = 0, i = 0, a = 0;
  if (t) {
    var o = t.getBoundingClientRect();
    e = o.left, n = o.top, i = o.width, a = o.height;
  }
  var s = {
    left: e,
    top: n,
    width: i,
    height: a,
    right: e + i,
    bottom: n + a
  };
  return t && r ? vl(t, s) : s;
}
function om(t) {
  var r = t.props, e = r.groupable, n = r.svgOrigin, i = t.getState(), a = i.offsetWidth, o = i.offsetHeight, s = i.svg, u = i.transformOrigin;
  return !e && s && n ? ka(n, a, o) : u;
}
function pl(t, r, e, n) {
  var i;
  if (t)
    i = t;
  else if (r)
    i = [0, 0];
  else {
    var a = e.target;
    i = dl(a, n);
  }
  return i;
}
function dl(t, r) {
  if (t) {
    var e = t.getAttribute("data-rotation") || "", n = t.getAttribute("data-direction");
    if (r.deg = e, !!n) {
      var i = [0, 0];
      return n.indexOf("w") > -1 && (i[0] = -1), n.indexOf("e") > -1 && (i[0] = 1), n.indexOf("n") > -1 && (i[1] = -1), n.indexOf("s") > -1 && (i[1] = 1), i;
    }
  }
}
function Da(t, r) {
  return [
    lt(r, t[0]),
    lt(r, t[1]),
    lt(r, t[2]),
    lt(r, t[3])
  ];
}
function Kt(t) {
  var r = t.left, e = t.top, n = t.pos1, i = t.pos2, a = t.pos3, o = t.pos4;
  return Da([n, i, a, o], [r, e]);
}
function zi(t, r) {
  t[r ? "controlAbles" : "targetAbles"].forEach(function(e) {
    e.unset && e.unset(t);
  });
}
function Kr(t, r) {
  var e = r ? "controlGesto" : "targetGesto", n = t[e];
  (n == null ? void 0 : n.isIdle()) === !1 && zi(t, r), n == null || n.unset(), t[e] = null;
}
function Lt(t, r) {
  if (r) {
    var e = de(r);
    e.nextStyle = _(_({}, e.nextStyle), t);
  }
  return {
    style: t,
    cssText: vr(t).map(function(n) {
      return "".concat(fn(n, "-"), ": ").concat(t[n], ";");
    }).join("")
  };
}
function hl(t, r, e) {
  var n = r.afterTransform || r.transform;
  return _(_({}, Lt(_(_(_({}, t.style), r.style), { transform: n }), e)), { afterTransform: n, transform: t.transform });
}
function it(t, r, e, n) {
  var i = r.datas;
  i.datas || (i.datas = {});
  var a = _(_({}, e), { target: t.state.target, clientX: r.clientX, clientY: r.clientY, inputEvent: r.inputEvent, currentTarget: t, moveable: t, datas: i.datas, isRequest: r.isRequest, isRequestChild: r.isRequestChild, isFirstDrag: !!r.isFirstDrag, isTrusted: r.isTrusted !== !1, stopAble: function() {
    i.isEventStart = !1;
  }, stopDrag: function() {
    var o;
    (o = r.stop) === null || o === void 0 || o.call(r);
  } });
  return i.isStartEvent ? n || (i.lastEvent = a) : i.isStartEvent = !0, a;
}
function Ht(t, r, e) {
  var n = r.datas, i = "isDrag" in e ? e.isDrag : r.isDrag;
  return n.datas || (n.datas = {}), _(_({ isDrag: i }, e), { moveable: t, target: t.state.target, clientX: r.clientX, clientY: r.clientY, inputEvent: r.inputEvent, currentTarget: t, lastEvent: n.lastEvent, isDouble: r.isDouble, datas: n.datas, isFirstDrag: !!r.isFirstDrag });
}
function Ln(t, r, e) {
  t._emitter.on(r, e);
}
function W(t, r, e, n, i) {
  return t.triggerEvent(r, e, n, i);
}
function wa(t, r) {
  return br(t).getComputedStyle(t, r);
}
function nn(t, r, e) {
  var n = {}, i = {};
  return t.filter(function(a) {
    var o = a.name;
    if (n[o] || !r.some(function(s) {
      return a[s];
    }))
      return !1;
    if (!e && a.ableGroup) {
      if (i[a.ableGroup])
        return !1;
      i[a.ableGroup] = !0;
    }
    return n[o] = !0, !0;
  });
}
function Gi(t, r) {
  return t === r || t == null && r == null;
}
function sm() {
  for (var t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  for (var e = t.length - 1, n = 0; n < e; ++n) {
    var i = t[n];
    if (!Pn(i))
      return i;
  }
  return t[e];
}
function gl(t, r) {
  var e = [], n = [];
  return t.forEach(function(i, a) {
    var o = r(i, a, t), s = n.indexOf(o), u = e[s] || [];
    s === -1 && (n.push(o), e.push(u)), u.push(i);
  }), e;
}
function um(t, r) {
  var e = [], n = {};
  return t.forEach(function(i, a) {
    var o = r(i, a, t), s = n[o];
    s || (s = [], n[o] = s, e.push(s)), s.push(i);
  }), e;
}
function ml(t) {
  return t.reduce(function(r, e) {
    return r.concat(e);
  }, []);
}
function oe() {
  for (var t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  return t.sort(function(e, n) {
    return z(n) - z(e);
  }), t[0];
}
function se(t, r, e) {
  return kt(or(t, e), Ar(r, e), e);
}
function yl(t, r) {
  var e, n = t.is3d, i = t.rootMatrix, a = n ? 4 : 3;
  return e = T(se(i, [r.distX, r.distY], a), 2), r.distX = e[0], r.distY = e[1], r;
}
function an(t, r, e, n) {
  if (!e[0] && !e[1])
    return r;
  var i = bt(t, [Ko(e[0]), 0], n), a = bt(t, [0, Ko(e[1])], n), o = bt(t, [
    e[0] / Ut(i),
    e[1] / Ut(a)
  ], n);
  return lt(r, o);
}
function Zt(t, r, e) {
  return e ? "".concat(t / r * 100, "%") : "".concat(t, "px");
}
function Sn(t) {
  return z(t) <= Ft ? 0 : t;
}
function Ra(t) {
  return function(r) {
    if (!r.isDragging(t))
      return "";
    var e = Jg(r, t), n = e.deg;
    return n ? Q("view-control-rotation".concat(n)) : "";
  };
}
function Oa(t, r) {
  return r === void 0 && (r = [t]), function(e, n) {
    if (n.isRequest)
      return r.some(function(a) {
        return n.requestAble === a;
      }) ? n.parentDirection : !1;
    var i = n.inputEvent.target;
    return Dt(i, Q("direction")) && (!t || Dt(i, Q(t)));
  };
}
function lm(t, r, e) {
  var n, i = ne(t, {
    "x%": function(C) {
      return C / 100 * r.offsetWidth;
    },
    "y%": function(C) {
      return C / 100 * r.offsetHeight;
    }
  }), a = t.slice(0, e < 0 ? void 0 : e), o = t.slice(0, e < 0 ? void 0 : e + 1), s = t[e] || "", u = e < 0 ? [] : t.slice(e), l = e < 0 ? [] : t.slice(e + 1), f = i.slice(0, e < 0 ? void 0 : e), c = i.slice(0, e < 0 ? void 0 : e + 1), v = (n = i[e]) !== null && n !== void 0 ? n : ne([""])[0], p = e < 0 ? [] : i.slice(e), d = e < 0 ? [] : i.slice(e + 1), h = v ? [v] : [], g = Wr(f), m = Wr(c), y = Wr(p), x = Wr(d), E = pt(g, y, 4);
  return {
    transforms: t,
    beforeFunctionMatrix: g,
    beforeFunctionMatrix2: m,
    targetFunctionMatrix: Wr(h),
    afterFunctionMatrix: y,
    afterFunctionMatrix2: x,
    allFunctionMatrix: E,
    beforeFunctions: f,
    beforeFunctions2: c,
    targetFunction: h[0],
    afterFunctions: p,
    afterFunctions2: d,
    beforeFunctionTexts: a,
    beforeFunctionTexts2: o,
    targetFunctionText: s,
    afterFunctionTexts: u,
    afterFunctionTexts2: l
  };
}
function fm(t) {
  return !t || !tr(t) || ce(t) ? !1 : _t(t) || "length" in t;
}
function ir(t, r) {
  return t ? ce(t) ? t : $t(t) ? r ? document.querySelector(t) : t : na(t) ? t() : Qs(t) ? t : "current" in t ? t.current : t : null;
}
function Ia(t, r) {
  if (!t)
    return [];
  var e = fm(t) ? [].slice.call(t) : [t];
  return e.reduce(function(n, i) {
    return $t(i) && r ? N(N([], T(n), !1), T([].slice.call(document.querySelectorAll(i))), !1) : (_t(i) ? n.push(Ia(i, r)) : n.push(ir(i, r)), n);
  }, []);
}
function cm(t, r, e) {
  var n = Et(t, r) / Math.PI * 180;
  return n = e >= 0 ? n : 180 - n, n = n >= 0 ? n : 360 + n, n;
}
function ts(t, r) {
  var e = t.rootMatrix, n = t.is3d, i = n ? 4 : 3, a = or(e, i);
  return n || (a = rr(a, 3, 4)), a[12] = 0, a[13] = 0, a[14] = 0, Wh(a, r);
}
function xl(t, r, e, n, i) {
  var a = T(t, 2), o = a[0], s = a[1], u = 0, l = 0;
  if (i && o && s) {
    var f = Et([0, 0], r), c = Et([0, 0], n), v = Ut(r), p = Math.cos(f - c) * v;
    if (!n[0])
      l = p, u = l * e;
    else if (!n[1])
      u = p, l = u / e;
    else {
      var d = n[0] * o, h = n[1] * s, g = Math.atan2(d + r[0], h + r[1]), m = Math.atan2(d, h);
      g < 0 && (g += Math.PI * 2), m < 0 && (m += Math.PI * 2);
      var y = 0;
      z(g - m) < Math.PI / 2 || z(g - m) > Math.PI / 2 * 3 || (m += Math.PI), y = g - m, y > Math.PI * 2 ? y -= Math.PI * 2 : y > Math.PI ? y = 2 * Math.PI - y : y < -Math.PI && (y = -2 * Math.PI - y);
      var x = Ut([d + r[0], h + r[1]]) * Math.cos(y);
      u = x * Math.sin(m) - d, l = x * Math.cos(m) - h, n[0] < 0 && (u *= -1), n[1] < 0 && (l *= -1);
    }
  } else
    u = n[0] * r[0], l = n[1] * r[1];
  return [u, l];
}
function bl(t, r, e, n) {
  var i, a = e.ratio, o = e.startOffsetWidth, s = e.startOffsetHeight, u = 0, l = 0, f = n.distX, c = n.distY, v = n.pinchScale, p = n.parentDistance, d = n.parentDist, h = n.parentScale, g = e.fixedDirection, m = [0, 1].map(function(S) {
    return z(t[S] - g[S]);
  }), y = [0, 1].map(function(S) {
    var M = m[S];
    return M !== 0 && (M = 2 / M), M;
  });
  if (d)
    u = d[0], l = d[1], r && (u ? l || (l = u / a) : u = l * a);
  else if (ee(v))
    u = (v - 1) * o, l = (v - 1) * s;
  else if (h)
    u = (h[0] - 1) * o, l = (h[1] - 1) * s;
  else if (p) {
    var x = o * m[0], E = s * m[1], C = Ut([x, E]);
    u = p / C * x * y[0], l = p / C * E * y[1];
  } else {
    var b = sr({ datas: e, distX: f, distY: c });
    b = y.map(function(S, M) {
      return b[M] * S;
    }), i = T(xl([o, s], b, a, t, r), 2), u = i[0], l = i[1];
  }
  return {
    // direction,
    // sizeDirection,
    distWidth: u,
    distHeight: l
  };
}
function Li(t, r) {
  if (r) {
    if (t === "left")
      return { x: "0%", y: "50%" };
    if (t === "top")
      return { x: "50%", y: "50%" };
    if (t === "center")
      return { x: "50%", y: "50%" };
    if (t === "right")
      return { x: "100%", y: "50%" };
    if (t === "bottom")
      return { x: "50%", y: "100%" };
    var e = T(t.split(" "), 2), n = e[0], i = e[1], a = Li(n || ""), o = Li(i || ""), s = _(_({}, a), o), u = {
      x: "50%",
      y: "50%"
    };
    return s.x && (u.x = s.x), s.y && (u.y = s.y), s.value && (s.x && !s.y && (u.y = s.value), !s.x && s.y && (u.x = s.value)), u;
  }
  return t === "left" ? { x: "0%" } : t === "right" ? { x: "100%" } : t === "top" ? { y: "0%" } : t === "bottom" ? { y: "100%" } : t ? t === "center" ? { value: "50%" } : { value: t } : {};
}
function ka(t, r, e) {
  var n = Li(t, !0), i = n.x, a = n.y;
  return [
    vt(i, r) || 0,
    vt(a, e) || 0
  ];
}
function vm(t, r, e) {
  var n = t.map(function(a) {
    return tt(a, r);
  }), i = n.map(function(a) {
    return je(a, e);
  });
  return {
    prev: n,
    next: i,
    result: i.map(function(a) {
      return lt(a, r);
    })
  };
}
function El(t, r) {
  return t.length === r.length && t.every(function(e, n) {
    var i = r[n], a = _t(e), o = _t(i);
    return a && o ? El(e, i) : !a && !o ? e === i : !1;
  });
}
function Zr(t, r, e, n, i) {
  var a = t._store, o = a[r];
  if (!(r in a))
    if (i != null)
      a[r] = i, o = i;
    else
      return a[r] = e, e;
  return o === e || n(o) === n(e) ? o : (a[r] = e, e);
}
function Vt(t) {
  return t >= 0 ? 1 : -1;
}
function z(t) {
  return Math.abs(t);
}
function ai(t, r) {
  return ih(t).map(function(e) {
    return r(e);
  });
}
function Sl(t) {
  return ee(t) ? {
    top: t,
    left: t,
    right: t,
    bottom: t
  } : {
    left: t.left || 0,
    top: t.top || 0,
    right: t.right || 0,
    bottom: t.bottom || 0
  };
}
var pm = ve("pinchable", {
  props: [
    "pinchable"
  ],
  events: [
    "pinchStart",
    "pinch",
    "pinchEnd",
    "pinchGroupStart",
    "pinchGroup",
    "pinchGroupEnd"
  ],
  dragStart: function() {
    return !0;
  },
  pinchStart: function(t, r) {
    var e = r.datas, n = r.targets, i = r.angle, a = r.originalDatas, o = t.props, s = o.pinchable, u = o.ables;
    if (!s)
      return !1;
    var l = "onPinch".concat(n ? "Group" : "", "Start"), f = "drag".concat(n ? "Group" : "", "ControlStart"), c = (s === !0 ? t.controlAbles : u.filter(function(h) {
      return s.indexOf(h.name) > -1;
    })).filter(function(h) {
      return h.canPinch && h[f];
    }), v = it(t, r, {});
    n && (v.targets = n);
    var p = W(t, l, v);
    e.isPinch = p !== !1, e.ables = c;
    var d = e.isPinch;
    return d ? (c.forEach(function(h) {
      if (a[h.name] = a[h.name] || {}, !!h[f]) {
        var g = _(_({}, r), { datas: a[h.name], parentRotate: i, isPinch: !0 });
        h[f](t, g);
      }
    }), t.state.snapRenderInfo = {
      request: r.isRequest,
      direction: [0, 0]
    }, d) : !1;
  },
  pinch: function(t, r) {
    var e = r.datas, n = r.scale, i = r.distance, a = r.originalDatas, o = r.inputEvent, s = r.targets, u = r.angle;
    if (e.isPinch) {
      var l = i * (1 - 1 / n), f = it(t, r, {});
      s && (f.targets = s);
      var c = "onPinch".concat(s ? "Group" : "");
      W(t, c, f);
      var v = e.ables, p = "drag".concat(s ? "Group" : "", "Control");
      return v.forEach(function(d) {
        d[p] && d[p](t, _(_({}, r), { datas: a[d.name], inputEvent: o, resolveMatrix: !0, pinchScale: n, parentDistance: l, parentRotate: u, isPinch: !0 }));
      }), f;
    }
  },
  pinchEnd: function(t, r) {
    var e = r.datas, n = r.isPinch, i = r.inputEvent, a = r.targets, o = r.originalDatas;
    if (e.isPinch) {
      var s = "onPinch".concat(a ? "Group" : "", "End"), u = Ht(t, r, { isDrag: n });
      a && (u.targets = a), W(t, s, u);
      var l = e.ables, f = "drag".concat(a ? "Group" : "", "ControlEnd");
      return l.forEach(function(c) {
        c[f] && c[f](t, _(_({}, r), { isDrag: n, datas: o[c.name], inputEvent: i, isPinch: !0 }));
      }), n;
    }
  },
  pinchGroupStart: function(t, r) {
    return this.pinchStart(t, _(_({}, r), { targets: t.props.targets }));
  },
  pinchGroup: function(t, r) {
    return this.pinch(t, _(_({}, r), { targets: t.props.targets }));
  },
  pinchGroupEnd: function(t, r) {
    return this.pinchEnd(t, _(_({}, r), { targets: t.props.targets }));
  }
}), rs = Oa("scalable"), dm = {
  name: "scalable",
  ableGroup: "size",
  canPinch: !0,
  props: [
    "scalable",
    "throttleScale",
    "renderDirections",
    "keepRatio",
    "edge",
    "displayAroundControls"
  ],
  events: [
    "scaleStart",
    "beforeScale",
    "scale",
    "scaleEnd",
    "scaleGroupStart",
    "beforeScaleGroup",
    "scaleGroup",
    "scaleGroupEnd"
  ],
  render: Yu("scalable"),
  dragControlCondition: rs,
  viewClassName: Ra("scalable"),
  dragControlStart: function(t, r) {
    var e = r.datas, n = r.isPinch, i = r.inputEvent, a = r.parentDirection, o = pl(a, n, i, e), s = t.state, u = s.width, l = s.height, f = s.targetTransform, c = s.target, v = s.pos1, p = s.pos2, d = s.pos4;
    if (!o || !c)
      return !1;
    n || Yr(t, r), e.datas = {}, e.transform = f, e.prevDist = [1, 1], e.direction = o, e.startOffsetWidth = u, e.startOffsetHeight = l, e.startValue = [1, 1];
    var h = !o[0] && !o[1] || o[0] || !o[1];
    kn(t, r, "scale"), e.isWidth = h;
    function g(b) {
      e.ratio = b && isFinite(b) ? b : 0;
    }
    e.startPositions = Kt(t.state);
    function m(b) {
      var S = Zu(e.startPositions, b);
      e.fixedDirection = S.fixedDirection, e.fixedPosition = S.fixedPosition, e.fixedOffset = S.fixedOffset;
    }
    e.setFixedDirection = m, g(lr(v, p) / lr(p, d)), m([-o[0], -o[1]]);
    var y = function(b) {
      e.minScaleSize = b;
    }, x = function(b) {
      e.maxScaleSize = b;
    };
    y([-1 / 0, -1 / 0]), x([1 / 0, 1 / 0]);
    var E = it(t, r, _(_({ direction: o, set: function(b) {
      e.startValue = b;
    }, setRatio: g, setFixedDirection: m, setMinScaleSize: y, setMaxScaleSize: x }, In(t, r)), { dragStart: Gt.dragStart(t, new ie().dragStart([0, 0], r)) })), C = W(t, "onScaleStart", E);
    return e.startFixedDirection = e.fixedDirection, C !== !1 && (e.isScale = !0, t.state.snapRenderInfo = {
      request: r.isRequest,
      direction: o
    }), e.isScale ? E : !1;
  },
  dragControl: function(t, r) {
    Rn(t, r, "scale");
    var e = r.datas, n = r.parentKeepRatio, i = r.parentFlag, a = r.isPinch, o = r.dragClient, s = r.isRequest, u = r.useSnap, l = r.resolveMatrix, f = e.prevDist, c = e.direction, v = e.startOffsetWidth, p = e.startOffsetHeight, d = e.isScale, h = e.startValue, g = e.isWidth, m = e.ratio;
    if (!d)
      return !1;
    var y = t.props, x = y.throttleScale, E = y.parentMoveable, C = c;
    !c[0] && !c[1] && (C = [1, 1]);
    var b = m && (n != null ? n : y.keepRatio) || !1, S = t.state, M = [
      h[0],
      h[1]
    ];
    function P() {
      var rt = bl(C, b, e, r), Z = rt.distWidth, K = rt.distHeight, ft = v ? (v + Z) / v : 1, at = p ? (p + K) / p : 1;
      h[0] || (M[0] = Z / v), h[1] || (M[1] = K / p);
      var ot = (C[0] || b ? ft : 1) * M[0], ut = (C[1] || b ? at : 1) * M[1];
      return ot === 0 && (ot = Vt(f[0]) * Je), ut === 0 && (ut = Vt(f[1]) * Je), [ot, ut];
    }
    var D = P();
    if (!a && t.props.groupable) {
      var O = S.snapRenderInfo || {}, R = O.direction;
      _t(R) && (R[0] || R[1]) && (S.snapRenderInfo = { direction: c, request: r.isRequest });
    }
    W(t, "onBeforeScale", it(t, r, {
      scale: D,
      setFixedDirection: function(rt) {
        return e.setFixedDirection(rt), D = P(), D;
      },
      startFixedDirection: e.startFixedDirection,
      setScale: function(rt) {
        D = rt;
      }
    }, !0));
    var w = [
      D[0] / M[0],
      D[1] / M[1]
    ], I = o, k = [0, 0], F = !o && !i && a;
    if (F || l ? I = ba(t, e.targetAllTransform, [0, 0], [0, 0], e) : o || (I = e.fixedPosition), a || (k = X0(t, w, c, !u && s, e)), b) {
      C[0] && C[1] && k[0] && k[1] && (Math.abs(k[0] * v) > Math.abs(k[1] * p) ? k[1] = 0 : k[0] = 0);
      var L = !k[0] && !k[1];
      if (L && (g ? w[0] = et(w[0] * M[0], x) / M[0] : w[1] = et(w[1] * M[1], x) / M[1]), C[0] && !C[1] || k[0] && !k[1] || L && g) {
        w[0] += k[0];
        var B = v * w[0] * M[0] / m;
        w[1] = B / p / M[1];
      } else if (!C[0] && C[1] || !k[0] && k[1] || L && !g) {
        w[1] += k[1];
        var $ = p * w[1] * M[1] * m;
        w[0] = $ / v / M[0];
      }
    } else
      w[0] += k[0], w[1] += k[1], k[0] || (w[0] = et(w[0] * M[0], x) / M[0]), k[1] || (w[1] = et(w[1] * M[1], x) / M[1]);
    w[0] === 0 && (w[0] = Vt(f[0]) * Je), w[1] === 0 && (w[1] = Vt(f[1]) * Je), D = U0(w, [M[0], M[1]]);
    var j = [
      v,
      p
    ], G = [
      v * D[0],
      p * D[1]
    ];
    G = Us(G, e.minScaleSize, e.maxScaleSize, b ? m : !1), D = ai(2, function(rt) {
      return j[rt] ? G[rt] / j[rt] : G[rt];
    }), w = ai(2, function(rt) {
      return D[rt] / M[rt];
    });
    var q = ai(2, function(rt) {
      return f[rt] ? w[rt] / f[rt] : w[rt];
    }), U = "scale(".concat(w.join(", "), ")"), H = "scale(".concat(D.join(", "), ")"), X = On(e, H, U), Y = !h[0] || !h[1], V = Wg(t, Y ? H : U, e.fixedDirection, I, e.fixedOffset, e, Y), J = F ? V : tt(V, e.prevInverseDist || [0, 0]);
    if (e.prevDist = w, e.prevInverseDist = V, D[0] === f[0] && D[1] === f[1] && J.every(function(rt) {
      return !rt;
    }) && !E && !F)
      return !1;
    var nt = it(t, r, _({ offsetWidth: v, offsetHeight: p, direction: c, scale: D, dist: w, delta: q, isPinch: !!a }, Gu(t, X, J, a, r)));
    return W(t, "onScale", nt), nt;
  },
  dragControlEnd: function(t, r) {
    var e = r.datas;
    if (!e.isScale)
      return !1;
    e.isScale = !1;
    var n = Ht(t, r, {});
    return W(t, "onScaleEnd", n), n;
  },
  dragGroupControlCondition: rs,
  dragGroupControlStart: function(t, r) {
    var e = r.datas, n = this.dragControlStart(t, r);
    if (!n)
      return !1;
    var i = Qt(t, "resizable", r);
    e.moveableScale = t.scale;
    var a = fr(t, this, "dragControlStart", r, function(l, f) {
      return mn(t, l, e, f);
    }), o = function(l) {
      n.setFixedDirection(l), a.forEach(function(f, c) {
        f.setFixedDirection(l), mn(t, f.moveable, e, i[c]);
      });
    };
    e.setFixedDirection = o;
    var s = _(_({}, n), { targets: t.props.targets, events: a, setFixedDirection: o }), u = W(t, "onScaleGroupStart", s);
    return e.isScale = u !== !1, e.isScale ? s : !1;
  },
  dragGroupControl: function(t, r) {
    var e = r.datas;
    if (e.isScale) {
      Ln(t, "onBeforeScale", function(f) {
        W(t, "onBeforeScaleGroup", it(t, r, _(_({}, f), { targets: t.props.targets }), !0));
      });
      var n = this.dragControl(t, r);
      if (n) {
        var i = n.dist, a = e.moveableScale;
        t.scale = [
          i[0] * a[0],
          i[1] * a[1]
        ];
        var o = t.props.keepRatio, s = e.fixedPosition, u = fr(t, this, "dragControl", r, function(f, c) {
          var v = T(kt(Ye(t.rotation / 180 * Math.PI, 3), [
            c.datas.originalX * i[0],
            c.datas.originalY * i[1],
            1
          ], 3), 2), p = v[0], d = v[1];
          return _(_({}, c), {
            parentDist: null,
            parentScale: i,
            parentKeepRatio: o,
            // recalculate child fixed position for parent group's dragging.
            dragClient: lt(s, [p, d])
          });
        }), l = _({ targets: t.props.targets, events: u }, n);
        return W(t, "onScaleGroup", l), l;
      }
    }
  },
  dragGroupControlEnd: function(t, r) {
    var e = r.isDrag, n = r.datas;
    if (n.isScale) {
      this.dragControlEnd(t, r);
      var i = fr(t, this, "dragControlEnd", r), a = Ht(t, r, {
        targets: t.props.targets,
        events: i
      });
      return W(t, "onScaleGroupEnd", a), e;
    }
  },
  /**
       * @method Moveable.Scalable#request
       * @param {Moveable.Scalable.ScalableRequestParam} e - the Scalable's request parameter
       * @return {Moveable.Requester} Moveable Requester
       * @example
  
       * // Instantly Request (requestStart - request - requestEnd)
       * moveable.request("scalable", { deltaWidth: 10, deltaHeight: 10 }, true);
       *
       * // requestStart
       * const requester = moveable.request("scalable");
       *
       * // request
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       *
       * // requestEnd
       * requester.requestEnd();
       */
  request: function() {
    var t = {}, r = 0, e = 0, n = !1;
    return {
      isControl: !0,
      requestStart: function(i) {
        return n = i.useSnap, {
          datas: t,
          parentDirection: i.direction || [1, 1],
          useSnap: n
        };
      },
      request: function(i) {
        return r += i.deltaWidth, e += i.deltaHeight, {
          datas: t,
          parentDist: [r, e],
          parentKeepRatio: i.keepRatio,
          useSnap: n
        };
      },
      requestEnd: function() {
        return { datas: t, isDrag: !0, useSnap: n };
      }
    };
  }
};
function mr(t, r) {
  return t.map(function(e, n) {
    return Tr(e, r[n], 1, 2);
  });
}
function es(t, r, e) {
  var n = Et(t, r), i = Et(t, e), a = i - n;
  return a >= 0 ? a : a + 2 * Math.PI;
}
function hm(t, r) {
  var e = es(t[0], t[1], t[2]), n = es(r[0], r[1], r[2]), i = Math.PI;
  return !(e >= i && n <= i || e <= i && n >= i);
}
var gm = {
  name: "warpable",
  ableGroup: "size",
  props: [
    "warpable",
    "renderDirections",
    "edge",
    "displayAroundControls"
  ],
  events: [
    "warpStart",
    "warp",
    "warpEnd"
  ],
  viewClassName: Ra("warpable"),
  render: function(t, r) {
    var e = t.props, n = e.resizable, i = e.scalable, a = e.warpable, o = e.zoom;
    if (n || i || !a)
      return [];
    var s = t.state, u = s.pos1, l = s.pos2, f = s.pos3, c = s.pos4, v = mr(u, l), p = mr(l, u), d = mr(u, f), h = mr(f, u), g = mr(f, c), m = mr(c, f), y = mr(l, c), x = mr(c, l);
    return N([
      r.createElement("div", { className: Q("line"), key: "middeLine1", style: be(v, g, o) }),
      r.createElement("div", { className: Q("line"), key: "middeLine2", style: be(p, m, o) }),
      r.createElement("div", { className: Q("line"), key: "middeLine3", style: be(d, y, o) }),
      r.createElement("div", { className: Q("line"), key: "middeLine4", style: be(h, x, o) })
    ], T(Hu(t, "warpable", r)), !1);
  },
  dragControlCondition: function(t, r) {
    if (r.isRequest)
      return !1;
    var e = r.inputEvent.target;
    return Dt(e, Q("direction")) && Dt(e, Q("warpable"));
  },
  dragControlStart: function(t, r) {
    var e = r.datas, n = r.inputEvent, i = t.props.target, a = n.target, o = dl(a, e);
    if (!o || !i)
      return !1;
    var s = t.state, u = s.transformOrigin, l = s.is3d, f = s.targetTransform, c = s.targetMatrix, v = s.width, p = s.height, d = s.left, h = s.top;
    e.datas = {}, e.targetTransform = f, e.warpTargetMatrix = l ? c : rr(c, 3, 4), e.targetInverseMatrix = yu(or(e.warpTargetMatrix, 4), 3, 4), e.direction = o, e.left = d, e.top = h, e.poses = [
      [0, 0],
      [v, 0],
      [0, p],
      [v, p]
    ].map(function(y) {
      return tt(y, u);
    }), e.nextPoses = e.poses.map(function(y) {
      var x = T(y, 2), E = x[0], C = x[1];
      return kt(e.warpTargetMatrix, [E, C, 0, 1], 4);
    }), e.startValue = yt(4), e.prevMatrix = yt(4), e.absolutePoses = Kt(s), e.posIndexes = zu(o), Yr(t, r), kn(t, r, "matrix3d"), s.snapRenderInfo = {
      request: r.isRequest,
      direction: o
    };
    var g = it(t, r, _({ set: function(y) {
      e.startValue = y;
    } }, In(t, r))), m = W(t, "onWarpStart", g);
    return m !== !1 && (e.isWarp = !0), e.isWarp;
  },
  dragControl: function(t, r) {
    var e = r.datas, n = r.isRequest, i = r.distX, a = r.distY, o = e.targetInverseMatrix, s = e.prevMatrix, u = e.isWarp, l = e.startValue, f = e.poses, c = e.posIndexes, v = e.absolutePoses;
    if (!u)
      return !1;
    if (Rn(t, r, "matrix3d"), he(t, "warpable")) {
      var p = c.map(function(P) {
        return v[P];
      });
      p.length > 1 && p.push([
        (p[0][0] + p[1][0]) / 2,
        (p[0][1] + p[1][1]) / 2
      ]);
      var d = zn(t, n, {
        horizontal: p.map(function(P) {
          return P[1] + a;
        }),
        vertical: p.map(function(P) {
          return P[0] + i;
        })
      }), h = d.horizontal, g = d.vertical;
      a -= h.offset, i -= g.offset;
    }
    var m = sr({ datas: e, distX: i, distY: a }, !0), y = e.nextPoses.slice();
    if (c.forEach(function(P) {
      y[P] = lt(y[P], m);
    }), !zg.every(function(P) {
      return hm(P.map(function(D) {
        return f[D];
      }), P.map(function(D) {
        return y[D];
      }));
    }))
      return !1;
    var x = da(f[0], f[2], f[1], f[3], y[0], y[2], y[1], y[3]);
    if (!x.length)
      return !1;
    var E = pt(o, x, 4), C = Au(e, E, !0), b = pt(or(s, 4), C, 4);
    e.prevMatrix = C;
    var S = pt(l, C, 4), M = On(e, "matrix3d(".concat(S.join(", "), ")"), "matrix3d(".concat(C.join(", "), ")"));
    return xa(r, M), W(t, "onWarp", it(t, r, _({ delta: b, matrix: S, dist: C, multiply: pt, transform: M }, Lt({
      transform: M
    }, r)))), !0;
  },
  dragControlEnd: function(t, r) {
    var e = r.datas, n = r.isDrag;
    return e.isWarp ? (e.isWarp = !1, W(t, "onWarpEnd", Ht(t, r, {})), n) : !1;
  }
}, mm = /* @__PURE__ */ Q("area-pieces"), on = /* @__PURE__ */ Q("area-piece"), Cl = /* @__PURE__ */ Q("avoid"), ym = Q("view-dragging");
function oi(t) {
  var r = t.areaElement;
  if (r) {
    var e = t.state, n = e.width, i = e.height;
    Js(r, Cl), r.style.cssText += "left: 0px; top: 0px; width: ".concat(n, "px; height: ").concat(i, "px");
  }
}
function ns(t) {
  return t.createElement(
    "div",
    { key: "area_pieces", className: mm },
    t.createElement("div", { className: on }),
    t.createElement("div", { className: on }),
    t.createElement("div", { className: on }),
    t.createElement("div", { className: on })
  );
}
var Ml = {
  name: "dragArea",
  props: [
    "dragArea",
    "passDragArea"
  ],
  events: [
    "click",
    "clickGroup"
  ],
  render: function(t, r) {
    var e = t.props, n = e.target, i = e.dragArea, a = e.groupable, o = e.passDragArea, s = t.getState(), u = s.width, l = s.height, f = s.renderPoses, c = o ? Q("area", "pass") : Q("area");
    if (a)
      return [
        r.createElement("div", { key: "area", ref: ur(t, "areaElement"), className: c }),
        ns(r)
      ];
    if (!n || !i)
      return [];
    var v = da([0, 0], [u, 0], [0, l], [u, l], f[0], f[1], f[2], f[3]), p = v.length ? Gn(v, !0) : "none";
    return [
      r.createElement("div", { key: "area", ref: ur(t, "areaElement"), className: c, style: {
        top: "0px",
        left: "0px",
        width: "".concat(u, "px"),
        height: "".concat(l, "px"),
        transformOrigin: "0 0",
        transform: p
      } }),
      ns(r)
    ];
  },
  dragStart: function(t, r) {
    var e = r.datas, n = r.clientX, i = r.clientY, a = r.inputEvent;
    if (!a)
      return !1;
    e.isDragArea = !1;
    var o = t.areaElement, s = t.state, u = s.moveableClientRect, l = s.renderPoses, f = s.rootMatrix, c = s.is3d, v = u.left, p = u.top, d = qt(l), h = d.left, g = d.top, m = d.width, y = d.height, x = c ? 4 : 3, E = T(se(f, [n - v, i - p], x), 2), C = E[0], b = E[1];
    C -= h, b -= g;
    var S = [
      { left: h, top: g, width: m, height: b - 10 },
      { left: h, top: g, width: C - 10, height: y },
      { left: h, top: g + b + 10, width: m, height: y - b - 10 },
      { left: h + C + 10, top: g, width: m - C - 10, height: y }
    ], M = [].slice.call(o.nextElementSibling.children);
    S.forEach(function(P, D) {
      M[D].style.cssText = "left: ".concat(P.left, "px;top: ").concat(P.top, "px; width: ").concat(P.width, "px; height: ").concat(P.height, "px;");
    }), Zs(o, Cl), s.disableNativeEvent = !0;
  },
  drag: function(t, r) {
    var e = r.datas, n = r.inputEvent;
    if (this.enableNativeEvent(t), !n)
      return !1;
    e.isDragArea || (e.isDragArea = !0, oi(t));
  },
  dragEnd: function(t, r) {
    this.enableNativeEvent(t);
    var e = r.inputEvent, n = r.datas;
    if (!e)
      return !1;
    n.isDragArea || oi(t);
  },
  dragGroupStart: function(t, r) {
    return this.dragStart(t, r);
  },
  dragGroup: function(t, r) {
    return this.drag(t, r);
  },
  dragGroupEnd: function(t, r) {
    return this.dragEnd(t, r);
  },
  unset: function(t) {
    oi(t), t.state.disableNativeEvent = !1;
  },
  enableNativeEvent: function(t) {
    var r = t.state;
    r.disableNativeEvent && qs(function() {
      r.disableNativeEvent = !1;
    });
  }
}, xm = ve("origin", {
  props: ["origin", "svgOrigin"],
  render: function(t, r) {
    var e = t.props, n = e.zoom, i = e.svgOrigin, a = e.groupable, o = t.getState(), s = o.beforeOrigin, u = o.rotation, l = o.svg, f = o.allMatrix, c = o.is3d, v = o.left, p = o.top, d = o.offsetWidth, h = o.offsetHeight, g;
    if (!a && l && i) {
      var m = T(ka(i, d, h), 2), y = m[0], x = m[1], E = c ? 4 : 3, C = bt(f, [y, x], E);
      g = En(u, n, tt(C, [v, p]));
    } else
      g = En(u, n, s);
    return [
      r.createElement("div", { className: Q("control", "origin"), style: g, key: "beforeOrigin" })
    ];
  }
});
function bm(t) {
  var r = t.scrollContainer;
  return [
    r.scrollLeft,
    r.scrollTop
  ];
}
var Em = {
  name: "scrollable",
  canPinch: !0,
  props: [
    "scrollable",
    "scrollContainer",
    "scrollThreshold",
    "scrollThrottleTime",
    "getScrollPosition",
    "scrollOptions"
  ],
  events: [
    "scroll",
    "scrollGroup"
  ],
  dragRelation: "strong",
  dragStart: function(t, r) {
    var e = t.props, n = e.scrollContainer, i = n === void 0 ? t.getContainer() : n, a = e.scrollOptions, o = new rg(), s = ir(i, !0);
    r.datas.dragScroll = o, t.state.dragScroll = o;
    var u = r.isControl ? "controlGesto" : "targetGesto", l = r.targets;
    o.on("scroll", function(f) {
      var c = f.container, v = f.direction, p = it(t, r, {
        scrollContainer: c,
        direction: v
      }), d = l ? "onScrollGroup" : "onScroll";
      l && (p.targets = l), W(t, d, p);
    }).on("move", function(f) {
      var c = f.offsetX, v = f.offsetY, p = f.inputEvent;
      t[u].scrollBy(c, v, p.inputEvent, !1);
    }).on("scrollDrag", function(f) {
      var c = f.next;
      c(t[u].getCurrentEvent());
    }), o.dragStart(r, _({ container: s }, a));
  },
  checkScroll: function(t, r) {
    var e = r.datas.dragScroll;
    if (e) {
      var n = t.props, i = n.scrollContainer, a = i === void 0 ? t.getContainer() : i, o = n.scrollThreshold, s = o === void 0 ? 0 : o, u = n.scrollThrottleTime, l = u === void 0 ? 0 : u, f = n.getScrollPosition, c = f === void 0 ? bm : f, v = n.scrollOptions;
      return e.drag(r, _({ container: a, threshold: s, throttleTime: l, getScrollPosition: function(p) {
        return c({ scrollContainer: p.container, direction: p.direction });
      } }, v)), !0;
    }
  },
  drag: function(t, r) {
    return this.checkScroll(t, r);
  },
  dragEnd: function(t, r) {
    r.datas.dragScroll.dragEnd(), r.datas.dragScroll = null;
  },
  dragControlStart: function(t, r) {
    return this.dragStart(t, _(_({}, r), { isControl: !0 }));
  },
  dragControl: function(t, r) {
    return this.drag(t, r);
  },
  dragControlEnd: function(t, r) {
    return this.dragEnd(t, r);
  },
  dragGroupStart: function(t, r) {
    return this.dragStart(t, _(_({}, r), { targets: t.props.targets }));
  },
  dragGroup: function(t, r) {
    return this.drag(t, _(_({}, r), { targets: t.props.targets }));
  },
  dragGroupEnd: function(t, r) {
    return this.dragEnd(t, _(_({}, r), { targets: t.props.targets }));
  },
  dragGroupControlStart: function(t, r) {
    return this.dragStart(t, _(_({}, r), { targets: t.props.targets, isControl: !0 }));
  },
  dragGroupControl: function(t, r) {
    return this.drag(t, _(_({}, r), { targets: t.props.targets }));
  },
  dragGroupControEnd: function(t, r) {
    return this.dragEnd(t, _(_({}, r), { targets: t.props.targets }));
  },
  unset: function(t) {
    var r, e = t.state;
    (r = e.dragScroll) === null || r === void 0 || r.dragEnd(), e.dragScroll = null;
  }
}, _l = {
  name: "",
  props: [
    "target",
    "dragTargetSelf",
    "dragTarget",
    "dragContainer",
    "container",
    "warpSelf",
    "rootContainer",
    "useResizeObserver",
    "useMutationObserver",
    "zoom",
    "dragFocusedInput",
    "transformOrigin",
    "ables",
    "className",
    "pinchThreshold",
    "pinchOutside",
    "triggerAblesSimultaneously",
    "checkInput",
    "cspNonce",
    "translateZ",
    "hideDefaultLines",
    "props",
    "flushSync",
    "stopPropagation",
    "preventClickEventOnDrag",
    "preventClickDefault",
    "viewContainer",
    "persistData",
    "useAccuratePosition",
    "firstRenderState",
    "linePadding",
    "controlPadding",
    "preventDefault",
    "requestStyles"
  ],
  events: [
    "changeTargets"
  ]
}, Sm = ve("padding", {
  props: ["padding"],
  render: function(t, r) {
    var e = t.props;
    if (e.dragArea)
      return [];
    var n = Sl(e.padding || {}), i = n.left, a = n.top, o = n.right, s = n.bottom, u = t.getState(), l = u.renderPoses, f = u.pos1, c = u.pos2, v = u.pos3, p = u.pos4, d = [f, c, v, p], h = [];
    return i > 0 && h.push([0, 2]), a > 0 && h.push([0, 1]), o > 0 && h.push([1, 3]), s > 0 && h.push([2, 3]), h.map(function(g, m) {
      var y = T(g, 2), x = y[0], E = y[1], C = d[x], b = d[E], S = l[x], M = l[E], P = da([0, 0], [100, 0], [0, 100], [100, 100], C, b, S, M);
      if (P.length)
        return r.createElement("div", { key: "padding".concat(m), className: Q("padding"), style: {
          transform: Gn(P, !0)
        } });
    });
  }
}), is = ["nw", "ne", "se", "sw"];
function sn(t, r) {
  var e = t[0] + t[1], n = e > r ? r / e : 1;
  return t[0] *= n, t[1] = r - t[1] * n, t;
}
var Cm = [1, 2, 5, 6], Mm = [0, 3, 4, 7], Rr = [1, -1, -1, 1], Or = [1, 1, -1, -1];
function Aa(t, r, e, n, i, a, o, s) {
  i === void 0 && (i = 0), a === void 0 && (a = 0), o === void 0 && (o = e), s === void 0 && (s = n);
  var u = [], l = !1, f = t.filter(function(v) {
    return !v.virtual;
  }), c = f.map(function(v) {
    var p = v.horizontal, d = v.vertical, h = v.pos;
    if (d && !l && (l = !0, u.push("/")), l) {
      var g = Math.max(0, d === 1 ? h[1] - a : s - h[1]);
      return u.push(Zt(g, n, r)), g;
    } else {
      var g = Math.max(0, p === 1 ? h[0] - i : o - h[0]);
      return u.push(Zt(g, e, r)), g;
    }
  });
  return {
    radiusPoses: f,
    styles: u,
    raws: c
  };
}
function Pl(t) {
  for (var r = [0, 0], e = [0, 0], n = t.length, i = 0; i < n; ++i) {
    var a = t[i];
    a.sub && (a.horizontal && (r[1] === 0 && (r[0] = i), r[1] = i - r[0] + 1, e[0] = i + 1), a.vertical && (e[1] === 0 && (e[0] = i), e[1] = i - e[0] + 1));
  }
  return {
    horizontalRange: r,
    verticalRange: e
  };
}
function Tl(t, r, e, n, i, a, o) {
  var s, u, l, f;
  a === void 0 && (a = [0, 0]), o === void 0 && (o = !1);
  var c = t.indexOf("/"), v = (c > -1 ? t.slice(0, c) : t).length, p = t.slice(0, v), d = t.slice(v + 1), h = p.length, g = d.length, m = g > 0, y = T(p, 4), x = y[0], E = x === void 0 ? "0px" : x, C = y[1], b = C === void 0 ? E : C, S = y[2], M = S === void 0 ? E : S, P = y[3], D = P === void 0 ? b : P, O = T(d, 4), R = O[0], w = R === void 0 ? E : R, I = O[1], k = I === void 0 ? m ? w : b : I, F = O[2], L = F === void 0 ? m ? w : M : F, B = O[3], $ = B === void 0 ? m ? k : D : B, j = [E, b, M, D].map(function(Y) {
    return vt(Y, r);
  }), G = [w, k, L, $].map(function(Y) {
    return vt(Y, e);
  }), q = j.slice(), U = G.slice();
  s = T(sn([q[0], q[1]], r), 2), q[0] = s[0], q[1] = s[1], u = T(sn([q[3], q[2]], r), 2), q[3] = u[0], q[2] = u[1], l = T(sn([U[0], U[3]], e), 2), U[0] = l[0], U[3] = l[1], f = T(sn([U[1], U[2]], e), 2), U[1] = f[0], U[2] = f[1];
  var H = o ? q : q.slice(0, Math.max(a[0], h)), X = o ? U : U.slice(0, Math.max(a[1], g));
  return N(N([], T(H.map(function(Y, V) {
    var J = is[V];
    return {
      virtual: V >= h,
      horizontal: Rr[V],
      vertical: 0,
      pos: [n + Y, i + (Or[V] === -1 ? e : 0)],
      sub: !0,
      raw: j[V],
      direction: J
    };
  })), !1), T(X.map(function(Y, V) {
    var J = is[V];
    return {
      virtual: V >= g,
      horizontal: 0,
      vertical: Or[V],
      pos: [n + (Rr[V] === -1 ? r : 0), i + Y],
      sub: !0,
      raw: G[V],
      direction: J
    };
  })), !1);
}
function _m(t, r, e, n, i) {
  i === void 0 && (i = r.length);
  var a = Pl(t.slice(n)), o = a.horizontalRange, s = a.verticalRange, u = e - n, l = 0;
  if (u === 0)
    l = i;
  else if (u > 0 && u < o[1])
    l = o[1] - u;
  else if (u >= s[0])
    l = s[0] + s[1] - u;
  else
    return;
  t.splice(e, l), r.splice(e, l);
}
function Pm(t, r, e, n, i, a, o, s, u, l, f) {
  l === void 0 && (l = 0), f === void 0 && (f = 0);
  var c = Pl(t.slice(e)), v = c.horizontalRange, p = c.verticalRange;
  if (n > -1)
    for (var d = Rr[n] === 1 ? a - l : s - a, h = v[1]; h <= n; ++h) {
      var g = Or[h] === 1 ? f : u, m = 0;
      if (n === h ? m = a : h === 0 ? m = l + d : Rr[h] === -1 && (m = s - (r[e][0] - l)), t.splice(e + h, 0, {
        horizontal: Rr[h],
        vertical: 0,
        pos: [m, g]
      }), r.splice(e + h, 0, [m, g]), h === 0)
        break;
    }
  else if (i > -1) {
    var y = Or[i] === 1 ? o - f : u - o;
    if (v[1] === 0 && p[1] === 0) {
      var x = [
        l + y,
        f
      ];
      t.push({
        horizontal: Rr[0],
        vertical: 0,
        pos: x
      }), r.push(x);
    }
    for (var E = p[0], h = p[1]; h <= i; ++h) {
      var m = Rr[h] === 1 ? l : s, g = 0;
      if (i === h ? g = o : h === 0 ? g = f + y : Or[h] === 1 ? g = r[e + E][1] : Or[h] === -1 && (g = u - (r[e + E][1] - f)), t.push({
        horizontal: 0,
        vertical: Or[h],
        pos: [m, g]
      }), r.push([m, g]), h === 0)
        break;
    }
  }
}
function Tm(t, r) {
  r === void 0 && (r = t.map(function(i) {
    return i.raw;
  }));
  var e = t.map(function(i, a) {
    return i.horizontal ? r[a] : null;
  }).filter(function(i) {
    return i != null;
  }), n = t.map(function(i, a) {
    return i.vertical ? r[a] : null;
  }).filter(function(i) {
    return i != null;
  });
  return {
    horizontals: e,
    verticals: n
  };
}
var Dm = [
  [0, -1, "n"],
  [1, 0, "e"]
], wm = [
  [-1, -1, "nw"],
  [0, -1, "n"],
  [1, -1, "ne"],
  [1, 0, "e"],
  [1, 1, "se"],
  [0, 1, "s"],
  [-1, 1, "sw"],
  [-1, 0, "w"]
];
function Ba(t, r, e) {
  var n = t.props.clipRelative, i = t.state, a = i.width, o = i.height, s = r, u = s.type, l = s.poses, f = u === "rect", c = u === "circle";
  if (u === "polygon")
    return e.map(function(b) {
      return "".concat(Zt(b[0], a, n), " ").concat(Zt(b[1], o, n));
    });
  if (f || u === "inset") {
    var v = e[1][1], p = e[3][0], d = e[7][0], h = e[5][1];
    if (f)
      return [
        v,
        p,
        h,
        d
      ].map(function(b) {
        return "".concat(b, "px");
      });
    var g = [v, a - p, o - h, d].map(function(b, S) {
      return Zt(b, S % 2 ? a : o, n);
    });
    if (e.length > 8) {
      var m = T(tt(e[4], e[0]), 2), y = m[0], x = m[1];
      g.push.apply(g, N(["round"], T(Aa(l.slice(8).map(function(b, S) {
        return _(_({}, b), { pos: e[S] });
      }), n, y, x, d, v, p, h).styles), !1));
    }
    return g;
  } else if (c || u === "ellipse") {
    var E = e[0], C = Zt(z(e[1][1] - E[1]), c ? Math.sqrt((a * a + o * o) / 2) : o, n), g = c ? [C] : [Zt(z(e[2][0] - E[0]), a, n), C];
    return g.push("at", Zt(E[0], a, n), Zt(E[1], o, n)), g;
  }
}
function Cn(t, r, e, n) {
  var i = [n, (n + r) / 2, r], a = [t, (t + e) / 2, e];
  return wm.map(function(o) {
    var s = T(o, 3), u = s[0], l = s[1], f = s[2], c = i[u + 1], v = a[l + 1];
    return {
      vertical: z(l),
      horizontal: z(u),
      direction: f,
      pos: [c, v]
    };
  });
}
function Dl(t) {
  var r = [1 / 0, -1 / 0], e = [1 / 0, -1 / 0];
  return t.forEach(function(n) {
    var i = n.pos;
    r[0] = Math.min(r[0], i[0]), r[1] = Math.max(r[1], i[0]), e[0] = Math.min(e[0], i[1]), e[1] = Math.max(e[1], i[1]);
  }), [
    z(r[1] - r[0]),
    z(e[1] - e[0])
  ];
}
function as(t, r, e, n, i) {
  var a, o, s, u, l, f, c, v, p;
  if (t) {
    var d = i;
    if (!d) {
      var h = Yt(t), g = h("clipPath");
      d = g !== "none" ? g : h("clip");
    }
    if (!((!d || d === "none" || d === "auto") && (d = n, !d))) {
      var m = Vs(d), y = m.prefix, x = y === void 0 ? d : y, E = m.value, C = E === void 0 ? "" : E, b = x === "circle", S = " ";
      if (x === "polygon") {
        var M = Ir(C || "0% 0%, 100% 0%, 100% 100%, 0% 100%");
        S = ",";
        var P = M.map(function(Rt) {
          var At = T(Rt.split(" "), 2), It = At[0], St = At[1];
          return {
            vertical: 1,
            horizontal: 1,
            pos: [
              vt(It, r),
              vt(St, e)
            ]
          };
        }), D = zr(P.map(function(Rt) {
          return Rt.pos;
        }));
        return {
          type: x,
          clipText: d,
          poses: P,
          splitter: S,
          left: D.minX,
          right: D.maxX,
          top: D.minY,
          bottom: D.maxY
        };
      } else if (b || x === "ellipse") {
        var O = "", R = "", w = 0, I = 0, M = Er(C);
        if (b) {
          var k = "";
          a = T(M, 4), o = a[0], k = o === void 0 ? "50%" : o, s = a[2], O = s === void 0 ? "50%" : s, u = a[3], R = u === void 0 ? "50%" : u, w = vt(k, Math.sqrt((r * r + e * e) / 2)), I = w;
        } else {
          var F = "", L = "";
          l = T(M, 5), f = l[0], F = f === void 0 ? "50%" : f, c = l[1], L = c === void 0 ? "50%" : c, v = l[3], O = v === void 0 ? "50%" : v, p = l[4], R = p === void 0 ? "50%" : p, w = vt(F, r), I = vt(L, e);
        }
        var B = [
          vt(O, r),
          vt(R, e)
        ], P = N([
          {
            vertical: 1,
            horizontal: 1,
            pos: B,
            direction: "nesw"
          }
        ], T(Dm.slice(0, b ? 1 : 2).map(function(It) {
          return {
            vertical: z(It[1]),
            horizontal: It[0],
            direction: It[2],
            sub: !0,
            pos: [
              B[0] + It[0] * w,
              B[1] + It[1] * I
            ]
          };
        })), !1);
        return {
          type: x,
          clipText: d,
          radiusX: w,
          radiusY: I,
          left: B[0] - w,
          top: B[1] - I,
          right: B[0] + w,
          bottom: B[1] + I,
          poses: P,
          splitter: S
        };
      } else if (x === "inset") {
        var M = Er(C || "0 0 0 0"), $ = M.indexOf("round"), j = ($ > -1 ? M.slice(0, $) : M).length, G = M.slice(j + 1), q = T(M.slice(0, j), 4), U = q[0], H = q[1], X = H === void 0 ? U : H, Y = q[2], V = Y === void 0 ? U : Y, J = q[3], nt = J === void 0 ? X : J, rt = T([U, V].map(function(It) {
          return vt(It, e);
        }), 2), Z = rt[0], K = rt[1], ft = T([nt, X].map(function(It) {
          return vt(It, r);
        }), 2), at = ft[0], ot = ft[1], ut = r - ot, xt = e - K, dt = Tl(G, ut - at, xt - Z, at, Z), P = N(N([], T(Cn(Z, ut, xt, at)), !1), T(dt), !1);
        return {
          type: "inset",
          clipText: d,
          poses: P,
          top: Z,
          left: at,
          right: ut,
          bottom: xt,
          radius: G,
          splitter: S
        };
      } else if (x === "rect") {
        var M = Ir(C || "0px, ".concat(r, "px, ").concat(e, "px, 0px"));
        S = ",";
        var st = T(M.map(function(dr) {
          var hr = Le(dr).value;
          return hr;
        }), 4), ct = st[0], ot = st[1], K = st[2], at = st[3], P = Cn(ct, ot, K, at);
        return {
          type: "rect",
          clipText: d,
          poses: P,
          top: ct,
          right: ot,
          bottom: K,
          left: at,
          values: M,
          splitter: S
        };
      }
    }
  }
}
function Rm(t, r, e, n, i) {
  var a = t[r], o = a.direction, s = a.sub, u = t.map(function() {
    return [0, 0];
  }), l = o ? o.split("") : [];
  if (n && r < 8) {
    var f = l.filter(function(w) {
      return w === "w" || w === "e";
    }), c = l.filter(function(w) {
      return w === "n" || w === "s";
    }), v = f[0], p = c[0];
    u[r] = e;
    var d = T(Dl(t), 2), h = d[0], g = d[1], m = h && g ? h / g : 0;
    if (m && i) {
      var y = (r + 4) % 8, x = t[y].pos, E = [0, 0];
      o.indexOf("w") > -1 ? E[0] = -1 : o.indexOf("e") > -1 && (E[0] = 1), o.indexOf("n") > -1 ? E[1] = -1 : o.indexOf("s") > -1 && (E[1] = 1);
      var C = xl([h, g], e, m, E, !0), b = h + C[0], S = g + C[1], M = x[1], P = x[1], D = x[0], O = x[0];
      E[0] === -1 ? D = O - b : E[0] === 1 ? O = D + b : (D = D - b / 2, O = O + b / 2), E[1] === -1 ? M = P - S : (E[1] === 1 || (M = P - S / 2), P = M + S);
      var R = Cn(M, O, P, D);
      t.forEach(function(w, I) {
        u[I][0] = R[I].pos[0] - w.pos[0], u[I][1] = R[I].pos[1] - w.pos[1];
      });
    } else
      t.forEach(function(w, I) {
        var k = w.direction;
        k && (k.indexOf(v) > -1 && (u[I][0] = e[0]), k.indexOf(p) > -1 && (u[I][1] = e[1]));
      }), v && (u[1][0] = e[0] / 2, u[5][0] = e[0] / 2), p && (u[3][1] = e[1] / 2, u[7][1] = e[1] / 2);
  } else
    o && !s ? l.forEach(function(w) {
      var I = w === "n" || w === "s";
      t.forEach(function(k, F) {
        var L = k.direction, B = k.horizontal, $ = k.vertical;
        !L || L.indexOf(w) === -1 || (u[F] = [
          I || !B ? 0 : e[0],
          !I || !$ ? 0 : e[1]
        ]);
      });
    }) : u[r] = e;
  return u;
}
function Om(t, r) {
  var e = T(ku(t, r), 2), n = e[0], i = e[1], a = r.datas, o = a.clipPath, s = a.clipIndex, u = o, l = u.type, f = u.poses, c = u.splitter, v = f.map(function(y) {
    return y.pos;
  });
  if (l === "polygon")
    v.splice(s, 0, [n, i]);
  else if (l === "inset") {
    var p = Cm.indexOf(s), d = Mm.indexOf(s), h = f.length;
    if (Pm(f, v, 8, p, d, n, i, v[4][0], v[4][1], v[0][0], v[0][1]), h === f.length)
      return;
  } else
    return;
  var g = Ba(t, o, v), m = "".concat(l, "(").concat(g.join(c), ")");
  W(t, "onClip", it(t, r, _({ clipEventType: "added", clipType: l, poses: v, clipStyles: g, clipStyle: m, distX: 0, distY: 0 }, Lt({
    clipPath: m
  }, r))));
}
function Im(t, r) {
  var e = r.datas, n = e.clipPath, i = e.clipIndex, a = n, o = a.type, s = a.poses, u = a.splitter, l = s.map(function(p) {
    return p.pos;
  }), f = l.length;
  if (o === "polygon")
    s.splice(i, 1), l.splice(i, 1);
  else if (o === "inset") {
    if (i < 8 || (_m(s, l, i, 8, f), f === s.length))
      return;
  } else
    return;
  var c = Ba(t, n, l), v = "".concat(o, "(").concat(c.join(u), ")");
  W(t, "onClip", it(t, r, _({ clipEventType: "removed", clipType: o, poses: l, clipStyles: c, clipStyle: v, distX: 0, distY: 0 }, Lt({
    clipPath: v
  }, r))));
}
var km = {
  name: "clippable",
  props: [
    "clippable",
    "defaultClipPath",
    "customClipPath",
    "keepRatio",
    "clipRelative",
    "clipArea",
    "dragWithClip",
    "clipTargetBounds",
    "clipVerticalGuidelines",
    "clipHorizontalGuidelines",
    "clipSnapThreshold"
  ],
  events: [
    "clipStart",
    "clip",
    "clipEnd"
  ],
  css: [
    `.control.clip-control {
background: #6d6;
cursor: pointer;
}
.control.clip-control.clip-radius {
background: #d66;
}
.line.clip-line {
background: #6e6;
cursor: move;
z-index: 1;
}
.clip-area {
position: absolute;
top: 0;
left: 0;
}
.clip-ellipse {
position: absolute;
cursor: move;
border: 1px solid #6d6;
border: var(--zoompx) solid #6d6;
border-radius: 50%;
transform-origin: 0px 0px;
}`,
    `:host {
--bounds-color: #d66;
}`,
    `.guideline {
pointer-events: none;
z-index: 2;
}`,
    `.line.guideline.bounds {
background: #d66;
background: var(--bounds-color);
}`
  ],
  render: function(t, r) {
    var e = t.props, n = e.customClipPath, i = e.defaultClipPath, a = e.clipArea, o = e.zoom, s = e.groupable, u = t.getState(), l = u.target, f = u.width, c = u.height, v = u.allMatrix, p = u.is3d, d = u.left, h = u.top, g = u.pos1, m = u.pos2, y = u.pos3, x = u.pos4, E = u.clipPathState, C = u.snapBoundInfos, b = u.rotation;
    if (!l || s)
      return [];
    var S = as(l, f, c, i || "inset", E || n);
    if (!S)
      return [];
    var M = p ? 4 : 3, P = S.type, D = S.poses, O = D.map(function(ot) {
      var ut = bt(v, ot.pos, M);
      return [
        ut[0] - d,
        ut[1] - h
      ];
    }), R = [], w = [], I = P === "rect", k = P === "inset", F = P === "polygon";
    if (I || k || F) {
      var L = k ? O.slice(0, 8) : O;
      w = L.map(function(ot, ut) {
        var xt = ut === 0 ? L[L.length - 1] : L[ut - 1], dt = Et(xt, ot), st = ll(xt, ot);
        return r.createElement("div", { key: "clipLine".concat(ut), className: Q("line", "clip-line", "snap-control"), "data-clip-index": ut, style: {
          width: "".concat(st, "px"),
          transform: "translate(".concat(xt[0], "px, ").concat(xt[1], "px) rotate(").concat(dt, "rad) scaleY(").concat(o, ")")
        } });
      });
    }
    if (R = O.map(function(ot, ut) {
      return r.createElement("div", { key: "clipControl".concat(ut), className: Q("control", "clip-control", "snap-control"), "data-clip-index": ut, style: {
        transform: "translate(".concat(ot[0], "px, ").concat(ot[1], "px) rotate(").concat(b, "rad) scale(").concat(o, ")")
      } });
    }), k && R.push.apply(R, N([], T(O.slice(8).map(function(ot, ut) {
      return r.createElement("div", { key: "clipRadiusControl".concat(ut), className: Q("control", "clip-control", "clip-radius", "snap-control"), "data-clip-index": 8 + ut, style: {
        transform: "translate(".concat(ot[0], "px, ").concat(ot[1], "px) rotate(").concat(b, "rad) scale(").concat(o, ")")
      } });
    })), !1)), P === "circle" || P === "ellipse") {
      var B = S.left, $ = S.top, j = S.radiusX, G = S.radiusY, q = T(tt(bt(v, [B, $], M), bt(v, [0, 0], M)), 2), U = q[0], H = q[1], X = "none";
      if (!a) {
        for (var Y = Math.max(10, j / 5, G / 5), V = [], J = 0; J <= Y; ++J) {
          var nt = Math.PI * 2 / Y * J;
          V.push([
            j + (j - o) * Math.cos(nt),
            G + (G - o) * Math.sin(nt)
          ]);
        }
        V.push([j, -2]), V.push([-2, -2]), V.push([-2, G * 2 + 2]), V.push([j * 2 + 2, G * 2 + 2]), V.push([j * 2 + 2, -2]), V.push([j, -2]), X = "polygon(".concat(V.map(function(ot) {
          return "".concat(ot[0], "px ").concat(ot[1], "px");
        }).join(", "), ")");
      }
      R.push(r.createElement("div", { key: "clipEllipse", className: Q("clip-ellipse", "snap-control"), style: {
        width: "".concat(j * 2, "px"),
        height: "".concat(G * 2, "px"),
        clipPath: X,
        transform: "translate(".concat(-d + U, "px, ").concat(-h + H, "px) ").concat(Gn(v))
      } }));
    }
    if (a) {
      var rt = qt(N([g, m, y, x], T(O), !1)), Z = rt.width, K = rt.height, ft = rt.left, at = rt.top;
      if (F || I || k) {
        var V = k ? O.slice(0, 8) : O;
        R.push(r.createElement("div", { key: "clipArea", className: Q("clip-area", "snap-control"), style: {
          width: "".concat(Z, "px"),
          height: "".concat(K, "px"),
          transform: "translate(".concat(ft, "px, ").concat(at, "px)"),
          clipPath: "polygon(".concat(V.map(function(ut) {
            return "".concat(ut[0] - ft, "px ").concat(ut[1] - at, "px");
          }).join(", "), ")")
        } }));
      }
    }
    return C && ["vertical", "horizontal"].forEach(function(ot) {
      var ut = C[ot], xt = ot === "horizontal";
      ut.isSnap && w.push.apply(w, N([], T(ut.snap.posInfos.map(function(dt, st) {
        var ct = dt.pos, Rt = tt(bt(v, xt ? [0, ct] : [ct, 0], M), [d, h]), At = tt(bt(v, xt ? [f, ct] : [ct, c], M), [d, h]);
        return ke(r, "", Rt, At, o, "clip".concat(ot, "snap").concat(st), "guideline");
      })), !1)), ut.isBound && w.push.apply(w, N([], T(ut.bounds.map(function(dt, st) {
        var ct = dt.pos, Rt = tt(bt(v, xt ? [0, ct] : [ct, 0], M), [d, h]), At = tt(bt(v, xt ? [f, ct] : [ct, c], M), [d, h]);
        return ke(r, "", Rt, At, o, "clip".concat(ot, "bounds").concat(st), "guideline", "bounds", "bold");
      })), !1));
    }), N(N([], T(R), !1), T(w), !1);
  },
  dragControlCondition: function(t, r) {
    return r.inputEvent && (r.inputEvent.target.getAttribute("class") || "").indexOf("clip") > -1;
  },
  dragStart: function(t, r) {
    var e = t.props, n = e.dragWithClip, i = n === void 0 ? !0 : n;
    return i ? !1 : this.dragControlStart(t, r);
  },
  drag: function(t, r) {
    return this.dragControl(t, _(_({}, r), { isDragTarget: !0 }));
  },
  dragEnd: function(t, r) {
    return this.dragControlEnd(t, r);
  },
  dragControlStart: function(t, r) {
    var e = t.state, n = t.props, i = n.defaultClipPath, a = n.customClipPath, o = e.target, s = e.width, u = e.height, l = r.inputEvent ? r.inputEvent.target : null, f = l && l.getAttribute("class") || "", c = r.datas, v = as(o, s, u, i || "inset", a);
    if (!v)
      return !1;
    var p = v.clipText, d = v.type, h = v.poses, g = W(t, "onClipStart", it(t, r, {
      clipType: d,
      clipStyle: p,
      poses: h.map(function(m) {
        return m.pos;
      })
    }));
    return g === !1 ? (c.isClipStart = !1, !1) : (c.isControl = f && f.indexOf("clip-control") > -1, c.isLine = f.indexOf("clip-line") > -1, c.isArea = f.indexOf("clip-area") > -1 || f.indexOf("clip-ellipse") > -1, c.clipIndex = l ? parseInt(l.getAttribute("data-clip-index"), 10) : -1, c.clipPath = v, c.isClipStart = !0, e.clipPathState = p, Yr(t, r), !0);
  },
  dragControl: function(t, r) {
    var e, n, i, a = r.datas, o = r.originalDatas, s = r.isDragTarget;
    if (!a.isClipStart)
      return !1;
    var u = a, l = u.isControl, f = u.isLine, c = u.isArea, v = u.clipIndex, p = u.clipPath;
    if (!p)
      return !1;
    var d = Gr(t.props, "clippable"), h = d.keepRatio, g = 0, m = 0, y = o.draggable, x = sr(r);
    s && y ? (e = T(y.prevBeforeDist, 2), g = e[0], m = e[1]) : (n = T(x, 2), g = n[0], m = n[1]);
    var E = [g, m], C = t.state, b = C.width, S = C.height, M = !c && !l && !f, P = p.type, D = p.poses, O = p.splitter, R = D.map(function(ht) {
      return ht.pos;
    });
    M && (g = -g, m = -m);
    var w = !l || D[v].direction === "nesw", I = P === "inset" || P === "rect", k = D.map(function() {
      return [0, 0];
    });
    if (l && !w) {
      var F = D[v], L = F.horizontal, B = F.vertical, $ = [
        g * z(L),
        m * z(B)
      ];
      k = Rm(D, v, $, I, h);
    } else
      w && (k = R.map(function() {
        return [g, m];
      }));
    var j = R.map(function(ht, Bt) {
      return lt(ht, k[Bt]);
    }), G = N([], T(j), !1);
    C.snapBoundInfos = null;
    var q = p.type === "circle", U = p.type === "ellipse";
    if (q || U) {
      var H = qt(j), X = z(H.bottom - H.top), Y = z(U ? H.right - H.left : X), V = j[0][1] + X, J = j[0][0] - Y, nt = j[0][0] + Y;
      q && (G.push([nt, H.bottom]), k.push([1, 0])), G.push([H.left, V]), k.push([0, 1]), G.push([J, H.bottom]), k.push([1, 0]);
    }
    var rt = rl((d.clipHorizontalGuidelines || []).map(function(ht) {
      return vt("".concat(ht), S);
    }), (d.clipVerticalGuidelines || []).map(function(ht) {
      return vt("".concat(ht), b);
    }), b, S), Z = [], K = [];
    if (q || U)
      Z = [G[4][0], G[2][0]], K = [G[1][1], G[3][1]];
    else if (I) {
      var ft = [G[0], G[2], G[4], G[6]], at = [k[0], k[2], k[4], k[6]];
      Z = ft.filter(function(ht, Bt) {
        return at[Bt][0];
      }).map(function(ht) {
        return ht[0];
      }), K = ft.filter(function(ht, Bt) {
        return at[Bt][1];
      }).map(function(ht) {
        return ht[1];
      });
    } else
      Z = G.filter(function(ht, Bt) {
        return k[Bt][0];
      }).map(function(ht) {
        return ht[0];
      }), K = G.filter(function(ht, Bt) {
        return k[Bt][1];
      }).map(function(ht) {
        return ht[1];
      });
    var ot = [0, 0], ut = Ho(rt, d.clipTargetBounds && { left: 0, top: 0, right: b, bottom: S }, Z, K, 5), xt = ut.horizontal, dt = ut.vertical, st = xt.offset, ct = dt.offset;
    if (xt.isBound && (ot[1] += st), dt.isBound && (ot[0] += ct), (U || q) && k[0][0] === 0 && k[0][1] === 0) {
      var H = qt(j), Rt = H.bottom - H.top, At = U ? H.right - H.left : Rt, It = dt.isBound ? z(ct) : dt.snapIndex === 0 ? -ct : ct, St = xt.isBound ? z(st) : xt.snapIndex === 0 ? -st : st;
      At -= It, Rt -= St, q && (Rt = Vu(dt, xt) > 0 ? Rt : At, At = Rt);
      var Pt = G[0];
      G[1][1] = Pt[1] - Rt, G[2][0] = Pt[0] + At, G[3][1] = Pt[1] + Rt, G[4][0] = Pt[0] - At;
    } else if (I && h && l) {
      var dr = T(Dl(D), 2), hr = dr[0], Na = dr[1], $a = hr && Na ? hr / Na : 0, Gl = D[v], Ve = Gl.direction || "", Fn = G[1][1], V = G[5][1], J = G[7][0], nt = G[3][0];
      z(st) <= z(ct) ? st = Vt(st) * z(ct) / $a : ct = Vt(ct) * z(st) * $a, Ve.indexOf("w") > -1 ? J -= ct : Ve.indexOf("e") > -1 ? nt -= ct : (J += ct / 2, nt -= ct / 2), Ve.indexOf("n") > -1 ? Fn -= st : Ve.indexOf("s") > -1 ? V -= st : (Fn += st / 2, V -= st / 2);
      var Ll = Cn(Fn, nt, V, J);
      G.forEach(function(Ha, jl) {
        var jn;
        jn = T(Ll[jl].pos, 2), Ha[0] = jn[0], Ha[1] = jn[1];
      });
    } else
      G.forEach(function(ht, Bt) {
        var Ya = k[Bt];
        Ya[0] && (ht[0] -= ct), Ya[1] && (ht[1] -= st);
      });
    var ja = Ba(t, p, j), Nn = "".concat(P, "(").concat(ja.join(O), ")");
    if (C.clipPathState = Nn, q || U)
      Z = [G[4][0], G[2][0]], K = [G[1][1], G[3][1]];
    else if (I) {
      var ft = [G[0], G[2], G[4], G[6]];
      Z = ft.map(function(Bt) {
        return Bt[0];
      }), K = ft.map(function(Bt) {
        return Bt[1];
      });
    } else
      Z = G.map(function(ht) {
        return ht[0];
      }), K = G.map(function(ht) {
        return ht[1];
      });
    if (C.snapBoundInfos = Ho(rt, d.clipTargetBounds && { left: 0, top: 0, right: b, bottom: S }, Z, K, 1), y) {
      var Fl = C.is3d, Nl = C.allMatrix, $l = Fl ? 4 : 3, $n = ot;
      s && ($n = [
        E[0] + ot[0] - x[0],
        E[1] + ot[1] - x[1]
      ]), y.deltaOffset = pt(Nl, [$n[0], $n[1], 0, 0], $l);
    }
    return W(t, "onClip", it(t, r, _({ clipEventType: "changed", clipType: P, poses: j, clipStyle: Nn, clipStyles: ja, distX: g, distY: m }, Lt((i = {}, i[P === "rect" ? "clip" : "clipPath"] = Nn, i), r)))), !0;
  },
  dragControlEnd: function(t, r) {
    this.unset(t);
    var e = r.isDrag, n = r.datas, i = r.isDouble, a = n.isLine, o = n.isClipStart, s = n.isControl;
    return o ? (W(t, "onClipEnd", Ht(t, r, {})), i && (s ? Im(t, r) : a && Om(t, r)), i || e) : !1;
  },
  unset: function(t) {
    t.state.clipPathState = "", t.state.snapBoundInfos = null;
  }
}, Am = {
  name: "originDraggable",
  props: [
    "originDraggable",
    "originRelative"
  ],
  events: [
    "dragOriginStart",
    "dragOrigin",
    "dragOriginEnd"
  ],
  css: [
    `:host[data-able-origindraggable] .control.origin {
pointer-events: auto;
}`
  ],
  dragControlCondition: function(t, r) {
    return r.isRequest ? r.requestAble === "originDraggable" : Dt(r.inputEvent.target, Q("origin"));
  },
  dragControlStart: function(t, r) {
    var e = r.datas;
    Yr(t, r);
    var n = it(t, r, {
      dragStart: Gt.dragStart(t, new ie().dragStart([0, 0], r))
    }), i = W(t, "onDragOriginStart", n);
    return e.startOrigin = t.state.transformOrigin, e.startTargetOrigin = t.state.targetOrigin, e.prevOrigin = [0, 0], e.isDragOrigin = !0, i === !1 ? (e.isDragOrigin = !1, !1) : n;
  },
  dragControl: function(t, r) {
    var e = r.datas, n = r.isPinch, i = r.isRequest;
    if (!e.isDragOrigin)
      return !1;
    var a = T(sr(r), 2), o = a[0], s = a[1], u = t.state, l = u.width, f = u.height, c = u.offsetMatrix, v = u.targetMatrix, p = u.is3d, d = t.props.originRelative, h = d === void 0 ? !0 : d, g = p ? 4 : 3, m = [o, s];
    if (i) {
      var y = r.distOrigin;
      (y[0] || y[1]) && (m = y);
    }
    var x = lt(e.startOrigin, m), E = lt(e.startTargetOrigin, m), C = tt(m, e.prevOrigin), b = We(c, v, x, g), S = t.getRect(), M = qt(Hr(b, l, f, g)), P = [
      S.left - M.left,
      S.top - M.top
    ];
    e.prevOrigin = m;
    var D = [
      Zt(E[0], l, h),
      Zt(E[1], f, h)
    ].join(" "), O = Gt.drag(t, Xe(r, t.state, P, !!n, !1)), R = it(t, r, _(_({ width: l, height: f, origin: x, dist: m, delta: C, transformOrigin: D, drag: O }, Lt({
      transformOrigin: D,
      transform: O.transform
    }, r)), { afterTransform: O.transform }));
    return W(t, "onDragOrigin", R), R;
  },
  dragControlEnd: function(t, r) {
    var e = r.datas;
    return e.isDragOrigin ? (W(t, "onDragOriginEnd", Ht(t, r, {})), !0) : !1;
  },
  dragGroupControlCondition: function(t, r) {
    return this.dragControlCondition(t, r);
  },
  dragGroupControlStart: function(t, r) {
    var e = this.dragControlStart(t, r);
    return !!e;
  },
  dragGroupControl: function(t, r) {
    var e = this.dragControl(t, r);
    return e ? (t.transformOrigin = e.transformOrigin, !0) : !1;
  },
  /**
      * @method Moveable.OriginDraggable#request
      * @param {object} e - the OriginDraggable's request parameter
      * @param {number} [e.x] - x position
      * @param {number} [e.y] - y position
      * @param {number} [e.deltaX] - x number to move
      * @param {number} [e.deltaY] - y number to move
      * @param {array} [e.deltaOrigin] - left, top number to move transform-origin
      * @param {array} [e.origin] - transform-origin position
      * @param {number} [e.isInstant] - Whether to execute the request instantly
      * @return {Moveable.Requester} Moveable Requester
      * @example
  
      * // Instantly Request (requestStart - request - requestEnd)
      * // Use Relative Value
      * moveable.request("originDraggable", { deltaX: 10, deltaY: 10 }, true);
      * // Use Absolute Value
      * moveable.request("originDraggable", { x: 200, y: 100 }, true);
      * // Use Transform Value
      * moveable.request("originDraggable", { deltaOrigin: [10, 0] }, true);
      * moveable.request("originDraggable", { origin: [100, 0] }, true);
      * // requestStart
      * const requester = moveable.request("originDraggable");
      *
      * // request
      * // Use Relative Value
      * requester.request({ deltaX: 10, deltaY: 10 });
      * requester.request({ deltaX: 10, deltaY: 10 });
      * requester.request({ deltaX: 10, deltaY: 10 });
      * // Use Absolute Value
      * moveable.request("originDraggable", { x: 200, y: 100 });
      * moveable.request("originDraggable", { x: 220, y: 100 });
      * moveable.request("originDraggable", { x: 240, y: 100 });
      *
      * // requestEnd
      * requester.requestEnd();
      */
  request: function(t) {
    var r = {}, e = t.getRect(), n = 0, i = 0, a = e.transformOrigin, o = [0, 0];
    return {
      isControl: !0,
      requestStart: function() {
        return { datas: r };
      },
      request: function(s) {
        return "deltaOrigin" in s ? (o[0] += s.deltaOrigin[0], o[1] += s.deltaOrigin[1]) : "origin" in s ? (o[0] = s.origin[0] - a[0], o[1] = s.origin[1] - a[1]) : ("x" in s ? n = s.x - e.left : "deltaX" in s && (n += s.deltaX), "y" in s ? i = s.y - e.top : "deltaY" in s && (i += s.deltaY)), { datas: r, distX: n, distY: i, distOrigin: o };
      },
      requestEnd: function() {
        return { datas: r, isDrag: !0 };
      }
    };
  }
};
function Bm(t, r, e, n) {
  var i = t.filter(function(u) {
    var l = u.virtual, f = u.horizontal;
    return f && !l;
  }).length, a = t.filter(function(u) {
    var l = u.virtual, f = u.vertical;
    return f && !l;
  }).length, o = -1;
  if (r === 0 && (i === 0 ? o = 0 : i === 1 && (o = 1)), r === 2 && (i <= 2 ? o = 2 : i <= 3 && (o = 3)), r === 3 && (a === 0 ? o = 4 : a < 4 && (o = 7)), r === 1 && (a <= 1 ? o = 5 : a <= 2 && (o = 6)), !(o === -1 || !t[o].virtual)) {
    var s = t[o];
    zm(t, o), o < 4 ? s.pos[0] = e : s.pos[1] = n;
  }
}
function zm(t, r) {
  r < 4 ? t.slice(0, r + 1).forEach(function(e) {
    e.virtual = !1;
  }) : (t[0].virtual && (t[0].virtual = !1), t.slice(4, r + 1).forEach(function(e) {
    e.virtual = !1;
  }));
}
function Gm(t, r) {
  r < 4 ? t.slice(r, 4).forEach(function(e) {
    e.virtual = !0;
  }) : t.slice(r).forEach(function(e) {
    e.virtual = !0;
  });
}
function os(t, r, e, n, i) {
  n === void 0 && (n = [0, 0]);
  var a = [];
  return !t || t === "0px" ? a = [] : a = Er(t), Tl(a, r, e, 0, 0, n, i);
}
function ss(t, r, e, n, i) {
  var a = t.state, o = a.width, s = a.height, u = Aa(i, t.props.roundRelative, o, s), l = u.raws, f = u.styles, c = u.radiusPoses, v = Tm(c, l), p = v.horizontals, d = v.verticals, h = f.join(" ");
  a.borderRadiusState = h;
  var g = it(t, r, _({ horizontals: p, verticals: d, borderRadius: h, width: o, height: s, delta: n, dist: e }, Lt({
    borderRadius: h
  }, r)));
  return W(t, "onRound", g), g;
}
function us(t) {
  var r, e, n = t.getState().style, i = n.borderRadius || "";
  if (!i && t.props.groupable) {
    var a = t.moveables[0], o = t.getTargets()[0];
    o && ((a == null ? void 0 : a.props.target) === o ? (i = (e = (r = t.moveables[0]) === null || r === void 0 ? void 0 : r.state.style.borderRadius) !== null && e !== void 0 ? e : "", n.borderRadius = i) : (i = wa(o).borderRadius, n.borderRadius = i));
  }
  return i;
}
var Lm = {
  name: "roundable",
  props: [
    "roundable",
    "roundRelative",
    "minRoundControls",
    "maxRoundControls",
    "roundClickable",
    "roundPadding",
    "isDisplayShadowRoundControls"
  ],
  events: [
    "roundStart",
    "round",
    "roundEnd",
    "roundGroupStart",
    "roundGroup",
    "roundGroupEnd"
  ],
  css: [
    `.control.border-radius {
background: #d66;
cursor: pointer;
z-index: 3;
}`,
    `.control.border-radius.vertical {
background: #d6d;
z-index: 2;
}`,
    `.control.border-radius.virtual {
opacity: 0.5;
z-index: 1;
}`,
    `:host.round-line-clickable .line.direction {
cursor: pointer;
}`
  ],
  className: function(t) {
    var r = t.props.roundClickable;
    return r === !0 || r === "line" ? Q("round-line-clickable") : "";
  },
  requestStyle: function() {
    return ["borderRadius"];
  },
  requestChildStyle: function() {
    return ["borderRadius"];
  },
  render: function(t, r) {
    var e = t.getState(), n = e.target, i = e.width, a = e.height, o = e.allMatrix, s = e.is3d, u = e.left, l = e.top, f = e.borderRadiusState, c = t.props, v = c.minRoundControls, p = v === void 0 ? [0, 0] : v, d = c.maxRoundControls, h = d === void 0 ? [4, 4] : d, g = c.zoom, m = c.roundPadding, y = m === void 0 ? 0 : m, x = c.isDisplayShadowRoundControls, E = c.groupable;
    if (!n)
      return null;
    var C = f || us(t), b = s ? 4 : 3, S = os(C, i, a, p, !0);
    if (!S)
      return null;
    var M = 0, P = 0, D = E ? [0, 0] : [u, l];
    return S.map(function(O, R) {
      var w = O.horizontal, I = O.vertical, k = O.direction || "", F = N([], T(O.pos), !1);
      P += Math.abs(w), M += Math.abs(I), w && k.indexOf("n") > -1 && (F[1] -= y), I && k.indexOf("w") > -1 && (F[0] -= y), w && k.indexOf("s") > -1 && (F[1] += y), I && k.indexOf("e") > -1 && (F[0] += y);
      var L = tt(bt(o, F, b), D), B = x && x !== "horizontal", $ = O.vertical ? M <= h[1] && (B || !O.virtual) : P <= h[0] && (x || !O.virtual);
      return r.createElement("div", { key: "borderRadiusControl".concat(R), className: Q("control", "border-radius", O.vertical ? "vertical" : "", O.virtual ? "virtual" : ""), "data-radius-index": R, style: {
        display: $ ? "block" : "none",
        transform: "translate(".concat(L[0], "px, ").concat(L[1], "px) scale(").concat(g, ")")
      } });
    });
  },
  dragControlCondition: function(t, r) {
    if (!r.inputEvent || r.isRequest)
      return !1;
    var e = r.inputEvent.target.getAttribute("class") || "";
    return e.indexOf("border-radius") > -1 || e.indexOf("moveable-line") > -1 && e.indexOf("moveable-direction") > -1;
  },
  dragGroupControlCondition: function(t, r) {
    return this.dragControlCondition(t, r);
  },
  dragControlStart: function(t, r) {
    var e = r.inputEvent, n = r.datas, i = e.target, a = i.getAttribute("class") || "", o = a.indexOf("border-radius") > -1, s = a.indexOf("moveable-line") > -1 && a.indexOf("moveable-direction") > -1, u = o ? parseInt(i.getAttribute("data-radius-index"), 10) : -1, l = -1;
    if (s) {
      var f = i.getAttribute("data-line-key") || "";
      f && (l = parseInt(f.replace(/render-line-/g, ""), 10), isNaN(l) && (l = -1));
    }
    if (!o && !s)
      return !1;
    var c = it(t, r, {}), v = W(t, "onRoundStart", c);
    if (v === !1)
      return !1;
    n.lineIndex = l, n.controlIndex = u, n.isControl = o, n.isLine = s, Yr(t, r);
    var p = t.props, d = p.roundRelative, h = p.minRoundControls, g = h === void 0 ? [0, 0] : h, m = t.state, y = m.width, x = m.height;
    n.isRound = !0, n.prevDist = [0, 0];
    var E = us(t), C = os(E || "", y, x, g, !0) || [];
    return n.controlPoses = C, m.borderRadiusState = Aa(C, d, y, x).styles.join(" "), c;
  },
  dragControl: function(t, r) {
    var e = r.datas, n = e.controlPoses;
    if (!e.isRound || !e.isControl || !n.length)
      return !1;
    var i = e.controlIndex, a = T(sr(r), 2), o = a[0], s = a[1], u = [o, s], l = tt(u, e.prevDist), f = t.props.maxRoundControls, c = f === void 0 ? [4, 4] : f, v = t.state, p = v.width, d = v.height, h = n[i], g = h.vertical, m = h.horizontal, y = n.map(function(E) {
      var C = E.horizontal, b = E.vertical, S = [
        C * m * u[0],
        b * g * u[1]
      ];
      if (C) {
        if (c[0] === 1)
          return S;
        if (c[0] < 4 && C !== m)
          return S;
      } else {
        if (c[1] === 0)
          return S[1] = b * m * u[0] / p * d, S;
        if (g) {
          if (c[1] === 1)
            return S;
          if (c[1] < 4 && b !== g)
            return S;
        }
      }
      return [0, 0];
    });
    y[i] = u;
    var x = n.map(function(E, C) {
      return _(_({}, E), { pos: lt(E.pos, y[C]) });
    });
    return i < 4 ? x.slice(0, i + 1).forEach(function(E) {
      E.virtual = !1;
    }) : x.slice(4, i + 1).forEach(function(E) {
      E.virtual = !1;
    }), e.prevDist = [o, s], ss(t, r, u, l, x);
  },
  dragControlEnd: function(t, r) {
    var e = t.state;
    e.borderRadiusState = "";
    var n = r.datas, i = r.isDouble;
    if (!n.isRound)
      return !1;
    var a = n.isControl, o = n.controlIndex, s = n.isLine, u = n.lineIndex, l = n.controlPoses, f = l.filter(function(m) {
      var y = m.virtual;
      return y;
    }).length, c = t.props.roundClickable, v = c === void 0 ? !0 : c;
    if (i && v) {
      if (a && (v === !0 || v === "control"))
        Gm(l, o);
      else if (s && (v === !0 || v === "line")) {
        var p = T(ku(t, r), 2), d = p[0], h = p[1];
        Bm(l, u, d, h);
      }
      f !== l.filter(function(m) {
        var y = m.virtual;
        return y;
      }).length && ss(t, r, [0, 0], [0, 0], l);
    }
    var g = Ht(t, r, {});
    return W(t, "onRoundEnd", g), e.borderRadiusState = "", g;
  },
  dragGroupControlStart: function(t, r) {
    var e = this.dragControlStart(t, r);
    if (!e)
      return !1;
    var n = t.moveables, i = t.props.targets, a = Qt(t, "roundable", r), o = _({ targets: t.props.targets, events: a.map(function(s, u) {
      return _(_({}, s), { target: i[u], moveable: n[u], currentTarget: n[u] });
    }) }, e);
    return W(t, "onRoundGroupStart", o), e;
  },
  dragGroupControl: function(t, r) {
    var e = this.dragControl(t, r);
    if (!e)
      return !1;
    var n = t.moveables, i = t.props.targets, a = Qt(t, "roundable", r), o = _({ targets: t.props.targets, events: a.map(function(s, u) {
      return _(_(_({}, s), { target: i[u], moveable: n[u], currentTarget: n[u] }), Lt({
        borderRadius: e.borderRadius
      }, s));
    }) }, e);
    return W(t, "onRoundGroup", o), o;
  },
  dragGroupControlEnd: function(t, r) {
    var e = t.moveables, n = t.props.targets, i = Qt(t, "roundable", r);
    Ln(t, "onRound", function(s) {
      var u = _({ targets: t.props.targets, events: i.map(function(l, f) {
        return _(_(_({}, l), { target: n[f], moveable: e[f], currentTarget: e[f] }), Lt({
          borderRadius: s.borderRadius
        }, l));
      }) }, s);
      W(t, "onRoundGroup", u);
    });
    var a = this.dragControlEnd(t, r);
    if (!a)
      return !1;
    var o = _({ targets: t.props.targets, events: i.map(function(s, u) {
      var l;
      return _(_({}, s), { target: n[u], moveable: e[u], currentTarget: e[u], lastEvent: (l = s.datas) === null || l === void 0 ? void 0 : l.lastEvent });
    }) }, a);
    return W(t, "onRoundGroupEnd", o), o;
  },
  unset: function(t) {
    t.state.borderRadiusState = "";
  }
};
function Fm(t, r) {
  var e = r ? 4 : 3, n = yt(e), i = "matrix".concat(r ? "3d" : "", "(").concat(n.join(","), ")");
  return t === i || t === "matrix(1,0,0,1,0,0)";
}
var wl = {
  isPinch: !0,
  name: "beforeRenderable",
  props: [],
  events: [
    "beforeRenderStart",
    "beforeRender",
    "beforeRenderEnd",
    "beforeRenderGroupStart",
    "beforeRenderGroup",
    "beforeRenderGroupEnd"
  ],
  dragRelation: "weak",
  setTransform: function(t, r) {
    var e = t.state, n = e.is3d, i = e.targetMatrix, a = e.inlineTransform, o = n ? "matrix3d(".concat(i.join(","), ")") : "matrix(".concat(bu(i, !0), ")"), s = !a || a === "none" ? o : a;
    r.datas.startTransforms = Fm(s, n) ? [] : Er(s);
  },
  resetStyle: function(t) {
    var r = t.datas;
    r.nextStyle = {}, r.nextTransforms = t.datas.startTransforms, r.nextTransformAppendedIndexes = [];
  },
  fillDragStartParams: function(t, r) {
    return it(t, r, {
      setTransform: function(e) {
        r.datas.startTransforms = _t(e) ? e : Er(e);
      },
      isPinch: !!r.isPinch
    });
  },
  fillDragParams: function(t, r) {
    return it(t, r, {
      isPinch: !!r.isPinch
    });
  },
  dragStart: function(t, r) {
    this.setTransform(t, r), this.resetStyle(r), W(t, "onBeforeRenderStart", this.fillDragStartParams(t, r));
  },
  drag: function(t, r) {
    r.datas.startTransforms || this.setTransform(t, r), this.resetStyle(r), W(t, "onBeforeRender", it(t, r, {
      isPinch: !!r.isPinch
    }));
  },
  dragEnd: function(t, r) {
    r.datas.startTransforms || (this.setTransform(t, r), this.resetStyle(r)), W(t, "onBeforeRenderEnd", it(t, r, {
      isPinch: !!r.isPinch,
      isDrag: r.isDrag
    }));
  },
  dragGroupStart: function(t, r) {
    var e = this;
    this.dragStart(t, r);
    var n = Qt(t, "beforeRenderable", r), i = t.moveables, a = n.map(function(o, s) {
      var u = i[s];
      return e.setTransform(u, o), e.resetStyle(o), e.fillDragStartParams(u, o);
    });
    W(t, "onBeforeRenderGroupStart", it(t, r, {
      isPinch: !!r.isPinch,
      targets: t.props.targets,
      setTransform: function() {
      },
      events: a
    }));
  },
  dragGroup: function(t, r) {
    var e = this;
    this.drag(t, r);
    var n = Qt(t, "beforeRenderable", r), i = t.moveables, a = n.map(function(o, s) {
      var u = i[s];
      return e.resetStyle(o), e.fillDragParams(u, o);
    });
    W(t, "onBeforeRenderGroup", it(t, r, {
      isPinch: !!r.isPinch,
      targets: t.props.targets,
      events: a
    }));
  },
  dragGroupEnd: function(t, r) {
    this.dragEnd(t, r), W(t, "onBeforeRenderGroupEnd", it(t, r, {
      isPinch: !!r.isPinch,
      isDrag: r.isDrag,
      targets: t.props.targets
    }));
  },
  dragControlStart: function(t, r) {
    return this.dragStart(t, r);
  },
  dragControl: function(t, r) {
    return this.drag(t, r);
  },
  dragControlEnd: function(t, r) {
    return this.dragEnd(t, r);
  },
  dragGroupControlStart: function(t, r) {
    return this.dragGroupStart(t, r);
  },
  dragGroupControl: function(t, r) {
    return this.dragGroup(t, r);
  },
  dragGroupControlEnd: function(t, r) {
    return this.dragGroupEnd(t, r);
  }
}, Rl = {
  name: "renderable",
  props: [],
  events: [
    "renderStart",
    "render",
    "renderEnd",
    "renderGroupStart",
    "renderGroup",
    "renderGroupEnd"
  ],
  dragRelation: "weak",
  dragStart: function(t, r) {
    W(t, "onRenderStart", it(t, r, {
      isPinch: !!r.isPinch
    }));
  },
  drag: function(t, r) {
    W(t, "onRender", this.fillDragParams(t, r));
  },
  dragAfter: function(t, r) {
    return this.drag(t, r);
  },
  dragEnd: function(t, r) {
    W(t, "onRenderEnd", this.fillDragEndParams(t, r));
  },
  dragGroupStart: function(t, r) {
    W(t, "onRenderGroupStart", it(t, r, {
      isPinch: !!r.isPinch,
      targets: t.props.targets
    }));
  },
  dragGroup: function(t, r) {
    var e = this, n = Qt(t, "beforeRenderable", r), i = t.moveables, a = n.map(function(o, s) {
      var u = i[s];
      return e.fillDragParams(u, o);
    });
    W(t, "onRenderGroup", it(t, r, _(_({ isPinch: !!r.isPinch, targets: t.props.targets, transform: Qe(r), transformObject: {} }, Lt(tn(r))), { events: a })));
  },
  dragGroupEnd: function(t, r) {
    var e = this, n = Qt(t, "beforeRenderable", r), i = t.moveables, a = n.map(function(o, s) {
      var u = i[s];
      return e.fillDragEndParams(u, o);
    });
    W(t, "onRenderGroupEnd", it(t, r, _({ isPinch: !!r.isPinch, isDrag: r.isDrag, targets: t.props.targets, events: a, transformObject: {}, transform: Qe(r) }, Lt(tn(r)))));
  },
  dragControlStart: function(t, r) {
    return this.dragStart(t, r);
  },
  dragControl: function(t, r) {
    return this.drag(t, r);
  },
  dragControlAfter: function(t, r) {
    return this.dragAfter(t, r);
  },
  dragControlEnd: function(t, r) {
    return this.dragEnd(t, r);
  },
  dragGroupControlStart: function(t, r) {
    return this.dragGroupStart(t, r);
  },
  dragGroupControl: function(t, r) {
    return this.dragGroup(t, r);
  },
  dragGroupControlEnd: function(t, r) {
    return this.dragGroupEnd(t, r);
  },
  fillDragParams: function(t, r) {
    var e = {};
    return ne(gn(r) || []).forEach(function(n) {
      e[n.name] = n.functionValue;
    }), it(t, r, _({ isPinch: !!r.isPinch, transformObject: e, transform: Qe(r) }, Lt(tn(r))));
  },
  fillDragEndParams: function(t, r) {
    var e = {};
    return ne(gn(r) || []).forEach(function(n) {
      e[n.name] = n.functionValue;
    }), it(t, r, _({ isPinch: !!r.isPinch, isDrag: r.isDrag, transformObject: e, transform: Qe(r) }, Lt(tn(r))));
  }
};
function Te(t, r, e, n, i, a, o) {
  a.clientDistX = a.distX, a.clientDistY = a.distY;
  var s = i === "Start", u = i === "End", l = i === "After", f = t.state.target, c = a.isRequest, v = n.indexOf("Control") > -1;
  if (!f || s && v && !c && t.areaElement === a.inputEvent.target)
    return !1;
  var p = N([], T(r), !1);
  if (c) {
    var d = a.requestAble;
    p.some(function(R) {
      return R.name === d;
    }) || p.push.apply(p, N([], T(t.props.ables.filter(function(R) {
      return R.name === d;
    })), !1));
  }
  if (!p.length || p.every(function(R) {
    return R.dragRelation;
  }))
    return !1;
  var h = a.inputEvent, g;
  u && h && (g = document.elementFromPoint(a.clientX, a.clientY) || h.target);
  var m = !1, y = function() {
    var R;
    m = !0, (R = a.stop) === null || R === void 0 || R.call(a);
  }, x = s && (!t.targetGesto || !t.controlGesto || !t.targetGesto.isFlag() || !t.controlGesto.isFlag());
  x && t.updateRect(i, !0, !1);
  var E = a.datas, C = v ? "controlGesto" : "targetGesto", b = t[C], S = function(R, w, I) {
    if (!(w in R) || b !== t[C])
      return !1;
    var k = R.name, F = E[k] || (E[k] = {});
    if (s && (F.isEventStart = !I || !R[I] || R[I](t, a)), !F.isEventStart)
      return !1;
    var L = R[w](t, _(_({}, a), { stop: y, datas: F, originalDatas: E, inputTarget: g }));
    return t._emitter.off(), s && L === !1 && (F.isEventStart = !1), L;
  };
  x && p.forEach(function(R) {
    R.unset && R.unset(t);
  }), S(wl, "drag".concat(n).concat(i));
  var M = 0, P = 0;
  e.forEach(function(R) {
    if (m)
      return !1;
    var w = "".concat(R).concat(n).concat(i), I = "".concat(R).concat(n, "Condition");
    i === "" && !c && yl(t.state, a);
    var k = p.filter(function(B) {
      return B[w];
    });
    k = k.filter(function(B, $) {
      return B.name && k.indexOf(B) === $;
    });
    var F = k.filter(function(B) {
      return S(B, w, I);
    }), L = F.length;
    m && ++M, L && ++P, !m && s && k.length && !L && (M += k.filter(function(B) {
      var $ = B.name, j = E[$];
      return j.isEventStart ? B.dragRelation !== "strong" : !1;
    }).length ? 1 : 0);
  }), (!l || P) && S(Rl, "drag".concat(n).concat(i));
  var D = b !== t[C] || M === e.length;
  if ((u || m || D) && (t.state.gestos = {}, t.moveables && t.moveables.forEach(function(R) {
    R.state.gestos = {};
  }), p.forEach(function(R) {
    R.unset && R.unset(t);
  })), s && !D && !c && P && t.props.preventDefault && (a == null || a.preventDefault()), t.isUnmounted || D)
    return !1;
  if (!s && P && !o || u) {
    var O = t.props.flushSync || ol;
    O(function() {
      t.updateRect(u ? i : "", !0, !1), t.forceUpdate();
    });
  }
  return !s && !u && !l && P && !o && Te(t, r, e, n, i + "After", a), !0;
}
function Fi(t) {
  return function(r) {
    var e, n = r.inputEvent.target, i = t.areaElement, a = t._dragTarget;
    return !a || !((e = t.controlGesto) === null || e === void 0) && e.isFlag() ? !1 : n === a || a.contains(n) || n === i || !t.isMoveableElement(n) && !t.controlBox.contains(n) || Dt(n, "moveable-area") || Dt(n, "moveable-padding") || Dt(n, "moveable-edgeDraggable");
  };
}
function Ol(t, r, e) {
  var n = t.controlBox, i = [], a = t.props, o = a.dragArea, s = t.state.target, u = a.dragTarget;
  return i.push(n), (!o || u) && i.push(r), !o && u && s && r !== s && a.dragTargetSelf && i.push(s), za(t, i, "targetAbles", e, {
    dragStart: Fi(t),
    pinchStart: Fi(t)
  });
}
function za(t, r, e, n, i) {
  i === void 0 && (i = {});
  var a = e === "targetAbles", o = t.props, s = o.pinchOutside, u = o.pinchThreshold, l = o.preventClickEventOnDrag, f = o.preventClickDefault, c = o.checkInput, v = o.dragFocusedInput, p = o.preventDefault, d = p === void 0 ? !0 : p, h = o.dragContainer, g = ir(h, !0), m = {
    preventDefault: d,
    preventRightClick: !0,
    preventWheelClick: !0,
    container: g || br(t.getControlBoxElement()),
    pinchThreshold: u,
    pinchOutside: s,
    preventClickEventOnDrag: a ? l : !1,
    preventClickEventOnDragStart: a ? f : !1,
    preventClickEventByCondition: a ? null : function(E) {
      return t.controlBox.contains(E.target);
    },
    checkInput: a ? c : !1,
    dragFocusedInput: v
  }, y = new pg(r, m), x = n === "Control";
  return ["drag", "pinch"].forEach(function(E) {
    ["Start", "", "End"].forEach(function(C) {
      y.on("".concat(E).concat(C), function(b) {
        var S, M = b.eventType, P = E === "drag" && b.isPinch;
        if (i[M] && !i[M](b)) {
          b.stop();
          return;
        }
        if (!P) {
          var D = E === "drag" ? [E] : ["drag", E], O = N([], T(t[e]), !1), R = Te(t, O, D, n, C, b);
          R ? (t.props.stopPropagation || C === "Start" && x) && ((S = b == null ? void 0 : b.inputEvent) === null || S === void 0 || S.stopPropagation()) : b.stop();
        }
      });
    });
  }), y;
}
var Nm = /* @__PURE__ */ function() {
  function t(r, e, n) {
    var i = this;
    this.target = r, this.moveable = e, this.eventName = n, this.ables = [], this._onEvent = function(a) {
      var o = i.eventName, s = i.moveable;
      s.state.disableNativeEvent || i.ables.forEach(function(u) {
        u[o](s, {
          inputEvent: a
        });
      });
    }, r.addEventListener(n.toLowerCase(), this._onEvent);
  }
  return t.prototype.setAbles = function(r) {
    this.ables = r;
  }, t.prototype.destroy = function() {
    this.target.removeEventListener(this.eventName.toLowerCase(), this._onEvent), this.target = null, this.moveable = null;
  }, t;
}();
function $m(t, r, e, n) {
  var i;
  e === void 0 && (e = r);
  var a = Fu(t, r), o = a.matrixes, s = a.is3d, u = a.targetMatrix, l = a.transformOrigin, f = a.targetOrigin, c = a.offsetContainer, v = a.hasFixed, p = a.zoom, d = e0(c, e), h = d.matrixes, g = d.is3d, m = d.offsetContainer, y = d.zoom, x = n || g || s, E = x ? 4 : 3, C = t.tagName.toLowerCase() !== "svg" && "ownerSVGElement" in t, b = u, S = yt(E), M = yt(E), P = yt(E), D = yt(E), O = o.length, R = h.map(function($) {
    return _(_({}, $), { matrix: $.matrix ? N([], T($.matrix), !1) : void 0 });
  }).reverse();
  o.reverse(), !s && x && (b = rr(b, 3, 4), Bi(o)), !g && x && Bi(R), R.forEach(function($) {
    M = pt(M, $.matrix, E);
  });
  var w = e || _r(t), I = ((i = R[0]) === null || i === void 0 ? void 0 : i.target) || Ae(w, w, !0).offsetParent, k = R.slice(1).reduce(function($, j) {
    return pt($, j.matrix, E);
  }, yt(E));
  o.forEach(function($, j) {
    if (O - 2 === j && (P = S.slice()), O - 1 === j && (D = S.slice()), !$.matrix) {
      var G = o[j + 1], q = im($, G, I, E, pt(k, S, E));
      $.matrix = Br(q, E);
    }
    S = pt(S, $.matrix, E);
  });
  var F = !C && s;
  b || (b = yt(F ? 4 : 3));
  var L = Gn(C && b.length === 16 ? rr(b, 4, 3) : b, F), B = M;
  return M = yu(M, E, E), {
    hasZoom: p !== 1 || y !== 1,
    hasFixed: v,
    matrixes: o,
    rootMatrix: M,
    originalRootMatrix: B,
    beforeMatrix: P,
    offsetMatrix: D,
    allMatrix: S,
    targetMatrix: b,
    targetTransform: L,
    inlineTransform: t.style.transform,
    transformOrigin: l,
    targetOrigin: f,
    is3d: x,
    offsetContainer: c,
    offsetRootContainer: m
  };
}
function jm(t, r, e, n) {
  e === void 0 && (e = r);
  var i = 0, a = 0, o = 0, s = {}, u = fl(t);
  if (t && (i = u.offsetWidth, a = u.offsetHeight), t) {
    var l = $m(t, r, e, n), f = te(l.allMatrix, l.transformOrigin, i, a);
    s = _(_({}, l), f);
    var c = te(l.allMatrix, [50, 50], 100, 100);
    o = cl([c.pos1, c.pos2], c.direction);
  }
  var v = n ? 4 : 3;
  return _(_(_({ hasZoom: !1, width: i, height: a, rotation: o }, u), { originalRootMatrix: yt(v), rootMatrix: yt(v), beforeMatrix: yt(v), offsetMatrix: yt(v), allMatrix: yt(v), targetMatrix: yt(v), targetTransform: "", inlineTransform: "", transformOrigin: [0, 0], targetOrigin: [0, 0], is3d: !!n, left: 0, top: 0, right: 0, bottom: 0, origin: [0, 0], pos1: [0, 0], pos2: [0, 0], pos3: [0, 0], pos4: [0, 0], direction: 1, hasFixed: !1, offsetContainer: null, offsetRootContainer: null, matrixes: [] }), s);
}
function Ni(t, r, e, n, i, a) {
  a === void 0 && (a = []);
  var o = 1, s = [0, 0], u = en(), l = en(), f = en(), c = en(), v = [0, 0], p = {}, d = jm(r, e, i, !0);
  if (r) {
    var h = Yt(r);
    a.forEach(function(R) {
      p[R] = h(R);
    });
    var g = d.is3d ? 4 : 3, m = te(d.offsetMatrix, lt(d.transformOrigin, xu(d.targetMatrix, g)), d.width, d.height);
    o = m.direction, s = lt(m.origin, [m.left - d.left, m.top - d.top]), c = Pe(d.offsetRootContainer);
    var y = Ae(n, n, !0).offsetParent || d.offsetRootContainer;
    if (d.hasZoom) {
      var x = te(pt(d.originalRootMatrix, d.allMatrix), d.transformOrigin, d.width, d.height), E = te(d.originalRootMatrix, bn(Yt(y)("transformOrigin")).map(function(R) {
        return parseFloat(R);
      }), y.offsetWidth, y.offsetHeight);
      if (u = ii(x, c), f = ii(E, c, y, !0), t) {
        var C = x.left, b = x.top;
        l = ii({
          left: C,
          top: b,
          bottom: b,
          right: b
        }, c);
      }
    } else {
      u = Pe(r), f = r0(y), t && (l = Pe(t));
      var S = f.left, M = f.top, P = f.clientLeft, D = f.clientTop, O = [
        u.left - S,
        u.top - M
      ];
      v = tt(se(d.rootMatrix, O, 4), [P + d.left, D + d.top]);
    }
  }
  return _({ targetClientRect: u, containerClientRect: f, moveableClientRect: l, rootContainerClientRect: c, beforeDirection: o, beforeOrigin: s, originalBeforeOrigin: s, target: r, style: p, offsetDelta: v }, d);
}
function ls(t) {
  var r = t.pos1, e = t.pos2, n = t.pos3, i = t.pos4;
  if (!r || !e || !n || !i)
    return null;
  var a = zr([r, e, n, i]), o = [a.minX, a.minY], s = tt(t.origin, o);
  return r = tt(r, o), e = tt(e, o), n = tt(n, o), i = tt(i, o), _(_({}, t), {
    left: t.left,
    top: t.top,
    posDelta: o,
    pos1: r,
    pos2: e,
    pos3: n,
    pos4: i,
    origin: s,
    beforeOrigin: s,
    // originalBeforeOrigin: origin,
    isPersisted: !0
  });
}
var ue = /* @__PURE__ */ function(t) {
  He(r, t);
  function r() {
    var e = t !== null && t.apply(this, arguments) || this;
    return e.state = _({ container: null, gestos: {}, renderPoses: [[0, 0], [0, 0], [0, 0], [0, 0]], disableNativeEvent: !1, posDelta: [0, 0] }, Ni(null)), e.renderState = {}, e.enabledAbles = [], e.targetAbles = [], e.controlAbles = [], e.rotation = 0, e.scale = [1, 1], e.isMoveableMounted = !1, e.isUnmounted = !1, e.events = {
      mouseEnter: null,
      mouseLeave: null
    }, e._emitter = new wn(), e._prevOriginalDragTarget = null, e._originalDragTarget = null, e._prevDragTarget = null, e._dragTarget = null, e._prevPropTarget = null, e._propTarget = null, e._prevDragArea = !1, e._isPropTargetChanged = !1, e._hasFirstTarget = !1, e._reiszeObserver = null, e._observerId = 0, e._mutationObserver = null, e._rootContainer = null, e._viewContainer = null, e._viewClassNames = [], e._store = {}, e.checkUpdateRect = function() {
      if (!e.isDragging()) {
        var n = e.props.parentMoveable;
        if (n) {
          n.checkUpdateRect();
          return;
        }
        th(e._observerId), e._observerId = qs(function() {
          e.isDragging() || e.updateRect();
        });
      }
    }, e._onPreventClick = function(n) {
      n.stopPropagation(), n.preventDefault();
    }, e;
  }
  return r.prototype.render = function() {
    var e = this.props, n = this.getState(), i = e.parentPosition, a = e.className, o = e.target, s = e.zoom, u = e.cspNonce, l = e.translateZ, f = e.cssStyled, c = e.groupable, v = e.linePadding, p = e.controlPadding;
    this._checkUpdateRootContainer(), this.checkUpdate(), this.updateRenderPoses();
    var d = T(i || [0, 0], 2), h = d[0], g = d[1], m = n.left, y = n.top, x = n.target, E = n.direction, C = n.hasFixed, b = n.offsetDelta, S = e.targets, M = this.isDragging(), P = {};
    this.getEnabledAbles().forEach(function(k) {
      P["data-able-".concat(k.name.toLowerCase())] = !0;
    });
    var D = this._getAbleClassName(), O = S && S.length && (x || c) || o || !this._hasFirstTarget && this.state.isPersisted, R = this.controlBox || this.props.firstRenderState || this.props.persistData, w = [m - h, y - g];
    !c && e.useAccuratePosition && (w[0] += b[0], w[1] += b[1]);
    var I = {
      position: C ? "fixed" : "absolute",
      display: O ? "block" : "none",
      visibility: R ? "visible" : "hidden",
      transform: "translate3d(".concat(w[0], "px, ").concat(w[1], "px, ").concat(l, ")"),
      "--zoom": s,
      "--zoompx": "".concat(s, "px")
    };
    return v && (I["--moveable-line-padding"] = v), p && (I["--moveable-control-padding"] = p), Jt(
      f,
      _({ cspNonce: u, ref: ur(this, "controlBox"), className: "".concat(Q("control-box", E === -1 ? "reverse" : "", M ? "dragging" : ""), " ").concat(D, " ").concat(a) }, P, { onClick: this._onPreventClick, style: I }),
      this.renderAbles(),
      this._renderLines()
    );
  }, r.prototype.componentDidMount = function() {
    this.isMoveableMounted = !0, this.isUnmounted = !1;
    var e = this.props, n = e.parentMoveable, i = e.container;
    this._checkUpdateRootContainer(), this._checkUpdateViewContainer(), this._updateTargets(), this._updateNativeEvents(), this._updateEvents(), this.updateCheckInput(), this._updateObserver(this.props), !i && !n && !this.state.isPersisted && (this.updateRect("", !1, !1), this.forceUpdate());
  }, r.prototype.componentDidUpdate = function(e) {
    this._checkUpdateRootContainer(), this._checkUpdateViewContainer(), this._updateNativeEvents(), this._updateTargets(), this._updateEvents(), this.updateCheckInput(), this._updateObserver(e);
  }, r.prototype.componentWillUnmount = function() {
    var e, n;
    this.isMoveableMounted = !1, this.isUnmounted = !0, this._emitter.off(), (e = this._reiszeObserver) === null || e === void 0 || e.disconnect(), (n = this._mutationObserver) === null || n === void 0 || n.disconnect();
    var i = this._viewContainer;
    i && this._changeAbleViewClassNames([]), Kr(this, !1), Kr(this, !0);
    var a = this.events;
    for (var o in a) {
      var s = a[o];
      s && s.destroy();
    }
  }, r.prototype.getTargets = function() {
    var e = this.props.target;
    return e ? [e] : [];
  }, r.prototype.getAble = function(e) {
    var n = this.props.ables || [];
    return jt(n, function(i) {
      return i.name === e;
    });
  }, r.prototype.getContainer = function() {
    var e = this.props, n = e.parentMoveable, i = e.wrapperMoveable, a = e.container;
    return a || i && i.getContainer() || n && n.getContainer() || this.controlBox.parentElement;
  }, r.prototype.getControlBoxElement = function() {
    return this.controlBox;
  }, r.prototype.getDragElement = function() {
    return this._dragTarget;
  }, r.prototype.isMoveableElement = function(e) {
    var n;
    return e && (((n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "class")) || "").indexOf(ma) > -1;
  }, r.prototype.dragStart = function(e) {
    var n = this.targetGesto, i = this.controlGesto;
    return n && Fi(this)({ inputEvent: e }) ? n.isFlag() || n.triggerDragStart(e) : i && this.isMoveableElement(e.target) && (i.isFlag() || i.triggerDragStart(e)), this;
  }, r.prototype.hitTest = function(e) {
    var n = this.state, i = n.target, a = n.pos1, o = n.pos2, s = n.pos3, u = n.pos4, l = n.targetClientRect;
    if (!i)
      return 0;
    var f;
    if (ce(e)) {
      var c = e.getBoundingClientRect();
      f = {
        left: c.left,
        top: c.top,
        width: c.width,
        height: c.height
      };
    } else
      f = _({ width: 0, height: 0 }, e);
    var v = f.left, p = f.top, d = f.width, h = f.height, g = ko([a, o, u, s], l), m = sg(g, [
      [v, p],
      [v + d, p],
      [v + d, p + h],
      [v, p + h]
    ]), y = Cu(g);
    return !m || !y ? 0 : Math.min(100, m / y * 100);
  }, r.prototype.isInside = function(e, n) {
    var i = this.state, a = i.target, o = i.pos1, s = i.pos2, u = i.pos3, l = i.pos4, f = i.targetClientRect;
    return a ? Si([e, n], ko([o, s, l, u], f)) : !1;
  }, r.prototype.updateRect = function(e, n, i) {
    i === void 0 && (i = !0);
    var a = this.props, o = !a.parentPosition && !a.wrapperMoveable;
    o && ae(!0);
    var s = a.parentMoveable, u = this.state, l = u.target || a.target, f = this.getContainer(), c = s ? s._rootContainer : this._rootContainer, v = Ni(this.controlBox, l, f, f, c || f, this._getRequestStyles());
    if (!l && this._hasFirstTarget && a.persistData) {
      var p = ls(a.persistData);
      for (var d in p)
        v[d] = p[d];
    }
    o && ae(), this.updateState(v, s ? !1 : i);
  }, r.prototype.isDragging = function(e) {
    var n, i, a = this.targetGesto, o = this.controlGesto;
    if (a != null && a.isFlag()) {
      if (!e)
        return !0;
      var s = a.getEventData();
      return !!(!((n = s[e]) === null || n === void 0) && n.isEventStart);
    }
    if (o != null && o.isFlag()) {
      if (!e)
        return !0;
      var s = o.getEventData();
      return !!(!((i = s[e]) === null || i === void 0) && i.isEventStart);
    }
    return !1;
  }, r.prototype.updateTarget = function(e) {
    this.updateRect(e, !0);
  }, r.prototype.getRect = function() {
    var e = this.state, n = Kt(this.state), i = T(n, 4), a = i[0], o = i[1], s = i[2], u = i[3], l = qt(n), f = e.width, c = e.height, v = l.width, p = l.height, d = l.left, h = l.top, g = [e.left, e.top], m = lt(g, e.origin), y = lt(g, e.beforeOrigin), x = e.transformOrigin;
    return {
      width: v,
      height: p,
      left: d,
      top: h,
      pos1: a,
      pos2: o,
      pos3: s,
      pos4: u,
      offsetWidth: f,
      offsetHeight: c,
      beforeOrigin: y,
      origin: m,
      transformOrigin: x,
      rotation: this.getRotation()
    };
  }, r.prototype.getManager = function() {
    return this;
  }, r.prototype.stopDrag = function(e) {
    if (!e || e === "target") {
      var n = this.targetGesto;
      (n == null ? void 0 : n.isIdle()) === !1 && zi(this, !1), n == null || n.stop();
    }
    if (!e || e === "control") {
      var n = this.controlGesto;
      (n == null ? void 0 : n.isIdle()) === !1 && zi(this, !0), n == null || n.stop();
    }
  }, r.prototype.getRotation = function() {
    var e = this.state, n = e.pos1, i = e.pos2, a = e.direction;
    return cm(n, i, a);
  }, r.prototype.request = function(e, n, i) {
    n === void 0 && (n = {});
    var a = this, o = a.props, s = o.parentMoveable || o.wrapperMoveable || a, u = s.props.ables, l = o.groupable, f = jt(u, function(m) {
      return m.name === e;
    });
    if (this.isDragging() || !f || !f.request)
      return {
        request: function() {
          return this;
        },
        requestEnd: function() {
          return this;
        }
      };
    var c = f.request(a), v = i || n.isInstant, p = c.isControl ? "controlAbles" : "targetAbles", d = "".concat(l ? "Group" : "").concat(c.isControl ? "Control" : ""), h = N([], T(s[p]), !1), g = {
      request: function(m) {
        return Te(a, h, ["drag"], d, "", _(_({}, c.request(m)), { requestAble: e, isRequest: !0 }), v), g;
      },
      requestEnd: function() {
        return Te(a, h, ["drag"], d, "End", _(_({}, c.requestEnd()), { requestAble: e, isRequest: !0 }), v), g;
      }
    };
    return Te(a, h, ["drag"], d, "Start", _(_({}, c.requestStart(n)), { requestAble: e, isRequest: !0 }), v), v ? g.request(n).requestEnd() : g;
  }, r.prototype.getMoveables = function() {
    return [this];
  }, r.prototype.destroy = function() {
    this.componentWillUnmount();
  }, r.prototype.updateRenderPoses = function() {
    var e = this.getState(), n = this.props, i = n.padding, a = e.originalBeforeOrigin, o = e.transformOrigin, s = e.allMatrix, u = e.is3d, l = e.pos1, f = e.pos2, c = e.pos3, v = e.pos4, p = e.left, d = e.top, h = e.isPersisted;
    if (!i) {
      e.renderPoses = [
        l,
        f,
        c,
        v
      ];
      return;
    }
    var g = Sl(i), m = g.left, y = g.top, x = g.bottom, E = g.right, C = u ? 4 : 3, b = [];
    h ? b = o : this.controlBox && n.groupable ? b = a : b = lt(a, [p, d]);
    var S = dn(C, Br(b.map(function(M) {
      return -M;
    }), C), s, Br(o, C));
    e.renderPoses = [
      an(S, l, [-m, -y], C),
      an(S, f, [E, -y], C),
      an(S, c, [-m, x], C),
      an(S, v, [E, x], C)
    ];
  }, r.prototype.checkUpdate = function() {
    this._isPropTargetChanged = !1;
    var e = this.props, n = e.target, i = e.container, a = e.parentMoveable, o = this.state, s = o.target, u = o.container;
    if (!(!s && !n)) {
      this.updateAbles();
      var l = !Gi(s, n), f = l || !Gi(u, i);
      if (f) {
        var c = i || this.controlBox;
        c && this.unsetAbles(), this.updateState({ target: n, container: i }), !a && c && this.updateRect("End", !1, !1), this._isPropTargetChanged = l;
      }
    }
  }, r.prototype.waitToChangeTarget = function() {
    return new Promise(function() {
    });
  }, r.prototype.triggerEvent = function(e, n) {
    var i = this.props;
    if (this._emitter.trigger(e, n), i.parentMoveable && n.isRequest && !n.isRequestChild)
      return i.parentMoveable.triggerEvent(e, n, !0);
    var a = i[e];
    return a && a(n);
  }, r.prototype.useCSS = function(e, n) {
    var i = this.props.customStyledMap, a = e + n;
    return i[a] || (i[a] = Pu(e, n)), i[a];
  }, r.prototype.getState = function() {
    var e, n = this.props;
    (n.target || !((e = n.targets) === null || e === void 0) && e.length) && (this._hasFirstTarget = !0);
    var i = this.controlBox, a = n.persistData, o = n.firstRenderState;
    if (o && !i)
      return o;
    if (!this._hasFirstTarget && a) {
      var s = ls(a);
      if (s)
        return this.updateState(s, !1), this.state;
    }
    return this.state.isPersisted = !1, this.state;
  }, r.prototype.updateSelectors = function() {
  }, r.prototype.unsetAbles = function() {
    var e = this;
    this.targetAbles.forEach(function(n) {
      n.unset && n.unset(e);
    });
  }, r.prototype.updateAbles = function(e, n) {
    e === void 0 && (e = this.props.ables), n === void 0 && (n = "");
    var i = this.props, a = i.triggerAblesSimultaneously, o = this.getEnabledAbles(e), s = "drag".concat(n, "Start"), u = "pinch".concat(n, "Start"), l = "drag".concat(n, "ControlStart"), f = nn(o, [s, u], a), c = nn(o, [l], a);
    this.enabledAbles = o, this.targetAbles = f, this.controlAbles = c;
  }, r.prototype.updateState = function(e, n) {
    if (n) {
      if (this.isUnmounted)
        return;
      this.setState(e);
    } else {
      var i = this.state;
      for (var a in e)
        i[a] = e[a];
    }
  }, r.prototype.getEnabledAbles = function(e) {
    e === void 0 && (e = this.props.ables);
    var n = this.props;
    return e.filter(function(i) {
      return i && (i.always && n[i.name] !== !1 || n[i.name]);
    });
  }, r.prototype.renderAbles = function() {
    var e = this, n = this.props, i = n.triggerAblesSimultaneously, a = {
      createElement: Jt
    };
    return this.renderState = {}, um(ml(nn(this.getEnabledAbles(), ["render"], i).map(function(o) {
      var s = o.render;
      return s(e, a) || [];
    })).filter(function(o) {
      return o;
    }), function(o) {
      var s = o.key;
      return s;
    }).map(function(o) {
      return o[0];
    });
  }, r.prototype.updateCheckInput = function() {
    this.targetGesto && (this.targetGesto.options.checkInput = this.props.checkInput);
  }, r.prototype._getRequestStyles = function() {
    var e = this.getEnabledAbles().reduce(function(n, i) {
      var a, o, s = (o = (a = i.requestStyle) === null || a === void 0 ? void 0 : a.call(i)) !== null && o !== void 0 ? o : [];
      return N(N([], T(n), !1), T(s), !1);
    }, N([], T(this.props.requestStyles || []), !1));
    return e;
  }, r.prototype._updateObserver = function(e) {
    this._updateResizeObserver(e), this._updateMutationObserver(e);
  }, r.prototype._updateEvents = function() {
    var e = this.controlBox, n = this.targetAbles.length, i = this.controlAbles.length, a = this._dragTarget, o = !n && this.targetGesto || this._isTargetChanged(!0);
    o && (Kr(this, !1), this.updateState({ gestos: {} })), i || Kr(this, !0), a && n && !this.targetGesto && (this.targetGesto = Ol(this, a, "")), !this.controlGesto && i && (this.controlGesto = za(this, e, "controlAbles", "Control"));
  }, r.prototype._updateTargets = function() {
    var e = this.props;
    this._prevPropTarget = this._propTarget, this._prevDragTarget = this._dragTarget, this._prevOriginalDragTarget = this._originalDragTarget, this._prevDragArea = e.dragArea, this._propTarget = e.target, this._originalDragTarget = e.dragTarget || e.target, this._dragTarget = ir(this._originalDragTarget, !0);
  }, r.prototype._renderLines = function() {
    var e = this.props, n = e, i = n.zoom, a = n.hideDefaultLines, o = n.hideChildMoveableDefaultLines, s = n.parentMoveable;
    if (a || s && o)
      return [];
    var u = this.getState().renderPoses, l = {
      createElement: Jt
    };
    return [
      [0, 1],
      [1, 3],
      [3, 2],
      [2, 0]
    ].map(function(f, c) {
      var v = T(f, 2), p = v[0], d = v[1];
      return ke(l, "", u[p], u[d], i, "render-line-".concat(c));
    });
  }, r.prototype._isTargetChanged = function(e) {
    var n = this.props, i = n.dragTarget || n.target, a = this._prevOriginalDragTarget, o = this._prevDragArea, s = n.dragArea, u = !s && a !== i, l = (e || s) && o !== s;
    return u || l || this._prevPropTarget != this._propTarget;
  }, r.prototype._updateNativeEvents = function() {
    var e = this, n = this.props, i = n.dragArea ? this.areaElement : this.state.target, a = this.events, o = vr(a);
    if (this._isTargetChanged())
      for (var s in a) {
        var u = a[s];
        u && u.destroy(), a[s] = null;
      }
    if (i) {
      var l = this.enabledAbles;
      o.forEach(function(f) {
        var c = nn(l, [f]), v = c.length > 0, p = a[f];
        if (!v) {
          p && (p.destroy(), a[f] = null);
          return;
        }
        p || (p = new Nm(i, e, f), a[f] = p), p.setAbles(c);
      });
    }
  }, r.prototype._checkUpdateRootContainer = function() {
    var e = this.props.rootContainer;
    !this._rootContainer && e && (this._rootContainer = ir(e, !0));
  }, r.prototype._checkUpdateViewContainer = function() {
    var e = this.props.viewContainer;
    !this._viewContainer && e && (this._viewContainer = ir(e, !0));
    var n = this._viewContainer;
    n && this._changeAbleViewClassNames(N(N([], T(this._getAbleViewClassNames()), !1), [
      this.isDragging() ? ym : ""
    ], !1));
  }, r.prototype._changeAbleViewClassNames = function(e) {
    var n = this._viewContainer, i = gl(e.filter(Boolean), function(l) {
      return l;
    }).map(function(l) {
      var f = T(l, 1), c = f[0];
      return c;
    }), a = this._viewClassNames, o = Fe(a, i), s = o.removed, u = o.added;
    s.forEach(function(l) {
      Js(n, a[l]);
    }), u.forEach(function(l) {
      Zs(n, i[l]);
    }), this._viewClassNames = i;
  }, r.prototype._getAbleViewClassNames = function() {
    var e = this;
    return (this.getEnabledAbles().map(function(n) {
      var i;
      return ((i = n.viewClassName) === null || i === void 0 ? void 0 : i.call(n, e)) || "";
    }).join(" ") + " ".concat(this._getAbleClassName("-view"))).split(/\s+/g);
  }, r.prototype._getAbleClassName = function(e) {
    var n = this;
    e === void 0 && (e = "");
    var i = this.getEnabledAbles(), a = this.targetGesto, o = this.controlGesto, s = a != null && a.isFlag() ? a.getEventData() : {}, u = o != null && o.isFlag() ? o.getEventData() : {};
    return i.map(function(l) {
      var f, c, v, p = l.name, d = ((f = l.className) === null || f === void 0 ? void 0 : f.call(l, n)) || "";
      return (!((c = s[p]) === null || c === void 0) && c.isEventStart || !((v = u[p]) === null || v === void 0) && v.isEventStart) && (d += " ".concat(Q("".concat(p).concat(e, "-dragging")))), d.trim();
    }).filter(Boolean).join(" ");
  }, r.prototype._updateResizeObserver = function(e) {
    var n, i = this.props, a = i.target, o = br(this.getControlBoxElement());
    if (!o.ResizeObserver || !a || !i.useResizeObserver) {
      (n = this._reiszeObserver) === null || n === void 0 || n.disconnect();
      return;
    }
    if (!(e.target === a && this._reiszeObserver)) {
      var s = new o.ResizeObserver(this.checkUpdateRect);
      s.observe(a, {
        box: "border-box"
      }), this._reiszeObserver = s;
    }
  }, r.prototype._updateMutationObserver = function(e) {
    var n = this, i, a = this.props, o = a.target, s = br(this.getControlBoxElement());
    if (!s.MutationObserver || !o || !a.useMutationObserver) {
      (i = this._mutationObserver) === null || i === void 0 || i.disconnect();
      return;
    }
    if (!(e.target === o && this._mutationObserver)) {
      var u = new s.MutationObserver(function(l) {
        var f, c;
        try {
          for (var v = Mg(l), p = v.next(); !p.done; p = v.next()) {
            var d = p.value;
            d.type === "attributes" && d.attributeName === "style" && n.checkUpdateRect();
          }
        } catch (h) {
          f = { error: h };
        } finally {
          try {
            p && !p.done && (c = v.return) && c.call(v);
          } finally {
            if (f)
              throw f.error;
          }
        }
      });
      u.observe(o, {
        attributes: !0
      }), this._mutationObserver = u;
    }
  }, r.defaultProps = {
    dragTargetSelf: !1,
    target: null,
    dragTarget: null,
    container: null,
    rootContainer: null,
    origin: !0,
    parentMoveable: null,
    wrapperMoveable: null,
    isWrapperMounted: !1,
    parentPosition: null,
    warpSelf: !1,
    svgOrigin: "",
    dragContainer: null,
    useResizeObserver: !1,
    useMutationObserver: !1,
    preventDefault: !0,
    linePadding: 0,
    controlPadding: 0,
    ables: [],
    pinchThreshold: 20,
    dragArea: !1,
    passDragArea: !1,
    transformOrigin: "",
    className: "",
    zoom: 1,
    triggerAblesSimultaneously: !1,
    padding: {},
    pinchOutside: !0,
    checkInput: !1,
    dragFocusedInput: !1,
    groupable: !1,
    hideDefaultLines: !1,
    cspNonce: "",
    translateZ: 0,
    cssStyled: null,
    customStyledMap: {},
    props: {},
    stopPropagation: !1,
    preventClickDefault: !1,
    preventClickEventOnDrag: !0,
    flushSync: ol,
    firstRenderState: null,
    persistData: null,
    viewContainer: null,
    requestStyles: [],
    useAccuratePosition: !1
  }, r;
}(au), Ga = {
  name: "groupable",
  props: [
    "defaultGroupRotate",
    "useDefaultGroupRotate",
    "defaultGroupOrigin",
    "groupable",
    "groupableProps",
    "targetGroups",
    "hideChildMoveableDefaultLines"
  ],
  events: [],
  render: function(t, r) {
    var e, n = t.props, i = n.targets || [], a = t.getState(), o = a.left, s = a.top, u = a.isPersisted, l = n.zoom || 1, f = t.renderGroupRects, c = ((e = n.persistData) === null || e === void 0 ? void 0 : e.children) || [];
    u ? i = c.map(function() {
      return null;
    }) : c = [];
    var v = Zr(t, "parentPosition", [o, s], function(d) {
      return d.join(",");
    }), p = Zr(t, "requestStyles", t.getRequestChildStyles(), function(d) {
      return d.join(",");
    });
    return t.moveables = t.moveables.slice(0, i.length), N(N([], T(i.map(function(d, h) {
      return r.createElement(ue, { key: "moveable" + h, ref: Hs(t, "moveables", h), target: d, origin: !1, requestStyles: p, cssStyled: n.cssStyled, customStyledMap: n.customStyledMap, useResizeObserver: n.useResizeObserver, useMutationObserver: n.useMutationObserver, hideChildMoveableDefaultLines: n.hideChildMoveableDefaultLines, parentMoveable: t, parentPosition: [o, s], persistData: c[h], zoom: l });
    })), !1), T(ml(f.map(function(d, h) {
      var g = d.pos1, m = d.pos2, y = d.pos3, x = d.pos4, E = [g, m, y, x];
      return [
        [0, 1],
        [1, 3],
        [3, 2],
        [2, 0]
      ].map(function(C, b) {
        var S = T(C, 2), M = S[0], P = S[1];
        return ke(r, "", tt(E[M], v), tt(E[P], v), l, "group-rect-".concat(h, "-").concat(b));
      });
    }))), !1);
  }
}, Ym = ve("clickable", {
  props: [
    "clickable"
  ],
  events: [
    "click",
    "clickGroup"
  ],
  always: !0,
  dragRelation: "weak",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dragStart: function() {
  },
  dragControlStart: function() {
  },
  dragGroupStart: function(t, r) {
    r.datas.inputTarget = r.inputEvent && r.inputEvent.target;
  },
  dragEnd: function(t, r) {
    var e = t.props.target, n = r.inputEvent, i = r.inputTarget, a = t.isMoveableElement(i), o = !a && t.controlBox.contains(i);
    if (!(!n || !i || r.isDrag || t.isMoveableElement(i) || o)) {
      var s = e.contains(i);
      W(t, "onClick", it(t, r, {
        isDouble: r.isDouble,
        inputTarget: i,
        isTarget: e === i,
        moveableTarget: t.props.target,
        containsTarget: s
      }));
    }
  },
  dragGroupEnd: function(t, r) {
    var e = r.inputEvent, n = r.inputTarget;
    if (!(!e || !n || r.isDrag || t.isMoveableElement(n) || r.datas.inputTarget === n)) {
      var i = t.props.targets, a = i.indexOf(n), o = a > -1, s = !1;
      a === -1 && (a = cr(i, function(u) {
        return u.contains(n);
      }), s = a > -1), W(t, "onClickGroup", it(t, r, {
        isDouble: r.isDouble,
        targets: i,
        inputTarget: n,
        targetIndex: a,
        isTarget: o,
        containsTarget: s,
        moveableTarget: i[a]
      }));
    }
  },
  dragControlEnd: function(t, r) {
    this.dragEnd(t, r);
  },
  dragGroupControlEnd: function(t, r) {
    this.dragEnd(t, r);
  }
});
function Xr(t) {
  var r = t.originalDatas.draggable;
  return r || (t.originalDatas.draggable = {}, r = t.originalDatas.draggable), _(_({}, t), { datas: r });
}
var Hm = ve("edgeDraggable", {
  css: [
    `.edge.edgeDraggable.line {
cursor: move;
}`
  ],
  render: function(t, r) {
    var e = t.props, n = e.edgeDraggable;
    return n ? ju(r, "edgeDraggable", n, t.getState().renderPoses, e.zoom) : [];
  },
  dragCondition: function(t, r) {
    var e, n = t.props, i = (e = r.inputEvent) === null || e === void 0 ? void 0 : e.target;
    return !n.edgeDraggable || !i ? !1 : !n.draggable && Dt(i, Q("direction")) && Dt(i, Q("edge")) && Dt(i, Q("edgeDraggable"));
  },
  dragStart: function(t, r) {
    return Gt.dragStart(t, Xr(r));
  },
  drag: function(t, r) {
    return Gt.drag(t, Xr(r));
  },
  dragEnd: function(t, r) {
    return Gt.dragEnd(t, Xr(r));
  },
  dragGroupCondition: function(t, r) {
    var e, n = t.props, i = (e = r.inputEvent) === null || e === void 0 ? void 0 : e.target;
    return !n.edgeDraggable || !i ? !1 : !n.draggable && Dt(i, Q("direction")) && Dt(i, Q("line"));
  },
  dragGroupStart: function(t, r) {
    return Gt.dragGroupStart(t, Xr(r));
  },
  dragGroup: function(t, r) {
    return Gt.dragGroup(t, Xr(r));
  },
  dragGroupEnd: function(t, r) {
    return Gt.dragGroupEnd(t, Xr(r));
  },
  unset: function(t) {
    return Gt.unset(t);
  }
}), Il = {
  name: "individualGroupable",
  props: [
    "individualGroupable",
    "individualGroupableProps"
  ],
  events: []
}, La = [
  wl,
  _l,
  q0,
  pm,
  Gt,
  Hm,
  Ii,
  dm,
  gm,
  O0,
  Em,
  Sm,
  xm,
  Am,
  km,
  Lm,
  Ga,
  Il,
  Ym,
  Ml,
  Rl
], Xm = /* @__PURE__ */ La.reduce(function(t, r) {
  return (r.events || []).forEach(function(e) {
    Ks(t, e);
  }), t;
}, []), Wm = /* @__PURE__ */ La.reduce(function(t, r) {
  return (r.props || []).forEach(function(e) {
    Ks(t, e);
  }), t;
}, []);
function fs(t, r) {
  var e = T(t, 3), n = e[0], i = e[1], a = e[2];
  return (n * r[0] + i * r[1] + a) / Math.sqrt(n * n + i * i);
}
function un(t, r) {
  var e = T(t, 2), n = e[0], i = e[1];
  return -n * r[0] - i * r[1];
}
function cs(t, r) {
  return Math.max.apply(Math, N([], T(t.map(function(e) {
    var n = T(e, 4), i = n[0], a = n[1], o = n[2], s = n[3];
    return Math.max(i[r], a[r], o[r], s[r]);
  })), !1));
}
function vs(t, r) {
  return Math.min.apply(Math, N([], T(t.map(function(e) {
    var n = T(e, 4), i = n[0], a = n[1], o = n[2], s = n[3];
    return Math.min(i[r], a[r], o[r], s[r]);
  })), !1));
}
function Vm(t, r) {
  var e, n, i, a = [0, 0], o = [0, 0], s = [0, 0], u = [0, 0], l = 0, f = 0;
  if (!t.length)
    return {
      pos1: a,
      pos2: o,
      pos3: s,
      pos4: u,
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0,
      width: l,
      height: f,
      rotation: r
    };
  var c = et(r, Ft);
  if (c % 90) {
    var v = c / 180 * Math.PI, p = Math.tan(v), d = -1 / p, h = [Di, zo], g = [[0, 0], [0, 0]], m = [Di, zo], y = [[0, 0], [0, 0]];
    t.forEach(function(U) {
      U.forEach(function(H) {
        var X = fs([-p, 1, 0], H), Y = fs([-d, 1, 0], H);
        h[0] > X && (g[0] = H, h[0] = X), h[1] < X && (g[1] = H, h[1] = X), m[0] > Y && (y[0] = H, m[0] = Y), m[1] < Y && (y[1] = H, m[1] = Y);
      });
    });
    var x = T(g, 2), E = x[0], C = x[1], b = T(y, 2), S = b[0], M = b[1], P = [-p, 1, un([-p, 1], E)], D = [-p, 1, un([-p, 1], C)], O = [-d, 1, un([-d, 1], S)], R = [-d, 1, un([-d, 1], M)];
    e = T([
      [P, O],
      [P, R],
      [D, O],
      [D, R]
    ].map(function(U) {
      var H = T(U, 2), X = H[0], Y = H[1];
      return ha(X, Y)[0];
    }), 4), a = e[0], o = e[1], s = e[2], u = e[3], l = m[1] - m[0], f = h[1] - h[0];
  } else {
    var w = vs(t, 0), I = vs(t, 1), k = cs(t, 0), F = cs(t, 1);
    if (a = [w, I], o = [k, I], s = [w, F], u = [k, F], l = k - w, f = F - I, c % 180) {
      var L = [s, a, u, o];
      n = T(L, 4), a = n[0], o = n[1], s = n[2], u = n[3], l = F - I, f = k - w;
    }
  }
  if (c % 360 > 180) {
    var L = [u, s, o, a];
    i = T(L, 4), a = i[0], o = i[1], s = i[2], u = i[3];
  }
  var B = zr([a, o, s, u]), $ = B.minX, j = B.minY, G = B.maxX, q = B.maxY;
  return {
    pos1: a,
    pos2: o,
    pos3: s,
    pos4: u,
    width: l,
    height: f,
    minX: $,
    minY: j,
    maxX: G,
    maxY: q,
    rotation: r
  };
}
function kl(t, r) {
  var e = r.map(function(n) {
    if (_t(n)) {
      var i = kl(t, n), a = i.length;
      return a > 1 ? i : a === 1 ? i[0] : null;
    } else {
      var o = jt(t, function(s) {
        var u = s.manager;
        return u.props.target === n;
      });
      return o ? (o.finded = !0, o.manager) : null;
    }
  }).filter(Boolean);
  return e.length === 1 && _t(e[0]) ? e[0] : e;
}
var qm = /* @__PURE__ */ function(t) {
  He(r, t);
  function r() {
    var e = t !== null && t.apply(this, arguments) || this;
    return e.differ = new Su(), e.moveables = [], e.transformOrigin = "50% 50%", e.renderGroupRects = [], e._targetGroups = [], e._hasFirstTargets = !1, e;
  }
  return r.prototype.componentDidMount = function() {
    t.prototype.componentDidMount.call(this);
  }, r.prototype.checkUpdate = function() {
    this._isPropTargetChanged = !1, this.updateAbles();
  }, r.prototype.getTargets = function() {
    return this.props.targets;
  }, r.prototype.updateRect = function(e, n, i) {
    var a;
    i === void 0 && (i = !0);
    var o = this.state;
    if (!this.controlBox || o.isPersisted)
      return;
    ae(!0), this.moveables.forEach(function(J) {
      J.updateRect(e, !1, !1);
    });
    var s = this.props, u = this.moveables, l = o.target || s.target, f = u.map(function(J) {
      return { finded: !1, manager: J };
    }), c = this.props.targetGroups || [], v = kl(f, c), p = s.useDefaultGroupRotate;
    v.push.apply(v, N([], T(f.filter(function(J) {
      var nt = J.finded;
      return !nt;
    }).map(function(J) {
      var nt = J.manager;
      return nt;
    })), !1));
    var d = [], h = !n || e !== "" && s.updateGroup, g = s.defaultGroupRotate || 0;
    if (!this._hasFirstTargets) {
      var m = (a = s.persistData) === null || a === void 0 ? void 0 : a.rotation;
      m != null && (g = m);
    }
    function y(J, nt, rt) {
      var Z = J.map(function(dt) {
        if (_t(dt)) {
          var st = y(dt, nt), ct = [st.pos1, st.pos2, st.pos3, st.pos4];
          return d.push(st), { poses: ct, rotation: st.rotation };
        } else
          return {
            poses: Kt(dt.state),
            rotation: dt.getRotation()
          };
      }), K = Z.map(function(dt) {
        var st = dt.rotation;
        return st;
      }), ft = 0, at = K[0], ot = K.every(function(dt) {
        return Math.abs(at - dt) < 0.1;
      });
      h ? ft = !p && ot ? at : g : ft = !p && !rt && ot ? at : nt;
      var ut = Z.map(function(dt) {
        var st = dt.poses;
        return st;
      }), xt = Vm(ut, ft);
      return xt;
    }
    var x = y(v, this.rotation, !0);
    h && (this.rotation = x.rotation, this.transformOrigin = s.defaultGroupOrigin || "50% 50%", this.scale = [1, 1]), this._targetGroups = c, this.renderGroupRects = d;
    var E = this.transformOrigin, C = this.rotation, b = this.scale, S = x.width, M = x.height, P = x.minX, D = x.minY, O = vm([
      [0, 0],
      [S, 0],
      [0, M],
      [S, M]
    ], ka(E, S, M), this.rotation / 180 * Math.PI), R = zr(O.result), w = R.minX, I = R.minY, k = " rotate(".concat(C, "deg)") + " scale(".concat(Vt(b[0]), ", ").concat(Vt(b[1]), ")"), F = "translate(".concat(-w, "px, ").concat(-I, "px)").concat(k);
    this.controlBox.style.transform = "translate3d(".concat(P, "px, ").concat(D, "px, ").concat(this.props.translateZ || 0, ")"), l.style.cssText += "left:0px;top:0px;" + "transform-origin:".concat(E, ";") + "width:".concat(S, "px;height:").concat(M, "px;") + "transform: ".concat(F), o.width = S, o.height = M;
    var L = this.getContainer(), B = Ni(this.controlBox, l, this.controlBox, this.getContainer(), this._rootContainer || L, []), $ = [B.left, B.top], j = T(Kt(B), 4), G = j[0], q = j[1], U = j[2], H = j[3], X = zr([G, q, U, H]), Y = [X.minX, X.minY], V = Vt(b[0] * b[1]);
    B.pos1 = tt(G, Y), B.pos2 = tt(q, Y), B.pos3 = tt(U, Y), B.pos4 = tt(H, Y), B.left = P - B.left + Y[0], B.top = D - B.top + Y[1], B.origin = tt(lt($, B.origin), Y), B.beforeOrigin = tt(lt($, B.beforeOrigin), Y), B.originalBeforeOrigin = lt($, B.originalBeforeOrigin), B.transformOrigin = tt(lt($, B.transformOrigin), Y), l.style.transform = "translate(".concat(-w - Y[0], "px, ").concat(-I - Y[1], "px)") + k, ae(), this.updateState(_(_({}, B), { posDelta: Y, direction: V, beforeDirection: V }), i);
  }, r.prototype.getRect = function() {
    return _(_({}, t.prototype.getRect.call(this)), { children: this.moveables.map(function(e) {
      return e.getRect();
    }) });
  }, r.prototype.triggerEvent = function(e, n, i) {
    if (i || e.indexOf("Group") > -1)
      return t.prototype.triggerEvent.call(this, e, n);
    this._emitter.trigger(e, n);
  }, r.prototype.getRequestChildStyles = function() {
    var e = this.getEnabledAbles().reduce(function(n, i) {
      var a, o, s = (o = (a = i.requestChildStyle) === null || a === void 0 ? void 0 : a.call(i)) !== null && o !== void 0 ? o : [];
      return N(N([], T(n), !1), T(s), !1);
    }, []);
    return e;
  }, r.prototype.getMoveables = function() {
    return N([], T(this.moveables), !1);
  }, r.prototype.updateAbles = function() {
    t.prototype.updateAbles.call(this, N(N([], T(this.props.ables), !1), [Ga], !1), "Group");
  }, r.prototype._updateTargets = function() {
    t.prototype._updateTargets.call(this), this._originalDragTarget = this.props.dragTarget || this.areaElement, this._dragTarget = ir(this._originalDragTarget, !0);
  }, r.prototype._updateEvents = function() {
    var e = this.state, n = this.props, i = this._prevDragTarget, a = n.dragTarget || this.areaElement, o = n.targets, s = this.differ.update(o), u = s.added, l = s.changed, f = s.removed, c = u.length || f.length;
    (c || this._prevOriginalDragTarget !== this._originalDragTarget) && (Kr(this, !1), Kr(this, !0), this.updateState({ gestos: {} })), i !== a && (e.target = null), e.target || (e.target = this.areaElement, this.controlBox.style.display = "block"), e.target && (this.targetGesto || (this.targetGesto = Ol(this, this._dragTarget, "Group")), this.controlGesto || (this.controlGesto = za(this, this.controlBox, "controlAbles", "GroupControl")));
    var v = !Gi(e.container, n.container);
    v && (e.container = n.container), (v || c || this.transformOrigin !== (n.defaultGroupOrigin || "50% 50%") || l.length || o.length && !El(this._targetGroups, n.targetGroups || [])) && (this.updateRect(), this._hasFirstTargets = !0), this._isPropTargetChanged = !!c;
  }, r.prototype._updateObserver = function() {
  }, r.defaultProps = _(_({}, ue.defaultProps), { transformOrigin: ["50%", "50%"], groupable: !0, dragArea: !0, keepRatio: !0, targets: [], defaultGroupRotate: 0, defaultGroupOrigin: "50% 50%" }), r;
}(ue), Um = /* @__PURE__ */ function(t) {
  He(r, t);
  function r() {
    var e = t !== null && t.apply(this, arguments) || this;
    return e.moveables = [], e;
  }
  return r.prototype.render = function() {
    var e = this, n, i = this.props, a = i.cspNonce, o = i.cssStyled, s = i.persistData, u = i.targets || [], l = u.length, f = this.isUnmounted || !l, c = (n = s == null ? void 0 : s.children) !== null && n !== void 0 ? n : [];
    return f && !l && c.length ? u = c.map(function() {
      return null;
    }) : f || (c = []), Jt(o, { cspNonce: a, ref: ur(this, "controlBox"), className: Q("control-box") }, u.map(function(v, p) {
      var d, h, g = (h = (d = i.individualGroupableProps) === null || d === void 0 ? void 0 : d.call(i, v, p)) !== null && h !== void 0 ? h : {};
      return Jt(ue, _({ key: "moveable" + p, ref: Hs(e, "moveables", p) }, i, g, { target: v, wrapperMoveable: e, isWrapperMounted: e.isMoveableMounted, persistData: c[p] }));
    }));
  }, r.prototype.componentDidMount = function() {
  }, r.prototype.componentDidUpdate = function() {
  }, r.prototype.getTargets = function() {
    return this.props.targets;
  }, r.prototype.updateRect = function(e, n, i) {
    i === void 0 && (i = !0), ae(!0), this.moveables.forEach(function(a) {
      a.updateRect(e, n, i);
    }), ae();
  }, r.prototype.getRect = function() {
    return _(_({}, t.prototype.getRect.call(this)), { children: this.moveables.map(function(e) {
      return e.getRect();
    }) });
  }, r.prototype.request = function(e, n, i) {
    n === void 0 && (n = {});
    var a = this.moveables.map(function(u) {
      return u.request(e, _(_({}, n), { isInstant: !1 }), !1);
    }), o = i || n.isInstant, s = {
      request: function(u) {
        return a.forEach(function(l) {
          return l.request(u);
        }), this;
      },
      requestEnd: function() {
        return a.forEach(function(u) {
          return u.requestEnd();
        }), this;
      }
    };
    return o ? s.request(n).requestEnd() : s;
  }, r.prototype.dragStart = function(e) {
    var n = e.target, i = jt(this.moveables, function(a) {
      var o = a.getTargets()[0], s = a.getControlBoxElement(), u = a.getDragElement();
      return !o || !u ? !1 : u === n || u.contains(n) || u !== o && o === n || o.contains(n) || s === n || s.contains(n);
    });
    return i && i.dragStart(e), this;
  }, r.prototype.hitTest = function() {
    return 0;
  }, r.prototype.isInside = function() {
    return !1;
  }, r.prototype.isDragging = function() {
    return !1;
  }, r.prototype.getDragElement = function() {
    return null;
  }, r.prototype.getMoveables = function() {
    return N([], T(this.moveables), !1);
  }, r.prototype.updateRenderPoses = function() {
  }, r.prototype.checkUpdate = function() {
  }, r.prototype.triggerEvent = function() {
  }, r.prototype.updateAbles = function() {
  }, r.prototype._updateEvents = function() {
  }, r.prototype._updateObserver = function() {
  }, r;
}(ue);
function Al(t, r) {
  var e = [];
  return t.forEach(function(n) {
    if (n) {
      if ($t(n)) {
        r[n] && e.push.apply(e, N([], T(r[n]), !1));
        return;
      }
      _t(n) ? e.push.apply(e, N([], T(Al(n, r)), !1)) : e.push(n);
    }
  }), e;
}
function Bl(t, r) {
  var e = [];
  return t.forEach(function(n) {
    if (n) {
      if ($t(n)) {
        r[n] && e.push.apply(e, N([], T(r[n]), !1));
        return;
      }
      _t(n) ? e.push(Bl(n, r)) : e.push(n);
    }
  }), e;
}
function zl(t, r) {
  return t.length !== r.length || t.some(function(e, n) {
    var i = r[n];
    return !e && !i ? !1 : e != i ? _t(e) && _t(i) ? zl(e, i) : !0 : !1;
  });
}
var Km = /* @__PURE__ */ function(t) {
  He(r, t);
  function r() {
    var e = t !== null && t.apply(this, arguments) || this;
    return e.refTargets = [], e.selectorMap = {}, e._differ = new Su(), e._elementTargets = [], e._tmpRefTargets = [], e._tmpSelectorMap = {}, e._onChangeTargets = null, e;
  }
  return r.makeStyled = function() {
    var e = {}, n = this.getTotalAbles();
    n.forEach(function(a) {
      var o = a.css;
      o && o.forEach(function(s) {
        e[s] = !0;
      });
    });
    var i = vr(e).join(`
`);
    this.defaultStyled = Pu("div", jd(ma, Bg + i));
  }, r.getTotalAbles = function() {
    return N([_l, Ga, Il, Ml], T(this.defaultAbles), !1);
  }, r.prototype.render = function() {
    var e, n = this.constructor;
    n.defaultStyled || n.makeStyled();
    var i = this.props, a = i.ables, o = i.props, s = Sg(i, ["ables", "props"]), u = T(this._updateRefs(!0), 2), l = u[0], f = u[1], c = Al(l, f), v = c.length > 1, p = n.getTotalAbles(), d = N(N([], T(p), !1), T(a || []), !1), h = _(_(_({}, s), o || {}), { ables: d, cssStyled: n.defaultStyled, customStyledMap: n.customStyledMap });
    this._elementTargets = c;
    var g = null, m = this.moveable, y = s.persistData;
    if (y != null && y.children && (v = !0), s.individualGroupable)
      return Jt(Um, _({ key: "individual-group", ref: ur(this, "moveable") }, h, { target: null, targets: c }));
    if (v) {
      var x = Bl(l, f);
      if (m && !m.props.groupable && !m.props.individualGroupable) {
        var E = m.props.target;
        E && c.indexOf(E) > -1 && (g = _({}, m.state));
      }
      return Jt(qm, _({ key: "group", ref: ur(this, "moveable") }, h, (e = s.groupableProps) !== null && e !== void 0 ? e : {}, { target: null, targets: c, targetGroups: x, firstRenderState: g }));
    } else {
      var C = c[0];
      if (m && (m.props.groupable || m.props.individualGroupable)) {
        var b = m.moveables || [], S = jt(b, function(M) {
          return M.props.target === C;
        });
        S && (g = _({}, S.state));
      }
      return Jt(ue, _({ key: "single", ref: ur(this, "moveable") }, h, { target: C, firstRenderState: g }));
    }
  }, r.prototype.componentDidMount = function() {
    this._checkChangeTargets();
  }, r.prototype.componentDidUpdate = function() {
    this._checkChangeTargets();
  }, r.prototype.componentWillUnmount = function() {
    this.selectorMap = {}, this.refTargets = [];
  }, r.prototype.getTargets = function() {
    var e, n;
    return (n = (e = this.moveable) === null || e === void 0 ? void 0 : e.getTargets()) !== null && n !== void 0 ? n : [];
  }, r.prototype.updateSelectors = function() {
    this.selectorMap = {}, this._updateRefs();
  }, r.prototype.waitToChangeTarget = function() {
    var e = this, n;
    return this._onChangeTargets = function() {
      e._onChangeTargets = null, n();
    }, new Promise(function(i) {
      n = i;
    });
  }, r.prototype.waitToChangeTargets = function() {
    return this.waitToChangeTarget();
  }, r.prototype.getManager = function() {
    return this.moveable;
  }, r.prototype.getMoveables = function() {
    return this.moveable.getMoveables();
  }, r.prototype.getDragElement = function() {
    return this.moveable.getDragElement();
  }, r.prototype._updateRefs = function(e) {
    var n = this.refTargets, i = Ia(this.props.target || this.props.targets), a = typeof document != "undefined", o = zl(n, i), s = this.selectorMap, u = {};
    return this.refTargets.forEach(function l(f) {
      if ($t(f)) {
        var c = s[f];
        c ? u[f] = s[f] : a && (o = !0, u[f] = [].slice.call(document.querySelectorAll(f)));
      } else
        _t(f) && f.forEach(l);
    }), this._tmpRefTargets = i, this._tmpSelectorMap = u, [
      i,
      u,
      !e && o
    ];
  }, r.prototype._checkChangeTargets = function() {
    var e, n, i;
    this.refTargets = this._tmpRefTargets, this.selectorMap = this._tmpSelectorMap;
    var a = this._differ.update(this._elementTargets), o = a.added, s = a.removed, u = o.length || s.length;
    u && ((n = (e = this.props).onChangeTargets) === null || n === void 0 || n.call(e, {
      moveable: this.moveable,
      targets: this._elementTargets
    }), (i = this._onChangeTargets) === null || i === void 0 || i.call(this));
    var l = T(this._updateRefs(), 3), f = l[0], c = l[1], v = l[2];
    this.refTargets = f, this.selectorMap = c, v && this.forceUpdate();
  }, r.defaultAbles = [], r.customStyledMap = {}, r.defaultStyled = null, Cg([
    Yd(Iu)
  ], r.prototype, "moveable", void 0), r;
}(au), Zm = /* @__PURE__ */ function(t) {
  He(r, t);
  function r() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return r.defaultAbles = La, r;
}(Km), $i = function(t, r) {
  return $i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
  }, $i(t, r);
};
function Fa(t, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  $i(t, r);
  function e() {
    this.constructor = t;
  }
  t.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
}
var Be = function() {
  return Be = Object.assign || function(r) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
    }
    return r;
  }, Be.apply(this, arguments);
};
function Jm(t, r, e, n) {
  var i = arguments.length, a = i < 3 ? r : n === null ? n = Object.getOwnPropertyDescriptor(r, e) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    a = Reflect.decorate(t, r, e, n);
  else
    for (var s = t.length - 1; s >= 0; s--)
      (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(r, e, a) : o(r, e)) || a);
  return i > 3 && a && Object.defineProperty(r, e, a), a;
}
var Qm = /* @__PURE__ */ function(t) {
  Fa(r, t);
  function r(n) {
    var i = t.call(this, n) || this;
    return i.state = {}, i.state = i.props, i;
  }
  var e = r.prototype;
  return e.render = function() {
    return Jt(Zm, Be({
      ref: ur(this, "moveable")
    }, this.state));
  }, r;
}(la), t1 = Wm, r1 = Iu, e1 = Xm, n1 = /* @__PURE__ */ function(t) {
  Fa(r, t);
  function r(n, i) {
    i === void 0 && (i = {});
    var a = t.call(this) || this;
    a.containerProvider = null, a.selfElement = null, a._warp = !1;
    var o = Be({}, i), s = {};
    e1.forEach(function(f) {
      s[Qd("on ".concat(f))] = function(c) {
        return a.trigger(f, c);
      };
    });
    var u;
    i.warpSelf ? (delete i.warpSelf, a._warp = !0, u = n) : (u = fe(n).createElement("div"), n.appendChild(u)), a.containerProvider = Ro(Jt(Qm, Be({
      ref: ur(a, "innerMoveable")
    }, o, s)), u), a.selfElement = u;
    var l = o.target;
    return _t(l) && l.length > 1 && a.updateRect(), a;
  }
  var e = r.prototype;
  return e.setState = function(n, i) {
    this.innerMoveable.setState(n, i);
  }, e.forceUpdate = function(n) {
    this.innerMoveable.forceUpdate(n);
  }, e.dragStart = function(n) {
    var i = this.innerMoveable;
    i.$_timer && this.forceUpdate(), this.getMoveable().dragStart(n);
  }, e.destroy = function() {
    var n, i = this.selfElement;
    Ro(null, i, this.containerProvider), this._warp || (n = i == null ? void 0 : i.parentElement) === null || n === void 0 || n.removeChild(i), this.containerProvider = null, this.off(), this.selfElement = null, this.innerMoveable = null;
  }, e.getMoveable = function() {
    return this.innerMoveable.moveable;
  }, r = Jm([Eo(r1, function(n, i) {
    n[i] || (n[i] = function() {
      for (var a = [], o = 0; o < arguments.length; o++)
        a[o] = arguments[o];
      var s = this.getMoveable();
      if (!(!s || !s[i]))
        return s[i].apply(s, a);
    });
  }), Eo(t1, function(n, i) {
    Object.defineProperty(n, i, {
      get: function() {
        return this.getMoveable().props[i];
      },
      set: function(a) {
        var o;
        this.setState((o = {}, o[i] = a, o));
      },
      enumerable: !0,
      configurable: !0
    });
  })], r), r;
}(wn), i1 = /* @__PURE__ */ function(t) {
  Fa(r, t);
  function r() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return r;
}(n1);
function a1(t, r) {
  return ve(t, r);
}
const o1 = (t, r) => Math.sqrt(Math.pow(Math.abs(t.x - r.x), 2) + Math.pow(Math.abs(t.y - r.y), 2)), ji = 1e-8, si = 10;
class s1 extends ra {
  constructor(e, n = {}) {
    super();
    A(this, "likeRectangleIns");
    A(this, "opts");
    A(this, "moveableIns", null);
    A(this, "rotationPointIns", null);
    A(this, "midPoint");
    A(this, "initAngle");
    A(this, "offset");
    A(this, "rotationLine");
    A(this, "customRotationDOMId", `ID${Xn()}`);
    A(this, "moveableElementId", `ID${Xn()}`);
    A(this, "targetElementId", `ID${Xn()}`);
    A(this, "genMarkerContent", (e = 0) => {
      const i = `width:${0.05}px; height:${0.05}px;`;
      e = Number.isNaN(+e) ? 0 : +e;
      const a = `<div style="visibility: hidden; background: transparent; height: ${0.05}px; width: ${0.05}px"></div>`;
      return `
            <div
            style="${i}"
            data-rotatable-ref="${this.moveableElementId}"
            >
                <div
                    data-rotatable-ref="${this.targetElementId}"
                    style="${i} transform: translate(0,0) rotate(${e}deg);">
                    ${a}
                </div>
            </div>
        `;
    });
    A(this, "setMarkerRotatable", () => {
      this.offset = this.calcInitOffset();
      const e = this, n = a1("customRotation", {
        render(o, s) {
          const u = o.getRect(), { pos1: l, pos2: f } = o.state;
          return s.createElement(
            "div",
            {
              key: "custom-rotation",
              id: e.customRotationDOMId,
              className: "moveable-custom-rotation",
              style: {
                display: "inline-block",
                position: "absolute",
                transform: `translate(-50%, -100%) translate(${(l[0] + f[0]) / 2}px, ${(l[1] + f[1]) / 2}px) rotate(${u.rotation}deg) translateY(-${e.offset}px)`,
                width: `${e.radius}px`,
                height: `${e.radius}px`,
                cursor: "move",
                background: "#fff",
                border: "2px solid #cc6666",
                borderRadius: "50%",
                transformOrigin: "50% 100%"
              }
            },
            [`
        `]
          );
        }
      }), i = document.querySelector(`[data-rotatable-ref="${this.moveableElementId}"]`), a = document.querySelector(`[data-rotatable-ref="${this.targetElementId}"]`);
      this.moveableIns = new i1(i, {
        target: a,
        ables: [n],
        props: { customRotation: !0 },
        rotatable: !0,
        throttleRotate: 0,
        origin: !1,
        hideDefaultLines: !0,
        rotationTarget: ".moveable-custom-rotation",
        rotationPosition: "none"
      }), this.registryEvent();
    });
    A(this, "onRotateStart", () => {
      this.emit("rotateStart", this.likeRectangleIns);
    });
    A(this, "onRotate", (e) => {
      e.target.style.transform = e.drag.transform;
      const n = +this.getDOMTransformRotate(e.target) - this.initAngle;
      this.rotate(n), this.emit("rotate", e);
    });
    A(this, "onRotateEnd", () => {
      this.emit("rotateEnd", this.likeRectangleIns);
    });
    A(this, "rotate", (e) => {
      const n = this.mapIns.lngLatToContainer(this.center), i = this.likeRectangleIns.leftTop, a = this.mapIns.lngLatToContainer(i), o = this.calcRotatePoint(a, n, e), s = new AMap.Pixel(o.x, o.y), u = this.mapIns.containerToLngLat(s), l = this.likeRectangleIns.rightTop, f = this.mapIns.lngLatToContainer(l), c = this.calcRotatePoint(f, n, e), v = new AMap.Pixel(c.x, c.y), p = this.mapIns.containerToLngLat(v), d = this.likeRectangleIns.rightBottom, h = this.mapIns.lngLatToContainer(d), g = this.calcRotatePoint(h, n, e), m = new AMap.Pixel(g.x, g.y), y = this.mapIns.containerToLngLat(m), x = this.likeRectangleIns.leftBottom, E = this.mapIns.lngLatToContainer(x), C = this.calcRotatePoint(E, n, e), b = new AMap.Pixel(C.x, C.y), S = this.mapIns.containerToLngLat(b), M = [
        [u.lng, u.lat],
        [p.lng, p.lat],
        [y.lng, y.lat],
        [S.lng, S.lat]
      ];
      this.likeRectangleIns.setPath(M);
    });
    A(this, "calcRotatePoint", (e, n, i) => {
      const a = e.x, o = e.y, s = n.x, u = n.y, l = i * Math.PI / 180, f = a - s, c = o - u, v = f * Math.cos(l) - c * Math.sin(l) + s, p = f * Math.sin(l) + c * Math.cos(l) + u;
      return { x: v, y: p };
    });
    A(this, "getDOMTransformRotate", (e) => {
      var a;
      if (!e)
        return 0;
      let n = null;
      return (((a = e == null ? void 0 : e.style) == null ? void 0 : a.transform) || "").replace(/rotate\((.*)deg\)/g, (o, s) => n = s), +n || 0;
    });
    A(this, "updateRotationAbleOffset", () => {
      var o;
      const e = document.querySelector(`#${this.customRotationDOMId}`);
      let n = null, i = ((o = e == null ? void 0 : e.style) == null ? void 0 : o.transform) || "";
      if (i.replace(/translateY\((.*)px\)/g, (s, u) => n = u), !n)
        return;
      const a = `-${this.calcInitOffset()}`;
      i = i.replace(new RegExp(n, "g"), a), e.style.transform = i, this.offset = this.calcInitOffset();
    });
    A(this, "onDragStart", () => gr(this, null, function* () {
      this.reset();
    }));
    /**
     * 拖拽结束后，需要重新计算一下点位数据
     */
    A(this, "onDragEnd", () => gr(this, null, function* () {
      this.open();
    }));
    if (!e)
      throw new Error("likeRectangleIns is required");
    this.likeRectangleIns = e, this.opts = n, this.open();
  }
  get mapIns() {
    return this.likeRectangleIns.likeRectangle.map;
  }
  get center() {
    return this.likeRectangleIns.likeRectangle.center;
  }
  get rotatable() {
    var e, n, i;
    return (i = (n = (e = this.likeRectangleIns) == null ? void 0 : e.likeRectangle) == null ? void 0 : n.opts) == null ? void 0 : i.rotatable;
  }
  get draggable() {
    var n;
    return ((n = this.likeRectangleIns) == null ? void 0 : n.getOptions()).draggable;
  }
  get radius() {
    const { controllerPointRadius: e = si } = this.opts;
    return Math.max(+`${e}`.replace("px", "") || si, si);
  }
  open() {
    this.rotatable && (this.calcMidPoint(), this.calcInitAngle(), this.setRotationLine(), this.registryLikeRectangleEvents(), this.createRotationPoint());
  }
  reset() {
    var e, n, i, a;
    (n = (e = this.moveableIns) == null ? void 0 : e.destroy) == null || n.call(e), this.moveableIns = null, (a = (i = this.rotationPointIns) == null ? void 0 : i.destroy) == null || a.call(i), this.rotationPointIns = null;
  }
  close() {
    this.reset(), this.destroyLikeRectangleEvents(), this.destroyEvent();
  }
  registryLikeRectangleEvents() {
    const e = this.likeRectangleIns.hasEvents("dragstart", this.onDragStart);
    this.draggable && !e && (this.likeRectangleIns.on("dragstart", this.onDragStart), this.likeRectangleIns.on("dragend", this.onDragEnd));
  }
  destroyLikeRectangleEvents() {
    this.likeRectangleIns.off("dragstart", this.onDragStart), this.likeRectangleIns.off("dragend", this.onDragEnd);
  }
  /**
   * 旋转点（即中心点）
   */
  createRotationPoint() {
    return gr(this, null, function* () {
      var e, n;
      (n = (e = this.rotationPointIns) == null ? void 0 : e.destroy) == null || n.call(e), this.rotationPointIns = null, this.rotationPointIns = new AMap.Marker({
        map: this.mapIns,
        position: this.center,
        content: this.genMarkerContent(this.initAngle)
      }), yield Promise.resolve(), this.setMarkerRotatable();
    });
  }
  registryEvent() {
    var e, n;
    this.moveableIns && (this.moveableIns.on("rotateStart", this.onRotateStart), this.moveableIns.on("rotate", this.onRotate), this.moveableIns.on("rotateEnd", this.onRotateEnd), (n = (e = this.mapIns) == null ? void 0 : e.on) == null || n.call(e, "zoomchange", this.updateRotationAbleOffset));
  }
  destroyEvent() {
    var e, n;
    this.moveableIns && (this.moveableIns.off("rotateStart", this.onRotateStart), this.moveableIns.off("rotate", this.onRotate), this.moveableIns.off("rotateEnd", this.onRotateEnd), (n = (e = this.mapIns) == null ? void 0 : e.off) == null || n.call(e, "zoomchange", this.updateRotationAbleOffset));
  }
  calcMidPoint() {
    var g, m, y;
    const e = (y = (m = (g = this.likeRectangleIns) == null ? void 0 : g.getPath) == null ? void 0 : m.call(g)) == null ? void 0 : y.map((x) => [x.lng, x.lat]);
    if (!e.length || !this.mapIns)
      throw new Error("likeRectangle or map is undefined");
    const n = e[0], i = this.mapIns.lngLatToContainer(n), a = e[1], o = this.mapIns.lngLatToContainer(a);
    let s = (i.y - o.y) / (i.x - o.x);
    s = Math.abs(s) < ji ? 0 : s;
    const u = i.y - s * i.x, l = this.mapIns.lngLatToContainer(this.center), f = -1 / s, c = l.y - f * l.x, v = !Wt(s) || Xt(s) || !Wt(f) || Xt(f) || !Wt(u) || Xt(u) || !Wt(c) || Xt(c);
    let p;
    s === 0 ? p = (i.x + o.x) / 2 : v ? p = i.x : p = (c - u) / (s - f);
    let d;
    s === 0 ? d = i.y : v ? d = (i.y + o.y) / 2 : d = s * p + u;
    const h = new AMap.Pixel(p, d);
    return this.midPoint = this.mapIns.containerToLngLat(h), this.midPoint;
  }
  /**
   * 计算第一条连线的中点，位于中心点角度
   */
  calcInitAngle() {
    if (!this.mapIns)
      return;
    const e = this.mapIns.lngLatToContainer(this.midPoint), n = this.mapIns.lngLatToContainer(this.center), i = Math.atan2(e.y - n.y, e.x - n.x);
    return this.initAngle = 180 / Math.PI * i + 90, this.initAngle;
  }
  // TODO 需要处理小于中点的情况
  calcInitOffset() {
    if (!this.mapIns)
      return 0;
    const e = this.mapIns.lngLatToContainer(this.midPoint), n = this.mapIns.lngLatToContainer(this.center);
    return o1(e, n) - (this.radius / 2 + 2);
  }
  // setRotationPoint() {
  // }
  setRotationLine() {
  }
}
class u1 extends ra {
  constructor(e) {
    super();
    A(this, "opts");
    A(this, "map");
    A(this, "width");
    A(this, "height");
    A(this, "center");
    A(this, "leftTop");
    // 左上点
    A(this, "rightTop");
    // 右上点
    A(this, "leftBottom");
    // 左下点
    A(this, "rightBottom");
    // 右下点
    A(this, "likeRectangle");
    A(this, "rotatableIns");
    A(this, "likeRectangleDestroy");
    A(this, "likeRectangleRawSetOptions");
    this.validatorOpts(e), this.bindOptsToSelf(e), e.path || this.setPoints();
    const n = this.create();
    return this.registerRotatable(), this.enhanceMethods(), n;
  }
  validatorOpts(e) {
    if (!("map" in e) || !e.map)
      throw new Error("not found map instance");
  }
  bindOptsToSelf(e) {
    this.opts = e, Object.entries(e).forEach(([n, i]) => {
      this[n] = i;
    });
  }
  enhanceMethods() {
    this.likeRectangleDestroy = this.likeRectangle.destroy.bind(this.likeRectangle), this.likeRectangle.destroy = this.destroy.bind(this), this.likeRectangleRawSetOptions = this.likeRectangle.setOptions.bind(this.likeRectangle), this.likeRectangle.setOptions = this.likeRectangleSetOptions.bind(this);
  }
  likeRectangleSetOptions(e) {
    var i, a;
    const { rotatable: n } = zt(zt({}, this.opts), e || {});
    this.likeRectangleRawSetOptions(e), n ? (this.opts.rotatable = !0, this.registerRotatable()) : (this.opts.rotatable = !1, (a = (i = this.rotatableIns) == null ? void 0 : i.close) == null || a.call(i), this.rotatableIns = null);
  }
  destroy() {
    var e, n;
    (n = (e = this.rotatableIns) == null ? void 0 : e.close) == null || n.call(e), this.likeRectangleDestroy();
  }
  registerRotatable() {
    const { rotatable: e, rotationOptions: n } = this.opts;
    if (!e || this.rotatableIns)
      return;
    this.rotatableIns = new s1(this.likeRectangle, n);
    const i = this.likeRectangle;
    this.rotatableIns.on("rotateStart", (a) => i.emit("rotateStart", a)), this.rotatableIns.on("rotate", (a) => i.emit("rotate", a)), this.rotatableIns.on("rotateEnd", (a) => i.emit("rotateEnd", a));
  }
  calcPoints(e) {
    const [n, i] = e || this.center, a = new AMap.LngLat(n, i), o = Wa(this.width / 2), s = Wa(this.height / 2), u = a.offset(-o, s), l = a.offset(o, s), f = a.offset(-o, -s), c = a.offset(o, -s);
    return {
      leftTop: [u.lng, u.lat],
      rightTop: [l.lng, l.lat],
      leftBottom: [f.lng, f.lat],
      rightBottom: [c.lng, c.lat]
    };
  }
  setCenter(e) {
    this.center = e;
  }
  setPoints() {
    const { leftTop: e, rightTop: n, leftBottom: i, rightBottom: a } = this.calcPoints();
    this.leftTop = e, this.rightTop = n, this.leftBottom = i, this.rightBottom = a;
  }
  create() {
    var n, i, a;
    const e = ((n = this.opts) == null ? void 0 : n.path) || [this.leftTop, this.rightTop, this.rightBottom, this.leftBottom];
    if (e.length !== 4)
      throw new Error("invalid path");
    if (this.likeRectangle = new AMap.Polygon(), this.likeRectangle.setOptions(zt({ path: e }, this.opts)), this.enhanceProperty(), this.registryEvent(), (i = this.opts) != null && i.path) {
      const [o, s, u, l] = (a = this.opts) == null ? void 0 : a.path;
      this.updatePoints(o, s, u, l);
    }
    return this.likeRectangle;
  }
  enhanceProperty() {
    this.likeRectangle.likeRectangle = this, this.likeRectangle.leftTop = this.leftTop, this.likeRectangle.rightTop = this.rightTop, this.likeRectangle.rightBottom = this.rightBottom, this.likeRectangle.leftBottom = this.leftBottom, this.likeRectangle.rotatable = this.opts.rotatable;
  }
  registryEvent() {
    this.likeRectangle && (this.onDragEnd = this.onDragEnd.bind(this), this.likeRectangle.on("dragend", this.onDragEnd));
  }
  onDragEnd(e) {
    const i = e.target.getPath(), [a, o, s, u] = i;
    this.updatePoints(a, o, s, u);
  }
  updatePoints(e, n, i, a) {
    this.likeRectangle.leftTop = this.leftTop = e, this.likeRectangle.rightTop = this.rightTop = n, this.likeRectangle.rightBottom = this.rightBottom = i, this.likeRectangle.leftBottom = this.leftBottom = a, this.setCenter(this.getCenter());
  }
  getCenter() {
    var n;
    return (n = this.map.getFitZoomAndCenterByOverlays([this.likeRectangle])) == null ? void 0 : n.pop();
  }
}
class l1 {
  constructor(r, e, n) {
    A(this, "point");
    A(this, "points");
    A(this, "center");
    A(this, "editor");
    A(this, "isEnabled", !1);
    this.editor = r, this.point = e, this.points = n, this.init(), this.clearClientEvent();
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
  setCursorPointer(r) {
    var e;
    (e = this.point) == null || e.setOptions({ cursor: r });
  }
  init() {
    this.center = this.point.getCenter(), this.onMouseOver = this.onMouseOver.bind(this), this.onMouseOut = this.onMouseOut.bind(this), this.onDragStart = this.onDragStart.bind(this), this.onDragging = this.onDragging.bind(this), this.onDragEnd = this.onDragEnd.bind(this), this.defaultRegistryEvent();
  }
  clearClientEvent() {
    this.point.clearEvents("click");
  }
  defaultRegistryEvent() {
    const r = this.editor.isMobile;
    let e = r ? "touchstart" : "mouseover", n = r ? "touchend" : "mouseout";
    this.point.on(e, this.onMouseOver), this.point.on(n, this.onMouseOut);
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
      const r = setTimeout(() => {
        clearTimeout(r), this.disable();
      }, 4);
    } else
      this.disable();
  }
  onDragStart(r) {
    this.editor.onDragStart(r);
  }
  onDragging(r) {
    const { pixel: e } = r;
    this.updateNextLeftPoint(e, r), this.updateNextRightPoint(e, r), this.editor.onDragging(r);
  }
  onDragEnd(r) {
    const { target: e, pixel: n } = r;
    this.updateNextLeftPoint(n, r), this.updateNextRightPoint(n, r), this.center = e.getCenter(), this.editor.onDragEnd(r);
  }
  /**
   * 更新下一个左节点位置
   */
  updateNextLeftPoint(r, e) {
    const n = this.idx - 1 >= 0 ? this.idx - 1 : this.len, i = this.points[n], a = this.map.lngLatToContainer(i.getCenter()), o = n - 1 >= 0 ? n - 1 : this.len, s = this.points[o], u = this.map.lngLatToContainer(s.getCenter());
    let l = (u.y - a.y) / (u.x - a.x);
    l = Math.abs(l) < ji ? 0 : l;
    const f = u.y - l * u.x, c = -1 / l, v = r.y - c * r.x, p = Number.isNaN(l) || !Wt(l) || Xt(l) || Number.isNaN(c) || !Wt(c) || Xt(c) || Number.isNaN(f) || !Wt(f) || Xt(f) || Number.isNaN(v) || !Wt(v) || Xt(v);
    let d;
    l === 0 ? d = r.x : p ? d = a.x : d = (v - f) / (l - c);
    let h;
    l === 0 ? h = a.y : p ? h = r.y : h = l * d + f;
    const g = new AMap.Pixel(d, h);
    this.dispatch(i, g, e.originEvent);
  }
  /**
   * 更新下一个右节点位置
   */
  updateNextRightPoint(r, e) {
    const n = this.idx + 1 <= this.len ? this.idx + 1 : 0, i = this.points[n], a = this.map.lngLatToContainer(i.getCenter()), o = n + 1 <= this.len ? n + 1 : 0, s = this.points[o], u = this.map.lngLatToContainer(s.getCenter());
    let l = (u.y - a.y) / (u.x - a.x);
    l = Math.abs(l) < ji ? 0 : l;
    const f = u.y - l * u.x, c = -1 / l, v = r.y - c * r.x, p = Number.isNaN(l) || !Wt(l) || Xt(l) || Number.isNaN(c) || !Wt(c) || Xt(c) || Number.isNaN(f) || !Wt(f) || Xt(f) || Number.isNaN(v) || !Wt(v) || Xt(v);
    let d;
    l === 0 ? d = r.x : p ? d = a.x : d = (v - f) / (l - c);
    let h;
    l === 0 ? h = a.y : p ? h = r.y : h = l * d + f;
    const g = new AMap.Pixel(d, h);
    this.dispatch(i, g, e.originEvent);
  }
  dispatch(r, e, n) {
    const a = {
      lnglat: this.map.containerToLngLat(e),
      originEvent: n
      // 这里的鼠标事件直接透传即可
    };
    r.emit("dragend", a);
  }
}
const f1 = {
  rotatingCloseEditor: !0,
  editingCloseRotator: !0,
  isMobile: !1
};
class c1 {
  constructor(r, e, n) {
    A(this, "opts");
    A(this, "map");
    A(this, "likeRectangle");
    A(this, "polygonEditor");
    A(this, "polygonEditorOpen");
    A(this, "polygonEditorClose");
    A(this, "controlPoints");
    A(this, "inEditing", !1);
    A(this, "isRestart", !1);
    A(this, "onDragStart", (r) => {
      var e, n;
      (n = (e = this.rotatableIns) == null ? void 0 : e.close) == null || n.call(e), this.onChange("dragstart", r);
    });
    A(this, "onDragging", (r) => {
      this.updateLikeRectanglePath(), this.onChange("dragging", r);
    });
    A(this, "onDragEnd", (r) => {
      var e, n;
      (n = (e = this.rotatableIns) == null ? void 0 : e.open) == null || n.call(e), this.onChange("dragend", r);
    });
    A(this, "onChange", (r, e) => {
      var n, i;
      (i = (n = this.opts) == null ? void 0 : n.onChange) == null || i.call(n, r, e);
    });
    A(this, "onRotateStart", () => gr(this, null, function* () {
      this.inEditing && this.polygonEditorClose();
    }));
    A(this, "onRotateEnd", () => gr(this, null, function* () {
      this.inEditing && this.open();
    }));
    return this.map = r, this.likeRectangle = e, this.opts = zt(zt({}, f1), n || {}), this.onChange = this.onChange.bind(this), this.createEditor();
  }
  get options() {
    return Hn(zt({}, this.opts), {
      midControlPoint: { radius: 0 }
    });
  }
  get rotatable() {
    var r, e, n;
    return (n = (e = (r = this.likeRectangle) == null ? void 0 : r.likeRectangle) == null ? void 0 : e.opts) == null ? void 0 : n.rotatable;
  }
  get rotatingCloseEditor() {
    return this.opts.rotatingCloseEditor;
  }
  get rotatableIns() {
    var r, e;
    return (e = (r = this.likeRectangle) == null ? void 0 : r.likeRectangle) == null ? void 0 : e.rotatableIns;
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
  findControlPoint(r) {
    return this.controlPoints.find((e) => {
      const n = e.point.getCenter(), i = `${n.lng}_${n.lat}`, a = r.getCenter(), o = `${a.lng}_${a.lat}`;
      return i === o;
    });
  }
  createEditor() {
    const r = this.likeRectangle;
    return this.polygonEditor = new AMap.PolygonEditor(this.map, r, this.options), this.enhanceProperty(), this.polygonEditor;
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
    var e, n, i, a;
    const r = (a = (i = (n = (e = this.polygonEditor) == null ? void 0 : e.singleRingListHandle) == null ? void 0 : n.list) == null ? void 0 : i.editingVertexMarkerList) != null ? a : [];
    this.controlPoints = r.map((o, s) => {
      const u = o.getExtData() || {};
      return o.setExtData(Hn(zt({}, u), { idx: s })), new l1(this, o, r);
    });
  }
  updateLikeRectanglePath() {
    const [
      r,
      e,
      n,
      i
    ] = this.controlPoints, a = r.point.getCenter(), o = e.point.getCenter(), s = n.point.getCenter(), u = i.point.getCenter();
    this.likeRectangle.likeRectangle.updatePoints(
      [a.lng, a.lat],
      [o.lng, o.lat],
      [s.lng, s.lat],
      [u.lng, u.lat]
    );
  }
}
const d1 = {
  PolygonRangingInDrawing: Ul,
  PolygonEditorRanging: Ld,
  PolygonEditorEvent: Nd,
  PolygonRanging: Fd,
  LikeRectangle: u1,
  LikeRectangleEditor: c1
};
export {
  u1 as LikeRectangle,
  c1 as LikeRectangleEditor,
  Nd as PolygonEditorEvent,
  Ld as PolygonEditorRanging,
  Fd as PolygonRanging,
  Ul as PolygonRangingInDrawing,
  d1 as default
};
