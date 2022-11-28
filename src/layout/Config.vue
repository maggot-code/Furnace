<!--
 * @FilePath: \Furnace\src\layout\Config.vue
 * @Author: maggot-code
 * @Date: 2022-11-23 17:30:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-28 16:55:59
 * @Description: 
-->
<script setup>
import { useGlobeStore } from "@/store/useGlobeStore";

const globeStore = useGlobeStore();
</script>

<template>
    <div class="furnace-container furnace-config">
        <slot></slot>
    </div>
</template>

<style scoped lang='scss'>

</style>
