/*
 * @FilePath: \Furnace\src\store\useMenuStore.js
 * @Author: maggot-code
 * @Date: 2022-11-23 23:15:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-13 15:58:14
 * @Description: 
 */
import { defineStore } from 'pinia';
import { useRouterStore } from "@/store/useRouterStore";
import { treeMap } from "~/metadata/useTree";
import { transNumber, transBoolean } from "~/shared/trans";
import { isUsable } from "~/shared/is";
import { mergeObject } from "~/shared/merge";

const paths = ["collapse"];

function useMenu(node) {
    const menuState = get(node, "meta.menu", node.menu);
    return transBoolean(menuState);
}
function useModule(node) {
    const moduleState = get(node, "meta.module", node.module);
    return transBoolean(moduleState);
}

function toFilter(node) {
    const menu = useMenu(node);
    return isUsable([menu]);
}
function toSort(prev, next) {
    const prevValue = get(prev, "meta.sort", prev.sort);
    const nextValue = get(next, "meta.sort", next.sort);
    return transNumber(prevValue) - transNumber(nextValue);
}
function transMenuNode(node) {
    const { children } = node;
    const hasChild = children.length > 0;

    if (hasChild) {
        node.children = node.children.filter(toFilter).sort(toSort);
    }

    return mergeObject(node, node.meta);
}

export const Namespace = 'useMenuStore';

export const useMenuStore = defineStore(Namespace, {
    state: () => ({
        collapse: false
    }),

    getters: {
        menuGroup() {
            const routerStore = useRouterStore();
            return treeMap(routerStore.asyncRoutes, transMenuNode).filter(toFilter).sort(toSort);
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
