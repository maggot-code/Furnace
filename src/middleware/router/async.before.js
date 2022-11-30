/*
 * @FilePath: \Furnace\src\middleware\router\async.before.js
 * @Author: maggot-code
 * @Date: 2022-11-30 15:54:55
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 16:02:52
 * @Description: 
 */
import Router from "@/router/defineRouter";

export async function define(to, form, next) {
    next();
}

export default (router) => router.beforeEach(define);
