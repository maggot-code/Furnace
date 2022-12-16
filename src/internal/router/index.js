/*
 * @FilePath: /Furnace/src/internal/router/index.js
 * @Author: maggot-code
 * @Date: 2022-12-03 22:19:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-16 16:30:38
 * @Description: 
 */
import {
    RouterNamespace,
    RouteStaticGroup
} from "~/router/shared/context";
import { GroupEntity } from "~/router/entity/Group";
import { RouterEntity } from "~/router/entity/Router";
import { transArray } from "~/shared/trans";

const freezeRoutes = GroupEntity(
    RouterNamespace.Static,
    RouteStaticGroup
);
const { router, VueRouter } = RouterEntity(freezeRoutes);

export function defineRouter(props) {
    const routerBefore = transArray(get(props, "before", []));
    const routerAfter = transArray(get(props, "after", []));

    routerBefore.forEach((before) => before(router));
    routerAfter.forEach((after) => after(router));

    return { router, VueRouter };
}

export function reloadRouter(routes) {
    const group = concat(freezeRoutes, transArray(routes));
    const { router: replace } = RouterEntity(group);
    const state = eq(router.matcher.tag, replace.matcher.tag);

    router.matcher = replace.matcher // reset router

    return [router, state];
}

export function findRoute(route) {
    const { name, path, address } = route;
    const routes = router.getRoutes();

    return find(routes, (item) => (
        eq(item.name, name)
        || eq(item.path, path)
        || eq(item.path, address)
    ));
}

export default router;
