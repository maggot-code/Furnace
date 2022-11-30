/*
 * @FilePath: \Furnace\src\middleware\router\async.before.js
 * @Author: maggot-code
 * @Date: 2022-11-30 02:22:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 04:26:21
 * @Description: 
 */
import { useRouterStore } from "@/store/useRouterStore";

export const define = (router) => (to, form, next) => {
    const routerStore = useRouterStore();
    // console.log(router);
    // console.log("挂载异步路由");
    console.log(routerStore.asyncRoutes);

    next();
}

export default (router) => router.beforeEach(define(router));
