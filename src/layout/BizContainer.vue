<!--
 * @FilePath: \Furnace\src\layout\BizContainer.vue
 * @Author: maggot-code
 * @Date: 2022-11-23 23:17:19
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-08 09:42:49
 * @Description: 
-->
<script setup>
import { useMenu } from "~/menu/usecase/useMenu";

const { menuStore } = useMenu();
const slots = useSlots();
const bodyStyle = computed(() => {
    return isNil(slots.nav)
        ? { height: "100%" }
        : {};
});
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
            <div class="furnace-biz-aside-title">
                <slot name="title"></slot>
            </div>
            <div class="furnace-biz-aside-menu">
                <slot name="aside"></slot>
            </div>
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
                <div
                    class="furnace-biz-main-body-nav"
                    v-if="slots.nav"
                >
                    <slot name="nav"></slot>
                </div>
                <div
                    class="furnace-biz-main-body-content"
                    :style="bodyStyle"
                >
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
        width: 100%;
        height: 100%;
        overflow: hidden;
        transition: all 0.3s;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

        &-title {
            width: 100%;
            height: 64px;
            overflow: hidden;
        }

        &-menu {
            width: 100%;
            height: calc(100% - 64px);
        }
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

            &-nav {
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
