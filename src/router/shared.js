/*
 * @FilePath: \Furnace\src\router\shared.js
 * @Author: maggot-code
 * @Date: 2022-11-24 11:07:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-24 18:31:30
 * @Description: 
 */
import {
    Keyword,
    NamespaceMapping,
    Namespace,
    MetaData,
    BasicState
} from "@/router/context";
import { mergePlainObject } from "@/shared/trans";

// 是否是关键字
export function isKeyword(value) {
    return (
        Keyword.includes(value)
        || Keyword.includes(toUpper(value))
        || Keyword.includes(toLower(value))
    );
}

// 推测命名空间
export function guessNamespace(value) {
    return get(NamespaceMapping, value, Namespace);
}

// 检查数据源是否符合标准
export function checkDataSource(dataSource) {
    return [
        isKeyword(dataSource.pid),
        isKeyword(dataSource.id),
        isKeyword(dataSource.name),
        isKeyword(dataSource.path),
        isKeyword(dataSource.redirect),
        isKeyword(dataSource.component),
    ].includes(true);
}

// 检查节点是否属于当前节点父级
export function checkParent(parent, current) {
    return eq(parent?.id ?? null, current.pid);
}

// 合并标准元数据
export function mergeMetaData(rawMateData) {
    return pick(
        mergePlainObject(MetaData, rawMateData),
        Object.keys(MetaData)
    );
}

// 合并VueRouter配置
export function mergeRouterConfig(rawRoute) {
    return pick(rawRoute, BasicState);
}
