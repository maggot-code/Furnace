/*
 * @FilePath: /Furnace/src/main.js
 * @Author: maggot-code
 * @Date: 2022-11-21 14:19:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 01:34:33
 * @Description: 
 */
import Vue from 'vue';
import Mock from 'mockjs';
import { extendRouter } from "@/extend/router";
import { extendPinia } from "@/extend/pinia";
import { extendElement } from "@/extend/element";
import { extendTable } from "@/extend/table";
import { extendForm } from "@/extend/form";

import App from '@/layout/App.vue';

import "normalize.css";
import "nprogress/nprogress.css";
import "@/assets/style/index.scss";

const pinia = extendPinia(Vue);
const router = extendRouter(Vue);
extendElement(Vue);
extendTable(Vue);
extendForm(Vue);

const app = new Vue({
    render: h => h(App),
    pinia,
    router,
});

Mock.setup({
    timeout: "600-800",
});
app.$mount("#app");

export default app;
