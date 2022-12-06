/*
 * @FilePath: \Furnace\src\hooks\system\useCache.js
 * @Author: maggot-code
 * @Date: 2022-12-06 15:58:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 16:29:56
 * @Description: 
 */
// import { useUserStore } from "@/store/useUserStore";
import { useRouterStore } from "@/store/useRouterStore";
import { useRedirect } from "@/hooks/router/useRedirect";

export function useClearCache() {
    const redo = useRedirect();
    // const userStore = useUserStore();

    function clear() {
        // userStore.clearToken();
        redo();
    }

    return clear;
}

export function useUpdateCache() {
    const redo = useRedirect();
    const routerStore = useRouterStore();

    function update() {
        routerStore.toUnmounted();
        redo();
    }

    return update;
}
