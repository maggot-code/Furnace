<!--
 * @FilePath: /Furnace/src/template/CURD/modify.vue
 * @Author: maggot-code
 * @Date: 2022-12-05 23:59:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 00:56:56
 * @Description: 
-->
<script setup>
import { CurdAsyncServer } from "@/server/curd/async";
import { CurdFormObtain, CurdSaveObtain } from "@/server/curd/layout";
import { useWatch } from "@/hooks/service/useWatch";
import { useDialog } from "@/domain/popup/usecase/useDialog";
import { useFormEvent } from "@/domain/form/usecase/useFormEvent";
import { defineForm } from "@/domain/form/usecase/defineForm";

const props = defineProps({
    popupKeyword: String
});
const dialog = useDialog(props.popupKeyword);
const mode = computed(() => get(unref(dialog.config), "mode"));
const params = computed(() => get(unref(dialog.config), "row", {}));
const form = defineForm();
const formEvent = useFormEvent(form);
const { formRefs, formSchema, cellSchema } = form;
const { loading, finished } = CurdAsyncServer.server;
function enums() { }
function search() { }

formEvent.onSubmit(async ({ data, state }) => {
    if (!state) {
        // TODO message
        return;
    }

    await CurdSaveObtain(unref(params), data);
    dialog.destroy();
});
useWatch(CurdAsyncServer, form.setup);
onBeforeMount(() => {
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
                v-if="finished"
                ref="formRefs"
                :schema="{ formSchema, cellSchema }"
                :remote="{ enums, search }"
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
