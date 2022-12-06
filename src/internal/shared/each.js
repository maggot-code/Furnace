/*
 * @FilePath: /Furnace/src/internal/shared/each.js
 * @Author: maggot-code
 * @Date: 2022-12-03 19:10:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-03 19:10:27
 * @Description: 
 */
export function wrapEach(source, handler) {
    const type = typeof source;
    if (type === "object") {
        if (Array.isArray(source)) {
            source.forEach(handler);
        } else {
            Object.keys(source).forEach(key => {
                handler(source[key], key, source);
            });
        }
    }
    return source;
}

export function wrapMap(source, handler) {
    const type = typeof source;
    if (type === "object") {
        if (Array.isArray(source)) {
            return source.map(handler);
        } else {
            return Object.keys(source).map(key => {
                return handler(source[key], key, source);
            });
        }
    }
    return source;
}

export function wrapReduce(source, handler, cache = []) {
    const type = typeof source;
    if (type === "object") {
        if (Array.isArray(source)) {
            return source.reduce(handler, cache);
        } else {
            return Object.keys(source).reduce((cache, key) => {
                return handler(cache, source[key], key, source);
            }, cache);
        }
    }
    return source;
}
