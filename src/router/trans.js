/*
 * @FilePath: \Furnace\src\router\trans.js
 * @Author: maggot-code
 * @Date: 2022-11-24 11:36:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 10:06:16
 * @Description: 
 */
import { matchView } from "@/shared/metadata/views";
import { arrayToTree, treeMap } from "@/shared/metadata/trans";
import { checkDataSource } from "@/router/shared";
import { PickRouteKeyword, PickRouteMetaKeyword } from "@/router/context";
import RouterNamespace, { UnknownNamespace } from "@/router/namespace";

// 转换Path
export function transPath({ address }) {
    return address;
}

// 转换Component
export function transComponent({ component }) {
    const view = matchView(component);

    if (isNil(view)) return;

    return defineAsyncComponent(view);
}

// 转换路由元数据
export function transMate(route) {
    return pick(route, PickRouteMetaKeyword);
}

// 转换路由节点
export function transRouteNode(rawNode) {
    // 如果无法通过检查，则记录该数据源信息
    // recordBadRoute 还没实现 TODO..
    // if(checkDataSource(rawRoute)) return recordBadRoute(rawRoute);
    if (checkDataSource(rawNode)) return;

    const { wrap } = RouterNamespace[rawNode.namespace];

    return pick(wrap(rawNode), PickRouteKeyword);
}

// 转换路由组
export function transRouteGroup(rawData, namespace) {
    // 结构转换
    const tree = arrayToTree(rawData, {
        self: "id",
        parent: "pid",
        adapter: (node) => ({
            ...node,
            namespace: namespace ?? UnknownNamespace
        }),
    });

    // 节点转换
    return treeMap(tree, transRouteNode);
}
