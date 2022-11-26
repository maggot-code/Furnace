<!--
 * @FilePath: /Furnace/src/pages/Curd/simple.vue
 * @Author: maggot-code
 * @Date: 2022-11-25 16:24:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-26 16:12:45
 * @Description: 
-->
<script setup>
import {
    SimpleCurdView,
    SimpleCurdSearch,
    SimpleCurdControl,
    SimpleCurdTable
} from "@/template/SimpleCurd";
</script>

<template>
    <SimpleCurdView>
        <SimpleCurdSearch slot="search" />
        <SimpleCurdControl slot="control" />
        <SimpleCurdTable slot="table" />
    </SimpleCurdView>
</template>

<style scoped lang='scss'>

</style>
