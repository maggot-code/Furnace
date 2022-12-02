<!--
 * @FilePath: \Furnace\src\domain\Curd\view\curd.vue
 * @Author: maggot-code
 * @Date: 2022-11-25 16:22:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 16:29:53
 * @Description: 
-->
<script setup>
// Server
import { ConfigCurdServer, obtainCurdConfig, abortConfigCurd } from "@/server/template/config";
import { SearchCurdServer, TableCurdServer, obtainLayoutCurd, abortLayoutCurd } from "../server/layout";
import { DataCurdServer, obtainDataCurd, abortDataCurd } from "../server/data";

// Model
import { defineForm } from "@/domain/Form";
import { defineTable } from "@/domain/Table";
import { defineCurd } from "../usecase/defineCurd";

// UseCase
import { useSlotServer } from "@/hooks/useSlotServer";
import { useServerLoad } from "@/hooks/useServerLoad";
import { useWatchServer } from "@/hooks/useWatchServer";

// Utils
import { toPlainObject } from "@/shared/trans";
import { isUsable, notEmpty } from "@/shared/is";

// Internal
import { FormModelSymbol, TableModelSymbol, CurdModelSymbol } from "../shared/context";

const form = defineForm(FormModelSymbol);
const table = defineTable(TableModelSymbol);
const curd = defineCurd(CurdModelSymbol);
const props = defineProps({
    params: {
        type: Object,
        default: () => ({})
    }
});

const serverGroup = [
    ConfigCurdServer,
    SearchCurdServer,
    TableCurdServer,
    DataCurdServer
];
const abortGroup = [
    abortConfigCurd,
    abortLayoutCurd,
    abortDataCurd
];
const slots = useSlots();
const slotServer = useSlotServer();
const loading = useServerLoad(serverGroup);

const hasConfig = computed(() => isUsable([
    unref(ConfigCurdServer.finished),
    unref(curd.factor.configUsable)
]));
const hasSearch = slotServer.slotState(slots.search, SearchCurdServer.finished);
const hasList = slotServer.slotState(slots.list, TableCurdServer.finished);
const hasControl = slotServer.slotState(slots.control, TableCurdServer.finished);
const { usable: usableControl } = table.control.state.all();

useWatchServer(ConfigCurdServer, {
    trans: (response) => toPlainObject(response.data),
    setup: curd.factor.setupConfig,
    next: (source) => notEmpty(source) && obtainLayoutCurd(source)
});
useWatchServer(SearchCurdServer, (response) => {
    const source = toPlainObject(response.data);
    form.schema.cellConfig.setup(source.cellSchema);
    form.schema.formConfig.setup(source.formSchema);
});
useWatchServer(TableCurdServer, {
    trans: (response) => toPlainObject(response.data),
    setup: table.schema.struct.setup
});
useWatchServer(DataCurdServer, {
    trans: (response) => toPlainObject(response.data),
    setup: table.setupSource
});
watchEffect(() => {
    if (!curd.factor.factorReady) return;

    obtainDataCurd(curd.factor.sourceConfig);
});
onMounted(() => {
    obtainCurdConfig(props.params);
});
onBeforeUnmount(() => {
    curd.factor.reset();
    form.schema.formConfig.clear();
    form.schema.cellConfig.clear();
    table.schema.struct.clear();
    table.data.source.clear();
    abortGroup.forEach((abort) => abort());
});
</script>

<template>
    <el-container
        class="curd"
        direction="vertical"
        v-loading="loading"
    >
        <el-header
            class="curd-search"
            v-if="(hasConfig && hasSearch)"
        >
            <slot name="search"></slot>
        </el-header>

        <el-container
            class="curd-body"
            direction="vertical"
        >
            <el-header
                class="curd-body-control"
                v-if="(hasControl && usableControl)"
            >
                <slot name="control"></slot>
            </el-header>

            <el-main
                class="curd-body-list"
                v-if="(hasConfig && hasList)"
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
