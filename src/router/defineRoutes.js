/*
 * @FilePath: \Furnace\src\router\defineRoutes.js
 * @Author: maggot-code
 * @Date: 2022-11-23 17:45:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 23:20:27
 * @Description: 
 */
// 定义静态路由
export function defineFreezeRoutes(source) {
    return [
        {
            path: "/",
            name: "welcome",
            component: () => import("@/pages/Welcome/welcome.vue"),
        },
        {
            path: "/biz",
            name: "biz",
            component: () => import("@/pages/Business/business.vue"),
        }
    ];
}

// 定义动态路由
export function defineExternRoutes(source) {
    return [];
}

// 定义功能路由
export function defineDriveRoutes(source) {
    return [
        {
            path: "/debug",
            name: "debug",
            component: () => import("@/pages/Debug/debug.vue"),
        },
        {
            path: "/fragment",
            name: "fragment",
            component: () => import("@/pages/Fragment/fragment.vue"),
        },
        {
            path: "/403",
            name: "prohibit",
            component: () => import("@/pages/Drive/prohibit.vue"),
        },
        {
            path: "/404",
            name: "notfound",
            component: () => import("@/pages/Drive/notpage.vue"),
        },
        {
            path: "/500",
            name: "collapse",
            component: () => import("@/pages/Drive/collapse.vue"),
        }
    ];
}

// 定义状态路由
export function defineStateRoutes(source) {
    return [
        {
            path: "/redirect",
            name: "redirect",
            component: () => import("@/pages/Redirect/redirect.vue"),
        },
        {
            name: "unknow",
            path: "/:pathMatch(.*)*",
            redirect: "/404"
        }
    ];
}

export default defineStateRoutes;
