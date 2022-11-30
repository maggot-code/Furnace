/*
 * @FilePath: \Furnace\src\store\useUserStore.js
 * @Author: maggot-code
 * @Date: 2022-11-29 15:51:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 19:13:55
 * @Description: 
 */
import { defineStore } from 'pinia';
import { isUnusable } from "@/shared/is";
import { toString, toArray } from "@/shared/trans";
import dayjs from "dayjs";

const paths = [
    "token",
    "name",
    "avatar",
    "roles",
    "activeRole"
];

export function defineToken(value) {
    return {
        value,
        overdue: Date.now()
    }
}

export function defineInfo(source) {
    return {
        name: toString(source.name),
        avatar: toString(source.avatar),
        roles: toArray(source.roles),
        activeRole: source.activeRole ?? null
    }
}

export const Namespace = 'useUserStore';

export const useUserStore = defineStore(Namespace, {
    state: () => ({
        token: defineToken(),
        name: "",
        avatar: "",
        roles: [],
        activeRole: null,
    }),

    getters: {
        tokenValue() {
            return this.token.value;
        },
        // token 是否过期
        tokenLapse() {
            const untoken = isUnusable([this.tokenValue]);
            const date = this.token.overdue < Date.now();
            return untoken || date;
        },
        tokenOverdue() {
            return dayjs(this.token.overdue).format("YYYY-MM-DD HH:mm:ss");
        },
        overdueView() {
            return this.tokenLapse ? "已过期" : "未过期";
        },
        info() {
            return {
                name: this.name,
                avatar: this.avatar,
                roles: this.roles,
                activeRole: this.activeRole,
            }
        }
    },

    actions: {
        setup(source) {
            const info = defineInfo(source);

            this.name = info.name;
            this.avatar = info.avatar;
            this.roles = info.roles;
            this.activeRole = info.activeRole;
        },
        setupToken(value) {
            this.token = defineToken(value);
            this.updateToken();
        },
        updateToken() {
            this.token.overdue = Date.now() + 1000 * 60 * 60 * 24;
        },
        clearToken() {
            this.token = defineToken();
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
