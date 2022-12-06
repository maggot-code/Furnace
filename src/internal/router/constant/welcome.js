/*
 * @FilePath: /aa/src/internal/router/constant/welcome.js
 * @Author: maggot-code
 * @Date: 2022-12-03 17:21:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-03 17:22:16
 * @Description: 
 */
export const Name = "welcome";

export const Address = "/welcome";

export const Component = `pages/Welcome/${Name}.vue`;

export const Title = "欢迎";

export default {
    name: Name,
    address: Address,
    title: Title,
    component: Component,
}
