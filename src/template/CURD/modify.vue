<!--
 * @FilePath: /Furnace/src/template/CURD/modify.vue
 * @Author: maggot-code
 * @Date: 2022-12-05 23:59:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 02:49:58
 * @Description: 
-->
<script setup>
import { CurdAsyncServer } from "@/server/curd/async";
import { CurdFormObtain, CurdSaveObtain } from "@/server/curd/layout";
import { useWarningTips } from "@/hooks/useMessage";
import { useWatch } from "@/hooks/service/useWatch";
import { useDialog } from "@/domain/popup/usecase/useDialog";
import { useFormEvent } from "@/domain/form/usecase/useFormEvent";
import { useFormWorker } from "@/domain/form/usecase/useFormWorker";
import { defineForm } from "@/domain/form/usecase/defineForm";

const titleMapper = {
    add: "请填写新增信息",
    edit: "请修改以下信息",
    view: "查看",
};
const props = defineProps({
    popupKeyword: String
});
const dialog = useDialog(props.popupKeyword);
const mode = computed(() => get(unref(dialog.config), "mode"));
const params = computed(() => get(unref(dialog.config), "row", {}));
const form = defineForm();
const formWorker = useFormWorker(form);
const formEvent = useFormEvent(form);
const { formRefs, formSchema, cellSchema } = form;
const { loading } = CurdAsyncServer.server;

formEvent.onSubmit(async ({ data, state }) => {
    if (!state) return useWarningTips("抱歉,请完善必填项");

    await CurdSaveObtain(unref(params), data);
    dialog.destroy();
});
useWatch(CurdAsyncServer, form.setup);
onBeforeMount(() => {
    dialog.setupTitle(get(titleMapper, unref(mode), "请填写表单"));
    CurdFormObtain(unref(mode), unref(params));
});
onBeforeUnmount(() => {
    CurdAsyncServer.abort();
});
</script>

<template>
    <div
        class="template-curd-form"
        v-loading="loading"
    >
        <div class="template-curd-form-body">
            <!-- @monitor-value="monitorValue" -->
            <mg-form
                ref="formRefs"
                :schema="{ formSchema, cellSchema }"
                :remote="{ enums: formWorker.enums, search: formWorker.search }"
                :upload="{ call: formWorker.call, down: formWorker.down }"
                @form-error="formEvent.formError"
            ></mg-form>
        </div>
        <div class="template-curd-form-footer">
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
.template-curd-form {
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
