/*
 * @FilePath: /Furnace/src/internal/router/entity/Route.js
 * @Author: maggot-code
 * @Date: 2022-12-03 23:11:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 00:19:03
 * @Description: 
 */
import {
    RouterNamespaceMode,
    VueRouterPickKeyword
} from "~/router/shared/context";
import { isCheckSource } from "~/router/shared/utils";

export function RouteEntity(props) {
    if (isCheckSource(props)) return;

    const { wrap } = RouterNamespaceMode[props.namespace];
    const route = pick(wrap(props), VueRouterPickKeyword);

    return route;
}

export default RouteEntity;
