import LineCollection from '../PolygonEditorRanging/lineCollection';
import { IDistanceText } from '../PolygonEditorRanging/type';
import { createText, computePoint2PointDistance } from '../utils/index';
import { IOptions } from './type';

export default class PolygonRanging {
    opts: IOptions | undefined = undefined;
    private map: AMap.Map;
    // 线集合
    private lines: LineCollection | null = null;
    // 多边形
    private polygon: AMap.Polygon | null = null;
    // 线长的文本呢
    private lineLengthText: AMap.Text | null = null;

    // 兜底设置编辑中间点标记列表路径
    editingMidTipMarkerListPath: string | ((polygonEditor: AMap.PolygonEditor) => AMap.PolygonEditor) | null = null;

    constructor(map: AMap.Map, opts?: IOptions) {
        if (!map) {
            throw new Error('map not found!');
        }
        this.opts = opts;
        this.map = map;
        this.lines = new LineCollection(this.map);

        this.immediateActive();
    }

    get immediate() {
        return this.opts?.immediate;
    }

    get draggable() {
        const options = this.polygon?.getOptions();
        return options.draggable;
    }

    get rotatable() {
        // @ts-ignore
        return this.polygon?.rotatable;
    }

    /**
     * 立刻激活
     */
    private immediateActive() {
        const target = this.opts?.target as AMap.Polygon;
        if (this.immediate && target.CLASS_NAME === 'Overlay.Polygon') {
            this.open(target);
        }
    }

    /**
     * 开始边线测距
     * @param polygon
     * @returns
     */
    public open(polygon: AMap.Polygon) {
        this.start(polygon || this.polygon);
    }

    /**
     * 开始边线测距
     * @param polygon
     * @returns
     */
    public start(polygon: AMap.Polygon) {
        if (!polygon) return;

        this.polygon = polygon;
        this.lines!.createLinesByPaths(this.polygon.getPath() as Common.IPath);
        // 鼠标移动，判断是否命中了计算 PolygonEditor 的计算处理
        const hasEvent = this.map.hasEvents('mousemove', this.onPolygonRanging) || this.map.hasEvents('touchmove', this.onPolygonRanging);
        if (!hasEvent) {
            this.map.on('mousemove', this.onPolygonRanging);
            this.map.on('touchmove', this.onPolygonRanging);
        }

        this.registryPolygonEvents();
    }

    registryPolygonEvents() {
        if (!this.polygon) return;

        // 可拖动，注册拖动结束事件
        if (this.draggable) {
            this.polygon!.on('dragend', this.onDragEnd);
        }

        if (this.rotatable && 'likeRectangle' in this.polygon) {
            // @ts-ignore
            this.polygon!.on('rotateEnd', this.onRotateEndEnd);
        }
    }

    destroyPolygonEvents() {
        if (!this.polygon) return;
        this.polygon!.off?.('dragend', this.onDragEnd);
        // @ts-ignore
        this.polygon!.off?.('rotateEnd', this.onRotateEndEnd);
    }

    public close() {
        this.stop();
    }

    public stop() {
        // 鼠标移动，判断是否命中了计算 PolygonEditor 的计算处理
        this.map.off('mousemove', this.onPolygonRanging);
    }

    private onPolygonRanging = (event: Common.Event) => {
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

    private updateDistanceText(textIns: AMap.Text, { text, textPos }: IDistanceText) {
        textIns.setText(text);
        textIns.setPosition(textPos);
    }

    private removeLineDistanceText() {
        this.lineLengthText?.remove();
        this.lineLengthText = null;
    }

    /**
 * 拖拽结束后，需要重新计算一下点位数据
 */
    private onRotateEndEnd = async () => {
        await Promise.resolve();

        const target = this.polygon;
        this.onDragEnd({ target });
    }

    /**
     * 拖拽结束后，需要重新计算一下点位数据
     */
    private onDragEnd = async (data: IObject) => {
        const target = data.target;
        this.lines?.reset();
        // 等一个微任务
        await Promise.resolve();
        // 重新生成线条
        this.lines!.createLinesByPaths(target.getPath() as Common.IPath);
    }

    public destroy() {
        this.stop();
        this.removeLineDistanceText();
        this.destroyPolygonEvents();
        this.polygon = null;
        return this;
    }
}
