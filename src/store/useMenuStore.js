/*
 * @FilePath: /Furnace/src/store/useMenuStore.js
 * @Author: maggot-code
 * @Date: 2022-11-23 23:15:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 17:23:19
 * @Description: 
 */
import { defineStore } from 'pinia';
import { useRouterStore } from "@/store/useRouterStore";
import { treeMap } from "~/metadata/useTree";
import { transNumber } from "~/shared/trans";
import { mergeObject } from "~/shared/merge";

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

    return mergeObject(node, node.meta);
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
        },
        hiddenTitle: (state) => (level) => {
            const levelState = transNumber(level, 0) > 0;

            if (levelState) return true;

            return !levelState && (!state.collapse);
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
