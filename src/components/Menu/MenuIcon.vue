<!--
 * @FilePath: /Furnace/src/components/Menu/MenuIcon.vue
 * @Author: maggot-code
 * @Date: 2022-12-01 02:08:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-16 17:28:20
 * @Description: 
-->
<script setup>
const props = defineProps({
    node: {
        type: Object,
        required: true
    }
});
const threshold = computed(() => {
    if (props.node?.parent?.module) return 1;

    return 0;
});
const className = computed(() => {
    return [props.node.icon];
});
</script>

<template>
    <i
        v-if="(node.level <= threshold)"
        class="furnace-menu-icon"
        :class="className"
    ></i>
</template>

<style scoped lang='scss'>

</style>
