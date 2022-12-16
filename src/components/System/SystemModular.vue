<!--
 * @FilePath: /Furnace/src/components/System/SystemModular.vue
 * @Author: maggot-code
 * @Date: 2022-12-12 16:48:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-15 17:18:55
 * @Description: 
-->
<script setup>
import { useRouterStore } from "@/store/useRouterStore";
import { useRouter } from "@/hooks/router/useRouter";

const routerStore = useRouterStore();
const router = useRouter();

function tomodule(route) {
    router.push(route);
}
</script>

<template>
    <div class="system-modular">
        <template v-for="(group) in routerStore.moduleRoutes">
            <h1
                :key="group.meta.uid"
                @click="tomodule(group)"
            >{{ group.meta.title }}</h1>
        </template>
    </div>
</template>

<style scoped lang='scss'>
.system-modular {
    width: 100%;
    height: 100%;
    min-height: 320px;
    overflow: hidden;
}
</style>
