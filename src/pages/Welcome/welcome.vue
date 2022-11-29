<!--
 * @FilePath: \Furnace\src\pages\Welcome\welcome.vue
 * @Author: maggot-code
 * @Date: 2022-11-23 21:34:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-29 16:28:05
 * @Description: 
-->
<script setup>
import { useUserStore } from "@/store/useUserStore";

const userStore = useUserStore();
</script>

<template>
    <div>
        <h1>Welcome!</h1>
        <p>{{ userStore.overdueView }}</p>
    </div>
</template>

<style scoped lang='scss'>

</style>
