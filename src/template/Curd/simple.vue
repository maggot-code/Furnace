<!--
 * @FilePath: \Furnace\src\template\Curd\simple.vue
 * @Author: maggot-code
 * @Date: 2022-11-25 16:24:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 11:45:42
 * @Description: 
-->
<script setup>
import {
    CurdView,
    CurdSearch,
    CurdControl,
    CurdList
} from "@/domain/Curd";
import { useRoute } from "@/hooks/useVueRouter";
const route = useRoute();
</script>

<template>
    <CurdView :params="route.params">
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
