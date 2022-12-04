<!--
 * @FilePath: /Furnace/src/pages/Business/business.vue
 * @Author: maggot-code
 * @Date: 2022-12-04 17:04:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 17:51:35
 * @Description: 
-->
<template>
    <BizContainer>
        <template #aside>
            <BizMenu></BizMenu>
        </template>

        <template #header>
            <BizHeader></BizHeader>
        </template>

        <template #body>
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
    </BizContainer>
</template>

<script>
import { defineMenu } from "~/menu/usecase/defineMenu";
import { uuid } from "~/shared/uuid";
export default {
    name: 'Business',
    mixins: [],
    components: {},
    props: {},
    setup() {
        defineMenu();
        return {}
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

</style>
