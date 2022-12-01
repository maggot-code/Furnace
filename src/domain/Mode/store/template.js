/*
 * @FilePath: \Furnace\src\domain\Mode\store\template.js
 * @Author: maggot-code
 * @Date: 2022-12-01 09:46:55
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 12:44:18
 * @Description: 
 */
function define() {
    return defineAsyncComponent(() => import("@/layout/TemplateView.vue"))
}

export default (props) => define(props);
