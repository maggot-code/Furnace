/*
 * @FilePath: /Furnace/src/domain/Table/usecase/defineTable.js
 * @Author: maggot-code
 * @Date: 2022-11-27 14:49:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-28 01:10:45
 * @Description: 
 */
import { isUsable } from "@/shared/is";
import { toBoolean } from "@/shared/trans";

import { useElementRefs } from "@/hooks/useElement";
import { useDriveKeyword } from "@/hooks/useDriveKeyword";
import { useComplexState } from "@/hooks/useRefState";
import { useControl } from "./useControl";
import { SchemaEntity } from "../entity/Schema";
import { DataEntity } from "../entity/Data";
import { ChoiceEntity } from "../entity/Choice";
import { EventEntity } from "../entity/Event";

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
    // resetCurrentPage
    const currentKeyword = useDriveKeyword();
    // resizeTable
    const tableSizeKeyword = useDriveKeyword();
    // refresh
    const refreshKeyword = useDriveKeyword();
    const schema = SchemaEntity();
    const data = DataEntity();
    const choice = ChoiceEntity(schema);
    const event = EventEntity(element);
    const control = wrapController(schema);
    const isLabel = computed(() => toBoolean(unref(schema.uiSchema).isLabel, true));
    const openHeight = computed(() => toBoolean(unref(schema.uiSchema).openHeight, true));
    function setupSource(source) {
        data.source.setup({
            total: source.total ?? 0,
            data: source.data ?? []
        });
        choice.source.setup(source.choice ?? []);

        return source;
    }

    const wrap = {
        element,
        currentKeyword,
        tableSizeKeyword,
        refreshKeyword,
        schema,
        data,
        choice,
        event,
        control,
        isLabel,
        openHeight,
        defaultPageSize: 20,
        tableRefs: element.refs,
        resetCurrentPage: currentKeyword.keyword,
        resizeTable: tableSizeKeyword.keyword,
        refresh: refreshKeyword.keyword,
        setupSource
    };
    if (isUsable(namespace)) provide(namespace, wrap);
    return wrap;
}

export default defineTable;
