/*
 * @FilePath: \Furnace\src\store\useRouterStore.js
 * @Author: maggot-code
 * @Date: 2022-11-23 16:36:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 20:41:44
 * @Description: 
 */
import { defineStore } from 'pinia';
import { uuid } from "@/shared/uuid";
import { toArray } from "@/shared/trans";
import { transRouteGroup } from "@/router/trans";
import { ExternalNamespace } from "@/router/namespace";

const paths = [];

export const Namespace = 'useRouterStore';

export const useRouterStore = defineStore(Namespace, {
    state: () => ({
        cache: [],
        mounted: false,
        cue: uuid()
    }),

    getters: {
        onMounted() {
            return this.mounted && this.cache.length > 0;
        },
        asyncRoutes() {
            return transRouteGroup(this.cache, ExternalNamespace);
        }
    },

    actions: {
        toMounted() {
            if (this.mounted) return;
            this.mounted = true;
        },
        setupCache(dataSource) {
            this.cache = toArray(dataSource);
            if (this.cache.length <= 0) this.mounted = false;
            if (this.onMounted) return this.cache;

            this.cue = uuid();
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
