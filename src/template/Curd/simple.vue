<!--
 * @FilePath: \Furnace\src\template\Curd\simple.vue
 * @Author: maggot-code
 * @Date: 2022-12-04 16:02:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-08 10:57:45
 * @Description: 
-->
<script setup>
import { ConfigCurdServer, ConfigCurdObtain } from "@/server/config/curd";
import { CurdSearchServer } from "@/server/curd/search";
import { CurdTableServer } from "@/server/curd/table";
import { CurdDataServer } from "@/server/curd/data";
import { CurdLayoutObtain, CurdDataObtain } from "@/server/curd/layout";
import { useTemplateProps } from "@/hooks/template/useTemplateProps";
import { useWarningTips } from "@/hooks/useMessage";
import { useLoad } from "@/hooks/service/useLoad";
import { useWatch } from "@/hooks/service/useWatch";
import { usePopup } from "@/domain/Popup/usecase/usePopup";
import { useDialog } from "@/domain/Popup/usecase/useDialog";
import { useFormEvent } from "@/domain/Form/usecase/useFormEvent";
import { useFormWorker } from "@/domain/Form/usecase/useFormWorker";
import { defineForm } from "@/domain/Form/usecase/defineForm";
import { defineTable } from "@/domain/Table/usecase/defineTable";
import { defineCurd } from "@/domain/Curd/usecase/defineCurd";
import { mergeObject } from "~/shared/merge";

const serviceGroup = [
    ConfigCurdServer,
    CurdSearchServer,
    CurdTableServer,
    CurdDataServer
];
const { finished } = CurdTableServer.server;
const props = defineProps({
    popupKeyword: String
});
const popup = usePopup();
const dialog = useDialog(props.popupKeyword);
const meta = useTemplateProps(dialog.config);
const loading = useLoad(serviceGroup);
const curd = defineCurd();
const table = defineTable();
const form = defineForm();
const formWorker = useFormWorker(form);
const formEvent = useFormEvent(form);
const modifyDialog = popup.define({
    width: "80%",
    height: "70vh",
    afterClose: table.refreshRef.update,
    template: defineAsyncComponent(() => import("@/template/Curd/modify.vue")),
});
const deleteDialog = popup.define({
    title: "请确认是否删除",
    width: "320px",
    height: "64px",
    afterClose: table.refreshRef.update,
    template: defineAsyncComponent(() => import("@/template/Curd/delete.vue"))
});
const exportDialog = popup.define({
    title: "请确认是否导出",
    width: "320px",
    height: "64px",
    template: defineAsyncComponent(() => import("@/template/Curd/export.vue"))
});
const dialogMatch = {
    add: modifyDialog,
    edit: modifyDialog,
    delete: deleteDialog,
    export: exportDialog,
}

// hack tablehandle trigger
const unwatch = watch(curd.ready, (state) => {
    if (!state) return;
    table.refreshRef.update();
    unwatch();
}, { immediate: true });
const { tableRefs, refresh, total, tableData, tableChoice, hasAllControl, allControl, rowControl, uiSchema, mergeSchema, columnSchema } = table;
const { formRefs, formSchema, cellSchema } = form;
function tableEvent(event) {
    const { mode } = event;
    if (isNil(dialogMatch[mode])) return;

    dialogMatch[mode].show(mergeObject(event, { table }));
}
function tableHandle(factor) {
    curd.tableFactor(factor);
    formEvent.formSave();
}
formEvent.onSubmit(({ data, state }) => {
    if (!state) return useWarningTips("抱歉,需要搜索条件");

    curd.formFactor(data);
    CurdDataObtain(curd.toFactor());
});
formEvent.onReset(({ data }) => {
    curd.formFactor(data);
    CurdDataObtain(curd.toFactor());
});
useWatch(ConfigCurdServer, ConfigCurdServer.server.result.setup);
useWatch(CurdSearchServer, form.setup);
useWatch(CurdTableServer, table.setupSchema);
useWatch(CurdDataServer, table.setupSource);

onMounted(async () => {
    await ConfigCurdObtain(meta);
    await CurdLayoutObtain();
    curd.setupTableReady();
    curd.setupFormReady();
});
onUnmounted(() => {
    unwatch();
    modifyDialog.destroy();
    exportDialog.destroy();
    deleteDialog.destroy();
    serviceGroup.forEach((service) => service.abort());
});
</script>

<template>
    <div
        class="template-curd-simple"
        v-loading="loading"
    >
        <div class="template-curd-simple-head">
            <div class="template-curd-simple-head-search">
                <mg-form
                    ref="formRefs"
                    :schema="{ formSchema, cellSchema }"
                    :remote="{ enums: formWorker.enums, search: formWorker.search }"
                    :upload="{ call: formWorker.call, down: formWorker.down }"
                    @form-error="formEvent.formError"
                ></mg-form>
            </div>
            <div class="template-curd-simple-head-handler">
                <el-button
                    size="mini"
                    @click="formEvent.formSubmit"
                >查询</el-button>
                <el-button
                    size="mini"
                    @click="formEvent.formReset"
                >重置</el-button>
            </div>
        </div>
        <div
            class="template-curd-simple-body"
            v-if="finished"
        >
            <div
                class="template-curd-simple-body-control"
                v-if="hasAllControl"
            >
                <template v-for="(cell, key) in allControl">
                    <el-button
                        :key="key"
                        size="mini"
                        v-bind="cell"
                        @click="tableEvent(cell)"
                    >{{ cell.label }}</el-button>
                </template>
            </div>
            <div class="template-curd-simple-body-table">
                <!-- :openHeight="openHeight"
                :resetCurrentPage="resetCurrentPage"
                :resizeTable="resizeTable"
                :refresh="refresh"
                @onChoice="table.choice.source.setup"
                @cellEvent="cellEvent"
                @handleRow="handleRow" -->
                <mg-table
                    ref="tableRefs"
                    :defaultPageSize="20"
                    :isLabel="false"
                    :refresh="refresh"
                    :controller="rowControl"
                    :total="total"
                    :tableData="tableData"
                    :tableChoice="tableChoice"
                    :tableSchema="{ uiSchema, mergeSchema, columnSchema }"
                    @onChoice="table.setupChoice"
                    @tableHandle="tableHandle"
                    @cellEvent="tableEvent"
                    @handleRow="tableEvent"
                ></mg-table>
            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.template-curd-simple {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &-head,
    &-body {
        width: 100%;
        overflow: hidden;
    }

    &-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 48px;

        &-search,
        &-handler {
            height: 100%;
        }

        &-search {
            flex: 1;
            padding-right: 24px;
            box-sizing: border-box;
        }

        &-handler {
            width: auto;
            display: flex;
            justify-content: flex-end;
            align-items: flex-start;
        }
    }

    &-body {
        display: flex;
        flex-direction: column;
        height: calc(100% - 64px);

        &-control,
        &-table {
            width: 100%;
        }

        &-control {
            height: 48px;
        }

        &-table {
            flex: 1;
            height: 100%;
        }
    }
}
</style>
