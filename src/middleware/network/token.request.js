/*
 * @FilePath: \Furnace\src\middleware\network\token.request.js
 * @Author: maggot-code
 * @Date: 2022-12-01 15:47:10
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 17:05:53
 * @Description: 
 */
import { useUserStore } from "@/store/useUserStore";

function define(config) {
    const userStore = useUserStore();

    userStore.tokenUsable && set(config, "headers.Authorization", userStore.tokenValue);

    return config;
}

export default (server) => server.interceptors.request.use(define);
