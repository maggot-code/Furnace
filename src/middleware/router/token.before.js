/*
 * @FilePath: \Furnace\src\middleware\router\token.before.js
 * @Author: maggot-code
 * @Date: 2022-11-30 18:09:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 21:46:35
 * @Description: 
 */
import { useUserStore } from "@/store/useUserStore";
import { useRouterStore } from "@/store/useRouterStore";

function define(to, form, next) {
    const userStore = useUserStore();
    const routerStore = useRouterStore();

    if (userStore.tokenUnusable) {
        userStore.clearToken();
        routerStore.setupCache([]);
    };

    next();
}

export default (router) => router.beforeEach(define);
