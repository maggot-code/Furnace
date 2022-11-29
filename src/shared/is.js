/*
 * @FilePath: \Furnace\src\shared\is.js
 * @Author: maggot-code
 * @Date: 2022-11-23 01:39:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 02:44:22
 * @Description: 
 */
import { toArray, toPlainObject } from "@/shared/trans";

export function isUsable(rawSource) {
    const source = toArray(rawSource);
    return compact(source).length === source.length;
}

export function isUnusable(source) {
    return !isUsable(source);
}

export function isEmptyString(rawValue) {
    return isString(rawValue) && rawValue.trim().length <= 0;
}

export function isEmptyArray(rawValue) {
    return Array.isArray(rawValue) && rawValue.length <= 0;
}

export function isEmptyObject(rawValue) {
    const group = flow([
        toPlainObject,
        Object.keys,
        toArray,
        isEmptyArray
    ]);
    return group(rawValue);
}

export function isEmpty(rawValue) {
    return [
        isNil(rawValue),
        isEmptyString(rawValue),
        isEmptyArray(rawValue),
        isEmptyObject(rawValue)
    ].some((item) => !!item);
}

export function notEmpty(rawValue) {
    return !isEmpty(rawValue);
}
