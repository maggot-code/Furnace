<!--
 * @FilePath: /Furnace/src/template/SimpleCurd/view/simple-control.vue
 * @Author: maggot-code
 * @Date: 2022-11-26 15:52:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 15:51:13
 * @Description: 
-->
<script setup>
import { TableModelSymbol } from "../shared/context";

const table = inject(TableModelSymbol);
const { all } = table.control;
</script>

<template>
    <div class="simple-control">
        <template v-for="(cell, key) in all">
            <el-button
                :key="key"
                size="mini"
                v-bind="cell"
            >{{ cell.label }}</el-button>
        </template>
    </div>
</template>

<style scoped lang='scss'>
@import "../style/control.scss";
</style>
