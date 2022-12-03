/*
 * @FilePath: /Furnace/src/internal/router/namespace/static.js
 * @Author: maggot-code
 * @Date: 2022-12-03 22:43:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 00:15:34
 * @Description: 
 */
import { PathEntity } from "~/router/entity/Path";
import { MetaEntity } from "~/router/entity/Meta";
import { ComponentEntity } from "~/router/entity/Component";

import { mergeObject } from "~/shared/merge";

export const SKIP_STATE = true;
export function wrap(route) {
    return mergeObject(route, {
        path: PathEntity(route),
        meta: MetaEntity(route),
        component: ComponentEntity(route),
    });
}
export default "static";
