<!--
 * @FilePath: \Furnace\src\layout\Config.vue
 * @Author: maggot-code
 * @Date: 2022-11-23 17:30:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 02:23:35
 * @Description: 
-->
<script setup>
import { storeToRefs } from "pinia";
import { GetRouterServer, obtainGetRouter, abortGetRouter } from "@/server/Router/get";
import { useGlobeStore } from "@/store/useGlobeStore";
import { useRouterStore } from "@/store/useRouterStore";
import { useUserStore } from "@/store/useUserStore";
import { useWatchServer } from "@/hooks/useWatchServer";
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

useWatchServer(GetRouterServer, {
    trans: (response) => toArray(response.data),
    setup: routerStore.setupCache
});
watchEffect(async () => {
    if (unref(notJump)) return;

    progress.pend();
    // 挂载异步路由
    await obtainGetRouter();

    const state = await redo();
    state && userStore.setupToLogin(true);
});
onBeforeUnmount(() => abortGetRouter());
</script>

<template>
    <div class="furnace-container furnace-config">
        <slot></slot>
    </div>
</template>

<style scoped lang='scss'>

</style>
