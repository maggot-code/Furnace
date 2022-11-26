<!--
 * @FilePath: /Furnace/src/pages/Redirect/redirect.vue
 * @Author: maggot-code
 * @Date: 2022-11-21 15:17:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-26 15:17:57
 * @Description: 
-->
<script setup>
import { useRouter, useRoute } from "@/hooks/useRouter";

const router = useRouter();
const route = useRoute();

onBeforeMount(() => {
    const { params, query } = route;
    const [path] = params.path.split("?");

    router.replace({
        path,
        query
    });
});
</script>

<template></template>
