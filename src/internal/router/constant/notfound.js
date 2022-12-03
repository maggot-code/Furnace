/*
 * @FilePath: /aa/src/internal/router/constant/notfound.js
 * @Author: maggot-code
 * @Date: 2022-12-03 17:18:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-03 17:26:51
 * @Description: 
 */
export const Name = "notfound";

export const Address = "/404";

export const Component = `pages/Accident/${Name}.vue`;

export const Title = "404 Not Found";

export default {
    omit: true,
    name: Name,
    address: Address,
    title: Title,
    component: Component,
}
