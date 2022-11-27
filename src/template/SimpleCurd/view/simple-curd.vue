<!--
 * @FilePath: /Furnace/src/template/SimpleCurd/view/simple-curd.vue
 * @Author: maggot-code
 * @Date: 2022-11-25 16:22:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 15:44:10
 * @Description: 
-->
<script setup>
// Server
import { ConfigCurdServer, obtainCurdConfig } from "@/server/Template/config";
import { SearchCurdServer, TableCurdServer, obtainLayoutCurd } from "../server/layout";

// Model
import { defineForm } from "@/domain/Form";
import { defineTable } from "@/domain/Table";

// UseCase
import { useSlotServer } from "@/hooks/useSlotServer";
import { useRoute } from "@/hooks/useRouter";
import { useServerLoad } from "@/hooks/useServerLoad";
import { useWatchServer } from "@/hooks/useWatchServer";

// Utils
import { toArray, toPlainObject } from "@/shared/trans";

// Internal
import { FormModelSymbol, TableModelSymbol } from "../shared/context";

const form = defineForm(FormModelSymbol);
const table = defineTable(TableModelSymbol);

const serverGroup = [
    ConfigCurdServer,
    SearchCurdServer,
    TableCurdServer
];
const slots = useSlots();
const slotServer = useSlotServer();
const route = useRoute();
const loading = useServerLoad(serverGroup);

const hasSearch = slotServer.slotState(slots.search, SearchCurdServer.finished);
const hasList = slotServer.slotState(slots.list, TableCurdServer.finished);
const hasControl = slotServer.slotState(slots.control, TableCurdServer.finished);
const { usable: usableControl } = table.control.state.all();

form.schema.formConfig.setup({
    inline: true,
    labelWidth: "auto"
});

useWatchServer(SearchCurdServer, {
    trans: (response) => toArray(response.data),
    setup: form.schema.cellConfig.setup
});
useWatchServer(TableCurdServer, {
    trans: (response) => toPlainObject(response.data),
    setup: table.schema.struct.setup
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
                v-if="(hasControl && usableControl)"
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
