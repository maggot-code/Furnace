import Router from "@/router/defineRouter";
import { useUserStore } from "@/store/useUserStore";
import { NotfoundName } from "@/router/context";

function define(to, form, next) {
    const routes = Router.getRoutes();
    const userStore = useUserStore();
    const loseIndex = routes.findIndex(route => eq(route.name, to.name)) < 0;

    if (userStore.tokenUnusable || eq(to.name, NotfoundName)) {
        next();
    } else {
        loseIndex ? next({ name: NotfoundName }) : next();
    }
}

export default (router) => router.beforeEach(define);
