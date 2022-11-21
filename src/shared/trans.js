/*
 * @FilePath: \Furnace\src\shared\trans.js
 * @Author: maggot-code
 * @Date: 2022-11-21 15:35:56
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-21 15:37:28
 * @Description: 
 */
// 布尔类型转换
export function toBoolean(value, replace = false) {
    return isBoolean(value) ? value : replace;
}
