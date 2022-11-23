<!--
 * @FilePath: \Furnace\src\pages\Drive\prohibit.vue
 * @Author: maggot-code
 * @Date: 2022-11-23 19:40:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 19:51:09
 * @Description: 
-->
<script setup>
import Image from "@/assets/images/403.svg";

const vbind = {
    image: Image,
    title: "访问被禁止",
    desc: "抱歉，您没有权限继续 !"
}
</script>

<template>
    <exception-view v-bind="vbind" />
</template>

<style scoped lang='scss'>

</style>
