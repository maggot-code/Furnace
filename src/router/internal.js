/*
 * @FilePath: \Furnace\src\router\internal.js
 * @Author: maggot-code
 * @Date: 2022-11-24 10:11:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 10:05:34
 * @Description: 
 */
import VueRouter from "vue-router";
import { uuid } from "@/shared/uuid";
import { toArray } from "@/shared/trans";

// hack router push callback
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

// 构建路由实体
export function buildVueRouter(routes) {
    const router = new VueRouter({
        routes: toArray(routes),
        mode: "hash",
        scrollBehavior: () => ({ y: 0 })
    });
    router.matcher["tag"] = uuid();
    return { router, VueRouter };
}

export default VueRouter;
