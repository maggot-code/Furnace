<!--
 * @FilePath: \Furnace\src\pages\Business\business.vue
 * @Author: maggot-code
 * @Date: 2022-12-04 17:04:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-08 10:48:51
 * @Description: 
-->
<script setup>
import { defineMenu } from "~/menu/usecase/defineMenu";
import { useScroll } from "@/hooks/useScroll";

const { refs } = useScroll();
defineMenu();
</script>

<template>
    <BizContainer>
        <template #title>
            <BizTitle></BizTitle>
        </template>

        <template #aside>
            <!-- <furnace-scroll
                ref="refs"
            >
                <BizMenu></BizMenu>
            </furnace-scroll> -->
            <FurnaceScrollBar
                ref="refs"
                classes="biz-scroll"
                :speed="120"
            >
                <BizMenu></BizMenu>
            </FurnaceScrollBar>
        </template>

        <template #header>
            <BizHeader></BizHeader>
        </template>

        <!-- <template #nav>
            <BizNav></BizNav>
        </template> -->

        <template #body>
            <BizMain></BizMain>
        </template>
    </BizContainer>
</template>

<style scoped lang='scss'>
.biz-scroll {
    width: 100%;
    max-height: 100%;
    min-height: 100%;
}
</style>
