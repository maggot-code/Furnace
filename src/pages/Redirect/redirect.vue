<!--
 * @FilePath: \Furnace\src\pages\Redirect\redirect.vue
 * @Author: maggot-code
 * @Date: 2022-11-21 15:17:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-29 16:51:35
 * @Description: 
-->
<script setup>
import { useRouter, useRoute } from "@/hooks/useVueRouter";

const router = useRouter();
const route = useRoute();

onBeforeMount(() => {
    const { params, query } = route;
    const { path } = params;

    router.replace({
        path: (Array.isArray(path) ? path.join('/') : path),
        params,
        query,
    });
});
</script>

<template></template>
