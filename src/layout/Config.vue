<!--
 * @FilePath: \Furnace\src\layout\Config.vue
 * @Author: maggot-code
 * @Date: 2022-11-23 17:30:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-28 11:26:57
 * @Description: 
-->
<script setup>
import { useGlobeStore } from "@/store/useGlobeStore";
import { useRouter } from "@/hooks/useRouter";

const globeStore = useGlobeStore();
const router = useRouter();

function toSwitch(cid) {
    router.push({
        name: "SimpleCurd",
        params: { cid }
    });
}
</script>

<template>
    <div class="furnace-container furnace-config">
        <!-- <el-button @click="toSwitch(101)">101</el-button>
        <el-button @click="toSwitch(106)">106</el-button> -->
        <slot></slot>
    </div>
</template>

<style scoped lang='scss'>

</style>
