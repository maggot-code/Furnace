/*
 * @FilePath: /Furnace/src/hooks/router/useRouter.js
 * @Author: maggot-code
 * @Date: 2022-12-04 01:53:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 01:54:34
 * @Description: 
 */
import { getCurrentInstance } from "vue";

export function useRouter() {
    const vm = getCurrentInstance();
    if (!vm) throw new Error('useRouter must be called in setup()');

    return vm.proxy.$router;
}

export default useRouter;
