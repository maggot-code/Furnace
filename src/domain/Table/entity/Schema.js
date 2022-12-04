/*
 * @FilePath: /Furnace/src/domain/table/entity/Schema.js
 * @Author: maggot-code
 * @Date: 2022-12-04 23:18:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 23:44:08
 * @Description: 
 */
import { useShallowObject } from "@/hooks/ref/useShallowObject";
import { isEmptyString } from "~/shared/is";

const NormOrder = {
    ascending: "ascending",
    descending: "descending",
    asc: "ascending",
    desc: "descending"
};
function toSortOrder(schema) {
    return NormOrder[schema?.sortOrder] ?? NormOrder.ascending;
}

export function SchemaEntity() {
    const struct = useShallowObject();

    function getStruct(path, replace = null) {
        if (isEmptyString(path)) return unref(struct.source);
        return get(unref(struct.source), path, replace);
    }

    return {
        struct,
        getStruct,
        toSortOrder
    }
}

export default SchemaEntity;
