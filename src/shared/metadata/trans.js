/*
 * @FilePath: \Furnace\src\shared\metadata\trans.js
 * @Author: maggot-code
 * @Date: 2022-11-24 13:00:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 15:30:42
 * @Description: 
 */
import { toArray, mergePlainObject } from "@/shared/trans";
import { isEmpty, notEmpty } from "@/shared/is";
import { defineNode } from "@/shared/metadata/node";

// 数组结构转树结构
// 不适合使用递归，因为不清楚数据量
// 不适合单次循环，一边存储一边找关系，因为需要给子节点追加父节点属性
// 这样实现 cache 无法被正常释放，所以实现方法存疑
const normToTreeProps = {
    self: "id",
    parent: "pid",
    adapter: (item) => (item)
}
export function arrayToTree(dataSource, props) {
    const { self, parent, adapter } = mergePlainObject(normToTreeProps, props);
    const notKeyword = (node) => !Reflect.has(node, self) && !Reflect.has(node, parent);

    const store = [];
    const cache = {};
    const source = toArray(dataSource);

    source.forEach((item) => {
        const node = defineNode(item);
        if (notKeyword(node)) return;

        cache[node[self]] = node;
    });

    source.forEach((item) => {
        if (notKeyword(item)) {
            store.push(adapter(defineNode(item)));
            return;
        }

        if (cache[item[parent]]) {
            cache[item[self]].parent = cache[item[parent]];
            cache[item[self]].hasParent = true;
            cache[item[self]].level = cache[item[parent]].level + 1;
            cache[item[self]].map = concat(cache[item[parent]].map, cache[item[self]].uid);

            cache[item[parent]].children.push(adapter(cache[item[self]]));
            cache[item[parent]].hasChild = true;
        } else {
            store.push(adapter(cache[item[self]]));
        }
    });

    return store;
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
