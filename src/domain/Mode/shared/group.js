/*
 * @FilePath: \Furnace\src\domain\Mode\shared\group.js
 * @Author: maggot-code
 * @Date: 2022-12-01 10:18:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 10:29:34
 * @Description: 
 */
import { UnknowModeName } from "./context";
import { toPlainObject } from "@/shared/trans";

let ModeGroup;

export function buildModeGroupKey() {
    return Object.keys(toPlainObject(ModeGroup));
}

export function buildModeGroup() {
    ModeGroup = ModeGroup ?? import.meta.glob("../store/**/*.js");

    return {
        modes: ModeGroup,
        keys: buildModeGroupKey()
    };
}

export function matchMode(name) {
    const { modes, keys } = buildModeGroup();

    return null;
}

export default toPlainObject(ModeGroup);
