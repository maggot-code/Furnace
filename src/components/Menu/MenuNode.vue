<!--
 * @FilePath: /Furnace/src/components/Menu/MenuNode.vue
 * @Author: maggot-code
 * @Date: 2022-12-01 02:06:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 23:27:00
 * @Description: 
-->
<script setup>
import { useRouter } from "@/hooks/useVueRouter";

const router = useRouter();
const props = defineProps({
    node: {
        type: Object,
        required: true
    }
});

function handlerClick() {
    router.push({ name: props.node.name });
}
</script>

<template >
    <MenuSub
        v-if="(node.mode === 'fragment')"
        :node="node"
    ></MenuSub>

    <el-menu-item
        v-else
        class="furnace-menu-node"
        :index="node.uid"
        :disabled="node.disabled"
        @click="handlerClick"
    >
        <MenuIcon :node="node"></MenuIcon>
        <template #title>
            <MenuLabel :node="node"></MenuLabel>
        </template>
    </el-menu-item>
</template>

<style scoped lang='scss'>

</style>
