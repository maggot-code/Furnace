import { useUserStore } from "@/store/useUserStore";
import { useRouterStore } from "@/store/useRouterStore";

async function define(to, form, next) {
    const userStore = useUserStore();
    const routerStore = useRouterStore();

    if (userStore.tokenUnusable || routerStore.mounted) {
        next();
    } else {
        await routerStore.toMounted();
        next({ ...to, replace: true });
    }
}

export default (router) => router.beforeEach(define);
