<!--
 * @FilePath: /Furnace/src/template/CURD/export.vue
 * @Author: maggot-code
 * @Date: 2022-12-05 22:44:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 02:11:43
 * @Description: 
-->
<script setup>
import { CurdAsyncServer } from "@/server/curd/async";
import { CurdExportObtain } from "@/server/curd/layout";
import { useDialog } from "@/domain/Popup/usecase/useDialog";

const { loading } = CurdAsyncServer.server;
const props = defineProps({
    popupKeyword: String
});
const dialog = useDialog(props.popupKeyword);

async function handlerExport() {
    await CurdExportObtain();
    dialog.destroy();
}
</script>

<template>
    <div class="template-curd-export">
        <p class="template-curd-export-tips">导出可能需要一些时间，请等待..</p>
        <div class="template-curd-export-group">
            <el-button
                size="mini"
                :loading="loading"
                @click="handlerExport"
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
.template-curd-export {
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
