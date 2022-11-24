/*
 * @FilePath: \Furnace\src\shared\metadata\node.js
 * @Author: maggot-code
 * @Date: 2022-11-24 12:59:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-24 13:35:21
 * @Description: 
 */
import { uuid } from "@/shared/uuid";

function wrap() {
    return {
        uuid: uuid()
    }
}

export function defineNode() { }

export default defineNode;
