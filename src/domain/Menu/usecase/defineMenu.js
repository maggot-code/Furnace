/*
 * @FilePath: /Furnace/src/domain/Menu/usecase/defineMenu.js
 * @Author: maggot-code
 * @Date: 2022-12-01 22:33:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 22:48:17
 * @Description: 
 */
import { useMenuStore } from "@/store/useMenuStore";
import { MENU_STORE_SYMBOL } from "../shared/context";

export function defineMenu() {
    const menuStore = useMenuStore();

    const bind = {
        menuStore
    }
    provide(MENU_STORE_SYMBOL, bind);
    return bind;
}

export default defineMenu;
