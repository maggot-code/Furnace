<!--
 * @FilePath: \Furnace\src\layout\BizMain.vue
 * @Author: maggot-code
 * @Date: 2022-12-06 13:09:14
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-07 11:26:05
 * @Description: 
-->
<template>
    <div class='biz-main'>
        <transition name="el-fade-in-linear">
            <router-view v-slot="{ Component }">
                <components
                    :is="Component"
                    :key="keyword"
                    v-bind="meta"
                ></components>
            </router-view>
        </transition>
    </div>
</template>

<script>
import { uuid } from "~/shared/uuid";
export default {
    name: 'BizMain',
    mixins: [],
    components: {},
    props: {},
    setup() {
        return {};
    },
    data() {
        return {
            keyword: uuid()
        }
    },
    computed: {
        meta() {
            return this.$route.meta;
        }
    },
    watch: {
        $route() {
            this.keyword = uuid();
        }
    }
};
</script>
<style lang='scss' scoped>
.biz-main {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
}
</style>
