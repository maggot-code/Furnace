/*
 * @FilePath: \Furnace\src\internal\shared\trans.js
 * @Author: maggot-code
 * @Date: 2022-12-03 17:33:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-12 13:39:51
 * @Description: 
 */
// 默认值转换
export function transDefault(value, replace) {
    return isNil(value) ? replace : value;
}

// 对象转换
export function transObject(value, replace = {}) {
    return isPlainObject(value) ? value : replace;
}

// 数组转换
export function transArray(value, replace = []) {
    return Array.isArray(value) ? value : replace;
}

// 函数转换
export function transFunction(func, replace = (value) => value) {
    return isFunction(func) ? func : replace;
}

// 布尔转换
export function transBoolean(value, replace = false) {
    return isBoolean(value) ? value : replace;
}

// 字符串转换
export function transString(value, replace = "") {
    return isString(value) ? value : replace;
}

// 数字转换
export function transNumber(value, replace = 0) {
    return isNumber(value) ? value : replace;
}

// Null转换
export function transNull(value, replace = null) {
    return isNull(value) ? value : replace;
}

// URL参数转换
export function transURL(url) {
    const paramsString = url.split("?")[1];
    const searchParams = new URLSearchParams(paramsString);
    return Object.fromEntries(searchParams.entries());
}

// 表单数据转换
export function transFormData(data) {
    const formData = new FormData();
    for (const key in data) {
        formData.append(key, data[key]);
    }
    return formData;
}
