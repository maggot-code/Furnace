<!--
 * @FilePath: /Furnace/src/layout/App.vue
 * @Author: maggot-code
 * @Date: 2022-11-21 14:19:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-26 14:31:41
 * @Description: 
-->
<script setup>
import { useRouterStore } from "@/store/useRouterStore";
import { obtainRouter } from "@/server/Router/get";

const routerStore = useRouterStore();

onMounted(async () => {
    const response = await obtainRouter();
    // console.log(response);
});
</script>

<template>
    <config>
        <popup>
            <lock-screen>
                <template v-if="routerStore.ready">
                    <router-view v-slot="{ Component }">
                        <transition
                            name="fade"
                            mode="out-in"
                        >
                            <component :is="Component" />
                        </transition>
                    </router-view>
                </template>
            </lock-screen>
        </popup>
    </config>
</template>

<style scoped lang='scss'>

</style>
