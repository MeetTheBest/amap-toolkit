/**
 * 创建一个去重后的数组，使用 SameValueZero 比较。
 *
 * @param array 要检查的数组
 * @returns 返回新的去重后的数组
 *
 * @example
 *
 * uniq([2, 1, 2])
 * // => [2, 1]
 *
 * uniq([1, 2, 3, 3, 4, 4, 5])
 * // => [1, 2, 3, 4, 5]
 */
export function uniq<T>(array: T[]): T[] {
    if (!Array.isArray(array)) {
        return [];
    }

    return Array.from(new Set(array));
}

/**
 * 检查 value 是否是一个有限数值。
 * 与全局 isFinite() 不同，这个方法不会强制转换参数为数值。
 *
 * @param value 要检查的值
 * @returns 如果 value 是有限数值则返回 true，否则返回 false
 *
 * @example
 *
 * isFinite(3)
 * // => true
 *
 * isFinite(Number.MIN_VALUE)
 * // => true
 *
 * isFinite(Infinity)
 * // => false
 *
 * isFinite('3')
 * // => false
 */
export function isFinite(value: any): boolean {
    if (typeof value !== 'number') {
        return false;
    }

    return Number.isFinite(value);
}

/**
 * 获取对象的嵌套属性值。
 * 如果解析路径是 undefined 或者路径不存在，则返回 defaultValue。
 *
 * @param object 要查询的对象
 * @param path 要获取的属性路径，可以是字符串或数组
 * @param defaultValue 如果解析值是 undefined，则返回这个值
 * @returns 返回解析的值
 *
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * get(object, 'a[0].b.c');
 * // => 3
 *
 * get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * get(object, 'a.b.c', 'default');
 * // => 'default'
 */
export function get(object: any, path: string | string[], defaultValue?: any): any {
    if (object == null) {
        return defaultValue;
    }

    // 将路径转换为数组形式
    const keys = Array.isArray(path) ? path : path.split(/\.|\[|\]/).filter(Boolean);

    let result = object;

    for (const key of keys) {
        if (result == null) {
            return defaultValue;
        }

        result = result[key];
    }

    return result === undefined ? defaultValue : result;
}

/**
 * 创建一个新对象，忽略指定的属性。
 *
 * @param object 源对象
 * @param paths 要忽略的属性路径
 * @returns 返回新对象
 *
 * @example
 *
 * const object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
export function omit<T extends object>(object: T, paths: string | string[]): Partial<T> {
    if (object == null) {
        return {};
    }

    const result = { ...object };
    const keysToOmit = Array.isArray(paths) ? paths : [paths];

    for (const key of keysToOmit) {
        delete result[key as keyof T];
    }

    return result;
}
