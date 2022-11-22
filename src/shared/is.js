/*
 * @FilePath: \Furnace\src\shared\is.js
 * @Author: maggot-code
 * @Date: 2022-11-23 01:39:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 01:40:14
 * @Description: 
 */
export function isEmptyString(rawValue) {
    const value = rawValue.trim();
    return isString(value) && value.length <= 0;
}
