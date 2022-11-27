/*
 * @FilePath: /Furnace/src/hooks/useServerLoad.js
 * @Author: maggot-code
 * @Date: 2022-11-22 14:01:06
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 22:55:11
 * @Description: 
 */
import { toArray } from "@/shared/trans";

function pickLoading(server) {
    return unref(server).loading;
}

export function useServerLoad(servers) {
    const loads = toArray(servers).map(pickLoading);
    return computed(() => {
        return loads.some((load) => !!unref(load));
    });
}

export default useServerLoad;
