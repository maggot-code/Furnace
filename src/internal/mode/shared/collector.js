/*
 * @FilePath: \Furnace\src\internal\mode\shared\collector.js
 * @Author: maggot-code
 * @Date: 2022-12-05 10:01:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 12:32:50
 * @Description: 
 */
import { transObject } from "~/shared/trans";

let ModeEntity;

export function wrapModeEntity() {
    // ModeEntity = ModeEntity ?? import.meta.globEager("../entity/**/*.{js,ts}", { eager: true });
    ModeEntity = import.meta.globEager("../entity/**/*.{js,ts}", { eager: true });
    return {
        group: ModeEntity,
        paths: Object.keys(transObject(ModeEntity))
    }
}

export default wrapModeEntity();
