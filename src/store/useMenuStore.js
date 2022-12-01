/*
 * @FilePath: \Furnace\src\store\useMenuStore.js
 * @Author: maggot-code
 * @Date: 2022-11-23 23:15:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 15:28:07
 * @Description: 
 */
import { defineStore } from 'pinia';
import { useRouterStore } from "@/store/useRouterStore";
import { treeMap } from "@/shared/metadata/trans";
import { mergePlainObject } from "@/shared/trans";
import { uuid } from "@/shared/uuid";

const paths = ["collapse"];

function toSort(prev, next) {
    return prev.meta.sort - next.meta.sort;
}
function transMenuNode(node) {
    const { children } = node;
    const hasChild = children.length > 0;

    if (hasChild) {
        node.children = node.children.sort(toSort);
    }

    return mergePlainObject(node, node.meta);
}

export const Namespace = 'useMenuStore';

export const useMenuStore = defineStore(Namespace, {
    state: () => ({
        collapse: false,
    }),

    getters: {
        menuGroup() {
            const routerStore = useRouterStore();
            return treeMap(routerStore.asyncRoutes, transMenuNode).sort(toSort);
        },
        menuWidth() {
            return this.collapse ? "64px" : "240px";
        }
    },

    actions: {
        switchCollapse() {
            this.collapse = !this.collapse;
        }
    },

    persist: {
        key: Namespace,
        paths
    }
});

export default {
    namespace: Namespace,
    store: useMenuStore
};
