<!--
 * @FilePath: \Furnace\src\template\Form\simple.vue
 * @Author: maggot-code
 * @Date: 2022-12-04 16:03:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 10:52:19
 * @Description: 
-->
<script setup>
import { ConfigFormServer, ConfigFormObtain } from "@/server/config/form";
import { useTemplateProps } from "@/hooks/template/useTemplateProps";
import { useWatch } from "@/hooks/service/useWatch";
import { useFormEvent } from "@/domain/form/usecase/useFormEvent";
import { defineForm } from "@/domain/form/usecase/defineForm";

const meta = useTemplateProps();
const form = defineForm();
const formEvent = useFormEvent(form);
const { formRefs, formSchema, cellSchema } = form;
const { loading, finished } = ConfigFormServer.server;
function enums() { }
function search() { }

formEvent.onSubmit((source) => {
    console.log(source);
});
formEvent.onReset((source) => {
    console.log(source);
});
useWatch(ConfigFormServer, form.setup);
onBeforeMount(() => {
    ConfigFormObtain(meta);
});
onBeforeUnmount(() => {
    ConfigFormServer.abort();
});
</script>

<template>
    <div
        class="template-form-simple"
        v-loading="loading"
    >
        <div class="template-form-simple-body">
            <!-- @monitor-value="monitorValue" -->
            <mg-form
                v-if="finished"
                ref="formRefs"
                :schema="{ formSchema, cellSchema }"
                :remote="{ enums, search }"
            ></mg-form>
        </div>
        <div class="template-form-simple-footer">
            <el-button
                size="mini"
                @click="formEvent.formSubmit"
            >提交</el-button>
            <el-button
                size="mini"
                @click="formEvent.formReset"
            >重置</el-button>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.template-form-simple {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 6px;
    overflow: hidden;
    box-sizing: border-box;

    &-body {
        width: 100%;
        height: calc(100% - 64px);
        overflow-x: hidden;
        overflow-y: auto;
    }

    &-footer {
        width: 100%;
        height: 32px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 6px;
        box-sizing: border-box;
    }
}
</style>
