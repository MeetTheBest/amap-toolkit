import { get } from 'lodash-es';

import CircleMarkerCollection from './circleMarkerCollection';
import LineCollection from './lineCollection';
import { IDistanceText, IPolygonEditorPatch } from './type';
import { createText, computePoint2PointDistance } from '../utils/index';
import { PolygonEditorOptions } from '@amap/amap-jsapi-types/plugins/PolygonEditor';

export default class PolygonEditorRanging {
    private map: AMap.Map;
    // 实点
    private circleMarkers: CircleMarkerCollection | null = null;
    // 中间点
    private midCircleMarkers: CircleMarkerCollection | null = null;
    // 线集合
    private lines: LineCollection | null = null;
    // 编辑器
    private polygonEditor: (AMap.PolygonEditor & IPolygonEditorPatch) | null = null;
    // 多边形路径
    private polygonPaths: Common.IPath = [];
    // 多边形全部路径（包括中间虚电）
    private polygonTotalPaths: Common.IPath = [];
    // 多边形
    private polygon: AMap.Polygon | null = null;
    // 开始点位到鼠标位置的文本
    private startPointToCursorText: AMap.Text | null = null;
    // 最后一次点位到鼠标位置的文本
    private lastPointToCursorText: AMap.Text | null = null;
    // 线长的文本呢
    private lineLengthText: AMap.Text | null = null;
    // 操作点
    private circleMarker: AMap.CircleMarker | null = null;
    // 操作中间点
    private midCircleMarker: AMap.CircleMarker | null = null;
    // 起始点位
    private startPosition: AMap.LngLat | null = null;
    // 上次点击点位
    private lastPosition: AMap.LngLat | null = null;
    // 兜底设置编辑中间点标记列表路径
    editingMidTipMarkerListPath: string | ((polygonEditor: AMap.PolygonEditor) => AMap.PolygonEditor) | null = null;

    constructor(map: AMap.Map, polygonEditor?: AMap.PolygonEditor & IPolygonEditorPatch) {
        if (!map) {
            throw new Error('map not found!');
        }

        this.map = map;
        polygonEditor && (this.polygonEditor = polygonEditor);
        this.circleMarkers = new CircleMarkerCollection(this.map);
        this.midCircleMarkers = new CircleMarkerCollection(this.map);
        this.lines = new LineCollection(this.map);
    }

    /**
     * 获取编辑器目标多边形路径
     * @returns
     */
    private getPolygonEditorTargetPaths() {
        if (!this.polygonEditor) return [] as Common.IPath;
        return (this.polygonEditor?.getTarget?.()!.getPath() ?? []) as Common.IPath;
    }

    /**
     *
     */
    public setEditingMidTipMarkerListPath(path: string) {
        this.editingMidTipMarkerListPath = path;
        return this;
    }

    /**
     *
     * @returns
     */
    private getEditingMidTipMarkerList() {
        const { singleRingListHandle } = this.polygonEditor!;

        if (this.editingMidTipMarkerListPath) {
            if (typeof this.editingMidTipMarkerListPath === 'function') {
                return this.editingMidTipMarkerListPath(this.polygonEditor!);
            }

            if (typeof this.editingMidTipMarkerListPath === 'string') {
                return get(this.polygonEditor, this.editingMidTipMarkerListPath);
            }
        }

        if (this.polygonEditor!.editingMidTipMarkerList?.length) {
            return this.polygonEditor!.editingMidTipMarkerList;
        }

        if (singleRingListHandle) {
            return singleRingListHandle?.list?.editingMidTipMarkerList;
        }

        return [];
    }

    /**
     * 获取编辑围栏所有点位（白色操作点+蓝色中间操作点）
     * @returns
     */
    private getPolygonEditorTargetTotalPaths() {
        const paths = this.getPolygonEditorTargetPaths();

        const editingMidTipMarkerList = this.getEditingMidTipMarkerList();

        let idx = 0;
        const mergedPaths: Common.IPath = [];
        const len = paths.length;

        while (idx < len) {
            // 白色点（交界点）
            mergedPaths.push(paths[idx]);

            // 蓝色点（中间点）
            const midCircleMarker = editingMidTipMarkerList[idx];
            if (midCircleMarker) {
                mergedPaths.push(midCircleMarker.getCenter());
            }

            idx++;
        }

        return mergedPaths;
    }

    /**
     * 注册多边形编辑器，可操作点位事件
     * @param polygonEditor
     */
    public open(polygonEditor: AMap.PolygonEditor) {
        this.start(polygonEditor);
    }

