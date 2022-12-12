<!--
 * @FilePath: \Furnace\src\components\Grid\GridCell.vue
 * @Author: maggot-code
 * @Date: 2022-12-12 17:19:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-12 17:35:54
 * @Description: 
-->
<script setup>
const props = defineProps({
    col: {
        type: Number,
        default: 1
    },
    row: {
        type: Number,
        default: 1
    },
});
</script>

<template>
    <div class="grid-col">
        <slot>grid col</slot>
    </div>
</template>

<style scoped lang='scss'>

</style>
