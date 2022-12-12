<!--
 * @FilePath: \Furnace\src\components\Grid\GridView.vue
 * @Author: maggot-code
 * @Date: 2022-12-12 17:07:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-12 18:09:11
 * @Description: 
-->
<script setup>
const props = defineProps({
    colGap: {
        type: Number,
        default: 0
    },
    rowGap: {
        type: Number,
        default: 0
    },
});
const slots = useSlots();
const slotGroup = computed(() => {
    return slots.default ? slots.default() : [];
});
const size = computed(() => {
    return slots.default ? slots.default().length : 0;
});
const gridColumnGap = computed(() => `${props.colGap}px`);
const gridRowGap = computed(() => `${props.rowGap}px`);
const style = computed(() => {
    return {
        gridTemplateColumns: `repeat(${props.colGap}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${props.rowGap}, minmax(0, 1fr))`,
        gridColumnGap: unref(gridColumnGap),
        gridRowGap: unref(gridRowGap),
    }
});


watchEffect(() => {
    unref(slotGroup).forEach((vnode) => {
        console.log(vnode);
        console.log(vnode.row);
    });
});
onMounted(() => {
    console.log(unref(size));
});
</script>

<template>
    <div
        class="grid-view"
        :style="style"
    >
        <slot>grid view</slot>
    </div>
</template>

<style scoped lang='scss'>
.grid-view {
    width: 100%;
    display: grid;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    box-sizing: border-box;
}
</style>
