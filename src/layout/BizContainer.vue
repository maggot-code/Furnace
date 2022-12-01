<!--
 * @FilePath: \Furnace\src\layout\BizContainer.vue
 * @Author: maggot-code
 * @Date: 2022-11-23 23:17:19
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 09:16:52
 * @Description: 
-->
<script setup>
const props = defineProps({
    keyword: {
        type: String,
        default: "FurnaceMenu"
    }
});
const { menuStore } = inject(props.keyword);
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
                <slot name="body"></slot>
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
    }

    &-main {
        &-head {
            background-color: yellow;
        }

        &-body {
            background-color: green;
        }
    }
}
</style>
