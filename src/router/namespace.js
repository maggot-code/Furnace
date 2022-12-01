/*
 * @FilePath: \Furnace\src\router\namespace.js
 * @Author: maggot-code
 * @Date: 2022-11-29 14:18:42
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 10:12:58
 * @Description: 
 */
import {
    transPath,
    transMate,
    transComponent
} from "@/router/trans";
import { mergePlainObject } from "@/shared/trans";
import { defineMode } from "@/domain/Mode";

// 未知路由模式
export const UnknownNamespace = 'unknown';
export function wrapUnknowNamespace(route) {
    return route;
}

// 内部路由模式
export const InternalNamespace = 'internal';
export function wrapInternalNamespace(route) {
    return mergePlainObject(route, {
        path: transPath(route),
        meta: transMate(route),
        component: transComponent(route),
    });
}

// 外部路由模式
export const ExternalNamespace = 'external';
export function wrapExternalNamespace(route) {
    const mode = defineMode(route.mode);
    console.log(mode);

    const bind = {
        path: transPath(route),
        meta: transMate(route),
        component: defineAsyncComponent(() => import("@/components/EmptyView.vue"))
    };

    return mergePlainObject(route, bind);
}

export default {
    [UnknownNamespace]: { skip: false, wrap: wrapUnknowNamespace },
    [InternalNamespace]: { skip: true, wrap: wrapInternalNamespace },
    [ExternalNamespace]: { skip: false, wrap: wrapExternalNamespace },
}
