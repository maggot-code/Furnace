/*
 * @FilePath: \Furnace\src\router\trans.js
 * @Author: maggot-code
 * @Date: 2022-11-24 11:36:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-24 11:36:21
 * @Description: 
 */
import { isKeyword, mergeMetaData } from "@/router/shared";

// 构建路由原数据
export function buildMetaData(rawRoute) {
    return mergeMetaData(rawRoute);
}

// 转换路由节点
export function transRouteNode(rawRoute) {
    if (isKeyword(rawRoute.namespace) || isKeyword(rawRoute.name)) return;

    const meta = buildMetaData(rawRoute);

    return {
        meta
    };
}
