/*
 * @FilePath: \Furnace\src\shared\metadata\node.js
 * @Author: maggot-code
 * @Date: 2022-11-24 12:59:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 01:33:46
 * @Description: 
 */
import { mergePlainObject } from "@/shared/trans";
import { uuid } from "@/shared/uuid";

export function defineNode(current) {
    const uid = uuid();
    return mergePlainObject({
        parent: null,
        children: [],
        hasParent: false,
        hasChild: false,
        sort: 0,
        level: 0,
        map: [uid],
        uid,
    }, current);
}

export default defineNode;
