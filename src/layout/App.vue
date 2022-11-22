<!--
 * @FilePath: \Furnace\src\layout\App.vue
 * @Author: maggot-code
 * @Date: 2022-11-21 14:19:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 02:56:29
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

const { defineLoad } = useServerLoad([userListServer, postListServer], "加油");
const unloadWatch = defineLoad();

onMounted(async () => {
    service.send(userListServer);
    service.send(postListServer);
});
onBeforeUnmount(() => {
    unloadWatch();
});
</script>

<template>
    <div id=app>
        <h1>app</h1>
    </div>
</template>

<style scoped lang='scss'>

</style>
