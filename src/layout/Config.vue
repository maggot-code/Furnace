<!--
 * @FilePath: \Furnace\src\layout\Config.vue
 * @Author: maggot-code
 * @Date: 2022-11-23 17:30:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 16:02:23
 * @Description: 
-->
<script setup>
import { storeToRefs } from "pinia";
import { useGlobeStore } from "@/store/useGlobeStore";
import { useRouterStore } from "@/store/useRouterStore";
import { useUserStore } from "@/store/useUserStore";
import { useProgress } from "@/hooks/useProgress";
import { useRedirect } from "@/hooks/useVueRouter";
import { toArray } from "@/shared/trans";

const globeStore = useGlobeStore();
const routerStore = useRouterStore();
const userStore = useUserStore();
const progress = useProgress();
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
