/*
 * @FilePath: \Furnace\src\router\context.js
 * @Author: maggot-code
 * @Date: 2022-11-24 10:49:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-29 01:20:16
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

// 默认命名空间
export const UnknowNamespace = "unknow";

// 内部命名空间
export const InternalNamespace = "internal";
