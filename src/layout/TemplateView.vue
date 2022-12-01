<!--
 * @FilePath: \Furnace\src\layout\TemplateView.vue
 * @Author: maggot-code
 * @Date: 2022-12-01 12:39:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 14:03:37
 * @Description: 
-->
<script setup>
import { useRoute } from "@/hooks/useVueRouter";

const route = useRoute();
const uid = toRef(route.meta, 'uid');
const title = toRef(route.meta, 'title');
</script>

<template :key="uid">
    <h1>template mode {{ title }}</h1>
</template>

<style scoped lang='scss'>

</style>