    /**
     * 注册多边形编辑器，可操作点位事件
     * @param polygonEditor
     */
    public start(polygonEditor: AMap.PolygonEditor) {
        if (!polygonEditor && !this.polygonEditor) {
            throw new Error('polygonEditor not found');
        }
        this.polygonEditor = polygonEditor;
        const { controlPoint, midControlPoint } = this.polygonEditor as PolygonEditorOptions;

        this.polygonPaths = this.getPolygonEditorTargetPaths();
        this.circleMarkers!.setOptions(controlPoint!)!.createCircleMarkersByPaths(this.polygonPaths);

        this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths();
        this.midCircleMarkers!.setOptions(midControlPoint!)!.createCircleMarkersByPaths(this.polygonTotalPaths);

        this.lines!.createLinesByPaths(this.polygonPaths);

        this.polygonEditor?.on('adjust', this.onPolygonEditorAdjust);
        this.polygonEditor?.on('removenode', this.onPolygonEditorAdjust);
        this.polygonEditor?.on('addnode', this.onPolygonEditorAdjust);

        // 鼠标点下
        this.map.on('mousedown', this.onMouseDown);
        this.map.on('touchstart', this.onMouseDown);

        // 鼠标移动，判断是否命中了计算 PolygonEditor 的计算处理
        this.map.on('mousemove', this.onMovePolygonEditorPoint);
        this.map.on('touchmove', this.onMovePolygonEditorPoint);

        // 中间点和操作点分开控制
        // 操作点的计算距离是：白色点 - 白色点
        // 中间点的计算距离是：蓝色点 - 白色点
        this.map.on('mousemove', this.onMovePolygonEditorMidPoint);
        this.map.on('touchmove', this.onMovePolygonEditorMidPoint);

        // 移动到边线时，显示线距离
        this.map.on('mousemove', this.onInPolygonEditorLine);
        this.map.on('touchmove', this.onInPolygonEditorLine);

        // 鼠标松开
        this.map.on('mouseup', this.onMouseUp);
        this.map.on('touchend', this.onMouseUp);

        return this;
    }

    /**
     * 移除多边形编辑器，可操作点位事件
     */
    public close() {
        this.stop();
    }

    /**
     * 移除多边形编辑器，可操作点位事件
     */
    public stop() {
        this.polygonEditor?.off('adjust', this.onPolygonEditorAdjust);
        this.polygonEditor?.off('removenode', this.onPolygonEditorAdjust);
        this.polygonEditor?.off('addnode', this.onPolygonEditorAdjust);
        // 鼠标点下
        this.map.off('mousedown', this.onMouseDown);
        this.map.off('touchstart', this.onMouseDown);

        // 鼠标移动
        this.map.off('mousemove', this.onMovePolygonEditorPoint);
        this.map.off('touchmove', this.onMovePolygonEditorPoint);
        this.map.off('mousemove', this.onMovePolygonEditorMidPoint);
        this.map.off('touchmove', this.onMovePolygonEditorMidPoint);

        // 移动到边线时，显示线距离
        this.map.off('mousemove', this.onInPolygonEditorLine);
        this.map.off('touchmove', this.onInPolygonEditorLine);
        // 鼠标松开
        this.map.off('mouseup', this.onMouseUp);
        this.map.off('touchend', this.onMouseUp);
    }

    private onPolygonEditorAdjust = ({ target }: Common.Event) => {
        this.polygonPaths = target.getPath();
        this.circleMarkers!.createCircleMarkersByPaths(this.polygonPaths);
        this.lines!.createLinesByPaths(this.polygonPaths);

        // 延迟生成，否则可能拿到上次数据
        Promise.resolve().then(() => {
            this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths();
            this.midCircleMarkers!.createCircleMarkersByPaths(this.polygonTotalPaths);
        });

        // 清除
        this.reset();
    };

    private onMouseDown = (event: Common.Event) => {
        const pos = event.lnglat;
        this.circleMarker = this.circleMarkers!.getPointInCircleMarkers(pos);
        this.midCircleMarker = this.midCircleMarkers!.getInCircleMarkersPoint(pos);
    };

    private onMovePolygonEditorPoint = (event: Common.Event) => {
        if (this.midCircleMarker) return;

        if (!this.circleMarker) {
            this.reset();
            return;
        }

        // 触发了编辑围栏 - 可操作点位的移动操作
        const center = this.circleMarker.getCenter();
        const getLngLatStr = (pos: AMap.LngLat) => `${pos.lng}-${pos.lat}`;
        let idx = this.polygonPaths.findIndex(path => getLngLatStr(path) === getLngLatStr(center));
        if (idx === -1) return;

        const len = this.polygonPaths.length;
        const leftPointIdx = idx - 1 <= -1 ? len - 1 : idx - 1;
        const rightPointIdx = idx + 1 >= len ? 0 : idx + 1;
        const leftPoint = this.polygonPaths.at(leftPointIdx);
        const rightPoint = this.polygonPaths.at(rightPointIdx);
        this.setPosition(leftPoint!, rightPoint!);
        this.onMouseMoveInDrawPolygon(event);
    };

