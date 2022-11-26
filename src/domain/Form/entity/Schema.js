/*
 * @FilePath: /Furnace/src/domain/Form/entity/Schema.js
 * @Author: maggot-code
 * @Date: 2022-11-26 16:47:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 01:56:39
 * @Description: 
 */
import { defineShallowObject } from "@/hooks/useShallowObject";
import { defineShallowArray } from "@/hooks/useShallowArray";

export function SchemaEntity() {
    const formConfig = defineShallowObject();
    const cellConfig = defineShallowArray();

    return {
        formConfig,
        cellConfig,
        formSchema: formConfig.source,
        cellSchema: cellConfig.source
    }
}

export default SchemaEntity;
