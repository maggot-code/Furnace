/*
 * @FilePath: \Furnace\src\extend\router.js
 * @Author: maggot-code
 * @Date: 2022-11-21 14:54:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 16:43:40
 * @Description: 
 */
import { defineRouter } from "@/router/defineRouter";

const { router, VueRouter } = defineRouter();

export function extendRouter(Vue) {
    Vue.use(VueRouter);

    return router;
}

export default extendRouter;
