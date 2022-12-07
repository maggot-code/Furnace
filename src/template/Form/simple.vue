<!--
 * @FilePath: \Furnace\src\template\Form\simple.vue
 * @Author: maggot-code
 * @Date: 2022-12-04 16:03:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-07 11:22:07
 * @Description: 
-->
<script setup>
import { ConfigFormServer, ConfigFormObtain } from "@/server/config/form";
import { useTemplateProps } from "@/hooks/template/useTemplateProps";
import { useWatch } from "@/hooks/service/useWatch";
import { useDialog } from "@/domain/Popup/usecase/useDialog";
import { useFormEvent } from "@/domain/Form/usecase/useFormEvent";
import { useFormWorker } from "@/domain/Form/usecase/useFormWorker";
import { defineForm } from "@/domain/Form/usecase/defineForm";

const props = defineProps({
    popupKeyword: String
});
const dialog = useDialog(props.popupKeyword);
const meta = useTemplateProps(dialog.config);
const form = defineForm();
const formWorker = useFormWorker(form);
const formEvent = useFormEvent(form);
const { formRefs, formJob, formSchema, cellSchema } = form;
const { loading } = ConfigFormServer.server;

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
    ConfigFormServer.clean();
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
                ref="formRefs"
                :job="formJob"
                :schema="{ formSchema, cellSchema }"
                :remote="{ enums: formWorker.enums, search: formWorker.search }"
                :upload="{ call: formWorker.call, down: formWorker.down }"
                @form-error="formEvent.formError"
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
