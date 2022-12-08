<!--
 * @FilePath: \Furnace\src\components\Menu\MenuLabel.vue
 * @Author: maggot-code
 * @Date: 2022-12-01 02:07:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-08 10:19:55
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
    <span
        class="furnace-menu-label"
        :menuid="node.uid"
    >{{ node.title }}</span>
</template>

<style scoped lang='scss'>

</style>
