/*
 * @FilePath: /Furnace/src/store/useRouterStore.js
 * @Author: maggot-code
 * @Date: 2022-11-23 16:36:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-16 16:55:29
 * @Description: 
 */
import { defineStore } from 'pinia';
import { RouterGetObtain } from "@/server/router/get";
import { transArray } from "~/shared/trans";
import { findRoute, reloadRouter } from "~/router";
import { GroupEntity } from "~/router/entity/Group";
import { RouteName, RouterNamespace } from "~/router/shared/context";
import BusinessRoute from "~/router/constant/business";
import { mergeObject } from "~/shared/merge";

const paths = ["cache", "module"];
// const storage = import.meta.env.DEV ? window.sessionStorage : window.localStorage;
const storage = window.sessionStorage;

export const Namespace = 'useRouterStore';

export const useRouterStore = defineStore(Namespace, {
    state: () => ({
        mounted: false,
        cache: [],
        module: "",
    }),

    getters: {
        asyncRoutes() {
            return GroupEntity(RouterNamespace.External, this.cache);
        },
        notAsyncRoutes() {
            return this.asyncRoutes.length <= 0;
        },
        // 永远存在且一定会存在一个模块
        moduleRoutes() {
            if (this.notAsyncRoutes) return [];
            const root = mergeObject(findRoute(BusinessRoute), { children: [] });
            const group = this.asyncRoutes.reduce((store, route) => {
                if (route.meta.module) {
                    store.push(route);
                } else {
                    root.children.push(route);
                }
                return store;
            }, []);
            group.unshift(root);

            return group;
        },
        moduleCurrent() {
            return this.moduleRoutes.find((route) => route.name === this.module)?.children ?? [];
        },
        firstRoute() {
            if (this.moduleCurrent.length <= 0) return null;

            return this.moduleCurrent[0];
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
        },
        toModule(route) {
            this.module = route.name;
        }
    },

    persist: {
        key: Namespace,
        paths,
        storage
    }
});

export default {
    namespace: Namespace,
    store: useRouterStore
};
