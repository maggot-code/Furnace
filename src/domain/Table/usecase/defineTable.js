/*
 * @FilePath: \Furnace\src\domain\Table\usecase\defineTable.js
 * @Author: maggot-code
 * @Date: 2022-12-04 23:21:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 12:40:03
 * @Description: 
 */
import { SchemaEntity } from "../entity/Schema";
import { DataEntity } from "../entity/Data";
import { ChoiceEntity } from "../entity/Choice";
import { useElementRefs } from "@/hooks/useElement";
import { useSignalState } from "@/hooks/ref/useRefState";
import { isUsable } from "~/shared/is";
import { mergeObject } from "~/shared/merge";
import { transBoolean } from "~/shared/trans";

function provideTable(namespace, wrap) {
    if (isUsable(namespace)) provide(namespace, wrap);
    return wrap;
}

export function defineTable(namespace) {
    const element = useElementRefs();
    const refreshRef = useSignalState();
    const schema = SchemaEntity();
    const data = DataEntity();
    const choice = ChoiceEntity();
    const refresh = computed(() => {
        return unref(refreshRef.source);
    });
    const keyname = computed(() => {
        return schema.getStruct("keyname", "id");
    });
    const controller = computed(() => {
        return schema.getStruct("controller", {});
    });
    const allControl = computed(() => {
        return Object.keys(unref(controller)).reduce((store, key) => {
            const control = get(unref(controller), key);
            if (transBoolean(get(control, "useAll"))) store[key] = control;
            return store;
        }, {});
    });
    const rowControl = computed(() => {
        return Object.keys(unref(controller)).reduce((store, key) => {
            const control = get(unref(controller), key);
            if (transBoolean(get(control, "useRow"))) store[key] = control;
            return store;
        }, {});
    });
    const hasAllControl = computed(() => {
        return Object.keys(unref(allControl)).length > 0;
    });
    const uiSchema = computed(() => {
        const ui = schema.getStruct("uiSchema", {});
        return mergeObject(ui, {
            sortOrder: schema.toSortOrder(ui),
        });
    });
    const mergeSchema = computed(() => {
        return schema.getStruct("mergeSchema", {});
    });
    const columnSchema = computed(() => {
        return schema.getStruct("columnSchema", []);
    });
    const choiceKeys = computed(() => {
        return choice.toKeys(unref(keyname));
    });

    function setupSchema(struct) {
        schema.struct.setup(struct);
    }
    function setupSource(source) {
        data.source.setup(source);
    }
    function setupChoice(source) {
        choice.source.setup(source);
    }

    onBeforeUnmount(() => {
        schema.struct.clear();
        data.source.clear();
    });
    return provideTable(namespace, {
        refreshRef,
        tableRefs: element.refs,
        total: data.total,
        tableData: data.tableData,
        tableChoice: choice.tableChoice,
        refresh,
        keyname,
        controller,
        allControl,
        rowControl,
        hasAllControl,
        uiSchema,
        mergeSchema,
        columnSchema,
        choiceKeys,
        setupSchema,
        setupSource,
        setupChoice
    });
}

export default defineTable;
