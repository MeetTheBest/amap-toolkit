import { isFinite } from 'lodash-es'
import ElementRotator from 'element-rotator';

import LikeRectangle from '../LikeRectangle';
import Event from '../Event';
import { uuid } from '../utils';
import { computePointDistance } from '../utils/calc';
import { isLimitMaxInteger } from '../utils/index';
import { K_DOWN_LIMIT_COUNT } from '../constants/common';
import type RotationOptions from './type';

const DEFAULT_RADIUS = 10;

class Rotatable extends Event {
    likeRectangleIns!: LikeRectangle & AMap.Polygon;
    opts: RotationOptions;
    elementRotatorIns: ElementRotator | null = null;
    rotationPointIns: AMap.Marker | null = null;
    midPoint!: AMap.LngLat;
    initAngle!: number;
    offset!: number;
    rotationLine!: AMap.Polyline;
    customRotationDOMId = `ID${uuid()}`;
    moveableElementId = `ID${uuid()}`;
    targetElementId = `ID${uuid()}`;

    constructor(likeRectangle: LikeRectangle & AMap.Polygon, opts: RotationOptions = {}) {
        super();
        if (!likeRectangle) {
            throw new Error('likeRectangleIns is required');
        }

        this.likeRectangleIns = likeRectangle;
        this.opts = opts;
        this.open();
    }

    get mapIns() {
        return this.likeRectangleIns.likeRectangle.map;
    }

    get center() {
        return this.likeRectangleIns.likeRectangle.center!;
    }

    get rotatable() {
        return this.likeRectangleIns?.likeRectangle?.opts?.rotatable;
    }

    get draggable() {
        const options = this.likeRectangleIns?.getOptions();
        return options.draggable;
    }

    get radius() {
        const { controllerPointRadius = DEFAULT_RADIUS } = this.opts;
        return Math.max(+`${controllerPointRadius}`.replace('px', '') || DEFAULT_RADIUS, DEFAULT_RADIUS);
    }

    open() {
        if (!this.rotatable) return;
        this.calcMidPoint();
        this.calcInitAngle();
        this.setRotationLine();
        this.registryLikeRectangleEvents();
        // 创建
        this.createRotationPoint();
    }

    reset() {
        this.elementRotatorIns?.destroy?.();
        this.elementRotatorIns = null;
        this.rotationPointIns?.destroy?.();
        this.rotationPointIns = null;
    }

    close() {
        this.reset();
        this.destroyLikeRectangleEvents();
        this.destroyEvent();
    }

    registryLikeRectangleEvents() {
        // 可拖动，注册拖动结束事件
        const hasEvent = this.likeRectangleIns.hasEvents('dragstart', this.onDragStart);
        if (this.draggable && !hasEvent) {
            this.likeRectangleIns!.on('dragstart', this.onDragStart);
            this.likeRectangleIns!.on('dragend', this.onDragEnd);
        }
    }

    destroyLikeRectangleEvents() {
        // 可拖动，注册拖动结束事件
        this.likeRectangleIns!.off('dragstart', this.onDragStart);
        this.likeRectangleIns!.off('dragend', this.onDragEnd);
    }

    /**
     * 旋转点（即中心点）
     */
    async createRotationPoint() {
        this.rotationPointIns?.destroy?.();
        this.rotationPointIns = null;
        this.rotationPointIns = new AMap.Marker({
            map: this.mapIns,
            position: this.center,
            content: this.genMarkerContent(),
        });

        await Promise.resolve();

        this.setMarkerRotatable();
    }

    genMarkerContent = () => {
        const w = 0.05;
        const boxStyle = `width:${w}px; height:${w}px;`;

        const styleStr = Object.entries({
            display: 'inline-block',
            width: `${this.radius}px`,
            height: `${this.radius}px`,
            cursor: 'move',
            background: '#fff',
            border: '2px solid #cc6666',
            'border-radius': '50%',
            'transform-origin': '50% 100%',
        }).reduce((str, [prop, value]) => str += `${prop}:${value};`, '');

        const markerContent = `
            <div
                style="position: relative; ${boxStyle}; background: red;"
                data-rotatable-ref="${this.moveableElementId}"
            >
                <div data-rotatable-ref=${this.customRotationDOMId} style="${styleStr}"></div>
            </div>
        `;
        return markerContent;
    };

    setMarkerRotatable = () => {
        const containerDOM = document.querySelector(`[data-rotatable-ref="${this.moveableElementId}"]`) as HTMLElement;
        const ableDOM = document.querySelector(`[data-rotatable-ref="${this.customRotationDOMId}"]`) as HTMLElement;

        this.offset = this.calcInitOffset() + this.radius;

        const options = { rotate: this.initAngle, top: -this.offset, able: ableDOM };
        this.elementRotatorIns = new ElementRotator(containerDOM, options);

        this.registryEvent();
    };

