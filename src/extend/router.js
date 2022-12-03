/*
 * @FilePath: /Furnace/src/extend/router.js
 * @Author: maggot-code
 * @Date: 2022-11-21 14:54:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 00:07:22
 * @Description: 
 */
import { defineRouter } from "~/router";
// import { defineRouter } from "@/router/defineRouter";

const { router, VueRouter } = defineRouter();

export function extendRouter(Vue) {
    console.log(router.getRoutes());
    Vue.use(VueRouter);

    return router;
}

export default extendRouter;
