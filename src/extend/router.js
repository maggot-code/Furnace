/*
 * @FilePath: /Furnace/src/extend/router.js
 * @Author: maggot-code
 * @Date: 2022-11-21 14:54:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 05:49:56
 * @Description: 
 */
import { defineRouter } from "~/router";
import BeforeAsync from "@/middleware/router/async.before";
import BeforeUnknow from "@/middleware/router/unknow.before";
import BeforeToken from "@/middleware/router/token.before";
import BeforeLogin from "@/middleware/router/login.before";
import BeforeBusiness from "@/middleware/router/business.before";
import BeforeProgress from "@/middleware/router/nprogress.before";
import AfterProgress from "@/middleware/router/nprogress.after";

const RouterBefore = [
    BeforeProgress,
    BeforeAsync,
    BeforeUnknow,
    BeforeToken,
    BeforeLogin,
    BeforeBusiness,
];
const RouterAfter = [
    AfterProgress
];
const { router, VueRouter } = defineRouter({
    before: RouterBefore,
    after: RouterAfter
});

export function extendRouter(Vue) {
    Vue.use(VueRouter);

    return router;
}

export default extendRouter;
