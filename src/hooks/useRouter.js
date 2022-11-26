/*
 * @FilePath: /Furnace/src/hooks/useRouter.js
 * @Author: maggot-code
 * @Date: 2022-11-23 23:09:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-26 15:19:04
 * @Description: 
 */
import { getCurrentInstance } from "vue";
import { RedirectName } from "@/router/context";
import { toPlainObject, mergePlainObject } from "@/shared/trans";

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
export function useRefresh() {
    const router = useRouter();
    const { query, params, name, fullPath } = router.currentRoute;

    function redo(extend) {
        return new Promise((resolve) => {
            if (eq(name, RedirectName)) return resolve(false);

            if (name && Object.keys(toPlainObject(params)).length > 0) {
                params["redirectType"] = "name";
                params["path"] = name;
            } else {
                params["redirectType"] = "path";
                params["path"] = fullPath;
            }

            const querys = mergePlainObject(query, extend);

            return router.push({ name: RedirectName, params, query: querys }).then(() => resolve(true));
        });
    }

    return redo;
}

export default useRouter;
