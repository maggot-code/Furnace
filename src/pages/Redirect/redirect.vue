<!--
 * @FilePath: \Furnace\src\pages\Redirect\redirect.vue
 * @Author: maggot-code
 * @Date: 2022-11-21 15:17:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 02:13:32
 * @Description: 
-->
<script setup>
import { useRouter, useRoute } from "@/hooks/useVueRouter";
import { toString } from "@/shared/trans";

const router = useRouter();
const route = useRoute();

onBeforeMount(() => {
    const { params, query } = route;
    const { path } = params;
    const redirect = "/" + (Array.isArray(path) ? path.join('/') : toString(path));

    router.replace({
        path: redirect,
        params,
        query,
    });
});
</script>

<template></template>
