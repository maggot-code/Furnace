<!--
 * @FilePath: \Furnace\src\template\Curd\simple.vue
 * @Author: maggot-code
 * @Date: 2022-12-04 16:02:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 12:26:45
 * @Description: 
-->
<script setup>
import { ConfigCurdServer, ConfigCurdObtain } from "@/server/config/curd";
import { CurdSearchServer } from "@/server/curd/search";
import { CurdTableServer } from "@/server/curd/table";
import { CurdDataServer } from "@/server/curd/data";
import { CurdLayoutObtain, CurdDataObtain } from "@/server/curd/layout";
import { useTemplateProps } from "@/hooks/template/useTemplateProps";
import { useLoad } from "@/hooks/service/useLoad";
import { useWatch } from "@/hooks/service/useWatch";
import { useFormEvent } from "@/domain/form/usecase/useFormEvent";
import { defineForm } from "@/domain/form/usecase/defineForm";
import { defineTable } from "@/domain/table/usecase/defineTable";
import { defineCurd } from "@/domain/Curd/usecase/defineCurd";

const serverGroup = [
    ConfigCurdServer,
    CurdSearchServer,
    CurdTableServer,
    CurdDataServer
];
const { finished: searchFinished } = CurdSearchServer.server;
const { finished: tableFinished } = CurdTableServer.server;
const meta = useTemplateProps();
const loading = useLoad(serverGroup);
const table = defineTable();
const form = defineForm();
const curd = defineCurd();
const formEvent = useFormEvent(form);
const { tableRefs, refresh, total, tableData, tableChoice, hasAllControl, allControl, rowControl, uiSchema, mergeSchema, columnSchema } = table;
const { formRefs, formSchema, cellSchema } = form;
function enums() { }
function search() { }
function tableHandle(factor) {
    console.log(factor);
}

formEvent.onSubmit(({ data, state }) => {
    if (!data) {
        // TODO message
        return;
    }

    curd.formFactor(data);
});
formEvent.onReset(({ data }) => {
    curd.formFactor(data);
});
watchEffect(() => {
    console.log(unref(curd.ready));
    console.log(curd.toFactor());
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
    await CurdDataObtain();
});
onBeforeUnmount(() => {
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
                    >{{ cell.label }}</el-button>
                </template>
            </div>
            <div class="template-curd-simple-body-table">
                <!-- :openHeight="openHeight"
                :resetCurrentPage="resetCurrentPage"
                :resizeTable="resizeTable"
                :refresh="refresh"
                @onChoice="table.choice.source.setup"
                @tableHandle="curd.factor.setupTable"
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
            background-color: #f0f0f0;
            box-sizing: border-box;
        }

        &-handler {
            width: auto;
            display: flex;
            justify-content: flex-end;
            align-items: flex-start;
            background-color: #f0f0f0;
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
