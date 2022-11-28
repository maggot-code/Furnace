/*
 * @FilePath: \Furnace\src\hooks\useVueRouter.js
 * @Author: maggot-code
 * @Date: 2022-11-23 23:09:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-28 16:57:27
 * @Description: 
 */
import { getCurrentInstance } from "vue";

export function useRouter() {
    const vm = getCurrentInstance();
    if (!vm) throw new Error('useRouter must be called in setup()');

    return vm.proxy.$router;
}

export function useRoute() {
    const vm = getCurrentInstance();
    if (!vm) throw new Error('useRoute must be called in setup()');

    return vm.proxy.$route;
}

// 提供的实现方式存疑，后面修改
export function useRefresh() { }

export default useRouter;
