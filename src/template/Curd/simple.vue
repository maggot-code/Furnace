<!--
 * @FilePath: \Furnace\src\template\Curd\simple.vue
 * @Author: maggot-code
 * @Date: 2022-11-25 16:24:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-28 12:06:12
 * @Description: 
-->
<script setup>
import {
    CurdView,
    CurdSearch,
    CurdControl,
    CurdList
} from "@/domain/Curd";
</script>

<template>
    <CurdView>
        <template v-slot:search>
            <CurdSearch />
        </template>
        <template v-slot:control>
            <CurdControl />
        </template>
        <template v-slot:list>
            <CurdList />
        </template>
    </CurdView>
</template>

<style scoped lang='scss'>

</style>
