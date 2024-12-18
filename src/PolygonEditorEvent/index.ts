import { get } from 'lodash-es';

import Event from '../Event';
import CircleMarkerCollection from '../PolygonEditorRanging/circleMarkerCollection';
import { IPolygonEditorPatch } from './type';
import { PolygonEditorOptions } from '@amap/amap-jsapi-types/plugins/PolygonEditor';

export default class PolygonEditorEvent extends Event {
    private map: AMap.Map;
    // 全部点
    private circleMarkers: CircleMarkerCollection | null = null;
    // 编辑器
    private polygonEditor: (AMap.PolygonEditor & IPolygonEditorPatch) | null = null;
    // 多边形全部路径（包括中间点）
    private polygonTotalPaths: Common.IPath = [];
    // 操作点
    private circleMarker: AMap.CircleMarker | null = null;
    // 兜底设置编辑中间点标记列表路径
    editingMidTipMarkerListPath: string | ((polygonEditor: AMap.PolygonEditor) => AMap.PolygonEditor) | null = null;

    constructor(polygonEditor: AMap.PolygonEditor & IPolygonEditorPatch) {
        super();

        this.map = polygonEditor.map!;
        this.polygonEditor = polygonEditor;

        this.circleMarkers = new CircleMarkerCollection(this.map);
        this.open(this.polygonEditor);
    }

    /**
     * 获取编辑器目标多边形路径
     * @returns
     */
    private getPolygonEditorTargetPaths() {
        if (!this.polygonEditor) return [] as Common.IPath;
        return (this.polygonEditor.getTarget()!.getPath() ?? []) as Common.IPath;
    }

    /**
     *
     */
    public setEditingMidTipMarkerListPath(path: string) {
        this.editingMidTipMarkerListPath = path;
        return this;
    }

    /**
     * 获取编辑中间点标记列表
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
            const circleMarker = editingMidTipMarkerList[idx];
            if (circleMarker) {
                mergedPaths.push(circleMarker.getCenter());
            }

            idx++;
        }

        return mergedPaths;
    }

    /**
 * 注册多边形编辑器，可操作点位事件
 */
    private open(polygonEditor: AMap.PolygonEditor) {
        this.start(polygonEditor);
    }

    /**
     * 注册多边形编辑器，可操作点位事件
     */
    private start(polygonEditor: AMap.PolygonEditor) {
        if (!polygonEditor && !this.polygonEditor) {
            throw new Error('polygonEditor not found');
        }

        this.polygonEditor = polygonEditor;
        const { midControlPoint } = this.polygonEditor as PolygonEditorOptions;

        this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths();
        this.circleMarkers!.setOptions(midControlPoint!)!.createCircleMarkersByPaths(this.polygonTotalPaths);

        this.polygonEditor?.on('adjust', this.onPolygonEditorAdjust);
        this.polygonEditor?.on('removenode', this.onPolygonEditorAdjust);
        this.polygonEditor?.on('addnode', this.onPolygonEditorAdjust);

        // 鼠标点下
        this.map.on('mousedown', this.onMouseDown);

        // 中间点和操作点分开控制
        // 操作点的计算距离是：白色点 - 白色点
        // 中间点的计算距离是：蓝色点 - 白色点
        this.map.on('mousemove', this.onMouseMove);

        // 鼠标移出
        // this.map.on('mouseout', this.onMouseOut);

        // 鼠标松开
        this.map.on('mouseup', this.onMouseUp);

        return this;
    }

    /**
     * 停止事件行为
     */
    private close() {
        this.stop();
    }

    /**
     * 停止事件行为
     */
    private stop() {
        this.map.off('mousedown', this.onMouseDown);
        this.map.off('mousemove', this.onMouseMove);
        // this.map.on('mouseout', this.onMouseOut);
        this.map.off('mouseup', this.onMouseUp);
    }

    private onPolygonEditorAdjust = () => {
        // 延迟生成，否则可能拿到上次数据
        Promise.resolve().then(() => {
            this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths();
            this.circleMarkers!.createCircleMarkersByPaths(this.polygonTotalPaths);
        });
    };

    private onMouseDown = (event: Common.Event) => {
        const pos = event.lnglat;
        this.circleMarker = this.circleMarkers!.getPointInCircleMarkers(pos);

        // 命中操作点
        if (!this.circleMarker) return;

        const events = this.getEvents('mousedown');
        if (!events.length) return;

        this.emit('mousedown', this.circleMarker);
    };

    private onMouseMove = (event: Common.Event) => {
        if (!this.circleMarker) return;

        const events = this.getEvents('mousemove');
        if (!events.length) return;

        this.emit('mousemove', this.circleMarker, event);
    };

    // private onMouseOut = (event: Common.Event) => {
    //     if (!this.circleMarker) return;

    //     const events = this.getEvents('mouseout');
    //     if (!events.length) return;

    //     this.emit('mouseout', this.circleMarker, event);
    // };

    private onMouseUp = () => {
        const events = this.getEvents('mouseup');
        if (!events.length || !this.circleMarker) {
            return;
        }

        this.emit('mouseup', this.circleMarker);
        this.circleMarker = null;
    };

    public destroy() {
        this.close();
        this.circleMarkers!.destroy();
        return this;
    }
}
