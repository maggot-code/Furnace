<!--
 * @FilePath: \Furnace\src\layout\Config.vue
 * @Author: maggot-code
 * @Date: 2022-11-23 17:30:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 01:43:39
 * @Description: 
-->
<script setup>
import { storeToRefs } from "pinia";
import { useGlobeStore } from "@/store/useGlobeStore";
import { useUserStore } from "@/store/useUserStore";
import { useRedirect } from "@/hooks/useVueRouter";

const globeStore = useGlobeStore();
const userStore = useUserStore();
const redo = useRedirect();

const { isLogin, tokenLapse } = storeToRefs(userStore);
const notJump = computed(() => unref(isLogin) || unref(tokenLapse));

watchEffect(async () => {
    if (unref(notJump)) return;

    const state = await redo();

    state && userStore.setupToLogin(true);
});
</script>

<template>
    <div class="furnace-container furnace-config">
        <slot></slot>
    </div>
</template>

<style scoped lang='scss'>

</style>
