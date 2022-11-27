<!--
 * @FilePath: /Furnace/src/template/SimpleCurd/view/simple-list.vue
 * @Author: maggot-code
 * @Date: 2022-11-26 15:51:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 16:20:45
 * @Description: 
-->
<script setup>
import MockData from "@/assets/mock/curd.data.json";
import { TableModelSymbol } from "../shared/context";

const table = inject(TableModelSymbol);
const { tableRefs } = table;
const { uiSchema, mergeSchema, columnSchema } = table.schema;
const { total, tableData } = table.data;
const { row } = table.control;

onMounted(() => {
    table.data.source.setup(MockData.data);
});
</script>

<template>
    <div class="simple-list">
        <mg-table
            ref="tableRefs"
            :total="total"
            :tableData="tableData"
            :tableSchema="{ uiSchema, mergeSchema, columnSchema }"
            :controller="row"
        ></mg-table>
    </div>
</template>

<style scoped lang='scss'>
@import "../style/list.scss";
</style>
