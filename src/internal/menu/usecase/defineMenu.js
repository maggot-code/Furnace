/*
 * @FilePath: /Furnace/src/internal/menu/usecase/defineMenu.js
 * @Author: maggot-code
 * @Date: 2022-12-04 17:14:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 17:14:18
 * @Description: 
 */
import { useMenuStore } from "@/store/useMenuStore";
import { MENU_STORE_SYMBOL } from "~/menu/shared/context";

export function defineMenu() {
    const menuStore = useMenuStore();

    const bind = {
        menuStore
    }
    provide(MENU_STORE_SYMBOL, bind);
    return bind;
}

export default defineMenu;
