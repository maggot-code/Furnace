/*
 * @FilePath: \Furnace\src\store\useGlobeStore.js
 * @Author: maggot-code
 * @Date: 2022-11-23 17:35:13
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 17:35:26
 * @Description: 
 */
import { defineStore } from 'pinia';

const paths = [];

export const Namespace = 'useGlobeStore';

export const useGlobeStore = defineStore(Namespace, {
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
    store: useGlobeStore
};
