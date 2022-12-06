/*
 * @FilePath: /Furnace/src/internal/router/namespace/external.js
 * @Author: maggot-code
 * @Date: 2022-12-03 22:44:10
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 16:27:41
 * @Description: 
 */
import { PathEntity } from "~/router/entity/Path";
import { MetaEntity } from "~/router/entity/Meta";
import { ComponentAsyncEntity } from "~/router/entity/ComponentAsync";

import { mergeObject } from "~/shared/merge";

export const SKIP_STATE = false;
export function wrap(route) {
    return mergeObject(route, {
        path: PathEntity(route),
        meta: MetaEntity(route),
        component: ComponentAsyncEntity(route),
    });
}
export default "external";
