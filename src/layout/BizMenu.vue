<!--
 * @FilePath: \Furnace\src\layout\BizMenu.vue
 * @Author: maggot-code
 * @Date: 2022-12-01 01:40:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 09:41:51
 * @Description: 
-->
<script setup>
import { useRoute, useRouter } from "@/hooks/useVueRouter";

const props = defineProps({
    keyword: {
        type: String,
        default: "FurnaceMenu"
    }
});
const { menuStore } = inject(props.keyword);
const { menuGroup } = storeToRefs(menuStore);
const route = useRoute();
const router = useRouter();

console.table(router.getRoutes().map(item => pick(item.meta, ["address", "title", "mode", "template"])));

watchEffect(() => {
    console.log(unref(menuGroup));
});
</script>

<template>
    <el-menu
        class="furnace-menu"
        mode="vertical"
        :default-active="route.fullPath"
        :collapse="menuStore.collapse"
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
