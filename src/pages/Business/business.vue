<!--
 * @FilePath: \Furnace\src\pages\Business\business.vue
 * @Author: maggot-code
 * @Date: 2022-11-23 23:19:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 00:56:30
 * @Description: 
-->
<script setup></script>

<template>
    <biz-container>
        <template #aside>
            <h1>菜单</h1>
        </template>

        <template #header>
            <biz-header></biz-header>
        </template>

        <template #body>
            <transition name="el-fade-in-linear">
                <router-view></router-view>
            </transition>
        </template>
    </biz-container>
</template>

<style scoped lang='scss'>

</style>
