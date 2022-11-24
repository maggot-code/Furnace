/*
 * @FilePath: \Furnace\src\router\context.js
 * @Author: maggot-code
 * @Date: 2022-11-24 10:49:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-24 18:31:23
 * @Description: 
 */
// 关键字定义
export const Keyword = [
    "namespace",
    "unknow",
    "freeze",
    "extern",
    "drive",
    "state",
    "welcome",
    "business",
    "biz",
    "debug",
    "fragment",
    "redirect"
];

// 命名空间映射
export const NamespaceMapping = {
    "FREEZE": "freeze",
    "EXTERN": "extern",
    "DRIVE": "drive",
    "STATE": "state",
}

// 未定义命名空间
export const Namespace = "UNKNOW";

// 基础状态定义
export const BasicState = [
    "name",
    "address",
    "redirect",
    "pid",
    "id"
];

// 路由元数据定义
export const MetaData = {
    mode: "unknow",
    template: "unknow",
    icon: "el-icon-house",
    namespace: Namespace,
    title: Namespace,
    hidden: true,
    affix: false,
    menu: false,
    dev: false,
    level: 0,
    pid: null,
    id: null,
    parent: null,
    hasParent: false,
    hasChild: false
}
