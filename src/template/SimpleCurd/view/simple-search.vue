<!--
 * @FilePath: /Furnace/src/template/SimpleCurd/view/simple-search.vue
 * @Author: maggot-code
 * @Date: 2022-11-26 15:50:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-28 01:18:30
 * @Description: 
-->
<script setup>
import { FormModelSymbol, CurdModelSymbol } from "../shared/context";

const curd = inject(CurdModelSymbol);
const form = inject(FormModelSymbol);
const { formRefs, formSchema, cellSchema } = form;

function monitorValue(props) {
    // console.log("monitor value", props);
}
async function onSelect() {
    const formData = await form.event.getDataSource();
    const [source] = formData;

    curd.factor.setupForm(source);
    return formData;
}
async function onReset() {
    const formData = await form.event.resetDataSource();
    const [source] = formData;

    curd.factor.setupForm(source);
    return formData;
}

form.schema.formConfig.setup({
    inline: true,
    labelWidth: "auto"
});

onMounted(onSelect);
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
                icon="el-icon-search"
                @click="onSelect"
            >查询</el-button>
            <el-button
                class="simple-search-control-item"
                size="mini"
                icon="el-icon-refresh"
                @click="onReset"
            >重置</el-button>
        </div>
    </div>
</template>

<style scoped lang='scss'>
@import "../style/search.scss";
</style>
