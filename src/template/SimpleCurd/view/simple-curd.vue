<!--
 * @FilePath: /Furnace/src/template/SimpleCurd/view/simple-curd.vue
 * @Author: maggot-code
 * @Date: 2022-11-25 16:22:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-26 16:29:52
 * @Description: 
-->
<script setup>
import { useSlotServer } from "@/hooks/useSlotServer";
import { useRoute } from "@/hooks/useRouter";
import { useServerLoad } from "@/hooks/useServerLoad";
import { ConfigCurdServer, obtainCurdConfig } from "@/server/Template/config";
import { SearchCurdServer, TableCurdServer, obtainLayoutCurd } from "../server/layout";
import { defineSearch } from "../domain/defineSearch";

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
const hasControl = slotServer.slotState(slots.control, TableCurdServer.finished);
const hasTable = slotServer.slotState(slots.table, TableCurdServer.finished);
const searchEntity = defineSearch();

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
                class="simple-curd-body-table"
                v-if="hasTable"
            >
                <slot name="table"></slot>
            </el-main>
            <template v-else>
                <EmptyView />
            </template>
        </el-container>
    </el-container>
</template>

<style scoped lang='scss'>
@import "@/template/SimpleCurd/style/index.scss";
</style>
