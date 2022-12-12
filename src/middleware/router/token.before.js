/*
 * @FilePath: \Furnace\src\middleware\router\token.before.js
 * @Author: maggot-code
 * @Date: 2022-11-30 18:09:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-12 16:21:27
 * @Description: 
 */
import { useUserStore } from "@/store/useUserStore";
import { useRouterStore } from "@/store/useRouterStore";
import { useWarningTips } from "@/hooks/useMessage";

function define(to, form, next) {
    const userStore = useUserStore();
    const routerStore = useRouterStore();

    if (userStore.tokenUnusable) {
        userStore.clearToken();
        routerStore.toUnmounted();
        // useWarningTips(userStore.tokenUnusableTips);
    };

    next();
}

export default (router) => router.beforeEach(define);
