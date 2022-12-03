/*
 * @FilePath: /Furnace/src/extend/pinia.js
 * @Author: maggot-code
 * @Date: 2022-11-21 14:54:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 00:26:57
 * @Description: 
 */
import { definePinia } from "~/pinia";

const { pinia, PiniaVuePlugin } = definePinia();

export function extendPinia(Vue) {
    Vue.use(PiniaVuePlugin);

    return pinia;
}

export default extendPinia;
