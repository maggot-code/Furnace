/*
 * @FilePath: \Furnace\src\store\useUserStore.js
 * @Author: maggot-code
 * @Date: 2022-11-29 15:51:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 18:10:17
 * @Description: 
 */
import { defineStore } from 'pinia';
import { isUnusable } from "@/shared/is";
import { toString, toArray, toPlainObject } from "@/shared/trans";
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
        tokenUnusable() {
            const untoken = isUnusable([this.tokenValue]);
            const date = this.token.overdue < Date.now();
            return untoken || date;
        },
        tokenUsable() {
            return !this.tokenUnusable;
        },
        tokenOverdue() {
            return dayjs(this.token.overdue).format("YYYY-MM-DD HH:mm:ss");
        },
        overdueView() {
            return this.tokenUnusable ? "已过期" : "未过期";
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
        setup(response) {
            const info = defineInfo(toPlainObject(response));

            this.name = info.name;
            this.avatar = info.avatar;
            this.roles = info.roles;
            this.activeRole = info.activeRole;
        },
        setupToken(response) {
            const source = toPlainObject(response);
            this.token = defineToken(source.token);
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
