/*
 * @FilePath: \Furnace\src\router\internal.js
 * @Author: maggot-code
 * @Date: 2022-11-24 10:11:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-28 11:13:40
 * @Description: 
 */
import VueRouter from "vue-router";

// 构建路由实体
export function buildVueRouter() {
    return new VueRouter({
        routes: [],
        mode: "hash",
        scrollBehavior: () => ({ y: 0 })
    });
}

export default VueRouter;
