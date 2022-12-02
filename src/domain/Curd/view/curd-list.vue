<!--
 * @FilePath: \Furnace\src\domain\Curd\view\curd-list.vue
 * @Author: maggot-code
 * @Date: 2022-11-26 15:51:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 14:05:59
 * @Description: 
-->
<script setup>
import { TableModelSymbol, CurdModelSymbol } from "../shared/context";

const curd = inject(CurdModelSymbol);
const table = inject(TableModelSymbol);

const { tableRefs, resetCurrentPage, resizeTable, refresh, isLabel, openHeight, defaultPageSize } = table;
const { uiSchema, mergeSchema, columnSchema } = table.schema;
const { total, tableData } = table.data;
const { tableChoice } = table.choice;
const { row } = table.control;

function cellEvent(event) {
    console.log("cell event", event);
}
function handleRow(row) {
    console.log("handle row", row, table);
}
const unwatch = watch(table.schema.keyname, (value) => {
    if (isNil(value)) return;
    table.tableSizeKeyword.update();
    table.refreshKeyword.update();
    unwatch();
});
watch(table.schema.struct.unusable, (state) => {
    if (state) return;
    table.data.source.setup({
        total: 0,
        data: []
    });
}, { immediate: true });
onMounted(() => {
    if (isNil(unref(table.schema.keyname))) return;
    table.tableSizeKeyword.update();
    table.refreshKeyword.update();
    unwatch();
});
onBeforeUnmount(() => {
    unwatch();
});
</script>

<template>
    <div class="curd-list">
        <!--
            @rowEnter="rowEnter"
            @rowLeave="rowLeave"
            @tableParams="curd.factor.setupTable"
        -->
        <mg-table
            ref="tableRefs"
            :defaultPageSize="defaultPageSize"
            :isLabel="isLabel"
            :openHeight="openHeight"
            :resetCurrentPage="resetCurrentPage"
            :resizeTable="resizeTable"
            :refresh="refresh"
            :total="total"
            :tableChoice="tableChoice"
            :tableData="tableData"
            :tableSchema="{ uiSchema, mergeSchema, columnSchema }"
            :controller="row"
            @onChoice="table.choice.source.setup"
            @tableHandle="curd.factor.setupTable"
            @cellEvent="cellEvent"
            @handleRow="handleRow"
        ></mg-table>
    </div>
</template>

<style scoped lang='scss'>
@import "../style/list.scss";
</style>
