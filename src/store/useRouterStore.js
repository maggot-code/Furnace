/*
 * @FilePath: \Furnace\src\store\useRouterStore.js
 * @Author: maggot-code
 * @Date: 2022-11-23 16:36:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 02:28:58
 * @Description: 
 */
import { defineStore } from 'pinia';
import { toArray } from "@/shared/trans";
import { transRouteGroup } from "@/router/trans";
import { ExternalNamespace } from "@/router/namespace";

const paths = ["cache"];

export const Namespace = 'useRouterStore';

export const useRouterStore = defineStore(Namespace, {
    state: () => ({
        cache: []
    }),

    getters: {
        asyncRoutes() {
            return transRouteGroup(this.cache, ExternalNamespace);
        }
    },

    actions: {
        setupCache(dataSource) {
            this.cache = toArray(dataSource);
            return this.cache;
        }
    },

    persist: {
        key: Namespace,
        paths
    }
});

export default {
    namespace: Namespace,
    store: useRouterStore
};
