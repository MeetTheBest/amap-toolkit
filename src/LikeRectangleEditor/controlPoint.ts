import { isFinite } from 'lodash-es';
import LikeRectangleEditor from ".";
import { isLimitMaxInteger } from '../utils/index';
import { K_DOWN_LIMIT_COUNT } from '../constants/common';

class ControlPoint {
    point!: AMap.CircleMarker;
    points!: AMap.CircleMarker[];
    center!: AMap.LngLat;
    editor!: LikeRectangleEditor;
    isEnabled: boolean = false;
    leftLineK1: null = null; // 操作点左边 和 操作点左边 + 1 线段的 k 值
    rightLineK1: null = null;// 操作点右边 和 操作点右边 + 1 线段的 k 值

    constructor(editor: LikeRectangleEditor, point: AMap.CircleMarker, points: AMap.CircleMarker[]) {
        this.editor = editor;
        this.point = point;
        this.points = points;

        this.init();
        this.clearClientEvent();
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
        if (this.isEnabled) return;

        this.isEnabled = true;
        this.setCursorPointer('move');
        this.registryEvent();
    }

    disable() {
        this.isEnabled = false;
        this.setCursorPointer('pointer');
        this.destroyEvent();
    }

    setCursorPointer(cursor: string) {
        this.point?.setOptions({ cursor });
    }

    init() {
        this.center = this.point.getCenter();

        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);

