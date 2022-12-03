/*
 * @FilePath: /Furnace/src/internal/service/entity/Config.js
 * @Author: maggot-code
 * @Date: 2022-12-04 00:50:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 00:54:13
 * @Description: 
 */
import { NormConfig } from "~/service/shread/constant";
import { mergeObject } from "~/shared/merge";
import { defineShallowObject } from "@/hooks/useShallowObject";

export function ConfigEntity(props) {
    const config = mergeObject(NormConfig, props);

    return defineShallowObject(config);
}

export default ConfigEntity;
