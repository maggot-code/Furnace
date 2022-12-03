<!--
 * @FilePath: /Furnace/src/pages/Debug/debug.vue
 * @Author: maggot-code
 * @Date: 2022-11-21 15:26:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 00:41:40
 * @Description: 
-->
<script setup>
function createPopup() { }
</script>

<template>
    <div class="furnace-debug">
        <el-button @click="createPopup">弹框</el-button>
    </div>
</template>

<style scoped lang='scss'>
.furnace-debug {
    display: grid;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
