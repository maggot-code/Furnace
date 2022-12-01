/*
 * @FilePath: \Furnace\src\middleware\router\business.before.js
 * @Author: maggot-code
 * @Date: 2022-12-01 15:28:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 15:32:05
 * @Description: 
 */
import { useRouterStore } from "@/store/useRouterStore";
import { BusinessName } from "@/router/context";

function define(to, form, next) {
    const routerStore = useRouterStore();

    if (eq(to.name, BusinessName)) {
        routerStore.firstRoute ? next(routerStore.firstRoute) : next();
    } else {
        next();
    }
}

export default (router) => router.beforeEach(define);
