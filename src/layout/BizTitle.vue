<!--
 * @FilePath: \Furnace\src\layout\BizTitle.vue
 * @Author: maggot-code
 * @Date: 2022-12-06 13:04:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 16:40:40
 * @Description: 
-->
<script setup>
import { storeToRefs } from "pinia";
import { useMenu } from "~/menu/usecase/useMenu";

const { menuStore } = useMenu();
const { collapse } = storeToRefs(menuStore);

const title = computed(() => {
    return unref(collapse) ? "F" : "Furnace"
});
</script>

<template>
    <div class="biz-title">
        <h1>{{ title }}</h1>
    </div>
</template>

<style scoped lang='scss'>
.biz-title {
    width: 100%;
    height: 64px;
    line-height: 64px;
    text-align: center;
}
</style>
