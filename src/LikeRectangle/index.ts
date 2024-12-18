import type { ILikeRectangle, ILikeRectangleOptions, IEnhanceProperty } from './type';
import Event from '../Event';
import Rotatable from '../Rotatable';
import { formatNumber } from '../utils';

class LikeRectangle extends Event implements ILikeRectangle {
    opts!: ILikeRectangleOptions;
    map!: AMap.Map;
    width!: number;
    height!: number;
    center!: AMap.Vector2;
    leftTop!: AMap.Vector2; // 左上点
    rightTop!: AMap.Vector2; // 右上点
    leftBottom!: AMap.Vector2; // 左下点
    rightBottom!: AMap.Vector2; // 右下点
    likeRectangle!: AMap.Polygon & IEnhanceProperty;
    rotatableIns!: Rotatable | null;
    likeRectangleDestroy!: () => void;
    likeRectangleRawSetOptions!: (optsArg: AMap.PolygonOptions) => void;

    constructor(opts: ILikeRectangleOptions) {
        super();

        this.validatorOpts(opts);

        this.bindOptsToSelf(opts);

        if (!opts.path) {
            this.setPoints();
        }

        const ins = this.create() as AMap.Polygon & IEnhanceProperty;

        this.registerRotatable();

        this.enhanceMethods();

        // @ts-ignore
        return ins;
    }

    validatorOpts(opts: ILikeRectangleOptions) {
        if (!('map' in opts) || !opts.map) {
            throw new Error('not found map instance');
        }
    }

    bindOptsToSelf(opts: ILikeRectangleOptions) {
        this.opts = opts;
        Object.entries(opts).forEach(([key, value]) => {
            this[key] = value;
        });
    }

    enhanceMethods() {
        // 重写销毁方法
        this.likeRectangleDestroy = this.likeRectangle.destroy.bind(this.likeRectangle);
        this.likeRectangle.destroy = this.destroy.bind(this);

        // 重写 setOptions 方法
        this.likeRectangleRawSetOptions = this.likeRectangle.setOptions.bind(this.likeRectangle);
        this.likeRectangle.setOptions = this.likeRectangleSetOptions.bind(this);
    }

    likeRectangleSetOptions(optsArg: AMap.PolygonOptions & ILikeRectangleOptions): void {
        const { rotatable } = { ...this.opts, ...(optsArg || {}) };
        this.likeRectangleRawSetOptions(optsArg);

        // 注册旋转
        if (rotatable) {
            this.opts.rotatable = true;
            this.registerRotatable();
        } else {
            // 销毁旋转
            this.opts.rotatable = false;
            this.rotatableIns?.close?.();
            this.rotatableIns = null;
        }
    }

    destroy() {
        this.rotatableIns?.close?.();
        this.likeRectangleDestroy();
    }

    registerRotatable() {
        const { rotatable, rotationOptions } = this.opts;
        if (!rotatable || this.rotatableIns) return;

        this.rotatableIns = new Rotatable(this.likeRectangle as unknown as LikeRectangle & AMap.Polygon, rotationOptions);
        const target = this.likeRectangle;
        this.rotatableIns.on('rotateStart', (event) => target.emit('rotateStart', event));
        this.rotatableIns.on('rotate', (event) => target.emit('rotate', event));
        this.rotatableIns.on('rotateEnd', (event) => target.emit('rotateEnd', event));
    }

    calcPoints(center?: AMap.Vector2) {
        const [centerLng, centerLat] = center || this.center!;
        const centerPoint = new AMap.LngLat(centerLng, centerLat);

        const HALF_WIDTH = formatNumber(this.width / 2);
        const HALF_HEIGHT = formatNumber(this.height / 2);

        // 左上
        const leftTop = centerPoint.offset(-HALF_WIDTH, HALF_HEIGHT);
        // 右上
        const rightTop = centerPoint.offset(HALF_WIDTH, HALF_HEIGHT);
        // 左下
        const leftBottom = centerPoint.offset(-HALF_WIDTH, -HALF_HEIGHT);
        // 右下
        const rightBottom = centerPoint.offset(HALF_WIDTH, -HALF_HEIGHT);

        return {
            leftTop: [leftTop.lng, leftTop.lat] as AMap.Vector2,
            rightTop: [rightTop.lng, rightTop.lat] as AMap.Vector2,
            leftBottom: [leftBottom.lng, leftBottom.lat] as AMap.Vector2,
            rightBottom: [rightBottom.lng, rightBottom.lat] as AMap.Vector2,
        };
    }

    setCenter(center: AMap.Vector2) {
        this.center = center;
    }

    setPoints() {
        const { leftTop, rightTop, leftBottom, rightBottom } = this.calcPoints();
        this.leftTop = leftTop;
        this.rightTop = rightTop;
        this.leftBottom = leftBottom;
        this.rightBottom = rightBottom;
    }

    create(): AMap.Polygon & IEnhanceProperty {
        const path = this.opts?.path || [this.leftTop, this.rightTop, this.rightBottom, this.leftBottom];

        if (path.length !== 4) {
            throw new Error('invalid path');
        }

        this.likeRectangle = new AMap.Polygon() as AMap.Polygon & IEnhanceProperty;

        this.likeRectangle.setOptions({ path, ...this.opts });

        // 扩展属性
        this.enhanceProperty();

        // 注册事件
        this.registryEvent();

        if (this.opts?.path) {
            const [leftTop, rightTop, rightBottom, leftBottom] = this.opts?.path as AMap.Vector2[];
            this.updatePoints(leftTop, rightTop, rightBottom, leftBottom);
        }

        return this.likeRectangle;
    }

    enhanceProperty() {
        this.likeRectangle.likeRectangle = this;
        this.likeRectangle.leftTop = this.leftTop;
        this.likeRectangle.rightTop = this.rightTop;
        this.likeRectangle.rightBottom = this.rightBottom;
        this.likeRectangle.leftBottom = this.leftBottom;
        this.likeRectangle.rotatable = this.opts.rotatable;
    }

    registryEvent() {
        if (!this.likeRectangle) return;

        this.onDragEnd = this.onDragEnd.bind(this);

        this.likeRectangle.on('dragend', this.onDragEnd);
    }

    onDragEnd(data: IObject) {
        const target = data.target as AMap.Polygon & IEnhanceProperty;
        const path = target.getPath()!;

        const [leftTop, rightTop, rightBottom, leftBottom] = path;
        this.updatePoints(leftTop, rightTop, rightBottom, leftBottom);
    }

    updatePoints(leftTop: AMap.Vector2, rightTop: AMap.Vector2, rightBottom: AMap.Vector2, leftBottom: AMap.Vector2) {
        this.likeRectangle.leftTop = this.leftTop = leftTop;
        this.likeRectangle.rightTop = this.rightTop = rightTop;
        this.likeRectangle.rightBottom = this.rightBottom = rightBottom;
        this.likeRectangle.leftBottom = this.leftBottom = leftBottom;

        this.setCenter(this.getCenter());
    }

    getCenter() {
        // getFitZoomAndCenterByOverlays 返回 [zoom, center]
        // #like https://developer.amap.com/api/jsapi-v2/documentation#mapgetfitzoomandcenterbyoverlays
        const center = this.map.getFitZoomAndCenterByOverlays([this.likeRectangle])?.pop();
        return center;
    }
}

export default LikeRectangle;
