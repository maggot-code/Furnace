<!--
 * @FilePath: \Furnace\src\pages\Welcome\welcome.vue
 * @Author: maggot-code
 * @Date: 2022-11-23 21:34:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 09:29:44
 * @Description: 
-->
<script setup>
import { RouteName } from "~/router/shared/context";
import { useRouter } from "@/hooks/router/useRouter";

const router = useRouter();

function tobiz() {
    router.push({ name: RouteName.BusinessName });
}
</script>

<template>
    <div>
        <h1>Welcome!</h1>
        <el-button
            @click="tobiz"
            size="mini"
        >前往功能区</el-button>
    </div>
</template>

<style scoped lang='scss'>

</style>
