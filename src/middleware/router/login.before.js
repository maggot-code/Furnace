/*
 * @FilePath: /Furnace/src/middleware/router/login.before.js
 * @Author: maggot-code
 * @Date: 2022-11-30 17:36:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 06:12:12
 * @Description: 
 */
import { useUserStore } from "@/store/useUserStore";
import { RouteOmitGroup, RouteName } from "~/router/shared/context";

function toOmit(to) {
    return RouteOmitGroup.some((name) => eq(to.name, name));
}

function define(to, form, next) {
    const userStore = useUserStore();
    const isSignin = eq(to.name, RouteName.SigninName);

    if (isSignin && userStore.tokenUsable) {
        next({ name: RouteName.WelcomeName });
    } else if (toOmit(to) || userStore.tokenUsable) {
        next();
    } else {
        next({ name: RouteName.SigninName });
    }
}

export default (router) => router.beforeEach(define);
