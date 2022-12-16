<!--
 * @FilePath: /Furnace/src/components/Menu/MenuSub.vue
 * @Author: maggot-code
 * @Date: 2022-12-01 02:05:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-16 17:30:56
 * @Description: 
-->
<script setup>
import { useMenu } from "~/menu/usecase/useMenu";

const { menuStore } = useMenu();
const props = defineProps({
    node: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="furance-menu-sub">
        <el-submenu
            popper-class="furance-menu-sub"
            :popper-append-to-body="true"
            :index="node.uid"
        >
            <template slot="title">
                <MenuIcon :node="node"></MenuIcon>
                <MenuLabel
                    v-show="menuStore.hiddenTitle(node)"
                    :node="node"
                ></MenuLabel>
            </template>

            <template v-for="(child) in node.children">
                <MenuNode
                    :key="child.uid"
                    :node="child"
                ></MenuNode>
            </template>
        </el-submenu>
    </div>
</template>

<style scoped lang='scss'>

</style>
