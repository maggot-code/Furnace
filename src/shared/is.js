/*
 * @FilePath: \Furnace\src\shared\is.js
 * @Author: maggot-code
 * @Date: 2022-11-23 01:39:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-24 18:21:29
 * @Description: 
 */
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
