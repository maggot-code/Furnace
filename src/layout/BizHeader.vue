<!--
 * @FilePath: \Furnace\src\layout\BizHeader.vue
 * @Author: maggot-code
 * @Date: 2022-11-23 23:43:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 09:17:10
 * @Description: 
-->
<script setup>
const props = defineProps({
    keyword: {
        type: String,
        default: "FurnaceMenu"
    }
});
const { menuStore } = inject(props.keyword);
</script>

<template>
    <div class="furnace-header">
        <!-- el-icon-s-fold el-icon-s-unfold -->
        <el-button
            icon="el-icon-s-fold"
            size="small"
            circle
            @click="menuStore.switchCollapse"
        ></el-button>
    </div>
</template>

<style scoped lang='scss'>
.furnace-header {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
