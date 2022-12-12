<!--
 * @FilePath: \Furnace\src\layout\Config.vue
 * @Author: maggot-code
 * @Date: 2022-11-23 17:30:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-12 13:25:25
 * @Description: 
-->
<script setup>
import { SYSTEM_SYMBOL } from "~/shared/constant";
import { storeToRefs } from "pinia";
import { useGlobStore } from "@/store/useGlobStore";
import { useUserStore } from "@/store/useUserStore";

const globStore = useGlobStore();
const userStore = useUserStore();
const { system } = storeToRefs(globStore);

provide(SYSTEM_SYMBOL, system);
onBeforeMount(() => {
    if (userStore.tokenUsable) globStore.toLogged();

    globStore.toVisited();
});
</script>

<template>
    <div class="furnace-container furnace-config">
        <slot></slot>
    </div>
</template>

<style scoped lang='scss'>

</style>
