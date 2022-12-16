/*
 * @FilePath: /Furnace/src/hooks/router/useModule.js
 * @Author: maggot-code
 * @Date: 2022-12-16 16:57:08
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-16 17:10:33
 * @Description: 
 */
import { storeToRefs } from "pinia";
import { useRouter } from "@/hooks/router/useRouter";
import { useRouterStore } from "@/store/useRouterStore";

export function useModule() {
    const router = useRouter();
    const routerStore = useRouterStore();
    const { moduleRoutes } = storeToRefs(routerStore);

    function redo(route) {
        routerStore.toModule(route);
        router.push(route);
    }

    return {
        modules: moduleRoutes,
        redo
    }
}

export default useModule;
