/*
 * @FilePath: \Furnace\src\router\defineRouter.js
 * @Author: maggot-code
 * @Date: 2022-11-23 16:38:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 16:21:43
 * @Description: 
 */
import FreezeRoutes from "@/assets/json/freeze.routes";
import StateRoutes from "@/assets/json/state.routes";

import BeforeUnknow from "@/middleware/router/unknow.before";
import BeforeAsync from "@/middleware/router/async.before";
import BeforeToken from "@/middleware/router/token.before";
import BeforeProgress from "@/middleware/router/nprogress.before";
import AfterProgress from "@/middleware/router/nprogress.after";

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
    BeforeProgress(router);
    BeforeUnknow(router);
    BeforeToken(router);
    BeforeAsync(router);
    AfterProgress(router);

    return {
        router,
        VueRouter
    }
}

export default router;
