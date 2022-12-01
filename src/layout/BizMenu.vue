<!--
 * @FilePath: \Furnace\src\layout\BizMenu.vue
 * @Author: maggot-code
 * @Date: 2022-12-01 01:40:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 15:27:59
 * @Description: 
-->
<script setup>
import { useRoute } from "@/hooks/useVueRouter";

const props = defineProps({
    keyword: {
        type: String,
        default: "FurnaceMenu"
    }
});
const { menuStore } = inject(props.keyword);
const { menuGroup } = storeToRefs(menuStore);
const route = useRoute();
// watchEffect(() => {
//     console.log(route);
//     console.log(unref(menuGroup));
// });
</script>

<template>
    <el-menu
        class="furnace-menu"
        mode="vertical"
        :default-active="route.meta.uid"
        :collapse="menuStore.collapse"
    >
        <template v-for="(node) in menuGroup">
            <MenuSub
                v-if="(node.mode === 'fragment')"
                :node="node"
                :key="node.uid"
            ></MenuSub>

            <MenuNode
                v-if="(node.mode === 'template')"
                :node="node"
                :key="node.uid"
            ></MenuNode>
        </template>
    </el-menu>
</template>

<style scoped lang='scss'>

</style>
