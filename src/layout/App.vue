<!--
 * @FilePath: \Furnace\src\layout\App.vue
 * @Author: maggot-code
 * @Date: 2022-11-21 14:19:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 14:58:19
 * @Description: 
-->
<script setup></script>

<template>
    <config>
        <popup>
            <lock-screen>
                <transition name="el-fade-in-linear">
                    <router-view></router-view>
                </transition>
            </lock-screen>
        </popup>
    </config>
</template>

<style scoped lang='scss'>

</style>
