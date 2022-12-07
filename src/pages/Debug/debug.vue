<!--
 * @FilePath: \Furnace\src\pages\Debug\debug.vue
 * @Author: maggot-code
 * @Date: 2022-11-21 15:26:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 17:57:30
 * @Description: 
-->
<script setup>
import { usePopup } from "@/domain/Popup/usecase/usePopup";

const popup = usePopup();

const curd = popup.define({
    title: "增删改查",
    options: { id: 8849 },
    template: defineAsyncComponent(() => import("@/template/Curd/simple.vue"))
});

function createPopup() {
    curd.show();
}
</script>

<template>
    <div class="furnace-debug">
        <el-button-group>
            <el-button @click="createPopup">弹框</el-button>
        </el-button-group>
    </div>
</template>

<style scoped lang='scss'>
.furnace-debug {
    display: grid;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
