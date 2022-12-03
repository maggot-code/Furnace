/*
 * @FilePath: /Furnace/src/internal/router/entity/Group.js
 * @Author: maggot-code
 * @Date: 2022-12-03 23:14:13
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 00:11:45
 * @Description: 
 */
import {
    RouteAsyncKeyword,
    RouteAsyncParentKeyword
} from "~/router/shared/context";
import { RouteEntity } from "~/router/entity/Route";
import { mergeObject } from "~/shared/merge";
import { arrayToTree, treeMap } from "~/metadata/useTree";

// const toTrans = (namespace) => (node) => mergeObject(node, { namespace });
const toTrans = (namespace) => (node) => ({ ...node, namespace });

export function GroupEntity(namespace, dataSource) {
    const tree = arrayToTree(dataSource, {
        self: RouteAsyncKeyword,
        parent: RouteAsyncParentKeyword,
        trans: toTrans(namespace),
    });
    return treeMap(tree, RouteEntity);
}

export default GroupEntity;
