/*
 * @FilePath: /Furnace/src/template/SimpleCurd/index.js
 * @Author: maggot-code
 * @Date: 2022-11-25 16:22:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-26 15:52:16
 * @Description: 
 */
export const SimpleCurdView = defineAsyncComponent(() => import("./view/simple-curd.vue"));
export const SimpleCurdSearch = defineAsyncComponent(() => import("./view/simple-search.vue"));
export const SimpleCurdControl = defineAsyncComponent(() => import("./view/simple-control.vue"));
export const SimpleCurdTable = defineAsyncComponent(() => import("./view/simple-table.vue"));
