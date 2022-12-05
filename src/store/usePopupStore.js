/*
 * @FilePath: \Furnace\src\store\usePopupStore.js
 * @Author: maggot-code
 * @Date: 2022-12-05 10:53:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 10:53:59
 * @Description: 
 */
import { defineStore } from 'pinia';

const paths = [];

export const Namespace = 'usePopupStore';

export const usePopupStore = defineStore(Namespace, {
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
    store: usePopupStore
};
