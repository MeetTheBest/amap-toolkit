import { omit } from 'lodash-es'

const STYLE = {
    radius: 6,
    zIndex: 0,
    strokeOpacity: 0,
    fillOpacity: 0
};

class CircleMarkerCollection {
    map: AMap.Map;
    options: AMap.MarkerOptions = { ...STYLE };

    circleMarkers: AMap.CircleMarker[] = [];

    constructor(map: AMap.Map) {
        this.map = map;
    }

    setOptions(options: AMap.MarkerOptions) {
        this.options = { ...options, ...omit(STYLE, 'radius') };
        return this;
    }

    createCircleMarkersByPaths(paths: Common.IPath) {
        this.removeFromTheMap();
        this.reset();

        paths.forEach(path => {
            this.circleMarkers.push(this.createCircleMarker(path));
        });

        this.addToMap();
    }

    createCircleMarker(center: AMap.LngLat) {
        return new AMap.CircleMarker({ center, ...this.options });
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
    getPointInCircleMarkers(pos: AMap.LngLat) {
        return this.circleMarkers.find(ring => this.isPointInCircle(pos, ring)) ?? null;
    }

    /**
     * 获取点是否在围栏编辑器的蓝色操作点上（即中间点）
     * @param {*} pos
     * @returns
     */
    getInCircleMarkersPoint(pos: AMap.LngLat) {
        const circleMarker = this.circleMarkers.find(ring => this.isPointInCircle(pos, ring));
        const idx = this.circleMarkers.findIndex(c => c === circleMarker);
        if (idx % 2 === 0) return null;
        return circleMarker ?? null;
    }

    isPointInCircle(p: AMap.LngLat, circle: AMap.CircleMarker) {
        return circle.contains(p);
    }

    reset() {
        this.circleMarkers = [];
    }

    destroy() {
        this.removeFromTheMap();
        this.reset();
    }
}

export default CircleMarkerCollection;
