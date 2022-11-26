/*
 * @FilePath: /Furnace/src/router/composeRoutes.js
 * @Author: maggot-code
 * @Date: 2022-11-23 17:49:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-26 15:10:01
 * @Description: 
 */
import { toArray } from "@/shared/trans";

export function composeRoutes(struct) {
    const { freeze, extern, drive, state } = struct;

    return concat(
        [],
        toArray(freeze),
        toArray(extern),
        toArray(drive),
        toArray(state)
    );
}

export default composeRoutes;
