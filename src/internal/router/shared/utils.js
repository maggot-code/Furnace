/*
 * @FilePath: /Furnace/src/internal/router/shared/utils.js
 * @Author: maggot-code
 * @Date: 2022-12-03 23:24:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 00:10:28
 * @Description: 
 */
import {
    RouteKeyword,
    RouterNamespaceMode
} from "~/router/shared/context";
import { transBoolean } from "~/shared/trans";

export function isKeyword(value) {
    return (
        RouteKeyword.includes(value)
        || RouteKeyword.includes(toUpper(value))
        || RouteKeyword.includes(toLower(value))
    );
}

export function isCheckSource(source) {
    const { namespace } = source;

    if (RouterNamespaceMode[namespace].skip) return false;
    if (import.meta.env.PROD && transBoolean(source.dev, false)) return true;

    return compact([
        isKeyword(source.pid),
        isKeyword(source.id),
        isKeyword(source.name),
        isKeyword(source.path),
        isKeyword(source.redirect),
        isKeyword(source.component),
    ]).length > 0;
}
