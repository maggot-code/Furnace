/*
 * @FilePath: \Furnace\src\router\context.js
 * @Author: maggot-code
 * @Date: 2022-11-24 10:49:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-29 01:32:54
 * @Description: 
 */
// 重定向路由
export const RedirectName = "Redirect";

// 异常路由
export const AccidentRoute = {
    name: "unknow",
    path: "/:pathMatch(.*)*",
    redirect: "/404"
}

// 关键字定义
export const Keyword = [
    "unknow",
    "403",
    "404",
    "500",
    "forbidden",
    "notfound",
    "crash",
    "debug",
    "fragment",
    "redirect",
    "welcome",
    "signin",
    "business",
];
