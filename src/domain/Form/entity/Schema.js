/*
 * @FilePath: /Furnace/src/domain/Form/entity/Schema.js
 * @Author: maggot-code
 * @Date: 2022-12-04 21:09:49
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-10 14:50:21
 * @Description: 
 */
import { useShallowObject } from "@/hooks/ref/useShallowObject";
import { useShallowArray } from "@/hooks/ref/useShallowArray";

export function SchemaEntity() {
    const formConfig = useShallowObject();
    const cellConfig = useShallowArray();
    const formSchema = computed(() => {
        return unref(formConfig.source)
    });
    const cellSchema = computed(() => {
        return unref(cellConfig.source)
    });

    return {
        formConfig,
        cellConfig,
        formSchema,
        cellSchema,
    }
}

export default SchemaEntity;
