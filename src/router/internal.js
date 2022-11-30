/*
 * @FilePath: \Furnace\src\router\internal.js
 * @Author: maggot-code
 * @Date: 2022-11-24 10:11:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 01:38:31
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

// 构建路由视图集合
let RouterViews;
export function buildVueRouterViews() {
    RouterViews = RouterViews ?? import.meta.glob("../{pages,biz,template}/**/*.{vue,tsx}");
    return { views: RouterViews, keys: Object.keys(RouterViews) };
}

// 匹配路由视图
export function matchVueRouterView(path) {
    const { views, keys } = buildVueRouterViews();
    const match = keys.find(key => key.includes(path));
    const view = views[match];
    // 存疑，是否应该返回一个固定的异常视图
    return view ?? null;
}

export default VueRouter;
