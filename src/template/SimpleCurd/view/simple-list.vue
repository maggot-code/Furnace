<!--
 * @FilePath: /Furnace/src/template/SimpleCurd/view/simple-list.vue
 * @Author: maggot-code
 * @Date: 2022-11-26 15:51:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-28 00:10:52
 * @Description: 
-->
<script setup>
import { TableModelSymbol, CurdModelSymbol } from "../shared/context";

const curd = inject(CurdModelSymbol);
const table = inject(TableModelSymbol);
const { tableRefs, resetCurrentPage, resizeTable, refresh } = table;
const { uiSchema, mergeSchema, columnSchema } = table.schema;
const { total, tableData } = table.data;
const { row } = table.control;

function onChoice(choice) {
    console.log("on choice", choice);
}
function cellEvent(event) {
    console.log("cell event", event);
}
function handleRow(row) {
    console.log("handle row", row);
}
function tableHandle(props) {
    console.log("table handle", props);
    curd.factor.setupTable(props);
}
function tableParams(props) {
    console.log("table params", props);
    curd.factor.setupTable(props);
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
            :resetCurrentPage="resetCurrentPage"
            :resizeTable="resizeTable"
            :refresh="refresh"
            :total="total"
            :tableData="tableData"
            :tableSchema="{ uiSchema, mergeSchema, columnSchema }"
            :controller="row"
            :defaultPageSize="20"
            @onChoice="onChoice"
            @cellEvent="cellEvent"
            @handleRow="handleRow"
            @tableHandle="tableHandle"
            @tableParams="tableParams"
        ></mg-table>
    </div>
</template>

<style scoped lang='scss'>
@import "../style/list.scss";
</style>
