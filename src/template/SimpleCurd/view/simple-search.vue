<!--
 * @FilePath: /Furnace/src/template/SimpleCurd/view/simple-search.vue
 * @Author: maggot-code
 * @Date: 2022-11-26 15:50:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 15:46:47
 * @Description: 
-->
<script setup>
import { FormModelSymbol } from "../shared/context";

const form = inject(FormModelSymbol);
const { formRefs, formSchema, cellSchema } = form;
</script>

<template>
    <div class="simple-search">
        <div class="simple-search-form">
            <mg-form
                ref="formRefs"
                :schema="{ formSchema, cellSchema }"
            ></mg-form>
        </div>
        <div class="simple-search-control">
            <el-button
                class="simple-search-control-item"
                size="mini"
            >查询</el-button>
            <el-button
                class="simple-search-control-item"
                size="mini"
            >重置</el-button>
        </div>
    </div>
</template>

<style scoped lang='scss'>
@import "../style/search.scss";
</style>
