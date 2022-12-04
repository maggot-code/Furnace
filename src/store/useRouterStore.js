/*
 * @FilePath: /Furnace/src/store/useRouterStore.js
 * @Author: maggot-code
 * @Date: 2022-11-23 16:36:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 18:20:38
 * @Description: 
 */
import { defineStore } from 'pinia';
import { RouterGetObtain } from "@/server/router/get";
import { transArray } from "~/shared/trans";
import { reloadRouter } from "~/router";
import { GroupEntity } from "~/router/entity/Group";
import { RouteName, RouterNamespace } from "~/router/shared/context";

const paths = ["cache"];

export const Namespace = 'useRouterStore';

export const useRouterStore = defineStore(Namespace, {
    state: () => ({
        mounted: false,
        cache: []
    }),

    getters: {
        asyncRoutes() {
            return GroupEntity(RouterNamespace.External, this.cache);
        },
        firstRoute() {
            if (this.asyncRoutes.length <= 0) return null;

            return this.asyncRoutes[0];
        }
    },

    actions: {
        async toMounted() {
            if (this.mounted) return this.mounted;

            if (this.cache.length <= 0) {
                const { data } = await RouterGetObtain();
                this.cache = transArray(data);
            }

            this.mounted = true;

            const [router] = reloadRouter();
            this.asyncRoutes.forEach((route) => {
                router.addRoute(RouteName.BusinessName, route);
            });

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
