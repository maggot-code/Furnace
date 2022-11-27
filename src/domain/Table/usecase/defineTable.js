/*
 * @FilePath: /Furnace/src/domain/Table/usecase/defineTable.js
 * @Author: maggot-code
 * @Date: 2022-11-27 14:49:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 16:05:48
 * @Description: 
 */
import { isUsable } from "@/shared/is";

import { useElementRefs } from "@/hooks/useElement";
import { useComplexState } from "@/hooks/useRefState";
import { useControl } from "./useControl";
import { SchemaEntity } from "../entity/Schema";
import { DataEntity } from "../entity/Data";

const controlStateProps = { trans: Object.keys };
function wrapController(schema) {
    const { controllerKeys, allController, rowController } = useControl(schema);
    function wrapAllState() {
        return useComplexState(allController, controlStateProps);
    }
    function wrapRowState() {
        return useComplexState(rowController, controlStateProps);
    }
    const state = {
        all: wrapAllState,
        row: wrapRowState
    }

    return {
        state,
        keys: controllerKeys,
        all: allController,
        row: rowController,
    }
}

export function defineTable(namespace) {
    const element = useElementRefs();
    const schema = SchemaEntity();
    const data = DataEntity();
    const control = wrapController(schema);

    const wrap = {
        element,
        schema,
        data,
        control,
        tableRefs: element.refs
    };
    if (isUsable(namespace)) provide(namespace, wrap);
    return wrap;
}

export default defineTable;
