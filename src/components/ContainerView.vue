<!--
 * @FilePath: \Furnace\src\components\ContainerView.vue
 * @Author: maggot-code
 * @Date: 2022-12-12 14:54:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-12 16:01:11
 * @Description: 
-->
<script setup>
const props = defineProps({
    animation: {
        type: Boolean,
        default: true
    }
});

console.log(props.animation);
</script>

<template>
    <div class="container-view">
        <slot>container view</slot>
    </div>
</template>

<style scoped lang='scss'>
.container-view {
    display: flex;
    width: 100%;
    min-height: 320px;
    margin-bottom: 24px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    box-sizing: border-box;
    overflow: hidden;
    align-items: flex-end;
    justify-content: flex-end;
}
</style>
