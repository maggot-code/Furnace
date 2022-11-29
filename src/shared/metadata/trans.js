/*
 * @FilePath: \Furnace\src\shared\metadata\trans.js
 * @Author: maggot-code
 * @Date: 2022-11-24 13:00:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 03:30:46
 * @Description: 
 */
import { toArray, mergePlainObject } from "@/shared/trans";
import { isEmpty, notEmpty } from "@/shared/is";
import { defineNode } from "@/shared/metadata/node";

// 数组结构转树结构
const normToTreeProps = {
    check: eq,
    adapter: (item) => (item)
}
export function arrayToTree(parent, dataSource, props) {
    const { check, adapter } = mergePlainObject(normToTreeProps, props);

    return toArray(dataSource).reduce((store, current) => {
        const node = defineNode({ parent, current });
        node.hasParent = notEmpty(parent);
        node.map = node.hasParent ? concat(parent.map, node.uuid) : [node.uuid];
        node.level = node.hasParent ? parent.level + 1 : 0;

        if (check(parent, current)) {
            node.children = arrayToTree(node, dataSource, props);
            node.childKeys = node.children.map(item => item.uuid);
            node.hasChild = notEmpty(node.children);
        }
        store.push(adapter(node));
        return store;
    }, []);
}

// 树结构循环
export function treeMap(tree, callback) {
    return toArray(tree).map((item, index, source) => {
        const node = callback(item, index, source);

        if (isEmpty(node)) return;

        node.children = treeMap(node.children, callback);

        return node;
    }).filter(notEmpty);
}
