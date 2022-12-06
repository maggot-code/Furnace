/*
 * @FilePath: /Furnace/src/internal/metadata/entity/node.js
 * @Author: maggot-code
 * @Date: 2022-12-03 20:22:08
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-03 20:22:22
 * @Description: 
 */
import { mergeObject } from "~/shared/merge";
import { uuid } from "~/shared/uuid";

export function NodeEntity(source) {
    const uid = uuid();
    return mergeObject({
        uid,
        map: [uid],
        parent: null,
        children: [],
        hasParent: false,
        hasChild: false,
        disabled: false,
        sort: 0,
        level: 0,
    }, source);
}

export default NodeEntity;
