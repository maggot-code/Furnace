/*
 * @FilePath: \Furnace\src\store\useGlobStore.js
 * @Author: maggot-code
 * @Date: 2022-12-07 15:49:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-07 16:02:21
 * @Description: 
 */
import { defineStore } from 'pinia';

const paths = ["isVisited", "inLogged"];

export const Namespace = 'useGlobStore';

export const useGlobStore = defineStore(Namespace, {
    state: () => ({
        // 是否访问过该系统
        isVisited: false,
        // 是否已经登录过一次
        inLogged: false,
    }),

    getters: {},

    actions: {
        toVisited() {
            if (this.isVisited) return;
            this.isVisited = true;
        },
        toLogged() {
            if (this.inLogged) return;
            this.inLogged = true;
        }
    },

    persist: {
        key: Namespace,
        storage: localStorage,
        paths
    }
});

export default {
    namespace: Namespace,
    store: useGlobStore
};
