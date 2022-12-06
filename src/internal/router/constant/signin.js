/*
 * @FilePath: /aa/src/internal/router/constant/signin.js
 * @Author: maggot-code
 * @Date: 2022-12-03 17:22:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-03 17:26:39
 * @Description: 
 */
export const Name = "signin";

export const Address = "/login";

export const Component = `pages/User/${Name}.vue`;

export const Title = "登录";

export default {
    omit: true,
    name: Name,
    address: Address,
    title: Title,
    component: Component,
}
