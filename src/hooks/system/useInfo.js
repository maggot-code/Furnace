/*
 * @FilePath: \Furnace\src\hooks\system\useInfo.js
 * @Author: maggot-code
 * @Date: 2022-12-12 13:21:47
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-12 13:33:05
 * @Description: 
 */
import { SYSTEM_SYMBOL } from "~/shared/constant";

export function useInfo() {
    const system = inject(SYSTEM_SYMBOL, {
        info: {},
        version: "0.0.0"
    });
    const info = computed(() => unref(system).info);
    const version = computed(() => `version@${unref(system).version}`);

    return {
        info,
        version
    }
}

export default useInfo;
