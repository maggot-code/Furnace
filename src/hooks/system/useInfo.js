/*
 * @FilePath: \Furnace\src\hooks\system\useInfo.js
 * @Author: maggot-code
 * @Date: 2022-12-12 13:21:47
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-12 16:15:07
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

export function useTypeface() {
    const fontClass = computed(() => {
        return import.meta.env.DEV
            ? ["furnace-font"]
            : [];
    });
    return fontClass;
}

export default useInfo;
