<!--
 * @FilePath: \Furnace\src\layout\App.vue
 * @Author: maggot-code
 * @Date: 2022-11-21 14:19:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-22 14:05:20
 * @Description: 
-->
<script setup>
import axios from "axios";
import { defineService } from "@/service/defineService";
import { useServerLoad } from "@/hooks/useServerLoad";

const define = axios.create({
    // baseURL: import.meta.env.BASE_URL,
    baseURL: "https://jsonplaceholder.typicode.com/",
    timeout: import.meta.env.DEV ? 0 : 24000
});

const service = defineService(define);

const userListServer = service.define({ url: "/users" });
const postListServer = service.define({ url: "/posts" });

const loading = useServerLoad([userListServer, postListServer]);

onMounted(async () => {
    service.send(userListServer);
    service.send(postListServer);
});
</script>

<template>
    <div
        id=app
        v-loading="loading"
    >app</div>
</template>

<style scoped lang='scss'>

</style>
