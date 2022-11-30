/*
 * @FilePath: \Furnace\src\middleware\router\token.before.js
 * @Author: maggot-code
 * @Date: 2022-11-29 22:54:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 16:28:01
 * @Description: 
 */
import { useRouterStore } from "@/store/useRouterStore";
import { useUserStore } from "@/store/useUserStore";
import { OmitRouteGroup, SigninName, RootName } from "@/router/context";

export function define(to, _, next) {
    const routerStore = useRouterStore();
    const userStore = useUserStore();
    const isSignin = eq(to.name, SigninName);

    if (OmitRouteGroup.includes(to.name)) {
        next();
    } else {
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
}

export default (router) => router.beforeEach(define);
