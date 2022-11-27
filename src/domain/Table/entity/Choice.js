/*
 * @FilePath: /Furnace/src/domain/Table/entity/Choice.js
 * @Author: maggot-code
 * @Date: 2022-11-28 00:38:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-28 00:42:58
 * @Description: 
 */
import { defineShallowArray } from "@/hooks/useShallowArray";
export function ChoiceEntity(schema) {
    const source = defineShallowArray([]);
    const choiceKeys = computed(() => unref(source.source).map((item) => item[unref(schema.keyname)]));

    return {
        source,
        choiceKeys,
        tableChoice: source.source
    }
}

export default ChoiceEntity;
