/*
 * @FilePath: /Furnace/src/internal/router/constant/business.js
 * @Author: maggot-code
 * @Date: 2022-12-03 17:23:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-16 17:39:30
 * @Description: 
 */
export const Name = "business";

export const Address = "/";

export const Component = `pages/Business/${Name}.vue`;

export const Title = "业务模块";

export default {
    name: Name,
    address: Address,
    title: Title,
    component: Component,
    icon: "el-icon-coin",
}
