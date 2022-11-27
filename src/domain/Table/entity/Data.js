/*
 * @FilePath: /Furnace/src/domain/Table/entity/Data.js
 * @Author: maggot-code
 * @Date: 2022-11-27 16:04:56
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-28 00:39:04
 * @Description: 
 */
import { toArray } from "@/shared/trans";
import { defineShallowObject } from "@/hooks/useShallowObject";

const NormDataSource = {
    total: 0,
    data: []
}

export function DataEntity() {
    const source = defineShallowObject(NormDataSource);
    const total = computed(() => unref(source.source).total);
    const tableData = computed(() => {
        return toArray(unref(source.source).data);
    });

    return {
        source,
        total,
        tableData
    }
}

export default DataEntity;