    private onMovePolygonEditorMidPoint = (event: Common.Event) => {
        if (this.circleMarker) return;

        if (!this.midCircleMarker) {
            this.reset();
            return;
        }

        // 触发了编辑围栏 - 可操作点位的移动操作
        const center = this.midCircleMarker.getCenter();
        const getLngLatStr = (pos: AMap.LngLat) => `${pos.lng}-${pos.lat}`;
        let idx = this.polygonTotalPaths.findIndex(path => getLngLatStr(path) === getLngLatStr(center));
        if (idx === -1) return;

        const len = this.polygonTotalPaths.length;
        const leftPointIdx = idx - 1 <= -1 ? len - 1 : idx - 1;
        const rightPointIdx = idx + 1 >= len ? 0 : idx + 1;
        const leftPoint = this.polygonTotalPaths.at(leftPointIdx);
        const rightPoint = this.polygonTotalPaths.at(rightPointIdx);
        this.setPosition(leftPoint!, rightPoint!);
        this.onMouseMoveInDrawPolygon(event);
    };

    private onMouseUp = () => {
        this.circleMarker = null;
        this.midCircleMarker = null;
        this.reset();
    };

    /**
     * 开始边线测距
     * @param polygon
     * @returns
     */
    public startLineRanging(polygon: AMap.Polygon) {
        if (!polygon) {
            throw new Error('polygonEditor not found');
        }

        if (this.polygon) return;

        this.polygon = polygon;
        this.lines!.createLinesByPaths(this.polygon.getPath() as Common.IPath);
        // 鼠标移动，判断是否命中了计算 PolygonEditor 的计算处理
        this.map.on('mousemove', this.onInPolygonEditorLine);
    }

    public stopLineRanging() {
        // 鼠标移动，判断是否命中了计算 PolygonEditor 的计算处理
        this.map.off('mousemove', this.onInPolygonEditorLine);
    }

    private onInPolygonEditorLine = (event: Common.Event) => {
        // 开启围栏编辑器的点位编辑
        if (this.circleMarker) {
            return this.removeLineDistanceText();
        }

        const pos = event.lnglat;
        const line = this.lines!.getPointInPolyline(pos);
        if (!line) {
            return this.removeLineDistanceText();
        }

        const [startPoint, endPoint] = line;
        if (!this.lineLengthText) {
            this.lineLengthText = createText();
            this.lineLengthText.add(this.map);
        }
        this.updateDistanceText(this.lineLengthText, computePoint2PointDistance(startPoint, endPoint));
    };

    /**
     * 设置起始点位、一次点位
     * @param {object} startPosition
     * @param {object} lastPosition
     */
    private setPosition(startPosition: AMap.LngLat, lastPosition: AMap.LngLat) {
        this.startPosition = startPosition;
        this.lastPosition = lastPosition;
        this.createDistanceText();
    }

    /**
     * 获取新增围栏时，鼠标移动位置
     * @param {*} event
     */
    private onMouseMoveInDrawPolygon = (event: Common.Event) => {
        if (!this.startPosition || !this.lastPosition) return;

        const cursorPosition = event.lnglat;
        this.updateDistanceText(
            this.startPointToCursorText!,
            computePoint2PointDistance(this.startPosition, cursorPosition)
        );
        this.updateDistanceText(
            this.lastPointToCursorText!,
            computePoint2PointDistance(this.lastPosition, cursorPosition)
        );
    };

    /**
     * 创建距离文本
     * @returns
     */
    private createDistanceText() {
        if (this.startPointToCursorText && this.lastPointToCursorText) return;

        // 起始点位到鼠标的距离距离文本
        this.startPointToCursorText = createText();

        // 上一个点位到鼠标的距离距离文本
        this.lastPointToCursorText = createText();

        this.startPointToCursorText.setMap(this.map);
        this.lastPointToCursorText.setMap(this.map);
    }

    private updateDistanceText(textIns: AMap.Text, { text, textPos }: IDistanceText) {
        textIns.setText(text);
        textIns.setPosition(textPos);
    }

    private removeLineDistanceText() {
        this.lineLengthText?.remove();
        this.lineLengthText = null;
    }

    private removeDistanceText() {
        this.startPointToCursorText?.remove();
        this.lastPointToCursorText?.remove();
        this.startPointToCursorText = null;
        this.lastPointToCursorText = null;
    }

    private reset() {
        this.startPosition = null;
        this.lastPosition = null;

        this.removeDistanceText();

        this.removeLineDistanceText();

        return this;
    }

    public destroy() {
        console.log('=== 销毁 围栏编辑测距事件 ==');
        this.reset();
        this.stop();
        this.circleMarkers!.destroy();
        // TODO bug 未销毁 mid 点位
        return this;
    }

    public destroyLineRanging() {
        console.log('=== 销毁 围栏查看测距事件 ==');
        this.polygon = null;
        this.startPosition = null;
        this.lastPosition = null;
        this.removeLineDistanceText();
        this.stopLineRanging();
        return this;
    }
}
