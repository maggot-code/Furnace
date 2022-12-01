/*
 * @FilePath: /Furnace/src/domain/Menu/usecase/useMenu.js
 * @Author: maggot-code
 * @Date: 2022-12-01 22:35:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 22:39:42
 * @Description: 
 */
import { MENU_STORE_SYMBOL } from "../shared/context";

export function useMenu() {
    return inject(MENU_STORE_SYMBOL);
}
