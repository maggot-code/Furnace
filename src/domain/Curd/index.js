/*
 * @FilePath: \Furnace\src\domain\Curd\index.js
 * @Author: maggot-code
 * @Date: 2022-11-25 16:22:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-28 12:03:22
 * @Description: 
 */
export const CurdView = defineAsyncComponent(() => import("./view/curd.vue"));
export const CurdSearch = defineAsyncComponent(() => import("./view/curd-search.vue"));
export const CurdControl = defineAsyncComponent(() => import("./view/curd-control.vue"));
export const CurdList = defineAsyncComponent(() => import("./view/curd-list.vue"));
