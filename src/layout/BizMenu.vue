<!--
 * @FilePath: \Furnace\src\layout\BizMenu.vue
 * @Author: maggot-code
 * @Date: 2022-12-01 01:40:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 02:01:58
 * @Description: 
-->
<script setup>
import { storeToRefs } from "pinia";
import { useRoute } from "@/hooks/useVueRouter";
import { useMenuStore } from "@/store/useMenuStore";

const route = useRoute();
const menuStore = useMenuStore();
const { menuGroup } = storeToRefs(menuStore);

watchEffect(() => {
    console.log(unref(menuGroup));
});
</script>

<template>
    <!-- @open="handleOpen"
    @close="handleClose" -->
    <el-menu
        class="furnace-menu"
        :default-active="route.fullPath"
        :collapse="false"
    >
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item
            index="3"
            :disabled="false"
        >
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
        </el-menu-item>
    </el-menu>
</template>

<style scoped lang='scss'>

</style>
