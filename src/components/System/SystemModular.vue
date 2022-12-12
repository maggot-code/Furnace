<!--
 * @FilePath: \Furnace\src\components\System\SystemModular.vue
 * @Author: maggot-code
 * @Date: 2022-12-12 16:48:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-12 18:19:58
 * @Description: 
-->
<script setup>
const props = defineProps({
    color: String
});
const style = computed(() => {
    return {
        backgroundColor: props.color
    }
});
</script>

<template>
    <div
        class="system-modular"
        :style="style"
    >
        <h1>系统模块</h1>
    </div>
</template>

<style scoped lang='scss'>
.system-modular {
    width: 100%;
    height: 100%;
    min-height: 320px;
    overflow: hidden;
}
</style>
