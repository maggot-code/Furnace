/*
 * @FilePath: \Furnace\src\main.js
 * @Author: maggot-code
 * @Date: 2022-11-21 14:19:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-21 15:04:35
 * @Description: 
 */
import Vue from 'vue';
import { extendRouter } from "@/extend/router";
import { extendPinia } from "@/extend/pinia";
import { extendElement } from "@/extend/element";
import { extendTable } from "@/extend/table";
import { extendForm } from "@/extend/form";

import App from '@/layout/App.vue';

import "normalize.css";
import "@/assets/style/index.scss";

const router = extendRouter(Vue);
const pinia = extendPinia(Vue);
extendElement(Vue);
extendTable(Vue);
extendForm(Vue);

const app = new Vue({
    render: h => h(App),
    router,
    pinia,
});

app.$mount("#app");

export default app;
