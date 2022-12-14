/*
 * @FilePath: \Furnace\src\middleware\network\token.request.js
 * @Author: maggot-code
 * @Date: 2022-12-06 09:21:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 09:23:34
 * @Description: 
 */
import { useUserStore } from "@/store/useUserStore";

function define(config) {
    const userStore = useUserStore();

    if (userStore.tokenUsable) {
        set(config, "headers.Authorization", userStore.tokenValue);
        set(config, "headers.token", userStore.tokenValue);
    }

    return config;
}

export default (server) => server.interceptors.request.use(define);
