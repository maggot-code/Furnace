<!--
 * @FilePath: /Furnace/src/pages/Redirect/redirect.vue
 * @Author: maggot-code
 * @Date: 2022-12-04 05:15:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 05:23:10
 * @Description: 
-->
<script setup>
import { RouteName } from "~/router/shared/context";
import { useRouter } from "@/hooks/router/useRouter";
import { useRoute } from "@/hooks/router/useRoute";
import { transString } from "~/shared/trans";
import { isEmptyString } from "~/shared/is";
import { mergeObject } from "~/shared/merge";

const router = useRouter();
const route = useRoute();

onBeforeMount(() => {
    const { params, query } = route;
    const { topath } = params;
    const path = Array.isArray(topath) ? topath.join("/") : transString(topath);

    router.push({
        path: isEmptyString(path) ? RouteName.WelcomeName : path,
        query: mergeObject(query, params.query),
        params,
    });
});
</script>

<template></template>
