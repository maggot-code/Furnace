/*
 * @FilePath: /Furnace/src/router/defineRouter.js
 * @Author: maggot-code
 * @Date: 2022-11-23 16:38:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-26 15:11:03
 * @Description: 
 */
import VueRouter from "vue-router";
import { useRouterStore } from "@/store/useRouterStore";
import { buildVueRouter } from "@/router/internal";

// hack router push callback
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

export const router = buildVueRouter();

export function routeMount(route) {
    router.addRoute(route);

    return route;
}

function routeReady() {
    const routerStore = useRouterStore();

    routerStore.routes.map(routeMount);

    routerStore.setReady();
}

export function defineRouter() {
    router.onReady(routeReady);

    return {
        router,
        VueRouter
    }
}

export default defineRouter;
