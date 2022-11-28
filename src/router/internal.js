/*
 * @FilePath: \Furnace\src\router\internal.js
 * @Author: maggot-code
 * @Date: 2022-11-24 10:11:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-29 01:29:05
 * @Description: 
 */
import StateRoutes from "@/assets/json/state.routes";
import FreezeRoutes from "@/assets/json/freeze.routes";

import VueRouter from "vue-router";
import { toArray } from "@/shared/trans";

export const buildInternalRoutes = concat(StateRoutes, FreezeRoutes);

// 构建路由实体
export function buildVueRouter(routes) {
    return new VueRouter({
        routes: toArray(routes),
        mode: "hash",
        scrollBehavior: () => ({ y: 0 })
    });
}

export default VueRouter;
