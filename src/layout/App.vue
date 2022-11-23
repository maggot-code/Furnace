<!--
 * @FilePath: \Furnace\src\layout\App.vue
 * @Author: maggot-code
 * @Date: 2022-11-21 14:19:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 15:45:49
 * @Description: 
-->
<script setup>
import axios from "axios";
import { defineService } from "@/service/defineService";
import { useServerLoad } from "@/hooks/useServerLoad";

const define = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    timeout: import.meta.env.DEV ? 0 : 24000
});

const service = defineService(define);

const userListServer = service.define({ url: "/users" });
const postListServer = service.define({ url: "/posts" });

const groupServer = [userListServer, postListServer];
const loading = useServerLoad(groupServer);

onMounted(async () => {
    // await service.send(userListServer);
    // await service.send(postListServer);
    await service.sendAll(groupServer);
});
onBeforeUnmount(() => { });
</script>

<template>
    <div
        id=app
        v-loading="loading"
    >
        <h1>app</h1>
    </div>
</template>

<style scoped lang='scss'>

</style>
