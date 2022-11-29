/*
 * @FilePath: \Furnace\src\middleware\router\token.before.js
 * @Author: maggot-code
 * @Date: 2022-11-29 22:54:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 01:36:19
 * @Description: 
 */
import { useUserStore } from "@/store/useUserStore";
import { SigninName, RootName } from "@/router/context";

export function define(to, _, next) {
    const userStore = useUserStore();
    const isSignin = eq(to.name, SigninName);

    if (userStore.tokenLapse) {
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
