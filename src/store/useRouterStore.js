/*
 * @FilePath: \Furnace\src\store\useRouterStore.js
 * @Author: maggot-code
 * @Date: 2022-11-23 16:36:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-24 11:40:21
 * @Description: 
 */
import { defineStore } from 'pinia';
import { composeRoutes } from "@/router/composeRoutes";
import {
    defineExternRoutes,
    defineFreezeRoutes,
    defineDriveRoutes,
    defineStateRoutes
} from "@/router/defineRoutes";

import FreezeRoutes from "@/assets/json/freeze.routes";
import DriveRoutes from "@/assets/json/drive.routes";
import StateRoutes from "@/assets/json/state.routes";

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
                extern: defineExternRoutes(this.cache),
                freeze: defineFreezeRoutes(FreezeRoutes),
                drive: defineDriveRoutes(DriveRoutes),
                state: defineStateRoutes(StateRoutes)
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
