<!--
 * @FilePath: /Furnace/src/template/SimpleCurd/view/simple-list.vue
 * @Author: maggot-code
 * @Date: 2022-11-26 15:51:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-28 01:44:57
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
watch(table.schema.struct.unusable, (state) => {
    if (state) return;
    table.data.source.setup({
        total: 0,
        data: []
    });
}, { immediate: true });
</script>

<template>
    <div class="simple-list">
        <!--
            @rowEnter="rowEnter"
            @rowLeave="rowLeave"
        -->
        <mg-table
            ref="tableRefs"
            ::defaultPageSize="defaultPageSize"
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
            @cellEvent="cellEvent"
            @handleRow="handleRow"
            @onChoice="table.choice.source.setup"
            @tableHandle="curd.factor.setupTable"
            @tableParams="curd.factor.setupTable"
        ></mg-table>
    </div>
</template>

<style scoped lang='scss'>
@import "../style/list.scss";
</style>
