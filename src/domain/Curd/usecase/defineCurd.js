/*
 * @FilePath: /Furnace/src/template/SimpleCurd/usecase/defineCurd.js
 * @Author: maggot-code
 * @Date: 2022-11-27 17:13:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 17:46:59
 * @Description: 
 */
import { isUsable } from "@/shared/is";

import { useFactorStore } from "../store/useFactorStore";

export function defineCurd(namespace) {
    const factorStore = useFactorStore();

    const wrap = {
        factor: factorStore,
    };
    if (isUsable(namespace)) provide(namespace, wrap);
    return wrap;
}

export default defineCurd;
