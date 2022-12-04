/*
 * @FilePath: /Furnace/src/internal/mode/usecase/defineMode.js
 * @Author: maggot-code
 * @Date: 2022-12-04 15:04:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 16:34:10
 * @Description: 
 */
import { wrapModeEntity } from "~/mode/shared/collector";
import { useMatch } from "~/mode/usecase/useMatch";

const gather = wrapModeEntity();

export function defineMode() {
    const match = useMatch(gather);

    return {
        match
    }
}

export default defineMode;
