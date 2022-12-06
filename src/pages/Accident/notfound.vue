<!--
 * @FilePath: \Furnace\src\pages\Drive\notpage.vue
 * @Author: maggot-code
 * @Date: 2022-11-21 15:16:40
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 19:49:32
 * @Description: 
-->
<script setup>
import Image from "@/assets/images/404.svg";

const vbind = {
    image: Image,
    title: "资源未发现",
    desc: "抱歉，访问资源不存在"
}
</script>

<template>
    <exception-view v-bind="vbind" />
</template>

<style scoped lang='scss'>

</style>
