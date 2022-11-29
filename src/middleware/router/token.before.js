/*
 * @FilePath: \Furnace\src\middleware\router\token.before.js
 * @Author: maggot-code
 * @Date: 2022-11-29 17:03:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-29 17:12:46
 * @Description: 
 */
import { useUserStore } from "@/store/useUserStore";
import { SigninName } from "@/router/context";

function define(to, _, next) {
    const userStore = useUserStore();

    if (userStore.tokenUsable || eq(to.name, SigninName)) {
        next();
    } else {
        next({
            name: SigninName,
            params: {
                pointTo: to.fullPath
            }
        });
    }
}

export default (router) => router.beforeEach(define);
