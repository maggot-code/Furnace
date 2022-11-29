/*
 * @FilePath: \Furnace\src\router\defineRouter.js
 * @Author: maggot-code
 * @Date: 2022-11-23 16:38:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 02:24:47
 * @Description: 
 */
import FreezeRoutes from "@/assets/json/freeze.routes";
import StateRoutes from "@/assets/json/state.routes";

import AsyncBefore from "@/middleware/router/async.before";
import TokenBefore from "@/middleware/router/token.before";
import ProgressBefore from "@/middleware/router/nprogress.before";
import ProgressAfter from "@/middleware/router/nprogress.after";

import { buildVueRouter } from "@/router/internal";
import { transRouteGroup } from "@/router/trans";
import { InternalNamespace } from "@/router/namespace";

// 构建内部路由
const internalRoutes = transRouteGroup(
    concat(FreezeRoutes, StateRoutes),
    InternalNamespace
);
const { router, VueRouter } = buildVueRouter(internalRoutes);

// router.beforeEach
// router.afterEach
export function defineRouter() {
    ProgressBefore(router);
    TokenBefore(router);
    AsyncBefore(router);
    ProgressAfter(router);

    return {
        router,
        VueRouter
    }
}

export default router;
