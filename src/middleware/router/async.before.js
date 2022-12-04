/*
 * @FilePath: /Furnace/src/middleware/router/async.before.js
 * @Author: maggot-code
 * @Date: 2022-12-04 05:43:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 18:21:26
 * @Description: 
 */
import { useUserStore } from "@/store/useUserStore";
import { useRouterStore } from "@/store/useRouterStore";

async function define(to, form, next) {
    const userStore = useUserStore();
    const routerStore = useRouterStore();

    if (userStore.tokenUnusable || routerStore.mounted) {
        next();
    } else {
        // 存在问题，会调用两次
        await routerStore.toMounted();
        next({ ...to, replace: true });
    }
}

export default (router) => router.beforeEach(define);
