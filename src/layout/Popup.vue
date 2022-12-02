<!--
 * @FilePath: \Furnace\src\layout\Popup.vue
 * @Author: maggot-code
 * @Date: 2022-11-23 17:32:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 16:23:42
 * @Description: 
-->
<script setup></script>

<template>
    <div class="furnace-container furnace-popup">
        <!-- <template>
            <el-dialog
                :key="key"
                v-bind="ConstantDialogProps"
            >
                <component/>
            </el-dialog>
        </template> -->
        <slot></slot>
    </div>
</template>

<style scoped lang='scss'>

</style>
