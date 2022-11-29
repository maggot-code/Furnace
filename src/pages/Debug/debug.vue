<!--
 * @FilePath: \Furnace\src\pages\Debug\debug.vue
 * @Author: maggot-code
 * @Date: 2022-11-21 15:26:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 02:52:32
 * @Description: 
-->
<script setup>
import { arrayToTree } from "@/shared/metadata/trans";

const data = [
    {
        pid: null,
        id: 10,
        name: "10"
    },
    {
        pid: 10,
        id: 100,
        name: "100"
    },
    {
        pid: 10,
        id: 101,
        name: "101"
    }
];

const a = arrayToTree(null, data, {
    check: (parent, current) => eq(parent?.id ?? null, current.pid)
});
console.log(a);
</script>

<template>
    <h1>debug</h1>
</template>

<style scoped lang='scss'>

</style>
