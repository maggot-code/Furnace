<!--
 * @FilePath: /Furnace/src/pages/Business/business.vue
 * @Author: maggot-code
 * @Date: 2022-11-23 23:19:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 22:47:18
 * @Description: 
-->
<script setup>
import { defineMenu } from "@/domain/Menu";

defineMenu();
</script>

<template>
    <BizContainer>
        <template #aside>
            <BizMenu></BizMenu>
        </template>

        <template #header>
            <BizHeader></BizHeader>
        </template>

        <template #body>
            <transition name="el-fade-in-linear">
                <router-view></router-view>
            </transition>
        </template>
    </BizContainer>
</template>

<style scoped lang='scss'>

</style>
