<!--
 * @FilePath: \Furnace\src\components\Menu\MenuSub.vue
 * @Author: maggot-code
 * @Date: 2022-12-01 02:05:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 13:57:30
 * @Description: 
-->
<script setup>
const props = defineProps({
    node: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <el-submenu
        class="furance-menu-sub"
        popper-class="furance-menu-sub"
        :index="node.uid"
    >
        <div
            slot="title"
            style="display:flex;"
        >
            <MenuIcon :node="node"></MenuIcon>
            <MenuLabel :node="node"></MenuLabel>
        </div>

        <template v-for="(child) in node.children">
            <MenuNode
                :key="child.uid"
                :node="child"
            ></MenuNode>
        </template>
    </el-submenu>
</template>

<style scoped lang='scss'>

</style>
