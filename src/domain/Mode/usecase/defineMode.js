/*
 * @FilePath: \Furnace\src\domain\Mode\usecase\defineMode.js
 * @Author: maggot-code
 * @Date: 2022-12-01 09:44:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 17:50:35
 * @Description: 
 */
import { matchMode } from "../shared/group";
import { toFunction } from "@/shared/trans";

export function defineMode(mode) {
    const toMode = matchMode(mode);
    const define = toFunction(toMode?.default);

    return {
        define
    };
}

export default defineMode;
