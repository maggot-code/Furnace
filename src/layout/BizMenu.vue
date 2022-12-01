<!--
 * @FilePath: /Furnace/src/layout/BizMenu.vue
 * @Author: maggot-code
 * @Date: 2022-12-01 01:40:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 23:49:55
 * @Description: 
-->
<script setup>
import { useRoute } from "@/hooks/useVueRouter";
import { useMenu } from "@/domain/Menu";
import MenuNode from "@/components/Menu/MenuNode.vue";

const { menuStore } = useMenu();
const { menuGroup } = storeToRefs(menuStore);
const route = useRoute();
function renderSub(node) {
    return eq(node.mode, "fragment");
}
</script>

<template>
    <el-menu
        class="furnace-menu"
        mode="vertical"
        :collapse-transition="false"
        :default-active="route.meta.uid"
        :collapse="menuStore.collapse"
    >
        <template v-for="(node) in menuGroup">
            <MenuSub
                v-if="renderSub(node)"
                :node="node"
                :key="node.uid"
            ></MenuSub>

            <MenuNode
                v-else
                :node="node"
                :key="node.uid"
            ></MenuNode>
        </template>
    </el-menu>
</template>

<style scoped lang='scss'>
.furnace-menu {
    width: calc(100% + 3px);
    min-height: 100%;
}
</style>
