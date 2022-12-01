/*
 * @FilePath: \Furnace\src\domain\Mode\store\fragment.js
 * @Author: maggot-code
 * @Date: 2022-12-01 09:45:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 15:15:03
 * @Description: 
 */
function define() {
    return defineAsyncComponent(() => import("@/layout/Fragment.vue"));
}

export default (props) => define(props);
