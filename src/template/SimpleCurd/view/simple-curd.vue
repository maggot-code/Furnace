<!--
 * @FilePath: \Furnace\src\template\SimpleCURD\view\simple-curd.vue
 * @Author: maggot-code
 * @Date: 2022-11-25 16:22:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-25 17:43:25
 * @Description: 
-->
<script setup></script>

<template>
    <el-container class="simple-curd">
        <el-header class="simple-curd-search">Search</el-header>
        <el-container class="simple-curd-body">
            <el-header class="simple-curd-body-control">Control</el-header>
            <el-main class="simple-curd-body-table">Table</el-main>
        </el-container>
    </el-container>
</template>

<style scoped lang='scss'>
@import "@/template/SimpleCurd/style/index.scss";
</style>
