/*
 * @FilePath: /Furnace/src/domain/table/entity/Choice.js
 * @Author: maggot-code
 * @Date: 2022-12-04 23:13:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 23:49:22
 * @Description: 
 */
import { useShallowArray } from "@/hooks/ref/useShallowArray";

export function ChoiceEntity() {
    const source = useShallowArray([]);
    const tableChoice = computed(() => {
        return unref(source.source);
    });
    function toKeys(keyname) {
        return compact(unref(tableChoice).map((item) => get(item, keyname, "")));
    }

    return {
        source,
        tableChoice,
        toKeys
    }
}

export default ChoiceEntity;
