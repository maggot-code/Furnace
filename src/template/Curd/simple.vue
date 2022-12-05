<!--
 * @FilePath: /Furnace/src/template/CURD/simple.vue
 * @Author: maggot-code
 * @Date: 2022-12-04 16:02:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 00:56:27
 * @Description: 
-->
<script setup>
import SimpleFormTemplate from "@/template/Form/simple.vue";

import { ConfigCurdServer, ConfigCurdObtain } from "@/server/config/curd";
import { CurdSearchServer } from "@/server/curd/search";
import { CurdTableServer } from "@/server/curd/table";
import { CurdDataServer } from "@/server/curd/data";
import { CurdLayoutObtain, CurdDataObtain } from "@/server/curd/layout";
import { useTemplateProps } from "@/hooks/template/useTemplateProps";
import { useLoad } from "@/hooks/service/useLoad";
import { useWatch } from "@/hooks/service/useWatch";
import { usePopup } from "@/domain/popup/usecase/usePopup";
import { useDialog } from "@/domain/popup/usecase/useDialog";
import { useFormEvent } from "@/domain/form/usecase/useFormEvent";
import { defineForm } from "@/domain/form/usecase/defineForm";
import { defineTable } from "@/domain/Table/usecase/defineTable";
import { defineCurd } from "@/domain/Curd/usecase/defineCurd";

const serverGroup = [
    ConfigCurdServer,
    CurdSearchServer,
    CurdTableServer,
    CurdDataServer
];
const { finished: searchFinished } = CurdSearchServer.server;
const { finished: tableFinished } = CurdTableServer.server;
const props = defineProps({
    popupKeyword: String
});
const popup = usePopup();
const dialog = useDialog(props.popupKeyword);
const meta = useTemplateProps(dialog.config);
const loading = useLoad(serverGroup);
const table = defineTable();
const form = defineForm();
const curd = defineCurd();
const formEvent = useFormEvent(form);
const modifyDialog = popup.define({
    title: "表单",
    width: "80%",
    height: "70vh",
    afterClose: table.refreshRef.update,
    template: defineAsyncComponent(() => import("@/template/CURD/modify.vue")),
});
const deleteDialog = popup.define({
    title: "删除",
    width: "320px",
    height: "64px",
    afterClose: table.refreshRef.update,
    template: defineAsyncComponent(() => import("@/template/Event/delete.vue")),
});
const exportDialog = popup.define({
    title: "导出",
    width: "320px",
    height: "64px",
    template: defineAsyncComponent(() => import("@/template/Event/export.vue")),
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
function enums() { }
function search() { }
function tableEvent(event) {
    const { mode } = event;
    dialogMatch[mode].show(event);
}
function tableHandle(factor) {
    curd.tableFactor(factor);
    formEvent.formSave();
}
formEvent.onSubmit(({ data, state }) => {
    if (!state) {
        // TODO message
        return;
    }

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
onBeforeMount(async () => {
    await ConfigCurdObtain(meta);
    await CurdLayoutObtain();
    curd.setupFormReady();
    curd.setupTableReady();
});
onBeforeUnmount(() => {
    unwatch();
    modifyDialog.destroy();
    exportDialog.destroy();
    deleteDialog.destroy();
    serverGroup.forEach((server) => server.abort());
});
</script>

<template>
    <div
        class="template-curd-simple"
        v-loading="loading"
    >
        <div
            class="template-curd-simple-head"
            v-if="searchFinished"
        >
            <div class="template-curd-simple-head-search">
                <mg-form
                    ref="formRefs"
                    :schema="{ formSchema, cellSchema }"
                    :remote="{ enums, search }"
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
            v-if="tableFinished"
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
