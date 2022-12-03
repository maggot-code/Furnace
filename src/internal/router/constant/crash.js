/*
 * @FilePath: /aa/src/internal/router/constant/crash.js
 * @Author: maggot-code
 * @Date: 2022-12-03 17:18:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-03 17:19:09
 * @Description: 
 */
export const Name = "crash";

export const Address = "/500";

export const Component = `pages/Accident/${Name}.vue`;

export const Title = "500 Server Error";

export default {
    name: Name,
    address: Address,
    title: Title,
    component: Component,
}
