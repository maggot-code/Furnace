<!--
 * @FilePath: /Furnace/src/layout/BizMenu.vue
 * @Author: maggot-code
 * @Date: 2022-12-01 01:40:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 17:34:24
 * @Description: 
-->
<template>
    <el-menu
        class="furnace-menu"
        mode="vertical"
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
export default {
    name: 'BizMenu',
    mixins: [],
    components: {},
    props: {},
    setup() {
        const { menuStore } = useMenu();
        const { menuGroup } = storeToRefs(menuStore);
        function renderSub(node) {
            return eq(node.mode, "fragment");
        }
        return {
            menuStore,
            menuGroup,
            renderSub
        }
    }
};
</script>
<style lang='scss' scoped>
.furnace-menu {
    width: calc(100% + 3px);
    min-height: 100%;
}
</style>
