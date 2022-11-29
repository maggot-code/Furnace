/*
 * @FilePath: \Furnace\src\router\shared.js
 * @Author: maggot-code
 * @Date: 2022-11-24 11:07:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 02:46:10
 * @Description: 
 */
import { toBoolean } from "@/shared/trans";
import { Keyword } from "@/router/context";
import RouterNamespace from "@/router/namespace";

// 是否是关键字
export function isKeyword(value) {
    return (
        Keyword.includes(value)
        || Keyword.includes(toUpper(value))
        || Keyword.includes(toLower(value))
    );
}

// 检查数据源是否符合标准
// true  存在不符合标准的数据
// false 不存在不符合标准的数据
export function checkDataSource(dataSource) {
    const { namespace } = dataSource;

    // 检查是否只在开发环境启用
    if (import.meta.env.PROD && toBoolean(dataSource.dev, false)) return true;

    if (RouterNamespace[namespace].skip) return false;

    const state = [
        isKeyword(dataSource.pid),
        isKeyword(dataSource.id),
        isKeyword(dataSource.name),
        isKeyword(dataSource.path),
        isKeyword(dataSource.redirect),
        isKeyword(dataSource.component),
    ];

    return compact(state).length > 0;
}

// 检查节点是否属于当前节点父级
export function checkParent(parent, current) {
    return eq(parent?.id ?? null, current.pid);
}
