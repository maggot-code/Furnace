/*
 * @FilePath: \Furnace\src\store\useRouterStore.js
 * @Author: maggot-code
 * @Date: 2022-11-23 16:36:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-29 15:38:23
 * @Description: 
 */
import { defineStore } from 'pinia';
import { toArray } from "@/shared/trans";

const paths = ["cache"];

export const Namespace = 'useRouterStore';

export const useRouterStore = defineStore(Namespace, {
    state: () => ({
        cache: []
    }),

    getters: {},

    actions: {
        setupCache(dataSource) {
            this.cache = toArray(dataSource);
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
