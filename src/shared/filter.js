/*
 * @FilePath: \Furnace\src\shared\filter.js
 * @Author: maggot-code
 * @Date: 2022-11-27 22:07:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 14:25:42
 * @Description: 
 */
import { toPlainObject } from "@/shared/trans";
import { isEmptyObject, isUsable } from "@/shared/is";

// 过滤普通对象空值
export function filterEmptyPlainObject(value) {
    if (isEmptyObject(value)) return {};

    const data = toPlainObject(value);

    return Object.keys(data).reduce((source, key) => {
        const item = data[key];

        if (isUsable([item])) source[key] = item;

        return source;
    }, {});
}
