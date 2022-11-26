/*
 * @FilePath: /Furnace/src/router/defineRoutes.js
 * @Author: maggot-code
 * @Date: 2022-11-23 17:45:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-26 15:10:44
 * @Description: 
 */
import { transRouteGroup } from "@/router/trans";

// 定义静态路由
export function defineFreezeRoutes(source) {
    const routes = transRouteGroup(source);
    return [];
}

// 定义动态路由
export function defineExternRoutes(source) {
    return [];
}

// 定义功能路由
export function defineDriveRoutes(source) {
    return [
        {
            path: "/curd/simple",
            name: "SimpleCurd",
            component: () => import("@/pages/Curd/simple.vue"),
        }
    ];
}

// 定义状态路由
export function defineStateRoutes(source) {
    const accident = {
        name: "unknow",
        path: "/:pathMatch(.*)*",
        redirect: "/404"
    };
    const routes = [
        {
            path: "/redirect",
            name: "Redirect",
            component: () => import("@/pages/Redirect/redirect.vue"),
        }
    ];
    routes.push(accident);

    return routes;
}

export default defineStateRoutes;
