/*
 * @FilePath: /aa/src/internal/router/constant/redirect.js
 * @Author: maggot-code
 * @Date: 2022-12-03 17:20:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-03 17:26:32
 * @Description: 
 */
export const Name = "redirect";

export const Address = "/redirect";

export const Component = `pages/Redirect/${Name}.vue`;

export const Title = "Redirect";

export default {
    omit: true,
    hidden: true,
    name: Name,
    address: Address,
    title: Title,
    component: Component,
}
