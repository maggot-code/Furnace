/*
 * @FilePath: \Furnace\src\middleware\router\unknow.before.js
 * @Author: maggot-code
 * @Date: 2022-11-30 16:17:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 16:25:23
 * @Description: 
 */
import Router from "@/router/defineRouter";
import { NotfoundName } from "@/router/context";

export function define(to, form, next) {
    const index = Router.getRoutes().findIndex(({ path }) => eq(path, to.path));

    if (eq(to.name, NotfoundName) || index >= 0) {
        next();
    } else {
        next({ name: NotfoundName });
    }
}

export default (router) => router.beforeEach(define);
