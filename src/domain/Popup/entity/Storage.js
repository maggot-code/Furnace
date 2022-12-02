/*
 * @FilePath: \Furnace\src\domain\Popup\entity\Storage.js
 * @Author: maggot-code
 * @Date: 2022-12-02 14:16:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 15:22:52
 * @Description: 
 */
import { defineShallowObject } from "@/hooks/useShallowObject";


export function StorageEntity() {
    const cache = defineShallowObject();
    const views = computed(() => {
        if (unref(cache.empty)) return [];
        return Object.keys(unref(cache.source));
    });

    return {
        cache,
        views
    }
}

export default StorageEntity;
