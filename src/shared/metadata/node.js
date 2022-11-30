/*
 * @FilePath: \Furnace\src\shared\metadata\node.js
 * @Author: maggot-code
 * @Date: 2022-11-24 12:59:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 15:30:52
 * @Description: 
 */
import { mergePlainObject } from "@/shared/trans";
import { uuid } from "@/shared/uuid";

export function defineNode(current) {
    const uid = uuid();
    return mergePlainObject(current, {
        parent: null,
        children: [],
        hasParent: false,
        hasChild: false,
        level: 0,
        map: [uid],
        uid,
    });
}

export default defineNode;
