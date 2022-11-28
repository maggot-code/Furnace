<!--
 * @FilePath: \Furnace\src\layout\App.vue
 * @Author: maggot-code
 * @Date: 2022-11-21 14:19:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-28 16:55:22
 * @Description: 
-->
<script setup>
import { GetRouterServer, obtainRouter, abortRouter } from "@/server/Router/get";

onBeforeMount(() => obtainRouter());
onBeforeUnmount(() => abortRouter());
</script>

<template>
    <config>
        <popup>
            <lock-screen>
                <router-view></router-view>
            </lock-screen>
        </popup>
    </config>
</template>

<style scoped lang='scss'>

</style>
