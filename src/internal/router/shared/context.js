/*
 * @FilePath: /Furnace/src/internal/router/shared/context.js
 * @Author: maggot-code
 * @Date: 2022-12-03 17:09:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 00:18:31
 * @Description: 
 */
import {
    buildConstantName,
    buildConstantOmit,
    buildPrivateKeyword,
    buildNamespace,
    buildNamespaceMode,
    buildFreezeRoutes
} from "~/router/shared/collector";

export const RouteAsyncKeyword = "id";
export const RouteAsyncParentKeyword = "pid";

export const RouteStaticGroup = buildFreezeRoutes();

export const RouterNamespace = buildNamespace();

export const RouterNamespaceMode = buildNamespaceMode();

// 常用路由名称（内部）
// 主要提供给其他模块使用，方便在其他模块中使用路由名称
export const RouteName = buildConstantName();

// 常用路由忽略（内部）
// 主要提供给拦截器使用，校验该路由是否需要被拦截
export const RouteOmitGroup = buildConstantOmit();

// 常用路由私有关键字（内部）
// 主要提供给校验器使用，校验该路由是否合法
export const RouteKeyword = buildPrivateKeyword([
    "500",
    "403",
    "404"
]);

// 由于路由定义被扁平化了（服务端要求提供扁平化的路由信息定义）
// 并且通过 meta data 来包装路由信息得到路由树
// 所以需要通过该关键字来为 Vue Router 提供需要的路由信息
export const VueRouterPickKeyword = [
    "name",
    "path",
    "redirect",
    "children",
    "meta",
    "component",
];

// 由于路由定义被扁平化了（服务端要求提供扁平化的路由信息定义）
// 并且通过 meta data 来包装路由信息得到路由树
// 所以需要通过该关键字来为 Vue Router 的 meta 属性提供需要的元数据
export const VueRouterMetaPickKeyword = [
    RouteAsyncKeyword,
    RouteAsyncParentKeyword,
    "uid",
    "namespace",
    "address",
    "mode",
    "template",
    "parent",
    "level",
    "sort",
    "map",
    "icon",
    "title",
    "hasParent",
    "hasChild",
    "disabled",
    "menu",
    "hidden",
    "affix",
    "dev"
];

// 异常路由
export const AccidentRoute = {
    name: "unknow",
    path: "/:pathMatch(.*)*",
    redirect: "/404"
}
