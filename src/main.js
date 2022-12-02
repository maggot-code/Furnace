/*
 * @FilePath: \Furnace\src\main.js
 * @Author: maggot-code
 * @Date: 2022-11-21 14:19:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 11:22:48
 * @Description: 
 */
import Vue from 'vue';
import { extendRouter } from "@/extend/router";
import { extendPinia } from "@/extend/pinia";
import { extendElement } from "@/extend/element";
import { extendTable } from "@/extend/table";
import { extendForm } from "@/extend/form";
import { extendMockData } from "@/extend/mockData";

import App from '@/layout/App.vue';

import "normalize.css";
import "nprogress/nprogress.css";
import "@/assets/style/index.scss";

const pinia = extendPinia(Vue);
const router = extendRouter(Vue);
extendElement(Vue);
extendTable(Vue);
extendForm(Vue);
extendMockData(Vue);

const app = new Vue({
    render: h => h(App),
    pinia,
    router,
});

app.$mount("#app");

export default app;
