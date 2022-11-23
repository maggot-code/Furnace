/*
 * @FilePath: \Furnace\src\extend\pinia.js
 * @Author: maggot-code
 * @Date: 2022-11-21 14:54:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 16:34:39
 * @Description: 
 */
import { definePinia } from "@/store/definePinia";

const { pinia, PiniaVuePlugin } = definePinia();

export function extendPinia(Vue) {
    Vue.use(PiniaVuePlugin);

    return pinia;
}

export default extendPinia;
