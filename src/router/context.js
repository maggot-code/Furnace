/*
 * @FilePath: \Furnace\src\router\context.js
 * @Author: maggot-code
 * @Date: 2022-11-24 10:49:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-29 16:49:19
 * @Description: 
 */
// 重定向路由
export const RedirectName = "redirect";

// 登录路由名称
export const SigninName = "signin";
// 登录路由路径
export const SigninPath = "/signin";

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

// VueRouter干净路由配置
export const PickRouteKeyword = [
    "name",
    "path",
    "redirect",
    "component",
    "meta",
    "children"
];

// VueRouter Meta 配置
export const PickRouteMetaKeyword = [
    "address",
    "dev",
    "hasParent",
    "level",
    "map",
    "namespace",
    "parent",
    "uuid",
    "mode",
    "template",
    "icon",
    "title",
    "menu",
    "hidden",
    "affix"
];
