/*
 * @FilePath: /Furnace/src/hooks/router/useRoute.js
 * @Author: maggot-code
 * @Date: 2022-12-04 01:53:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 01:55:03
 * @Description: 
 */
import { getCurrentInstance } from "vue";

export function useRoute() {
    const vm = getCurrentInstance();
    if (!vm) throw new Error('useRoute must be called in setup()');

    return vm.proxy.$route;
}

export default useRoute;
