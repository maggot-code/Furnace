/*
 * @FilePath: \Furnace\src\domain\table\usecase\defineTable.js
 * @Author: maggot-code
 * @Date: 2022-12-04 23:21:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 09:52:39
 * @Description: 
 */
import { SchemaEntity } from "../entity/Schema";
import { DataEntity } from "../entity/Data";
import { ChoiceEntity } from "../entity/Choice";
import { useElementRefs } from "@/hooks/useElement";
import { isUsable } from "~/shared/is";
import { mergeObject } from "~/shared/merge";

function provideTable(namespace, wrap) {
    if (isUsable(namespace)) provide(namespace, wrap);
    return wrap;
}

export function defineTable(namespace) {
    const element = useElementRefs();
    const schema = SchemaEntity();
    const data = DataEntity();
    const choice = ChoiceEntity();
    const keyname = computed(() => {
        return schema.getStruct("keyname", "id");
    });
    const controller = computed(() => {
        return schema.getStruct("controller", {});
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

    onBeforeUnmount(() => {
        schema.struct.clear();
        data.source.clear();
    });
    return provideTable(namespace, {
        tableRefs: element.refs,
        total: data.total,
        tableData: data.tableData,
        tableChoice: choice.tableChoice,
        keyname,
        controller,
        uiSchema,
        mergeSchema,
        columnSchema,
        choiceKeys,
        setupSchema,
        setupSource
    });
}

export default defineTable;
