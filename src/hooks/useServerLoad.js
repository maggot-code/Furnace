/*
 * @FilePath: \Furnace\src\hooks\useServerLoad.js
 * @Author: maggot-code
 * @Date: 2022-11-22 14:01:06
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 03:01:38
 * @Description: 
 */
import { useLoading } from "@/hooks/useLoading";
import { toArray } from "@/shared/trans";

function pickLoading(server) {
    return unref(server).loading;
}

export function useServerLoad(servers, tips) {
    const loading = useLoading();
    const loads = toArray(servers).map(pickLoading);
    const loadState = computed(() => loads.some((load) => unref(load)));
    const watchLoad = () => watchEffect(() => {
        unref(loadState)
            ? loading.start(tips)
            : loading.end();
    });

    return {
        loadState,
        watchLoad
    }
}

export default useServerLoad;
