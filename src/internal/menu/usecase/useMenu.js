/*
 * @FilePath: /Furnace/src/internal/menu/usecase/useMenu.js
 * @Author: maggot-code
 * @Date: 2022-12-04 17:14:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 17:14:40
 * @Description: 
 */
import { MENU_STORE_SYMBOL } from "~/menu/shared/context";

export function useMenu() {
    return inject(MENU_STORE_SYMBOL);
}

export default useMenu;
