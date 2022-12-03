/*
 * @FilePath: /aa/src/internal/shared/trans.js
 * @Author: maggot-code
 * @Date: 2022-12-03 17:33:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-03 17:34:32
 * @Description: 
 */
import { isPlainObject } from "lodash";

// 对象转换
export function wrapObject(value) {
    return isPlainObject(value) ? value : {};
}
