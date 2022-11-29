/*
 * @FilePath: \Furnace\src\middleware\router\token.before.js
 * @Author: maggot-code
 * @Date: 2022-11-29 22:54:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 02:19:48
 * @Description: 
 */
import { useRouterStore } from "@/store/useRouterStore";
import { useUserStore } from "@/store/useUserStore";
import { SigninName, RootName } from "@/router/context";

export function define(to, _, next) {
    const routerStore = useRouterStore();
    const userStore = useUserStore();
    const isSignin = eq(to.name, SigninName);

    if (userStore.tokenLapse) {
        routerStore.setupCache();
        userStore.clearToken();
        userStore.setupToLogin(false);
        if (isSignin) {
            next()
        } else {
            next({ name: SigninName })
        }
    } else {
        if (isSignin) {
            next({ name: RootName })
        } else {
            next()
        }
    }
}

export default (router) => router.beforeEach(define);
