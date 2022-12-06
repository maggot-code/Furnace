/*
 * @FilePath: /Furnace/src/extend/element.js
 * @Author: maggot-code
 * @Date: 2022-11-21 14:54:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 01:15:23
 * @Description: 
 */
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';

export function extendElement(Vue) {
    Vue.use(ElementUI);
}

export default extendElement;
