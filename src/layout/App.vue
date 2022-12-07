<!--
 * @FilePath: /Furnace/src/layout/App.vue
 * @Author: maggot-code
 * @Date: 2022-12-04 01:17:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-07 23:49:34
 * @Description: 
-->
<script setup></script>

<template>
    <div id="app">
        <config>
            <popup>
                <lock-screen>
                    <transition name="el-fade-in-linear">
                        <router-view></router-view>
                    </transition>
                </lock-screen>
            </popup>
        </config>
    </div>
</template>

<style scoped lang='scss'>

</style>