    registryEvent() {
        if (!this.elementRotatorIns) return;
        this.elementRotatorIns.on('rotateStart', this.onRotateStart);
        this.elementRotatorIns.on('rotate', this.onRotate);
        this.elementRotatorIns.on('rotateEnd', this.onRotateEnd);
        this.mapIns?.on?.('zoomchange', this.updateRotationAbleOffset);
    }

    destroyEvent() {
        if (!this.elementRotatorIns) return;
        this.elementRotatorIns.off('rotateStart', this.onRotateStart);
        this.elementRotatorIns.off('rotate', this.onRotate);
        this.elementRotatorIns.off('rotateEnd', this.onRotateEnd);
        this.mapIns?.off?.('zoomchange', this.updateRotationAbleOffset);
    }

    onRotateStart = () => {
        this.emit('rotateStart', this.likeRectangleIns);
    }

    onRotate = (data) => {
        const { event, rotate } = data;
        this.rotate(rotate - this.initAngle);
        this.emit('rotate', event);
    }

    onRotateEnd = () => {
        this.emit('rotateEnd', this.likeRectangleIns);
    }

    rotate = (deg: number) => {
        const centerXY = this.mapIns.lngLatToContainer(this.center);

        // 左上
        const leftTopPoint = this.likeRectangleIns.leftTop;
        const leftTopPointXY = this.mapIns.lngLatToContainer(leftTopPoint);
        const nexLeftTopPointXY = this.calcRotatePoint(leftTopPointXY, centerXY, deg);
        const leftTopPixel = new AMap.Pixel(nexLeftTopPointXY.x, nexLeftTopPointXY.y);
        const nextLeftTopPoint = this.mapIns.containerToLngLat(leftTopPixel);

        // 右上
        const rightTopPoint = this.likeRectangleIns.rightTop;
        const rightTopPointXY = this.mapIns.lngLatToContainer(rightTopPoint);
        const nexRightTopPointXY = this.calcRotatePoint(rightTopPointXY, centerXY, deg);
        const rightTopPixel = new AMap.Pixel(nexRightTopPointXY.x, nexRightTopPointXY.y);
        const nextRightTopPoint = this.mapIns.containerToLngLat(rightTopPixel);

        // 右下
        const rightBottomPoint = this.likeRectangleIns.rightBottom;
        const rightBottomPointXY = this.mapIns.lngLatToContainer(rightBottomPoint);
        const nextRightBottomPointXY = this.calcRotatePoint(rightBottomPointXY, centerXY, deg);
        const rightBottomPixel = new AMap.Pixel(nextRightBottomPointXY.x, nextRightBottomPointXY.y);
        const nextRightBottomPoint = this.mapIns.containerToLngLat(rightBottomPixel);

        // 左下
        const leftBottomPoint = this.likeRectangleIns.leftBottom;
        const leftBottomPointXY = this.mapIns.lngLatToContainer(leftBottomPoint);
        const nextLeftBottomPointXY = this.calcRotatePoint(leftBottomPointXY, centerXY, deg);
        const leftBottomPixel = new AMap.Pixel(nextLeftBottomPointXY.x, nextLeftBottomPointXY.y);
        const nextLeftBottomPoint = this.mapIns.containerToLngLat(leftBottomPixel);

        const nextPath = [
            [nextLeftTopPoint.lng, nextLeftTopPoint.lat],
            [nextRightTopPoint.lng, nextRightTopPoint.lat],
            [nextRightBottomPoint.lng, nextRightBottomPoint.lat],
            [nextLeftBottomPoint.lng, nextLeftBottomPoint.lat],
        ] as AMap.LngLatLike[];

        // 更新点位
        this.likeRectangleIns.setPath(nextPath);
    };

    calcRotatePoint = (point: AMap.Pixel, center: AMap.Pixel, angle: number) => {
        const x1 = point.x;
        const y1 = point.y;
        const x2 = center.x;
        const y2 = center.y;
        const angleRadian = (angle * Math.PI) / 180;

        const dx = x1 - x2;
        const dy = y1 - y2;
        const newX = dx * Math.cos(angleRadian) - dy * Math.sin(angleRadian) + x2;
        const newY = dx * Math.sin(angleRadian) + dy * Math.cos(angleRadian) + y2;

        return { x: newX, y: newY };
    }

    getDOMTransformRotate = (dom: HTMLElement) => {
        if (!dom) return 0;
        let deg = null;
        const transformStr = dom?.style?.transform || '';
        transformStr.replace(/rotate\((.*)deg\)/g, (_m, $1) => (deg = $1));
        return +deg! || 0;
    };

