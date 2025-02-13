import { PolygonEditorOptions } from '@amap/amap-jsapi-types/plugins/PolygonEditor';
import LikeRectangle from "../LikeRectangle";
import ControlPoint from './controlPoint';
import { IEnhanceProperty, IEnhanceEditorOptions } from './type';

/**
 * 默认配置
 */
const DEFAULT_OPTS: IEnhanceEditorOptions = {
    rotatingCloseEditor: true,
    editingCloseRotator: true,
    isMobile: false,
};

class LikeRectangleEditor {
    opts!: PolygonEditorOptions & IEnhanceEditorOptions;
    map!: AMap.Map;
    likeRectangle!: LikeRectangle;
    polygonEditor!: AMap.PolygonEditor & IEnhanceProperty;
    polygonEditorOpen!: () => void;
    polygonEditorClose!: () => void;
    controlPoints!: ControlPoint[];
    inEditing = false;
    isRestart = false;

    constructor(map: AMap.Map, likeRectangle: LikeRectangle, opts?: PolygonEditorOptions & IEnhanceEditorOptions) {
        this.map = map;
        this.likeRectangle = likeRectangle;
        this.opts = { ...DEFAULT_OPTS, ...(opts || {}) };

        this.onChange = this.onChange.bind(this);

        // @ts-ignore
        return this.createEditor();
    }

    get options() {
        return {
            ...this.opts,
            midControlPoint: { radius: 0 }
        } as PolygonEditorOptions;
    }

    get rotatable() {
        return this.likeRectangle?.likeRectangle?.opts?.rotatable;
    }

    get rotatingCloseEditor() {
        return this.opts.rotatingCloseEditor;
    }

    get rotatableIns() {
        // @ts-ignore
        return this.likeRectangle?.likeRectangle?.rotatableIns;
    }

    get isMobile() {
        return this.opts.isMobile;
    }

    /**
     * 重新 polygonEditor.open 方法
     */
    open() {
        this.inEditing = true;
        this.polygonEditorOpen();
        this.registryLikeRectangleRotateEvents();
        this.registryControlPoints();
    }

    close() {
        this.inEditing = false;
        this.destroyLikeRectangleRotateEvents();
        this.polygonEditorClose();
    }

    findControlPoint(point: AMap.CircleMarker) {
        return this.controlPoints.find(controlPoint => {
            const controlPointCenter = controlPoint.point.getCenter();
            const controlPointLngLat = `${controlPointCenter.lng}_${controlPointCenter.lat}`;

            const pointCenter = point.getCenter();
            const pointCenterLngLat = `${pointCenter.lng}_${pointCenter.lat}`;

            return controlPointLngLat === pointCenterLngLat;
        });
    }

    createEditor() {
        const polygon = this.likeRectangle as unknown as AMap.Polygon;

        this.polygonEditor = new AMap.PolygonEditor(this.map, polygon, this.options) as AMap.PolygonEditor & IEnhanceProperty;

        // 增强属性
        this.enhanceProperty();

        return this.polygonEditor;
    }

    enhanceProperty() {
        this.polygonEditor.likeRectangleEditor = this;

        this.polygonEditorOpen = this.polygonEditor.open.bind(this.polygonEditor);
        this.polygonEditor.open = this.open.bind(this);

        this.polygonEditorClose = this.polygonEditor.close.bind(this.polygonEditor);
        this.polygonEditor.close = this.close.bind(this);
    }

    registryLikeRectangleRotateEvents() {
        if (this.rotatable && this.rotatingCloseEditor) {
            this.likeRectangle!.on('rotateStart', this.onRotateStart);
            this.likeRectangle!.on('rotateEnd', this.onRotateEnd);
        }
    }

    destroyLikeRectangleRotateEvents() {
        if (this.rotatable && this.rotatingCloseEditor) {
            this.likeRectangle!.off('rotateStart', this.onRotateStart);
            this.likeRectangle!.off('rotateEnd', this.onRotateEnd);
        }
    }

    registryControlPoints() {
        (this.controlPoints || []).forEach(controlPoint => {
            controlPoint.destroyEvent();
        });

        // @ts-ignore
        const controlPoints = (this.polygonEditor?.singleRingListHandle?.list?.editingVertexMarkerList ?? []) as AMap.CircleMarker[];

        this.controlPoints = controlPoints.map((controlPoint, idx) => {
            const extData = controlPoint.getExtData() || {};
            controlPoint.setExtData({ ...extData, idx });

            return new ControlPoint(this, controlPoint, controlPoints);
        });
    }

    onDragStart = (data) => {
        // NOTE 点位编辑时，关闭旋转功能
        this.rotatableIns?.close?.();
        this.onChange('dragstart', data);
    }

    onDragging = (data) => {
        this.updateLikeRectanglePath();
        this.onChange('dragging', data);
    }

    onDragEnd = (data) => {
        // NOTE 点位编辑时，开启旋转功能
        this.rotatableIns?.open?.();
        this.onChange('dragend', data);
    }

    onChange = (type: string, data) => {
        // TODO 后续支持事件
        this.opts?.onChange?.(type, data);
    }

    updateLikeRectanglePath() {
        const [
            leftTopControlPoint,
            rightTopControlPoint,
            rightBottomControlPoint,
            leftBottomControlPoint
        ] = this.controlPoints;

        const leftTopControlPointCenter = leftTopControlPoint.point.getCenter();
        const rightTopControlPointCenter = rightTopControlPoint.point.getCenter();
        const rightBottomControlPointCenter = rightBottomControlPoint.point.getCenter();
        const leftBottomControlPointCenter = leftBottomControlPoint.point.getCenter();

        this.likeRectangle.likeRectangle.updatePoints(
            [leftTopControlPointCenter.lng, leftTopControlPointCenter.lat],
            [rightTopControlPointCenter.lng, rightTopControlPointCenter.lat],
            [rightBottomControlPointCenter.lng, rightBottomControlPointCenter.lat],
            [leftBottomControlPointCenter.lng, leftBottomControlPointCenter.lat],
        );
    }

    onRotateStart = async () => {
        if (!this.inEditing) return;
        this.polygonEditorClose();
    }

    onRotateEnd = async () => {
        if (!this.inEditing) return;
        this.open();
    }
}

export default LikeRectangleEditor;
