/*
 * @FilePath: \Furnace\src\internal\metadata\useTree.js
 * @Author: maggot-code
 * @Date: 2022-12-03 20:25:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 15:14:56
 * @Description: 
 */
import { NormTreeProps } from "~/metadata/shared/constant";
import { NodeEntity } from "~/metadata/entity/node";
import { mergeObject } from "~/shared/merge";
import { isEmpty, notEmpty } from "~/shared/is";
import { transArray, transFunction } from "~/shared/trans";

export function arrayToTree(dataSource, props) {
    const { self, parent, trans } = mergeObject(NormTreeProps, props);
    const notKeyword = (node) => !Reflect.has(node, self) && !Reflect.has(node, parent);
    const store = [];
    const cache = {};
    const source = transArray(dataSource);

    source.forEach((item) => {
        const node = NodeEntity(item);
        if (notKeyword(node)) return;
        cache[node[self]] = node;
    });

    source.forEach((item) => {
        if (notKeyword(item)) return store.push(trans(NodeEntity(item)));

        if (cache[item[parent]]) {
            cache[item[self]].parent = cache[item[parent]];
            cache[item[self]].hasParent = true;
            cache[item[self]].level = cache[item[parent]].level + 1;
            cache[item[self]].map = concat(cache[item[parent]].map, cache[item[self]].uid);

            cache[item[parent]].children.push(trans(cache[item[self]]));
        } else {
            store.push(trans(cache[item[self]]));
        }
    });

    return store;
}

export function treeMap(tree, trans) {
    const handler = transFunction(trans);
    return transArray(tree).map((item, index, source) => {
        const node = handler(item, index, source);
        if (isEmpty(node)) return;
        node.children = treeMap(node.children, handler);
        return node;
    }).filter(notEmpty);
}
