<!--
 * @FilePath: \Furnace\src\template\Curd\delete.vue
 * @Author: maggot-code
 * @Date: 2022-12-05 22:44:40
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 10:35:30
 * @Description: 
-->
<script setup>
import { CurdAsyncServer } from "@/server/curd/async";
import { CurdDeleteObtain } from "@/server/curd/layout";
import { useDialog } from "@/domain/popup/usecase/useDialog";
import { useWarningTips } from "@/hooks/useMessage";

const { loading } = CurdAsyncServer.server;
const props = defineProps({
    popupKeyword: String
});
const dialog = useDialog(props.popupKeyword);
const keyname = computed(() => {
    return unref(dialog.config).table.keyname.value;
});
const info = computed(() => {
    return get(unref(dialog.config), "row", {});
});
const needArray = computed(() => {
    return get(unref(dialog.config), "useAll", false);
});
const notKeys = computed(() => {
    return unref(dialog.config).table.choiceKeys.value.length <= 0;
});
const tips = computed(() => {
    return unref(needArray) ? `确定要删除这些数据吗？` : `确定要删除这条数据吗？`;
});
async function handlerDelete() {
    if (unref(notKeys)) return useWarningTips("抱歉,您还没有选择需要删除的数据");

    const { table } = unref(dialog.config);
    const params = unref(needArray)
        ? { [unref(keyname)]: table.choiceKeys.value.join(",") }
        : pick(unref(info), unref(keyname));
    await CurdDeleteObtain(params);
    dialog.destroy();
}
</script>

<template>
    <div class="template-curd-delete">
        <p class="template-curd-delete-tips">{{ tips }}</p>
        <div class="template-curd-delete-group">
            <el-button
                size="mini"
                :loading="loading"
                @click="handlerDelete"
            >确定</el-button>
            <el-button
                size="mini"
                :disabled="loading"
                @click="dialog.destroy"
            >取消</el-button>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.template-curd-delete {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &-tips {
        line-height: 24px;
        font-size: 14px;
        color: #606266;
    }

    &-group {
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
}
</style>
