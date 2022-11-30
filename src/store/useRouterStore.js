/*
 * @FilePath: \Furnace\src\store\useRouterStore.js
 * @Author: maggot-code
 * @Date: 2022-11-23 16:36:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 00:53:57
 * @Description: 
 */
import { defineStore } from 'pinia';
import { obtainGetRouter } from "@/server/Router/get";
import { toArray } from "@/shared/trans";
import { reloadRouter } from "@/router/defineRouter";
import { transRouteGroup } from "@/router/trans";
import { ExternalNamespace } from "@/router/namespace";
import { BusinessName } from "@/router/context";

const paths = ["cache"];

export const Namespace = 'useRouterStore';

export const useRouterStore = defineStore(Namespace, {
    state: () => ({
        mounted: false,
        cache: []
    }),

    getters: {
        asyncRoutes() {
            return transRouteGroup(this.cache, ExternalNamespace);
        }
    },

    actions: {
        async toMounted() {
            if (this.mounted) return this.mounted;

            if (this.cache.length <= 0) {
                const { data } = await obtainGetRouter();
                this.cache = toArray(data);
            }

            const router = reloadRouter();
            this.asyncRoutes.forEach((route) => {
                router.addRoute(BusinessName, route);
            });
            this.mounted = true;

            return this.mounted;
        },
        toUnmounted() {
            this.cache = [];
            this.mounted = false;
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
