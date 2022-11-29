<!--
 * @FilePath: \Furnace\src\layout\Config.vue
 * @Author: maggot-code
 * @Date: 2022-11-23 17:30:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-29 21:21:22
 * @Description: 
-->
<script setup>
import { storeToRefs } from "pinia";
import { useGlobeStore } from "@/store/useGlobeStore";
import { useUserStore } from "@/store/useUserStore";

const globeStore = useGlobeStore();
const userStore = useUserStore();
</script>

<template>
    <div class="furnace-container furnace-config">
        <slot></slot>
    </div>
</template>

<style scoped lang='scss'>

</style>
