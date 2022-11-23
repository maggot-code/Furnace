/*
 * @FilePath: \Furnace\src\store\definePinia.js
 * @Author: maggot-code
 * @Date: 2022-11-23 16:31:19
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 17:05:39
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

export default definePinia;
