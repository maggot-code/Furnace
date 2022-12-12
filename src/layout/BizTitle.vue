<!--
 * @FilePath: \Furnace\src\layout\BizTitle.vue
 * @Author: maggot-code
 * @Date: 2022-12-06 13:04:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-12 16:25:14
 * @Description: 
-->
<script setup>
import { storeToRefs } from "pinia";
import { useInfo, useTypeface } from "@/hooks/system/useInfo";
import { useMenu } from "~/menu/usecase/useMenu";
import { useRouter } from "@/hooks/router/useRouter";
import { RouteName } from "~/router/shared/context";

const fontClass = useTypeface();
const router = useRouter();
const { info } = useInfo();
const { menuStore } = useMenu();
const { collapse } = storeToRefs(menuStore);

function toWelcome() {
    router.push({ name: RouteName.WelcomeName });
}
</script>

<template>
    <div
        class="biz-title"
        @click="toWelcome"
    >
        <el-image
            v-if="collapse"
            class="furnace-signin-content-top-main-logo"
            fit="scale-down"
            :alt="info.title"
            :src="info.logo"
        >
            <template #error>
                <i class="el-icon-picture-outline"></i>
            </template>
        </el-image>

        <h1
            v-else
            class="biz-title-words"
            :class="fontClass"
        >{{ info.title }}</h1>
    </div>
</template>

<style scoped lang='scss'>
.biz-title {
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    cursor: pointer;

    &-words {
        font-size: 32px;
        line-height: 1.5;
        color: #666;
        letter-spacing: 2px;
        text-shadow: 0 0 2px #333;
    }
}
</style>
