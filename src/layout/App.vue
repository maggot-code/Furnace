<!--
 * @FilePath: \Furnace\src\layout\App.vue
 * @Author: maggot-code
 * @Date: 2022-11-21 14:19:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 23:14:29
 * @Description: 
-->
<script setup>
import { useRouterStore } from "@/router/useRouterStore";

const routerStore = useRouterStore();
</script>

<template>
    <config v-if="routerStore.ready">
        <popup>
            <lock-screen>
                <router-view v-slot="{ Component }">
                    <transition
                        name="fade"
                        mode="out-in"
                    >
                        <component :is="Component" />
                    </transition>
                </router-view>
            </lock-screen>
        </popup>
    </config>
</template>

<style scoped lang='scss'>

</style>
