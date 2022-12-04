<!--
 * @FilePath: /Furnace/src/layout/BizHeader.vue
 * @Author: maggot-code
 * @Date: 2022-11-23 23:43:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 17:20:12
 * @Description: 
-->
<script setup>
import { useMenu } from "~/menu/usecase/useMenu";

const { menuStore } = useMenu();
const iconName = computed(() => {
    return menuStore.collapse ? "el-icon-d-arrow-right" : "el-icon-d-arrow-left";
});
</script>

<template>
    <div class="furnace-header">
        <el-button
            :icon="iconName"
            type="default"
            size="mini"
            circle
            plain
            @click="menuStore.switchCollapse"
        ></el-button>
    </div>
</template>

<style scoped lang='scss'>
.furnace-header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
