<!--
 * @FilePath: \Furnace\src\components\ExceptionView.vue
 * @Author: maggot-code
 * @Date: 2022-11-23 19:26:50
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 20:05:20
 * @Description: 
-->
<script setup>
const props = defineProps({
    image: {
        type: [String],
        default: ""
    },
    title: {
        type: String,
        default: '意外情况'
    },
    desc: {
        type: String,
        default: '抱歉，无法继续工作了..'
    },
});
</script>

<template>
    <div class="exception-view">
        <div class="exception-view-img">
            <img :src="image" />
        </div>
        <div class="exception-view-content">
            <h1 class="exception-view-content-title">{{ title }}</h1>
            <div class="exception-view-content-desc">{{ desc }}</div>
            <div class="exception-view-content-action">
                <el-button type="info">返回首页</el-button>
            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.exception-view {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    &-img {
        padding-right: 52px;
        zoom: 1;

        img {
            max-width: 430px;
        }
    }

    &-content {
        &-title {
            color: #434e59;
            font-size: 72px;
            font-weight: 600;
            line-height: 72px;
            margin-bottom: 24px;
        }

        &-desc {
            color: rgba(0, 0, 0, .45);
            font-size: 20px;
            line-height: 28px;
            margin-bottom: 16px;
        }
    }
}
</style>
