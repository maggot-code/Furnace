/*
 * @FilePath: \Furnace\src\hooks\useVueRouter.js
 * @Author: maggot-code
 * @Date: 2022-11-23 23:09:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-29 21:18:42
 * @Description: 
 */
import { getCurrentInstance } from "vue";
import { RedirectName, RootName } from "@/router/context";
import { mergePlainObject } from "@/shared/trans";

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

// 重定向路由
export function useRedirect() {
    // RedirectName
    const router = useRouter();
    const route = useRoute();

    function redo(to) {
        return new Promise((resolve) => {
            if (route.name === RedirectName) return resolve(false);

            const params = mergePlainObject(to, { query: route.query });
            return router.push({ name: RedirectName, params })
                .then(() => resolve(true))
                .catch((error) => {
                    console.log(error);
                    resolve(false);
                });
        });
    }

    return redo;
}

export default useRouter;