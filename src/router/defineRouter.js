/*
 * @FilePath: \Furnace\src\router\defineRouter.js
 * @Author: maggot-code
 * @Date: 2022-11-23 16:38:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 15:30:30
 * @Description: 
 */
import FreezeRoutes from "@/assets/json/freeze.routes";
import StateRoutes from "@/assets/json/state.routes";

import BeforeAsync from "@/middleware/router/async.before";
import BeforeUnknow from "@/middleware/router/unknow.before";
import BeforeToken from "@/middleware/router/token.before";
import BeforeLogin from "@/middleware/router/login.before";
import BeforeBusiness from "@/middleware/router/business.before";
import BeforeProgress from "@/middleware/router/nprogress.before";
import AfterProgress from "@/middleware/router/nprogress.after";

import { toArray } from "@/shared/trans";
import { buildVueRouter } from "@/router/internal";
import { transRouteGroup } from "@/router/trans";
import { InternalNamespace } from "@/router/namespace";

// 构建内部路由
const internalRoutes = transRouteGroup(
    concat(FreezeRoutes, StateRoutes),
    InternalNamespace
);
const { router, VueRouter } = buildVueRouter(internalRoutes);
const routerBefore = [
    BeforeProgress,
    BeforeAsync,
    BeforeUnknow,
    BeforeToken,
    BeforeLogin,
    BeforeBusiness,
];
const routerAfter = [
    AfterProgress
];

// router.beforeEach
// router.afterEach
export function defineRouter() {
    routerBefore.forEach((before) => before(router));
    routerAfter.forEach((after) => after(router));
    return {
        router,
        VueRouter
    }
}

export function reloadRouter(routes) {
    const group = concat(internalRoutes, toArray(routes));
    const { router: replace } = buildVueRouter(group);

    router.matcher = replace.matcher // reset router

    return router;
}

export default router;
