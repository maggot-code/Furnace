/*
 * @FilePath: /Furnace/src/internal/router/entity/Meta.js
 * @Author: maggot-code
 * @Date: 2022-12-03 23:50:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-03 23:51:50
 * @Description: 
 */
import { VueRouterMetaPickKeyword } from "~/router/shared/context";

export function MetaEntity(route) {
    return pick(route, VueRouterMetaPickKeyword);
}

export default MetaEntity;
