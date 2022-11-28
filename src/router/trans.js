/*
 * @FilePath: \Furnace\src\router\trans.js
 * @Author: maggot-code
 * @Date: 2022-11-24 11:36:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-29 01:29:52
 * @Description: 
 */
import { arrayToTree, treeMap } from "@/shared/metadata/trans";
import { checkParent, checkDataSource, matedataRoute } from "@/router/shared";

// 转换路由节点
export function transRouteNode(rawNode) {
    // 如果无法通过检查，则记录该数据源信息
    // recordBadRoute 还没实现 TODO..
    // if(checkDataSource(rawRoute)) return recordBadRoute(rawRoute);
    // if (checkDataSource(rawNode)) return;

    return rawNode;
}

// 转换路由组
export function transRouteGroup(rawData, namespace) {
    // 结构转换
    const tree = arrayToTree(null, rawData, {
        check: checkParent,
        adapter: (route) => matedataRoute(namespace, route),
    });

    // 节点转换
    return treeMap(tree, transRouteNode);
}
