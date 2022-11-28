/*
 * @FilePath: \Furnace\src\router\defineRouter.js
 * @Author: maggot-code
 * @Date: 2022-11-23 16:38:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-29 01:29:27
 * @Description: 
 */
import VueRouter from "vue-router";
import { buildInternalRoutes, buildVueRouter } from "@/router/internal";
import { transRouteGroup } from "@/router/trans";

// hack router push callback
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

// buildInternalRoutes transRouteGroup
export const router = buildVueRouter();

export function defineRouter() {
    return {
        router,
        VueRouter
    }
}

export default defineRouter;
