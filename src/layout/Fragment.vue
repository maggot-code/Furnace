<!--
 * @FilePath: /Furnace/src/layout/Fragment.vue
 * @Author: maggot-code
 * @Date: 2022-12-01 12:37:42
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 17:51:47
 * @Description: 
-->
<template>
    <router-view v-slot="{ Component }">
        <components
            :is="Component"
            :key="keyword"
            v-bind="meta"
        ></components>
    </router-view>
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
        $route() {
            this.keyword = uuid();
        }
    }
};
</script>
<style lang='scss' scoped>

</style>
