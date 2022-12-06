/*
 * @FilePath: \Furnace\src\store\useUserStore.js
 * @Author: maggot-code
 * @Date: 2022-12-04 03:44:55
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 09:10:39
 * @Description: 
 */
import { defineStore } from 'pinia';
import { isUnusable, isUsable } from "~/shared/is";
import dayjs from "dayjs";

const OverdueInfo = ["已过期", "未过期"];

const paths = [
    "token",
    "name",
    "avatar",
    "roles",
    "activeRole"
];

export const Namespace = 'useUserStore';

export const useUserStore = defineStore(Namespace, {
    state: () => ({
        token: {
            value: "",
            overdue: Date.now()
        },
        name: "",
        avatar: "",
        roles: [],
        activeRole: null
    }),

    getters: {
        tokenValue() {
            return this.token.value;
        },
        tokenOverdue() {
            return [
                this.token.overdue,
                dayjs(this.token.overdue).format("YYYY-MM-DD HH:mm:ss")
            ]
        },
        tokenUnusable() {
            const [overdue] = this.tokenOverdue;
            const untoken = isUnusable(this.tokenValue);
            const date = overdue < Date.now();
            return untoken || date;
        },
        tokenUsable() {
            return !this.tokenUnusable;
        },
        overdueView() {
            const [unusable, usable] = OverdueInfo;
            return this.tokenUnusable ? unusable : usable;
        },
        userInfo() {
            return {
                name: this.name,
                avatar: this.avatar,
                roles: this.roles,
                activeRole: this.activeRole
            }
        }
    },

    actions: {
        clearToken() {
            this.token.value = "";
            this.token.overdue = Date.now();
        },
        renewToken() {
            this.token.overdue = Date.now() + 1000 * 60 * 60 * 24;
        },
        setupToken(response) {
            this.token.value = get(response, "token", "");
            this.renewToken();
            return isUsable(this.token.value);
        },
        setup(response) {
            this.name = get(response, "name");
            this.avatar = get(response, "avatar");
            this.roles = get(response, "roles");
            this.activeRole = get(response, "activeRole");
            return this.setupToken(response);
        },
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
