<!--
 * @FilePath: \Furnace\src\layout\App.vue
 * @Author: maggot-code
 * @Date: 2022-11-21 14:19:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 20:38:37
 * @Description: 
-->
<script setup>
import { reloadRouter } from "@/router/defineRouter";
import { useRedirect, useRouter } from "@/hooks/useVueRouter";
import { useRouterStore } from "@/store/useRouterStore";
import { storeToRefs } from "pinia";

const redo = useRedirect();
const router = useRouter();
const routerStore = useRouterStore();
const { cue } = storeToRefs(routerStore);

watch(cue, () => {
    reloadRouter();

    routerStore.asyncRoutes.forEach((item) => {
        router.addRoute(item);
    });
    routerStore.toMounted();

    redo();
});
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
