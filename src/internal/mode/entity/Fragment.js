/*
 * @FilePath: /Furnace/src/internal/mode/entity/Fragment.js
 * @Author: maggot-code
 * @Date: 2022-12-04 16:21:50
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 16:58:17
 * @Description: 
 */
export function FragmentEntity(props) {
    return defineAsyncComponent(() => import("@/layout/Fragment.vue"));
}

export default FragmentEntity;
