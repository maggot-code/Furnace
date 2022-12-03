/*
 * @FilePath: /Furnace/src/extend/router.js
 * @Author: maggot-code
 * @Date: 2022-11-21 14:54:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 00:24:25
 * @Description: 
 */
import { defineRouter } from "~/router";

const RouterBefore = [];
const RouterAfter = [];
const { router, VueRouter } = defineRouter({
    before: RouterBefore,
    after: RouterAfter
});

export function extendRouter(Vue) {
    Vue.use(VueRouter);

    return router;
}

export default extendRouter;
