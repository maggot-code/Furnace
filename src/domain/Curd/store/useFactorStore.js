/*
 * @FilePath: /Furnace/src/template/SimpleCurd/store/useFactorStore.js
 * @Author: maggot-code
 * @Date: 2022-11-27 17:39:13
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 23:16:33
 * @Description: 
 */
import { defineStore } from 'pinia';
import { toFormData, mergePlainObject } from "@/shared/trans";
import { filterEmptyPlainObject } from "@/shared/filter";

const paths = [];

export const Namespace = 'useFactorStore';

export const useFactorStore = defineStore(Namespace, {
    state: () => ({
        config: {},
        formReady: false,
        tableReady: false,
        form: {},
        table: {}
    }),

    getters: {
        sourceData() {
            return filterEmptyPlainObject(this.form);
        },
        sourceFormData() {
            return toFormData(this.sourceData);
        },
        sourceParams() {
            return this.table;
        },
        sourceConfig() {
            return mergePlainObject(this.config.source, {
                params: this.sourceParams,
                data: this.sourceData
            });
        },
        factorReady() {
            return this.formReady && this.tableReady;
        }
    },

    actions: {
        reset() {
            this.config = {};
            this.formReady = false;
            this.tableReady = false;
            this.form = {};
            this.table = {};
        },
        setupConfig(source) {
            this.config = source;
            return source;
        },
        setupForm(value) {
            if (!this.formReady) this.formReady = true;

            this.form = value;
        },
        setupTable(value) {
            if (!this.tableReady) this.tableReady = true;

            this.table = value;
        }
    },

    persist: {
        key: Namespace,
        paths
    }
});

export default {
    namespace: Namespace,
    store: useFactorStore
};