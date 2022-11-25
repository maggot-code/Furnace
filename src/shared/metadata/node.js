/*
 * @FilePath: \Furnace\src\shared\metadata\node.js
 * @Author: maggot-code
 * @Date: 2022-11-24 12:59:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-25 13:14:23
 * @Description: 
 */
import { mergePlainObject } from "@/shared/trans";
import { uuid } from "@/shared/uuid";

export function defineNode({ parent, current }) {
    return mergePlainObject(current, {
        parent,
        uuid: uuid(),
    });
}

export function pickNode(props) {
    return pick(props, []);
}

export default defineNode;
