/*
 * @FilePath: \Furnace\src\router\defineRoutes.js
 * @Author: maggot-code
 * @Date: 2022-11-23 17:45:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 18:01:36
 * @Description: 
 */
// 定义静态路由
export function defineFreezeRoutes(source) {
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
            path: "/404",
            name: "notfound",
            component: () => import("@/pages/NotPage/notpage.vue"),
        }
    ];
}

// 定义状态路由
export function defineStateRoutes(source) {
    return [
        {
            name: "unknow",
            path: "/:pathMatch(.*)*",
            redirect: "/404"
        }
    ];
}

export default defineStateRoutes;
