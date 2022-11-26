<!--
 * @FilePath: /Furnace/src/template/SimpleCurd/view/simple-curd.vue
 * @Author: maggot-code
 * @Date: 2022-11-25 16:22:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 03:43:16
 * @Description: 
-->
<script setup>
import {
    ElementEntity as SearchElementEntity,
    SchemaEntity as SearchSchemaEntity,
} from "@/domain/Form";
import {
    ElementEntity as TableElementEntity,
    SchemaEntity as TableSchemaEntity,
    useControl
} from "@/domain/Table";

import { toArray, toPlainObject } from "@/shared/trans";
import { useSlotServer } from "@/hooks/useSlotServer";
import { useRoute } from "@/hooks/useRouter";
import { useServerLoad } from "@/hooks/useServerLoad";
import { useWatchServer } from "@/hooks/useWatchServer";
import { useComplexState } from "@/hooks/useRefState";

import { ConfigCurdServer, obtainCurdConfig } from "@/server/Template/config";
import { SearchCurdServer, TableCurdServer, obtainLayoutCurd } from "../server/layout";

import { defineSearch } from "../domain/defineSearch";
import { defineList } from "../domain/defineList";

const searchElement = SearchElementEntity();
const searchSchema = SearchSchemaEntity();
const tableElement = TableElementEntity();
const tableSchema = TableSchemaEntity();
const tableControl = useControl(tableSchema);

const serverGroup = [
    ConfigCurdServer,
    SearchCurdServer,
    TableCurdServer
];
const slots = useSlots();
const slotServer = useSlotServer();
const route = useRoute();
const loading = useServerLoad(serverGroup);

const bindProps = {
    searchElement,
    searchSchema,
    tableElement,
    tableSchema,
};
const searchEntity = defineSearch(bindProps);
const listEntity = defineList(bindProps);

const a = useComplexState(tableControl.allController, { key: 11, trans: Object.keys });
watchEffect(() => {
    console.log(unref(tableControl.allController));
    console.log(a);
})

const hasSearch = slotServer.slotState(slots.search, SearchCurdServer.finished);
const hasList = slotServer.slotState(slots.list, TableCurdServer.finished);
const hasControl = slotServer.slotState(slots.control, TableCurdServer.finished);

searchSchema.formConfig.setup({
    labelWidth: "auto",
    inline: true,
});

useWatchServer(SearchCurdServer, {
    trans: (response) => toArray(response.data),
    setup: searchSchema.cellConfig.setup
});
useWatchServer(TableCurdServer, {
    trans: (response) => toPlainObject(response.data),
    setup: tableSchema.database.setup
});
onBeforeMount(async () => {
    const { query } = route;

    const { data } = await obtainCurdConfig(query);

    obtainLayoutCurd(data);
});
onMounted(() => { });
</script>

<template>
    <el-container
        class="simple-curd"
        v-loading="loading"
    >
        <el-header
            class="simple-curd-search"
            v-if="hasSearch"
        >
            <slot name="search"></slot>
        </el-header>

        <el-container class="simple-curd-body">
            <el-header
                class="simple-curd-body-control"
                v-if="hasControl"
            >
                <slot name="control"></slot>
            </el-header>

            <el-main
                class="simple-curd-body-list"
                v-if="hasList"
            >
                <slot name="list"></slot>
            </el-main>
            <template v-else>
                <EmptyView />
            </template>
        </el-container>
    </el-container>
</template>

<style scoped lang='scss'>
@import "../style/index.scss";
</style>
