<!--
 * @FilePath: \Furnace\src\layout\BizHeader.vue
 * @Author: maggot-code
 * @Date: 2022-11-23 23:43:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 13:23:26
 * @Description: 
-->
<script setup>
import { useMenu } from "~/menu/usecase/useMenu";

const { menuStore } = useMenu();
const iconName = computed(() => {
    return menuStore.collapse ? "el-icon-s-unfold" : "el-icon-s-fold";
});
</script>

<template>
    <div class="furnace-header">
        <div
            class="furnace-header-shrink"
            @click="menuStore.switchCollapse"
        >
            <i :class="iconName"></i>
        </div>
        <p>面包屑</p>
        <p>操作</p>
        <p>用户</p>
    </div>
</template>

<style scoped lang='scss'>
.furnace-header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    &-shrink {
        transition: all 0.3s;
        cursor: pointer;

        &:hover {
            color: #409EFF;
            transform: scale(1.2);
        }
    }
}
</style>
