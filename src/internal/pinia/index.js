/*
 * @FilePath: /Furnace/src/internal/pinia/index.js
 * @Author: maggot-code
 * @Date: 2022-12-04 00:26:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 00:26:33
 * @Description: 
 */
import { createPinia, PiniaVuePlugin } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";

export const pinia = createPinia();

export function definePinia() {
    pinia.use(createPersistedState({
        debug: import.meta.env.DEV,
        storage: sessionStorage
    }));

    return {
        pinia,
        PiniaVuePlugin
    }
}

export default pinia;
