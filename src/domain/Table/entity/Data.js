/*
 * @FilePath: /Furnace/src/domain/table/entity/Data.js
 * @Author: maggot-code
 * @Date: 2022-12-04 23:15:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 23:16:10
 * @Description: 
 */
import { useShallowObject } from "@/hooks/ref/useShallowObject";
import { transArray } from "~/shared/trans";

const NormDataSource = {
    total: 0,
    data: []
}

export function DataEntity() {
    const source = useShallowObject(NormDataSource);
    const total = computed(() => unref(source.source).total);
    const tableData = computed(() => {
        return transArray(unref(source.source).data);
    });

    return {
        source,
        total,
        tableData
    }
}

export default DataEntity;
