/*
 * @FilePath: /Furnace/src/shared/is.js
 * @Author: maggot-code
 * @Date: 2022-11-23 01:39:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-26 16:11:11
 * @Description: 
 */
import { toArray } from "@/shared/trans";

export function isEmptyString(rawValue) {
    return isString(rawValue) && rawValue.trim().length <= 0;
}

export function isEmptyArray(rawValue) {
    return Array.isArray(rawValue) && rawValue.length <= 0;
}

export function isEmpty(rawValue) {
    return [
        isNil(rawValue),
        isEmptyString(rawValue),
        isEmptyArray(rawValue)
    ].includes(true);
}

export function notEmpty(rawValue) {
    return !isEmpty(rawValue);
}

export function isUsable(rawSource) {
    const source = toArray(rawSource);
    return compact(source).length === source.length;
}

export function isUnusable(source) {
    return !isUsable(source);
}
