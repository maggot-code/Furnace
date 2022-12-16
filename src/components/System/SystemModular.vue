<!--
 * @FilePath: /Furnace/src/components/System/SystemModular.vue
 * @Author: maggot-code
 * @Date: 2022-12-12 16:48:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-16 18:45:19
 * @Description: 
-->
<script setup>
import { useScroll } from "@/hooks/useScroll";
import { useModule } from "@/hooks/router/useModule";

const { refs } = useScroll();
const { modules, redo } = useModule();
</script>

<template>
    <FurnaceScrollBar
        ref="refs"
        class="system-modular"
        :speed="120"
    >
        <div class="system-modular-main">
            <template v-for="(route) in modules">
                <div
                    class="system-modular-main-cell"
                    :key="route.name"
                    @click="redo(route)"
                >
                    <i
                        class="cell-icon"
                        :class="route.meta.icon"
                    ></i>
                    <p class="cell-title">{{ route.meta.title }}</p>
                </div>
            </template>
        </div>
    </FurnaceScrollBar>
</template>

<style scoped lang='scss'>
.system-modular {
    width: 100%;
    height: 320px;
    overflow: hidden;

    &-main {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 100%;
        height: 100%;
        min-height: 320px;

        &-cell {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            top: 0;
            left: 0;
            width: calc(100% - 20px);
            height: 140px;
            margin: 10px;
            padding: 12px;
            background-color: #F2F6FC;
            box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
            box-sizing: border-box;
            overflow: hidden;

            & .cell-icon {
                position: absolute;
                top: 0;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                font-size: 120px;
                color: rgba($color: #666, $alpha: 0.3);
            }

            & .cell-title {
                position: relative;
                z-index: 1;
                display: block;
                width: 100%;
                height: 32px;
                line-height: 32px;
                font-size: 24px;
                color: #666;
                text-align: center;
                text-shadow: 0 0 2px #333;
            }
        }
    }
}
</style>
