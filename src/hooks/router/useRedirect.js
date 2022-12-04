/*
 * @FilePath: /Furnace/src/hooks/router/useRedirect.js
 * @Author: maggot-code
 * @Date: 2022-12-04 01:53:55
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 01:58:29
 * @Description: 
 */
import { RouteName } from "~/router/shared/context";
import { useRouter } from "@/hooks/router/useRouter";
import { useRoute } from "@/hooks/router/useRoute";
import { mergeObject } from "~/shared/merge";

export function useRedirect() {
    const router = useRouter();
    const route = useRoute();

    function redo() {
        return new Promise((resolve) => {
            if (eq(route.name, RouteName.RedirectName)) return resolve(false);
            const params = mergeObject({ query: route.query });
            return router.push({ name: RouteName.RedirectName, params })
                .then(() => resolve(true))
                .catch((error) => {
                    console.log(error);
                    resolve(false);
                });
        });
    }

    return redo;
}
