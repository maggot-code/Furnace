<!--
 * @FilePath: \Furnace\src\layout\BizMenu.vue
 * @Author: maggot-code
 * @Date: 2022-12-01 01:40:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-08 10:49:08
 * @Description: 
-->
<template>
    <el-menu
        ref="refs"
        mode="vertical"
        class="furnace-menu"
        :collapse-transition="false"
        :default-active="$route.meta.uid"
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

<script>
import { storeToRefs } from "pinia";
import { useMenu } from "~/menu/usecase/useMenu";
import { useElementRefs } from "@/hooks/useElement";
export default {
    name: 'BizMenu',
    mixins: [],
    components: {},
    props: {},
    setup() {
        const { refs } = useElementRefs();
        const { menuStore } = useMenu();
        const { menuGroup } = storeToRefs(menuStore);
        function renderSub(node) {
            return eq(node.mode, "fragment");
        }

        return {
            refs,
            menuStore,
            menuGroup,
            renderSub
        }
    }
};
</script>
<style scoped lang='scss'>
.furnace-menu {
    width: 100%;
    min-height: 100%;
}
</style>
