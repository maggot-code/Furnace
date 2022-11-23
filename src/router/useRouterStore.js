/*
 * @FilePath: \Furnace\src\router\useRouterStore.js
 * @Author: maggot-code
 * @Date: 2022-11-23 16:36:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 18:08:36
 * @Description: 
 */
import { defineStore } from 'pinia';
import { composeRoutes } from "@/router/composeRoutes";
import {
    defineFreezeRoutes,
    defineExternRoutes,
    defineDriveRoutes,
    defineStateRoutes
} from "@/router/defineRoutes";

const paths = ["cache"];

export const Namespace = 'useRouterStore';

export const useRouterStore = defineStore(Namespace, {
    state: () => ({
        ready: false,
        cache: []
    }),

    getters: {
        notCache() {
            return this.cache.length <= 0;
        },
        hasCache() {
            return !this.notCache;
        },
        // 处理缓存转换路由数据
        routes() {
            return composeRoutes({
                freeze: defineFreezeRoutes(this.cache),
                extern: defineExternRoutes(this.cache),
                drive: defineDriveRoutes(this.cache),
                state: defineStateRoutes(this.cache)
            });
        }
    },

    actions: {
        setReady() {
            if (this.ready) return;

            this.ready = true;
        },
        setCache(dataSource) {
            if (this.hasCache) return;

            this.cache = dataSource;
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
