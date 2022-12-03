/*
 * @FilePath: /aa/src/internal/router/shared/collector.js
 * @Author: maggot-code
 * @Date: 2022-12-03 17:29:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-03 17:34:59
 * @Description: 
 */
import { wrapObject } from "~/shared/trans";

let Cache;

export function wrapRouterConstant() {
    Cache = Cache ?? import.meta.glob("../constant/*.js", { eager: true });
    return {
        group: Cache,
        keys: Object.keys(wrapObject(Cache)),
    }
}

export default wrapRouterConstant();
