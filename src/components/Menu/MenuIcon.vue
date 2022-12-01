<!--
 * @FilePath: \Furnace\src\components\Menu\MenuIcon.vue
 * @Author: maggot-code
 * @Date: 2022-12-01 02:08:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 14:53:35
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
        class="furnace-menu-icon"
        :class="className"
    ></i>
</template>

<style scoped lang='scss'>

</style>
