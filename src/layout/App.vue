<!--
 * @FilePath: \Furnace\src\layout\App.vue
 * @Author: maggot-code
 * @Date: 2022-11-21 14:19:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 18:21:34
 * @Description: 
-->
<script setup>
import { useRouterStore } from "@/router/useRouterStore";

const routerStore = useRouterStore();
</script>

<template>
    <config v-if="routerStore.ready">
        <popup>
            <router-view></router-view>
        </popup>
    </config>
</template>

<style scoped lang='scss'>

</style>
