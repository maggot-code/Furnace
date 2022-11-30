/*
 * @FilePath: \Furnace\src\middleware\router\login.before.js
 * @Author: maggot-code
 * @Date: 2022-11-30 17:36:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 20:39:05
 * @Description: 
 */
import { useUserStore } from "@/store/useUserStore";
import { OmitRouteGroup, RootName, SigninName } from "@/router/context";

function toOmit(to) {
    return OmitRouteGroup.some((name) => eq(to.name, name));
}

function define(to, form, next) {
    const userStore = useUserStore();
    const isSignin = eq(to.name, SigninName);

    if (isSignin && !userStore.tokenLapse) {
        next({ name: RootName });
    } else if (toOmit(to) || !userStore.tokenLapse) {
        next();
    } else {
        next({ name: SigninName });
    }
}

export default (router) => router.beforeEach(define);
