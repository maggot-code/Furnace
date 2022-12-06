<!--
 * @FilePath: \Furnace\src\layout\BizContainer.vue
 * @Author: maggot-code
 * @Date: 2022-11-23 23:17:19
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 13:13:49
 * @Description: 
-->
<script setup>
import { useMenu } from "~/menu/usecase/useMenu";

const { menuStore } = useMenu();
</script>

<template>
    <el-container
        class="furnace-container furnace-biz"
        direction="horizontal"
    >
        <el-aside
            class="furnace-biz-aside"
            :width="menuStore.menuWidth"
        >
            <slot name="title"></slot>
            <slot name="aside"></slot>
        </el-aside>

        <el-container
            class="furnace-biz-main"
            direction="vertical"
        >
            <el-header
                class="furnace-biz-main-head"
                height="64px"
            >
                <slot name="header"></slot>
            </el-header>
            <el-main class="furnace-biz-main-body">
                <div class="furnace-biz-main-body-crumbs">
                    <slot name="crumbs"></slot>
                </div>
                <div class="furnace-biz-main-body-content">
                    <slot name="body"></slot>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<style scoped lang='scss'>
.furnace-biz {
    overflow: hidden;
    box-sizing: border-box;

    &-aside {
        transition: all 0.3s;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }

    &-main {
        &-head {
            box-shadow: 0 1px 4px #00152914;
        }

        &-body {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            height: 100%;
            overflow: hidden;

            &-crumbs {
                width: 100%;
                height: 32px;
                overflow: hidden;
            }

            &-content {
                width: 100%;
                height: calc(100% - 48px);
                overflow: hidden;
            }
        }
    }
}
</style>
