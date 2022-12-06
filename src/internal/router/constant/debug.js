/*
 * @FilePath: /aa/src/internal/router/constant/debug.js
 * @Author: maggot-code
 * @Date: 2022-12-03 17:19:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-03 17:26:08
 * @Description: 
 */
export const Name = "debug";

export const Address = "/debug";

export const Component = `pages/Debug/${Name}.vue`;

export const Title = "Debug";

export default {
    omit: true,
    dev: true,
    name: Name,
    address: Address,
    title: Title,
    component: Component,
}
