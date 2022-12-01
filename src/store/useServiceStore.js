/*
 * @FilePath: /Furnace/src/store/useServiceStore.js
 * @Author: maggot-code
 * @Date: 2022-12-01 21:19:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 21:24:34
 * @Description: 
 */
import { defineStore } from 'pinia';
import { uuid } from "@/shared/uuid";

const paths = [];

export const Namespace = 'useServiceStore';

export const useServiceStore = defineStore(Namespace, {
    state: () => ({
        errorCue: uuid()
    }),

    getters: {},

    actions: {
        toErrorCue() {
            this.errorCue = uuid();
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
