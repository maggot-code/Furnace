/*
 * @FilePath: /Furnace/src/internal/router/entity/Router.js
 * @Author: maggot-code
 * @Date: 2022-12-03 22:05:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-03 22:06:53
 * @Description: 
 */
import VueRouter from "vue-router";

import { uuid } from "~/shared/uuid";
import { transArray } from "~/shared/trans";

// hack router push callback
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

export function RouterEntity(routes) {
    const router = new VueRouter({
        routes: transArray(routes),
        mode: "hash",
        scrollBehavior: () => ({ y: 0 })
    });

    router.matcher["tag"] = uuid();

    return { router, VueRouter };
}

export default VueRouter;
