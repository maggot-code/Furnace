/*
 * @FilePath: \Furnace\src\router\shared.js
 * @Author: maggot-code
 * @Date: 2022-11-24 11:07:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-29 01:32:47
 * @Description: 
 */
import { Keyword } from "@/router/context";

// 是否是关键字
export function isKeyword(value) {
    return (
        Keyword.includes(value)
        || Keyword.includes(toUpper(value))
        || Keyword.includes(toLower(value))
    );
}

// 检查数据源是否符合标准
export function checkDataSource(dataSource) {
    // if (uncheck.includes(dataSource.namespace)) return false;
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
