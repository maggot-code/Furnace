/*
 * @FilePath: /Furnace/src/middleware/router/business.before.js
 * @Author: maggot-code
 * @Date: 2022-12-01 15:28:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-16 16:52:51
 * @Description: 
 */
import { useRouterStore } from "@/store/useRouterStore";
import { RouteName } from "~/router/shared/context";

function define(to, form, next) {
    const routerStore = useRouterStore();

    if (eq(to.name, RouteName.BusinessName)) {
        routerStore.firstRoute ? next(routerStore.firstRoute) : next();
    } else {
        next();
    }
}

export default (router) => router.beforeEach(define);
