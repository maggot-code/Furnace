<!--
 * @FilePath: \Furnace\src\domain\Curd\view\curd-control.vue
 * @Author: maggot-code
 * @Date: 2022-11-26 15:52:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-28 12:04:56
 * @Description: 
-->
<script setup>
import { TableModelSymbol } from "../shared/context";

const table = inject(TableModelSymbol);
const { all } = table.control;

function handleAll(cell) {
    console.log("handle all", cell, table);
}
</script>

<template>
    <div class="curd-control">
        <template v-for="(cell, key) in all">
            <el-button
                :key="key"
                size="mini"
                v-bind="cell"
                @click="handleAll(cell)"
            >{{ cell.label }}</el-button>
        </template>
    </div>
</template>

<style scoped lang='scss'>
@import "../style/control.scss";
</style>
