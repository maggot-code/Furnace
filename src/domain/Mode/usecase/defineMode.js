/*
 * @FilePath: \Furnace\src\domain\Mode\usecase\defineMode.js
 * @Author: maggot-code
 * @Date: 2022-12-01 09:44:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 10:22:04
 * @Description: 
 */
import { matchMode } from "../shared/group";

export function defineMode(mode) {
    matchMode(mode);

    return {}
}

export default defineMode;
