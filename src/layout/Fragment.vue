<!--
 * @FilePath: \Furnace\src\layout\Fragment.vue
 * @Author: maggot-code
 * @Date: 2022-12-01 12:37:42
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-07 17:50:12
 * @Description: 
-->
<template>
    <transition name="el-fade-in-linear">
        <router-view v-slot="{ Component }">
            <components
                :is="Component"
                :key="keyword"
                v-bind="meta"
            ></components>
        </router-view>
    </transition>
</template>

<script>
import { uuid } from "~/shared/uuid";
export default {
    name: 'FragmentView',
    mixins: [],
    components: {},
    props: {},
    data() {
        //这里存放数据
        return {
            keyword: uuid()
        };
    },
    //监听属性 类似于data概念
    computed: {
        meta() {
            return this.$route.meta;
        }
    },
    //监控data中的数据变化
    watch: {
        "meta.uid": {
            handler() {
                this.keyword = uuid();
            },
            immediate: true
        }
    }
};
</script>
<style lang='scss' scoped>

</style>
