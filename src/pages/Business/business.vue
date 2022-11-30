<!--
 * @FilePath: \Furnace\src\pages\Business\business.vue
 * @Author: maggot-code
 * @Date: 2022-11-23 23:19:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 01:40:57
 * @Description: 
-->
<script setup></script>

<template>
    <biz-container>
        <template #aside>
            <biz-menu></biz-menu>
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
