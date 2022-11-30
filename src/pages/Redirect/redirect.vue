<!--
 * @FilePath: \Furnace\src\pages\Redirect\redirect.vue
 * @Author: maggot-code
 * @Date: 2022-11-21 15:17:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 23:50:06
 * @Description: 
-->
<script setup>
import { useRouter, useRoute } from "@/hooks/useVueRouter";
import { toString } from "@/shared/trans";
import { isEmptyString } from "@/shared/is";

const router = useRouter();
const route = useRoute();

onBeforeMount(() => {
    const { params, query } = route;
    const { path } = params;
    const redirect = (Array.isArray(path) ? path.join('/') : toString(path));

    router.replace({
        path: isEmptyString(redirect) ? "/" : redirect,
        params,
        query,
    });
});
</script>

<template></template>
