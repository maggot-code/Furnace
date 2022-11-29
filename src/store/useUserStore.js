/*
 * @FilePath: \Furnace\src\store\useUserStore.js
 * @Author: maggot-code
 * @Date: 2022-11-29 15:51:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-29 16:26:29
 * @Description: 
 */
import { defineStore } from 'pinia';
import { isEmptyString } from "@/shared/is";
import dayjs from "dayjs";

const paths = [
    "tokenStore",
    "name"
];

export const Namespace = 'useUserStore';

export const useUserStore = defineStore(Namespace, {
    state: () => ({
        tokenStore: {
            value: "",
            overdue: Date.now()
        },
        name: "",
    }),

    getters: {
        token() {
            return this.tokenStore.value;
        },
        overdueView() {
            return dayjs(this.tokenStore.overdue).format("YYYY-MM-DD HH:mm:ss");
        },
        tokenUnusable() {
            const isOverdue = this.tokenStore.overdue < Date.now();
            const emptyValue = isEmptyString(this.tokenStore.value);

            return isOverdue || emptyValue;
        },
        tokenUsable() {
            return !this.tokenUnusable;
        }
    },

    actions: {
        setupToken(value) {
            if (this.tokenUsable) return;

            this.tokenStore.value = value;
            this.tokenStore.overdue = new Date().getTime() + 1000 * 60 * 60 * 24;
        },
        clearToken() {
            this.tokenStore.value = "";
            this.tokenStore.overdue = Date.now();
        },
        updateTokenOverdue() {
            this.tokenStore.overdue = new Date().getTime() + 1000 * 60 * 60 * 24;
        }
    },

    persist: {
        key: Namespace,
        paths
    }
});

export default {
    namespace: Namespace,
    store: useUserStore
};
