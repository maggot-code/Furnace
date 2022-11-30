import Router from "@/router/defineRouter";
import { NotfoundName } from "@/router/context";

function define(to, form, next) {
    const routes = Router.getRoutes();
    const isNotfound = eq(to.name, NotfoundName);
    const isIndex = routes.findIndex(route => eq(route.name, to.name)) >= 0;

    if (isNotfound || isIndex) {
        next();
    } else {
        next({ name: NotfoundName });
    }
}

export default (router) => router.beforeEach(define);
