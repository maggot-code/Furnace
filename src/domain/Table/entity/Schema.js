/*
 * @FilePath: /Furnace/src/domain/Table/entity/Schema.js
 * @Author: maggot-code
 * @Date: 2022-11-26 23:58:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 02:42:02
 * @Description: 
 */
import { toPlainObject } from "@/shared/trans";
import { defineShallowObject } from "@/hooks/useShallowObject";
import { defineShallowArray } from "@/hooks/useShallowArray";

export function SchemaEntity() {
    const database = defineShallowObject();
    const controller = computed(() => {
        return toPlainObject(unref(database.source).controller);
    });

    return {
        database,
        controller
    }
}

export default SchemaEntity;
