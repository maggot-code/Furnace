<!--
 * @FilePath: \Furnace\src\components\Menu\MenuLabel.vue
 * @Author: maggot-code
 * @Date: 2022-12-01 02:07:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 13:56:56
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
    <p class="furnace-menu-label">{{ node.title }}</p>
</template>

<style scoped lang='scss'>

</style>
