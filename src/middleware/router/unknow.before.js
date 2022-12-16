/*
 * @FilePath: /Furnace/src/middleware/router/unknow.before.js
 * @Author: maggot-code
 * @Date: 2022-12-04 05:43:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-15 16:53:53
 * @Description: 
 */
import Router from "~/router";
import { RouteName } from "~/router/shared/context";
import { useUserStore } from "@/store/useUserStore";

function define(to, form, next) {
    const userStore = useUserStore();
    const routes = Router.getRoutes();
    const loseIndex = routes.findIndex((route) => eq(route.name, to.name)) < 0;

    if (userStore.tokenUnusable && eq(to.name, RouteName.NotfoundName)) {
        next({ name: RouteName.SigninName });
    } else {
        if (loseIndex && !eq(to.name, RouteName.NotfoundName)) {
            next({ name: RouteName.NotfoundName });
        } else {
            next();
        }
    }
}

export default (router) => router.beforeEach(define);
