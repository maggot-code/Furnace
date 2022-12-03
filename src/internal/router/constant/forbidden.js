/*
 * @FilePath: /aa/src/internal/router/constant/forbidden.js
 * @Author: maggot-code
 * @Date: 2022-12-03 17:10:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-03 17:17:54
 * @Description: 
 */
export const Name = "forbidden";

export const Address = "/403";
// /:path(.*)*
export const Component = `pages/Accident/${Name}.vue`;

export const Title = "403 Forbidden";

export default {
    name: Name,
    address: Address,
    title: Title,
    component: Component,
}
