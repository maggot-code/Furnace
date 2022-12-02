<!--
 * @FilePath: \Furnace\src\layout\TemplateView.vue
 * @Author: maggot-code
 * @Date: 2022-12-01 12:39:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 14:11:49
 * @Description: 
-->
<script setup>
import { useRoute } from "@/hooks/useVueRouter";

const route = useRoute();
const title = toRef(route.meta, 'title');
</script>

<template>
    <h1>template mode {{ title }}</h1>
</template>

<style scoped lang='scss'>

</style>
