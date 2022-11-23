import VueRouter from "vue-router";
import { useRouterStore } from "@/router/useRouterStore";

// hack router push callback
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

export const router = new VueRouter({
    routes: [],
    mode: "hash",
    scrollBehavior: () => ({ y: 0 })
});

export function routeMount(route) {
    router.addRoute(route);

    return route;
}

function routeReady() {
    const routerStore = useRouterStore();

    routerStore.routes.map(routeMount);

    routerStore.setReady();
}

export function defineRouter() {
    router.onReady(routeReady);

    return {
        router,
        VueRouter
    }
}

export default defineRouter;
