/*
 * @FilePath: \Furnace\src\shared\trans.js
 * @Author: maggot-code
 * @Date: 2022-11-21 15:35:56
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-29 22:46:50
 * @Description: 
 */
// 函数类型转换
export function toFunction(func) {
    return isFunction(func) ? func : (source) => source;
}
// 布尔类型转换
export function toBoolean(value, replace = false) {
    return isBoolean(value) ? value : replace;
}

// Null类型转换
export function toNull(value) {
    return isNull(value) ? value : null;
}

// 字符串转换
export function toString(value, replace = "") {
    return isString(value) ? value : replace;
}

// 普通对象转换
export function toPlainObject(value) {
    return isPlainObject(value) ? value : {};
}

// 数组转换
export function toArray(value) {
    return Array.isArray(value) ? value : [];
}

// 普通对象转表单对象
export function toFormData(value) {
    const formData = new FormData();
    for (const key in toPlainObject(value)) {
        formData.append(key, value[key]);
    }
    return formData;
}

// 普通对象合并
export function mergePlainObject(rawTarget, rawValue) {
    // 由于 merge 会改变原对象
    // 先转换普通对象，在克隆
    const to = flow([toPlainObject, cloneDeep]);

    return merge(to(rawTarget), to(rawValue));
}
