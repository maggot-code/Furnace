<!--
 * @FilePath: \Furnace\src\pages\Drive\collapse.vue
 * @Author: maggot-code
 * @Date: 2022-11-23 19:40:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 19:51:54
 * @Description: 
-->
<script setup>
import Image from "@/assets/images/500.svg";

const vbind = {
    image: Image,
    title: "无法工作",
    desc: "抱歉，服务器出现了点问题.."
}
</script>

<template>
    <exception-view v-bind="vbind" />
</template>

<style scoped lang='scss'>

</style>
