<!--
 * @FilePath: /Furnace/src/components/Menu/MenuIcon.vue
 * @Author: maggot-code
 * @Date: 2022-12-01 02:08:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 23:33:58
 * @Description: 
-->
<script setup>
const props = defineProps({
    node: {
        type: Object,
        required: true
    }
});
const className = computed(() => {
    return [props.node.icon];
});
</script>

<template>
    <i
        v-if="(node.level <= 0)"
        class="furnace-menu-icon"
        :class="className"
    ></i>
</template>

<style scoped lang='scss'>

</style>
