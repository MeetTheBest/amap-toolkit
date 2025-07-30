var ht = Object.defineProperty, lt = Object.defineProperties;
var ct = Object.getOwnPropertyDescriptors;
var K = Object.getOwnPropertySymbols;
var gt = Object.prototype.hasOwnProperty, ut = Object.prototype.propertyIsEnumerable;
var O = (n, e, t) => e in n ? ht(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, m = (n, e) => {
  for (var t in e || (e = {}))
    gt.call(e, t) && O(n, t, e[t]);
  if (K)
    for (var t of K(e))
      ut.call(e, t) && O(n, t, e[t]);
  return n;
}, A = (n, e) => lt(n, ct(e));
var r = (n, e, t) => (O(n, typeof e != "symbol" ? e + "" : e, t), t);
var x = (n, e, t) => new Promise((i, o) => {
  var s = (c) => {
    try {
      h(t.next(c));
    } catch (l) {
      o(l);
    }
  }, a = (c) => {
    try {
      h(t.throw(c));
    } catch (l) {
      o(l);
    }
  }, h = (c) => c.done ? i(c.value) : Promise.resolve(c.value).then(s, a);
  h((t = t.apply(n, e)).next());
});
const dt = {
  "border-color": "#e1f5fe",
  "font-size": "12px",
  "border-radius": ".25rem",
  "background-color": "rgba(0,0,0,.4)",
  "border-width": 0,
  "text-align": "center",
  color: "#fff"
}, S = () => Math.random().toString(16).substring(2), Y = (n, e = 2) => Number.isNaN(+n) ? n : +n.toFixed(Math.max(e, 0)), v = (n) => Math.abs(n) > Number.MAX_SAFE_INTEGER, L = (n = "", e = {}) => new AMap.Text({ text: n, style: m(m({}, dt), e), offset: [0, -10] }), k = (n, e) => {
  const t = n.divideBy(2).add(e.divideBy(2));
  return { text: `${Math.round(n.distance(e))}米`, textPos: t };
};
let pt = class {
  constructor(e) {
    r(this, "map");
    // 开始点位到鼠标位置的文本
    r(this, "startPointToCursorText", null);
    // 最后一次点位到鼠标位置的文本
    r(this, "lastPointToCursorText", null);
    // 起始点位
    r(this, "startPosition", null);
    // 上次点击点位
    r(this, "lastPosition", null);
    /**
     * 点图点击事件
     * @param {MapEvent} event
     */
    r(this, "getClickPosition", (e) => {
      const t = e.lnglat;
      this.startPosition ? this.startPosition && (this.lastPosition = t, this.createDistanceText()) : this.startPosition = t;
    });
    /**
     * 获取新增围栏时，鼠标移动位置
     * @param {*} event
     */
    r(this, "onMouseMoveInDrawPolygon", (e) => {
      if (!this.startPosition || !this.lastPosition)
        return;
      const t = e.lnglat;
      this.updateDistanceText(
        this.startPointToCursorText,
        k(this.startPosition, t)
      ), this.updateDistanceText(
        this.lastPointToCursorText,
        k(this.lastPosition, t)
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
    this.startPointToCursorText && this.lastPointToCursorText || (this.startPointToCursorText = L(), this.startPointToCursorText.setMap(this.map), this.lastPointToCursorText = L(), this.lastPointToCursorText.setMap(this.map));
  }
  updateDistanceText(e, { text: t, textPos: i }) {
    e.setText(t), e.setPosition(i);
  }
  removeDistanceText() {
    var e, t;
    (e = this.startPointToCursorText) == null || e.remove(), this.startPointToCursorText = null, (t = this.lastPointToCursorText) == null || t.remove(), this.lastPointToCursorText = null;
  }
  reset() {
    return this.startPosition = null, this.lastPosition = null, this.removeDistanceText(), this;
  }
  destroy() {
    return this.reset(), this.stop(), this;
  }
};
function ft(n) {
  return Array.isArray(n) ? Array.from(new Set(n)) : [];
}
function M(n) {
  return typeof n != "number" ? !1 : Number.isFinite(n);
}
function G(n, e, t) {
  if (n == null)
    return t;
  const i = Array.isArray(e) ? e : e.split(/\.|\[|\]/).filter(Boolean);
  let o = n;
  for (const s of i) {
    if (o == null)
      return t;
    o = o[s];
  }
  return o === void 0 ? t : o;
}
function mt(n, e) {
  if (n == null)
    return {};
  const t = m({}, n), i = Array.isArray(e) ? e : [e];
  for (const o of i)
    delete t[o];
  return t;
}
const X = {
  radius: 6,
  zIndex: 0,
  strokeOpacity: 0,
  fillOpacity: 0
};
class _ {
  constructor(e) {
    r(this, "map");
    r(this, "options", m({}, X));
    r(this, "circleMarkers", []);
    this.map = e;
  }
  setOptions(e) {
    return this.options = m(m({}, e), mt(X, "radius")), this;
  }
  createCircleMarkersByPaths(e) {
    this.removeFromTheMap(), this.reset(), e.forEach((t) => {
      this.circleMarkers.push(this.createCircleMarker(t));
    }), this.addToMap();
  }
  createCircleMarker(e) {
    return new AMap.CircleMarker(m({ center: e }, this.options));
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
    var t;
    return (t = this.circleMarkers.find((i) => this.isPointInCircle(e, i))) != null ? t : null;
  }
  /**
   * 获取点是否在围栏编辑器的蓝色操作点上（即中间点）
   * @param {*} pos
   * @returns
   */
  getInCircleMarkersPoint(e) {
    const t = this.circleMarkers.find((o) => this.isPointInCircle(e, o));
    return this.circleMarkers.findIndex((o) => o === t) % 2 === 0 ? null : t != null ? t : null;
  }
  isPointInCircle(e, t) {
    return t.contains(e);
  }
  reset() {
    this.circleMarkers = [];
  }
  destroy() {
    this.removeFromTheMap(), this.reset();
  }
}
const q = {
  zIndex: 1,
  strokeColor: "#00D3FC",
  strokeWeight: 8,
  strokeOpacity: 0
};
class V {
  constructor(e) {
    r(this, "map");
    r(this, "linesPath", []);
    r(this, "lines", []);
    if (!e)
      throw new Error("map not found");
    this.map = e;
  }
  getLinesByPaths(e) {
    let t = 0;
    const i = e.length;
    for (; t < i; ) {
      const o = t + 1 >= i ? 0 : t + 1;
      this.linesPath.push([e[t], e[o]]), t++;
    }
    return this.linesPath;
  }
  createLinesByPaths(e) {
    this.reset(), this.getLinesByPaths(e);
  }
  createPolyLine(e) {
    return new AMap.Polyline(m({ path: e }, q));
  }
  addToMap() {
    this.map.add(this.lines);
  }
  removeFromTheMap() {
    this.map.remove(this.lines);
  }
  getPointInPolyline(e) {
    const t = this.map.getResolution(), i = q.strokeWeight * t;
    return this.linesPath.find(
      (s) => AMap.GeometryUtil.isPointOnSegment(e, s[0], s[1], i)
    );
  }
  reset() {
    this.linesPath = [], this.lines = [];
  }
}
class yt {
  constructor(e, t) {
    r(this, "map");
    // 实点
    r(this, "circleMarkers", null);
    // 中间点
    r(this, "midCircleMarkers", null);
    // 线集合
    r(this, "lines", null);
    // 编辑器
    r(this, "polygonEditor", null);
    // 多边形路径
    r(this, "polygonPaths", []);
    // 多边形全部路径（包括中间虚电）
    r(this, "polygonTotalPaths", []);
    // 多边形
    r(this, "polygon", null);
    // 开始点位到鼠标位置的文本
    r(this, "startPointToCursorText", null);
    // 最后一次点位到鼠标位置的文本
    r(this, "lastPointToCursorText", null);
    // 线长的文本呢
    r(this, "lineLengthText", null);
    // 操作点
    r(this, "circleMarker", null);
    // 操作中间点
    r(this, "midCircleMarker", null);
    // 起始点位
    r(this, "startPosition", null);
    // 上次点击点位
    r(this, "lastPosition", null);
    // 兜底设置编辑中间点标记列表路径
    r(this, "editingMidTipMarkerListPath", null);
    r(this, "onPolygonEditorAdjust", ({ target: e }) => {
      this.polygonPaths = e.getPath(), this.circleMarkers.createCircleMarkersByPaths(this.polygonPaths), this.lines.createLinesByPaths(this.polygonPaths), Promise.resolve().then(() => {
        this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths(), this.midCircleMarkers.createCircleMarkersByPaths(this.polygonTotalPaths);
      }), this.reset();
    });
    r(this, "onMouseDown", (e) => {
      const t = e.lnglat;
      this.circleMarker = this.circleMarkers.getPointInCircleMarkers(t), this.midCircleMarker = this.midCircleMarkers.getInCircleMarkersPoint(t);
    });
    r(this, "onMovePolygonEditorPoint", (e) => {
      if (this.midCircleMarker)
        return;
      if (!this.circleMarker) {
        this.reset();
        return;
      }
      const t = this.circleMarker.getCenter(), i = (g) => `${g.lng}-${g.lat}`;
      let o = this.polygonPaths.findIndex((g) => i(g) === i(t));
      if (o === -1)
        return;
      const s = this.polygonPaths.length, a = o - 1 <= -1 ? s - 1 : o - 1, h = o + 1 >= s ? 0 : o + 1, c = this.polygonPaths.at(a), l = this.polygonPaths.at(h);
      this.setPosition(c, l), this.onMouseMoveInDrawPolygon(e);
    });
    r(this, "onMovePolygonEditorMidPoint", (e) => {
      if (this.circleMarker)
        return;
      if (!this.midCircleMarker) {
        this.reset();
        return;
      }
      const t = this.midCircleMarker.getCenter(), i = (g) => `${g.lng}-${g.lat}`;
      let o = this.polygonTotalPaths.findIndex((g) => i(g) === i(t));
      if (o === -1)
        return;
      const s = this.polygonTotalPaths.length, a = o - 1 <= -1 ? s - 1 : o - 1, h = o + 1 >= s ? 0 : o + 1, c = this.polygonTotalPaths.at(a), l = this.polygonTotalPaths.at(h);
      this.setPosition(c, l), this.onMouseMoveInDrawPolygon(e);
    });
    r(this, "onMouseUp", () => {
      this.circleMarker = null, this.midCircleMarker = null, this.reset();
    });
    r(this, "onInPolygonEditorLine", (e) => {
      if (this.circleMarker)
        return this.removeLineDistanceText();
      const t = e.lnglat, i = this.lines.getPointInPolyline(t);
      if (!i)
        return this.removeLineDistanceText();
      const [o, s] = i;
      this.lineLengthText || (this.lineLengthText = L(), this.lineLengthText.add(this.map)), this.updateDistanceText(this.lineLengthText, k(o, s));
    });
    /**
     * 获取新增围栏时，鼠标移动位置
     * @param {*} event
     */
    r(this, "onMouseMoveInDrawPolygon", (e) => {
      if (!this.startPosition || !this.lastPosition)
        return;
      const t = e.lnglat;
      this.updateDistanceText(
        this.startPointToCursorText,
        k(this.startPosition, t)
      ), this.updateDistanceText(
        this.lastPointToCursorText,
        k(this.lastPosition, t)
      );
    });
    if (!e)
      throw new Error("map not found!");
    this.map = e, t && (this.polygonEditor = t), this.circleMarkers = new _(this.map), this.midCircleMarkers = new _(this.map), this.lines = new V(this.map);
  }
  /**
   * 获取编辑器目标多边形路径
   * @returns
   */
  getPolygonEditorTargetPaths() {
    var e, t, i;
    return this.polygonEditor ? (i = (t = (e = this.polygonEditor) == null ? void 0 : e.getTarget) == null ? void 0 : t.call(e).getPath()) != null ? i : [] : [];
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
    var t, i;
    const { singleRingListHandle: e } = this.polygonEditor;
    if (this.editingMidTipMarkerListPath) {
      if (typeof this.editingMidTipMarkerListPath == "function")
        return this.editingMidTipMarkerListPath(this.polygonEditor);
      if (typeof this.editingMidTipMarkerListPath == "string")
        return G(this.polygonEditor, this.editingMidTipMarkerListPath);
    }
    return (t = this.polygonEditor.editingMidTipMarkerList) != null && t.length ? this.polygonEditor.editingMidTipMarkerList : e ? (i = e == null ? void 0 : e.list) == null ? void 0 : i.editingMidTipMarkerList : [];
  }
  /**
   * 获取编辑围栏所有点位（白色操作点+蓝色中间操作点）
   * @returns
   */
  getPolygonEditorTargetTotalPaths() {
    const e = this.getPolygonEditorTargetPaths(), t = this.getEditingMidTipMarkerList();
    let i = 0;
    const o = [], s = e.length;
    for (; i < s; ) {
      o.push(e[i]);
      const a = t[i];
      a && o.push(a.getCenter()), i++;
    }
    return o;
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
    var o, s, a;
    if (!e && !this.polygonEditor)
      throw new Error("polygonEditor not found");
    this.polygonEditor = e;
    const { controlPoint: t, midControlPoint: i } = this.polygonEditor;
    return this.polygonPaths = this.getPolygonEditorTargetPaths(), this.circleMarkers.setOptions(t).createCircleMarkersByPaths(this.polygonPaths), this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths(), this.midCircleMarkers.setOptions(i).createCircleMarkersByPaths(this.polygonTotalPaths), this.lines.createLinesByPaths(this.polygonPaths), (o = this.polygonEditor) == null || o.on("adjust", this.onPolygonEditorAdjust), (s = this.polygonEditor) == null || s.on("removenode", this.onPolygonEditorAdjust), (a = this.polygonEditor) == null || a.on("addnode", this.onPolygonEditorAdjust), this.map.on("mousedown", this.onMouseDown), this.map.on("touchstart", this.onMouseDown), this.map.on("mousemove", this.onMovePolygonEditorPoint), this.map.on("touchmove", this.onMovePolygonEditorPoint), this.map.on("mousemove", this.onMovePolygonEditorMidPoint), this.map.on("touchmove", this.onMovePolygonEditorMidPoint), this.map.on("mousemove", this.onInPolygonEditorLine), this.map.on("touchmove", this.onInPolygonEditorLine), this.map.on("mouseup", this.onMouseUp), this.map.on("touchend", this.onMouseUp), this;
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
    var e, t, i;
    (e = this.polygonEditor) == null || e.off("adjust", this.onPolygonEditorAdjust), (t = this.polygonEditor) == null || t.off("removenode", this.onPolygonEditorAdjust), (i = this.polygonEditor) == null || i.off("addnode", this.onPolygonEditorAdjust), this.map.off("mousedown", this.onMouseDown), this.map.off("touchstart", this.onMouseDown), this.map.off("mousemove", this.onMovePolygonEditorPoint), this.map.off("touchmove", this.onMovePolygonEditorPoint), this.map.off("mousemove", this.onMovePolygonEditorMidPoint), this.map.off("touchmove", this.onMovePolygonEditorMidPoint), this.map.off("mousemove", this.onInPolygonEditorLine), this.map.off("touchmove", this.onInPolygonEditorLine), this.map.off("mouseup", this.onMouseUp), this.map.off("touchend", this.onMouseUp);
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
  setPosition(e, t) {
    this.startPosition = e, this.lastPosition = t, this.createDistanceText();
  }
  /**
   * 创建距离文本
   * @returns
   */
  createDistanceText() {
    this.startPointToCursorText && this.lastPointToCursorText || (this.startPointToCursorText = L(), this.lastPointToCursorText = L(), this.startPointToCursorText.setMap(this.map), this.lastPointToCursorText.setMap(this.map));
  }
  updateDistanceText(e, { text: t, textPos: i }) {
    e.setText(t), e.setPosition(i);
  }
  removeLineDistanceText() {
    var e;
    (e = this.lineLengthText) == null || e.remove(), this.lineLengthText = null;
  }
  removeDistanceText() {
    var e, t;
    (e = this.startPointToCursorText) == null || e.remove(), (t = this.lastPointToCursorText) == null || t.remove(), this.startPointToCursorText = null, this.lastPointToCursorText = null;
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
class Pt {
  constructor(e, t) {
    r(this, "opts");
    r(this, "map");
    // 线集合
    r(this, "lines", null);
    // 多边形
    r(this, "polygon", null);
    // 线长的文本呢
    r(this, "lineLengthText", null);
    // 兜底设置编辑中间点标记列表路径
    r(this, "editingMidTipMarkerListPath", null);
    r(this, "onPolygonRanging", (e) => {
      const t = e.lnglat, i = this.lines.getPointInPolyline(t);
      if (!i)
        return this.removeLineDistanceText();
      const [o, s] = i;
      this.lineLengthText || (this.lineLengthText = L(), this.lineLengthText.add(this.map)), this.updateDistanceText(this.lineLengthText, k(o, s));
    });
    /**
    * 拖拽结束后，需要重新计算一下点位数据
    */
    r(this, "onRotateEndEnd", () => x(this, null, function* () {
      yield Promise.resolve();
      const e = this.polygon;
      this.onDragEnd({ target: e });
    }));
    /**
     * 拖拽结束后，需要重新计算一下点位数据
     */
    r(this, "onDragEnd", (e) => x(this, null, function* () {
      var i;
      const t = e.target;
      (i = this.lines) == null || i.reset(), yield Promise.resolve(), this.lines.createLinesByPaths(t.getPath());
    }));
    if (!e)
      throw new Error("map not found!");
    this.opts = t, this.map = e, this.lines = new V(this.map), this.immediateActive();
  }
  get immediate() {
    var e;
    return (e = this.opts) == null ? void 0 : e.immediate;
  }
  get draggable() {
    var t;
    return ((t = this.polygon) == null ? void 0 : t.getOptions()).draggable;
  }
  get rotatable() {
    var e;
    return (e = this.polygon) == null ? void 0 : e.rotatable;
  }
  /**
   * 立刻激活
   */
  immediateActive() {
    var t;
    const e = (t = this.opts) == null ? void 0 : t.target;
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
    var e, t, i, o;
    this.polygon && ((t = (e = this.polygon).off) == null || t.call(e, "dragend", this.onDragEnd), (o = (i = this.polygon).off) == null || o.call(i, "rotateEnd", this.onRotateEndEnd));
  }
  close() {
    this.stop();
  }
  stop() {
    this.map.off("mousemove", this.onPolygonRanging);
  }
  updateDistanceText(e, { text: t, textPos: i }) {
    e.setText(t), e.setPosition(i);
  }
  removeLineDistanceText() {
    var e;
    (e = this.lineLengthText) == null || e.remove(), this.lineLengthText = null;
  }
  destroy() {
    return this.stop(), this.removeLineDistanceText(), this.destroyPolygonEvents(), this.polygon = null, this;
  }
}
class $ {
  constructor() {
    r(this, "events", {});
  }
  getEvents(e) {
    return this.events[e] || (this.events[e] = []), this.events[e];
  }
  emit(e, ...t) {
    this.getEvents(e).forEach((o) => o(...t));
  }
  on(e, t) {
    !e || typeof e != "string" || this.getEvents(e).push(t);
  }
  once(e, t) {
    if (!e || typeof e != "string")
      return;
    const i = (o) => {
      t(o), this.off(e, i);
    };
    this.on(e, i);
  }
  off(e, t) {
    if (!(!e || typeof e != "string")) {
      if (!t)
        return this.clearEvents(e);
      this.events[e] = this.getEvents(e).filter((i) => i !== t);
    }
  }
  hasEvents(e, t) {
    return !!this.getEvents(e).find((i) => i === t);
  }
  clearEvents(e) {
    e ? this.events[e] = [] : this.events = {};
  }
}
class vt extends $ {
  constructor(t) {
    super();
    r(this, "map");
    // 全部点
    r(this, "circleMarkers", null);
    // 编辑器
    r(this, "polygonEditor", null);
    // 多边形全部路径（包括中间点）
    r(this, "polygonTotalPaths", []);
    // 操作点
    r(this, "circleMarker", null);
    // 兜底设置编辑中间点标记列表路径
    r(this, "editingMidTipMarkerListPath", null);
    r(this, "onPolygonEditorAdjust", () => {
      Promise.resolve().then(() => {
        this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths(), this.circleMarkers.createCircleMarkersByPaths(this.polygonTotalPaths);
      });
    });
    r(this, "onMouseDown", (t) => {
      const i = t.lnglat;
      this.circleMarker = this.circleMarkers.getPointInCircleMarkers(i), !(!this.circleMarker || !this.getEvents("mousedown").length) && this.emit("mousedown", this.circleMarker);
    });
    r(this, "onMouseMove", (t) => {
      !this.circleMarker || !this.getEvents("mousemove").length || this.emit("mousemove", this.circleMarker, t);
    });
    // private onMouseOut = (event: Common.Event) => {
    //     if (!this.circleMarker) return;
    //     const events = this.getEvents('mouseout');
    //     if (!events.length) return;
    //     this.emit('mouseout', this.circleMarker, event);
    // };
    r(this, "onMouseUp", () => {
      !this.getEvents("mouseup").length || !this.circleMarker || (this.emit("mouseup", this.circleMarker), this.circleMarker = null);
    });
    this.map = t.map, this.polygonEditor = t, this.circleMarkers = new _(this.map), this.open(this.polygonEditor);
  }
  /**
   * 获取编辑器目标多边形路径
   * @returns
   */
  getPolygonEditorTargetPaths() {
    var t;
    return this.polygonEditor ? (t = this.polygonEditor.getTarget().getPath()) != null ? t : [] : [];
  }
  /**
   *
   */
  setEditingMidTipMarkerListPath(t) {
    return this.editingMidTipMarkerListPath = t, this;
  }
  /**
   * 获取编辑中间点标记列表
   * @returns
   */
  getEditingMidTipMarkerList() {
    var i, o;
    const { singleRingListHandle: t } = this.polygonEditor;
    if (this.editingMidTipMarkerListPath) {
      if (typeof this.editingMidTipMarkerListPath == "function")
        return this.editingMidTipMarkerListPath(this.polygonEditor);
      if (typeof this.editingMidTipMarkerListPath == "string")
        return G(this.polygonEditor, this.editingMidTipMarkerListPath);
    }
    return (i = this.polygonEditor.editingMidTipMarkerList) != null && i.length ? this.polygonEditor.editingMidTipMarkerList : t ? (o = t == null ? void 0 : t.list) == null ? void 0 : o.editingMidTipMarkerList : [];
  }
  /**
   * 获取编辑围栏所有点位（白色操作点+蓝色中间操作点）
   * @returns
   */
  getPolygonEditorTargetTotalPaths() {
    const t = this.getPolygonEditorTargetPaths(), i = this.getEditingMidTipMarkerList();
    let o = 0;
    const s = [], a = t.length;
    for (; o < a; ) {
      s.push(t[o]);
      const h = i[o];
      h && s.push(h.getCenter()), o++;
    }
    return s;
  }
  /**
  * 注册多边形编辑器，可操作点位事件
  */
  open(t) {
    this.start(t);
  }
  /**
   * 注册多边形编辑器，可操作点位事件
   */
  start(t) {
    var o, s, a;
    if (!t && !this.polygonEditor)
      throw new Error("polygonEditor not found");
    this.polygonEditor = t;
    const { midControlPoint: i } = this.polygonEditor;
    return this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths(), this.circleMarkers.setOptions(i).createCircleMarkersByPaths(this.polygonTotalPaths), (o = this.polygonEditor) == null || o.on("adjust", this.onPolygonEditorAdjust), (s = this.polygonEditor) == null || s.on("removenode", this.onPolygonEditorAdjust), (a = this.polygonEditor) == null || a.on("addnode", this.onPolygonEditorAdjust), this.map.on("mousedown", this.onMouseDown), this.map.on("mousemove", this.onMouseMove), this.map.on("mouseup", this.onMouseUp), this;
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
var Mt = Object.defineProperty, Et = (n, e, t) => e in n ? Mt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, T = (n, e, t) => (Et(n, typeof e != "symbol" ? e + "" : e, t), t);
function Tt(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var j = { exports: {} }, R = typeof Reflect == "object" ? Reflect : null, z = R && typeof R.apply == "function" ? R.apply : function(n, e, t) {
  return Function.prototype.apply.call(n, e, t);
}, w;
R && typeof R.ownKeys == "function" ? w = R.ownKeys : Object.getOwnPropertySymbols ? w = function(n) {
  return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n));
} : w = function(n) {
  return Object.getOwnPropertyNames(n);
};
var Z = Number.isNaN || function(n) {
  return n !== n;
};
function u() {
  u.init.call(this);
}
j.exports = u;
j.exports.once = Rt;
u.EventEmitter = u;
u.prototype._events = void 0;
u.prototype._eventsCount = 0;
u.prototype._maxListeners = void 0;
var H = 10;
function D(n) {
  if (typeof n != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
}
Object.defineProperty(u, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return H;
  },
  set: function(n) {
    if (typeof n != "number" || n < 0 || Z(n))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + n + ".");
    H = n;
  }
});
u.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
u.prototype.setMaxListeners = function(n) {
  if (typeof n != "number" || n < 0 || Z(n))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
  return this._maxListeners = n, this;
};
function J(n) {
  return n._maxListeners === void 0 ? u.defaultMaxListeners : n._maxListeners;
}
u.prototype.getMaxListeners = function() {
  return J(this);
};
u.prototype.emit = function(n) {
  for (var e = [], t = 1; t < arguments.length; t++)
    e.push(arguments[t]);
  var i = n === "error", o = this._events;
  if (o !== void 0)
    i = i && o.error === void 0;
  else if (!i)
    return !1;
  if (i) {
    var s;
    if (e.length > 0 && (s = e[0]), s instanceof Error)
      throw s;
    var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
    throw a.context = s, a;
  }
  var h = o[n];
  if (h === void 0)
    return !1;
  if (typeof h == "function")
    z(h, this, e);
  else
    for (var c = h.length, l = ot(h, c), t = 0; t < c; ++t)
      z(l[t], this, e);
  return !0;
};
function Q(n, e, t, i) {
  var o, s, a;
  if (D(t), s = n._events, s === void 0 ? (s = n._events = /* @__PURE__ */ Object.create(null), n._eventsCount = 0) : (s.newListener !== void 0 && (n.emit(
    "newListener",
    e,
    t.listener ? t.listener : t
  ), s = n._events), a = s[e]), a === void 0)
    a = s[e] = t, ++n._eventsCount;
  else if (typeof a == "function" ? a = s[e] = i ? [t, a] : [a, t] : i ? a.unshift(t) : a.push(t), o = J(n), o > 0 && a.length > o && !a.warned) {
    a.warned = !0;
    var h = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    h.name = "MaxListenersExceededWarning", h.emitter = n, h.type = e, h.count = a.length;
  }
  return n;
}
u.prototype.addListener = function(n, e) {
  return Q(this, n, e, !1);
};
u.prototype.on = u.prototype.addListener;
u.prototype.prependListener = function(n, e) {
  return Q(this, n, e, !0);
};
function xt() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function tt(n, e, t) {
  var i = { fired: !1, wrapFn: void 0, target: n, type: e, listener: t }, o = xt.bind(i);
  return o.listener = t, i.wrapFn = o, o;
}
u.prototype.once = function(n, e) {
  return D(e), this.on(n, tt(this, n, e)), this;
};
u.prototype.prependOnceListener = function(n, e) {
  return D(e), this.prependListener(n, tt(this, n, e)), this;
};
u.prototype.removeListener = function(n, e) {
  var t, i, o, s, a;
  if (D(e), i = this._events, i === void 0)
    return this;
  if (t = i[n], t === void 0)
    return this;
  if (t === e || t.listener === e)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[n], i.removeListener && this.emit("removeListener", n, t.listener || e));
  else if (typeof t != "function") {
    for (o = -1, s = t.length - 1; s >= 0; s--)
      if (t[s] === e || t[s].listener === e) {
        a = t[s].listener, o = s;
        break;
      }
    if (o < 0)
      return this;
    o === 0 ? t.shift() : Lt(t, o), t.length === 1 && (i[n] = t[0]), i.removeListener !== void 0 && this.emit("removeListener", n, a || e);
  }
  return this;
};
u.prototype.off = u.prototype.removeListener;
u.prototype.removeAllListeners = function(n) {
  var e, t, i;
  if (t = this._events, t === void 0)
    return this;
  if (t.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : t[n] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete t[n]), this;
  if (arguments.length === 0) {
    var o = Object.keys(t), s;
    for (i = 0; i < o.length; ++i)
      s = o[i], s !== "removeListener" && this.removeAllListeners(s);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (e = t[n], typeof e == "function")
    this.removeListener(n, e);
  else if (e !== void 0)
    for (i = e.length - 1; i >= 0; i--)
      this.removeListener(n, e[i]);
  return this;
};
function et(n, e, t) {
  var i = n._events;
  if (i === void 0)
    return [];
  var o = i[e];
  return o === void 0 ? [] : typeof o == "function" ? t ? [o.listener || o] : [o] : t ? kt(o) : ot(o, o.length);
}
u.prototype.listeners = function(n) {
  return et(this, n, !0);
};
u.prototype.rawListeners = function(n) {
  return et(this, n, !1);
};
u.listenerCount = function(n, e) {
  return typeof n.listenerCount == "function" ? n.listenerCount(e) : it.call(n, e);
};
u.prototype.listenerCount = it;
function it(n) {
  var e = this._events;
  if (e !== void 0) {
    var t = e[n];
    if (typeof t == "function")
      return 1;
    if (t !== void 0)
      return t.length;
  }
  return 0;
}
u.prototype.eventNames = function() {
  return this._eventsCount > 0 ? w(this._events) : [];
};
function ot(n, e) {
  for (var t = new Array(e), i = 0; i < e; ++i)
    t[i] = n[i];
  return t;
}
function Lt(n, e) {
  for (; e + 1 < n.length; e++)
    n[e] = n[e + 1];
  n.pop();
}
function kt(n) {
  for (var e = new Array(n.length), t = 0; t < e.length; ++t)
    e[t] = n[t].listener || n[t];
  return e;
}
function Rt(n, e) {
  return new Promise(function(t, i) {
    function o(a) {
      n.removeListener(e, s), i(a);
    }
    function s() {
      typeof n.removeListener == "function" && n.removeListener("error", o), t([].slice.call(arguments));
    }
    nt(n, e, s, { once: !0 }), e !== "error" && Ct(n, o, { once: !0 });
  });
}
function Ct(n, e, t) {
  typeof n.on == "function" && nt(n, "error", e, t);
}
function nt(n, e, t, i) {
  if (typeof n.on == "function")
    i.once ? n.once(e, t) : n.on(e, t);
  else if (typeof n.addEventListener == "function")
    n.addEventListener(e, function o(s) {
      i.once && n.removeEventListener(e, o), t(s);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof n);
}
var bt = j.exports;
const It = /* @__PURE__ */ Tt(bt), wt = (n = "uid") => `${n}_${Math.random().toString(16).substring(2)}`, Dt = (n, e = 2) => Number.isNaN(+n) ? n : +(+n).toFixed(e), W = "-26px";
class Ot extends It {
  constructor(e, t = {}) {
    if (super(), T(this, "centerPos", { x: 0, y: 0 }), T(this, "startPos", { x: 0, y: 0 }), T(this, "originRotate", 0), T(this, "target", null), T(this, "container"), T(this, "options"), T(this, "targetClassName", wt()), T(this, "isMobile", typeof window.orientation < "u" || "ontouchstart" in document.documentElement || /Mobi|Android|iPhone/i.test(navigator.userAgent)), T(this, "onMouseDown", (i) => {
      i.stopPropagation(), this.originRotate = 0, this.startPos = this.getClickPos(i), this.calcCenterPos();
      const o = this.container.style.transform, s = /rotate\((.*)deg\)/g;
      o.replace(
        s,
        (h, c) => (c = +c, this.originRotate += c)
      ), this.originRotate = (+this.originRotate || 0) % 360;
      const a = {
        event: i,
        target: this.container,
        rotate: this.originRotate
      };
      this.emit("rotateStart", a), this.isMobile ? (document.addEventListener("touchmove", this.onMouseMove, !1), document.addEventListener("touchend", this.onMouseUp, !1)) : (document.addEventListener("mousemove", this.onMouseMove, !1), document.addEventListener("mouseup", this.onMouseUp, !1));
    }), T(this, "onMouseMove", (i) => {
      const o = this.container.style.transform || "rotate(0deg)", s = this.getClickPos(i), a = Dt(
        (this.calcRotate(this.startPos, s) + this.originRotate) % 360
      ), h = /rotate\(.*deg\)/g, c = o.replace(
        h,
        () => `rotate(${a}deg)`
      );
      this.container.style.transform = c;
      const l = { event: i, target: this.container, rotate: a };
      this.emit("rotate", l);
    }), T(this, "onMouseUp", (i) => {
      const o = { event: i, target: this.container };
      this.emit("rotateEnd", o), this.isMobile ? (document.removeEventListener("touchmove", this.onMouseMove, !1), document.removeEventListener("touchend", this.onMouseUp, !1)) : (document.removeEventListener("mousemove", this.onMouseMove, !1), document.removeEventListener("mouseup", this.onMouseUp, !1));
    }), !e)
      throw new Error("not found container");
    this.container = e, this.options = t, this.originRotate = (this.options.rotate || 0) % 360, this.createTargetElement(), this.setInitStyle(), this.calcCenterPos(), this.registryEvents();
  }
  createTargetElement() {
    var e;
    const { top: t = W, able: i } = this.options;
    let o = `${t}`.replace("px", "").trim();
    o.indexOf("%") === -1 && (o = Number.isNaN(+o) ? W : `${o}px`);
    const s = `
        position: absolute;
        top: ${o};
        left: 50%;
        min-width: 14px;
        min-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translate(-50%, -50%);
        cursor: pointer;
      `, a = `
      <div class="${this.targetClassName}" style="${s}">
        <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.536 3.464A5 5 0 1 0 11 10l1.424 1.425a7 7 0 1 1-.475-9.374L13.659.34A.2.2 0 0 1 14 .483V5.5a.5.5 0 0 1-.5.5H8.483a.2.2 0 0 1-.142-.341l2.195-2.195z"
              fill="#eb5648"
              fillRule="nonzero"
            />
          </svg>
      </div>`, h = new DOMParser().parseFromString(a, "text/html"), c = h.body.firstChild;
    if (i instanceof Element) {
      const l = h.body.querySelector("svg");
      c.replaceChild(i, l);
    }
    (e = this.container) == null || e.appendChild(c), this.target = document.querySelector(`.${this.targetClassName}`);
  }
  setInitStyle() {
    var e;
    if ((e = this.container) != null && e.style.getPropertyValue("position") || (this.container.style.position = "relative"), this.originRotate) {
      const t = window.getComputedStyle(this.container, null);
      let i = this.container.style.transform || t.getPropertyValue("transform");
      i = i.replace(/rotate\((.*)deg\)/g, "").trim(), i = i === "none" ? "" : i, this.container.style.transform = `${i} rotate(${this.originRotate}deg)`;
    }
  }
  calcCenterPos() {
    const { x: e, y: t, width: i, height: o } = this.container.getBoundingClientRect(), s = e + i / 2, a = t + o / 2;
    this.setCenterPos({ x: s, y: a });
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
    var t, i, o, s;
    const a = this.isMobile ? (i = (t = e.touches) == null ? void 0 : t[0]) == null ? void 0 : i.pageX : e.x, h = this.isMobile ? (s = (o = e.touches) == null ? void 0 : o[0]) == null ? void 0 : s.pageY : e.y;
    return { x: a, y: h };
  }
  /**
   * 计算旋转角度
   * @param initialPoint - 开始点位
   * @param finalPoint - 结束点位
   * @returns
   */
  calcRotate(e, t) {
    const { x: i, y: o } = this.centerPos, s = {
      x: e.x - i,
      y: e.y - o
    }, a = {
      x: t.x - i,
      y: t.y - o
    }, h = s.x * a.x + s.y * a.y, c = s.x * a.y - s.y * a.x;
    let l = Math.atan2(c, h);
    return l = (l + 2 * Math.PI) % (2 * Math.PI), l * (180 / Math.PI);
  }
}
const At = (n, e) => Math.sqrt(Math.pow(Math.abs(n.x - e.x), 2) + Math.pow(Math.abs(n.y - e.y), 2)), N = 1e-8, B = 10;
class St extends $ {
  constructor(t, i = {}) {
    super();
    r(this, "likeRectangleIns");
    r(this, "opts");
    r(this, "elementRotatorIns", null);
    r(this, "rotationPointIns", null);
    r(this, "midPoint");
    r(this, "initAngle");
    r(this, "offset");
    r(this, "rotationLine");
    r(this, "customRotationDOMId", `ID${S()}`);
    r(this, "moveableElementId", `ID${S()}`);
    r(this, "targetElementId", `ID${S()}`);
    r(this, "genMarkerContent", () => {
      const i = `width:${0.05}px; height:${0.05}px;`, o = Object.entries({
        display: "inline-block",
        width: `${this.radius}px`,
        height: `${this.radius}px`,
        cursor: "move",
        background: "#fff",
        border: "2px solid #cc6666",
        "border-radius": "50%",
        "transform-origin": "50% 100%"
      }).reduce((a, [h, c]) => a += `${h}:${c};`, "");
      return `
            <div
                style="position: relative; ${i}; background: red;"
                data-rotatable-ref="${this.moveableElementId}"
            >
                <div data-rotatable-ref=${this.customRotationDOMId} style="${o}"></div>
            </div>
        `;
    });
    r(this, "setMarkerRotatable", () => {
      const t = document.querySelector(`[data-rotatable-ref="${this.moveableElementId}"]`), i = document.querySelector(`[data-rotatable-ref="${this.customRotationDOMId}"]`), o = this.calcInitOffset(), s = { rotate: this.initAngle, top: -o, able: i };
      this.elementRotatorIns = new Ot(t, s), this.registryEvent();
    });
    r(this, "onRotateStart", () => {
      this.emit("rotateStart", this.likeRectangleIns);
    });
    r(this, "onRotate", (t) => {
      const { event: i, rotate: o } = t;
      this.rotate(o - this.initAngle), this.emit("rotate", i);
    });
    r(this, "onRotateEnd", () => {
      this.emit("rotateEnd", this.likeRectangleIns);
    });
    r(this, "rotate", (t) => {
      const i = this.mapIns.lngLatToContainer(this.center), o = this.likeRectangleIns.leftTop, s = this.mapIns.lngLatToContainer(o), a = this.calcRotatePoint(s, i, t), h = new AMap.Pixel(a.x, a.y), c = this.mapIns.containerToLngLat(h), l = this.likeRectangleIns.rightTop, g = this.mapIns.lngLatToContainer(l), d = this.calcRotatePoint(g, i, t), f = new AMap.Pixel(d.x, d.y), y = this.mapIns.containerToLngLat(f), p = this.likeRectangleIns.rightBottom, P = this.mapIns.lngLatToContainer(p), E = this.calcRotatePoint(P, i, t), b = new AMap.Pixel(E.x, E.y), C = this.mapIns.containerToLngLat(b), I = this.likeRectangleIns.leftBottom, st = this.mapIns.lngLatToContainer(I), U = this.calcRotatePoint(st, i, t), rt = new AMap.Pixel(U.x, U.y), F = this.mapIns.containerToLngLat(rt), at = [
        [c.lng, c.lat],
        [y.lng, y.lat],
        [C.lng, C.lat],
        [F.lng, F.lat]
      ];
      this.likeRectangleIns.setPath(at);
    });
    r(this, "calcRotatePoint", (t, i, o) => {
      const s = t.x, a = t.y, h = i.x, c = i.y, l = o * Math.PI / 180, g = s - h, d = a - c, f = g * Math.cos(l) - d * Math.sin(l) + h, y = g * Math.sin(l) + d * Math.cos(l) + c;
      return { x: f, y };
    });
    r(this, "getDOMTransformRotate", (t) => {
      var s;
      if (!t)
        return 0;
      let i = null;
      return (((s = t == null ? void 0 : t.style) == null ? void 0 : s.transform) || "").replace(/rotate\((.*)deg\)/g, (a, h) => i = h), +i || 0;
    });
    r(this, "updateRotationAbleOffset", () => {
      var i;
      const t = (i = this.elementRotatorIns) == null ? void 0 : i.target;
      t && (t.style.top = `-${this.calcInitOffset()}`);
    });
    r(this, "onDragStart", () => x(this, null, function* () {
      this.reset();
    }));
    /**
     * 拖拽结束后，需要重新计算一下点位数据
     */
    r(this, "onDragEnd", () => x(this, null, function* () {
      this.open();
    }));
    if (!t)
      throw new Error("likeRectangleIns is required");
    this.likeRectangleIns = t, this.opts = i, this.open();
  }
  get mapIns() {
    return this.likeRectangleIns.likeRectangle.map;
  }
  get center() {
    return this.likeRectangleIns.likeRectangle.center;
  }
  get rotatable() {
    var t, i, o;
    return (o = (i = (t = this.likeRectangleIns) == null ? void 0 : t.likeRectangle) == null ? void 0 : i.opts) == null ? void 0 : o.rotatable;
  }
  get draggable() {
    var i;
    return ((i = this.likeRectangleIns) == null ? void 0 : i.getOptions()).draggable;
  }
  get radius() {
    const { controllerPointRadius: t = B } = this.opts;
    return Math.max(+`${t}`.replace("px", "") || B, B);
  }
  open() {
    this.rotatable && (this.calcMidPoint(), this.calcInitAngle(), this.setRotationLine(), this.registryLikeRectangleEvents(), this.createRotationPoint());
  }
  reset() {
    var t, i, o, s;
    (i = (t = this.elementRotatorIns) == null ? void 0 : t.destroy) == null || i.call(t), this.elementRotatorIns = null, (s = (o = this.rotationPointIns) == null ? void 0 : o.destroy) == null || s.call(o), this.rotationPointIns = null;
  }
  close() {
    this.destroyEvent(), this.destroyLikeRectangleEvents(), this.reset();
  }
  registryLikeRectangleEvents() {
    const t = this.likeRectangleIns.hasEvents("dragstart", this.onDragStart);
    this.draggable && !t && (this.likeRectangleIns.on("dragstart", this.onDragStart), this.likeRectangleIns.on("dragend", this.onDragEnd));
  }
  destroyLikeRectangleEvents() {
    this.likeRectangleIns.off("dragstart", this.onDragStart), this.likeRectangleIns.off("dragend", this.onDragEnd);
  }
  /**
   * 旋转点（即中心点）
   */
  createRotationPoint() {
    return x(this, null, function* () {
      var t, i;
      (i = (t = this.rotationPointIns) == null ? void 0 : t.destroy) == null || i.call(t), this.rotationPointIns = null, this.rotationPointIns = new AMap.Marker({
        map: this.mapIns,
        position: this.center,
        content: this.genMarkerContent()
      }), yield Promise.resolve(), this.setMarkerRotatable();
    });
  }
  registryEvent() {
    var t, i;
    this.elementRotatorIns && (this.elementRotatorIns.on("rotateStart", this.onRotateStart), this.elementRotatorIns.on("rotate", this.onRotate), this.elementRotatorIns.on("rotateEnd", this.onRotateEnd), (i = (t = this.mapIns) == null ? void 0 : t.on) == null || i.call(t, "zoomchange", this.updateRotationAbleOffset));
  }
  destroyEvent() {
    var t, i;
    this.elementRotatorIns && (this.elementRotatorIns.off("rotateStart", this.onRotateStart), this.elementRotatorIns.off("rotate", this.onRotate), this.elementRotatorIns.off("rotateEnd", this.onRotateEnd), (i = (t = this.mapIns) == null ? void 0 : t.off) == null || i.call(t, "zoomchange", this.updateRotationAbleOffset));
  }
  calcMidPoint() {
    var E, b, C;
    const t = (C = (b = (E = this.likeRectangleIns) == null ? void 0 : E.getPath) == null ? void 0 : b.call(E)) == null ? void 0 : C.map((I) => [I.lng, I.lat]);
    if (!t.length || !this.mapIns)
      throw new Error("likeRectangle or map is undefined");
    const i = t[0], o = this.mapIns.lngLatToContainer(i), s = t[1], a = this.mapIns.lngLatToContainer(s);
    let h = (o.y - a.y) / (o.x - a.x);
    h = Math.abs(h) < N ? 0 : h;
    const c = o.y - h * o.x, l = this.mapIns.lngLatToContainer(this.center), g = -1 / h, d = l.y - g * l.x, f = !M(h) || v(h) || !M(g) || v(g) || !M(c) || v(c) || !M(d) || v(d);
    let y;
    h === 0 ? y = (o.x + a.x) / 2 : f ? y = o.x : y = (d - c) / (h - g);
    let p;
    h === 0 ? p = o.y : f ? p = (o.y + a.y) / 2 : p = h * y + c;
    const P = new AMap.Pixel(y, p);
    return this.midPoint = this.mapIns.containerToLngLat(P), this.midPoint;
  }
  /**
   * 计算第一条连线的中点，位于中心点角度
   */
  calcInitAngle() {
    if (!this.mapIns)
      return;
    const t = this.mapIns.lngLatToContainer(this.midPoint), i = this.mapIns.lngLatToContainer(this.center), o = Math.atan2(t.y - i.y, t.x - i.x);
    return this.initAngle = 180 / Math.PI * o + 90, this.initAngle;
  }
  // TODO 需要处理小于中点的情况
  calcInitOffset() {
    if (!this.mapIns)
      return 0;
    const t = this.mapIns.lngLatToContainer(this.midPoint), i = this.mapIns.lngLatToContainer(this.center);
    return At(t, i);
  }
  // setRotationPoint() {
  // }
  setRotationLine() {
  }
}
class Bt extends $ {
  constructor(t) {
    super();
    r(this, "opts");
    r(this, "map");
    r(this, "width");
    r(this, "height");
    r(this, "center");
    r(this, "leftTop");
    // 左上点
    r(this, "rightTop");
    // 右上点
    r(this, "leftBottom");
    // 左下点
    r(this, "rightBottom");
    // 右下点
    r(this, "likeRectangle");
    r(this, "rotatableIns");
    r(this, "likeRectangleDestroy");
    r(this, "likeRectangleRawSetOptions");
    this.validatorOpts(t), this.bindOptsToSelf(t), t.path || this.setPoints();
    const i = this.create();
    return this.registerRotatable(), this.enhanceMethods(), i;
  }
  validatorOpts(t) {
    if (!("map" in t) || !t.map)
      throw new Error("not found map instance");
  }
  bindOptsToSelf(t) {
    this.opts = t, Object.entries(t).forEach(([i, o]) => {
      this[i] = o;
    });
  }
  enhanceMethods() {
    this.likeRectangleDestroy = this.likeRectangle.destroy.bind(this.likeRectangle), this.likeRectangle.destroy = this.destroy.bind(this), this.likeRectangleRawSetOptions = this.likeRectangle.setOptions.bind(this.likeRectangle), this.likeRectangle.setOptions = this.likeRectangleSetOptions.bind(this);
  }
  likeRectangleSetOptions(t) {
    var o, s;
    const { rotatable: i } = m(m({}, this.opts), t || {});
    this.likeRectangleRawSetOptions(t), i ? (this.opts.rotatable = !0, this.registerRotatable()) : (this.opts.rotatable = !1, (s = (o = this.rotatableIns) == null ? void 0 : o.close) == null || s.call(o), this.rotatableIns = null);
  }
  destroy() {
    var t, i;
    (i = (t = this.rotatableIns) == null ? void 0 : t.close) == null || i.call(t), this.likeRectangleDestroy();
  }
  registerRotatable() {
    const { rotatable: t, rotationOptions: i } = this.opts;
    if (!t || this.rotatableIns)
      return;
    this.rotatableIns = new St(this.likeRectangle, i);
    const o = this.likeRectangle;
    this.rotatableIns.on("rotateStart", (s) => o.emit("rotateStart", s)), this.rotatableIns.on("rotate", (s) => o.emit("rotate", s)), this.rotatableIns.on("rotateEnd", (s) => o.emit("rotateEnd", s));
  }
  calcPoints(t) {
    const [i, o] = t || this.center, s = new AMap.LngLat(i, o), a = Y(this.width / 2), h = Y(this.height / 2), c = s.offset(-a, h), l = s.offset(a, h), g = s.offset(-a, -h), d = s.offset(a, -h);
    return {
      leftTop: [c.lng, c.lat],
      rightTop: [l.lng, l.lat],
      leftBottom: [g.lng, g.lat],
      rightBottom: [d.lng, d.lat]
    };
  }
  setCenter(t) {
    this.center = t;
  }
  setPoints() {
    const { leftTop: t, rightTop: i, leftBottom: o, rightBottom: s } = this.calcPoints();
    this.leftTop = t, this.rightTop = i, this.leftBottom = o, this.rightBottom = s;
  }
  create() {
    var o, s, a;
    const t = ((o = this.opts) == null ? void 0 : o.path) || [this.leftTop, this.rightTop, this.rightBottom, this.leftBottom];
    if (ft(t.join(";").split(";")).length !== 4)
      throw new Error("invalid path");
    if (this.likeRectangle = new AMap.Polygon(), this.likeRectangle.setOptions(m({ path: t }, this.opts)), this.enhanceProperty(), this.registryEvent(), (s = this.opts) != null && s.path) {
      const [h, c, l, g] = (a = this.opts) == null ? void 0 : a.path;
      this.updatePoints(h, c, l, g);
    }
    return this.likeRectangle;
  }
  enhanceProperty() {
    this.likeRectangle.likeRectangle = this, this.likeRectangle.leftTop = this.leftTop, this.likeRectangle.rightTop = this.rightTop, this.likeRectangle.rightBottom = this.rightBottom, this.likeRectangle.leftBottom = this.leftBottom, this.likeRectangle.rotatable = this.opts.rotatable;
  }
  registryEvent() {
    this.likeRectangle && (this.onDragEnd = this.onDragEnd.bind(this), this.likeRectangle.on("dragend", this.onDragEnd));
  }
  onDragEnd(t) {
    const o = t.target.getPath(), [s, a, h, c] = o;
    this.updatePoints(s, a, h, c);
  }
  updatePoints(t, i, o, s) {
    this.likeRectangle.leftTop = this.leftTop = t, this.likeRectangle.rightTop = this.rightTop = i, this.likeRectangle.rightBottom = this.rightBottom = o, this.likeRectangle.leftBottom = this.leftBottom = s, this.setCenter(this.getCenter());
  }
  getCenter() {
    var i;
    return (i = this.map.getFitZoomAndCenterByOverlays([this.likeRectangle])) == null ? void 0 : i.pop();
  }
}
class _t {
  // 操作点右边 和 操作点右边 + 1 线段的 k 值
  constructor(e, t, i) {
    r(this, "point");
    r(this, "points");
    r(this, "center");
    r(this, "editor");
    r(this, "isEnabled", !1);
    r(this, "leftLineK1", null);
    // 操作点左边 和 操作点左边 + 1 线段的 k 值
    r(this, "rightLineK1", null);
    this.editor = e, this.point = t, this.points = i, this.init(), this.clearClientEvent();
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
    var t;
    (t = this.point) == null || t.setOptions({ cursor: e });
  }
  init() {
    this.center = this.point.getCenter(), this.onMouseOver = this.onMouseOver.bind(this), this.onMouseOut = this.onMouseOut.bind(this), this.onDragStart = this.onDragStart.bind(this), this.onDragging = this.onDragging.bind(this), this.onDragEnd = this.onDragEnd.bind(this), this.defaultRegistryEvent();
  }
  clearClientEvent() {
    this.point.clearEvents("click");
  }
  defaultRegistryEvent() {
    const e = this.editor.isMobile;
    let t = e ? "touchstart" : "mouseover", i = e ? "touchend" : "mouseout";
    !this.point.hasEvents("mouseover", this.onMouseOver) && this.point.on(t, this.onMouseOver), !this.point.hasEvents("mouseout", this.onMouseOut) && this.point.on(i, this.onMouseOut);
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
    const { pixel: t } = e;
    this.updateNextLeftPoint(t, e), this.updateNextRightPoint(t, e), this.editor.onDragging(e);
  }
  onDragEnd(e) {
    const { target: t, pixel: i } = e;
    if (!t) {
      this.leftLineK1 = null, this.rightLineK1 = null;
      return;
    }
    this.updateNextLeftPoint(i, e), this.updateNextRightPoint(i, e), this.center = t.getCenter(), this.editor.onDragEnd(e), this.leftLineK1 = null, this.rightLineK1 = null;
  }
  /**
   * 更新下一个左节点位置
   * @param operatePointPixel - 操作点坐标
   * @param data
   */
  updateNextLeftPoint(e, t) {
    if (!e)
      return;
    const i = this.idx - 1 >= 0 ? this.idx - 1 : this.len, o = this.points[i], s = this.map.lngLatToContainer(o.getCenter()), a = i - 1 >= 0 ? i - 1 : this.len, h = this.points[a], c = this.map.lngLatToContainer(h.getCenter());
    let l;
    this.leftLineK1 == null ? (l = (c.y - s.y) / (c.x - s.x), this.leftLineK1 = l) : l = this.leftLineK1, l = Math.abs(l) < N ? 0 : l;
    const g = c.y - l * c.x, d = -1 / l, f = e.y - d * e.x, y = Number.isNaN(l) || !M(l) || v(l) || Number.isNaN(d) || !M(d) || v(d) || Number.isNaN(g) || !M(g) || v(g) || Number.isNaN(f) || !M(f) || v(f);
    let p, P;
    l === 0 ? (p = e.x, P = s.y) : y ? (p = s.x, P = e.y) : (p = (f - g) / (l - d), P = l * p + g);
    const E = new AMap.Pixel(p, P);
    this.dispatch(o, E, t.originEvent);
  }
  /**
   * 更新下一个右节点位置
   * @param operatePointPixel - 操作点坐标
   * @param data
   */
  updateNextRightPoint(e, t) {
    if (!e)
      return;
    const i = this.idx + 1 <= this.len ? this.idx + 1 : 0, o = this.points[i], s = this.map.lngLatToContainer(o.getCenter()), a = i + 1 <= this.len ? i + 1 : 0, h = this.points[a], c = this.map.lngLatToContainer(h.getCenter());
    let l;
    this.rightLineK1 == null ? (l = (c.y - s.y) / (c.x - s.x), this.rightLineK1 = l) : l = this.rightLineK1, l = Math.abs(l) < N ? 0 : l;
    const g = c.y - l * c.x, d = -1 / l, f = e.y - d * e.x, y = Number.isNaN(l) || !M(l) || v(l) || Number.isNaN(d) || !M(d) || v(d) || Number.isNaN(g) || !M(g) || v(g) || Number.isNaN(f) || !M(f) || v(f);
    let p, P;
    l === 0 ? (p = e.x, P = s.y) : y ? (p = s.x, P = e.y) : (p = (f - g) / (l - d), P = l * p + g);
    const E = new AMap.Pixel(p, P);
    this.dispatch(o, E, t.originEvent);
  }
  dispatch(e, t, i) {
    const s = {
      lnglat: this.map.containerToLngLat(t),
      originEvent: i
      // 这里的鼠标事件直接透传即可
    };
    e.emit("dragend", s);
  }
}
const Nt = {
  rotatingCloseEditor: !0,
  editingCloseRotator: !0,
  isMobile: !1
};
class $t {
  constructor(e, t, i) {
    r(this, "opts");
    r(this, "map");
    r(this, "likeRectangle");
    r(this, "polygonEditor");
    r(this, "polygonEditorOpen");
    r(this, "polygonEditorClose");
    r(this, "controlPoints");
    r(this, "inEditing", !1);
    r(this, "isRestart", !1);
    r(this, "onDragStart", (e) => {
      var t, i;
      (i = (t = this.rotatableIns) == null ? void 0 : t.close) == null || i.call(t), this.onChange("dragstart", e);
    });
    r(this, "onDragging", (e) => {
      this.updateLikeRectanglePath(), this.onChange("dragging", e);
    });
    r(this, "onDragEnd", (e) => {
      var t, i;
      (i = (t = this.rotatableIns) == null ? void 0 : t.open) == null || i.call(t), this.onChange("dragend", e);
    });
    r(this, "onChange", (e, t) => {
      var i, o;
      (o = (i = this.opts) == null ? void 0 : i.onChange) == null || o.call(i, e, t);
    });
    r(this, "onRotateStart", () => x(this, null, function* () {
      this.inEditing && this.polygonEditorClose();
    }));
    r(this, "onRotateEnd", () => x(this, null, function* () {
      this.inEditing && this.open();
    }));
    return this.map = e, this.likeRectangle = t, this.opts = m(m({}, Nt), i || {}), this.onChange = this.onChange.bind(this), this.createEditor();
  }
  get options() {
    return A(m({}, this.opts), {
      midControlPoint: { radius: 0 }
    });
  }
  get rotatable() {
    var e, t, i;
    return (i = (t = (e = this.likeRectangle) == null ? void 0 : e.likeRectangle) == null ? void 0 : t.opts) == null ? void 0 : i.rotatable;
  }
  get rotatingCloseEditor() {
    return this.opts.rotatingCloseEditor;
  }
  get rotatableIns() {
    var e, t;
    return (t = (e = this.likeRectangle) == null ? void 0 : e.likeRectangle) == null ? void 0 : t.rotatableIns;
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
    return this.controlPoints.find((t) => {
      const i = t.point.getCenter(), o = `${i.lng}_${i.lat}`, s = e.getCenter(), a = `${s.lng}_${s.lat}`;
      return o === a;
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
    var t, i, o, s;
    (this.controlPoints || []).forEach((a) => {
      a.destroyEvent();
    });
    const e = (s = (o = (i = (t = this.polygonEditor) == null ? void 0 : t.singleRingListHandle) == null ? void 0 : i.list) == null ? void 0 : o.editingVertexMarkerList) != null ? s : [];
    this.controlPoints = e.map((a, h) => {
      const c = a.getExtData() || {};
      return a.setExtData(A(m({}, c), { idx: h })), new _t(this, a, e);
    });
  }
  updateLikeRectanglePath() {
    const [
      e,
      t,
      i,
      o
    ] = this.controlPoints, s = e.point.getCenter(), a = t.point.getCenter(), h = i.point.getCenter(), c = o.point.getCenter();
    this.likeRectangle.likeRectangle.updatePoints(
      [s.lng, s.lat],
      [a.lng, a.lat],
      [h.lng, h.lat],
      [c.lng, c.lat]
    );
  }
}
const Ft = {
  PolygonRangingInDrawing: pt,
  PolygonEditorRanging: yt,
  PolygonEditorEvent: vt,
  PolygonRanging: Pt,
  LikeRectangle: Bt,
  LikeRectangleEditor: $t
};
export {
  Bt as LikeRectangle,
  $t as LikeRectangleEditor,
  vt as PolygonEditorEvent,
  yt as PolygonEditorRanging,
  Pt as PolygonRanging,
  pt as PolygonRangingInDrawing,
  Ft as default
};
