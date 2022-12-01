/*
 * @FilePath: /Furnace/src/store/useServiceStore.js
 * @Author: maggot-code
 * @Date: 2022-12-01 21:19:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 21:20:00
 * @Description: 
 */
import { defineStore } from 'pinia';
import { } from "@/shared/trans";

const paths = [];

export const Namespace = 'useServiceStore';

export const useServiceStore = defineStore(Namespace, {
    state: () => ({
        errorState: false
    }),

    getters: {},

    actions: {
        setErrorState(errorState) {
            this.errorState = errorState;
        }
    },

    persist: {
        key: Namespace,
        paths
    }
});

export default {
    namespace: Namespace,
    store: useServiceStore
};
