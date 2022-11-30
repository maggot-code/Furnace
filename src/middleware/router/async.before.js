import { obtainGetRouter } from "@/server/Router/get";

import { useProgress } from "@/hooks/useProgress";
import { useUserStore } from "@/store/useUserStore";
import { useRouterStore } from "@/store/useRouterStore";

const progress = useProgress();

async function define(to, form, next) {
    const userStore = useUserStore();
    const routerStore = useRouterStore();

    if (!userStore.tokenLapse && !routerStore.onMounted) {
        progress.pend();
        const { data } = await obtainGetRouter(userStore.tokenValue);
        routerStore.setupCache(data);
    }

    next();
}

export default (router) => router.beforeEach(define);
