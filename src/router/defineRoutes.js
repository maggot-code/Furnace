/*
 * @FilePath: \Furnace\src\router\defineRoutes.js
 * @Author: maggot-code
 * @Date: 2022-11-23 17:45:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-24 11:19:27
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
    return [];
}

// 定义状态路由
export function defineStateRoutes(source) {
    console.log(source);

    const accident = {
        name: "unknow",
        path: "/:pathMatch(.*)*",
        redirect: "/404"
    };

    return [].push(accident);
}

export default defineStateRoutes;
