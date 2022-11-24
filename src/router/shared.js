/*
 * @FilePath: \Furnace\src\router\shared.js
 * @Author: maggot-code
 * @Date: 2022-11-24 11:07:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-24 11:31:29
 * @Description: 
 */
import { Keyword, MetaData } from "@/router/context";
import { mergePlainObject } from "@/shared/trans";

// 是否是关键字
export function isKeyword(value) {
    const isUpper = flow([toUpper, Keyword.includes]);
    const isLower = flow([toLower, Keyword.includes]);

    return (
        Keyword.includes(value)
        || isUpper(value)
        || isLower(value)
    );
}

// 合并标准元数据
export function mergeMetaData(rawMateData) {
    return mergePlainObject(MetaData, rawMateData);
}
