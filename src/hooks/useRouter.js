/*
 * @FilePath: \Furnace\src\hooks\useRouter.js
 * @Author: maggot-code
 * @Date: 2022-11-23 23:09:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 23:14:48
 * @Description: 
 */
import { router } from "@/router/defineRouter";

export function useRouter() {
    return router;
}

export function useRoute() {
    return useRouter().currentRoute;
}

export default useRouter;
