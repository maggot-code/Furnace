/*
 * @FilePath: \Furnace\src\store\useGlobStore.js
 * @Author: maggot-code
 * @Date: 2022-12-07 15:49:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-12 13:45:36
 * @Description: 
 */
import PackageJson from "../../package.json";
import { defineStore } from 'pinia';

const paths = [
    "isVisited",
    "inLogged"
];

export const Namespace = 'useGlobStore';

export const useGlobStore = defineStore(Namespace, {
    state: () => ({
        // 是否访问过该系统
        isVisited: false,
        // 是否已经登录过一次
        inLogged: false,
        logo: import.meta.env.VITE_APP_LOGO,
        title: import.meta.env.VITE_APP_TITLE,
        desc: import.meta.env.VITE_APP_DESC,
        author: import.meta.env.VITE_APP_AUTHOR,
        store: import.meta.env.VITE_APP_STORE,
        storeUri: import.meta.env.VITE_APP_STORE_URI,
    }),

    getters: {
        system() {
            const info = {
                logo: `${import.meta.env.VITE_APP_BASE}logo${this.logo}`,
                title: this.title,
                desc: this.desc,
                author: this.author,
                store: {
                    name: this.store,
                    uri: this.storeUri
                }
            };

            return {
                version: PackageJson.version,
                info
            };
        }
    },

    actions: {
        toVisited() {
            if (this.isVisited) return;
            this.isVisited = true;
        },
        toLogged() {
            if (this.inLogged) return;
            this.inLogged = true;
        }
    },

    persist: {
        key: Namespace,
        storage: localStorage,
        paths
    }
});

export default {
    namespace: Namespace,
    store: useGlobStore
};
