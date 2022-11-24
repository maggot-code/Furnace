/*
 * @FilePath: \Furnace\src\router\trans.js
 * @Author: maggot-code
 * @Date: 2022-11-24 11:36:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-24 18:32:51
 * @Description: 
 */
import { notEmpty } from "@/shared/is";
import { mergePlainObject } from "@/shared/trans";
import { arrayToTree, treeMap } from "@/shared/metadata/trans";
import {
    checkParent,
    checkDataSource,
    mergeMetaData,
    mergeRouterConfig,
} from "@/router/shared";

// 转换路由节点
export function transRouteNode({ parent, item, level }) {
    // 如果无法通过检查，则记录该数据源信息
    // recordBadRoute 还没实现 TODO..
    // if(checkDataSource(rawRoute)) return recordBadRoute(rawRoute);
    if (checkDataSource(item)) return;

    const rawMeta = {
        parent,
        level,
        hasParent: notEmpty(parent),
        hasChild: notEmpty(item.children)
    };

    return mergePlainObject(item, {
        parent,
        level,
        meta: mergeMetaData(mergePlainObject(item, rawMeta)),
        config: mergeRouterConfig(item),
    });
}

// 转换路由组
export function transRouteGroup(rawData) {
    // 结构转换
    const tree = arrayToTree(null, rawData, { check: checkParent });

    // 节点转换
    return treeMap(tree, transRouteNode);
}
