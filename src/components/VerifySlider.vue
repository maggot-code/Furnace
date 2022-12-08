<!--
 * @FilePath: \Furnace\src\components\VerifySlider.vue
 * @Author: maggot-code
 * @Date: 2022-12-08 14:58:51
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-08 18:09:30
 * @Description: 
-->
<script setup>
import { transString } from "~/shared/trans";
import { useElementRefs } from "@/hooks/useElement";
import { usePointerSwipe } from "@vueuse/core";

const LifeInit = "INITIALIZE";
const LifeProcess = "PROCESS";
const LifeSuccess = "SUCCESS";
const LifeError = "ERROR";

const props = defineProps({
    initTips: {
        type: String,
        default: "请按住滑块，拖动到最右边"
    },
    processTips: {
        type: String,
        default: "请不要松开滑块"
    },
    successTips: {
        type: String,
        default: "验证通过"
    },
    errorTips: {
        type: String,
        default: "验证失败"
    },
    verifyState: {
        type: Function,
        default: () => ({})
    }
});
const { refs: containerRefs, ready } = useElementRefs();
const { refs: sliderRefs } = useElementRefs();
const trackRecord = computed(() => ({
    [LifeInit]: unref(props).initTips,
    [LifeProcess]: unref(props).processTips,
    [LifeSuccess]: unref(props).successTips,
    [LifeError]: unref(props).errorTips
}));
const lifeCycle = ref(LifeInit);
const isInit = computed(() => eq(unref(lifeCycle), LifeInit));
const isSuccess = computed(() => eq(unref(lifeCycle), LifeSuccess));
const isError = computed(() => eq(unref(lifeCycle), LifeError));

const containerWidth = computed(() => unref(containerRefs)?.offsetWidth);
const left = ref('0');

const { isSwiping, direction, distanceX, stop } = usePointerSwipe(sliderRefs, {
    threshold: 30,
    onSwipeStart,
    onSwipe,
    onSwipeEnd
});
const theme = computed(() => {
    if (unref(isInit)) return '#409EFF';
    if (unref(isSuccess)) return '#67C23A';
    if (unref(isError)) return '#F56C6C';
    return '#409EFF';
});
const icon = computed(() => {
    if (unref(isInit)) return 'el-icon-right';
    if (unref(isSwiping)) return 'el-icon-loading';
    if (unref(isSuccess)) return 'el-icon-check';
    if (unref(isError)) return 'el-icon-close';
    return 'el-icon-right';
});
const iconStyle = computed(() => ({
    backgroundColor: unref(theme),
    borderColor: unref(theme)
}));
const blockStyle = computed(() => ({
    borderColor: unref(theme),
    left: unref(left)
}));
const sliderStyle = computed(() => {
    if (unref(isSuccess)) return { borderColor: "#67C23A" };
    if (unref(isError)) return { borderColor: "#F56C6C" };
    return { borderColor: "#DCDFE6", backgroundColor: unref(theme), };
});
const explain = computed(() => {
    return transString(unref(trackRecord)[unref(lifeCycle)], direction);
});

function onSwipeStart() {
    left.value = '0';
    lifeCycle.value = LifeInit;
}
function onSwipe() {
    if (!unref(ready)) return;

    if (unref(distanceX) < 0) {
        const directionValue = Math.abs(unref(distanceX));
        const fitValue = unref(containerWidth) - 40;
        const maxValue = Math.min(directionValue, fitValue);
        left.value = `${maxValue}px`;
        // opacity.value = 1.25 - directionValue / unref(containerWidth);
        lifeCycle.value = LifeProcess;
    } else {
        left.value = '0';
        lifeCycle.value = LifeInit;
    }
}
function onSwipeEnd() {
    if (unref(distanceX) < 0 && unref(containerWidth) && (Math.abs(unref(distanceX)) / unref(containerWidth)) >= 0.8) {
        left.value = 'calc(100% - 40px)';
        lifeCycle.value = LifeSuccess;
    } else {
        left.value = '0';
        lifeCycle.value = LifeError;
    }
}

onMounted(() => {
    lifeCycle.value = LifeInit;
});
onUnmounted(() => {
    lifeCycle.value = LifeInit;
    stop();
});
</script>

<template>
    <div
        ref="containerRefs"
        class="verify-slider"
        :style="sliderStyle"
    >
        <div
            ref="sliderRefs"
            class="verify-slider-block"
            :style="blockStyle"
        >
            <div
                class="verify-slider-block-head"
                :style="iconStyle"
            >
                <i :class="icon"></i>
            </div>
            <div class="verify-slider-block-body">
                {{ explain }}
            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.verify-slider {
    position: relative;
    width: 100%;
    height: 40px;
    border: 1px solid #DCDFE6;
    box-sizing: border-box;
    user-select: none;

    &-block {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: #fff;
        border: 1px solid transparent;
        touch-action: initial;
        box-sizing: border-box;
        overflow: hidden;
        cursor: pointer;

        &-head {
            display: grid;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 100%;
            color: #fff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .4);
            overflow: hidden;

            &>i {
                font-size: 24px;
                line-height: 1.5;
                transition: all 0.2s ease-in-out;
            }
        }

        &-body {
            flex: 1;
            height: 100%;
            color: #909399;
            padding-left: 8px;
            overflow: hidden;
            box-sizing: border-box;
        }
    }

    &-tips {
        flex: 1;
        height: 100%;
        color: #909399;
        padding-left: 48px;
        overflow: hidden;
        box-sizing: border-box;
    }
}
</style>