        this.onDragStart = this.onDragStart.bind(this);
        this.onDragging = this.onDragging.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);

        this.defaultRegistryEvent();
    }

    clearClientEvent() {
        this.point.clearEvents('click');
        // TODO 考虑把原事件都干掉，自身注册一次，在调用原注册事件
    }

    defaultRegistryEvent() {
        const isMobile = this.editor.isMobile;

        let mouseover = isMobile ? 'touchstart' : 'mouseover' as AMap.EventType;
        let mouseout = isMobile ? 'touchend' : 'mouseout' as AMap.EventType;

        const hasMouseOver = this.point.hasEvents('mouseover', this.onMouseOver);
        !hasMouseOver && this.point.on(mouseover, this.onMouseOver);

        const hasMouseOut = this.point.hasEvents('mouseout', this.onMouseOut);
        !hasMouseOut && this.point.on(mouseout, this.onMouseOut);
    }

    registryEvent() {
        this.point.on('dragstart', this.onDragStart);
        this.point.on('dragging', this.onDragging);
        this.point.on('dragend', this.onDragEnd);
        console.log('注册完成');
    }

    destroyEvent() {
        this.point.off('dragstart', this.onDragStart);
        this.point.off('dragging', this.onDragging);
        this.point.off('dragend', this.onDragEnd);
        console.log('销毁完成');
    }

    onMouseOver() {
        console.log(`点位${this.extData.idx} 移入`);
        this.enable();
    }

    onMouseOut() {
        console.log(`点位${this.extData.idx} 移出`);
        // 移动端时，延迟处理
        if (this.editor.isMobile) {
            const timer = setTimeout(() => {
                clearTimeout(timer)
                this.disable();
            }, 4);
        } else {
            this.disable();
        }
    }

    onDragStart(data) {
        console.log(`点位${this.extData.idx} 移动开始`);

        this.leftLineK1 = null;
        this.rightLineK1 = null;

        this.editor.onDragStart(data);
    }

    onDragging(data: IObject) {
        const { pixel } = data;
        console.log(`点位${this.extData.idx} 移动中`);

        // 更新下一个左节点的位置
        this.updateNextLeftPoint(pixel, data);

        // 更新下一个右节点的位置
        this.updateNextRightPoint(pixel, data);

        this.editor.onDragging(data);
        // console.log('                         ');
        // console.log('                         ');
    }

    onDragEnd(data: IObject) {
        const { target, pixel } = data;

        // 更新下一个左节点的位置
        this.updateNextLeftPoint(pixel, data);

        // 更新下一个右节点的位置
        this.updateNextRightPoint(pixel, data);

        // 校验矩形是否变形了
        // 矫正变形的矩形

        // 更新中心点
        this.center = target.getCenter();
        this.editor.onDragEnd(data);

        this.leftLineK1 = null;
        this.rightLineK1 = null;
    }

    /**
     * 更新下一个左节点位置
     * @param operatePointPixel - 操作点坐标
     * @param data
     */
    updateNextLeftPoint(operatePointPixel: AMap.Pixel, data: IObject) {
        // 左节点的 xy 坐标
        const leftIdx = this.idx - 1 >= 0 ? this.idx - 1 : this.len;
        const leftPoint = this.points[leftIdx];
        const leftPointPixel = this.map.lngLatToContainer(leftPoint.getCenter());
        // console.log('leftPointPixel ===>', leftPointPixel);
        // console.log('leftPointPixel ===>', { x: leftPointPixel.x, y: leftPointPixel.y });
        // this.map.add(new AMap.Marker({ position: leftPoint.getCenter(), content: 'l' }));

        // 下一个左节点的下一个左节点的 xy 坐标（对角点点位）
        const leftNextIdx = leftIdx - 1 >= 0 ? leftIdx - 1 : this.len;
        const leftNextPoint = this.points[leftNextIdx];
        const leftNextPointPixel = this.map.lngLatToContainer(leftNextPoint.getCenter());
        // console.log('leftNextPointPixel ===>', leftNextPointPixel);
        // console.log('leftNextPointPixel ===>', { x: leftNextPointPixel.x, y: leftNextPointPixel.y });
        // this.map.add(new AMap.Marker({ position: leftNextPoint.getCenter(), content: 'l-1' }));

        // y1 = k1 * x1 + b1 （ps: 两条直线互相垂直，则有 k1 * k2 = -1）

        let k1: any;

        // !!!每一轮的移动时，只需要计算一次的k值即可，后续直接使用对应的 k 值
        if (this.leftLineK1 == null) {
            // 若首次出现 NaN 则表明存在点位重复了
            k1 = (leftNextPointPixel.y - leftPointPixel.y) / (leftNextPointPixel.x - leftPointPixel.x);
            this.leftLineK1 = k1;
        } else {
            k1 = this.leftLineK1;
            // console.log('updateNextLeftPoint.before.k1 ===>', k1);
        }

        // 如果 k1 小于 K_DOWN_LIMIT_COUNT
        // 这里为啥要把精度控制到 K_DOWN_LIMIT_COUNT ，因为在页面中可操作得到的最小 k 值 = 1 / 屏幕宽度，0.00000001 只是兜底更小的值
        k1 = Math.abs(k1) < K_DOWN_LIMIT_COUNT ? 0 : k1;
        // console.log('updateNextLeftPoint.after.k1 ===>', k1);

        const b1 = leftNextPointPixel.y - k1 * leftNextPointPixel.x;
        // console.log('updateNextLeftPoint.b1 ===>', b1);

        // y2 = k2 * x2 + b2

        const k2 = -1 / k1;
        // console.log('updateNextLeftPoint.k2 ===>', k2);

        const b2 = operatePointPixel.y - k2 * operatePointPixel.x;
        // console.log('updateNextLeftPoint.b2 ===>', b2);

        const isLimit =
            Number.isNaN(k1)
            || !isFinite(k1)
            || isLimitMaxInteger(k1)
            || Number.isNaN(k2)
            || !isFinite(k2)
            || isLimitMaxInteger(k2)
            || Number.isNaN(b1)
            || !isFinite(b1)
            || isLimitMaxInteger(b1)
            || Number.isNaN(b2)
            || !isFinite(b2)
            || isLimitMaxInteger(b2);

        // 设交点坐标为：x,y
        // 则有： y = k1 * x + b1
        // 则有： y = k2 * x + b2
        // 则有： k1 * x + b1 = k2 * x + b2
        // 平行 x 轴 的直线，k = 0
        // 平行 y 轴 的直线，k = 无穷大
        let x: number;
        let y: number;

        if (k1 === 0) {
            x = operatePointPixel.x;
            y = leftPointPixel.y;
        } else if (isLimit) {
            x = leftPointPixel.x;
            y = operatePointPixel.y;
        } else {
            x = (b2 - b1) / (k1 - k2);
            y = k1 * x + b1;
        }
        // console.log('updateNextLeftPoint.x ===>', x);
        // console.log('updateNextLeftPoint.y ===>', y);
        // console.log('                      ');

        const nextLeftPointPixel = new AMap.Pixel(x, y);
        // const nextLeftPoint = this.map.containerToLngLat(nextLeftPointPixel);
        // const nextRightPointCenter = [nextLeftPoint.lng, nextLeftPoint.lat];
        // this.map.add(new AMap.Marker({ position: nextLeftPoint }));
        // console.log('                            ');
        this.dispatch(leftPoint, nextLeftPointPixel, data.originEvent);
    }

    /**
     * 更新下一个右节点位置
     * @param operatePointPixel - 操作点坐标
     * @param data
     */
    updateNextRightPoint(operatePointPixel: AMap.Pixel, data: IObject) {

        // 下一个节点的 xy 坐标
        const rightIdx = this.idx + 1 <= this.len ? this.idx + 1 : 0;
        const rightPoint = this.points[rightIdx];
        const rightPointPixel = this.map.lngLatToContainer(rightPoint.getCenter());
        // console.log('rightPointPixel ===>', rightPointPixel);
        // console.log('rightPointPixel ===>', { x: rightPointPixel.x, y: rightPointPixel.y });
        // this.map.add(new AMap.Marker({ position: rightPoint.getCenter(), content: 'r' }));

        // 下一个节点的下一个节点的 xy 坐标
        const rightNextIdx = rightIdx + 1 <= this.len ? rightIdx + 1 : 0;
        const rightNextPoint = this.points[rightNextIdx];
        const rightNextPointPixel = this.map.lngLatToContainer(rightNextPoint.getCenter());
        // console.log('rightNextPointPixel ===>', rightNextPointPixel);
        // console.log('rightNextPointPixel ===>', { x: rightNextPointPixel.x, y: rightNextPointPixel.y });
        // this.map.add(new AMap.Marker({ position: rightNextPoint.getCenter(), content: 'r-1' }));

        // y1 = k1 * x1 + b1 （ps: 两条直线互相垂直，则有 k1 * k2 = -1）

        let k1: any;

        // !!!每一轮的移动时，只需要计算一次的k值即可，后续直接使用对应的 k 值
        if (this.rightLineK1 == null) {
            k1 = (rightNextPointPixel.y - rightPointPixel.y) / (rightNextPointPixel.x - rightPointPixel.x);
            this.rightLineK1 = k1;
        } else {
            k1 = this.rightLineK1;
            // console.log('updateNextRightPoint.before.k1 ===>', k1);
        }


        // 如果 k1 小于 K_DOWN_LIMIT_COUNT
        k1 = Math.abs(k1) < K_DOWN_LIMIT_COUNT ? 0 : k1;
        // console.log('updateNextRightPoint.after.k1 ===>', k1);

        const b1 = rightNextPointPixel.y - k1 * rightNextPointPixel.x;
        // console.log('updateNextRightPoint.b1 ===>', b1);

        // y2 = k2 * x2 + b2

        const k2 = -1 / k1;
        // console.log('updateNextRightPoint.k2 ===>', k2);

        const b2 = operatePointPixel.y - k2 * operatePointPixel.x;
        // console.log('updateNextRightPoint.b2 ===>', b2);

        const isLimit =
            Number.isNaN(k1)
            || !isFinite(k1)
            || isLimitMaxInteger(k1)
            || Number.isNaN(k2)
            || !isFinite(k2)
            || isLimitMaxInteger(k2)
            || Number.isNaN(b1)
            || !isFinite(b1)
            || isLimitMaxInteger(b1)
            || Number.isNaN(b2)
            || !isFinite(b2)
            || isLimitMaxInteger(b2);

        // 设交点坐标为：x,y
        // 则有： y = k1 * x + b1
        // 则有： y = k2 * x + b2
        // 则有： k1 * x + b1 = k2 * x + b2
        // 平行 x轴 的直线，k = 0
        // 平行 y轴 的直线，k = 无穷大
        let x: number;
        let y: number;
        if (k1 === 0) {
            x = operatePointPixel.x;
            y = rightPointPixel.y;
        } else if (isLimit) {
            x = rightPointPixel.x;
            y = operatePointPixel.y;
        } else {
            x = (b2 - b1) / (k1 - k2);
            y = k1 * x + b1;
        }
        // console.log('updateNextRightPoint.x ===>', x);
        // console.log('updateNextRightPoint.y ===>', y);

        const nextRightPointPixel = new AMap.Pixel(x, y);
        // const nextRightPoint = this.map.containerToLngLat(nextRightPointPixel);
        // const nextRightPointCenter = [nextRightPoint.lng, nextRightPoint.lat];
        // this.map.add(new AMap.Marker({ position: nextRightPoint, content: 'nr' }));
        this.dispatch(rightPoint, nextRightPointPixel, data.originEvent);
    }

    dispatch(point: AMap.CircleMarker, pixel: AMap.Pixel, originEvent) {
        const nextLngLat = this.map.containerToLngLat(pixel);

        // NOTE 模拟事件触发只需要这两个字段即可
        const emitData = {
            lnglat: nextLngLat,
            originEvent, // 这里的鼠标事件直接透传即可
        };

        // 触发事件
        point.emit('dragend', emitData);
    }
}

export default ControlPoint;
