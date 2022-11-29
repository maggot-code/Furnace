/*
 * @FilePath: \Furnace\src\store\useUserStore.js
 * @Author: maggot-code
 * @Date: 2022-11-29 15:51:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-29 21:19:15
 * @Description: 
 */
import { defineStore } from 'pinia';

const paths = [];

export const Namespace = 'useUserStore';

export const useUserStore = defineStore(Namespace, {
    state: () => ({}),

    getters: {},

    actions: {},

    persist: {
        key: Namespace,
        paths
    }
});

export default {
    namespace: Namespace,
    store: useUserStore
};
