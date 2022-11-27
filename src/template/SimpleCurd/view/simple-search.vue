<!--
 * @FilePath: /Furnace/src/template/SimpleCurd/view/simple-search.vue
 * @Author: maggot-code
 * @Date: 2022-11-26 15:50:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 17:05:37
 * @Description: 
-->
<script setup>
import { FormModelSymbol } from "../shared/context";

const form = inject(FormModelSymbol);
const { formRefs, formSchema, cellSchema } = form;

form.schema.formConfig.setup({
    inline: true,
    labelWidth: "auto"
});

function monitorValue(props) {
    console.log("monitor value", props);
}
async function onSelect() {
    const [source, state] = await form.event.getDataSource();
    console.log(source, state);
}
async function onReset() {
    const [source, state] = await form.event.resetDataSource();
    console.log(source, state);
}
</script>

<template>
    <div class="simple-search">
        <div class="simple-search-form">
            <mg-form
                ref="formRefs"
                :schema="{ formSchema, cellSchema }"
                @monitor-value="monitorValue"
            ></mg-form>
        </div>
        <div class="simple-search-control">
            <el-button
                class="simple-search-control-item"
                size="mini"
                @click="onSelect"
            >查询</el-button>
            <el-button
                class="simple-search-control-item"
                size="mini"
                @click="onReset"
            >重置</el-button>
        </div>
    </div>
</template>

<style scoped lang='scss'>
@import "../style/search.scss";
</style>
