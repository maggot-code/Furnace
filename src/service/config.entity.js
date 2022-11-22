/*
 * @FilePath: \Furnace\src\service\config.entity.js
 * @Author: maggot-code
 * @Date: 2022-11-23 01:14:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 01:15:51
 * @Description: 
 */
import { defineShallowObject } from "@/hooks/useShallowObject";
import { mergePlainObject } from "@/shared/trans";

export const NormConfig = {
    url: "",
    method: "GET",
    responseType: "json",
    params: {},
    data: {},
    headers: {},
};

// 合并外部配置到标准配置中
export const mergeConfig = (props) => mergePlainObject(NormConfig, props);
// 定义配置信息
export const defineConfig = flow([mergeConfig, defineShallowObject]);

export default NormConfig;
