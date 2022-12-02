/*
 * @FilePath: \Furnace\src\domain\Table\entity\Schema.js
 * @Author: maggot-code
 * @Date: 2022-11-26 23:58:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 13:13:12
 * @Description: 
 */
import { mergePlainObject, toPlainObject, toArray } from "@/shared/trans";
import { defineShallowObject } from "@/hooks/useShallowObject";

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
    const struct = defineShallowObject();
    const keyname = computed(() => {
        return unref(struct.source).keyname;
    });
    const controller = computed(() => {
        return toPlainObject(unref(struct.source).controller);
    });
    const uiSchema = computed(() => {
        return mergePlainObject(unref(struct.source).uiSchema, {
            sortOrder: toSortOrder(unref(struct.source).uiSchema)
        });
    });
    const mergeSchema = computed(() => {
        return toPlainObject(unref(struct.source).mergeSchema);
    });
    const columnSchema = computed(() => {
        return toArray(unref(struct.source).columnSchema);
    });

    return {
        struct,
        keyname,
        controller,
        uiSchema,
        mergeSchema,
        columnSchema
    }
}

export default SchemaEntity;
