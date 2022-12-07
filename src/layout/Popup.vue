<!--
 * @FilePath: /Furnace/src/layout/Popup.vue
 * @Author: maggot-code
 * @Date: 2022-11-23 17:32:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 23:45:47
 * @Description: 
-->
<script setup>
import { definePopup } from "@/domain/Popup/usecase/definePopup";

const { pond, pondFind, pondRelease } = definePopup();
</script>

<template>
    <div class="furnace-container furnace-popup">
        <template v-for="(key) in pond">
            <el-dialog
                :key="key"
                :before-close="pondRelease(key)"
                :visible="pondFind(key).visible.value"
                :title="pondFind(key).title.value"
                :width="pondFind(key).width.value"
                :top="pondFind(key).top.value"
                v-bind="pondFind(key).constProps"
            >
                <div
                    class="furnace-popup-main"
                    :ref="pondFind(key).refs"
                    :style="{ height: pondFind(key).height.value }"
                >
                    <component
                        :is="pondFind(key).template"
                        :popupKeyword="key"
                    />
                </div>
            </el-dialog>
        </template>
        <slot></slot>
    </div>
</template>

<style scoped lang='scss'>

</style>
