<!--
 * @FilePath: /Furnace/src/template/SimpleCurd/view/simple-search.vue
 * @Author: maggot-code
 * @Date: 2022-11-26 15:50:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-26 23:52:00
 * @Description: 
-->
<script setup>
import {
    ElementEntity,
    SchemaEntity,
} from "@/domain/Form";
import { useSearch } from "../usecase/useSearch";

const searchElement = ElementEntity();
const searchSchema = SchemaEntity();

const { refs: formRefs } = searchElement;
const { formSchema, cellSchema } = searchSchema;

const search = useSearch();

searchSchema.formConfig.setup({
    labelWidth: "auto",
    inline: true,
});
searchSchema.cellConfig.setup([
    {
        "field": "name",
        "uiSchema": {
            "clearable": true,
            "placeholder": "请输入姓名"
        },
        "mold": "text",
        "componentName": "mg-input",
        "value": ""
    },
    {
        "field": "address",
        "uiSchema": {
            "clearable": true,
            "placeholder": "请输入地址"
        },
        "mold": "text",
        "componentName": "mg-input",
        "value": ""
    }
]);
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
