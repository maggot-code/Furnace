/*
 * @FilePath: \Furnace\src\router\context.js
 * @Author: maggot-code
 * @Date: 2022-11-24 10:49:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 10:31:12
 * @Description: 
 */
// 根基路由
export const RootName = "welcome";

// 业务路由
export const BusinessName = "business";

// 重定向路由
export const RedirectName = "redirect";

// 登录路由名称
export const SigninName = "signin";

// 未定义路由名称
export const NotfoundName = "notfound";

// 异常路由
export const AccidentRoute = {
    name: "unknow",
    path: "/:pathMatch(.*)*",
    redirect: "/404"
}

// 忽略路由定义
export const OmitRouteGroup = [
    "debug",
    "notfound",
    "signin",
    "curd"
];

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
    "uid",
    "address",
    "dev",
    "hasParent",
    "hasChild",
    "disabled",
    "level",
    "map",
    "namespace",
    "parent",
    "mode",
    "template",
    "icon",
    "title",
    "orderid",
    "menu",
    "hidden",
    "affix"
];
