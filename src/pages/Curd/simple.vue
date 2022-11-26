<!--
 * @FilePath: /Furnace/src/pages/Curd/simple.vue
 * @Author: maggot-code
 * @Date: 2022-11-25 16:24:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 00:06:39
 * @Description: 
-->
<script setup>
import {
    SimpleCurdView,
    SimpleCurdSearch,
    SimpleCurdControl,
    SimpleCurdList
} from "@/template/SimpleCurd";
</script>

<template>
    <SimpleCurdView>
        <template v-slot:search>
            <SimpleCurdSearch />
        </template>
        <template v-slot:control>
            <SimpleCurdControl />
        </template>
        <template v-slot:list>
            <SimpleCurdList />
        </template>
    </SimpleCurdView>
</template>

<style scoped lang='scss'>

</style>
