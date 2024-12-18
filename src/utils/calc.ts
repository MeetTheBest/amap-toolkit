
/**
 * 计算两个点位的距离
 * @param position
 * @param p2
 * @returns
 */
export const computePoint2PointDistance = (p1: AMap.LngLat, p2: AMap.LngLat): Common.IDistanceText => {
    const textPos = p1.divideBy(2).add(p2.divideBy(2));
    const distance = Math.round(p1.distance(p2));
    return { text: `${distance}米`, textPos } as unknown as Common.IDistanceText;
}

/**
 * 平面坐标内，计算两个点的距离
 * @param p1
 * @param p2
 * @returns
 */
export const computePointDistance = (p1: AMap.Pixel, p2: AMap.Pixel) => {
    return Math.sqrt(Math.pow((Math.abs(p1.x - p2.x)), 2) + Math.pow((Math.abs(p1.y - p2.y)), 2));
}
