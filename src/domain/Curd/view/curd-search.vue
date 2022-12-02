<!--
 * @FilePath: \Furnace\src\domain\Curd\view\curd-search.vue
 * @Author: maggot-code
 * @Date: 2022-11-26 15:50:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 14:04:02
 * @Description: 
-->
<script setup>
import { storeToRefs } from "pinia";
import { FormModelSymbol, CurdModelSymbol } from "../shared/context";

const curd = inject(CurdModelSymbol);
const form = inject(FormModelSymbol);
const { formRefs, formSchema, cellSchema } = form;
const { configUsable } = storeToRefs(curd.factor);

function enums() { }
function search() { }

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

const unwatch = watch(configUsable, (state) => {
    if (!state) return;
    onReset();
    unwatch();
});
onMounted(() => {
    if (isNil(unref(configUsable))) return;
    onReset();
    unwatch();
});
onBeforeUnmount(() => {
    unwatch();
});
</script>

<template>
    <div class="curd-search">
        <div class="curd-search-form">
            <mg-form
                ref="formRefs"
                :schema="{ formSchema, cellSchema }"
                :remote="{ enums, search }"
                @monitor-value="monitorValue"
            ></mg-form>
        </div>
        <div class="curd-search-control">
            <el-button
                class="curd-search-control-item"
                size="mini"
                icon="el-icon-search"
                @click="onSelect"
            >查询</el-button>
            <el-button
                class="curd-search-control-item"
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
