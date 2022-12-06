<!--
 * @FilePath: \Furnace\src\pages\Business\business.vue
 * @Author: maggot-code
 * @Date: 2022-12-04 17:04:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 13:23:11
 * @Description: 
-->
<script setup>
import { defineMenu } from "~/menu/usecase/defineMenu";

defineMenu();
</script>

<template>
    <BizContainer>
        <template #title>
            <BizTitle></BizTitle>
        </template>

        <template #aside>
            <BizMenu></BizMenu>
        </template>

        <template #header>
            <BizHeader></BizHeader>
        </template>

        <template #nav>
            <BizNav></BizNav>
        </template>

        <template #body>
            <BizMain></BizMain>
        </template>
    </BizContainer>
</template>

<style scoped lang='scss'>

</style>
