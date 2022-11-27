/*
 * @FilePath: /Furnace/src/domain/Table/entity/Schema.js
 * @Author: maggot-code
 * @Date: 2022-11-26 23:58:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-28 01:08:33
 * @Description: 
 */
import { toPlainObject, toArray } from "@/shared/trans";
import { defineShallowObject } from "@/hooks/useShallowObject";

export function SchemaEntity() {
    const struct = defineShallowObject();
    const keyname = computed(() => {
        return unref(struct.source).keyname;
    });
    const controller = computed(() => {
        return toPlainObject(unref(struct.source).controller);
    });
    const uiSchema = computed(() => {
        return toPlainObject(unref(struct.source).uiSchema);
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
