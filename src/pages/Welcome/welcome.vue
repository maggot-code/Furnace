<!--
 * @FilePath: \Furnace\src\pages\Welcome\welcome.vue
 * @Author: maggot-code
 * @Date: 2022-11-23 21:34:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-12 16:07:07
 * @Description: 
-->
<script setup>
import { RouteName } from "~/router/shared/context";
import { useRouter } from "@/hooks/router/useRouter";
import { useScroll } from "@/hooks/useScroll";

const router = useRouter();
const { refs } = useScroll();

function tobiz() {
    router.push({ name: RouteName.BusinessName });
}
</script>

<template>
    <main class="welcome-container">
        <section class="welcome-container-head">
            <UserView></UserView>
        </section>
        <section class="welcome-container-body">
            <FurnaceScrollBar
                ref="refs"
                class="welcome-container-body-scroll"
                :speed="120"
            >
                <el-row :gutter="24">
                    <el-col :span="12">
                        <ContainerView>1</ContainerView>
                    </el-col>
                    <el-col :span="12">
                        <ContainerView>2</ContainerView>
                    </el-col>
                    <el-col :span="8">
                        <ContainerView>3</ContainerView>
                    </el-col>
                    <el-col :span="8">
                        <ContainerView>4</ContainerView>
                    </el-col>
                    <el-col :span="8">
                        <ContainerView>5</ContainerView>
                    </el-col>
                    <el-col :span="24">
                        <ContainerView>6</ContainerView>
                    </el-col>
                    <el-col :span="12">
                        <ContainerView>7</ContainerView>
                    </el-col>
                    <el-col :span="24">
                        <ContainerView>8</ContainerView>
                    </el-col>
                </el-row>
            </FurnaceScrollBar>
        </section>
    </main>
</template>

<style scoped lang='scss'>
.welcome-container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
    background-color: #f0f2f5;

    &-head {
        width: 100%;
        height: 64px;
        background-color: #fff;
        box-sizing: border-box;
        overflow: hidden;
    }

    &-body {
        width: 100%;
        height: calc(100% - 64px);
        padding: 12px 0;
        box-sizing: border-box;
        overflow: hidden;

        &-scroll {
            width: 100%;
            height: 100%;
            padding: 0 12px;
            background-color: transparent;
            box-sizing: border-box;
        }
    }
}
</style>
