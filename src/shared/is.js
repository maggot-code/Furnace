/*
 * @FilePath: \Furnace\src\shared\is.js
 * @Author: maggot-code
 * @Date: 2022-11-23 01:39:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-24 14:31:58
 * @Description: 
 */
export function isEmptyString(rawValue) {
    return isString(rawValue) && rawValue.trim().length <= 0;
}

export function isEmpty(rawValue) {
    return isEmptyString(rawValue) || isNil(rawValue);
}

export function notEmpty(rawValue) {
    return !isEmpty(rawValue);
}