    calcMidPoint() {
        const path = this.likeRectangleIns?.getPath?.()?.map((lngLat: any) => [lngLat.lng, lngLat.lat])! as number[][];
        if (!path.length || !this.mapIns) {
            throw new Error('likeRectangle or map is undefined');
        }

        const firstPoint = path[0];
        console.log('firstPoint ===>', firstPoint);
        const firstPointPixel = this.mapIns.lngLatToContainer(firstPoint);
        // new AMap.Marker({ map: this.mapIns, position: firstPoint as unknown as AMap.Vector2 });

        const secondPoint = path[1];
        console.log('secondPoint ===>', secondPoint);
        const secondPointPixel = this.mapIns.lngLatToContainer(secondPoint);
        // new AMap.Marker({ map: this.mapIns, position: secondPoint as unknown as AMap.Vector2 });

        // y1 = k1 * x1 + b1
        let k1 = (firstPointPixel.y - secondPointPixel.y) / (firstPointPixel.x - secondPointPixel.x);
        k1 = Math.abs(k1) < K_DOWN_LIMIT_COUNT ? 0 : k1;
        const b1 = firstPointPixel.y - k1 * firstPointPixel.x;
        // console.log('calcMidPoint.k1 ===>', k1);
        // console.log('calcMidPoint.b1 ===>', b1);
        // 平行于 x 轴的直线，斜率为 0

        // 互相垂直的线的斜率乘积为 -1
        // console.log('calcMidPoint.center ===>', this.center);
        const centerPixel = this.mapIns.lngLatToContainer(this.center);
        const k2 = -1 / k1;
        const b2 = centerPixel.y - k2 * centerPixel.x;
        // console.log('calcMidPoint.k2 ===>', k2);
        // console.log('calcMidPoint.b2 ===>', b2);

        const isLimit = !isFinite(k1)
            || isLimitMaxInteger(k1)
            || !isFinite(k2)
            || isLimitMaxInteger(k2)
            || !isFinite(b1)
            || isLimitMaxInteger(b1)
            || !isFinite(b2)
            || isLimitMaxInteger(b2);

        // 设交点坐标为：x,y
        // 则有： y1 = k1 * x + b1
        // 则有： y2 = k2 * x + b2
        // 则有： k1 * x + b1 = k2 * x + b2
        let x: number;
        if (k1 === 0) {
            x = (firstPointPixel.x + secondPointPixel.x) / 2;
        } else if (isLimit) {
            x = firstPointPixel.x;
        } else {
            x = (b2 - b1) / (k1 - k2);
        }

        let y: number;
        if (k1 === 0) {
            y = firstPointPixel.y;
        } else if (isLimit) {
            y = (firstPointPixel.y + secondPointPixel.y) / 2;
        } else {
            y = k1 * x + b1;
        }
        // console.log('calcMidPoint.x ===>', x);
        // console.log('calcMidPoint.y ===>', y);

        const xyPixel = new AMap.Pixel(x, y);
        this.midPoint = this.mapIns.containerToLngLat(xyPixel);
        // new AMap.Marker({ map: this.mapIns, position: this.midPoint });

        return this.midPoint;
    }

    /**
     * 计算第一条连线的中点，位于中心点角度
     */
    calcInitAngle() {
        if (!this.mapIns) return;
        const mitPointPixel = this.mapIns.lngLatToContainer(this.midPoint);
        const centerPixel = this.mapIns.lngLatToContainer(this.center);

        const radian = Math.atan2(mitPointPixel.y - centerPixel.y, mitPointPixel.x - centerPixel.x);
        // 默认加 90 度，因为初始位置为垂直向上
        this.initAngle = 180 / Math.PI * radian + 90;
        return this.initAngle;
    }

    // TODO 需要处理小于中点的情况
    calcInitOffset() {
        if (!this.mapIns) return 0;

        const mitPointPixel = this.mapIns.lngLatToContainer(this.midPoint);
        const centerPixel = this.mapIns.lngLatToContainer(this.center);

        // 先直接放到中点上 this.radius/2:圆中心; +4: 上下边宽
        return (computePointDistance(mitPointPixel, centerPixel)) - (this.radius / 2 + 4);
    }

    updateRotationAbleOffset = () => {
        const dom = document.querySelector(`#${this.customRotationDOMId}`) as HTMLElement;

        let offset = null;
        let transformStr = dom?.style?.transform || '';
        transformStr.replace(/translateY\((.*)px\)/g, (_m, $1) => (offset = $1));
        if (!offset) return;

        const nextOffset = `-${this.calcInitOffset()}`;
        transformStr = transformStr.replace(new RegExp(offset, 'g'), nextOffset);
        dom.style.transform = transformStr;

        // 设置 offset 值
        this.offset = this.calcInitOffset();
    }

    private onDragStart = async () => {
        console.log('Rotatable.onDragStart');
        this.reset();
    }

    /**
     * 拖拽结束后，需要重新计算一下点位数据
     */
    private onDragEnd = async () => {
        console.log('Rotatable.onDragEnd');
        this.open();
    }

    // setRotationPoint() {

    // }

    setRotationLine() {
        // const path = [this.center, this.midPoint]

        // this.rotationLine = new AMap.Polyline({ path, strokeColor: '#cc6666' });
        // this.mapIns.add(this.rotationLine);
    }
}

export default Rotatable;
