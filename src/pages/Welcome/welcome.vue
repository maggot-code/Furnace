<!--
 * @FilePath: \Furnace\src\pages\Welcome\welcome.vue
 * @Author: maggot-code
 * @Date: 2022-11-23 21:34:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-13 14:37:34
 * @Description: 
-->
<script setup>
import { RouteName } from "~/router/shared/context";
import { useRouter } from "@/hooks/router/useRouter";
import { useScroll } from "@/hooks/useScroll";
import { useInfo, useTypeface } from "@/hooks/system/useInfo";

const router = useRouter();
const fontClass = useTypeface();
const { refs } = useScroll();
const { info } = useInfo();

function tobiz() {
    router.push({ name: RouteName.BusinessName });
}
</script>

<template>
    <main class="welcome-container">
        <section class="welcome-container-head">
            <div class="welcome-container-head-title">
                <el-image
                    class="welcome-container-head-title-logo"
                    fit="scale-down"
                    :alt="info.title"
                    :src="info.logo"
                >
                    <template #error>
                        <i class="el-icon-picture-outline"></i>
                    </template>
                </el-image>
                <h1
                    class="welcome-container-head-title-words"
                    :class="fontClass"
                >{{ info.title }}</h1>
            </div>
            <div class="welcome-container-head-user">
                <UserView></UserView>
            </div>
        </section>
        <section class="welcome-container-body">
            <FurnaceScrollBar
                ref="refs"
                class="welcome-container-body-scroll"
                :speed="120"
            >
                <GridView
                    :cup="4"
                    :col-gap="12"
                    :row-gap="12"
                >
                    <GridCell
                        :spanStart="[1, 1]"
                        :spanEnd="[3, 3]"
                    >
                        <SystemModular color="#36b24d"></SystemModular>
                    </GridCell>
                    <GridCell
                        :spanStart="[1, 3]"
                        :spanEnd="[4, 5]"
                    >
                        <SystemModular color="#0e98ad"></SystemModular>
                    </GridCell>
                    <GridCell
                        :spanStart="[3, 1]"
                        :spanEnd="[4, 3]"
                    >
                        <SystemModular color="#ff9433"></SystemModular>
                    </GridCell>
                    <GridCell
                        :spanStart="[4, 2]"
                        :spanEnd="[5, 5]"
                    >
                        <SystemModular color="#4263eb"></SystemModular>
                    </GridCell>
                    <GridCell
                        :spanStart="[4, 1]"
                        :spanEnd="[5, 2]"
                    >
                        <SystemModular color="pink"></SystemModular>
                    </GridCell>
                </GridView>
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 64px;
        padding: 0 24px;
        background-color: #fff;
        box-sizing: border-box;
        overflow: hidden;

        &-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;

            &-logo,
            &-words {
                height: 52px;
                line-height: 52px;
            }

            &-logo {
                width: 52px;
            }

            &-words {
                font-size: 32px;
                line-height: 1.5;
                padding-left: 12px;
                color: #666;
                letter-spacing: 2px;
                text-shadow: 0 0 2px #333;
            }
        }
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
