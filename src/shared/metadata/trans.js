/*
 * @FilePath: \Furnace\src\shared\metadata\trans.js
 * @Author: maggot-code
 * @Date: 2022-11-24 13:00:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-24 18:29:07
 * @Description: 
 */
import { toArray, mergePlainObject } from "@/shared/trans";
import { isEmpty, notEmpty } from "@/shared/is";

// 数组结构转树结构
const normToTreeProps = {
    check: eq,
    adapter: (item) => (item)
}
export function arrayToTree(parent, dataSource, props) {
    const { check, adapter } = mergePlainObject(normToTreeProps, props);

    return toArray(dataSource).reduce((store, raw, index, source) => {
        if (check(parent, raw)) store.push(adapter({
            ...raw,
            index,
            children: arrayToTree(raw, source, props)
        }));

        return store;
    }, []);
}

// 树结构循环
function setupLevel(parent) {
    return isEmpty(parent) ? 0 : parent.level + 1;
}
export function treeMap(tree, callback, parent) {
    return toArray(tree).map((item, index, source) => {
        const node = callback({
            parent,
            item,
            index,
            source,
            level: setupLevel(parent),
        });

        if (isEmpty(node)) return;

        node.children = treeMap(node.children, callback, node);

        return node;
    }).filter(notEmpty);
}
